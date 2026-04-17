import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import './globals.css'

const inter = Inter({ subsets: ["latin"], variable: '--font-sans' });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: '--font-mono' });

export const metadata: Metadata = {
  title: 'Luminex Social | AI Automation & Premium Content',
  description: 'Luminex Social - The Convergence of Logic & Narrative',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Luminex Social",
    "url": "https://luminexsocial.com",
    "logo": "https://luminexsocial.com/icon.svg",
    "sameAs": [
      "https://www.linkedin.com/company/placeholder",
      "https://youtube.com/@placeholder"
    ],
    "knowsAbout": [
      "Agentic Workflows",
      "Short-form Video Retention",
      "B2B Lead Gen Automation",
      "Narrative-led Marketing"
    ],
    "founder": {
      "@type": "Person",
      "name": "Ayyan",
      "jobTitle": "CEO & Founder",
      "sameAs": [
        "https://www.linkedin.com/in/placeholder"
      ]
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AI Automation Systems"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Premium Video Editing"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Strategic Content Creation"
          }
        }
      ]
    }
  };

  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} bg-[#0B0E14]`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased bg-[#0B0E14] text-[#F8FAFC]">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
