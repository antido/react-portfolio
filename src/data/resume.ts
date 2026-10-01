// Everything shown on the site lives in this file.
// To update the portfolio, edit the text here - no component changes needed.
import jamesWrightCafePreview from '../assets/img/projects/james-wright-cafe.webp'
import mint09Preview from '../assets/img/projects/mint09.webp'
import valleyBreadPreview from '../assets/img/projects/valley-bread.webp'

export interface Job {
  id: string
  company: string
  role: string
  note?: string // e.g. "Remote"
  start: string // ISO date, used by the career ribbon
  end: string
  period: string // how the dates are shown
  highlights: string[]
}

export interface School {
  level: string
  school: string
  detail?: string
  location: string
  years: string
}

export interface Project {
  name: string
  url: string
  /** Text for the link when it should not be the plain address, e.g. an archived copy. */
  linkLabel?: string
  /** Preview screenshot (960 x 600 WebP in src/assets/img/projects). */
  image: string
  description: string
  stack: string[]
}

export const profile = {
  name: 'Christian Lerry Antido',
  role: 'Software Developer',
  location: 'Baguio City, Philippines',
  tagline: '',
  about: [
    'I am a software developer from Baguio City with a Bachelor of Science in Information Technology from Saint Louis University. Since 2018 I have built and maintained web applications for local companies and remote clients, from company websites and WordPress builds to an online learning platform.',
    'Most recently I was a Software Developer 3 at Dona Alejandra Incorporation, where I maintained CakePHP applications and then moved to building new ones with Laravel on the back end and React on the front end.',
  ],
  email: 'christantido@gmail.com',
  phone: '0998 462 9033',
  phoneHref: '+639984629033',
  birthDate: '1994-12-21',
}

/**
 * Personal details from the resume.
 * The ones marked `private: true` (home address, birth details, religion,
 * civil status) are the kind of facts used to verify identity. Set
 * SHOW_PRIVATE_DETAILS to false to keep them off a public website.
 */
export const SHOW_PRIVATE_DETAILS = true

export const personalDetails: { label: string; value: string; private?: boolean }[] = [
  { label: 'Nationality', value: 'Filipino' },
  { label: 'Gender', value: 'Male' },
  { label: 'Birth date', value: 'December 21, 1994', private: true },
  { label: 'Place of birth', value: 'Benguet General Hospital', private: true },
  { label: 'Civil status', value: 'Single', private: true },
  { label: 'Religion', value: 'Roman Catholic', private: true },
  {
    label: 'Address',
    value: 'Lot 6 Block G NPC Pearl Street, Irisville Subdivision, Barangay Irisan, Baguio City',
    private: true,
  },
]

// Newest first.
export const jobs: Job[] = [
  {
    id: 'dai',
    company: 'Dona Alejandra Incorporation (DAI)',
    role: 'Software Developer 3',
    note: 'Work from home',
    start: '2024-09-03',
    end: '2026-09-18',
    period: 'Sep 2024 to Sep 2026',
    highlights: [
      'Developed and maintained web applications for the company’s clients.',
      'Started on applications built with CakePHP, then moved to building new ones with Laravel for the back end and React for the front end.',
    ],
  },
  {
    id: 'valley-bread',
    company: 'Valley Bread Incorporation',
    role: 'Software Developer',
    start: '2023-05-19',
    end: '2024-07-17',
    period: 'May 2023 to Jul 2024',
    highlights: [
      'Built web applications for the company, its affiliated cafe and the ESH department using PHP, C# and React.',
      'Deployed PHP projects to Hostinger shared hosting, from testing through production.',
      'Tested deployments of C# applications on Microsoft Azure.',
    ],
  },
  {
    id: 'technodream',
    company: 'Technodream Sales and Call Center Services',
    role: 'Web Programmer',
    start: '2022-08-09',
    end: '2023-03-03',
    period: 'Aug 2022 to Mar 2023',
    highlights: [
      'Handled revisions, updates and debugging of existing static and WordPress websites.',
      'Converted Adobe Fireworks designs into WordPress websites with the SiteOrigin and Elementor page builders.',
      'Made sure each website was responsive across device breakpoints.',
    ],
  },
  {
    id: 'magicsoft',
    company: 'Magicsoft International Software Development Services',
    role: 'Web Developer',
    start: '2021-06-16',
    end: '2022-06-30',
    period: 'Jun 2021 to Jun 2022',
    highlights: [
      'Worked with a team on an online learning web application built with React and Next.js.',
      'Helped design the database using an entity relationship diagram.',
    ],
  },
  {
    id: 'wecans',
    company: 'WECANS Academy',
    role: 'Web Developer',
    start: '2020-02-03',
    end: '2021-01-29',
    period: 'Feb 2020 to Jan 2021',
    highlights: [
      'Looked after the main WECANS website and the general manager’s testing website, used for services such as interior design and quotations.',
      'Added features, adjusted layouts, and debugged and maintained the PHP web applications.',
    ],
  },
  {
    id: 'jsv',
    company: 'JSV Software Development',
    role: 'Software Developer',
    start: '2018-02-01',
    end: '2019-07-31',
    period: 'Feb 2018 to Jul 2019',
    highlights: [
      'Developed and maintained the company’s web applications with the Symfony PHP framework: new features, layout changes and bug fixes.',
      'Wrote functional and unit tests.',
    ],
  },
]

export const skillGroups: { label: string; items: string[] }[] = [
  { label: 'Web development', items: ['HTML5', 'CSS3', 'JavaScript', 'jQuery', 'PHP', 'Laravel', 'React'] },
  { label: 'Database', items: ['MySQL'] },
  { label: 'Version control', items: ['Git'] },
  { label: 'Office software', items: ['Word', 'Excel'] },
]

export const education: School[] = [
  {
    level: 'Tertiary',
    school: 'Saint Louis University',
    detail: 'Bachelor of Science in Information Technology',
    location: 'Baguio City',
    years: '2012 to 2017',
  },
  {
    level: 'Secondary',
    school: 'Pines City National High School',
    location: 'Baguio City',
    years: '2008 to 2012',
  },
  {
    level: 'Primary',
    school: 'Quezon Hill Elementary School',
    location: 'Baguio City',
    years: '2002 to 2008',
  },
]

export const projects: Project[] = [
  {
    name: 'Valley Bread',
    url: 'https://valleybread.com/',
    image: valleyBreadPreview,
    description: 'Main website of Valley Bread Inc., located in La Trinidad, Benguet, Philippines.',
    stack: ['Laravel', 'Bootstrap', 'JavaScript', 'jQuery', 'Ajax', 'MySQL'],
  },
  {
    name: 'James Wright Cafe',
    url: 'https://jameswrightcafe.com/',
    image: jamesWrightCafePreview,
    description: 'Main website of James Wright Cafe, which is affiliated with Valley Bread Inc.',
    stack: ['PHP with PDO', 'Bootstrap', 'JavaScript', 'MySQL'],
  },
  {
    name: 'Mint09',
    url: 'https://mint09.com/',
    image: mint09Preview,
    description: 'An online learning web application used mainly by Korean students.',
    stack: ['Next.js', 'React', 'Node.js', 'Bootstrap', 'Prisma', 'MySQL'],
  },
]

/** Page sections, in order. Used by the navigation bar. */
export const sections = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]
