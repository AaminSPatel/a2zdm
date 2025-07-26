"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { FiArrowRight, FiTrendingUp, FiDatabase, FiTarget, FiPlay } from "react-icons/fi"

const HeroSection = () => {
  const techIcons = [
    { icon: <FiTrendingUp />, delay: 0.2 },
    { icon: <FiDatabase />, delay: 0.4 },
    { icon: <FiTarget />, delay: 0.6 },
  ]

  const statsData = [
    { value: "240%", label: "Traffic Growth", color: "from-cyan-400 to-blue-500" },
    { value: "3.2x", label: "ROAS Increase", color: "from-blue-500 to-purple-500" },
    { value: "156%", label: "Lead Generation", color: "from-purple-500 to-pink-500" },
    { value: "98%", label: "Client Retention", color: "from-green-400 to-cyan-400" },
  ]

  return (
    <section className="relative min-h-screen flex items-center bg-primary-color overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Tech Grid Background */}
        <div className="absolute inset-0 tech-grid opacity-20"></div>

        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/10 via-transparent to-blue-900/10"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      {/* Floating Tech Icons */}
      <div className="absolute inset-0 hidden lg:block">
        {techIcons.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: [0.3, 0.6, 0.3],
              y: [0, -20, 0],
              x: [0, 10, 0],
            }}
            transition={{
              duration: 4,
              delay: item.delay,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
            className={`absolute accent-cyan text-2xl ${
              index === 0 ? "top-20 right-20" : index === 1 ? "top-40 left-20" : "bottom-40 right-40"
            }`}
          >
            {item.icon}
          </motion.div>
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Content */}
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="inline-flex items-center bg-gradient-to-r from-cyan-400/10 to-blue-500/10 border border-cyan-400/30 px-4 py-2 mb-6"
            >
              <span className="w-2 h-2 bg-accent-cyan rounded-full mr-2 animate-pulse"></span>
              <span className="text-sm accent-cyan font-semibold">Trusted by 50+ Growing Businesses</span>
            </motion.div>

            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-space-grotesk leading-tight text-color-1"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Transform Your Business with <span className="gradient-text">Data-Driven Marketing</span>
            </motion.h1>

            <motion.p
              className="text-lg sm:text-xl text-color-2 mb-8 leading-relaxed max-w-2xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              We combine advanced SEO strategies, powerful analytics (GA4, BigQuery, Power BI), and performance
              marketing to deliver measurable growth for E-commerce, SaaS, and local businesses.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link href="/services" className="inline-flex items-center justify-center btn-primary group text-center">
                Explore Our Services
                <FiArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <button className="inline-flex items-center justify-center btn-secondary text-center group">
                <FiPlay className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                Watch Success Stories
              </button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex items-center space-x-6 text-sm text-color-2"
            >
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-green-400 rounded-full"></div>
                <span>5+ Years Experience</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-cyan-400 rounded-full"></div>
                <span>98% Client Satisfaction</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Enhanced Visual Dashboard */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            {/* Main Dashboard Container */}
            <div className="relative bg-gradient-to-br from-secondary-color to-accent-color border border-cyan-400/30 p-6 sm:p-8 shadow-2xl">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
                <div className="text-xs text-color-2">Analytics Dashboard</div>
              </div>

              {/* Performance Chart */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-sm font-semibold text-color-1">Performance Overview</h3>
                  <span className="text-xs text-green-400">↗ +34% this month</span>
                </div>
                <div className="space-y-3">
                  {[
                    { label: "Organic Traffic", value: 85, color: "bg-cyan-400" },
                    { label: "Conversion Rate", value: 72, color: "bg-blue-400" },
                    { label: "ROI Growth", value: 94, color: "bg-purple-400" },
                    { label: "Lead Quality", value: 88, color: "bg-green-400" },
                  ].map((metric, index) => (
                    <motion.div
                      key={metric.label}
                      initial={{ width: 0 }}
                      animate={{ width: `${metric.value}%` }}
                      transition={{ duration: 1.5, delay: 0.5 + index * 0.1 }}
                      className="relative"
                    >
                      <div className="flex items-center justify-between text-xs mb-1">
                        <span className="text-color-2">{metric.label}</span>
                        <span className="text-color-1 font-semibold">{metric.value}%</span>
                      </div>
                      <div className="w-full bg-gray-700 h-2 rounded-full overflow-hidden">
                        <motion.div
                          className={`h-full ${metric.color} rounded-full`}
                          initial={{ width: 0 }}
                          animate={{ width: `${metric.value}%` }}
                          transition={{ duration: 1.5, delay: 0.5 + index * 0.1 }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                {statsData.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                    className={`bg-gradient-to-r ${stat.color} p-4 text-center relative overflow-hidden`}
                  >
                    <div className="relative z-10">
                      <div className="text-2xl font-bold text-black mb-1">{stat.value}</div>
                      <div className="text-xs text-black/80">{stat.label}</div>
                    </div>
                    <div className="absolute inset-0 bg-white/10"></div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
              className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center shadow-lg"
            >
              <FiTrendingUp className="w-8 h-8 text-black" />
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
              className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg"
            >
              <FiDatabase className="w-6 h-6 text-white" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
