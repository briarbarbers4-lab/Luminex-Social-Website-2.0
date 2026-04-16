'use client'

export default function Comparison() {
  const comparisonData = [
    { metric: 'Strategic Planning', fragmented: 'Scattered across teams', luminex: 'Unified narrative framework' },
    { metric: 'Content Creation', fragmented: 'Multiple vendors, inconsistent', luminex: 'AI-augmented in-house production' },
    { metric: 'Distribution', fragmented: 'Manual, platform-specific', luminex: 'Automated across 12+ channels' },
    { metric: 'Data & Analytics', fragmented: 'Siloed metrics, poor ROI visibility', luminex: 'Real-time dashboard with insights' },
    { metric: 'Lead Generation', fragmented: 'Expensive paid ads, low conversion', luminex: 'Organic authority + AI prospecting' },
    { metric: 'Cost Per Acquisition', fragmented: '$150-$300 per lead', luminex: '$15-$45 per lead' },
  ]

  return (
    <section className="py-24 px-4 bg-[#0B0E14]">
      <div className="max-w-7xl mx-auto">
        {/* Section Tag */}
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
            COMPARISON
          </span>
          <span className="text-lg" style={{ color: '#6366F1' }}>●</span>
        </div>

        {/* Heading */}
        <h2
          className="text-5xl md:text-6xl font-black mb-16 text-center"
          style={{
            fontFamily: 'var(--font-heading)',
            color: '#F1F5F9',
            letterSpacing: '-0.02em',
          }}
        >
          Paradigm Shift
        </h2>

        {/* Comparison Table */}
        <div className="space-y-4 max-w-6xl mx-auto">
          {comparisonData.map((row, idx) => (
            <div key={idx} className="grid grid-cols-3 gap-4">
              {/* Metric */}
              <div
                className="p-6 rounded-lg backdrop-blur-[20px]"
                style={{
                  backgroundColor: 'rgba(30, 41, 59, 0.4)',
                  border: '1px solid rgba(99, 102, 241, 0.2)',
                  borderTop: '1px solid #F8FAFC',
                  borderLeft: '1px solid #F8FAFC',
                }}
              >
                <p
                  className="text-sm font-black"
                  style={{
                    fontFamily: 'var(--font-heading)',
                    color: '#F8FAFC',
                  }}
                >
                  {row.metric}
                </p>
              </div>

              {/* Fragmented Agency */}
              <div
                className="p-6 rounded-lg backdrop-blur-[20px]"
                style={{
                  backgroundColor: 'rgba(30, 41, 59, 0.3)',
                  border: '1px solid rgba(239, 68, 68, 0.2)',
                }}
              >
                <p className="text-sm text-[#CBD5E1]">{row.fragmented}</p>
              </div>

              {/* Luminex Ecosystem */}
              <div
                className="p-6 rounded-lg backdrop-blur-[20px]"
                style={{
                  backgroundColor: 'rgba(99, 102, 241, 0.1)',
                  border: '1px solid rgba(99, 102, 241, 0.3)',
                }}
              >
                <p className="text-sm text-[#6366F1] font-semibold">{row.luminex}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
