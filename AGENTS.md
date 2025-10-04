# Repository Guidelines

## Project Structure & Module Organization
Keep the main Next.js app under `src/app`; colocate pages, layouts, and handlers there. Marketing pages are organized under the `(marketing)` route group for clean URL structure. Share UI through `src/components`, hooks through `src/hooks`, and reusable helpers in `src/lib`. Place tests beside their targets as `*.test.ts(x)` or in a mirrored `__tests__/` directory. Load static assets from `public/`. Root configs (`next.config.ts`, `postcss.config.mjs`, `tsconfig.json`, `vercel.json`) define global behavior.

### Directory Structure
```
src/app/
├── (marketing)/      # Route group for marketing pages
│   ├── page.tsx      # Home (/)
│   ├── products/     # Product catalog
│   ├── contact/      # Contact form
│   ├── docs/         # Documentation
│   ├── services/     # Services
│   └── process/      # Process
├── product/[slug]/   # Alternative product detail with 3D shader
├── api/              # API routes
├── globals.css       # Tailwind theme
└── layout.tsx        # Root layout
```

## Build, Test, and Development Commands
Use `npm run dev` to start local development at http://localhost:3000. Run `npm run build` to produce the production bundle and `npm run start` to serve it. Use `npm run lint` to check code quality with ESLint. Add a `test` script (for example `"test": "vitest run"`) before committing automated checks, and document new tooling in the README.

## Coding Style & Naming Conventions
Author code in TypeScript targeting React 19 and Next.js 15. Use 2-space indentation, single quotes, and named exports for shared modules. Components live in PascalCase; files use kebab-case (`user-card.tsx`). Styling runs through Tailwind CSS v4—keep class lists focused and rely on centralized theme helpers in `src/lib`. Lint via `eslint.config.mjs`; integrate additional formatters only if they respect existing rules.

## Testing Guidelines
Prefer Vitest with React Testing Library for UI coverage. Name tests after the feature or component under test and ensure they pass with `NODE_ENV=test`. Capture edge cases from Radix primitives, server actions, and form validation. Keep snapshot usage minimal and exercise behaviors that affect accessibility or stateful flows.

## Commit & Pull Request Guidelines
Follow Conventional Commits (`feat: add billing summary`). Group changes into reviewable chunks and note verification steps—include screenshots or screen recordings for UI updates. Reference tickets using `Closes #123` where applicable. Pull requests should summarize scope, list testing performed, and flag any follow-up tasks.

## Security & Configuration Tips
Never commit secrets; load them from `.env.local` using `process.env`. Validate external inputs with `zod` or form resolvers, and keep sensitive logic inside server components or route handlers. Watch bundle size when introducing new libraries, and audit accessibility after major layout or theme changes.
