'use client'

import { ChevronDown } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-[#0B0E14] overflow-hidden">
      {/* Faint purple radial glow behind text */}
      <div 
        className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(76, 29, 149, 0.15) 0%, transparent 60%)',
        }}
      />

      {/* Left Content - 50% */}
      <div className="relative z-10 w-full lg:w-1/2 px-6 md:px-12 lg:px-16 py-20 pt-32">
        {/* Eyebrow Tag */}
        <div 
          className="inline-flex items-center px-4 py-2 rounded-full mb-8"
          style={{
            background: '#1E293B',
            border: '1px solid #6366F1',
            boxShadow: '0 0 12px rgba(99, 102, 241, 0.4), 0 0 24px rgba(99, 102, 241, 0.2)',
          }}
        >
          <span 
            className="text-xs md:text-sm tracking-wide"
            style={{ fontFamily: 'var(--font-mono)', color: '#F8FAFC' }}
          >
            {'// FOR FORWARD-THINKING FOUNDERS:'}
          </span>
        </div>

        {/* Headline */}
        <h1 
          className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-6"
          style={{ 
            fontFamily: 'var(--font-heading)', 
            lineHeight: '0.95',
            letterSpacing: '-0.02em',
            color: '#F1F5F9',
          }}
        >
          Build Your Market Dominance Every Single Month Through Our{' '}
          <span 
            className="bg-clip-text text-transparent"
            style={{ backgroundImage: 'linear-gradient(to right, #6366F1, #A855F7)' }}
          >
            AI-Driven Premium Content
          </span>{' '}
          Systems
        </h1>

        {/* Sub-headline */}
        <p 
          className="text-base md:text-lg lg:text-xl max-w-xl mb-10"
          style={{ 
            fontFamily: 'var(--font-sans)',
            color: 'rgba(248, 250, 252, 0.8)',
            lineHeight: '1.6'
          }}
        >
          Scale your brand authority without spending 10 hours on scripts, managing disjointed editors, or wasting a penny on inefficient outreach.
        </p>

        {/* Buttons */}
        <div className="flex flex-row gap-4 items-center">
          {/* Book A Call - Primary with gold border */}
          <button 
            className="px-8 py-4 rounded-lg font-semibold text-base md:text-lg transition-all transform hover:scale-105"
            style={{
              background: 'linear-gradient(to right, #1E1B4B, #4C1D95)',
              border: '2px solid #CA8A04',
              color: '#F1F5F9',
            }}
          >
            Book A Call
          </button>

          {/* Learn More - Ghost button */}
          <button 
            className="flex items-center gap-2 px-8 py-4 rounded-lg bg-transparent font-semibold text-base md:text-lg transition-all hover:bg-[#1E293B]/30"
            style={{ 
              border: '1px solid #1E293B',
              color: '#F1F5F9',
            }}
          >
            Learn More
            <ChevronDown className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Right Side - Reserved for background video (50%) */}
      <div className="absolute top-0 right-0 w-1/2 h-full hidden lg:block">
        {/* Video will be added here */}
      </div>

      {/* Trust Bar - Bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <div 
          className="py-5"
          style={{ 
            background: 'rgba(30, 41, 59, 0.7)',
            backdropFilter: 'blur(8px)',
          }}
        >
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div 
              className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-sm"
              style={{ fontFamily: 'var(--font-mono)' }}
            >
              <span style={{ color: '#CA8A04' }}>
                <span className="font-bold">50M+</span> Views
              </span>
              <span className="hidden sm:inline" style={{ color: '#CA8A04' }}>//</span>
              <span style={{ color: '#CA8A04' }}>
                <span className="font-bold">24/7</span> Automation
              </span>
              <span className="hidden sm:inline" style={{ color: '#CA8A04' }}>//</span>
              <span style={{ color: '#CA8A04' }}>
                <span className="font-bold">Premium</span> Narrative
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Noise/Grain Texture Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.03] z-[5]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />
    </section>
  )
}
