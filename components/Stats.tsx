'use client'

import { useEffect, useRef, useState } from 'react'

/* ── Animated counter hook ── */
function useCountUp(target: number, duration = 2000, startOnView = true) {
  const [count, setCount] = useState(0)
  const [hasStarted, setHasStarted] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!startOnView) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true)
        }
      },
      { threshold: 0.4 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [hasStarted, startOnView])

  useEffect(() => {
    if (!hasStarted) return
    let start = 0
    const increment = target / (duration / 16)
    const timer = setInterval(() => {
      start += increment
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)
    return () => clearInterval(timer)
  }, [hasStarted, target, duration])

  return { count, ref }
}

export default function Stats() {
  const stats = [
    { number: 3,   label: 'Years of Experience', suffix: '+', prefix: '0' },
    { number: 500, label: 'Videos Produced',      suffix: '+', prefix: ''  },
    { number: 50,  label: 'Million+ Views',       suffix: 'M+', prefix: '' },
    { number: 20,  label: 'Happy Clients',         suffix: '+', prefix: ''  },
  ]

  const counters = stats.map((s) => useCountUp(s.number, 2200))

  return (
    <section className="relative py-16 px-4 overflow-hidden" style={{ background: '#0B0E14' }}>
      {/* Ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 50% 60% at 50% 50%, rgba(99,102,241,0.06) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div
              key={i}
              ref={counters[i].ref}
              className="group flex flex-col items-center text-center"
            >
              {/* Number */}
              <div className="relative mb-2">
                {/* Background glow on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                  style={{
                    background: 'radial-gradient(circle, rgba(99,102,241,0.25) 0%, transparent 70%)',
                    filter: 'blur(20px)',
                    transform: 'scale(2)',
                  }}
                />
                <span
                  className="relative text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight transition-colors duration-500"
                  style={{
                    fontFamily: 'var(--font-heading)',
                    background: 'linear-gradient(135deg, #E0E7FF 0%, #818CF8 50%, #A78BFA 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  {stat.prefix}{counters[i].count}{stat.suffix}
                </span>
              </div>

              {/* Label */}
              <span
                className="text-xs md:text-sm uppercase tracking-[0.15em] transition-colors duration-500"
                style={{
                  fontFamily: 'var(--font-mono)',
                  color: 'rgba(148,163,184,0.6)',
                }}
              >
                {stat.label}
              </span>

              {/* Decorative underline */}
              <div
                className="mt-3 h-px w-8 group-hover:w-16 transition-all duration-700"
                style={{
                  background: 'linear-gradient(90deg, transparent, rgba(99,102,241,0.5), transparent)',
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
