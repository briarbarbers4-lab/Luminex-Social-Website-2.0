'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'

const GoldStar = () => (
  <Star className="w-4 h-4 text-amber-300" fill="#FCD34D" />
)

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Chen',
      title: 'Head of Marketing',
      company: 'TechFlow Ventures',
      quote: 'Luminex transformed our content strategy. The AI automation alone saved us 40 hours monthly while increasing engagement by 340%.',
      rating: 5,
      videoUrl: 'https://ik.imagekit.io/5pahp6yywb/Crafted%20London.mp4',
      metrics: '// 2.6M FOLLOWERS // 340% ENGAGEMENT INCREASE',
    },
    {
      id: 2,
      name: 'Marcus Rodriguez',
      title: 'Creative Director',
      company: 'Creative Agency Co',
      quote: 'Premium quality meets intelligent systems. The convergence of logic and narrative isn\'t just theory—it\'s delivered on screen.',
      rating: 5,
      videoUrl: 'https://ik.imagekit.io/5pahp6yywb/8%20Months%20Ago%20I%20Founded%20203%20Media_V5.mp4',
      metrics: '// 15% LEAD INCREASE // 2.3M VIDEO VIEWS',
    },
    {
      id: 3,
      name: 'Lisa Park',
      title: 'CEO',
      company: 'Digital Growth Labs',
      quote: 'What impressed us most wasn\'t just the output quality—it was the strategic thinking behind every frame.',
      rating: 5,
      videoUrl: 'https://ik.imagekit.io/5pahp6yywb/Strategy%20For%20LinkedIn%20Growth_V1.mp4',
      metrics: '// 428% ROI IMPROVEMENT // 1.8M IMPRESSIONS',
    },
  ]

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const current = testimonials[currentIndex]

  return (
    <section id="testimonials" className="py-24 px-4 bg-[#0B0E14]">
      <div className="max-w-7xl mx-auto">
        {/* Section Tag */}
        <div className="flex items-center gap-2 mb-4">
          <span style={{ color: '#6366F1' }}>●</span>
          <span
            className="text-xs font-medium px-4 py-2 rounded-full"
            style={{
              color: '#6366F1',
              backgroundColor: 'rgba(99, 102, 241, 0.1)',
              border: '1px solid rgba(99, 102, 241, 0.3)',
              fontFamily: 'var(--font-sans)',
            }}
          >
            testimonials
          </span>
          <span style={{ color: '#6366F1' }}>●</span>
        </div>

        {/* Subtitle */}
        <p
          className="text-sm mb-16"
          style={{
            fontFamily: 'var(--font-mono)',
            color: '#CBD5E1',
            letterSpacing: '0.05em',
          }}
        >
          Hear what our clients are saying
        </p>

        {/* Main Testimonial Card with Navigation */}
        <div className="flex items-center gap-6 md:gap-8">
          {/* Previous Arrow */}
          <button
            onClick={handlePrev}
            className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center transition-all hover:scale-110 active:scale-95"
            style={{
              backgroundColor: 'rgba(30, 41, 59, 0.5)',
              border: '1px solid rgba(99, 102, 241, 0.3)',
              color: '#F8FAFC',
            }}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Main Card - 40/60 Split */}
          <div
            className="flex-1 flex rounded-2xl overflow-hidden transition-all"
            style={{
              backgroundColor: 'rgba(30, 41, 59, 0.5)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(99, 102, 241, 0.5)',
              boxShadow: '0 0 40px rgba(99, 102, 241, 0.2)',
            }}
          >
            {/* Left Side - 40% - Video Frame */}
            <div className="w-2/5 relative bg-[#0F172A] flex items-center justify-center overflow-hidden group">
              <video
                src={current.videoUrl}
                className="w-full h-full object-cover opacity-50"
                muted
                loop
              />
              {/* Play Icon Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center transition-all group-hover:scale-110"
                  style={{
                    backgroundColor: 'rgba(168, 85, 247, 0.2)',
                    border: '2px solid #A855F7',
                  }}
                >
                  <svg
                    className="w-10 h-10 ml-1"
                    fill="#A855F7"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Right Side - 60% - Content */}
            <div className="w-3/5 p-8 md:p-10 flex flex-col justify-between">
              {/* Star Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: current.rating }).map((_, i) => (
                  <GoldStar key={i} />
                ))}
              </div>

              {/* Quote */}
              <p
                className="text-lg md:text-xl mb-6 leading-relaxed"
                style={{
                  color: '#F1F5F9',
                  fontStyle: 'italic',
                  fontFamily: 'var(--font-sans)',
                }}
              >
                {`"${current.quote}"`}
              </p>

              {/* Client Name */}
              <div>
                <h3
                  className="text-lg font-black mb-1"
                  style={{
                    fontFamily: 'var(--font-heading)',
                    color: '#F8FAFC',
                  }}
                >
                  {current.name}
                </h3>
                <p className="text-sm text-[#CBD5E1] mb-3">
                  {current.title} • {current.company}
                </p>
              </div>

              {/* Metrics Strip */}
              <p
                className="text-xs uppercase tracking-widest pt-4 border-t border-[#334155]"
                style={{
                  fontFamily: 'var(--font-mono)',
                  color: '#6366F1',
                  letterSpacing: '0.15em',
                }}
              >
                {current.metrics}
              </p>
            </div>
          </div>

          {/* Next Arrow */}
          <button
            onClick={handleNext}
            className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center transition-all hover:scale-110 active:scale-95"
            style={{
              backgroundColor: 'rgba(30, 41, 59, 0.5)',
              border: '1px solid rgba(99, 102, 241, 0.3)',
              color: '#F8FAFC',
            }}
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Indicator Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className="transition-all"
              style={{
                width: idx === currentIndex ? '24px' : '8px',
                height: '8px',
                borderRadius: '4px',
                backgroundColor:
                  idx === currentIndex ? '#6366F1' : 'rgba(99, 102, 241, 0.3)',
              }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
