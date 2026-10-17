
import { NextResponse } from "next/server";
import {
  getPayPalAccessToken,
  PAYPAL_BASE_URL,
} from "@/lib/paypal";

const allowedCurrencies = ["USD", "EUR", "CHF"] as const;
type Currency = (typeof allowedCurrencies)[number];

type CreateOrderBody = {
  amount?: unknown;
  currency?: unknown;
};

type PayPalOrderResponse = {
  id?: string;
  name?: string;
  message?: string;
  details?: Array<{
    issue?: string;
    description?: string;
  }>;
};

export async function POST(request: Request) {
  try {
    let parsedBody: unknown;

    try {
      parsedBody = await request.json();
    } catch {
      return NextResponse.json(
        { error: "Invalid JSON request body." },
        { status: 400 }
      );
    }

    if (
      typeof parsedBody !== "object" ||
      parsedBody === null ||
      Array.isArray(parsedBody)
    ) {
      return NextResponse.json(
        { error: "Invalid request body." },
        { status: 400 }
      );
    }

    const body = parsedBody as CreateOrderBody;

    if (
      typeof body.currency !== "string" ||
      !allowedCurrencies.includes(body.currency as Currency)
    ) {
      return NextResponse.json(
        { error: "Supported PayPal currencies are USD, EUR and CHF." },
        { status: 400 }
      );
    }

    const currency = body.currency as Currency;

    if (
      (typeof body.amount !== "number" &&
        typeof body.amount !== "string") ||
      (typeof body.amount === "string" &&
        body.amount.trim() === "")
    ) {
      return NextResponse.json(
        { error: "A valid donation amount is required." },
        { status: 400 }
      );
    }

    const amount = Number(body.amount);

    if (
      !Number.isFinite(amount) ||
      amount < 1 ||
      amount > 10000 ||
      Math.round(amount * 100) / 100 !== amount
    ) {
      return NextResponse.json(
        {
          error:
            "Donation amount must be between 1 and 10,000 with no more than two decimal places.",
        },
        { status: 400 }
      );
    }

    const accessToken = await getPayPalAccessToken();

    let orderResponse: Response;

    try {
      orderResponse = await fetch(
        `${PAYPAL_BASE_URL}/v2/checkout/orders`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
            Prefer: "return=representation",
          },
          body: JSON.stringify({
            intent: "CAPTURE",
            purchase_units: [
              {
                description: "Donation to Utuhisaniwins",
                amount: {
                  currency_code: currency,
                  value: amount.toFixed(2),
                },
              },
            ],
          }),
          cache: "no-store",
        }
      );
    } catch (error) {
      console.error("PayPal order request failed:", {
        message:
          error instanceof Error ? error.message : String(error),
      });

      return NextResponse.json(
        { error: "Could not connect to PayPal to create the order." },
        {
          status: 502,
          headers: { "Cache-Control": "no-store" },
        }
      );
    }

    const rawResponse = await orderResponse.text();

    let orderData: PayPalOrderResponse;

    try {
      orderData = JSON.parse(rawResponse) as PayPalOrderResponse;
    } catch {
      console.error("PayPal returned invalid order JSON:", {
        status: orderResponse.status,
      });

      return NextResponse.json(
        { error: "PayPal returned an invalid order response." },
        {
          status: 502,
          headers: { "Cache-Control": "no-store" },
        }
      );
    }

    if (!orderResponse.ok || !orderData.id) {
      console.error("PayPal order creation failed:", {
        status: orderResponse.status,
        name: orderData.name,
        message: orderData.message,
        details: orderData.details,
      });

      return NextResponse.json(
        { error: "PayPal could not create the donation order." },
        {
          status: 502,
          headers: { "Cache-Control": "no-store" },
        }
      );
    }

    return NextResponse.json(
      { id: orderData.id },
      { headers: { "Cache-Control": "no-store" } }
    );
  } catch (error) {
    console.error("Create PayPal order failed:", {
      message:
        error instanceof Error ? error.message : String(error),
    });

    return NextResponse.json(
      {
        error:
          "An unexpected error occurred while creating your donation.",
      },
      {
        status: 500,
        headers: { "Cache-Control": "no-store" },
      }
    );
  }
}
