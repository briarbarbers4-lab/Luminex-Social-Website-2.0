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
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        style={{
          filter: 'saturate(0.4) brightness(0.8)',
          zIndex: 0,
        }}
      >
        <source 
          src="https://videos.pexels.com/video-files/3571200/3571200-hd_1920_1080_30fps.mp4" 
          type="video/mp4" 
        />
      </video>

      {/* Dark Overlay with Noise */}
      <div 
        className="absolute inset-0 z-[1]"
        style={{
          backgroundColor: 'rgba(11, 14, 20, 0.75)',
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.08'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Faint purple radial glow behind text */}
      <div 
        className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] pointer-events-none z-[2]"
        style={{
          background: 'radial-gradient(circle, rgba(76, 29, 149, 0.15) 0%, transparent 60%)',
        }}
      />

      {/* Main Content - Contained and left-aligned */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-20 pt-32 flex flex-col items-start">
        {/* Eyebrow Tag with Ripple and Pulse */}
        <div className="relative inline-block mb-6">
          {/* Pulse rings */}
          <span className="absolute inset-0 rounded-full animate-pulse-ring" style={{ border: '1px solid rgba(202, 138, 4, 0.4)' }} />
          <span className="absolute inset-0 rounded-full animate-pulse-ring-delayed" style={{ border: '1px solid rgba(202, 138, 4, 0.3)' }} />
          <div 
            className="inline-flex items-center px-3 py-1.5 rounded-full relative overflow-hidden cursor-pointer"
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
        </div>

        {/* Headline - Scaled up for authority */}
        <h1 
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-8 max-w-5xl text-left"
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
          className="text-lg md:text-xl mb-12 text-left"
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
        <div className="flex flex-row gap-4 items-center justify-start">
          {/* Book A Call - Primary with gradient, gold border, ripple and pulse */}
          <div className="relative">
            {/* Pulse rings for button */}
            <span className="absolute inset-0 rounded-lg animate-pulse-ring-btn" style={{ border: '2px solid rgba(202, 138, 4, 0.4)' }} />
            <span className="absolute inset-0 rounded-lg animate-pulse-ring-btn-delayed" style={{ border: '2px solid rgba(202, 138, 4, 0.3)' }} />
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
          </div>

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

      </div>


    </section>
  )
}
