import type { Metadata } from "next";
import { ServicesHero } from "@/components/services/ServicesHero";
import { ServicesIntro } from "@/components/services/ServicesIntro";
import { ServicesGrid } from "@/components/services/ServicesGrid";
import { PricingPlans } from "@/components/services/PricingPlans";
import { ProcessSection } from "@/components/services/ProcessSection";
import { ServicesCta } from "@/components/services/ServicesCta";

export const metadata: Metadata = {
  title: "Services - Professional Photography",
  description:
    "Explore our professional photography services including weddings, portraits, events, and commercial photography. Premium packages tailored to your needs.",
};

/**
 * /services page. The hero sits outside the `.services > .container` wrapper;
 * all other sections render inside it, matching the source HTML structure.
 */
export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <div className="services">
        <div className="container">
          <ServicesIntro />
          <ServicesGrid />
          <PricingPlans />
          <ProcessSection />
          <ServicesCta />
        </div>
      </div>
    </>
  );
}
