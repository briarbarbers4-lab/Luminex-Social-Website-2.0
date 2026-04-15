'use client'

import { Star } from 'lucide-react'

// Star icon component for ratings
const GoldStar = () => (
  <Star className="w-4 h-4 text-amber-400" fill="#FBBF24" />
)

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Chen',
      role: 'Head of Marketing',
      company: 'TechFlow Ventures',
      quote: 'Luminex transformed our content strategy. The AI automation alone saved us 40 hours monthly.',
      rating: 5,
    },
    {
      id: 2,
      name: 'Marcus Rodriguez',
      role: 'Creative Director',
      company: 'Creative Agency Co',
      quote: 'Premium quality meets intelligent systems. They delivered exactly what we needed, on time.',
      rating: 5,
    },
    {
      id: 3,
      name: 'Lisa Park',
      role: 'CEO',
      company: 'Digital Growth Labs',
      quote: 'The convergence of logic and narrative isn\'t just a tagline—it\'s what they deliver.',
      rating: 5,
    },
  ]

  const dmMessages = [
    { id: 1, sender: 'Alex M.', message: 'Just saw the final cut — this is INSANE', time: '2:34 PM', platform: 'instagram' },
    { id: 2, sender: 'Jordan K.', message: 'Our engagement is up 340% since working with you guys', time: '11:22 AM', platform: 'imessage' },
    { id: 3, sender: 'Chris W.', message: 'The automation you built is saving us so much time', time: '4:15 PM', platform: 'instagram' },
    { id: 4, sender: 'Taylor S.', message: 'Can we do another project? This was amazing', time: '9:47 AM', platform: 'imessage' },
    { id: 5, sender: 'Morgan P.', message: 'My team is blown away by the quality', time: '6:01 PM', platform: 'instagram' },
    { id: 6, sender: 'Riley D.', message: 'Best investment we made this year tbh', time: '1:18 PM', platform: 'imessage' },
    { id: 7, sender: 'Casey L.', message: 'The viral potential here is crazy', time: '10:33 AM', platform: 'instagram' },
    { id: 8, sender: 'Jamie R.', message: 'You guys absolutely crushed it', time: '3:45 PM', platform: 'imessage' },
    { id: 9, sender: 'Drew H.', message: 'Our CEO keeps rewatching the video lol', time: '5:29 PM', platform: 'instagram' },
    { id: 10, sender: 'Sam T.', message: 'This is exactly what we envisioned', time: '8:12 AM', platform: 'imessage' },
    { id: 11, sender: 'Quinn B.', message: 'Already getting compliments from clients', time: '12:44 PM', platform: 'instagram' },
    { id: 12, sender: 'Avery N.', message: 'When can we start the next one?', time: '7:56 PM', platform: 'imessage' },
  ]

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
              className="relative p-6 rounded-xl transition-all"
              style={{
                backgroundColor: '#1E293B',
                borderLeft: '2px solid #6366F1',
                boxShadow: '0 0 15px rgba(99, 102, 241, 0.15)',
              }}
            >
              {/* Gold Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <GoldStar key={i} />
                ))}
              </div>

              {/* Quote Text - Inter Italic */}
              <p className="text-[#F8FAFC] italic font-light text-sm mb-6 leading-relaxed">
                {`"${testimonial.quote}"`}
              </p>

              {/* Client Info */}
              <div>
                {/* Name - Satoshi Bold (using font-sans as fallback) */}
                <h4 className="font-sans font-bold text-[#F8FAFC] text-sm">{testimonial.name}</h4>
                {/* Role - JetBrains Mono smaller */}
                <p className="font-mono text-[#CBD5E1] text-xs">{testimonial.role}, {testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>

        {/* DM/Screenshot Wall */}
        <div className="bg-[#1E293B] rounded-xl p-8">
          <h3 className="font-mono text-xs uppercase tracking-widest mb-6 text-[#6366F1]">// Recent Feedback</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {dmMessages.map((dm) => (
              <div
                key={dm.id}
                className="rounded-2xl p-4 cursor-pointer transition-all hover:scale-[1.02]"
                style={{
                  backgroundColor: dm.platform === 'imessage' ? '#1C1C1E' : '#121212',
                  border: '1px solid #2A2A2E',
                }}
              >
                {/* Message Header */}
                <div className="flex items-center gap-2 mb-3">
                  {/* Avatar Circle */}
                  <div 
                    className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white"
                    style={{
                      background: dm.platform === 'imessage' 
                        ? 'linear-gradient(135deg, #34C759, #30D158)' 
                        : 'linear-gradient(135deg, #833AB4, #E1306C, #F77737)',
                    }}
                  >
                    {dm.sender.charAt(0)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[#F8FAFC] text-xs font-semibold truncate">{dm.sender}</p>
                    <p className="text-[#8E8E93] text-[10px]">{dm.time}</p>
                  </div>
                </div>

                {/* Chat Bubble */}
                <div 
                  className="rounded-2xl rounded-tl-sm px-3 py-2"
                  style={{
                    backgroundColor: dm.platform === 'imessage' ? '#007AFF' : '#3B3B3D',
                  }}
                >
                  <p className="text-[#F8FAFC] text-xs leading-relaxed">{dm.message}</p>
                </div>

                {/* Platform Indicator */}
                <div className="mt-2 flex justify-end">
                  <span className="text-[8px] uppercase tracking-wider text-[#6B6B6B]">
                    {dm.platform === 'imessage' ? 'iMessage' : 'Instagram'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
