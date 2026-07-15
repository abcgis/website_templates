# Website Templates

A collection of pixel-perfect, self-contained Next.js 16 website templates —
photographer portfolios and content-rich marketing sites.

Each template is a standalone, npm-installable Next.js project. The original
HTML/CSS/JS is treated as ground truth: CSS is ported verbatim into
`src/styles/<template>.css`, and the JS behaviors (scroll animations,
sliders, lightboxes, magic cursors, …) are reimplemented in React
components and small client effects.

## 

## Templates

### [`oliver/`](./oliver) — Oliver photographer portfolio

Minimal, dark, image-led portfolio. Montserrat typeface, dark theme
`#0d0d0d` with gold accent `#f7b731`. AOS scroll animations.

|||
|-|-|
|Routes|`/`, `/portfolio`, `/about`, `/contact`|
|Dev port|`3000`|
|Pages|4 (fullscreen hero, 6-photo grid, bio, contact)|
|Behaviors|Header scroll-shrink, mobile hamburger w/ body-scroll lock, hero `@keyframes fadeIn`, AOS staggered reveals, gallery hover scale, contact form with toast feedback|

### [`vavo/`](./vavo) — Vavo photographer portfolio

Single-page-first portfolio with a custom cursor, scrollspy sidebar, and
in-page lightbox. Mulish (body) + Poppins (headings).

|||
|-|-|
|Routes|`/`, `/news-single`|
|Dev port|`3029`|
|Pages|2 (home w/ portfolio + partners + news, news article)|
|Behaviors|Preloader, magic cursor, scrollspy nav, WOW animations, mobile menu, smooth scroll, portfolio lightbox, partner hover|

### [`photofolio/`](./photofolio) — Photofolio professional portfolio

The largest of the three — a full marketing-style portfolio with hero
slider, masonry gallery, services, testimonials, and contact. Inter +
Poppins + Playfair Display.

|||
|-|-|
|Routes|`/`, `/about-me`, `/portfolio`, `/portfolio-detail`, `/services`, `/contact-me`|
|Dev port|`3029`|
|Pages|6 (hero slider, bio + stats, filterable masonry w/ 24 items, project detail, services + pricing, contact + FAQ)|
|Behaviors|Auto-advancing hero slider (swipe / keyboard / dots), AOS reveals, masonry filter, count-up stats, testimonials carousel, contact form with toast feedback|

> Dev port `3029` was chosen to avoid collisions with `3000/3001` on the
> machine these were authored on (Grafana had 3030, Hyper-V/WSL had
> 3031–3130). Change `scripts.dev` in `package.json` if you need a
> different port.

## Getting started

Each template is independent — pick one and follow its README:

```bash
cd oliver         # or vavo / photofolio
npm install
npm run dev       # opens on the port listed above
```

Per-template commands live in each folder's `README.md`; the common ones
across all three are:

```bash
npm run build     # production build
npm run lint      # ESLint
npm run typecheck # tsc --noEmit
npm run check     # lint + typecheck + build
```

## Deployment

* **oliver, vavo** — standard Next.js production build via `npm run build`
followed by `npm run start` (or deploy the output to your platform of
choice — Vercel, Netlify, a Node server, etc.).
* **photofolio** — ships with a multi-stage `Dockerfile` (production) and a
`Dockerfile.dev` for development, plus a `docker-compose.yml` for local
orchestration. See `photofolio/README.md` for usage.

## Source-cloning methodology

These templates follow a consistent extraction approach:

1. **Source-only ground truth** — static HTML/CSS/JS downloaded as the
reference; no live backend integration.
2. **CSS ported verbatim** — the original stylesheet lives in
`src/styles/<template>.css`, imported alongside Tailwind utilities.
Font-family literals are re-pointed to `next/font` variables; image
paths are rewritten to the Next `/public` tree; Font-Awesome `<i>`
selectors are widened to `i, svg` where SVG icons replace `<i>` tags.
3. **JS behaviors reimplemented in React** — intersection observers
replace jQuery scroll handlers, `<button>` + `useState` replace click
bindings, and CSS class toggles replace DOM `classList` mutations.
4. **No backend, no auth** — forms show a simulated success state.

## Conventions

* **Strict TypeScript** across every template.
* **No runtime CDN fonts** — all typefaces go through `next/font` for
self-hosting.
* **Pure emulation** — no database, no API routes, no auth. The
`#0d0d0d` / `#f7b731` palette in Oliver, the `xcon` icon font in Vavo,
and the `amap.com` map iframe in Photofolio are kept as-is for
visual fidelity.
* **AOS** is used in oliver and photofolio with re-init on route change;
vavo reuses a small `WOW`-style IntersectionObserver implementation
faithful to the source's `init.js`.

## Requirements

* Node.js **≥ 24**
* npm

## License

Each template is MIT-licensed. See `oliver/LICENSE`, `vavo/LICENSE`, and
`photofolio/LICENSE` for the per-template text.

