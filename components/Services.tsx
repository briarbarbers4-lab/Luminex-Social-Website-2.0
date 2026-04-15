'use client'

import { useState } from 'react'

// SVG Icons
const FilmIcon = ({ color }: { color: string }) => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18" />
    <line x1="7" y1="2" x2="7" y2="22" />
    <line x1="17" y1="2" x2="17" y2="22" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <line x1="2" y1="7" x2="7" y2="7" />
    <line x1="2" y1="17" x2="7" y2="17" />
    <line x1="17" y1="17" x2="22" y2="17" />
    <line x1="17" y1="7" x2="22" y2="7" />
  </svg>
)

const DocumentIcon = ({ color }: { color: string }) => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
    <line x1="10" y1="9" x2="8" y2="9" />
  </svg>
)

const ChipIcon = ({ color }: { color: string }) => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="4" y="4" width="16" height="16" rx="2" ry="2" />
    <rect x="9" y="9" width="6" height="6" />
    <line x1="9" y1="1" x2="9" y2="4" />
    <line x1="15" y1="1" x2="15" y2="4" />
    <line x1="9" y1="20" x2="9" y2="23" />
    <line x1="15" y1="20" x2="15" y2="23" />
    <line x1="20" y1="9" x2="23" y2="9" />
    <line x1="20" y1="14" x2="23" y2="14" />
    <line x1="1" y1="9" x2="4" y2="9" />
    <line x1="1" y1="14" x2="4" y2="14" />
  </svg>
)

export default function Services() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const services = [
    {
      id: 1,
      title: 'Short Form Editing',
      description: 'High-impact reels, clips, and TikToks that stop scrolls and drive engagement. Fast-paced, data-driven cuts.',
      accent: '#6366F1',
      Icon: FilmIcon,
    },
    {
      id: 2,
      title: 'Long Form & Scripting',
      description: 'Premium YouTube videos, podcast episodes, and branded content. Strategic narratives that convert.',
      accent: '#A855F7',
      Icon: DocumentIcon,
    },
    {
      id: 3,
      title: 'AI Automation',
      description: 'Intelligent workflows, lead generation systems, and autonomous content pipelines. Technology at scale.',
      accent: '#2DD4BF',
      Icon: ChipIcon,
    },
  ]

  return (
    <section id="services" className="py-20 px-4 bg-[#0B0E14]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-[#F8FAFC] mb-16 text-center">
          Our Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="relative group"
              onMouseEnter={() => setHoveredCard(service.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div
                className="relative p-8 rounded-xl transition-all duration-300 h-full flex flex-col overflow-hidden"
                style={{
                  backgroundColor: 'rgba(30, 41, 59, 0.85)',
                  border: `1px solid ${hoveredCard === service.id ? service.accent : '#334155'}`,
                  boxShadow: hoveredCard === service.id ? `0 0 20px ${service.accent}50` : 'none',
                }}
              >
                {/* Icon */}
                <div className="mb-4">
                  <service.Icon color={service.accent} />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-[#F8FAFC] mb-3">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-[#CBD5E1] text-sm leading-relaxed flex-grow mb-4">
                  {service.description}
                </p>

                {/* Bottom Accent Line */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-[2px]"
                  style={{ backgroundColor: service.accent }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
