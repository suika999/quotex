
import { Metadata } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'
import { TrendingUp, Shield, CheckCircle } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Sign Up - Create Trading Account | Market QX Registration',
  description: 'Create your Market QX trading account in minutes. Start with a free demo or open a live account. Secure registration with instant access.',
  keywords: 'sign up, create account, trading registration, Market QX registration, open trading account',
}

const benefits = [
  'Access to 400+ trading instruments',
  'Advanced charting and analysis tools',
  'Real-time market data and signals',
  '24/7 customer support',
  'Mobile and web trading platforms',
  'Educational resources and tutorials'
]

export default function SignUpPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      
      <section className="pt-24 pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Side - Benefits */}
            <div className="lg:pt-8">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Start Your Trading Journey
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Join thousands of traders who trust Market QX for their trading needs. 
                Create your account and start trading in minutes.
              </p>
              
              <div className="space-y-4 mb-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
              
              <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
                <div className="flex items-center mb-3">
                  <Shield className="h-6 w-6 text-blue-600 mr-2" />
                  <h3 className="text-lg font-semibold text-blue-900">
                    Secure & Regulated
                  </h3>
                </div>
                <p className="text-blue-800 text-sm">
                  Your funds and personal data are protected with bank-level security. 
                  We comply with international financial regulations and maintain the 
                  highest standards of data protection.
                </p>
              </div>
            </div>
            
            {/* Right Side - Registration Form */}
            <div>
              <Card className="shadow-xl border-0">
                <CardHeader className="text-center pb-4">
                  <div className="flex justify-center mb-4">
                    <Link href="/" className="inline-flex items-center space-x-2">
                      <TrendingUp className="h-8 w-8 text-blue-600" />
                      <div className="flex flex-col">
                        <span className="text-sm font-light text-gray-600 leading-none">MARKET</span>
                        <span className="text-xl font-bold text-blue-600 leading-none">QX</span>
                      </div>
                    </Link>
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-900">
                    Create Your Account
                  </CardTitle>
                  <p className="text-gray-600">
                    Start trading in less than 2 minutes
                  </p>
                </CardHeader>
                
                <CardContent className="p-6">
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName" className="text-sm font-medium text-gray-700">
                          First Name
                        </Label>
                        <Input
                          id="firstName"
                          type="text"
                          placeholder="Enter first name"
                          className="mt-1"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName" className="text-sm font-medium text-gray-700">
                          Last Name
                        </Label>
                        <Input
                          id="lastName"
                          type="text"
                          placeholder="Enter last name"
                          className="mt-1"
                          required
                        />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                        Email Address
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        className="mt-1"
                        required
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="phone" className="text-sm font-medium text-gray-700">
                        Phone Number
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="Enter phone number"
                        className="mt-1"
                        required
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="country" className="text-sm font-medium text-gray-700">
                        Country
                      </Label>
                      <select
                        id="country"
                        className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      >
                        <option value="">Select your country</option>
                        <option value="IN">India</option>
                        <option value="US">United States</option>
                        <option value="GB">United Kingdom</option>
                        <option value="DE">Germany</option>
                        <option value="FR">France</option>
                        <option value="AU">Australia</option>
                        <option value="CA">Canada</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    
                    <div>
                      <Label htmlFor="password" className="text-sm font-medium text-gray-700">
                        Password
                      </Label>
                      <Input
                        id="password"
                        type="password"
                        placeholder="Create a strong password"
                        className="mt-1"
                        required
                      />
                      <p className="text-xs text-gray-500 mt-1">
                        Must be at least 8 characters with numbers and letters
                      </p>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex items-start space-x-2">
                        <Checkbox id="terms" className="mt-1" />
                        <Label htmlFor="terms" className="text-sm text-gray-600 leading-relaxed">
                          I agree to the{' '}
                          <Link href="/terms" className="text-blue-600 hover:text-blue-700">
                            Terms of Service
                          </Link>{' '}
                          and{' '}
                          <Link href="/privacy" className="text-blue-600 hover:text-blue-700">
                            Privacy Policy
                          </Link>
                        </Label>
                      </div>
                      
                      <div className="flex items-start space-x-2">
                        <Checkbox id="risk" className="mt-1" />
                        <Label htmlFor="risk" className="text-sm text-gray-600 leading-relaxed">
                          I understand that trading involves risk and I may lose my invested capital
                        </Label>
                      </div>
                      
                      <div className="flex items-start space-x-2">
                        <Checkbox id="marketing" className="mt-1" />
                        <Label htmlFor="marketing" className="text-sm text-gray-600 leading-relaxed">
                          I agree to receive marketing communications (optional)
                        </Label>
                      </div>
                    </div>
                    
                    <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3">
                      Create Account
                    </Button>
                    
                    <div className="text-center">
                      <span className="text-gray-600">Already have an account? </span>
                      <Link href="/login" className="text-blue-600 hover:text-blue-700 font-medium">
                        Sign in
                      </Link>
                    </div>
                  </form>
                  
                  {/* Demo Account Option */}
                  <div className="mt-6 text-center p-4 bg-green-50 rounded-lg border border-green-200">
                    <p className="text-sm text-green-800 mb-3">
                      Want to practice first? Try our demo account
                    </p>
                    <Link href="/demo">
                      <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
                        Open Demo Account
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Risk Warning */}
      <section className="py-12 bg-yellow-50 border-l-4 border-yellow-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start space-x-3">
            <Shield className="h-6 w-6 text-yellow-600 mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-lg font-semibold text-yellow-800 mb-2">
                Important Risk Disclosure
              </h3>
              <p className="text-yellow-700 leading-relaxed">
                Trading involves substantial risk and may not be suitable for all investors. 
                You could lose some or all of your invested capital, so you should not speculate 
                with capital that you cannot afford to lose. Please ensure you fully understand 
                the risks involved. For Indian residents, please verify compliance with local 
                RBI and SEBI regulations before trading.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
