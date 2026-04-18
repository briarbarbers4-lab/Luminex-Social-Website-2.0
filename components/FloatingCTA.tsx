'use client'

import { useEffect, useState } from 'react'

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past the hero (approximately 100vh)
      const heroHeight = window.innerHeight
      setIsVisible(window.scrollY > heroHeight)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <a
      href="https://calendly.com/luminexsocial05/30min"
      target="_blank"
      rel="noopener noreferrer"
      className={`md:hidden fixed bottom-6 right-6 z-50 px-5 py-3 rounded-full text-[#F8FAFC] font-semibold text-sm transition-all duration-300 ${
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
      style={{
        background: 'linear-gradient(to right, #6366F1, #A855F7)',
        boxShadow: '0 4px 20px rgba(99, 102, 241, 0.4)',
      }}
    >
      Book a Call
    </a>
  )
}
