'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { useEffect, useState, useRef } from 'react'
import dynamic from 'next/dynamic'

const Terminal = dynamic(() => import('@/components/Terminal'), { ssr: false, loading: () => <div className="p-5" style={{ backgroundColor: 'rgba(11,14,20,0.9)', border: `1px solid rgba(99,102,241,0.25)` }}><p className="text-[10px] animate-pulse uppercase tracking-widest" style={{ color: 'rgba(99,102,241,0.5)' }}>// LOADING TERMINAL...</p></div> })
const SystemsBackgroundEffects = dynamic(() => import('@/components/SystemsBackgroundEffects'), { ssr: false })

// ── Design tokens: Neural Indigo ─────────────────────────────────────────────
const I = {
  primary: '#6366F1',
  deep: '#4C1D95',
  glow: 'rgba(99,102,241,0.15)',
  glowBorder: 'rgba(99,102,241,0.25)',
  glowStrong: 'rgba(99,102,241,0.6)',
  gold: '#CA8A04',
}

// ── Shared section tag ───────────────────────────────────────────────────────
const Tag = ({ label }: { label: string }) => (
  <div className="flex items-center justify-center gap-3 mb-8">
    <span style={{ color: I.primary }}>●</span>
    <span
      className="text-[10px] px-5 py-2.5 rounded-full uppercase tracking-[0.22em]"
      style={{ fontFamily: 'var(--font-mono)', color: I.primary, backgroundColor: I.glow, border: `1px solid ${I.glowBorder}` }}
    >
      {label}
    </span>
    <span style={{ color: I.primary }}>●</span>
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


export default function SystemsPage() {

  // AEO / FAQ structured data
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is an agentic workflow in business automation?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'An agentic workflow is an AI-driven execution sequence where autonomous agents take independent actions — enriching leads, dispatching outreach, booking calls, and routing CRM updates — based on trigger events, without requiring human instruction at each step. Unlike rule-based automation, agentic workflows adapt to context and handle edge cases dynamically.',
        },
      },
      {
        '@type': 'Question',
        name: 'How does n8n enterprise automation work?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'n8n is a self-hosted workflow automation platform that connects your CRM, communication tools, and AI models through event-driven pipelines. At Luminex Systems, we use n8n as the orchestration layer — defining triggers (webhook, schedule, or AI signal), routing logic, and output actions across tools like OpenAI, Vapi, Make.com, and your CRM. Execution error rate: 0.00%.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is an AI voice agent and how does it qualify leads?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'An AI voice agent is a sub-500ms-latency conversational AI built on platforms like Vapi or Retell AI that handles inbound and outbound calls autonomously. Luminex deploys voice agents to run structured qualification sequences — budget, timeline, pain point — and book discovery calls without human involvement. No-show rate drops below 12% through AI pre-call confirmation.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the difference between automation and AI agents?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Standard automation follows fixed if-then logic: if X happens, do Y. AI agents operate on goals — they determine the best sequence of actions to achieve an outcome based on available context. At Luminex Systems, automation (n8n pipelines) handles deterministic routing, while AI agents (LLM-powered chatbots, voice agents, AI employees) handle dynamic, context-sensitive interactions.',
        },
      },
      {
        '@type': 'Question',
        name: 'How long does it take to deploy the Luminex Systems infrastructure?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Day 1: System onboarding and architecture planning. Day 7: First content batch initiated. Day 14: n8n pipelines live, webhook routing active. Day 21: AI agents deployed to DMs and voice channels. Day 30: Full ecosystem operational — all infrastructure modules firing simultaneously.',
        },
      },
    ],
  }

  const services = [
    {
      id: 'SYS_01',
      title: 'AI Voice Agents',
      stack: 'Vapi / Retell AI',
      body: 'Sub-500ms-latency voice infrastructure that handles outbound prospecting and inbound pre-qualification across time zones. Runs continuously. No hold times. No missed calls.',
      metric: '// LATENCY: < 500ms',
      detail: 'Qualification, booking confirmation, and pre-call attendance — all handled autonomously.',
    },
    {
      id: 'SYS_02',
      title: 'n8n Enterprise Pipelines',
      stack: 'n8n / Make.com',
      body: 'Complex event-driven workflows connecting your CRM, communication stack, and AI models into a single self-correcting data loop. Every trigger is mapped. Every output is logged.',
      metric: '// EXEC_ERRORS: 0.00%',
      detail: 'CRM updates, Slack alerts, contract triggers, onboarding sequences — coordinated as one system.',
    },
    {
      id: 'SYS_03',
      title: 'Intelligent DM Chatbots',
      stack: 'OpenAI / Anthropic',
      body: 'LLM-trained agents intercept Instagram and WhatsApp DMs, qualify intent, and route high-fit prospects to booking flows without human input — even at 2AM and across 400 simultaneous conversations.',
      metric: '// RESP_TIME: INSTANT',
      detail: 'Context-aware qualification, objection handling, and calendar booking — fully automated.',
    },
    {
      id: 'SYS_04',
      title: 'Autonomous AI Employees',
      stack: 'Custom LLM Agents',
      body: 'AI agents that execute multi-step research and personalised outreach sequences — finding prospects, writing context-aware messages, and sending them at statistically optimal windows.',
      metric: '// UPTIME: 24/7/365',
      detail: 'Outbound prospecting that scales to thousands of contacts per week without headcount.',
    },
  ]

  const techStack = [
    '[ n8n_Core ]', '[ Vapi_Voice ]', '[ Retell_AI ]', '[ OpenAI_GPT-4o ]',
    '[ Claude_3.7 ]', '[ Make.com ]', '[ Meta_Graph_API ]', '[ ElevenLabs_TTS ]',
    '[ Webhook_Router ]', '[ CRM_Connector ]', '[ Twilio_SMS ]', '[ Calendly_API ]',
  ]

  const specTable = [
    ['Pipeline Execution Errors', '0.00%'],
    ['Voice Agent Latency', '< 500ms'],
    ['Agent Uptime', '24 / 7 / 365'],
    ['Lead-to-Book Rate', '> 35%'],
    ['No-Show Reduction', '≤ 12%'],
    ['Deployment Timeline', '14 days to live'],
  ]

  const terminalLines = [
    'INIT SYSTEM_AUDIT → SCANNING CURRENT INFRASTRUCTURE...',
    'AGENT_CORE: VOICE_AGENT LOADED → STATUS: STANDBY',
    'N8N_WORKFLOW: PIPELINE_01 → CONNECTED | ERRORS: 0',
    'DM_BOT: INSTAGRAM_CONNECTOR → ACTIVE | RESP_TIME: 280ms',
    'AI_EMPLOYEE: OUTREACH_AGENT → QUEUE: 1,847 CONTACTS',
    'ALL SYSTEMS OPERATIONAL → READY FOR DEPLOYMENT',
  ]

  return (
    <main className="min-h-screen bg-[#0B0E14] text-[#F8FAFC]">
      {/* AEO structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Navbar />

      {/* ── Hero ────────────────────────────────────────────────────────────── */}
      <section className="relative pt-40 pb-28 px-4 overflow-hidden">
        <SystemsBackgroundEffects />

        {/* Corner accent lines */}
        <div className="absolute top-32 left-8 w-24 h-px" style={{ backgroundColor: I.primary, opacity: 0.4 }} />
        <div className="absolute top-32 left-8 w-px h-24" style={{ backgroundColor: I.primary, opacity: 0.4 }} />
        <div className="absolute top-32 right-8 w-24 h-px" style={{ backgroundColor: I.primary, opacity: 0.4 }} />
        <div className="absolute top-32 right-8 w-px h-24" style={{ backgroundColor: I.primary, opacity: 0.4 }} />

        <div className="relative z-10 max-w-6xl mx-auto">
          {/* Division badge */}
          <div className="flex items-center gap-3 mb-10">
            <div
              className="flex items-center gap-2 px-4 py-2"
              style={{ border: `1px solid ${I.glowBorder}`, backgroundColor: 'rgba(99,102,241,0.06)' }}
            >
              <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: I.primary }} />
              <span className="text-[10px] uppercase tracking-[0.22em]" style={{ fontFamily: 'var(--font-mono)', color: I.primary }}>
                // LUMINEX — SYSTEMS DIVISION
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h1
                className="text-5xl md:text-6xl lg:text-7xl font-black mb-8 leading-none tracking-tight"
                style={{ fontFamily: 'var(--font-heading)', letterSpacing: '-0.04em' }}
              >
                The{' '}
                <span
                  style={{
                    background: `linear-gradient(135deg, ${I.primary}, #A855F7)`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  Systems
                </span>
                <br />Division.
              </h1>
              <p
                className="text-base md:text-lg leading-relaxed mb-8"
                style={{ fontFamily: 'var(--font-sans)', color: 'rgba(248,250,252,0.6)', maxWidth: '520px' }}
              >
                The operational skeleton of the Luminex infrastructure. AI voice agents, n8n enterprise 
                pipelines, autonomous DM chatbots, and AI employees — running continuously in the background, 
                converting inbound attention into qualified pipeline without human input.
              </p>
              <div className="flex items-center gap-2 mb-10" style={{ fontFamily: 'var(--font-mono)' }}>
                <span className="text-xs uppercase tracking-widest" style={{ color: 'rgba(99,102,241,0.6)' }}>
                  // UPTIME: 24/7/365 — EXEC_ERRORS: 0.00% — LATENCY: &lt;500ms
                </span>
              </div>
              <Link
                href="https://calendly.com/luminexsocial05/30min"
              target="_blank"
              rel="noopener noreferrer"
                id="systems-cta-primary"
                className="group relative inline-flex items-center gap-3 px-8 py-4 font-semibold uppercase tracking-widest transition-all hover:scale-105"
                style={{ fontFamily: 'var(--font-mono)', color: '#F8FAFC' }}
              >
                <div className="absolute inset-0 border-2" style={{ borderColor: I.primary }} />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ backgroundColor: I.glow }} />
                <span className="relative z-10">Activate Your System</span>
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            {/* Terminal panel */}
            <Terminal lines={terminalLines} />
          </div>
        </div>
      </section>

      <div className="w-full h-px" style={{ backgroundColor: I.glowBorder }} />

      {/* ── Stats ───────────────────────────────────────────────────────────── */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-0">
          {[
            { val: 500, suf: 'ms', label: 'Max Voice Latency' },
            { val: 0, suf: '.00%', label: 'Pipeline Exec Errors' },
            { val: 35, suf: '%+', label: 'Lead-to-Book Rate' },
            { val: 14, suf: ' days', label: 'Full Deployment' },
          ].map((s, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center p-8 text-center"
              style={{
                borderTop: `1px solid ${I.glowBorder}`,
                borderLeft: i > 0 ? `1px solid ${I.glowBorder}` : undefined,
                backgroundColor: i % 2 === 0 ? 'rgba(99,102,241,0.03)' : 'transparent',
              }}
            >
              <span
                className="text-4xl md:text-5xl font-black mb-2 tabular-nums"
                style={{ fontFamily: 'var(--font-heading)', color: I.primary }}
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

      <div className="w-full h-px" style={{ backgroundColor: I.glowBorder }} />

      {/* ── Core Services ───────────────────────────────────────────────────── */}
      <section className="py-28 px-4">
        <div className="max-w-7xl mx-auto">
          <Tag label="// CORE_SERVICES: ACTIVE" />
          <h2
            className="text-4xl md:text-5xl font-black text-center mb-4 tracking-tight"
            style={{ fontFamily: 'var(--font-heading)', letterSpacing: '-0.03em' }}
          >
            Four Infrastructure Modules.
          </h2>
          <p
            className="text-base text-center max-w-2xl mx-auto mb-16 leading-relaxed"
            style={{ fontFamily: 'var(--font-sans)', color: 'rgba(248,250,252,0.5)' }}
          >
            Each module operates independently. Together, they form a closed-loop autonomous architecture 
            that runs without human intervention at any node.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((svc) => (
              <div
                key={svc.id}
                className="group p-8 relative flex flex-col transition-all duration-300"
                style={{
                  backgroundColor: 'rgba(30,41,59,0.3)',
                  border: `1px solid ${I.glowBorder}`,
                  borderTop: `1px solid rgba(99,102,241,0.4)`,
                }}
                onMouseEnter={e => (e.currentTarget.style.backgroundColor = 'rgba(99,102,241,0.06)')}
                onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'rgba(30,41,59,0.3)')}
              >
                {/* Status dot */}
                <div className="absolute top-5 right-5 w-2 h-2 rounded-full" style={{ backgroundColor: '#2DD4BF', boxShadow: '0 0 8px rgba(45,212,191,0.6)' }} />

                <div className="flex items-center gap-3 mb-5">
                  <span className="text-[10px] px-2 py-1 uppercase tracking-widest" style={{ fontFamily: 'var(--font-mono)', color: I.primary, backgroundColor: I.glow, border: `1px solid ${I.glowBorder}` }}>
                    {svc.id}
                  </span>
                  <span className="text-[10px] uppercase tracking-widest" style={{ fontFamily: 'var(--font-mono)', color: 'rgba(202,138,4,0.7)' }}>
                    {svc.stack}
                  </span>
                </div>

                <h3 className="text-lg font-bold mb-3" style={{ fontFamily: 'var(--font-heading)', color: '#F8FAFC' }}>
                  {svc.title}
                </h3>
                <p className="text-sm leading-relaxed mb-4 flex-grow" style={{ fontFamily: 'var(--font-sans)', color: 'rgba(248,250,252,0.55)' }}>
                  {svc.body}
                </p>
                <p className="text-xs leading-relaxed mb-6" style={{ fontFamily: 'var(--font-sans)', color: 'rgba(248,250,252,0.35)' }}>
                  {svc.detail}
                </p>

                <div className="mt-auto pt-4" style={{ borderTop: `1px solid ${I.glowBorder}` }}>
                  <span className="text-[10px] uppercase tracking-widest" style={{ fontFamily: 'var(--font-mono)', color: I.primary }}>
                    {svc.metric}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="w-full h-px" style={{ backgroundColor: I.glowBorder }} />

      {/* ── AEO FAQ Block ───────────────────────────────────────────────────── */}
      <section className="py-28 px-4">
        <div className="max-w-4xl mx-auto">
          <Tag label="// AEO: ANSWER ENGINE OPTIMISED" />
          <h2
            className="text-4xl md:text-5xl font-black text-center mb-4 tracking-tight"
            style={{ fontFamily: 'var(--font-heading)', letterSpacing: '-0.03em' }}
          >
            Common System Questions
          </h2>
          <p
            className="text-sm text-center mb-16"
            style={{ fontFamily: 'var(--font-mono)', color: 'rgba(99,102,241,0.6)' }}
          >
            // Answers formatted for LLM citation and AI-engine indexing
          </p>

          <div className="space-y-4">
            {faqSchema.mainEntity.map((q, i) => (
              <details
                key={i}
                className="group"
                style={{ border: `1px solid ${I.glowBorder}`, backgroundColor: 'rgba(30,41,59,0.3)' }}
              >
                <summary
                  className="flex items-center justify-between p-6 cursor-pointer list-none"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  <span className="text-sm font-semibold pr-4" style={{ color: '#F8FAFC' }}>
                    {q.name}
                  </span>
                  <span className="text-lg shrink-0" style={{ color: I.primary }}>+</span>
                </summary>
                <div className="px-6 pb-6">
                  <div className="pt-4" style={{ borderTop: `1px solid ${I.glowBorder}` }}>
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

      <div className="w-full h-px" style={{ backgroundColor: I.glowBorder }} />

      {/* ── Tech Stack ──────────────────────────────────────────────────────── */}
      <section className="py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <Tag label="// INFRASTRUCTURE_STACK" />
          <h2
            className="text-3xl md:text-4xl font-black text-center mb-12 tracking-tight"
            style={{ fontFamily: 'var(--font-heading)', letterSpacing: '-0.03em' }}
          >
            Tools in the Stack
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((tag, i) => (
              <div
                key={i}
                className="px-5 py-2.5 text-xs uppercase tracking-widest transition-colors duration-200 cursor-default hover:border-opacity-100"
                style={{
                  fontFamily: 'var(--font-mono)',
                  color: '#E2E8F0',
                  backgroundColor: 'rgba(30,41,59,0.5)',
                  border: `1px solid ${I.glowBorder}`,
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = I.primary; (e.currentTarget as HTMLElement).style.borderColor = I.glowStrong }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = '#E2E8F0'; (e.currentTarget as HTMLElement).style.borderColor = I.glowBorder }}
              >
                {tag}
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="w-full h-px" style={{ backgroundColor: I.glowBorder }} />

      {/* ── Specifications Table ─────────────────────────────────────────────── */}
      <section className="py-24 px-4">
        <div className="max-w-3xl mx-auto">
          <Tag label="// SYSTEM_SPECS" />
          <h2
            className="text-3xl font-black text-center mb-12 tracking-tight"
            style={{ fontFamily: 'var(--font-heading)', letterSpacing: '-0.03em' }}
          >
            Performance Guarantees
          </h2>
          <table className="w-full text-left border-collapse" style={{ border: `1px solid ${I.glowBorder}`, backgroundColor: 'rgba(30,41,59,0.4)' }}>
            <thead>
              <tr style={{ borderBottom: `1px solid ${I.glowBorder}` }}>
                <th className="p-5 text-xs uppercase tracking-widest" style={{ fontFamily: 'var(--font-mono)', color: 'rgba(248,250,252,0.5)' }}>Parameter</th>
                <th className="p-5 text-xs uppercase tracking-widest" style={{ fontFamily: 'var(--font-mono)', color: I.primary, borderLeft: `1px solid ${I.glowBorder}` }}>Systems Division</th>
              </tr>
            </thead>
            <tbody style={{ fontFamily: 'var(--font-mono)' }}>
              {specTable.map(([param, val], i) => (
                <tr key={i} style={{ borderBottom: `1px solid rgba(99,102,241,0.08)` }}>
                  <td className="p-5 text-sm" style={{ color: 'rgba(248,250,252,0.6)' }}>{param}</td>
                  <td className="p-5 text-sm font-semibold" style={{ color: I.primary, borderLeft: `1px solid ${I.glowBorder}` }}>{val}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <div className="w-full h-px" style={{ backgroundColor: I.glowBorder }} />

      {/* ── CTA ─────────────────────────────────────────────────────────────── */}
      <section className="py-32 px-4 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: `radial-gradient(ellipse at center, ${I.glow} 0%, transparent 65%)` }} />
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <Tag label="// DEPLOY: READY" />
          <h2
            className="text-4xl md:text-5xl font-black mb-6 tracking-tight"
            style={{ fontFamily: 'var(--font-heading)', letterSpacing: '-0.04em' }}
          >
            Your Backend.{' '}
            <span style={{ color: I.primary }}>Our Infrastructure.</span>
          </h2>
          <p
            className="text-base mb-10 leading-relaxed"
            style={{ fontFamily: 'var(--font-sans)', color: 'rgba(248,250,252,0.55)', maxWidth: '480px', margin: '0 auto 2.5rem' }}
          >
            System infrastructure deployed and live within 14 days. 
            The audit maps your current stack against our pipeline and identifies the exact failure points.
          </p>
          <Link
            href="https://calendly.com/luminexsocial05/30min"
              target="_blank"
              rel="noopener noreferrer"
            id="systems-cta-footer"
            className="group relative inline-flex items-center gap-3 px-10 py-5 font-bold uppercase tracking-widest text-[#F8FAFC] transition-transform hover:scale-105"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            <div className="absolute inset-0 border-2" style={{ borderColor: I.primary }} />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ backgroundColor: I.glow }} />
            <span className="relative z-10">Request System Audit</span>
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>

          {/* Cross-link to Creative */}
          <p className="mt-12 text-xs uppercase tracking-widest" style={{ fontFamily: 'var(--font-mono)', color: 'rgba(248,250,252,0.25)' }}>
            Looking for the demand side?{' '}
            <Link href="/creative" className="underline underline-offset-4 hover:text-[#CBD5E1] transition-colors" style={{ color: 'rgba(203,213,225,0.5)' }}>
              Creative Division →
            </Link>
          </p>
        </div>
      </section>

      <Footer />
    </main>
  )
}
