'use client'

import { useEffect, useState } from 'react'

export default function AIInfrastructure() {
  // Custom terminal string to look alive
  const terminalLog = "[ STATUS ] DEPLOYING N8N_WORKFLOW... DONE | VOICE_AGENT_CORE... ACTIVE | LATENCY... 120ms"
  const [displayText, setDisplayText] = useState('')
  const [showCursor, setShowCursor] = useState(true)

  // Terminal typing effect
  useEffect(() => {
    let currentIndex = 0
    const typingInterval = setInterval(() => {
      if (currentIndex <= terminalLog.length) {
        setDisplayText(terminalLog.slice(0, currentIndex))
        currentIndex++
      } else {
        clearInterval(typingInterval)
      }
    }, 40) // Typing speed

    return () => clearInterval(typingInterval)
  }, [terminalLog])

  // Cursor blink
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setShowCursor(prev => !prev)
    }, 500)
    return () => clearInterval(blinkInterval)
  }, [])

  const col1Items = ['AI Voice Agents (Vapi/Retell)', '24/7 Intelligent Chatbots']
  const col2Items = ['Custom n8n Enterprise Workflows', 'Autonomous AI Agents']
  const col3Items = ['Workflow Optimization', 'Custom Web Infrastructure']

  return (
    <section className="py-24 px-4 relative overflow-hidden" style={{ backgroundColor: '#0B0E14' }}>
      {/* Background Technical Grid Overlay */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: `linear-gradient(rgba(30, 41, 59, 0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(30, 41, 59, 0.4) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />

      {/* Radial Background Glow for depth */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-[1]"
        style={{
          width: '800px',
          height: '800px',
          background: 'radial-gradient(circle, rgba(99, 102, 241, 0.05) 0%, transparent 60%)',
          filter: 'blur(60px)',
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Tag */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <span className="text-lg" style={{ color: '#6366F1' }}>●</span>
          <span
            className="text-sm font-medium px-6 py-3 rounded-full uppercase tracking-widest"
            style={{
              color: '#6366F1',
              backgroundColor: 'rgba(99, 102, 241, 0.05)',
              border: '1px solid rgba(99, 102, 241, 0.2)',
              fontFamily: 'var(--font-sans)',
            }}
          >
            AI AUTOMATION
          </span>
          <span className="text-lg" style={{ color: '#6366F1' }}>●</span>
        </div>

        {/* Main Heading */}
        <h2
          className="text-5xl md:text-6xl font-black mb-20 text-center"
          style={{
            fontFamily: 'var(--font-heading)',
            color: '#F8FAFC',
            letterSpacing: '-0.04em', // Tightened explicitly
          }}
        >
          Engineered For Absolute Precision
        </h2>

        {/* 3-Column Systems Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">



          {/* FRONT-END INTERACTION Column */}
          <div className="relative z-20 space-y-6">
            <p
              className="text-[13px] font-bold uppercase tracking-widest text-[#F8FAFC]"
              style={{
                fontFamily: 'var(--font-mono)',
              }}
            >
              [ FRONT-END INTERACTION ]
            </p>
            {col1Items.map((item, idx) => (
              <div
                key={idx}
                className="relative group p-6 rounded-lg transition-all overflow-hidden"
                style={{
                  backgroundColor: 'rgba(30, 41, 59, 0.4)',
                  backdropFilter: 'blur(20px)',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
                  borderTop: '1px solid rgba(248, 250, 252, 0.15)',
                  borderLeft: '1px solid rgba(248, 250, 252, 0.15)',
                  borderRight: '1px solid transparent',
                  borderBottom: '1px solid transparent',
                }}
              >
                {/* ID Tag */}
                <span
                  className="absolute bottom-2 right-3 text-[10px]"
                  style={{ fontFamily: 'var(--font-mono)', color: 'rgba(99,102,241,0.5)' }}
                >
                  // SYS_1{idx + 1}
                </span>

                <div
                  className="absolute top-4 right-4 w-1.5 h-1.5 rounded-full"
                  style={{ backgroundColor: '#2DD4BF', boxShadow: '0 0 8px rgba(45,212,191,0.5)' }}
                />

                <p className="text-[15px] font-medium text-[#F8FAFC]" style={{ fontFamily: 'var(--font-sans)' }}>
                  {item}
                </p>
              </div>
            ))}
          </div>

          {/* BACKEND EXECUTION Column */}
          <div className="relative z-20 space-y-6">
            <p
              className="text-[13px] font-bold uppercase tracking-widest text-[#F8FAFC]"
              style={{
                fontFamily: 'var(--font-mono)',
              }}
            >
              [ BACKEND EXECUTION ]
            </p>
            {col2Items.map((item, idx) => (
              <div
                key={idx}
                className="relative group p-6 rounded-lg transition-all overflow-hidden"
                style={{
                  backgroundColor: 'rgba(30, 41, 59, 0.4)',
                  backdropFilter: 'blur(20px)',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
                  borderTop: '1px solid rgba(248, 250, 252, 0.15)',
                  borderLeft: '1px solid rgba(248, 250, 252, 0.15)',
                  borderRight: '1px solid transparent',
                  borderBottom: '1px solid transparent',
                }}
              >
                {/* ID Tag */}
                <span
                  className="absolute bottom-2 right-3 text-[10px]"
                  style={{ fontFamily: 'var(--font-mono)', color: 'rgba(99,102,241,0.5)' }}
                >
                  // SYS_2{idx + 1}
                </span>

                <div
                  className="absolute top-4 right-4 w-1.5 h-1.5 rounded-full"
                  style={{ backgroundColor: '#2DD4BF', boxShadow: '0 0 8px rgba(45,212,191,0.5)' }}
                />

                <p className="text-[15px] font-medium text-[#F8FAFC]" style={{ fontFamily: 'var(--font-sans)' }}>
                  {item}
                </p>
              </div>
            ))}
          </div>

          {/* SYSTEM ECOSYSTEM Column */}
          <div className="relative z-20 space-y-6">
            <p
              className="text-[13px] font-bold uppercase tracking-widest text-[#F8FAFC]"
              style={{
                fontFamily: 'var(--font-mono)',
              }}
            >
              [ SYSTEM ECOSYSTEM ]
            </p>
            {col3Items.map((item, idx) => (
              <div
                key={idx}
                className="relative group p-6 rounded-lg transition-all overflow-hidden"
                style={{
                  backgroundColor: 'rgba(30, 41, 59, 0.4)',
                  backdropFilter: 'blur(20px)',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
                  borderTop: '1px solid rgba(248, 250, 252, 0.15)',
                  borderLeft: '1px solid rgba(248, 250, 252, 0.15)',
                  borderRight: '1px solid transparent',
                  borderBottom: '1px solid transparent',
                }}
              >
                {/* ID Tag */}
                <span
                  className="absolute bottom-2 right-3 text-[10px]"
                  style={{ fontFamily: 'var(--font-mono)', color: 'rgba(99,102,241,0.5)' }}
                >
                  // SYS_3{idx + 1}
                </span>

                <div
                  className="absolute top-4 right-4 w-1.5 h-1.5 rounded-full"
                  style={{ backgroundColor: '#2DD4BF', boxShadow: '0 0 8px rgba(45,212,191,0.5)' }}
                />

                <p className="text-[15px] font-medium text-[#F8FAFC]" style={{ fontFamily: 'var(--font-sans)' }}>
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Terminal Footer */}
        <div className="mt-24 pt-6 border-t" style={{ borderColor: 'rgba(30, 41, 59, 0.6)' }}>
          <div
            className="flex items-center px-6 py-4 rounded-lg w-full"
            style={{
              backgroundColor: 'rgba(11, 14, 20, 0.8)',
              border: '1px solid rgba(99, 102, 241, 0.2)',
              boxShadow: 'inset 0 2px 15px rgba(0,0,0,0.5)',
            }}
          >
            <p
              className="text-xs sm:text-sm"
              style={{
                fontFamily: 'var(--font-mono)',
                color: '#6366F1', // Neural Indigo
                letterSpacing: '0.05em',
              }}
            >
              {displayText}
              <span className={`inline-block w-2.5 h-3.5 ml-1 align-middle bg-[#6366F1] ${showCursor ? 'opacity-100' : 'opacity-0'}`} />
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
