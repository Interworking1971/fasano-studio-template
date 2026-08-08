import type { ReactNode } from 'react'
import styles from './Button.module.css'

type Variant = 'solid' | 'outline' | 'ghost'
type Size = 'md' | 'lg'

type Props = {
  children: ReactNode
  href?: string
  onClick?: () => void
  variant?: Variant
  size?: Size
  className?: string
  type?: 'button' | 'submit'
  disabled?: boolean
  loading?: boolean
  'aria-label'?: string
}

/**
 * The system's one button.
 *
 * Hover is a fill that wipes up from the bottom edge on --ease-custom-1,
 * with the label crossfading to the inverse colour at the same rate — the
 * same gesture the reference site uses, expressed in two transitions
 * instead of a JS timeline.
 */
export default function Button({
  children,
  href,
  onClick,
  variant = 'solid',
  size = 'md',
  className,
  type = 'button',
  disabled,
  loading,
  ...rest
}: Props) {
  const classes = [styles.button, styles[variant], styles[size], className]
    .filter(Boolean)
    .join(' ')

  const inner = (
    <>
      <span className={styles.fill} aria-hidden="true" />
      <span className={styles.label}>{children}</span>
      {loading && (
        <span className={styles.loading} aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
      )}
    </>
  )

  if (href) {
    return (
      <a href={href} className={classes} {...rest}>
        {inner}
      </a>
    )
  }

  return (
    <button type={type} onClick={onClick} className={classes} disabled={disabled} {...rest}>
      {inner}
    </button>
  )
}
