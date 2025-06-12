
import { Metadata } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { 
  HelpCircle, 
  Search, 
  BookOpen, 
  Video, 
  MessageCircle,
  Download,
  TrendingUp,
  Shield,
  CreditCard,
  Settings
} from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Help Center - Trading Support & Guides | Market QX',
  description: 'Find answers, tutorials, and support resources for Market QX trading platform. Comprehensive help center with guides and FAQs.',
  keywords: 'help center, trading guides, Market QX support, tutorials, trading help, platform guides',
}

const helpCategories = [
  {
    icon: TrendingUp,
    title: 'Getting Started',
    description: 'Learn the basics of trading and platform navigation',
    articles: 12,
    color: 'text-blue-600 bg-blue-100'
  },
  {
    icon: CreditCard,
    title: 'Deposits & Withdrawals',
    description: 'Manage your funds and payment methods',
    articles: 8,
    color: 'text-green-600 bg-green-100'
  },
  {
    icon: Settings,
    title: 'Account Management',
    description: 'Account settings, verification, and security',
    articles: 15,
    color: 'text-purple-600 bg-purple-100'
  },
  {
    icon: Shield,
    title: 'Security & Safety',
    description: 'Keep your account and funds secure',
    articles: 6,
    color: 'text-red-600 bg-red-100'
  }
]

const popularArticles = [
  {
    title: 'How to Create a Demo Account',
    category: 'Getting Started',
    readTime: '3 min read',
    views: '15.2k views'
  },
  {
    title: 'Making Your First Deposit',
    category: 'Deposits & Withdrawals',
    readTime: '5 min read',
    views: '12.8k views'
  },
  {
    title: 'Understanding Technical Indicators',
    category: 'Trading Guides',
    readTime: '8 min read',
    views: '10.5k views'
  },
  {
    title: 'Account Verification Process',
    category: 'Account Management',
    readTime: '4 min read',
    views: '9.3k views'
  },
  {
    title: 'Setting Up Two-Factor Authentication',
    category: 'Security & Safety',
    readTime: '3 min read',
    views: '7.8k views'
  },
  {
    title: 'Withdrawal Processing Times',
    category: 'Deposits & Withdrawals',
    readTime: '2 min read',
    views: '6.9k views'
  }
]

const quickActions = [
  {
    icon: MessageCircle,
    title: 'Live Chat',
    description: 'Get instant help from our support team',
    action: 'Start Chat'
  },
  {
    icon: Video,
    title: 'Video Tutorials',
    description: 'Watch step-by-step trading guides',
    action: 'Watch Videos'
  },
  {
    icon: Download,
    title: 'Platform Guide',
    description: 'Download comprehensive platform manual',
    action: 'Download PDF'
  }
]

export default function HelpPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <HelpCircle className="h-16 w-16 mx-auto mb-6 text-blue-300" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Help Center
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-8">
              Find answers, guides, and support resources to help you succeed with Market QX.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Search for help articles, guides, or FAQs..."
                  className="pl-12 pr-4 py-4 text-lg bg-white text-gray-900 border-0 rounded-lg"
                />
                <Button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 hover:bg-blue-700">
                  Search
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Need Immediate Help?
            </h2>
            <p className="text-xl text-gray-600">
              Get instant support through these quick options.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {quickActions.map((action, index) => (
              <Card key={index} className="border-0 shadow-lg card-hover text-center">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-blue-100 rounded-full">
                      <action.icon className="h-6 w-6 text-blue-600" />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {action.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    {action.description}
                  </p>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    {action.action}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Help Categories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Browse by Category
            </h2>
            <p className="text-xl text-gray-600">
              Find help articles organized by topic.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {helpCategories.map((category, index) => (
              <Card key={index} className="border-0 shadow-lg card-hover">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className={`p-3 rounded-lg ${category.color}`}>
                      <category.icon className="h-6 w-6" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {category.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    {category.description}
                  </p>
                  <p className="text-blue-600 font-medium text-sm mb-4">
                    {category.articles} articles
                  </p>
                  <Button variant="outline" className="w-full border-blue-600 text-blue-600 hover:bg-blue-50">
                    Browse Articles
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Articles */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Popular Articles
            </h2>
            <p className="text-xl text-gray-600">
              Most viewed help articles and guides.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularArticles.map((article, index) => (
              <Card key={index} className="border-0 shadow-lg card-hover">
                <CardContent className="p-6">
                  <div className="flex items-center mb-3">
                    <BookOpen className="h-5 w-5 text-blue-600 mr-2" />
                    <span className="text-sm text-blue-600 font-medium">
                      {article.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {article.title}
                  </h3>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <span>{article.readTime}</span>
                    <span>{article.views}</span>
                  </div>
                  <Button variant="outline" className="w-full border-blue-600 text-blue-600 hover:bg-blue-50">
                    Read Article
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
              View All Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Still Need Help?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Can't find what you're looking for? Our support team is here to help you 24/7.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                Contact Support
              </Button>
            </Link>
            <Link href="/faq">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                View FAQ
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
