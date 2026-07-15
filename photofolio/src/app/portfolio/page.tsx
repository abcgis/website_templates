import type { Metadata } from "next";
import { PortfolioHero } from "@/components/portfolio/PortfolioHero";
import { PortfolioGallery } from "@/components/portfolio/PortfolioGallery";

export const metadata: Metadata = {
  title: "Portfolio - Photography Gallery",
  description:
    "Explore my photography portfolio featuring weddings, portraits, landscapes, and events. A curated collection of my best work.",
  keywords: [
    "photography portfolio",
    "wedding photos",
    "portrait gallery",
    "professional photography",
  ],
};

export default function PortfolioPage() {
  return (
    <>
      <PortfolioHero />
      <PortfolioGallery />
    </>
  );
}
