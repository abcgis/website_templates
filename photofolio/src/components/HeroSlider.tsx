"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";

const SLIDES = [
  { src: "/images/hero/slide1.png", alt: "Photography Portfolio 1" },
  { src: "/images/hero/slide2.png", alt: "Photography Portfolio 2" },
  { src: "/images/hero/slide3.png", alt: "Photography Portfolio 3" },
  { src: "/images/hero/slide4.png", alt: "Photography Portfolio 4" },
  { src: "/images/hero/slide5.png", alt: "Photography Portfolio 5" },
];

const SLIDE_DELAY = 7000;
const MANUAL_DELAY = 10000;
const TRANSITION_MS = 1000;

/**
 * Fullscreen hero slider. Behavior ported from hero-slider.js:
 *  - auto-advance every 7s (10s after manual interaction)
 *  - direction-aware slide-in/slide-out animations (1s)
 *  - prev/next buttons, dot navigation, arrow keys, touch swipe
 *  - pause on hover
 */
export function HeroSlider() {
  const len = SLIDES.length;
  const [current, setCurrent] = useState(0);
  const [previous, setPrevious] = useState<number | null>(null);
  const [dir, setDir] = useState<"left" | "right">("left");

  const currentRef = useRef(0);
  const animatingRef = useRef(false);
  const manualRef = useRef(false);
  const autoRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const go = useCallback(
    (to: number) => {
      if (animatingRef.current) return;
      const from = currentRef.current;
      if (to === from) return;
      const last = len - 1;
      let d: "left" | "right";
      if (from === last && to === 0) d = "left";
      else if (from === 0 && to === last) d = "right";
      else if (to > from) d = "left";
      else d = "right";

      animatingRef.current = true;
      setPrevious(from);
      setDir(d);
      currentRef.current = to;
      setCurrent(to);

      window.setTimeout(() => {
        setPrevious(null);
        animatingRef.current = false;
      }, TRANSITION_MS);
    },
    [len],
  );

  const scheduleAuto = useCallback(() => {
    if (autoRef.current) clearTimeout(autoRef.current);
    const delay = manualRef.current ? MANUAL_DELAY : SLIDE_DELAY;
    autoRef.current = setTimeout(() => {
      manualRef.current = false;
      go((currentRef.current + 1) % len);
    }, delay);
  }, [go, len]);

  const interact = useCallback(() => {
    manualRef.current = true;
    scheduleAuto();
  }, [scheduleAuto]);

  const next = useCallback(() => go((currentRef.current + 1) % len), [go, len]);
  const prev = useCallback(
    () => go((currentRef.current - 1 + len) % len),
    [go, len],
  );

  // Start / restart auto-advance whenever the active slide changes.
  useEffect(() => {
    scheduleAuto();
    return () => {
      if (autoRef.current) clearTimeout(autoRef.current);
    };
  }, [current, scheduleAuto]);

  // Keyboard navigation.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        next();
        interact();
      } else if (e.key === "ArrowLeft") {
        prev();
        interact();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [next, prev, interact]);

  // Touch swipe.
  useEffect(() => {
    let startX = 0;
    const onStart = (e: TouchEvent) => {
      startX = e.changedTouches[0].screenX;
    };
    const onEnd = (e: TouchEvent) => {
      const diff = startX - e.changedTouches[0].screenX;
      if (Math.abs(diff) > 50) {
        if (diff > 0) next();
        else prev();
        interact();
      }
    };
    const el = wrapperRef.current;
    el?.addEventListener("touchstart", onStart, { passive: true });
    el?.addEventListener("touchend", onEnd, { passive: true });
    return () => {
      el?.removeEventListener("touchstart", onStart);
      el?.removeEventListener("touchend", onEnd);
    };
  }, [next, prev, interact]);

  const slideClass = (i: number) => {
    if (i === current)
      return previous !== null ? `slide active slide-in-${dir}` : "slide active";
    if (i === previous) return `slide active slide-out-${dir}`;
    return "slide";
  };

  return (
    <section className="hero-slider">
      <div
        className="slider-wrapper"
        ref={wrapperRef}
        onMouseEnter={() => {
          if (autoRef.current) clearTimeout(autoRef.current);
        }}
        onMouseLeave={() => scheduleAuto()}
      >
        {SLIDES.map((s, i) => (
          <div key={s.src} className={slideClass(i)}>
            <img src={s.src} alt={s.alt} className="slide-image" />
            <div className="slide-overlay" />
          </div>
        ))}
      </div>

      <div className="hero-content">
        <div className="hero-text">
          <h1
            className="hero-title"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            PHOTOFOLIO
          </h1>
          <p
            className="hero-subtitle"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            Capturing Moments, Creating Memories
          </p>
          <div
            className="hero-cta"
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="1000"
          >
            <Link href="/portfolio" className="btn btn-primary">
              View Portfolio
            </Link>
            <Link href="/contact-me" className="btn btn-outline">
              Get in Touch
            </Link>
          </div>
        </div>
      </div>

      <div className="slider-nav">
        <button
          type="button"
          className="slider-btn slider-prev"
          aria-label="Previous slide"
          onClick={() => {
            prev();
            interact();
          }}
        >
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
        <button
          type="button"
          className="slider-btn slider-next"
          aria-label="Next slide"
          onClick={() => {
            next();
            interact();
          }}
        >
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>

      <div className="slider-dots">
        {SLIDES.map((s, i) => (
          <button
            key={s.src}
            type="button"
            className={`dot${i === current ? " active" : ""}`}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => {
              go(i);
              interact();
            }}
          />
        ))}
      </div>
    </section>
  );
}
