"use client";

import Link from "next/link";

const NAV = [
  { id: "home", label: "Home" },
  { id: "portfolio", label: "Portfolio" },
  { id: "news", label: "News" },
  { id: "contact", label: "Contact" },
];

/**
 * Fixed left sidebar: anchor nav (`/#id` so it works from any page) + logo.
 * Scrollspy toggles `.current` via VavoEffects; logo click scrolls to top
 * (init.js vavo_tm_totop).
 */
export function Sidebar() {
  const scrollTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="vavo_tm_sidebar">
      <div className="sidebar_inner">
        <div className="menu">
          <ul className="anchor_nav">
            {NAV.map((n, i) => (
              <li key={n.id} className={i === 0 ? "current" : undefined}>
                <Link href={`/#${n.id}`}>{n.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="logo">
          <a className="light" href="#" onClick={scrollTop}>
            <img src="/img/logo/dark.png" alt="" />
          </a>
          <a className="dark" href="#" onClick={scrollTop}>
            <img src="/img/logo/logo.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}
