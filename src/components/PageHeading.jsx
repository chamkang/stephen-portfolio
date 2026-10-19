import Reveal from './Reveal'

/** The standard opening of every inner page: label, title, optional lede. */
export default function PageHeading({ label, title, lede }) {
  return (
    <div className="px-[6vw] pt-[9vh] pb-[5vh]">
      <Reveal className="flex items-center gap-[14px] mb-[4vh]">
        <span className="block h-px w-[42px]" style={{ backgroundColor: 'var(--gold)' }} />
        <span className="eyebrow t-dim">{label}</span>
      </Reveal>

      <Reveal mode="mask">
        <h1 className="display t-ink text-[clamp(2.2rem,6vw,4.8rem)] max-w-[18ch]">{title}</h1>
      </Reveal>

      {lede && (
        <Reveal delay={140}>
          <p className="lede mt-[4vh] max-w-[58ch]">{lede}</p>
        </Reveal>
      )}
    </div>
  )
}
