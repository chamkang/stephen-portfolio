import Section from '../components/Section'
import Reveal from '../components/Reveal'
import { IDENTITY, PHONE_HREF, WHATSAPP_HREF } from '../data/content'

const YEAR = new Date().getFullYear()
const FULL_NAME = [IDENTITY.first, IDENTITY.last].filter(Boolean).join(' ')

export default function Contact() {
  return (
    <Section
      index={6}
      id="contact"
      className="min-h-[90svh] px-[6vw] pt-[16vh] pb-[13vh] flex flex-col justify-between"
    >
      <div>
        <Reveal className="flex items-center gap-[14px] mb-[6vh]">
          <span className="block h-px w-[42px]" style={{ backgroundColor: 'var(--ochre)' }} />
          <span className="eyebrow t-dim">Contact</span>
        </Reveal>

        <Reveal mode="mask">
          <h2 className="display t-ink text-[clamp(2.2rem,6vw,5.2rem)] max-w-[16ch]">
            Let’s talk about your <em className="display-it t-ochre">project</em>.
          </h2>
        </Reveal>

        <Reveal
          delay={150}
          className="mt-[6vh] grid grid-cols-1 md:grid-cols-2 gap-x-[clamp(24px,4vw,72px)] gap-y-[5vh]"
        >
          <div>
            <span className="eyebrow t-dim block mb-[16px]">Email</span>
            <a
              href={`mailto:${IDENTITY.email}`}
              className="draw-rule inline-block display-it t-ink text-[clamp(1.4rem,2.8vw,2.5rem)] break-all"
            >
              {IDENTITY.email}
            </a>
          </div>

          <div>
            <span className="eyebrow t-dim block mb-[16px]">Phone &amp; WhatsApp</span>
            <a
              href={PHONE_HREF}
              className="draw-rule inline-block display-it t-ink text-[clamp(1.4rem,2.8vw,2.5rem)] whitespace-nowrap"
            >
              {IDENTITY.phone}
            </a>
            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="meta draw-rule block w-fit mt-[10px] t-ink"
            >
              Message on WhatsApp →
            </a>
          </div>
        </Reveal>
      </div>

      <footer className="grid grid-cols-12 gap-x-[clamp(20px,3vw,56px)] gap-y-[4vh] mt-[12vh]">
        <div className="col-span-12 rule-h mb-[22px]" />

        <div className="col-span-6 sm:col-span-3">
          <span className="eyebrow t-dim block mb-[12px]">Based in</span>
          <span className="meta block">{IDENTITY.locale}</span>
        </div>

        <div className="col-span-6 sm:col-span-3 sm:col-start-10 sm:text-right">
          <span className="meta block">
            © {YEAR} {FULL_NAME}
          </span>
        </div>
      </footer>
    </Section>
  )
}
