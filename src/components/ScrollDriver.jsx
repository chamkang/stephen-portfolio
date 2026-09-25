import { useEffect } from 'react'
import Lenis from 'lenis'
import { readScroll } from '../store'

/** Smooth scrolling plus the per-frame read of scroll position. */
export default function ScrollDriver() {
  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const lenis = reduced
      ? null
      : new Lenis({
          duration: 1.15,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          smoothWheel: true,
          touchMultiplier: 1.6,
        })

    let raf = 0
    const loop = (time) => {
      lenis?.raf(time)
      readScroll()
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)

    window.addEventListener('resize', readScroll)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', readScroll)
      lenis?.destroy()
    }
  }, [])

  return null
}
