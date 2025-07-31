import Link from "next/link"
import { FiTwitter, FiLinkedin, FiFacebook, FiInstagram, FiMail, FiPhone, FiMapPin } from "react-icons/fi"

const Footer = () => {
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
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center justify-center">
                <span className="text-black font-bold text-lg">A</span>
              </div>
              <span className="text-xl font-bold font-space-grotesk text-color-1">A2ZDM</span>
            </div>
            <p className="text-color-2 mb-6 max-w-md">
              We build data-smart digital strategies—combining SEO, analytics, and performance marketing to help brands
              grow faster and smarter.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-3 text-color-2">
                <FiMapPin className="w-4 h-4 flex-shrink-0" />
                <span className="text-sm md:text-base">Indore, Madhya Pradesh, India</span>
              </div>
              <div className="flex items-center space-x-3 text-color-2">
                <FiMail className="w-4 h-4 flex-shrink-0" />
                <span className="text-sm md:text-base">hello@a2zdm.com</span>
              </div>
              <div className="flex items-center space-x-3 text-color-2">
                <FiPhone className="w-4 h-4 flex-shrink-0" />
                <span className="text-sm md:text-base">+91 98765 43210</span>
              </div>
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
                  href="/services/seo"
                  className="text-color-2 hover:accent-cyan transition-colors text-sm md:text-base"
                >
                  SEO Services
                </Link>
              </li>
              <li>
                <Link
                  href="/services/analytics"
                  className="text-color-2 hover:accent-cyan transition-colors text-sm md:text-base"
                >
                  Analytics
                </Link>
              </li>
              <li>
                <Link
                  href="/services/ppc"
                  className="text-color-2 hover:accent-cyan transition-colors text-sm md:text-base"
                >
                  PPC Management
                </Link>
              </li>
              <li>
                <Link
                  href="/services/business-intelligence"
                  className="text-color-2 hover:accent-cyan transition-colors text-sm md:text-base"
                >
                  Business Intelligence
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="border-t border-color mt-8 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex space-x-4">
            <a href="#" className="text-color-2 hover:accent-cyan transition-colors">
              <FiTwitter className="w-5 h-5" />
            </a>
            <a href="#" className="text-color-2 hover:accent-cyan transition-colors">
              <FiLinkedin className="w-5 h-5" />
            </a>
            <a href="#" className="text-color-2 hover:accent-cyan transition-colors">
              <FiFacebook className="w-5 h-5" />
            </a>
            <a href="#" className="text-color-2 hover:accent-cyan transition-colors">
              <FiInstagram className="w-5 h-5" />
            </a>
          </div>
          <p className="text-color-2 text-sm text-center md:text-left">© 2024 A2ZDM Pvt. Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
