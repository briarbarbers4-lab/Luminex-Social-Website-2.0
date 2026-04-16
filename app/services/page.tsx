'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function ServicesPage() {
  const narrativeStack = [
    {
      title: 'Psychological Scripting',
      desc: 'Research-backed hooks and retention-focused storytelling.',
      metric: '// TARGET_RETENTION: 65%',
    },
    {
      title: 'Rhythmic Editing',
      desc: 'High-energy, short-form cuts optimized for social algorithms.',
      metric: '// AVG_COMPLETION: 110%',
    },
    {
      title: 'Brand Identity Design',
      desc: 'Custom motion graphics and visual assets.',
      metric: '// VISUAL_COHESION: 99%',
    },
    {
      title: 'Distribution Strategy',
      desc: 'Multi-platform posting and growth management.',
      metric: '// POST_VOL: 30/MONTH',
    },
  ]

  const logicStack = [
    {
      title: 'AI Voice Agents',
      desc: '24/7 outbound/inbound agents using Vapi/Retell.',
      metric: '// LATENCY: < 500ms',
    },
    {
      title: 'Intelligent Chatbots',
      desc: 'Custom LLM-trained agents for WhatsApp and IG DMs.',
      metric: '// RESP_TIME: INSTANT',
    },
    {
      title: 'n8n Enterprise Automations',
      desc: 'Complex backend workflows connecting your CRM to your operations.',
      metric: '// EXEC_ERRORS: 0.00%',
    },
    {
      title: 'AI Employee Integration',
      desc: 'Autonomous agents that handle lead research and personalized outreach.',
      metric: '// UPTIME: 24/7/365',
    },
  ]

  return (
    <main className="min-h-screen bg-[#0B0E14] text-[#F8FAFC]">
      <Navbar />

      {/* ── 1. Hero Header ── */}
      <section className="relative pt-40 pb-20 flex flex-col items-center justify-center text-center px-4">
        {/* Subtle radial glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(circle at top, rgba(99,102,241,0.08) 0%, transparent 60%)',
          }}
        />
        <h1
          className="text-4xl md:text-6xl font-black mb-6 tracking-tight relative z-10"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          Our Core Infrastructure
        </h1>
        <p
          className="text-sm md:text-base relative z-10 uppercase tracking-[0.2em]"
          style={{ fontFamily: 'var(--font-mono)', color: 'rgba(99,102,241,0.8)' }}
        >
          // SCALING THROUGH LOGIC & NARRATIVE
        </p>
      </section>

      {/* ── 2. Section 01: Narrative (Content Creation) ── */}
      <section className="relative py-24 px-4 overflow-hidden" style={{ background: '#0B0E14' }}>
        {/* Static Noise Background */}
        <div
          className="absolute inset-0 z-[1] pointer-events-none mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.08'/%3E%3C/svg%3E")`,
          }}
        />
        
        {/* 1px Technical Grid for depth */}
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(rgba(30, 41, 59, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(30, 41, 59, 0.2) 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
            maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 70%)',
            WebkitMaskImage: 'radial-gradient(ellipse at center, black 30%, transparent 70%)',
          }}
        />

        <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center">
          <h2
            className="text-3xl md:text-4xl font-bold mb-6 text-center"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            High-Retention <span style={{ color: '#CA8A04', textShadow: '0 0 20px rgba(202,138,4,0.5)' }}>Narrative</span> Systems
          </h2>

          {/* Scrolling Tech Ribbon */}
          <div className="w-full overflow-hidden mb-16 opacity-50 relative">
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0B0E14] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0B0E14] to-transparent z-10 pointer-events-none" />
            <div className="flex animate-marquee-fast whitespace-nowrap" style={{ willChange: 'transform' }}>
              {/* Duplicate array for seamless scroll */}
              {[...Array(3)].map((_, i) => (
                <div key={i} className="flex items-center gap-8 px-4 text-xs tracking-[0.2em] uppercase" style={{ fontFamily: 'var(--font-mono)' }}>
                  <span>Adobe Premiere Pro</span><span className="text-[#6366F1]">/</span>
                  <span>After Effects</span><span className="text-[#6366F1]">/</span>
                  <span>Photoshop</span><span className="text-[#6366F1]">/</span>
                  <span>DaVinci Resolve</span><span className="text-[#6366F1]">/</span>
                  <span>CapCut</span><span className="text-[#6366F1]">/</span>
                  <span>Figma</span><span className="text-[#6366F1]">/</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full gap-y-8">
            {narrativeStack.map((item, idx) => (
              <div
                key={idx}
                className="group p-6 border transition-colors duration-300 relative flex flex-col h-full hover:border-[#6366F1]"
                style={{
                  backgroundColor: 'rgba(30,41,59,0.95)',
                  borderColor: '#4C1D95',
                  boxShadow: 'none',
                }}
              >
                <h3
                  className="text-[14px] font-bold uppercase tracking-widest mb-4"
                  style={{ fontFamily: 'var(--font-mono)', color: '#F8FAFC' }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-sm leading-relaxed mb-8 flex-grow"
                  style={{ fontFamily: 'var(--font-sans)', color: 'rgba(248,250,252,0.6)' }}
                >
                  {item.desc}
                </p>

                {/* Performance Metric */}
                <div className="mt-auto pt-4 border-t border-[#4C1D95]">
                  <span className="text-[10px] tracking-widest uppercase" style={{ fontFamily: 'var(--font-mono)', color: '#E2E8F0' }}>
                    {item.metric}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. Section 02: Logic (AI & Automation) ── */}
      <section className="relative py-24 px-4 overflow-hidden bg-[#0B0E14]">
        {/* Technical Grid Overlay */}
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(rgba(30, 41, 59, 1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(30, 41, 59, 1) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
            opacity: 0.2, // Subtle
            maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)',
            WebkitMaskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)',
          }}
        />

        {/* CRT Scanline Overlay */}
        <div
          className="absolute inset-0 z-0 pointer-events-none opacity-20"
          style={{
            backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(30,41,59,0.3) 2px, rgba(30,41,59,0.3) 4px)',
          }}
        />

        {/* Animated Data Pulses via CSS */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/4 -left-10 w-2 h-2 bg-[#6366F1] rounded-full shadow-[0_0_15px_#6366F1] animate-data-pulse-1" />
          <div className="absolute top-2/4 -right-10 w-2 h-2 bg-[#6366F1] rounded-full shadow-[0_0_15px_#6366F1] animate-data-pulse-2" />
          <div className="absolute top-3/4 -left-10 w-2 h-2 bg-[#6366F1] rounded-full shadow-[0_0_15px_#6366F1] animate-data-pulse-3" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center">
          <h2
            className="text-3xl md:text-4xl font-bold mb-6 text-center"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Autonomous Business Architecture
          </h2>

          {/* Scrolling Tech Ribbon */}
          <div className="w-full overflow-hidden mb-16 opacity-50 relative">
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0B0E14] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0B0E14] to-transparent z-10 pointer-events-none" />
            <div className="flex animate-marquee-fast whitespace-nowrap" style={{ willChange: 'transform' }}>
              {/* Duplicate array for seamless scroll */}
              {[...Array(3)].map((_, i) => (
                <div key={i} className="flex items-center gap-8 px-4 text-xs tracking-[0.2em] uppercase" style={{ fontFamily: 'var(--font-mono)' }}>
                  <span>n8n</span><span className="text-[#CA8A04]">/</span>
                  <span>Vapi</span><span className="text-[#CA8A04]">/</span>
                  <span>Retell AI</span><span className="text-[#CA8A04]">/</span>
                  <span>OpenAI</span><span className="text-[#CA8A04]">/</span>
                  <span>Anthropic</span><span className="text-[#CA8A04]">/</span>
                  <span>Make.com</span><span className="text-[#CA8A04]">/</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full gap-y-8">
            {logicStack.map((item, idx) => (
              <div
                key={idx}
                className="group p-6 border transition-colors duration-300 relative flex flex-col h-full hover:border-[#6366F1]"
                style={{
                  backgroundColor: 'rgba(30,41,59,0.95)',
                  borderColor: '#4C1D95',
                  boxShadow: 'none',
                }}
              >
                <h3
                  className="text-[14px] font-bold uppercase tracking-widest mb-4"
                  style={{ fontFamily: 'var(--font-mono)', color: '#F8FAFC' }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-sm leading-relaxed mb-8 flex-grow"
                  style={{ fontFamily: 'var(--font-sans)', color: 'rgba(248,250,252,0.6)' }}
                >
                  {item.desc}
                </p>

                {/* Performance Metric */}
                <div className="mt-auto pt-4 border-t border-[#4C1D95]">
                  <span className="text-[10px] tracking-widest uppercase" style={{ fontFamily: 'var(--font-mono)', color: '#E2E8F0' }}>
                    {item.metric}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. CTA Section ── */}
      <section className="relative py-32 px-4 flex flex-col items-center">
        <Link
          href="#contact"
          className="group relative inline-flex items-center justify-center px-10 py-5 font-bold uppercase tracking-widest text-[#F8FAFC] transition-transform hover:scale-105"
          style={{ fontFamily: 'var(--font-mono)' }}
        >
          {/* Base border */}
          <div className="absolute inset-0 border-2 rounded-lg transition-colors duration-500" style={{ borderColor: '#CA8A04' }} />
          {/* Background fill on hover (Gold tint) */}
          <div className="absolute inset-0 bg-[#CA8A04] opacity-0 group-hover:opacity-10 rounded-lg transition-opacity duration-300" />
          {/* Deep Amethyst inner glow */}
          <div className="absolute inset-0 shadow-[inset_0_0_20px_rgba(76,29,149,0)] group-hover:shadow-[inset_0_0_20px_rgba(76,29,149,0.4)] rounded-lg transition-shadow duration-300" />
          
          <span className="relative z-10 flex items-center gap-3">
            Request System Audit
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </span>
        </Link>
      </section>

      <Footer />

      <style jsx>{`
        @keyframes data-pulse-1 {
          0% { transform: translateX(0) scale(1); opacity: 0; }
          10% { opacity: 1; scale: 1.5; }
          90% { opacity: 1; scale: 1.5; }
          100% { transform: translateX(110vw) scale(1); opacity: 0; }
        }
        @keyframes data-pulse-2 {
          0% { transform: translateX(0) scale(1); opacity: 0; }
          10% { opacity: 1; scale: 1.5; }
          90% { opacity: 1; scale: 1.5; }
          100% { transform: translateX(-110vw) scale(1); opacity: 0; }
        }
        @keyframes data-pulse-3 {
          0% { transform: translateX(0) scale(1); opacity: 0; }
          10% { opacity: 1; scale: 1.5; }
          90% { opacity: 1; scale: 1.5; }
          100% { transform: translateX(110vw) scale(1); opacity: 0; }
        }
        .animate-data-pulse-1 {
          animation: data-pulse-1 6s linear infinite;
        }
        .animate-data-pulse-2 {
          animation: data-pulse-2 8s linear infinite 2s;
        }
        .animate-data-pulse-3 {
          animation: data-pulse-3 7s linear infinite 4s;
        }
        
        @keyframes marquee-fast {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        .animate-marquee-fast {
          animation: marquee-fast 20s linear infinite;
        }
      `}</style>
    </main>
  )
}
