'use client'

import Script from 'next/script'

export default function CTA() {
  return (
    <section className="py-24 px-4 bg-[#0B0E14] relative overflow-hidden">
      {/* Background Glow */}
      <div 
        className="absolute inset-0 pointer-events-none" 
        style={{
          background: 'radial-gradient(circle at top, rgba(99,102,241,0.08) 0%, transparent 60%)',
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Main CTA */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-[#F8FAFC] mb-6 tracking-tight">
            Ready to Grow?
          </h2>

          <p className="font-mono text-[#CBD5E1] text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Let's talk about how we can transform your content strategy with logic and narrative. Schedule your discovery call below.
          </p>
        </div>

        {/* Calendly Inline Widget Section */}
        <div 
          className="rounded-2xl border overflow-hidden backdrop-blur-sm relative"
          style={{
            backgroundColor: 'rgba(30,41,59,0.3)',
            borderColor: 'rgba(99,102,241,0.2)',
            boxShadow: '0 0 40px rgba(99,102,241,0.1)'
          }}
        >
          {/* Decorative tag */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#6366F1] to-[#A855F7]" />
          
          <div className="p-2 md:p-4 w-full h-[700px]">
            <div 
              className="calendly-inline-widget w-full h-full" 
              data-url="https://calendly.com/luminexsocial05/30min?hide_event_type_details=1&hide_gdpr_banner=1&background_color=0f172a&text_color=f8fafc&primary_color=6366f1" 
              style={{ minWidth: '320px', height: '100%' }}
            ></div>
            <Script 
              type="text/javascript" 
              src="https://assets.calendly.com/assets/external/widget.js" 
              strategy="lazyOnload"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
