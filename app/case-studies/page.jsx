"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
import { FiArrowRight, FiCalendar, FiTag } from "react-icons/fi"

const CaseStudies = () => {
  const caseStudies = [
    {
      id: 1,
      title: "E-commerce Growth: 340% Revenue Increase",
      client: "TechGear Store",
      industry: "E-commerce",
      challenge: "Low organic traffic and poor conversion rates were limiting growth potential",
      solution: "Comprehensive SEO strategy combined with conversion rate optimization and performance marketing",
      duration: "8 months",
      image: "/ecomseo.jpg",
      results: [
        { metric: "Revenue Growth", value: "+340%", color: "text-green-400" },
        { metric: "Organic Traffic", value: "+280%", color: "text-cyan-400" },
        { metric: "Conversion Rate", value: "+156%", color: "text-blue-400" },
        { metric: "ROAS", value: "4.2x", color: "text-purple-400" },
      ],
      services: ["Technical SEO", "Performance Marketing", "Analytics Setup"],
      testimonial: {
        quote:
          "The results exceeded our expectations. Our revenue has more than tripled, and we're now the market leader in our niche.",
        author: "Sarah Johnson",
        position: "CEO, TechGear Store",
      },
    },
    {
      id: 2,
      title: "SaaS Platform: 500% Lead Generation Boost",
      client: "CloudSync Solutions",
      industry: "SaaS",
      challenge: "Struggling to generate qualified leads and compete with established players",
      solution: "Content marketing strategy, technical SEO, and advanced analytics implementation",
      duration: "6 months",
      image: "/ecomseo.jpg",
      results: [
        { metric: "Qualified Leads", value: "+500%", color: "text-green-400" },
        { metric: "Organic Rankings", value: "+245%", color: "text-cyan-400" },
        { metric: "Trial Conversions", value: "+180%", color: "text-blue-400" },
        { metric: "Customer LTV", value: "+120%", color: "text-purple-400" },
      ],
      services: ["Content Strategy", "Technical SEO", "GA4 Setup"],
      testimonial: {
        quote:
          "A2ZDM transformed our digital presence. We went from struggling to get leads to having a consistent pipeline of qualified prospects.",
        author: "Michael Chen",
        position: "Founder, CloudSync Solutions",
      },
    },
    {
      id: 3,
      title: "Local Service Business: Market Domination",
      client: "Elite Home Services",
      industry: "Local Services",
      challenge: "Invisible in local search results with high customer acquisition costs",
      solution: "Local SEO optimization, Google My Business enhancement, and targeted PPC campaigns",
      duration: "4 months",
      image: "/a&i.jpg",
      results: [
        { metric: "Local Rankings", value: "#1 Position", color: "text-green-400" },
        { metric: "Phone Calls", value: "+420%", color: "text-cyan-400" },
        { metric: "Cost Per Lead", value: "-65%", color: "text-blue-400" },
        { metric: "Revenue Growth", value: "+290%", color: "text-purple-400" },
      ],
      services: ["Local SEO", "PPC Management", "Reputation Management"],
      testimonial: {
        quote:
          "We now dominate our local market. Our phone rings constantly with qualified leads, and our revenue has nearly tripled.",
        author: "David Rodriguez",
        position: "Owner, Elite Home Services",
      },
    },
    {
      id: 4,
      title: "B2B Manufacturing: Digital Transformation",
      client: "Precision Parts Co.",
      industry: "Manufacturing",
      challenge: "Outdated digital presence with minimal online lead generation",
      solution: "Complete digital overhaul including technical SEO, content marketing, and advanced analytics",
      duration: "10 months",
      image: "/gtm.jpg",
      results: [
        { metric: "Online Inquiries", value: "+380%", color: "text-green-400" },
        { metric: "Organic Visibility", value: "+220%", color: "text-cyan-400" },
        { metric: "Sales Cycle", value: "-40%", color: "text-blue-400" },
        { metric: "Deal Size", value: "+85%", color: "text-purple-400" },
      ],
      services: ["Technical SEO", "Content Marketing", "Analytics Setup"],
      testimonial: {
        quote:
          "A2ZDM helped us transition from traditional sales to a modern, data-driven approach. Our online presence now generates significant business.",
        author: "Jennifer Walsh",
        position: "Marketing Director, Precision Parts Co.",
      },
    },
    {
      id: 5,
      title: "Healthcare Practice: Patient Acquisition Success",
      client: "Advanced Dental Care",
      industry: "Healthcare",
      challenge: "Difficulty attracting new patients in a competitive market",
      solution: "Local SEO, reputation management, and targeted advertising campaigns",
      duration: "5 months",
      image: "/link.jpg",
      results: [
        { metric: "New Patients", value: "+250%", color: "text-green-400" },
        { metric: "Online Reviews", value: "+400%", color: "text-cyan-400" },
        { metric: "Appointment Bookings", value: "+180%", color: "text-blue-400" },
        { metric: "Practice Revenue", value: "+160%", color: "text-purple-400" },
      ],
      services: ["Local SEO", "Reputation Management", "PPC Management"],
      testimonial: {
        quote:
          "Our practice has never been busier. We've had to expand our team to handle all the new patients coming through our digital channels.",
        author: "Dr. Amanda Foster",
        position: "Owner, Advanced Dental Care",
      },
    },
    {
      id: 6,
      title: "Startup Success: From Zero to Market Leader",
      client: "GreenTech Innovations",
      industry: "Clean Technology",
      challenge: "New company with no online presence or brand recognition",
      solution: "Complete digital marketing strategy from ground up including SEO, content, and performance marketing",
      duration: "12 months",
      image: "/pcm.jpg",
      results: [
        { metric: "Brand Awareness", value: "+1200%", color: "text-green-400" },
        { metric: "Website Traffic", value: "+850%", color: "text-cyan-400" },
        { metric: "Lead Quality", value: "+300%", color: "text-blue-400" },
        { metric: "Market Share", value: "15%", color: "text-purple-400" },
      ],
      services: ["Brand Strategy", "SEO", "Content Marketing", "PPC"],
      testimonial: {
        quote:
          "A2ZDM didn't just help us grow - they helped us become the recognized leader in our industry in just one year.",
        author: "Robert Kim",
        position: "CEO, GreenTech Innovations",
      },
    },
  ]

  return (
    <>

      <main className="min-h-screen bg-primary-color">
        {/* Hero Section */}
        <section className="py-20 bg-secondary-color">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6 font-space-grotesk text-color-1">
                Success <span className="gradient-text">Stories</span>
              </h1>
              <p className="text-xl text-color-2 max-w-3xl mx-auto">
                Real results from real businesses. See how we've helped companies across industries achieve remarkable
                growth through data-driven digital marketing strategies.
              </p>
            </motion.div>

            {/* Stats Overview */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
            >
              {[
                { value: "50+", label: "Success Stories" },
                { value: "340%", label: "Avg. Revenue Growth" },
                { value: "98%", label: "Client Retention" },
                { value: "24/7", label: "Support Available" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold accent-cyan mb-2">{stat.value}</div>
                  <div className="text-color-2">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-16">
              {caseStudies.map((study, index) => (
                <motion.div
                  key={study.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-secondary-color border border-color overflow-hidden"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                    {/* Image */}
                    <div className="relative">
                      <img
                        src={study.image || "/placeholder.svg"}
                        alt={study.title}
                        className="w-full h-64 lg:h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/20 to-blue-900/20"></div>
                      <div className="absolute top-4 left-4">
                        <span className="bg-accent-cyan text-black px-3 py-1 text-sm font-semibold">
                          {study.industry}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-8">
                      <div className="flex items-center space-x-4 mb-4">
                        <FiCalendar className="w-4 h-4 text-color-2" />
                        <span className="text-sm text-color-2">{study.duration} project</span>
                        <FiTag className="w-4 h-4 text-color-2" />
                        <span className="text-sm text-color-2">{study.client}</span>
                      </div>

                      <h2 className="text-2xl md:text-3xl font-bold mb-4 font-space-grotesk text-color-1">
                        {study.title}
                      </h2>

                      <div className="space-y-4 mb-6">
                        <div>
                          <h3 className="font-semibold accent-cyan mb-2">Challenge:</h3>
                          <p className="text-color-2 text-sm">{study.challenge}</p>
                        </div>
                        <div>
                          <h3 className="font-semibold accent-cyan mb-2">Solution:</h3>
                          <p className="text-color-2 text-sm">{study.solution}</p>
                        </div>
                      </div>

                      {/* Results Grid */}
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        {study.results.map((result, resultIndex) => (
                          <div key={resultIndex} className="bg-accent-color border border-color p-4 text-center">
                            <div className={`text-2xl font-bold ${result.color} mb-1`}>{result.value}</div>
                            <div className="text-xs text-color-2">{result.metric}</div>
                          </div>
                        ))}
                      </div>

                      {/* Services Used */}
                      <div className="mb-6">
                        <h3 className="font-semibold text-color-1 mb-2">Services Used:</h3>
                        <div className="flex flex-wrap gap-2">
                          {study.services.map((service, serviceIndex) => (
                            <span
                              key={serviceIndex}
                              className="bg-cyan-400/10 border border-cyan-400/30 px-3 py-1 text-xs accent-cyan"
                            >
                              {service}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Testimonial */}
                      <div className="bg-accent-color border-l-4 border-cyan-400 p-4 mb-6">
                        <p className="text-color-2 italic mb-3">"{study.testimonial.quote}"</p>
                        <div className="text-sm">
                          <div className="font-semibold text-color-1">{study.testimonial.author}</div>
                          <div className="text-color-2">{study.testimonial.position}</div>
                        </div>
                      </div>

                      <Link
                        href={`/case-studies/${study.id}`}
                        className="inline-flex items-center space-x-2 accent-cyan hover:text-cyan-300 transition-colors font-semibold"
                      >
                        <span>Read Full Case Study</span>
                        <FiArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries We Serve */}
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
                Industries We <span className="gradient-text">Serve</span>
              </h2>
              <p className="text-xl text-color-2 max-w-3xl mx-auto">
                Our proven strategies work across diverse industries and business models
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {[
                { name: "E-commerce", icon: "🛒" },
                { name: "SaaS", icon: "💻" },
                { name: "Healthcare", icon: "🏥" },
                { name: "Manufacturing", icon: "🏭" },
                { name: "Local Services", icon: "🔧" },
                { name: "Clean Tech", icon: "🌱" },
              ].map((industry, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-accent-color border border-color p-6 text-center card-hover"
                >
                  <div className="text-3xl mb-3">{industry.icon}</div>
                  <div className="text-color-1 font-semibold">{industry.name}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-accent-color">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-space-grotesk text-color-1">
                Ready to Write Your Success Story?
              </h2>
              <p className="text-xl text-color-2 mb-8">
                Join the growing list of businesses that have transformed their growth with our proven strategies
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="btn-primary">Start Your Transformation</button>
                <Link href="/services" className="btn-secondary">
                  Explore Our Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

    </>
  )
}

export default CaseStudies
