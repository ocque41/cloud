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
# Sprint 5 Plan

## Item 1: Refresh product portfolio and contact flows
- **Description:** Replace the existing portfolio content with the new product list, enhance product browsing, and ensure personalization actions lead to the contact form with the chosen product pre-selected.
- **Acceptance Criteria:**
  1. `/products` displays the four provided products with updated copy (≤10 words per card) and each card links to its respective detail route.
  2. Clicking any "Personalize" control (from the product grid or detail pages) routes to `/contact?product=<slug>` and the contact form loads with that product selected.
  3. Each product detail page renders the supplied narrative organized via Markdown styling and features the interactive shader hero.
- **Status:** ✅ Completed — grid, detail, and contact experiences updated with new portfolio content and behavior.

