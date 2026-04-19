'use client'

import React from 'react'

const servicesData = [
  {
    id: "video-editing",
    name: "Premium Video Editing",
    definition: "Premium Video Editing is a data-driven approach to visual storytelling that optimizes pacing, audio design, and narrative flow to maximize viewer retention. By integrating psychological hooks and precise cuts, we transform raw footage into high-converting digital assets designed for viral scalability and long-term brand authority.",
    logicSteps: [
      "Deep Audit & Asset Ingestion: We analyze your existing content and extract high-performing themes.",
      "Algorithmic Editing & Hook Engineering: We edit with rigorous pacing rules to spike retention in the first 3 seconds.",
      "Multi-format Distribution Strategy: Output is tailored for high-impact platforms for omni-channel dominance."
    ],
    impactMetrics: [
      "3x increase in hook retention (0-3s watch time).",
      "45% average increase in overall viewer engagement rate.",
      "10x faster production cycle from raw recording to published asset."
    ],
    faqs: [
      {
        question: "How does premium video editing increase viewer retention?",
        answer: "By utilizing strategic cuts, sound effects, and pattern interrupts every 3-5 seconds, premium video editing keeps the viewer's brain actively engaged, significantly reducing the drop-off rate."
      },
      {
        question: "What makes data-driven video hooks so effective for B2B brands?",
        answer: "Data-driven hooks rely on proven psychological triggers—like curiosity gaps and immediate value propositions—which have been historically validated to stop the scroll and immediately establish subject matter authority."
      },
      {
        question: "Can premium short-form editing convert viewers into leads?",
        answer: "Yes, when matched with a strong call-to-action and narrative authority, short-form video establishes trust rapidly, driving high-intent traffic directly to your sales and conversion funnels."
      }
    ]
  },
  {
    id: "ai-automation",
    name: "AI Automation Systems",
    definition: "AI Automation Systems are intelligent, autonomous workflows that connect disjointed software tools to completely remove manual repetitive tasks. By deploying machine learning models, autonomous agents, and strategic logic, organizations can scale operations seamlessly, maintain pinpoint accuracy in outreach, and reclaim hundreds of hours of creative and strategic focus.",
    logicSteps: [
      "Workflow Telemetry & Bottleneck Identification: We map out your manual processes to find inefficiencies.",
      "Agentic Bot Integration: Deploying autonomous AI agents to manage data entry, CRM updates, and communications.",
      "Execution & Continuous Optimization: The system runs 24/7, continuously learning and improving response rates."
    ],
    impactMetrics: [
      "100% elimination of manual data entry tasks.",
      "60% reduction in churn via automated, personalized follow-ups.",
      "5x increase in qualified booked calls through AI-driven B2B outreach."
    ],
    faqs: [
      {
        question: "How does AI automate B2B outreach?",
        answer: "AI automates B2B outreach by scraping lead data, drafting hyper-personalized emails via LLMs, and autonomously sequencing follow-ups based on prospect replies without human intervention."
      },
      {
        question: "Are AI automation workflows secure for enterprise data?",
        answer: "Absolutely. We build integrations using secure API gateways, encrypted data transmission, and local or private LLM instances to ensure full compliance with strict industry data security standards."
      },
      {
        question: "What is the ROI timeline for an AI automation system implementation?",
        answer: "Most organizations see a positive return within the first 30 days due to the immediate recovery of labor hours and the rapid increase in lead processing velocity."
      }
    ]
  }
]

export default function Services() {
  return (
    <section id="services" className="py-24 px-4 bg-[#0B0E14]">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-center gap-3 mb-6">
          <span className="text-lg text-[#2DD4BF]">●</span>
          <span className="text-sm font-medium px-6 py-3 rounded-full text-[#2DD4BF] bg-[rgba(45,212,191,0.1)] border border-[rgba(45,212,191,0.3)] font-sans uppercase tracking-widest">
            AEO Optimized Services
          </span>
          <span className="text-lg text-[#2DD4BF]">●</span>
        </div>

        <h2 className="text-4xl md:text-5xl font-bold text-[#F8FAFC] mb-16 text-center">
          Answer Engine Ready Infrastructure
        </h2>

        <div className="space-y-16">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="border border-[#334155] rounded-3xl p-8 md:p-12 bg-[rgba(30,41,59,0.4)] backdrop-blur-lg shadow-[0_0_40px_rgba(0,0,0,0.3)]"
            >
              {/* FAQ JSON-LD Schema Injection */}
              <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                  __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    "mainEntity": service.faqs.map(faq => ({
                      "@type": "Question",
                      "name": faq.question,
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": faq.answer
                      }
                    }))
                  })
                }}
              />

              <h2 className="text-3xl md:text-4xl font-bold text-[#F8FAFC] mb-8 font-heading">
                {service.name}
              </h2>

              {/* Direct Answer */}
              <div className="mb-12 p-6 rounded-2xl bg-[rgba(99,102,241,0.1)] border border-[rgba(99,102,241,0.25)] text-[#E2E8F0] text-lg leading-relaxed font-sans">
                <strong className="text-[#A855F7] font-bold block mb-2 font-mono uppercase tracking-wider text-sm">Direct Answer</strong>
                {service.definition}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
                {/* The Logic */}
                <div>
                  <p className="text-xl font-bold text-[#F8FAFC] mb-6 flex items-center gap-3">
                    <span className="text-[#6366F1] font-mono">01 //</span> How the System Works
                  </p>
                  <ol className="space-y-5 text-[#CBD5E1]">
                    {service.logicSteps.map((step, i) => (
                      <li key={i} className="flex items-start gap-4">
                        <span className="flex-shrink-0 flex items-center justify-center w-7 h-7 rounded-full bg-[#1E293B] border border-[#475569] text-xs font-mono font-bold mt-0.5 text-[#F8FAFC]">
                          {i + 1}
                        </span>
                        <span className="leading-relaxed">{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>

                {/* The Narrative */}
                <div>
                  <p className="text-xl font-bold text-[#F8FAFC] mb-6 flex items-center gap-3">
                    <span className="text-[#A855F7] font-mono">02 //</span> The Business Impact
                  </p>
                  <ul className="space-y-5 text-[#CBD5E1]">
                    {service.impactMetrics.map((metric, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="text-[#2DD4BF] mt-1 text-lg leading-none">✓</span>
                        <span className="leading-relaxed font-medium text-[#F1F5F9]">{metric}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* FAQs */}
              <div className="pt-10 border-t border-[#334155]">
                <h3 className="text-xl font-bold text-[#F8FAFC] mb-8 font-heading">{service.name} FAQs</h3>
                <div className="space-y-4">
                  {service.faqs.map((faq, i) => (
                    <div key={i} className="p-6 rounded-2xl border border-[#334155] bg-[#0F172A] hover:border-[#6366F1] transition-colors">
                      <p className="text-lg font-semibold text-[#F1F5F9] mb-3 leading-snug">{faq.question}</p>
                      <p className="text-[#94A3B8] leading-relaxed">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

