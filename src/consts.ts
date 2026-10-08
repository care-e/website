// Site-wide metadata. Import from here instead of hard-coding strings in pages.
export const SITE_TITLE = 'CARE-E Ai';
export const SITE_DESCRIPTION =
  'AI-Powered, EHR-Integrated Solutions for Smarter Clinical Workflows.';
export const SITE_LOCALE = 'en';

export const CONTACT_EMAILS = ['sales@care-e.ai', 'info@care-e.ai'];

export const SOCIAL_LINKS = {
  x: 'https://x.com/caree_ai',
  linkedin: 'https://www.linkedin.com/company/care-e-ai',
};

// URL paths match the previous care-e.ai site so existing links and rankings keep working.
export const ROUTES = {
  home: '/',
  about: '/about-us/',
  leadership: '/about-us/#leadership',
  partners: '/about-us/#partners',
  solution: '/solution/',
  cdi: '/clinical-documentation-improvement-cdi/',
  rpa: '/robotic-process-automation-rpa/',
  cds: '/clinical-decision-support-cds/',
  patientEngagement: '/patient-engagement/',
  realWorld: '/real-world-applications/',
  advantage: '/care-e-advantage/',
  analytics: '/care-e-analytics/',
  security: '/security-and-compliance/',
  whoWeWorkWith: '/who-we-work-with/',
  pricing: '/pricing/',
  blog: '/blog/',
  faq: '/faq/',
  contact: '/contact-us/',
} as const;

export interface NavItem {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
}

export const MAIN_NAV: NavItem[] = [
  {
    label: 'About Us',
    href: ROUTES.about,
    children: [
      { label: 'Leadership', href: ROUTES.leadership },
      { label: 'Partners', href: ROUTES.partners },
    ],
  },
  {
    label: 'Solution',
    href: ROUTES.solution,
    children: [
      { label: 'Clinical Documentation Improvement (CDI)', href: ROUTES.cdi },
      { label: 'Robotic Process Automation (RPA)', href: ROUTES.rpa },
      { label: 'Clinical Decision Support (CDS)', href: ROUTES.cds },
      { label: 'Patient Engagement', href: ROUTES.patientEngagement },
      { label: 'Real-World Applications', href: ROUTES.realWorld },
      { label: 'CARE-E Advantage', href: ROUTES.advantage },
      { label: 'CARE-E Analytics', href: ROUTES.analytics },
      { label: 'Security and Compliance', href: ROUTES.security },
    ],
  },
  { label: 'Who We Work With', href: ROUTES.whoWeWorkWith },
  { label: 'Pricing', href: ROUTES.pricing },
  {
    label: 'Resources',
    href: ROUTES.blog,
    children: [
      { label: 'Blog', href: ROUTES.blog },
      { label: 'FAQ', href: ROUTES.faq },
    ],
  },
];

export const FOOTER_NAV = [
  {
    heading: 'Solution',
    links: [
      { label: 'Clinical Documentation', href: ROUTES.cdi },
      { label: 'Robotic Process Automation', href: ROUTES.rpa },
      { label: 'Clinical Decision Support', href: ROUTES.cds },
      { label: 'Patient Engagement', href: ROUTES.patientEngagement },
      { label: 'Real-World Applications', href: ROUTES.realWorld },
      { label: 'CARE-E Advantage', href: ROUTES.advantage },
      { label: 'Security & Compliance', href: ROUTES.security },
    ],
  },
  {
    heading: 'About',
    links: [
      { label: 'About Us', href: ROUTES.about },
      { label: 'Leadership', href: ROUTES.leadership },
      { label: 'Partners', href: ROUTES.partners },
    ],
  },
  {
    heading: 'Resources',
    links: [
      { label: 'Who We Work With', href: ROUTES.whoWeWorkWith },
      { label: 'Blog', href: ROUTES.blog },
      { label: 'FAQ', href: ROUTES.faq },
      { label: 'Contact', href: ROUTES.contact },
    ],
  },
];
