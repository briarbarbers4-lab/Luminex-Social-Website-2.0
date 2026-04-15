import { Star } from 'lucide-react'

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Chen',
      company: 'TechFlow Ventures',
      quote: 'Luminex transformed our content strategy. The AI automation alone saved us 40 hours monthly.',
      rating: 5,
    },
    {
      id: 2,
      name: 'Marcus Rodriguez',
      company: 'Creative Agency Co',
      quote: 'Premium quality meets intelligent systems. They delivered exactly what we needed, on time.',
      rating: 5,
    },
    {
      id: 3,
      name: 'Lisa Park',
      company: 'Digital Growth Labs',
      quote: 'The convergence of logic and narrative isn\'t just a tagline—it\'s what they deliver.',
      rating: 5,
    },
  ]

  const dmWall = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    initials: String.fromCharCode(65 + (i % 26)),
  }))

  return (
    <section id="testimonials" className="py-20 px-4 bg-[#0B0E14]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-[#F8FAFC] mb-12 text-center">
          Loved by our clients
        </h2>

        {/* Quote Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="relative p-6 rounded-xl bg-[#1E293B] border border-[#334155] hover:border-[#6366F1] transition-all group"
            >
              {/* Left Border Glow */}
              <div className="absolute left-0 top-0 bottom-0 w-1 rounded-l-xl bg-[#6366F1] group-hover:shadow-lg group-hover:shadow-[#6366F1]/50 transition-all" />

              {/* Quote Text */}
              <p className="text-[#F8FAFC] italic text-sm mb-4 leading-relaxed">
                {`"${testimonial.quote}"`}
              </p>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-[#A855F7]"
                    fill="#A855F7"
                  />
                ))}
              </div>

              {/* Client Info */}
              <div>
                <h4 className="font-bold text-[#F8FAFC] text-sm">{testimonial.name}</h4>
                <p className="text-[#CBD5E1] text-xs">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>

        {/* DM/Screenshot Wall */}
        <div className="bg-[#1E293B] rounded-xl p-8">
          <h3 className="hud-label mb-6 text-[#6366F1]">// Recent Feedback</h3>
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {dmWall.map((item) => (
              <div
                key={item.id}
                className="aspect-square rounded-lg bg-gradient-to-br from-[#6366F1] to-[#A855F7] p-4 flex items-center justify-center border border-[#334155] hover:glow-indigo-border transition-all group cursor-pointer"
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#F8FAFC] group-hover:scale-110 transition-transform">
                    {item.initials}
                  </div>
                  <div className="text-xs text-[#F8FAFC]/60 mt-1">DM</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
