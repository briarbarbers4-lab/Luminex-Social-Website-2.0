'use client'

import { useState } from 'react'
import { Play } from 'lucide-react'

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all')

  const portfolioItems = [
    { id: 1, title: 'Brand Launch Campaign', category: 'short-form', color: 'bg-gradient-to-br from-[#6366F1] to-[#4F46E5]' },
    { id: 2, title: 'Product Demo Reel', category: 'short-form', color: 'bg-gradient-to-br from-[#A855F7] to-[#9333EA]' },
    { id: 3, title: 'YouTube Tutorial Series', category: 'long-form', color: 'bg-gradient-to-br from-[#2DD4BF] to-[#14B8A6]' },
    { id: 4, title: 'AI Workflow Showcase', category: 'branded', color: 'bg-gradient-to-br from-[#6366F1] to-[#A855F7]' },
    { id: 5, title: 'TikTok Series', category: 'short-form', color: 'bg-gradient-to-br from-[#EC4899] to-[#DB2777]' },
    { id: 6, title: 'Podcast Episode 1', category: 'long-form', color: 'bg-gradient-to-br from-[#F59E0B] to-[#D97706]' },
    { id: 7, title: 'Social Media Kit', category: 'branded', color: 'bg-gradient-to-br from-[#3B82F6] to-[#2563EB]' },
    { id: 8, title: 'Lead Gen Automation', category: 'branded', color: 'bg-gradient-to-br from-[#2DD4BF] to-[#0891B2]' },
    { id: 9, title: 'Reels Compilation', category: 'short-form', color: 'bg-gradient-to-br from-[#A855F7] to-[#7C3AED]' },
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
        <div className="grid md:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-xl aspect-video cursor-pointer"
            >
              {/* Thumbnail */}
              <div className={`w-full h-full ${item.color} flex items-center justify-center transition-transform duration-300 group-hover:scale-110`}>
                <Play className="w-12 h-12 text-[#F8FAFC]/60" fill="currentColor" />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                <Play className="w-12 h-12 text-[#F8FAFC] opacity-0 group-hover:opacity-100 transition-opacity" fill="currentColor" />
              </div>

              {/* Glow Border on Hover */}
              <div className="absolute inset-0 rounded-xl border border-[#334155] group-hover:border-[#6366F1] group-hover:glow-indigo transition-all pointer-events-none" />

              {/* Title */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 translate-y-2 group-hover:translate-y-0 transition-transform">
                <p className="text-[#F8FAFC] font-semibold text-sm">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
