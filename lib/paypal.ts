
import "server-only";

const environment =
  process.env.PAYPAL_ENVIRONMENT?.trim().toLowerCase() ??
  "sandbox";

export const PAYPAL_BASE_URL =
  environment === "live"
    ? "https://api-m.paypal.com"
    : "https://api-m.sandbox.paypal.com";

export async function getPayPalAccessToken(): Promise<string> {
  const clientId = process.env.PAYPAL_CLIENT_ID;
  const clientSecret = process.env.PAYPAL_CLIENT_SECRET;

  if (!clientId || !clientSecret) {
    console.error("PayPal credentials are missing:", {
      clientIdPresent: Boolean(clientId),
      clientSecretPresent: Boolean(clientSecret),
      environment,
    });

    throw new Error("PayPal server credentials are not configured.");
  }

  const credentials = Buffer.from(
    `${clientId}:${clientSecret}`,
  ).toString("base64");

  let response: Response;

  try {
    response = await fetch(
      `${PAYPAL_BASE_URL}/v1/oauth2/token`,
      {
        method: "POST",
        headers: {
          Authorization: `Basic ${credentials}`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: "grant_type=client_credentials",
        cache: "no-store",
      },
    );
  } catch (error) {
    console.error("PayPal authentication network error:", {
      message:
        error instanceof Error ? error.message : String(error),
    });

    throw new Error("Unable to connect to PayPal authentication.");
  }

  const responseText = await response.text();

  let data: {
    access_token?: string;
    error?: string;
    error_description?: string;
  };

  try {
    data = JSON.parse(responseText);
  } catch {
    console.error("PayPal authentication returned invalid JSON:", {
      status: response.status,
      body: responseText.slice(0, 500),
    });

    throw new Error("PayPal returned an invalid authentication response.");
  }

  if (!response.ok || !data.access_token) {
    console.error("PayPal authentication failed:", {
      status: response.status,
      error: data.error,
      description: data.error_description,
    });

    throw new Error("Unable to authenticate with PayPal.");
  }

  return data.access_token;
}
