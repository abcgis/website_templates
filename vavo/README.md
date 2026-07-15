# Vavo

A pixel-perfect Next.js 16 of the Vavo photographer portfolio template.

## Tech stack
- **Next.js 16** (App Router, React 19, TypeScript strict)
- **Tailwind CSS v4** + shadcn/ui primitives
- Fonts via `next/font/google`: Mulish, Poppins
- The original site's CSS is ported verbatim into `src/styles/vavo-*.css`
  (Mulish/Poppins re-pointed to next/font vars, `xcon` icon-font to `/fonts/`).
  Components reuse the original class names for fidelity.

## Routes
- `/` - single-page home: hero, portfolio (6 items), partners (6), news (2),
  contact form, copyright
- `/news-single` - news article detail page (article, tags, comments, reply form)

## Commands
```bash
npm install
npm run dev      # http://localhost:3029  (port set in package.json)
npm run build    # production build
npm run check    # lint + typecheck + build
```

> Dev port is `3029`. Change `scripts.dev` in `package.json` if needed.

## Structure
```
src/
  app/            routes (/, /news-single)
  components/     Preloader, Sidebar, MobileMenu, FixedSection, Hero, Portfolio,
                  Partners, News, NewsSingle, Contact, Copyright, MagicCursor,
                  VavoEffects
  styles/vavo-*.css   ported original CSS (plugins / colors / darkMode / style)
public/
  img/            downloaded images (hero, portfolio, partners, news, svg icons)
  fonts/          xcon icon font (woff2 / ttf / woff)
scripts/          asset download script
```

## Notes
- Pure emulation - no backend. Forms show a simulated success state.
- Behaviors reimplemented in React from the original `init.js`: WOW scroll
  animations (IntersectionObserver), magic cursor, scrollspy sidebar, hero load
  sequence, mobile menu, smooth scroll, partner hover, portfolio lightbox.
