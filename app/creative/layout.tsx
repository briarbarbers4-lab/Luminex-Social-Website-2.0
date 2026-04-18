import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Creative Division | High-Retention Video & Content Production | Luminex Social',
  description:
    'Luminex Creative: psychological scripting, rhythmic short-form editing, and multi-platform distribution engineered for algorithmic consistency. Not content production — demand generation infrastructure.',
  keywords: [
    'Short-Form Video Agency',
    'High-Retention Video Editing',
    'Psychological Scripting',
    'Content Creation Agency',
    'Short-Form Content Strategy',
    'Instagram Reels Editing',
    'TikTok Video Production',
    'Brand Identity Design',
    'Social Media Content Agency',
    'Narrative Marketing',
  ],
  alternates: {
    canonical: 'https://luminexsocial.com/creative',
  },
  openGraph: {
    type: 'website',
    url: 'https://luminexsocial.com/creative',
    title: 'Creative Division | High-Retention Video | Luminex Social',
    description:
      'Short-form video engineered to clear the 65% retention threshold and drive the algorithm. Psychological hooks, rhythmic editing, and multi-platform distribution — 30 assets per month.',
    siteName: 'Luminex Social — Creative Division',
    images: [{ url: '/creative-og-placeholder.jpg', width: 1200, height: 630, alt: 'Luminex Creative Division' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Creative Division | Luminex Social',
    description:
      'High-retention short-form video: psychological scripting, rhythmic editing, and multi-platform distribution.',
    images: ['/creative-og-placeholder.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-snippet': -1, 'max-image-preview': 'large', 'max-video-preview': -1 },
  },
}

/**
 * Department-level JSON-LD: Luminex Creative
 *
 * @type CreativeWorkSeries — represents the ongoing body of creative output
 *   produced by this division (short-form video series, content campaigns,
 *   brand identity systems, and distribution programmes).
 *
 * @id matches the department stub declared in the root Organization schema.
 *
 * 'creator' and 'producer' link back to the parent Organization @id,
 *   preserving brand equity and authority inheritance.
 *   (CreativeWorkSeries does not use parentOrganization; creator/producer
 *   are the correct schema.org relationship properties for this type.)
 */
const creativeJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'CreativeWorkSeries',

  // Must match the @id used in the parent Organization's department array
  '@id': 'https://luminexsocial.com/creative#department',

  'name': 'Luminex Creative',
  'alternateName': 'Luminex Creative Division',
  'description':
    'Luminex Creative is the demand-generation division of Luminex Social. We produce high-retention short-form video assets — scripted with psychological hooks, edited for algorithmic completion, and distributed across platforms at scale — that generate warm inbound leads for the Systems pipeline to process.',
  'url': 'https://luminexsocial.com/creative',

  // The Organisation that creates and produces this creative output
  'creator': {
    '@type': 'Organization',
    '@id': 'https://luminexsocial.com/#organization',
    'name': 'Luminex Social',
    'url': 'https://luminexsocial.com',
  },
  'producer': {
    '@type': 'Organization',
    '@id': 'https://luminexsocial.com/#organization',
    'name': 'Luminex Social',
    'url': 'https://luminexsocial.com',
  },

  // Genre / content classification for AI engine categorisation
  'genre': [
    'Short-Form Video',
    'Content Marketing',
    'Brand Identity',
    'Video Editing',
    'Content Strategy',
    'Social Media Marketing',
    'Multimedia Production',
  ],

  'about': [
    {
      '@type': 'Thing',
      'name': 'High-Retention Video Production',
      'description': 'Short-form video engineered to clear the 65% three-second retention threshold and drive algorithmic distribution on TikTok, Instagram Reels, and YouTube Shorts.',
    },
    {
      '@type': 'Thing',
      'name': 'Psychological Scripting',
      'description': 'Scripts structured around pattern interrupts, curiosity gaps, and open loops — calibrated to stop the scroll within 1.5 seconds and sustain viewer attention to completion.',
    },
    {
      '@type': 'Thing',
      'name': 'Multi-Platform Content Distribution',
      'description': 'Posting schedules, caption structures, and metadata derived from platform-specific engagement curves — 30 assets per month across all major short-form platforms.',
    },
  ],

  'keywords': [
    'Short-Form Video Agency',
    'High-Retention Video',
    'Psychological Scripting',
    'Rhythmic Editing',
    'Brand Identity Design',
    'Multi-Platform Distribution',
    'TikTok Growth',
    'Instagram Reels Production',
    'YouTube Shorts Editing',
    'Content Creation Agency',
  ],

  'offers': [
    {
      '@type': 'Offer',
      'name': 'Short-Form Video Production',
      'description': '30 fully produced, platform-optimised short-form assets per month. Scripted, edited, colour-graded, and distributed.',
      'seller': { '@id': 'https://luminexsocial.com/#organization' },
    },
    {
      '@type': 'Offer',
      'name': 'Brand Identity System',
      'description': 'Custom motion graphics, colour grading, and typographic assets encoded into every deliverable for visual consistency.',
      'seller': { '@id': 'https://luminexsocial.com/#organization' },
    },
    {
      '@type': 'Offer',
      'name': 'Psychological Scripting Service',
      'description': 'Hook architecture, retention-focused body, and conversion-directed close — written and QA\'d before production begins.',
      'seller': { '@id': 'https://luminexsocial.com/#organization' },
    },
  ],
}

export default function CreativeLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(creativeJsonLd) }}
      />
      {children}
    </>
  )
}
