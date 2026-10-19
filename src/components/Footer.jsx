import { Link } from 'react-router-dom'
import { IDENTITY, NAV, PHONE_HREF, WHATSAPP_HREF } from '../data/content'

const YEAR = new Date().getFullYear()
const FULL_NAME = `${IDENTITY.first} ${IDENTITY.last}`

export default function Footer() {
  return (
    <footer className="px-[6vw] pt-[10vh] pb-[6vh]">
      <div className="rule-h mb-[26px]" />

      <div className="grid grid-cols-12 gap-x-[clamp(20px,3vw,56px)] gap-y-[5vh]">
        <div className="col-span-12 sm:col-span-5">
          <Link to="/" className="display-md t-ink text-[clamp(1.2rem,1.8vw,1.6rem)]">
            {FULL_NAME}
          </Link>
          <p className="meta mt-[8px]">{IDENTITY.role}</p>
          <p className="meta">Based in {IDENTITY.locale}</p>
        </div>

        <nav aria-label="Footer" className="col-span-6 sm:col-span-3">
          <span className="eyebrow t-dim block mb-[12px]">Pages</span>
          {NAV.map((item) => (
            <Link key={item.to} to={item.to} className="meta block t-ink">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="col-span-6 sm:col-span-4">
          <span className="eyebrow t-dim block mb-[12px]">Contact</span>
          <a href={`mailto:${IDENTITY.email}`} className="meta block t-ink break-all">
            {IDENTITY.email}
          </a>
          <a href={PHONE_HREF} className="meta block t-ink">
            {IDENTITY.phone}
          </a>
          <a
            href={WHATSAPP_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="meta block t-ink"
          >
            WhatsApp
          </a>
        </div>

        <div className="col-span-12">
          <span className="meta">© {YEAR} {FULL_NAME}</span>
        </div>
      </div>
    </footer>
  )
}
