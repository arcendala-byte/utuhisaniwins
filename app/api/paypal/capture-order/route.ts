
import { NextResponse } from "next/server";
import {
  getPayPalAccessToken,
  PAYPAL_BASE_URL,
} from "@/lib/paypal";

type PayPalAmount = {
  currency_code?: string;
  value?: string;
};

type PayPalOrder = {
  id?: string;
  status?: string;
  purchase_units?: Array<{
    amount?: PayPalAmount;
    payee?: {
      merchant_id?: string;
    };
    payments?: {
      captures?: Array<{
        id?: string;
        status?: string;
        amount?: PayPalAmount;
      }>;
    };
  }>;
};

async function readPayPalResponse(response: Response) {
  const text = await response.text();

  try {
    return JSON.parse(text) as PayPalOrder & {
      name?: string;
      message?: string;
      details?: Array<{ description?: string }>;
    };
  } catch {
    throw new Error(
      `PayPal returned an invalid response (${response.status}).`
    );
  }
}

export async function POST(request: Request) {
  try {
    let body: { orderID?: unknown };

    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        { success: false, error: "Invalid request body." },
        { status: 400 }
      );
    }

    const orderID = body.orderID;

    if (
      typeof orderID !== "string" ||
      !/^[A-Z0-9-]{1,100}$/i.test(orderID)
    ) {
      return NextResponse.json(
        { success: false, error: "A valid PayPal order ID is required." },
        { status: 400 }
      );
    }

    const merchantID = process.env.PAYPAL_MERCHANT_ID?.trim();

    if (!merchantID) {
      console.error("PAYPAL_MERCHANT_ID is not configured.");

      return NextResponse.json(
        { success: false, error: "Payment verification is not configured." },
        { status: 500 }
      );
    }

    const accessToken = await getPayPalAccessToken();

    // 1. Retrieve the original order directly from PayPal.
    const orderResponse = await fetch(
      `${PAYPAL_BASE_URL}/v2/checkout/orders/${encodeURIComponent(orderID)}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        cache: "no-store",
      }
    );

    const order = await readPayPalResponse(orderResponse);

    if (!orderResponse.ok || order.id !== orderID) {
      console.error("PayPal order verification failed:", {
        status: orderResponse.status,
        name: order.name,
        message: order.message,
      });

      return NextResponse.json(
        { success: false, error: "Unable to verify the PayPal order." },
        { status: 502 }
      );
    }

    const units = order.purchase_units ?? [];

    if (units.length !== 1) {
      return NextResponse.json(
        { success: false, error: "Unexpected PayPal order contents." },
        { status: 400 }
      );
    }

    const originalUnit = units[0];
    const originalAmount = originalUnit.amount;
    const payeeID = originalUnit.payee?.merchant_id;

    // 2. Confirm the intended recipient and a valid original amount.
    if (
      !payeeID ||
      payeeID.toLowerCase() !== merchantID.toLowerCase()
    ) {
      console.error("PayPal recipient verification failed.");

      return NextResponse.json(
        { success: false, error: "The payment recipient could not be verified." },
        { status: 403 }
      );
    }

    if (
      !originalAmount?.currency_code ||
      !originalAmount.value ||
      !/^\d+(\.\d{1,2})?$/.test(originalAmount.value) ||
      !Number.isFinite(Number(originalAmount.value)) ||
      Number(originalAmount.value) <= 0
    ) {
      return NextResponse.json(
        { success: false, error: "Invalid donation amount in PayPal order." },
        { status: 400 }
      );
    }

    // 3. Capture the verified order.
    const captureResponse = await fetch(
      `${PAYPAL_BASE_URL}/v2/checkout/orders/${encodeURIComponent(orderID)}/capture`,
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

    const capturedOrder = await readPayPalResponse(captureResponse);

    if (!captureResponse.ok) {
      console.error("PayPal capture failed:", {
        status: captureResponse.status,
        name: capturedOrder.name,
        message: capturedOrder.message,
      });

      return NextResponse.json(
        {
          success: false,
          error:
            capturedOrder.details?.[0]?.description ||
            capturedOrder.message ||
            "PayPal could not capture this payment.",
        },
        { status: 502 }
      );
    }

    const captures =
      capturedOrder.purchase_units?.flatMap(
        (unit) => unit.payments?.captures ?? []
      ) ?? [];

    const completedCapture = captures.find(
      (capture) => capture.status === "COMPLETED"
    );

    if (
      capturedOrder.id !== orderID ||
      capturedOrder.status !== "COMPLETED" ||
      !completedCapture?.id ||
      !completedCapture.amount?.value ||
      !completedCapture.amount.currency_code
    ) {
      return NextResponse.json(
        { success: false, error: "PayPal has not confirmed a completed capture." },
        { status: 409 }
      );
    }

    // 4. Ensure the captured amount and currency match the original order.
    if (
      completedCapture.amount.value !== originalAmount.value ||
      completedCapture.amount.currency_code !== originalAmount.currency_code
    ) {
      console.error("PayPal capture does not match the original order.", {
        orderID,
        captureID: completedCapture.id,
      });

      return NextResponse.json(
        { success: false, error: "The captured payment does not match the original order." },
        { status: 409 }
      );
    }

    return NextResponse.json({
      success: true,
      status: "COMPLETED",
      orderID: capturedOrder.id,
      captureID: completedCapture.id,
      amount: completedCapture.amount.value,
      currency: completedCapture.amount.currency_code,
    });
  } catch (error) {
    console.error("Capture order failed:", {
      message: error instanceof Error ? error.message : String(error),
    });

    return NextResponse.json(
      {
        success: false,
        error: "An unexpected error occurred while confirming payment.",
      },
      { status: 500 }
    );
  }
}
