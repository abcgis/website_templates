"use client";

import { useState } from "react";
import Link from "next/link";

const NAV = [
  { id: "home", label: "Home" },
  { id: "portfolio", label: "Portfolio" },
  { id: "news", label: "News" },
  { id: "contact", label: "Contact" },
];

/**
 * Mobile-only top bar with hamburger toggle (init.js vavo_tm_hamburger).
 * Nav links use `/#id` to work from any page; selecting an item closes the menu.
 */
export function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="vavo_tm_mobile_menu">
      <div className="topbar_inner">
        <div className="container bigger">
          <div className="topbar_in">
            <div className="logo">
              <Link href="/">
                <img src="/img/logo/dark.png" alt="" />
              </Link>
            </div>
            <div className="my_trigger">
              <button
                type="button"
                className={`hamburger hamburger--collapse-r${open ? " is-active" : ""}`}
                aria-label="Toggle menu"
                aria-expanded={open}
                onClick={() => setOpen((o) => !o)}
              >
                <div className="hamburger-box">
                  <div className="hamburger-inner" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="dropdown" style={{ display: open ? "block" : "none" }}>
        <div className="container">
          <div className="dropdown_inner">
            <ul className="anchor_nav">
              {NAV.map((n) => (
                <li key={n.id}>
                  <Link href={`/#${n.id}`} onClick={() => setOpen(false)}>
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
