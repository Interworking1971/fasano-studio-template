import { notFound as content } from '@/content/pages'
import Button from '@/components/ui/Button'
import InlineButton from '@/components/ui/InlineButton'
import styles from './not-found.module.css'

export default function NotFound() {
  return (
    <section className={styles.wrap}>
      <div className="container">
        <div className={styles.inner}>
          <p className={styles.code}>{content.code}</p>
          <h1 className={styles.title}>{content.title}</h1>
          <p className={styles.body}>{content.body}</p>
          <div className={styles.actions}>
            <Button href={content.cta.href}>
              {content.cta.label}
            </Button>
            <InlineButton href={content.secondary.href} arrow>
              {content.secondary.label}
            </InlineButton>
          </div>
        </div>
      </div>
    </section>
  )
}
