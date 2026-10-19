import Page from '../components/Page'
import Reveal from '../components/Reveal'
import { IDENTITY, PHONE_HREF, WHATSAPP_HREF } from '../data/content'

export default function Contact() {
  return (
    <Page
      title="Contact"
      description={`Contact ${IDENTITY.first} ${IDENTITY.last} — ${IDENTITY.email}, ${IDENTITY.phone}. Based in ${IDENTITY.locale}.`}
    >
      <section className="px-[6vw] pt-[9vh] pb-[14vh] min-h-[62svh]">
        <Reveal className="flex items-center gap-[14px] mb-[5vh]">
          <span className="block h-px w-[42px]" style={{ backgroundColor: 'var(--gold)' }} />
          <span className="eyebrow t-dim">Contact</span>
        </Reveal>

        <Reveal mode="mask">
          <h1 className="display t-ink text-[clamp(2.2rem,6vw,5.2rem)] max-w-[16ch]">
            Let’s talk about your <em className="display-it t-accent">project</em>.
          </h1>
        </Reveal>

        <Reveal
          delay={150}
          className="mt-[7vh] grid grid-cols-1 md:grid-cols-2 gap-x-[clamp(24px,4vw,72px)] gap-y-[5vh]"
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

          <div>
            <span className="eyebrow t-dim block mb-[16px]">Based in</span>
            <p className="copy">{IDENTITY.locale}</p>
          </div>
        </Reveal>
      </section>
    </Page>
  )
}
