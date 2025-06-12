
import { Metadata } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'
import { TrendingUp, Eye, EyeOff } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

export const metadata: Metadata = {
  title: 'Login - Access Your Trading Account | Market QX',
  description: 'Login to your Market QX trading account. Access your portfolio, trading tools, and account management features securely.',
  keywords: 'login, trading account, Market QX login, secure access, trading platform login',
}

export default function LoginPage() {
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
              <CardTitle className="text-2xl font-bold text-gray-900">
                Welcome Back
              </CardTitle>
              <p className="text-gray-600">
                Sign in to your trading account
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
                    placeholder="Enter your email"
                    className="mt-1"
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="password" className="text-sm font-medium text-gray-700">
                    Password
                  </Label>
                  <div className="relative mt-1">
                    <Input
                      id="password"
                      type="password"
                      placeholder="Enter your password"
                      required
                    />
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="remember" />
                    <Label htmlFor="remember" className="text-sm text-gray-600">
                      Remember me
                    </Label>
                  </div>
                  <Link href="/forgot-password" className="text-sm text-blue-600 hover:text-blue-700">
                    Forgot password?
                  </Link>
                </div>
                
                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3">
                  Sign In
                </Button>
                
                <div className="text-center">
                  <span className="text-gray-600">Don't have an account? </span>
                  <Link href="/signup" className="text-blue-600 hover:text-blue-700 font-medium">
                    Sign up
                  </Link>
                </div>
              </form>
              
              {/* Divider */}
              <div className="my-6">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300" />
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-gray-500">Or continue with</span>
                  </div>
                </div>
              </div>
              
              {/* Demo Account CTA */}
              <div className="text-center p-4 bg-green-50 rounded-lg border border-green-200">
                <p className="text-sm text-green-800 mb-3">
                  New to trading? Start with a demo account
                </p>
                <Link href="/demo">
                  <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
                    Try Demo Account
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
          
          {/* Security Notice */}
          <div className="mt-8 text-center text-sm text-gray-500">
            <p>
              Your account is protected with bank-level security and encryption.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
