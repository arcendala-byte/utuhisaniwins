
"use client";

import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import type { ReactNode } from "react";

export function PayPalProvider({ children }: { children: ReactNode }) {
  const paypalOptions = {
    clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID ?? "",
    currency: "USD",
    intent: "capture",
  };

  return (
    <PayPalScriptProvider options={paypalOptions}>
      {children}
    </PayPalScriptProvider>
  );
}
