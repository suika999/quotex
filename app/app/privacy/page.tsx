
import { Metadata } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { Shield, Lock, Eye, Database, UserCheck } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Privacy Policy - Data Protection | Market QX',
  description: 'Learn how Market QX protects your personal data and privacy. Our comprehensive privacy policy explains data collection, usage, and your rights.',
  keywords: 'privacy policy, data protection, personal data, Market QX privacy, GDPR compliance',
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Shield className="h-16 w-16 mx-auto mb-6 text-blue-300" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Your privacy and data security are our top priorities. Learn how we protect your information.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-8">
              <strong>Last updated:</strong> January 15, 2025
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8">
              <div className="flex items-center mb-3">
                <Lock className="h-6 w-6 text-blue-600 mr-2" />
                <h3 className="text-lg font-semibold text-blue-900">
                  Your Data is Protected
                </h3>
              </div>
              <p className="text-blue-800">
                Market QX is committed to protecting your privacy and ensuring the security of your personal information. 
                This policy explains how we collect, use, and safeguard your data.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <Database className="h-6 w-6 mr-2 text-blue-600" />
              Information We Collect
            </h2>
            <p className="text-gray-700 mb-6">
              We collect information you provide directly to us, such as when you create an account, 
              use our services, or contact us for support. This may include:
            </p>
            <ul className="list-disc pl-6 mb-8 text-gray-700 space-y-2">
              <li>Personal identification information (name, email address, phone number)</li>
              <li>Financial information necessary for trading activities</li>
              <li>Technical data about your device and how you use our platform</li>
              <li>Communication records when you contact our support team</li>
              <li>Trading history and account activity</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <Eye className="h-6 w-6 mr-2 text-blue-600" />
              How We Use Your Information
            </h2>
            <p className="text-gray-700 mb-6">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 mb-8 text-gray-700 space-y-2">
              <li>Provide, maintain, and improve our trading platform and services</li>
              <li>Process transactions and manage your account</li>
              <li>Communicate with you about your account and our services</li>
              <li>Comply with legal and regulatory requirements</li>
              <li>Detect and prevent fraud and security threats</li>
              <li>Provide customer support and respond to your inquiries</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <UserCheck className="h-6 w-6 mr-2 text-blue-600" />
              Your Rights and Choices
            </h2>
            <p className="text-gray-700 mb-6">
              You have certain rights regarding your personal information:
            </p>
            <ul className="list-disc pl-6 mb-8 text-gray-700 space-y-2">
              <li><strong>Access:</strong> You can request access to your personal data</li>
              <li><strong>Correction:</strong> You can request correction of inaccurate data</li>
              <li><strong>Deletion:</strong> You can request deletion of your data (subject to legal requirements)</li>
              <li><strong>Portability:</strong> You can request a copy of your data in a portable format</li>
              <li><strong>Objection:</strong> You can object to certain processing of your data</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Security</h2>
            <p className="text-gray-700 mb-6">
              We implement appropriate technical and organizational measures to protect your personal information against 
              unauthorized access, alteration, disclosure, or destruction. These measures include:
            </p>
            <ul className="list-disc pl-6 mb-8 text-gray-700 space-y-2">
              <li>SSL encryption for data transmission</li>
              <li>Secure data storage with access controls</li>
              <li>Regular security audits and monitoring</li>
              <li>Employee training on data protection</li>
              <li>Incident response procedures</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Retention</h2>
            <p className="text-gray-700 mb-8">
              We retain your personal information for as long as necessary to provide our services and comply with 
              legal obligations. When we no longer need your information, we securely delete or anonymize it.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">International Transfers</h2>
            <p className="text-gray-700 mb-8">
              Your information may be transferred to and processed in countries other than your own. We ensure 
              appropriate safeguards are in place to protect your data during international transfers.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Cookies and Tracking</h2>
            <p className="text-gray-700 mb-8">
              We use cookies and similar technologies to enhance your experience on our platform. You can 
              control cookie settings through your browser preferences.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Third-Party Services</h2>
            <p className="text-gray-700 mb-8">
              We may use third-party services to help operate our platform. These providers are contractually 
              bound to protect your information and use it only for the purposes we specify.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to This Policy</h2>
            <p className="text-gray-700 mb-8">
              We may update this privacy policy from time to time. We will notify you of any material changes 
              by posting the new policy on our website and updating the "Last updated" date.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-gray-700 mb-4">
              If you have any questions about this privacy policy or our data practices, please contact us:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700 mb-2"><strong>Email:</strong> privacy@market-qx.pro</p>
              <p className="text-gray-700 mb-2"><strong>Address:</strong> Market QX Privacy Office</p>
              <p className="text-gray-700"><strong>Phone:</strong> +1-800-MARKET-QX</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
