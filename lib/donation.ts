/**
 * Donation configuration for Utuhisaniwins.
 *
 * Default currency: USD
 * Supported currencies: USD, EUR, CHF, KES
 *
 * Card payments use PayPal checkout.
 * M-PESA remains disabled until its integration is ready.
 */

export type DonationMethod = "card" | "mpesa";

export type DonationCurrency = "USD" | "EUR" | "CHF" | "KES";

export interface CurrencyConfig {
  code: DonationCurrency;
  label: string;
  symbol: string;
  amounts: number[];
  decimalPlaces: number;
}

export interface DonationPaymentMethod {
  id: DonationMethod;
  label: string;
  enabled: boolean;
  supportedCurrencies: DonationCurrency[];
}

export interface DonationConfig {
  currency: DonationCurrency;
  currencies: CurrencyConfig[];
  methods: DonationPaymentMethod[];
  paymentEnabled: boolean;
  comingSoonMessage: string;
}

export const donationConfig: DonationConfig = {
  currency: "USD",

  currencies: [
    {
      code: "USD",
      label: "US Dollar",
      symbol: "$",
      amounts: [25, 50, 100, 500, 1000],
      decimalPlaces: 2,
    },
    {
      code: "EUR",
      label: "Euro",
      symbol: "€",
      amounts: [25, 50, 100, 500, 1000],
      decimalPlaces: 2,
    },
    {
      code: "CHF",
      label: "Swiss Franc",
      symbol: "CHF",
      amounts: [25, 50, 100, 500, 1000],
      decimalPlaces: 2,
    },
    {
      code: "KES",
      label: "Kenyan Shilling",
      symbol: "KSh",
      amounts: [500, 1000, 2500, 5000, 10000, 25000],
      decimalPlaces: 2,
    },
  ],

  methods: [
    {
      id: "card",
      label: "Credit / Debit Card",
      enabled: true,
      supportedCurrencies: ["USD", "EUR", "CHF"],
    },
    {
      id: "mpesa",
      label: "M-PESA",
      enabled: false,
      supportedCurrencies: ["KES"],
    },
  ],

  // Enable the donation interface.
  // Actual payment success must still be verified by the server.
  paymentEnabled: true,

  comingSoonMessage:
    "Online donations are coming soon. Please contact us for alternative donation arrangements.",
};
