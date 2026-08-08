import type { ReactNode } from 'react'
import styles from './InlineButton.module.css'

/**
 * A text link with the reference site's underline gesture: on hover the
 * existing rule wipes out to the right, then a new one wipes in from the
 * left. Two background-images, one background-size transition each,
 * offset in time — no pseudo-element juggling.
 */
export default function InlineButton({
  children,
  href,
  onClick,
  className,
  arrow = false,
}: {
  children: ReactNode
  href?: string
  onClick?: () => void
  className?: string
  arrow?: boolean
}) {
  const classes = [styles.inline, className].filter(Boolean).join(' ')

  const inner = (
    <>
      <span className={styles.text}>{children}</span>
      {arrow && (
        <svg className={styles.arrow} viewBox="0 0 16 12" aria-hidden="true">
          <path d="M0 6h14M9 1l5 5-5 5" fill="none" stroke="currentColor" strokeWidth="1.2" />
        </svg>
      )}
    </>
  )

  if (href) {
    return (
      <a href={href} className={classes}>
        {inner}
      </a>
    )
  }

  return (
    <button type="button" onClick={onClick} className={classes}>
      {inner}
    </button>
  )
}
