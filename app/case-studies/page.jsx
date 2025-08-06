"use client";

import { motion } from "framer-motion";
import { FiArrowRight, FiExternalLink, FiAward } from "react-icons/fi";
import Link from "next/link";
import { useTech } from "@/components/TechContext";
import Head from "next/head";

const CaseStudies = () => {
  const { caseStudies } = useTech();
  const siteUrl = "https://yourdomain.com"; // Replace with your actual domain

  return (
    <>
      <Head>
        <title>Success Stories | A2ZDM Private Limited</title>
        <meta name="description" content="Explore our portfolio of successful digital transformations that helped businesses achieve remarkable growth and visibility." />
        <meta name="keywords" content="case studies, success stories, digital transformation, SEO results, marketing success" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Success Stories | A2ZDM Private Limited" />
        <meta property="og:description" content="Explore our portfolio of successful digital transformations" />
        <meta property="og:image" content={`${siteUrl}/case-study-og-image.jpg`} />
        <meta property="og:url" content={`${siteUrl}/case-studies`} />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Success Stories | A2ZDM Private Limited" />
        <meta name="twitter:description" content="Explore our portfolio of successful digital transformations" />
        <meta name="twitter:image" content={`${siteUrl}/case-study-twitter-image.jpg`} />
        
        {/* Canonical */}
        <link rel="canonical" href={`${siteUrl}/case-studies`} />
        
        {/* Schema.org */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "Case Studies",
            "description": "Collection of successful digital transformation case studies",
            "url": `${siteUrl}/case-studies`,
            "numberOfItems": caseStudies.length,
            "itemListElement": caseStudies.map((study, index) => ({
              "@type": "ListItem",
              "position": index + 1,
              "item": {
                "@type": "CaseStudy",
                "name": study.title,
                "url": `${siteUrl}/case-studies/${study.slug}`,
                "image": study.image,
                "about": study.client
              }
            }))
          })}
        </script>
      </Head>

      <div className="bg-primary-color">
        {/* Hero Section */}
        {/* Background Image with Overlay */}
          <div className="absolute inset-0">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-30"
              style={{
                backgroundImage: `linear-gradient(rgba(8, 47, 73, 0.7), rgba(8, 47, 73, 0.7)), url('/pcm.jpg')`,
              }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/30 via-transparent to-blue-900/30"></div>
          </div>
        <section className="relative h-[90vh] max-h-[800px] flex items-center justify-center bg-gradient-to-br from-cyan-900/30 to-blue-900/30 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/case-study-hero-bg.jpg')] bg-cover bg-center opacity-30"></div>
          <motion.div 
            className="relative max-w-7xl px-6 text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 font-space-grotesk text-white">
              Digital <span className="gradient-text">Success</span> Stories
            </h1>
            <p className="text-xl text-cyan-100 max-w-3xl mx-auto mb-8">
              How we helped visionary brands achieve remarkable growth through strategic digital transformation
            </p>
          </motion.div>
        </section>

        {/* Case Studies List */}
        <section className="py-20 bg-secondary-color">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 gap-16"
            >
              {caseStudies.map((study) => (
                <motion.div
                  key={study.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="group"
                >
                  <Link href={`/case-studies/${study.slug}`} className="block">
                    <div className="relative overflow-hidden rounded-2xl shadow-2xl h-[500px] lg:h-[600px] w-full">
                      {/* Background Image */}
                      <img 
                        src={study.image} 
                        alt={study.title} 
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/80 to-black/50"></div>
                      
                      {/* Content Container */}
                      <div className="absolute inset-0 flex flex-col justify-end p-8 lg:p-12">
                        {/* Client Logo */}
                        <div className="absolute top-8 right-8 bg-white p-4 rounded-xl shadow-xl w-20 h-20 lg:w-24 lg:h-24 flex items-center justify-center">
                          <img 
                            src={study.logo} 
                            alt={`${study.client} logo`} 
                            className="max-w-full max-h-full object-contain"
                          />
                        </div>
                        
                        {/* Tags */}
                        <div className="flex flex-wrap gap-3 mb-4">
                          <span className="bg-cyan-400/20 text-cyan-400 px-4 py-2 text-sm font-medium rounded-full">
                            Case Study
                          </span>
                          <span className="bg-white/20 text-white px-4 py-2 text-sm font-medium rounded-full">
                            {study.category || "Digital Transformation"}
                          </span>
                        </div>
                        
                        {/* Main Content */}
                        <div className="space-y-4">
                          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-2">
                            {study.client}
                          </h2>
                          <h3 className="text-xl lg:text-2xl text-cyan-400 mb-4">
                            {study.title}
                          </h3>
                          <p className="text-lg text-white/90 mb-6 line-clamp-3">
                            {study.overview}
                          </p>
                          
                          {/* Results Preview */}
                          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                            {study.results.slice(0, 3).map((result, i) => (
                              <div 
                                key={i} 
                                className="bg-white/10 backdrop-blur-sm border border-white/10 p-4 rounded-xl"
                              >
                                <div className="flex items-center gap-2">
                                  <div className="text-cyan-400">{result.icon}</div>
                                  <div className="text-xl font-bold text-white">{result.value}</div>
                                </div>
                                <div className="text-sm text-white/80 mt-1">{result.metric}</div>
                              </div>
                            ))}
                          </div>
                          
                          {/* CTA */}
                          <div className="flex items-center gap-2 text-lg font-medium text-cyan-400 group-hover:text-cyan-300 transition-colors">
                            <span>View Full Case Study</span>
                            <FiArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CaseStudies;