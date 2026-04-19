export default function Process() {
  const steps = [
    {
      number: '01',
      title: 'Strategy',
      description: 'We analyze your brand, audience, and goals to craft a data-driven content strategy.',
      days: '5-7 days',
    },
    {
      number: '02',
      title: 'Script',
      description: 'High-impact scripts optimized for engagement, conversion, and brand voice.',
      days: '3-5 days',
    },
    {
      number: '03',
      title: 'Edit',
      description: 'Cinematic production and post-production with premium motion and pacing.',
      days: '7-10 days',
    },
    {
      number: '04',
      title: 'Deliver',
      description: 'Finished content optimized across platforms—ready to launch and dominate.',
      days: '2-3 days',
    },
  ]

  return (
    <section id="process" className="py-24 px-4 bg-[#0B0E14]">
      <div className="max-w-7xl mx-auto">
        {/* Section Tag - Centered */}
        <div className="flex items-center justify-center gap-3 mb-8">
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
            OUR PROCESS
          </span>
          <span className="text-lg" style={{ color: '#6366F1' }}>●</span>
        </div>

        {/* Main Heading */}
        <h2
          className="text-6xl md:text-7xl font-black mb-4 text-center"
          style={{
            fontFamily: 'var(--font-heading)',
            color: '#F1F5F9',
            letterSpacing: '-0.02em',
          }}
        >
          In The{' '}
          <span
            style={{
              background: 'linear-gradient(90deg, #6366F1, #A855F7)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Lab
          </span>
        </h2>

        {/* Subtitle */}
        <p
          className="text-lg mb-16 text-center"
          style={{
            fontFamily: 'var(--font-sans)',
            color: 'rgba(248, 250, 252, 0.7)',
            letterSpacing: '0.02em',
          }}
        >
          Our proprietary process optimized for impact
        </p>

        {/* Desktop Process Flow */}
        <div className="hidden md:block">
          <div className="grid grid-cols-3 gap-8 mb-12">
            {steps.slice(0, 3).map((step, idx) => (
              <div
                key={idx}
                className="relative group p-8 rounded-2xl transition-all backdrop-blur-[20px]"
                style={{
                  backgroundColor: 'rgba(30, 41, 59, 0.6)',
                  border: '1px solid rgba(248, 250, 252, 0)',
                  borderTop: '1px solid #F8FAFC',
                  borderLeft: '1px solid #F8FAFC',
                }}
              >
                {/* Faint Purple Glow Behind Icon */}
                <div
                  className="absolute -top-8 left-8 pointer-events-none"
                  style={{
                    width: '120px',
                    height: '120px',
                    background: 'radial-gradient(circle, rgba(76, 29, 149, 0.15) 0%, transparent 70%)',
                    filter: 'blur(40px)',
                  }}
                />

                {/* Number Badge */}
                <div className="relative z-10 mb-6 inline-flex items-center justify-center">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center"
                    style={{
                      backgroundColor: 'rgba(99, 102, 241, 0.1)',
                      border: '2px solid #CA8A04',
                    }}
                  >
                    <span
                      className="font-mono font-bold text-lg"
                      style={{ color: '#CA8A04' }}
                    >
                      {step.number}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <p className="text-2xl font-black text-[#F8FAFC] mb-3" style={{ fontFamily: 'var(--font-heading)' }}>
                  {step.title}
                </p>
                <p className="text-[#CBD5E1] text-sm mb-4 leading-relaxed">{step.description}</p>
                <div
                  className="font-mono text-xs uppercase tracking-widest"
                  style={{ color: '#CA8A04' }}
                >
                  {step.days}
                </div>
              </div>
            ))}
          </div>

          {/* Book A Call CTA */}
          <div className="flex justify-center mt-16">
            <a
              href="https://calendly.com/luminexsocial05/30min"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Schedule a free discovery call with Luminex Social"
              className="px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 active:scale-95 inline-block"
              style={{
                background: 'linear-gradient(135deg, #1E1B4B, #312E81)',
                color: '#F8FAFC',
                border: '2px solid #CA8A04',
                boxShadow: '0 0 30px rgba(202, 138, 4, 0.2)',
              }}
            >
              Schedule A Discovery Call
            </a>
          </div>
        </div>

        {/* Mobile Process Flow */}
        <div className="md:hidden space-y-6">
          {steps.slice(0, 3).map((step, idx) => (
            <div
              key={idx}
              className="relative p-6 rounded-2xl transition-all backdrop-blur-[20px]"
              style={{
                backgroundColor: 'rgba(30, 41, 59, 0.6)',
                border: '1px solid rgba(248, 250, 252, 0)',
                borderTop: '1px solid #F8FAFC',
                borderLeft: '1px solid #F8FAFC',
              }}
            >
              {/* Faint Purple Glow */}
              <div
                className="absolute -top-6 left-6 pointer-events-none"
                style={{
                  width: '100px',
                  height: '100px',
                  background: 'radial-gradient(circle, rgba(76, 29, 149, 0.15) 0%, transparent 70%)',
                  filter: 'blur(40px)',
                }}
              />

              {/* Number Badge */}
              <div className="relative z-10 mb-4 inline-flex items-center justify-center">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{
                    backgroundColor: 'rgba(99, 102, 241, 0.1)',
                    border: '2px solid #CA8A04',
                  }}
                >
                  <span
                    className="font-mono font-bold text-sm"
                    style={{ color: '#CA8A04' }}
                  >
                    {step.number}
                  </span>
                </div>
              </div>

              {/* Content */}
              <p className="text-xl font-black text-[#F8FAFC] mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
                {step.title}
              </p>
              <p className="text-[#CBD5E1] text-sm mb-3 leading-relaxed">{step.description}</p>
              <div
                className="font-mono text-xs uppercase tracking-widest"
                style={{ color: '#CA8A04' }}
              >
                {step.days}
              </div>
            </div>
          ))}

          {/* Book A Call CTA - Mobile */}
          <div className="flex justify-center mt-12">
            <a
              href="https://calendly.com/luminexsocial05/30min"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Schedule a free discovery call with Luminex Social"
              className="px-6 py-3 rounded-lg font-semibold text-base transition-all transform hover:scale-105 active:scale-95 inline-block"
              style={{
                background: 'linear-gradient(135deg, #1E1B4B, #312E81)',
                color: '#F8FAFC',
                border: '2px solid #CA8A04',
                boxShadow: '0 0 30px rgba(202, 138, 4, 0.2)',
              }}
            >
              Schedule A Discovery Call
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
