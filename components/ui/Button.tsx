import type { ReactNode } from 'react'
import styles from './Button.module.css'

type Variant = 'plain' | 'transparent'

type Props = {
  children: ReactNode
  href?: string
  onClick?: () => void
  variant?: Variant
  className?: string
  type?: 'button' | 'submit'
  disabled?: boolean
  fill?: boolean
  'aria-label'?: string
}

/**
 * The system's one button — and it is not what a button usually is.
 *
 * Measured from the reference:
 *  · **Serif**, 0.9375rem, `letter-spacing: 0.06em`, sentence case.
 *  · **Square.** `border-radius: 0`. No pill, no shadow, no gradient.
 *  · No background and no border of its own. A `::after` plate grows from
 *    `scaleY(0)` with `transform-origin: bottom` when the button becomes
 *    visible — an entrance, not a hover.
 *  · Hover is a **vertical text roll**: the label lifts by
 *    `-100% - 0.4em` while a duplicate rises into its place.
 *  · An `<i>` inside is italic, so a label can mix roman and italic —
 *    "*Start your* COMMISSION". Pass JSX to use it.
 *
 * Minimum hit area is 45×45 with 10px padding, so it stays tappable
 * despite having no visible box at rest.
 */
export default function Button({
  children,
  href,
  onClick,
  variant = 'plain',
  className,
  type = 'button',
  disabled,
  fill = true,
  ...rest
}: Props) {
  const classes = [styles.button, styles[variant], className].filter(Boolean).join(' ')

  const inner = (
    <span className={styles.roll} aria-hidden={false}>
      <span className={styles.content}>{children}</span>
      <span className={styles.copy} aria-hidden="true">
        {children}
      </span>
    </span>
  )

  if (href) {
    return (
      <a href={href} className={classes} data-fill={fill} {...rest}>
        {inner}
      </a>
    )
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={classes}
      data-fill={fill}
      disabled={disabled}
      {...rest}
    >
      {inner}
    </button>
  )
}
