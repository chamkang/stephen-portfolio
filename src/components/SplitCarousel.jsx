import { useCallback, useEffect, useState } from 'react'

/**
 * Split carousel: photographs on one side, fixed copy on the other.
 *
 * The images cross-fade rather than slide, so the panel never jumps, and
 * the controls sit on the image itself. It advances on its own until the
 * visitor touches a control, then stays where they put it.
 */
export default function SplitCarousel({
  slides,
  reverse = false,
  interval = 6000,
  children,
}) {
  const [i, setI] = useState(0)
  const [held, setHeld] = useState(false)

  const go = useCallback(
    (next) => {
      setHeld(true)
      setI((c) => (next + slides.length) % slides.length)
    },
    [slides.length]
  )

  useEffect(() => {
    if (held || slides.length < 2) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const t = setInterval(() => setI((c) => (c + 1) % slides.length), interval)
    return () => clearInterval(t)
  }, [held, interval, slides.length])

  return (
    <div
      className={`grid grid-cols-1 lg:grid-cols-2 items-stretch ${
        reverse ? 'lg:[&>*:first-child]:order-2' : ''
      }`}
    >
      {/* ── images ───────────────────────────────────────────── */}
      <div className="relative plate min-h-[clamp(320px,52vh,560px)]">
        {slides.map((s, k) => (
          <img
            key={s.src}
            src={s.src}
            alt={s.alt}
            loading={k === 0 ? 'eager' : 'lazy'}
            className="absolute inset-0 w-full h-full object-cover"
            style={{
              objectPosition: s.position ?? '50% 30%',
              opacity: k === i ? 1 : 0,
              transition: 'opacity 900ms cubic-bezier(0.16, 1, 0.3, 1)',
            }}
          />
        ))}

        {slides.length > 1 && (
          <>
            <div className="absolute left-0 right-0 bottom-0 flex items-center justify-between p-[clamp(14px,2vw,24px)]">
              <div className="flex items-center gap-[8px]">
                {slides.map((s, k) => (
                  <button
                    key={s.src}
                    onClick={() => go(k)}
                    aria-label={`Show image ${k + 1} of ${slides.length}`}
                    className="dot"
                    data-on={k === i}
                  />
                ))}
              </div>

              <div className="flex items-center gap-[10px]">
                <button
                  onClick={() => go(i - 1)}
                  className="carousel-arrow"
                  aria-label="Previous image"
                >
                  ‹
                </button>
                <button
                  onClick={() => go(i + 1)}
                  className="carousel-arrow"
                  aria-label="Next image"
                >
                  ›
                </button>
              </div>
            </div>
          </>
        )}
      </div>

      {/* ── copy ─────────────────────────────────────────────── */}
      <div className="flex items-center px-[clamp(24px,5vw,72px)] py-[clamp(40px,7vh,88px)]">
        <div className="w-full max-w-[52ch]">{children}</div>
      </div>
    </div>
  )
}
