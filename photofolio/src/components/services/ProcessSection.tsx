import type { ComponentType, SVGProps } from "react";
import {
  CommentIcon,
  CalendarDaysIcon,
  CameraIcon,
  DownloadIcon,
} from "@/components/icons";

type IconType = ComponentType<SVGProps<SVGSVGElement>>;

interface ProcessStep {
  number: string;
  title: string;
  description: string;
  icon: IconType;
  aosDelay?: number;
}

const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    title: "Consultation",
    description:
      "We discuss your vision, needs, and preferences to create the perfect photography plan.",
    icon: CommentIcon,
  },
  {
    number: "02",
    title: "Booking",
    description:
      "Choose your package, date, and location. We'll confirm all details and schedule.",
    icon: CalendarDaysIcon,
    aosDelay: 100,
  },
  {
    number: "03",
    title: "Photoshoot",
    description:
      "Relax and enjoy the session while we capture authentic, beautiful moments.",
    icon: CameraIcon,
    aosDelay: 200,
  },
  {
    number: "04",
    title: "Delivery",
    description:
      "Receive your professionally edited photos through a private online gallery.",
    icon: DownloadIcon,
    aosDelay: 300,
  },
];

/**
 * "How It Works" process section: four numbered steps (Consultation, Booking,
 * Photoshoot, Delivery) with staggered AOS delays of 0/100/200/300.
 */
export function ProcessSection() {
  return (
    <section className="process-section" data-aos="fade-up">
      <h2 className="section-title">How It Works</h2>
      <p className="section-description">
        Simple steps to capture your perfect moments
      </p>

      <div className="process-grid">
        {PROCESS_STEPS.map((step) => {
          const Icon = step.icon;
          return (
            <div
              key={step.number}
              className="process-step"
              data-aos="fade-up"
              data-aos-delay={step.aosDelay}
            >
              <div className="step-number">{step.number}</div>
              <div className="step-icon">
                <Icon />
              </div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-description">{step.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
