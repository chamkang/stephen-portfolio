import { Fragment } from 'react'
import Section from '../components/Section'
import Reveal from '../components/Reveal'
import Band from '../components/Band'
import { EXPERIENCE, BANDS } from '../data/content'

/**
 * One entry per role. The left column carries the identity of the role —
 * title, organisation, place, dates — and the right column carries what was
 * done there, either as a list of responsibilities or, for the entries that
 * came without dates, as a short note.
 */
function Entry({ item }) {
  return (
    <Reveal
      className="grid grid-cols-12 gap-x-[clamp(18px,2.6vw,48px)] gap-y-[14px] border-t py-[clamp(24px,3.6vh,42px)]"
      style={{ borderColor: 'var(--rule)' }}
    >
      <div className="col-span-12 md:col-span-5">
        <h4 className="display-md t-ink text-[clamp(1.2rem,2vw,1.7rem)]">{item.role}</h4>
        {item.org && <p className="meta t-ochre mt-[8px]">{item.org}</p>}
        {item.place && <p className="meta mt-[2px]">{item.place}</p>}
        {(item.dates || item.type) && (
          <p className="eyebrow t-dim mt-[12px]">
            {[item.dates, item.type].filter(Boolean).join(' · ')}
          </p>
        )}
      </div>

      <div className="col-span-12 md:col-span-6 md:col-start-7 empty:hidden">
        {item.tag && <span className="eyebrow t-dim block mb-[8px]">{item.tag}</span>}
        {item.note && <p className="copy max-w-[54ch]">{item.note}</p>}
        {item.points && (
          <ul className="m-0 p-0 list-none">
            {item.points.map((point) => (
              <li key={point} className="copy flex gap-[12px] py-[5px] max-w-[54ch]">
                <span className="t-ochre" aria-hidden="true">—</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </Reveal>
  )
}

export default function Experience() {
  return (
    <Section index={3} id="experience" className="px-[6vw] py-[12vh]">
      {/* A deeper tint behind the whole section gives the page rhythm.
          It bleeds past the section box so it reaches both window edges;
          html clips the overflow. */}
      <div
        aria-hidden="true"
        className="absolute inset-y-0 -z-10"
        style={{ left: '-15vw', right: '-15vw', backgroundColor: 'rgb(234 226 212 / 0.72)' }}
      />

      <Band {...BANDS.experience} />

      {EXPERIENCE.map((group, gi) => (
        <Fragment key={group.group}>
          {/* The logistics band introduces the construction project work. */}
          {group.group === 'Project Work' && <Band {...BANDS.logistics} as="h3" />}

          <div className="mb-[4vh]">
            <Reveal className="mb-[16px] mt-[4vh]">
              <h3 className="eyebrow t-ochre">{group.group}</h3>
            </Reveal>
            {group.items.map((item) => (
              <Entry key={item.role + (item.org ?? '') + (item.dates ?? '')} item={item} />
            ))}
            <div className="rule-h" />
          </div>
        </Fragment>
      ))}
    </Section>
  )
}
