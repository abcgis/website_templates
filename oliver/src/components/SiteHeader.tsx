"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const NAV: { href: string; label: string }[] = [
  { href: "/", label: "Home" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

/**
 * Fixed site header. Mirrors main.js:
 *  - gains `.scrolled` (semi-opaque dark bg) after scrollY > 50
 *  - hamburger toggles a full-screen mobile nav + locks body scroll (.no-scroll)
 *  - clicking any nav link closes the menu
 */
export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile menu is open (mirrors main.js no-scroll).
  useEffect(() => {
    const cls = "no-scroll";
    document.documentElement.classList.toggle(cls, menuOpen);
    document.body.classList.toggle(cls, menuOpen);
    return () => {
      document.documentElement.classList.remove(cls);
      document.body.classList.remove(cls);
    };
  }, [menuOpen]);

  // Close the menu on route change is handled by the `onClick` on each Link
  // (which fires before navigation); no effect needed here.

  return (
    <header className={`main-header${scrolled ? " scrolled" : ""}`}>
      <div className="logo">
        <Link href="/">
          <h1>Oliver Williams</h1>
        </Link>
      </div>
      <nav className={`main-nav${menuOpen ? " active" : ""}`}>
        <ul>
          {NAV.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={pathname === item.href ? "active" : undefined}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <button
        className={`menu-toggle${menuOpen ? " active" : ""}`}
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((v) => !v)}
      >
        <span className="hamburger" />
      </button>
    </header>
  );
}
