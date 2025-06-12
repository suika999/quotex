
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  Calendar, 
  Clock, 
  User, 
  ArrowLeft,
  Share2,
  BookOpen,
  TrendingUp
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

// Sample blog posts data
const blogPosts: Record<string, any> = {
  'binary-options-guide-indian-traders': {
    title: 'Complete Guide to Binary Options Trading for Indian Traders',
    excerpt: 'Learn everything about binary options trading, including strategies, risk management, and regulatory considerations for Indian traders.',
    content: `
      <h2>Introduction to Binary Options Trading</h2>
      <p>Binary options trading has gained significant popularity among Indian traders due to its simplicity and potential for quick returns. However, it's crucial to understand both the opportunities and risks involved before starting your trading journey.</p>
      
      <h2>What are Binary Options?</h2>
      <p>Binary options are financial instruments that allow you to predict whether the price of an asset will go up or down within a specific time frame. The "binary" nature means there are only two possible outcomes - you either win a fixed amount or lose your investment.</p>
      
      <h2>Key Features of Binary Options</h2>
      <ul>
        <li>Fixed risk and reward</li>
        <li>Short-term trading opportunities</li>
        <li>Simple yes/no predictions</li>
        <li>Various asset classes available</li>
      </ul>
      
      <h2>Regulatory Considerations for Indian Traders</h2>
      <p><strong>Important:</strong> According to RBI guidelines, binary options trading through offshore platforms may have regulatory restrictions in India. Always verify the legal status and comply with local regulations before trading.</p>
      
      <h2>Risk Management Strategies</h2>
      <p>Successful binary options trading requires proper risk management:</p>
      <ul>
        <li>Never risk more than 2-5% of your capital per trade</li>
        <li>Use demo accounts to practice strategies</li>
        <li>Avoid emotional trading decisions</li>
        <li>Set daily loss limits</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>While binary options can offer trading opportunities, they come with significant risks. Indian traders should prioritize education, risk management, and regulatory compliance when considering this form of trading.</p>
    `,
    image: 'https://i.ytimg.com/vi/VpoFl2Tr26w/maxresdefault.jpg',
    category: 'Education',
    author: 'Market QX Team',
    date: '2025-01-15',
    readTime: '12 min read'
  },
  'top-5-technical-indicators': {
    title: 'Top 5 Technical Indicators Every Trader Should Know',
    excerpt: 'Master these essential technical indicators to improve your trading decisions and market analysis skills.',
    content: `
      <h2>Introduction to Technical Indicators</h2>
      <p>Technical indicators are mathematical calculations based on price, volume, or open interest data that help traders analyze market trends and make informed decisions.</p>
      
      <h2>1. Moving Averages (MA)</h2>
      <p>Moving averages smooth out price data to identify trend direction. The two most common types are:</p>
      <ul>
        <li><strong>Simple Moving Average (SMA):</strong> Average price over a specific period</li>
        <li><strong>Exponential Moving Average (EMA):</strong> Gives more weight to recent prices</li>
      </ul>
      
      <h2>2. Relative Strength Index (RSI)</h2>
      <p>RSI measures the speed and magnitude of price changes, helping identify overbought and oversold conditions. Values above 70 suggest overbought conditions, while values below 30 indicate oversold conditions.</p>
      
      <h2>3. MACD (Moving Average Convergence Divergence)</h2>
      <p>MACD shows the relationship between two moving averages and helps identify trend changes and momentum shifts.</p>
      
      <h2>4. Bollinger Bands</h2>
      <p>Bollinger Bands consist of a middle line (SMA) and two outer bands that expand and contract based on market volatility.</p>
      
      <h2>5. Stochastic Oscillator</h2>
      <p>This momentum indicator compares a security's closing price to its price range over a specific period, helping identify potential reversal points.</p>
      
      <h2>How to Use These Indicators</h2>
      <p>Remember that no single indicator is perfect. Combine multiple indicators and always consider market context when making trading decisions.</p>
    `,
    image: 'https://pbs.twimg.com/media/FU5qiLNVEAEpotH.jpg:large',
    category: 'Technical Analysis',
    author: 'Sarah Johnson',
    date: '2025-01-12',
    readTime: '8 min read'
  },
  'risk-management-strategies': {
    title: 'Risk Management Strategies for Successful Trading',
    excerpt: 'Discover proven risk management techniques that professional traders use to protect their capital.',
    content: `
      <h2>The Foundation of Successful Trading</h2>
      <p>Risk management is arguably the most important aspect of trading. Even the best trading strategy will fail without proper risk management techniques.</p>
      
      <h2>Position Sizing</h2>
      <p>Never risk more than 1-2% of your total capital on a single trade. This ensures that even a series of losses won't significantly impact your account.</p>
      
      <h2>Stop Loss Orders</h2>
      <p>Always use stop loss orders to limit potential losses. Set your stop loss before entering a trade and stick to it regardless of emotions.</p>
      
      <h2>Risk-Reward Ratio</h2>
      <p>Aim for a minimum risk-reward ratio of 1:2. This means for every $1 you risk, you should aim to make at least $2.</p>
      
      <h2>Diversification</h2>
      <p>Don't put all your eggs in one basket. Spread your risk across different assets, markets, and trading strategies.</p>
      
      <h2>Emotional Control</h2>
      <p>Develop discipline and stick to your trading plan. Emotions like fear and greed are the biggest enemies of successful trading.</p>
    `,
    image: 'https://i.pinimg.com/originals/f8/5f/4a/f85f4aad46c705fd6ce7d621bf97d0c4.png',
    category: 'Risk Management',
    author: 'Michael Chen',
    date: '2025-01-10',
    readTime: '10 min read'
  },
  'cryptocurrency-trading-guide': {
    title: 'Cryptocurrency Trading: Opportunities and Challenges',
    excerpt: 'Explore the world of cryptocurrency trading, including market dynamics and key considerations.',
    content: `
      <h2>The Cryptocurrency Revolution</h2>
      <p>Cryptocurrency trading has emerged as one of the most dynamic and volatile markets in the financial world, offering both significant opportunities and substantial risks.</p>
      
      <h2>Popular Cryptocurrencies for Trading</h2>
      <ul>
        <li><strong>Bitcoin (BTC):</strong> The original and most established cryptocurrency</li>
        <li><strong>Ethereum (ETH):</strong> Platform for smart contracts and DeFi applications</li>
        <li><strong>Binance Coin (BNB):</strong> Native token of the Binance exchange</li>
        <li><strong>Cardano (ADA):</strong> Proof-of-stake blockchain platform</li>
      </ul>
      
      <h2>Trading Strategies</h2>
      <p>Cryptocurrency markets operate 24/7, providing continuous trading opportunities. Popular strategies include:</p>
      <ul>
        <li>Day trading for short-term profits</li>
        <li>Swing trading for medium-term gains</li>
        <li>HODLing for long-term investment</li>
      </ul>
      
      <h2>Risks and Considerations</h2>
      <p>Cryptocurrency trading involves high volatility and regulatory uncertainty. Always trade responsibly and never invest more than you can afford to lose.</p>
    `,
    image: 'https://i.pinimg.com/736x/80/15/6b/80156bc9d7ada69d95619a614ff8e754.jpg',
    category: 'Cryptocurrency',
    author: 'David Rodriguez',
    date: '2025-01-08',
    readTime: '15 min read'
  },
  'market-psychology-guide': {
    title: 'Market Psychology: Understanding Trader Emotions',
    excerpt: 'Learn how emotions affect trading decisions and discover techniques to maintain psychological discipline.',
    content: `
      <h2>The Psychology Behind Trading</h2>
      <p>Trading is as much a psychological game as it is a technical one. Understanding market psychology can give you a significant edge in your trading journey.</p>
      
      <h2>Common Emotional Pitfalls</h2>
      <ul>
        <li><strong>Fear:</strong> Prevents traders from taking necessary risks</li>
        <li><strong>Greed:</strong> Leads to overtrading and excessive risk-taking</li>
        <li><strong>Hope:</strong> Causes traders to hold losing positions too long</li>
        <li><strong>Regret:</strong> Results in revenge trading and poor decisions</li>
      </ul>
      
      <h2>Developing Mental Discipline</h2>
      <p>Successful traders develop mental discipline through:</p>
      <ul>
        <li>Creating and following a trading plan</li>
        <li>Keeping a trading journal</li>
        <li>Practicing mindfulness and stress management</li>
        <li>Setting realistic expectations</li>
      </ul>
      
      <h2>The Role of Cognitive Biases</h2>
      <p>Be aware of cognitive biases that can affect your trading decisions, such as confirmation bias, anchoring bias, and loss aversion.</p>
    `,
    image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg1OBo1FSyb3MKY4v3LDWzCGYG8ODtw7iFg1Z6Hli3v247XiYb1wFV1Mgv8xnMRt4mguKXxQM5FYMIRmYRjU4KKTMdu9vkR6yJNexMzM4e0Ap3U59ofNqnTVtp0sS6nYEj5_F1BQSOPreUXgmT3Q-yneuH3SgUgHUQlT9ZItBWKx5KB1l9YL6bVwZZf/s1920/Market%20Cycle%20Psychology.png',
    category: 'Psychology',
    author: 'Emma Wilson',
    date: '2025-01-05',
    readTime: '7 min read'
  },
  'forex-trading-basics': {
    title: 'Forex Trading Basics: Currency Pairs Explained',
    excerpt: 'A comprehensive introduction to forex trading, covering major currency pairs and market fundamentals.',
    content: `
      <h2>Introduction to Forex Trading</h2>
      <p>The foreign exchange (forex) market is the largest and most liquid financial market in the world, with daily trading volumes exceeding $6 trillion.</p>
      
      <h2>Understanding Currency Pairs</h2>
      <p>Forex trading involves buying one currency while selling another. Currency pairs are categorized as:</p>
      <ul>
        <li><strong>Major Pairs:</strong> EUR/USD, GBP/USD, USD/JPY, USD/CHF</li>
        <li><strong>Minor Pairs:</strong> EUR/GBP, EUR/JPY, GBP/JPY</li>
        <li><strong>Exotic Pairs:</strong> USD/TRY, EUR/ZAR, GBP/SEK</li>
      </ul>
      
      <h2>Market Sessions</h2>
      <p>The forex market operates 24 hours a day, five days a week, across four major trading sessions:</p>
      <ul>
        <li>Sydney Session</li>
        <li>Tokyo Session</li>
        <li>London Session</li>
        <li>New York Session</li>
      </ul>
      
      <h2>Factors Affecting Currency Prices</h2>
      <p>Currency values are influenced by economic indicators, central bank policies, political events, and market sentiment.</p>
    `,
    image: 'https://lh6.googleusercontent.com/ibyGIAhBbw856IUliKzU3H7vQKI6Gz71gKCs1ol6He_MnuNTU47YWppe5EbRC1bTmm6OnPH7cjdjIbSDX9udi8jfs94z4EV_eWQLulO4vYaI1PifsRwv8X3NZ_MZY7X2hBC7rDbkdvE8Y8qkz2A2rT8',
    category: 'Forex',
    author: 'James Thompson',
    date: '2025-01-03',
    readTime: '12 min read'
  },
  'building-trading-strategy': {
    title: 'Building Your First Trading Strategy',
    excerpt: 'Step-by-step guide to creating and testing your own trading strategy for consistent results.',
    content: `
      <h2>The Importance of a Trading Strategy</h2>
      <p>A well-defined trading strategy is essential for consistent profitability. It provides structure, removes emotion from trading decisions, and helps manage risk effectively.</p>
      
      <h2>Components of a Trading Strategy</h2>
      <ul>
        <li><strong>Market Analysis:</strong> Technical, fundamental, or sentiment analysis</li>
        <li><strong>Entry Rules:</strong> Specific conditions for entering trades</li>
        <li><strong>Exit Rules:</strong> When to take profits or cut losses</li>
        <li><strong>Risk Management:</strong> Position sizing and stop loss levels</li>
        <li><strong>Money Management:</strong> How much to risk per trade</li>
      </ul>
      
      <h2>Strategy Development Process</h2>
      <ol>
        <li>Define your trading goals and risk tolerance</li>
        <li>Choose your preferred markets and timeframes</li>
        <li>Develop entry and exit criteria</li>
        <li>Backtest your strategy on historical data</li>
        <li>Forward test with a demo account</li>
        <li>Implement with real money (small size initially)</li>
      </ol>
      
      <h2>Common Strategy Types</h2>
      <p>Popular trading strategies include trend following, mean reversion, breakout trading, and scalping. Choose one that matches your personality and available time.</p>
      
      <h2>Continuous Improvement</h2>
      <p>Regularly review and refine your strategy based on performance data and changing market conditions.</p>
    `,
    image: 'https://i.pinimg.com/originals/1f/3c/d9/1f3cd9787faf71d759eaac1788e17c23.jpg',
    category: 'Strategy',
    author: 'Lisa Anderson',
    date: '2025-01-01',
    readTime: '14 min read'
  }
}

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = blogPosts[params.slug]
  
  if (!post) {
    return {
      title: 'Blog Post Not Found | Market QX',
      description: 'The requested blog post could not be found.'
    }
  }

  return {
    title: `${post.title} | Market QX Blog`,
    description: post.excerpt,
    keywords: `${post.category.toLowerCase()}, trading, Market QX, ${post.title.toLowerCase()}`,
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts[params.slug]
  
  if (!post) {
    notFound()
  }

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/blog" className="inline-flex items-center text-blue-200 hover:text-white mb-6">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Blog
          </Link>
          
          <Badge className="mb-4 bg-blue-500 text-white">
            {post.category}
          </Badge>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            {post.title}
          </h1>
          
          <div className="flex items-center text-blue-200 mb-6">
            <User className="h-4 w-4 mr-2" />
            <span className="mr-4">{post.author}</span>
            <Calendar className="h-4 w-4 mr-2" />
            <span className="mr-4">{post.date}</span>
            <Clock className="h-4 w-4 mr-2" />
            <span>{post.readTime}</span>
          </div>
          
          <p className="text-xl text-blue-100">
            {post.excerpt}
          </p>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-3">
              {/* Featured Image */}
              <div className="aspect-video relative rounded-lg overflow-hidden mb-8">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
              
              {/* Article Content */}
              <div 
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
              
              {/* Share Section */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Share this article
                  </h3>
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    <Share2 className="h-4 w-4 mr-2" />
                    Share
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-8">
                {/* Author Info */}
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      About the Author
                    </h3>
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                        <User className="h-6 w-6 text-blue-600" />
                      </div>
                      <div className="ml-3">
                        <p className="font-medium text-gray-900">{post.author}</p>
                        <p className="text-sm text-gray-600">Trading Expert</p>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600">
                      Experienced trader and market analyst with expertise in technical analysis and risk management.
                    </p>
                  </CardContent>
                </Card>
                
                {/* Related Articles */}
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      Related Articles
                    </h3>
                    <div className="space-y-4">
                      {Object.entries(blogPosts)
                        .filter(([slug]) => slug !== params.slug)
                        .slice(0, 3)
                        .map(([slug, relatedPost]) => (
                          <Link key={slug} href={`/blog/${slug}`}>
                            <div className="group cursor-pointer">
                              <h4 className="text-sm font-medium text-gray-900 group-hover:text-blue-600 mb-1">
                                {relatedPost.title}
                              </h4>
                              <p className="text-xs text-gray-500">
                                {relatedPost.readTime}
                              </p>
                            </div>
                          </Link>
                        ))}
                    </div>
                  </CardContent>
                </Card>
                
                {/* CTA */}
                <Card className="border-0 shadow-lg bg-blue-50">
                  <CardContent className="p-6 text-center">
                    <TrendingUp className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Start Trading Today
                    </h3>
                    <p className="text-sm text-gray-600 mb-4">
                      Put your knowledge into practice with our demo account.
                    </p>
                    <Link href="/demo">
                      <Button className="w-full bg-blue-600 hover:bg-blue-700">
                        Try Demo Account
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
