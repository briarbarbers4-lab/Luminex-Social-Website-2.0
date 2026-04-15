'use client'

export default function Stats() {
  const stats = [
    { number: '03', label: 'Years', suffix: '' },
    { number: '500', label: 'Videos', suffix: '+' },
    { number: '50M', label: 'Views', suffix: '+' },
    { number: '20', label: 'Clients', suffix: '+' },
  ]

  const brands = [
    { name: 'NEXUS', weight: 'font-bold' },
    { name: 'Velocity', weight: 'font-light' },
    { name: 'PRISM', weight: 'font-bold' },
    { name: 'Catalyst', weight: 'font-normal' },
    { name: 'ZENITH', weight: 'font-bold' },
    { name: 'Aurora', weight: 'font-light' },
    { name: 'VECTOR', weight: 'font-bold' },
    { name: 'Flux', weight: 'font-normal' },
  ]

  return (
    <section className="py-12 px-4 bg-[#0B0E14] border-y border-[#334155]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center">
              <div className="font-mono text-3xl md:text-4xl font-bold text-[#6366F1] mb-2">
                {stat.number}
                {stat.suffix && <span className="text-[#A855F7]">{stat.suffix}</span>}
              </div>
              <div className="font-mono text-xs uppercase tracking-widest text-[#CBD5E1]">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Client Marquee */}
      <div className="relative mt-12 overflow-hidden">
        {/* Left fade gradient */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0B0E14] to-transparent z-10 pointer-events-none" />
        {/* Right fade gradient */}
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0B0E14] to-transparent z-10 pointer-events-none" />
        
        <div className="flex animate-marquee">
          {[...brands, ...brands].map((brand, idx) => (
            <div key={idx} className="flex items-center shrink-0">
              <span className={`text-[#F8FAFC]/60 text-lg md:text-xl ${brand.weight} px-6 whitespace-nowrap`}>
                {brand.name}
              </span>
              <span className="text-[#6366F1] text-sm">◆</span>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </section>
  )
}
