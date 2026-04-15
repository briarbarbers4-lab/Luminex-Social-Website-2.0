export default function Stats() {
  const stats = [
    { number: '03', label: 'Years', suffix: '' },
    { number: '500', label: 'Videos', suffix: '+' },
    { number: '50M', label: 'Views', suffix: '+' },
    { number: '20', label: 'Clients', suffix: '+' },
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
    </section>
  )
}
