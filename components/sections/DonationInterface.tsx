
"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { FieldLabel, Input } from "@/components/ui/Input";
import {
  donationConfig,
  type DonationMethod,
  type DonationCurrency,
} from "@/lib/donation";
import { PayPalDonationButton } from "@/components/PayPalDonationButton";

type PaymentReceipt = {
  amount: string;
  currency: string;
  captureID: string;
};

export function DonationInterface() {
  const [currency, setCurrency] = useState<DonationCurrency>(
    donationConfig.currency
  );

  const initialCurrency = donationConfig.currencies.find(
    (c) => c.code === donationConfig.currency
  )!;

  const [selectedAmount, setSelectedAmount] = useState<number | null>(
    initialCurrency.amounts[1] ?? initialCurrency.amounts[0]
  );

  const [customAmount, setCustomAmount] = useState("");
  const [method, setMethod] = useState<DonationMethod>("card");
  const [showNotice, setShowNotice] = useState(false);
  const [receipt, setReceipt] = useState<PaymentReceipt | null>(null);

  const selectedCurrency = donationConfig.currencies.find(
    (c) => c.code === currency
  )!;

  const amount = customAmount.trim()
    ? Number(customAmount)
    : selectedAmount;

  const formatAmount = (value: number) =>
    new Intl.NumberFormat("en-US", {
      maximumFractionDigits: 2,
      minimumFractionDigits: 0,
    }).format(value);

  const validAmount =
    amount !== null &&
    Number.isFinite(amount) &&
    amount >= 1 &&
    amount <= 10000 &&
    Math.round(amount * 100) === amount * 100;

  const isInternationalCurrency =
    currency === "USD" ||
    currency === "EUR" ||
    currency === "CHF";

  const selectedMethod = donationConfig.methods.find(
    (m) => m.id === method
  );

  const handleCurrencyChange = (newCurrency: DonationCurrency) => {
    const nextCurrency = donationConfig.currencies.find(
      (c) => c.code === newCurrency
    )!;

    setCurrency(newCurrency);
    setSelectedAmount(
      nextCurrency.amounts[1] ?? nextCurrency.amounts[0]
    );
    setCustomAmount("");
    setShowNotice(false);
    setReceipt(null);
    setMethod(newCurrency === "KES" ? "mpesa" : "card");
  };

  const handleDonate = () => {
    setShowNotice(true);
  };

  return (
    <Card>
      <h2 className="type-headline text-charcoal-900">
        Choose an amount
      </h2>

      {/* Currency selector */}
      <div className="mt-6">
        <FieldLabel htmlFor="donation-currency">
          Donation currency
        </FieldLabel>

        <select
          id="donation-currency"
          value={currency}
          onChange={(e) =>
            handleCurrencyChange(
              e.target.value as DonationCurrency
            )
          }
          className="mt-2 w-full rounded-xl border border-charcoal-800/15 bg-cream/60 px-4 py-3.5 text-sm text-charcoal-900 outline-none focus:border-terracotta-500"
        >
          {donationConfig.currencies.map((c) => (
            <option key={c.code} value={c.code}>
              {c.label} ({c.code})
            </option>
          ))}
        </select>

        <p className="mt-2 text-xs text-charcoal-700/60">
          Select your preferred currency. Amounts are shown in
          that currency without automatic conversion.
        </p>
      </div>

      {/* Suggested amounts */}
      <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
        {selectedCurrency.amounts.map((value) => {
          const selected =
            selectedAmount === value && !customAmount;

          return (
            <button
              key={value}
              type="button"
              data-selected={selected}
              onClick={() => {
                setSelectedAmount(value);
                setCustomAmount("");
                setShowNotice(false);
                setReceipt(null);
              }}
              aria-pressed={selected}
              className={cn(
                "selection-pill rounded-xl border border-charcoal-800/15 py-3.5 text-sm font-medium tracking-tight",
                !selected &&
                  "bg-cream/60 text-charcoal-800 hover:border-terracotta-500/35 hover:bg-sand-50"
              )}
            >
              {selectedCurrency.symbol} {formatAmount(value)}
            </button>
          );
        })}
      </div>

      {/* Custom amount */}
      <div className="mt-6">
        <FieldLabel htmlFor="custom-amount">
          Custom amount ({currency})
        </FieldLabel>

        <Input
          id="custom-amount"
          type="number"
          min={1}
          max={10000}
          step="0.01"
          inputMode="decimal"
          value={customAmount}
          onChange={(e) => {
            setCustomAmount(e.target.value);
            setSelectedAmount(null);
            setShowNotice(false);
            setReceipt(null);
          }}
          placeholder={`Enter amount in ${currency}`}
        />

        {customAmount && !validAmount && (
          <p className="mt-2 text-xs text-red-700" role="alert">
            Enter an amount between 1 and 10,000 with at most
            two decimal places.
          </p>
        )}
      </div>

      {/* Payment methods */}
      <div className="mt-10">
        <p className="type-eyebrow mb-4 text-charcoal-700/75">
          Payment method
        </p>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {donationConfig.methods.map((m) => {
            const selected = method === m.id;

            const unavailableForCurrency =
              !m.supportedCurrencies.includes(currency);

            const disabled =
              !m.enabled || unavailableForCurrency;

            return (
              <button
                key={m.id}
                type="button"
                data-selected={selected}
                disabled={disabled}
                onClick={() => {
                  setMethod(m.id);
                  setShowNotice(false);
                  setReceipt(null);
                }}
                aria-pressed={selected}
                className={cn(
                  "selection-pill rounded-xl border border-charcoal-800/15 py-3.5 text-sm font-medium tracking-tight disabled:cursor-not-allowed disabled:opacity-50",
                  !selected &&
                    "bg-cream/60 text-charcoal-800 hover:border-charcoal-800/30 hover:bg-sand-50",
                  selected &&
                    "!bg-charcoal-800 !border-charcoal-800 !text-cream !shadow-none"
                )}
              >
                {m.label}

                <span className="mt-1 block text-[10px] font-normal uppercase tracking-wider opacity-70">
                  {unavailableForCurrency
                    ? `Unavailable for ${currency}`
                    : m.enabled
                      ? "Available"
                      : "Coming soon"}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Donation summary */}
      <div className="mt-10 border-t border-charcoal-800/10 pt-8">
        <div className="mb-6 flex items-baseline justify-between gap-4">
          <span className="type-eyebrow text-charcoal-700/75">
            Your donation
          </span>

          <span className="font-display text-2xl tracking-tight text-charcoal-900 sm:text-3xl">
            {amount !== null && validAmount
  ? `${selectedCurrency.symbol} ${formatAmount(amount)} ${currency}`
  : "—"}
          </span>
        </div>

        {/* PayPal Checkout */}
       
{amount !== null &&
  validAmount &&
  isInternationalCurrency &&
  method === "card" &&
  donationConfig.methods.find((m) => m.id === "card")?.enabled && (
    <PayPalDonationButton
      key={`${currency}-${amount}`}
      amount={amount}
      currency={currency}
      onSuccess={(details) => {
        setReceipt(details);
        setShowNotice(false);
      }}
    />
  )}


        {/* M-PESA / unavailable payments */}
        {(!isInternationalCurrency || method !== "card") && (
          <Button
            onClick={handleDonate}
            size="lg"
            className="w-full"
            disabled={!validAmount || !selectedMethod?.enabled}
          >
            {currency === "KES"
              ? "M-PESA coming soon"
              : "Payment method unavailable"}
          </Button>
        )}

        {/* Payment status */}
        {showNotice && !receipt && amount !== null && validAmount && (
  <div
    role="status"
    className="mt-6 rounded-xl border border-terracotta-500/30 bg-sand-50/90 p-5 text-sm text-charcoal-800"
  >
    <strong className="font-semibold">
      {donationConfig.comingSoonMessage}
    </strong>

    <p className="mt-2 leading-relaxed text-charcoal-700/85">
      No payment has been taken. Your donation is
      {` ${selectedCurrency.symbol} ${formatAmount(amount)} ${currency}`}.
      Online payments are available only after the relevant
      payment provider has been configured.
    </p>
  </div>
)}

        {receipt && (
          <div
            role="status"
            className="mt-6 rounded-xl border border-green-700/20 bg-green-50 p-5 text-sm text-green-900"
          >
            <strong className="font-semibold">
              Thank you for your donation!
            </strong>

            <p className="mt-2 leading-relaxed">
              PayPal confirmed a completed capture of{" "}
              {receipt.currency} {formatAmount(Number(receipt.amount))}.
            </p>

            <p className="mt-2 break-all text-xs">
              Capture reference: {receipt.captureID}
            </p>
          </div>
        )}

        <p className="mt-6 text-xs leading-relaxed text-charcoal-700/60">
          Card payments are processed through PayPal. We do not
          store your card details. A donation is confirmed only
          after the payment provider verifies the transaction.
        </p>
      </div>
    </Card>
  );
}
