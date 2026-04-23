import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import localFont from 'next/font/local'
import PrivacyProvider from '@/components/PrivacyProvider'
import './globals.css'

const inter = Inter({ subsets: ["latin"], variable: '--font-sans', display: 'swap' });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: '--font-mono', display: 'swap' });
const satoshi = localFont({
  src: '../public/fonts/Satoshi-Bold.woff2',
  variable: '--font-heading',
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: '#000814',
}

export const metadata: Metadata = {
  // ── Canonical base — required for Next.js to resolve absolute OG/sitemap URLs
  metadataBase: new URL('https://luminexsocial.com'),

  title: {
    template: '%s | Luminex Social',
    default: 'Luminex Social | AI Automation & Premium Content Creation',
  },
  description: 'Global AI Automation and High-Retention Content',
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
    'max-snippet': -1,
    'max-image-preview': 'large',
    'max-video-preview': -1,
  },

  // ── Open Graph — powers rich cards in Perplexity, ChatGPT browse, and social
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://luminexsocial.com',
    siteName: 'Luminex Social',
    title: 'Luminex Social',
    description: 'Global AI Automation and High-Retention Content',
    images: [
      {
        url: 'https://luminexsocial.com/og-image-placeholder.jpg', // Placeholder for root og:image
        width: 1200,
        height: 630,
        alt: 'Luminex Social',
      },
    ],
  },

  // ── Twitter / X card
  twitter: {
    card: 'summary_large_image',
    title: 'Luminex Social',
    description: 'Global AI Automation and High-Retention Content',
    creator: '@Ayyan', // Founder's handle
    images: ['/og-image-placeholder.jpg'],
  },

  // ── Technical Tags
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  // ── Icons (Handled automatically by Next.js if placed in /app root like /app/icon.jpg)

  // ── Verification placeholders — replace tokens once DNS records are set
  verification: {
    google: 'REPLACE_WITH_GOOGLE_SEARCH_CONSOLE_TOKEN',
    yandex: 'REPLACE_WITH_YANDEX_WEBMASTER_TOKEN',
  },

  // ── Alternate / canonical
  alternates: {
    canonical: '/',
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

    // ── Entity anchor — all sub-org schemas reference this @id ──────────────
    "@id": "https://luminexsocial.com/#organization",

    "name": "Luminex Social",
    "alternateName": "Luminex",
    "url": "https://luminexsocial.com",
    "logo": {
      "@type": "ImageObject",
      "url": "https://luminexsocial.com/icon.svg",
      "contentUrl": "https://luminexsocial.com/icon.svg"
    },
    "description": "Luminex Social operates two synchronized infrastructure divisions — Luminex Systems (AI automation, agentic workflows, voice agents) and Luminex Creative (high-retention video, psychological scripting, content strategy) — as one unified framework for compounding founder growth.",

    // ── Department declarations — point to each division's entity @id ───────
    "department": [
      {
        "@id": "https://luminexsocial.com/systems#department",
        "@type": "ProfessionalService",
        "name": "Luminex Systems"
      },
      {
        "@id": "https://luminexsocial.com/creative#department",
        "@type": "CreativeWorkSeries",
        "name": "Luminex Creative"
      }
    ],

    "sameAs": [
      "https://www.linkedin.com/company/luminex-social",
      "https://www.instagram.com/luminex.social/",
      "https://www.youtube.com/@luminex.social"
    ],

    "knowsAbout": [
      "Agentic Workflows",
      "n8n Enterprise Automation",
      "AI Voice Agents",
      "Short-form Video Retention",
      "Psychological Scripting",
      "B2B Lead Gen Automation",
      "Narrative-led Marketing",
      "SaaS Integration",
      "Autonomous AI Employees"
    ],

    "founder": {
      "@type": "Person",
      "name": "Ayyan",
      "jobTitle": "CEO & Founder",
      "worksFor": { "@id": "https://luminexsocial.com/#organization" },
      "sameAs": [
        "https://www.linkedin.com/company/luminex-social"
      ]
    },

    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Luminex Social Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "name": "Luminex Systems",
          "itemOffered": {
            "@type": "Service",
            "name": "AI Automation & Agentic Workflow Infrastructure",
            "description": "n8n enterprise pipelines, AI voice agents, DM chatbots, and autonomous AI employees — the full backend automation stack.",
            "url": "https://luminexsocial.com/systems",
            "provider": { "@id": "https://luminexsocial.com/#organization" }
          }
        },
        {
          "@type": "Offer",
          "name": "Luminex Creative",
          "itemOffered": {
            "@type": "Service",
            "name": "High-Retention Video & Content Strategy",
            "description": "Psychological scripting, rhythmic short-form editing, brand identity, and multi-platform distribution — 30 assets per month.",
            "url": "https://luminexsocial.com/creative",
            "provider": { "@id": "https://luminexsocial.com/#organization" }
          }
        }
      ]
    }
  };

  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} ${satoshi.variable} bg-[#0B0E14]`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased bg-[#0B0E14] text-[#F8FAFC]">
        {children}
        <PrivacyProvider />
      </body>
    </html>
  )
}
