# Sprint 3 Plan
## Item 1: Harden Vercel dependency installs
- **Description:** Configure the project so that Vercel retries dependency downloads with higher timeouts to avoid transient npm registry network failures during deployment.
- **Acceptance Criteria:**
  1. Repository includes npm configuration and/or Vercel settings that increase fetch retries/timeouts for dependency installs during `vercel build`.
  2. README documents the deployment install behavior and how to verify the fix locally.
- **Status:** ✅ Completed — Added `.npmrc` retry configuration, `vercel.json` install override, and README documentation.
