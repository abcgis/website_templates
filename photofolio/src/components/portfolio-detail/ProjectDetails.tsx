import Link from "next/link";
import { CheckCircleIcon } from "@/components/icons";

const STORY: string[] = [
  "Sarah and James celebrated their love with an intimate garden wedding in the heart of Napa Valley. Surrounded by rolling vineyards and golden sunlight, the day was filled with natural elegance, heartfelt vows, and joyful moments shared with their closest loved ones.",
  "The ceremony unfolded beneath a breathtaking floral arch bursting with garden roses and greenery. As the afternoon transitioned into golden hour, we captured romantic portraits of the couple among the vines, with soft light creating a dreamy, timeless atmosphere.",
  "The evening reception glowed under cascading string lights, featuring long tables adorned with candles, seasonal florals, and personal touches that reflected the couple’s refined yet warm style. The night ended with an emotional first dance and a sunset champagne toast overlooking the valley.",
];

const KEY_MOMENTS: string[] = [
  "Intimate ceremony for 80 guests",
  "Golden hour portraits among the vineyards",
  "Elegant reception under string lights",
  "Choreographed first dance",
  "Emotional father-daughter dance",
  "Sunset champagne toast with vineyard views",
];

const INCLUDED_SERVICES: string[] = [
  "Full day coverage",
  "Getting ready & details",
  "Ceremony + reception",
  "Golden hour portraits",
  "Private online gallery",
  "Print release",
];

const PROJECT_DETAILS: { label: string; value: string }[] = [
  { label: "Client", value: "Sarah & James Thompson" },
  { label: "Date", value: "January 15, 2026" },
  { label: "Location", value: "Napa Valley, CA" },
  { label: "Venue", value: "Silverado Vineyards" },
  { label: "Category", value: "Wedding" },
  { label: "Coverage", value: "8 hours" },
  { label: "Images Delivered", value: "360+" },
];

/**
 * Project details: story + key moments + included services on the left;
 * sidebar with project facts and an inquiry CTA on the right.
 */
export function ProjectDetails() {
  return (
    <section className="project-details-section">
      <div className="project-details-grid">
        <div className="project-description" data-aos="fade-up">
          <h2>The Story</h2>
          {STORY.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}

          <div className="project-highlights">
            <h3>Key Moments</h3>
            <ul>
              {KEY_MOMENTS.map((m) => (
                <li key={m}>{m}</li>
              ))}
            </ul>
          </div>

          <div className="included-services-card mt-5">
            <h3>Included Services</h3>
            <ul className="services-list">
              {INCLUDED_SERVICES.map((s) => (
                <li key={s}>
                  <CheckCircleIcon />
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <aside className="project-sidebar" data-aos="fade-up" data-aos-delay="200">
          <div className="sidebar-card mb-5">
            <h3>Project Details</h3>
            <dl className="detail-list">
              {PROJECT_DETAILS.map((d) => (
                <div className="detail-item" key={d.label}>
                  <dt>{d.label}</dt>
                  <dd>{d.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="sidebar-cta">
            <h3>Ready for Your Story?</h3>
            <p>{"Let’s capture your love in the same timeless way."}</p>
            <Link href="/contact-me" className="btn btn-primary">
              Inquire Now
            </Link>
          </div>
        </aside>
      </div>
    </section>
  );
}
