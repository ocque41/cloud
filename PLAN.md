# Sprint 3 Plan
## Item 1: Harden Vercel dependency installs
- **Description:** Configure the project so that Vercel retries dependency downloads with higher timeouts to avoid transient npm registry network failures during deployment.
- **Acceptance Criteria:**
  1. Repository includes npm configuration and/or Vercel settings that increase fetch retries/timeouts for dependency installs during `vercel build`.
  2. README documents the deployment install behavior and how to verify the fix locally.
- **Status:** ✅ Completed — Added `.npmrc` retry configuration, `vercel.json` install override, and README documentation.

# Sprint 4 Plan
## Item 1: Restore required `public/` assets for production builds
- **Description:** Provide the static assets directory expected by Vercel/Next.js so that deployments succeed without missing output errors.
- **Acceptance Criteria:**
  1. Repository includes a tracked `public/` directory with the non-binary placeholders/assets needed for Next.js to build and export successfully.
  2. Local `npm run build` (mirroring Vercel) completes without errors related to missing output directories, and README mentions the static asset requirement.
- **Status:** ✅ Completed — Added a text-based favicon and documentation, with `npm run build` passing locally.

# Sprint 5 Plan
## Item 1: Restore Next.js runtime routing on Vercel
- **Description:** Ensure Vercel serves the App Router build output instead of returning a platform `NOT_FOUND` error by making the deployment detect the project as a Next.js app.
- **Acceptance Criteria:**
  1. `vercel.json` forces the framework preset to Next.js so Vercel provisions the correct runtime artifacts and no longer expects a static `public/` export.
  2. Documentation outlines how the framework override resolves the 404 and how to verify the fix (e.g., `npm run start`) so the team can confirm routing locally.
- **Status:** ✅ Completed — Added the Next.js framework override and updated README guidance to cover verification via `npm start`.

# Sprint 7 Plan
## Item 1: Hero integration & layout fixes
- **Description:** Implement the marketing shell updates from Sprint 7, including the interactive shader hero, global sidebar placement, and footer layout refinements for the marketing routes.
- **Acceptance Criteria:**
  1. `/src/components/interactive-shader-card/index.tsx` exposes the shader card as a client component with required CSS so that the hero can lazy-load it without SSR errors, including a reduced-motion fallback.
  2. `src/components/site/hero.tsx` dynamically imports the shader within a 16:9 rounded container, provides accessible labeling, and renders a static gradient when `prefers-reduced-motion` is set.
  3. `(marketing)/layout.tsx` renders a sticky, centered sidebar that keeps navigation active states synchronized via `useSelectedLayoutSegments()` and includes the spacious footer layout specified in Sprint 7.
- **Status:** ✅ Completed — Shader wrapper, dynamic hero import, sticky sidebar, and footer updates shipped with passing lint/build.
