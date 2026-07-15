"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import AOS from "aos";

/**
 * Initializes AOS (Animate On Scroll). The original template calls bare
 * `AOS.init()` (default options), so we do the same. On route changes the new
 * page's [data-aos] elements are fresh in the DOM and have not been registered
 * by the original init() call, so we re-run init() — AOS handles repeated
 * calls safely — to make sure every newly-mounted section animates in.
 */
export function AosInit() {
  const pathname = usePathname();

  useEffect(() => {
    AOS.init();
  }, [pathname]);

  return null;
}
