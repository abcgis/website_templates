"use client";

import { useEffect, useRef, useState } from "react";

type Stat = { value: string; label: string };

const STATS: Stat[] = [
  { value: "10+", label: "Years Experience" },
  { value: "500+", label: "Happy Clients" },
  { value: "1200+", label: "Photo Sessions" },
  { value: "15+", label: "Awards Won" },
];

const DURATION = 1500;

/**
 * A single stat number that counts up from 0 to its target when scrolled into
 * view. Parses the leading integer from `value` and preserves the trailing
 * suffix (e.g. "+"). Respects `prefers-reduced-motion` (shows the final value
 * immediately). Mirrors the intent of `animate-counters.js`.
 */
function StatNumber({ value }: { value: string }) {
  const match = value.match(/^(\d+)(.*)$/);
  const target = match ? Number.parseInt(match[1], 10) : 0;
  const suffix = match ? match[2] : "";

  // Start at the final value so SSR / no-JS / pre-scroll shows the real number
  // (matching the source, which hardcodes e.g. "10+" and animates FROM 0 on
  // scroll). The count-up resets to 0 then animates back to target on view.
  const [display, setDisplay] = useState(target);
  const ref = useRef<HTMLHeadingElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && !started.current) {
            started.current = true;
            observer.unobserve(el);

            if (prefersReduced) {
              setDisplay(target);
              return;
            }

            // Reset to 0 and count up to the target.
            setDisplay(0);
            const start = performance.now();
            const tick = (now: number) => {
              const progress = Math.min((now - start) / DURATION, 1);
              // easeOutCubic for a natural deceleration.
              const eased = 1 - Math.pow(1 - progress, 3);
              setDisplay(Math.round(target * eased));
              if (progress < 1) {
                requestAnimationFrame(tick);
              } else {
                setDisplay(target);
              }
            };
            requestAnimationFrame(tick);
          }
        }
      },
      { threshold: 0.3 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return (
    <h3 className="stat-number" data-counter="" ref={ref}>
      {display}
      {suffix}
    </h3>
  );
}

/**
 * Stats strip: four counters that animate when the section enters the viewport.
 */
export function AboutStats() {
  return (
    <section className="about-stats mt-9" data-aos="fade-up">
      <div className="stats-grid">
        {STATS.map((stat) => (
          <div className="stat-item" key={stat.label}>
            <StatNumber value={stat.value} />
            <p className="stat-label">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
