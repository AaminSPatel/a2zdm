"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
import { FiSearch, FiFilter, FiCalendar, FiUser, FiArrowRight, FiChevronLeft, FiChevronRight } from "react-icons/fi"

const Blogs = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [currentPage, setCurrentPage] = useState(1)
  const blogsPerPage = 6

  const categories = ["All", "SEO", "Analytics", "PPC", "Performance Marketing", "Business Intelligence"]

  const blogPosts = [
    {
      id: 1,
      title: "Complete Guide to GA4 Migration: What You Need to Know",
      excerpt:
        "Learn how to successfully migrate from Universal Analytics to GA4 with our comprehensive step-by-step guide covering setup, configuration, and best practices.",
      category: "Analytics",
      author: "Iliyas Patel",
      date: "2024-01-15",
      readTime: "8 min read",
      image: "/ga4.jpg",
      tags: ["GA4", "Analytics", "Migration"],
    },
    {
      id: 2,
      title: "Technical SEO Checklist for 2024: Boost Your Rankings",
      excerpt:
        "Discover the essential technical SEO elements that can make or break your search rankings. From Core Web Vitals to structured data implementation.",
      category: "SEO",
      author: "Iliyas Patel",
      date: "2024-01-12",
      readTime: "12 min read",
      image: "/techseo.jpg",
      tags: ["Technical SEO", "Rankings", "Core Web Vitals"],
    },
    {
      id: 3,
      title: "PPC Campaign Optimization: Advanced Strategies for Better ROI",
      excerpt:
        "Maximize your advertising spend with advanced PPC optimization techniques including bid strategies, audience targeting, and conversion tracking.",
      category: "PPC",
      author: "Iliyas Patel",
      date: "2024-01-10",
      readTime: "10 min read",
      image: "/pcm.jpg",
      tags: ["PPC", "ROI", "Campaign Optimization"],
    },
    {
      id: 4,
      title: "BigQuery for Marketing Analytics: A Beginner's Guide",
      excerpt:
        "Unlock the power of BigQuery for marketing data analysis. Learn how to set up, query, and visualize your marketing data for better insights.",
      category: "Business Intelligence",
      author: "Iliyas Patel",
      date: "2024-01-08",
      readTime: "15 min read",
      image: "/techseo.jpg",
      tags: ["BigQuery", "Data Analysis", "Marketing Analytics"],
    },
    {
      id: 5,
      title: "Local SEO Strategies That Actually Work in 2024",
      excerpt:
        "Dominate local search results with proven strategies for Google My Business optimization, local citations, and location-based content marketing.",
      category: "SEO",
      author: "Iliyas Patel",
      date: "2024-01-05",
      readTime: "9 min read",
      image: "/techseo.jpg",
      tags: ["Local SEO", "Google My Business", "Local Marketing"],
    },
    {
      id: 6,
      title: "Performance Marketing Trends to Watch This Year",
      excerpt:
        "Stay ahead of the curve with the latest performance marketing trends including AI-powered optimization, privacy-first tracking, and cross-channel attribution.",
      category: "Performance Marketing",
      author: "Iliyas Patel",
      date: "2024-01-03",
      readTime: "7 min read",
      image: "/techseo.jpg",
      tags: ["Performance Marketing", "Trends", "AI Optimization"],
    },
  ]

  // Filter blogs based on search and category
  const filteredBlogs = blogPosts.filter((blog) => {
    const matchesSearch =
      blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesCategory = selectedCategory === "All" || blog.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  // Pagination
  const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage)
  const startIndex = (currentPage - 1) * blogsPerPage
  const currentBlogs = filteredBlogs.slice(startIndex, startIndex + blogsPerPage)

  const handlePageChange = (page) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

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
                Digital Marketing <span className="gradient-text">Insights</span>
              </h1>
              <p className="text-lg sm:text-xl text-color-2 max-w-3xl mx-auto">
                Stay ahead with expert insights on SEO, analytics, performance marketing, and the latest digital
                marketing trends
              </p>
            </motion.div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-8 sm:py-12 bg-accent-color border-b border-color">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row gap-4 sm:gap-6 items-center justify-between">
              {/* Search */}
              <div className="relative flex-1 max-w-md w-full">
                <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-color-2 w-4 sm:w-5 h-4 sm:h-5" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-8 sm:pl-10 pr-4 py-2 sm:py-3 bg-secondary-color border border-color text-color-1 placeholder-color-2 focus:border-cyan-400 focus:outline-none text-sm sm:text-base"
                />
              </div>

              {/* Category Filter */}
              <div className="flex items-center space-x-3 sm:space-x-4 w-full md:w-auto">
                <FiFilter className="text-color-2 w-4 sm:w-5 h-4 sm:h-5 flex-shrink-0" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="bg-secondary-color border border-color text-color-1 px-3 sm:px-4 py-2 sm:py-3 focus:border-cyan-400 focus:outline-none flex-1 md:flex-none text-sm sm:text-base"
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Results Count */}
            <div className="mt-4 text-color-2 text-sm sm:text-base">
              Showing {filteredBlogs.length} article{filteredBlogs.length !== 1 ? "s" : ""}
              {selectedCategory !== "All" && ` in ${selectedCategory}`}
            </div>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {currentBlogs.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {currentBlogs.map((blog, index) => (
                  <motion.article
                    key={blog.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-secondary-color border border-color card-hover group"
                  >
                    {/* Image */}
                    <div className="relative overflow-hidden">
                      <img
                        src={blog.image || "/placeholder.svg"}
                        alt={blog.title}
                        className="w-full h-40 sm:h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                        <span className="bg-accent-cyan text-black px-2 sm:px-3 py-1 text-xs sm:text-sm font-semibold">
                          {blog.category}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-4 sm:p-6">
                      <div className="flex items-center space-x-3 sm:space-x-4 text-xs sm:text-sm text-color-2 mb-3">
                        <div className="flex items-center space-x-1">
                          <FiCalendar className="w-3 sm:w-4 h-3 sm:h-4" />
                          <span>{new Date(blog.date).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <FiUser className="w-3 sm:w-4 h-3 sm:h-4" />
                          <span>{blog.author}</span>
                        </div>
                      </div>

                      <h2 className="text-lg sm:text-xl font-bold mb-3 text-color-1 group-hover:accent-cyan transition-colors line-clamp-2">
                        {blog.title}
                      </h2>

                      <p className="text-color-2 mb-4 line-clamp-3 leading-relaxed text-sm sm:text-base">
                        {blog.excerpt}
                      </p>

                      <div className="flex items-center justify-between">
                        <span className="text-xs sm:text-sm text-color-2">{blog.readTime}</span>
                        <Link
                          href={`/blog/${blog.id}`}
                          className="flex items-center space-x-1 accent-cyan font-semibold hover:text-cyan-300 transition-colors group-hover:translate-x-1 text-sm sm:text-base"
                        >
                          <span>Read More</span>
                          <FiArrowRight className="w-3 sm:w-4 h-3 sm:h-4" />
                        </Link>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mt-4">
                        {blog.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs bg-accent-color border border-color px-2 py-1 text-color-2"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="text-4xl sm:text-6xl mb-4">🔍</div>
                <h3 className="text-xl sm:text-2xl font-bold mb-4 text-color-1">No articles found</h3>
                <p className="text-color-2 mb-6 text-sm sm:text-base">
                  Try adjusting your search terms or category filter
                </p>
                <button
                  onClick={() => {
                    setSearchTerm("")
                    setSelectedCategory("All")
                  }}
                  className="btn-primary"
                >
                  Clear Filters
                </button>
              </div>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="flex justify-center items-center space-x-2 sm:space-x-4 mt-12 sm:mt-16"
              >
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="flex items-center space-x-2 px-3 sm:px-4 py-2 border border-color text-color-1 hover:border-cyan-400 hover:accent-cyan transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
                >
                  <FiChevronLeft className="w-3 sm:w-4 h-3 sm:h-4" />
                  <span className="hidden sm:inline">Previous</span>
                </button>

                <div className="flex space-x-1 sm:space-x-2">
                  {[...Array(totalPages)].map((_, index) => {
                    const page = index + 1
                    return (
                      <button
                        key={page}
                        onClick={() => handlePageChange(page)}
                        className={`w-8 sm:w-10 h-8 sm:h-10 flex items-center justify-center border transition-colors text-sm sm:text-base ${
                          currentPage === page
                            ? "bg-accent-cyan text-black border-cyan-400"
                            : "border-color text-color-1 hover:border-cyan-400 hover:accent-cyan"
                        }`}
                      >
                        {page}
                      </button>
                    )
                  })}
                </div>

                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="flex items-center space-x-2 px-3 sm:px-4 py-2 border border-color text-color-1 hover:border-cyan-400 hover:accent-cyan transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
                >
                  <span className="hidden sm:inline">Next</span>
                  <FiChevronRight className="w-3 sm:w-4 h-3 sm:h-4" />
                </button>
              </motion.div>
            )}
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-16 sm:py-20 bg-secondary-color">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 font-space-grotesk text-color-1">
                Stay Updated with Latest Insights
              </h2>
              <p className="text-lg sm:text-xl text-color-2 mb-6 sm:mb-8">
                Get weekly digital marketing tips, industry updates, and exclusive strategies delivered to your inbox
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 sm:px-4 py-2 sm:py-3 bg-secondary-color border border-color text-color-1 placeholder-color-2 focus:border-cyan-400 focus:outline-none text-sm sm:text-base"
                />
                <button className="btn-primary whitespace-nowrap">Subscribe</button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

export default Blogs
