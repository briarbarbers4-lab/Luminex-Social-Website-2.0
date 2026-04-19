'use client'

import { useEffect, useState } from 'react'

const I = {
  primary: '#6366F1',
  glowBorder: 'rgba(99,102,241,0.25)',
  gold: '#CA8A04',
}

export default function Terminal({ lines }: { lines: string[] }) {
  const [step, setStep] = useState(0)
  
  useEffect(() => {
    if (step >= lines.length) return
    const t = setTimeout(() => setStep(s => s + 1), 900)
    return () => clearTimeout(t)
  }, [step, lines.length])
  
  return (
    <div
      className="p-5 space-y-2"
      style={{ backgroundColor: 'rgba(11,14,20,0.9)', border: `1px solid ${I.glowBorder}`, fontFamily: 'var(--font-mono)' }}
    >
      <p className="text-[10px] uppercase tracking-widest mb-3" style={{ color: 'rgba(99,102,241,0.5)' }}>
        // LUMINEX_SYSTEMS — TERMINAL OUTPUT
      </p>
      {lines.slice(0, step).map((l, i) => (
        <p key={i} className="text-xs leading-relaxed" style={{ color: I.primary }}>
          <span style={{ color: I.gold, marginRight: '8px' }}>›</span>{l}
        </p>
      ))}
      {step < lines.length && (
        <p className="text-xs" style={{ color: I.primary }}>
          <span style={{ color: I.gold, marginRight: '8px' }}>›</span>
          <span className="inline-block w-2 h-3.5 align-middle bg-[#6366F1] animate-pulse" />
        </p>
      )}
    </div>
  )
}
