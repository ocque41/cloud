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
