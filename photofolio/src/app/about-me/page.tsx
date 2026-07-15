import type { Metadata } from "next";
import { AboutCta } from "@/components/about/AboutCta";
import { AboutHero } from "@/components/about/AboutHero";
import { AboutIntro } from "@/components/about/AboutIntro";
import { AboutServices } from "@/components/about/AboutServices";
import { AboutStats } from "@/components/about/AboutStats";
import { Testimonials } from "@/components/about/Testimonials";

export const metadata: Metadata = {
  title: "About Me - Professional Photographer",
  description:
    "Meet the photographer behind Photofolio. Discover my passion for capturing authentic moments and creating timeless memories through photography.",
  keywords: [
    "photographer",
    "about",
    "biography",
    "photography journey",
    "creative vision",
  ],
};

/**
 * About page (`/about-me`). Composes the hero (outside the page wrapper) with
 * the intro, stats, services, testimonials, and CTA inside
 * `.about-me > .container.pt-9.pb-9`.
 */
export default function AboutMePage() {
  return (
    <>
      <AboutHero />
      <div className="about-me">
        <div className="container pt-9 pb-9">
          {/* Introduction */}
          <AboutIntro />
          {/* Stats */}
          <AboutStats />
          {/* What I Do */}
          <AboutServices />
          {/* Testimonials */}
          <Testimonials />
          {/* CTA */}
          <AboutCta />
        </div>
      </div>
    </>
  );
}
