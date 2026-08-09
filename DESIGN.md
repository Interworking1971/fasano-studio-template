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
display serif for the big statements, a neutral grotesque for section headings,
and serif again for body copy — see §3, the roles are counter-intuitive.
Enormous negative space. Hard square corners, hairline rules, no shadows, no
cards. Motion is slow, masked and scroll-linked. It should read like a printed
art catalogue that happens to scroll — not like a SaaS landing page.

---

## 1. FORBIDDEN — these make it generic

Violating any of these is the difference between this system and a default AI
layout. This list matters more than everything below it.

| Never | Instead |
|---|---|
| Rounded corners on containers, images, cards, buttons | **`border-radius: 0`** everywhere. Nothing in this system is round |
| Box shadows, elevation, glows | Separation comes from **hairline 1px rules** and background tint changes |
| Cards — bordered boxes holding a title + text + button | **Ruled rows.** Items separated by 1px lines, no enclosure |
| Left-aligning everything | Much of this system is **centred** — eyebrows, giant statements, edito headings and body, pull quote, final CTA. Left-align is for ruled lists and diptych copy columns |
| Gradient buttons, coloured fills, vivid accents | Accent is used at **hairline scale only** — a 3px bar, a rule, one word |
| **Pill buttons, uppercase sans buttons** | Buttons are **square, serif, sentence case**, with no border and no background at rest — see §7 |
| Emoji, icon badges, "✨ Feature" chips | Nothing. Numbers (`01`, `02`) if you need enumeration |
| Uniform grids of equal tiles | **Uneven spans and vertical offsets.** No two adjacent cells the same height |
| Big bold sans headlines | Sans headings are **30px, weight 500, tight negative tracking** — never large or bold |
| All-serif or all-sans blocks | **Mix roman and italic inside a line.** Italic connectives, roman caps nouns |
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

Two families, and the roles are **not** the obvious ones. Verified against
the live site, not assumed:

- **Section headings are SANS** — `--font-display-4`, weight 500, 30px,
  `letter-spacing: -0.02em`, centred. Not serif, not bold, not huge.
- **Body copy in editorial sections is SERIF** — 16px, weight 400,
  `letter-spacing: 0.04em`, line-height **1.1** (tight), centred.
- **Serif carries the big statements** — hero, `display-1/2/3`, pull quote.

So the split is by *scale and role*, not by "serif for headings". A 30px sans
heading sits above 16px centred serif body. Getting this backwards is the
single fastest way to make the page look like a different site.

| Token | Mobile | ≥930px | Family | Used for |
|---|---|---|---|---|
| `--font-header` | clamp(46px, 6.5vw, 120px)/1 | clamp(46px, 5vw, 120px)/1 | serif | Hero only |
| `--font-display-1` | 2.875rem/1.1 | **7.5rem**/1 | serif | Section-opening statement |
| `--font-display-2` | 2.1875rem/1 | 2.5rem/1 | serif | Standard section heading |
| `--font-display-3` | 1.5625rem/1.3 | **5rem**/1 | serif | Large heading, pull quote |
| `--font-display-4` | 1.25rem/1.15 | 1.875rem/1.06 | **sans 500** | **Primary section heading**, centred, tracking −0.02em |
| `--font-display-5` | 1.125rem/1.5 | 1.3125rem/1 | serif | Logo, captions, hero title |
| `--font-body` | 1.125rem/1.5 | — | sans | UI paragraphs, forms |
| *editorial body* | 1rem/1.1, tracking 0.04em | — | **serif**, centred | Body copy inside editorial sections |
| `--font-label-2` | 0.9375rem/1.5 | 1.125rem/1.5 | sans 500 | Links, labels |
| `--font-tiny-1` | 0.8125rem/1.6 | — | sans | Meta, captions |
| `--font-tiny-2` | 0.625rem/1.4 | — | sans | Legal, credits |

Each token is a complete `font` shorthand — a component sets one property.

**The signature move:** a display line is set in roman, with **one word or one
line in italic serif**. Never bold, never colour, never underline. That italic
is the only emphasis the system has.

**Eyebrow:** **serif**, small, centred, mixing italic connectives with roman
caps — *the* ESSENCE *of* VERO. Not uppercase sans with wide tracking. The
italic words are the joining words ("the", "of", "where", "meets"); the nouns
stay roman caps.

**Mixed roman/italic within a line** is the system's core typographic device
and it appears everywhere — eyebrows, display lines, buttons. A giant centred
statement reads *where* INNOVATION / *meets* CRAFTSMANSHIP: italic lowercase
for the connectives, roman caps for the subject.

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
giant headline. The wordmark is a fixed SVG that starts large and centred in
the hero and **scales to ~35% as it travels up into the header** on scroll,
flipping fill between `theme-dark` and `theme-light` against whatever is
behind it. Scroll cue absolute, `bottom: 28px`, centred.

**2 · Statement** — eyebrow, two-line serif claim (second line italic), body
paragraph, inline link. Left column only, ~14ch measure on the heading.

**3 · Three-step narrative** — three columns, **staircased**: column 2 offset
down 64px, column 3 offset down 128px. Never a flat row.

**4 · Giant statement with overlapping plate** — on the **cream** background,
not a dark band. A serif eyebrow, then a two-line statement at ~110px mixing
italic lowercase connectives with roman caps. A centred media plate sits **in
front of** the type, occluding the second line. The whole thing lives inside a
pinned scroll section roughly 4 viewports tall that scrubs through its
content.

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

**Intro overlay.** A **light beige** plate — not dark. Four display lines sit
above and below centre, set enormous (fluid to 120/130px). They fade to 14%
while a two-layer CSS mask with `exclude` compositing punches a
viewport-shaped window through the plate and grows it (1.4s at 0.5s,
`in-out-quint`), the content layer's clip-path opening a matching notch in
step. From 1.5s the lines carry on to **full opacity**. On completion the
window expands to full bleed (0.75s `in-out-quart`) while the lines slide off
by ∓25%. A hairline progress rule sits at `bottom: 30px` with a percentage
that travels the viewport width. Once per session.

**Wordmark travel.** The logo is an **SVG**, `position: fixed`, driven by JS
with a matrix transform — it starts large and centred in the hero and scales
to ~35% as it travels up into the header. It also carries a `theme-dark` /
`theme-light` class that flips its fill against whatever is behind it.

**Underline gesture.** Links carry two stacked 1px background layers; on hover
the resting rule collapses right while a new one grows from the left, so the
underline is *redrawn* rather than faded.

Everything degrades to static under `prefers-reduced-motion`.

---

## 7. Components

**Button** — **square** (`border-radius: 0`), **serif** `--font-button`
(0.9375rem), `letter-spacing: 0.06em`, **sentence case**. No border and no
background of its own; minimum 45×45 with 10px padding.

A `::after` plate grows from `scaleY(0)`, `transform-origin: bottom`, on
`transform 1s var(--ease-out-expo)` — that is an **entrance**, fired when the
button becomes visible, not a hover.

Hover is a **vertical text roll**: the label lifts by `calc(-100% - 0.4em)`
while a duplicate rises into its place, both on `--ease-custom-1`.

An `<i>` inside is italic, so a label can mix roman and italic —
*Start your* COMMISSION. Variants are colour only: `plain` (ink) and
`transparent` (light, plate at 20%). No shadow, no gradient, no icon.

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
