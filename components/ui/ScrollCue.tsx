import styles from './ScrollCue.module.css'

/**
 * The hero's scroll invitation. A hairline with a travelling segment,
 * on a slow 5.2s loop so it reads as an ambient hint rather than a nag.
 */
export default function ScrollCue({ label }: { label: string }) {
  return (
    <div className={styles.cue} aria-hidden="true">
      <span className={styles.label}>{label}</span>
      <span className={styles.track}>
        <span className={styles.thumb} />
      </span>
    </div>
  )
}
