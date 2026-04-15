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
    <nav 
      className={`fixed top-0 w-full z-50 border-b border-[#334155] transition-all duration-300 ${
        scrolled 
          ? 'bg-[#0B0E14]/90 backdrop-blur-md' 
          : 'bg-[#0B0E14]/95 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="#" className="flex items-center gap-2 group">
          <span className="font-bold text-xl text-[#F8FAFC] group-hover:text-[#6366F1] transition-colors">
            Luminex<span className="text-[#6366F1]">.</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
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

        {/* CTA Button */}
        <button className="hidden md:block px-6 py-2 rounded-lg bg-gradient-to-violet text-[#F8FAFC] font-medium text-sm hover:shadow-lg hover:shadow-[#6366F1]/30 transition-all transform hover:scale-105">
          Book a Call
        </button>

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
        <div className="md:hidden bg-[#1E293B] border-t border-[#334155]">
          <div className="flex flex-col gap-4 px-4 py-4">
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
            <button className="w-full px-6 py-2 rounded-lg bg-gradient-to-violet text-[#F8FAFC] font-medium text-sm mt-2">
              Book a Call
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}
