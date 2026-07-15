"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FacebookIcon,
  InstagramIcon,
  TwitterXIcon,
  PinterestIcon,
} from "@/components/icons";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about-me", label: "About Me" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/services", label: "Services" },
  { href: "/contact-me", label: "Contact Me" },
];

/**
 * Fixed site header with logo + hamburger toggle and the fullscreen overlay
 * menu. Behaviors ported from overlay-menu.js:
 *  - header gains `header-scrolled` (loses `header-transparent`) past 100px
 *  - hamburger toggles the overlay + morphs into an X
 *  - ESC, backdrop click, and nav-link clicks close the menu
 *  - body scroll locked while open
 */
export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={`header ${
        pathname === "/portfolio-detail"
          ? "header-active"
          : scrolled
            ? "header-scrolled"
            : "header-transparent"
      }`}
    >
      <div className="container">
        <div className="logo position-relative">
          <img
            className="image"
            src="/images/logo-photofolio.png"
            alt="Photofolio Logo"
          />
          <Link
            className="overlay-link"
            href="/"
            aria-label="Photofolio home"
            onClick={() => setMenuOpen(false)}
          />
        </div>

        <button
          type="button"
          id="mobile-menu-toggle"
          className={`mobile-menu-toggle${menuOpen ? " active" : ""}`}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span className="hamburger-line" />
          <span className="hamburger-line" />
          <span className="hamburger-line" />
        </button>
      </div>

      <div
        id="overlay-menu"
        className={`overlay-menu${menuOpen ? " active" : ""}`}
        onClick={(e) => {
          if (e.target === e.currentTarget) setMenuOpen(false);
        }}
      >
        <div className="overlay-menu-content">
          <nav>
            <ul className="nav-menu">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className={`nav-link${isActive(l.href) ? " active" : ""}`}
                    onClick={() => setMenuOpen(false)}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="overlay-footer">
            <div className="overlay-cta">
              <Link
                href="/contact-me"
                className="btn btn-primary"
                onClick={() => setMenuOpen(false)}
              >
                Book a Session
              </Link>
            </div>

            <div className="overlay-social">
              <a href="#" aria-label="Facebook" onClick={(e) => e.preventDefault()}>
                <FacebookIcon />
              </a>
              <a href="#" aria-label="Instagram" onClick={(e) => e.preventDefault()}>
                <InstagramIcon />
              </a>
              <a href="#" aria-label="Twitter" onClick={(e) => e.preventDefault()}>
                <TwitterXIcon />
              </a>
              <a href="#" aria-label="Pinterest" onClick={(e) => e.preventDefault()}>
                <PinterestIcon />
              </a>
            </div>

            <div className="overlay-contact">
              <p>
                <a href="mailto:hello@photofolio.com">hello@photofolio.com</a>
              </p>
              <p>
                <a href="tel:+15551234567">+1 (555) 123-4567</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
