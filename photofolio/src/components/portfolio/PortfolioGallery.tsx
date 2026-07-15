"use client";

import { useEffect, useState, type ComponentType, type SVGProps } from "react";
import Link from "next/link";
import AOS from "aos";
import {
  GalleryIcon,
  HeartIcon,
  UserIcon,
  MountainsIcon,
  CalendarDaysIcon,
  SlidersIcon,
} from "@/components/icons";

type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;

type PortfolioCategory = "wedding" | "portrait" | "landscape" | "event";

type PortfolioSize = "tall" | "wide";

interface PortfolioItem {
  category: PortfolioCategory;
  /** Optional size modifiers from the source (`tall` and/or `wide`). */
  sizes: readonly PortfolioSize[];
  /** Resolved public path, e.g. `/images/gallery/01.jpg`. */
  image: string;
  alt: string;
  /** Visible label, e.g. "Wedding". */
  itemCategory: string;
  title: string;
  /** Staggered AOS delay (ms) when present in the source. */
  aosDelay?: number;
}

interface FilterConfig {
  /** Matches the source `data-filter` attribute verbatim (`*`, `.wedding`, ...). */
  filter: string;
  text: string;
  count: number;
  countId: string;
  icon: IconComponent;
}

/**
 * All 24 portfolio items, extracted verbatim from `portfolio.html`.
 * The exact sequence, per-item class combinations (`tall`/`wide`),
 * image filenames (cycling 01-06.jpg), category labels, titles, and
 * staggered `data-aos-delay` values are reproduced from the source.
 */
const PORTFOLIO_ITEMS: readonly PortfolioItem[] = [
  { category: "wedding", sizes: ["tall"], image: "/images/gallery/01.jpg", alt: "Wedding Photography 1", itemCategory: "Wedding", title: "Sarah & James" },
  { category: "portrait", sizes: [], image: "/images/gallery/02.jpg", alt: "Portrait Photography 1", itemCategory: "Portrait", title: "Emma", aosDelay: 100 },
  { category: "landscape", sizes: ["wide"], image: "/images/gallery/03.jpg", alt: "Landscape Photography 1", itemCategory: "Landscape", title: "Mountain Dawn", aosDelay: 200 },
  { category: "wedding", sizes: [], image: "/images/gallery/04.jpg", alt: "Wedding Photography 2", itemCategory: "Wedding", title: "Michael & Lisa", aosDelay: 300 },
  { category: "event", sizes: ["tall"], image: "/images/gallery/05.jpg", alt: "Event Photography 1", itemCategory: "Event", title: "Corporate Gala", aosDelay: 100 },
  { category: "portrait", sizes: [], image: "/images/gallery/06.jpg", alt: "Portrait Photography 2", itemCategory: "Portrait", title: "David", aosDelay: 200 },
  { category: "wedding", sizes: ["wide"], image: "/images/gallery/01.jpg", alt: "Wedding Photography 3", itemCategory: "Wedding", title: "Amanda & John", aosDelay: 300 },
  { category: "landscape", sizes: [], image: "/images/gallery/02.jpg", alt: "Landscape Photography 2", itemCategory: "Landscape", title: "Ocean Sunset" },
  { category: "portrait", sizes: ["tall"], image: "/images/gallery/03.jpg", alt: "Portrait Photography 3", itemCategory: "Portrait", title: "Sophia", aosDelay: 100 },
  { category: "event", sizes: [], image: "/images/gallery/04.jpg", alt: "Event Photography 2", itemCategory: "Event", title: "Fashion Show", aosDelay: 200 },
  { category: "wedding", sizes: [], image: "/images/gallery/05.jpg", alt: "Wedding Photography 4", itemCategory: "Wedding", title: "Jessica & Tom", aosDelay: 300 },
  { category: "landscape", sizes: ["wide"], image: "/images/gallery/06.jpg", alt: "Landscape Photography 3", itemCategory: "Landscape", title: "Forest Path" },
  { category: "portrait", sizes: [], image: "/images/gallery/01.jpg", alt: "Portrait Photography 4", itemCategory: "Portrait", title: "Marcus", aosDelay: 100 },
  { category: "event", sizes: ["tall"], image: "/images/gallery/02.jpg", alt: "Event Photography 3", itemCategory: "Event", title: "Music Festival", aosDelay: 200 },
  { category: "wedding", sizes: [], image: "/images/gallery/03.jpg", alt: "Wedding Photography 5", itemCategory: "Wedding", title: "Rachel & Kevin", aosDelay: 300 },
  { category: "portrait", sizes: [], image: "/images/gallery/04.jpg", alt: "Portrait Photography 5", itemCategory: "Portrait", title: "Isabella" },
  { category: "landscape", sizes: ["tall"], image: "/images/gallery/05.jpg", alt: "Landscape Photography 4", itemCategory: "Landscape", title: "Desert Dunes", aosDelay: 100 },
  { category: "event", sizes: [], image: "/images/gallery/06.jpg", alt: "Event Photography 4", itemCategory: "Event", title: "Art Gallery Opening", aosDelay: 200 },
  { category: "wedding", sizes: ["wide"], image: "/images/gallery/01.jpg", alt: "Wedding Photography 6", itemCategory: "Wedding", title: "Nicole & Ryan", aosDelay: 300 },
  { category: "portrait", sizes: [], image: "/images/gallery/02.jpg", alt: "Portrait Photography 6", itemCategory: "Portrait", title: "Alexander" },
  { category: "landscape", sizes: [], image: "/images/gallery/03.jpg", alt: "Landscape Photography 5", itemCategory: "Landscape", title: "City Lights", aosDelay: 100 },
  { category: "event", sizes: [], image: "/images/gallery/04.jpg", alt: "Event Photography 5", itemCategory: "Event", title: "Conference 2025", aosDelay: 200 },
  { category: "wedding", sizes: ["tall"], image: "/images/gallery/05.jpg", alt: "Wedding Photography 7", itemCategory: "Wedding", title: "Victoria & Chris", aosDelay: 300 },
  { category: "wedding", sizes: [], image: "/images/gallery/06.jpg", alt: "Wedding Photography 8", itemCategory: "Wedding", title: "Olivia & Daniel" },
];

/** Sidebar filters with their source `data-filter` values, counts, and icons. */
const FILTERS: readonly FilterConfig[] = [
  { filter: "*", text: "All Photos", count: 24, countId: "count-all", icon: GalleryIcon },
  { filter: ".wedding", text: "Weddings", count: 8, countId: "count-wedding", icon: HeartIcon },
  { filter: ".portrait", text: "Portraits", count: 6, countId: "count-portrait", icon: UserIcon },
  { filter: ".landscape", text: "Landscapes", count: 5, countId: "count-landscape", icon: MountainsIcon },
  { filter: ".event", text: "Events", count: 5, countId: "count-event", icon: CalendarDaysIcon },
];

/** Mobile breakpoint (px) below which the sidebar collapses (per source JS). */
const MOBILE_BREAKPOINT = 1024;

/**
 * Portfolio masonry gallery with sidebar category filters.
 *
 * Filtering keeps all 24 items mounted and toggles the `is-hidden` class
 * (`.portfolio-item.is-hidden { display: none }` lives in `photofolio.css`),
 * mirroring the original `portfolio-masonry.js`. AOS offsets are refreshed
 * after each filter change so the in-view detection stays correct after the
 * grid reflows.
 */
export function PortfolioGallery() {
  const [activeFilter, setActiveFilter] = useState<string>("*");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    // Recalculate AOS positions after the layout shift caused by filtering.
    const t = setTimeout(() => AOS.refresh(), 50);
    return () => clearTimeout(t);
  }, [activeFilter]);

  const handleFilterClick = (filter: string) => {
    setActiveFilter(filter);
    // On mobile, collapse the sidebar after a selection (matches source JS).
    if (typeof window !== "undefined" && window.innerWidth <= MOBILE_BREAKPOINT) {
      setSidebarOpen(false);
    }
  };

  const toggleSidebar = () => setSidebarOpen((open) => !open);

  return (
    <div className="portfolio">
      <div className="portfolio-layout">
        {/* Sidebar Filters */}
        <aside
          className={`portfolio-sidebar mb-4${sidebarOpen ? " sidebar-open" : ""}`}
          id="portfolioSidebar"
        >
          <div className="sidebar-content">
            <h2 className="sidebar-title">Categories</h2>

            <ul className="filter-list">
              {FILTERS.map((f) => {
                const Icon = f.icon;
                return (
                  <li key={f.filter}>
                    <button
                      className={`filter-item${activeFilter === f.filter ? " active" : ""}`}
                      data-filter={f.filter}
                      onClick={() => handleFilterClick(f.filter)}
                    >
                      <span className="filter-icon">
                        <Icon />
                      </span>
                      <span className="filter-text">{f.text}</span>
                      <span className="filter-count" id={f.countId}>
                        {f.count}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>

            {/* Mobile Filter Toggle */}
            <button
              className="mobile-filter-toggle"
              id="mobileFilterToggle"
              onClick={toggleSidebar}
            >
              <SlidersIcon />
              <span>{sidebarOpen ? "Close Filters" : "Filters"}</span>
            </button>
          </div>
        </aside>

        {/* Gallery Grid */}
        <main className="portfolio-main">
          <div className="portfolio-grid" id="portfolioGrid">
            {PORTFOLIO_ITEMS.map((item) => {
              const isVisible =
                activeFilter === "*" || activeFilter === `.${item.category}`;
              const className = [
                "portfolio-item",
                item.category,
                ...item.sizes,
                isVisible ? "" : "is-hidden",
              ]
                .filter(Boolean)
                .join(" ");

              return (
                <div
                  key={item.title}
                  className={className}
                  data-aos="fade-up"
                  data-aos-delay={item.aosDelay}
                >
                  <Link href="/portfolio-detail" className="portfolio-link">
                    <img src={item.image} alt={item.alt} />
                    <div className="item-overlay">
                      <div className="item-info">
                        <span className="item-category">{item.itemCategory}</span>
                        <h3 className="item-title">{item.title}</h3>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </main>
      </div>
    </div>
  );
}
