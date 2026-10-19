import { Link } from 'react-router-dom'
import Page from '../components/Page'
import Reveal from '../components/Reveal'
import { CASE_STUDY as CS } from '../data/content'

/** A labelled block of prose — the repeating unit of the case study. */
function Block({ label, heading, children }) {
  return (
    <section className="px-[6vw] py-[7vh]">
      <div className="grid grid-cols-12 gap-x-[clamp(20px,3vw,56px)] gap-y-[3vh]">
        <Reveal className="col-span-12 md:col-span-3">
          <span className="eyebrow t-accent">{label}</span>
        </Reveal>
        <div className="col-span-12 md:col-span-8">
          {heading && (
            <Reveal mode="mask" className="mb-[3vh]">
              <h2 className="display-md t-ink text-[clamp(1.5rem,3vw,2.4rem)] max-w-[22ch]">
                {heading}
              </h2>
            </Reveal>
          )}
          {children}
        </div>
      </div>
    </section>
  )
}

export default function CaseStudy() {
  return (
    <Page title={CS.kicker} description={CS.summary}>
      {/* ── opening ──────────────────────────────────────────── */}
      <section className="px-[6vw] pt-[9vh] pb-[6vh]">
        <Reveal className="flex items-center gap-[14px] mb-[4vh]">
          <span className="block h-px w-[42px]" style={{ backgroundColor: 'var(--gold)' }} />
          <span className="eyebrow t-dim">{CS.kicker}</span>
        </Reveal>

        <Reveal mode="mask">
          <h1 className="display t-ink text-[clamp(2.2rem,6vw,4.8rem)] max-w-[20ch]">
            {CS.title}
          </h1>
        </Reveal>

        <Reveal delay={140}>
          <p className="display-it t-ink text-[clamp(1.3rem,2.4vw,2rem)] mt-[4vh] max-w-[34ch]">
            {CS.dek}
          </p>
        </Reveal>

        <Reveal delay={220} className="mt-[5vh] max-w-[62ch]">
          {CS.opening.map((para) => (
            <p key={para} className="copy mb-[16px]">{para}</p>
          ))}
        </Reveal>
      </section>

      {/* ── challenge ────────────────────────────────────────── */}
      <div style={{ backgroundColor: 'var(--tint)' }}>
        <Block label={CS.challenge.label} heading={CS.challenge.heading}>
          <Reveal>
            {CS.challenge.body.map((para) => (
              <p key={para} className="copy mb-[16px] max-w-[60ch]">{para}</p>
            ))}
          </Reveal>
        </Block>
      </div>

      {/* ── the four options ─────────────────────────────────── */}
      <Block label={CS.options.label} heading={CS.options.heading}>
        <Reveal>
          <p className="copy max-w-[60ch]">{CS.options.intro}</p>
        </Reveal>

        <div className="mt-[5vh]">
          {CS.options.items.map((opt) => (
            <Reveal
              key={opt.n}
              className="border-t py-[clamp(24px,3.6vh,40px)]"
              style={{ borderColor: opt.selected ? 'var(--gold)' : 'var(--rule)' }}
            >
              <div className="flex items-baseline gap-[14px] mb-[14px] flex-wrap">
                <span className="display-it t-accent text-[clamp(1.05rem,1.4vw,1.3rem)]">
                  {opt.n}
                </span>
                <h3 className="display-md t-ink text-[clamp(1.25rem,2.2vw,1.8rem)]">
                  {opt.title}
                </h3>
                {opt.selected && (
                  <span
                    className="eyebrow px-[12px] py-[6px] rounded-full"
                    style={{ backgroundColor: 'var(--gold)', color: 'var(--white)' }}
                  >
                    Selected
                  </span>
                )}
              </div>

              {opt.body?.map((para) => (
                <p key={para} className="copy mb-[12px] max-w-[60ch]">{para}</p>
              ))}

              {opt.points && (
                <ul className="m-0 my-[10px] p-0 list-none">
                  {opt.points.map((point) => (
                    <li key={point} className="copy flex gap-[12px] py-[4px]">
                      <span className="t-accent" aria-hidden="true">—</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              )}

              {opt.after?.map((para) => (
                <p key={para} className="copy mt-[12px] max-w-[60ch]">{para}</p>
              ))}
            </Reveal>
          ))}
          <div className="rule-h" />
        </div>
      </Block>

      {/* ── the approach, as a pair of questions ─────────────── */}
      <Block label={CS.approach.label}>
        <Reveal>
          <p className="meta mb-[10px]">As a project management consultant, I simply do not ask:</p>
          <p
            className="display-it text-[clamp(1.3rem,2.4vw,2rem)] max-w-[30ch] pl-[18px] border-l-2"
            style={{ borderColor: 'var(--rule)', color: 'var(--dim)' }}
          >
            “{CS.approach.question}”
          </p>

          <p className="meta mt-[4vh] mb-[10px]">I ask:</p>
          <p
            className="display-it t-ink text-[clamp(1.45rem,2.9vw,2.4rem)] max-w-[30ch] pl-[18px] border-l-2"
            style={{ borderColor: 'var(--gold)' }}
          >
            “{CS.approach.answer}”
          </p>
        </Reveal>
      </Block>

      {/* ── why clients engage ───────────────────────────────── */}
      <div style={{ backgroundColor: 'var(--tint)' }}>
        <Block label={CS.why.label}>
          <Reveal>
            {CS.why.body.map((para) => (
              <p key={para} className="copy mb-[16px] max-w-[60ch]">{para}</p>
            ))}
          </Reveal>
        </Block>
      </div>

      {/* ── call to action ───────────────────────────────────── */}
      <section className="px-[6vw] py-[12vh]">
        <Reveal className="on-navy p-[clamp(26px,5vw,64px)]" style={{ backgroundColor: 'var(--navy)' }}>
          <h2
            className="display text-[clamp(1.8rem,4.2vw,3.2rem)] max-w-[20ch]"
          >
            {CS.cta.heading}
          </h2>
          <p className="copy mt-[22px] max-w-[54ch]" >
            {CS.cta.body}
          </p>
          <Link
            to="/contact"
            className="btn btn-gold mt-[30px]"
          >
            Contact me about your project
          </Link>
        </Reveal>
      </section>
    </Page>
  )
}
