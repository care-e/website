import type { ImageMetadata } from 'astro';
import { ROUTES } from '../consts';

// Icons are the PNGs from the previous care-e.ai site.
const icons = import.meta.glob<{ default: ImageMetadata }>('../assets/solution-icons/*.png', {
  eager: true,
});
const icon = (name: string) => {
  const mod = icons[`../assets/solution-icons/${name}.png`];
  if (!mod) throw new Error(`Missing solution icon: ${name}`);
  return mod.default;
};

export interface SolutionTab {
  id: string;
  label: string;
  intro: string;
  items: { title: string; text: string; icon: ImageMetadata }[];
  href: string;
}

export const SOLUTION_TABS: SolutionTab[] = [
  {
    id: 'clinical-documentation',
    label: 'Clinical Documentation',
    intro:
      'CARE-E automates repetitive administrative tasks, such as appointment scheduling, reminders, and data entry, allowing clinicians to spend more time with patients. Key processes include:',
    items: [
      {
        title: 'Automated Structured Note Generation',
        text: 'Transforms clinician inputs, voice dictation, and patient interactions into well-organized, structured clinical notes in real-time.',
        icon: icon('automated-process-1'),
      },
      {
        title: 'Real-Time Assistance',
        text: 'Captures relevant clinical details during encounters, ensuring immediate, precise documentation and reducing the need for retrospective corrections.',
        icon: icon('24-hours-1'),
      },
      {
        title: 'Comprehensive Medical Summaries',
        text: 'Prepares detailed summaries by analyzing past documentation, automatically compiling past medical history (PMH), past surgical history (PSH), history of present illness (HPI), orders, treatment plans, visit summary and patient summaries to ensure accurate, up-to-date records.',
        icon: icon('execution-1'),
      },
      {
        title: 'Coding Support',
        text: 'AI-driven mapping of clinical details to ICD-10 codes for billing recommendations and reduced admin workload.',
        icon: icon('technical-support-2'),
      },
      {
        title: 'Audit Readiness',
        text: 'Ensures thorough documentation to minimize audit risks and compliance penalties.',
        icon: icon('audit-1'),
      },
    ],
    href: ROUTES.cdi,
  },
  {
    id: 'clinical-decision-support',
    label: 'Clinical Decision Support',
    intro:
      'CARE-E delivers intelligent decision-making tools to help clinicians provide better, safer, and more efficient patient care. Key processes include:',
    items: [
      {
        title: 'Real-Time Alerts & Notifications',
        text: 'Stay informed about potential drug interactions and adverse events.',
        icon: icon('bell-2'),
      },
      {
        title: 'Evidence-Based Recommendations',
        text: 'Access clinical guidelines and standard-of-care recommendations.',
        icon: icon('evidences-1'),
      },
      {
        title: 'Comprehensive Patient Overviews',
        text: 'Integrate data from multiple systems for a full patient profile.',
        icon: icon('comprehensive-2'),
      },
      {
        title: 'Regulatory Compliance Support',
        text: 'Receive real-time, data-driven guidance for diagnosis and treatment.',
        icon: icon('regulatory-compliance-2'),
      },
    ],
    href: ROUTES.cds,
  },
  {
    id: 'analytics-reporting',
    label: 'Analytics & Reporting',
    intro:
      'CARE-E provides actionable insights through real-time analytics, helping healthcare teams optimize patient care and operations. Key processes include:',
    items: [
      {
        title: 'Clear Patient Insights',
        text: 'Instantly access patient history, treatment plans, and personalized recommendations.',
        icon: icon('insights-1'),
      },
      {
        title: 'Population Health Management (Coming Soon)',
        text: 'Identify trends and risk factors for proactive healthcare interventions.',
        icon: icon('population-1'),
      },
      {
        title: 'Predictive Intelligence',
        text: 'AI-driven models to detect complications before they occur.',
        icon: icon('predictive-modeling-1'),
      },
      {
        title: 'Custom Dashboards',
        text: 'Track key metrics like patient satisfaction and quality indicators.',
        icon: icon('dashboard-1'),
      },
      {
        title: 'Simplified Reporting',
        text: 'Generate compliance-driven reports with minimal effort.',
        icon: icon('simplify-1'),
      },
    ],
    href: ROUTES.analytics,
  },
  {
    id: 'robotic-process-automation',
    label: 'Robotic Process Automation (RPA)',
    intro:
      'CARE-E automates administrative tasks, allowing clinicians to focus more on patient care. Key processes include:',
    items: [
      {
        title: 'System & Application Automation',
        text: 'Automates credential entry, system logins, and document retrieval.',
        icon: icon('automated-1'),
      },
      {
        title: 'Data Management & Entry',
        text: 'Extracts, inputs, and updates patient data seamlessly.',
        icon: icon('data-management-1'),
      },
      {
        title: 'Scheduling & Reminders',
        text: 'Manages patient appointments and confirmations.',
        icon: icon('schedule-2'),
      },
      {
        title: 'Insurance & Prior Authorization Processing',
        text: 'Validates insurance details and expedites authorization approvals.',
        icon: icon('insurance-1'),
      },
      {
        title: 'EHR Data Entry & Updates',
        text: 'Automates patient record updates to reduce documentation workload and improve workflow efficiency.',
        icon: icon('data-processing-1'),
      },
    ],
    href: ROUTES.rpa,
  },
  {
    id: 'patient-engagement',
    label: 'Patient Engagement',
    intro:
      'CARE-E enhances patient interactions, communication, and adherence to care plans. Key processes include:',
    items: [
      {
        title: 'Scheduling & Reminders',
        text: 'Automates appointment confirmations and follow-ups to reduce no-shows.',
        icon: icon('reminder-1'),
      },
      {
        title: 'Assessments & Surveys',
        text: 'Delivers pre-visit questionnaires and post-care surveys for better patient insights.',
        icon: icon('reminder-1'),
      },
      {
        title: 'Enrollments',
        text: 'Simplifies onboarding for care programs with minimal administrative effort.',
        icon: icon('enrollment-2'),
      },
      {
        title: 'Personalization',
        text: 'Tailors patient communications based on preferences and medical history.',
        icon: icon('personalized-2'),
      },
      {
        title: 'Real-Time Insights',
        text: 'Provides data-driven recommendations for proactive patient care.',
        icon: icon('insights-2'),
      },
    ],
    href: ROUTES.patientEngagement,
  },
];
