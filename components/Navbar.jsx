"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { FiChevronDown, FiChevronRight, FiMenu, FiX, FiSearch, FiBarChart, FiTarget, FiDatabase, FiMousePointer } from "react-icons/fi"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeService, setActiveService] = useState(null)
  const [showServices, setShowServices] = useState(false)
  const pathname = usePathname()

  const services = {
    "SEO Services": {
      icon: <FiSearch className="w-4 h-4" />,
      items: [
        { name: "Technical SEO", href: "/services/technical-seo" },
        { name: "Link-Earning", href: "/services/link-earning" },
        { name: "PR & Outreach", href: "/services/pr-outreach" },
        { name: "Ecommerce SEO", href: "/services/ecommerce-seo" },
        { name: "CBD SEO", href: "/services/cbd-seo" },
        { name: "Local SEO", href: "/services/local-seo" },
      ],
    },
    "Digital Analytics": {
      icon: <FiBarChart className="w-4 h-4" />,
      items: [
        { name: "GA4 Setup", href: "/services/ga4-setup" },
        { name: "Google Tag Manager", href: "/services/gtm" },
        { name: "Adobe Analytics", href: "/services/adobe-analytics" },
        { name: "Conversion Tracking", href: "/services/conversion-tracking" },
      ],
    },
    "Performance Marketing": {
      icon: <FiTarget className="w-4 h-4" />,
      items: [
        { name: "Cookie Consent", href: "/services/cookie-consent" },
        { name: "Tag Monitoring", href: "/services/tag-monitoring" },
        { name: "Predictive Analytics", href: "/services/predictive-analytics" },
      ],
    },
    "Business Intelligence": {
      icon: <FiDatabase className="w-4 h-4" />,
      items: [
        { name: "Looker Studio", href: "/services/looker-studio" },
        { name: "BigQuery", href: "/services/bigquery" },
        { name: "Power BI", href: "/services/power-bi" },
      ],
    },
    "PPC Management": {
      icon: <FiMousePointer className="w-4 h-4" />,
      items: [
        { name: "Pay Per Click", href: "/services/ppc" },
        { name: "Performance Measurement", href: "/services/performance-measurement" },
        { name: "Case Studies", href: "/services/case-studies" },
      ],
    },
  }

  return (
    <nav className="bg-secondary-color border-b border-color sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center justify-center rounded-full overflow-hidden">
              <img src="/logo1.png" alt="Logo" className="h-8 w-8 bg-white object-cover " />
            </div>
            <div className="flex flex-col">
  <span className="text-xl font-bold font-space-grotesk text-color-1">A2ZDM Pvt. Ltd.</span>
            <span className="text-sm font-space-grotesk text-color-2 comforta">A Martech Company</span>
          
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className={`text-color-1 hover:accent-cyan transition-colors ${pathname === "/" ? "accent-cyan" : ""}`}
            >
              Home
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setShowServices(true)}
              onMouseLeave={() => {
                setShowServices(false)
                setActiveService(null)
              }}
            >
              <div className="flex items-center space-x-1">
                <Link
                  href="/services"
                  className="text-color-1 hover:accent-cyan transition-colors"
                >
                  Services
                </Link>
                <motion.div animate={{ rotate: showServices ? 180 : 0 }} transition={{ duration: 0.2 }}>
                  <FiChevronDown className="w-4 h-4" />
                </motion.div>
              </div>

              <AnimatePresence>
                {showServices && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-56 bg-accent-color border border-color shadow-xl rounded-md"
                  >
                    <div className="relative">
                      {/* Main services list */}
                      <div className="w-full">
                        {Object.entries(services).map(([category, data]) => (
                          <div
                            key={category}
                            className="relative group"
                            onMouseEnter={() => setActiveService(category)}
                          >
                            <div className="flex items-center justify-between px-4 py-3 text-sm text-color-1 hover:bg-hover-bg transition-colors cursor-pointer">
                              <div className="flex items-center space-x-2">
                                {data.icon}
                                <span>{category}</span>
                              </div>
                              <motion.div
                                animate={{ rotate: activeService === category ? 90 : 0 }}
                                transition={{ duration: 0.2 }}
                              >
                                <FiChevronRight className="w-4 h-4" />
                              </motion.div>
                            </div>

                            {/* Subservices panel - positioned absolutely next to the hovered item */}
                            {activeService === category && (
                              <motion.div
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -10 }}
                                className="absolute left-full top-0 ml-[-1px] w-56 bg-primary-color border border-color shadow-xl rounded-r-md"
                                style={{ height: 'calc(100% + 2px)' }}
                              >
                                <div className="p-3 bg-primary-color">
                                  <div className="space-y-1">
                                    {data.items.map((item) => (
                                      <Link
                                        key={item.name}
                                        href={item.href}
                                        className="block px-3 py-2 text-sm text-color-2 hover:text-color-1 hover:bg-accent-bg transition-colors rounded"
                                      >
                                        {item.name}
                                      </Link>
                                    ))}
                                  </div>
                                </div>
                              </motion.div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              href="/about"
              className={`text-color-1 hover:accent-cyan transition-colors ${
                pathname === "/about" ? "accent-cyan" : ""
              }`}
            >
              About
            </Link>
            <Link
              href="/blogs"
              className={`text-color-1 hover:accent-cyan transition-colors ${
                pathname === "/blogs" ? "accent-cyan" : ""
              }`}
            >
              Blogs
            </Link>
            <Link href="/contact" className="btn-primary">
              Get Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-color-1 hover:accent-cyan">
            {isOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-color"
            >
              <div className="py-4 space-y-4">
                <Link href="/" className="block text-color-1 hover:accent-cyan">
                  Home
                </Link>
                <Link href="/services" className="block text-color-1 hover:accent-cyan">
                  Services
                </Link>
                <Link href="/about" className="block text-color-1 hover:accent-cyan">
                  About
                </Link>
                <Link href="/blogs" className="block text-color-1 hover:accent-cyan">
                  Blogs
                </Link>
                <Link href="/contact" className="block btn-primary w-fit">
                  Get Quote
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}

export default Navbar