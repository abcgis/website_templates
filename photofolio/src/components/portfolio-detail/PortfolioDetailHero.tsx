import Link from "next/link";
import { ArrowLeftIcon } from "@/components/icons";

/**
 * Detail-page hero: back link to the portfolio grid + project title block
 * (category, title, subtitle, meta). Mirrors portfolio-detail.html.
 */
export function PortfolioDetailHero() {
  return (
    <section className="portfolio-detail-hero pt-10 pb-5">
      <div className="back-navigation" data-aos="fade-right" data-aos-duration="800">
        <Link href="/portfolio" className="back-link">
          <ArrowLeftIcon />
          <span>Back to Portfolio</span>
        </Link>
      </div>

      <div className="project-header" data-aos="fade-up" data-aos-duration="900">
        <div className="project-header-content">
          <span className="project-category">Wedding</span>
          <h1 className="project-title">
            Sarah <span className="amp">&amp;</span> James
          </h1>
          <p className="project-subtitle">
            An intimate garden celebration surrounded by Napa Valley vineyards
          </p>
        </div>

        <div className="project-meta">
          <div className="meta-item">
            <span className="meta-label">Date</span>
            <span className="meta-value">January 15, 2026</span>
          </div>
          <div className="meta-item">
            <span className="meta-label">Location</span>
            <span className="meta-value">Napa Valley, California</span>
          </div>
          <div className="meta-item">
            <span className="meta-label">Guests</span>
            <span className="meta-value">80</span>
          </div>
        </div>
      </div>
    </section>
  );
}
