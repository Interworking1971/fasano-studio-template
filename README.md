# Editorial Studio — design system & site template

A complete, production-ready **design system plus a 12-route site template** in
the editorial-luxury idiom: a high-contrast display serif against a neutral
grotesque, warm limestone neutrals, full-bleed photography, and a motion layer
built on named easings rather than defaults.

It ships **neutral** on purpose — the demo content is placeholder, so the repo
stays a reusable starting point. For a worked example of it re-skinned for a
real client, see [`examples/asd-corpus/`](examples/asd-corpus/).

---

## What's in here

| | |
|---|---|
| **Framework** | Next.js 16 · React 19 · TypeScript |
| **Styling** | CSS custom properties + CSS Modules (no utility framework) |
| **Motion** | Lenis smooth scroll, IntersectionObserver reveals, scroll-linked CSS variables |
| **Accessibility** | Radix accordions, native radio groups, focus-visible rings, full `prefers-reduced-motion` fallback |
| **Output** | Static export (`out/`) — Pages, Netlify, Vercel, S3, anything |
| **Fonts** | Instrument Serif + Instrument Sans (open licence, self-hosted at build) |

**12 routes · 24 components · 19 named easings · 1 dependency beyond React**
(Lenis) plus one Radix primitive.

### Routes

| Route | What it demonstrates |
|---|---|
| `/` | Full editorial homepage — 14 sections |
| `/product` | Sticky buy-panel, scrolling media stack, native option groups |
| `/gallery` | Filterable archive grid with re-cascading stagger |
| `/registry` | Pricing grid + ruled service index |
| `/featured` | Portrait grid with greyscale-to-colour hover |
| `/process` | Long-form numbered steps, alternating, on a centre rule |
| `/about` | Prose column + figures rail + plate spread |
| `/legal/faq` | Radix accordions |
| `/legal/terms`, `/legal/privacy` | Long-form prose with sticky contents rail |
| `/system` | **Living design-system documentation** |
| 404 | Not-found state |

---

## Quick start

```bash
npm install
```

```bash
npm run dev
```

Open <http://localhost:3700> — and <http://localhost:3700/system> for the style
guide.

```bash
npm run build
```

Static output lands in `out/`.

---

## Re-skinning

Four steps, in the order you'll need them.

### 1. Colour and type → `app/styles/tokens.css`

Every colour, font, spacing step and easing is declared once here. Nothing else
in the codebase hardcodes a colour or a typeface.

The palette is two-layered: raw values (`--color-clay`) alias into semantic
roles (`--color-accent`). Components only reference the semantic layer, which is
what lets `[data-theme="dark"]` invert a whole section by re-pointing six
variables.

Swap the two `next/font/google` imports in `app/layout.tsx` to change typefaces.
A machine-readable mirror lives at `design/tokens.json`.

### 2. Words → `content/`

| File | Holds |
|---|---|
| `site.ts` | Brand, nav, contact, footer — shared by every page |
| `home.ts` | The homepage |
| `pages.ts` | Product, gallery, registry, people, process, about, legal, 404 |

No component contains copy.

### 3. Photography → `public/media/`

Every image slot renders a **designed placeholder** until a real photograph
exists: correct aspect ratio, system colours, film grain, and the slot's name
printed on it. The box is reserved either way, so dropping in images causes no
layout shift and a half-finished shoot still looks deliberate.

```ts
background: { src: '/media/studio-wide.jpg', alt: '…', ratio: '16 / 9' }
```

### 4. Structure → `app/*/page.tsx`

Each page is just an assembly order. Re-order, remove or duplicate sections —
they're self-contained, and the page-level ones take props rather than reaching
into the content layer.

---

## Architecture

```
app/
  layout.tsx              root shell — fonts, loader, header, footer
  page.tsx                homepage assembly
  product|gallery|registry|featured|process|about/
  legal/faq|terms|privacy/
  system/                 living design-system documentation
  not-found.tsx
  styles/
    tokens.css            ← the design system
    globals.css           grid, type utilities, keyframes, reveal contract
    reset.css
components/
  layout/                 Loader · Header · Footer
  motion/                 SmoothScroll · Reveal / RevealLines · Parallax
  sections/               24 page sections
  ui/                     Button · InlineButton · Media · Field · ScrollCue
content/                  ← all copy
design/tokens.json        machine-readable token mirror
examples/asd-corpus/      a worked client re-skin
lib/hooks.ts              useInView · useScrollProgress · useScrollDirection · …
```

### How the motion layer works

**Reveals are declarative.** Sections don't animate themselves. They mark
elements with `data-reveal` and an `--index`; one `IntersectionObserver` flips
the attribute, and a single rule in `globals.css` owns the transition.
Re-choreographing the whole site is a CSS edit.

**Scroll effects are CSS-driven.** `useScrollProgress` writes a 0→1 value to a
custom property each frame a section is near the viewport. Parallax and mask
effects read it from CSS, so the main thread never touches a transform.

**The intro** is a two-layer CSS mask with `exclude` compositing: a
viewport-shaped window is punched through an opaque plate and grown in two
beats. The page underneath is real throughout. Runs once per session, skipped
entirely under reduced motion.

---

## Deploying to GitHub Pages

`.github/workflows/deploy.yml` is ready. Set **Settings → Pages → Source →
GitHub Actions**, then push to `main`. The workflow builds with
`NEXT_PUBLIC_BASE_PATH` set to the repo name, writes `.nojekyll`, and publishes
`out/`. Leave the variable unset for a root-level host.

---

## Credits & licence

MIT (see `LICENSE`).

The visual language is an original build in a widely-used editorial idiom. No
markup, stylesheet, copy, imagery or font file was copied from any existing
site; both typefaces are open-licence Google Fonts. Legal page copy is
structural placeholder only — have a solicitor draft the real thing.
