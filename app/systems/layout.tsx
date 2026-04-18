import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Systems Division | AI Automation & Agentic Workflows | Luminex Social',
  description:
    'Luminex Systems: n8n enterprise automation, AI voice agents (Vapi/Retell), intelligent DM chatbots, and autonomous AI employees. Backend infrastructure that qualifies, books, and follows up — without human input.',
  keywords: [
    'AI Automation Agency',
    'Agentic Workflows',
    'n8n Enterprise Automation',
    'AI Voice Agents',
    'Vapi AI',
    'Retell AI',
    'Autonomous AI Employees',
    'Lead Qualification Automation',
    'WhatsApp Chatbot AI',
    'Business Automation Systems',
  ],
  alternates: {
    canonical: 'https://luminexsocial.com/systems',
  },
  openGraph: {
    type: 'website',
    url: 'https://luminexsocial.com/systems',
    title: 'Systems Division | AI Automation & Agentic Workflows | Luminex Social',
    description:
      'Backend infrastructure that runs continuously — n8n pipelines, AI voice agents, DM chatbots, and autonomous AI employees. Zero execution errors. 24/7 uptime.',
    siteName: 'Luminex Social — Systems Division',
    images: [{ url: '/icon.svg', width: 1200, height: 630, alt: 'Luminex Systems Division' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Systems Division | Luminex Social',
    description:
      'Agentic workflows, AI voice agents, and n8n automation — the full backend infrastructure stack.',
    images: ['/icon.svg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-snippet': -1, 'max-image-preview': 'large', 'max-video-preview': -1 },
  },
}

/**
 * Department-level JSON-LD: Luminex Systems
 *
 * @type ProfessionalService — schema.org type for a business providing
 *   professional services (consulting, SaaS, automation, technology).
 *
 * @id matches the department stub declared in the root Organization schema,
 *   allowing search engines and LLMs to resolve both nodes as one entity.
 *
 * parentOrganization back-references Luminex Social's @id to preserve
 *   brand equity and ensure the division inherits the parent's trust signals.
 */
const systemsJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',

  // Must match the @id used in the parent Organization's department array
  '@id': 'https://luminexsocial.com/systems#department',

  'name': 'Luminex Systems',
  'alternateName': 'Luminex AI Systems',
  'description':
    'Luminex Systems is the AI automation division of Luminex Social. We build agentic workflow infrastructure — n8n enterprise pipelines, AI voice agents (Vapi/Retell), LLM-powered DM chatbots, and autonomous AI employees — that qualifies, books, and follows up without human input.',
  'url': 'https://luminexsocial.com/systems',

  // Back-reference to the parent Organization entity
  'parentOrganization': {
    '@type': 'Organization',
    '@id': 'https://luminexsocial.com/#organization',
    'name': 'Luminex Social',
    'url': 'https://luminexsocial.com',
  },

  // Primary service categories this division is a specialist in
  'serviceType': [
    'AI Automation',
    'Agentic Workflows',
    'n8n Enterprise Automation',
    'AI Voice Agents',
    'LLM Chatbot Development',
    'SaaS Integration',
    'CRM Automation',
    'Lead Qualification Automation',
  ],

  'knowsAbout': [
    'n8n Workflow Automation',
    'Vapi AI Voice Agents',
    'Retell AI',
    'OpenAI GPT-4o Integration',
    'Anthropic Claude Integration',
    'Make.com Automation',
    'Meta Graph API',
    'WhatsApp Business API',
    'Agentic AI Systems',
    'CRM Pipeline Automation',
  ],

  'areaServed': {
    '@type': 'Place',
    'name': 'Worldwide',
  },

  'availableChannel': {
    '@type': 'ServiceChannel',
    'serviceUrl': 'https://luminexsocial.com/systems',
    'serviceType': 'Online',
  },

  'hasOfferCatalog': {
    '@type': 'OfferCatalog',
    'name': 'Luminex Systems Services',
    'itemListElement': [
      {
        '@type': 'Offer',
        'itemOffered': {
          '@type': 'Service',
          'name': 'AI Voice Agent Deployment',
          'description': 'Sub-500ms voice agents built on Vapi and Retell AI for inbound qualification and outbound follow-up.',
        },
      },
      {
        '@type': 'Offer',
        'itemOffered': {
          '@type': 'Service',
          'name': 'n8n Enterprise Pipeline Architecture',
          'description': 'Event-driven automation workflows connecting CRM, communication tools, and AI models with zero execution errors.',
        },
      },
      {
        '@type': 'Offer',
        'itemOffered': {
          '@type': 'Service',
          'name': 'Intelligent DM Chatbot Systems',
          'description': 'LLM-trained agents for Instagram and WhatsApp that qualify leads and book calls autonomously.',
        },
      },
      {
        '@type': 'Offer',
        'itemOffered': {
          '@type': 'Service',
          'name': 'Autonomous AI Employee Deployment',
          'description': 'AI agents that research prospects, write personalised outreach, and send at optimal windows — 24/7/365.',
        },
      },
    ],
  },
}

export default function SystemsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(systemsJsonLd) }}
      />
      {children}
    </>
  )
}
