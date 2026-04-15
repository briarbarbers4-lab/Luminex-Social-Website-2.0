export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 px-4 overflow-hidden">
      {/* Noise/Grain Texture Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Radial Glow behind headline */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, transparent 50%)',
        }}
      />

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Main Headline */}
        <h1 className="text-5xl md:text-7xl font-bold text-[#F8FAFC] mb-6 leading-tight">
          <span className="block text-balance">
            Premium Content.
          </span>
          <span className="block text-balance">
            <span className="text-[#6366F1]">Intelligent</span> Systems.
          </span>
        </h1>

        {/* Code Comment Subline */}
        <div className="mb-8">
          <p className="font-mono text-[#CBD5E1] text-sm md:text-base leading-relaxed">
            // Built for brands that demand both.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <button 
            className="px-8 py-3 rounded-lg text-[#F8FAFC] font-semibold transition-all transform hover:scale-105"
            style={{
              background: 'linear-gradient(to right, #6366F1, #A855F7)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 0 24px rgba(99, 102, 241, 0.5), 0 0 48px rgba(168, 85, 247, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            Book a Discovery Call
          </button>
          <button className="px-8 py-3 rounded-lg bg-transparent border border-[#6366F1] text-[#6366F1] font-semibold hover:bg-[#6366F1]/10 transition-all transform hover:scale-105">
            See Our Work
          </button>
        </div>
      </div>

      {/* Client Logo Marquee */}
      <div className="w-full bg-[#1E293B] border-y border-[#334155] py-6 mt-12">
        <div className="overflow-hidden">
          <div className="flex animate-scroll gap-12 whitespace-nowrap">
            {/* Duplicate items for seamless loop */}
            {[...Array(2)].map((_, idx) => (
              <div key={idx} className="flex gap-12">
                <div className="flex items-center gap-3 text-[#F8FAFC]/60 font-mono text-xs uppercase tracking-widest min-w-max">
                  <div className="w-8 h-8 rounded bg-[#6366F1]/20 flex items-center justify-center text-[#6366F1]">●</div>
                  TechBrand Co
                </div>
                <div className="flex items-center gap-3 text-[#F8FAFC]/60 font-mono text-xs uppercase tracking-widest min-w-max">
                  <div className="w-8 h-8 rounded bg-[#A855F7]/20 flex items-center justify-center text-[#A855F7]">●</div>
                  Creative Studio
                </div>
                <div className="flex items-center gap-3 text-[#F8FAFC]/60 font-mono text-xs uppercase tracking-widest min-w-max">
                  <div className="w-8 h-8 rounded bg-[#2DD4BF]/20 flex items-center justify-center text-[#2DD4BF]">●</div>
                  AI Ventures
                </div>
                <div className="flex items-center gap-3 text-[#F8FAFC]/60 font-mono text-xs uppercase tracking-widest min-w-max">
                  <div className="w-8 h-8 rounded bg-[#6366F1]/20 flex items-center justify-center text-[#6366F1]">●</div>
                  Digital Labs
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
