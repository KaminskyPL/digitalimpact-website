# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

# Digital Impact — Kontekst projektu

## Kim jest właściciel
Konsultant AI pomagający MŚP wdrażać automatyzację i rozwiązania AI.
Marka: Digital Impact (digitalimpact.pl)
Ton komunikacji: profesjonalny, konkretny, bez żargonu technicznego.
Język strony: polski.

## Cel strony
Generowanie leadów do projektów consultingowych — klient widzi ofertę, buduje zaufanie, kontaktuje się po wycenę. Sprzedaż dzieje się przez rozmowę, nie przez koszyk.

## Zasady kodowania
- Komponenty w /src/components/, każdy w osobnym pliku .astro
- Case studies jako pliki .md w /src/content/
- Wszystkie kolory przez zmienne CSS (nie hardcode hex w komponentach)
- Mobile-first — najpierw wersja mobilna, potem desktop
- Brak zewnętrznych bibliotek JS bez mojej zgody

## Aktualny status
v1 — budujemy landing page z sekcjami: Hero, Problem, Oferta, Social Proof, O mnie (skrót), CTA + formularz kontaktowy.

## Commands

```bash
npm run dev       # Start dev server at localhost:4321
npm run build     # Build production site to ./dist/
npm run preview   # Preview production build locally
npm run astro     # Run Astro CLI (astro add, astro check, etc.)
```

No linting or test scripts are configured. Requires Node >=22.12.0.

## Stack

- **Astro 6.3.7** — static site generator with MDX, sitemap, and RSS integrations
- **TypeScript** — strict mode via `astro/tsconfigs/strict`
- **Content Collections** — blog posts as `.md`/`.mdx` files with Zod schema validation
- **No Tailwind** — plain CSS with scoped `<style>` blocks per component; global baseline in `src/styles/global.css`; 720px max content width, 720px mobile breakpoint

## Architecture

### Content pipeline

Blog posts live in `src/content/blog/` and are loaded via the glob loader defined in `src/content.config.ts`. The Zod schema there enforces `title`, `description`, `pubDate` (required) and `updatedDate`, `heroImage` (optional). Dynamic routes are handled by `src/pages/blog/[...slug].astro` using `getCollection('blog')` and `getStaticPaths()`.

### Page/Layout/Component hierarchy

```
BaseHead.astro          ← SEO, Open Graph, font preloading
Header.astro            ← global nav + social icons (hardcoded links)
  └── HeaderLink.astro  ← active-state nav link
Footer.astro
FormattedDate.astro     ← wraps <time> with locale formatting

BlogPost.astro (layout) ← wraps all blog post pages; imports the above
```

Pages in `src/pages/` use these layouts and components directly. The `src/consts.ts` file exports site-wide metadata (`SITE_TITLE`, `SITE_DESCRIPTION`).

### Fonts

Custom Atkinson font (woff files in `src/assets/fonts/`) is configured via Astro's `fontProviders` in `astro.config.mjs` and injected through `BaseHead.astro` using Astro's built-in `<Font>` component with `preload` and `display: swap`.

### Key config

- Site URL is set to `https://example.com` in `astro.config.mjs` — update before deploying
- RSS feed generated at `/rss.xml` via `src/pages/rss.xml.js`
- Sitemap auto-generated at `/sitemap-index.xml` by `@astrojs/sitemap`
