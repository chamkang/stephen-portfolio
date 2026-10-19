import { useRef, useState, useEffect } from 'react'

/**
 * A horizontal rail of cards with arrow controls — used where a plain
 * stacked list would run on for screens at a time.
 *
 * Native scrolling with snap points does the work, so it stays usable by
 * swipe, trackpad and keyboard; the arrows just nudge it.
 */
export default function CardRail({ label, children }) {
  const ref = useRef(null)
  const [atStart, setAtStart] = useState(true)
  const [atEnd, setAtEnd] = useState(false)

  const sync = () => {
    const el = ref.current
    if (!el) return
    setAtStart(el.scrollLeft < 8)
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 8)
  }

  useEffect(() => {
    sync()
    const el = ref.current
    if (!el) return
    el.addEventListener('scroll', sync, { passive: true })
    window.addEventListener('resize', sync)
    return () => {
      el.removeEventListener('scroll', sync)
      window.removeEventListener('resize', sync)
    }
  }, [])

  const nudge = (dir) => {
    const el = ref.current
    if (!el) return
    el.scrollBy({ left: dir * Math.max(280, el.clientWidth * 0.8), behavior: 'smooth' })
  }

  return (
    <div>
      <div className="flex items-center justify-between gap-6 mb-[24px]">
        {label}
        <div className="flex items-center gap-[10px] shrink-0">
          <button
            onClick={() => nudge(-1)}
            className="carousel-arrow"
            aria-label="Scroll left"
            disabled={atStart}
          >
            ‹
          </button>
          <button
            onClick={() => nudge(1)}
            className="carousel-arrow"
            aria-label="Scroll right"
            disabled={atEnd}
          >
            ›
          </button>
        </div>
      </div>

      <div ref={ref} className="rail">
        {children}
      </div>
    </div>
  )
}
