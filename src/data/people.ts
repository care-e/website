import type { ImageMetadata } from 'astro';
import bryanSable from '../assets/people/bryan-sable.jpg';
import matthewDrew from '../assets/people/matthew-drew.png';
import karenSable from '../assets/people/karen-sable.png';
import dakseshPatel from '../assets/people/daksesh-patel.png';

// Bios and titles from the previous care-e.ai site.
export interface Person {
  id: string;
  name: string;
  role: string;
  /** Missing when the previous site's photo could not be recovered. */
  photo?: ImageMetadata;
  linkedin?: string;
  bio: string[];
}

export const LEADERSHIP: Person[] = [
  {
    id: 'bryan-sable',
    name: 'Bryan A. Sable, MBA',
    role: 'Co-Founder',
    photo: bryanSable,
    linkedin: 'https://www.linkedin.com/in/bryansable',
    bio: [
      'Bryan Sable is a seasoned entrepreneur, growth strategist, and business leader with over a decade of experience in launching, scaling, and managing innovative products and solutions in the healthcare and life sciences industries. As a co-founder of CARE-E Ai, he brings a wealth of expertise in business development, marketing, and product strategy to drive innovation in clinical AI-assisted workflows.',
      'With a Master of Business Administration from Michigan State University (2017), Bryan has cultivated a diverse skill set spanning marketing, sales strategy, and product management. His career includes leadership roles at globally recognized companies such as Abbott Molecular, bioMérieux, and Neogen, where he drove product strategy for his portfolio, focusing on successful launches, accelerated adoption, and market expansion.',
      'At CARE-E Ai, Bryan leverages his extensive industry experience to revolutionize clinician workflows through AI and machine learning. His strategic vision and expertise continue to shape the future of AI-driven healthcare solutions.',
    ],
  },
  {
    id: 'matthew-drew',
    name: 'Matthew Drew',
    role: 'Co-Founder',
    photo: matthewDrew,
    linkedin: 'https://www.linkedin.com/in/mdrew-ventures/',
    bio: [
      'Matthew Drew is the Co-Founder of CARE-E AI, leading the company’s product innovation and growth strategy to transform AI and Automation. With experience with AI, virtual care, chronic disease management, behavioral health, and EHRs, Matt drives advancements that empower care providers and improve patient outcomes globally.',
      'Previously, Matt led operations for the Veterans Affairs Health Connect platform, delivering telehealth and triage services to over 20 million veterans worldwide. In addition, he founded Alpha Omega Health, a Digital Healthcare company focused on chronic disease, behavioral health and EHR/EMR. His diverse experience spans healthcare technology, financial services, and infrastructure security, where he pioneered solutions like real-time telemedicine during disasters and chronic care management platforms.',
      'Matt also serves as an advisor to organizations like Partnership for a Connected Illinois, Naya Advisory, and National Health Services. Matt is dedicated to advancing healthcare accessibility and creating impactful solutions for providers, patients, and communities.',
    ],
  },
];

export const PARTNERS: Person[] = [
  {
    id: 'karen-sable',
    name: 'Karen S. Sable, M.D.',
    role: 'Gastroenterology FACP, FAGA, FACG',
    photo: karenSable,
    bio: [
      'Dr. Karen S. Sable graduated from Rush Medical College with honors, elected to AOA Honor Society, as well as numerous other awards and fellowships. Dr. Sable continued her clinical and research training at The University of Chicago Hospital & Clinics before returning to Rush as an Attending Physician.',
      'She joined LakeShore Gastroenterology in 2001, participating in the practice’s growth. Dr. Sable was one of the founding members of the Glen Endoscopy Center. Dr. Sable recently retired from clinical medicine and was honored to be elected Emeritus Physician at NorthShore University and its affiliated University of Chicago Pritzker School of Medicine.',
    ],
  },
  {
    id: 'daksesh-patel',
    name: 'Daksesh Patel, D.O.',
    role: 'Gastroenterology',
    photo: dakseshPatel,
    bio: [
      'Daksesh Patel is an interventional gastroenterologist practicing in Chicago for the past 13 years. He currently serves as the Section Chief of Gastroenterology at St. Francis Hospital in Evanston, IL and is the Medical Director of the Lincoln Park Endoscopy Center as well as the Chairman of the Ascension Gastroenterology Joint Operating Committee of Illinois.',
      'He also currently serves as the national Principal Investigator of the largest clinical trial involving Sucrase Isomaltase Deficiency amongst adult Americans. His passion for clinical medicine has allowed him to be a valuable and experienced investor of healthcare startups.',
    ],
  },
  {
    id: 'meghan-lynch',
    name: 'Dr. Meghan Lynch',
    role: 'Internal Medicine and Clinical Pharmacology',
    bio: [
      'Meghan Lynch is a physician and clinical pharmacist based in Chicago with a strong background in healthcare innovation and product development. She completed both her PharmD and MD degrees with honors and is currently in residency at Northwestern Memorial Hospital.',
      'She has contributed to multiple early-stage digital health companies, where she helped design clinical decision tools and triage algorithms, and previously held a clinical faculty role at the University of Chicago. She is the inventor on a U.S. utility patent for a wearable vital monitoring device and has published on precision oncology, immunotherapy toxicity, and novel biomarkers in rare tumors.',
      'Her dual training in medicine and pharmacy, combined with a track record of building clinically grounded digital tools, positions her as a strategic contributor to healthcare startups focused on patient-centered design and clinical impact.',
    ],
  },
];

export const initials = (name: string) =>
  name
    .replace(/^Dr\.\s*/, '')
    .split(/\s+/)
    .filter((w) => /^[A-Z]/.test(w) && !w.includes('.'))
    .slice(0, 2)
    .map((w) => w[0])
    .join('');
