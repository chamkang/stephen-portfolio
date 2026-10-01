/**
 * Headless checks for things that are easy to get wrong silently:
 * the site's factual content, its assets, and the scroll-state math.
 *
 *   npm run verify
 *
 * Imports the real modules from src/, not copies.
 */

import { readFileSync, readdirSync, existsSync, statSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..')

let fails = 0
const check = (label, cond, detail = '') => {
  if (!cond) { fails++; console.log('  FAIL  ' + label, detail) }
  else console.log('  ok    ' + label, detail)
}

const walk = (dir) =>
  readdirSync(dir).flatMap((f) => {
    const p = join(dir, f)
    return statSync(p).isDirectory() ? walk(p) : [p]
  })

const sources = [join(ROOT, 'index.html'), ...walk(join(ROOT, 'src'))]
const corpus = sources.map((p) => readFileSync(p, 'utf8')).join('\n')

/* ══ 1 · content ═══════════════════════════════════════════════ */

console.log('\n── content ' + '─'.repeat(55))

const C = await import('../src/data/content.js')

check('email is current', C.IDENTITY.email === 'sustain99a@gmail.com', C.IDENTITY.email)
check('location is current', C.IDENTITY.locale === 'Denmark', C.IDENTITY.locale)
check('phone is current', C.IDENTITY.phone === '+45 71 36 76 01', C.IDENTITY.phone)
check('tel link dials the same number', C.PHONE_HREF === 'tel:+4571367601', C.PHONE_HREF)
check('WhatsApp link opens the same number', C.WHATSAPP_HREF === 'https://wa.me/4571367601', C.WHATSAPP_HREF)
check('mission is verbatim (keeps "effectively")',
  C.MISSION === 'Collaborating effectively with private and public sector organisations in designing, initiating, and delivering customer-centric projects.')
check('vision is verbatim',
  C.VISION === 'Creating a world of consistent and sustainable project success.')
// The vision statement belongs in exactly one place — above the mission.
check('vision is rendered exactly once',
  (corpus.match(/\{VISION\}/g) || []).length === 1,
  `${(corpus.match(/\{VISION\}/g) || []).length} occurrence(s)`)
check('mission highlights all occur in the mission',
  C.MISSION_HIGHLIGHTS.every((w) => C.MISSION.includes(w)))
check('nine core values, as given',
  JSON.stringify(C.VALUES) ===
    JSON.stringify([
      'Communication', 'Humility', 'Trustworthiness',
      'Privacy', 'Adaptability', 'Community Service',
      'Servant Leadership', 'Teamwork', 'Transparency',
    ]), C.VALUES.length + ' values')
check('BSc is in Management',
  C.CREDENTIALS.find((c) => c.abbr === 'BSc').title === 'Bachelor of Science (BSc) in Management')
check('schools take the definite article',
  C.BIO.includes('the Aberdeen Business School at the Robert Gordon University'))
check('five consulting areas, in order',
  JSON.stringify(C.CONSULTING.map((a) => a.title)) ===
    JSON.stringify([
      'Cost & Schedule Management', 'Risk Management', 'ERP Project Management',
      'IT Compliance & Governance', 'Digital Transformation',
    ]))
check('every consulting area has something to show, or is known to be bare',
  C.CONSULTING.every((a) => a.related || a.body || a.points || a.title === 'ERP Project Management'))
check('credentials are MSc, BSc, IPMA, AML — no PMP',
  JSON.stringify(C.CREDENTIALS.map((c) => c.abbr)) === JSON.stringify(['MSc', 'BSc', 'IPMA', 'AML']),
  C.CREDENTIALS.map((c) => c.abbr).join(', '))
check('ten projects in two groups',
  C.PROJECTS.length === 2 && C.PROJECTS.flatMap((g) => g.items).length === 10,
  C.PROJECTS.map((g) => `${g.group}: ${g.items.length}`).join(', '))

// Wording that was invented in earlier drafts, or facts that are wrong
// (old email, assumed locations). None of it may come back.
const BANNED = [
  'kangbameche',
  'Douala, CM · Aberdeen',
  'three jurisdictions',
  'Bring me in early',
  'Three places I am useful',
  'Baselines that survive',
  'Say the difficult thing',
  'The plan is a hypothesis',
  'Between sessions',
  'Available for engagement',
  'Selected Engagements',
  'sequencing supply to the critical path',
  'most regulated, cost-sensitive',
  'palette of this site',
  'Illustrative',
  // Typos in the supplied copy, fixed on entry.
  'industry nned',
  'R& D',
  // PMP was withdrawn from the site; "Project Management Professional" is
  // that credential's exact name, so it must not reappear either.
  'PMP',
  'Project Management Institute',
  'Project Management Professional',
]
for (const phrase of BANNED) {
  check(`no "${phrase}"`, !corpus.includes(phrase))
}

/* ══ 2 · assets ════════════════════════════════════════════════ */

console.log('\n── assets ' + '─'.repeat(56))

const refs = [...new Set([...corpus.matchAll(/["'](\/img\/[^"']+)["']/g)].map((m) => m[1]))]
for (const r of refs) {
  check(`${r} exists locally`, existsSync(join(ROOT, 'public', r)))
}

// Everything must be served from the site itself: no fonts, images or
// scripts fetched from third parties when a visitor loads the page.
// (Outbound links such as wa.me are fine — they load nothing until clicked.)
const remote = [
  ...corpus.matchAll(/src=["'](https?:\/\/[^"']+)/g),
  ...corpus.matchAll(/<link[^>]+href=["'](https?:\/\/[^"']+)/g),
].map((m) => m[1])
check('no remote assets in markup', remote.length === 0, remote.join(' '))
check('no Google Fonts', !/fonts\.(googleapis|gstatic)\.com/.test(corpus))

/* ══ 3 · scroll state ══════════════════════════════════════════ */

console.log('\n── scroll state ' + '─'.repeat(50))

const VH = 720
const SECS = [
  ['home', 0, 720], ['about', 720, 1300], ['consulting', 2020, 1100],
  ['projects', 3120, 2600], ['values', 5720, 1100], ['credentials', 6820, 1080],
  ['contact', 7900, 700],
]
const DOC = 8600

globalThis.window = { innerHeight: VH, scrollY: 0 }
globalThis.document = { body: { scrollHeight: DOC } }

const { store, registerSection, readScroll } = await import('../src/store.js')
SECS.forEach(([, top, h], i) => registerSection(i, { offsetTop: top, offsetHeight: h }))

const at = (y) => { window.scrollY = y; readScroll(); return { ...store } }

SECS.forEach(([id, top, h], i) => {
  check(`${id} active at its centre`, at(top + h / 2 - VH / 2).active === i)
})
check('progress 0 at top', at(0).progress === 0)
check('progress 1 at bottom', Math.abs(at(DOC - VH).progress - 1) < 1e-9)

console.log(
  '\n' + '═'.repeat(65) + '\n' +
    (fails === 0 ? 'PASS — all checks green' : `FAIL — ${fails} assertion(s)`) + '\n'
)
process.exit(fails === 0 ? 0 : 1)
