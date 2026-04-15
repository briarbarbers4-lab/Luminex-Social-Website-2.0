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
                  AYYAN KHATTAK // AI Automation Lead
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
                  FURQAN SHAHID // Content & Narrative Lead
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
          <div className="md:col-span-3">
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

              {/* Photo Placeholder - Replace with actual image */}
              <img
                src="/placeholder-user.jpg"
                alt="Co-founders Ayyan Khattak and Furqan Shahid"
                className="w-full h-full object-cover"
                style={{
                  filter: 'grayscale(1) contrast(1.1)',
                }}
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
