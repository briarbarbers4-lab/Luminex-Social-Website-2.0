'use client'

import { useState } from 'react'

// Category color mapping matching service colors
const categoryColors: Record<string, { bg: string; text: string; badge: string }> = {
  'short-form': { bg: 'from-[#6366F1]/30 to-[#A855F7]/30', text: '#6366F1', badge: 'Short Form' },
  'long-form': { bg: 'from-[#A855F7]/30 to-[#6366F1]/30', text: '#A855F7', badge: 'Long Form' },
}

export default function Portfolio() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  const portfolioItems = [
    { 
      id: 1, 
      title: 'Strategic Content Series', 
      category: 'long-form',
      videoUrl: 'https://www.youtube.com/watch?v=L1Eo7fMj-vE&t=1s'
    },
    { 
      id: 2, 
      title: 'Growth Optimization Deep Dive', 
      category: 'long-form',
      videoUrl: 'https://www.youtube.com/watch?v=IeM04ObtEbA&embeds_referring_euri=https%3A%2F%2Fluminexsocial.com%2F'
    },
    { 
      id: 3, 
      title: 'Brand Authority Development', 
      category: 'long-form',
      videoUrl: 'https://www.youtube.com/watch?v=hxWDYQMgNn0&embeds_referring_euri=https%3A%2F%2Fluminexsocial.com%2F'
    },
    { 
      id: 4, 
      title: 'Content Strategy Masterclass', 
      category: 'long-form',
      videoUrl: 'https://www.youtube.com/watch?v=hg98fzJTKh4&embeds_referring_euri=https%3A%2F%2Fluminexsocial.com%2F'
    },
  ]

  const filteredItems = portfolioItems

  return (
    <section id="work" className="py-20 px-4 bg-[#0B0E14]">
      <div className="max-w-7xl mx-auto">
        {/* Section Tag - Centered */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <span className="text-lg" style={{ color: '#6366F1' }}>●</span>
          <span
            className="text-sm font-medium px-6 py-3 rounded-full"
            style={{
              color: '#6366F1',
              backgroundColor: 'rgba(99, 102, 241, 0.1)',
              border: '1px solid rgba(99, 102, 241, 0.3)',
              fontFamily: 'var(--font-sans)',
            }}
          >
            OUR WORK
          </span>
          <span className="text-lg" style={{ color: '#6366F1' }}>●</span>
        </div>

        {/* Subtitle - Centered */}
        <p
          className="text-base mb-16 text-center"
          style={{
            fontFamily: 'var(--font-mono)',
            color: '#CBD5E1',
            letterSpacing: '0.05em',
          }}
        >
          Long-form content that drives impact
        </p>



        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredItems.map((item) => {
            const colors = categoryColors[item.category]
            const isHovered = hoveredId === item.id
            
            return (
              <div
                key={item.id}
                className="rounded-xl overflow-hidden cursor-pointer transition-all duration-300"
                style={{
                  backgroundColor: '#1E293B',
                  transform: isHovered ? 'scale(1.02)' : 'scale(1)',
                  border: `1px solid ${isHovered ? '#6366F1' : '#334155'}`,
                  boxShadow: isHovered ? '0 0 20px rgba(99, 102, 241, 0.4)' : 'none',
                }}
                onMouseEnter={() => setHoveredId(item.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {/* 16:9 Thumbnail Area */}
                <div className="relative aspect-video">
                  {/* Gradient Placeholder */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${colors.bg}`} />
                  
                  {/* Category Badge */}
                  <div 
                    className="absolute top-3 left-3 px-2 py-1 rounded text-xs font-mono uppercase tracking-wide"
                    style={{ 
                      backgroundColor: 'rgba(11, 14, 20, 0.8)',
                      color: colors.text,
                      border: `1px solid ${colors.text}40`,
                    }}
                  >
                    {colors.badge}
                  </div>
                  
                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div 
                      className="w-14 h-14 rounded-full flex items-center justify-center transition-transform duration-300"
                      style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.9)',
                        transform: isHovered ? 'scale(1.1)' : 'scale(1)',
                      }}
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="#0B0E14">
                        <polygon points="5,3 19,12 5,21" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Title Below Thumbnail */}
                <div className="p-4">
                  <h3 className="text-[#F8FAFC] font-sans font-semibold text-base">
                    {item.title}
                  </h3>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
