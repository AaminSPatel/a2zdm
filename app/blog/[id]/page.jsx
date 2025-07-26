"use client"

import { useParams } from "next/navigation"
import { motion } from "framer-motion"
import Link from "next/link"
import Navbar from "../../../components/Navbar"
import Footer from "../../../components/Footer"
import { FiCalendar, FiUser, FiClock, FiArrowLeft, FiShare2, FiTwitter, FiLinkedin, FiFacebook } from "react-icons/fi"

const BlogDetail = () => {
  const params = useParams()
  const { id } = params

  // Mock blog data - in real app, this would come from API/CMS
  const blogPost = {
    id: 1,
    title: "Complete Guide to GA4 Migration: What You Need to Know",
    excerpt:
      "Learn how to successfully migrate from Universal Analytics to GA4 with our comprehensive step-by-step guide covering setup, configuration, and best practices.",
    content: `
      <h2>Introduction to GA4 Migration</h2>
      <p>Google Analytics 4 (GA4) represents a fundamental shift in how we track and analyze user behavior. With Universal Analytics sunsetting, businesses must migrate to GA4 to maintain their analytics capabilities.</p>
      
      <h2>Why GA4 Migration Matters</h2>
      <p>GA4 offers several advantages over Universal Analytics:</p>
      <ul>
        <li>Enhanced cross-platform tracking</li>
        <li>Privacy-focused measurement</li>
        <li>Machine learning insights</li>
        <li>Future-proof analytics foundation</li>
      </ul>
      
      <h2>Step-by-Step Migration Process</h2>
      <h3>1. Audit Your Current Setup</h3>
      <p>Before migrating, conduct a thorough audit of your existing Universal Analytics setup. Document all goals, events, custom dimensions, and segments you're currently tracking.</p>
      
      <h3>2. Create Your GA4 Property</h3>
      <p>Set up a new GA4 property in your Google Analytics account. This can run parallel to your existing Universal Analytics property during the transition period.</p>
      
      <h3>3. Configure Enhanced Ecommerce</h3>
      <p>If you're running an e-commerce site, properly configure enhanced ecommerce tracking in GA4. The event structure is different from Universal Analytics, so careful mapping is essential.</p>
      
      <h2>Common Migration Challenges</h2>
      <p>Many businesses face challenges during GA4 migration:</p>
      <ul>
        <li>Data structure differences</li>
        <li>Reporting discrepancies</li>
        <li>Custom event setup</li>
        <li>Historical data limitations</li>
      </ul>
      
      <h2>Best Practices for Success</h2>
      <p>To ensure a smooth migration:</p>
      <ol>
        <li>Start early and run both properties in parallel</li>
        <li>Train your team on GA4 interface and concepts</li>
        <li>Set up proper conversion tracking</li>
        <li>Create custom reports for your specific needs</li>
      </ol>
      
      <h2>Conclusion</h2>
      <p>GA4 migration is not just a technical necessity—it's an opportunity to improve your analytics setup and gain deeper insights into user behavior. With proper planning and execution, you can make this transition smooth and beneficial for your business.</p>
    `,
    category: "Analytics",
    author: "Priya Patel",
    date: "2024-01-15",
    readTime: "8 min read",
    image: "/placeholder.svg?height=400&width=800",
    tags: ["GA4", "Analytics", "Migration", "Google Analytics"],
  }

  const relatedPosts = [
    {
      id: 2,
      title: "Technical SEO Checklist for 2024",
      category: "SEO",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 4,
      title: "BigQuery for Marketing Analytics",
      category: "Business Intelligence",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 7,
      title: "Cookie-less Future Analytics",
      category: "Analytics",
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  if (!blogPost) {
    return <div>Loading...</div>
  }

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-primary-color">
        {/* Back Navigation */}
        <section className="py-4 sm:py-6 bg-secondary-color border-b border-color">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              href="/blogs"
              className="inline-flex items-center space-x-2 accent-cyan hover:text-cyan-300 transition-colors text-sm sm:text-base"
            >
              <FiArrowLeft className="w-3 sm:w-4 h-3 sm:h-4" />
              <span>Back to Blog</span>
            </Link>
          </div>
        </section>

        {/* Article Header */}
        <section className="py-8 sm:py-12 bg-secondary-color">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <div className="mb-4 sm:mb-6">
                <span className="bg-accent-cyan text-black px-2 sm:px-3 py-1 text-xs sm:text-sm font-semibold">
                  {blogPost.category}
                </span>
              </div>

              <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 sm:mb-6 font-space-grotesk text-color-1">
                {blogPost.title}
              </h1>

              <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-color-2 mb-6 sm:mb-8 text-sm sm:text-base">
                <div className="flex items-center space-x-2">
                  <FiUser className="w-3 sm:w-4 h-3 sm:h-4" />
                  <span>{blogPost.author}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FiCalendar className="w-3 sm:w-4 h-3 sm:h-4" />
                  <span>{new Date(blogPost.date).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FiClock className="w-3 sm:w-4 h-3 sm:h-4" />
                  <span>{blogPost.readTime}</span>
                </div>
              </div>

              {/* Share Buttons */}
              <div className="flex items-center space-x-3 sm:space-x-4 mb-6 sm:mb-8">
                <span className="text-color-2 flex items-center space-x-2 text-sm sm:text-base">
                  <FiShare2 className="w-3 sm:w-4 h-3 sm:h-4" />
                  <span>Share:</span>
                </span>
                <button className="text-color-2 hover:accent-cyan transition-colors">
                  <FiTwitter className="w-4 sm:w-5 h-4 sm:h-5" />
                </button>
                <button className="text-color-2 hover:accent-cyan transition-colors">
                  <FiLinkedin className="w-4 sm:w-5 h-4 sm:h-5" />
                </button>
                <button className="text-color-2 hover:accent-cyan transition-colors">
                  <FiFacebook className="w-4 sm:w-5 h-4 sm:h-5" />
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Featured Image */}
        <section className="py-6 sm:py-8">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img
                src={blogPost.image || "/placeholder.svg"}
                alt={blogPost.title}
                className="w-full h-48 sm:h-64 md:h-96 object-cover border border-color"
              />
            </motion.div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-8 sm:py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="prose prose-lg max-w-none"
            >
              <div
                className="text-color-1 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: blogPost.content }}
                style={{
                  fontSize: "16px",
                  lineHeight: "1.8",
                }}
              />
            </motion.div>

            {/* Tags */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-color"
            >
              <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-color-1">Tags:</h3>
              <div className="flex flex-wrap gap-2">
                {blogPost.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-accent-color border border-color px-2 sm:px-3 py-1 text-xs sm:text-sm text-color-2 hover:border-cyan-400 hover:accent-cyan transition-colors cursor-pointer"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Related Posts */}
        <section className="py-16 sm:py-20 bg-secondary-color">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-8 sm:mb-12"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 font-space-grotesk text-color-1">
                Related <span className="gradient-text">Articles</span>
              </h2>
              <p className="text-color-2 text-sm sm:text-base">Continue reading with these related insights</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {relatedPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-accent-color border border-color card-hover group"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      className="w-full h-40 sm:h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                      <span className="bg-accent-cyan text-black px-2 py-1 text-xs font-semibold">{post.category}</span>
                    </div>
                  </div>
                  <div className="p-4 sm:p-6">
                    <h3 className="text-base sm:text-lg font-bold text-color-1 group-hover:accent-cyan transition-colors mb-3 sm:mb-4">
                      {post.title}
                    </h3>
                    <Link
                      href={`/blog/${post.id}`}
                      className="accent-cyan font-semibold hover:text-cyan-300 transition-colors text-sm sm:text-base"
                    >
                      Read Article →
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-16 sm:py-20 bg-accent-color">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 font-space-grotesk text-color-1">
                Get More Insights Like This
              </h2>
              <p className="text-lg sm:text-xl text-color-2 mb-6 sm:mb-8">
                Subscribe to our newsletter for weekly digital marketing tips and industry updates
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

export default BlogDetail
