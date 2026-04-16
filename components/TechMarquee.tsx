'use client'

export default function TechMarquee() {
  const techs = [
    { name: 'Meta', icon: 'M' },
    { name: 'GHL', icon: 'G' },
    { name: 'WhatsApp', icon: 'W' },
    { name: 'Zapier', icon: 'Z' },
    { name: 'HubSpot', icon: 'H' },
    { name: 'Stripe', icon: 'S' },
  ]

  return (
    <section className="py-20 px-4 bg-[#0B0E14] relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Subtitle */}
        <p
          className="text-center text-sm mb-12"
          style={{
            fontFamily: 'var(--font-mono)',
            color: '#6366F1',
            letterSpacing: '0.1em',
          }}
        >
          INTEGRATED ECOSYSTEM
        </p>

        {/* Scrolling Tech Bar */}
        <div className="relative overflow-hidden rounded-lg" style={{ height: '100px' }}>
          {/* Gradient Fade Left */}
          <div
            className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
            style={{
              background: 'linear-gradient(90deg, #0B0E14 0%, transparent 100%)',
            }}
          />

          {/* Gradient Fade Right */}
          <div
            className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
            style={{
              background: 'linear-gradient(270deg, #0B0E14 0%, transparent 100%)',
            }}
          />

          {/* Tech Icons Scroll */}
          <div className="flex gap-8 animate-marquee h-full items-center">
            {[...techs, ...techs].map((tech, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 flex items-center justify-center w-24 h-24 rounded-2xl group transition-all duration-300 relative"
                style={{
                  backgroundColor: 'rgba(30, 41, 59, 0.5)',
                  border: '1px solid rgba(100, 116, 139, 0.3)',
                  filter: 'grayscale(1)',
                }}
              >
                {/* Glow on hover */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: 'radial-gradient(circle, rgba(76, 29, 149, 0.3) 0%, transparent 70%)',
                    filter: 'blur(20px)',
                  }}
                />

                {/* Icon Letter */}
                <span
                  className="relative z-10 text-3xl font-black text-[#CBD5E1] group-hover:text-[#A855F7] transition-colors"
                  style={{
                    fontFamily: 'var(--font-heading)',
                  }}
                >
                  {tech.icon}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </section>
  )
}
