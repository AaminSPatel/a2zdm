// app/case-studies/[slug]/page.js (Server Component)
import CaseStudyDetail from './CaseStudyDetail';
import { caseStudies } from '@/data/caseStudies';

export default function CaseStudyPage({ params }) {
  const caseStudy = caseStudies.find(study => study.slug === params.slug);
  
  return <CaseStudyDetail caseStudy={caseStudy} />;
}

export async function generateStaticParams() {
  return caseStudies.map((study) => ({
    slug: study.slug,
  }));
}

export async function generateMetadata({ params }) {
  const caseStudy = caseStudies.find(study => study.slug === params.slug);
  
  return {
    title: `${caseStudy.client} Case Study | A2ZDM Private Limited`,
    description: caseStudy.overview,
    openGraph: {
      title: `${caseStudy.client} Case Study | A2ZDM`,
      description: caseStudy.overview,
      images: [caseStudy.image],
    },
  };
}