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
  title: "Clientlify — Client Management for Catering Businesses",
  description:
    "Every lead, event, and invoice in one place. Clientlify takes a catering inquiry from first form submission to post-event follow-up — built by a caterer, for caterers.",
  openGraph: {
    type: "website",
    siteName: "Clientlify",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Clientlify — catering business management" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
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
