'use client'

import { useState } from 'react'

// Category color mapping matching service colors
const categoryColors: Record<string, { bg: string; text: string; badge: string }> = {
  'short-form': { bg: 'from-[#6366F1]/30 to-[#A855F7]/30', text: '#6366F1', badge: 'Short Form' },
  'long-form': { bg: 'from-[#A855F7]/30 to-[#6366F1]/30', text: '#A855F7', badge: 'Long Form' },
  'branded': { bg: 'from-[#2DD4BF]/30 to-[#6366F1]/30', text: '#2DD4BF', badge: 'Branded' },
}

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  const portfolioItems = [
    { id: 1, title: 'Brand Launch Campaign', category: 'short-form' },
    { id: 2, title: 'Product Demo Reel', category: 'short-form' },
    { id: 3, title: 'YouTube Tutorial Series', category: 'long-form' },
    { id: 4, title: 'AI Workflow Showcase', category: 'branded' },
    { id: 5, title: 'TikTok Series', category: 'short-form' },
    { id: 6, title: 'Podcast Episode 1', category: 'long-form' },
    { id: 7, title: 'Social Media Kit', category: 'branded' },
    { id: 8, title: 'Lead Gen Automation', category: 'branded' },
    { id: 9, title: 'Reels Compilation', category: 'short-form' },
  ]

  const filters = ['all', 'short-form', 'long-form', 'branded']

  const filteredItems = activeFilter === 'all'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeFilter)

  return (
    <section id="work" className="py-20 px-4 bg-[#0B0E14]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-[#F8FAFC] mb-8 text-center">
          Our Work
        </h2>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-lg font-mono text-sm uppercase transition-all ${
                activeFilter === filter
                  ? 'bg-[#6366F1] text-[#F8FAFC]'
                  : 'bg-[#1E293B] text-[#CBD5E1] hover:border-[#6366F1] border border-[#334155]'
              }`}
            >
              {filter === 'all' ? 'All' : filter === 'short-form' ? 'Short Form' : filter === 'long-form' ? 'Long Form' : 'Branded'}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
