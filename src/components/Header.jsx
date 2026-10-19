import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { store } from '../store'
import { NAV, IDENTITY } from '../data/content'

/**
 * One clean bar: wordmark left, links right, a single gold call to action.
 *
 * Below `lg` the links collapse into a full-screen navy menu rather than
 * wrapping onto extra lines — a wrapped row of five labels reads as
 * clutter and pushes the page down.
 */
export default function Header() {
  const [open, setOpen] = useState(false)
  const barRef = useRef(null)
  const { pathname } = useLocation()

  useEffect(() => setOpen(false), [pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  useEffect(() => {
    let raf = 0
    const tick = () => {
      if (barRef.current) barRef.current.style.transform = `scaleX(${store.progress})`
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [])

  const linkStyle = ({ isActive }) => ({
    color: isActive ? 'var(--navy)' : 'var(--dim)',
    borderBottom: `2px solid ${isActive ? 'var(--gold)' : 'transparent'}`,
    paddingBottom: '4px',
  })

  return (
    <>
      <header
        className="sticky top-0 z-40"
        style={{ backgroundColor: 'var(--white)', boxShadow: '0 1px 0 var(--rule-soft)' }}
      >
        <div className="flex items-center justify-between gap-6 px-[6vw] h-[74px]">
          <Link to="/" className="shrink-0 leading-none">
            <span className="display-md block text-[20px] tracking-[-0.02em]">
              {IDENTITY.first} {IDENTITY.last}
            </span>
            <span className="eyebrow t-dim block mt-[5px] text-[10px]">
              {IDENTITY.role}
            </span>
          </Link>

          <nav aria-label="Pages" className="hidden lg:flex items-center gap-[30px]">
            {NAV.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                // Without `end`, "/" would count as active on every page.
                end={item.to === '/'}
                className="eyebrow transition-colors duration-200"
                style={linkStyle}
              >
                {item.label}
              </NavLink>
            ))}
            <a href={`mailto:${IDENTITY.email}`} className="btn btn-gold ml-[6px]">
              Get in touch
            </a>
          </nav>

          <button
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden flex flex-col justify-center gap-[5px] w-[34px] h-[34px]"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            <span
              className="block h-[2px] w-full transition-transform duration-300"
              style={{
                backgroundColor: 'var(--navy)',
                transform: open ? 'translateY(7px) rotate(45deg)' : 'none',
              }}
            />
            <span
              className="block h-[2px] w-full transition-opacity duration-200"
              style={{ backgroundColor: 'var(--navy)', opacity: open ? 0 : 1 }}
            />
            <span
              className="block h-[2px] w-full transition-transform duration-300"
              style={{
                backgroundColor: 'var(--navy)',
                transform: open ? 'translateY(-7px) rotate(-45deg)' : 'none',
              }}
            />
          </button>
        </div>

        <div className="h-[3px]" style={{ backgroundColor: 'var(--rule-soft)' }}>
          <span
            ref={barRef}
            className="block h-full origin-left"
            style={{ backgroundColor: 'var(--gold)', transform: 'scaleX(0)' }}
          />
        </div>
      </header>

      {/* ── mobile menu ──────────────────────────────────────── */}
      <div
        className="fixed inset-0 z-30 lg:hidden on-navy flex flex-col justify-center px-[8vw]"
        style={{
          backgroundColor: 'var(--navy)',
          transform: open ? 'translateY(0)' : 'translateY(-100%)',
          transition: 'transform 520ms cubic-bezier(0.76, 0, 0.24, 1)',
        }}
        aria-hidden={!open}
      >
        {NAV.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.to === '/'}
            tabIndex={open ? 0 : -1}
            className="display text-[clamp(1.8rem,8vw,3rem)] py-[8px]"
            style={({ isActive }) => ({ color: isActive ? 'var(--gold)' : 'var(--white)' })}
          >
            {item.label}
          </NavLink>
        ))}
        <a
          href={`mailto:${IDENTITY.email}`}
          tabIndex={open ? 0 : -1}
          className="btn btn-gold mt-[28px] self-start"
        >
          Get in touch
        </a>
      </div>
    </>
  )
}
