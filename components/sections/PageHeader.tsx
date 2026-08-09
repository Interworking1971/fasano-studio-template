import Media from '@/components/ui/Media'
import Parallax from '@/components/motion/Parallax'
import { Reveal, RevealLines } from '@/components/motion/Reveal'
import type { MediaSlot } from '@/content/site'
import styles from './PageHeader.module.css'

/**
 * The opening of every inner page.
 *
 * Deliberately quieter than MainHero — it clears the fixed header, states
 * the page, and gets out of the way. An optional plate underneath turns it
 * into a full-bleed opener for pages that warrant one (process, about).
 */
export default function PageHeader({
  eyebrow,
  title,
  titleEm,
  lede,
  media: slot,
}: {
  eyebrow: string
  title: string
  titleEm?: string
  lede?: string
  media?: MediaSlot
}) {
  const lines = [{ text: title }, ...(titleEm ? [{ text: titleEm, emphasis: true }] : [])]

  return (
    <header className={styles.header} data-has-media={!!slot}>
      <div className="container">
        <Reveal as="p" className={`eyebrow ${styles.eyebrow}`}>
          {eyebrow}
        </Reveal>

        <RevealLines as="h1" className={styles.title} lines={lines} startIndex={1} />

        {lede && (
          <Reveal as="p" index={3} className={styles.lede}>
            {lede}
          </Reveal>
        )}
      </div>

      {slot && (
        <Reveal className={styles.mediaWrap}>
          <Parallax speed={0.16} className={styles.parallax}>
            <Media slot={slot} priority className={styles.media} />
          </Parallax>
        </Reveal>
      )}
    </header>
  )
}
