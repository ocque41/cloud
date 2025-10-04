# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15 application using React 19, TypeScript, and Tailwind CSS v4. The project is a product showcase website for Cumulus, featuring AI-powered business solutions. It leverages shadcn/ui components with Radix UI primitives, following the "new-york" style variant with CSS variables for theming.

## Development Commands

```bash
# Start development server (runs on http://localhost:3000)
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Note: Currently no test or lint scripts configured
# Add a test script (e.g., "test": "vitest run") before committing automated checks
```

## Architecture

### Project Structure
- **Main app**: `src/app/` - Pages, layouts, and route handlers
- **Components**: `src/components/` - Shared UI components
- **Hooks**: `src/hooks/` - Custom React hooks
- **Utils/Lib**: `src/lib/` - Reusable helpers and utilities
- **Public**: `public/` - Static assets

### Framework & Routing
- **Next.js 15** with App Router (`src/app/` directory)
- React Server Components by default (use `"use client"` for interactivity)
- Routes:
  - `/` - Home page (`src/app/page.tsx`)
  - `/products` - Product listing (`src/app/products/page.tsx`)
  - `/product/[slug]` - Dynamic product detail pages (`src/app/product/[slug]/page.tsx`)
  - `/contact` - Contact form with product query param support (`src/app/contact/page.tsx`)
- Product data managed in `src/lib/products.ts` with TypeScript interfaces

### Styling System
- **Tailwind CSS v4** with `@tailwindcss/postcss` plugin
- CSS-first configuration via `@theme inline` in `src/app/globals.css`
- No traditional `tailwind.config.js` file
- Theme uses OKLCH color space for better color interpolation
- Dark mode support via `@custom-variant dark (&:is(.dark *))`
- Animation utilities from `tw-animate-css`
- Custom CSS variables for theming (background, foreground, primary, etc.)

### Component Structure
- **shadcn/ui** components in `src/components/ui/`
  - 40+ Radix UI primitives installed
  - "new-york" style variant
  - Class variants managed with `class-variance-authority`
  - Styling via `cn()` utility in `src/lib/utils.ts` (combines clsx + tailwind-merge)
- **Custom components** in `src/components/`
  - `interactive-shader-card` - React Three Fiber WebGL component with standalone Vite config
    - Requires `"use client"` directive
    - Mobile and desktop interaction support
    - Can be imported directly in Next.js pages

### Path Aliases (tsconfig.json)
```typescript
@/*        → ./src/*
@/components → ./src/components
@/ui       → ./src/components/ui
@/lib      → ./src/lib
@/hooks    → ./src/hooks
```

### shadcn/ui Configuration
Settings in `components.json`:
- Style: "new-york"
- RSC: true (React Server Components enabled)
- Base color: "slate"
- CSS variables: true
- Icon library: `lucide-react`
- CSS path: `src/app/globals.css`

### Key Dependencies
- **UI Framework**: Radix UI primitives, shadcn/ui
- **Forms**: react-hook-form, @hookform/resolvers, zod (v4.1.11)
- **Content**: react-markdown for rendering product descriptions
- **Charts**: recharts with custom chart components
- **Theming**: next-themes
- **Notifications**: sonner
- **Date handling**: date-fns, react-day-picker
- **Carousels**: embla-carousel-react
- **3D Graphics**: @react-three/fiber, three
- **Animation**: framer-motion

## Code Conventions

### TypeScript & Naming
- TypeScript strict mode enabled
- Target: ES2017
- Use 2-space indentation, single quotes
- Named exports for shared modules
- Components: PascalCase
- Files: kebab-case (`user-card.tsx`)
- Test files: `*.test.ts(x)` or in `__tests__/` directory

### Component Patterns
```typescript
// Client components (for hooks, interactivity)
"use client"

import { useState } from "react"

export default function ClientComponent() {
  // Component code
}

// Server components (default, no directive needed)
export default function ServerComponent() {
  // Component code
}
```

### Styling Pattern
```tsx
import { cn } from "@/lib/utils"

// Combine classes with cn() utility
<div className={cn("base-classes", conditionalClass && "conditional", className)} />
```

### Form Pattern
- Use react-hook-form with zod resolver for validation
- Form components available in `@/components/ui/form`
- Validate external inputs with zod schemas
- Keep sensitive logic in server components or route handlers

## Application-Specific Patterns

### Product Data Management
Products are defined in `src/lib/products.ts`:
```typescript
interface Product {
  slug: string;
  name: string;
  expertise: string;
  use: string;
  shortDescription: string; // Max 10 words for cards
  fullDescription: string;  // Markdown for detail page
}

// Access products via:
import { products, getProductBySlug } from "@/lib/products"
```

### Markdown Rendering
Product detail pages use `react-markdown` with custom styled components:
- Custom heading, paragraph, list components
- Tailwind prose classes for typography
- Dark mode prose variants included

### Navigation Patterns
- Product cards link to `/product/[slug]`
- "Personalize" buttons navigate to `/contact?product=[slug]`
- Use Next.js `Link` component for client-side navigation
- Use `useRouter()` for programmatic navigation

## Commit & Development Guidelines

### Conventional Commits
Follow format: `feat: add billing summary`, `fix: resolve auth bug`
- Group changes into reviewable chunks
- Reference tickets with `Closes #123`
- Include screenshots/recordings for UI updates
- Note verification steps in PR description

### Security
- Never commit secrets - use `.env.local` with `process.env`
- Validate external inputs with zod
- Keep sensitive logic in server components
- Watch bundle size when adding libraries
- Audit accessibility after layout/theme changes

## Special Notes

### Interactive Shader Card
`src/components/interactive-shader-card/` contains a Vite-based React app:
- Requires `"use client"` directive when imported
- Uses @react-three/fiber for WebGL rendering
- Handles mouse (desktop) and touch (mobile) interactions
- Has its own `vite.config.ts`

### Tailwind v4 Migration
This project uses Tailwind CSS v4:
- Configuration in CSS via `@theme inline` in `globals.css`
- PostCSS plugin: `@tailwindcss/postcss`
- No `tailwind.config.js` file
- Theme uses OKLCH color space
- Custom properties defined for light/dark modes

### Font Loading
Geist Sans and Geist Mono loaded via `next/font/google` in `src/app/layout.tsx`:
```typescript
import { Geist, Geist_Mono } from "next/font/google";
// Applied via CSS variables --font-geist-sans and --font-geist-mono
```

