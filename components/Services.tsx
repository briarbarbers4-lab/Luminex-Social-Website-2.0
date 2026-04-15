'use client'

import { useState } from 'react'

export default function Services() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const services = [
    {
      id: 1,
      title: 'Short Form Editing',
      description: 'High-impact reels, clips, and TikToks that stop scrolls and drive engagement. Fast-paced, data-driven cuts.',
      accent: '#6366F1',
      icon: '🎬',
    },
    {
      id: 2,
      title: 'Long Form & Scripting',
      description: 'Premium YouTube videos, podcast episodes, and branded content. Strategic narratives that convert.',
      accent: '#A855F7',
      icon: '📹',
    },
    {
      id: 3,
      title: 'AI Automation',
      description: 'Intelligent workflows, lead generation systems, and autonomous content pipelines. Technology at scale.',
      accent: '#2DD4BF',
      icon: '⚙️',
    },
  ]

  return (
    <section id="services" className="py-20 px-4 bg-[#0B0E14]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-[#F8FAFC] mb-16 text-center">
          Our Services
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="relative group"
              onMouseEnter={() => setHoveredCard(service.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div
                className={`p-8 rounded-xl bg-[#1E293B] border border-[#334155] transition-all duration-300 h-full flex flex-col ${
                  hoveredCard === service.id
                    ? 'border-opacity-100 shadow-lg'
                    : 'border-opacity-50 hover:border-opacity-100'
                }`}
                style={{
                  boxShadow: hoveredCard === service.id ? `0 0 30px ${service.accent}40` : 'none',
                  borderColor: hoveredCard === service.id ? service.accent : '#334155',
                }}
              >
                {/* Icon */}
                <div className="text-4xl mb-4">{service.icon}</div>

                {/* Title */}
                <h3 className="text-xl font-bold text-[#F8FAFC] mb-3">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-[#CBD5E1] text-sm leading-relaxed flex-grow mb-4">
                  {service.description}
                </p>

                {/* Accent Line */}
                <div
                  className="h-1 w-12 rounded-full"
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
