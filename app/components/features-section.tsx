
'use client'

import { motion } from 'framer-motion'
import { 
  TrendingUp, 
  Shield, 
  Smartphone, 
  BarChart3, 
  Clock, 
  Users,
  Zap,
  Globe,
  Award
} from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

const features = [
  {
    icon: TrendingUp,
    title: 'Advanced Analytics',
    description: 'Professional trading tools with 25+ technical indicators, real-time charts, and market analysis.',
    color: 'text-blue-600'
  },
  {
    icon: Shield,
    title: 'Secure Platform',
    description: 'Bank-level security with SSL encryption, secure payment processing, and data protection.',
    color: 'text-green-600'
  },
  {
    icon: Smartphone,
    title: 'Mobile Trading',
    description: 'Trade anywhere with our responsive mobile platform optimized for all devices.',
    color: 'text-purple-600'
  },
  {
    icon: BarChart3,
    title: '400+ Assets',
    description: 'Access forex, cryptocurrencies, commodities, and indices from global markets.',
    color: 'text-orange-600'
  },
  {
    icon: Clock,
    title: '24/7 Support',
    description: 'Round-the-clock customer support with multilingual assistance and live chat.',
    color: 'text-red-600'
  },
  {
    icon: Zap,
    title: 'Fast Execution',
    description: 'Lightning-fast order execution with minimal latency and real-time market data.',
    color: 'text-yellow-600'
  },
  {
    icon: Users,
    title: 'Demo Account',
    description: 'Practice trading with $10,000 virtual funds in a risk-free environment.',
    color: 'text-indigo-600'
  },
  {
    icon: Globe,
    title: 'Global Markets',
    description: 'Trade on international markets with competitive spreads and low fees.',
    color: 'text-teal-600'
  },
  {
    icon: Award,
    title: 'Award Winning',
    description: 'Recognized platform with industry awards for innovation and user experience.',
    color: 'text-pink-600'
  }
]

export default function FeaturesSection() {
  return (
    <section className="py-20 bg-gray-50">
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
            Why Choose Market QX?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the next generation of trading with our comprehensive platform 
            designed for both beginners and professional traders.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full card-hover border-0 shadow-lg bg-white">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className={`p-3 rounded-lg bg-gray-50 ${feature.color}`}>
                      <feature.icon className="h-6 w-6" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <div className="bg-blue-600 rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Start Trading?
            </h3>
            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of traders who trust Market QX for their trading needs. 
              Start with a free demo account today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Open Demo Account
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Start Live Trading
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
