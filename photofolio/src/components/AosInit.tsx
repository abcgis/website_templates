"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import AOS from "aos";

/**
 * Initializes AOS (Animate On Scroll) to match the original site's config from
 * main-01.js: duration 800, delay 100, once:false, mirror:true, offset 50,
 * easing ease-out-cubic. Refreshes on route changes so newly-mounted sections
 * animate in.
 */
export function AosInit() {
  const pathname = usePathname();

  useEffect(() => {
    AOS.init({
      duration: 800,
      delay: 100,
      once: false,
      mirror: true,
      offset: 50,
      easing: "ease-out-cubic",
    });
    const t = setTimeout(() => AOS.refresh(), 300);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const t = setTimeout(() => AOS.refresh(), 250);
    return () => clearTimeout(t);
  }, [pathname]);

  return null;
}
