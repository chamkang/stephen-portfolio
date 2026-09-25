/**
 * Scroll state shared between the smooth-scroll loop and the page chrome.
 *
 * Kept outside React: it changes every frame, and only the discrete value
 * (which section is active) is worth a re-render.
 */

const sections = []
const listeners = new Set()

export const store = {
  progress: 0, // 0..1 document scroll
  active: 0,   // index of the section at the viewport centre
}

export function registerSection(index, el) {
  sections[index] = el
  return () => {
    if (sections[index] === el) sections[index] = null
  }
}

export function subscribeActive(fn) {
  listeners.add(fn)
  return () => listeners.delete(fn)
}

export function scrollToSection(index) {
  const el = sections[index]
  if (!el) return
  window.scrollTo({ top: el.offsetTop + 2, behavior: 'smooth' })
}

const clamp = (v, a, b) => (v < a ? a : v > b ? b : v)

let lastActive = -1

export function readScroll() {
  const vh = window.innerHeight
  const mid = window.scrollY + vh * 0.5

  let active = 0
  for (let i = 0; i < sections.length; i++) {
    const el = sections[i]
    if (!el) continue
    if (mid < el.offsetTop) break
    active = i
  }

  store.active = active
  store.progress = clamp(
    window.scrollY / Math.max(1, document.body.scrollHeight - vh),
    0,
    1
  )

  if (active !== lastActive) {
    lastActive = active
    listeners.forEach((fn) => fn(active))
  }
}
