
import { Metadata } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { TrendingUp, Mail, ArrowLeft, Shield } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Forgot Password - Reset Your Account | Market QX',
  description: 'Reset your Market QX account password. Secure password recovery process to regain access to your trading account.',
  keywords: 'forgot password, password reset, Market QX password recovery, account recovery',
}

export default function ForgotPasswordPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      
      <section className="pt-24 pb-20">
        <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <div className="text-center mb-8">
            <Link href="/" className="inline-flex items-center space-x-2">
              <TrendingUp className="h-10 w-10 text-blue-600" />
              <div className="flex flex-col">
                <span className="text-sm font-light text-gray-600 leading-none">MARKET</span>
                <span className="text-2xl font-bold text-blue-600 leading-none">QX</span>
              </div>
            </Link>
          </div>

          <Card className="shadow-xl border-0">
            <CardHeader className="text-center pb-4">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-blue-100 rounded-full">
                  <Mail className="h-8 w-8 text-blue-600" />
                </div>
              </div>
              <CardTitle className="text-2xl font-bold text-gray-900">
                Forgot Password?
              </CardTitle>
              <p className="text-gray-600">
                No worries! Enter your email and we'll send you reset instructions.
              </p>
            </CardHeader>
            
            <CardContent className="p-6">
              <form className="space-y-6">
                <div>
                  <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your registered email"
                    className="mt-1"
                    required
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    We'll send password reset instructions to this email
                  </p>
                </div>
                
                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3">
                  Send Reset Instructions
                </Button>
                
                <div className="text-center">
                  <Link href="/login" className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium">
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Back to Login
                  </Link>
                </div>
              </form>
              
              {/* Security Notice */}
              <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <div className="flex items-center mb-2">
                  <Shield className="h-5 w-5 text-blue-600 mr-2" />
                  <h3 className="text-sm font-semibold text-blue-900">
                    Security Notice
                  </h3>
                </div>
                <p className="text-sm text-blue-800">
                  For your security, password reset links expire after 24 hours. 
                  If you don't receive an email, check your spam folder or contact support.
                </p>
              </div>
            </CardContent>
          </Card>
          
          {/* Help Section */}
          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-4">
              Still having trouble accessing your account?
            </p>
            <Link href="/contact">
              <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                Contact Support
              </Button>
            </Link>
          </div>
          
          {/* Additional Info */}
          <div className="mt-8 text-center text-sm text-gray-500">
            <p>
              Don't have an account?{' '}
              <Link href="/signup" className="text-blue-600 hover:text-blue-700 font-medium">
                Sign up here
              </Link>
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
