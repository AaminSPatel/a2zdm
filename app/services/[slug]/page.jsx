"use client"

import { useParams } from "next/navigation"
import { motion } from "framer-motion"
import Link from "next/link"
import Navbar from "../../../components/Navbar"
import Footer from "../../../components/Footer"
import { FiArrowLeft, FiCheck, FiArrowRight, FiSearch, FiBarChart, FiMousePointer } from "react-icons/fi"

const ServiceDetail = () => {
  const params = useParams()
  const { slug } = params

  // Service data mapping
  const servicesData = {
    "technical-seo": {
      title: "Technical SEO",
      category: "SEO Services",
      icon: <FiSearch className="w-8 h-8" />,
      heroImage: "/techseo.jpg",
      description:
        "Comprehensive technical SEO optimization to improve your website's crawlability, indexability, and search engine performance.",
      longDescription:
        "Our technical SEO services focus on the foundation of your website's search performance. We conduct thorough audits, fix technical issues, and implement best practices to ensure search engines can easily crawl, understand, and index your content.",
      features: [
        "Complete Technical SEO Audit",
        "Site Speed Optimization",
        "Mobile-First Indexing Setup",
        "Schema Markup Implementation",
        "XML Sitemap Optimization",
        "Robots.txt Configuration",
        "Core Web Vitals Improvement",
        "Internal Linking Strategy",
      ],
      benefits: [
        "Improved search engine rankings",
        "Better user experience",
        "Faster page load times",
        "Enhanced mobile performance",
        "Increased organic traffic",
        "Better crawl efficiency",
      ],
      process: [
        {
          step: "1",
          title: "Technical Audit",
          description: "Comprehensive analysis of your website's technical health and performance.",
        },
        {
          step: "2",
          title: "Issue Identification",
          description: "Detailed report of technical issues affecting your SEO performance.",
        },
        {
          step: "3",
          title: "Implementation",
          description: "Strategic fixes and optimizations based on audit findings.",
        },
        {
          step: "4",
          title: "Monitoring",
          description: "Ongoing monitoring and maintenance to ensure optimal performance.",
        },
      ],
      pricing: {
        starter: { price: "$999", features: ["Basic Technical Audit", "Core Issues Fix", "Monthly Report"] },
        professional: {
          price: "$1,999",
          features: ["Complete Technical Audit", "All Issues Fix", "Schema Implementation", "Weekly Reports"],
        },
        enterprise: {
          price: "$3,999",
          features: ["Advanced Technical Audit", "Custom Solutions", "Priority Support", "Daily Monitoring"],
        },
      },
      caseStudy: {
        client: "E-commerce Store",
        challenge: "Poor site performance and low search rankings",
        solution: "Complete technical SEO overhaul including speed optimization and mobile improvements",
        results: [
          { metric: "Page Load Time", improvement: "-65%" },
          { metric: "Organic Traffic", improvement: "+180%" },
          { metric: "Search Rankings", improvement: "+45 positions" },
        ],
      },
    },
    "ga4-setup": {
      title: "GA4 Setup & Configuration",
      category: "Digital Analytics",
      icon: <FiBarChart className="w-8 h-8" />,
      heroImage: "/ga4.jpg",
      description:
        "Complete Google Analytics 4 implementation and configuration for comprehensive data tracking and insights.",
      longDescription:
        "Our GA4 setup service ensures you're ready for the future of analytics. We handle the complete migration from Universal Analytics, set up enhanced ecommerce tracking, and configure custom events to give you deeper insights into user behavior.",
      features: [
        "Complete GA4 Property Setup",
        "Enhanced Ecommerce Configuration",
        "Custom Event Tracking",
        "Conversion Goal Setup",
        "Audience Configuration",
        "Custom Reports Creation",
        "Data Studio Integration",
        "Cross-Domain Tracking",
      ],
      benefits: [
        "Future-proof analytics setup",
        "Better user journey insights",
        "Enhanced ecommerce tracking",
        "Improved conversion tracking",
        "Cross-platform data unification",
        "Advanced audience insights",
      ],
      process: [
        {
          step: "1",
          title: "Current Setup Audit",
          description: "Analysis of your existing analytics setup and data requirements.",
        },
        {
          step: "2",
          title: "GA4 Configuration",
          description: "Complete setup of GA4 property with custom events and conversions.",
        },
        {
          step: "3",
          title: "Testing & Validation",
          description: "Thorough testing to ensure accurate data collection.",
        },
        {
          step: "4",
          title: "Training & Handover",
          description: "Team training and documentation for ongoing management.",
        },
      ],
      pricing: {
        starter: { price: "$799", features: ["Basic GA4 Setup", "Standard Events", "Basic Reports"] },
        professional: {
          price: "$1,499",
          features: ["Complete GA4 Setup", "Custom Events", "Enhanced Ecommerce", "Custom Reports"],
        },
        enterprise: {
          price: "$2,999",
          features: ["Advanced GA4 Setup", "Custom Dimensions", "BigQuery Integration", "Advanced Training"],
        },
      },
      caseStudy: {
        client: "SaaS Platform",
        challenge: "Limited visibility into user behavior and conversion paths",
        solution: "Complete GA4 implementation with custom event tracking and funnel analysis",
        results: [
          { metric: "Data Accuracy", improvement: "+95%" },
          { metric: "Conversion Insights", improvement: "+200%" },
          { metric: "User Journey Clarity", improvement: "+150%" },
        ],
      },
    },
    "ppc-management": {
      title: "PPC Campaign Management",
      category: "Performance Marketing",
      icon: <FiMousePointer className="w-8 h-8" />,
      heroImage: "./pcm.jpg",
      description:
        "Strategic paid advertising campaigns across Google Ads, Facebook, and other platforms to maximize ROI.",
      longDescription:
        "Our PPC management service combines strategic planning, precise targeting, and continuous optimization to deliver maximum return on your advertising investment. We manage campaigns across all major platforms with a focus on performance and profitability.",
      features: [
        "Multi-Platform Campaign Management",
        "Advanced Keyword Research",
        "Ad Copy Creation & Testing",
        "Landing Page Optimization",
        "Bid Strategy Optimization",
        "Audience Targeting & Segmentation",
        "Conversion Tracking Setup",
        "Performance Reporting",
      ],
      benefits: [
        "Increased qualified leads",
        "Better cost per acquisition",
        "Higher conversion rates",
        "Improved brand visibility",
        "Scalable growth",
        "Detailed performance insights",
      ],
      process: [
        {
          step: "1",
          title: "Strategy Development",
          description: "Comprehensive analysis and campaign strategy development.",
        },
        {
          step: "2",
          title: "Campaign Setup",
          description: "Professional campaign creation with optimized targeting and ad copy.",
        },
        {
          step: "3",
          title: "Launch & Monitor",
          description: "Campaign launch with continuous monitoring and real-time adjustments.",
        },
        {
          step: "4",
          title: "Optimize & Scale",
          description: "Ongoing optimization and scaling based on performance data.",
        },
      ],
      pricing: {
        starter: { price: "$1,299", features: ["Single Platform", "Basic Optimization", "Monthly Reports"] },
        professional: {
          price: "$2,499",
          features: ["Multi-Platform", "Advanced Optimization", "Weekly Reports", "Landing Page Optimization"],
        },
        enterprise: {
          price: "$4,999",
          features: ["Full-Service Management", "Custom Strategies", "Daily Monitoring", "Dedicated Account Manager"],
        },
      },
      caseStudy: {
        client: "Local Service Business",
        challenge: "High cost per lead and low conversion rates from paid ads",
        solution: "Complete PPC strategy overhaul with improved targeting and landing page optimization",
        results: [
          { metric: "Cost Per Lead", improvement: "-58%" },
          { metric: "Conversion Rate", improvement: "+240%" },
          { metric: "ROAS", improvement: "+320%" },
        ],
      },
    },
  }

  const service = servicesData[slug] || servicesData["technical-seo"]

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-primary-color">
        {/* Back Navigation */}
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
                    {service.icon}
                  </div>
                  <span className="text-cyan-400 font-semibold">{service.category}</span>
                </div>

                <h1 className="text-4xl md:text-5xl font-bold mb-6 font-space-grotesk text-color-1">{service.title}</h1>

                <p className="text-xl text-color-2 mb-8 leading-relaxed">{service.description}</p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="btn-primary">Get Started Today</button>
                  <button className="btn-secondary">Schedule Consultation</button>
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
                  className="w-full h-80 object-cover border border-color shadow-2xl"
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
                  {service.features.map((feature, index) => (
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
                  {service.benefits.map((benefit, index) => (
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

        {/* Process */}
        <section className="py-20 bg-secondary-color">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6 font-space-grotesk text-color-1">
                Our <span className="gradient-text">Process</span>
              </h2>
              <p className="text-xl text-color-2 max-w-3xl mx-auto">
                A proven methodology that delivers consistent results
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {service.process.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-black font-bold text-xl">{step.step}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-color-1">{step.title}</h3>
                  <p className="text-color-2 text-sm leading-relaxed">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Study */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-secondary-color border border-color p-8"
            >
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-6 font-space-grotesk text-color-1">
                  Success <span className="gradient-text">Story</span>
                </h2>
                <p className="text-xl text-color-2">Real results from a recent client project</p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-color-1">{service.caseStudy.client}</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold  mb-2 text-color-3">Challenge:</h4>
                      <p className="text-color-2">{service.caseStudy.challenge}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold  mb-2 text-color-3">Solution:</h4>
                      <p className="text-color-2">{service.caseStudy.solution}</p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-6">
                  {service.caseStudy.results.map((result, index) => (
                    <div key={index} className="bg-secondary-color border border-color p-6 text-center">
                      <div className="text-3xl font-bold text-color-3 mb-2">{result.improvement}</div>
                      <div className="text-color-2">{result.metric}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-20 bg-secondary-color">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6 font-space-grotesk text-color-1">
                Choose Your <span className="gradient-text">Plan</span>
              </h2>
              <p className="text-xl text-color-2">Flexible pricing options to fit your needs</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {Object.entries(service.pricing).map(([plan, details], index) => (
                <motion.div
                  key={plan}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`bg-accent-color  backdrop-opacity-60 backdrop-blur-lg border border-color p-8 text-center ${
                    plan === "professional" ? "border-cyan-400 relative" : ""
                  }`}
                >
                  {plan === "professional" && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-cyan-400 text-black px-4 py-1 text-sm font-semibold">
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-2xl font-bold mb-4 text-color-1 capitalize">{plan}</h3>
                  <div className="text-4xl font-bold  text-color-3 mb-6 comforta">{details.price}</div>
                  <div className="space-y-3 mb-8 min-h-28 ">
                    {details.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <FiCheck className="w-4 h-4 accent-cyan flex-shrink-0" />
                        <span className="text-color-3 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <button className={plan === "professional" ? "btn-primary w-full" : " btn-secondary w-full"}>
                    Get Started
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-primary-color">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-space-grotesk text-color-1">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-color-2 mb-8">
                Let's discuss how {service.title.toLowerCase()} can transform your business
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="btn-primary">Schedule Free Consultation</button>
                <Link href="/case-studies" className="btn-secondary">
                  View More Case Studies
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

export default ServiceDetail
