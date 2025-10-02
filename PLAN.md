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
