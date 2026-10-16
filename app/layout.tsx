import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingDonate } from "@/components/layout/FloatingDonate";
// 1. Import your custom wrapper instead of the raw SDK
import { PayPalProvider } from "@/components/providers/PayPalProvider";

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://utuhisaniwins.org"),
  title: {
    default:
      "Utuhisaniwins | Empowering Maasai Girls Through Education & Healthcare",
    template: "%s | Utuhisaniwins",
  },
  description:
    "Utuhisaniwins works to expand access to education and healthcare for Maasai girls and their communities in Kenya. Tenebo We Smile.",
  keywords: [
    "Maasai girls",
    "Kenya NGO",
    "girls education",
    "healthcare access",
    "Kajiado",
    "Utuhisaniwins",
    "empowerment",
  ],
  openGraph: {
    title: "Utuhisaniwins | Empowering Maasai Girls",
    description:
      "Together, we can open doors to education, healthcare and opportunity for Maasai girls.",
    type: "website",
    locale: "en_KE",
    siteName: "Utuhisaniwins",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={sans.variable}>
      <body className="flex min-h-screen flex-col bg-white text-ink antialiased">
        {/* 2. Wrap your layout tree inside your clean client wrapper */}
        <PayPalProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <FloatingDonate />
        </PayPalProvider>
      </body>
    </html>
  );
}