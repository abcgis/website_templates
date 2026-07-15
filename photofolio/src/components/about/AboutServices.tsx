import type { ComponentType, SVGProps } from "react";
import {
  CalendarDaysIcon,
  CameraIcon,
  GalleryIcon,
  IdCardIcon,
} from "@/components/icons";

type Service = {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
  delay: string;
};

const SERVICES: Service[] = [
  {
    icon: CameraIcon,
    title: "Wedding Photography",
    description: "Capturing love stories from engagement to the big day",
    delay: "100",
  },
  {
    icon: IdCardIcon,
    title: "Portrait Sessions",
    description: "Professional portraits that reveal your personality",
    delay: "200",
  },
  {
    icon: GalleryIcon,
    title: "Family Moments",
    description: "Preserving precious memories with your loved ones",
    delay: "300",
  },
  {
    icon: CalendarDaysIcon,
    title: "Special Events",
    description: "Documenting celebrations and milestone occasions",
    delay: "400",
  },
];

/**
 * "What I Do" section: a centered heading block and a four-card grid of
 * photography services, each with an icon and a staggered AOS entrance.
 */
export function AboutServices() {
  return (
    <section className="about-services mt-10">
      <div className="text-center pb-6" data-aos="fade-down">
        <h2 className="section-heading">What I Do</h2>
        <p className="section-subheading">
          Specialized photography services tailored to your needs
        </p>
      </div>

      <div className="services-grid">
        {SERVICES.map((service) => {
          const Icon = service.icon;
          return (
            <div
              className="service-item"
              key={service.title}
              data-aos="fade-up"
              data-aos-delay={service.delay}
            >
              <div className="service-icon">
                <Icon />
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
