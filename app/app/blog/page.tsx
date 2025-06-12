
import { Metadata } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  Calendar, 
  Clock, 
  User, 
  TrendingUp,
  BarChart3,
  DollarSign,
  Globe,
  BookOpen,
  ArrowRight
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Trading Blog - Market Analysis & Education | Market QX',
  description: 'Stay updated with latest market analysis, trading strategies, and educational content. Learn from expert traders and improve your trading skills.',
  keywords: 'trading blog, market analysis, trading strategies, forex education, trading tips, market news, financial education',
}

const featuredPost = {
  title: 'Complete Guide to Binary Options Trading for Indian Traders',
  excerpt: 'Learn everything about binary options trading, including strategies, risk management, and regulatory considerations for Indian traders.',
  image: 'https://img.freepik.com/premium-photo/professional-trader-analyzing-live-commodity-charts-multiple-monitors-typing-commands_416256-76126.jpg',
  category: 'Education',
  author: 'Market QX Team',
  date: '2025-01-15',
  readTime: '12 min read',
  slug: 'binary-options-guide-indian-traders'
}

const blogPosts = [
  {
    title: 'Top 5 Technical Indicators Every Trader Should Know',
    excerpt: 'Master these essential technical indicators to improve your trading decisions and market analysis skills.',
    image: 'https://pbs.twimg.com/media/FU5qiLNVEAEpotH.jpg:large',
    category: 'Technical Analysis',
    author: 'Sarah Johnson',
    date: '2025-01-12',
    readTime: '8 min read',
    slug: 'top-5-technical-indicators'
  },
  {
    title: 'Risk Management Strategies for Successful Trading',
    excerpt: 'Discover proven risk management techniques that professional traders use to protect their capital.',
    image: 'https://i.pinimg.com/originals/de/8b/69/de8b69d31c23ada29663b1049e34c13f.png',
    category: 'Risk Management',
    author: 'Michael Chen',
    date: '2025-01-10',
    readTime: '10 min read',
    slug: 'risk-management-strategies'
  },
  {
    title: 'Cryptocurrency Trading: Opportunities and Challenges',
    excerpt: 'Explore the world of cryptocurrency trading, including market dynamics and key considerations.',
    image: 'https://i.pinimg.com/originals/c3/37/47/c33747d66f9de9afd164fe031d042bf0.jpg',
    category: 'Cryptocurrency',
    author: 'David Rodriguez',
    date: '2025-01-08',
    readTime: '15 min read',
    slug: 'cryptocurrency-trading-guide'
  },
  {
    title: 'Market Psychology: Understanding Trader Emotions',
    excerpt: 'Learn how emotions affect trading decisions and discover techniques to maintain psychological discipline.',
    image: 'https://s-media-cache-ak0.pinimg.com/originals/5a/ea/b0/5aeab0e0befa478edc216e14753e6811.jpg',
    category: 'Psychology',
    author: 'Emma Wilson',
    date: '2025-01-05',
    readTime: '7 min read',
    slug: 'market-psychology-guide'
  },
  {
    title: 'Forex Trading Basics: Currency Pairs Explained',
    excerpt: 'A comprehensive introduction to forex trading, covering major currency pairs and market fundamentals.',
    image: 'https://lh6.googleusercontent.com/ibyGIAhBbw856IUliKzU3H7vQKI6Gz71gKCs1ol6He_MnuNTU47YWppe5EbRC1bTmm6OnPH7cjdjIbSDX9udi8jfs94z4EV_eWQLulO4vYaI1PifsRwv8X3NZ_MZY7X2hBC7rDbkdvE8Y8qkz2A2rT8',
    category: 'Forex',
    author: 'James Thompson',
    date: '2025-01-03',
    readTime: '12 min read',
    slug: 'forex-trading-basics'
  },
  {
    title: 'Building Your First Trading Strategy',
    excerpt: 'Step-by-step guide to creating and testing your own trading strategy for consistent results.',
    image: 'https://i.pinimg.com/originals/1f/3c/d9/1f3cd9787faf71d759eaac1788e17c23.jpg',
    category: 'Strategy',
    author: 'Lisa Anderson',
    date: '2025-01-01',
    readTime: '14 min read',
    slug: 'building-trading-strategy'
  }
]

const categories = [
  { name: 'All Posts', count: 24, active: true },
  { name: 'Education', count: 8 },
  { name: 'Technical Analysis', count: 6 },
  { name: 'Risk Management', count: 4 },
  { name: 'Cryptocurrency', count: 3 },
  { name: 'Forex', count: 3 }
]

export default function BlogPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <BookOpen className="h-16 w-16 mx-auto mb-6 text-blue-300" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Trading Blog
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Expert insights, market analysis, and educational content to help you 
              become a better trader.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={category.active ? "default" : "outline"}
                className={`${
                  category.active 
                    ? "bg-blue-600 hover:bg-blue-700" 
                    : "border-gray-300 text-gray-700 hover:bg-gray-50"
                }`}
              >
                {category.name} ({category.count})
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Article
            </h2>
          </div>
          
          <Card className="border-0 shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="aspect-video lg:aspect-square relative">
                <Image
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
                <Badge className="w-fit mb-4 bg-blue-100 text-blue-800">
                  {featuredPost.category}
                </Badge>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  {featuredPost.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center text-sm text-gray-500 mb-6">
                  <User className="h-4 w-4 mr-2" />
                  <span className="mr-4">{featuredPost.author}</span>
                  <Calendar className="h-4 w-4 mr-2" />
                  <span className="mr-4">{featuredPost.date}</span>
                  <Clock className="h-4 w-4 mr-2" />
                  <span>{featuredPost.readTime}</span>
                </div>
                <Link href={`/blog/${featuredPost.slug}`}>
                  <Button className="bg-blue-600 hover:bg-blue-700 w-fit">
                    Read Full Article
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </div>
          </Card>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Latest Articles
            </h2>
            <p className="text-xl text-gray-600">
              Stay updated with the latest trading insights and market analysis.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="border-0 shadow-lg card-hover overflow-hidden">
                <div className="aspect-video relative">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <Badge className="w-fit mb-3 bg-gray-100 text-gray-800">
                    {post.category}
                  </Badge>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <User className="h-4 w-4 mr-1" />
                    <span className="mr-3">{post.author}</span>
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{post.readTime}</span>
                  </div>
                  <Link href={`/blog/${post.slug}`}>
                    <Button variant="outline" className="w-full border-blue-600 text-blue-600 hover:bg-blue-50">
                      Read More
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Load More */}
          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Stay Updated
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Subscribe to our newsletter and never miss important market insights and trading tips.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <Button className="bg-white text-blue-600 hover:bg-blue-50 px-8">
              Subscribe
            </Button>
          </div>
          <p className="text-sm text-blue-200 mt-4">
            No spam, unsubscribe at any time.
          </p>
        </div>
      </section>

      {/* Popular Topics */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Popular Topics
            </h2>
            <p className="text-xl text-gray-600">
              Explore our most popular trading topics and educational content.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-0 shadow-lg card-hover text-center">
              <CardContent className="p-6">
                <TrendingUp className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Technical Analysis
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Learn chart patterns, indicators, and analysis techniques.
                </p>
                <Button variant="outline" size="sm" className="border-blue-600 text-blue-600">
                  Explore
                </Button>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg card-hover text-center">
              <CardContent className="p-6">
                <BarChart3 className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Trading Strategies
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Discover proven strategies for different market conditions.
                </p>
                <Button variant="outline" size="sm" className="border-green-600 text-green-600">
                  Explore
                </Button>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg card-hover text-center">
              <CardContent className="p-6">
                <DollarSign className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Risk Management
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Protect your capital with proper risk management.
                </p>
                <Button variant="outline" size="sm" className="border-yellow-600 text-yellow-600">
                  Explore
                </Button>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg card-hover text-center">
              <CardContent className="p-6">
                <Globe className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Market Analysis
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Stay updated with global market trends and news.
                </p>
                <Button variant="outline" size="sm" className="border-purple-600 text-purple-600">
                  Explore
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
