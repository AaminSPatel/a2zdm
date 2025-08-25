// app/services/[slug]/page.js (Server Component)
import ServiceDetail from './ServiceDetail';
import { serviceData } from '@/data/serviceData';

export default function ServicePage({ params }) {
  // Find the service by slug from the nested structure
  const findServiceBySlug = (slug) => {
    for (const category of serviceData) {
      if (category.services && category.services[slug]) {
        return category.services[slug];
      }
    }
    // Fallback to a default service if not found
    return (
      serviceData[0]?.services?.["customer-segmentation"] || {
        title: "Service Not Found",
        description: "The requested service could not be located",
        features: [],
        benefits: [],
        process: [],
        pricing: {},
        caseStudy: {},
      }
    );
  };

  const service = findServiceBySlug(params.slug);
  
  return <ServiceDetail service={service} slug={params.slug} />;
}

export async function generateStaticParams() {
  const slugs = [];
  
  // Extract all slugs from the serviceData structure
  for (const category of serviceData) {
    if (category.services) {
      for (const slug of Object.keys(category.services)) {
        slugs.push({ slug });
      }
    }
  }
  
  return slugs;
}

export async function generateMetadata({ params }) {
  // Find the service by slug
  const findServiceBySlug = (slug) => {
    for (const category of serviceData) {
      if (category.services && category.services[slug]) {
        return category.services[slug];
      }
    }
    return null;
  };

  const service = findServiceBySlug(params.slug);
  const siteUrl = "https://yourdomain.com";
  const logoUrl = "/logo.png";

  if (!service) {
    return {
      title: "Service Not Found | A2ZDM Private Limited",
    };
  }

  return {
    title: `${service.title} | A2ZDM Private Limited`,
    description: service.description,
    openGraph: {
      title: `${service.title} | A2ZDM Private Limited`,
      description: service.description,
      images: [service.heroImage || logoUrl],
      url: `${siteUrl}/services/${params.slug}`,
    },
    twitter: {
      card: 'summary_large_image',
      title: `${service.title} | A2ZDM Private Limited`,
      description: service.description,
      images: [service.heroImage || logoUrl],
    },
  };
}