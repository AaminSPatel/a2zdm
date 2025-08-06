"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FiSearch, FiFilter, FiCalendar, FiUser, FiArrowRight, FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { useTech } from "@/components/TechContext";
import Head from "next/head";

const Blogs = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 6;
  
  const { blogs, loading, error } = useTech();

  // Define your specific categories
  const mainCategories = [
    "Search Engine Optimization",
    "Analytics",
    "Google Tag Manager",
    "Performance Marketing"
  ];

  const availableCategories = ["All", ...mainCategories, "Other"];

  // Filter blogs based on search and category
  const filteredBlogs = blogs.filter((blog) => {
    // Search term matching
    const matchesSearch =
      blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (blog.tags && blog.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())));

    // Category matching
    const matchesCategory = 
      selectedCategory === "All" ? true :
      selectedCategory === "Other" ? 
        !blog.categories?.some(cat => mainCategories.includes(cat)) :
        blog.categories?.includes(selectedCategory);
    
    return matchesSearch && matchesCategory;
  });

  // Rest of your component remains the same...
  // ... [keep all your existing JSX and other functions]
  // Pagination
  const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);
  const currentBlogs = filteredBlogs.slice(
    (currentPage - 1) * blogsPerPage,
    currentPage * blogsPerPage
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

if (loading) return (
  <div className="min-h-screen bg-primary-color py-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="bg-secondary-color border border-color rounded-lg overflow-hidden">
            <div className="animate-pulse">
              <div className="bg-gray-700 h-48 w-full"></div>
              <div className="p-6">
                <div className="h-4 bg-gray-700 rounded w-3/4 mb-4"></div>
                <div className="h-3 bg-gray-700 rounded w-full mb-2"></div>
                <div className="h-3 bg-gray-700 rounded w-5/6 mb-2"></div>
                <div className="h-3 bg-gray-700 rounded w-4/6 mb-6"></div>
                <div className="h-3 bg-gray-700 rounded w-1/4"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);  if (error) return <div className="min-h-screen flex items-center justify-center">Error: {error}</div>;

  return (
    <>
      <main className="min-h-screen bg-primary-color">
       <Head>
    <title>Digital Marketing Insights & Blog | A2ZDM</title>
    <meta name="description" content="Expert insights on SEO, analytics, performance marketing and digital trends. Learn actionable strategies to grow your business online." />
    <meta name="keywords" content="digital marketing blog, SEO tips, analytics guide, Google Tag Manager, performance marketing strategies" />
    <link rel="canonical" href="https://www.a2zdm.com/blogs" />
    
    {/* Open Graph / Facebook */}
    <meta property="og:type" content="website" />
    <meta property="og:title" content="Digital Marketing Insights | A2ZDM Blog" />
    <meta property="og:description" content="Actionable digital marketing strategies and industry insights from A2ZDM experts" />
    <meta property="og:image" content="https://www.a2zdm.com/images/blog-og-image.jpg" />
    <meta property="og:url" content="https://www.a2zdm.com/blogs" />
    <meta property="og:site_name" content="A2ZDM" />
    
    {/* Twitter */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="Digital Marketing Insights | A2ZDM Blog" />
    <meta name="twitter:description" content="Expert tips on SEO, analytics, and performance marketing strategies" />
    <meta name="twitter:image" content="https://www.a2zdm.com/images/blog-twitter-card.jpg" />
    
    {/* Schema.org markup */}
    <script type="application/ld+json">
      {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Blog",
        "headline": "Digital Marketing Insights",
        "description": "Expert articles on digital marketing strategies",
        "url": "https://www.a2zdm.com/blogs",
        "publisher": {
          "@type": "Organization",
          "name": "A2ZDM",
          "logo": {
            "@type": "ImageObject",
            "url": "https://www.a2zdm.com/logo.png"
          }
        }
      })}
    </script>
  </Head>
        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center bg-primary-color overflow-hidden">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-30"
              style={{
                backgroundImage: `linear-gradient(rgba(8, 47, 73, 0.7), rgba(8, 47, 73, 0.7)), url('/pcm.jpg')`,
              }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/30 via-transparent to-blue-900/30"></div>
          </div>

          {/* Content */}
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="inline-flex items-center bg-gradient-to-r from-cyan-400/10 to-blue-500/10 border border-cyan-400/30 px-4 py-2 mb-6"
              >
                <span className="w-2 h-2 bg-accent-cyan rounded-full mr-2 animate-pulse"></span>
                <span className="text-sm accent-cyan font-semibold">
                  Learn, Implement, Succeed Faster
                </span>
              </motion.div>

              <motion.h1
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-space-grotesk leading-tight text-white"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Digital Marketing <span className="gradient-text">Insights</span>
              </motion.h1>

              <motion.p
                className="text-lg sm:text-xl text-cyan-100 mb-8 leading-relaxed max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Stay ahead with expert insights on SEO, analytics, performance marketing, and the latest digital marketing trends
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-8 sm:py-12 bg-accent-color border-b border-color">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row gap-4 sm:gap-6 items-center justify-between">
              <div className="relative flex-1 max-w-md w-full">
                <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-color-2 w-4 sm:w-5 h-4 sm:h-5" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                    setCurrentPage(1);
                  }}
                  className="w-full pl-8 sm:pl-10 pr-4 py-2 sm:py-3 bg-secondary-color border border-color text-color-1 placeholder-color-2 focus:border-cyan-400 focus:outline-none text-sm sm:text-base"
                />
              </div>

              <div className="flex items-center space-x-3 sm:space-x-4 w-full md:w-auto">
                <FiFilter className="text-color-2 w-4 sm:w-5 h-4 sm:h-5 flex-shrink-0" />
                <select
                  value={selectedCategory}
                  onChange={(e) => {
                    setSelectedCategory(e.target.value);
                    setCurrentPage(1);
                  }}
                  className="bg-secondary-color border border-color text-color-1 px-3 sm:px-4 py-2 sm:py-3 focus:border-cyan-400 focus:outline-none w-full md:w-64 text-sm sm:text-base"
                >
                  {availableCategories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
            </div>

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
                  <BlogCard key={blog.id} blog={blog} index={index} />
                ))}
              </div>
            ) : (
              <NoResults 
                onClearFilters={() => {
                  setSearchTerm("");
                  setSelectedCategory("All");
                }}
              />
            )}

            {/* Pagination */}
            {totalPages > 1 && (
              <Pagination 
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            )}
          </div>
        </section>

        {/* Newsletter CTA */}
        <NewsletterCTA />
      </main>
    </>
  );
};

// BlogCard component
const BlogCard = ({ blog, index }) => (
  <motion.article
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: index * 0.1 }}
    viewport={{ once: true }}
    className="bg-secondary-color border border-color card-hover group"
  >
    <div className="relative overflow-hidden">
      <img
        src={blog.image}
        alt={blog.altText}
        className="w-full h-40 sm:h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        onError={(e) => { e.target.src = '/default-image.jpg' }}
      />
      <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
        <span className="bg-cyan-200 capitalize backdrop-blur-lg backdrop-opacity-10 text-black px-2 sm:px-3 py-1 text-xs sm:text-sm font-semibold">
          {blog.primaryCategory}
        </span>
      </div>
    </div>

    <div className="p-4 sm:p-6">
      <div className="flex items-center space-x-3 sm:space-x-4 text-xs sm:text-sm text-color-2 mb-3">
        <div className="flex items-center space-x-1">
          <FiCalendar className="w-3 sm:w-4 h-3 sm:h-4" />
          <span>{blog.date}</span>
        </div>
        <div className="flex items-center space-x-1">
          <FiUser className="w-3 sm:w-4 h-3 sm:h-4" />
          <span>{blog.author}</span>
        </div>
      </div>

      <h2 className="text-lg capitalize sm:text-xl font-bold mb-3 text-color-1 group-hover:accent-cyan transition-colors line-clamp-2">
        {blog.title}
      </h2>

      <p className="text-color-2 mb-4 line-clamp-3 leading-relaxed text-sm sm:text-base">
        {blog.excerpt}
      </p>

      <div className="flex items-center justify-between">
        <span className="text-xs sm:text-sm text-color-2">{blog.readTime}</span>
        <Link
          href={`/blogs/${blog.slug}`}
          className="flex items-center space-x-1 accent-cyan font-semibold hover:text-cyan-300 transition-colors group-hover:translate-x-1 text-sm sm:text-base"
        >
          <span>Read More</span>
          <FiArrowRight className="w-3 sm:w-4 h-3 sm:h-4" />
        </Link>
      </div>
    </div>
  </motion.article>
);

// NoResults component
const NoResults = ({ onClearFilters }) => (
  <div className="text-center py-16">
    <div className="text-4xl sm:text-6xl mb-4">🔍</div>
    <h3 className="text-xl sm:text-2xl font-bold mb-4 text-color-1">No articles found</h3>
    <p className="text-color-2 mb-6 text-sm sm:text-base">
      Try adjusting your search terms or category filter
    </p>
    <button
      onClick={onClearFilters}
      className="btn-primary"
    >
      Clear Filters
    </button>
  </div>
);

// Pagination component
const Pagination = ({ currentPage, totalPages, onPageChange }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
    className="flex justify-center items-center space-x-2 sm:space-x-4 mt-12 sm:mt-16"
  >
    <button
      onClick={() => onPageChange(currentPage - 1)}
      disabled={currentPage === 1}
      className="flex items-center space-x-2 px-3 sm:px-4 py-2 border border-color text-color-1 hover:border-cyan-400 hover:accent-cyan transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
    >
      <FiChevronLeft className="w-3 sm:w-4 h-3 sm:h-4" />
      <span className="hidden sm:inline">Previous</span>
    </button>

    <div className="flex space-x-1 sm:space-x-2">
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`w-8 sm:w-10 h-8 sm:h-10 flex items-center justify-center border transition-colors text-sm sm:text-base ${
            currentPage === page
              ? "bg-accent-cyan text-black border-cyan-400"
              : "border-color text-color-1 hover:border-cyan-400 hover:accent-cyan"
          }`}
        >
          {page}
        </button>
      ))}
    </div>

    <button
      onClick={() => onPageChange(currentPage + 1)}
      disabled={currentPage === totalPages}
      className="flex items-center space-x-2 px-3 sm:px-4 py-2 border border-color text-color-1 hover:border-cyan-400 hover:accent-cyan transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
    >
      <span className="hidden sm:inline">Next</span>
      <FiChevronRight className="w-3 sm:w-4 h-3 sm:h-4" />
    </button>
  </motion.div>
);

// NewsletterCTA component
const NewsletterCTA = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState({ text: '', isError: false });
  const { mobile_number } = useTech();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!email) {
      setMessage({ text: 'Please enter your email', isError: true });
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setMessage({ text: 'Please enter a valid email', isError: true });
      return;
    }

    setIsSubmitting(true);
    setMessage({ text: '', isError: false });

    try {
      const message = `New subscription: ${email}`;
      const whatsappUrl = `https://wa.me/${mobile_number}?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');
      
      setEmail('');
      setMessage({ text: 'Thank you for subscribing!', isError: false });
    } catch (error) {
      setMessage({ text: 'Failed to subscribe. Please try again.', isError: true });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
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
          <form onSubmit={handleSubmit} className="flex flex-col items-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto w-full">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-3 sm:px-4 py-2 sm:py-3 bg-secondary-color border border-color text-color-1 placeholder-color-2 focus:border-cyan-400 focus:outline-none text-sm sm:text-base"
                disabled={isSubmitting}
              />
              <button 
                type="submit" 
                className="btn-primary whitespace-nowrap"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Subscribing...' : 'Subscribe'}
              </button>
            </div>
            {message.text && (
              <p className={`mt-3 text-sm ${message.isError ? 'text-red-500' : 'text-green-500'}`}>
                {message.text}
              </p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Blogs;