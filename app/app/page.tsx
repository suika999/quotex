
import Header from '@/components/header'
import Footer from '@/components/footer'
import HeroSection from '@/components/hero-section'
import FeaturesSection from '@/components/features-section'
import TradingToolsSection from '@/components/trading-tools-section'

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <TradingToolsSection />
      <Footer />
    </main>
  )
}
