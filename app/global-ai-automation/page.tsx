'use client'

import { useEffect, useState, useRef } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'

// ── Reusable section-label pill ──────────────────────────────────────────────
const SectionTag = ({ label }: { label: string }) => (
  <div className="flex items-center justify-center gap-3 mb-8">
    <span className="text-lg" style={{ color: '#6366F1' }}>●</span>
    <span
      className="text-xs font-medium px-6 py-3 rounded-full uppercase tracking-[0.2em]"
      style={{
        color: '#6366F1',
        backgroundColor: 'rgba(99,102,241,0.05)',
        border: '1px solid rgba(99,102,241,0.2)',
        fontFamily: 'var(--font-mono)',
      }}
    >
      {label}
    </span>
    <span className="text-lg" style={{ color: '#6366F1' }}>●</span>
  </div>
)

// ── Animated counter for stat numbers ────────────────────────────────────────
function AnimatedCounter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        observer.disconnect()
        let start = 0
        const step = Math.ceil(target / 60)
        const timer = setInterval(() => {
          start = Math.min(start + step, target)
          setCount(start)
          if (start >= target) clearInterval(timer)
        }, 16)
      },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target])

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  )
}

// ── Terminal typing line ──────────────────────────────────────────────────────
function TerminalLine({ text, delay = 0 }: { text: string; delay?: number }) {
  const [displayed, setDisplayed] = useState('')
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setStarted(true), delay)
    return () => clearTimeout(t)
  }, [delay])

  useEffect(() => {
    if (!started) return
    let i = 0
    const iv = setInterval(() => {
      setDisplayed(text.slice(0, i + 1))
      i++
      if (i >= text.length) clearInterval(iv)
    }, 28)
    return () => clearInterval(iv)
  }, [started, text])

  return (
    <p
      className="text-xs sm:text-sm leading-loose"
      style={{ fontFamily: 'var(--font-mono)', color: '#6366F1', letterSpacing: '0.05em' }}
    >
      {displayed}
      {displayed.length < text.length && (
        <span className="inline-block w-2 h-3.5 ml-0.5 align-middle bg-[#6366F1] animate-pulse" />
      )}
    </p>
  )
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default function GlobalAIAutomationPage() {

  // — Logic Layer cards
  const logicNodes = [
    {
      id: 'SYS_L1',
      title: 'Agentic Outbound Engine',
      body: 'Autonomous AI agents qualify leads, enrich contact records, and dispatch personalised outreach sequences — all triggered by user-defined signal events inside n8n.',
      metric: '// EXEC_ERRORS: 0.00%',
      color: '#CA8A04',
    },
    {
      id: 'SYS_L2',
      title: 'Voice Infrastructure (Vapi / Retell)',
      body: 'Sub-500ms-latency voice agents handle inbound pre-qualification and outbound follow-up across markets and time zones. No hold music. No missed calls.',
      metric: '// LATENCY: < 500ms',
      color: '#CA8A04',
    },
    {
      id: 'SYS_L3',
      title: 'Conversational DM Automation',
      body: 'LLM-trained chatbots intercept Instagram and WhatsApp DMs, map intent, and route qualified prospects to booking flows without human intervention.',
      metric: '// RESP_TIME: INSTANT',
      color: '#CA8A04',
    },
    {
      id: 'SYS_L4',
      title: 'CRM-to-Operations Pipeline',
      body: 'n8n orchestrates event hooks across your entire stack — CRM updates, Slack alerts, contract sends, onboarding triggers — as one continuous, self-correcting data loop.',
      metric: '// UPTIME: 24/7/365',
      color: '#CA8A04',
    },
  ]

  // — Narrative Layer cards
  const narrativeNodes = [
    {
      id: 'SYS_N1',
      title: 'Psychological Hook Architecture',
      body: 'Every script opens with a pattern-interrupt designed to stop the scroll inside the first 1.5 seconds. Hook structure is tested against platform-specific retention data before production.',
      metric: '// TARGET_RETENTION: 65%+',
      color: '#6366F1',
    },
    {
      id: 'SYS_N2',
      title: 'Rhythmic Edit Engine',
      body: 'Cuts are timed to the emotional cadence of the script — not the beat. Average completion rates exceed 110% because viewers loop. That is the distribution signal that feeds the algorithm.',
      metric: '// AVG_COMPLETION: 110%',
      color: '#6366F1',
    },
    {
      id: 'SYS_N3',
      title: 'Brand Identity System',
      body: 'Motion graphics, colour grading, and typographic assets are built once and encoded into every deliverable. Visual cohesion is not a preference — it is a parameter.',
      metric: '// VISUAL_COHESION: 99%',
      color: '#6366F1',
    },
    {
      id: 'SYS_N4',
      title: 'Multi-Platform Distribution',
      body: 'Metadata, caption structures, and posting schedules are derived from platform-specific engagement curves. Uploads are batched and timed, not random.',
      metric: '// POST_VOL: 30/MONTH',
      color: '#6366F1',
    },
  ]

  // — Why video editing alone fails in 2026
  const failureReasons = [
    {
      code: 'ERR_01',
      title: 'Organic reach without back-end routing is a dead end.',
      body: 'A viral short-form video generates attention that lives for 72 hours. If no automated system captures that inbound intent — DMs, profile visits, link clicks — the lead decays. By the time a human follows up manually, the window is closed. In 2026, reach without routing is overhead, not growth.',
    },
    {
      code: 'ERR_02',
      title: 'Editing is a production function, not a distribution strategy.',
      body: "Editors optimise for aesthetics. Algorithms optimise for watch time, shares, and saves. These objectives only converge when every creative decision — hook length, pacing, audio mix — is informed by distribution data. An editor who doesn't have access to that data is operating blind.",
    },
    {
      code: 'ERR_03',
      title: 'Platform algorithm logic has become agentic.',
      body: "Meta, TikTok, and YouTube no longer rank content linearly. Their recommendation engines now model a user's predicted long-term watch behaviour and penalise creators who serve inconsistent quality. A single editor cannot maintain the signal consistency that keeps a channel in active distribution. A system can.",
    },
    {
      code: 'ERR_04',
      title: 'Human follow-up does not scale at algorithmic speed.',
      body: 'A post that generates 400 DMs in 6 hours cannot be manually handled by a team of 3. Every unanswered message is a conversion event that never fired. The infrastructure to handle peak inbound load must be built before the content goes live — not patched together after.',
    },
  ]

  // — System sync stats
  const systemStats = [
    { value: 500, suffix: 'ms', label: 'Max Voice Agent Latency' },
    { value: 0, suffix: '.00%', label: 'Workflow Execution Errors' },
    { value: 110, suffix: '%', label: 'Average Video Completion Rate' },
    { value: 30, suffix: '/mo', label: 'Distributed Content Assets' },
  ]

  // — Agentic workflow sequence
  const agentWorkflow = [
    {
      step: '01',
      trigger: 'SIGNAL_INBOUND',
      title: 'Signal Captured',
      desc: 'A prospect watches 85%+ of a short-form video. The completion event fires a webhook into the n8n pipeline.',
    },
    {
      step: '02',
      trigger: 'AGENT_ENRICH',
      title: 'Lead Enriched',
      desc: 'An AI agent pulls the prospect\'s public profile data, scores their intent based on viewing pattern, and appends the record to the CRM.',
    },
    {
      step: '03',
      trigger: 'AGENT_OUTREACH',
      title: 'Personalised Outreach Dispatched',
      desc: 'A context-aware message — referencing the exact content they watched — is sent via WhatsApp or IG DM within 4 minutes of the trigger.',
    },
    {
      step: '04',
      trigger: 'AGENT_QUALIFY',
      title: 'Chatbot Qualifies',
      desc: 'If the prospect replies, the LLM chatbot runs a structured qualification sequence, captures budget and timeline, and books a discovery call without human input.',
    },
    {
      step: '05',
      trigger: 'AGENT_VOICE',
      title: 'Voice Agent Pre-call',
      desc: 'A Vapi or Retell voice agent calls the prospect 30 minutes before the scheduled call to confirm attendance, reducing no-show rate below 12%.',
    },
    {
      step: '06',
      trigger: 'SYS_COMPLETE',
      title: 'Ecosystem Loop Closed',
      desc: 'Post-call outcome updates the CRM, triggers the onboarding workflow if closed, and logs performance data back into the content scoring model.',
    },
  ]

  return (
    <main className="min-h-screen bg-[#0B0E14] text-[#F8FAFC]">
      <Navbar />

      {/* ── 1. Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative pt-40 pb-28 px-4 flex flex-col items-center justify-center text-center overflow-hidden">
        {/* Grid overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(rgba(30,41,59,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(30,41,59,0.2) 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
            maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 80%)',
            WebkitMaskImage: 'radial-gradient(ellipse at center, black 30%, transparent 80%)',
          }}
        />
        {/* Amethyst glow */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none"
          style={{
            width: '900px',
            height: '600px',
            background: 'radial-gradient(ellipse at top, rgba(76,29,149,0.18) 0%, transparent 65%)',
          }}
        />

        <div className="relative z-10 max-w-5xl mx-auto">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full"
            style={{
              backgroundColor: 'rgba(202,138,4,0.08)',
              border: '1px solid rgba(202,138,4,0.35)',
              boxShadow: '0 0 12px rgba(202,138,4,0.15)',
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#CA8A04] animate-pulse" />
            <span
              className="text-xs uppercase tracking-[0.2em]"
              style={{ fontFamily: 'var(--font-mono)', color: '#CA8A04' }}
            >
              // GLOBAL_AI_AUTOMATION: ACTIVE
            </span>
          </div>

          <h1
            className="text-4xl md:text-6xl lg:text-7xl font-black mb-8 tracking-tight"
            style={{ fontFamily: 'var(--font-heading)', lineHeight: 1.1, letterSpacing: '-0.04em' }}
          >
            Synchronized Systems.{' '}
            <span
              style={{
                background: 'linear-gradient(90deg, #6366F1, #A855F7)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Compounding Results.
            </span>
          </h1>

          <p
            className="text-base md:text-lg mb-4 max-w-3xl mx-auto leading-relaxed"
            style={{ fontFamily: 'var(--font-sans)', color: 'rgba(248,250,252,0.65)' }}
          >
            Luminex operates a two-layer AI Automation infrastructure — <strong style={{ color: '#CA8A04' }}>Logic</strong> and{' '}
            <strong style={{ color: '#6366F1' }}>Narrative</strong> — designed to run in
            permanent synchronisation. Logic handles autonomous lead capture, qualification, and
            backend orchestration. Narrative produces the high-retention creative narrative video assets that activate
            the pipeline. Neither layer functions at full capacity without the other.
          </p>

          <p
            className="text-sm uppercase tracking-[0.18em] mb-12"
            style={{ fontFamily: 'var(--font-mono)', color: 'rgba(99,102,241,0.7)' }}
          >
            // This page documents the system architecture.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <Link
              href="#logic-narrative"
              id="cta-explore-framework"
              className="group relative inline-flex items-center gap-3 px-8 py-4 font-semibold uppercase tracking-widest transition-transform hover:scale-105"
              style={{ fontFamily: 'var(--font-mono)', color: '#F8FAFC' }}
            >
              <div className="absolute inset-0 rounded-lg border-2" style={{ borderColor: '#CA8A04' }} />
              <div className="absolute inset-0 rounded-lg bg-[#CA8A04] opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
              <span className="relative z-10">Explore The Framework</span>
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="#workflow"
              id="cta-see-workflow"
              className="text-sm uppercase tracking-widest transition-colors hover:text-[#6366F1]"
              style={{ fontFamily: 'var(--font-mono)', color: 'rgba(248,250,252,0.5)' }}
            >
              See The Agentic Workflow ↓
            </Link>
          </div>
        </div>
      </section>

      <div className="w-full h-px bg-[#1E293B]" />

      {/* ── 2. System Stats ──────────────────────────────────────────────────── */}
      <section className="py-20 px-4 bg-[#0B0E14]">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {systemStats.map((stat, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center p-8 text-center"
              style={{
                backgroundColor: 'rgba(30,41,59,0.4)',
                border: '1px solid rgba(248,250,252,0)',
                borderTop: '1px solid rgba(248,250,252,0.15)',
                borderLeft: '1px solid rgba(248,250,252,0.15)',
              }}
            >
              <span
                className="text-4xl md:text-5xl font-black mb-2 tabular-nums"
                style={{
                  fontFamily: 'var(--font-heading)',
                  color: idx % 2 === 0 ? '#CA8A04' : '#6366F1',
                }}
              >
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              </span>
              <span
                className="text-[10px] uppercase tracking-widest"
                style={{ fontFamily: 'var(--font-mono)', color: 'rgba(248,250,252,0.45)' }}
              >
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      <div className="w-full h-px bg-[#1E293B]" />

      {/* ── 3. Logic & Narrative Framework ──────────────────────────────────── */}
      <section id="logic-narrative" className="py-28 px-4 bg-[#0B0E14]">
        <div className="max-w-7xl mx-auto">
          <SectionTag label="// FRAMEWORK: LOGIC & NARRATIVE" />

          <h2
            className="text-4xl md:text-5xl font-black text-center mb-6 tracking-tight"
            style={{ fontFamily: 'var(--font-heading)', letterSpacing: '-0.03em' }}
          >
            Two Layers. One Synchronized System.
          </h2>

          <p
            className="text-base md:text-lg text-center max-w-3xl mx-auto mb-20 leading-relaxed"
            style={{ fontFamily: 'var(--font-sans)', color: 'rgba(248,250,252,0.6)' }}
          >
            Most agencies either build automations or produce content. We operate both as a single
            coordinated system because the distribution performance of one layer is directly
            determined by the execution quality of the other.
          </p>

          {/* Dual-column grid with visual separator */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border border-[#1E293B]">

            {/* LOGIC column */}
            <div className="p-8 md:p-12 border-b lg:border-b-0 lg:border-r border-[#1E293B]">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-2 h-2 rounded-full bg-[#CA8A04]" style={{ boxShadow: '0 0 8px rgba(202,138,4,0.7)' }} />
                <p
                  className="text-xs uppercase tracking-[0.25em]"
                  style={{ fontFamily: 'var(--font-mono)', color: '#CA8A04' }}
                >
                  [ LOGIC — Automation & Backend ]
                </p>
              </div>

              <p
                className="text-sm leading-relaxed mb-10"
                style={{ fontFamily: 'var(--font-sans)', color: 'rgba(248,250,252,0.55)' }}
              >
                Logic is the operational skeleton. It runs continuously in the background — routing
                inbound attention into structured pipeline events, eliminating the human latency
                that kills most conversion windows. Every lead signal generated by the Narrative
                layer is intercepted, enriched, and acted upon without manual input.
              </p>

              <div className="space-y-5">
                {logicNodes.map((node) => (
                  <div
                    key={node.id}
                    className="group p-6 border transition-colors duration-300 flex flex-col"
                    style={{
                      backgroundColor: 'rgba(30,41,59,0.5)',
                      borderColor: 'rgba(202,138,4,0.15)',
                    }}
                    onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(202,138,4,0.6)')}
                    onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(202,138,4,0.15)')}
                  >
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <h4
                        className="text-sm font-bold uppercase tracking-widest"
                        style={{ fontFamily: 'var(--font-mono)', color: '#F8FAFC' }}
                      >
                        {node.title}
                      </h4>
                      <span
                        className="text-[9px] uppercase tracking-widest shrink-0 mt-0.5"
                        style={{ fontFamily: 'var(--font-mono)', color: 'rgba(202,138,4,0.5)' }}
                      >
                        {node.id}
                      </span>
                    </div>
                    <p
                      className="text-sm leading-relaxed mb-4 flex-grow"
                      style={{ fontFamily: 'var(--font-sans)', color: 'rgba(248,250,252,0.55)' }}
                    >
                      {node.body}
                    </p>
                    <div className="pt-3 border-t" style={{ borderColor: 'rgba(202,138,4,0.15)' }}>
                      <span
                        className="text-[10px] uppercase tracking-widest"
                        style={{ fontFamily: 'var(--font-mono)', color: '#CA8A04' }}
                      >
                        {node.metric}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* NARRATIVE column */}
            <div className="p-8 md:p-12">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-2 h-2 rounded-full bg-[#6366F1]" style={{ boxShadow: '0 0 8px rgba(99,102,241,0.7)' }} />
                <p
                  className="text-xs uppercase tracking-[0.25em]"
                  style={{ fontFamily: 'var(--font-mono)', color: '#6366F1' }}
                >
                  [ NARRATIVE — High-Retention Video & Creative ]
                </p>
              </div>

              <p
                className="text-sm leading-relaxed mb-10"
                style={{ fontFamily: 'var(--font-sans)', color: 'rgba(248,250,252,0.55)' }}
              >
                Narrative is the demand-generation engine. It produces the short-form video assets
                that generate the inbound signals the Logic layer processes. The objective is not
                viral reach — it is algorithmic consistency: content that clears the 65% retention
                threshold, triggers the recommendation algorithm, and delivers a measurable volume
                of warm prospects into the pipeline each month.
              </p>

              <div className="space-y-5">
                {narrativeNodes.map((node) => (
                  <div
                    key={node.id}
                    className="group p-6 border transition-colors duration-300 flex flex-col"
                    style={{
                      backgroundColor: 'rgba(30,41,59,0.5)',
                      borderColor: 'rgba(99,102,241,0.15)',
                    }}
                    onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(99,102,241,0.6)')}
                    onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(99,102,241,0.15)')}
                  >
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <h4
                        className="text-sm font-bold uppercase tracking-widest"
                        style={{ fontFamily: 'var(--font-mono)', color: '#F8FAFC' }}
                      >
                        {node.title}
                      </h4>
                      <span
                        className="text-[9px] uppercase tracking-widest shrink-0 mt-0.5"
                        style={{ fontFamily: 'var(--font-mono)', color: 'rgba(99,102,241,0.5)' }}
                      >
                        {node.id}
                      </span>
                    </div>
                    <p
                      className="text-sm leading-relaxed mb-4 flex-grow"
                      style={{ fontFamily: 'var(--font-sans)', color: 'rgba(248,250,252,0.55)' }}
                    >
                      {node.body}
                    </p>
                    <div className="pt-3 border-t" style={{ borderColor: 'rgba(99,102,241,0.15)' }}>
                      <span
                        className="text-[10px] uppercase tracking-widest"
                        style={{ fontFamily: 'var(--font-mono)', color: '#6366F1' }}
                      >
                        {node.metric}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* System sync callout */}
          <div
            className="mt-8 p-6 md:p-8 border"
            style={{
              backgroundColor: 'rgba(11,14,20,0.8)',
              borderColor: 'rgba(99,102,241,0.2)',
              boxShadow: 'inset 0 2px 20px rgba(0,0,0,0.4)',
            }}
          >
            <TerminalLine text="[ SYS_SYNC ] LOGIC ↔ NARRATIVE: EVENT_LOOP_ACTIVE | PIPELINE_STATUS: RUNNING | LEAD_ROUTING: ENABLED" />
          </div>
        </div>
      </section>

      <div className="w-full h-px bg-[#1E293B]" />

      {/* ── 4. Why Video Editing Alone Fails in 2026 ────────────────────────── */}
      <section className="py-28 px-4 bg-[#0B0E14]">
        <div className="max-w-6xl mx-auto">
          <SectionTag label="// SYSTEM DIAGNOSIS: 2026" />

          <h2
            className="text-4xl md:text-5xl font-black text-center mb-6 tracking-tight"
            style={{ fontFamily: 'var(--font-heading)', letterSpacing: '-0.03em' }}
          >
            Why Standard Video Editing{' '}
            <span
              style={{
                background: 'linear-gradient(90deg, #EF4444, #F97316)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Fails
            </span>{' '}
            in 2026
          </h2>

          <p
            className="text-base md:text-lg text-center max-w-3xl mx-auto mb-16 leading-relaxed"
            style={{ fontFamily: 'var(--font-sans)', color: 'rgba(248,250,252,0.6)' }}
          >
            The assumption embedded in most video-first strategies is that reach converts.
            It does not. Reach is an input. Conversion is a system output — and without the
            infrastructure to process inbound attention, a well-edited video is a cost centre,
            not a revenue driver.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {failureReasons.map((reason, idx) => (
              <div
                key={idx}
                className="p-8 border relative overflow-hidden"
                style={{
                  backgroundColor: 'rgba(30,41,59,0.35)',
                  borderColor: 'rgba(239,68,68,0.15)',
                  borderTop: '1px solid rgba(239,68,68,0.4)',
                  borderLeft: '1px solid rgba(239,68,68,0.25)',
                }}
              >
                {/* Error code badge */}
                <div className="flex items-center gap-3 mb-5">
                  <span
                    className="px-2 py-0.5 text-[10px] uppercase tracking-widest"
                    style={{
                      fontFamily: 'var(--font-mono)',
                      backgroundColor: 'rgba(239,68,68,0.1)',
                      border: '1px solid rgba(239,68,68,0.3)',
                      color: '#EF4444',
                    }}
                  >
                    {reason.code}
                  </span>
                  <span
                    className="text-[10px] uppercase tracking-widest"
                    style={{ fontFamily: 'var(--font-mono)', color: 'rgba(248,250,252,0.3)' }}
                  >
                    // STRUCTURAL_FAILURE
                  </span>
                </div>
                <p
                  className="text-base font-bold mb-4 leading-snug"
                  style={{ fontFamily: 'var(--font-heading)', color: '#F8FAFC' }}
                >
                  {reason.title}
                </p>
                <p
                  className="text-sm leading-relaxed"
                  style={{ fontFamily: 'var(--font-sans)', color: 'rgba(248,250,252,0.55)' }}
                >
                  {reason.body}
                </p>
              </div>
            ))}
          </div>

          {/* Diagnosis summary */}
          <div
            className="mt-10 p-8 border"
            style={{
              backgroundColor: 'rgba(30,41,59,0.5)',
              borderColor: 'rgba(99,102,241,0.2)',
              borderLeft: '3px solid #6366F1',
            }}
          >
            <p
              className="text-xs uppercase tracking-widest mb-3"
              style={{ fontFamily: 'var(--font-mono)', color: '#6366F1' }}
            >
              // SYSTEM DIAGNOSIS
            </p>
            <p
              className="text-base md:text-lg leading-relaxed"
              style={{ fontFamily: 'var(--font-sans)', color: 'rgba(248,250,252,0.7)' }}
            >
              The collapse of standard video-only strategies is not a creative failure. It is an
              architectural one. The content function and the lead-capture function developed in
              isolation — and the gap between them became the conversion loss. Closing that gap is
              not an optimisation. It requires replacing the model.
            </p>
          </div>
        </div>
      </section>

      <div className="w-full h-px bg-[#1E293B]" />

      {/* ── 5. Agentic Workflow ──────────────────────────────────────────────── */}
      <section id="workflow" className="py-28 px-4 bg-[#0B0E14] relative overflow-hidden">
        {/* Subtle grid */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(rgba(30,41,59,0.25) 1px, transparent 1px), linear-gradient(90deg, rgba(30,41,59,0.25) 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }}
        />
        <div className="max-w-5xl mx-auto relative z-10">
          <SectionTag label="// AGENTIC_WORKFLOW: SEQUENCE" />

          <h2
            className="text-4xl md:text-5xl font-black text-center mb-6 tracking-tight"
            style={{ fontFamily: 'var(--font-heading)', letterSpacing: '-0.03em' }}
          >
            From Content View to Closed Deal.{' '}
            <span
              style={{
                background: 'linear-gradient(90deg, #6366F1, #A855F7)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Autonomously.
            </span>
          </h2>

          <p
            className="text-base text-center max-w-2xl mx-auto mb-20 leading-relaxed"
            style={{ fontFamily: 'var(--font-sans)', color: 'rgba(248,250,252,0.55)' }}
          >
            This is not a marketing funnel. It is an event-driven execution sequence. Each node in
            the workflow fires as a direct response to a measurable user action — no polling,
            no delays, no manual handoffs.
          </p>

          <div className="relative pl-6 md:pl-0">
            {/* Vertical timeline line */}
            <div
              className="absolute left-0 md:left-1/2 top-4 bottom-4 w-px -translate-x-1/2"
              style={{ backgroundColor: 'rgba(99,102,241,0.25)' }}
            />

            <div className="space-y-10">
              {agentWorkflow.map((step, idx) => {
                const isEven = idx % 2 === 0
                return (
                  <div
                    key={idx}
                    className={`relative flex flex-col md:flex-row items-start md:items-center ${isEven ? 'md:flex-row-reverse' : ''}`}
                  >
                    {/* Timeline dot */}
                    <div
                      className="absolute left-0 md:left-1/2 w-3 h-3 rounded-full -translate-x-1/2 mt-6 md:mt-0 z-10"
                      style={{
                        backgroundColor: '#6366F1',
                        boxShadow: '0 0 10px rgba(99,102,241,0.8)',
                        border: '2px solid #0B0E14',
                      }}
                    />

                    {/* Spacer */}
                    <div className="hidden md:block w-1/2" />

                    {/* Card */}
                    <div className={`w-full md:w-1/2 pl-8 md:pl-0 ${isEven ? 'md:pr-10' : 'md:pl-10'}`}>
                      <div
                        className="p-6 border transition-colors duration-300"
                        style={{
                          backgroundColor: 'rgba(30,41,59,0.6)',
                          borderColor: 'rgba(99,102,241,0.2)',
                          borderTop: '1px solid rgba(248,250,252,0.12)',
                          borderLeft: '1px solid rgba(248,250,252,0.12)',
                        }}
                      >
                        <div className="flex items-center gap-3 mb-3">
                          <span
                            className="text-[10px] uppercase tracking-widest px-2 py-0.5"
                            style={{
                              fontFamily: 'var(--font-mono)',
                              color: '#6366F1',
                              backgroundColor: 'rgba(99,102,241,0.1)',
                              border: '1px solid rgba(99,102,241,0.25)',
                            }}
                          >
                            NODE_{step.step}
                          </span>
                          <span
                            className="text-[9px] uppercase tracking-widest"
                            style={{ fontFamily: 'var(--font-mono)', color: 'rgba(202,138,4,0.6)' }}
                          >
                            {step.trigger}
                          </span>
                        </div>
                        <p
                          className="text-base font-bold mb-2"
                          style={{ fontFamily: 'var(--font-heading)', color: '#F8FAFC' }}
                        >
                          {step.title}
                        </p>
                        <p
                          className="text-sm leading-relaxed"
                          style={{ fontFamily: 'var(--font-sans)', color: 'rgba(248,250,252,0.55)' }}
                        >
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      <div className="w-full h-px bg-[#1E293B]" />

      {/* ── 6. Synchronisation Architecture Table ────────────────────────────── */}
      <section className="py-28 px-4 bg-[#0B0E14]">
        <div className="max-w-5xl mx-auto">
          <SectionTag label="// SYNC_ARCHITECTURE: SPECIFICATIONS" />

          <p
            className="text-4xl md:text-5xl font-black text-center mb-16 tracking-tight"
            style={{ fontFamily: 'var(--font-heading)', letterSpacing: '-0.03em' }}
          >
            System Specifications
          </p>

          <div className="overflow-x-auto w-full">
            <table
              className="w-full text-left border-collapse"
              style={{ backgroundColor: '#1E293B', border: '1px solid rgba(248,250,252,0.12)' }}
            >
              <thead>
                <tr style={{ borderBottom: '1px solid rgba(248,250,252,0.12)' }}>
                  {['Parameter', 'Logic Layer', 'Narrative Layer'].map((h, i) => (
                    <th
                      key={i}
                      className="p-6 text-xs uppercase tracking-[0.2em]"
                      style={{
                        fontFamily: 'var(--font-mono)',
                        color: '#F8FAFC',
                        borderLeft: i > 0 ? '1px solid rgba(248,250,252,0.08)' : undefined,
                      }}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody style={{ fontFamily: 'var(--font-mono)' }} className="text-sm">
                {[
                  ['Architecture', 'Event-Driven Agentic Hooks', 'Non-Linear Psychological Edits'],
                  ['Latency / Turnaround', '< 500ms API Response', '48hr Batch Delivery'],
                  ['Volume Limit', 'Uncapped I/O Processing', '60 Assets / Month'],
                  ['Uptime Target', '24 / 7 / 365', 'Continuous Production Cycle'],
                  ['Retention / Conversion KPI', 'Lead-to-Book Rate > 35%', '65%+ at 3-Second Mark'],
                  ['Error Tolerance', '0.00% Execution Failures', 'Zero Inconsistent Assets'],
                ].map((row, idx) => (
                  <tr key={idx} style={{ borderBottom: '1px solid rgba(248,250,252,0.06)' }}>
                    <td
                      className="p-6 font-semibold"
                      style={{ color: 'rgba(248,250,252,0.7)' }}
                    >
                      {row[0]}
                    </td>
                    <td
                      className="p-6"
                      style={{ color: '#CA8A04', borderLeft: '1px solid rgba(248,250,252,0.06)' }}
                    >
                      {row[1]}
                    </td>
                    <td
                      className="p-6"
                      style={{ color: '#6366F1', borderLeft: '1px solid rgba(248,250,252,0.06)' }}
                    >
                      {row[2]}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <div className="w-full h-px bg-[#1E293B]" />

      {/* ── 7. Global Deployment & CTA ───────────────────────────────────────── */}
      <section className="py-32 px-4 bg-[#0B0E14] relative overflow-hidden">
        {/* Gold glow */}
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none"
          style={{
            width: '800px',
            height: '400px',
            background: 'radial-gradient(ellipse at bottom, rgba(202,138,4,0.08) 0%, transparent 65%)',
          }}
        />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <SectionTag label="// DEPLOYMENT: GLOBAL" />

          <h2
            className="text-4xl md:text-6xl font-black mb-8 tracking-tight"
            style={{ fontFamily: 'var(--font-heading)', letterSpacing: '-0.04em' }}
          >
            The Infrastructure Is{' '}
            <span style={{ color: '#CA8A04', textShadow: '0 0 30px rgba(202,138,4,0.4)' }}>
              Already Running.
            </span>
          </h2>

          <p
            className="text-base md:text-lg mb-6 leading-relaxed max-w-2xl mx-auto"
            style={{ fontFamily: 'var(--font-sans)', color: 'rgba(248,250,252,0.6)' }}
          >
            We do not build from a blank state for each client. The Logic layer is a pre-configured
            pipeline — n8n, voice agents, DM automation, CRM hooks — deployed and customised to
            your offer in 14 days. The Narrative layer is already producing at full capacity.
          </p>

          <p
            className="text-sm mb-14"
            style={{ fontFamily: 'var(--font-mono)', color: 'rgba(248,250,252,0.35)' }}
          >
            // What you are scheduling is an audit of your current stack against this infrastructure.
          </p>

          <Link
            href="https://calendly.com/luminexsocial05/30min"
            target="_blank"
            rel="noopener noreferrer"
            id="cta-request-system-audit"
            className="group relative inline-flex items-center justify-center gap-4 px-12 py-6 font-bold uppercase tracking-widest text-[#F8FAFC] transition-transform hover:scale-105"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            <div className="absolute inset-0 rounded-lg border-2 transition-colors duration-300" style={{ borderColor: '#CA8A04' }} />
            <div className="absolute inset-0 rounded-lg bg-[#CA8A04] opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
            <div className="absolute inset-0 rounded-lg shadow-[inset_0_0_20px_rgba(76,29,149,0)] group-hover:shadow-[inset_0_0_20px_rgba(76,29,149,0.4)] transition-shadow duration-300" />
            <span className="relative z-10">Request System Audit</span>
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>

          {/* Terminal footer */}
          <div
            className="mt-16 px-6 py-4 max-w-2xl mx-auto"
            style={{
              backgroundColor: 'rgba(11,14,20,0.8)',
              border: '1px solid rgba(99,102,241,0.18)',
              boxShadow: 'inset 0 2px 15px rgba(0,0,0,0.5)',
            }}
          >
            <TerminalLine
              text="[ GLOBAL_AI_AUTOMATION ] STATUS: OPERATIONAL | CLIENTS: ACTIVE | NEXT_SLOT: AVAILABLE"
              delay={800}
            />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
