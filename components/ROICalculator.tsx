'use client'

import { useState } from 'react'

export default function ROICalculator() {
  const [monthlyBudget, setMonthlyBudget] = useState(5000)
  const [leadVolume, setLeadVolume] = useState(50)
  const [conversionRate, setConversionRate] = useState(15)

  const costPerLead = Math.round(monthlyBudget / Math.max(leadVolume, 1))
  const monthlyLeads = Math.round((leadVolume * (100 + conversionRate)) / 100)
  const monthlyRevenue = Math.round(monthlyLeads * 2500) // Assuming $2500 avg deal value
  const roi = Math.round(((monthlyRevenue - monthlyBudget) / monthlyBudget) * 100)

  return (
    <section className="py-24 px-4 bg-[#0B0E14]">
      <div className="max-w-5xl mx-auto">
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
            ROI CALCULATOR
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
          Calculate Your ROI
        </h2>

        {/* Calculator */}
        <div
          className="p-8 rounded-2xl backdrop-blur-[20px]"
          style={{
            backgroundColor: 'rgba(30, 41, 59, 0.4)',
            border: '1px solid rgba(99, 102, 241, 0.2)',
          }}
        >
          {/* Input Controls */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Monthly Budget */}
            <div>
              <label
                className="text-xs font-mono mb-4 block uppercase tracking-widest"
                style={{ color: '#CA8A04' }}
              >
                Monthly Budget
              </label>
              <input
                type="range"
                min="1000"
                max="50000"
                step="500"
                value={monthlyBudget}
                onChange={(e) => setMonthlyBudget(Number(e.target.value))}
                className="w-full h-2 rounded-lg appearance-none cursor-pointer"
                style={{
                  background: `linear-gradient(90deg, #CA8A04 0%, #CA8A04 ${((monthlyBudget - 1000) / 49000) * 100}%, rgba(202, 138, 4, 0.2) ${((monthlyBudget - 1000) / 49000) * 100}%, rgba(202, 138, 4, 0.2) 100%)`,
                }}
              />
              <p className="text-2xl font-black mt-3" style={{ color: '#CA8A04' }}>
                ${monthlyBudget.toLocaleString()}
              </p>
            </div>

            {/* Lead Volume */}
            <div>
              <label
                className="text-xs font-mono mb-4 block uppercase tracking-widest"
                style={{ color: '#CA8A04' }}
              >
                Lead Volume
              </label>
              <input
                type="range"
                min="10"
                max="500"
                step="10"
                value={leadVolume}
                onChange={(e) => setLeadVolume(Number(e.target.value))}
                className="w-full h-2 rounded-lg appearance-none cursor-pointer"
                style={{
                  background: `linear-gradient(90deg, #CA8A04 0%, #CA8A04 ${((leadVolume - 10) / 490) * 100}%, rgba(202, 138, 4, 0.2) ${((leadVolume - 10) / 490) * 100}%, rgba(202, 138, 4, 0.2) 100%)`,
                }}
              />
              <p className="text-2xl font-black mt-3" style={{ color: '#CA8A04' }}>
                {leadVolume} leads
              </p>
            </div>

            {/* Conversion Boost */}
            <div>
              <label
                className="text-xs font-mono mb-4 block uppercase tracking-widest"
                style={{ color: '#CA8A04' }}
              >
                Conversion Boost
              </label>
              <input
                type="range"
                min="0"
                max="100"
                step="5"
                value={conversionRate}
                onChange={(e) => setConversionRate(Number(e.target.value))}
                className="w-full h-2 rounded-lg appearance-none cursor-pointer"
                style={{
                  background: `linear-gradient(90deg, #CA8A04 0%, #CA8A04 ${conversionRate}%, rgba(202, 138, 4, 0.2) ${conversionRate}%, rgba(202, 138, 4, 0.2) 100%)`,
                }}
              />
              <p className="text-2xl font-black mt-3" style={{ color: '#CA8A04' }}>
                +{conversionRate}%
              </p>
            </div>
          </div>

          {/* Results */}
          <div className="grid md:grid-cols-4 gap-4 pt-8 border-t" style={{ borderColor: 'rgba(99, 102, 241, 0.2)' }}>
            {[
              { label: 'Cost Per Lead', value: `$${costPerLead}`, color: '#6366F1' },
              { label: 'Monthly Leads', value: monthlyLeads.toString(), color: '#2DD4BF' },
              { label: 'Monthly Revenue', value: `$${monthlyRevenue.toLocaleString()}`, color: '#A855F7' },
              { label: 'ROI', value: `${roi}%`, color: '#CA8A04' },
            ].map((result, idx) => (
              <div key={idx} className="text-center">
                <p
                  className="text-xs font-mono uppercase tracking-widest mb-2"
                  style={{
                    color: result.color,
                  }}
                >
                  {result.label}
                </p>
                <p
                  className="text-3xl font-black"
                  style={{
                    color: result.color,
                  }}
                >
                  {result.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        input[type='range']::-webkit-slider-thumb {
          appearance: none;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #CA8A04;
          cursor: pointer;
          box-shadow: 0 0 10px rgba(202, 138, 4, 0.5);
        }

        input[type='range']::-moz-range-thumb {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #CA8A04;
          cursor: pointer;
          border: none;
          box-shadow: 0 0 10px rgba(202, 138, 4, 0.5);
        }
      `}</style>
    </section>
  )
}
