"use client";

import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";

type PayPalCurrency = "USD" | "EUR" | "CHF";

type PayPalDonationButtonProps = {
  amount: number;
  currency: PayPalCurrency;
  onSuccess: (details: {
    amount: string;
    currency: string;
    captureID: string;
  }) => void;
};

export function PayPalDonationButton({
  amount,
  currency,
  onSuccess,
}: PayPalDonationButtonProps) {
  const clientId = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID;

  if (!clientId) {
    return (
      <p className="text-sm text-red-600">
        PayPal is not configured. Please set NEXT_PUBLIC_PAYPAL_CLIENT_ID
        in your .env.local file.
      </p>
    );
  }

  return (
    <PayPalScriptProvider
      options={{
        clientId,
        currency,
        intent: "capture",
      }}
    >
      <PayPalButtons
        style={{
          layout: "vertical",
          shape: "rect",
          label: "donate",
        }}
        createOrder={async () => {
          const response = await fetch("/api/paypal/create-order", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ amount, currency }),
          });

          const data = await response.json();

          if (!response.ok || !data.id) {
            throw new Error(data.error || "Unable to create PayPal order.");
          }

          return data.id;
        }}
      
onApprove={async (data) => {
  const response = await fetch("/api/paypal/capture-order", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ orderID: data.orderID }),
  });

  const result = await response.json();

  if (!response.ok || !result.success) {
    throw new Error(result.error || "Payment capture failed.");
  }

  if (
    result.status !== "COMPLETED" ||
    typeof result.captureID !== "string" ||
    !result.captureID ||
    typeof result.amount !== "string" ||
    typeof result.currency !== "string" ||
    result.currency !== currency ||
    !Number.isFinite(Number(result.amount)) ||
    Number(result.amount) !== amount
  ) {
    throw new Error(
      "The payment confirmation could not be verified. Please contact us before trying again."
    );
  }

  onSuccess({
    amount: result.amount,
    currency: result.currency,
    captureID: result.captureID,
  });
}}

        onError={(error) => {
          console.error("PayPal donation error:", error);
        }}
      />
    </PayPalScriptProvider>
  );
}
