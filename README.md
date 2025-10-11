# Cumulus - AI-Powered Business Solutions

Cumulus offers personalized AI product builds for enterprise and small business. This repository contains the marketing and product showcase website built with Next.js 15, React 19, TypeScript, Tailwind CSS v4, and shadcn/ui components.

## 🚀 Quick Start

### Prerequisites
- Node.js 20+
- npm or pnpm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site. Hot reload is enabled for all files in `src/`.

### Production Build

```bash
npm run build
npm start
```

### Linting

Run this command to verify the refreshed product and services catalog content alongside the existing lint rules.

```bash
npm run lint
```

### Verification

Run these checks after updating marketing messaging or layouts:

1. `npm run lint`
2. Visit `/` and confirm the hero states “We build and run software for small businesses.” with the supporting line “We connect your customer path from first click to paid.” and the “Book a 15-min check” primary CTA beside “See examples.” Scroll to verify the updated “How we work” cards, “What we do” bullets, Services grid, Proof strip, quick case tiles, pricing snapshot, FAQ, and contact bar reflect the newest concise copy.
3. Visit `/case-studies` and confirm the hero highlights the same promise with the refreshed bullets and CTAs, the services summary mirrors the new statements, the API tabs reference the minimal step copy, and the quick examples list the five business types using the latest descriptions.
4. Run `npm run legal:lint` to validate legal JSON configuration for metadata, processors, products, and services.
5. Execute `npm run test` for unit coverage on legal schemas and `npm run test:e2e` for Playwright checks across `/es|/en` privacy and terms pages.
6. Build the site (`npm run build` + `npm start`) or start the dev server, then run `npm run legal:links` in another terminal to ensure external legal links stay healthy.

## ✨ Key Features

- **Ultra-minimal Design**: Editorial layout with high-contrast palette (#171717 background, #deddd9 foreground)
- **Interactive 3D Elements**: WebGL shader card powered by React Three Fiber and Three.js
- **Product & Services Showcase**: 5 AI-powered products plus 4 delivery services with detailed customization tracks
- **Smart Routing**: Marketing pages organized under route groups for clean architecture
- **Form Handling**: Contact forms with react-hook-form + Zod validation
- **SEO Optimized**: Sitemap, robots.txt, and Open Graph image generation
- **Modern Stack**: Next.js 15 App Router with React Server Components
- **Type Safety**: TypeScript strict mode throughout
- **Styling**: Tailwind CSS v4 with CSS-first configuration and OKLCH color space
- **Component Library**: 40+ shadcn/ui components (New York variant)

## 📁 Project Structure

```
cumulus/
├── src/
│   ├── app/
│   │   ├── (marketing)/          # Marketing route group
│   │   │   ├── page.tsx          # Home page (/)
│   │   │   ├── products/         # Product catalog
│   │   │   │   ├── page.tsx      # Product listing (/products)
│   │   │   │   └── [slug]/       # Product details (/products/[slug])
│   │   │   ├── contact/          # Contact form (/contact)
│   │   │   ├── docs/             # Documentation pages
│   │   │   ├── services/         # Services page and detail routes
│   │   │   └── process/          # Process page
│   │   ├── product/[slug]/       # Alternative product detail with 3D shader
│   │   ├── api/                  # API routes
│   │   │   └── request/          # Contact form handler (Edge Runtime)
│   │   ├── globals.css           # Tailwind v4 theme configuration
│   │   └── layout.tsx            # Root layout
│   ├── components/
│   │   ├── ui/                   # shadcn/ui primitives
│   │   └── interactive-shader-card/  # Three.js WebGL component
│   ├── hooks/                    # Custom React hooks
│   ├── lib/
│   │   ├── products.ts           # Product data and types
│   │   └── utils.ts              # Utility functions (cn, etc.)
│   └── styles/                   # Additional stylesheets
├── public/                       # Static assets
├── CLAUDE.md                     # AI assistant guidance
├── AGENTS.md                     # Development guidelines
├── BRAND_GUIDELINES.md           # Design system documentation
└── PLAN.md                       # Sprint history and planning

```

## 🎨 Tech Stack

### Core
- **Framework**: Next.js 15 (App Router)
- **React**: 19.1.0
- **TypeScript**: 5.x (strict mode)
- **Styling**: Tailwind CSS v4 with PostCSS plugin

### UI & Components
- **Component Library**: shadcn/ui (40+ Radix UI primitives)
- **3D Graphics**: React Three Fiber + Three.js
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Theme**: CSS variables with OKLCH color space

### Forms & Validation
- **Forms**: react-hook-form 7.63.0
- **Validation**: Zod 4.1.11
- **Resolvers**: @hookform/resolvers

### Additional Libraries
- **Markdown**: react-markdown
- **Charts**: recharts
- **Carousels**: embla-carousel-react
- **Notifications**: sonner
- **Utilities**: clsx, tailwind-merge, class-variance-authority

## 🛠️ Development

### Code Conventions
- 2-space indentation
- Single quotes
- Named exports for shared modules
- Components: PascalCase
- Files: kebab-case (`product-card.tsx`)

### Path Aliases
```typescript
@/*        → ./src/*
@/components → ./src/components
@/ui       → ./src/components/ui
@/lib      → ./src/lib
@/hooks    → ./src/hooks
```

### Commit Conventions
Follow [Conventional Commits](https://www.conventionalcommits.org/):
- `feat:` - New features
- `fix:` - Bug fixes
- `refactor:` - Code refactoring
- `docs:` - Documentation updates
- `style:` - Code style changes
- `test:` - Test additions/updates
- `chore:` - Maintenance tasks

## 🌐 Deployment

### Vercel (Recommended)
This project is optimized for Vercel deployment:

```json
{
  "buildCommand": "npm run build",
  "installCommand": "npm ci --no-audit --progress=false",
  "outputDirectory": ".next"
}
```

Push to your Git repository and connect to Vercel for automatic deployments.

### Other Platforms
Compatible with any platform supporting Next.js 15:
- Netlify
- Railway
- AWS Amplify
- Custom Node.js hosting

**Environment**: Set `NODE_ENV=production` before building.

## 📚 Documentation

- **[CLAUDE.md](./CLAUDE.md)**: Detailed technical documentation for AI assistants
- **[AGENTS.md](./AGENTS.md)**: Repository structure and development guidelines
- **[BRAND_GUIDELINES.md](./BRAND_GUIDELINES.md)**: Complete design system and brand guidelines
- **[PLAN.md](./PLAN.md)**: Sprint history and project planning

## 🔒 Security

- Never commit secrets - use `.env.local` with `process.env`
- Validate all external inputs with Zod schemas
- Keep sensitive logic in server components
- API routes use Edge Runtime for security and performance

## 📄 License

Proprietary - Cumulus © 2025

## 🤝 Contributing

This is a private project. For team members: follow the guidelines in [AGENTS.md](./AGENTS.md) and maintain code quality standards.
