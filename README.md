# Digital Impact — AI Consulting Website

Strona internetowa [digitalimpact.pl](https://digitalimpact.pl) —
konsultanta AI Kamila Kiersnowskiego.

## Stack

- **Astro** — static site generator
- **CSS Variables** — design system bez frameworka
- **Cloudflare Pages** — hosting i auto-deploy

## Struktura

```
src/
  components/    # Nav.astro
  layouts/       # Layout.astro (główny wrapper)
  pages/         # Strony (index, blog, case-studies, itd.)
  content/blog/  # Artykuły w Markdown
  styles/        # global.css (design system)
public/
  fonts/         # DM Sans (woff2, lokalny hosting)
```

## Lokalne uruchomienie

```bash
npm install
npm run dev
```

## Deploy

Każdy push do brancha `main` = automatyczny deploy na Cloudflare Pages.
