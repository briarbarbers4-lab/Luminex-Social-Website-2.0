'use client'

export default function VideoCards() {
  const videos = Array.from({ length: 7 }, (_, i) => ({
    id: i + 1,
    title: `Reel ${i + 1}`,
  }))

  return (
    <section className="py-24 px-4 bg-[#0B0E14] overflow-hidden">
      <div className="w-full">
        {/* Continuous scrolling carousel */}
        <div className="relative">
          {/* Left fade gradient */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0B0E14] to-transparent z-10 pointer-events-none" />
          {/* Right fade gradient */}
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0B0E14] to-transparent z-10 pointer-events-none" />

          <div className="flex gap-6 animate-scroll-left">
            {[...videos, ...videos].map((video, idx) => (
              <div
                key={idx}
                className="shrink-0 w-56 h-96 rounded-2xl overflow-hidden bg-[#1E293B] border border-[#334155] shadow-lg hover:border-[#6366F1] transition-all duration-300 group cursor-pointer hover:shadow-[0_0_30px_rgba(99,102,241,0.3)]"
              >
                {/* Video container with placeholder */}
                <div className="w-full h-full bg-gradient-to-b from-[#1E293B] to-[#0F172A] flex items-center justify-center relative overflow-hidden">
                  {/* Play button indicator */}
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all" />
                  <div className="relative z-10 flex flex-col items-center gap-4">
                    <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-[#6366F1]/60 transition-all">
                      <svg className="w-10 h-10 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                    <span className="text-sm font-medium text-[#CBD5E1] text-center">{video.title}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll-left {
          animation: scroll-left 40s linear infinite;
        }
      `}</style>
    </section>
  )
}
