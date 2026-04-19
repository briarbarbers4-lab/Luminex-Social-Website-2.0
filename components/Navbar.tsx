'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const buttonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    // Scroll event listener removed as the three-element header does not alter styling on scroll.
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
    setIsOpen(false)
  }

  const handleRipple = (e: React.MouseEvent<HTMLButtonElement>) => {
    const button = e.currentTarget
    const rect = button.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const ripple = document.createElement('span')
    ripple.style.width = ripple.style.height = '20px'
    ripple.style.left = x - 10 + 'px'
    ripple.style.top = y - 10 + 'px'
    ripple.className = 'absolute bg-white/30 rounded-full pointer-events-none animate-ripple'

    button.appendChild(ripple)
    setTimeout(() => ripple.remove(), 600)
  }

  return (
    <>
      {/* The Container - Transparent, Sticky, No Background/Border */}
      <header className="sticky top-0 w-full z-50 pointer-events-none pt-6">

        {/* Desktop Layout - Three Independent 'Satellites' */}
        <div className="hidden md:flex max-w-7xl mx-auto px-6 lg:px-8 items-center justify-between relative">

          {/* Element A (The Logo - Left) */}
          <Link
            href="/"
            aria-label="Luminex Social Homepage"
            className="pointer-events-auto relative flex items-center justify-center w-12 h-12 rounded-full border border-[#1E293B] bg-[#0B0E14]/60 backdrop-blur-[12px] hover:scale-105 transition-transform duration-300 shrink-0"
          >
            <img src="https://ik.imagekit.io/rqhbqqo2qx/Logo%20V2.png?tr=f-auto,w-70,h-56,c-at_max" alt="Luminex Logo" width={35} height={28} fetchPriority="high" className="object-contain" />
          </Link>

          {/* Element B (The Nav - Center) */}
          <nav className="pointer-events-auto absolute left-1/2 -translate-x-1/2 flex items-center gap-8 px-8 py-3 rounded-full bg-[#0B0E14]/60 backdrop-blur-[12px] border border-[#1E293B]">
            <Link href="/" className="text-[#F8FAFC]/80 hover:text-white transition-colors font-mono text-xs uppercase tracking-widest font-medium">
              Home
            </Link>
            <Link
              href="/systems"
              className="font-mono text-xs uppercase tracking-widest font-medium transition-colors"
              style={{ color: 'rgba(99,102,241,0.85)' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#6366F1')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(99,102,241,0.85)')}
            >
              Systems
            </Link>
            <Link
              href="/creative"
              className="font-mono text-xs uppercase tracking-widest font-medium transition-colors"
              style={{ color: 'rgba(203,213,225,0.8)' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#CBD5E1')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(203,213,225,0.8)')}
            >
              Creative
            </Link>
            <Link href="#work" className="text-[#F8FAFC]/80 hover:text-white transition-colors font-mono text-xs uppercase tracking-widest font-medium">
              Work
            </Link>
          </nav>

          {/* Element C (The CTA - Right) */}
          <div className="pointer-events-auto flex items-center shrink-0">
            <a
              href="https://calendly.com/luminexsocial05/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center relative px-6 py-2.5 rounded-full font-medium text-sm overflow-hidden transition-all transform hover:scale-105 active:scale-95 group"
            >
              {/* Vibrant Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#6366F1] via-[#A855F7] to-[#6366F1] rounded-full opacity-90 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Pulsing Glow */}
              <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-[#6366F1] via-[#A855F7] to-[#6366F1] opacity-40 blur-lg animate-pulse group-hover:opacity-80 group-hover:animate-none transition-all duration-300 -z-10" />

              {/* Glass Effect Overlay */}
              <div className="absolute inset-0 rounded-full bg-white/10 backdrop-blur-sm opacity-50 group-hover:opacity-70 transition-opacity duration-300" />

              {/* Outer Border */}
              <div className="absolute inset-0 rounded-full border border-white/20 scale-100 group-hover:scale-105 transition-transform duration-300" />

              {/* CTA Content */}
              <span className="relative z-10 text-[#F8FAFC] font-semibold tracking-wider flex items-center gap-2 font-mono text-xs uppercase">
                Book a Call
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </a>
          </div>
        </div>

        {/* Mobile Layout - Single Pill */}
        <div className="md:hidden px-4 pointer-events-none relative z-50">
          <div className="pointer-events-auto mx-auto w-fit flex items-center gap-4 p-1.5 rounded-full bg-[#0B0E14]/60 backdrop-blur-[12px] border border-[#1E293B]">
            {/* Logo */}
            <Link href="/" aria-label="Luminex Social Homepage" className="relative flex items-center justify-center w-10 h-10 rounded-full bg-[#1E293B]/40 hover:scale-105 transition-transform duration-300 shrink-0">
              <img src="https://ik.imagekit.io/rqhbqqo2qx/Logo%20V2.png?tr=f-auto,w-70,h-56,c-at_max" alt="Luminex Logo" width={35} height={28} fetchPriority="high" className="object-contain" />
            </Link>

            {/* Hamburger Icon */}
            <button
              className="w-10 h-10 flex flex-col justify-center items-center gap-1.5 pr-2"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle navigation menu"
            >
              <span className={`w-5 h-0.5 bg-[#F8FAFC] transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`w-5 h-0.5 bg-[#F8FAFC] transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
              <span className={`w-5 h-0.5 bg-[#F8FAFC] transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <div
          className={`md:hidden absolute top-full left-0 w-full px-4 pt-4 transition-all duration-300 pointer-events-none ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 -translate-y-4'
            }`}
        >
          <div className="bg-[#0B0E14]/90 backdrop-blur-xl border border-[#1E293B] rounded-[2rem] overflow-hidden shadow-2xl">
            <div className="flex flex-col gap-2 p-6">
              <Link href="/" onClick={() => setIsOpen(false)} className="text-[#F8FAFC]/80 hover:text-white transition-colors font-mono text-sm uppercase tracking-widest text-center py-3">
                Home
              </Link>
              <Link
                href="/systems"
                onClick={() => setIsOpen(false)}
                className="font-mono text-sm uppercase tracking-widest text-center py-3 border-b border-[#1E293B]/50 transition-colors block"
                style={{ color: 'rgba(203,213,225,0.8)' }}
              >
                Systems
              </Link>
              <Link
                href="/creative"
                onClick={() => setIsOpen(false)}
                className="font-mono text-sm uppercase tracking-widest text-center py-3 border-b border-[#1E293B]/50 transition-colors block"
                style={{ color: 'rgba(203,213,225,0.8)' }}
              >
                Creative
              </Link>
              <Link href="#work" onClick={() => setIsOpen(false)} className="text-[#F8FAFC]/80 hover:text-white transition-colors font-mono text-sm uppercase tracking-widest text-center py-3">
                Work
              </Link>

              <a
                href="https://calendly.com/luminexsocial05/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-gradient-to-r from-[#6366F1] to-[#A855F7] text-white font-mono text-xs uppercase tracking-widest font-semibold"
              >
                Book a Call
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
