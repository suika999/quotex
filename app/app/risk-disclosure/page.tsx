
import { Metadata } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { AlertTriangle, TrendingDown, DollarSign, Info, Shield } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Risk Disclosure - Trading Risks | Market QX',
  description: 'Important risk disclosure for trading activities. Understand the risks involved in financial trading before using Market QX platform.',
  keywords: 'risk disclosure, trading risks, financial risks, Market QX risks, investment warning',
}

export default function RiskDisclosurePage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-red-600 to-red-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <AlertTriangle className="h-16 w-16 mx-auto mb-6 text-red-300" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Risk Disclosure
            </h1>
            <p className="text-xl md:text-2xl text-red-100 max-w-3xl mx-auto">
              Important information about the risks involved in financial trading.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div className="bg-red-50 border-l-4 border-red-400 p-6 mb-8">
              <div className="flex items-center mb-3">
                <AlertTriangle className="h-6 w-6 text-red-600 mr-2" />
                <h3 className="text-lg font-semibold text-red-800">
                  High Risk Investment Warning
                </h3>
              </div>
              <p className="text-red-700 font-medium">
                Trading in financial instruments involves substantial risk and may not be suitable for all investors. 
                You could lose some or all of your invested capital. Please read this disclosure carefully.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <TrendingDown className="h-6 w-6 mr-2 text-red-600" />
              General Trading Risks
            </h2>
            <p className="text-gray-700 mb-6">
              All forms of trading carry inherent risks. Before engaging in any trading activity, you should 
              carefully consider your investment objectives, level of experience, and risk appetite.
            </p>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Market Volatility</h3>
            <p className="text-gray-700 mb-6">
              Financial markets are subject to rapid and unpredictable changes. Prices can move against your 
              position quickly, resulting in significant losses. Market volatility can be influenced by economic 
              events, political developments, and other factors beyond your control.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Leverage Risk</h3>
            <p className="text-gray-700 mb-6">
              Trading with leverage amplifies both potential profits and losses. A small adverse price movement 
              can result in losses that exceed your initial investment. Leverage can work against you as well as for you.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Liquidity Risk</h3>
            <p className="text-gray-700 mb-8">
              Some financial instruments may have limited liquidity, making it difficult to execute trades at 
              desired prices. This can result in slippage and increased trading costs.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <DollarSign className="h-6 w-6 mr-2 text-red-600" />
              Specific Risk Factors
            </h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Binary Options Trading</h3>
            <p className="text-gray-700 mb-6">
              Binary options are complex financial instruments with high risk. Most retail investors lose money 
              when trading binary options. The all-or-nothing nature means you could lose your entire investment 
              on a single trade.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Forex Trading</h3>
            <p className="text-gray-700 mb-6">
              Foreign exchange trading involves currency fluctuations that can be highly volatile. Exchange rates 
              are influenced by economic, political, and market factors that can change rapidly.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Cryptocurrency Trading</h3>
            <p className="text-gray-700 mb-8">
              Cryptocurrencies are extremely volatile and speculative investments. Prices can fluctuate dramatically 
              within short periods. Regulatory changes and market sentiment can significantly impact values.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <Info className="h-6 w-6 mr-2 text-blue-600" />
              Important Considerations
            </h2>
            
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-semibold text-blue-900 mb-4">Before You Start Trading:</h3>
              <ul className="list-disc pl-6 text-blue-800 space-y-2">
                <li>Only invest money you can afford to lose</li>
                <li>Understand the products you are trading</li>
                <li>Consider seeking independent financial advice</li>
                <li>Start with a demo account to practice</li>
                <li>Develop a risk management strategy</li>
                <li>Never invest borrowed money</li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Past Performance</h3>
            <p className="text-gray-700 mb-6">
              Past performance is not indicative of future results. Historical data and backtesting results 
              do not guarantee future profitability. Market conditions change, and strategies that worked 
              in the past may not work in the future.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Technical Risks</h3>
            <p className="text-gray-700 mb-8">
              Trading platforms may experience technical issues, including system failures, connectivity problems, 
              or delays in order execution. These technical issues could prevent you from executing trades or 
              managing your positions effectively.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <Shield className="h-6 w-6 mr-2 text-yellow-600" />
              Regulatory Considerations for Indian Traders
            </h2>
            
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-8">
              <h3 className="text-lg font-semibold text-yellow-800 mb-3">
                Important Notice for Indian Residents
              </h3>
              <p className="text-yellow-700 mb-4">
                Trading in certain financial instruments may be restricted or prohibited for Indian residents 
                under RBI and SEBI regulations. It is your responsibility to ensure compliance with local laws.
              </p>
              <ul className="list-disc pl-6 text-yellow-700 space-y-2">
                <li>Binary options trading is not permitted for Indian residents</li>
                <li>Forex trading is restricted to INR pairs on authorized exchanges</li>
                <li>Offshore trading platforms may not be regulated in India</li>
                <li>Consult with local financial advisors before trading</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Risk Management</h2>
            <p className="text-gray-700 mb-6">
              Effective risk management is crucial for trading success:
            </p>
            <ul className="list-disc pl-6 mb-8 text-gray-700 space-y-2">
              <li>Never risk more than you can afford to lose</li>
              <li>Use stop-loss orders to limit potential losses</li>
              <li>Diversify your trading portfolio</li>
              <li>Set realistic profit targets</li>
              <li>Keep detailed trading records</li>
              <li>Continuously educate yourself about markets</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Seeking Professional Advice</h2>
            <p className="text-gray-700 mb-8">
              If you are unsure about the risks involved or whether trading is suitable for you, we strongly 
              recommend seeking advice from an independent financial advisor who is authorized to give advice 
              on investments and financial products.
            </p>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Acknowledgment
              </h3>
              <p className="text-gray-700">
                By using Market QX platform, you acknowledge that you have read, understood, and accepted 
                all the risks outlined in this disclosure. You confirm that you are aware of the potential 
                for loss and that you are trading at your own risk.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
