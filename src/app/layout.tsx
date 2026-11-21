import type { Metadata } from "next";
import "@fontsource-variable/inter";
import "@fontsource-variable/plus-jakarta-sans";
import "@fontsource-variable/jetbrains-mono";
import "./globals.css";
import { siteConfig } from "@/data/courseData";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://example.com"
  ),
  title: `${siteConfig.courseName} — Master the Market Beyond the Candles`,
  description:
    "Advanced Order Flow, Depth of Market (DOM), Footprint Charts, Liquidity & Absorption trading education. Structured 8-module curriculum from auction basics to disciplined execution.",
  keywords: [
    "Order Flow Trading Course",
    "Depth of Market Course",
    "DOM Trading",
    "Footprint Charts",
    "Liquidity Analysis",
    "Market Delta",
    "Volume Imbalances",
    "Market Microstructure Education",
  ],
  openGraph: {
    title: `${siteConfig.courseName} | ${siteConfig.brandName}`,
    description:
      "Understand real market activity with Order Flow, DOM, Footprint Charts, and Liquidity Analysis. Structured beginner-to-advanced trading education.",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "/images/og-cover.jpg",
        width: 1200,
        height: 630,
        alt: "Order Flow & DOM Mastery — Advanced Trading Education",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.courseName} — Master the Market Beyond the Candles`,
    description:
      "Structured Order Flow, DOM, Footprint & Liquidity Analysis trading education.",
    images: ["/images/og-cover.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-[#0B1220] antialiased">
        {children}
      </body>
    </html>
  );
}
