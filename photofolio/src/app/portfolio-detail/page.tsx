import { PortfolioDetailHero } from "@/components/portfolio-detail/PortfolioDetailHero";
import { GallerySlider } from "@/components/portfolio-detail/GallerySlider";
import { ProjectDetails } from "@/components/portfolio-detail/ProjectDetails";

export const metadata = {
  title: "Sarah & James Wedding",
  description:
    "Timeless wedding photography capturing Sarah & James's garden celebration in Napa Valley. Professional images of every heartfelt moment.",
};

export default function PortfolioDetailPage() {
  return (
    <div className="portfolio-detail container">
      <PortfolioDetailHero />
      <section className="portfolio-gallery-section mt-5">
        <GallerySlider />
      </section>
      <ProjectDetails />
    </div>
  );
}
