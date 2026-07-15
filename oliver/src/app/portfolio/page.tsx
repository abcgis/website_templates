import type { Metadata } from "next";
import { PortfolioGallery } from "@/components/portfolio/PortfolioGallery";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Photographer's portfolio. Wedding, portrait, and reportage photography.",
};

export default function PortfolioPage() {
  return <PortfolioGallery />;
}
