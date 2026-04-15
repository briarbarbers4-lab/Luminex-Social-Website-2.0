'use client'

import { useEffect, useState } from 'react'

export default function AIInfrastructure() {
  const [pulses, setPulses] = useState<{ id: number; progress: number }[]>([])

  useEffect(() => {
    const pulseIds = Array.from({ length: 6 }, (_, i) => ({ id: i, progress: (i * 16) % 100 }))
    setPulses(pulseIds)

    const interval = setInterval(() => {
      setPulses(prev =>
        prev.map(pulse => ({
          ...pulse,
          progress: (pulse.progress + 2) % 100,
        }))
      )
    }, 50)

    return () => clearInterval(interval)
  }, [])

  const inputItems = ['24/7 Lead Extraction', 'AI Appointment Setting']
  const logicItems = ['Context-Aware Prospecting', 'Automated Content Scheduling']
  const outputItems = ['Zero-Friction Onboarding', 'Autonomous CRM Management']

  return (
    <section className="py-24 px-4 bg-[#0B0E14] relative overflow-hidden">
      {/* Grid Background Pattern */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `linear-gradient(rgba(100, 116, 139, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(100, 116, 139, 0.1) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Tag - Centered */}
        <div className="flex items-center justify-center gap-3 mb-8">
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
            AI AUTOMATION
          </span>
          <span className="text-lg" style={{ color: '#6366F1' }}>●</span>
        </div>

        {/* Main Heading */}
        <h2
          className="text-5xl md:text-6xl font-black mb-16 text-center"
          style={{
            fontFamily: 'var(--font-heading)',
            color: '#F8FAFC',
            letterSpacing: '-0.02em',
          }}
        >
          Engineered For Absolute Precision
        </h2>

        {/* 3-Column Infrastructure Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Animated connecting lines with pulses */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            style={{ zIndex: 0 }}
            preserveAspectRatio="none"
          >
            {/* Lines connecting columns */}
            <defs>
              <linearGradient id="pulseGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(99, 102, 241, 0)" />
                <stop offset="50%" stopColor="rgba(99, 102, 241, 0.6)" />
                <stop offset="100%" stopColor="rgba(99, 102, 241, 0)" />
              </linearGradient>
            </defs>

            {/* Horizontal connecting lines */}
            {[0, 1].map(rowIdx => (
              <line
                key={`line-${rowIdx}`}
                x1="33.33%"
                y1={100 + rowIdx * 120}
                x2="66.66%"
                y2={100 + rowIdx * 120}
                stroke="rgba(99, 102, 241, 0.2)"
                strokeWidth="1"
              />
            ))}

            {/* Animated pulse markers */}
            {pulses.map((pulse, idx) => {
              const row = Math.floor(idx / 2)
              const isFirstToSecond = idx % 2 === 0
              const x = isFirstToSecond ? 33.33 + (pulse.progress / 100) * 33.33 : 66.66 + (pulse.progress / 100) * 33.33
              const y = 100 + row * 120

              return (
                <circle
                  key={`pulse-${pulse.id}`}
                  cx={`${x}%`}
                  cy={y}
                  r="3"
                  fill="#6366F1"
                  opacity={Math.sin(pulse.progress * Math.PI / 100) * 0.8 + 0.2}
                />
              )
            })}
          </svg>

          {/* INPUT Column */}
          <div className="relative z-20 space-y-6">
            <h3
              className="text-sm font-mono uppercase tracking-widest"
              style={{
                color: '#6366F1',
                letterSpacing: '0.1em',
              }}
            >
              → INPUT
            </h3>
            {inputItems.map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-lg border transition-all hover:border-[#A855F7] hover:shadow-lg"
                style={{
                  backgroundColor: 'rgba(30, 41, 59, 0.6)',
                  border: '1px solid #6366F1',
                  boxShadow: '0 0 20px rgba(99, 102, 241, 0.1)',
                }}
              >
                <p className="text-sm text-[#F8FAFC]" style={{ fontFamily: 'var(--font-sans)' }}>
                  {item}
                </p>
              </div>
            ))}
          </div>

          {/* LOGIC Column */}
          <div className="relative z-20 space-y-6">
            <h3
              className="text-sm font-mono uppercase tracking-widest"
              style={{
                color: '#6366F1',
                letterSpacing: '0.1em',
              }}
            >
              ⚙️ LOGIC
            </h3>
            {logicItems.map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-lg border transition-all hover:border-[#A855F7] hover:shadow-lg"
                style={{
                  backgroundColor: 'rgba(30, 41, 59, 0.6)',
                  border: '1px solid #6366F1',
                  boxShadow: '0 0 20px rgba(99, 102, 241, 0.1)',
                }}
              >
                <p className="text-sm text-[#F8FAFC]" style={{ fontFamily: 'var(--font-sans)' }}>
                  {item}
                </p>
              </div>
            ))}
          </div>

          {/* OUTPUT Column */}
          <div className="relative z-20 space-y-6">
            <h3
              className="text-sm font-mono uppercase tracking-widest"
              style={{
                color: '#6366F1',
                letterSpacing: '0.1em',
              }}
            >
              OUTPUT →
            </h3>
            {outputItems.map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-lg border transition-all hover:border-[#A855F7] hover:shadow-lg"
                style={{
                  backgroundColor: 'rgba(30, 41, 59, 0.6)',
                  border: '1px solid #6366F1',
                  boxShadow: '0 0 20px rgba(99, 102, 241, 0.1)',
                }}
              >
                <p className="text-sm text-[#F8FAFC]" style={{ fontFamily: 'var(--font-sans)' }}>
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            opacity: 0.4;
          }
          50% {
            opacity: 0.9;
          }
        }
      `}</style>
    </section>
  )
}
