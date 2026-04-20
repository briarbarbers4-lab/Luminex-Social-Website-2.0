'use client';

import dynamic from 'next/dynamic'

const VideoCards = dynamic(() => import('@/components/VideoCards'), { ssr: false, loading: () => <p>Loading...</p> })
const Portfolio = dynamic(() => import('@/components/Portfolio'), { ssr: false, loading: () => <p>Loading...</p> })
const ContentGallery = dynamic(() => import('@/components/ContentGallery'), { ssr: false, loading: () => <p>Loading...</p> })
const ROICalculator = dynamic(() => import('@/components/ROICalculator'), { ssr: false, loading: () => <p>Loading...</p> })
const AIInfrastructure = dynamic(() => import('@/components/AIInfrastructure'), { ssr: false, loading: () => <p>Loading...</p> })
const TechMarquee = dynamic(() => import('@/components/TechMarquee'), { ssr: false, loading: () => <p>Loading...</p> })
const LuminexFramework = dynamic(() => import('@/components/LuminexFramework'), { ssr: false, loading: () => <p>Loading...</p> })
const Services = dynamic(() => import('@/components/Services'), { ssr: false, loading: () => <p>Loading...</p> })

import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Stats from '@/components/Stats'
import Process from '@/components/Process'
import Testimonials from '@/components/Testimonials'
import Comparison from '@/components/Comparison'
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
      <LuminexFramework />
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
