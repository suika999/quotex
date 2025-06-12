
import { Metadata } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { 
  Users, 
  Award, 
  Shield, 
  Globe, 
  TrendingUp,
  Target,
  Heart,
  Lightbulb
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About Market QX - Leading Trading Platform | Company Information',
  description: 'Learn about Market QX, our mission to democratize trading, and how we provide advanced trading tools and education to traders worldwide.',
  keywords: 'about Market QX, trading platform company, financial services, trading education, market analysis',
}

const stats = [
  { icon: Users, value: '125,000+', label: 'Active Traders' },
  { icon: Globe, value: '50+', label: 'Countries' },
  { icon: TrendingUp, value: '2.5M+', label: 'Trades Executed' },
  { icon: Award, value: '5+', label: 'Industry Awards' },
]

const values = [
  {
    icon: Shield,
    title: 'Security First',
    description: 'We prioritize the security of our users\' funds and data with bank-level encryption and regulatory compliance.'
  },
  {
    icon: Heart,
    title: 'Customer Focused',
    description: 'Our users are at the center of everything we do. We continuously improve based on their feedback and needs.'
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'We leverage cutting-edge technology to provide the most advanced trading tools and analytics in the industry.'
  },
  {
    icon: Target,
    title: 'Excellence',
    description: 'We strive for excellence in every aspect of our platform, from execution speed to customer support.'
  }
]

const team = [
  {
    name: 'Sarah Johnson',
    role: 'Chief Executive Officer',
    image: 'https://i.pinimg.com/originals/39/28/68/392868bbf257d2943558f0394654ac7a.jpg',
    description: 'Former Goldman Sachs executive with 15+ years in financial markets.'
  },
  {
    name: 'Michael Chen',
    role: 'Chief Technology Officer',
    image: 'https://i.pinimg.com/736x/07/44/76/074476f844838fb2487a9d7b4d08a904.jpg',
    description: 'Tech veteran who led engineering teams at major fintech companies.'
  },
  {
    name: 'David Rodriguez',
    role: 'Head of Trading',
    image: 'https://i.pinimg.com/originals/a1/1c/b5/a11cb521eb3d0951fc49163f861dac09.jpg',
    description: 'Former institutional trader with expertise in algorithmic trading systems.'
  }
]

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About Market QX
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Empowering traders worldwide with advanced technology, 
              comprehensive education, and unwavering commitment to excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-blue-100 rounded-full">
                    <stat.icon className="h-8 w-8 text-blue-600" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                At Market QX, we believe that everyone should have access to professional-grade 
                trading tools and education. Our mission is to democratize financial markets by 
                providing cutting-edge technology, comprehensive resources, and exceptional support 
                to traders of all experience levels.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We are committed to transparency, security, and innovation, ensuring that our 
                platform remains at the forefront of the trading industry while maintaining 
                the highest standards of regulatory compliance and user protection.
              </p>
              <Link href="/demo">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  Start Your Journey
                </Button>
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-square relative rounded-2xl overflow-hidden">
                <Image
                  src="https://i.pinimg.com/736x/bf/ae/b4/bfaeb4b26f11ee65d031a4b9533c9f08--video-wall-stock-ticker.jpg"
                  alt="Market QX Office"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do and shape our commitment to our users.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="border-0 shadow-lg card-hover">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-blue-100 rounded-lg">
                      <value.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 ml-4">
                      {value.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Leadership Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the experienced professionals leading Market QX into the future.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="border-0 shadow-lg card-hover text-center">
                <CardContent className="p-8">
                  <div className="w-32 h-32 mx-auto mb-6 relative rounded-full overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 font-medium mb-4">
                    {member.role}
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    {member.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Join Market QX?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Experience the difference of trading with a platform built by traders, for traders. 
            Start your journey today with our free demo account.
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
