'use client'

import { ChevronDown } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-[#0B0E14] overflow-hidden">
      {/* Faint purple radial glow behind text */}
      <div 
        className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(76, 29, 149, 0.12) 0%, transparent 60%)',
        }}
      />

      {/* Main Content - Full width with padding */}
      <div className="relative z-10 w-full px-8 md:px-16 lg:px-20 py-20 pt-32">
        {/* Eyebrow Tag */}
        <div className="flex items-center gap-2 mb-6">
          <span 
            className="w-2 h-2 rounded-full"
            style={{ backgroundColor: '#CA8A04' }}
          />
          <span 
            className="text-xs tracking-widest uppercase"
            style={{ fontFamily: 'var(--font-mono)', color: '#CA8A04' }}
          >
            ENTREPRENEURS:
          </span>
        </div>

        {/* Headline - Reduced size, max 3 lines */}
        <h1 
          className="text-3xl sm:text-4xl md:text-5xl font-black mb-6 max-w-4xl"
          style={{ 
            fontFamily: 'var(--font-heading)', 
            lineHeight: '1.1',
            letterSpacing: '-0.02em',
            color: '#F1F5F9',
          }}
        >
          Attract Qualified Leads to Your Business Every Single Month Through Our Done-For-You{' '}
          <span style={{ color: '#CA8A04' }}>
            YouTube Organic System
          </span>
        </h1>

        {/* Sub-headline */}
        <p 
          className="text-base md:text-lg max-w-xl mb-10"
          style={{ 
            fontFamily: 'var(--font-sans)',
            color: 'rgba(248, 250, 252, 0.7)',
            lineHeight: '1.6'
          }}
        >
          Sign more clients without sending 50 DMs/day, sending 2000 cold emails/day, and spending a dime on paid ads
        </p>

        {/* Buttons */}
        <div className="flex flex-row gap-4 items-center">
          {/* Book A Call - Primary with gold border */}
          <button 
            className="flex items-center gap-2 px-6 py-3.5 rounded-lg font-semibold text-base transition-all transform hover:scale-105"
            style={{
              background: '#F1F5F9',
              color: '#0B0E14',
            }}
          >
            <span 
              className="w-6 h-6 rounded flex items-center justify-center text-xs font-bold"
              style={{ 
                background: 'linear-gradient(135deg, #0B0E14, #1E293B)',
                color: '#CA8A04',
                border: '1px solid #CA8A04'
              }}
            >
              C
            </span>
            Book A Call
          </button>

          {/* Learn More - Ghost button */}
          <button 
            className="flex items-center gap-2 px-6 py-3.5 rounded-lg bg-transparent font-semibold text-base transition-all hover:bg-[#1E293B]/30"
            style={{ 
              border: '1px solid #1E293B',
              color: '#F1F5F9',
            }}
          >
            Learn More
            <ChevronDown className="w-4 h-4" />
          </button>
        </div>

        {/* Our Partners - Positioned right */}
        <div 
          className="absolute right-16 lg:right-24 bottom-32 hidden md:flex flex-col items-center"
        >
          <div 
            className="px-4 py-2 rounded-full"
            style={{ 
              border: '1px dashed #CA8A04',
            }}
          >
            <span 
              className="text-sm italic"
              style={{ fontFamily: 'var(--font-sans)', color: '#CA8A04' }}
            >
              Our Partners
            </span>
          </div>
        </div>
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
