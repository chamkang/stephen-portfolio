import { Link } from 'react-router-dom'
import Page from '../components/Page'
import Reveal from '../components/Reveal'
import Band from '../components/Band'
import { CONSULTING, BANDS, CASE_STUDY } from '../data/content'

export default function Consulting() {
  return (
    <Page
      title="Coaching & Consulting"
      description="Cost and schedule management, risk management, ERP project management, IT compliance and governance, and digital transformation."
    >
      <section className="px-[6vw] pt-[6vh] pb-[10vh]">
        <Band {...BANDS.consulting} as="h1" />

        <div className="grid grid-cols-12 gap-x-[clamp(20px,3vw,56px)]">
          {CONSULTING.map((area, i) => (
            <Reveal
              key={area.title}
              delay={i * 80}
              className="col-span-12 grid grid-cols-12 gap-x-[clamp(18px,2.6vw,48px)] gap-y-[12px] border-t py-[clamp(26px,4.4vh,50px)]"
              style={{ borderColor: 'var(--rule)' }}
            >
              <span className="col-span-12 sm:col-span-1 display-it t-ochre text-[clamp(1.05rem,1.4vw,1.3rem)] pt-[4px]">
                {String(i + 1).padStart(2, '0')}
              </span>

              <h2 className="col-span-12 sm:col-span-5 display-md t-ink text-[clamp(1.5rem,2.8vw,2.4rem)]">
                {area.title}
              </h2>

              <div className="col-span-12 sm:col-span-6 empty:hidden">
                {area.related && (
                  <>
                    <span className="eyebrow t-dim block mb-[8px]">Related experience</span>
                    <p className="copy max-w-[48ch]">{area.related}</p>
                  </>
                )}

                {area.body && <p className="copy max-w-[50ch]">{area.body}</p>}

                {area.lead && <p className="copy t-ink">{area.lead}</p>}
                {area.points && (
                  <ul className="m-0 mt-[6px] p-0 list-none">
                    {area.points.map((point) => (
                      <li key={point} className="copy flex gap-[12px] py-[6px] max-w-[50ch]">
                        <span className="t-ochre" aria-hidden="true">—</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {area.quote && (
                  <blockquote
                    className="display-it t-ink text-[clamp(1.1rem,1.5vw,1.35rem)] mt-[22px] mb-0 mx-0 pl-[18px] border-l-2 max-w-[40ch]"
                    style={{ borderColor: 'var(--ochre)' }}
                  >
                    “{area.quote}”
                  </blockquote>
                )}
              </div>
            </Reveal>
          ))}
          <div className="col-span-12 rule-h" />
        </div>

        <Reveal className="mt-[8vh]">
          <span className="eyebrow t-dim block mb-[14px]">{CASE_STUDY.kicker}</span>
          <Link
            to="/case-study"
            className="draw-rule inline-block display-md t-ink text-[clamp(1.3rem,2.4vw,2rem)] max-w-[24ch]"
          >
            {CASE_STUDY.title} →
          </Link>
        </Reveal>
      </section>
    </Page>
  )
}
