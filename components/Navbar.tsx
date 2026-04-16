'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const buttonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
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
      <header 
        className={`sticky top-0 w-full z-50 transition-all duration-300 ${
          scrolled 
            ? 'border-b border-[#1E293B] bg-[#050505]/40 backdrop-blur-md' 
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4 flex items-center justify-between">
          
          {/* Logo on the far left */}
          <Link href="/" className="relative flex items-center justify-center w-12 h-12 rounded-full border border-[#1E293B] bg-white/5 backdrop-blur-sm hover:scale-105 transition-transform duration-300 shrink-0 z-50">
            <img src="https://ik.imagekit.io/rqhbqqo2qx/Logo%20V2.png" alt="Luminex Logo" className="w-7 h-7 object-contain" />
          </Link>

          {/* Centered Pill for Nav Links (Desktop) */}
          <nav className="absolute left-1/2 -translate-x-1/2 hidden md:flex items-center gap-8 px-8 py-2.5 rounded-full bg-[#0B0E14]/60 backdrop-blur-[12px] border border-[#1E293B] z-50">
            <Link href="#work" className="text-[#F8FAFC]/80 hover:text-white transition-colors font-mono text-xs uppercase tracking-widest font-medium">
              Work
            </Link>
            <Link href="/services" className="text-[#F8FAFC]/80 hover:text-white transition-colors font-mono text-xs uppercase tracking-widest font-medium">
              Services
            </Link>
            <Link href="#process" className="text-[#F8FAFC]/80 hover:text-white transition-colors font-mono text-xs uppercase tracking-widest font-medium">
              Process
            </Link>
          </nav>

          {/* Right Side */}
          <div className="flex items-center gap-4 shrink-0 z-50">
            {/* CTA Button */}
            <button 
              ref={buttonRef}
              onClick={handleRipple}
              className="hidden md:flex items-center relative px-6 py-2 rounded-full font-medium text-sm overflow-hidden transition-all transform hover:scale-105 active:scale-95 group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#6366F1] via-[#A855F7] to-[#6366F1] rounded-full" />
              <div className="absolute inset-0 rounded-full border-2 border-transparent bg-gradient-to-r from-[#6366F1] via-[#A855F7] to-[#6366F1] bg-clip-border opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-0 rounded-full bg-white/10 backdrop-blur-sm opacity-50 group-hover:opacity-70 transition-opacity duration-300" />
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#6366F1] via-[#A855F7] to-[#6366F1] opacity-0 blur-lg group-hover:opacity-60 transition-opacity duration-300 -z-10" />
              <div className="absolute inset-0 rounded-full border border-[#6366F1]/30 scale-100 group-hover:scale-110 transition-transform duration-300 opacity-50" />
              <div className="absolute inset-0 rounded-full border border-[#A855F7]/20 scale-95 opacity-30" />
              <span className="relative z-10 text-[#F8FAFC] font-semibold tracking-wider flex items-center gap-2">
                Book a Call
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden w-10 h-10 flex flex-col justify-center items-center gap-1.5 relative z-50"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className={`w-6 h-0.5 bg-[#F8FAFC] transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`w-6 h-0.5 bg-[#F8FAFC] transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
              <span className={`w-6 h-0.5 bg-[#F8FAFC] transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`absolute top-full left-0 w-full bg-[#050505]/95 backdrop-blur-xl border-b border-[#1E293B] transition-all duration-300 overflow-hidden md:hidden ${
            isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0 border-transparent'
          }`}
        >
          <div className="flex flex-col gap-6 px-6 py-6">
            <Link href="#work" onClick={() => setIsOpen(false)} className="text-[#F8FAFC]/80 hover:text-white transition-colors font-mono text-sm uppercase tracking-widest">
              Work
            </Link>
            <Link href="/services" onClick={() => setIsOpen(false)} className="text-[#F8FAFC]/80 hover:text-white transition-colors font-mono text-sm uppercase tracking-widest">
              Services
            </Link>
            <Link href="#process" onClick={() => setIsOpen(false)} className="text-[#F8FAFC]/80 hover:text-white transition-colors font-mono text-sm uppercase tracking-widest">
              Process
            </Link>
          </div>
        </div>
      </header>
    </>
  )
}
