import { ROUTES } from '../consts';

// In-page sub-navigation shared by every solution page (pill row in the Figma design).
export const SOLUTION_NAV = [
  { label: 'Clinical Documentation', href: ROUTES.cdi },
  { label: 'Decision Support', href: ROUTES.cds },
  { label: 'Patient Engagement', href: ROUTES.patientEngagement },
  { label: 'Analytics', href: ROUTES.analytics },
  { label: 'Use Cases', href: ROUTES.realWorld },
  { label: 'CARE-E Advantage', href: ROUTES.advantage },
  { label: 'Security & Compliance', href: ROUTES.security },
];

const icons = import.meta.glob<string>('../assets/solutions/icons/*', {
  eager: true,
  query: '?url',
  import: 'default',
});

/** URL of an icon from the previous site's solution pages, by file name. */
export const solutionIcon = (file: string) => {
  const url = icons[`../assets/solutions/icons/${file}`];
  if (!url) throw new Error(`Missing solution icon: ${file}`);
  return url;
};
