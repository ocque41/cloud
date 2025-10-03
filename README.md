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

`npm run build` performs a production compilation. Use `npm start` to run the compiled app locally. The build expects the tracked `public/`
directory (containing assets like `favicon.svg`); keep this folder in place so static asset references resolve correctly during runtime.

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

## Performance Budget & Checklist

The marketing shell targets the following Core Web Vitals budgets on 4G mobile (75th percentile):

- **Largest Contentful Paint (LCP):** ≤ 2.3s
- **Interaction to Next Paint (INP):** ≤ 200ms
- **Cumulative Layout Shift (CLS):** ≤ 0.10
- **Time to First Byte (TTFB):** ≤ 300ms

Pre-release checklist:

1. Run `npm run build`, load `/`, and confirm the sticky header, hero media, and footer reserve their layout slots (no CLS regressions).
2. Record a Lighthouse navigation report (mobile, timespan) and confirm all budgets are within threshold.
3. Validate interaction latency with the Chrome INP debugger on a slow CPU throttle.
4. Verify server response times in Vercel (or hosting provider) analytics stay under the TTFB budget.

### JavaScript & client-component audit

- Homepage client-side code is limited to the interactive shader hero, the sticky header (mobile sheet), and the navigation components that depend on `useSelectedLayoutSegments`.
- All other homepage sections (feature copy, process overview, footer) remain server components to minimize shipped JavaScript.
- Re-run `npx next lint` to surface accidental `"use client"` directives before merging feature branches.

### System font stack

- Global typography now defaults to a system-first stack (`-apple-system`, `BlinkMacSystemFont`, `"Segoe UI"`, `system-ui`) before falling back to `Inter` and web-safe fonts.
- This ensures the site renders quickly without waiting for custom font downloads while still matching prior visual metrics when `Inter` is available.

### Asset sizing rules

- Favor vector assets (SVG) for logos and icons; store them under `public/`.
- For raster imagery, export at 2× the rendered resolution, then serve with `<Image>` or `width`/`height` attributes to avoid layout shifts and oversized downloads.
- Keep hero media within the `aspect-[16/9]` container provided in `Hero`—replace the shader fallback with gradients or compressed MP4/WebM clips ≤1 MB if needed.

### Lighthouse smoke test

- Command: `npx lighthouse http://localhost:3000 --preset=desktop --chrome-path=/usr/bin/google-chrome-stable --chrome-flags="--headless --no-sandbox --disable-dev-shm-usage" --output=json`
- Results (desktop preset, production build served via `npm start`): Performance score 100, LCP 0.76 s, CLS 0.00, INP not recorded (no user interactions in script; all observed input latency <50 ms).
- Follow-up: continue monitoring hero shader GPU cost on lower-end devices; no immediate regressions observed.

## Accessibility & Layout Verification

- On any page, press <kbd>Tab</kbd> to reveal the “Skip to main content” link and ensure focus moves to the primary content region.
- Tab through header, sidebar, and mobile navigation links to validate consistent focus-visible styling across breakpoints.
- On desktop (≥1280px), confirm the sidebar renders alongside the page body with its original spacing and copy order. Drop below 1024px to see the inline navigation replacement.

### Hero shader verification

- Load the homepage at desktop width to confirm the hero mounts with a static gradient placeholder that transitions into the interactive shader once the client bundle arrives.
- Move the pointer across the hero to see the shader respond. Switch the operating system to “Reduce Motion” and reload; the hero should stay on the static gradient while the CTA button retains its light background (`#DEDDD9`) and dark text (`#171717`).
- With reduced motion enabled, tab to the “Request a Custom Build” CTA and confirm the focus ring (`ring-2` with dark offset) remains visible against the muted palette.
- In Safari 15 (or any browser that only exposes `MediaQueryList#addListener`), reload the homepage and confirm the shader mounts without console errors while continuing to respect the system motion preference.
- When verifying fixes to the hero shader, finish with `npm run lint` and `CI=1 npm run build` to ensure the regression suite stays green.

### Responsive audit

- ✅ ≤375px: Inline navigation wraps with 44px tap targets, hero media maintains aspect ratio, and form inputs retain full width.
- ✅ 768px: Grid layouts collapse to two columns, sidebar is replaced by inline navigation, and CTAs stay at least 44px tall.
- ✅ 1024px: Sidebar remains hidden, ensuring copy-first layouts for tablets while cards align in two-column grids.
- ✅ 1440px: Desktop sidebar returns with 48px min width, hero typography scales to the display lockup, and section gutters respect the spacing scale.
- ✅ 1920px+: Max-width container (1200px) centers the experience; the sidebar stays sticky without overlapping footer content.

### Tap targets & contrast

- Navigation links (header buttons, sidebar items, inline nav chips) use a `min-h-[44px]` rule to satisfy touch area requirements.
- Primary and muted buttons render dark text on light backgrounds or vice versa to maintain ≥4.5:1 contrast.
- Palette updates brighten the muted color token (`#b4b2ac`) so body copy, badges, and borders stay compliant on onyx surfaces.

### Heading outline

- Every marketing route now includes a semantic `<h1>`: the homepage hero provides it, and interior pages opt into `headingLevel={1}` via the shared `Section` component.
- Subsequent sections keep descending headings (`h2`+) so screen readers announce a logical outline.

## Design Tokens & Typography

### Palette & Spacing

- `surface.DEFAULT` (`#171717`), `surface.foreground` (`#DEDDD9`), and `surface.muted` (`#b4b2ac`) are exposed through Tailwind classes (e.g., `bg-surface`, `text-surface-foreground`).
- The spacing scale is locked in `tailwind.config.ts` (`0, 1, 2, 3, 4, 6, 8, 10, 12, 16, 20, 24, 32` → `0px`–`8rem`). Use Tailwind spacing utilities (`mt-6`, `px-4`, etc.) to stay on-spec.
- CSS custom properties (e.g., `var(--space-4)`) are available inside `globals.css` for bespoke layout needs.

### Type Scale

- `.display` — oversized editorial lockup (clamped `3.5rem`–`6rem`).
- Heading elements (`h1`–`h4`) and the optional utility classes `.heading-1` … `.heading-4` share responsive sizes and tracking, pre-set in `globals.css`.
- `.lead` — descriptive supporting text sized between `1rem` and `1.25rem` with relaxed line-height.
- `.small` — subdued auxiliary copy (`0.875rem`).

Apply the semantic heading tags wherever possible. Use the matching `.heading-*` class when a semantic element is impractical (e.g., within a component slot) to keep the visual rhythm aligned with the typography scale.

## Deployment

Deploy the project with any platform that supports Next.js 15 App Router builds (e.g., Vercel, Netlify, or custom Node hosting). Ensure the `NODE_ENV` environment variable is set to `production` before running `npm run build`.

### Vercel deployment notes

- The repository defines an `.npmrc` that increases npm fetch retries and timeouts to mitigate transient registry timeouts during CI installs.
- `vercel.json` pins the install step to `npm ci --no-audit --progress=false`. You can reproduce the deployment install locally with:

  ```bash
  npm ci --no-audit --progress=false
  npm run build
  ```

  This mirrors the commands Vercel executes during `vercel build`.
- `vercel.json` pins the framework preset to `nextjs`, ensuring Vercel provisions the App Router runtime instead of falling back to a
  static-only deployment (which would surface `404: NOT_FOUND`).
- Ensure the tracked `public/` directory (including `favicon.svg`) is present in deployments so static assets resolve when the Next.js
  runtime serves pages.
- After a production build, run `npm start` and load `http://localhost:3000` to confirm routing works end-to-end before promoting a
  deployment.
