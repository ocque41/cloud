# Cumulus Brand Guidelines

## Brand Overview

Cumulus is a personalized product build service with an ultra-minimal, editorial aesthetic. The design system emphasizes high contrast, clean typography, and intentional use of space to create a sophisticated, professional experience.

**Brand Essence:** Precision, clarity, and customization

---

## Color Palette

### Primary Colors

| Color | Hex | Usage |
|-------|-----|-------|
| **Background** | `#171717` | Primary background (onyx/dark charcoal) |
| **Foreground** | `#deddd9` | Primary text color (warm off-white) |
| **Muted** | `#454443` | Secondary text, borders, disabled states (medium gray) |

### Secondary Colors

| Color | Hex | Usage |
|-------|-----|-------|
| **Lead Text** | `#bdbcb7` | Subtitle text, lead copy (lighter gray) |
| **Selection Background** | `#222222` | Text selection background |
| **Selection Text** | `#ffffff` | Text selection foreground |
| **Button Hover** | `#f2f1ed` | Button hover state (light cream) |
| **Muted Hover** | `#565553` | Muted button hover state |

### CSS Variables

```css
:root {
  --bg: #171717;
  --fg: #deddd9;
  --muted: #454443;
}
```

### Color Usage Guidelines

- **DO** maintain the high-contrast ratio between background (#171717) and foreground (#deddd9)
- **DO** use muted colors for less important information
- **DON'T** introduce additional colors without brand approval
- **DON'T** use pure black (#000000) or pure white (#ffffff) except for selection states

---

## Typography

### Font Family

**Primary:** Inter
**Fallbacks:** "Helvetica Neue", Arial, sans-serif

```css
font-family: "Inter", "Helvetica Neue", Arial, sans-serif;
```

### Type Scale

#### Display
- **Size:** `clamp(2.8rem, 4vw + 1rem, 6rem)`
- **Line Height:** 0.95 (tight)
- **Letter Spacing:** -0.02em
- **Usage:** Hero headlines, main page titles

```css
.display {
  font-size: clamp(2.8rem, 4vw + 1rem, 6rem);
  line-height: 0.95;
  letter-spacing: -0.02em;
}
```

#### Lead
- **Size:** `clamp(1rem, 0.6vw + 0.8rem, 1.25rem)`
- **Color:** `#bdbcb7`
- **Usage:** Subheadings, introductory copy

```css
.lead {
  font-size: clamp(1rem, 0.6vw + 0.8rem, 1.25rem);
  color: #bdbcb7;
}
```

#### Small
- **Size:** `0.875rem` (14px)
- **Usage:** Captions, fine print, metadata

```css
.small {
  font-size: 0.875rem;
}
```

### Typography Guidelines

- **DO** use antialiased rendering for all text
- **DO** use tight line-height (0.95) for display text
- **DO** use negative letter-spacing (-0.02em) for large headings
- **DON'T** use font weights lighter than 400 (regular)
- **DON'T** use italics except for emphasis in body copy

---

## Buttons

### Brand Button (Primary CTA)

**Usage:** Primary call-to-action (e.g., "Request Build")

- **Background:** `#deddd9`
- **Text:** `#171717`
- **Hover Background:** `#f2f1ed`
- **Border Radius:** `rounded-full` (pill shape)
- **Text Transform:** `uppercase`
- **Letter Spacing:** `wide` (tracking-wide)

```tsx
<Button variant="brand">Request Build</Button>
```

### Default Button

- **Background:** `var(--fg)` (#deddd9)
- **Text:** `var(--bg)` (#171717)
- **Hover:** `#f2f1ed`

### Muted Button

- **Background:** `var(--muted)` (#454443)
- **Text:** `var(--fg)` (#deddd9)
- **Hover:** `#565553`

### Outline Button

- **Border:** `1px solid var(--muted)` (#454443)
- **Text:** `var(--fg)` (#deddd9)
- **Hover Background:** `var(--muted)/20`

### Ghost Button

- **Background:** Transparent
- **Text:** `var(--fg)` (#deddd9)
- **Hover:** `var(--muted)/15`

### Button Sizes

| Size | Height | Padding |
|------|--------|---------|
| `sm` | `h-9` (36px) | `px-4` |
| `default` | `h-10` (40px) | `px-6 py-2` |
| `lg` | `h-12` (48px) | `px-8` |

### Button Guidelines

- **DO** use uppercase text with wide tracking for brand buttons
- **DO** use pill-shaped (rounded-full) buttons
- **DO** provide clear hover states
- **DON'T** use sharp corners on buttons
- **DON'T** use more than one primary CTA per section

---

## Layout & Spacing

### Container

- **Max Width:** 1200px
- **Padding:** 1rem (16px) inline
- **Margin:** Auto-centered

```css
.container {
  width: 100%;
  max-width: 1200px;
  margin-inline: auto;
  padding-inline: 1rem;
}
```

### Spacing Guidelines

- **DO** use consistent spacing multiples (4px, 8px, 16px, 24px, 32px, 48px)
- **DO** use generous whitespace to maintain editorial feel
- **DON'T** crowd content - let it breathe

---

## Accessibility

### Motion

Respect user preferences for reduced motion:

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

### Color Contrast

- **Background-to-Foreground:** 11.5:1 (AAA compliant)
- **Muted Text:** Minimum 4.5:1 (AA compliant)
- Always test contrast ratios when introducing new color combinations

### Focus States

- **Ring Color:** `var(--fg)` (#deddd9)
- **Ring Width:** 2px
- **Ring Offset:** 2px
- **Ring Offset Color:** `var(--bg)` (#171717)

---

## Links

### Default Links

- **Color:** `inherit` (inherits from parent)
- **Text Decoration:** None (default)
- **Hover:** Underline
- **Transition:** Apply smooth transitions for hover states

```css
a {
  color: inherit;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
```

### Navigation Links

- **Color:** `var(--muted)` (#454443)
- **Hover:** `var(--fg)` (#deddd9)
- **Focus:** Visible ring outline

---

## Visual Style

### Aesthetic Principles

1. **Ultra-Minimal:** Remove unnecessary elements, focus on content
2. **Editorial:** High contrast, refined typography, generous spacing
3. **High Contrast:** Strong contrast between background and foreground for readability
4. **Purposeful:** Every element serves a clear function

### Design Don'ts

- ❌ Don't use drop shadows (except for glass effects on interactive elements)
- ❌ Don't use gradients in backgrounds
- ❌ Don't use decorative elements without purpose
- ❌ Don't use bright, saturated colors
- ❌ Don't use multiple typefaces

### Design Do's

- ✅ Use ample whitespace
- ✅ Maintain strict hierarchy through type scale
- ✅ Use subtle hover states
- ✅ Prioritize readability and clarity
- ✅ Keep interactions purposeful and smooth

---

## Implementation Notes

### CSS Variables

Always reference CSS variables instead of hardcoded hex values when possible:

```css
/* ✅ Preferred */
background: var(--bg);
color: var(--fg);

/* ❌ Avoid */
background: #171717;
color: #deddd9;
```

### Tailwind Classes

Use Tailwind's color variable syntax:

```tsx
// ✅ Preferred
className="bg-[color:var(--bg)] text-[color:var(--fg)]"

// ✅ For brand-specific values
className="bg-[#deddd9] text-[#171717]"
```

### Color Scheme

The site uses a dark color scheme:

```html
<meta name="color-scheme" content="dark">
<meta name="theme-color" content="#171717">
```

---

## Examples

### Header

```tsx
<header className="sticky top-0 z-40 border-b border-[color:var(--muted)]/20 bg-[#171717]/90 backdrop-blur">
  <Button variant="brand">Request Build</Button>
</header>
```

### Hero Section

```tsx
<h1 className="display">Build exactly what you need</h1>
<p className="lead">We customize one product from our portfolio to your exact needs.</p>
```

---

## Version History

- **v1.1** (2025-10-04): Verified and updated for restructured repository
- **v1.0** (2025-10-03): Initial brand guidelines
