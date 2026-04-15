'use client'

import { useState } from 'react'
import { ArrowRight } from 'lucide-react'

export default function ContentGallery() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  const videos = [
    {
      id: 1,
      url: 'https://ik.imagekit.io/5pahp6yywb/Crafted%20London.mp4',
      label: '// 001_SYSTEM_EDIT',
      size: 'large',
    },
    {
      id: 2,
      url: 'https://ik.imagekit.io/5pahp6yywb/8%20Months%20Ago%20I%20Founded%20203%20Media_V5.mp4',
      label: '// 002_NARRATIVE_CUT',
      size: 'small',
    },
    {
      id: 3,
      url: 'https://ik.imagekit.io/5pahp6yywb/Strategy%20For%20LinkedIn%20Growth_V1.mp4',
      label: '// 003_COLOR_GRADE',
      size: 'small',
    },
  ]

  return (
    <section className="py-24 px-4 bg-[#0B0E14]">
      <div className="max-w-7xl mx-auto">
        {/* Section Tag - Centered */}
        <div className="flex items-center justify-center gap-3 mb-16">
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
            CONTENT CREATION
          </span>
          <span className="text-lg" style={{ color: '#6366F1' }}>●</span>
        </div>

        <div className="grid grid-cols-10 gap-8">
          {/* Left Column - 40% - Sticky */}
          <div className="col-span-4 sticky top-24 h-fit">
            {/* Heading */}
            <h2
              className="text-4xl md:text-5xl font-black mb-6"
              style={{
                fontFamily: 'var(--font-heading)',
                color: '#F8FAFC',
                letterSpacing: '-0.02em',
              }}
            >
              Narrative That Commands Attention
            </h2>

            {/* Paragraph */}
            <p
              className="text-base mb-8 leading-relaxed"
              style={{
                fontFamily: 'var(--font-sans)',
                color: 'rgba(248, 250, 252, 0.7)',
              }}
            >
              Each frame is intentionally crafted to deliver impact. From color grading to narrative pacing, we engineer every element to create content that captivates and converts.
            </p>

            {/* View All Edits Button */}
            <button
              className="flex items-center gap-2 px-6 py-3 rounded-lg transition-all hover:scale-105 active:scale-95 group"
              style={{
                border: '1px solid #1E293B',
                backgroundColor: 'transparent',
                color: '#F8FAFC',
              }}
            >
              <span className="font-medium">View All Edits</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Right Column - 60% - Bento Grid */}
          <div className="col-span-6">
            <div className="grid grid-cols-2 gap-6">
              {/* Large Video - Takes up top and spans full height on left */}
              <div
                className="col-span-1 row-span-2"
                onMouseEnter={() => setHoveredId(videos[0].id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <div
                  className="w-full h-full rounded-2xl overflow-hidden relative group cursor-pointer transition-all"
                  style={{
                    border: `1px solid ${hoveredId === videos[0].id ? '#A855F7' : '#1E293B'}`,
                    boxShadow:
                      hoveredId === videos[0].id
                        ? '0 0 30px rgba(168, 85, 247, 0.4)'
                        : 'none',
                    backgroundColor: '#0F172A',
                  }}
                >
                  <video
                    src={videos[0].url}
                    className="w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                  {/* Technical Label */}
                  <div
                    className="absolute top-4 left-4 text-xs opacity-60 group-hover:opacity-100 transition-opacity"
                    style={{
                      fontFamily: 'var(--font-mono)',
                      color: '#F8FAFC',
                    }}
                  >
                    {videos[0].label}
                  </div>
                </div>
              </div>

              {/* Small Videos - Right Column */}
              <div className="col-span-1 row-span-1">
                <div
                  className="w-full aspect-square rounded-2xl overflow-hidden relative group cursor-pointer transition-all"
                  onMouseEnter={() => setHoveredId(videos[1].id)}
                  onMouseLeave={() => setHoveredId(null)}
                  style={{
                    border: `1px solid ${hoveredId === videos[1].id ? '#A855F7' : '#1E293B'}`,
                    boxShadow:
                      hoveredId === videos[1].id
                        ? '0 0 30px rgba(168, 85, 247, 0.4)'
                        : 'none',
                    backgroundColor: '#0F172A',
                  }}
                >
                  <video
                    src={videos[1].url}
                    className="w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                  {/* Technical Label */}
                  <div
                    className="absolute top-4 left-4 text-xs opacity-60 group-hover:opacity-100 transition-opacity"
                    style={{
                      fontFamily: 'var(--font-mono)',
                      color: '#F8FAFC',
                    }}
                  >
                    {videos[1].label}
                  </div>
                </div>
              </div>

              <div className="col-span-1 row-span-1">
                <div
                  className="w-full aspect-square rounded-2xl overflow-hidden relative group cursor-pointer transition-all"
                  onMouseEnter={() => setHoveredId(videos[2].id)}
                  onMouseLeave={() => setHoveredId(null)}
                  style={{
                    border: `1px solid ${hoveredId === videos[2].id ? '#A855F7' : '#1E293B'}`,
                    boxShadow:
                      hoveredId === videos[2].id
                        ? '0 0 30px rgba(168, 85, 247, 0.4)'
                        : 'none',
                    backgroundColor: '#0F172A',
                  }}
                >
                  <video
                    src={videos[2].url}
                    className="w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                  {/* Technical Label */}
                  <div
                    className="absolute top-4 left-4 text-xs opacity-60 group-hover:opacity-100 transition-opacity"
                    style={{
                      fontFamily: 'var(--font-mono)',
                      color: '#F8FAFC',
                    }}
                  >
                    {videos[2].label}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
