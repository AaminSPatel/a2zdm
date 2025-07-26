"use client"

import { motion } from "framer-motion"
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
import { FiSearch, FiBarChart, FiTarget, FiDatabase, FiMousePointer, FiArrowRight, FiCheck } from "react-icons/fi"

const Services = () => {
  const serviceCategories = [
    {
      title: "SEO Services",
      icon: <FiSearch className="w-6 sm:w-8 h-6 sm:h-8" />,
      description: "Comprehensive search optimization strategies that drive organic growth",
      gradient: "from-cyan-400 to-blue-500",
      services: [
        { name: "Technical SEO", description: "Site architecture, speed optimization, and crawlability improvements" },
        { name: "Link-Earning", description: "Strategic link building and digital PR campaigns" },
        { name: "PR & Outreach", description: "Brand visibility and authority building through media relations" },
        { name: "Ecommerce SEO", description: "Product optimization and category page strategies" },
        { name: "CBD SEO", description: "Specialized optimization for cannabis and CBD businesses" },
        { name: "Local SEO", description: "Location-based optimization for local businesses" },
      ],
    },
    {
      title: "Digital Analytics",
      icon: <FiBarChart className="w-6 sm:w-8 h-6 sm:h-8" />,
      description: "Advanced analytics setup and data intelligence solutions",
      gradient: "from-blue-500 to-purple-500",
      services: [
        { name: "GA4 Setup", description: "Complete Google Analytics 4 implementation and configuration" },
        { name: "Google Tag Manager", description: "Tag management and tracking implementation" },
        { name: "Adobe Analytics", description: "Enterprise-level analytics setup and optimization" },
        { name: "Conversion Tracking", description: "Goal setup and conversion path analysis" },
      ],
    },
    {
      title: "Performance Marketing",
      icon: <FiTarget className="w-6 sm:w-8 h-6 sm:h-8" />,
      description: "Data-driven marketing campaigns that maximize ROI",
      gradient: "from-purple-500 to-pink-500",
      services: [
        { name: "Cookie Consent", description: "GDPR-compliant cookie management solutions" },
        { name: "Tag Monitoring", description: "Continuous tracking and tag performance monitoring" },
        { name: "Predictive Analytics", description: "AI-powered insights for future performance prediction" },
      ],
    },
    {
      title: "Business Intelligence",
      icon: <FiDatabase className="w-6 sm:w-8 h-6 sm:h-8" />,
      description: "Transform data into actionable business insights",
      gradient: "from-green-400 to-cyan-400",
      services: [
        { name: "Looker Studio", description: "Custom dashboard creation and data visualization" },
        { name: "BigQuery", description: "Data warehouse setup and query optimization" },
        { name: "Power BI", description: "Microsoft Power BI implementation and reporting" },
      ],
    },
    {
      title: "PPC Management",
      icon: <FiMousePointer className="w-6 sm:w-8 h-6 sm:h-8" />,
      description: "Strategic paid advertising campaigns across all platforms",
      gradient: "from-orange-400 to-red-500",
      services: [
        { name: "Pay Per Click", description: "Google Ads, Facebook Ads, and multi-platform PPC management" },
        { name: "Performance Measurement", description: "ROI tracking and campaign optimization" },
        { name: "Case Studies", description: "Proven results from Giggle Tree, TUE, and other clients" },
      ],
    },
  ]

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-primary-color">
        {/* Hero Section */}
        <section className="py-16 sm:py-20 bg-secondary-color">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12 sm:mb-16"
            >
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6 font-space-grotesk text-color-1">
                Our <span className="gradient-text">Services</span>
              </h1>
              <p className="text-lg sm:text-xl text-color-2 max-w-3xl mx-auto">
                Comprehensive digital marketing solutions designed to drive growth, improve performance, and deliver
                measurable results
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-12 sm:space-y-16">
              {serviceCategories.map((category, categoryIndex) => (
                <motion.div
                  key={categoryIndex}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8}}
                  viewport={{ once: true }}
                  className="bg-secondary-color border border-color p-6 sm:p-8"
                >
                  <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6 mb-6 sm:mb-8">
                    <div
                      className={`w-12 sm:w-16 h-12 sm:h-16 bg-gradient-to-r ${category.gradient} flex items-center justify-center text-black flex-shrink-0`}
                    >
                      {category.icon}
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 font-space-grotesk text-color-1">
                        {category.title}
                      </h2>
                      <p className="text-base sm:text-lg text-color-2 mb-4 sm:mb-6">{category.description}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                    {category.services.map((service, serviceIndex) => (
                      <motion.div
                        key={serviceIndex}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="bg-accent-color border border-color p-4 sm:p-6 card-hover group"
                      >
                        <div className="flex items-start space-x-3 mb-3 sm:mb-4">
                          <FiCheck className="w-4 sm:w-5 h-4 sm:h-5 accent-cyan flex-shrink-0 mt-1" />
                          <h3 className="text-base sm:text-lg font-semibold text-color-1 group-hover:accent-cyan ">
                            {service.name}
                          </h3>
                        </div>
                        <p className="text-color-2 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4">
                          {service.description}
                        </p>
                        <div className="flex items-center accent-cyan text-xs sm:text-sm font-semibold group-hover:translate-x-1 transition-transform">
                          Learn More
                          <FiArrowRight className="ml-1 w-3 sm:w-4 h-3 sm:h-4" />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary-color">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-space-grotesk text-color-1">
                Ready to Transform Your Digital Presence?
              </h2>
              <p className="text-xl text-color-2 mb-8">
                Let's discuss which services align with your business goals and create a custom strategy for your
                success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="btn-primary">Get Free Consultation</button>
                <button className="btn-secondary">View Case Studies</button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

export default Services
