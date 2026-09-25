import { Fragment } from 'react'
import Section from '../components/Section'
import Reveal from '../components/Reveal'
import {
  IDENTITY,
  BIO,
  VISION,
  MISSION,
  MISSION_HIGHLIGHTS,
  MISSION_POINTS,
} from '../data/content'

const FULL_NAME = [IDENTITY.first, IDENTITY.last].filter(Boolean).join(' ')

/** Renders the mission verbatim, italicising the highlighted words in place. */
function Mission() {
  const pattern = new RegExp(`(${MISSION_HIGHLIGHTS.join('|')})`)
  return MISSION.split(pattern).map((part, i) =>
    MISSION_HIGHLIGHTS.includes(part) ? (
      <em key={i} className="display-it t-ochre">{part}</em>
    ) : (
      <Fragment key={i}>{part}</Fragment>
    )
  )
}

export default function About() {
  return (
    <Section index={1} id="about" className="px-[6vw] py-[16vh]">
      <Reveal className="flex items-center gap-[14px] mb-[6vh]">
        <span className="block h-px w-[42px]" style={{ backgroundColor: 'var(--ochre)' }} />
        <span className="eyebrow t-dim">About</span>
      </Reveal>

      <div className="grid grid-cols-12 gap-x-[clamp(20px,3vw,56px)] gap-y-[8vh] items-start">
        <div className="col-span-12 lg:col-span-7">
          <Reveal>
            <p className="lede t-ink max-w-[46ch]">{BIO}</p>
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
                <span className="display-it t-ochre text-[clamp(1.05rem,1.4vw,1.35rem)] pt-[2px] min-w-[1.6em]">
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
          className="col-span-12 sm:col-span-8 sm:col-start-3 lg:col-span-4 lg:col-start-9 lg:sticky lg:top-[14vh]"
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
    </Section>
  )
}
