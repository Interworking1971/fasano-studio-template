import { home } from '@/content/home'
import Media from '@/components/ui/Media'
import Parallax from '@/components/motion/Parallax'
import { Reveal, RevealLines } from '@/components/motion/Reveal'
import styles from './SecondaryHero.module.css'

/** Studio introduction — tall portrait plate against an offset text column. */
export default function SecondaryHero() {
  const { secondaryHero } = home

  return (
    <section className={`${styles.secondary} section`}>
      <div className="container">
        <div className={styles.inner}>
          <Reveal className={styles.mediaCol}>
            <Parallax speed={0.12}>
              <Media slot={secondaryHero.media} />
            </Parallax>
          </Reveal>

          <div className={styles.textCol}>
            <Reveal as="p" className="eyebrow">
              {secondaryHero.eyebrow}
            </Reveal>

            <RevealLines
              as="h2"
              className={styles.title}
              lines={[
                { text: secondaryHero.title },
                { text: secondaryHero.titleEm, emphasis: true },
              ]}
            />

            <Reveal as="p" index={2} className={styles.body}>
              {secondaryHero.body}
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
