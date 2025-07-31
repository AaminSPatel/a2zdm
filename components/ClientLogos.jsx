"use client"

import { motion } from "framer-motion"
import Link from "next/link"

const ClientLogos = () => {
  // Mock client logos - in real implementation, these would be actual logo images
  const clients = [
    { name: "TechStart Solutions", logo: "/placeholder.svg?height=60&width=120&text=TechStart" },
    { name: "E-Commerce Plus", logo: "/placeholder.svg?height=60&width=120&text=E-Commerce+" },
    { name: "Digital Dynamics", logo: "/placeholder.svg?height=60&width=120&text=Digital+Dynamics" },
    { name: "Growth Labs", logo: "/placeholder.svg?height=60&width=120&text=Growth+Labs" },
    { name: "Market Masters", logo: "/placeholder.svg?height=60&width=120&text=Market+Masters" },
    { name: "Data Driven Co", logo: "/placeholder.svg?height=60&width=120&text=Data+Driven" },
    { name: "Scale Solutions", logo: "/placeholder.svg?height=60&width=120&text=Scale+Solutions" },
    { name: "Performance Pro", logo: "/placeholder.svg?height=60&width=120&text=Performance+Pro" },
  ]

  return (
    <section className="py-16 sm:py-20 bg-secondary-color">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 font-space-grotesk text-color-1">
            Who We <span className="gradient-text">Work With</span>
          </h2>
          <p className="text-lg sm:text-xl text-color-2 max-w-4xl mx-auto">
            Trusted by growth-focused businesses seeking smarter marketing, better analytics, and lasting digital
            impact.
          </p>
        </motion.div>

        {/* Client Logos Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16"
        >
          {clients.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center justify-center p-4 sm:p-6 bg-accent-color border border-color hover:border-cyan-400/50 transition-all duration-300 group"
            >
              <img
                src={client.logo || "/placeholder.svg"}
                alt={client.name}
                className="max-w-full h-8 sm:h-12 object-contain opacity-70 group-hover:opacity-100 transition-opacity filter grayscale group-hover:grayscale-0"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Industry Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 text-center mb-12 sm:mb-16"
        >
          <div className="bg-primary-color border border-color p-4 sm:p-6">
            <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🛒</span>
            </div>
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 accent-cyan">E-Commerce</h3>
            <p className="text-color-2 text-xs sm:text-sm">
              Specialized SEO and analytics for online stores, marketplaces, and digital products
            </p>
          </div>
          <div className="bg-primary-color border border-color p-4 sm:p-6">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🔧</span>
            </div>
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-blue-400">Local Services</h3>
            <p className="text-color-2 text-xs sm:text-sm">
              Local SEO and performance marketing for service-based businesses and franchises
            </p>
          </div>
          <div className="bg-primary-color border border-color p-4 sm:p-6">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">💻</span>
            </div>
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-purple-400">SaaS & Tech</h3>
            <p className="text-color-2 text-xs sm:text-sm">
              Advanced analytics and growth marketing for software and technology companies
            </p>
          </div>
        </motion.div>

        {/* Partnership CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-cyan-400/10 to-blue-500/10 border border-cyan-400/30 p-6 sm:p-8 max-w-2xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 font-space-grotesk text-color-1">
              Ready to Join Our Success Stories?
            </h3>
            <p className="text-color-2 mb-4 sm:mb-6 text-sm sm:text-base">
              Let's discuss how we can help your business achieve similar results with our proven strategies.
            </p>
             <Link href={'/case-studies'} className="btn-primary">Start Your Growth Journey</Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ClientLogos
