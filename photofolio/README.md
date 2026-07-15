# Photofolio

A pixel-perfect Next.js 16 of the Photofolio professional photography
portfolio template.

## Tech stack
- **Next.js 16** (App Router, React 19, TypeScript strict)
- **Tailwind CSS v4** + shadcn/ui primitives
- **AOS** for scroll animations
- Fonts via `next/font/google`: Inter, Poppins, Playfair Display
- The original site's CSS is ported verbatim into `src/styles/photofolio.css`
  (only `@font-face` removed, `font-family` literals re-pointed to next/font
  variables). Components reuse the original class names for fidelity.

## Routes
- `/` - fullscreen hero slider (5 slides, auto-advance, swipe/keyboard/dots)
- `/about-me` - bio, count-up stats, services, testimonials carousel
- `/portfolio` - filterable masonry gallery (24 items, 5 categories)
- `/portfolio-detail` - project detail page (gallery slider, story, sidebar)
- `/services` - service cards, pricing plans, process steps
- `/contact-me` - contact form, info cards, map, FAQ

## Commands
```bash
npm install
npm run dev      # http://localhost:3029  (port set in package.json)
npm run build    # production build
npm run check    # lint + typecheck + build
```

> Dev port is `3029` (3030 was taken by Grafana, 3031-3130 reserved by
> Hyper-V/WSL on the original machine). Change `scripts.dev` in `package.json`
> if needed.

## Structure
```
src/
  app/            routes (/, /about-me, /portfolio, /portfolio-detail, /services, /contact-me)
  components/     shared (Header, Loader, HeroSlider, ...) + per-page sections
    icons.tsx     28 SVG icons extracted from the original sprite
  styles/photofolio.css   ported original CSS (15k lines)
public/images/    downloaded images (hero, gallery, testimonials, ...)
scripts/          asset download script
```

## Notes
- Pure emulation - no backend. Forms show a simulated success state.
- The `amap.com` map iframe is kept as-is for fidelity.
