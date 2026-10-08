// Site-wide metadata. Import from here instead of hard-coding strings in pages.
export const SITE_TITLE = 'CARE-E Ai';
export const SITE_DESCRIPTION =
  'CARE-E writes the clinical note during the visit. You review and sign, and the chart is closed before you leave the room. AI documentation for independent practices.';
export const SITE_LOCALE = 'en';

// Contact form endpoint (Formspree form "care-e.ai contact" on Bryan's account; sends to the contact@care-e.ai Google Group = Bryan + Matt).
export const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mbgdoakj';

export const CONTACT_EMAILS = ['sales@care-e.ai', 'info@care-e.ai'];

export const SOCIAL_LINKS = {
  x: 'https://x.com/caree_ai',
  linkedin: 'https://www.linkedin.com/company/care-e-ai',
};

import { withBase } from './lib/url';

// URL paths match the previous care-e.ai site so existing links and rankings keep working.
export const ROUTES = {
  home: withBase('/'),
  about: withBase('/about-us/'),
  leadership: withBase('/about-us/#leadership'),
  partners: withBase('/about-us/#partners'),
  solution: withBase('/solution/'),
  cdi: withBase('/clinical-documentation-improvement-cdi/'),
  rpa: withBase('/robotic-process-automation-rpa/'),
  cds: withBase('/clinical-decision-support-cds/'),
  patientEngagement: withBase('/patient-engagement/'),
  realWorld: withBase('/real-world-applications/'),
  advantage: withBase('/care-e-advantage/'),
  analytics: withBase('/care-e-analytics/'),
  security: withBase('/security-and-compliance/'),
  whoWeWorkWith: withBase('/who-we-work-with/'),
  pricing: withBase('/pricing/'),
  blog: withBase('/blog/'),
  faq: withBase('/faq/'),
  contact: withBase('/contact-us/'),
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
