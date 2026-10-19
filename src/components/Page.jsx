import { useEffect } from 'react'

const BASE_TITLE = 'Stephen Niba'

/**
 * Wraps every page: sets the browser title and meta description (so each
 * page can be shared and indexed on its own) and starts it at the top.
 */
export default function Page({ title, description, children }) {
  useEffect(() => {
    document.title = title ? `${title} — ${BASE_TITLE}` : BASE_TITLE

    if (description) {
      let tag = document.querySelector('meta[name="description"]')
      if (!tag) {
        tag = document.createElement('meta')
        tag.setAttribute('name', 'description')
        document.head.appendChild(tag)
      }
      tag.setAttribute('content', description)
    }

    window.scrollTo(0, 0)
  }, [title, description])

  return <main className="relative">{children}</main>
}
