// app/services/[slug]/ServiceDetail.js
"use client";

import { motion } from "framer-motion";
import { FiArrowRight, FiExternalLink, FiAward, FiArrowLeft, FiCheck, FiUsers, FiTrendingUp, FiActivity } from "react-icons/fi";
import { FaChartLine, FaSearch, FaShoppingCart, FaMobileAlt, FaUsers, FaClock } from "react-icons/fa";
import Link from "next/link";
import Head from "next/head";

const ServiceDetail = ({ service, slug }) => {
  const mobile_number = "9826739671"; // Move this to props or context
  const logoUrl = "/logo.png"; // Move this to props or context
  const siteUrl = "https://yourdomain.com"; // Move this to props or context

  if (!service) {
    return (
      <div className="min-h-screen bg-primary-color flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4 text-color-1">Service Not Found</h1>
          <p className="text-color-2 mb-6">The requested service could not be found.</p>
          <Link href="/services" className="btn-primary inline-flex items-center gap-2">
            <FiArrowLeft className="w-4 h-4" />
            Back to Services
          </Link>
        </div>
      </div>
    );
  }

  // Helper to render icon components
  const renderIcon = (iconName) => {
    switch (iconName) {
      case "<FiUsers className='w-8 h-8' />":
        return <FiUsers className="w-6 sm:w-8 h-6 sm:h-8" />;
      case "<FiTrendingUp className='w-8 h-8' />":
        return <FiTrendingUp className="w-6 sm:w-8 h-6 sm:h-8" />;
      case "<FiActivity className='w-8 h-8' />":
        return <FiActivity className="w-6 sm:w-8 h-6 sm:h-8" />;
      default:
        return <FiActivity className="w-6 sm:w-8 h-6 sm:h-8" />;
    }
  };

  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';

  return (
     <main className="min-h-screen bg-primary-color">
      {/* Back Navigation */}
       <Head>
        {/* Primary Meta Tags */}
        <title>{service.title} | A2ZDM Private Limited</title>
        <meta name="description" content={service.description} />
        <meta name="keywords" content={`${service.title}, ${service.category}, A2ZDM services, ${service.tags?.join(', ') || ''}`} />
        
        {/* Canonical */}
        <link rel="canonical" href={`${siteUrl}/services/${slug}`} />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={`${service.title} | A2ZDM Private Limited`} />
        <meta property="og:description" content={service.description} />
        <meta property="og:image" content={service.heroImage || logoUrl} />
        <meta property="og:url" content={`${siteUrl}/services/${slug}`} />
        <meta property="og:site_name" content="A2ZDM Private Limited" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${service.title} | A2ZDM Private Limited`} />
        <meta name="twitter:description" content={service.description} />
        <meta name="twitter:image" content={service.heroImage || logoUrl} />
        
        {/* Additional SEO Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Ateeq Patel" />
        <meta name="publisher" content="A2ZDM Private Limited" />
        
        {/* Schema.org markup */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": service.category,
            "name": service.title,
            "description": service.description,
            "provider": {
              "@type": "LocalBusiness",
              "name": "A2ZDM Private Limited",
              "image": logoUrl,
              "url": siteUrl,
              "telephone": "+91 9826739671",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "22 B Sher Shah Suri Nagar-B Khajrana",
                "addressLocality": "Indore",
                "addressRegion": "Madhya Pradesh",
                "postalCode": "452016",
                "addressCountry": "India"
              },
              "sameAs": [
                "https://www.facebook.com/yourpage",
                "https://www.linkedin.com/company/yourcompany",
                "https://twitter.com/yourhandle"
              ]
            },
            "areaServed": {
              "@type": "Place",
              "name": "India"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Service Offerings",
              "itemListElement": service.features?.map((feature, index) => ({
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": feature
                }
              }))
            }
          })}
        </script>

        {/* Breadcrumb Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": siteUrl
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Services",
                "item": `${siteUrl}/services`
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": service.title,
                "item": currentUrl
              }
            ]
          })}
        </script>
      </Head>
      <section className="py-6 bg-secondary-color border-b border-color">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/services"
            className="inline-flex items-center space-x-2 accent-cyan hover:text-cyan-300 transition-colors"
          >
            <FiArrowLeft className="w-4 h-4" />
            <span>Back to Services</span>
          </Link>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-20 bg-secondary-color">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
  initial={{ opacity: 0, x: -50 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
>
  <div className="flex items-center space-x-3 mb-6">
    <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center justify-center text-black">
      {renderIcon(service.icon)}
    </div>
    <span className="text-cyan-400 font-semibold">
      {service.category}
    </span>
  </div>

  <h1 className="text-4xl md:text-5xl font-bold mb-6 font-space-grotesk text-color-1">
    {service.title}
  </h1>

  <p className="text-xl text-color-2 mb-8 leading-relaxed">
    {service.description}
  </p>

  <div className="flex flex-col sm:flex-row gap-4">
    <a
      href={`https://wa.me/91${mobile_number}?text=${encodeURIComponent(
        `Hi A2ZDM Team, I'm interested in your ${service.title} service and would like to get started. Please provide more details.`
      )}`}
      target="_blank"
      rel="noopener noreferrer"
      className="btn-primary text-center"
    >
      Get Started Today
    </a>
    
    <a
      href={`https://wa.me/91${mobile_number}?text=${encodeURIComponent(
        `Hi A2ZDM Team, I'd like to schedule a consultation about your ${service.title} service. Please share available time slots.`
      )}`}
      target="_blank"
      rel="noopener noreferrer"
      className="btn-secondary text-center"
    >
      Schedule Consultation
    </a>
  </div>
</motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img
                src={service.heroImage || "/placeholder.svg"}
                alt={service.title}
                className="w-3/4 object-cover mx-auto border border-color shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-8 font-space-grotesk text-color-1">
                What's <span className="gradient-text">Included</span>
              </h2>
              <div className="space-y-4">
                {service.features?.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <FiCheck className="w-5 h-5 accent-cyan flex-shrink-0 mt-1" />
                    <span className="text-color-2">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-8 font-space-grotesk text-color-1">
                Key <span className="gradient-text">Benefits</span>
              </h2>
              <div className="space-y-4">
                {service.benefits?.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <FiArrowRight className="w-5 h-5 accent-cyan flex-shrink-0 mt-1" />
                    <span className="text-color-2">{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
<section className="relative">
  {/* Combined Container */}
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
    <div className="flex flex-col lg:flex-row gap-8 xl:gap-12">
      {/* Process Section (Left) */}
      <motion.div 
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="lg:w-2/3 bg-secondary-color p-6 md:p-8 rounded-lg"
      >
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 font-space-grotesk text-color-1">
            Our <span className="gradient-text">Process</span>
          </h2>
          <p className="text-color-2 md:text-xl max-w-3xl mx-auto">
            A proven methodology that delivers consistent results
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {service.process?.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-4"
            >
              <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-black font-bold text-lg md:text-xl">
                  {step.step}
                </span>
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-2 text-color-1">
                {step.title}
              </h3>
              <p className="text-color-2 text-sm md:text-base leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Case Study Section (Right) */}
      {service.caseStudy && (
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="lg:w-1/3 bg-secondary-color border border-color p-6 md:p-8 rounded-lg"
        >
          <div className="text-center mb-6">
            <h2 className="text-2xl md:text-3xl font-bold mb-2 font-space-grotesk">
              Success <span className="gradient-text">Story</span>
            </h2>
            <p className="text-color-2">Client project highlights</p>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg md:text-xl font-bold mb-3">{service.caseStudy.client}</h3>
              <div className="space-y-3 text-sm md:text-base">
                <div>
                  <h4 className="font-semibold text-color-3">Challenge:</h4>
                  <p className="text-color-2">{service.caseStudy.challenge}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-color-3">Solution:</h4>
                  <p className="text-color-2">{service.caseStudy.solution}</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {service.caseStudy.results?.map((result, i) => (
                <div 
                  key={i} 
                  className="bg-secondary-color border border-color p-3 md:p-4 text-center"
                >
                  <div className="text-lg md:text-xl font-bold text-color-3">
                    {result.improvement}
                  </div>
                  <div className="text-xs md:text-sm text-color-2">
                    {result.metric}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </div>
  </div>
</section>
    </main>
  );
};

export default ServiceDetail;