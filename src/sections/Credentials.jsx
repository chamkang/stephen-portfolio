import Section from '../components/Section'
import Reveal from '../components/Reveal'
import { CREDENTIALS, IDENTITY } from '../data/content'

const FULL_NAME = [IDENTITY.first, IDENTITY.last].filter(Boolean).join(' ')

export default function Credentials() {
  return (
    <Section index={5} id="credentials" className="px-[6vw] py-[16vh]">
      <Reveal className="flex items-center gap-[14px] mb-[6vh]">
        <span className="block h-px w-[42px]" style={{ backgroundColor: 'var(--ochre)' }} />
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
            <h2 className="display t-ink text-[clamp(2.2rem,5vw,4.2rem)]">
              Certifications &amp; <em className="display-it t-ochre">education</em>
            </h2>
          </Reveal>

          {CREDENTIALS.map((c, i) => (
            <Reveal
              key={c.abbr}
              delay={i * 90}
              className="grid grid-cols-12 gap-x-[clamp(14px,2vw,34px)] gap-y-[8px] border-t py-[clamp(20px,3vh,32px)]"
              style={{ borderColor: 'var(--rule)' }}
            >
              <span className="col-span-12 sm:col-span-2 display-it t-ochre text-[clamp(1.05rem,1.4vw,1.3rem)]">
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
    </Section>
  )
}
