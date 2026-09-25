import { useEffect, useRef, useState } from 'react'
import { store, subscribeActive, scrollToSection } from '../store'
import { SECTIONS, IDENTITY } from '../data/content'

/**
 * Page chrome: a header strip, a section index down the left margin on wide
 * screens, and a hairline progress rule at the very top.
 */
export default function Shell() {
  const [active, setActive] = useState(0)
  const barRef = useRef(null)

  useEffect(() => subscribeActive(setActive), [])

  useEffect(() => {
    let raf = 0
    const tick = () => {
      if (barRef.current) {
        barRef.current.style.transform = `scaleX(${store.progress})`
      }
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [])

  return (
    <div className="fixed inset-0 z-40 pointer-events-none select-none">
      {/* ── progress hairline ────────────────────────────────── */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px]"
        style={{ backgroundColor: 'var(--rule-soft)' }}
      >
        <span
          ref={barRef}
          className="block h-full origin-left"
          style={{ backgroundColor: 'var(--ochre)', transform: 'scaleX(0)' }}
        />
      </div>

      {/* ── running head ─────────────────────────────────────── */}
      {/* A solid strip, so body text never scrolls up underneath the name. */}
      <header
        className="absolute top-[2px] left-0 right-0 flex items-center justify-between px-[6vw] xl:px-[4vw] py-[16px] gap-6 pointer-events-auto"
        style={{ backgroundColor: 'rgb(243 238 229 / 0.96)' }}
      >
        <button onClick={() => scrollToSection(0)} className="text-left">
          <span className="display-md t-ink block text-[19px] leading-none">
            {IDENTITY.first}
            {IDENTITY.last ? ` ${IDENTITY.last}` : ''}
          </span>
          <span className="meta block mt-[5px] hidden sm:block">
            {IDENTITY.role}
          </span>
        </button>

        <a
          href={`mailto:${IDENTITY.email}`}
          className="meta draw-rule t-ink"
        >
          Get in touch
        </a>
      </header>

      {/* ── left margin index ────────────────────────────────── */}
      <nav
        aria-label="Sections"
        className="absolute left-[2.2vw] top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-[11px] pointer-events-auto max-w-[9vw]"
      >
        {SECTIONS.map((s, i) => (
          <button
            key={s.id}
            onClick={() => scrollToSection(i)}
            className="group flex items-center gap-[11px]"
            aria-current={active === i ? 'true' : undefined}
          >
            <span
              className="block h-px transition-all duration-500 ease-out"
              style={{
                width: active === i ? 26 : 11,
                backgroundColor: active === i ? 'var(--ochre)' : 'var(--dim)',
                opacity: active === i ? 1 : 0.4,
              }}
            />
            <span
              className="meta transition-all duration-500 whitespace-nowrap"
              style={{
                color: active === i ? 'var(--ink)' : 'var(--dim)',
                opacity: active === i ? 1 : 0.45,
                fontSize: 13.5,
              }}
            >
              {s.title}
            </span>
          </button>
        ))}
      </nav>
    </div>
  )
}
