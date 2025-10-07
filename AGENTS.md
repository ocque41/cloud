# Repository Guidelines

## Project Structure & Module Organization
Keep feature work inside `src/app`, pairing each route with its layout, server actions, and helpers (for example `src/app/product/[slug]`). Marketing surfaces belong in `src/app/(marketing)` to keep customer-facing URLs clean. Reusable UI lives in `src/components`, hooks in `src/hooks`, and utilities in `src/lib`; mirror their specs alongside the implementation as `component.test.tsx` files or in sibling `__tests__/` folders. Global styles stay in `src/app/globals.css`, while static assets such as logos or favicons sit under `public/` for Next.js to serve directly.

## Build, Test, and Development Commands
Use `npm run dev` to boot the Next.js dev server at http://localhost:3000 and iterate with hot reloading. Run `npm run lint` before committing to enforce the shared ESLint, TypeScript, and Tailwind standards defined in `eslint.config.mjs`. Execute `npm run test` for the Vitest suite, and rely on `npm run build` followed by `npm run start` whenever you need a production smoke test prior to deployment.

## Coding Style & Naming Conventions
Write React 19 components in TypeScript using two-space indentation, single quotes, and functional components by default. Prefer kebab-case filenames (e.g. `user-card.tsx`) for shared modules and stick to named exports. Tailwind v4 utility chains should stay succinct and draw from tokens exposed in `src/lib`. Let Prettier and ESLint formatting stand as the source of truth; avoid alternative formatters or ad-hoc overrides.

## Testing Guidelines
Vitest with React Testing Library is the baseline for component, interaction, and accessibility coverage. Name suites after the feature under test (`profile-card.test.tsx`) and keep snapshots minimal. Mock outbound network or service calls when `NODE_ENV=test`, and ensure `npm run test` passes before opening a pull request.

## Commit & Pull Request Guidelines
Follow Conventional Commits (`feat: add billing summary`) and keep each commit focused. PR descriptions should summarize scope, list executed validations, link issues using `Closes #123`, and attach any relevant UI screenshots or recordings. Call out follow-up work explicitly so reviewers can track outstanding items.

## Security & Configuration Tips
Never commit secrets—store them in `.env.local` and reference them through `process.env`. Validate inbound data with `zod` or equivalent helpers, and keep sensitive logic confined to server components or API routes. After significant layout or accessibility updates, rerun linting and manual accessibility checks to confirm compliance.
