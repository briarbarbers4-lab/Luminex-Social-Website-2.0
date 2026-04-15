export default function About() {
  return (
    <section className="py-24 px-4 bg-[#0B0E14] relative overflow-hidden">
      {/* Subtle Grid Overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(rgba(30, 41, 59, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(30, 41, 59, 0.2) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Tag - Centered */}
        <div className="flex items-center justify-center gap-3 mb-12">
          <span className="text-lg" style={{ color: '#6366F1' }}>●</span>
          <span
            className="text-sm font-medium px-6 py-3 rounded-full"
            style={{
              color: '#6366F1',
              backgroundColor: 'rgba(99, 102, 241, 0.1)',
              border: '1px solid rgba(99, 102, 241, 0.3)',
              fontFamily: 'var(--font-sans)',
            }}
          >
            ABOUT FOUNDERS
          </span>
          <span className="text-lg" style={{ color: '#6366F1' }}>●</span>
        </div>

        <div className="grid md:grid-cols-5 gap-12 items-center">
          {/* Left Column - Text (40%) */}
          <div className="md:col-span-2">
            {/* Heading */}
            <h2
              className="text-5xl md:text-6xl font-black mb-8"
              style={{
                fontFamily: 'var(--font-heading)',
                color: '#F1F5F9',
                letterSpacing: '-0.02em',
                lineHeight: '1.1',
              }}
            >
              Engineered by{' '}
              <span style={{
                background: 'linear-gradient(90deg, #6366F1, #A855F7)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                Logic
              </span>
              . Proven by Narrative.
            </h2>

            {/* Intro Text */}
            <p
              className="text-lg mb-8 leading-relaxed"
              style={{
                fontFamily: 'var(--font-sans)',
                color: 'rgba(248, 250, 252, 0.8)',
              }}
            >
              A dual-leadership model that merges automation with storytelling. Ayyan drives the precision of AI systems, while Furqan crafts the narrative that commands attention. Together, they've built an agency where logic meets creativity.
            </p>

            {/* Co-Founder Cards */}
            <div className="space-y-4">
              {/* Card 1 */}
              <div
                className="p-5 rounded-lg backdrop-blur-[20px]"
                style={{
                  backgroundColor: 'rgba(30, 41, 59, 0.4)',
                  border: '1px solid rgba(202, 138, 4, 0.2)',
                  borderTop: '1px solid #CA8A04',
                  borderLeft: '1px solid #CA8A04',
                }}
              >
                <p
                  className="text-sm font-mono"
                  style={{
                    color: '#CA8A04',
                    letterSpacing: '0.1em',
                  }}
                >
                  AYYAN KHATTAK | AI Automation Chief | Co-Founder
                </p>
              </div>

              {/* Card 2 */}
              <div
                className="p-5 rounded-lg backdrop-blur-[20px]"
                style={{
                  backgroundColor: 'rgba(30, 41, 59, 0.4)',
                  border: '1px solid rgba(202, 138, 4, 0.2)',
                  borderTop: '1px solid #CA8A04',
                  borderLeft: '1px solid #CA8A04',
                }}
              >
                <p
                  className="text-sm font-mono"
                  style={{
                    color: '#CA8A04',
                    letterSpacing: '0.1em',
                  }}
                >
                  FURQAN SHAHID | Content & Editing Chief | Co-Founder
                </p>
              </div>
            </div>

            {/* System Status Bar */}
            <div className="mt-8 pt-6 border-t" style={{ borderColor: 'rgba(30, 41, 59, 0.6)' }}>
              <p
                className="text-xs font-mono uppercase tracking-widest"
                style={{
                  color: '#2DD4BF',
                  letterSpacing: '0.15em',
                }}
              >
                ● SYSTEM STATUS: OPERATIONAL
              </p>
            </div>
          </div>

          {/* Right Column - Photo (60%) */}
          <div className="md:col-span-3 relative">
            {/* Ayyan Label - Top Left */}
            <div className="absolute -top-12 left-0 z-20 flex items-center gap-3">
              <span
                className="text-xs font-mono px-3 py-1 rounded-full whitespace-nowrap"
                style={{
                  color: '#6366F1',
                  backgroundColor: 'rgba(99, 102, 241, 0.1)',
                  border: '1px solid #6366F1',
                }}
              >
                AYYAN KHATTAK
              </span>
              <svg width="60" height="40" className="overflow-visible" style={{ marginTop: '8px' }}>
                <path
                  d="M 0 20 Q 20 10 40 5 Q 50 3 60 0"
                  fill="none"
                  stroke="#6366F1"
                  strokeWidth="1"
                  strokeDasharray="4,4"
                  strokeLinecap="round"
                />
                <polygon points="60,0 58,6 55,4" fill="#6366F1" />
              </svg>
            </div>

            {/* Furqan Label - Bottom Right */}
            <div className="absolute -bottom-12 right-0 z-20 flex items-center gap-3 flex-row-reverse">
              <span
                className="text-xs font-mono px-3 py-1 rounded-full whitespace-nowrap"
                style={{
                  color: '#A855F7',
                  backgroundColor: 'rgba(168, 85, 247, 0.1)',
                  border: '1px solid #A855F7',
                }}
              >
                FURQAN SHAHID
              </span>
              <svg width="60" height="40" className="overflow-visible" style={{ marginBottom: '8px' }}>
                <path
                  d="M 60 20 Q 40 10 20 5 Q 10 3 0 0"
                  fill="none"
                  stroke="#A855F7"
                  strokeWidth="1"
                  strokeDasharray="4,4"
                  strokeLinecap="round"
                />
                <polygon points="0,0 2,6 5,4" fill="#A855F7" />
              </svg>
            </div>

            <div
              className="relative aspect-square rounded-2xl overflow-hidden"
              style={{
                backgroundColor: '#0F172A',
                border: '1px solid #1E293B',
                boxShadow: 'inset 0 0 30px rgba(248, 250, 252, 0.05)',
              }}
            >
              {/* Top-Left Glow */}
              <div
                className="absolute -top-20 -left-20 w-40 h-40 pointer-events-none"
                style={{
                  background: 'radial-gradient(circle, rgba(248, 250, 252, 0.15) 0%, transparent 70%)',
                  filter: 'blur(30px)',
                }}
              />

              {/* Co-Founders Photo */}
              <img
                src="https://ik.imagekit.io/rqhbqqo2qx/Furqan%20and%20me.jpeg"
                alt="Co-founders Ayyan Khattak and Furqan Shahid"
                className="w-full h-full object-cover"
              />

              {/* Overlay Gradient */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, transparent 100%)',
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
