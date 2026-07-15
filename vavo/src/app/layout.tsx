import type { Metadata } from "next";
import { Mulish, Poppins } from "next/font/google";
import "./globals.css";
import { Preloader } from "@/components/Preloader";
import { VavoEffects } from "@/components/VavoEffects";
import { MagicCursor } from "@/components/MagicCursor";
import { MobileMenu } from "@/components/MobileMenu";
import { Sidebar } from "@/components/Sidebar";
import { FixedSection } from "@/components/FixedSection";

const mulish = Mulish({
  subsets: ["latin"],
  variable: "--font-mulish",
  style: ["normal", "italic"],
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vavo | Home",
  description:
    "Serena - Italian Wedding and Lifestyle photographer based in Barcelona, Spain.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${mulish.variable} ${poppins.variable}`}>
      <body>
        <Preloader />
        <div className="vavo_tm_all_wrap" data-color="crimson" data-magic-cursor="">
          <MobileMenu />
          <Sidebar />
          <FixedSection />
          <div className="vavo_tm_mainpart">
            <div className="mainpart_inner">{children}</div>
          </div>
          <MagicCursor />
        </div>
        <VavoEffects />
      </body>
    </html>
  );
}
