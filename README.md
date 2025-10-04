# Cumulus Marketing Site

Cumulus offers personalized product builds. This repository contains the marketing site built with Next.js App Router, Tailwind CSS v4, and shadcn/ui components.

## Getting Started

Install dependencies (already bundled with the repo):

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open http://localhost:3000 to view the site. Edits to files inside `src/` trigger instant refreshes.

## Production Build

```bash
npm run build
npm start
```

`npm run build` performs a production compilation. Use `npm start` to run the compiled app locally.

## Key Features

- Ultra-minimal, editorial layout with high-contrast palette on onyx background.
- Hero section with interactive shader card and reduced-motion fallback.
- Product catalog, detailed personalization flow, and forms powered by `react-hook-form` + Zod.
- Sitemap, robots, and Open Graph image routes for SEO.
- shadcn/ui component library (Slate theme) with Tailwind v4 token-based styling.

## Project Structure

```
src/
  app/              # App Router entries for marketing pages & APIs
  components/       # Reusable UI (site chrome, shadcn/ui primitives)
  lib/              # Metadata builders, product data, shared utilities
  styles/           # Additional style sheets (prose overrides)
```

## Quality

- TypeScript strict mode enabled via `tsconfig.json`.
- ESLint configured with Next.js Core Web Vitals rules (`npm run lint`).
- Tailwind v4 using the PostCSS plugin `@tailwindcss/postcss` with design tokens in `globals.css`.

## Deployment

Deploy the project with any platform that supports Next.js 15 App Router builds (e.g., Vercel, Netlify, or custom Node hosting). Ensure the `NODE_ENV` environment variable is set to `production` before running `npm run build`.
