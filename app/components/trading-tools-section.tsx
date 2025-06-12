
'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { 
  LineChart, 
  BarChart3, 
  TrendingUp, 
  Activity, 
  Target,
  Layers,
  Zap,
  Brain
} from 'lucide-react'
import Image from 'next/image'

const tools = [
  {
    icon: LineChart,
    title: 'Technical Analysis',
    description: 'Advanced charting with 25+ indicators including RSI, MACD, Bollinger Bands, and Fibonacci retracements.',
    features: ['Real-time charts', 'Multiple timeframes', 'Custom indicators', 'Drawing tools']
  },
  {
    icon: Brain,
    title: 'AI Trading Signals',
    description: 'Machine learning algorithms analyze market patterns to provide intelligent trading recommendations.',
    features: ['Smart alerts', 'Pattern recognition', 'Risk assessment', 'Success probability']
  },
  {
    icon: Target,
    title: 'Risk Management',
    description: 'Comprehensive risk management tools to protect your capital and optimize trading strategies.',
    features: ['Stop loss orders', 'Take profit levels', 'Position sizing', 'Portfolio analysis']
  },
  {
    icon: Activity,
    title: 'Market Scanner',
    description: 'Real-time market scanning to identify trading opportunities across 400+ financial instruments.',
    features: ['Price alerts', 'Volume analysis', 'Trend detection', 'Custom filters']
  }
]

const platforms = [
  {
    name: 'Web Platform',
    description: 'Full-featured browser-based trading platform',
    image: 'https://wbstatic.webullfintech.com/v1/webull-us-g/assets/043c61cb70088b42b40ba98c657a57fd.png',
    features: ['No download required', 'Cross-platform compatibility', 'Real-time data', 'Advanced charting']
  },
  {
    name: 'Mobile App',
    description: 'Trade on-the-go with our mobile application',
    image: 'https://i.pinimg.com/originals/ea/f9/3d/eaf93de465e558a801ecc649b81359a9.png',
    features: ['iOS & Android', 'Push notifications', 'Touch-optimized', 'Offline charts']
  },
  {
    name: 'Desktop App',
    description: 'Professional desktop application for serious traders',
    image: 'https://i.ytimg.com/vi/cRgmPJsaKvA/maxresdefault.jpg',
    features: ['Enhanced performance', 'Multiple monitors', 'Advanced tools', 'Customizable layout']
  }
]

export default function TradingToolsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Professional Trading Tools
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Access institutional-grade trading tools and analytics designed to give you 
            a competitive edge in the financial markets.
          </p>
        </motion.div>

        {/* Trading Tools */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {tools.map((tool, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full card-hover border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="p-3 rounded-lg bg-blue-50 text-blue-600">
                      <tool.icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 ml-4">
                      {tool.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {tool.description}
                  </p>
                  <ul className="space-y-2">
                    {tool.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Platform Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-12">
            Trade on Any Device
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {platforms.map((platform, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="card-hover border-0 shadow-lg overflow-hidden">
                  <div className="aspect-video relative bg-gray-100">
                    <Image
                      src={platform.image}
                      alt={platform.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">
                      {platform.name}
                    </h4>
                    <p className="text-gray-600 mb-4">
                      {platform.description}
                    </p>
                    <ul className="space-y-2 mb-6">
                      {platform.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">
                      Try Now
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Performance Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 md:p-12 text-white"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Platform Performance
            </h3>
            <p className="text-blue-100 text-lg">
              Industry-leading execution speed and reliability
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Zap className="h-6 w-6 text-yellow-400 mr-2" />
                <span className="text-3xl font-bold">0.1s</span>
              </div>
              <p className="text-blue-200">Execution Speed</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Activity className="h-6 w-6 text-green-400 mr-2" />
                <span className="text-3xl font-bold">99.9%</span>
              </div>
              <p className="text-blue-200">Uptime</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Layers className="h-6 w-6 text-purple-400 mr-2" />
                <span className="text-3xl font-bold">400+</span>
              </div>
              <p className="text-blue-200">Trading Assets</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <BarChart3 className="h-6 w-6 text-orange-400 mr-2" />
                <span className="text-3xl font-bold">24/7</span>
              </div>
              <p className="text-blue-200">Market Access</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
