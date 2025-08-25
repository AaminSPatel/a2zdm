// app/case-studies/page.js (Server Component)
import CaseStudiesClient from './CaseStudiesClient';
import { caseStudies } from '@/data/caseStudies';

// This is a server component that fetches data
export default function CaseStudiesPage() {
  return <CaseStudiesClient caseStudies={caseStudies} />;
}

export const metadata = {
  title: 'Success Stories | A2ZDM Private Limited',
  description: 'Explore our portfolio of successful digital transformations that helped businesses achieve remarkable growth and visibility.',
};