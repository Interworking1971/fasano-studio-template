import { home } from '@/content/home'
import InlineButton from '@/components/ui/InlineButton'
import { Reveal, RevealLines } from '@/components/motion/Reveal'
import styles from './Discover.module.css'

/** Statement block — eyebrow, two-line display claim, body, inline link. */
export default function Discover() {
  const { discover } = home

  return (
    <section className={`${styles.discover} section`} id="studio">
      <div className="container">
        <div className={styles.inner}>
          <Reveal as="p" className={`eyebrow ${styles.eyebrow}`}>
            {discover.eyebrow}
          </Reveal>

          <RevealLines
            as="h2"
            className={styles.title}
            lines={[{ text: discover.title }, { text: discover.titleEm, emphasis: true }]}
          />

          <div className={styles.body}>
            <Reveal as="p" index={1}>
              {discover.body}
            </Reveal>
            <Reveal index={2} className={styles.action}>
              <InlineButton href={discover.cta.href} arrow>
                {discover.cta.label}
              </InlineButton>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
