import healthSystems from '../assets/orgs/health-systems.svg?url';
import payersAcos from '../assets/orgs/payers-acos.svg?url';
import providerNetworks from '../assets/orgs/provider-networks.svg?url';
import homeCare from '../assets/orgs/home-care.svg?url';
import assistedLiving from '../assets/orgs/assisted-living.svg?url';
import gpo from '../assets/orgs/gpo.svg?url';
import valueBasedCare from '../assets/orgs/value-based-care.svg?url';
import school from '../assets/orgs/school.svg?url';
import thirdParty from '../assets/orgs/third-party.svg?url';
import physicianPractices from '../assets/orgs/physician-practices.svg?url';
import urgentCare from '../assets/orgs/urgent-care.svg?url';
import fqhc from '../assets/orgs/fqhc.svg?url';
import telehealth from '../assets/orgs/telehealth.svg?url';
import rehabilitation from '../assets/orgs/rehabilitation.svg?url';
import publicHealth from '../assets/orgs/public-health.svg?url';

export interface Organization {
  label: string;
  /** URL of an 85×85 icon that already includes the gradient ring (from the previous site). */
  icon: string;
}

// Organization types from the previous care-e.ai site, in its order.
export const ORGANIZATIONS: Organization[] = [
  { label: 'Health Systems', icon: healthSystems },
  { label: 'Payers & Accountable Care Organizations (ACOs)', icon: payersAcos },
  { label: 'Provider Networks & Independent Organizations', icon: providerNetworks },
  { label: 'Home Care & Hospice', icon: homeCare },
  { label: 'Assisted Living and Skilled Nursing Facilities', icon: assistedLiving },
  { label: 'Group Purchasing Organizations (GPOs)', icon: gpo },
  { label: 'Value-Based Care Organizations (VBCs)', icon: valueBasedCare },
  { label: 'School-Based Triage & Behavioral Health', icon: school },
  {
    label: 'Third-Party Technology (Including EHRs & Virtual Health Solutions)',
    icon: thirdParty,
  },
  { label: 'Physician Practices & Ambulatory Clinics', icon: physicianPractices },
  { label: 'Urgent Care Centers', icon: urgentCare },
  {
    label: 'Federally Qualified Health Centers (FQHCs) & Community Health Centers',
    icon: fqhc,
  },
  { label: 'Telehealth & Remote Patient Monitoring Providers', icon: telehealth },
  { label: 'Rehabilitation & Physical Therapy Clinics', icon: rehabilitation },
  { label: 'Public Health & Government Health Agencies', icon: publicHealth },
];
