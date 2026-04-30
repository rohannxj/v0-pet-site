---
name: Pet Vital
description: UK pet wholesale and retail distributor — professional, reliable, trustworthy.
colors:
  composed-evergreen: "oklch(0.55 0.15 170)"
  deep-evergreen: "oklch(0.25 0.10 170)"
  footer-midnight: "oklch(0.22 0.06 170)"
  surface-white: "oklch(1 0 0)"
  surface-tinted: "oklch(0.97 0.01 170)"
  foreground-primary: "oklch(0.25 0.01 240)"
  foreground-muted: "oklch(0.50 0 0)"
  surface-muted: "oklch(0.96 0 0)"
  border-quiet: "oklch(0.90 0 0)"
  alert-red: "oklch(0.577 0.245 27.325)"
typography:
  display:
    fontFamily: "Geist, Geist Fallback, system-ui, sans-serif"
    fontSize: "clamp(2.5rem, 6vw, 4rem)"
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Geist, Geist Fallback, system-ui, sans-serif"
    fontSize: "clamp(1.75rem, 4vw, 2.5rem)"
    fontWeight: 700
    lineHeight: 1.15
  title:
    fontFamily: "Geist, Geist Fallback, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 600
    lineHeight: 1.3
  body:
    fontFamily: "Geist, Geist Fallback, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Geist, Geist Fallback, system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "0.02em"
rounded:
  sm: "4px"
  md: "8px"
  lg: "12px"
  full: "9999px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "40px"
  "2xl": "64px"
components:
  button-primary:
    backgroundColor: "{colors.composed-evergreen}"
    textColor: "{colors.surface-white}"
    rounded: "{rounded.md}"
    padding: "10px 24px"
  button-primary-hover:
    backgroundColor: "{colors.deep-evergreen}"
    textColor: "{colors.surface-white}"
  button-outline:
    backgroundColor: "{colors.surface-white}"
    textColor: "{colors.foreground-primary}"
    rounded: "{rounded.md}"
    padding: "10px 24px"
  button-outline-hover:
    backgroundColor: "{colors.composed-evergreen}"
    textColor: "{colors.surface-white}"
  card-product:
    backgroundColor: "{colors.surface-white}"
    rounded: "{rounded.lg}"
    padding: "{spacing.md}"
  input-default:
    backgroundColor: "{colors.surface-white}"
    textColor: "{colors.foreground-primary}"
    rounded: "{rounded.md}"
    padding: "10px 14px"
---

# Design System: Pet Vital

## 1. Overview

**Creative North Star: "The Trusted Trade Counter"**

Pet Vital's visual system is built around a single premise: institutional trust, earned by years in the industry. The aesthetic is composed and unhurried. It does not compete for attention through decoration; it earns confidence through consistency, clarity, and quiet authority. Every screen should feel like it was designed by people who have shipped a million orders and don't need to shout about it.

The system uses depth purposefully. Cards lift slightly on hover. Shadows are ambient, not theatrical. The primary teal carries the brand without overwhelming it — it appears on actions, accents, and the navigation bar, but the majority of surfaces are white and near-neutral. Photography and the animals themselves provide the warmth; the UI stays composed around them.

This system explicitly rejects the aesthetic of: tech-startup gradients (neon, glass, purple-on-dark); Amazon/eBay listing noise (orange CTAs, cluttered grids, promotional banner pileup); Pets at Home's competing colour loudness; and the clinical sterility of white-on-white veterinary UIs.

**Key Characteristics:**
- Teal as the single brand anchor — used on primary actions, the top bar, and footer. Nothing else competes.
- Light, airy surfaces with subtle tinted whites — not clinical pure white.
- Tactile hover states: shadow lift on cards, teal fill on outline buttons, smooth 200ms transitions.
- Geist type throughout — modern geometric sans with professional confidence, legible at all sizes.
- Species-first navigation — the UI organises around animals, not product taxonomy.

## 2. Colors: The Composed Evergreen Palette

Two surfaces (white and dark teal), one accent (Composed Evergreen), and a set of quiet neutrals. The teal is the only colour with strong chroma on the page.

### Primary
- **Composed Evergreen** (`oklch(0.55 0.15 170)`): The brand anchor. Used on the top bar, primary buttons, price text, active nav links, product badges, and hover states. Never used as a background behind large bodies of text.
- **Deep Evergreen** (`oklch(0.25 0.10 170)`): Button hover state, footer background. The teal pushed dark — authoritative, not decorative.

### Secondary
- **Surface Tinted** (`oklch(0.97 0.01 170)`): The page's secondary surface. A barely-visible teal tint on white — used for section backgrounds, secondary button backgrounds, and active chip states. The tint is deliberately subtle: chroma 0.01, not 0.05.

### Neutral
- **Surface White** (`oklch(1 0 0)`): Primary page and card background. Used on cards, inputs, and the main content surface.
- **Foreground Primary** (`oklch(0.25 0.01 240)`): Body text and headings. A very dark near-black with a trace of cool blue — not flat black.
- **Foreground Muted** (`oklch(0.50 0 0)`): Brand labels, secondary metadata, placeholder text.
- **Surface Muted** (`oklch(0.96 0 0)`): Hover backgrounds on ghost elements, table row alternates.
- **Border Quiet** (`oklch(0.90 0 0)`): Input borders, card separators, dividers. Never decorative — only structural.
- **Footer Midnight** (`oklch(0.22 0.06 170)`): Footer background — a teal-shifted near-black that ties the footer to the brand without using the mid-teal.

### Named Rules
**The One Accent Rule.** Composed Evergreen is the only colour with strong chroma on any screen. It appears on ≤3 elements per view. Its authority comes from its rarity. Do not introduce a secondary accent (orange, gold, purple) for urgency or promotion — use weight and scale instead.

**The Tint Rule.** No surface is pure white or pure black. Every neutral is tinted toward hue 170 or 240 by chroma 0.005–0.01. Pure #000 and #fff are prohibited.

## 3. Typography

**Display/Body Font:** Geist (with Geist Fallback, system-ui, sans-serif)
**Mono Font:** Geist Mono (order tracking, SKUs, product codes)

**Character:** Geist is geometric and modern without being cold. At large weights (700) it projects institutional confidence. At body weight (400) it is legible and neutral. The mono variant handles trade-specific data (SKUs, codes) with authority. No serif is needed — the brand personality is professional, not editorial.

### Hierarchy
- **Display** (700, clamp(2.5rem → 4rem), lh 1.05, ls -0.02em): Hero headlines only. One per page maximum. Short and declarative.
- **Headline** (700, clamp(1.75rem → 2.5rem), lh 1.15): Section headings, page titles, modal headers.
- **Title** (600, 1.125rem, lh 1.3): Card headings, navigation labels, subheadings within sections.
- **Body** (400, 1rem, lh 1.6): All prose content. Cap line length at 68ch. No justified alignment.
- **Label** (500, 0.75rem, lh 1.4, ls 0.02em): Brand names, metadata, form labels, badge text.

### Named Rules
**The Weight Contrast Rule.** Hierarchy is created through weight and size contrast at a minimum 1.25 ratio between adjacent levels. Do not use colour alone to distinguish heading from body — a muted heading at 400 weight is invisible hierarchy.

## 4. Elevation

The system is flat by default; shadows appear only in response to state or genuine surface layering. Two shadow levels only. No decorative drop shadows at rest.

### Shadow Vocabulary
- **Ambient Low** (`box-shadow: 0 1px 3px oklch(0.25 0.10 170 / 0.08), 0 1px 2px oklch(0.25 0.10 170 / 0.06)`): Cards and containers at rest. Very diffuse — communicates "surface" without visual weight.
- **Ambient Lift** (`box-shadow: 0 4px 12px oklch(0.25 0.10 170 / 0.12), 0 2px 4px oklch(0.25 0.10 170 / 0.08)`): Cards on hover, open dropdowns, focus-elevated inputs. The tint toward the brand hue keeps shadows warm, not grey.

### Named Rules
**The Flat-By-Default Rule.** Surfaces are flat at rest. Shadow is a response to state (hover, elevation, open), not a decorator. A card that always has a heavy shadow is a card that has given up on earning attention.

## 5. Components

### Buttons
Buttons are tactile and direct. Shape is gently curved (8px radius). The primary action is always Composed Evergreen — one dominant CTA per view.

- **Shape:** Gently curved edges (8px / `rounded-md`)
- **Primary:** Composed Evergreen background, white text, 10px/24px padding. Clear and confident. `transition: background 200ms ease-out, box-shadow 200ms ease-out`
- **Hover / Focus:** Background deepens to Deep Evergreen (`oklch(0.25 0.10 170)`). Focus state uses a 3px ring in Composed Evergreen at 50% opacity — visible without being distracting.
- **Outline:** White background, quiet border (`oklch(0.90 0 0)`), Foreground Primary text. On hover, fills with Composed Evergreen — the outline becomes primary. This mirrors the product card's add-to-cart button behaviour.
- **Ghost:** No border, no background. Hover applies Surface Muted background. Used for secondary navigation actions.

### Cards / Containers
Cards are used for product listings and sectioned content only — never nested, never decorative.

- **Corner Style:** Gently curved (12px / `rounded-lg`)
- **Background:** Surface White
- **Shadow Strategy:** Ambient Low at rest; Ambient Lift on hover. 200ms ease-out transition on `box-shadow`.
- **Border:** None. Shadow defines the edge.
- **Internal Padding:** 16px (`spacing.md`)
- **Image Treatment:** Full-bleed image area with aspect-square ratio. Image scales to 105% on hover (500ms ease-out) — subtle, not bouncy.

### Inputs / Fields
- **Style:** 1px Border Quiet stroke, Surface White background, 8px radius.
- **Focus:** Border shifts to Composed Evergreen (1px → 2px), with a soft Composed Evergreen ring at 20% opacity. No glow — shift and ring only.
- **Error:** Border and ring shift to Alert Red.
- **Disabled:** Opacity 50%, cursor not-allowed.

### Navigation
Two-tier header: utility bar (teal, phone/email/account links) + main nav (white, logo, search, category dropdowns, cart/wishlist).

- **Top utility bar:** Composed Evergreen background, white text, Label weight. Phone and email links at 80% opacity, full opacity on hover.
- **Main nav:** White background, 1px Border Quiet bottom border. Logo left, search centre, actions right.
- **Category links:** Foreground Primary, Title weight. On hover, colour shifts to Composed Evergreen. Active state uses Composed Evergreen with a 2px bottom border.
- **Mobile:** Sheet drawer from left. Full category tree, account actions, search at top. Touch targets minimum 44px.

### Product Card
The signature component. Embodies the core trade-and-retail tension: controlled display, price gated by login state.

- Aspect-square image with white background and 8px contain padding.
- Brand label in Label style / Foreground Muted.
- Product name in Title style, 2-line clamp, hover colour shifts to Composed Evergreen.
- Authenticated: price in Composed Evergreen bold + add-to-cart outline button (teal-fill on hover).
- Unauthenticated: "Login for pricing" link with lock icon — same visual slot, no empty space.

### Badges
- Rounded-full, Label weight and size.
- Default/Featured: Composed Evergreen background, white text.
- Sale: Alert Red background, white text.
- New: mid-green (`oklch(0.50 0.15 145)`), white text.

## 6. Do's and Don'ts

### Do:
- **Do** use Composed Evergreen on ≤3 elements per screen. Its authority comes from scarcity.
- **Do** let photography carry warmth. The UI is composed; the animals are the emotion.
- **Do** apply Ambient Lift on card hover with a 200ms ease-out transition on `box-shadow` and `transform`.
- **Do** use Geist Mono for all SKUs, order numbers, and product codes.
- **Do** maintain 44px minimum touch targets on all interactive elements.
- **Do** show "Login for pricing" in the product card price slot — never empty space, never a placeholder.
- **Do** use the two-tier header structure: utility bar (teal) above main nav (white).
- **Do** tint every neutral toward hue 170/240 at chroma 0.005–0.01. No pure #000 or #fff.

### Don't:
- **Don't** introduce a second accent colour. No orange urgency, no gold premium signals, no blue links. One accent, always Composed Evergreen.
- **Don't** use gradients decoratively. The hero carousel uses a gradient overlay on photography — that is its only permitted context. No gradient cards, no gradient headings.
- **Don't** use gradient text (`background-clip: text`). Never.
- **Don't** use side-stripe borders (border-left > 1px coloured accent) on cards, alerts, or list items. Full border, background tint, or nothing.
- **Don't** make it look like a tech startup. No neon, no glassmorphism, no "disrupting pet care" energy.
- **Don't** make it look like Amazon or eBay. No cluttered listing grids, no aggressive promotional banner pileup, no race-to-the-bottom visual noise.
- **Don't** make it look like Pets at Home. No competing colours, no loud promotional layering.
- **Don't** make it look clinical. Pure white sterile surfaces + light gray type = veterinary, not trusted trade supplier.
- **Don't** nest cards. A card inside a card is always wrong.
- **Don't** use bounce or elastic easing. Ease-out-quart only. Professional tools don't bounce.
- **Don't** use modals as a first solution. Exhaust inline and progressive alternatives.
