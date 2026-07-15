"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { PauseIcon, PlayIcon } from "@/components/icons";

const SLIDES = [
  { src: "/images/gallery/01.jpg", alt: "First dance under string lights" },
  { src: "/images/gallery/02.jpg", alt: "Reception table details" },
  { src: "/images/gallery/03.jpg", alt: "Golden hour couple portrait in vineyard" },
  { src: "/images/gallery/04.jpg", alt: "Close-up of wedding rings and flowers" },
  { src: "/images/gallery/05.jpg", alt: "Sunset champagne toast with vineyard view" },
  { src: "/images/gallery/06.jpg", alt: "Sarah and James wedding ceremony under floral arch" },
];

const SLIDE_DELAY = 6000;
const SWIPE_THRESHOLD = 60;

/**
 * Gallery slider for the portfolio detail page. Behavior ported from
 * hero-detail-slider.js: 6s auto-advance, thumbnail + keyboard + swipe nav,
 * play/pause toggle, pause-on-hover, pause when tab hidden.
 *
 * Deviation: the original JS never removes `active` from the outgoing slide
 * (a template bug that shows the wrong image when navigating backward). Here
 * only the current slide carries `active`, so the opacity crossfade is correct.
 */
export function GallerySlider() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const currentRef = useRef(0);
  const pausedRef = useRef(false);
  const autoRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    currentRef.current = current;
  }, [current]);
  useEffect(() => {
    pausedRef.current = paused;
  }, [paused]);

  const go = useCallback((index: number) => {
    const len = SLIDES.length;
    const next = ((index % len) + len) % len;
    currentRef.current = next;
    setCurrent(next);
  }, []);

  const next = useCallback(() => go(currentRef.current + 1), [go]);
  const prev = useCallback(() => go(currentRef.current - 1), [go]);

  const schedule = useCallback(() => {
    if (autoRef.current) clearTimeout(autoRef.current);
    if (pausedRef.current) return;
    autoRef.current = setTimeout(() => next(), SLIDE_DELAY);
  }, [next]);

  // (Re)start the auto-advance timer whenever the slide or pause state changes.
  useEffect(() => {
    schedule();
    return () => {
      if (autoRef.current) clearTimeout(autoRef.current);
    };
  }, [current, paused, schedule]);

  // Keyboard navigation.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      else if (e.key === "ArrowLeft") prev();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [next, prev]);

  // Touch swipe.
  useEffect(() => {
    const el = sliderRef.current;
    if (!el) return;
    let startX = 0;
    const onStart = (e: TouchEvent) => {
      startX = e.changedTouches[0].screenX;
    };
    const onEnd = (e: TouchEvent) => {
      const diff = startX - e.changedTouches[0].screenX;
      if (Math.abs(diff) > SWIPE_THRESHOLD) {
        if (diff > 0) next();
        else prev();
      }
    };
    el.addEventListener("touchstart", onStart, { passive: true });
    el.addEventListener("touchend", onEnd, { passive: true });
    return () => {
      el.removeEventListener("touchstart", onStart);
      el.removeEventListener("touchend", onEnd);
    };
  }, [next, prev]);

  // Pause when the tab is hidden; resume when visible.
  useEffect(() => {
    const onVis = () => {
      if (document.hidden) {
        if (autoRef.current) clearTimeout(autoRef.current);
      } else {
        schedule();
      }
    };
    document.addEventListener("visibilitychange", onVis);
    return () => document.removeEventListener("visibilitychange", onVis);
  }, [schedule]);

  return (
    <div className="gallery-slider-container" data-aos="fade-up" data-aos-delay="200">
      <div
        className="gallery-slider"
        id="gallerySlider"
        ref={sliderRef}
        onMouseEnter={() => {
          if (autoRef.current) clearTimeout(autoRef.current);
        }}
        onMouseLeave={() => schedule()}
      >
        <div className="slider-wrapper">
          {SLIDES.map((s, i) => (
            <div
              key={s.src}
              className={`gallery-slide${i === current ? " active" : ""}`}
            >
              <img src={s.src} alt={s.alt} loading="lazy" />
            </div>
          ))}
        </div>

        <div className="slide-counter">
          <span className="current-slide">{current + 1}</span>
          <span className="separator"> / </span>
          <span className="total-slides">{SLIDES.length}</span>
          <button
            type="button"
            className={`slider-pause${paused ? " paused" : ""}`}
            id="sliderPause"
            aria-label={paused ? "Play slideshow" : "Pause slideshow"}
            onClick={() => setPaused((p) => !p)}
          >
            <PauseIcon className="icon-pause" />
            <PlayIcon className="icon-play" />
          </button>
        </div>
      </div>

      <div className="gallery-thumbnails" id="galleryThumbnails">
        {SLIDES.map((s, i) => (
          <button
            key={s.src}
            type="button"
            className={`thumbnail${i === current ? " active" : ""}`}
            data-slide={i}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => go(i)}
          >
            <img src={s.src} alt={`${s.alt} thumbnail`} loading="lazy" />
          </button>
        ))}
      </div>
    </div>
  );
}
