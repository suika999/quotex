
'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Play, TrendingUp, Users, Award, BarChart3 } from 'lucide-react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

export default function HeroSection() {
  const [activeUsers, setActiveUsers] = useState(0)
  const [totalTrades, setTotalTrades] = useState(0)
  const [successRate, setSuccessRate] = useState(0)

  useEffect(() => {
    // Animate counters
    const animateCounter = (setter: (value: number) => void, target: number, duration: number = 2000) => {
      let start = 0
      const increment = target / (duration / 16)
      const timer = setInterval(() => {
        start += increment
        if (start >= target) {
          setter(target)
          clearInterval(timer)
        } else {
          setter(Math.floor(start))
        }
      }, 16)
    }

    const timer = setTimeout(() => {
      animateCounter(setActiveUsers, 125000)
      animateCounter(setTotalTrades, 2500000)
      animateCounter(setSuccessRate, 89)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 hero-gradient"></div>
      <div className="absolute inset-0 bg-black/20"></div>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-300 rounded-full blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold leading-tight mb-6"
            >
              Advanced Trading
              <span className="block text-blue-300">Platform</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed"
            >
              Experience professional trading with advanced analytics, 
              real-time signals, and comprehensive market access.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <Link href="/demo">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-8 py-4 text-lg">
                  <Play className="mr-2 h-5 w-5" />
                  Try Demo Account
                </Button>
              </Link>
              <Link href="/signup">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white text-white hover:bg-white hover:text-blue-600 font-semibold px-8 py-4 text-lg"
                >
                  Start Trading
                </Button>
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="grid grid-cols-3 gap-6"
            >
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Users className="h-6 w-6 text-blue-300 mr-2" />
                  <span className="text-2xl font-bold">{activeUsers.toLocaleString()}+</span>
                </div>
                <p className="text-blue-200 text-sm">Active Traders</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <BarChart3 className="h-6 w-6 text-blue-300 mr-2" />
                  <span className="text-2xl font-bold">{totalTrades.toLocaleString()}+</span>
                </div>
                <p className="text-blue-200 text-sm">Total Trades</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Award className="h-6 w-6 text-blue-300 mr-2" />
                  <span className="text-2xl font-bold">{successRate}%</span>
                </div>
                <p className="text-blue-200 text-sm">Success Rate</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Trading Interface Preview */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative"
          >
            <div className="relative bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
              <div className="aspect-video bg-white/5 rounded-lg p-4 mb-4">
                <div className="h-full relative overflow-hidden rounded-lg">
                  <Image
                    src="https://i.pinimg.com/originals/01/97/35/019735b71a5838a9efb473caf46c3abb.png"
                    alt="Trading Platform Interface"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-green-500/20 rounded-lg p-3 text-center">
                  <TrendingUp className="h-6 w-6 text-green-400 mx-auto mb-1" />
                  <p className="text-green-400 font-semibold">+24.5%</p>
                  <p className="text-white/70 text-sm">Today's Profit</p>
                </div>
                <div className="bg-blue-500/20 rounded-lg p-3 text-center">
                  <BarChart3 className="h-6 w-6 text-blue-400 mx-auto mb-1" />
                  <p className="text-blue-400 font-semibold">400+</p>
                  <p className="text-white/70 text-sm">Assets</p>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-4 -right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold"
            >
              Live Trading
            </motion.div>
            
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -bottom-4 -left-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold"
            >
              Real-time Data
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
        >
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2"></div>
        </motion.div>
      </motion.div>
    </section>
  )
}
