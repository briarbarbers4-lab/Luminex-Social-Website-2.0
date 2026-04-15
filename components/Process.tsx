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
    <section id="process" className="py-20 px-4 bg-[#0B0E14]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-[#F8FAFC] mb-16 text-center">
          Our Process
        </h2>

        {/* Desktop Process Flow */}
        <div className="hidden md:block">
          <div className="relative">
            {/* Connecting Line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-[#6366F1] to-[#A855F7] transform -translate-y-1/2" />

            {/* Steps */}
            <div className="relative grid grid-cols-4 gap-8">
              {steps.map((step, idx) => (
                <div key={idx} className="flex flex-col items-center">
                  {/* Step Circle */}
                  <div className="relative z-10 mb-8">
                    <div className="w-16 h-16 rounded-full bg-[#1E293B] border-2 border-[#6366F1] flex items-center justify-center">
                      <span className="font-mono font-bold text-[#6366F1] text-lg">//{step.number}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-[#F8FAFC] mb-2">{step.title}</h3>
                    <p className="text-[#CBD5E1] text-sm mb-3 leading-relaxed">{step.description}</p>
                    <div className="font-mono text-xs text-[#6366F1] uppercase tracking-widest">
                      {step.days}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Process Flow */}
        <div className="md:hidden space-y-8">
          {steps.map((step, idx) => (
            <div key={idx} className="flex gap-4">
              {/* Step Number */}
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-[#1E293B] border-2 border-[#6366F1] flex items-center justify-center">
                  <span className="font-mono font-bold text-[#6366F1] text-sm">//{step.number}</span>
                </div>
              </div>

              {/* Content */}
              <div className="flex-grow">
                <h3 className="text-lg font-bold text-[#F8FAFC] mb-1">{step.title}</h3>
                <p className="text-[#CBD5E1] text-sm mb-2 leading-relaxed">{step.description}</p>
                <div className="font-mono text-xs text-[#6366F1] uppercase tracking-widest">
                  {step.days}
                </div>
              </div>

              {/* Connector */}
              {idx < steps.length - 1 && (
                <div className="absolute left-6 w-0.5 h-16 bg-gradient-to-b from-[#6366F1] to-transparent" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
