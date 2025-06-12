
import { Metadata } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { FileText, AlertTriangle, Scale, Shield } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Terms of Service - Legal Agreement | Market QX',
  description: 'Read Market QX terms of service and legal agreement. Understand your rights and obligations when using our trading platform.',
  keywords: 'terms of service, legal agreement, Market QX terms, trading terms, user agreement',
}

export default function TermsPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <FileText className="h-16 w-16 mx-auto mb-6 text-blue-300" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Terms of Service
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Legal agreement governing your use of Market QX trading platform and services.
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

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-8">
              <div className="flex items-center mb-3">
                <AlertTriangle className="h-6 w-6 text-yellow-600 mr-2" />
                <h3 className="text-lg font-semibold text-yellow-800">
                  Important Legal Agreement
                </h3>
              </div>
              <p className="text-yellow-700">
                By using Market QX services, you agree to be bound by these terms. Please read them carefully 
                before using our platform.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <Scale className="h-6 w-6 mr-2 text-blue-600" />
              Acceptance of Terms
            </h2>
            <p className="text-gray-700 mb-8">
              By accessing or using Market QX platform, you agree to be bound by these Terms of Service and all 
              applicable laws and regulations. If you do not agree with any of these terms, you are prohibited 
              from using or accessing this site.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Eligibility</h2>
            <p className="text-gray-700 mb-6">
              To use our services, you must:
            </p>
            <ul className="list-disc pl-6 mb-8 text-gray-700 space-y-2">
              <li>Be at least 18 years old or the age of majority in your jurisdiction</li>
              <li>Have the legal capacity to enter into binding agreements</li>
              <li>Not be prohibited from using financial services under applicable laws</li>
              <li>Provide accurate and complete information during registration</li>
              <li>Comply with all local laws and regulations regarding trading</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Account Registration and Security</h2>
            <p className="text-gray-700 mb-6">
              When creating an account, you agree to:
            </p>
            <ul className="list-disc pl-6 mb-8 text-gray-700 space-y-2">
              <li>Provide accurate, current, and complete information</li>
              <li>Maintain and update your information as necessary</li>
              <li>Keep your login credentials secure and confidential</li>
              <li>Notify us immediately of any unauthorized access</li>
              <li>Be responsible for all activities under your account</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Trading Services</h2>
            <p className="text-gray-700 mb-6">
              Our platform provides access to various financial instruments. You acknowledge that:
            </p>
            <ul className="list-disc pl-6 mb-8 text-gray-700 space-y-2">
              <li>Trading involves substantial risk and may not be suitable for all investors</li>
              <li>Past performance does not guarantee future results</li>
              <li>You may lose some or all of your invested capital</li>
              <li>Market conditions can change rapidly and unpredictably</li>
              <li>You are responsible for your own trading decisions</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Prohibited Activities</h2>
            <p className="text-gray-700 mb-6">
              You agree not to:
            </p>
            <ul className="list-disc pl-6 mb-8 text-gray-700 space-y-2">
              <li>Use the platform for any illegal or unauthorized purpose</li>
              <li>Attempt to manipulate market prices or engage in market abuse</li>
              <li>Use automated trading systems without authorization</li>
              <li>Share your account credentials with third parties</li>
              <li>Reverse engineer or attempt to access our source code</li>
              <li>Interfere with the platform's security features</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Fees and Payments</h2>
            <p className="text-gray-700 mb-8">
              We may charge fees for certain services. All applicable fees will be clearly disclosed before 
              you incur them. You are responsible for all taxes related to your trading activities.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Intellectual Property</h2>
            <p className="text-gray-700 mb-8">
              All content, features, and functionality of our platform are owned by Market QX and are protected 
              by copyright, trademark, and other intellectual property laws. You may not reproduce, distribute, 
              or create derivative works without our written permission.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Disclaimers and Limitations</h2>
            <p className="text-gray-700 mb-6">
              Our platform is provided "as is" without warranties of any kind. We disclaim all warranties, 
              express or implied, including but not limited to:
            </p>
            <ul className="list-disc pl-6 mb-8 text-gray-700 space-y-2">
              <li>Merchantability and fitness for a particular purpose</li>
              <li>Accuracy, reliability, or completeness of information</li>
              <li>Uninterrupted or error-free operation</li>
              <li>Security of data transmission</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Indemnification</h2>
            <p className="text-gray-700 mb-8">
              You agree to indemnify and hold harmless Market QX from any claims, damages, or expenses arising 
              from your use of our services, violation of these terms, or infringement of any rights of another party.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Termination</h2>
            <p className="text-gray-700 mb-8">
              We may terminate or suspend your account at any time for violation of these terms or for any other 
              reason. Upon termination, your right to use the platform ceases immediately.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Governing Law</h2>
            <p className="text-gray-700 mb-8">
              These terms are governed by and construed in accordance with applicable laws. Any disputes will be 
              resolved through binding arbitration or in courts of competent jurisdiction.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to Terms</h2>
            <p className="text-gray-700 mb-8">
              We reserve the right to modify these terms at any time. We will notify you of material changes, 
              and continued use of our services constitutes acceptance of the modified terms.
            </p>

            <div className="bg-red-50 border-l-4 border-red-400 p-6 mb-8">
              <div className="flex items-center mb-3">
                <Shield className="h-6 w-6 text-red-600 mr-2" />
                <h3 className="text-lg font-semibold text-red-800">
                  Risk Warning for Indian Traders
                </h3>
              </div>
              <p className="text-red-700">
                Trading in financial instruments may be subject to restrictions in India. Please ensure compliance 
                with RBI and SEBI regulations before using our services. Consult with local financial advisors 
                regarding the legality of trading activities in your jurisdiction.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
            <p className="text-gray-700 mb-4">
              If you have questions about these terms, please contact us:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700 mb-2"><strong>Email:</strong> legal@market-qx.pro</p>
              <p className="text-gray-700 mb-2"><strong>Address:</strong> Market QX Legal Department</p>
              <p className="text-gray-700"><strong>Phone:</strong> +1-800-MARKET-QX</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
