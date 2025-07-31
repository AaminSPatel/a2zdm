"use client"

import { motion, useAnimation, useInView } from "framer-motion"
import Link from "next/link"
import { useEffect, useRef } from "react"

const ClientLogos = () => {
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const clients = [
    { name: "Alphard Golf", logo: "/clients/c1.png" },
    { name: "Popticals", logo: "/clients/c2.png" },
    { name: "Airhub App", logo: "/clients/c3.png" },
    { name: "RaceTrac", logo: "/clients/c4.png" },
    { name: "Community Transit", logo: "/clients/c6.png" },
    { name: "Germaine de Capuccini", logo: "/clients/c7.png" },
    { name: "Wholesome Bellies", logo: "/clients/c8.png" },
    { name: "The Uniform Edit", logo: "/clients/c9.png" },
    { name: "Pure AV", logo: "/clients/c10.png" },
    { name: "London Bespoke Club", logo: "/clients/c11.png" },
    { name: "Healthy House", logo: "/clients/c12.png" },
    { name: "Hurford Wholesale", logo: "/clients/c13.png" },
    { name: "Concrete Lines", logo: "/clients/c14.png" }
  ]

  // Duplicate the clients array to create seamless loop
  const duplicatedClients = [...clients, ...clients]

  useEffect(() => {
    if (isInView) {
      controls.start({
        x: ["0%", "-100%"],
        transition: {
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 80,
            ease: "linear"
          }
        }
      })
    }
  }, [isInView, controls])

  return (
    <section className="py-16 sm:py-20 bg-secondary-color overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 font-space-grotesk text-color-1">
            Trusted By <span className="gradient-text">Industry Leaders</span>
          </h2>
          <p className="text-lg sm:text-xl text-color-2 max-w-4xl mx-auto">
            We partner with visionary brands across diverse sectors to deliver exceptional digital results
          </p>
        </motion.div>

        {/* Modern Logo Slider */}
        <div className="relative mb-16 sm:mb-20">
          {/* Gradient overlays */}
          <div className="absolute inset-y-0 left-0 w-24 sm:w-32 bg-gradient-to-r from-secondary-color to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-24 sm:w-32 bg-gradient-to-l from-secondary-color to-transparent z-10" />
          
          <div 
            ref={ref}
            className="relative overflow-hidden py-4"
          >
            <motion.div
              animate={controls}
              className="flex items-center gap-8 sm:gap-12 w-max"
            >
              {duplicatedClients.map((client, index) => (
                <motion.div
                  key={`${client.name}-${index}`}
                  whileHover={{ scale: 1.1 }}
                  className="flex-shrink-0 relative group"
                >
                  <div className="relative h-16 w-44 sm:h-20 sm:w-48 flex items-center justify-center">
                    {/* Glow effect */}
                    <div className="absolute inset-0 bg-cyan-400/90 rounded-xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Logo container */}
                    <div className="relative h-full w-full flex items-center justify-center bg-primary-color/30 rounded-lg backdrop-blur-sm">
                      <img
                        src={client.logo}
                        alt={client.name}
                        className="h-full w-full object-contain opacity-80 group-hover:opacity-100 transition-all duration-300 filter grayscale group-hover:grayscale-0"
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Modern Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 text-center mb-12 sm:mb-16"
        >
          {[
            {
              icon: "🛒",
              gradient: "from-cyan-400 to-blue-500",
              title: "E-Commerce",
              description: "Specialized SEO and analytics for online stores and digital products"
            },
            {
              icon: "🔧",
              gradient: "from-blue-500 to-purple-500",
              title: "Local Services",
              description: "Local SEO and performance marketing for service businesses"
            },
            {
              icon: "💻",
              gradient: "from-purple-500 to-pink-500",
              title: "SaaS & Tech",
              description: "Advanced analytics and growth marketing for tech companies"
            }
          ].map((stat, index) => (
            <div 
              key={index}
              className="bg-primary-color border border-color p-6 rounded-xl relative overflow-hidden group"
            >
              {/* Animated background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-r ${stat.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
              
              <div className={`w-16 h-16 bg-gradient-to-r ${stat.gradient} rounded-full flex items-center justify-center mx-auto mb-4 relative z-10`}>
                <span className="text-2xl">{stat.icon}</span>
              </div>
              <h3 className="text-lg font-semibold mb-3 relative z-10">
                {stat.title}
              </h3>
              <p className="text-color-2 text-sm relative z-10">
                {stat.description}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Glowing CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="relative bg-primary-color/50 border border-cyan-400/30 p-8 sm:p-10 rounded-2xl max-w-2xl mx-auto overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute -top-20 -left-20 w-40 h-40 bg-cyan-400/10 rounded-full filter blur-3xl"></div>
            <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-blue-400/10 rounded-full filter blur-3xl"></div>
            
            <h3 className="text-xl sm:text-2xl font-bold mb-4 font-space-grotesk relative z-10">
              Ready to Elevate Your Brand?
            </h3>
            <p className="text-color-2 mb-6 text-sm sm:text-base relative z-10">
              Join our roster of industry-leading clients and experience transformative digital growth.
            </p>
            <Link 
              href="/contact" 
              className="btn-primary inline-flex items-center group relative z-10"
            >
              Become Our Partner
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 20 20" 
                fill="currentColor" 
                className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
              >
                <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ClientLogos