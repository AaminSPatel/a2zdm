'use client'
import Link from "next/link"
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi"
import { FaGoogle, FaFacebookF, FaLinkedinIn, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa"
import { SiTrustpilot } from "react-icons/si"
import { useTech } from "./TechContext"

const Footer = () => {
  const {mobile_number} = useTech()
  return (
    <footer className="bg-secondary-color border-t border-color">
      {/* CTA Section */}
      <div className="bg-accent-color py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 font-space-grotesk text-color-1">
            Where strategy meets execution—and results speak for themselves.
          </h2>
          <Link href="/contact" className="btn-primary inline-block">
            Talk to an expert
          </Link>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center justify-center overflow-hidden">
                <img
                  src="/logo6.png"
                  alt="Logo"
                  className="h-10 w-10 bg-white object-cover"
                />
              </div>
              <span className="text-xl font-bold font-space-grotesk text-color-1">A2ZDM Private Limited</span>
            </div>
            <p className="text-color-2 mb-6 max-w-md">
              We build data-smart digital strategies—combining SEO, analytics, and performance marketing to help brands
              grow faster and smarter.
            </p>
            
            {/* Google Reviews Badge */}
            <div className="mb-6 p-4 bg-white/10 border border-color rounded-lg">
              <div className="flex items-center gap-3 mb-2">
                <FaGoogle className="text-yellow-400 text-xl" />
                <span className="font-medium text-color-1">Google Reviews</span>
              </div>
              <div className="flex items-center gap-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
                <span className="text-color-2 text-sm">5.0 (24 reviews)</span>
              </div>
              <a 
                href="https://g.page/a2zdm/review" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block mt-3 text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                Leave us a review →
              </a>
            </div>

            <div className="space-y-2">
              <a 
                href="https://maps.google.com?q=22+B+Sher+Shah+Suri+Nagar-B+Khajrana,Indore" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-color-2 hover:text-cyan-400 transition-colors"
              >
                <FiMapPin className="w-4 h-4 flex-shrink-0" />
                <span className="text-sm md:text-base">
                  22 B Sher Shah Suri Nagar-B Khajrana, Indore, Madhya Pradesh, India
                </span>
              </a>

              <a 
                href="mailto:info@a2zdm.com" 
                className="flex items-center space-x-3 text-color-2 hover:text-cyan-400 transition-colors"
              >
                <FiMail className="w-4 h-4 flex-shrink-0" />
                <span className="text-sm md:text-base">info@a2zdm.com</span>
              </a>

              <a 
                href={`tel:+91${mobile_number.replace(/\D/g, '')}`} 
                className="flex items-center space-x-3 text-color-2 hover:text-cyan-400 transition-colors"
              >
                <FiPhone className="w-4 h-4 flex-shrink-0" />
                <span className="text-sm md:text-base">+91 {mobile_number}</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-color-1">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-color-2 hover:accent-cyan transition-colors text-sm md:text-base">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-color-2 hover:accent-cyan transition-colors text-sm md:text-base"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-color-2 hover:accent-cyan transition-colors text-sm md:text-base">
                  About
                </Link>
              </li>
              <li>
                <Link href="/blogs" className="text-color-2 hover:accent-cyan transition-colors text-sm md:text-base">
                  Blogs
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-color-2 hover:accent-cyan transition-colors text-sm md:text-base">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-color-1">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services/technical-seo"
                  className="text-color-2 hover:accent-cyan transition-colors text-sm md:text-base"
                >
                  SEO Services
                </Link>
              </li>
              <li>
                <Link
                  href="/services/ga4-analytics"
                  className="text-color-2 hover:accent-cyan transition-colors text-sm md:text-base"
                >
                  GA4 Analytics
                </Link>
              </li>
              <li>
                <Link
                  href="/services/performance-measurement"
                  className="text-color-2 hover:accent-cyan transition-colors text-sm md:text-base"
                >
                  Performance Measurement
                </Link>
              </li>
              <li>
                <Link
                  href="/services/customer-segmentation"
                  className="text-color-2 hover:accent-cyan transition-colors text-sm md:text-base"
                >
                  Customer Segmentation
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="border-t border-color mt-8 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex space-x-4">
            <a href="#" className="text-color-2 hover:text-[#1DA1F2] transition-colors">
              <FaTwitter className="w-5 h-5" />
            </a>
            <a href="#" className="text-color-2 hover:text-[#0077B5] transition-colors">
              <FaLinkedinIn className="w-5 h-5" />
            </a>
            <a href="#" className="text-color-2 hover:text-[#4267B2] transition-colors">
              <FaFacebookF className="w-5 h-5" />
            </a>
            <a href="#" className="text-color-2 hover:text-[#E1306C] transition-colors">
              <FaInstagram className="w-5 h-5" />
            </a>
            <a href="#" className="text-color-2 hover:text-[#FF0000] transition-colors">
              <FaYoutube className="w-5 h-5" />
            </a>
            <a href="#" className="text-color-2 hover:text-[#00B67A] transition-colors">
              <SiTrustpilot className="w-5 h-5" />
            </a>
          </div>
          <p className="text-color-2 text-sm text-center md:text-left">© 2024 A2ZDM Pvt. Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer