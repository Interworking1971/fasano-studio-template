import { home } from '@/content/home'
import Media from '@/components/ui/Media'
import Button from '@/components/ui/Button'
import InlineButton from '@/components/ui/InlineButton'
import Parallax from '@/components/motion/Parallax'
import { Reveal, RevealLines } from '@/components/motion/Reveal'
import styles from './Diptychs.module.css'

/* ==========================================================================
   THE DIPTYCH FAMILY
   Four two-column arrangements that share a grid but differ in how the
   media behaves. Alternating them is what stops a long editorial page
   from reading as a template.
   ========================================================================== */

/**
 * 1 — STICKY
 * The image pins while the copy scrolls past it.
 */
export function DiptychSticky() {
  const d = home.diptychs.sticky

  return (
    <section className={`${styles.diptych} section`} id="discipline">
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.stickyMedia}>
            <Reveal>
              <Media slot={d.media} />
            </Reveal>
          </div>

          <div className={styles.text}>
            <Reveal as="p" className="eyebrow">
              {d.eyebrow}
            </Reveal>
            <Reveal as="h2" index={1} className={styles.title}>
              {d.title}
            </Reveal>
            <Reveal as="p" index={2} className={styles.body}>
              {d.body}
            </Reveal>

            <Reveal as="ul" index={3} className={styles.points}>
              {d.points.map((point) => (
                <li key={point} className={styles.point}>
                  {point}
                </li>
              ))}
            </Reveal>

            <Reveal index={4}>
              <Button href={d.cta.href} variant="plain">
                {d.cta.label}
              </Button>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}

/**
 * 2 — DOUBLE MASK
 * Two plates at different scales, the second overlapping and offset, each
 * revealed behind its own clip so they uncover in sequence.
 */
export function DiptychDoubleMask() {
  const d = home.diptychs.doubleMask

  return (
    <section className={`${styles.diptych} ${styles.tinted} section`}>
      <div className="container">
        <div className={styles.doubleGrid}>
          <div className={styles.doubleText}>
            <Reveal as="p" className="eyebrow">
              {d.eyebrow}
            </Reveal>
            <Reveal as="h2" index={1} className={styles.title}>
              {d.title}
            </Reveal>
            <Reveal as="p" index={2} className={styles.body}>
              {d.body}
            </Reveal>
          </div>

          <div className={styles.doubleMedia}>
            <Reveal className={styles.maskA}>
              <Parallax speed={0.1}>
                <Media slot={d.mediaA} />
              </Parallax>
            </Reveal>
            <Reveal index={2} className={styles.maskB}>
              <Parallax speed={0.2}>
                <Media slot={d.mediaB} />
              </Parallax>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}

/**
 * 3 — MAIN EDITO
 * No image. A centred pull-statement that gives the page a breath between
 * two heavy media sections.
 */
export function DiptychEdito() {
  const d = home.diptychs.mainEdito

  return (
    <section className={`${styles.edito} section`}>
      <div className="container">
        <div className={styles.editoInner}>
          <Reveal as="p" className="eyebrow">
            {d.eyebrow}
          </Reveal>

          <RevealLines
            as="h2"
            className={styles.editoTitle}
            lines={[{ text: d.title }, { text: d.titleEm, emphasis: true }]}
          />

          <Reveal as="p" index={2} className={styles.editoBody}>
            {d.body}
          </Reveal>

          <Reveal index={3}>
            <InlineButton href={d.cta.href} arrow>
              {d.cta.label}
            </InlineButton>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

/**
 * 4 — SINGLE MASK
 * Reversed diptych: wide landscape plate on the left, short copy right.
 */
export function DiptychSingleMask() {
  const d = home.diptychs.singleMask

  return (
    <section className={`${styles.diptych} section`} id="prova">
      <div className="container">
        <div className={styles.reverseGrid}>
          <Reveal className={styles.reverseMedia}>
            <Parallax speed={0.14}>
              <Media slot={d.media} />
            </Parallax>
          </Reveal>

          <div className={styles.text}>
            <Reveal as="p" className="eyebrow">
              {d.eyebrow}
            </Reveal>
            <Reveal as="h2" index={1} className={styles.title}>
              {d.title}
            </Reveal>
            <Reveal as="p" index={2} className={styles.body}>
              {d.body}
            </Reveal>
            <Reveal index={3}>
              <Button href={d.cta.href}>{d.cta.label}</Button>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
