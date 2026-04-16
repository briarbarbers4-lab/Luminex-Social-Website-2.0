import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import VideoCards from '@/components/VideoCards'
import Stats from '@/components/Stats'
import Portfolio from '@/components/Portfolio'
import Process from '@/components/Process'
import Testimonials from '@/components/Testimonials'
import ContentGallery from '@/components/ContentGallery'
import AIInfrastructure from '@/components/AIInfrastructure'
import Comparison from '@/components/Comparison'
import TechMarquee from '@/components/TechMarquee'
import ROICalculator from '@/components/ROICalculator'
import InfrastructureFooter from '@/components/InfrastructureFooter'
import About from '@/components/About'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'
import AnimatedSection from '@/components/AnimatedSection'
import FloatingCTA from '@/components/FloatingCTA'

// Section Divider Component
const SectionDivider = () => (
  <div className="w-full h-px bg-[#1E293B]" />
)

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0B0E14]">
      <Navbar />
      <Hero />
      <VideoCards />
      <AnimatedSection>
        <Stats />
      </AnimatedSection>
      <SectionDivider />
      <AnimatedSection>
        <Testimonials />
      </AnimatedSection>
      <SectionDivider />
      <AnimatedSection>
        <ContentGallery />
      </AnimatedSection>
      <SectionDivider />
      <AnimatedSection>
        <AIInfrastructure />
      </AnimatedSection>
      <SectionDivider />
      <AnimatedSection>
        <Portfolio />
      </AnimatedSection>
      <SectionDivider />
      <AnimatedSection>
        <Comparison />
      </AnimatedSection>
      <SectionDivider />
      <AnimatedSection>
        <TechMarquee />
      </AnimatedSection>
      <SectionDivider />
      <AnimatedSection>
        <ROICalculator />
      </AnimatedSection>
      <SectionDivider />
      <AnimatedSection>
        <Process />
      </AnimatedSection>
      <SectionDivider />
      <AnimatedSection>
        <About />
      </AnimatedSection>
      <SectionDivider />
      <AnimatedSection>
        <InfrastructureFooter />
      </AnimatedSection>
      <SectionDivider />
      <AnimatedSection>
        <CTA />
      </AnimatedSection>
      <Footer />
      <FloatingCTA />
    </main>
  )
}
