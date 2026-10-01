import Section from '../components/Section'
import Reveal from '../components/Reveal'
// The vision statement lives once, in the About section above the mission.
import { IDENTITY } from '../data/content'

const FULL_NAME = [IDENTITY.first, IDENTITY.last].filter(Boolean).join(' ')

const STAMPS = [
  ['MSc', 'Project Management, the Robert Gordon University'],
  ['BSc', 'Management'],
  ['IPMA Level D', 'IPMA (APM) Level D Certification'],
]

export default function Masthead() {
  return (
    <Section
      index={0}
      id="home"
      className="min-h-[100svh] px-[6vw] pt-[16vh] pb-[13vh] flex flex-col justify-center"
    >
      <div className="grid grid-cols-12 gap-x-[clamp(20px,3vw,56px)] gap-y-[6vh] items-center">
        <div className="col-span-12 lg:col-span-7 lg:pr-[2vw]">
          <Reveal className="flex items-center gap-[14px] mb-[3vh]">
            <span className="block h-px w-[42px]" style={{ backgroundColor: 'var(--ochre)' }} />
            <span className="eyebrow t-dim">{IDENTITY.role}</span>
          </Reveal>

          <h1 className="display t-ink text-[clamp(3.6rem,11.5vw,10rem)]">
            <Reveal mode="mask" className="block">
              {IDENTITY.first}
            </Reveal>
            {IDENTITY.last && (
              <Reveal mode="mask" delay={110} className="block">
                {IDENTITY.last}
              </Reveal>
            )}
          </h1>

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
    </Section>
  )
}
