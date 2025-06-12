
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from '@/components/ui/toaster'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'MARKET QX - Advanced Trading Platform | Quotex Alternative for India',
  description: 'Experience professional trading with MARKET QX - the leading Quotex alternative platform for Indian traders. Demo account, 400+ assets, advanced analytics, and 24/7 support.',
  keywords: 'Quotex, trading platform India, binary options, forex trading, demo account, Market QX, online trading, financial instruments',
  authors: [{ name: 'Market QX Team' }],
  creator: 'Market QX',
  publisher: 'Market QX',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://market-qx.pro',
    title: 'MARKET QX - Advanced Trading Platform',
    description: 'Professional trading platform with demo accounts, advanced analytics, and comprehensive trading tools.',
    siteName: 'Market QX',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MARKET QX - Advanced Trading Platform',
    description: 'Professional trading platform with demo accounts, advanced analytics, and comprehensive trading tools.',
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FinancialService",
              "name": "Market QX",
              "description": "Advanced trading platform offering binary options, forex, and CFD trading with professional tools and analytics.",
              "url": "https://i.ytimg.com/vi/PUD3WYv1h2M/maxresdefault.jpg",
              "logo": "https://i.ytimg.com/vi/-kndjBOHkWQ/maxres2.jpg?sqp=-oaymwEoCIAKENAF8quKqQMcGADwAQH4Ac4FgAKACooCDAgAEAEYQSBKKGUwDw==&rs=AOn4CLBps3qLGEhoTqOGXqOAu72XyvktJQ",
              "sameAs": [
                "https://twitter.com/marketqx",
                "https://facebook.com/marketqx"
              ],
              "serviceType": "Trading Platform",
              "areaServed": "Worldwide",
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Trading Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Demo Trading Account",
                      "description": "Free demo account with virtual funds for practice trading"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Live Trading Account",
                      "description": "Real money trading account with access to 400+ financial instruments"
                    }
                  }
                ]
              }
            })
          }}
        />
      </head>
      <body className={inter.className} suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
