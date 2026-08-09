import type { MediaSlot } from '@/content/site'
import styles from './Media.module.css'

/**
 * The single image primitive for the whole template.
 *
 * If `slot.src` is set it renders the real photograph. If it is empty it
 * renders a *designed* placeholder — correct aspect ratio, system colours,
 * film grain, and the slot's name printed on it.
 *
 * That means the template ships complete and on-brand with zero photography,
 * and dropping in real images is a one-line change per slot in content/site.ts
 * with no layout shift, because the box was always reserved.
 */
export default function Media({
  slot,
  className,
  priority = false,
  cover = true,
  tone = 'light',
}: {
  slot: MediaSlot
  className?: string
  priority?: boolean
  cover?: boolean
  /** Placeholders must match the surface they sit on, or type over them vanishes. */
  tone?: 'light' | 'dark'
}) {
  const style = { aspectRatio: slot.ratio } as React.CSSProperties

  if (slot.src) {
    return (
      <figure className={[styles.figure, className].filter(Boolean).join(' ')} style={style}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={slot.src}
          alt={slot.alt}
          className={styles.img}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          data-fit={cover ? 'cover' : 'contain'}
        />
      </figure>
    )
  }

  return (
    <figure
      className={[styles.figure, styles.placeholder, className].filter(Boolean).join(' ')}
      style={style}
      data-tone={tone}
      role="img"
      aria-label={slot.alt}
    >
      <span className={styles.grain} aria-hidden="true" />
      <span className={styles.rule} aria-hidden="true" />
      <figcaption className={styles.caption}>
        <span className={styles.captionLabel}>{slot.label ?? 'Media'}</span>
        <span className={styles.captionRatio}>{slot.ratio.replace(/\s/g, '')}</span>
      </figcaption>
    </figure>
  )
}
