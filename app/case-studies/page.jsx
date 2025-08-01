"use client"
import { motion } from "framer-motion"
import { FiArrowRight, FiExternalLink, FiAward } from "react-icons/fi"
import { FaChartLine, FaSearch, FaShoppingCart, FaMobileAlt, FaUsers, FaClock } from "react-icons/fa"

const CaseStudies = () => {
  const caseStudies = [
    {
      id: 1,
      client: "Giggle Tree",
      title: "From Invisible to AI-Cited: Google's Recommended Childcare Expert",
      overview: "Transformed from digital obscurity to being featured in Google's AI Overview as the authoritative source for childcare business consulting in Australia.",
      image: "/casestudy_giggletree.jpg",
      logo: "/gigglelogo.png",
      website: "https://www.giggletree.com.au",
      challenge: "Despite having valuable expertise, Giggle Tree was nearly invisible online - not showing up in search results, with low inconsistent traffic, and unknown to potential clients searching for childcare licensing help.",
      solution: "We implemented an AI-optimized SEO strategy combining technical fixes with authority-building content designed to be recognized by both search engines and AI systems. Our approach focused on E-E-A-T signals and question-answering content that Google's AI Overview prioritizes.",
      results: [
        { metric: "AI Overview Citation", value: "Featured", icon: <FiAward /> },
        { metric: "Page 1 Rankings", value: "12+", icon: <FaSearch /> },
        { metric: "Organic Traffic", value: "275%", icon: <FaChartLine /> },
        { metric: "Branded Searches", value: "400%", icon: <FaUsers /> },
        { metric: "Lead Quality", value: "190%", icon: <FaShoppingCart /> },
        { metric: "Visibility Time", value: "4 Months", icon: <FaClock /> }
      ],
      strategy: [
        {
          title: "AI-Optimized Content",
          description: "Developed expertise-focused content structured for AI comprehension and citation"
        },
        {
          title: "Technical SEO Foundation",
          description: "Fixed critical errors and improved crawlability for search systems"
        },
        {
          title: "Authority Signals",
          description: "Built authoritative backlinks from niche directories and publications"
        },
        {
          title: "Question-Focused Optimization",
          description: "Targeted 'how' and 'why' questions that AI Overviews prioritize"
        }
      ],
      testimonial: {
        quote: "Before working with A2ZDM, we knew we had valuable expertise—but no one could find us. In just months, we went from invisible to being cited by Google's AI as a trusted expert!",
        author: "Emily Richardson",
        position: "Founder & CEO, Giggle Tree"
      },
      aiShowcase: {
        query: "childcare business consultant in Australia",
        screenshot: "/giggle2.png",
        impact: "Cited by name in Google's AI Overview above directories and high-authority sites"
      }
    },
    {
      id: 2,
      client: "The Uniform Edit (TUE)",
      title: "School Uniform Retail Reinvention",
      overview: "Complete digital reinvention for Australia's premium school uniform provider, solving seasonal demand challenges and creating year-round engagement.",
      image: "/tue.jpg",
      logo: "/tue.jpg",
      website: "https://www.theuniformedit.com.au",
      challenge: "TUE faced extreme seasonal peaks (80% of revenue in 2 months), high cart abandonment, and inefficient inventory management. Their digital experience couldn't handle back-to-school traffic surges.",
      solution: "We developed a holistic solution including: demand forecasting algorithms, streamlined checkout flows, inventory management integrations, and a year-round engagement strategy through content and loyalty programs. Our technical infrastructure improvements ensured 100% uptime during peak periods.",
      results: [
        { metric: "Online Orders", value: "400%", icon: <FaShoppingCart /> },
        { metric: "Checkout Completion", value: "220%", icon: <FaChartLine /> },
        { metric: "Peak Traffic Capacity", value: "10x", icon: <FaUsers /> },
        { metric: "Off-Season Sales", value: "180%", icon: <FaClock /> },
        { metric: "Inventory Accuracy", value: "99.8%", icon: <FaSearch /> },
        { metric: "Mobile Conversions", value: "250%", icon: <FaMobileAlt /> }
      ],
      strategy: [
        {
          title: "Peak Season Preparedness",
          description: "Implemented auto-scaling infrastructure and queue management for traffic surges"
        },
        {
          title: "Dynamic Bundling System",
          description: "Created intelligent uniform packages based on school requirements"
        },
        {
          title: "Virtual Sizing Tools",
          description: "Developed AR-powered sizing recommendations to reduce returns"
        },
        {
          title: "Year-Round Engagement",
          description: "Launched educational content hub and uniform care program"
        }
      ],
      testimonial: {
        quote: "The A2ZDM team revolutionized how we operate digitally. Our back-to-school chaos turned into smooth operations, and we're now acquiring customers year-round instead of just seasonal peaks.",
        author: "Michael Tan",
        position: "Operations Director, The Uniform Edit"
      }
    }
  ]

  return (
    <div className="bg-primary-color">
      {/* Hero Section */}
      <section className="relative h-screen max-h-[800px] flex items-center justify-center bg-gradient-to-br from-cyan-900/30 to-blue-900/30 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/case-study-hero-bg.jpg')] bg-cover bg-center opacity-30"></div>
        <motion.div 
          className="relative max-w-7xl px-6 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 font-space-grotesk text-white">
            Digital <span className="gradient-text">Success</span> Stories
          </h1>
          <p className="text-xl text-cyan-100 max-w-3xl mx-auto mb-8">
            How we helped visionary brands achieve remarkable growth through strategic digital transformation
          </p>
        </motion.div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-secondary-color">
        <div className="max-w-7xl mx-auto px-6">
          {caseStudies.map((study, index) => (
            <div key={study.id} className="mb-28">
              {/* Overview Section */}
              <motion.div 
                className="flex flex-col lg:flex-row gap-12 items-center mb-16"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                {/* Image Showcase */}
                <div className="lg:w-1/2 relative group">
                  <div className="relative overflow-hidden rounded-xl shadow-2xl">
                    <img 
                      src={study.image} 
                      alt={study.title} 
                      className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                  </div>
                  <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg w-32 h-32 flex items-center justify-center">
                    <img src={study.logo} alt={`${study.client} logo`} className="max-w-full max-h-full object-contain" />
                  </div>
                </div>

                {/* Basic Info */}
                <div className="lg:w-1/2">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-cyan-400/10 text-cyan-400 px-3 py-1 text-sm font-medium rounded-full">
                      Featured Project
                    </span>
                    <a 
                      href={study.website} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-color-2 hover:text-cyan-400 transition-colors text-sm"
                    >
                      Visit Website <FiExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                  
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 font-space-grotesk text-color-1">
                    {study.client}
                  </h2>
                  <h3 className="text-xl text-cyan-400 mb-6">{study.title}</h3>
                  <p className="text-lg text-color-2 mb-8">{study.overview}</p>
                  
                  {/* Results */}
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                    {study.results.map((result, i) => (
                      <div key={i} className="bg-primary-color/50 border border-color p-4 rounded-lg">
                        <div className="text-cyan-400 mb-2">{result.icon}</div>
                        <div className="text-2xl font-bold text-color-1 mb-1">{result.value}</div>
                        <div className="text-sm text-color-2">{result.metric}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* AI Showcase (for Giggle Tree) */}
              {study.aiShowcase && (
                <motion.div 
                  className="bg-gradient-to-r from-cyan-900/20 to-blue-900/20 border-l-4 border-cyan-400 p-8 rounded-r-lg mb-16"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <div className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="md:w-2/3">
                      <h3 className="text-2xl font-bold mb-4 text-white">The AI Recognition Breakthrough</h3>
                      <p className="text-cyan-100 mb-4">
                        When users searched <strong>"{study.aiShowcase.query}"</strong>, Google's AI Overview cited {study.client} as a trusted expert.
                      </p>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        <div className="bg-white/10 p-3 rounded-lg">
                          <div className="text-cyan-400 text-xl font-bold">AI-Cited</div>
                          <div className="text-cyan-100 text-sm">Authority Status</div>
                        </div>
                        <div className="bg-white/10 p-3 rounded-lg">
                          <div className="text-cyan-400 text-xl font-bold">Zero-Click</div>
                          <div className="text-cyan-100 text-sm">Top Visibility</div>
                        </div>
                        <div className="bg-white/10 p-3 rounded-lg">
                          <div className="text-cyan-400 text-xl font-bold">4 Months</div>
                          <div className="text-cyan-100 text-sm">To Achieve</div>
                        </div>
                      </div>
                    </div>
                    <div className="md:w-1/3 bg-white p-2 rounded-lg shadow-xl">
                      <img 
                        src={study.aiShowcase.screenshot} 
                        alt={`${study.client} in Google AI Overview`}
                        className="rounded-md"
                      />
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Challenge & Solution */}
              <motion.div 
                className="grid md:grid-cols-2 gap-8 mb-16"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="bg-primary-color border border-color p-6 rounded-xl">
                  <h3 className="text-xl font-bold mb-4 text-color-1 flex items-center gap-2">
                    <span className="w-4 h-4 bg-red-500 rounded-full"></span>
                    The Challenge
                  </h3>
                  <p className="text-color-2">{study.challenge}</p>
                </div>
                <div className="bg-primary-color border border-color p-6 rounded-xl">
                  <h3 className="text-xl font-bold mb-4 text-color-1 flex items-center gap-2">
                    <span className="w-4 h-4 bg-green-500 rounded-full"></span>
                    Our Solution
                  </h3>
                  <p className="text-color-2">{study.solution}</p>
                </div>
              </motion.div>

              {/* Strategy */}
              <motion.div 
                className="mb-16"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold mb-8 text-color-1 text-center">Key Strategies Implemented</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {study.strategy.map((item, i) => (
                    <div key={i} className="bg-primary-color/50 border border-color p-6 rounded-xl hover:border-cyan-400/50 transition-colors">
                      <h4 className="text-lg font-semibold mb-3 text-color-1">{item.title}</h4>
                      <p className="text-color-2">{item.description}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Testimonial */}
              <motion.div 
                className="bg-gradient-to-r from-cyan-900/20 to-blue-900/20 border-l-4 border-cyan-400 p-8 rounded-r-lg"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <blockquote className="text-xl italic text-color-1 mb-6">"{study.testimonial.quote}"</blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-cyan-400 rounded-full flex items-center justify-center text-white font-bold">
                    {study.testimonial.author.split(' ').map(name => name[0]).join('')}
                  </div>
                  <div>
                    <div className="font-bold text-color-1">{study.testimonial.author}</div>
                    <div className="text-color-2">{study.testimonial.position}</div>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default CaseStudies