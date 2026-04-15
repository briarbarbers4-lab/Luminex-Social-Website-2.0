export default function About() {
  return (
    <section className="py-20 px-4 bg-[#0B0E14]">
      <div className="max-w-7xl mx-auto">
        <h2 className="hud-label text-[#6366F1] mb-8 text-center">// WHO WE ARE</h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h3 className="text-3xl md:text-4xl font-bold text-[#F8FAFC] mb-6">
              3 Years of Impact
            </h3>

            <p className="text-[#CBD5E1] text-lg leading-relaxed mb-4">
              Luminex Social was founded on a simple belief: brands deserve both premium storytelling and intelligent systems. We&apos;re not just a content agency. We&apos;re architects of growth.
            </p>

            <p className="text-[#CBD5E1] text-lg leading-relaxed mb-6">
              Over three years, we&apos;ve helped 20+ brands transform their content strategy through the convergence of logic and narrative. We blend creative excellence with AI-driven automation to deliver results that scale.
            </p>

            <div className="space-y-4">
              <div className="flex gap-3">
                <div className="text-[#2DD4BF]">→</div>
                <p className="text-[#F8FAFC]">500+ videos produced and optimized</p>
              </div>
              <div className="flex gap-3">
                <div className="text-[#2DD4BF]">→</div>
                <p className="text-[#F8FAFC]">Millions of views across platforms</p>
              </div>
              <div className="flex gap-3">
                <div className="text-[#2DD4BF]">→</div>
                <p className="text-[#F8FAFC]">10x average engagement boost for clients</p>
              </div>
            </div>
          </div>

          {/* Image Placeholder */}
          <div className="relative">
            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#6366F1] to-[#A855F7] glow-indigo-border" />
            <div className="relative bg-[#1E293B] rounded-xl p-8 aspect-square flex items-center justify-center border border-[#6366F1]">
              <div className="text-center">
                <div className="text-6xl mb-4">👥</div>
                <p className="text-[#CBD5E1] font-mono text-sm">
                  Team Photo Placeholder
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
