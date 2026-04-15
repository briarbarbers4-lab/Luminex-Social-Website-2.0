'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

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
      <button className="fixed top-8 right-8 z-50 px-6 py-2 rounded-full bg-gradient-to-violet text-[#F8FAFC] font-medium text-sm hover:shadow-lg hover:shadow-[#6366F1]/40 transition-all transform hover:scale-105">
        Book a Call
      </button>
    </>
  )
}
