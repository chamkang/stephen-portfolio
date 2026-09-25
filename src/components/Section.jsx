import { useEffect, useRef } from 'react'
import { registerSection } from '../store'

/**
 * Registers its element with the store so the scroll driver can derive a
 * continuous `phase` from real layout geometry rather than guessed heights.
 */
export default function Section({ index, id, className = '', children }) {
  const ref = useRef(null)

  useEffect(() => registerSection(index, ref.current), [index])

  return (
    <section
      ref={ref}
      id={id}
      data-index={index}
      className={`relative w-full ${className}`}
    >
      {children}
    </section>
  )
}
