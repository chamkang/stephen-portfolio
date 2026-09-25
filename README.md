# Stephen Niba — Portfolio

A single-page portfolio site: React, Tailwind CSS, Vite.

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production files in dist/
npm run preview
npm run verify   # content, asset and scroll-state checks
```

---

## Content

Every word on the site is in **`src/data/content.js`** — nothing is
hard-coded in the components. All copy comes from the brief supplied by the
client. Nothing has been invented; where the brief is silent, the field is
left out rather than guessed.

**Edits made to the brief's wording** (spelling and grammar only — meaning
unchanged):

- "Afrigultural" → "Agricultural"
- "needs/ requirements" → "needs and requirements"
- "Enabling the client design" → "Enabling the client to design"
- "IGCSE O LEVEL, AND IGCSE A LEVEL" → "IGCSE, O Level and A Level". There is
  no qualification called "IGCSE A Level": IGCSE and A Level are separate
  Cambridge qualifications. **Please confirm this reading with the client.**
- IT Compliance & Governance / Digital Transformation (supplied later):
  "nned" → "need", "R& D" → "R&D", "present day" → "present-day",
  "vendors/service providers" and "structures/models" written out with
  "and".

**Removed on request:** the PMP certification, and with it the sentence about
the Project Management Institute. The site title was
"Project Management Professional", which is that certification's exact name,
so it now reads "Project Management Consultant" — one line in `IDENTITY.role`
if it should change back. `npm run verify` fails if PMP wording reappears.

**Deliberately left blank — please confirm with the client:**

- The institution for the two MBA assistant-instructor roles. The brief does
  not name it (it may be the University of Buea, but that is not stated).
- The location of JK Logistics and of the EPDA training role.
- A description for ERP Project Management. The brief lists the area but
  gives no related experience, so none is shown.
- **The bachelor's degree.** It was supplied as "Bachelor of Science( MSc.)
  in Project Management". MSc means Master of Science and is already listed
  separately, so it is shown as "Bachelor of Science (BSc) in Project
  Management". Confirm the degree and add the awarding institution.
- The quoted line "Developing individual and corporate capacity…" was
  supplied directly under IT Compliance & Governance and is shown there. It
  reads like a general tagline — confirm whether it belongs elsewhere.
- The new copy names the firm **NIBA Consulting**, but the rest of the site
  is presented as Stephen Niba personally. Confirm whether the header and
  page title should carry the firm name.

## Photography

**Portraits** (`public/img/stephen-*.jpg`) were supplied by the client.

**Section images** are licensed stock, downloaded and stored locally in
`public/img/` — nothing is loaded from Unsplash when a visitor opens the site.
The text set on each image is the heading of the section it opens, and
describes the work rather than the photograph, so no image claims to show
one of Stephen's own sites.

| File | Subject | Photographer | Source |
| --- | --- | --- | --- |
| `construction-frame.jpg` | Building frame and tower cranes | Ben Allan | [Unsplash](https://unsplash.com/photos/grayscale-photo-of-crane-in-front-of-building-BIeC4YK2MTA) |
| `cromarty-rigs.jpg` | Offshore rigs, Cromarty Firth, Scotland | Ben Wicks | [Unsplash](https://unsplash.com/photos/a-group-of-oil-rigs-in-the-ocean-Ej2FQy1W7z4) |
| `road-roller.jpg` | Road roller on fresh asphalt | Michael Evans | [Unsplash](https://unsplash.com/photos/yellow-and-black-heavy-equipment-on-road-during-daytime-_P-hKe5H_o4) |

All three are under the [Unsplash License](https://unsplash.com/license):
free for commercial use, no attribution required. They are credited in the
site footer anyway.

## Privacy (GDPR)

The client is based in Denmark, so the site is built to make **no
third-party requests**. In particular, the fonts are self-hosted through the
`@fontsource-variable` packages rather than loaded from Google Fonts: loading
Google Fonts from Google's servers sends each visitor's IP address to Google,
which a German court (LG München, 2022) held to breach the GDPR. There are no
analytics, trackers or cookies. `npm run verify` fails if a remote asset is
ever added.

## Contact

Email (`mailto:`), phone (`tel:`) and WhatsApp (`wa.me`, plus a floating
button bottom-right). All three come from `IDENTITY` in `content.js`; change
the phone number there and the call and WhatsApp links follow.

There is deliberately **no contact form**. The site has no server, so a form
would have to post to a third-party service, which would then process
visitors' personal data — requiring a privacy notice and a data-processing
agreement under the GDPR. If one is wanted later, the simplest route is the
built-in form handling of whichever host the site is deployed to (e.g.
Netlify Forms).

## Design

- **Palette** from the client's own photographs: navy (`#1E2A44`) from the
  suit, ochre (`#BD8329`) from the painted branches, cream (`#F3EEE5`) from
  the floor. Defined once in the `:root` block of `src/index.css`.
- **Type:** Fraunces for headings, Newsreader for body text.
- **Layout:** a 12-column grid used asymmetrically; ruled lists rather than
  cards.
- **Motion** is limited to smooth scrolling (Lenis) and a one-time reveal as
  each block enters the screen. Both are disabled under
  `prefers-reduced-motion`.

## Structure

```
src/
  App.jsx
  main.jsx
  index.css             palette, type, photo treatments
  store.js              scroll progress + active section
  data/content.js       every word on the page
  components/
    Band.jsx            photographic section header with text on the image
    Reveal.jsx          reveal-on-scroll
    ScrollDriver.jsx    smooth scroll loop
    Section.jsx         registers sections for the index
    Shell.jsx           header, left section index, progress rule
  sections/             Masthead, About, Consulting, Projects,
                        Values, Credentials, Contact
public/img/             photographs (all local)
scripts/verify.mjs      checks
```

## Checks

`npm run verify` asserts that the email, location, vision, mission and core
values match the brief; that previously removed invented wording has not
returned; that every referenced image exists locally; that no asset is
loaded from a third party; and that the scroll state tracks sections
correctly.
