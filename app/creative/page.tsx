'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { useEffect, useState, useRef } from 'react'
import dynamic from 'next/dynamic'

const VideoPlayer = dynamic(() => import('@/components/VideoPlayer'), { ssr: false, loading: () => <div className="absolute inset-0 z-0 overflow-hidden bg-[#0B0E14] animate-pulse" /> })
const CreativeBackgroundEffects = dynamic(() => import('@/components/CreativeBackgroundEffects'), { ssr: false })

// ── Design tokens: Liquid Silver ─────────────────────────────────────────────
const S = {
  primary: '#CBD5E1',       // slate-300 — Liquid Silver
  muted: '#94A3B8',         // slate-400
  glow: 'rgba(203,213,225,0.08)',
  glowBorder: 'rgba(203,213,225,0.18)',
  glowStrong: 'rgba(203,213,225,0.5)',
  warm: '#F1F5F9',
  gold: '#CA8A04',
}

// ── Shared section tag ───────────────────────────────────────────────────────
const Tag = ({ label }: { label: string }) => (
  <div className="flex items-center justify-center gap-3 mb-8">
    <span style={{ color: S.primary }}>◇</span>
    <span
      className="text-[10px] px-5 py-2.5 rounded-full uppercase tracking-[0.22em]"
      style={{ fontFamily: 'var(--font-mono)', color: S.primary, backgroundColor: S.glow, border: `1px solid ${S.glowBorder}` }}
    >
      {label}
    </span>
    <span style={{ color: S.primary }}>◇</span>
  </div>
)

// ── Animated counter ─────────────────────────────────────────────────────────
function Counter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [n, setN] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return
      obs.disconnect()
      let v = 0
      const step = Math.ceil(target / 55)
      const t = setInterval(() => { v = Math.min(v + step, target); setN(v); if (v >= target) clearInterval(t) }, 18)
    }, { threshold: 0.5 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [target])
  return <span ref={ref}>{n}{suffix}</span>
}

// ── Shimmer text gradient ─────────────────────────────────────────────────────
const SilverText = ({ children }: { children: React.ReactNode }) => (
  <span
    style={{
      background: 'linear-gradient(135deg, #CBD5E1 0%, #F8FAFC 50%, #94A3B8 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
    }}
  >
    {children}
  </span>
)

export default function CreativePage() {

  // AEO / FAQ structured data
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is a high-retention video and why does it matter for the algorithm?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "A high-retention video is a short-form asset that holds 65% or more of its viewers past the 3-second mark and drives an average completion rate above 100% — meaning viewers loop the video. Platform algorithms (TikTok, Instagram Reels, YouTube Shorts) use watch time and completion rate as the primary ranking signals. A video with 65%+ retention receives active algorithmic distribution. Below that threshold, the platform suppresses it regardless of how large the creator's audience is.",
        },
      },
      {
        '@type': 'Question',
        name: 'What is psychological scripting in video marketing?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Psychological scripting applies behavioural science principles — pattern interrupts, curiosity gaps, open loops, and social proof triggers — to the structure of a video script. Every line is placed deliberately: the hook stops the scroll within 1.5 seconds, the middle sustains attention through tension, and the close issues a specific behavioural directive. At Luminex Creative, scripts are tested against platform retention data before going into production.',
        },
      },
      {
        '@type': 'Question',
        name: 'How does short-form video content generate B2B leads without paid ads?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Short-form video generates B2B leads through algorithmic distribution — the platform surfaces the content to users who match the behavior profile of your existing viewers. Each video that clears the retention threshold gets pushed to a wider audience. Those viewers who engage (DM, profile visit, link click) become signals that the backend automation layer captures, qualifies, and routes into a booking pipeline. The content is the top of the funnel. The automation system is the funnel.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the 3-second retention threshold in short-form video?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The 3-second mark is the primary drop-off point in short-form video. Platform analytics measure how many viewers watch past 3 seconds — this figure is used to determine if content is worth distributing to a wider audience. A video that retains 65% of viewers past 3 seconds enters active algorithmic promotion. This is why the hook — the first 1.5 seconds of a video — is the highest-leverage creative decision in short-form production.',
        },
      },
      {
        '@type': 'Question',
        name: 'How many videos does Luminex Creative produce per month?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Luminex Creative delivers 30 fully produced and platform-optimized short-form assets per month as part of the standard production cycle. Each asset includes psychological scripting, rhythmic editing, branded motion graphics, and platform-specific metadata optimization (captions, hashtag architecture, posting schedule). Delivery is batched — 48-hour turnaround per batch.',
        },
      },
    ],
  }

  const services = [
    {
      id: 'CRE_01',
      title: 'Psychological Hook Architecture',
      body: 'Every script is structured around a pattern interrupt that stops the scroll in under 1.5 seconds. Hook format, length, and delivery are calibrated to the creator\'s voice and the platform\'s current feed behaviour — not copied from templates.',
      metric: '// TARGET_RETENTION: 65%+',
    },
    {
      id: 'CRE_02',
      title: 'Rhythmic Edit Engine',
      body: 'Cuts are timed to the emotional arc of the script, not the beat. We target average completion rates above 110% — the signal that drives looping, which drives the algorithm. Every transition, music choice, and caption placement is intentional.',
      metric: '// AVG_COMPLETION: 110%+',
    },
    {
      id: 'CRE_03',
      title: 'Brand Identity System',
      body: 'A cohesive visual language — motion graphics, colour grading, typography, and lower thirds — built once and encoded into every deliverable. Visual consistency is a distribution signal. Inconsistency trains the algorithm to suppress.',
      metric: '// VISUAL_COHESION: 99%',
    },
    {
      id: 'CRE_04',
      title: 'Multi-Platform Distribution',
      body: 'Posting schedules, caption structures, hashtag architecture, and metadata are derived from platform-specific engagement curves — not guesswork. 30 assets per month, timed and sequenced for maximum reach surface.',
      metric: '// POST_VOL: 30/MONTH',
    },
  ]

  const techStack = [
    '[ Adobe_Premiere_Pro ]', '[ After_Effects ]', '[ DaVinci_Resolve ]',
    '[ CapCut_Pro ]', '[ Figma ]', '[ Photoshop ]',
    '[ ElevenLabs_Audio ]', '[ Descript ]', '[ Meta_Creator_Studio ]',
    '[ TikTok_Business_Suite ]', '[ Notion_Script_OS ]', '[ Epidemic_Sound ]',
  ]

  const process = [
    { n: '01', title: 'Strategy & Scripting', body: 'Deep dive into your offer, audience psychology, and competitor gap analysis. Scripts written and approved before production begins.', time: '5–7 days' },
    { n: '02', title: 'Production & Editing', body: 'Footage reviewed, rhythmically edited, colour-graded, and motion-graphics applied. Every cut decision is documented against retention data.', time: '7–10 days' },
    { n: '03', title: 'QA & Optimisation', body: 'Retention analysis on every delivered asset. Hook replaced if below threshold. No asset leaves without meeting the 65% projection.', time: '24–48 hrs' },
    { n: '04', title: 'Batch Delivery & Scheduling', body: 'Finalised assets delivered with a timed posting schedule, caption copy, and platform-specific metadata. Thirty assets. Ready to fire.', time: '48 hrs' },
  ]

  return (
    <main className="min-h-screen bg-[#0B0E14] text-[#F8FAFC]">
      {/* AEO structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Navbar />

      {/* ── Hero (Video Background) ──────────────────────────────────────────── */}
      <section className="relative pt-40 pb-32 px-4 overflow-hidden min-h-[90vh] flex items-center">
        {/* Blurred video background */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <VideoPlayer
            src="https://ik.imagekit.io/rqhbqqo2qx/15283259_1920_1080_60fps.mp4"
            filterStyle="saturate(0) blur(12px) brightness(0.18)"
          />
        </div>
        <div className="absolute inset-0 z-[1] pointer-events-none" style={{ background: 'linear-gradient(to bottom, rgba(11,14,20,0.3) 0%, rgba(11,14,20,0.7) 60%, #0B0E14 100%)' }} />

        <CreativeBackgroundEffects />

        <div className="relative z-10 max-w-6xl mx-auto w-full">
          {/* Division badge */}
          <div className="flex items-center gap-3 mb-10">
            <div
              className="flex items-center gap-2 px-4 py-2 rounded-full"
              style={{ border: `1px solid ${S.glowBorder}`, backgroundColor: S.glow, backdropFilter: 'blur(12px)' }}
            >
              <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: S.primary }} />
              <span className="text-[10px] uppercase tracking-[0.22em]" style={{ fontFamily: 'var(--font-mono)', color: S.primary }}>
                // LUMINEX — CREATIVE DIVISION
              </span>
            </div>
          </div>

          <h1
            className="text-5xl md:text-6xl lg:text-7xl font-black mb-8 leading-none tracking-tight"
            style={{ fontFamily: 'var(--font-heading)', letterSpacing: '-0.04em', maxWidth: '800px' }}
          >
            The{' '}
            <SilverText>Creative</SilverText>
            <br />Division.
          </h1>

          <p
            className="text-base md:text-lg leading-relaxed mb-10"
            style={{ fontFamily: 'var(--font-sans)', color: 'rgba(248,250,252,0.6)', maxWidth: '560px' }}
          >
            The demand-generation engine of the Luminex infrastructure. High-retention short-form video utilizing a compelling creative narrative — 
            built to clear the 65% retention threshold, trigger algorithmic distribution, and deliver a 
            measurable volume of warm inbound prospects into the Systems pipeline every month.
          </p>

          <p
            className="text-xs mb-12 uppercase tracking-widest"
            style={{ fontFamily: 'var(--font-mono)', color: 'rgba(203,213,225,0.5)' }}
          >
            // 30 assets / month — 65%+ retention target — 110% avg completion rate
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-start">
            <Link
              href="https://calendly.com/luminexsocial05/30min"
              target="_blank"
              rel="noopener noreferrer"
              id="creative-cta-primary"
              className="group relative inline-flex items-center gap-3 px-8 py-4 font-semibold uppercase tracking-widest transition-all hover:scale-105"
              style={{ fontFamily: 'var(--font-mono)', color: '#0B0E14' }}
            >
              <div className="absolute inset-0" style={{ backgroundColor: S.primary }} />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ backgroundColor: S.warm }} />
              <span className="relative z-10">Start The Creative Engine</span>
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="#process"
              id="creative-see-process"
              className="inline-flex items-center gap-2 px-6 py-4 text-sm uppercase tracking-widest transition-colors"
              style={{ fontFamily: 'var(--font-mono)', color: S.muted, border: `1px solid ${S.glowBorder}` }}
              onMouseEnter={e => (e.currentTarget.style.color = S.primary)}
              onMouseLeave={e => (e.currentTarget.style.color = S.muted)}
            >
              See The Process ↓
            </Link>
          </div>
        </div>
      </section>
      <div className="w-full h-px" style={{ backgroundColor: S.glowBorder }} />

      {/* ── Stats ───────────────────────────────────────────────────────────── */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-0">
          {[
            { val: 65, suf: '%+', label: '3-Second Retention Rate' },
            { val: 110, suf: '%+', label: 'Avg Video Completion' },
            { val: 30, suf: '/mo', label: 'Produced Assets' },
            { val: 48, suf: 'hr', label: 'Batch Turnaround' },
          ].map((s, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center p-8 text-center"
              style={{
                borderTop: `1px solid ${S.glowBorder}`,
                borderLeft: i > 0 ? `1px solid ${S.glowBorder}` : undefined,
              }}
            >
              <span
                className="text-4xl md:text-5xl font-black mb-2 tabular-nums"
                style={{ fontFamily: 'var(--font-heading)', color: S.primary }}
              >
                <Counter target={s.val} suffix={s.suf} />
              </span>
              <span className="text-[10px] uppercase tracking-widest" style={{ fontFamily: 'var(--font-mono)', color: 'rgba(248,250,252,0.4)' }}>
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      <div className="w-full h-px" style={{ backgroundColor: S.glowBorder }} />

      {/* ── Core Services ───────────────────────────────────────────────────── */}
      <section className="py-28 px-4">
        <div className="max-w-7xl mx-auto">
          <Tag label="// CORE_SERVICES: PRODUCTION" />
          <h2
            className="text-4xl md:text-5xl font-black text-center mb-4 tracking-tight"
            style={{ fontFamily: 'var(--font-heading)', letterSpacing: '-0.03em' }}
          >
            Four Production Pillars.
          </h2>
          <p
            className="text-base text-center max-w-2xl mx-auto mb-16 leading-relaxed"
            style={{ fontFamily: 'var(--font-sans)', color: 'rgba(248,250,252,0.5)' }}
          >
            Each pillar of the Creative division contributes to a single output: content that the algorithm 
            distributes and that viewers complete — generating warm inbound signal every week.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((svc) => (
              <div
                key={svc.id}
                className="group p-8 relative flex flex-col transition-all duration-300"
                style={{
                  backgroundColor: 'rgba(248,250,252,0.02)',
                  border: `1px solid ${S.glowBorder}`,
                  borderTop: `2px solid rgba(203,213,225,0.35)`,
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.backgroundColor = 'rgba(203,213,225,0.04)' }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.backgroundColor = 'rgba(248,250,252,0.02)' }}
              >
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-[10px] px-2 py-1 rounded uppercase tracking-widest" style={{ fontFamily: 'var(--font-mono)', color: '#0B0E14', backgroundColor: S.primary }}>
                    {svc.id}
                  </span>
                </div>

                <strong className="block text-lg font-bold mb-3" style={{ fontFamily: 'var(--font-heading)', color: '#F8FAFC' }}>
                  {svc.title}
                </strong>
                <p className="text-sm leading-relaxed flex-grow mb-6" style={{ fontFamily: 'var(--font-sans)', color: 'rgba(248,250,252,0.55)' }}>
                  {svc.body}
                </p>

                <div className="mt-auto pt-4" style={{ borderTop: `1px solid ${S.glowBorder}` }}>
                  <span className="text-[10px] uppercase tracking-widest" style={{ fontFamily: 'var(--font-mono)', color: S.primary }}>
                    {svc.metric}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="w-full h-px" style={{ backgroundColor: S.glowBorder }} />

      {/* ── Production Process ───────────────────────────────────────────────── */}
      <section id="process" className="py-28 px-4 relative overflow-hidden">
        {/* Subtle video wash */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <VideoPlayer
            src="https://ik.imagekit.io/rqhbqqo2qx/15283259_1920_1080_60fps.mp4"
            filterStyle="saturate(0) blur(20px) brightness(0.08)"
          />
        </div>
        <div className="absolute inset-0 z-[1] pointer-events-none bg-[#0B0E14]/80" />

        <div className="relative z-10 max-w-5xl mx-auto">
          <Tag label="// PRODUCTION_CYCLE" />
          <h2
            className="text-4xl md:text-5xl font-black text-center mb-4 tracking-tight"
            style={{ fontFamily: 'var(--font-heading)', letterSpacing: '-0.03em' }}
          >
            From Brief to{' '}
            <SilverText>Batch Delivery.</SilverText>
          </h2>
          <p
            className="text-base text-center max-w-xl mx-auto mb-20 leading-relaxed"
            style={{ fontFamily: 'var(--font-sans)', color: 'rgba(248,250,252,0.5)' }}
          >
            A deterministic 4-stage cycle. Every asset goes through every stage — no shortcuts, no guesswork.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((p, i) => (
              <div
                key={i}
                className="relative p-6 flex flex-col"
                style={{
                  backgroundColor: 'rgba(30,41,59,0.4)',
                  border: `1px solid ${S.glowBorder}`,
                  backdropFilter: 'blur(12px)',
                }}
              >
                {/* Step number */}
                <div
                  className="w-10 h-10 flex items-center justify-center mb-5"
                  style={{ border: `2px solid ${S.primary}`, backgroundColor: S.glow }}
                >
                  <span className="text-sm font-bold" style={{ fontFamily: 'var(--font-mono)', color: S.primary }}>{p.n}</span>
                </div>

                <strong className="block text-sm font-bold mb-3" style={{ fontFamily: 'var(--font-heading)', color: '#F8FAFC' }}>
                  {p.title}
                </strong>
                <p className="text-xs leading-relaxed flex-grow mb-4" style={{ fontFamily: 'var(--font-sans)', color: 'rgba(248,250,252,0.5)' }}>
                  {p.body}
                </p>
                <span className="text-[10px] uppercase tracking-widest" style={{ fontFamily: 'var(--font-mono)', color: S.muted }}>
                  {p.time}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="w-full h-px" style={{ backgroundColor: S.glowBorder }} />

      {/* ── AEO FAQ Block ───────────────────────────────────────────────────── */}
      <section className="py-28 px-4">
        <div className="max-w-4xl mx-auto">
          <Tag label="// AEO: ANSWER ENGINE OPTIMISED" />
          <h2
            className="text-4xl md:text-5xl font-black text-center mb-4 tracking-tight"
            style={{ fontFamily: 'var(--font-heading)', letterSpacing: '-0.03em' }}
          >
            Creative System Questions
          </h2>
          <p
            className="text-sm text-center mb-16"
            style={{ fontFamily: 'var(--font-mono)', color: 'rgba(203,213,225,0.5)' }}
          >
            // Answers formatted for LLM citation and AI-engine indexing
          </p>

          <div className="space-y-4">
            {faqSchema.mainEntity.map((q, i) => (
              <details
                key={i}
                style={{ border: `1px solid ${S.glowBorder}`, backgroundColor: 'rgba(248,250,252,0.02)' }}
              >
                <summary
                  className="flex items-center justify-between p-6 cursor-pointer list-none"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  <span className="text-sm font-semibold pr-4" style={{ color: '#F8FAFC' }}>
                    {q.name}
                  </span>
                  <span className="text-lg shrink-0" style={{ color: S.primary }}>+</span>
                </summary>
                <div className="px-6 pb-6">
                  <div className="pt-4" style={{ borderTop: `1px solid ${S.glowBorder}` }}>
                    <p className="text-sm leading-relaxed" style={{ fontFamily: 'var(--font-sans)', color: 'rgba(248,250,252,0.6)' }}>
                      {q.acceptedAnswer.text}
                    </p>
                  </div>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <div className="w-full h-px" style={{ backgroundColor: S.glowBorder }} />

      {/* ── Tech Stack ──────────────────────────────────────────────────────── */}
      <section className="py-24 px-4">
        <div className="max_w-5xl max-w-5xl mx-auto">
          <Tag label="// PRODUCTION_STACK" />
          <h2
            className="text-3xl font-black text-center mb-12 tracking-tight"
            style={{ fontFamily: 'var(--font-heading)', letterSpacing: '-0.03em' }}
          >
            Tools in the Stack
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((tag, i) => (
              <div
                key={i}
                className="px-5 py-2.5 text-xs uppercase tracking-widest rounded-full transition-all duration-200 cursor-default"
                style={{
                  fontFamily: 'var(--font-mono)',
                  color: S.muted,
                  backgroundColor: 'rgba(203,213,225,0.05)',
                  border: `1px solid ${S.glowBorder}`,
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = S.primary; (e.currentTarget as HTMLElement).style.borderColor = S.glowStrong }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = S.muted; (e.currentTarget as HTMLElement).style.borderColor = S.glowBorder }}
              >
                {tag}
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="w-full h-px" style={{ backgroundColor: S.glowBorder }} />

      {/* ── CTA ─────────────────────────────────────────────────────────────── */}
      <section className="py-32 px-4 relative overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <VideoPlayer
            src="https://ik.imagekit.io/rqhbqqo2qx/15283259_1920_1080_60fps.mp4"
            filterStyle="saturate(0) blur(16px) brightness(0.12)"
          />
        </div>
        <div className="absolute inset-0 z-[1] bg-[#0B0E14]/75 pointer-events-none" />
        <div className="absolute inset-0 z-[2] pointer-events-none" style={{ background: `radial-gradient(ellipse at center, ${S.glow} 0%, transparent 65%)` }} />

        <div className="max-w-3xl mx-auto text-center relative z-10">
          <Tag label="// CREATIVE: READY" />
          <h2
            className="text-4xl md:text-5xl font-black mb-6 tracking-tight"
            style={{ fontFamily: 'var(--font-heading)', letterSpacing: '-0.04em' }}
          >
            Your Audience.{' '}
            <SilverText>Our Engine.</SilverText>
          </h2>
          <p
            className="text-base mb-10 leading-relaxed mx-auto"
            style={{ fontFamily: 'var(--font-sans)', color: 'rgba(248,250,252,0.55)', maxWidth: '480px' }}
          >
            30 high-retention assets per month. Scripted, edited, and distributed — with every creative 
            decision traceable back to a measurable retention outcome.
          </p>
          <Link
            href="https://calendly.com/luminexsocial05/30min"
            target="_blank"
            rel="noopener noreferrer"
            id="creative-cta-footer"
            className="group relative inline-flex items-center gap-3 px-10 py-5 font-bold uppercase tracking-widest transition-transform hover:scale-105"
            style={{ fontFamily: 'var(--font-mono)', color: '#0B0E14' }}
          >
            <div className="absolute inset-0 transition-opacity duration-300" style={{ backgroundColor: S.primary }} />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ backgroundColor: S.warm }} />
            <span className="relative z-10">Start The Creative Engine</span>
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>

          {/* Cross-link to Systems */}
          <p className="mt-12 text-xs uppercase tracking-widest" style={{ fontFamily: 'var(--font-mono)', color: 'rgba(248,250,252,0.25)' }}>
            Need the backend to process this demand?{' '}
            <Link href="/systems" className="underline underline-offset-4 hover:text-[#6366F1] transition-colors" style={{ color: 'rgba(99,102,241,0.5)' }}>
              Systems Division →
            </Link>
          </p>
        </div>
      </section>

      <Footer />
    </main>
  )
}
