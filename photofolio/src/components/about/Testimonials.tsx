"use client";

import { useEffect, useRef, useState, type KeyboardEvent } from "react";
import { ChevronLeftIcon, StarFilledIcon } from "@/components/icons";

type Testimonial = {
  comment: string;
  name: string;
  business: string;
  image: string;
  imageAlt: string;
};

// Verbatim from the source HTML (smart quotes preserved).
const TESTIMONIALS: Testimonial[] = [
  {
    comment:
      "“Alex captured our wedding day perfectly! Every photo tells a story and brings back the emotions we felt. We couldn't be happier with the results.”",
    name: "Sarah & James",
    business: "Wedding Clients",
    image: "/images/testimonials/face-01.png",
    imageAlt: "Sarah & James",
  },
  {
    comment:
      "“Professional, creative, and incredibly talented. Alex made our family session fun and relaxed, and the photos turned out absolutely stunning!”",
    name: "The Martinez Family",
    business: "Family Portrait",
    image: "/images/testimonials/face-02.png",
    imageAlt: "The Martinez Family",
  },
  {
    comment:
      "“I've worked with many photographers, but Alex's eye for detail and ability to capture genuine moments is unmatched. Highly recommend!”",
    name: "Emily Chen",
    business: "Portrait Client",
    image: "/images/testimonials/face-03.png",
    imageAlt: "Emily Chen",
  },
  {
    comment:
      "“The engagement photos exceeded our expectations! Alex has a unique talent for making you feel comfortable in front of the camera.”",
    name: "Michael & Lisa",
    business: "Engagement Session",
    image: "/images/testimonials/face-01.png",
    imageAlt: "Michael & Lisa",
  },
  {
    comment:
      "“Working with Alex was an absolute pleasure. The portraits captured the essence perfectly. Professional and delivers beyond expectations!”",
    name: "Jessica Parker",
    business: "Corporate Headshots",
    image: "/images/testimonials/face-02.png",
    imageAlt: "Jessica Parker",
  },
  {
    comment:
      "“Our newborn photos are absolutely precious. Alex was so patient and gentle. We'll treasure these memories forever!”",
    name: "David & Amanda",
    business: "Newborn Photography",
    image: "/images/testimonials/face-03.png",
    imageAlt: "David & Amanda",
  },
];

const VISIBLE = 3;

/**
 * Testimonials carousel. All six cards render in `.testimonials-grid`; the
 * `.testimonial-arrows` buttons shift the visible three-card window left/right.
 *
 * Implementation: the grid is switched to `justify-content: flex-start` (inline)
 * so cards lay out left-to-right and the window starts at the first card. A
 * uniform `translateX(-active * step)` is applied to every card, where `step`
 * is a measured card width + gap (responsive). The ported CSS already sets
 * `transition: all .3s ease-in-out` on `.testimonial-card`, so the shift
 * animates smoothly. `overflow: hidden` on the grid clips the off-screen cards.
 *
 * This mirrors the intent of `comments.js` (three visible, arrow cycling)
 * without its DOM cloning/absolute-positioning bookkeeping.
 */
export function Testimonials() {
  const [active, setActive] = useState(0);
  const [step, setStep] = useState(0);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    const measure = () => {
      const firstCard = grid.querySelector<HTMLElement>(".testimonial-card");
      if (!firstCard) return;
      const gap = Number.parseFloat(getComputedStyle(grid).gap) || 0;
      setStep(firstCard.offsetWidth + gap);
    };

    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const max = Math.max(0, TESTIMONIALS.length - VISIBLE);
  const goLeft = () => setActive((i) => (i <= 0 ? max : i - 1));
  const goRight = () => setActive((i) => (i >= max ? 0 : i + 1));

  const onActivate =
    (fn: () => void) => (e: KeyboardEvent<HTMLDivElement>) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        fn();
      }
    };

  return (
    <section className="testimonials">
      <div className="text-center pb-5" data-aos="fade-down">
        <h2 className="section-heading">What Clients Say</h2>
        <p className="section-subheading">
          Real experiences from wonderful people
        </p>
      </div>

      <div className="testimonial-box" data-aos="fade-up">
        <div
          className="testimonials-grid"
          ref={gridRef}
          style={{ justifyContent: "flex-start" }}
        >
          {TESTIMONIALS.map((t) => (
            <div
              className="testimonial-card"
              key={t.name}
              style={{
                visibility: "visible",
                transform: `translateX(${-active * step}px)`,
              }}
            >
              <div className="stars">
                <StarFilledIcon />
                <StarFilledIcon />
                <StarFilledIcon />
                <StarFilledIcon />
                <StarFilledIcon />
              </div>
              <p className="comment">{t.comment}</p>
              <div className="testimonial-client">
                <div className="testimonial-image">
                  <img className="image" src={t.image} alt={t.imageAlt} />
                </div>
                <div className="testimonial-text">
                  <span className="name">{t.name}</span>
                  <span className="business">{t.business}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="testimonial-arrows">
          <div
            className="arrows left"
            role="button"
            aria-label="Previous testimonials"
            tabIndex={0}
            onClick={goLeft}
            onKeyDown={onActivate(goLeft)}
          >
            <ChevronLeftIcon />
          </div>
          <div
            className="arrows right"
            role="button"
            aria-label="Next testimonials"
            tabIndex={0}
            onClick={goRight}
            onKeyDown={onActivate(goRight)}
          >
            <ChevronLeftIcon />
          </div>
        </div>
      </div>
    </section>
  );
}
