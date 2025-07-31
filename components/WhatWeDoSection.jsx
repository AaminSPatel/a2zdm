"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { useState } from "react"
import { FiSearch, FiBarChart, FiTarget, FiArrowRight } from "react-icons/fi"
import { useTech } from "./TechContext"

const WhatWeDoSection = () => {
  const { serviceData } = useTech()

  // Helper to render icon components from string
  const renderIcon = (iconString) => {
    switch (iconString) {
      case "<FiSearch className='w-8 h-8' />":
        return <FiSearch className="w-6 h-6" />;
      case "<FiBarChart className='w-8 h-8' />":
        return <FiBarChart className="w-6 h-6" />;
      case "<FiTarget className='w-8 h-8' />":
        return <FiTarget className="w-6 h-6" />;
      default:
        return <FiSearch className="w-6 h-6" />;
    }
  }

  // Get first three services from all categories
  const featuredServices = [];
  serviceData.forEach(category => {
    Object.entries(category.services || {}).forEach(([slug, service]) => {
      if (featuredServices.length < 3) {
        featuredServices.push({
          ...service,
          slug,
          category: category.title,
          gradient: category.gradient,
          icon: category.icon
        })
      }
    })
  })

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
            What We <span className="gradient-text">Do</span>
          </h2>
          <p className="text-lg sm:text-xl text-color-2 max-w-3xl mx-auto">
            We combine cutting-edge technology with proven strategies to deliver measurable results across three core areas
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {featuredServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-primary-color border border-color card-hover group cursor-pointer overflow-hidden"
            >
              {/* Service Image */}
              <div className="relative overflow-hidden">
                <img
                  src={service.heroImage || "/placeholder.svg"}
                  alt={service.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div
                  className={`absolute top-4 left-4 w-12 sm:w-16 h-12 sm:h-16 bg-gradient-to-r ${service.gradient} flex items-center justify-center text-black`}
                >
                  {renderIcon(service.icon)}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-bold mb-2 font-space-grotesk text-color-1 group-hover:accent-cyan transition-colors">
                  {service.title}
                </h3>

                <div className="accent-cyan font-semibold mb-4 text-base sm:text-lg">
                  → {service.category}
                </div>

                <p className="text-color-2 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                  {service.description}
                </p>

                <Link
                  href={`/services/${service.slug}`}
                  className="flex items-center accent-cyan font-semibold group-hover:translate-x-2 transition-transform text-sm sm:text-base"
                >
                  Learn More
                  <FiArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            href="/services"
            className="inline-flex items-center bg-gradient-to-r from-cyan-400 to-blue-500 text-black px-6 sm:px-8 py-3 sm:py-4 font-semibold hover:from-cyan-300 hover:to-blue-400 transition-all duration-300 group"
          >
            Discover how we do it
            <FiArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default WhatWeDoSection