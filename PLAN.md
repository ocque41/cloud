# Sprint 10 Plan

## Item 1: Restore contact page build stability and selection defaults
- **Description:** Align the contact route with Next.js 15 search parameter typing while ensuring catalog selections still default correctly for both products and services.
- **Acceptance Criteria:**
  1. `npm run build` completes without the contact page raising a `searchParams` type error.
  2. Loading `/contact?product=micro-agents` and `/contact?product=software-applications` pre-selects the matching option in the request form dropdown.
- **Status:** ✅ Completed — Contact page now awaits typed search params and preserves selected catalog defaults for products and services.

## Item 2: Constrain product listing blurbs to the ten-word limit
- **Description:** Rewrite each product card summary so `/products` displays copy that is ten words or fewer per stakeholder direction while keeping metadata context accurate.
- **Acceptance Criteria:**
  1. Every `product.short` entry contains ten or fewer words and renders without truncation on `/products`.
  2. Updated blurbs remain concise descriptors that still support the product detail metadata description requirements.
- **Status:** ✅ Completed — All product blurbs now land at ten words or fewer while keeping metadata clarity intact.

# Sprint 8 Plan

## Item 1: Reorder product hero shader card
- **Description:** Move the interactive shader card below the product badge, title, and summary on every product hero while introducing rounded corners so the visual matches the refreshed layout guidance.
- **Acceptance Criteria:**
  1. The marketing product detail page (`/products/[slug]`) renders its badge, headline, and lead paragraph before the shader card, which immediately follows with consistent spacing.
  2. The legacy product detail route (`/product/[slug]`) also shows its badge stack, headline, and summary copy ahead of the shader card, with the primary call-to-actions appearing beneath the card.
  3. The interactive shader card surface uses rounded corners in each hero presentation.
- **Status:** ✅ Completed — Product hero copy precedes the shader card on both routes and the card now renders with rounded corners.

# Sprint 7 Plan

## Item 1: Rework global footer alignment
- **Description:** Adjust the full-height footer so navigation links remain vertically centered while the Cumulus branding and rights notice anchor to the bottom, all content aligned left per stakeholder request.
- **Acceptance Criteria:**
  1. Footer navigation displays as a vertical stack centered vertically within the viewport while left-aligned horizontally.
  2. The Cumulus name and "All rights reserved" notice render at the bottom-left of the footer on all screen sizes.
- **Status:** ✅ Completed — Navigation centers vertically with left alignment and branding locks to the bottom-left.

# Sprint 6 Plan

## Item 1: Expand global footer and add missing DQuote product
- **Description:** Redesign the shared footer so it occupies the full viewport with vertically centered navigation links, and add the DQuote product with complete marketing copy to the catalog.
- **Acceptance Criteria:**
  1. Every rendered page displays the updated footer whose container fills the viewport height on all screen sizes.
  2. Footer navigation renders as a single vertical stack that remains centered vertically and horizontally across responsive breakpoints.
  3. The products listing and detail routes include the new DQuote entry with the provided positioning, feature summary, and target audiences.
  4. README instructions reflect the expanded product lineup and the verification steps executed this sprint.
- **Status:** ✅ Completed — Viewport-sized footer deployed globally, DQuote catalog entry added, and README updated with verification steps.

# Sprint 5 Plan

## Item 1: Repository restructure and consolidation
- **Description:** Merge nested repository structure into a single clean directory, consolidating duplicate files while preserving all unique functionality and git history.
- **Acceptance Criteria:**
  1. Repository path changed from nested `cumulus/cumulus/` to single `cumulus/` directory
  2. All unique files from parent directory merged into nested repository
  3. Duplicate files removed (keeping nested repo versions as priority)
  4. All route conflicts resolved (duplicate products, contact, process pages)
  5. Type errors fixed (Badge variant, Product interface)
  6. Missing dependencies installed (@types/three)
  7. Build succeeds without errors (`npm run build`)
  8. Dev server runs successfully (`npm run dev`)
  9. Git history preserved intact
  10. Vercel configuration updated with correct paths
  11. All documentation updated to reflect new structure
- **Technical Changes:**
  - Moved unique routes from parent: `/contact`, `/product/[slug]`, favicon, Vite shader component
  - Kept nested routes: `/(marketing)` group with all pages, `/api`, `/products/[slug]`
  - Resolved Badge component variant conflict (secondary → subtle)
  - Fixed Product type interface (shortDescription → short)
  - Updated `vercel.json` with correct `outputDirectory: ".next"`
  - Installed `@types/three` for TypeScript support
- **Documentation Updates:**
  - Updated CLAUDE.md with new structure, routes, and Product interface
  - Rewrote README.md with comprehensive project overview
  - Updated AGENTS.md removing nested package references
  - Verified BRAND_GUIDELINES.md (no changes needed)
  - Added Sprint 5 to PLAN.md
- **Status:** ✅ Completed — Repository restructured, all files merged, build passing, documentation updated

---

# Sprint 4 Plan

## Item 1: Consolidate marketing routes under the marketing group
- **Description:** Move the marketing pages (home, products, product detail, process, contact) fully under the `(marketing)` route group to resolve the duplicate path build failures.
- **Acceptance Criteria:**
  1. Only one page exists for each marketing route (`/`, `/products`, `/products/[slug]`, `/process`, `/contact`) so Next.js no longer reports duplicate paths during `npm run build`.
  2. All updated routes continue to render correctly with shared layout, nav, and metadata via the `(marketing)` layout.
- **Status:** ✅ Completed — marketing pages now live solely under the `(marketing)` route group and build succeeds.

# Sprint 3 Plan

## Item 1: Restore mobile sheet navigation visibility
- **Description:** Adjust the sheet component styling so that the mobile navigation content is visible when the overlay appears.
- **Acceptance Criteria:**
  1. Opening the mobile menu on viewports ≤1024px reveals the navigation links without being obscured by the overlay or off-screen positioning.
  2. The sheet remains dismissible via the close button and overlay click, maintaining accessible focus management.
- **Status:** ✅ Completed — Sheet content now anchors to the viewport edges so the navigation links display correctly while keeping dismissal behavior intact.

## Item 2: Simplify featured product section on homepage
- **Description:** Remove the personalization callout card from the home page's featured product section per stakeholder request.
- **Acceptance Criteria:**
  1. The "Featured product you can tailor" section no longer renders the card containing "Personalize this build" copy.
  2. The section layout remains responsive and visually balanced without console warnings.
- **Status:** ✅ Completed — Removed the personalization callout card and smoothed the section copy layout with a single responsive column.

---

# Sprint 2 Plan
## Item 1: Remove binary public assets
- **Description:** Delete binary image files from the repository to satisfy the PR requirements and ensure no references remain.
- **Acceptance Criteria:**
  1. All binary assets (e.g., SVGs) previously committed under `public/` are removed from version control.
  2. Application routes and components build without referencing the deleted files, keeping `npm run build` passing.
- **Status:** ✅ Completed — Binary files under `public/` removed and build verified via `npm run build`.
# Sprint 9 Plan

## Item 1: Expand product and services content architecture
- **Description:** Refresh the catalog experience by introducing structured sections on each product detail view, constraining product card blurbs, and launching a parallel services catalog with dedicated detail routes and request flows.
- **Acceptance Criteria:**
  1. `/products/[slug]` renders Definition, Expertise, Use, and Description sections (with markdown formatting) above the existing "What we can customize" content for every product.
  2. `/products` cards display new blurbs of ten words or fewer and the Personalize action deep-links to `/contact?product=<slug>`.
  3. `/services` and `/services/[slug]` mirror the product listing and detail experience using the provided services portfolio content, including a TikTok advertising paragraph.
- **Status:** ✅ Completed — Product and service catalog content restructured with contact deep links and mirrored service experience.

