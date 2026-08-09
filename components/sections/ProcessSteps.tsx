import Media from '@/components/ui/Media'
import Parallax from '@/components/motion/Parallax'
import { Reveal } from '@/components/motion/Reveal'
import type { MediaSlot } from '@/content/site'
import styles from './ProcessSteps.module.css'

export type Step = {
  index: string
  title: string
  duration: string
  body: string
  slot: MediaSlot
}

/**
 * Long-form numbered process.
 *
 * Alternating sides with a continuous rule down the middle on desktop, so
 * six steps read as one movement rather than six blocks. The number is set
 * large in the serif and hangs outside the text column.
 */
export default function ProcessSteps({ steps }: { steps: readonly Step[] }) {
  return (
    <section className={`${styles.process} section`}>
      <div className="container">
        <ol className={styles.list}>
          {steps.map((step, i) => (
            <li key={step.index} className={styles.step} data-side={i % 2 === 0 ? 'left' : 'right'}>
              <Reveal className={styles.mediaCol}>
                <Parallax speed={0.12}>
                  <Media slot={step.slot} />
                </Parallax>
              </Reveal>

              <Reveal index={1} className={styles.textCol}>
                <span className={styles.index} aria-hidden="true">
                  {step.index}
                </span>
                <p className={styles.duration}>{step.duration}</p>
                <h2 className={styles.title}>{step.title}</h2>
                <p className={styles.body}>{step.body}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
