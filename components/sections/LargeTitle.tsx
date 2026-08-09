import { home } from '@/content/home'
import Media from '@/components/ui/Media'
import Parallax from '@/components/motion/Parallax'
import { RevealLines } from '@/components/motion/Reveal'
import styles from './LargeTitle.module.css'

/** Oversized two-line statement over a wide parallax plate. */
export default function LargeTitle() {
  const { largeTitle } = home

  return (
    <section className={styles.largeTitle}>
      <div className={styles.mediaWrap}>
        <Parallax speed={0.22} className={styles.parallax}>
          <Media slot={largeTitle.media} className={styles.media} />
        </Parallax>
        <div className={styles.scrim} aria-hidden="true" />
      </div>

      <div className={`container ${styles.inner}`}>
        <RevealLines
          as="h2"
          className={styles.title}
          lineClassName={styles.line}
          lines={[{ text: largeTitle.line1 }, { text: largeTitle.line2Em, emphasis: true }]}
        />
      </div>
    </section>
  )
}
