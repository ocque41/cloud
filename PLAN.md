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

# Sprint 8 Plan
## Item 1: Reinstate homepage sidebar experience
- **Description:** Ensure the marketing shell renders the sidebar navigation on the overview route with the intended responsive behavior so visitors can access navigation affordances on the homepage.
- **Acceptance Criteria:**
  1. Visiting `/` shows the sidebar navigation at the intended breakpoint and highlights the "Overview" link without layout regressions.
  2. Mobile and reduced-width experiences receive an accessible alternate navigation treatment so the page still satisfies the tap target and skip-to-content requirements.
- **Status:** ✅ Completed — Restored the desktop sidebar at `lg` breakpoints and added an inline mobile nav so the overview route remains navigable everywhere.

# Sprint 9 Plan
## Item 1: Finalize Sprint 1 foundations
- **Description:** Close out the remaining Sprint 1 groundwork by codifying the performance budget, palette tokens, spacing scale, and typography hierarchy so the design system has an enforceable baseline.
- **Acceptance Criteria:**
  1. Repository documentation lists the agreed performance budgets (LCP/INP/CLS/TTFB) alongside a pre-launch checklist.
  2. Tailwind v4 configuration exports named tokens for the locked color palette and spacing scale that can be consumed by components.
  3. Global styles define the display, h1–h4, lead, and small typography styles (with sizes/line-heights) and the README records how to apply them.
- **Status:** ✅ Completed — Documented budgets/checklist in the README, exposed palette & spacing tokens via Tailwind, and codified the typography scale in global styles with usage guidance.

# Sprint 10 Plan
## Item 1: Close Sprint 2 outstanding accessibility & layout requirements
- **Description:** Finish the remaining Sprint 2 global chrome tasks by delivering the skip-navigation affordance, consistent focus treatments, and reserving persistent chrome heights to eliminate layout shifts.
- **Acceptance Criteria:**
  1. Header renders a visible skip-to-content link that is focusable via keyboard, and navigation links share consistent focus-visible styling across desktop/mobile variants.
  2. Global chrome elements (header, hero media, footer) reserve their layout space so that Lighthouse/CLS audits report no shifting when assets load, documented in README verification steps.
- **Status:** ✅ Completed — Skip link and shared focus treatment added, chrome heights reserved, and README now covers verification for CLS/accessibility checks.

# Sprint 11 Plan
## Item 1: Restore the original sidebar presentation on the homepage
- **Description:** Reintroduce the homepage sidebar so it matches the initial desktop experience while keeping the responsive/mobile navigation improvements intact.
- **Acceptance Criteria:**
  1. Visiting `/` on a desktop viewport renders the sidebar with the original spacing, typography treatment, and link list ordering that shipped in the first version of the site.
  2. Mobile navigation continues to function as introduced in later sprints without regressions, and the README captures how to verify the sidebar across breakpoints.
- **Status:** ✅ Completed — Sidebar returns at xl viewports with the original spacing, the link set includes Process again, and README instructions outline how to validate desktop vs. mobile navigation.

## Item 2: Complete Sprint 5 responsiveness and accessibility requirements
- **Description:** Address the outstanding Sprint 5 checklist by auditing breakpoints, ensuring tap-target sizing, improving color contrast, and establishing a valid heading outline on every marketing page.
- **Acceptance Criteria:**
  1. Documentation enumerates the breakpoint audit results and highlights any component adjustments needed, with tap targets meeting the 44px minimum across navigation and CTAs.
  2. All marketing routes expose an `<h1>` heading and meet WCAG contrast ratios, with verification steps recorded in the README alongside any design token updates.
- **Status:** ✅ Completed — README now documents the responsive audit, tap-target guarantees, and color contrast changes, while each marketing page opts into an `<h1>` via the Section component and updated tokens.

# Sprint 12 Plan
## Item 1: Recenter the desktop sidebar navigation
- **Description:** Adjust the marketing sidebar so it sits centrally within the viewport on large screens, matching the original presentation while preserving sticky behavior and accessibility affordances.
- **Acceptance Criteria:**
  1. Sidebar remains sticky across marketing pages, vertically centers relative to the viewport on desktop, and keeps its navigation label and spacing intact.
  2. Mobile and inline navigation variants remain unchanged, and regression checks (`npm run lint`, `CI=1 npm run build`) pass after the update.
- **Status:** ✅ Completed — Sidebar now uses a 50% sticky offset with translate centering while mobile/inline nav variants stay untouched and regression checks pass.

## Item 2: Complete Sprint 6 performance hardening tasks
- **Description:** Finish the outstanding Sprint 6 deliverables by prioritizing system fonts, auditing client components on `/`, documenting asset sizing rules, and capturing a Lighthouse smoke test summary.
- **Acceptance Criteria:**
  1. README and/or supporting docs record the system font stack, JS audit results for the homepage, and guidance on avoiding oversized media.
  2. A Lighthouse (or comparable) smoke test is run with observed metrics documented alongside follow-up actions, and all changes pass lint/build checks.
- **Status:** ✅ Completed — README documents the system-first font stack, client-component audit, asset sizing guardrails, and the latest Lighthouse metrics with follow-ups; lint/build validations succeeded.

# Sprint 13 Plan
## Item 1: Finalize Sprint 7 hero integration details
- **Description:** Ensure the hero shader integration satisfies the original Sprint 7 acceptance criteria, including reduced-motion affordances and verification guidance for the interactive media shell.
- **Acceptance Criteria:**
  1. `src/components/site/hero.tsx` lazy-loads the shader with `next/dynamic` and shows a static gradient fallback when users prefer reduced motion, while keeping the 16:9 rounded container and accessible labelling intact.
  2. Documentation (README) outlines how to verify the interactive shader, CTA styling, and reduced-motion fallback so teams can confirm Sprint 7 deliverables end to end.
- **Status:** ✅ Completed — Hero now short-circuits to a static gradient when reduced motion is requested, retains the lazy-loaded shader for other users, and the README documents verification steps for the hero and CTA treatments.
