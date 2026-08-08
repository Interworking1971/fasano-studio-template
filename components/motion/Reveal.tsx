'use client'

import type { ElementType, ReactNode } from 'react'
import { useInView } from '@/lib/hooks'

type RevealProps = {
  children: ReactNode
  /** Stagger position — multiplies --delay (80ms per step). */
  index?: number
  as?: ElementType
  className?: string
  threshold?: number
  id?: string
}

/**
 * Fade + rise on entry.
 *
 * The component only toggles a data attribute; the actual transition is
 * declared once in globals.css under [data-reveal]. Timing is controlled
 * through --index so a parent can cascade its children.
 */
export function Reveal({
  children,
  index = 0,
  as: Tag = 'div',
  className,
  threshold = 0.15,
  id,
}: RevealProps) {
  const [ref, inView] = useInView<HTMLDivElement>({ threshold })

  return (
    <Tag
      ref={ref}
      id={id}
      className={className}
      data-reveal={inView ? 'in' : 'out'}
      style={{ '--index': index } as React.CSSProperties}
    >
      {children}
    </Tag>
  )
}

/**
 * Line-mask reveal — the signature entrance of this system.
 *
 * Each line is wrapped in an overflow-hidden block and slides up from 100%.
 * Pass an array of strings and they cascade; pass one and it just rises.
 *
 * `emphasis` renders that line in italic serif — the one deliberate
 * flourish the type system allows.
 */
export function RevealLines({
  lines,
  as: Tag = 'span',
  className,
  lineClassName,
  startIndex = 0,
}: {
  lines: { text: string; emphasis?: boolean }[]
  as?: ElementType
  className?: string
  lineClassName?: string
  startIndex?: number
}) {
  const [ref, inView] = useInView<HTMLSpanElement>({ threshold: 0.2 })

  return (
    <Tag ref={ref} className={className}>
      {lines.map((line, i) => (
        <span
          key={`${line.text}-${i}`}
          data-reveal-mask={inView ? 'in' : 'out'}
          className={lineClassName}
          style={{ '--index': startIndex + i } as React.CSSProperties}
        >
          <span style={line.emphasis ? { fontStyle: 'italic' } : undefined}>{line.text}</span>
        </span>
      ))}
    </Tag>
  )
}
