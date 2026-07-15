import type { ComponentType, SVGProps } from "react";
import Link from "next/link";
import {
  HeartIcon,
  UserIcon,
  CalendarDaysIcon,
  BriefcaseIcon,
  UserMultipleIcon,
  MountainsIcon,
  CheckIcon,
} from "@/components/icons";

type IconType = ComponentType<SVGProps<SVGSVGElement>>;

interface Service {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  icon: IconType;
  features: string[];
  price: string;
  ctaLabel: string;
  aosDelay?: number;
}

const SERVICES: Service[] = [
  {
    title: "Wedding Photography",
    description:
      "Capture every precious moment of your special day with our comprehensive wedding photography packages. From engagement shoots to the big day itself.",
    imageSrc: "/images/gallery/01.jpg",
    imageAlt: "Wedding Photography",
    icon: HeartIcon,
    features: [
      "Full day coverage",
      "Second photographer",
      "Edited high-res images",
      "Custom photo album",
    ],
    price: "From $2,500",
    ctaLabel: "Book Now",
  },
  {
    title: "Portrait Photography",
    description:
      "Professional portraits that capture your personality and style. Perfect for personal branding, family photos, or special occasions.",
    imageSrc: "/images/gallery/02.jpg",
    imageAlt: "Portrait Photography",
    icon: UserIcon,
    features: [
      "Studio or outdoor sessions",
      "Professional editing",
      "Multiple outfit changes",
      "Digital gallery",
    ],
    price: "From $350",
    ctaLabel: "Book Now",
    aosDelay: 100,
  },
  {
    title: "Event Photography",
    description:
      "Document your corporate events, parties, and celebrations with high-quality photography that captures the energy and atmosphere.",
    imageSrc: "/images/gallery/03.jpg",
    imageAlt: "Event Photography",
    icon: CalendarDaysIcon,
    features: [
      "Corporate events",
      "Private parties",
      "Quick turnaround",
      "Online gallery",
    ],
    price: "From $800",
    ctaLabel: "Book Now",
    aosDelay: 200,
  },
  {
    title: "Commercial Photography",
    description:
      "Professional product and brand photography for businesses. Elevate your marketing materials with stunning visuals.",
    imageSrc: "/images/gallery/04.jpg",
    imageAlt: "Commercial Photography",
    icon: BriefcaseIcon,
    features: [
      "Product photography",
      "Brand campaigns",
      "Commercial rights",
      "Fast delivery",
    ],
    price: "From $1,200",
    ctaLabel: "Book Now",
  },
  {
    title: "Family Photography",
    description:
      "Create lasting memories with beautiful family portraits. We specialize in making everyone feel comfortable and natural.",
    imageSrc: "/images/gallery/05.jpg",
    imageAlt: "Family Photography",
    icon: UserMultipleIcon,
    features: [
      "Extended family sessions",
      "Location of choice",
      "Print packages available",
      "Fun and relaxed",
    ],
    price: "From $450",
    ctaLabel: "Book Now",
    aosDelay: 100,
  },
  {
    title: "Landscape & Travel",
    description:
      "Stunning landscape and travel photography for personal collections, prints, or commercial use. Available for commissioned work.",
    imageSrc: "/images/gallery/06.jpg",
    imageAlt: "Landscape Photography",
    icon: MountainsIcon,
    features: [
      "Fine art prints",
      "Travel assignments",
      "Limited editions",
      "Licensing available",
    ],
    price: "Custom Quote",
    ctaLabel: "Inquire",
    aosDelay: 200,
  },
];

/**
 * Grid of 6 service cards. Each card has an image with an icon overlay and a
 * content area with title, description, feature list, price, and CTA. AOS
 * staggered delays repeat 0/100/200 across the two rows, matching the source.
 */
export function ServicesGrid() {
  return (
    <section className="services-grid">
      {SERVICES.map((service) => {
        const Icon = service.icon;
        return (
          <div
            key={service.title}
            className="service-card"
            data-aos="fade-up"
            data-aos-delay={service.aosDelay}
          >
            <div className="service-image">
              <img src={service.imageSrc} alt={service.imageAlt} />
              <div className="service-overlay">
                <div className="service-icon">
                  <Icon />
                </div>
              </div>
            </div>
            <div className="service-content">
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature) => (
                  <li key={feature}>
                    <CheckIcon /> {feature}
                  </li>
                ))}
              </ul>
              <div className="service-footer">
                <span className="service-price">{service.price}</span>
                <Link href="/contact-me" className="btn btn-primary">
                  {service.ctaLabel}
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}
