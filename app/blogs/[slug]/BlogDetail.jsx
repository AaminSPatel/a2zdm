// app/blogs/[slug]/BlogDetail.js
"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Head from "next/head";
import { FiCalendar, FiUser, FiClock, FiArrowLeft, FiShare2, FiTwitter, FiLinkedin, FiFacebook, FiArrowRight } from "react-icons/fi";

const BlogDetail = ({ blog, relatedPosts, slug }) => {
  const [seoData, setSeoData] = useState({});
  const siteUrl = "https://a2zdm.com";
  const logoUrl = "/logo.png";

  useEffect(() => {
    if (blog) {
      const wpSeoData = blog.yoast_head_json || {};
      
      setSeoData({
        title: wpSeoData.title || blog.title || '',
        metaDesc: wpSeoData.description || blog.excerpt || '',
        canonical: wpSeoData.canonical || `${siteUrl}/blogs/${slug}`,
        ogTitle: wpSeoData.og_title || blog.title || '',
        ogDescription: wpSeoData.og_description || blog.excerpt || '',
        ogImage: wpSeoData.og_image?.[0]?.url || blog.image,
        twitterTitle: wpSeoData.twitter_title || blog.title || '',
        twitterDescription: wpSeoData.twitter_description || blog.excerpt || '',
        twitterImage: wpSeoData.twitter_image || blog.image
      });
    }
  }, [blog, slug, siteUrl]);

  if (!blog) {
    return (
      <div className="min-h-screen bg-primary-color flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4 text-color-1">Post Not Found</h1>
          <p className="text-color-2 mb-6">The requested blog post could not be found.</p>
          <Link href="/blogs" className="btn-primary inline-flex items-center gap-2">
            <FiArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
     <>
    <Head>
  <title>{seoData.title}</title>
  <meta name="description" content={seoData.metaDesc} />
  <link rel="canonical" href={seoData.canonical} />
  
  <meta property="og:type" content="article" />
  <meta property="og:title" content={seoData.ogTitle} />
  <meta property="og:description" content={seoData.ogDescription} />
  <meta property="og:image" content={seoData.ogImage} />
  <meta property="og:url" content={seoData.canonical} />
  
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={seoData.twitterTitle} />
  <meta name="twitter:description" content={seoData.twitterDescription} />
  <meta name="twitter:image" content={seoData.twitterImage} />
  
  <meta property="article:published_time" content={blog.date} />
  <meta property="article:author" content={blog.author} />
  {blog.tags?.map(tag => (
    <meta property="article:tag" content={tag} key={tag} />
  ))}

  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": seoData.title,
      "description": seoData.metaDesc,
      "image": seoData.ogImage,
      "author": {
        "@type": "Person",
        "name": "Ateeq Patel"
      },
      "publisher": {
        "@type": "Organization",
        "name": "A2ZDM Private Limited",
        "logo": {
          "@type": "ImageObject",
          "url": "/logo6.png" // Replace with your dynamic logo URL
        }
      },
      "url": seoData.canonical,
      "datePublished": blog.date,
      "dateModified": blog.modifiedDate || blog.date // Use modified date if available, otherwise fallback to published date
    })}
  </script>
</Head>
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
              <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                {blog.categories.map((category) => (
                  <span key={category} className="bg-accent-cyan text-black px-2 sm:px-3 py-1 text-xs sm:text-sm font-semibold">
                    {category}
                  </span>
                ))}
              </div>

              <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 sm:mb-6 font-space-grotesk text-color-1">
                {blog.title}
              </h1>

              <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-color-2 mb-6 sm:mb-8 text-sm sm:text-base">
                <div className="flex items-center space-x-2">
                  <FiUser className="w-3 sm:w-4 h-3 sm:h-4" />
                  <span>{blog.author}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FiCalendar className="w-3 sm:w-4 h-3 sm:h-4" />
                  <span>{blog.date}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FiClock className="w-3 sm:w-4 h-3 sm:h-4" />
                  <span>{blog.readTime}</span>
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
                src={blog.image}
                alt={blog.altText}
                className="w-full h-48 sm:h-64 md:h-96 object-cover border border-color"
                onError={(e) => {
                  e.target.src = '/default-image.jpg';
                }}
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
                className="text-color-1 leading-relaxed poppin"
                dangerouslySetInnerHTML={{ __html: blog.content }}
                style={{
                  fontSize: "18px",
                  lineHeight: "1.9",
                }}
              />
            </motion.div>

            {/* Tags */}
            {blog.tags.length > 0 &&<motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-color"
            >
              <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-color-1">Tags:</h3>
              <div className="flex flex-wrap gap-2">
                {blog.tags?.map((tag) => (
                  <span
                    key={tag}
                    className="bg-accent-color border border-color px-2 sm:px-3 py-1 text-xs sm:text-sm text-color-1 hover:accent-cyan transition-colors cursor-pointer"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>}
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
                  className="bg-primary-color border border-color card-hover group"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.altText}
                      className="w-full h-40 sm:h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        e.target.src = '/default-image.jpg';
                      }}
                    />
                    <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                      <span className="bg-accent-cyan text-black px-2 sm:px-3 py-1 text-xs sm:text-sm font-semibold">
                        {post.categories[0]}
                      </span>
                    </div>
                  </div>
                  <div className="p-4 sm:p-6">
                    <h3 className="text-base sm:text-lg font-bold text-color-1 group-hover:accent-cyan transition-colors mb-3 sm:mb-4 line-clamp-2">
                      {post.title}
                    </h3>
                    <Link
                      href={`/blogs/${post.slug}`}
                      className="flex items-center space-x-1 accent-cyan font-semibold hover:text-cyan-300 transition-colors group-hover:translate-x-1 text-sm sm:text-base"
                    >
                      <span>Read More</span>
                      <FiArrowRight className="w-3 sm:w-4 h-3 sm:h-4" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-16 sm:py-20 bg-primary-color">
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
    </>
  );
};

export default BlogDetail;