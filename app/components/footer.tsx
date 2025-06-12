
import Link from 'next/link'
import { TrendingUp, Mail, Shield, AlertTriangle } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Risk Warning Banner */}
      <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-800 p-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start space-x-3">
            <AlertTriangle className="h-5 w-5 mt-0.5 flex-shrink-0" />
            <div className="text-sm">
              <p className="font-semibold mb-1">Risk Warning for Indian Traders:</p>
              <p>
                Trading involves substantial risk and may not be suitable for all investors. 
                Please ensure you understand the risks involved and comply with local regulations. 
                According to RBI guidelines, certain trading platforms may have restricted access in India. 
                Always verify the regulatory status before trading.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <TrendingUp className="h-8 w-8 text-blue-400" />
              <div className="flex flex-col">
                <span className="text-sm font-light text-gray-400 leading-none">MARKET</span>
                <span className="text-xl font-bold text-blue-400 leading-none">QX</span>
              </div>
            </Link>
            <p className="text-gray-400 mb-4 max-w-md">
              Advanced trading platform offering professional tools, comprehensive analytics, 
              and secure trading environment for traders worldwide.
            </p>
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <Shield className="h-4 w-4" />
              <span>Secure & Regulated Platform</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/demo" className="text-gray-400 hover:text-white transition-colors">
                  Demo Account
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-400 hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-white transition-colors">
                  Trading Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2 text-gray-400">
                <Mail className="h-4 w-4" />
                <span>24/7 Support</span>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/help" className="text-gray-400 hover:text-white transition-colors">
                  Help Center
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              © 2025 Market QX. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/risk-disclosure" className="text-gray-400 hover:text-white transition-colors">
                Risk Disclosure
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
