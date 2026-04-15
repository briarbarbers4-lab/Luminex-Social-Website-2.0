'use client'

import { ChevronDown } from 'lucide-react'
import { useState, useCallback } from 'react'

interface Ripple {
  x: number
  y: number
  id: number
}

export default function Hero() {
  const [tagRipples, setTagRipples] = useState<Ripple[]>([])
  const [buttonRipples, setButtonRipples] = useState<Ripple[]>([])

  const createRipple = useCallback((e: React.MouseEvent<HTMLElement>, setRipples: React.Dispatch<React.SetStateAction<Ripple[]>>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const id = Date.now()
    
    setRipples(prev => [...prev, { x, y, id }])
    setTimeout(() => {
      setRipples(prev => prev.filter(r => r.id !== id))
    }, 600)
  }, [])

  return (
    <section className="relative min-h-[100vh] flex items-center bg-[#0B0E14] overflow-hidden">
      {/* Faint purple radial glow behind text */}
      <div 
        className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(76, 29, 149, 0.12) 0%, transparent 60%)',
        }}
      />

      {/* Main Content - Full width with padding */}
      <div className="relative z-10 w-full px-8 md:px-16 lg:px-20 py-20 pt-32">
        {/* Eyebrow Tag with Ripple */}
        <div 
          className="inline-flex items-center px-3 py-1.5 rounded-full mb-6 relative overflow-hidden cursor-pointer"
          style={{ 
            backgroundColor: '#1E293B',
            border: '1px solid #CA8A04',
            boxShadow: '0 0 8px rgba(202, 138, 4, 0.3)',
          }}
          onClick={(e) => createRipple(e, setTagRipples)}
        >
          {tagRipples.map(ripple => (
            <span
              key={ripple.id}
              className="absolute rounded-full animate-ripple pointer-events-none"
              style={{
                left: ripple.x,
                top: ripple.y,
                width: '10px',
                height: '10px',
                marginLeft: '-5px',
                marginTop: '-5px',
                background: 'rgba(202, 138, 4, 0.4)',
              }}
            />
          ))}
          <span 
            className="text-xs tracking-wide relative z-10"
            style={{ fontFamily: 'var(--font-mono)', color: '#F1F5F9' }}
          >
            // FOR FORWARD-THINKING FOUNDERS:
          </span>
        </div>

        {/* Headline - Scaled up for authority */}
        <h1 
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-8 max-w-5xl"
          style={{ 
            fontFamily: 'var(--font-heading)', 
            lineHeight: '1.15',
            letterSpacing: '-0.02em',
            color: '#F1F5F9',
          }}
        >
          Build Your Market Dominance Every Single Month Through Our{' '}
          <span 
            style={{ 
              background: 'linear-gradient(90deg, #6366F1, #A855F7)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            AI-Driven Premium Content
          </span>{' '}
          Systems
        </h1>

        {/* Sub-headline */}
        <p 
          className="text-lg md:text-xl mb-12"
          style={{ 
            fontFamily: 'var(--font-sans)',
            color: 'rgba(248, 250, 252, 0.7)',
            lineHeight: '1.6',
            maxWidth: '800px',
          }}
        >
          Scale your brand authority without spending 10 hours on scripts, managing disjointed editors, or wasting a penny on inefficient outreach.
        </p>

        {/* Buttons */}
        <div className="flex flex-row gap-4 items-center mb-16">
          {/* Book A Call - Primary with gradient, gold border and ripple */}
          <button 
            className="px-6 py-3.5 rounded-lg font-semibold text-base transition-all transform hover:scale-105 relative overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, #1E1B4B, #4C1D95)',
              color: '#F1F5F9',
              border: '2px solid #CA8A04',
              boxShadow: '0 0 20px rgba(76, 29, 149, 0.4)',
            }}
            onClick={(e) => createRipple(e, setButtonRipples)}
          >
            {buttonRipples.map(ripple => (
              <span
                key={ripple.id}
                className="absolute rounded-full animate-ripple pointer-events-none"
                style={{
                  left: ripple.x,
                  top: ripple.y,
                  width: '10px',
                  height: '10px',
                  marginLeft: '-5px',
                  marginTop: '-5px',
                  background: 'rgba(202, 138, 4, 0.5)',
                }}
              />
            ))}
            <span className="relative z-10">Book A Call</span>
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

        {/* Metrics Strip - Below buttons */}
        <div 
          className="inline-flex py-4 px-6 rounded-lg"
          style={{ 
            background: 'rgba(30, 41, 59, 0.7)',
            backdropFilter: 'blur(8px)',
          }}
        >
          <div 
            className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 text-sm"
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
