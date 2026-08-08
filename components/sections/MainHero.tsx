import { site } from '@/content/site'
import Media from '@/components/ui/Media'
import Button from '@/components/ui/Button'
import ScrollCue from '@/components/ui/ScrollCue'
import Parallax from '@/components/motion/Parallax'
import styles from './MainHero.module.css'

/**
 * Full-bleed opening.
 *
 * The display line is set in three masked rows that release in sequence on
 * load — roman, italic, roman — which is the reference system's one
 * typographic flourish. The media sits behind on a slow parallax and the
 * wordmark is scaled up as a watermark against the bottom edge.
 */
export default function MainHero() {
  const { hero, brand } = site

  return (
    <section className={styles.hero} id="top">
      <div className={styles.bg}>
        <Parallax speed={0.18} className={styles.bgParallax}>
          <Media slot={hero.background} priority className={styles.bgMedia} />
        </Parallax>
        <div className={styles.scrim} aria-hidden="true" />
      </div>

      <div className={[styles.inner, 'container'].join(' ')}>
        <h1 className={styles.title}>
          <span className={styles.line} style={{ '--i': 0 } as React.CSSProperties}>
            <span>{hero.line1}</span>
          </span>
          <span className={styles.line} style={{ '--i': 1 } as React.CSSProperties}>
            <span className="em">{hero.line2Em}</span>
          </span>
          <span className={styles.line} style={{ '--i': 2 } as React.CSSProperties}>
            <span>{hero.line3}</span>
          </span>
        </h1>

        <div className={styles.foot}>
          <p className={styles.standfirst}>{hero.standfirst}</p>
          <Button href={hero.cta.href} size="lg" className={styles.cta}>
            {hero.cta.label}
          </Button>
        </div>
      </div>

      <div className={styles.cue}>
        <ScrollCue label={hero.scrollCue} />
      </div>

      <span className={styles.watermark} aria-hidden="true">
        {brand.name}
      </span>
    </section>
  )
}
