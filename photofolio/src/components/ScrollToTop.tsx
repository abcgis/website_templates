"use client";

import { useEffect, useState } from "react";

/**
 * Floating scroll-to-top button. Appears after scrolling past 300px (matches
 * main-01.js). Uses the filled triangle path from index.html; the CSS fills it
 * with currentColor (#ffffff on the green button).
 */
export function ScrollToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 300);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      id="scrollToTop"
      className={`scroll-to-top${show ? " show" : ""}`}
      aria-label="Scroll to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M7 14l5-5 5 5z" />
      </svg>
    </button>
  );
}
