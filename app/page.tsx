'use client'

import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Stats from '@/components/Stats'
import Services from '@/components/Services'
import Portfolio from '@/components/Portfolio'
import Process from '@/components/Process'
import Testimonials from '@/components/Testimonials'
import About from '@/components/About'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

// Section Divider Component
const SectionDivider = () => (
  <div className="w-full h-px bg-[#1E293B]" />
)

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0B0E14]">
      <Navbar />
      <Hero />
      <Stats />
      <SectionDivider />
      <Services />
      <SectionDivider />
      <Portfolio />
      <SectionDivider />
      <Process />
      <SectionDivider />
      <Testimonials />
      <SectionDivider />
      <About />
      <SectionDivider />
      <CTA />
      <Footer />
    </main>
  )
}
