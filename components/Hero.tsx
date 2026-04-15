'use client'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 px-4 overflow-hidden">
      {/* Video Background with Motion Blur Aesthetic */}
      <div className="absolute inset-0 z-0">
        {/* Desaturated video montage simulation - using animated gradient layers */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, #0B0E14 0%, #1E293B 25%, #0B0E14 50%, #1E293B 75%, #0B0E14 100%)',
            backgroundSize: '400% 400%',
            animation: 'gradientShift 15s ease infinite',
          }}
        />
        {/* Motion blur overlay strips */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#F8FAFC]/30 to-transparent" style={{ filter: 'blur(2px)' }} />
          <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#6366F1]/40 to-transparent" style={{ filter: 'blur(3px)' }} />
          <div className="absolute top-3/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#F8FAFC]/20 to-transparent" style={{ filter: 'blur(2px)' }} />
        </div>
        {/* Dark overlay for contrast */}
        <div className="absolute inset-0 bg-[#0B0E14]/70" />
      </div>

      {/* Noise/Grain Texture Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.04] z-[1]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Radial Glow behind headline - 20% opacity */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1400px] h-[1400px] pointer-events-none z-[2]"
        style={{
          background: 'radial-gradient(circle, rgba(99, 102, 241, 0.20) 0%, transparent 50%)',
        }}
      />

      <div className="relative z-10 text-center max-w-5xl mx-auto">
        {/* Pre-header in JetBrains Mono */}
        <div className="mb-6">
          <p className="font-mono text-[#6366F1] text-sm md:text-base tracking-wider">
            // FOR FORWARD-THINKING FOUNDERS
          </p>
        </div>

        {/* Main Headline - Satoshi Black */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-[#F8FAFC] mb-8 leading-[1.1] tracking-tight">
          <span className="block text-balance">
            Scale Your Authority with
          </span>
          <span className="block text-balance">
            <span className="bg-gradient-to-r from-[#6366F1] to-[#A855F7] bg-clip-text text-transparent">Premium Content</span> &
          </span>
          <span className="block text-balance">
            Automated Systems That
          </span>
          <span className="block text-balance">
            <span className="text-[#2DD4BF]">Never Sleep.</span>
          </span>
        </h1>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          {/* Gradient Button */}
          <button 
            className="px-8 py-4 rounded-lg text-[#F8FAFC] font-semibold text-lg transition-all transform hover:scale-105"
            style={{
              background: 'linear-gradient(to right, #6366F1, #A855F7)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 0 30px rgba(99, 102, 241, 0.5), 0 0 60px rgba(168, 85, 247, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            Book a Discovery Call
          </button>
          {/* Ghost Button */}
          <button className="px-8 py-4 rounded-lg bg-transparent border border-[#F8FAFC]/30 text-[#F8FAFC] font-semibold text-lg hover:bg-[#F8FAFC]/5 hover:border-[#F8FAFC]/50 transition-all transform hover:scale-105">
            See Our Work
          </button>
        </div>
      </div>

      {/* Trust Bar */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <div className="bg-[#1E293B] border-t border-[#334155] py-5">
          <div className="max-w-4xl mx-auto px-4">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
              <div className="flex items-center gap-2">
                <span className="font-mono text-[#6366F1] text-sm font-bold">50M+</span>
                <span className="font-mono text-[#CBD5E1] text-sm">Views</span>
              </div>
              <span className="hidden sm:block font-mono text-[#475569]">//</span>
              <div className="flex items-center gap-2">
                <span className="font-mono text-[#A855F7] text-sm font-bold">24/7</span>
                <span className="font-mono text-[#CBD5E1] text-sm">Automation</span>
              </div>
              <span className="hidden sm:block font-mono text-[#475569]">//</span>
              <div className="flex items-center gap-2">
                <span className="font-mono text-[#2DD4BF] text-sm font-bold">Premium</span>
                <span className="font-mono text-[#CBD5E1] text-sm">Narrative</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </section>
  )
}
