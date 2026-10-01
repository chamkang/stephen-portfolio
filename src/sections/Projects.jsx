import { Fragment } from 'react'
import Section from '../components/Section'
import Reveal from '../components/Reveal'
import Band from '../components/Band'
import { PROJECTS, BANDS } from '../data/content'

function Entry({ item }) {
  return (
    <Reveal
      className="grid grid-cols-12 gap-x-[clamp(18px,2.6vw,48px)] gap-y-[12px] border-t py-[clamp(22px,3.4vh,38px)]"
      style={{ borderColor: 'var(--rule)' }}
    >
      <div className="col-span-12 md:col-span-5">
        <h4 className="display-md t-ink text-[clamp(1.2rem,2vw,1.7rem)]">{item.role}</h4>
        {item.org && <p className="meta t-ochre mt-[8px]">{item.org}</p>}
        {item.place && <p className="meta mt-[2px]">{item.place}</p>}
      </div>

      <div className="col-span-12 md:col-span-6 md:col-start-7 empty:hidden">
        {item.tag && <span className="eyebrow t-dim block mb-[8px]">{item.tag}</span>}
        {item.note && <p className="copy max-w-[54ch]">{item.note}</p>}
      </div>
    </Reveal>
  )
}

export default function Projects() {
  return (
    <Section index={3} id="projects" className="px-[6vw] py-[12vh]">
      {/* A deeper tint behind the whole section gives the page rhythm.
          It bleeds past the section box so it reaches both window edges;
          html clips the overflow. */}
      <div
        aria-hidden="true"
        className="absolute inset-y-0 -z-10"
        style={{ left: '-15vw', right: '-15vw', backgroundColor: 'rgb(234 226 212 / 0.72)' }}
      />

      <Band {...BANDS.projects} />

      {PROJECTS.map((group, gi) => (
        <Fragment key={group.group}>
          {/* The logistics band sits between the two groups, directly after
              the construction-logistics entry it refers to. */}
          {gi === 1 && <Band {...BANDS.logistics} as="h3" />}

          <div className="mb-[4vh]">
            <Reveal className="mb-[16px] mt-[4vh]">
              <h3 className="eyebrow t-ochre">{group.group}</h3>
            </Reveal>
            {group.items.map((item) => (
              <Entry key={item.role + (item.org ?? '')} item={item} />
            ))}
            <div className="rule-h" />
          </div>
        </Fragment>
      ))}
    </Section>
  )
}
