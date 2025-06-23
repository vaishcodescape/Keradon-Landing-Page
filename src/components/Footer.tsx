'use client';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaDiscord } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-black/90 backdrop-blur-xl border-t border-gray-800/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Company Info */}
          <div className="space-y-3 sm:space-y-4">
            <h3 className="text-white text-lg sm:text-xl font-bold">Keradon</h3>
            <p className="text-white/60 text-xs sm:text-sm leading-relaxed">
              Dive deep into data with our powerful analytics and visualization tools.
            </p>
            <div className="flex space-x-3 sm:space-x-4">
              <a href="https://github.com/vaishcodescape/Keradon-Citadel.git" className="text-white/60 hover:text-white transition-colors">
                <FaGithub className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
              <a href="https://www.linkedin.com/company/keradon/" className="text-white/60 hover:text-white transition-colors">
                <FaLinkedin className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                <FaDiscord className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Product</h3>
            <ul className="space-y-1 sm:space-y-2">
              <li>
                <Link href="/features" className="text-white/60 hover:text-white transition-colors text-xs sm:text-sm">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-white/60 hover:text-white transition-colors text-xs sm:text-sm">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/docs" className="text-white/60 hover:text-white transition-colors text-xs sm:text-sm">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="/updates" className="text-white/60 hover:text-white transition-colors text-xs sm:text-sm">
                  Updates
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Company</h3>
            <ul className="space-y-1 sm:space-y-2">
              <li>
                <Link href="/about" className="text-white/60 hover:text-white transition-colors text-xs sm:text-sm">
                  About
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-white/60 hover:text-white transition-colors text-xs sm:text-sm">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-white/60 hover:text-white transition-colors text-xs sm:text-sm">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/60 hover:text-white transition-colors text-xs sm:text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Legal</h3>
            <ul className="space-y-1 sm:space-y-2">
              <li>
                <Link href="/privacy" className="text-white/60 hover:text-white transition-colors text-xs sm:text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-white/60 hover:text-white transition-colors text-xs sm:text-sm">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/security" className="text-white/60 hover:text-white transition-colors text-xs sm:text-sm">
                  Security
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="text-white/60 hover:text-white transition-colors text-xs sm:text-sm">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-800/30">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-3 sm:space-y-0">
            <p className="text-white/60 text-xs sm:text-sm text-center sm:text-left">
              © {new Date().getFullYear()} Keradon All rights reserved.
            </p>
            <div className="flex space-x-4 sm:space-x-6">
              <Link href="/status" className="text-white/60 hover:text-white transition-colors text-xs sm:text-sm">
                Status
              </Link>
              <Link href="/sitemap" className="text-white/60 hover:text-white transition-colors text-xs sm:text-sm">
                Sitemap
              </Link>
              <Link href="/accessibility" className="text-white/60 hover:text-white transition-colors text-xs sm:text-sm">
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 