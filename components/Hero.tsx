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
    <section className="relative min-h-[100vh] flex items-center overflow-hidden" style={{ background: '#0B0E14' }}>
      {/* Layer 1: Noise/grain texture at 0.05 opacity */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.05'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Layer 2: 40px CSS grid overlay using linear-gradient at 15% opacity with fading edges */}
      <div
        className="absolute inset-0 z-[2] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(30, 41, 59, 0.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(30, 41, 59, 0.15) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          maskImage: 'radial-gradient(ellipse at center, black 20%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 20%, transparent 80%)',
        }}
      />

      {/* Layer 3: Deep Amethyst radial glow — top-left (15% opacity), Drifting */}
      <div
        className="absolute pointer-events-none z-[3] animate-drift-1"
        style={{
          top: '-20%',
          left: '-10%',
          width: '800px',
          height: '800px',
          background: 'radial-gradient(circle, rgba(76, 29, 149, 0.15) 0%, transparent 65%)',
        }}
      />

      {/* Layer 4: Muted Gold radial glow — bottom-right (5% opacity), Drifting */}
      <div
        className="absolute pointer-events-none z-[3] animate-drift-2"
        style={{
          bottom: '-20%',
          right: '-10%',
          width: '800px',
          height: '800px',
          background: 'radial-gradient(circle, rgba(202, 138, 4, 0.05) 0%, transparent 65%)',
        }}
      />

      {/* Main Content — flex column, vertically centered in viewport */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 flex flex-col justify-center min-h-[90vh] pt-0">
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
          className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-black mb-8 w-full text-left"
          style={{
            fontFamily: 'var(--font-heading)',
            lineHeight: '1.25',
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
            Premium Content AND
          </span>{' '}
          AI Automated Systems
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
          On-board more clients without relying on unpredictable word of mouth or spending a dime on ads. By intertwining a high-retention creative narrative for your content and deploying intelligent AI Automation systems, we help you build your brand authority, automate follow-ups, and autopilot your entire business growth.
        </p>

        {/* Buttons */}
        <div className="flex flex-row gap-4 items-center justify-start">
          {/* Book A Call - Primary with gradient, gold border, ripple and pulse */}
          <div className="relative">
            {/* Pulse rings for button */}
            <span className="absolute inset-0 rounded-lg animate-pulse-ring-btn" style={{ border: '2px solid rgba(202, 138, 4, 0.4)' }} />
            <span className="absolute inset-0 rounded-lg animate-pulse-ring-btn-delayed" style={{ border: '2px solid rgba(202, 138, 4, 0.3)' }} />
            <a
              href="https://calendly.com/luminexsocial05/30min"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Book a free discovery call with Luminex Social"
              className="px-6 py-3.5 rounded-lg font-semibold text-base transition-all transform hover:scale-105 relative overflow-hidden inline-block"
              style={{
                background: 'linear-gradient(135deg, #1E1B4B, #4C1D95)',
                color: '#F1F5F9',
                border: '2px solid #CA8A04',
                boxShadow: '0 0 20px rgba(76, 29, 149, 0.4)',
              }}
              onClick={(e) => createRipple(e as unknown as React.MouseEvent<HTMLElement>, setButtonRipples)}
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
            </a>
          </div>

          {/* Learn More - Ghost button */}
          <button
            className="flex items-center gap-2 px-6 py-3.5 rounded-lg bg-transparent font-semibold text-base transition-all hover:bg-[#1E293B]/30"
            style={{
              border: '1px solid #1E293B',
              color: '#F1F5F9',
            }}
          >
            Discover Core Infrastructure
            <ChevronDown className="w-4 h-4" />
          </button>
        </div>
      </div>


    </section>
  )
}
