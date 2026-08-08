# FORMA — Editorial Studio Template

A production-ready **design system + one-page site template** in the editorial
luxury idiom: a high-contrast display serif against a neutral grotesque, warm
limestone neutrals, full-bleed photography, and a motion layer built on named
easings rather than defaults.

It ships instantiated for a demo client — **FORMA, a boutique gym in Fasano,
Puglia** (karate, boxing, strength) — but the system underneath is
brand-agnostic. Re-skinning is a two-file job.

- **Live site:** enable GitHub Pages (see below) → `https://<user>.github.io/<repo>/`
- **Living design system:** `/system` on the deployed site

---

## What's in here

| | |
|---|---|
| **Framework** | Next.js 16 · React 19 · TypeScript |
| **Styling** | CSS custom properties + CSS Modules (no utility framework) |
| **Motion** | Lenis smooth scroll, IntersectionObserver reveals, scroll-linked CSS variables |
| **Accessibility** | Radix accordion, focus-visible rings, full `prefers-reduced-motion` fallback |
| **Output** | Static export (`out/`) — deployable to Pages, Netlify, Vercel, S3, anything |
| **Fonts** | Instrument Serif + Instrument Sans (open licence, self-hosted at build) |

17 sections, 12 components, 19 named easings, zero runtime dependencies beyond
React, Lenis and one Radix primitive.

---

## Quick start

```bash
npm install
```

```bash
npm run dev
```

Then open <http://localhost:3700> — and <http://localhost:3700/system> for the
style guide.

To produce the static build:

```bash
npm run build
```

The result lands in `out/`.

---

## Re-skinning for a new client

Four steps, in order of how often you'll need them.

### 1. Colour and type → `app/styles/tokens.css`

Every colour, font, spacing step and easing in the project is declared once in
this file. Nothing else in the codebase hardcodes a colour or a typeface.

The palette is two-layered: raw values (`--color-clay`) are aliased into
semantic roles (`--color-accent`). Components only ever reference the semantic
layer, which is what lets `[data-theme="dark"]` invert an entire section by
re-pointing six variables.

To change the typefaces, swap the two `next/font/google` imports in
`app/layout.tsx`. The rest of the system reads `--font-serif` / `--font-sans`.

A machine-readable mirror lives at `design/tokens.json` for syncing into Figma
or Style Dictionary.

### 2. Words → `content/site.ts`

Every headline, paragraph, nav item, price, timetable row, link and image slot
on the site. No component contains copy.

Demo copy is in Italian with an `EN:` gloss comment on each display line, so a
non-Italian reviewer can edit confidently.

> **Placeholders marked `⚠︎ REPLACE`** — the address, phone number, VAT number,
> prices, timetable and founder name are invented. Swap them before this goes
> anywhere near a client's domain.

### 3. Photography → `public/media/`

Every image slot renders a **designed placeholder** until a real photograph is
supplied: correct aspect ratio, system colours, film grain, and the slot's name
printed on it. The box is reserved either way, so dropping in real images causes
no layout shift and a half-finished shoot still looks deliberate.

To fill a slot, drop the file into `public/media/` and set `src` on the matching
entry in `content/site.ts`:

```ts
hero: {
  background: { src: '/media/sala-principale.jpg', alt: '…', ratio: '16 / 9' },
}
```

### 4. Structure → `app/page.tsx`

The page is only an assembly order. Re-order, delete or duplicate sections —
each is self-contained and reads its own content.

---

## Architecture

```
app/
  layout.tsx            root shell — fonts, loader, header, footer
  page.tsx              section assembly order
  system/               living design-system documentation
  styles/
    tokens.css          ← the design system
    globals.css         grid, type utilities, shared keyframes, reveal contract
    reset.css
components/
  layout/               Loader · Header · Footer
  motion/               SmoothScroll · Reveal / RevealLines · Parallax
  sections/             the 17 page sections
  ui/                   Button · InlineButton · Media · Field · ScrollCue
content/site.ts         ← all copy and data
design/tokens.json      machine-readable token mirror
lib/hooks.ts            useInView · useScrollProgress · useScrollDirection · …
```

### How the motion layer works

Two ideas carry almost all of it.

**Reveals are declarative.** Sections don't animate themselves. They mark
elements with `data-reveal` and an `--index`, a single `IntersectionObserver`
flips the attribute, and one rule in `globals.css` owns the transition.
Re-choreographing the entire site is a CSS edit.

**Scroll effects are CSS-driven.** `useScrollProgress` writes a 0→1 value to a
custom property on each frame a section is near the viewport. Parallax and mask
effects read that variable from CSS, so the main thread never touches a
transform and the work stays on the compositor.

The intro is a two-layer CSS mask with `exclude` compositing: a viewport-shaped
window is punched through an opaque plate and grown in two beats. The page
underneath is real the whole time — nothing is duplicated or faked. It runs once
per session and is skipped entirely under reduced motion.

---

## Deploying to GitHub Pages

The workflow at `.github/workflows/deploy.yml` is ready. Once the repo is on
GitHub:

1. **Settings → Pages → Source → GitHub Actions**
2. Push to `main`

The workflow builds with `NEXT_PUBLIC_BASE_PATH` set to the repo name (a project
Pages site is served from `/<repo>/`), writes `.nojekyll` so `/_next/` survives,
and publishes `out/`.

For a custom domain or a root-level host, leave `NEXT_PUBLIC_BASE_PATH` unset.

---

## Credits & licence

Template code is MIT (see `LICENSE`).

The visual language is an original build in a widely-used editorial idiom. No
markup, stylesheet, copy, imagery or font file was copied from any existing
site; the two typefaces are open-licence Google Fonts. Replace the placeholder
business details before publishing.
