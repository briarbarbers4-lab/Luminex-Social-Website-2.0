'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export default function CTA() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0)

  const faqs = [
    {
      id: 1,
      question: 'How long does a typical project take?',
      answer: 'Our standard workflow takes 2-3 weeks from strategy to delivery. Custom timelines can be arranged based on scope.',
    },
    {
      id: 2,
      question: 'Do you work with startups?',
      answer: 'Yes! We love working with startups. We understand tight budgets and can tailor solutions to your growth stage.',
    },
    {
      id: 3,
      question: 'What platforms do you optimize for?',
      answer: 'We create content for all major platforms: YouTube, TikTok, Instagram Reels, LinkedIn, and more.',
    },
    {
      id: 4,
      question: 'Can you help with AI automation?',
      answer: 'Absolutely. Our AI automation services include workflow setup, lead generation systems, and content pipeline automation.',
    },
  ]

  return (
    <section className="py-24 px-4 bg-[#0B0E14] relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-glow-indigo pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Main CTA */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-[#F8FAFC] mb-6">
            Ready to Grow?
          </h2>

          <p className="font-mono text-[#CBD5E1] text-sm md:text-base mb-8">
            Let&apos;s talk about how we can transform your content strategy with logic and narrative.
          </p>

          <a
            href="https://calendly.com/luminexsocial05/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 rounded-lg bg-gradient-to-violet text-[#F8FAFC] font-bold text-lg hover:shadow-2xl hover:shadow-[#6366F1]/40 transition-all transform hover:scale-105"
          >
            Book Your Discovery Call
          </a>
        </div>

        {/* FAQ Section */}
        <div className="bg-[#1E293B]/50 backdrop-blur rounded-xl p-8 border border-[#334155]">
          <p className="hud-label text-[#6366F1] mb-8">// Frequently Asked Questions</p>

          <div className="space-y-4">
            {faqs.map((faq) => (
              <div
                key={faq.id}
                className="border border-[#334155] rounded-lg overflow-hidden bg-[#0B0E14]/50"
              >
                {/* Question */}
                <button
                  onClick={() => setOpenFAQ(openFAQ === faq.id ? null : faq.id)}
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-[#1E293B]/30 transition-colors"
                >
                  <span className="text-left font-semibold text-[#F8FAFC]">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#6366F1] transition-transform ${
                      openFAQ === faq.id ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {/* Answer */}
                {openFAQ === faq.id && (
                  <div className="px-6 py-4 bg-[#1E293B]/30 border-t border-[#334155] text-[#CBD5E1] text-sm leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
