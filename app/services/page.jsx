// app/services/page.js (Server Component)
import ServicesClient from './ServicesClient';
import { serviceData } from '@/data/serviceData';

// This is a server component that fetches data
export default function ServicesPage() {
  return <ServicesClient serviceData={serviceData} />;
}

export const metadata = {
  title: 'Our Services | A2ZDM Private Limited',
  description: 'Comprehensive digital marketing and SEO services that drive measurable results through strategic planning, technical excellence, and continuous optimization.',
};