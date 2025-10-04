# Repository Guidelines

## Project Structure & Module Organization
Source lives in `src/app` with marketing routes grouped under `src/app/(marketing)` to keep clean URLs. Feature-specific pages (for example `src/app/product/[slug]`) own their layout and data fetching. Share UI primitives via `src/components`, reusable hooks in `src/hooks`, and helpers in `src/lib`. Keep co-located tests beside their subjects as `component.test.tsx` or in a sibling `__tests__/` folder. Global styles flow from `src/app/globals.css`, while static assets and favicon variants belong in `public/`.

## Build, Test, and Development Commands
- `npm run dev` — start the Next.js dev server at http://localhost:3000 with hot reload.
- `npm run lint` — run ESLint (per `eslint.config.mjs`) to enforce project style expectations.
- `npm run build` — create the optimized production bundle.
- `npm run start` — serve the built app locally for smoke testing.
- Add `npm run test` (e.g. `vitest run`) once automated coverage lands; document any extra flags in `README.md`.

## Coding Style & Naming Conventions
Author React 19 components in TypeScript with 2-space indentation and single quotes. Prefer functional components, PascalCase for components, and kebab-case for filenames such as `user-card.tsx`. Export shared modules with named exports. Tailwind CSS v4 provides styling—compose concise class lists and rely on utilities exposed in `src/lib` for theme tokens. Avoid ad-hoc formatters that conflict with ESLint or Prettier defaults already in use.

## Testing Guidelines
Adopt Vitest with React Testing Library for rendering and interaction coverage. Name tests after the feature under test, exercising stateful flows, accessibility behavior, and server actions. Run tests with `NODE_ENV=test`, mocking network or 3D shader dependencies as needed. Keep snapshots rare and focused on guaranteeing critical UI structure.

## Commit & Pull Request Guidelines
Commits follow Conventional Commits (`feat: add billing summary`). Bundle related changes into reviewable units and note verification steps in the body. Pull requests should summarize scope, link issues (`Closes #123`), list tests executed, and attach screenshots or recordings for visible UI updates. Highlight follow-ups or open questions before requesting review.

## Security & Configuration Tips
Load secrets from `.env.local` through `process.env` and never commit credential files. Validate external input with `zod` or form resolvers, and keep sensitive logic inside server components or API routes. Audit bundle impact before adding dependencies, and rerun accessibility checks after major layout shifts.
