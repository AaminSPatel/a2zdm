"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiChevronDown,
  FiChevronRight,
  FiMenu,
  FiX,
  FiSearch,
  FiTrendingUp,
  FiGlobe,
  FiBarChart,
  FiActivity,
  FiDollarSign,
  FiDatabase,
  FiBookOpen,
} from "react-icons/fi";
import { useTech } from "./TechContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeService, setActiveService] = useState(null);
  const [showServices, setShowServices] = useState(false);
  const [expandedCategory, setExpandedCategory] = useState(null);
  const pathname = usePathname();

  const { serviceData } = useTech();

  // Helper to render icon components from string
  const renderIcon = (iconString) => {
    switch (iconString) {
      case "FiSearch":
        return <FiSearch className="w-4 h-4" />;
      case "FiGlobe":
        return <FiGlobe className="w-4 h-4" />;
      case "FiBarChart":
        return <FiBarChart className="w-4 h-4" />;
      case "FiActivity":
        return <FiActivity className="w-4 h-4" />;
      case "FiBookOpen":
        return <FiBookOpen className="w-4 h-4" />;
      case "FiDatabase":
        return <FiDatabase className="w-4 h-4" />;
      case "FiDollarSign":
        return <FiDollarSign className="w-4 h-4" />;
      default:
        return <FiTrendingUp className="w-4 h-4" />;
    }
  };

  const toggleCategory = (index) => {
    setExpandedCategory(expandedCategory === index ? null : index)
  }
  return (
    <nav className="bg-secondary-color border-b border-color sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center justify-center overflow-hidden">
              <img
                src="/logo6.png"
                alt="Logo"
                className="h-10 w-10 bg-white object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold font-space-grotesk text-color-1">
                A2ZDM Pvt. Ltd.
              </span>
              <span className="text-sm font-space-grotesk text-color-2 comforta">
                A Martech Company
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className={`text-color-1 hover:accent-cyan transition-colors ${
                pathname === "/" ? "accent-cyan" : ""
              }`}
            >
              Home
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setShowServices(true)}
              onMouseLeave={() => {
                setShowServices(false);
                setActiveService(null);
              }}
            >
              <div className="flex items-center space-x-1">
                <Link
                  href="/services"
                  className={`text-color-1 hover:accent-cyan transition-colors ${
                    pathname.startsWith("/services") ? "accent-cyan" : ""
                  }`}
                >
                  Services
                </Link>
                <motion.div
                  animate={{ rotate: showServices ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
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
                    className="absolute top-full left-0 mt-2 w-64 bg-accent-color border border-color shadow-xl rounded-t-md "
                  >
                    <div className="relative">
                      {/* Main services list */}
                      <div className="w-full">
                        {serviceData.map((category, index) => (
                          <div
                            key={index}
                            className="relative group"
                            onMouseEnter={() => setActiveService(index)}
                          >
                            <div className=" border-b-1 border-blue-200 h-[45px] flex items-center justify-between px-3 py-3 text-sm text-color-1 hover:bg-hover-bg transition-colors cursor-pointer">
                              <div className="flex items-center space-x-2">
                                {renderIcon(category.icon)}
                                <span>{category.title}</span>
                              </div>
                              <motion.div
                                animate={{
                                  rotate: activeService === index ? 90 : 0,
                                }}
                                transition={{ duration: 0.2 }}
                              >
                                <FiChevronRight className="w-4 h-4" />
                              </motion.div>
                            </div>

                            {/* Subservices panel */}
                            {activeService === index && (
                              <motion.div
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -10 }}
                                className="absolute left-full top-0 ml-0 w-64 bg-primary-color shadow-xl rounded-r-md"
                                style={{ height: "calc(100% + 2px)" }}
                              >
                                <div className="bg-primary-color">
                                  <div className="">
                                    {Object.entries(
                                      category.services || {}
                                    ).map(([slug, service]) => (
                                      <Link
                                        key={slug}
                                        href={`/services/${slug}`}
                                        className=" border-b-1 h-[45px] border-blue-200  px-3 flex items-center text-sm text-color-2 hover:text-color-1 hover:bg-accent-bg transition-colors "
                                      >
                                        {service.title}
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
            <Link href="/contact" className="btn-primary mr-3">
              Get Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-color-1 hover:accent-cyan"
          >
            {isOpen ? (
              <FiX className="w-6 h-6" />
            ) : (
              <FiMenu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-color overflow-y-auto max-h-[80vh]"
          >
            <div className="py-4 space-y-4">
              <Link href="/" className="block text-color-1 hover:accent-cyan" onClick={() => setIsOpen(false)}>
                Home
              </Link>

              {/* Mobile Services Dropdown */}
              <div>
                <button
                  onClick={() => setShowServices(!showServices)}
                  className="flex items-center justify-between w-full text-color-1 hover:accent-cyan"
                >
                  <Link href={'/services'}>Services</Link>
                 
                  <motion.div animate={{ rotate: showServices ? 180 : 0 }}>
                    <FiChevronDown className="w-4 h-4" />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {showServices && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="pl-4 mt-2 space-y-2"
                    >
                      {serviceData.map((category, index) => (
                        <div key={category.title} className="space-y-1">
                          <button
                            onClick={() => toggleCategory(index)}
                            className="flex items-center justify-between w-full text-color-2 hover:text-color-1"
                          >
                            <div className="flex items-center space-x-2">
                              {renderIcon(category.icon)}
                              <span>{category.title}</span>
                            </div>
                            <motion.div animate={{ rotate: expandedCategory === index ? 180 : 0 }}>
                              <FiChevronDown className="w-4 h-4" />
                            </motion.div>
                          </button>

                          <AnimatePresence>
                            {expandedCategory === index && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                className="pl-6 space-y-1"
                              >
                                {Object.entries(category.services || {}).map(
                                  ([slug, service]) => (
                                    <Link
                                      key={slug}
                                      href={`/services/${slug}`}
                                      className="block py-1 text-sm text-color-2 hover:text-color-1"
                                      onClick={() => setIsOpen(false)}
                                    >
                                      {service.title}
                                    </Link>
                                  )
                                )}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link
                href="/about"
                className="block text-color-1 hover:accent-cyan"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                href="/blogs"
                className="block text-color-1 hover:accent-cyan"
                onClick={() => setIsOpen(false)}
              >
                Blogs
              </Link>
              <Link 
                href="/contact" 
                className="block btn-primary w-fit"
                onClick={() => setIsOpen(false)}
              >
                Get Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
