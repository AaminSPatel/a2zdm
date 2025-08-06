"use client";

import { motion } from "framer-motion";
import { FiArrowRight, FiExternalLink, FiAward, FiArrowLeft } from "react-icons/fi";
import { FaChartLine, FaSearch, FaShoppingCart, FaMobileAlt, FaUsers, FaClock } from "react-icons/fa";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useTech } from "@/components/TechContext";
import Head from "next/head";

const CaseStudyDetail = () => {
  const params = useParams();
  const { slug } = params;
  const { caseStudies } = useTech();

  // Find the case study by slug
  const caseStudy = caseStudies.find(study => study.slug === slug);

  if (!caseStudy) {
    return (
      <div className="min-h-screen bg-primary-color flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4 text-color-1">Case Study Not Found</h1>
          <p className="text-color-2 mb-6">The requested case study could not be found.</p>
          <Link href="/case-studies" className="btn-primary inline-flex items-center gap-2">
            <FiArrowLeft className="w-4 h-4" />
            Back to Case Studies
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>{caseStudy.client} Case Study | A2ZDM Private Limited</title>
        <meta name="description" content={caseStudy.overview} />
        <meta property="og:title" content={`${caseStudy.client} Case Study | A2ZDM`} />
        <meta property="og:description" content={caseStudy.overview} />
        <meta property="og:image" content={caseStudy.image} />
        <meta property="og:url" content={`https://yourdomain.com/case-studies/${slug}`} />
        
        {/* Schema.org markup */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CaseStudy",
            "name": caseStudy.title,
            "description": caseStudy.overview,
            "about": {
              "@type": "Thing",
              "name": caseStudy.client
            },
            "url": `https://yourdomain.com/case-studies/${slug}`,
            "datePublished": caseStudy.datePublished || "2023-01-01",
            "image": caseStudy.image,
            "author": {
              "@type": "Organization",
              "name": "A2ZDM Private Limited"
            },
            "publisher": {
              "@type": "Organization",
              "name": "A2ZDM Private Limited",
              "logo": {
                "@type": "ImageObject",
                "url": "https://yourdomain.com/logo.png"
              }
            }
          })}
        </script>
      </Head>

      <div className="bg-primary-color">
        {/* Back Navigation */}
        <section className="py-6 bg-secondary-color border-b border-color">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              href="/case-studies"
              className="inline-flex items-center space-x-2 accent-cyan hover:text-cyan-300 transition-colors"
            >
              <FiArrowLeft className="w-4 h-4" />
              <span>Back to Case Studies</span>
            </Link>
          </div>
        </section>

        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-cyan-900/30 to-blue-900/30">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div 
              className="flex flex-col lg:flex-row gap-12 items-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Logo and Basic Info */}
              <div className="lg:w-1/2">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-20 h-20 bg-white p-4 rounded-lg shadow-lg flex items-center justify-center">
                    <img src={caseStudy.logo} alt={`${caseStudy.client} logo`} className="max-w-full max-h-full object-contain" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-color-1">{caseStudy.client}</h2>
                    <a 
                      href={caseStudy.website} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-cyan-400 hover:text-cyan-300 transition-colors text-sm"
                    >
                      Visit Website <FiExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
                
                <h3 className="text-2xl text-cyan-400 mb-6">{caseStudy.title}</h3>
                <p className="text-lg text-color-2 mb-8">{caseStudy.overview}</p>
                
                {/* Results */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {caseStudy.results.map((result, i) => (
                    <div key={i} className="bg-primary-color/50 border border-color p-4 rounded-lg">
                      <div className="text-cyan-400 mb-2">{result.icon}</div>
                      <div className="text-2xl font-bold text-color-1 mb-1">{result.value}</div>
                      <div className="text-sm text-color-2">{result.metric}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Main Image */}
              <div className="lg:w-1/2 relative">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <img 
                    src={caseStudy.image} 
                    alt={caseStudy.title} 
                    className="w-full rounded-xl shadow-2xl border border-color"
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* AI Showcase (if available) */}
        {caseStudy.aiShowcase && (
          <section className="py-16 bg-gradient-to-r from-cyan-900/20 to-blue-900/20">
            <div className="max-w-7xl mx-auto px-6">
              <motion.div 
                className="flex flex-col md:flex-row gap-8 items-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="md:w-1/2">
                  <h3 className="text-2xl font-bold mb-4 text-white">Featured in Google's AI Overview</h3>
                  <p className="text-cyan-100 mb-6">
                    When users searched <strong>"{caseStudy.aiShowcase.query}"</strong>, Google's AI cited {caseStudy.client} as a trusted expert.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/10 p-4 rounded-lg">
                      <div className="text-cyan-400 text-xl font-bold">AI-Cited</div>
                      <div className="text-cyan-100 text-sm">Authority Status</div>
                    </div>
                    <div className="bg-white/10 p-4 rounded-lg">
                      <div className="text-cyan-400 text-xl font-bold">Top Result</div>
                      <div className="text-cyan-100 text-sm">Above Competitors</div>
                    </div>
                  </div>
                </div>
                <div className="md:w-1/2 bg-white p-2 rounded-lg shadow-xl">
                  <img 
                    src={caseStudy.aiShowcase.screenshot} 
                    alt={`${caseStudy.client} in Google AI Overview`}
                    className="rounded-md"
                  />
                </div>
              </motion.div>
            </div>
          </section>
        )}

        {/* Challenge & Solution */}
        <section className="py-20 bg-secondary-color">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div 
              className="grid md:grid-cols-2 gap-8 mb-16"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="bg-primary-color border border-color p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-6 text-color-1 flex items-center gap-3">
                  <span className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white text-sm">!</span>
                  The Challenge
                </h3>
                <p className="text-color-2 text-lg">{caseStudy.challenge}</p>
              </div>
              <div className="bg-primary-color border border-color p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-6 text-color-1 flex items-center gap-3">
                  <span className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-sm">✓</span>
                  Our Solution
                </h3>
                <p className="text-color-2 text-lg">{caseStudy.solution}</p>
              </div>
            </motion.div>

            {/* Strategy */}
            <motion.div 
              className="mb-20"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold mb-12 text-color-1 text-center">Key Strategies Implemented</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {caseStudy.strategy.map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-primary-color/50 border border-color p-8 rounded-xl hover:border-cyan-400/50 transition-colors"
                  >
                    <h4 className="text-xl font-semibold mb-4 text-color-1">{item.title}</h4>
                    <p className="text-color-2">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Testimonial */}
            <motion.div 
              className="bg-gradient-to-r from-cyan-900/20 to-blue-900/20 border-l-4 border-cyan-400 p-12 rounded-r-lg"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <blockquote className="text-2xl italic text-color-1 mb-8">"{caseStudy.testimonial.quote}"</blockquote>
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 bg-cyan-400 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  {caseStudy.testimonial.author.split(' ').map(name => name[0]).join('')}
                </div>
                <div>
                  <div className="font-bold text-xl text-color-1">{caseStudy.testimonial.author}</div>
                  <div className="text-color-2">{caseStudy.testimonial.position}</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CaseStudyDetail;