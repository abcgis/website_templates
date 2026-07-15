import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import "aos/dist/aos.css";
import "@/styles/oliver.css";
import { AosInit } from "@/components/AosInit";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Oliver | Portfolio",
    template: "%s | Oliver Williams",
  },
  description:
    "Official website of a photographer. Portrait, wedding, and reportage photography.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={montserrat.variable}>
      <body>
        <AosInit />
        <SiteHeader />
        <main className="main-content">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
