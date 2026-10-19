/**
 * Reading progress for the header rule. Kept outside React because it
 * changes every frame and nothing needs to re-render for it.
 */

export const store = { progress: 0 }

const clamp = (v, a, b) => (v < a ? a : v > b ? b : v)

export function readScroll() {
  const vh = window.innerHeight
  store.progress = clamp(
    window.scrollY / Math.max(1, document.body.scrollHeight - vh),
    0,
    1
  )
}
