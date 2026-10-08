import type { ImageMetadata } from 'astro';
import cardiology from '../assets/specialties/cardiology.png';
import endocrinology from '../assets/specialties/endocrinology.png';
import gastroenterology from '../assets/specialties/gastroenterology.png';
import hematology from '../assets/specialties/hematology.png';
import nephrology from '../assets/specialties/nephrology.png';
import neurology from '../assets/specialties/neurology.png';
import oncology from '../assets/specialties/oncology.png';
import ophthalmology from '../assets/specialties/ophthalmology.png';
import painManagement from '../assets/specialties/pain-management.png';
import pulmonology from '../assets/specialties/pulmonology.png';
import rheumatology from '../assets/specialties/rheumatology.png';
import urology from '../assets/specialties/urology.png';

// Specialties with icons in the Figma design.
export const FEATURED_SPECIALTIES: { label: string; icon: ImageMetadata }[] = [
  { label: 'Cardiology', icon: cardiology },
  { label: 'Endocrinology', icon: endocrinology },
  { label: 'Gastroenterology', icon: gastroenterology },
  { label: 'Hematology', icon: hematology },
  { label: 'Nephrology', icon: nephrology },
  { label: 'Neurology', icon: neurology },
  { label: 'Oncology', icon: oncology },
  { label: 'Ophthalmology', icon: ophthalmology },
  { label: 'Pain Management', icon: painManagement },
  { label: 'Pulmonology', icon: pulmonology },
  { label: 'Rheumatology', icon: rheumatology },
  { label: 'Urology', icon: urology },
];

// The rest of the specialties listed on the previous care-e.ai site.
export const OTHER_SPECIALTIES = [
  'Dermatology',
  'Emergency Medicine',
  'ENT (Ear, Nose, and Throat)',
  'Geriatrics',
  'Gynecology',
  'Hepatology',
  'Hospital Medicine',
  'Internal Medicine',
  'Obstetrics',
  'Orthopedics',
  'Pediatrics',
  'Psychiatry',
  'Urgent Care',
];
