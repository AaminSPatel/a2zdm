"use client"

import { motion } from "framer-motion"
import { FiTrendingUp, FiTrendingDown, FiUsers, FiDollarSign } from "react-icons/fi"

const ResultsSection = () => {
  const results = [
    {
      icon: <FiTrendingUp className="w-6 sm:w-8 h-6 sm:h-8" />,
      metric: "2.4×",
      title: "More Qualified Leads",
      description:
        "Through analytics-driven refinement, form submissions surged, delivering more conversions with less friction across the funnel.",
      color: "text-green-400",
      bgColor: "from-green-400/20 to-cyan-400/20",
    },
    {
      icon: <FiTrendingDown className="w-6 sm:w-8 h-6 sm:h-8" />,
      metric: "-34%",
      title: "Reduction in Bounce Rate",
      description:
        "Smart content structure and predictive UX optimizations led to fewer drop-offs and more meaningful user journeys, backed by GA4 engagement data.",
      color: "text-blue-400",
      bgColor: "from-blue-400/20 to-purple-400/20",
    },
   
  ]

  return (
    <section className="py-16 sm:py-20 bg-primary-color">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 font-space-grotesk text-color-1">
            What We <span className="gradient-text">Deliver</span>
          </h2>
          <p className="text-lg sm:text-xl text-color-2 max-w-3xl mx-auto">
            We don't just promise growth—we deliver measurable results that impact your bottom line
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {results.map((result, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className={`bg-gradient-to-br ${result.bgColor} border border-color p-6 sm:p-8 h-full card-hover`}>
                <div className="flex items-start space-x-4">
                  <div className={`${result.color} flex-shrink-0`}>{result.icon}</div>
                  <div className="flex-1">
                    <div
                      className={`text-3xl sm:text-4xl md:text-5xl font-bold ${result.color} mb-2 font-space-grotesk`}
                    >
                      {result.metric}
                    </div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 text-color-1 group-hover:accent-cyan transition-colors">
                      {result.title}
                    </h3>
                    <p className="text-color-2 leading-relaxed text-sm sm:text-base">{result.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 sm:mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center"
        >
          <div>
            <div className="text-2xl sm:text-3xl font-bold accent-cyan mb-2">50+</div>
            <div className="text-color-2 text-sm sm:text-base">Projects Completed</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-bold text-blue-400 mb-2">98%</div>
            <div className="text-color-2 text-sm sm:text-base">Client Satisfaction</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-bold text-purple-400 mb-2">24/7</div>
            <div className="text-color-2 text-sm sm:text-base">Support Available</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-bold text-green-400 mb-2">5+</div>
            <div className="text-color-2 text-sm sm:text-base">Years Experience</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ResultsSection
