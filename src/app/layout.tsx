import type { Metadata } from "next";
import { Schibsted_Grotesk, Hanken_Grotesk } from "next/font/google";
import "./globals.css";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import AnimateIn from "@/components/AnimateIn";

const schibsted = Schibsted_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-schibsted",
  display: "swap",
});

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-hanken",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://clientlify.com"),
  title: "Clientlify | Client Management for Event Businesses",
  description:
    "Every lead, event, and invoice in one place. Clientlify takes an inquiry from first form submission to post-event follow-up, built for catering, rentals, and every event-based business.",
  openGraph: {
    type: "website",
    siteName: "Clientlify",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Clientlify: event business management" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${schibsted.variable} ${hanken.variable}`}>
      <body style={{ fontFamily: "var(--font-hanken, Hanken Grotesk), system-ui, sans-serif" }}>
        <AnimateIn />
        <SiteNav />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
