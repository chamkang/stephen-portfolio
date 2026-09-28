/**
 * Every word on the site lives here.
 *
 * All copy is taken from the brief supplied by the client. Nothing is
 * invented: where the brief is silent (for example, which institution ran
 * the MBA courses), the field is left out rather than guessed. Grammar and
 * spelling have been tidied; meaning has not been changed.
 */

export const IDENTITY = {
  first: 'Stephen',
  last: 'Niba',
  // The previous title was the exact name of the certification that was
  // withdrawn from the site, so it was changed with it. See README; revert
  // this one line if the old title should come back.
  role: 'Project Management Consultant',
  email: 'sustain99a@gmail.com',
  phone: '+45 71 36 76 01',
  locale: 'Denmark',
}

/* Derived from IDENTITY.phone so there is one number to edit. */
const PHONE_DIGITS = IDENTITY.phone.replace(/[^\d]/g, '')
export const PHONE_HREF = `tel:+${PHONE_DIGITS}`
export const WHATSAPP_HREF = `https://wa.me/${PHONE_DIGITS}`

export const SECTIONS = [
  { id: 'home', title: 'Home' },
  { id: 'about', title: 'About' },
  { id: 'consulting', title: 'Consulting' },
  { id: 'projects', title: 'Projects' },
  { id: 'values', title: 'Values' },
  { id: 'credentials', title: 'Credentials' },
  { id: 'contact', title: 'Contact' },
]

/* Brief: "About the founder". */
export const BIO =
  'Stephen holds an MSc in Project Management from Aberdeen Business School at Robert Gordon University, Scotland, United Kingdom, as well as the IPMA (APM) Level D certification. He has also undergone professional formation on how to detect money-laundering activities from stakeholders associated with the finance sector.'

/* Brief: "VISION" — verbatim. */
export const VISION =
  'Creating a world of consistent and sustainable project success.'

/* Brief: "MISSION" — verbatim. The three highlighted words are styled in
   the About section; the sentence itself is unchanged. */
export const MISSION =
  'Collaborating effectively with private and public sector organisations in designing, initiating, and delivering customer-centric projects.'

export const MISSION_HIGHLIGHTS = ['designing', 'initiating', 'delivering']

/* Brief: the three quoted lines that follow the mission. */
export const MISSION_POINTS = [
  'Adding value to the global PM community.',
  'Responding to clients’ needs and requirements by utilising best project management practices, tools, and techniques.',
  'Enabling the client to design their projects with industry trends and consumer expectations in mind.',
]

/* Brief: "Coaching/Consulting Areas". The first three are named in the
   brief without description, so each carries only its name and — where
   the brief supports it — the related experience it states elsewhere.
   The last two were supplied later with their own copy. */
export const CONSULTING = [
  {
    title: 'Cost & Schedule Management',
    related:
      'Utilised Gantt charts to plan construction materials for the different phases of public road construction projects (BUNSMAG, Cameroon).',
  },
  {
    title: 'Risk Management',
    related:
      'Professional formation on how to detect money-laundering activities from stakeholders associated with the finance sector.',
  },
  {
    title: 'ERP Project Management',
    related: null,
  },

  /* Client addition. Spelling and spacing tidied only (see README),
     slashes written out as "and". */
  {
    title: 'IT Compliance & Governance',
    body: 'Client organisations trust vendors and service providers that adhere to compliance principles. At NIBA Consulting, we help client organisations build and sustain their unique compliance and governance structures and models.',
    points: ['Offering remote services within Data Governance and IT Compliance.'],
    quote:
      'Developing individual and corporate capacity for the present-day job market and industry need.',
  },
  {
    title: 'Digital Transformation',
    lead: 'Helping clients to:',
    points: [
      'build alignment across Business, Commercial, R&D, and IT projects;',
      'balance their business and technical needs;',
      'develop data-driven decisions through their AI-driven competitive strategies.',
    ],
  },
]

/* Brief: "Previous Projects", in its own two groups. */
export const PROJECTS = [
  {
    group: 'Non-Academic Projects',
    items: [
      {
        role: 'Research Team Lead',
        org: 'URS Corporation',
        place: 'Aberdeen, Scotland, United Kingdom',
        tag: 'Oil & Gas Decommissioning',
        note: 'Research Team Lead for an oil and gas decommissioning project commissioned by URS Corporation in Aberdeen.',
      },
      {
        role: 'Customer Service Representative',
        org: 'Sports Aberdeen',
        place: 'Aberdeen, Scotland, United Kingdom',
        tag: 'Public Sector · Sports & Facilities',
        note: 'A public-sector sports and facility centre owned by Aberdeen City Council. Main responsibilities: ensuring visitors had a wonderful first experience, as well as an exciting one during and after their time at the facility, and enabling customers to onboard effectively into the respective sports units.',
      },
      {
        role: 'Procurement & Supply Chain Projects',
        org: 'JK Logistics',
        place: null,
        tag: 'Procurement · Supply Chain',
        note: null,
      },
      {
        role: 'Logistics Planning & Management',
        org: 'BUNSMAG',
        place: 'Cameroon',
        tag: 'Construction · Public Roads',
        note: 'A construction company that executes public road construction projects across the national territory of Cameroon. Main focus: utilising Gantt charts to plan construction materials for the different phases of the construction projects.',
      },
      {
        role: 'Project Trainer',
        org: 'The Environmental Protection and Development Association (EPDA)',
        place: null,
        tag: 'Not-for-profit · Sustainable Development',
        note: 'A not-for-profit organisation that focuses on ensuring the safety of the world’s people by engaging the local community in sustainable development practices.',
      },
    ],
  },
  {
    group: 'Academic Projects',
    items: [
      {
        role: 'Volunteer Lecturer',
        org: 'University of Buea',
        place: 'Department of Agricultural Economics and Agribusiness',
        tag: '2014/2015 academic year',
        note: 'Under the leadership of Dr. Ernest L. Molua, Head of Department.',
      },
      {
        // The brief does not name the institution for the two MBA
        // courses, so none is shown.
        role: 'Assistant Instructor — MBA Project Management',
        org: null,
        place: null,
        tag: '2014/2015 academic year',
        note: 'Co-designed the course outline and co-delivered the course under the leadership of Mr. Ntangsi Max Memfih, Head of MBA Programmes.',
      },
      {
        role: 'Assistant Instructor — MBA Marketing Management',
        org: null,
        place: null,
        tag: '2014/2015 academic year',
        note: 'Delivered the section on Strategic Marketing and Brand Management.',
      },
      {
        role: 'Lecturer in Economics and Accounting',
        org: 'The Dewey International School of Applied Sciences (DISAS)',
        place: 'Bonamoussadi, Douala, Cameroon',
        tag: 'Cambridge examinations',
        note: 'Focused predominantly on utilising inquiry-based learning, critical thinking, and global thinking approaches in curriculum development and classroom instruction towards Cambridge-based examinations such as IGCSE, O Level and A Level.',
      },
    ],
  },
]

/* Brief: "Core Values", as given. Community Service was added later. */
export const VALUES = [
  'Communication',
  'Humility',
  'Trustworthiness',
  'Privacy',
  'Adaptability',
  'Community Service',
]

/* Brief: "About the founder". */
export const CREDENTIALS = [
  {
    abbr: 'MSc',
    title: 'MSc in Project Management',
    body: 'Aberdeen Business School, Robert Gordon University, Scotland, United Kingdom.',
  },
  {
    // Supplied as "Bachelor of Science( MSc.) in Project Management". MSc is
    // Master of Science and is already listed above, so this is shown as a
    // bachelor's degree. No institution was given. See README.
    abbr: 'BSc',
    title: 'Bachelor of Science (BSc) in Project Management',
    body: null,
  },
  {
    abbr: 'IPMA',
    title: 'IPMA (APM) Level D Certification',
    body: 'International Project Management Association (IPMA) · Association for Project Management (APM).',
  },
  {
    abbr: 'AML',
    title: 'Anti-Money-Laundering Formation',
    body: 'Professional formation on how to detect money-laundering activities from stakeholders associated with the finance sector.',
  },
]

/* ── Photographic bands ──────────────────────────────────────
 *
 * Licensed stock (Unsplash License), stored locally in public/img/.
 * The text set on each image is a heading for the section it opens and
 * restates the brief — it describes the *work*, never the photograph, so
 * nothing claims that a picture shows one of Stephen's own sites.
 */
export const BANDS = {
  consulting: {
    src: '/img/construction-frame.jpg',
    alt: 'Black-and-white view of a building frame under construction with two tower cranes',
    eyebrow: 'Coaching & Consulting Areas',
    title: 'Coaching & Consulting',
    text: 'Cost & Schedule Management · Risk Management · ERP Project Management · IT Compliance & Governance · Digital Transformation',
    tone: 'mono',
    position: '50% 32%',
    credit: 'Ben Allan',
  },
  projects: {
    src: '/img/cromarty-rigs.jpg',
    alt: 'Offshore oil rigs silhouetted against an orange sunset sky over the sea',
    eyebrow: 'Previous Projects',
    title: 'From oil & gas decommissioning to public road construction',
    text: 'Aberdeen, Scotland · Cameroon',
    tone: 'toned',
    position: '62% 50%',
    credit: 'Ben Wicks',
  },
  logistics: {
    src: '/img/road-roller.jpg',
    alt: 'A road roller compacting freshly laid asphalt beside a traffic cone',
    eyebrow: 'Logistics Planning & Management',
    title: 'Planning construction materials, phase by phase',
    text: 'Gantt-chart planning for public road construction projects.',
    tone: 'toned',
    position: '60% 45%',
    flip: true,
    credit: 'Michael Evans',
  },
}
