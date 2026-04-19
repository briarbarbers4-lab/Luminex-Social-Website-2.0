'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

/**
 * LuminexFramework — The Convergence Point (Home page only)
 *
 * This is the only place on the site where Systems and Creative are shown
 * together as a unified infrastructure. Every other page keeps them siloed.
 */
export default function LuminexFramework() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect() } },
      { threshold: 0.15 }
    )
    if (sectionRef.current) obs.observe(sectionRef.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="unified-framework"
      className="py-32 px-4 relative overflow-hidden bg-[#0B0E14]"
    >
      {/* Full-width grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(30,41,59,0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(30,41,59,0.18) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />

      {/* Convergence glow — two orbs meeting in the center */}
      <div
        className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{
          width: '600px', height: '600px',
          background: 'radial-gradient(circle, rgba(99,102,241,0.1) 0%, transparent 65%)',
          filter: 'blur(60px)',
          transition: 'opacity 1.2s ease',
          opacity: visible ? 1 : 0,
        }}
      />
      <div
        className="absolute top-1/2 right-1/4 translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{
          width: '600px', height: '600px',
          background: 'radial-gradient(circle, rgba(203,213,225,0.07) 0%, transparent 65%)',
          filter: 'blur(60px)',
          transition: 'opacity 1.4s ease 0.2s',
          opacity: visible ? 1 : 0,
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Section label */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="h-px flex-1" style={{ background: 'linear-gradient(to right, transparent, rgba(99,102,241,0.4))' }} />
          <span
            className="text-[10px] px-5 py-2.5 uppercase tracking-[0.22em]"
            style={{
              fontFamily: 'var(--font-mono)',
              color: '#F8FAFC',
              backgroundColor: 'rgba(30,41,59,0.6)',
              border: '1px solid rgba(248,250,252,0.12)',
            }}
          >
            // THE UNIFIED LUMINEX FRAMEWORK
          </span>
          <div className="h-px flex-1" style={{ background: 'linear-gradient(to left, transparent, rgba(203,213,225,0.3))' }} />
        </div>

        {/* Heading */}
        <h2
          className="text-4xl md:text-5xl lg:text-6xl font-black text-center mb-6 tracking-tight"
          style={{
            fontFamily: 'var(--font-heading)',
            letterSpacing: '-0.04em',
            transition: 'opacity 0.8s ease, transform 0.8s ease',
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(20px)',
          }}
        >
          Two Divisions.{' '}
          <span
            style={{
              background: 'linear-gradient(90deg, #6366F1 0%, #CBD5E1 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            One System.
          </span>
        </h2>

        <p
          className="text-base md:text-lg text-center max-w-2xl mx-auto mb-20 leading-relaxed"
          style={{
            fontFamily: 'var(--font-sans)',
            color: 'rgba(248,250,252,0.55)',
            transition: 'opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s',
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(20px)',
          }}
        >
          Systems and Creative do not run as separate agencies that occasionally collaborate. 
          They are two layers of the same infrastructure — the Narrative layer generates the demand, 
          the Logic layer processes it. Neither operates at full capacity without the other.
        </p>

        {/* Dual division cards + convergence arrow */}
        <div
          className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-0 items-stretch"
          style={{
            transition: 'opacity 1s ease 0.3s',
            opacity: visible ? 1 : 0,
          }}
        >

          {/* ── Systems Card ─────────────────────────────────────────────────── */}
          <div
            className="p-8 md:p-10 flex flex-col relative"
            style={{
              backgroundColor: 'rgba(99,102,241,0.04)',
              border: '1px solid rgba(99,102,241,0.2)',
              borderRight: 'none',
              borderTop: '2px solid #6366F1',
            }}
          >
            <div className="flex items-center gap-2 mb-6">
              <div className="w-2 h-2 rounded-full bg-[#6366F1]" style={{ boxShadow: '0 0 8px rgba(99,102,241,0.8)' }} />
              <span className="text-[10px] uppercase tracking-[0.22em]" style={{ fontFamily: 'var(--font-mono)', color: '#6366F1' }}>
                SYSTEMS DIVISION
              </span>
            </div>

            <p
              className="text-2xl md:text-3xl font-black mb-4 tracking-tight"
              style={{ fontFamily: 'var(--font-heading)', color: '#F8FAFC', letterSpacing: '-0.02em' }}
            >
              Logic Layer
            </p>
            <p
              className="text-sm leading-relaxed mb-8 flex-grow"
              style={{ fontFamily: 'var(--font-sans)', color: 'rgba(248,250,252,0.55)' }}
            >
              The operational skeleton. AI voice agents, n8n enterprise pipelines, autonomous DM chatbots, 
              and AI employees — running continuously in the background, converting inbound attention into 
              qualified pipeline events without human intervention at any step.
            </p>

            <ul className="space-y-3 mb-10">
              {[
                'AI Voice Agents (Vapi / Retell)',
                'n8n Enterprise Pipelines',
                'Intelligent DM Chatbots',
                'Autonomous AI Employees',
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span className="w-1 h-1 rounded-full bg-[#6366F1] shrink-0" />
                  <span className="text-xs" style={{ fontFamily: 'var(--font-sans)', color: 'rgba(248,250,252,0.5)' }}>
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mb-6 space-y-1">
              <p className="text-[10px] uppercase tracking-widest" style={{ fontFamily: 'var(--font-mono)', color: 'rgba(99,102,241,0.5)' }}>
                // UPTIME: 24/7/365 — EXEC_ERRORS: 0.00%
              </p>
            </div>

            <Link
              href="/systems"
              id="framework-systems-link"
              className="group inline-flex items-center gap-2 text-xs uppercase tracking-widest transition-all self-start"
              style={{ fontFamily: 'var(--font-mono)', color: '#6366F1', borderBottom: '1px solid rgba(99,102,241,0.3)', paddingBottom: '2px' }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = '#6366F1' }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(99,102,241,0.3)' }}
            >
              View Systems Division
              <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          {/* ── Convergence Column ───────────────────────────────────────────── */}
          <div
            className="hidden lg:flex flex-col items-center justify-center px-6 py-10 relative"
            style={{ backgroundColor: 'rgba(30,41,59,0.3)', borderTop: '2px solid rgba(248,250,252,0.1)', borderBottom: '1px solid rgba(248,250,252,0.08)' }}
          >
            {/* Top line — indigo */}
            <div
              className="w-px flex-1"
              style={{ background: 'linear-gradient(to bottom, #6366F1, rgba(248,250,252,0.3))' }}
            />

            {/* Center merge node */}
            <div
              className="my-4 w-10 h-10 flex items-center justify-center relative"
              style={{ border: '1px solid rgba(248,250,252,0.2)', backgroundColor: 'rgba(30,41,59,0.8)' }}
            >
              <div
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(135deg, rgba(99,102,241,0.15) 0%, rgba(203,213,225,0.15) 100%)',
                }}
              />
              <span className="text-[10px] relative z-10" style={{ fontFamily: 'var(--font-mono)', color: 'rgba(248,250,252,0.6)' }}>
                ∞
              </span>
            </div>

            {/* Bottom line — silver */}
            <div
              className="w-px flex-1"
              style={{ background: 'linear-gradient(to bottom, rgba(248,250,252,0.3), #CBD5E1)' }}
            />

            {/* Center label */}
            <div
              className="absolute text-center"
              style={{ left: '50%', transform: 'translateX(-50%)', whiteSpace: 'nowrap' }}
            >
              <span
                className="text-[9px] uppercase tracking-widest px-2 py-1 rotate-90 inline-block"
                style={{ fontFamily: 'var(--font-mono)', color: 'rgba(248,250,252,0.25)' }}
              >
                SYNC
              </span>
            </div>
          </div>

          {/* ── Creative Card ─────────────────────────────────────────────────── */}
          <div
            className="p-8 md:p-10 flex flex-col relative"
            style={{
              backgroundColor: 'rgba(203,213,225,0.03)',
              border: '1px solid rgba(203,213,225,0.18)',
              borderLeft: 'none',
              borderTop: '2px solid #CBD5E1',
            }}
          >
            <div className="flex items-center gap-2 mb-6">
              <div className="w-2 h-2 rounded-full bg-[#CBD5E1]" style={{ boxShadow: '0 0 8px rgba(203,213,225,0.6)' }} />
              <span className="text-[10px] uppercase tracking-[0.22em]" style={{ fontFamily: 'var(--font-mono)', color: '#CBD5E1' }}>
                CREATIVE DIVISION
              </span>
            </div>

            <p
              className="text-2xl md:text-3xl font-black mb-4 tracking-tight"
              style={{ fontFamily: 'var(--font-heading)', color: '#F8FAFC', letterSpacing: '-0.02em' }}
            >
              Narrative Layer
            </p>
            <p
              className="text-sm leading-relaxed mb-8 flex-grow"
              style={{ fontFamily: 'var(--font-sans)', color: 'rgba(248,250,252,0.55)' }}
            >
              The demand-generation engine. High-retention short-form video assets engineered to clear the 65% 
              retention threshold, trigger algorithmic distribution, and produce a measurable volume of warm 
              inbound prospects every month that the Logic layer processes.
            </p>

            <ul className="space-y-3 mb-10">
              {[
                'Psychological Hook Architecture',
                'Rhythmic Edit Engine',
                'Brand Identity System',
                'Multi-Platform Distribution',
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span className="w-1 h-1 rounded-full bg-[#CBD5E1] shrink-0" />
                  <span className="text-xs" style={{ fontFamily: 'var(--font-sans)', color: 'rgba(248,250,252,0.5)' }}>
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mb-6 space-y-1">
              <p className="text-[10px] uppercase tracking-widest" style={{ fontFamily: 'var(--font-mono)', color: 'rgba(203,213,225,0.4)' }}>
                // RETENTION: 65%+ — COMPLETION: 110%+ — ASSETS: 30/MO
              </p>
            </div>

            <Link
              href="/creative"
              id="framework-creative-link"
              className="group inline-flex items-center gap-2 text-xs uppercase tracking-widest transition-all self-start"
              style={{ fontFamily: 'var(--font-mono)', color: '#CBD5E1', borderBottom: '1px solid rgba(203,213,225,0.3)', paddingBottom: '2px' }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = '#CBD5E1' }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(203,213,225,0.3)' }}
            >
              View Creative Division
              <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Bottom unified message */}
        <div
          className="mt-0 p-6 md:p-8 text-center"
          style={{
            backgroundColor: 'rgba(30,41,59,0.4)',
            border: '1px solid rgba(248,250,252,0.08)',
            borderTop: 'none',
            transition: 'opacity 1s ease 0.5s',
            opacity: visible ? 1 : 0,
          }}
        >
          <p
            className="text-xs uppercase tracking-widest"
            style={{ fontFamily: 'var(--font-mono)', color: 'rgba(248,250,252,0.3)' }}
          >
            // SYS_SYNC: LOGIC ↔ NARRATIVE — EVENT_LOOP_ACTIVE — UNIFIED_FRAMEWORK: OPERATIONAL
          </p>
        </div>
      </div>
    </section>
  )
}
