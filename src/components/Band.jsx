import Reveal from './Reveal'

/**
 * A photographic section header: the image carries the section's heading,
 * set over a navy scrim so the type stays legible on any part of the photo.
 *
 * It sits inside the content column rather than bleeding to the window
 * edges, and its height is capped, so on a wide screen it reads as a
 * composed panel instead of a large empty picture.
 *
 * `flip` mirrors the photo so its subject clears the heading, which always
 * sits bottom-left.
 */
export default function Band({
  src,
  alt,
  eyebrow,
  title,
  text,
  tone = 'toned',
  position = '50% 50%',
  flip = false,
  as: Heading = 'h2',
}) {
  return (
    <Reveal mode="mask" className="my-[clamp(40px,7vh,88px)]">
      <figure
        className={`plate band m-0 ${tone === 'mono' ? 'plate-mono' : 'plate-toned'}`}
      >
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          style={{ objectPosition: position, transform: flip ? 'scaleX(-1)' : undefined }}
        />

        <div className="band-scrim" aria-hidden="true" />

        <figcaption className="band-copy">
          {eyebrow && <span className="eyebrow band-eyebrow">{eyebrow}</span>}
          <Heading className="display band-title">{title}</Heading>
          {text && <p className="band-text">{text}</p>}
        </figcaption>
      </figure>
    </Reveal>
  )
}
