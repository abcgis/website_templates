# Oliver — Photography Portfolio (Next.js)

A pixel-perfect of the **Oliver** photographer-portfolio template built with **Next.js 16** (App Router, React 19, TypeScript strict) and **Tailwind v4**.

- Source: static HTML template (4 pages, Montserrat, dark theme `#0d0d0d`, gold accent `#f7b731`)
- Extraction approach: source-only — original HTML/CSS/JS downloaded as ground truth; CSS ported verbatim
- Out of scope: real backend, authentication, SEO optimization (per clone-website skill defaults)

## Pages

| Route        | Page                |
|--------------|---------------------|
| `/`          | Home (fullscreen hero) |
| `/portfolio` | 6-photo gallery grid |
| `/about`     | Photographer photo + bio |
| `/contact`   | Contact info + form (with toast feedback) |

## Stack

- **Framework:** Next.js 16.2 (App Router, React 19, TypeScript strict)
- **Styling:** Tailwind CSS v4 + shadcn tokens + a ported stylesheet (`src/styles/oliver.css`) reproducing the original site's CSS verbatim
- **Icons:** `react-icons` (Font Awesome 6, self-hosted SVGs)
- **Animations:** `aos` (Animate On Scroll, default options matching the source)

## Commands

```bash
npm install      # install dependencies
npm run dev      # start dev server (http://localhost:3000)
npm run build    # production build
npm run lint     # ESLint check
npm run typecheck # TypeScript check
npm run check    # lint + typecheck + build
```

## Project Structure

```
src/
  app/                       # Next.js routes (/, /portfolio, /about, /contact)
  components/
    AosInit.tsx              # client component, initializes AOS + re-inits on route change
    SiteHeader.tsx           # fixed header, scroll-shrink, mobile hamburger menu
    SiteFooter.tsx           # copyright + social icons
    HeroSection.tsx          # home hero (fullscreen bg image + overlay)
    PortfolioGallery.tsx     # 6-item auto-fit grid
    AboutSection.tsx         # photo + staggered text
    ContactSection.tsx       # info + form with toast feedback (client component)
    icons.tsx                # re-exports FA6 icons as named React components
  lib/utils.ts               # cn() utility (shadcn)
  styles/oliver.css          # ported CSS (verbatim, 3 documented edits)
  types/aos.d.ts             # minimal type declaration for the `aos` package
public/
  images/oliver/             # 8 photos (1 hero + 6 gallery + 1 about)
  apple-icon.png             # 32x32 apple-touch icon
  icon.png                   # 32x32 favicon (Next 16 file convention)
```

## Behaviors

- **Header scroll state** — gains `.scrolled` after 50px (semi-opaque dark bg)
- **Mobile menu** — hamburger toggles full-screen nav + locks body scroll
- **Hero entry animation** — CSS `@keyframes fadeIn` on title/subtitle/btn on load
- **AOS scroll animations** — staggered via `data-aos-delay` (200/400/600/800ms)
- **Gallery hover** — card scales 1.03, inner img scales 1.1, dark overlay fades in
- **Contact form** — 2s spinner, 80/20 success/error, slide-in toast 5s then slide-out

## Notes

The source CSS is reproduced verbatim in `src/styles/oliver.css` with three documented
edits: (1) `'Montserrat'` → `var(--font-montserrat)` for next/font self-hosting,
(2) hero background path → `/images/oliver/hero-img.png`, (3) Font Awesome `<i>`
selectors widened to `i, svg` to match our self-hosted SVG icons.