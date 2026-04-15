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
      {/* Floating Centered Navbar */}
      <nav 
        className={`fixed top-8 left-1/2 -translate-x-1/2 z-50 rounded-full transition-all duration-300 ${
          scrolled 
            ? 'bg-[#0B0E14]/40 backdrop-blur-xl border border-[#334155]/50' 
            : 'bg-[#0B0E14]/30 backdrop-blur-lg border border-[#334155]/30'
        }`}
      >
        <div className="px-8 py-3 flex items-center gap-6">
          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-6">
            <a href="#work" onClick={(e) => handleNavClick(e, '#work')} className="text-[#F8FAFC] hover:text-[#6366F1] transition-colors font-mono text-sm">
              Work
            </a>
            <a href="#services" onClick={(e) => handleNavClick(e, '#services')} className="text-[#F8FAFC] hover:text-[#6366F1] transition-colors font-mono text-sm">
              Services
            </a>
            <a href="#process" onClick={(e) => handleNavClick(e, '#process')} className="text-[#F8FAFC] hover:text-[#6366F1] transition-colors font-mono text-sm">
              Process
            </a>
            <a href="#testimonials" onClick={(e) => handleNavClick(e, '#testimonials')} className="text-[#F8FAFC] hover:text-[#6366F1] transition-colors font-mono text-sm">
              Testimonials
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden w-10 h-10 flex flex-col justify-center items-center gap-1.5"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className={`w-6 h-0.5 bg-[#F8FAFC] transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`w-6 h-0.5 bg-[#F8FAFC] transition-all ${isOpen ? 'opacity-0' : ''}`} />
            <span className={`w-6 h-0.5 bg-[#F8FAFC] transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-[#1E293B]/80 backdrop-blur-lg border-t border-[#334155]/50 rounded-b-3xl">
            <div className="flex flex-col gap-4 px-8 py-4">
              <a href="#work" onClick={(e) => handleNavClick(e, '#work')} className="text-[#F8FAFC] hover:text-[#6366F1] transition-colors">
                Work
              </a>
              <a href="#services" onClick={(e) => handleNavClick(e, '#services')} className="text-[#F8FAFC] hover:text-[#6366F1] transition-colors">
                Services
              </a>
              <a href="#process" onClick={(e) => handleNavClick(e, '#process')} className="text-[#F8FAFC] hover:text-[#6366F1] transition-colors">
                Process
              </a>
              <a href="#testimonials" onClick={(e) => handleNavClick(e, '#testimonials')} className="text-[#F8FAFC] hover:text-[#6366F1] transition-colors">
                Testimonials
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Floating CTA Button */}
      <button 
        ref={buttonRef}
        onClick={handleRipple}
        className="fixed top-8 right-8 z-50 relative px-8 py-3 rounded-full font-medium text-sm overflow-hidden transition-all transform hover:scale-110 active:scale-95 group"
      >
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#6366F1] via-[#A855F7] to-[#6366F1] rounded-full" />
        
        {/* Animated Border */}
        <div className="absolute inset-0 rounded-full border-2 border-transparent bg-gradient-to-r from-[#6366F1] via-[#A855F7] to-[#6366F1] bg-clip-border opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Glass Effect Overlay */}
        <div className="absolute inset-0 rounded-full bg-white/10 backdrop-blur-sm opacity-50 group-hover:opacity-70 transition-opacity duration-300" />
        
        {/* Glow Effect */}
        <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#6366F1] via-[#A855F7] to-[#6366F1] opacity-0 blur-lg group-hover:opacity-60 transition-opacity duration-300 -z-10" />
        
        {/* Shadow Ring 1 */}
        <div className="absolute inset-0 rounded-full border border-[#6366F1]/30 scale-100 group-hover:scale-110 transition-transform duration-300 opacity-50" />
        
        {/* Shadow Ring 2 */}
        <div className="absolute inset-0 rounded-full border border-[#A855F7]/20 scale-95 opacity-30" />
        
        {/* Content */}
        <span className="relative z-10 text-[#F8FAFC] font-semibold tracking-wider flex items-center gap-2">
          Book a Call
          <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </span>
      </button>
    </>
  )
}
