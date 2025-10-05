# Repository Guidelines

## Project Structure & Module Organization
Keep feature code inside `src/app`, with marketing pages in `src/app/(marketing)` to preserve clean campaign URLs. Product experiences (for example `src/app/product/[slug]`) own their layouts, server actions, and helper modules locally. Share UI primitives from `src/components`, reusable hooks from `src/hooks`, and cross-cutting utilities from `src/lib`. Co-locate component tests as `component.test.tsx` or place them in sibling `__tests__/` directories. Global styles flow through `src/app/globals.css`, while images and static assets belong in `public/`.

## Build, Test, and Development Commands
Use `npm run dev` for the Next.js dev server with hot reload on http://localhost:3000. Run `npm run lint` before committing to enforce the ESLint rules defined in `eslint.config.mjs`. Ship-ready bundles come from `npm run build`, and `npm run start` serves the production build locally for smoke checks. Reserve `npm run test` for the Vitest suite once implemented; document ad-hoc flags in `README.md`.

## Coding Style & Naming Conventions
Author React 19 components in TypeScript with 2-space indentation and single quotes. Favor functional components, keep filenames in kebab-case (for example `user-card.tsx`), and export shared modules with named exports. Tailwind CSS v4 utilities should stay concise and rely on shared theme tokens from `src/lib`. Do not add formatter configs that conflict with the existing ESLint and Prettier setup.

## Testing Guidelines
Adopt Vitest with React Testing Library for rendering, accessibility, and interaction coverage. Name specs after the feature they validate and keep snapshots minimal. Mock network or service calls under `NODE_ENV=test`, and run the suite locally before pushing. Highlight high-value server actions, hooks, and interactive components with targeted tests.

## Commit & Pull Request Guidelines
Follow Conventional Commits (e.g., `feat: add billing summary`) and group related changes per commit. Mention verification steps in commit bodies when they add confidence. Pull requests should summarize scope, link issues using `Closes #123`, enumerate tests executed, and attach UI screenshots or recordings. Call out follow-up work or open questions before requesting review.

## Security & Configuration Tips
Keep secrets in `.env.local` and access them through `process.env`. Validate incoming data with `zod` or equivalent resolvers, and confine sensitive logic to server components or API routes. Review dependency size and re-run accessibility checks after significant layout updates.
