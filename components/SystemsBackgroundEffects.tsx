'use client'

export default function SystemsBackgroundEffects() {
  return (
    <>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(99,102,241,0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99,102,241,0.06) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />
      
      {/* Radial glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none"
        style={{ width: '900px', height: '500px', background: `radial-gradient(ellipse at top, rgba(99,102,241,0.15) 0%, transparent 65%)` }}
      />
    </>
  )
}
