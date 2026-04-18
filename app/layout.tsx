import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import './globals.css'

const inter = Inter({ subsets: ["latin"], variable: '--font-sans' });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: '--font-mono' });

export const metadata: Metadata = {
  // ── Canonical base — required for Next.js to resolve absolute OG/sitemap URLs
  metadataBase: new URL('https://luminexsocial.com'),

  title: 'Luminex Social | AI Automation & Premium Content',
  description:
    'Luminex Social — The Convergence of Logic & Narrative. We build synchronized AI automation systems and high-retention video content for founders who want compounding growth without ad spend.',
  generator: 'v0.app',
  applicationName: 'Luminex Social',
  referrer: 'origin-when-cross-origin',
  keywords: [
    'AI Automation',
    'Agentic Workflows',
    'n8n Automation',
    'AI Voice Agents',
    'Short-form Video',
    'High-Retention Content',
    'Lead Generation Automation',
    'Logic and Narrative',
    'Luminex Social',
    'Content Creation Agency',
  ],
  authors: [{ name: 'Luminex Social', url: 'https://luminexsocial.com' }],
  creator: 'Luminex Social',
  publisher: 'Luminex Social',

  // ── Robots — controls snippet richness in Google, Bing, and AI-engine previews
  // max-snippet:-1       → no character limit on text snippets (full paragraph summaries)
  // max-image-preview:large → allows large thumbnail images in search / AI answer cards
  // max-video-preview:-1 → no time-limit on video preview clips (full autoplay previews)
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
    // The `other` field serialises to additional <meta name="robots"> directives,
    // which non-Google crawlers (Bing, Perplexity, etc.) honour.
    other: {
      robots: 'max-snippet:-1, max-image-preview:large, max-video-preview:-1',
    },
  },

  // ── Open Graph — powers rich cards in Perplexity, ChatGPT browse, and social
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://luminexsocial.com',
    siteName: 'Luminex Social',
    title: 'Luminex Social | AI Automation & Premium Content',
    description:
      'Synchronized AI automation systems and high-retention video — built as one compounding infrastructure for founders who want to scale without ads.',
    images: [
      {
        url: '/icon.svg',
        width: 1200,
        height: 630,
        alt: 'Luminex Social — Logic & Narrative',
      },
    ],
  },

  // ── Twitter / X card
  twitter: {
    card: 'summary_large_image',
    title: 'Luminex Social | AI Automation & Premium Content',
    description:
      'Synchronized AI automation systems and high-retention video — built as one compounding infrastructure.',
    images: ['/icon.svg'],
  },

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

  // ── Verification placeholders — replace tokens once DNS records are set
  verification: {
    google: 'REPLACE_WITH_GOOGLE_SEARCH_CONSOLE_TOKEN',
    // bing: 'REPLACE_WITH_BING_WEBMASTER_TOKEN',
  },

  // ── Alternate / canonical
  alternates: {
    canonical: 'https://luminexsocial.com',
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
