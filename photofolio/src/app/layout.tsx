import type { Metadata } from "next";
import { Inter, Poppins, Playfair_Display } from "next/font/google";
import "./globals.css";
import { AosInit } from "@/components/AosInit";
import { PageLoader } from "@/components/PageLoader";
import { SiteHeader } from "@/components/SiteHeader";
import { ScrollToTop } from "@/components/ScrollToTop";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Photofolio - Professional Photography Portfolio",
    template: "%s | Photofolio",
  },
  description:
    "Capturing life's most beautiful moments through the lens. Professional photography services for weddings, portraits, events, and more.",
  keywords: [
    "photography",
    "portfolio",
    "photographer",
    "wedding photography",
    "portrait photography",
    "professional photos",
  ],
  icons: { icon: "/images/ico-photofolio.png" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${poppins.variable} ${playfair.variable}`}
    >
      <body>
        <AosInit />
        <PageLoader />
        <SiteHeader />
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
