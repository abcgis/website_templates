"use client";

import { useEffect, useRef } from "react";

/**
 * Magic cursor (init.js vavo_tm_cursor): outer + inner dots follow the mouse;
 * both gain `.cursor-hover` when hovering anchors / `.cursor-pointer`.
 * Disabled on touch (no hover) devices.
 */
export function MagicCursor() {
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const outer = outerRef.current;
    const inner = innerRef.current;
    if (!outer || !inner) return;
    if (window.matchMedia("(hover: none)").matches) return;

    const onMove = (e: MouseEvent) => {
      outer.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      inner.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    };
    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const hover = !!target?.closest("a, .cursor-pointer");
      outer.classList.toggle("cursor-hover", hover);
      inner.classList.toggle("cursor-hover", hover);
    };

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onOver);
    outer.style.visibility = "visible";
    inner.style.visibility = "visible";

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
    };
  }, []);

  return (
    <>
      <div className="mouse-cursor cursor-outer" ref={outerRef} />
      <div className="mouse-cursor cursor-inner" ref={innerRef} />
    </>
  );
}
