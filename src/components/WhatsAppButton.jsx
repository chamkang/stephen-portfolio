import { WHATSAPP_HREF } from '../data/content'

/**
 * Floating WhatsApp chat button, bottom-right on every screen.
 *
 * It is a plain link to wa.me: nothing is loaded from WhatsApp until a
 * visitor clicks it, so it adds no third-party request to the page. The
 * glyph is inline SVG for the same reason. Brand green is kept because it
 * is what makes the button recognisable at a glance.
 */
export default function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_HREF}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      title="Chat on WhatsApp"
      className="whatsapp-button"
    >
      <svg viewBox="0 0 32 32" width="30" height="30" aria-hidden="true" focusable="false">
        <path
          fill="currentColor"
          d="M16.004 3C8.832 3 3 8.83 3 16c0 2.29.6 4.53 1.74 6.5L3 29l6.66-1.7A12.95 12.95 0 0 0 16.004 29C23.17 29 29 23.17 29 16S23.17 3 16.004 3Zm0 23.63c-1.98 0-3.92-.53-5.61-1.54l-.4-.24-3.95 1.01 1.05-3.85-.26-.4A10.6 10.6 0 0 1 5.37 16c0-5.86 4.77-10.63 10.64-10.63 5.86 0 10.62 4.77 10.62 10.63 0 5.87-4.76 10.63-10.62 10.63Zm5.83-7.96c-.32-.16-1.89-.93-2.18-1.04-.29-.1-.5-.16-.72.16-.21.32-.82 1.04-1.01 1.25-.18.21-.37.24-.69.08-.32-.16-1.35-.5-2.57-1.59-.95-.85-1.59-1.9-1.78-2.22-.18-.32-.02-.49.14-.65.14-.14.32-.37.48-.56.16-.18.21-.32.32-.53.1-.21.05-.4-.03-.56-.08-.16-.72-1.73-.98-2.37-.26-.62-.52-.54-.72-.55h-.61c-.21 0-.56.08-.85.4-.29.32-1.12 1.09-1.12 2.66 0 1.57 1.14 3.09 1.3 3.3.16.21 2.25 3.44 5.45 4.82.76.33 1.36.53 1.82.67.77.24 1.46.21 2.01.13.61-.09 1.89-.77 2.16-1.52.27-.74.27-1.38.19-1.52-.08-.13-.29-.21-.61-.37Z"
        />
      </svg>
    </a>
  )
}
