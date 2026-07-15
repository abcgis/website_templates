"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

/**
 * Global Vavo effects, ported from init.js:
 *  - Load sequence (once, on initial mount): staggered `.loaded` classes.
 *  - WOW: add `.animated` to `.wow` elements entering the viewport.
 *  - Scrollspy: toggle `.current` on `.anchor_nav li` as sections cross the
 *    viewport center.
 *
 * Re-runs the WOW/scrollspy setup on route changes so newly-mounted sections
 * (e.g. the news-single page) animate in; also slides the `.waited` overlay
 * away immediately on client-side navigation (the timed sequence is for the
 * initial load only).
 */
export function VavoEffects() {
  const pathname = usePathname();
  const firstRun = useRef(true);

  // One-time entrance load sequence (init.js vavo_tm_myLoad timings).
  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [
      setTimeout(
        () => document.querySelector(".vavo_tm_sidebar")?.classList.add("loaded"),
        2000,
      ),
      setTimeout(
        () =>
          document
            .querySelector(".vavo_tm_fixed_section .my_overlay")
            ?.classList.add("loaded"),
        2500,
      ),
      setTimeout(
        () => document.querySelector(".waited")?.classList.add("loaded"),
        2800,
      ),
      setTimeout(
        () =>
          document
            .querySelector(".arlo_fn_hero_header .name")
            ?.classList.add("loaded"),
        3000,
      ),
      setTimeout(
        () =>
          document
            .querySelector(".arlo_fn_hero_header .job")
            ?.classList.add("loaded"),
        3500,
      ),
      setTimeout(
        () =>
          document
            .querySelector(".arlo_fn_hero_header")
            ?.classList.add("button_loaded"),
        5000,
      ),
      setTimeout(
        () => document.querySelector(".vavo_tm_down")?.classList.add("loaded"),
        5000,
      ),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  // WOW + scrollspy (re-run on route change).
  useEffect(() => {
    if (!firstRun.current) {
      // Client-side nav: slide the loader overlay away immediately.
      document.querySelector(".waited")?.classList.add("loaded");
    }
    firstRun.current = false;

    const wowEls = Array.from(
      document.querySelectorAll<HTMLElement>(".wow:not(.animated)"),
    );
    const wowObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const el = entry.target as HTMLElement;
          const dur = el.getAttribute("data-wow-duration");
          const delay = el.getAttribute("data-wow-delay");
          if (dur) el.style.animationDuration = dur;
          if (delay) el.style.animationDelay = delay;
          el.classList.add("animated");
          wowObserver.unobserve(el);
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0 },
    );
    wowEls.forEach((el) => wowObserver.observe(el));

    const ids = ["home", "portfolio", "news", "contact"];
    const sectionEls = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    if (sectionEls.length === 0) {
      document
        .querySelectorAll(".anchor_nav li")
        .forEach((li) => li.classList.remove("current"));
    }
    const navObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const id = entry.target.id;
          document.querySelectorAll(".anchor_nav li").forEach((li) => {
            const a = li.querySelector("a");
            li.classList.toggle(
              "current",
              !!a?.getAttribute("href")?.endsWith("#" + id),
            );
          });
        }
      },
      { rootMargin: "-50% 0px -50% 0px", threshold: 0 },
    );
    sectionEls.forEach((el) => navObserver.observe(el));

    return () => {
      wowObserver.disconnect();
      navObserver.disconnect();
    };
  }, [pathname]);

  return null;
}
