# Repository Guidelines

## Project Structure & Module Organization
- App features live in `src/app` (pair routes with layouts, server actions, helpers). Marketing pages sit in `src/app/(marketing)` for clean URLs.
- Shared UI components belong in `src/components`; hooks in `src/hooks`; utilities in `src/lib` with nearby specs in `*.test.tsx` or `__tests__/`.
- Global styles stay in `src/app/globals.css`; static assets (logos, favicons) live under `public/` for direct serving.

## Build, Test, and Development Commands
- `npm run dev`: Start Next.js dev server at http://localhost:3000 with hot reload.
- `npm run lint`: Run ESLint/TypeScript/Tailwind checks; fix issues before committing.
- `npm run test`: Execute Vitest suite (React Testing Library); ensure green before PRs.
- `npm run build` then `npm run start`: Production build and smoke test.

## Coding Style & Naming Conventions
- React 19 + TypeScript; functional components by default; two-space indent; single quotes.
- Filenames in kebab-case for shared modules (e.g., `user-card.tsx`); prefer named exports.
- Tailwind v4 utilities kept concise; draw tokens from `src/lib`. Let Prettier/ESLint handle formatting—avoid ad-hoc overrides.

## Testing Guidelines
- Use Vitest with React Testing Library for components, interactions, and accessibility.
- Name suites after the feature (`profile-card.test.tsx`); keep snapshots minimal.
- Mock outbound services when `NODE_ENV=test`; run `npm run test` before merges.

## Commit & Pull Request Guidelines
- Follow Conventional Commits (e.g., `feat: add billing summary`); keep scope focused.
- PR description should summarize scope, list validations (lint/test/build), link issues (`Closes #123`), and attach relevant UI screenshots/recordings.
- Call out follow-up work explicitly to aid reviewers.

## Security & Configuration Tips
- Never commit secrets; store in `.env.local` and access via `process.env`.
- Validate inbound data with `zod` or similar; keep sensitive logic in server components or API routes.
- After major layout or accessibility updates, rerun lint and manual accessibility checks.
