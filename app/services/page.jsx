"use client";

import { motion } from "framer-motion";
import {
  FiSearch,
  FiBarChart,
  FiTarget,
  FiDatabase,
  FiMousePointer,
  FiArrowRight,
  FiCheck,
  FiTrendingUp,
  FiLayers,
  FiGlobe,
  FiDollarSign
} from "react-icons/fi";
import Link from "next/link";
import { useTech } from "@/components/TechContext";

const Services = () => {
  const { serviceData } = useTech();

  // Helper to render icon components from string
  const renderIcon = (iconString) => {
    switch (iconString) {
      case "<FiSearch className='w-8 h-8' />":
        return <FiSearch className="w-8 h-8" />;
      case "<FiBarChart className='w-8 h-8' />":
        return <FiBarChart className="w-8 h-8" />;
      case "<FiTarget className='w-8 h-8' />":
        return <FiTarget className="w-8 h-8" />;
      case "<FiDatabase className='w-8 h-8' />":
        return <FiDatabase className="w-8 h-8" />;
      case "<FiMousePointer className='w-8 h-8' />":
        return <FiMousePointer className="w-8 h-8" />;
      case "<FiTrendingUp className='w-8 h-8' />":
        return <FiTrendingUp className="w-8 h-8" />;
      case "<FiUsers className='w-8 h-8' />":
        return <FiUsers className="w-8 h-8" />;
      default:
        return <FiSearch className="w-8 h-8" />;
    }
  };

  return (
    <main className="min-h-screen bg-primary-color">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center bg-primary-color overflow-hidden">
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-30"
            style={{
              backgroundImage: `linear-gradient(rgba(8, 47, 73, 0.7), rgba(8, 47, 73, 0.7)), url('/a&i.jpg')`
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/30 via-transparent to-blue-900/30"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="inline-flex items-center bg-gradient-to-r from-cyan-400/10 to-blue-500/10 border border-cyan-400/30 px-4 py-2 mb-6"
            >
              <span className="w-2 h-2 bg-accent-cyan rounded-full mr-2 animate-pulse"></span>
              <span className="text-sm accent-cyan font-semibold">
                Data-Driven Results
              </span>
            </motion.div>

            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-space-grotesk leading-tight text-white"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Digital Growth <span className="gradient-text">Services</span>
            </motion.h1>

            <motion.p
              className="text-lg sm:text-xl text-cyan-100 mb-8 leading-relaxed max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Comprehensive solutions that drive measurable results through strategic planning, technical excellence, and continuous optimization.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 sm:py-20 bg-secondary-color">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 font-space-grotesk text-color-1">
              Our <span className="gradient-text">Approach</span> to Success
            </h2>
            <p className="text-lg text-color-2 max-w-4xl mx-auto">
              We combine cutting-edge technology with proven marketing strategies to deliver sustainable growth for your business.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              {
                icon: <FiLayers className="w-8 h-8" />,
                title: "Strategic Planning",
                description: "Custom strategies tailored to your business goals"
              },
              {
                icon: <FiGlobe className="w-8 h-8" />,
                title: "Full-Service Execution",
                description: "End-to-end implementation by our expert team"
              },
              {
                icon: <FiDatabase className="w-8 h-8" />,
                title: "Data-Driven Decisions",
                description: "Metrics that matter to guide our optimizations"
              },
              {
                icon: <FiTrendingUp className="w-8 h-8" />,
                title: "Continuous Improvement",
                description: "Ongoing testing and refinement for better results"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-primary-color border border-cyan-400/30 p-6 sm:p-8 rounded-lg hover:border-cyan-400/50 transition-colors"
              >
                <div className={`bg-gradient-to-r ${index === 0 ? 'from-cyan-400 to-blue-500' : index === 1 ? 'from-blue-500 to-purple-500' : index === 2 ? 'from-purple-500 to-pink-500' : 'from-green-400 to-cyan-400'} w-12 h-12 rounded-full flex items-center justify-center text-white mb-4`}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-color-1">{item.title}</h3>
                <p className="text-color-2 text-sm sm:text-base">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 sm:py-20 bg-primary-color">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 font-space-grotesk text-white">
              Our <span className="gradient-text">Service</span> Portfolio
            </h2>
            <p className="text-lg text-cyan-100 max-w-4xl mx-auto">
              Comprehensive solutions designed to address every aspect of your digital presence
            </p>
          </motion.div>

          <div className="space-y-16">
            {serviceData.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-secondary-color border border-color rounded-sm overflow-hidden"
              >
                <div className={`bg-gradient-to-r ${category.gradient} p-6 sm:p-8 text-white`}>
                  <div className="flex flex-col sm:flex-row items-start gap-6">
                    <div className="bg-white/20 p-3 rounded-lg backdrop-blur-sm">
                      {renderIcon(category.icon)}
                    </div>
                    <div>
                      <h2 className="text-2xl sm:text-3xl font-bold mb-2 font-space-grotesk">
                        {category.title}
                      </h2>
                      <p className="text-cyan-100 text-lg">{category.description}</p>
                    </div>
                  </div>
                </div>

                <div className="p-6 sm:p-8">
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold mb-4 text-color-1">Key Benefits</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                      {category.benefits?.map((benefit, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <FiCheck className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                          <span className="text-color-2">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold mb-6 text-color-1">Service Offerings</h3>
                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
  {Object.entries(category.services || {}).map(([slug, service], serviceIndex) => (
    <motion.div
      key={slug}
      initial={{ y: 20 }}
      whileInView={{ y: 0 }}
      transition={{ duration: 0.5, delay: serviceIndex * 0.1 }}
      viewport={{ once: true }}
      className="bg-primary-color border border-color p-6 rounded-2xl shadow-sm hover:shadow-2xl hover:shadow-cyan-300/30 transition-al duration-30 group transform hover:-translate-y-1 focus-within:ring-2 focus-within:ring-cyan-400"
    >
      <div className="flex items-start space-x-4 mb-4">
        <div
          className={`bg-gradient-to-r ${category.gradient} p-2 w-12 h-12 rounded-lg flex items-center justify-center text-white text-lg font-bold shadow-md`}
        >
     
            <span>{serviceIndex + 1}</span>
          
        </div>
        <div>
          <h3 className="text-xl font-bold text-color-1 group-hover:text-cyan-400 transition-colors duration-200">
            {service.title}
          </h3>
          <p className="text-color-2 mt-1 text-sm">{service.description}</p>
        </div>
      </div>

      <div className="mt-4">
        <h4 className="text-sm font-semibold text-color-2 mb-2">Includes:</h4>
        <ul className="space-y-2">
          {service.benefits?.slice(0, 4).map((benefit, featureIndex) => (
            <li key={featureIndex} className="flex items-start space-x-2">
              <FiCheck className={`w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0 `} />
              <span className="text-color-2 text-sm">{benefit}</span>
            </li>
          ))}
        </ul>

        <Link
          href={`/services/${slug}`}
          className={`inline-flex items-center justify-center w-full mt-5 px-4 py-2 bg-gradient-to-r ${category.gradient}  text-white rounded-lg hover:bg-cyan-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 transition-all`}
        >
          View Service Details
          <FiArrowRight className="ml-2 w-4 h-4" />
        </Link>
      </div>
    </motion.div>
  ))}
</div>

                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-cyan-900/30 to-blue-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 font-space-grotesk text-white">
              Proven <span className="gradient-text">Results</span>
            </h2>
            <p className="text-lg text-cyan-100 max-w-4xl mx-auto">
              The impact our services have delivered for clients across industries
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                value: "240%",
                label: "Average organic traffic growth",
                color: "from-cyan-400 to-blue-500"
              },
              {
                value: "3.2x",
                label: "Return on ad spend increase",
                color: "from-blue-500 to-purple-500"
              },
              {
                value: "156%",
                label: "Improvement in lead quality",
                color: "from-purple-500 to-pink-500"
              }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`bg-gradient-to-r ${stat.color} p-6 sm:p-8 rounded-lg text-white`}
              >
                <div className="text-4xl sm:text-5xl font-bold mb-2">{stat.value}</div>
                <div className="text-sm sm:text-base opacity-90">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

     
    </main>
  );
};

export default Services;