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
  { id: 'experience', title: 'Experience' },
  { id: 'values', title: 'Values' },
  { id: 'credentials', title: 'Credentials' },
  { id: 'contact', title: 'Contact' },
]

/* "About STEPHEN", as supplied, plus the qualifications sentence from the
   original brief. The first paragraph is set larger than the rest. */
export const BIO = [
  'An agile-oriented, positive, team-focused and customer-centric professional with significant years of experience within project governance, PMO development, project coordination, stakeholder management, risk management, project reporting, and strategy execution.',
  'Currently leading AI initiation and utilisation projects within the healthcare sector for a client in Douala, Cameroon, on a fully remote basis. Has led digital transformation projects and engaged cross-functional teams across different geographic regions for the provision of digital solutions.',
  'Utilising core project management methodologies and tools such as SAFe ScrumXP, Jira and Kanban in executing clients’ requests within project performance baselines. An experienced leader in the development of clear strategic objectives, defining product vision and product roadmap, and translating customer insights into user stories, with an in-depth focus on value flow, agile estimating, and delivering excellent customer service.',
  'A passionate business copywriter with a central focus on inspiring the reader to take positive steps towards collaborating effectively at all levels of the corporate organisation.',
  'Currently exploring the link between AI and Data Governance, and learning how to automate workflows with AI.',
  'Stephen holds an MSc in Project Management from the Aberdeen Business School at the Robert Gordon University, Scotland, United Kingdom, as well as the IPMA (APM) Level D certification. He has also undergone professional formation on how to detect money-laundering activities from stakeholders associated with the finance sector.',
]

/* Brief: "VISION" — verbatim. */
export const VISION =
  'Creating a world of consistent and sustainable project success.'

/* Brief: "MISSION" — verbatim. The three highlighted words are styled in
   the About section; the sentence itself is unchanged. */
export const MISSION =
  'Collaborating effectively with private and public sector organisations in designing, initiating, and delivering customer-centric projects.'

export const MISSION_HIGHLIGHTS = ['designing', 'initiating', 'delivering']

/* Added by the client, shown beneath the mission statement. */
export const MISSION_NOTE = 'Initiating before designing'

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

/* Roles as supplied from the CV, newest first. Spelling and punctuation
   tidied to match the rest of the site (British spelling); wording and
   figures are unchanged. The three roles that also appeared in the original
   brief — URS, Sports Aberdeen and EPDA — are shown here in their fuller
   form rather than twice. */
export const EXPERIENCE = [
  {
    group: 'Professional Experience',
    items: [
      {
        role: 'Freelance AI Product Owner / PMO',
        org: 'St. Sylvester Clinic — Fertility Centre',
        place: 'Douala, Cameroon · Remote',
        dates: 'Jul 2025 — Present',
        type: 'Freelance',
        points: [
          'Support the development of AI-enabled customer-service solutions within a pharmaceutical environment.',
          'Develop AI chatbot concepts to support customer-service operations and improve access to information.',
          'Create project governance templates for use within patient-ward operations.',
          'Contribute to the development of ethical codes and conduct guidelines for internal and external stakeholders.',
          'Apply prompt-engineering techniques to identify and assess potential operational risks.',
          'Translate operational needs into structured product, project and governance requirements.',
        ],
      },
      {
        role: 'Virtual Project and Product Manager / Analyst',
        org: 'Environmental Protection and Development Association (EPDA)',
        place: 'Limbe, South-West, Cameroon',
        dates: 'Jan 2020 — Jun 2025',
        type: 'Seasonal',
        points: [
          'Developed the organisation’s product vision and strategy.',
          'Developed product backlogs, conducted backlog refinement, and ensured that stakeholders’ expectations were met.',
          'Developed and proposed project management training for the organisation.',
          'Created and led the development of the organisation’s project management office (PMO).',
          'Redesigned the organisation’s structure with an emphasis on product development within the PRINCE2 framework.',
        ],
      },
      {
        role: 'Project Manager / Research Team Leader',
        org: 'URS Corporation',
        place: 'Aberdeen, Scotland, United Kingdom · On-site',
        dates: 'May 2013 — Oct 2013',
        type: 'Internship',
        points: [
          'Led a three-person research team investigating oil and gas procurement and late-life asset management practices.',
          'Conducted comparative feasibility studies on oil and gas procurement contract types and appraised the impact of such contract forms on project financing.',
          'Developed investment appraisals for decommissioning projects.',
          'Developed project work breakdown structures and project plans.',
          'Removed impediments during each phase of the project.',
          'Developed project status reports and delivered them to the project steering committee.',
          'Led the project team in developing strategies to liaise with external stakeholders, ensuring that expected deliverables were met within scope, budget and schedule.',
          'Implemented change control procedures that brought about cost reduction and achievement of project objectives ahead of schedule and within scope.',
          'Presented project findings to the project sponsor at the Robert Gordon University (RGU) and the client representative from URS Corporation.',
        ],
      },
      {
        role: 'Customer Service Representative',
        org: 'Sports Aberdeen',
        place: 'Aberdeen, Scotland, United Kingdom',
        dates: 'Sep 2012 — Feb 2014',
        type: 'Part-time',
        points: [
          'Managed customer interactions and supported enrolment into sporting activities.',
          'Maintained professional communication and service standards.',
          'Supported customer onboarding and ensured a positive visitor experience.',
          'Sustained and upgraded facility quality, health and safety requirements.',
          'Contributed to operational planning and customer retention activities.',
        ],
      },
      {
        role: 'Associate Project Management Consultant',
        org: 'Value Construction International',
        place: 'United Kingdom · On-site',
        dates: 'Oct 2008 — Aug 2012',
        type: 'Full-time',
        points: [
          'Appraised clients’ competitive landscape and provided sound business advice for achieving competitive advantage.',
          'Coordinated cross-functional project teams across contractors, suppliers, engineers and internal stakeholders, aligning project scope, milestones, dependencies and responsibilities to support timely delivery of 10+ concurrent projects.',
          'Proactively identified and managed project risks, dependencies and critical-path activities, coordinating mitigation actions with stakeholders and contributing to an estimated 15% reduction in project delays.',
          'Developed structured project performance reporting by consolidating schedule, cost, procurement and resource data, reducing reporting and information-gathering time by approximately 20% and enabling project leadership to identify deviations earlier.',
          'Facilitated cross-functional meetings and stakeholder workshops, translating complex project information into clear actions, decisions, owners and deadlines, improving action-item closure rates by approximately 20%.',
          'Improved project management processes by standardising reporting, risk tracking, action logs and project documentation, reducing manual administrative effort by approximately 25% and increasing transparency across project teams.',
        ],
      },
      {
        role: 'SAFe Product Owner — Digitalisation and Data Department',
        org: 'JKT Enterprises Ltd',
        place: 'South-West Cameroon · Remote',
        dates: 'Sep 2007 — Sep 2008',
        type: 'Freelance',
        points: [
          'Engaged in product backlog development and management, product design and delivery, and release planning.',
          'Translated the product strategy into a product roadmap.',
          'Analysed market trends and customer preferences.',
          'Defined sprint goals and introduced project development levels.',
          'Led agile product and project delivery through the prism of the software development lifecycle.',
          'Defined and applied acceptance criteria for features and user stories.',
          'Developed the organisation’s project portfolios, scope statement, objectives, key performance indicators and success criteria.',
          'Developed project work breakdown structures and Gantt charts and led their execution.',
          'Developed risk management plans.',
          'Monitored vendors’ adherence to quality specifications for each product.',
        ],
      },
      {
        role: 'Procurement and Supply Chain Manager — Digitalisation and Data Department',
        org: 'JKT Enterprises Ltd',
        place: 'South-West Region, Cameroon · On-site',
        dates: 'Aug 2005 — Aug 2007',
        type: 'Full-time',
        points: [
          'Coordinated with the purchasing department and vendors regarding expedited deliveries.',
          'Built effective supply chain relationships and designed contract statements of work.',
          'Automated supply chain and procurement processes.',
          'Developed a risk management framework for assessing supply chain vulnerability.',
          'Received and appraised requests for quotation (RFQ) from potential suppliers.',
          'Monitored vendors’ commitment to service level agreements (SLA).',
          'Managed inbound and outbound logistics operations with a focus on cost minimisation and supply chain optimisation.',
          'Developed and managed materials master data for the product portfolio across different geographic regions.',
        ],
      },
    ],
  },
  {
    /* From the original brief; no dates were supplied for these. */
    group: 'Project Work',
    items: [
      {
        role: 'Logistics Planning & Management',
        org: 'BUNSMAG',
        place: 'Cameroon',
        tag: 'Construction · Public Roads',
        note: 'A construction company that executes public road construction projects across the national territory of Cameroon. Main focus: utilising Gantt charts to plan construction materials for the different phases of the construction projects.',
      },
      {
        role: 'Procurement & Supply Chain Projects',
        org: 'JK Logistics',
        place: null,
        tag: 'Procurement · Supply Chain',
        note: null,
      },
    ],
  },
  {
    group: 'Academic Experience',
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
  'Servant Leadership',
  'Teamwork',
  'Transparency',
]

/* Brief: "About the founder". */
export const CREDENTIALS = [
  {
    abbr: 'MSc',
    title: 'MSc in Project Management',
    body: 'The Aberdeen Business School, the Robert Gordon University, Scotland, United Kingdom.',
  },
  {
    // No awarding institution was supplied for this one. See README.
    abbr: 'BSc',
    title: 'Bachelor of Science (BSc) in Management',
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
  experience: {
    src: '/img/cromarty-rigs.jpg',
    alt: 'Offshore oil rigs silhouetted against an orange sunset sky over the sea',
    eyebrow: 'Experience',
    title: 'From oil & gas decommissioning to AI in healthcare',
    text: 'Scotland · Denmark · Cameroon · 2005 to present',
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
