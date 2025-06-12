
import { Metadata } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { 
  HelpCircle, 
  MessageCircle, 
  Mail, 
  Phone,
  Search,
  BookOpen
} from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'FAQ - Frequently Asked Questions | Market QX Help Center',
  description: 'Find answers to common questions about Market QX trading platform, demo accounts, deposits, withdrawals, and trading strategies.',
  keywords: 'FAQ, help, support, trading questions, Market QX help, demo account FAQ, trading platform help',
}

const faqCategories = [
  {
    title: 'Getting Started',
    questions: [
      {
        question: 'How do I create a demo account?',
        answer: 'Creating a demo account is simple and free. Click on "Demo Account" button, fill in your email and password, and you\'ll get instant access to $10,000 virtual funds to practice trading.'
      },
      {
        question: 'What is the minimum deposit for a live account?',
        answer: 'The minimum deposit for a live trading account is $10. We accept various payment methods including credit cards, bank transfers, and e-wallets for your convenience.'
      },
      {
        question: 'Is Market QX regulated?',
        answer: 'Yes, Market QX operates under strict regulatory guidelines and maintains the highest standards of security and compliance to protect our users\' funds and data.'
      },
      {
        question: 'Can I trade on mobile devices?',
        answer: 'Absolutely! Our platform is fully responsive and optimized for mobile trading. You can access all features through your mobile browser or download our dedicated mobile app.'
      }
    ]
  },
  {
    title: 'Trading',
    questions: [
      {
        question: 'What assets can I trade on Market QX?',
        answer: 'Market QX offers over 400 trading instruments including forex pairs, cryptocurrencies, commodities, indices, and stocks from global markets.'
      },
      {
        question: 'What are the trading hours?',
        answer: 'Our platform operates 24/7 for cryptocurrency trading. Forex markets are available 24/5 (Monday to Friday), while stock and commodity trading hours depend on the respective market sessions.'
      },
      {
        question: 'How fast are trade executions?',
        answer: 'Our advanced technology ensures ultra-fast execution speeds of 0.1 seconds on average, giving you the best possible trading experience with minimal slippage.'
      },
      {
        question: 'Do you offer trading signals?',
        answer: 'Yes, we provide AI-powered trading signals and market analysis to help you make informed trading decisions. These are available to all registered users.'
      }
    ]
  },
  {
    title: 'Account & Payments',
    questions: [
      {
        question: 'How do I deposit funds?',
        answer: 'You can deposit funds through various methods including credit/debit cards, bank transfers, e-wallets like Skrill and Neteller, and cryptocurrencies. All deposits are processed securely and instantly.'
      },
      {
        question: 'How long do withdrawals take?',
        answer: 'Withdrawal processing times vary by method: e-wallets (instant to 24 hours), credit cards (1-3 business days), and bank transfers (3-5 business days). We strive to process all requests as quickly as possible.'
      },
      {
        question: 'Are there any fees for deposits or withdrawals?',
        answer: 'Market QX does not charge fees for deposits. Withdrawal fees may apply depending on the payment method used. Check our fee schedule for detailed information.'
      },
      {
        question: 'How do I verify my account?',
        answer: 'Account verification requires uploading a government-issued ID and proof of address. This process typically takes 24-48 hours and is required for withdrawals and higher deposit limits.'
      }
    ]
  },
  {
    title: 'Platform & Technical',
    questions: [
      {
        question: 'What technical indicators are available?',
        answer: 'Our platform includes 25+ technical indicators such as RSI, MACD, Bollinger Bands, Moving Averages, Fibonacci retracements, and many more professional analysis tools.'
      },
      {
        question: 'Can I use automated trading strategies?',
        answer: 'Yes, our platform supports automated trading through our API and algorithmic trading tools. You can create, test, and deploy your own trading strategies.'
      },
      {
        question: 'Is my data secure on Market QX?',
        answer: 'Absolutely. We use bank-level SSL encryption, two-factor authentication, and store funds in segregated accounts. Your personal and financial data is protected with the highest security standards.'
      },
      {
        question: 'What if I experience technical issues?',
        answer: 'Our technical support team is available 24/7 to help resolve any platform issues. Contact us through live chat, email, or phone for immediate assistance.'
      }
    ]
  },
  {
    title: 'Legal & Compliance',
    questions: [
      {
        question: 'Is trading legal in India?',
        answer: 'Trading regulations vary by jurisdiction. In India, forex trading is regulated by RBI and SEBI. We recommend consulting with local financial advisors and understanding your local regulations before trading.'
      },
      {
        question: 'What are the risks of trading?',
        answer: 'Trading involves substantial risk and may not be suitable for all investors. You could lose some or all of your invested capital. Only trade with money you can afford to lose and ensure you understand the risks involved.'
      },
      {
        question: 'Do you provide tax reporting documents?',
        answer: 'Yes, we provide detailed trading statements and reports that can be used for tax purposes. However, we recommend consulting with a tax professional for specific tax advice.'
      },
      {
        question: 'How do you handle customer complaints?',
        answer: 'We take all customer concerns seriously. Our dedicated compliance team investigates all complaints promptly and fairly. You can submit complaints through our support channels.'
      }
    ]
  }
]

const supportOptions = [
  {
    icon: MessageCircle,
    title: 'Live Chat',
    description: 'Get instant help from our support team',
    action: 'Start Chat',
    available: '24/7'
  },
  {
    icon: Mail,
    title: 'Email Support',
    description: 'Send us detailed questions via email',
    action: 'Send Email',
    available: 'Response within 24h'
  },
  {
    icon: Phone,
    title: 'Phone Support',
    description: 'Speak directly with our experts',
    action: 'Call Now',
    available: 'Mon-Fri 9AM-6PM'
  },
  {
    icon: BookOpen,
    title: 'Knowledge Base',
    description: 'Browse our comprehensive guides',
    action: 'Browse Articles',
    available: 'Always Available'
  }
]

export default function FAQPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <HelpCircle className="h-16 w-16 mx-auto mb-6 text-blue-300" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Find quick answers to common questions about trading, accounts, and our platform.
            </p>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search for answers..."
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {faqCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                {category.title}
              </h2>
              <Card className="border-0 shadow-lg">
                <CardContent className="p-0">
                  <Accordion type="single" collapsible className="w-full">
                    {category.questions.map((faq, index) => (
                      <AccordionItem 
                        key={index} 
                        value={`${categoryIndex}-${index}`}
                        className="border-b border-gray-200 last:border-b-0"
                      >
                        <AccordionTrigger className="px-6 py-4 text-left hover:no-underline hover:bg-gray-50">
                          <span className="font-medium text-gray-900">
                            {faq.question}
                          </span>
                        </AccordionTrigger>
                        <AccordionContent className="px-6 pb-4 text-gray-600 leading-relaxed">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </section>

      {/* Support Options */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Still Need Help?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our support team is here to help you with any questions or issues you may have.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportOptions.map((option, index) => (
              <Card key={index} className="border-0 shadow-lg card-hover text-center">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-blue-100 rounded-full">
                      <option.icon className="h-6 w-6 text-blue-600" />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {option.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    {option.description}
                  </p>
                  <p className="text-xs text-gray-500 mb-4">
                    {option.available}
                  </p>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    {option.action}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Risk Warning */}
      <section className="py-12 bg-yellow-50 border-l-4 border-yellow-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start space-x-3">
            <HelpCircle className="h-6 w-6 text-yellow-600 mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-lg font-semibold text-yellow-800 mb-2">
                Important Risk Disclosure
              </h3>
              <p className="text-yellow-700 leading-relaxed">
                Trading involves substantial risk and may not be suitable for all investors. 
                Past performance is not indicative of future results. Please ensure you fully 
                understand the risks involved and seek independent financial advice if necessary. 
                For Indian traders, please verify compliance with local RBI and SEBI regulations 
                before trading.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Trading?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            If you have all the answers you need, why not start with a free demo account?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/demo">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                Try Demo Account
              </Button>
            </Link>
            <Link href="/signup">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                Open Live Account
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
