import Button from '@/components/ui/Button'
import { Reveal } from '@/components/motion/Reveal'
import styles from './PlanGrid.module.css'

export type Plan = {
  name: string
  price: string
  period: string
  body: string
  includes: readonly string[]
  /** One plan may be featured — it inverts to the dark surface and lifts out of the row. */
  featured?: boolean
}

/**
 * Three-up pricing.
 *
 * The featured plan is distinguished by surface and elevation rather than a
 * coloured "most popular" badge — the system has no badge, and adding one
 * would be the first piece of visual noise on the page.
 */
export default function PlanGrid({
  eyebrow,
  title,
  plans,
  note,
  cta,
  id,
}: {
  eyebrow: string
  title: string
  plans: readonly Plan[]
  note?: string
  cta: { label: string; href: string }
  id?: string
}) {
  return (
    <section className={`${styles.memberships} section`} id={id}>
      <div className="container">
        <div className={styles.head}>
          <Reveal as="p" className="eyebrow">
            {eyebrow}
          </Reveal>
          <Reveal as="h2" index={1} className={styles.title}>
            {title}
          </Reveal>
        </div>

        <div className={styles.grid}>
          {plans.map((plan, i) => (
            <Reveal key={plan.name} index={i} className={styles.plan}>
              <article data-featured={!!plan.featured} className={styles.card}>
                <header className={styles.cardHead}>
                  <h3 className={styles.name}>{plan.name}</h3>
                  <p className={styles.priceRow}>
                    <span className={styles.price}>{plan.price}</span>
                    <span className={styles.period}>{plan.period}</span>
                  </p>
                </header>

                <p className={styles.body}>{plan.body}</p>

                <ul className={styles.includes}>
                  {plan.includes.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>

                <Button
                  href={cta.href}
                  variant={plan.featured ? 'solid' : 'outline'}
                  className={styles.cta}
                >
                  {cta.label}
                </Button>
              </article>
            </Reveal>
          ))}
        </div>

        {note && <p className={styles.note}>{note}</p>}
      </div>
    </section>
  )
}
