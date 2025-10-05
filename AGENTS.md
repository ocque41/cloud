# Repository Guidelines

## Project Structure & Module Organization
- Feature surfaces live in `src/app`; marketing routes stay under `src/app/(marketing)` to keep friendly campaign URLs.
- Product experiences such as `src/app/product/[slug]` own their layouts, server actions, and helpers locally.
- Share UI primitives from `src/components`, hooks from `src/hooks`, and cross-cutting utilities from `src/lib`.
- Co-locate component tests as `component.test.tsx` or place them in sibling `__tests__/` folders.
- Global styles flow through `src/app/globals.css`, and static assets always belong in `public/`.

## Build, Test, and Development Commands
- `npm run dev` spins up the Next.js dev server with hot reload at http://localhost:3000.
- `npm run lint` checks TypeScript, React, and Tailwind rules defined in `eslint.config.mjs`.
- `npm run build` creates the production bundle; run `npm run start` afterward for a local smoke test.
- `npm run test` executes the Vitest suite once implemented—document temporary flags in `README.md`.

## Coding Style & Naming Conventions
- Write React 19 components in TypeScript with 2-space indentation and single quotes.
- Favor functional components, use kebab-case filenames (for example `user-card.tsx`), and export shared modules with named exports.
- Keep Tailwind CSS v4 utility chains concise and prefer tokens configured in `src/lib` theme helpers.
- Respect the existing ESLint and Prettier configuration; do not introduce competing formatters.

## Testing Guidelines
- Use Vitest with React Testing Library for rendering, interaction, and accessibility coverage.
- Name specs after the feature under test and keep snapshots minimal.
- Mock network or service calls under `NODE_ENV=test`, then run `npm run test` before pushing.
- Prioritize targeted coverage for server actions, custom hooks, and interactive components.

## Commit & Pull Request Guidelines
- Follow Conventional Commits (for example `feat: add billing summary`) and group related changes per commit.
- Note validation steps in commit bodies when they add confidence.
- PRs should summarize scope, link issues with `Closes #123`, enumerate tests executed, and attach relevant UI screenshots or recordings.
- Call out follow-up work or open questions before requesting review.

## Security & Configuration Tips
- Store secrets in `.env.local` and access them with `process.env`.
- Validate inbound data with `zod` or equivalent schema resolvers.
- Keep sensitive logic in server components or API routes and rerun linting plus accessibility checks after major layout changes.
