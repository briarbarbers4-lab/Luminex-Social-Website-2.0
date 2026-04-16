'use client'

import Link from 'next/link'
import { Instagram, Linkedin, ArrowUp, Send } from 'lucide-react'
import { useState } from 'react'

export default function Footer() {
  const [email, setEmail] = useState('')

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer
      className="relative px-4 pt-16 pb-6"
      style={{
        background: '#0B0E14',
        borderTop: '1px solid #1E293B',
      }}
    >
      {/* Subtle top ambient glow */}
      <div
        className="absolute top-0 left-0 right-0 h-40 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 100% at 50% 0%, rgba(99,102,241,0.04) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* ── Main Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-14">

          {/* ── Column 1: Logo & Status ── */}
          <div className="lg:col-span-1">
            <Link href="#" className="flex items-center gap-2 mb-5 group">
              <span
                className="font-bold text-xl tracking-tight transition-colors duration-300"
                style={{ fontFamily: 'var(--font-heading)', color: '#F8FAFC' }}
              >
                Luminex Social<span style={{ color: '#6366F1' }}>.</span>
              </span>
            </Link>

            <p
              className="text-sm mb-6 leading-relaxed"
              style={{ color: 'rgba(203,213,225,0.7)' }}
            >
              The Convergence of Logic & Narrative
            </p>

            {/* Availability indicator */}
            <div className="flex items-center gap-2.5">
              {/* Pulsing dot */}
              <div className="relative flex items-center justify-center">
                <div
                  className="w-2 h-2 rounded-full"
                  style={{ background: '#2DD4BF' }}
                />
                <div
                  className="absolute w-2 h-2 rounded-full animate-ping"
                  style={{ background: '#2DD4BF', opacity: 0.6 }}
                />
              </div>
              <span
                className="text-xs uppercase tracking-[0.15em]"
                style={{
                  fontFamily: 'var(--font-mono)',
                  color: '#2DD4BF',
                }}
              >
                System Status: Accepting Clients
              </span>
            </div>
          </div>

          {/* ── Column 2: STRATEGY ── */}
          <div>
            <h4
              className="mb-5 text-xs uppercase tracking-[0.2em]"
              style={{
                fontFamily: 'var(--font-heading)',
                fontWeight: 700,
                color: '#F8FAFC',
              }}
            >
              Strategy
            </h4>
            <ul className="space-y-3">
              {[
                { label: 'Work', href: '#work' },
                { label: 'Process', href: '#process' },
                { label: 'ROI Calculator', href: '#roi' },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-2 text-sm transition-colors duration-300"
                    style={{ color: 'rgba(203,213,225,0.6)' }}
                  >
                    <span
                      className="inline-block w-0 group-hover:w-3 h-px transition-all duration-300"
                      style={{ background: '#6366F1' }}
                    />
                    <span className="group-hover:text-[#F8FAFC] transition-colors duration-300">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Column 3: SOLUTIONS ── */}
          <div>
            <h4
              className="mb-5 text-xs uppercase tracking-[0.2em]"
              style={{
                fontFamily: 'var(--font-heading)',
                fontWeight: 700,
                color: '#F8FAFC',
              }}
            >
              Solutions
            </h4>
            <ul className="space-y-3">
              {[
                { label: 'Short Form Editing', href: '#services' },
                { label: 'Long Form Editing', href: '#services' },
                { label: 'AI Automation', href: '#services' },
                { label: 'Content Creation', href: '#services' },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="group flex items-center gap-2 text-sm transition-colors duration-300"
                    style={{ color: 'rgba(203,213,225,0.6)' }}
                  >
                    <span
                      className="inline-block w-0 group-hover:w-3 h-px transition-all duration-300"
                      style={{ background: '#A855F7' }}
                    />
                    <span className="group-hover:text-[#F8FAFC] transition-colors duration-300">
                      {link.label}
                    </span>
                  </a>
                </li>
              ))}
            </ul>

            {/* Social Icons */}
            <div className="flex gap-3 mt-8">
              <a
                href="#"
                className="group relative w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-400"
                style={{
                  background: 'rgba(30,41,59,0.6)',
                  backdropFilter: 'blur(8px)',
                  borderTop: '1px solid rgba(248,250,252,0.1)',
                  borderLeft: '1px solid rgba(248,250,252,0.1)',
                  borderBottom: '1px solid rgba(30,41,59,0.3)',
                  borderRight: '1px solid rgba(30,41,59,0.3)',
                }}
              >
                <Instagram className="w-4 h-4 text-[#CBD5E1] group-hover:text-[#6366F1] transition-colors duration-300" />
              </a>
              <a
                href="#"
                className="group relative w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-400"
                style={{
                  background: 'rgba(30,41,59,0.6)',
                  backdropFilter: 'blur(8px)',
                  borderTop: '1px solid rgba(248,250,252,0.1)',
                  borderLeft: '1px solid rgba(248,250,252,0.1)',
                  borderBottom: '1px solid rgba(30,41,59,0.3)',
                  borderRight: '1px solid rgba(30,41,59,0.3)',
                }}
              >
                <Linkedin className="w-4 h-4 text-[#CBD5E1] group-hover:text-[#6366F1] transition-colors duration-300" />
              </a>
            </div>
          </div>

          {/* ── Column 4: Stay Synced (email input) ── */}
          <div className="lg:col-span-1">
            <h4
              className="mb-5 text-xs uppercase tracking-[0.2em]"
              style={{
                fontFamily: 'var(--font-heading)',
                fontWeight: 700,
                color: '#F8FAFC',
              }}
            >
              Stay Synced
            </h4>

            <p
              className="text-sm mb-5 leading-relaxed"
              style={{ color: 'rgba(203,213,225,0.5)' }}
            >
              Get strategy signals & updates.
            </p>

            {/* Minimalist line input */}
            <div className="relative group">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email Address"
                className="w-full bg-transparent border-0 border-b pb-2 text-sm outline-none transition-all duration-500 peer"
                style={{
                  borderBottomWidth: '1px',
                  borderBottomStyle: 'solid',
                  borderBottomColor: 'rgba(51,65,85,0.6)',
                  color: '#F8FAFC',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '13px',
                }}
              />
              {/* Focus glow line */}
              <div
                className="absolute bottom-0 left-0 h-px w-0 peer-focus:w-full transition-all duration-700"
                style={{
                  background: 'linear-gradient(90deg, #6366F1, #A855F7)',
                }}
              />
              {/* Send button */}
              <button
                className="absolute right-0 bottom-1.5 text-[#475569] hover:text-[#6366F1] transition-colors duration-300"
                aria-label="Subscribe"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* ── Divider ── */}
        <div
          className="w-full h-px mb-6"
          style={{
            background: 'linear-gradient(90deg, transparent 0%, rgba(30,41,59,0.8) 20%, rgba(30,41,59,0.8) 80%, transparent 100%)',
          }}
        />

        {/* ── Bottom Bar ── */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <p
            className="text-xs"
            style={{
              fontFamily: 'var(--font-mono)',
              color: 'rgba(148,163,184,0.5)',
            }}
          >
            © 2026 Luminex Social. All rights reserved.
          </p>

          {/* Legal links */}
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-xs hover:text-[#CBD5E1] transition-colors duration-300"
              style={{
                fontFamily: 'var(--font-mono)',
                color: 'rgba(148,163,184,0.5)',
              }}
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-xs hover:text-[#CBD5E1] transition-colors duration-300"
              style={{
                fontFamily: 'var(--font-mono)',
                color: 'rgba(148,163,184,0.5)',
              }}
            >
              Terms of Service
            </a>
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="group w-9 h-9 rounded-full flex items-center justify-center transition-all duration-400 hover:scale-110"
            style={{
              background: '#4C1D95',
              boxShadow: '0 0 0px rgba(76,29,149,0)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 0 20px rgba(76,29,149,0.5)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = '0 0 0px rgba(76,29,149,0)'
            }}
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4 text-[#F8FAFC] group-hover:-translate-y-0.5 transition-transform duration-300" />
          </button>
        </div>
      </div>

      {/* ── Scoped Styles ── */}
      <style jsx>{`
        input::placeholder {
          color: rgba(248, 250, 252, 0.3);
          font-family: var(--font-mono);
          font-size: 13px;
        }
      `}</style>
    </footer>
  )
}
