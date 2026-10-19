import { useEffect, useRef } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { store } from '../store'
import { NAV, IDENTITY } from '../data/content'

/**
 * Persistent header: wordmark, page links, and a standing call to action.
 *
 * The link row scrolls sideways rather than collapsing into a menu on
 * narrow screens — five short labels fit, and a visible row beats a
 * hidden one.
 */
export default function Header() {
  const barRef = useRef(null)

  useEffect(() => {
    let raf = 0
    const tick = () => {
      if (barRef.current) barRef.current.style.transform = `scaleX(${store.progress})`
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [])

  return (
    <header
      className="sticky top-0 z-40"
      style={{ backgroundColor: 'rgb(243 238 229 / 0.97)' }}
    >
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

      {/* Stacks on a phone, where five labels cannot sit beside the
          wordmark. The nav wraps rather than scrolling sideways: a row
          clipped at the edge hides pages with nothing to say so. */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-x-6 gap-y-[10px] px-[6vw] py-[12px]">
        <Link to="/" className="shrink-0">
          <span className="display-md t-ink block text-[19px] leading-none">
            {IDENTITY.first} {IDENTITY.last}
          </span>
          <span className="meta block mt-[4px] hidden sm:block">{IDENTITY.role}</span>
        </Link>

        <nav
          aria-label="Pages"
          className="flex flex-wrap items-center gap-x-[clamp(13px,2vw,30px)] gap-y-[8px]"
        >
          {NAV.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className="eyebrow whitespace-nowrap transition-colors duration-300"
              style={({ isActive }) => ({
                color: isActive ? 'var(--ochre)' : 'var(--dim)',
              })}
            >
              {item.label}
            </NavLink>
          ))}
          <a
            href={`mailto:${IDENTITY.email}`}
            className="eyebrow whitespace-nowrap hidden md:inline-block px-[16px] py-[9px] rounded-full shrink-0"
            style={{ backgroundColor: 'var(--ink)', color: 'var(--paper-warm)' }}
          >
            Get in touch
          </a>
        </nav>
      </div>

      <div className="rule-h" />
    </header>
  )
}
