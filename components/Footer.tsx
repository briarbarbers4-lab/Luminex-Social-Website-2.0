import Link from 'next/link'
import { Instagram, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#0B0E14] border-t border-[#334155] py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo & About */}
          <div>
            <Link href="#" className="flex items-center gap-2 mb-4 group">
              <span className="font-bold text-lg text-[#F8FAFC] group-hover:text-[#6366F1] transition-colors">
                Luminex<span className="text-[#6366F1]">.</span>
              </span>
            </Link>
            <p className="text-[#CBD5E1] text-sm">
              The Convergence of Logic & Narrative
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-[#F8FAFC] mb-4 text-sm uppercase">Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#work" className="text-[#CBD5E1] text-sm hover:text-[#6366F1] transition-colors">
                  Work
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-[#CBD5E1] text-sm hover:text-[#6366F1] transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#process" className="text-[#CBD5E1] text-sm hover:text-[#6366F1] transition-colors">
                  Process
                </Link>
              </li>
              <li>
                <Link href="#testimonials" className="text-[#CBD5E1] text-sm hover:text-[#6366F1] transition-colors">
                  Testimonials
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-[#F8FAFC] mb-4 text-sm uppercase">Services</h4>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-[#CBD5E1] text-sm hover:text-[#6366F1] transition-colors">
                  Short Form Editing
                </a>
              </li>
              <li>
                <a href="#services" className="text-[#CBD5E1] text-sm hover:text-[#6366F1] transition-colors">
                  Long Form Content
                </a>
              </li>
              <li>
                <a href="#services" className="text-[#CBD5E1] text-sm hover:text-[#6366F1] transition-colors">
                  AI Automation
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold text-[#F8FAFC] mb-4 text-sm uppercase">Follow</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-[#1E293B] border border-[#334155] flex items-center justify-center text-[#F8FAFC] hover:border-[#6366F1] hover:text-[#6366F1] transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-[#1E293B] border border-[#334155] flex items-center justify-center text-[#F8FAFC] hover:border-[#6366F1] hover:text-[#6366F1] transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#334155] my-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between text-sm text-[#CBD5E1]">
          <p>
            © 2024 Luminex Social. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-[#6366F1] transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-[#6366F1] transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
