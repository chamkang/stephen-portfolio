import { useEffect, useRef, useState } from 'react'

const EASE = 'cubic-bezier(0.16, 1, 0.3, 1)'

/**
 * Reveals its content once it scrolls into view: a short lift-and-fade
 * (`lift`, default) or a top-down wipe (`mask`).
 *
 * The element that is *observed* is never the element that is *clipped*.
 * A mask starts at `clip-path: inset(0 0 100% 0)` — zero visible area — and
 * current Chrome counts an element's own clip-path when deciding whether it
 * is on screen, so observing the clipped element meant it never revealed at
 * all. The outer element is observed; an inner wrapper carries the clip.
 */
export default function Reveal({
  as: Tag = 'div',
  mode = 'lift',
  delay = 0,
  className = '',
  style: styleOverride,
  children,
  ...rest
}) {
  const ref = useRef(null)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (
      typeof IntersectionObserver === 'undefined' ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      setShown(true)
      return
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true)
          io.disconnect()
        }
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.08 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  const timing = { transitionDelay: `${delay}ms`, transitionTimingFunction: EASE }

  if (mode === 'mask') {
    return (
      <Tag ref={ref} className={className} style={styleOverride} {...rest}>
        <div
          style={{
            ...timing,
            transitionProperty: 'clip-path, transform',
            transitionDuration: '1150ms',
            clipPath: shown ? 'inset(0 0 -18% 0)' : 'inset(0 0 100% 0)',
            transform: shown ? 'translateY(0)' : 'translateY(0.14em)',
          }}
        >
          {children}
        </div>
      </Tag>
    )
  }

  // Opacity and a small translate leave the element's box on screen, so the
  // lift can be applied to the observed element directly.
  return (
    <Tag
      ref={ref}
      className={className}
      style={{
        ...styleOverride,
        ...timing,
        transitionProperty: 'opacity, transform',
        transitionDuration: '900ms',
        opacity: shown ? 1 : 0,
        transform: shown ? 'translateY(0)' : 'translateY(14px)',
      }}
      {...rest}
    >
      {children}
    </Tag>
  )
}
