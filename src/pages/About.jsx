import { Fragment } from 'react'
import Page from '../components/Page'
import PageHeading from '../components/PageHeading'
import Reveal from '../components/Reveal'
import {
  IDENTITY,
  BIO,
  VISION,
  MISSION,
  MISSION_HIGHLIGHTS,
  MISSION_NOTE,
  MISSION_POINTS,
  VALUES,
  CREDENTIALS,
} from '../data/content'

const FULL_NAME = `${IDENTITY.first} ${IDENTITY.last}`

/** Renders the mission verbatim, italicising the highlighted words in place. */
function Mission() {
  const pattern = new RegExp(`(${MISSION_HIGHLIGHTS.join('|')})`)
  return MISSION.split(pattern).map((part, i) =>
    MISSION_HIGHLIGHTS.includes(part) ? (
      <em key={i} className="display-it t-accent">{part}</em>
    ) : (
      <Fragment key={i}>{part}</Fragment>
    )
  )
}

export default function About() {
  return (
    <Page
      title="About"
      description={`${FULL_NAME}: project governance, PMO development, stakeholder and risk management, and AI product ownership. MSc Project Management, IPMA (APM) Level D.`}
    >
      <PageHeading label="About" title={`About ${IDENTITY.first}`} lede={BIO[0]} />

      <section className="px-[6vw] pb-[10vh]">
        <div className="grid grid-cols-12 gap-x-[clamp(20px,3vw,56px)] gap-y-[8vh] items-start">
          <div className="col-span-12 lg:col-span-7">
            <Reveal>
              {BIO.slice(1).map((para) => (
                <p key={para} className="copy max-w-[58ch] mb-[18px]">{para}</p>
              ))}
            </Reveal>

            <Reveal className="mt-[8vh]">
              <span className="eyebrow t-dim block mb-[18px]">Vision</span>
              <p className="display-md t-ink text-[clamp(1.55rem,3vw,2.6rem)] max-w-[22ch]">
                {VISION}
              </p>
            </Reveal>

            <Reveal className="mt-[6vh]">
              <span className="eyebrow t-dim block mb-[18px]">Mission</span>
              <p className="display-md t-ink text-[clamp(1.55rem,3vw,2.6rem)]">
                <Mission />
              </p>
              <p
                className="display-it t-ink text-[clamp(1.1rem,1.6vw,1.45rem)] mt-[26px] pl-[18px] border-l-2"
                style={{ borderColor: 'var(--gold)' }}
              >
                “{MISSION_NOTE}”
              </p>
            </Reveal>

            <div className="mt-[5vh]">
              <div className="rule-h" />
              {MISSION_POINTS.map((point, i) => (
                <Reveal
                  key={point}
                  delay={i * 100}
                  className="grid grid-cols-[auto_1fr] gap-x-[clamp(18px,2.4vw,40px)] py-[clamp(18px,2.8vh,30px)] border-b"
                  style={{ borderColor: 'var(--rule)' }}
                >
                  <span className="display-it t-accent text-[clamp(1.05rem,1.4vw,1.35rem)] pt-[2px] min-w-[1.6em]">
                    {['i', 'ii', 'iii'][i]}
                  </span>
                  <p className="copy max-w-[52ch]">{point}</p>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal
            mode="mask"
            delay={120}
            className="col-span-12 sm:col-span-8 sm:col-start-3 lg:col-span-4 lg:col-start-9 lg:sticky lg:top-[16vh]"
          >
            <div className="plate" style={{ aspectRatio: '4 / 5' }}>
              <img
                src="/img/stephen-seated.jpg"
                alt={`${FULL_NAME} seated, smiling, in a navy suit`}
                width="1200"
                height="1600"
                loading="lazy"
                style={{ objectPosition: '50% 22%' }}
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── values ───────────────────────────────────────────── */}
      <section
        className="px-[6vw] py-[10vh]"
        style={{ backgroundColor: 'var(--tint)' }}
      >
        <Reveal className="flex items-center gap-[14px] mb-[5vh]">
          <span className="block h-px w-[42px]" style={{ backgroundColor: 'var(--gold)' }} />
          <span className="eyebrow t-dim">Core Values</span>
        </Reveal>

        <ul className="m-0 p-0 list-none">
          {VALUES.map((word, i) => (
            <Reveal
              as="li"
              key={word}
              delay={i * 50}
              className="group flex items-baseline gap-x-[clamp(16px,2.4vw,44px)] border-t py-[clamp(12px,1.9vh,22px)]"
              style={{ borderColor: 'var(--rule)' }}
            >
              <span className="display-it t-accent text-[clamp(1rem,1.3vw,1.25rem)] min-w-[2ch]">
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="display t-ink text-[clamp(1.9rem,5.4vw,4.4rem)] transition-colors duration-500 group-hover:text-[var(--gold)]">
                {word}
              </span>
            </Reveal>
          ))}
        </ul>
        <div className="rule-h" />
      </section>

      {/* ── credentials ──────────────────────────────────────── */}
      <section className="px-[6vw] py-[12vh]">
        <Reveal className="flex items-center gap-[14px] mb-[5vh]">
          <span className="block h-px w-[42px]" style={{ backgroundColor: 'var(--gold)' }} />
          <span className="eyebrow t-dim">Credentials</span>
        </Reveal>

        <div className="grid grid-cols-12 gap-x-[clamp(20px,3vw,56px)] gap-y-[7vh] items-start">
          <Reveal mode="mask" className="col-span-12 sm:col-span-6 lg:col-span-4">
            <div className="plate" style={{ aspectRatio: '1 / 1' }}>
              <img
                src="/img/stephen-portrait.jpg"
                alt={`Portrait of ${FULL_NAME}`}
                width="1200"
                height="1600"
                loading="lazy"
                style={{ objectPosition: '50% 12%' }}
              />
            </div>
          </Reveal>

          <div className="col-span-12 lg:col-span-7 lg:col-start-6">
            <Reveal mode="mask" className="mb-[5vh]">
              <h2 className="display t-ink text-[clamp(2rem,4.4vw,3.6rem)]">
                Certifications &amp; <em className="display-it t-accent">education</em>
              </h2>
            </Reveal>

            {CREDENTIALS.map((c, i) => (
              <Reveal
                key={c.abbr}
                delay={i * 90}
                className="grid grid-cols-12 gap-x-[clamp(14px,2vw,34px)] gap-y-[8px] border-t py-[clamp(20px,3vh,32px)]"
                style={{ borderColor: 'var(--rule)' }}
              >
                <span className="col-span-12 sm:col-span-2 display-it t-accent text-[clamp(1.05rem,1.4vw,1.3rem)]">
                  {c.abbr}
                </span>
                <div className="col-span-12 sm:col-span-10">
                  <h3 className="display-md t-ink text-[clamp(1.2rem,1.9vw,1.6rem)] mb-[8px]">
                    {c.title}
                  </h3>
                  {c.body && <p className="copy max-w-[52ch]">{c.body}</p>}
                </div>
              </Reveal>
            ))}
            <div className="rule-h" />
          </div>
        </div>
      </section>
    </Page>
  )
}
