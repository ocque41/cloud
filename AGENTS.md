# Repository Guidelines

## Project Structure & Module Organization
Source code lives under `src/app`, with campaign-facing routes grouped in `src/app/(marketing)` so URLs stay clean. Feature areas such as `src/app/product/[slug]` own their layouts, data fetching, and local helpers. Share UI primitives from `src/components`, hooks from `src/hooks`, and utilities from `src/lib`. Keep tests either co-located as `component.test.tsx` or in sibling `__tests__/` folders. Global styles flow from `src/app/globals.css`, and static assets remain in `public/`.

## Build, Test, and Development Commands
- `npm run dev` – Start the Next.js dev server with hot reload at http://localhost:3000.
- `npm run lint` – Run ESLint (configured in `eslint.config.mjs`) to enforce project conventions.
- `npm run build` – Produce an optimized production bundle.
- `npm run start` – Serve the built bundle locally for sanity checks.
- `npm run test` – Reserved for Vitest once suite lands; document custom flags in `README.md`.

## Coding Style & Naming Conventions
Author React 19 components in TypeScript using 2-space indentation and single quotes. Prefer functional components and PascalCase names, while files stay kebab-case (for example `user-card.tsx`). Export shared modules with named exports. Compose Tailwind CSS v4 utility classes sparingly and pull theme tokens from helpers in `src/lib`. Avoid introducing formatters that conflict with the existing ESLint and Prettier setup.

## Testing Guidelines
Use Vitest with React Testing Library to cover rendering, accessibility, and interactive flows. Name specs after the feature they exercise, keep snapshots minimal, and mock external services when running under `NODE_ENV=test`. Run tests locally before pushing feature branches and ensure high-value server actions, hooks, and components are covered.

## Commit & Pull Request Guidelines
Follow Conventional Commits (for example `feat: add billing summary`) and bundle related updates per commit. Mention verification steps in the commit body when they add confidence. Pull requests should summarize scope, link issues with `Closes #123`, list tests executed, and attach screenshots or recordings for UI changes. Call out follow-up work or open questions before requesting review.

## Security & Configuration Tips
Store secrets in `.env.local` and access them via `process.env`; never commit credential files. Validate incoming data with `zod` or equivalent resolvers, and keep sensitive logic inside server components or API routes. Audit dependency weight and rerun accessibility checks after significant layout updates.
