"use client";

import { useEffect, useState } from "react";

/**
 * Page preloader (init.js vavo_tm_preloader): on desktop, add `.preloaded`
 * after 800ms and unmount after 2000ms; on mobile, remove immediately.
 */
export function Preloader() {
  const [phase, setPhase] = useState<"loading" | "preloaded" | "done">("loading");

  useEffect(() => {
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(
      navigator.userAgent,
    );
    if (isMobile) {
      // Remove on mobile (next tick to avoid setState-in-effect).
      const t = setTimeout(() => setPhase("done"), 0);
      return () => clearTimeout(t);
    }
    const t1 = setTimeout(() => setPhase("preloaded"), 800);
    const t2 = setTimeout(() => setPhase("done"), 2000);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  if (phase === "done") return null;

  return (
    <div id="preloader" className={phase === "preloaded" ? "preloaded" : ""}>
      <div className="loader_line" />
    </div>
  );
}
