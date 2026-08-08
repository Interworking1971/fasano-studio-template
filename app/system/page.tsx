import type { Metadata } from 'next'
import Button from '@/components/ui/Button'
import InlineButton from '@/components/ui/InlineButton'
import Media from '@/components/ui/Media'
import ScrollCue from '@/components/ui/ScrollCue'
import styles from './system.module.css'

export const metadata: Metadata = {
  title: 'Design system',
  description:
    'Living documentation for the template: colour, type scale, easings, components and motion.',
}

/* --------------------------------------------------------------------
   The style guide reads from the same tokens the site does, so it can
   never drift. Change tokens.css and this page changes with it.
   -------------------------------------------------------------------- */

const PALETTE = [
  { name: 'bone-100', value: '#f4f1ec', role: 'background · primary' },
  { name: 'bone-200', value: '#ece7df', role: 'media well' },
  { name: 'bone-300', value: '#e0d5c7', role: 'background · secondary' },
  { name: 'grey-900', value: '#171614', role: 'text · primary, inverse surface' },
  { name: 'grey-600', value: '#97928b', role: 'text · secondary' },
  { name: 'grey-300', value: '#d9d9d9', role: 'disabled' },
  { name: 'clay', value: '#b4552d', role: 'accent' },
  { name: 'olive', value: '#5c5f4a', role: 'accent · secondary' },
  { name: 'red', value: '#9d1414', role: 'error' },
]

const TYPE = [
  { token: '--font-header', sample: 'Dove il corpo', note: 'Hero only. clamp(46px → 120px).' },
  { token: '--font-display-1', sample: 'Vieni a provare', note: 'Section-opening statement.' },
  { token: '--font-display-2', sample: 'Tre modi di stare qui', note: 'Standard section heading.' },
  { token: '--font-display-3', sample: 'La forza è la base', note: 'Large heading / pull quote.' },
  { token: '--font-display-4', sample: 'Valutazione iniziale', note: 'Sans. Sub-heading, list titles.' },
  { token: '--font-display-5', sample: 'La disciplina', note: 'Small serif. Logo, captions.' },
  { token: '--font-body', sample: 'Uno studio boutique nel cuore di Fasano.', note: 'Paragraphs.' },
  { token: '--font-label-2', sample: 'Orari karate', note: 'Links, form labels.' },
  { token: '--font-tiny-1', sample: 'Massimo dodici persone per turno.', note: 'Meta, captions.' },
  { token: '--font-tiny-2', sample: 'P.IVA 0000000000', note: 'Legal, credits.' },
]

const EASINGS = [
  'out-quint',
  'out-quart',
  'out-expo',
  'in-out-quart',
  'in-out-quint',
  'in-out-circ',
  'custom-1',
  'out-sine',
]

export default function SystemPage() {
  return (
    <div className={styles.page}>
      <header className={`container ${styles.head}`}>
        <p className="eyebrow">Design system · v1.0</p>
        <h1 className={styles.pageTitle}>
          The kit behind <span className="em">the page</span>
        </h1>
        <p className={styles.lede}>
          Everything on this page is rendered from the same tokens and components the site uses.
          There is no second copy of the system to keep in sync — change{' '}
          <code>app/styles/tokens.css</code> and this documentation changes with it.
        </p>
      </header>

      {/* ---------------- COLOUR ---------------- */}
      <Section id="colour" number="01" title="Colour">
        <p className={styles.note}>
          Nine raw values, aliased into semantic roles. Components only ever reference the semantic
          layer, which is what lets <code>[data-theme=&quot;dark&quot;]</code> invert a whole
          section by re-pointing six variables.
        </p>
        <ul className={styles.swatches}>
          {PALETTE.map((swatch) => (
            <li key={swatch.name} className={styles.swatch}>
              <span className={styles.chip} style={{ backgroundColor: swatch.value }} />
              <span className={styles.swatchName}>{swatch.name}</span>
              <span className={styles.swatchValue}>{swatch.value}</span>
              <span className={styles.swatchRole}>{swatch.role}</span>
            </li>
          ))}
        </ul>
      </Section>

      {/* ---------------- TYPE ---------------- */}
      <Section id="type" number="02" title="Type scale">
        <p className={styles.note}>
          Two families: a high-contrast display serif for anything that carries meaning, a neutral
          grotesque for anything that carries information. Each step is a complete{' '}
          <code>font</code> shorthand, so a component sets one property.
        </p>
        <ul className={styles.typeList}>
          {TYPE.map((row) => (
            <li key={row.token} className={styles.typeRow}>
              <div className={styles.typeMeta}>
                <code className={styles.typeToken}>{row.token}</code>
                <span className={styles.typeNote}>{row.note}</span>
              </div>
              <p className={styles.typeSample} style={{ font: `var(${row.token})` }}>
                {row.sample}
              </p>
            </li>
          ))}
        </ul>
      </Section>

      {/* ---------------- MOTION ---------------- */}
      <Section id="motion" number="03" title="Motion">
        <p className={styles.note}>
          Nineteen named easings; nothing in the codebase uses a bare <code>ease</code>. Hover a
          track to run it. Entrances use <code>out-*</code>, exits <code>in-*</code>, and anything
          that travels both ways uses <code>in-out-*</code>.
        </p>
        <ul className={styles.easings}>
          {EASINGS.map((name) => (
            <li key={name} className={styles.easing}>
              <span className={styles.easingName}>--ease-{name}</span>
              <span className={styles.easingTrack}>
                <span
                  className={styles.easingDot}
                  style={{ transitionTimingFunction: `var(--ease-${name})` }}
                />
              </span>
            </li>
          ))}
        </ul>

        <div className={styles.motionNotes}>
          <div>
            <h3 className={styles.subhead}>Reveal contract</h3>
            <p className={styles.note}>
              Sections do not animate themselves. They mark elements with <code>data-reveal</code>{' '}
              and an <code>--index</code>; a single observer flips the attribute and one rule in{' '}
              <code>globals.css</code> owns the transition. Re-choreographing the whole site is a
              CSS edit.
            </p>
          </div>
          <div>
            <h3 className={styles.subhead}>Scroll linking</h3>
            <p className={styles.note}>
              <code>useScrollProgress</code> writes a 0→1 value to a custom property on each frame
              a section is near the viewport. Parallax and mask effects read it from CSS, so the
              main thread never touches a transform.
            </p>
          </div>
        </div>
      </Section>

      {/* ---------------- COMPONENTS ---------------- */}
      <Section id="components" number="04" title="Components">
        <div className={styles.specs}>
          <Spec label="Button · solid">
            <Button href="#components">Prenota la prova</Button>
          </Spec>
          <Spec label="Button · outline">
            <Button href="#components" variant="outline">
              Orari karate
            </Button>
          </Spec>
          <Spec label="Button · large">
            <Button href="#components" size="lg">
              Prenota la prova gratuita
            </Button>
          </Spec>
          <Spec label="Button · loading">
            <Button loading>Invio</Button>
          </Spec>
          <Spec label="InlineButton">
            <InlineButton href="#components">Scopri il metodo</InlineButton>
          </Spec>
          <Spec label="InlineButton · arrow">
            <InlineButton href="#components" arrow>
              Vieni a vederlo
            </InlineButton>
          </Spec>
          <Spec label="ScrollCue">
            <ScrollCue label="Scorri" />
          </Spec>
          <Spec label="Eyebrow">
            <p className="eyebrow">Discipline</p>
          </Spec>
        </div>

        <h3 className={styles.subhead}>Media placeholder</h3>
        <p className={styles.note}>
          Every image slot renders a designed placeholder until a real photograph is supplied — the
          correct aspect ratio, system colours, grain, and the slot&apos;s name printed on it. The
          box is reserved either way, so dropping in photography causes no layout shift.
        </p>
        <div className={styles.mediaRow}>
          <Media slot={{ src: '', alt: 'Esempio 3:4', ratio: '3 / 4', label: 'Tatami' }} />
          <Media slot={{ src: '', alt: 'Esempio 1:1', ratio: '1 / 1', label: 'Ring' }} />
          <Media slot={{ src: '', alt: 'Esempio 16:10', ratio: '16 / 10', label: 'Sala pesi' }} />
        </div>
      </Section>

      {/* ---------------- GRID ---------------- */}
      <Section id="grid" number="05" title="Grid & rhythm">
        <p className={styles.note}>
          Two columns on mobile, twelve from 768px. Gutters and section spacing step up at three
          breakpoints, so vertical rhythm scales with the viewport instead of staying fixed.
        </p>
        <div className={styles.gridDemo} aria-hidden="true">
          {Array.from({ length: 12 }, (_, i) => (
            <span key={i} className={styles.gridCol}>
              {i + 1}
            </span>
          ))}
        </div>
        <dl className={styles.specTable}>
          <div><dt>--gap</dt><dd>20px → 30px → 40px</dd></div>
          <div><dt>--grid-gap</dt><dd>10px</dd></div>
          <div><dt>--section-gap</dt><dd>100px → 160px → 200px</dd></div>
          <div><dt>--header-height</dt><dd>68px → 84px</dd></div>
          <div><dt>max-width</dt><dd>1920px</dd></div>
        </dl>
      </Section>

      {/* ---------------- RESKIN ---------------- */}
      <Section id="reskin" number="06" title="Re-skinning">
        <ol className={styles.steps}>
          <li>
            <strong>Colour and type</strong> — edit <code>app/styles/tokens.css</code>. Swap the two
            font imports in <code>app/layout.tsx</code>. Nothing else references a colour or a
            typeface.
          </li>
          <li>
            <strong>Words</strong> — edit <code>content/site.ts</code>. It holds every headline,
            paragraph, nav item, price, timetable row and link on the site.
          </li>
          <li>
            <strong>Photography</strong> — drop files into <code>public/media/</code> and set{' '}
            <code>src</code> on the matching slot in <code>content/site.ts</code>. Placeholders
            disappear as slots are filled; a half-finished shoot still looks deliberate.
          </li>
          <li>
            <strong>Structure</strong> — re-order or delete sections in <code>app/page.tsx</code>.
            Each is self-contained.
          </li>
        </ol>
      </Section>

      <footer className={`container ${styles.pageFoot}`}>
        <InlineButton href="/" arrow>
          Torna al sito
        </InlineButton>
      </footer>
    </div>
  )
}

function Section({
  id,
  number,
  title,
  children,
}: {
  id: string
  number: string
  title: string
  children: React.ReactNode
}) {
  return (
    <section id={id} className={`container ${styles.section}`}>
      <div className={styles.sectionHead}>
        <span className={styles.sectionNumber}>{number}</span>
        <h2 className={styles.sectionTitle}>{title}</h2>
      </div>
      <div className={styles.sectionBody}>{children}</div>
    </section>
  )
}

function Spec({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className={styles.spec}>
      <span className={styles.specLabel}>{label}</span>
      <div className={styles.specStage}>{children}</div>
    </div>
  )
}
