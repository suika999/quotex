
import { Metadata } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  MessageCircle,
  Send,
  Headphones
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact Us - Get Support | Market QX Customer Service',
  description: 'Contact Market QX support team. Get help with trading, account issues, or general inquiries. 24/7 customer support available.',
  keywords: 'contact Market QX, customer support, trading help, technical support, customer service',
}

const contactMethods = [
  {
    icon: MessageCircle,
    title: 'Live Chat',
    description: 'Get instant help from our support team',
    details: 'Available 24/7',
    action: 'Start Chat'
  },
  {
    icon: Mail,
    title: 'Email Support',
    description: 'Send us your questions via email',
    details: 'support@market-qx.pro',
    action: 'Send Email'
  },
  {
    icon: Phone,
    title: 'Phone Support',
    description: 'Speak directly with our experts',
    details: '+1-800-MARKET-QX',
    action: 'Call Now'
  },
  {
    icon: Headphones,
    title: 'Technical Support',
    description: 'Get help with platform issues',
    details: 'tech@market-qx.pro',
    action: 'Get Help'
  }
]

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Mail className="h-16 w-16 mx-auto mb-6 text-blue-300" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Contact Us
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              We're here to help. Get in touch with our support team for any questions or assistance.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Get in Touch
            </h2>
            <p className="text-xl text-gray-600">
              Choose the best way to reach us. We're available 24/7 to assist you.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => (
              <Card key={index} className="border-0 shadow-lg card-hover text-center">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-blue-100 rounded-full">
                      <method.icon className="h-6 w-6 text-blue-600" />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {method.title}
                  </h3>
                  <p className="text-gray-600 mb-3 text-sm">
                    {method.description}
                  </p>
                  <p className="text-blue-600 font-medium mb-4 text-sm">
                    {method.details}
                  </p>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    {method.action}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Send Us a Message
            </h2>
            <p className="text-xl text-gray-600">
              Fill out the form below and we'll get back to you as soon as possible.
            </p>
          </div>
          
          <Card className="shadow-xl border-0">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Contact Form</CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="Enter your first name" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Enter your last name" className="mt-1" />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="Enter your email" className="mt-1" />
                </div>
                
                <div>
                  <Label htmlFor="subject">Subject</Label>
                  <select
                    id="subject"
                    className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select a subject</option>
                    <option value="account">Account Issues</option>
                    <option value="trading">Trading Support</option>
                    <option value="technical">Technical Problems</option>
                    <option value="billing">Billing Questions</option>
                    <option value="general">General Inquiry</option>
                  </select>
                </div>
                
                <div>
                  <Label htmlFor="message">Message</Label>
                  <textarea
                    id="message"
                    rows={6}
                    placeholder="Please describe your question or issue in detail..."
                    className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                
                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 py-3">
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Office Information */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Office
            </h2>
            <p className="text-xl text-gray-600">
              Visit us or reach out during business hours.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-8">
                <MapPin className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Address</h3>
                <p className="text-gray-600">
                  Market QX Headquarters<br />
                  123 Financial District<br />
                  New York, NY 10004<br />
                  United States
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-8">
                <Clock className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Business Hours</h3>
                <p className="text-gray-600">
                  Monday - Friday: 9:00 AM - 6:00 PM EST<br />
                  Saturday: 10:00 AM - 4:00 PM EST<br />
                  Sunday: Closed<br />
                  <span className="text-green-600 font-medium">24/7 Online Support</span>
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-8">
                <Phone className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Phone Numbers</h3>
                <p className="text-gray-600">
                  General Support: +1-800-MARKET-QX<br />
                  Technical Support: +1-800-TECH-QX<br />
                  Sales: +1-800-SALES-QX<br />
                  International: +1-212-555-0123
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
