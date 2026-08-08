'use client'

import { useId } from 'react'
import styles from './Field.module.css'

/**
 * Labelled text input. The label is always rendered for screen readers and
 * sits above the field on focus/fill, so the placeholder is never the only
 * thing naming the input.
 */
export default function Field({
  label,
  type = 'email',
  name,
  placeholder,
  value,
  onChange,
  required,
  error,
  className,
}: {
  label: string
  type?: string
  name: string
  placeholder?: string
  value: string
  onChange: (value: string) => void
  required?: boolean
  error?: string | null
  className?: string
}) {
  const id = useId()

  return (
    <div className={[styles.field, className].filter(Boolean).join(' ')} data-error={!!error}>
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
      <input
        id={id}
        className={styles.input}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        required={required}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        onChange={(event) => onChange(event.target.value)}
      />
      {error && (
        <p id={`${id}-error`} className={styles.error} role="alert">
          {error}
        </p>
      )}
    </div>
  )
}
