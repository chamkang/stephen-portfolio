import { Link } from 'react-router-dom'
import Page from '../components/Page'
import Reveal from '../components/Reveal'
import { IDENTITY, BIO, CONSULTING, CASE_STUDY } from '../data/content'

const FULL_NAME = `${IDENTITY.first} ${IDENTITY.last}`

const STAMPS = [
  ['MSc', 'Project Management, the Robert Gordon University'],
  ['BSc', 'Management'],
  ['IPMA Level D', 'IPMA (APM) Level D Certification'],
]

export default function Home() {
  return (
    <Page
      title={IDENTITY.role}
      description={`${FULL_NAME} — project management consulting in cost and schedule management, risk management, ERP, IT compliance and governance, and digital transformation. Based in ${IDENTITY.locale}.`}
    >
      {/* ── masthead ─────────────────────────────────────────── */}
      <section className="px-[6vw] pt-[8vh] pb-[10vh]">
        <div className="grid grid-cols-12 gap-x-[clamp(20px,3vw,56px)] gap-y-[6vh] items-center">
          <div className="col-span-12 lg:col-span-7 lg:pr-[2vw]">
            <Reveal className="flex items-center gap-[14px] mb-[3vh]">
              <span className="block h-px w-[42px]" style={{ backgroundColor: 'var(--ochre)' }} />
              <span className="eyebrow t-dim">{IDENTITY.role}</span>
            </Reveal>

            <h1 className="display t-ink text-[clamp(3.4rem,10.5vw,9rem)]">
              <Reveal mode="mask" className="block">{IDENTITY.first}</Reveal>
              <Reveal mode="mask" delay={110} className="block">{IDENTITY.last}</Reveal>
            </h1>

            <Reveal delay={220} className="mt-[4vh] max-w-[46ch]">
              <p className="lede t-ink">{BIO[0]}</p>
            </Reveal>

            <Reveal
              delay={320}
              className="mt-[4vh] grid grid-cols-1 sm:grid-cols-3 gap-x-[clamp(16px,2vw,36px)] gap-y-[18px]"
            >
              {STAMPS.map(([abbr, body]) => (
                <span key={abbr} className="block">
                  <span className="display-md t-ochre block text-[17px] leading-none mb-[6px]">
                    {abbr}
                  </span>
                  <span className="meta block">{body}</span>
                </span>
              ))}
            </Reveal>
          </div>

          <Reveal
            mode="mask"
            delay={160}
            className="col-span-12 sm:col-span-9 sm:col-start-3 lg:col-span-5 lg:col-start-8"
          >
            <div className="plate plate-rule" style={{ aspectRatio: '3 / 4' }}>
              <img
                src="/img/stephen-standing.jpg"
                alt={`${FULL_NAME} in a navy suit, standing in front of a mural of gold branches`}
                width="1200"
                height="1600"
                fetchPriority="high"
                style={{ objectPosition: '50% 18%' }}
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── what he does ─────────────────────────────────────── */}
      <section
        className="px-[6vw] py-[10vh]"
        style={{ backgroundColor: 'rgb(234 226 212 / 0.72)' }}
      >
        <Reveal className="flex items-center gap-[14px] mb-[5vh]">
          <span className="block h-px w-[42px]" style={{ backgroundColor: 'var(--ochre)' }} />
          <span className="eyebrow t-dim">Coaching &amp; Consulting</span>
        </Reveal>

        <ul className="m-0 p-0 list-none">
          {CONSULTING.map((area, i) => (
            <Reveal
              as="li"
              key={area.title}
              delay={i * 60}
              className="border-t"
              style={{ borderColor: 'var(--rule)' }}
            >
              <Link
                to="/consulting"
                className="group flex items-baseline gap-x-[clamp(14px,2vw,36px)] py-[clamp(14px,2.2vh,26px)]"
              >
                <span className="display-it t-ochre text-[clamp(1rem,1.3vw,1.25rem)] min-w-[2ch]">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="display-md t-ink text-[clamp(1.4rem,3.4vw,2.6rem)] flex-1">
                  {area.title}
                </span>
                <span className="meta t-ochre">→</span>
              </Link>
            </Reveal>
          ))}
          <li className="rule-h" />
        </ul>
      </section>

      {/* ── case study teaser ────────────────────────────────── */}
      <section className="px-[6vw] py-[12vh]">
        <div className="grid grid-cols-12 gap-x-[clamp(20px,3vw,56px)] gap-y-[4vh]">
          <Reveal className="col-span-12 flex items-center gap-[14px]">
            <span className="block h-px w-[42px]" style={{ backgroundColor: 'var(--ochre)' }} />
            <span className="eyebrow t-dim">{CASE_STUDY.kicker}</span>
          </Reveal>

          <div className="col-span-12 lg:col-span-8">
            <Reveal mode="mask">
              <h2 className="display t-ink text-[clamp(1.9rem,4.6vw,3.6rem)]">
                {CASE_STUDY.title}
              </h2>
            </Reveal>
            <Reveal delay={140}>
              <p className="copy mt-[3vh] max-w-[58ch]">{CASE_STUDY.summary}</p>
              <Link to="/case-study" className="draw-rule inline-block display-it t-ink text-[clamp(1.1rem,1.6vw,1.5rem)] mt-[3vh]">
                Read the case study →
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── closing call to action ───────────────────────────── */}
      <section className="px-[6vw] pb-[12vh]">
        <Reveal
          className="p-[clamp(26px,5vw,64px)]"
          style={{ backgroundColor: 'var(--ink)' }}
        >
          <h2
            className="display text-[clamp(1.8rem,4.2vw,3.2rem)] max-w-[20ch]"
            style={{ color: 'var(--paper-warm)' }}
          >
            {CASE_STUDY.cta.heading}
          </h2>
          <p
            className="copy mt-[22px] max-w-[54ch]"
            style={{ color: 'rgb(251 248 242 / 0.82)' }}
          >
            {CASE_STUDY.cta.body}
          </p>
          <Link
            to="/contact"
            className="eyebrow inline-block mt-[30px] px-[22px] py-[13px] rounded-full"
            style={{ backgroundColor: 'var(--ochre)', color: 'var(--paper-warm)' }}
          >
            Contact me
          </Link>
        </Reveal>
      </section>
    </Page>
  )
}
