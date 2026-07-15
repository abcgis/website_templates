"use client";

import { useEffect, useState } from "react";

/**
 * Full-screen page loader (camera SVG + progress bar) shown on initial load.
 * Mirrors the original PageLoader: min display ~1.5s, then fades out. The
 * camera parts and progress bar animate via CSS keyframes in photofolio.css
 * (cameraGlow, lensRotate, flashBlink, progressFill, loaderFadeOut).
 */
export function PageLoader() {
  const [fadeOut, setFadeOut] = useState(false);
  const [removed, setRemoved] = useState(false);

  useEffect(() => {
    const minLoad = 1500;
    const t1 = setTimeout(() => setFadeOut(true), minLoad);
    const t2 = setTimeout(() => setRemoved(true), minLoad + 700);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  if (removed) return null;

  return (
    <div
      id="page-loader"
      className={`loader-wrapper${fadeOut ? " fade-out" : ""}`}
    >
      <div className="loader-container">
        <div className="loader-logo">
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            {/* Camera Body */}
            <rect x="15" y="30" width="70" height="50" rx="5" className="camera-body" />
            {/* Camera Viewfinder */}
            <rect x="25" y="20" width="15" height="12" rx="2" className="camera-viewfinder" />
            {/* Camera Lens (outer) */}
            <circle cx="50" cy="55" r="18" className="camera-lens" />
            {/* Lens inner circle */}
            <circle cx="50" cy="55" r="12" className="lens-inner" />
            {/* Lens center */}
            <circle cx="50" cy="55" r="6" className="lens-center" />
            {/* Camera Flash */}
            <circle cx="72" cy="25" r="3" className="camera-flash" />
            {/* Shutter Button */}
            <circle cx="72" cy="38" r="2.5" className="camera-viewfinder" />
          </svg>
        </div>

        <div className="progress-bar-container">
          <div className="progress-bar-fill" />
        </div>
      </div>
    </div>
  );
}
