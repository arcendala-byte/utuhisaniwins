
import { NextResponse } from "next/server";
import {
  getPayPalAccessToken,
  PAYPAL_BASE_URL,
} from "@/lib/paypal";

const allowedCurrencies = ["USD", "EUR", "CHF"] as const;

type PayPalAmount = {
  currency_code?: string;
  value?: string;
};

type PayPalCapture = {
  id?: string;
  status?: string;
  amount?: PayPalAmount;
};

type PayPalOrder = {
  id?: string;
  status?: string;
  name?: string;
  message?: string;
  details?: Array<{
    description?: string;
  }>;
  purchase_units?: Array<{
    amount?: PayPalAmount;
    payee?: {
      merchant_id?: string;
    };
    payments?: {
      captures?: PayPalCapture[];
    };
  }>;
};

async function readPayPalResponse(
  response: Response
): Promise<PayPalOrder> {
  const text = await response.text();

  try {
    return JSON.parse(text) as PayPalOrder;
  } catch {
    throw new Error(
      `PayPal returned an invalid response (${response.status}).`
    );
  }
}

function jsonError(error: string, status: number) {
  return NextResponse.json(
    {
      success: false,
      error,
    },
    {
      status,
      headers: {
        "Cache-Control": "no-store",
      },
    }
  );
}

export async function POST(request: Request) {
  try {
    // Parse and validate the request body.
    let parsedBody: unknown;

    try {
      parsedBody = await request.json();
    } catch {
      return jsonError("Invalid request body.", 400);
    }

    if (
      typeof parsedBody !== "object" ||
      parsedBody === null ||
      Array.isArray(parsedBody)
    ) {
      return jsonError("Invalid request body.", 400);
    }

    const body = parsedBody as {
      orderID?: unknown;
    };

    if (
      typeof body.orderID !== "string" ||
      !/^[A-Z0-9-]{1,100}$/i.test(body.orderID)
    ) {
      return jsonError(
        "A valid PayPal order ID is required.",
        400
      );
    }

    // Declare orderID only once, after validation.
    const orderID = body.orderID;

    const merchantID =
      process.env.PAYPAL_MERCHANT_ID?.trim();

    if (!merchantID) {
      console.error(
        "PAYPAL_MERCHANT_ID is not configured."
      );

      return jsonError(
        "Payment verification is not configured.",
        500
      );
    }

    const accessToken = await getPayPalAccessToken();

    async function getOrder(): Promise<{
      response: Response;
      order: PayPalOrder;
    }> {
      const response = await fetch(
        `${PAYPAL_BASE_URL}/v2/checkout/orders/${encodeURIComponent(
          orderID
        )}`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
          },
          cache: "no-store",
        }
      );

      return {
        response,
        order: await readPayPalResponse(response),
      };
    }

    // Always retrieve the order from PayPal.
    // Do not trust payment totals supplied by the browser.
    const initial = await getOrder();

    if (
      !initial.response.ok ||
      initial.order.id !== orderID
    ) {
      console.error("PayPal order verification failed:", {
        status: initial.response.status,
        name: initial.order.name,
        message: initial.order.message,
      });

      return jsonError(
        "Unable to verify the PayPal order.",
        502
      );
    }

    const units = initial.order.purchase_units ?? [];

    if (units.length !== 1) {
      return jsonError(
        "Unexpected PayPal order contents.",
        400
      );
    }

    const originalUnit = units[0];
    const originalAmount = originalUnit.amount;
    const originalCurrency =
      originalAmount?.currency_code;
    const payeeID =
      originalUnit.payee?.merchant_id;

    // Verify the intended payment recipient.
    if (
      !payeeID ||
      payeeID.toLowerCase() !== merchantID.toLowerCase()
    ) {
      console.error(
        "PayPal recipient verification failed."
      );

      return jsonError(
        "The payment recipient could not be verified.",
        403
      );
    }

    // Validate the order's original amount and currency.
    if (
      !originalCurrency ||
      !allowedCurrencies.includes(
        originalCurrency as (typeof allowedCurrencies)[number]
      ) ||
      typeof originalAmount?.value !== "string" ||
      !/^\d+(\.\d{1,2})?$/.test(originalAmount.value) ||
      !Number.isFinite(Number(originalAmount.value)) ||
      Number(originalAmount.value) < 1 ||
      Number(originalAmount.value) > 10000
    ) {
      return jsonError(
        "Invalid donation amount or currency in PayPal order.",
        400
      );
    }

    // Reuse a completed order when a previous capture succeeded
    // but the browser did not receive its response.
    let capturedOrder = initial.order;

    if (capturedOrder.status !== "COMPLETED") {
      const captureResponse = await fetch(
        `${PAYPAL_BASE_URL}/v2/checkout/orders/${encodeURIComponent(
          orderID
        )}/capture`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
            Prefer: "return=representation",
          },
          body: "{}",
          cache: "no-store",
        }
      );

      let captureResult: PayPalOrder;

      try {
        captureResult =
          await readPayPalResponse(captureResponse);
      } catch {
        // A malformed response does not prove that capture failed.
        let retryLookup: {
          response: Response;
          order: PayPalOrder;
        };

        try {
          retryLookup = await getOrder();
        } catch {
          return jsonError(
            "Payment status is uncertain. Please check your PayPal account before retrying.",
            502
          );
        }

        if (
          !retryLookup.response.ok ||
          retryLookup.order.id !== orderID
        ) {
          return jsonError(
            "Payment status is uncertain. Please check your PayPal account before retrying.",
            502
          );
        }

        capturedOrder = retryLookup.order;
        captureResult = retryLookup.order;
      }

      if (captureResponse.ok) {
        capturedOrder = captureResult;
      } else {
        // Verify the order's actual status after a failed capture request.
        let retryLookup: {
          response: Response;
          order: PayPalOrder;
        };

        try {
          retryLookup = await getOrder();
        } catch {
          return jsonError(
            "Payment status is uncertain. Please check your PayPal account before retrying.",
            502
          );
        }

        if (
          !retryLookup.response.ok ||
          retryLookup.order.id !== orderID
        ) {
          console.error(
            "Unable to verify order after capture response:",
            {
              status: captureResponse.status,
            }
          );

          return jsonError(
            "Payment status is uncertain. Please check your PayPal account before retrying.",
            502
          );
        }

        capturedOrder = retryLookup.order;

        if (capturedOrder.status !== "COMPLETED") {
          console.error(
            "PayPal capture did not complete:",
            {
              status: captureResponse.status,
              name: captureResult.name,
              message: captureResult.message,
            }
          );

          return jsonError(
            "PayPal has not confirmed a completed payment. Please check the payment status before trying again.",
            409
          );
        }
      }
    }

    // Confirm that PayPal reports one completed purchase unit.
    const finalUnits =
      capturedOrder.purchase_units ?? [];

    if (
      capturedOrder.id !== orderID ||
      capturedOrder.status !== "COMPLETED" ||
      finalUnits.length !== 1
    ) {
      return jsonError(
        "PayPal has not confirmed a completed capture.",
        409
      );
    }

    const finalUnit = finalUnits[0];
    const captures =
      finalUnit.payments?.captures ?? [];

    const completedCapture = captures.find(
      (capture) => capture.status === "COMPLETED"
    );

    if (
      !completedCapture?.id ||
      typeof completedCapture.amount?.value !== "string" ||
      typeof completedCapture.amount.currency_code !== "string"
    ) {
      return jsonError(
        "PayPal has not confirmed a completed capture.",
        409
      );
    }

    // Verify the recipient again against the completed order.
    const finalPayeeID =
      finalUnit.payee?.merchant_id;

    if (
      !finalPayeeID ||
      finalPayeeID.toLowerCase() !== merchantID.toLowerCase()
    ) {
      console.error(
        "PayPal capture recipient verification failed."
      );

      return jsonError(
        "The payment recipient could not be verified.",
        403
      );
    }

    // Ensure the captured amount and currency match the original order.
    if (
      completedCapture.amount.value !== originalAmount.value ||
      completedCapture.amount.currency_code !== originalCurrency ||
      finalUnit.amount?.value !== originalAmount.value ||
      finalUnit.amount.currency_code !== originalCurrency
    ) {
      console.error(
        "PayPal capture does not match the original order.",
        {
          orderID,
          captureID: completedCapture.id,
        }
      );

      return jsonError(
        "The captured payment does not match the original order.",
        409
      );
    }

    return NextResponse.json(
      {
        success: true,
        status: "COMPLETED",
        orderID: capturedOrder.id,
        captureID: completedCapture.id,
        amount: completedCapture.amount.value,
        currency:
          completedCapture.amount.currency_code,
      },
      {
        headers: {
          "Cache-Control": "no-store",
        },
      }
    );
  } catch (error) {
    console.error("Capture order failed:", {
      message:
        error instanceof Error
          ? error.message
          : String(error),
    });

    return jsonError(
      "An unexpected error occurred while confirming payment.",
      500
    );
  }
}
