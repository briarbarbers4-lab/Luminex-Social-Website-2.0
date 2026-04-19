'use client'

export default function CreativeBackgroundEffects() {
  return (
    <>
      <div
        className="absolute -top-40 -left-40 rounded-full pointer-events-none z-[2]"
        style={{
          width: '700px', height: '700px',
          background: 'radial-gradient(circle, rgba(203,213,225,0.06) 0%, transparent 65%)',
          filter: 'blur(80px)',
          animation: 'floatOrb 18s ease-in-out infinite',
        }}
      />
      <div
        className="absolute -bottom-40 -right-40 rounded-full pointer-events-none z-[2]"
        style={{
          width: '600px', height: '600px',
          background: 'radial-gradient(circle, rgba(203,213,225,0.04) 0%, transparent 65%)',
          filter: 'blur(60px)',
          animation: 'floatOrb 24s ease-in-out infinite reverse',
        }}
      />
      <style jsx>{`
        @keyframes floatOrb {
          0%   { transform: translate(0, 0) scale(1); }
          33%  { transform: translate(40px, -60px) scale(1.08); }
          66%  { transform: translate(-30px, 30px) scale(0.94); }
          100% { transform: translate(0, 0) scale(1); }
        }
      `}</style>
    </>
  )
}
