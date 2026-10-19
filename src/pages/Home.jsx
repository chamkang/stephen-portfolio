import { Link } from 'react-router-dom'
import Page from '../components/Page'
import Reveal from '../components/Reveal'
import SplitCarousel from '../components/SplitCarousel'
import CardRail from '../components/CardRail'
import { IDENTITY, BIO, MISSION, CONSULTING, CASE_STUDY, CREDENTIALS } from '../data/content'

const FULL_NAME = `${IDENTITY.first} ${IDENTITY.last}`

const PORTRAITS = [
  { src: '/img/stephen-standing.jpg', alt: `${FULL_NAME} standing in a navy suit`, position: '50% 18%' },
  { src: '/img/stephen-portrait.jpg', alt: `Portrait of ${FULL_NAME}`, position: '50% 14%' },
  { src: '/img/stephen-seated.jpg', alt: `${FULL_NAME} seated, smiling`, position: '50% 22%' },
]

const TICKER = [
  'MSc Project Management',
  'IPMA (APM) Level D',
  'PMO Development',
  'SAFe ScrumXP',
  'Risk Management',
  'Jira · Kanban',
  'AI Product Ownership',
  'PRINCE2',
  'Stakeholder Management',
  'Data Governance',
]

export default function Home() {
  return (
    <Page
      title={IDENTITY.role}
      description={`${FULL_NAME} — project management consulting in cost and schedule management, risk management, ERP, IT compliance and governance, and digital transformation. Based in ${IDENTITY.locale}.`}
    >
      {/* ── hero ─────────────────────────────────────────────
          Phone: one picture, with the type and buttons laid over it.
          Desktop: a navy panel beside the picture. */}
      <section className="relative grid grid-cols-1 lg:grid-cols-[1.05fr_1fr] items-stretch min-h-[86svh] lg:min-h-0">
        {/* Not `.plate` here: that class sets position:relative and, being
            defined after Tailwind's utilities, would beat `absolute`. */}
        <div
          className="absolute inset-0 overflow-hidden lg:static lg:order-2 lg:min-h-[clamp(340px,60vh,620px)]"
          style={{ backgroundColor: 'var(--tint)' }}
        >
          <img
            src={PORTRAITS[0].src}
            alt={PORTRAITS[0].alt}
            fetchPriority="high"
            width="1200"
            height="1600"
            className="w-full h-full object-cover"
            style={{ objectPosition: PORTRAITS[0].position }}
          />
          {/* Legibility wash, only where the type sits on the photo. */}
          <div
            className="absolute inset-0 lg:hidden"
            aria-hidden="true"
            style={{
              background:
                'linear-gradient(to top, rgb(19 33 69 / 0.94) 0%, rgb(19 33 69 / 0.74) 46%, rgb(19 33 69 / 0.3) 100%)',
            }}
          />
        </div>

        <div
          className="relative z-10 on-navy lg:order-1 flex items-end lg:items-center px-[8vw] lg:px-[6vw] pt-[18vh] pb-[7vh] lg:py-[clamp(56px,9vh,104px)] lg:bg-[var(--navy)]"
        >
          {/* The panel is wide; only the lines inside it are measured. */}
          <div className="w-full max-w-[34rem]">
            <Reveal>
              <span className="eyebrow block mb-[22px]">{IDENTITY.role}</span>
            </Reveal>

            <h1 className="display text-[clamp(2.6rem,5.4vw,4.6rem)]">
              <Reveal mode="mask" className="block">{IDENTITY.first}</Reveal>
              <Reveal mode="mask" delay={110} className="block t-gold">{IDENTITY.last}</Reveal>
            </h1>

            <Reveal delay={200}>
              <p className="lede mt-[26px] max-w-[40ch]">{MISSION}</p>
            </Reveal>

            <Reveal delay={280} className="flex flex-wrap gap-[14px] mt-[34px]">
              <Link to="/case-study" className="btn btn-gold">Read the case study</Link>
              <Link
                to="/contact"
                className="btn"
                style={{ border: '1.5px solid rgb(255 255 255 / 0.35)', color: 'var(--white)' }}
              >
                Contact me
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── ticker ───────────────────────────────────────────── */}
      <div
        className="marquee py-[16px]"
        style={{ backgroundColor: 'var(--gold)' }}
        aria-hidden="true"
      >
        <div className="marquee-track">
          {[0, 1].map((pass) => (
            <div key={pass} className="flex shrink-0">
              {TICKER.map((t) => (
                <span
                  key={t}
                  className="eyebrow whitespace-nowrap px-[28px]"
                  style={{ color: 'var(--navy)' }}
                >
                  {t} <span style={{ opacity: 0.45 }}>✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ── split carousel: who he is ────────────────────────── */}
      <section className="bg-tint">
        <SplitCarousel slides={PORTRAITS}>
          <Reveal>
            <span className="eyebrow t-dim block mb-[18px]">About {IDENTITY.first}</span>
            <h2 className="display text-[clamp(1.8rem,3.4vw,2.9rem)]">
              Recovering projects <span className="display-it t-navy" style={{ color: 'var(--navy-2)' }}>intelligently</span>, not just faster
            </h2>
            <p className="copy mt-[22px]">{BIO[1]}</p>
            <p className="copy mt-[14px]">{BIO[4]}</p>
            <Link to="/about" className="btn btn-navy mt-[30px]">More about Stephen</Link>
          </Reveal>
        </SplitCarousel>
      </section>

      {/* ── consulting rail ──────────────────────────────────── */}
      <section className="px-[6vw] py-[clamp(56px,10vh,110px)]">
        <CardRail
          label={
            <div>
              <span className="eyebrow t-dim block mb-[12px]">Coaching &amp; Consulting</span>
              <h2 className="display text-[clamp(1.7rem,3.2vw,2.7rem)] max-w-[18ch]">
                Five areas I am engaged for
              </h2>
            </div>
          }
        >
          {CONSULTING.map((area, i) => (
            <Link
              key={area.title}
              to="/consulting"
              className="group w-[clamp(250px,74vw,330px)] p-[28px] flex flex-col justify-between min-h-[260px]"
              style={{ backgroundColor: i % 2 ? 'var(--navy)' : 'var(--tint)' }}
            >
              <span
                className="eyebrow"
                style={{ color: i % 2 ? 'var(--sky)' : 'var(--dim)' }}
              >
                {String(i + 1).padStart(2, '0')}
              </span>
              <span
                className="display-md text-[clamp(1.25rem,1.9vw,1.6rem)] mt-[40px]"
                style={{ color: i % 2 ? 'var(--white)' : 'var(--navy)' }}
              >
                {area.title}
              </span>
              <span
                className="eyebrow mt-[20px]"
                style={{ color: i % 2 ? 'var(--gold)' : 'var(--navy)' }}
              >
                Read more →
              </span>
            </Link>
          ))}
        </CardRail>
      </section>

      {/* ── case study ───────────────────────────────────────── */}
      <section className="on-navy px-[6vw] py-[clamp(56px,10vh,110px)]" style={{ backgroundColor: 'var(--navy)' }}>
        <div className="grid grid-cols-12 gap-x-[clamp(20px,3vw,56px)] gap-y-[4vh] items-end">
          <div className="col-span-12 lg:col-span-8">
            <Reveal>
              <span className="eyebrow block mb-[18px]">{CASE_STUDY.kicker}</span>
            </Reveal>
            <Reveal mode="mask">
              <h2 className="display text-[clamp(1.8rem,4vw,3.2rem)]">{CASE_STUDY.title}</h2>
            </Reveal>
            <Reveal delay={140}>
              <p className="copy mt-[24px] max-w-[60ch]">{CASE_STUDY.summary}</p>
            </Reveal>
          </div>
          <div className="col-span-12 lg:col-span-4 lg:text-right">
            <Reveal delay={200}>
              <Link to="/case-study" className="btn btn-gold">Read the case study</Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── credentials strip ────────────────────────────────── */}
      <section className="px-[6vw] py-[clamp(48px,8vh,90px)]">
        <Reveal>
          <span className="eyebrow t-dim block mb-[28px]">Credentials</span>
        </Reveal>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-[clamp(18px,2.4vw,36px)]">
          {CREDENTIALS.map((c, i) => (
            <Reveal
              key={c.abbr}
              delay={i * 70}
              className="pt-[20px]"
              style={{ borderTop: '3px solid var(--gold)' }}
            >
              <span className="display text-[clamp(1.3rem,2.4vw,2rem)] block">{c.abbr}</span>
              <span className="meta block mt-[10px]">{c.title}</span>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── closing call to action ───────────────────────────── */}
      <section className="px-[6vw] pb-[clamp(56px,10vh,110px)]">
        <Reveal className="bg-tint p-[clamp(28px,5vw,72px)] text-center">
          <h2 className="display text-[clamp(1.7rem,3.6vw,2.9rem)] max-w-[22ch] mx-auto">
            {CASE_STUDY.cta.heading}
          </h2>
          <p className="copy mt-[20px] max-w-[56ch] mx-auto">{CASE_STUDY.cta.body}</p>
          <Link to="/contact" className="btn btn-navy mt-[32px]">Contact me</Link>
        </Reveal>
      </section>
    </Page>
  )
}
