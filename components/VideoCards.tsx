'use client'
import LazyVideo from './LazyVideo'
export default function VideoCards() {
  const videos = [
    { id: 1, url: 'https://ik.imagekit.io/5pahp6yywb/Crafted%20London.mp4' },
    { id: 2, url: 'https://ik.imagekit.io/5pahp6yywb/8%20Months%20Ago%20I%20Founded%20203%20Media_V5.mp4' },
    { id: 3, url: 'https://ik.imagekit.io/5pahp6yywb/Strategy%20For%20LinkedIn%20Growth_V1.mp4' },
    { id: 4, url: 'https://ik.imagekit.io/5pahp6yywb/drive-download-20251231T110107Z-3-001/SubMagic_V3.mp4' },
    { id: 5, url: 'https://ik.imagekit.io/5pahp6yywb/drive-download-20251231T110107Z-3-001/GO%20VIRAL%20BEFORE%20YOU%20PUBLISH_V3.mp4' },
    { id: 6, url: 'https://ik.imagekit.io/5pahp6yywb/drive-download-20251231T110107Z-3-001/Followers_V1.mp4' },
    { id: 7, url: 'https://ik.imagekit.io/5pahp6yywb/drive-download-20251231T110107Z-3-001/Olaf%20Carlson_V2.mp4' },
    { id: 8, url: 'https://ik.imagekit.io/5pahp6yywb/drive-download-20251231T110107Z-3-001/Marketing_V2.mp4' },
  ]

  return (
    <section className="py-24 bg-[#0B0E14] overflow-hidden">
      <div className="w-full">
        {/* Continuous scrolling carousel — fade masks on left/right edges */}
        <div className="relative">
          <div className="flex gap-6 animate-scroll-left">
            {[...videos, ...videos].map((video, idx) => (
              <div
                key={idx}
                className="shrink-0 w-56 h-96 rounded-2xl overflow-hidden bg-[#1E293B] border border-[#334155] shadow-lg hover:border-[#6366F1] transition-all duration-300 group cursor-pointer hover:shadow-[0_0_30px_rgba(99,102,241,0.3)]"
              >
                {/* Video element */}
                <LazyVideo
                  className="w-full h-full object-cover"
                  src={video.url}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
