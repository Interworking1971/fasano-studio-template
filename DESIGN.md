# DESIGN SPEC — Editorial Studio System

**Read this file completely before generating anything.** It is the single
source of truth. Do not infer the design from screenshots, from the component
files, or from what "a nice website" usually looks like. Every value below was
measured from a shipped production build, not invented.

If you generate something that violates the **Forbidden** section, it is wrong
regardless of how good it looks.

---

## 0. The one-paragraph brief

A cold, quiet, editorial system. Near-monochrome warm neutrals. A high-contrast
display serif carrying every idea, a neutral grotesque carrying every fact.
Enormous negative space. Hard square corners, hairline rules, no shadows, no
cards. Motion is slow, masked and scroll-linked. It should read like a printed
art catalogue that happens to scroll — not like a SaaS landing page.

---

## 1. FORBIDDEN — these make it generic

Violating any of these is the difference between this system and a default AI
layout. This list matters more than everything below it.

| Never | Instead |
|---|---|
| Rounded corners on containers, images, cards | **`border-radius: 0`** everywhere. Only pill buttons are round (`999px`) |
| Box shadows, elevation, glows | Separation comes from **hairline 1px rules** and background tint changes |
| Cards — bordered boxes holding a title + text + button | **Ruled rows.** Items separated by 1px lines, no enclosure |
| Everything centred | Predominantly **left-aligned**. Centre only: pull quote, dark edito band, final CTA |
| Gradient buttons, coloured fills, vivid accents | Accent is used at **hairline scale only** — a 3px bar, a rule, one word |
| Emoji, icon badges, "✨ Feature" chips | Nothing. Numbers (`01`, `02`) if you need enumeration |
| Uniform grids of equal tiles | **Uneven spans and vertical offsets.** No two adjacent cells the same height |
| Big bold sans headlines | **Serif** for all display type. Sans never exceeds 1.875rem |
| Tight vertical rhythm | `--section-gap` is **100 / 160 / 200px**. Sections breathe enormously |
| Hero with centred headline + two buttons | See §5 — the hero is a fixed, centred, *small* line over a masked video |
| Stock-photo smiling faces, lifestyle imagery | Cold documentary photography, or the designed placeholder |
| More than one accent colour | One. `--color-accent`. That is the entire palette's colour budget |

---

## 2. Colour

Two layers. Components reference **only** the semantic layer.

```
/* raw */
--color-bone-100: #f4f1ec     page background
--color-bone-200: #ece7df     media well
--color-bone-300: #e0d5c7     secondary surface
--color-grey-900: #171614     text, inverse surface
--color-grey-600: #97928b     secondary text
--color-clay:     #b4552d     THE accent — the only colour
--color-olive:    #5c5f4a     secondary accent, rare

/* semantic — use these */
--color-background-primary   → bone-100
--color-background-secondary → bone-300
--color-background-inverse   → grey-900
--color-text-primary         → grey-900
--color-text-secondary       → grey-600
--color-accent               → clay
--color-line                 → rgb(23 22 20 / 14%)
```

Sections alternate `background-primary` / `background-secondary`, with one or
two `background-inverse` bands for contrast. `[data-theme="dark"]` flips six
variables and inverts an entire section.

---

## 3. Type

Two families. **Serif = meaning. Sans = information.** Never mix the roles.

| Token | Mobile | ≥930px | Family | Used for |
|---|---|---|---|---|
| `--font-header` | clamp(46px, 6.5vw, 120px)/1 | clamp(46px, 5vw, 120px)/1 | serif | Hero only |
| `--font-display-1` | 2.875rem/1.1 | **7.5rem**/1 | serif | Section-opening statement |
| `--font-display-2` | 2.1875rem/1 | 2.5rem/1 | serif | Standard section heading |
| `--font-display-3` | 1.5625rem/1.3 | **5rem**/1 | serif | Large heading, pull quote |
| `--font-display-4` | 1.25rem/1.15 | 1.875rem/1.06 | **sans 500** | Sub-heading, list titles |
| `--font-display-5` | 1.125rem/1.5 | 1.3125rem/1 | serif | Logo, captions, hero title |
| `--font-body` | 1.125rem/1.5 | — | sans | Paragraphs |
| `--font-label-2` | 0.9375rem/1.5 | 1.125rem/1.5 | sans 500 | Links, labels |
| `--font-tiny-1` | 0.8125rem/1.6 | — | sans | Meta, captions |
| `--font-tiny-2` | 0.625rem/1.4 | — | sans | Legal, credits |

Each token is a complete `font` shorthand — a component sets one property.

**The signature move:** a display line is set in roman, with **one word or one
line in italic serif**. Never bold, never colour, never underline. That italic
is the only emphasis the system has.

**Eyebrow:** `--font-tiny-1`, uppercase, `letter-spacing: 0.14em`, secondary
colour. Sits above display type. Weight 400, never bold.

Only two weights exist: **400 and 500.** There is no bold.

---

## 4. Grid & spacing

```
--grid-columns   2 (mobile)  →  12 (≥930px)      ← 930, NOT 768
--grid-gap       10px
--gap            20px → 30px (≥930) → 40px (≥1728)
--page-margin    calc(1.04167vw + 4px)   fluid, not stepped
--section-gap    100px → 160px (≥930) → 200px (≥1728)
max-width        1920px
```

Breakpoints: **375 / 768 / 930 / 1728 / 1788**. The meaningful one is 930.

Every column line is named `start-column`:

```css
grid-template-columns: repeat(var(--grid-columns), [start-column] 1fr);
grid-column: start-column 3 / span 6;
```

Sub-grids are **derived**, never declared fresh:

```css
repeat(calc(var(--grid-columns) - 2), [start-column] 1fr)   /* inset */
repeat(calc(var(--grid-columns) - 6), [start-column] 1fr)   /* half   */
repeat(calc(var(--grid-columns) - 7), [start-column] 1fr)
```

`--radius: 0`. The system is square.

---

## 5. Section anatomy

Generate these in this order. Each is a full-bleed band; only the inner content
is constrained.

**1 · Hero** — `min-height: 100svh`. A video/image fills the band, clipped by a
centre-scaling `clip-path` driven by scroll (see §6). Content is
`position: fixed`, flex column, **centred both axes**, `gap: 32px` → 18px
(≥930) → 21px (≥1728). The title is **`--font-display-5` — small**, not a
giant headline. Logo is `position: fixed`, top-left, 230×70 → 250×75 (≥930) →
290×90 (≥1728). Scroll cue absolute, `bottom: 28px`, centred.

**2 · Statement** — eyebrow, two-line serif claim (second line italic), body
paragraph, inline link. Left column only, ~14ch measure on the heading.

**3 · Three-step narrative** — three columns, **staircased**: column 2 offset
down 64px, column 3 offset down 128px. Never a flat row.

**4 · Full-bleed band** — 78lvh, dark scrim over parallax media, centred
`--font-display-1`, two lines, second italic.

**5 · Ruled list** — 6 items, 3 columns, separated by 1px rules with interior
verticals only. No card, no border around the group.

**6 · Studio intro** — 5:6 asymmetric split, portrait plate + offset text.

**7–10 · Diptych family** — four two-column arrangements that share the grid
but differ in media behaviour: *sticky* (image pins, copy scrolls),
*double-mask* (two offset plates at different scales and parallax speeds),
*edito* (no image, centred, dark inverse band), *single-mask* (reversed, wide
landscape left).
**Alternating these is what stops the page reading as a template.**

**11 · Gallery** — 8 plates on the 12-col bed with **hand-assigned spans and
vertical offsets** so the eye moves diagonally. Never a uniform grid.

**12 · Pull quote** — centred, italic serif, `--font-display-3`, one idea,
nothing else on screen.

**13 · Reassurance** — 4 short items, hairline top and bottom rules.

**14 · Final CTA** — centred, two lines, second italic.

---

## 6. Motion

Nineteen named easings. **Nothing uses a bare `ease`.** Entrances use `out-*`,
exits `in-*`, reversible moves `in-out-*`.

```
--ease-out-quint    cubic-bezier(0.22, 1, 0.36, 1)      default entrance
--ease-out-quart    cubic-bezier(0.25, 1, 0.5, 1)       hover, small moves
--ease-in-out-quart cubic-bezier(0.76, 0, 0.24, 1)      masks, clip-paths
--ease-custom-1     cubic-bezier(0.25, 0.1, 0.25, 1)    buttons, accordions
--ease-out-expo     cubic-bezier(0.19, 1, 0.22, 1)      smooth scroll
```

**Reveal contract.** Sections never animate themselves. They mark elements with
`data-reveal` and an `--index`; one IntersectionObserver flips the attribute;
one rule owns the transition. Stagger step is **80ms × index**.

**Line-mask reveal.** Display lines sit in `overflow: hidden` wrappers and
slide from `translateY(100%)` → `0` over 0.9s `out-quint`, cascading per line.

**Scroll-linked.** A hook writes a 0→1 value to a CSS custom property each
frame; parallax and mask effects read it *from CSS*. The main thread never
touches a transform.

**Hero mask** — the signature. The media is clipped by a centre-anchored
rectangle that shrinks as you scroll:

```
--mask-scale-h: calc(1 - 0.3 * max(0, calc(var(--mask-progress) - 0.1)));
--mask-scale-v: calc(1 - 0.3 * var(--mask-progress));

clip-path: polygon(
  calc(50% - 50% * var(--mask-scale-h)) calc(50% - 50% * var(--mask-scale-v)),
  calc(50% + 50% * var(--mask-scale-h)) calc(50% - 50% * var(--mask-scale-v)),
  calc(50% + 50% * var(--mask-scale-h)) calc(50% + 50% * var(--mask-scale-v)),
  calc(50% - 50% * var(--mask-scale-h)) calc(50% + 50% * var(--mask-scale-v))
);
```

**Intro overlay.** A two-layer CSS mask with `exclude` compositing punches a
viewport-shaped window through an opaque plate and grows it in two beats
(1.4s `in-out-quint`, then 0.75s `in-out-quart`). Once per session.

**Underline gesture.** Links carry two stacked 1px background layers; on hover
the resting rule collapses right while a new one grows from the left, so the
underline is *redrawn* rather than faded.

Everything degrades to static under `prefers-reduced-motion`.

---

## 7. Components

**Button** — pill (`999px`), uppercase, `--font-button`, 48px (`md`) / 58px
(`lg`). Hover is a fill that **wipes up from the bottom edge** via
`scaleY(0→1)` on `--ease-custom-1`, label crossfading to inverse. Variants:
`solid`, `outline`, `ghost`. No shadow, no gradient, no icon by default.

**InlineButton** — the redrawn underline above. Optional arrow translates 4px.

**Media** — every image slot renders a *designed placeholder* until a real file
exists: correct aspect ratio, system colours, SVG film grain, a 12px inset
hairline, and the slot name printed bottom-left in uppercase tiny type. The box
is always reserved, so no layout shift.

**Field** — label above, no box. 1px bottom rule only, darkening on focus.

**Accordion** — Radix. 1px rules. A plus that rotates into a minus. Height
animates off `--radix-accordion-content-height`.

---

## 8. Re-skinning

1. **Colour and type** → `app/styles/tokens.css`. Nothing else hardcodes either.
   Swap the two `next/font/google` imports in `app/layout.tsx`.
2. **Words** → `content/site.ts` (global), `content/home.ts`, `content/pages.ts`.
3. **Photography** → `public/media/`, then set `src` on the matching slot.
4. **Structure** → re-order sections in `app/*/page.tsx`.

A machine-readable token mirror lives at `design/tokens.json`.
