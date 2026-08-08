import { site } from '@/content/site'
import Button from '@/components/ui/Button'
import { Reveal, RevealLines } from '@/components/motion/Reveal'
import styles from './FinalCta.module.css'

/** Closing ask. */
export default function FinalCta() {
  const { finalCta, contact } = site

  return (
    <section className={`${styles.final} section`}>
      <div className="container">
        <div className={styles.inner}>
          <RevealLines
            as="h2"
            className={styles.title}
            lines={[{ text: finalCta.line1 }, { text: finalCta.line2Em, emphasis: true }]}
          />

          <Reveal as="p" index={2} className={styles.body}>
            {finalCta.body}
          </Reveal>

          <Reveal index={3} className={styles.actions}>
            <Button href={finalCta.cta.href} size="lg">
              {finalCta.cta.label}
            </Button>
            <a href={contact.phoneHref} className={styles.phone}>
              {contact.phone}
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
