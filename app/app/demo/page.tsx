
import { Metadata } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { 
  Play, 
  DollarSign, 
  TrendingUp, 
  Shield, 
  Clock,
  BarChart3,
  Users,
  Award,
  CheckCircle
} from 'lucide-react'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Free Demo Account - Practice Trading | Market QX Demo Platform',
  description: 'Start trading with $10,000 virtual funds on Market QX demo account. Practice binary options, forex, and CFD trading risk-free. No deposit required.',
  keywords: 'demo account, practice trading, virtual trading, free demo, binary options demo, forex demo, Market QX demo',
}

const features = [
  {
    icon: DollarSign,
    title: '$10,000 Virtual Funds',
    description: 'Start with substantial virtual capital to practice your trading strategies'
  },
  {
    icon: TrendingUp,
    title: 'Real Market Data',
    description: 'Trade with live market prices and real-time data feeds'
  },
  {
    icon: Shield,
    title: 'Risk-Free Environment',
    description: 'Learn and practice without risking your real money'
  },
  {
    icon: Clock,
    title: 'Unlimited Time',
    description: 'Take as much time as you need to master your trading skills'
  },
  {
    icon: BarChart3,
    title: 'Full Platform Access',
    description: 'Access all trading tools, indicators, and analytics'
  },
  {
    icon: Users,
    title: 'Expert Support',
    description: '24/7 customer support to help you learn and grow'
  }
]

const benefits = [
  'Practice with 400+ trading instruments',
  'Test different trading strategies',
  'Learn technical analysis tools',
  'Understand risk management',
  'Familiarize with platform features',
  'Build confidence before live trading'
]

export default function DemoPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-green-600 to-green-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Free Demo Account
              </h1>
              <p className="text-xl md:text-2xl text-green-100 mb-8">
                Practice trading with $10,000 virtual funds. Learn, experiment, 
                and master your trading skills in a risk-free environment.
              </p>
              <div className="flex items-center space-x-4 mb-8">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-300 mr-2" />
                  <span>No deposit required</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-300 mr-2" />
                  <span>Instant access</span>
                </div>
              </div>
              <Button size="lg" className="bg-white text-green-600 hover:bg-green-50">
                <Play className="mr-2 h-5 w-5" />
                Start Demo Trading
              </Button>
            </div>
            <div className="relative">
              <div className="aspect-video relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://www.etoro.com/wp-content/themes/etoro/assets/images/templates/trading_platform/slider/pro-chart-img.png"
                  alt="Demo Trading Platform"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -top-4 -right-4 bg-green-500 text-white px-4 py-2 rounded-full font-semibold">
                100% Free
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Registration Form */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Open Your Demo Account
            </h2>
            <p className="text-xl text-gray-600">
              Get started in less than 2 minutes. No credit card required.
            </p>
          </div>
          
          <Card className="max-w-md mx-auto shadow-xl border-0">
            <CardContent className="p-8">
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
                  <Input
                    id="password"
                    type="password"
                    placeholder="Create a password"
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
                
                <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white py-3">
                  Create Demo Account
                </Button>
                
                <p className="text-xs text-gray-500 text-center">
                  By creating an account, you agree to our Terms of Service and Privacy Policy.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Demo Account Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience all the features of our live platform with virtual funds.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg card-hover">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-green-100 rounded-full">
                      <feature.icon className="h-6 w-6 text-green-600" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Start with Demo?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our demo account provides the perfect environment to learn trading 
                without financial risk. Master the platform and develop your strategies 
                before transitioning to live trading.
              </p>
              
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square relative rounded-2xl overflow-hidden">
                <Image
                  src="https://i.pinimg.com/originals/b9/21/14/b92114d251928b63dc6ad5ffef6f9a35.jpg"
                  alt="Learning to Trade"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Demo Success Stories
            </h2>
            <p className="text-xl text-blue-100">
              See how our demo account helped traders build confidence and skills.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Award className="h-12 w-12 text-yellow-400" />
              </div>
              <div className="text-3xl font-bold mb-2">95%</div>
              <p className="text-blue-100">
                of demo users feel more confident before live trading
              </p>
            </div>
            
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <TrendingUp className="h-12 w-12 text-green-400" />
              </div>
              <div className="text-3xl font-bold mb-2">78%</div>
              <p className="text-blue-100">
                improvement in trading performance after demo practice
              </p>
            </div>
            
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Users className="h-12 w-12 text-purple-400" />
              </div>
              <div className="text-3xl font-bold mb-2">50K+</div>
              <p className="text-blue-100">
                traders started their journey with our demo account
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Start Your Trading Journey?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of traders who started with our demo account. 
            It's free, instant, and the perfect way to begin.
          </p>
          <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-4">
            <Play className="mr-2 h-5 w-5" />
            Open Demo Account Now
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
