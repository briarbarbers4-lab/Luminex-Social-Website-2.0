'use client'

export default function InfrastructureFooter() {
  return (
    <section className="py-24 px-4 bg-[#0B0E14]">
      <div className="max-w-5xl mx-auto">
        {/* Main Heading */}
        <h2
          className="text-6xl md:text-7xl font-black text-center mb-12"
          style={{
            fontFamily: 'var(--font-heading)',
            color: '#F1F5F9',
            letterSpacing: '-0.02em',
            lineHeight: '1.1',
          }}
        >
          Choose Both
        </h2>

        {/* Description */}
        <p
          className="text-lg text-center mb-12 max-w-2xl mx-auto"
          style={{
            color: 'rgba(248, 250, 252, 0.8)',
          }}
        >
          Stop choosing between premium creativity and intelligent automation. Get both with Luminex.
        </p>

        {/* CTA Button */}
        <div className="flex justify-center">
          <button
            className="px-10 py-5 rounded-lg font-bold text-lg transition-all transform hover:scale-105 active:scale-95 relative group overflow-hidden"
            style={{
              color: '#F8FAFC',
              border: '2px solid #CA8A04',
              background: 'rgba(202, 138, 4, 0.05)',
            }}
          >
            {/* Animated Pulse Border */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                background: 'radial-gradient(circle, rgba(202, 138, 4, 0.3) 0%, transparent 70%)',
                filter: 'blur(10px)',
              }}
            />

            {/* Button Content */}
            <span className="relative z-10 flex items-center gap-2">
              Let's Build Your Ecosystem
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>

            {/* Pulse Animation Background */}
            <style jsx>{`
              @keyframes pulse-border {
                0%, 100% {
                  box-shadow: 0 0 0 0 rgba(202, 138, 4, 0.4);
                }
                50% {
                  box-shadow: 0 0 0 10px rgba(202, 138, 4, 0);
                }
              }
            `}</style>
          </button>
        </div>

        {/* Sub-text */}
        <p
          className="text-center text-xs mt-8 uppercase tracking-widest"
          style={{
            fontFamily: 'var(--font-mono)',
            color: '#6366F1',
          }}
        >
          // Schedule a consultation • No obligation
        </p>
      </div>
    </section>
  )
}
