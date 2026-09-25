import Section from '../components/Section'
import Reveal from '../components/Reveal'
import { VALUES } from '../data/content'

/* The brief gives the five values as single words, so they are set as
   single words — large, and without invented explanations. */
export default function Values() {
  return (
    <Section index={4} id="values" className="px-[6vw] py-[16vh]">
      <Reveal className="flex items-center gap-[14px] mb-[6vh]">
        <span className="block h-px w-[42px]" style={{ backgroundColor: 'var(--ochre)' }} />
        <span className="eyebrow t-dim">Core Values</span>
      </Reveal>

      <ul className="m-0 p-0 list-none">
        {VALUES.map((word, i) => (
          <Reveal
            as="li"
            key={word}
            delay={i * 70}
            className="group flex items-baseline gap-x-[clamp(16px,2.4vw,44px)] border-t py-[clamp(14px,2.2vh,26px)]"
            style={{ borderColor: 'var(--rule)' }}
          >
            <span className="display-it t-ochre text-[clamp(1rem,1.3vw,1.25rem)] min-w-[2ch]">
              {String(i + 1).padStart(2, '0')}
            </span>
            <span className="display t-ink text-[clamp(2.1rem,6.4vw,5.4rem)] transition-colors duration-500 group-hover:text-[var(--ochre)]">
              {word}
            </span>
          </Reveal>
        ))}
      </ul>
      <div className="rule-h" />
    </Section>
  )
}
