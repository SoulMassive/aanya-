'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ArrowRight, Menu, X } from 'lucide-react'
import Link from 'next/link'
import { GhostButton, PrimaryButton } from './ui/cta-buttons'
import { useModals } from '@/context/modal-context'

const solutions = [
  {
    title: 'ENTERPRISE LEARNING',
    links: [
      { name: 'Corporate Training', href: '/solutions/corporate-training' },
      { name: 'Leadership Development', href: '/solutions/leadership-development' },
      { name: 'Digital Upskilling', href: '/solutions/digital-upskilling' },
      { name: 'Compliance Training', href: '/solutions/compliance-training' },
    ],
  },
  {
    title: 'AI SOLUTIONS',
    links: [
      { name: 'Intelligent Tutoring', href: '/solutions/intelligent-tutoring' },
      { name: 'Adaptive Learning', href: '/solutions/adaptive-learning' },
      { name: 'Predictive Analytics', href: '/solutions/predictive-analytics' },
      { name: 'Content Automation', href: '/solutions/content-automation' },
    ],
  },
  {
    title: 'WORKFORCE DEVELOPMENT',
    links: [
      { name: 'Skill Mapping', href: '/solutions/skill-mapping' },
      { name: 'Talent Mobility', href: '/solutions/talent-mobility' },
      { name: 'Performance Insights', href: '/solutions/performance-insights' },
      { name: 'Recruitment AI', href: '/solutions/recruitment-ai' },
    ],
  },
  {
    title: 'EDTECH STRATEGY',
    links: [
      { name: 'Digital Transformation', href: '/solutions/digital-transformation' },
      { name: 'LMS Implementation', href: '/solutions/lms-implementation' },
      { name: 'Experience Design', href: '/solutions/experience-design' },
      { name: 'ROI Analytics', href: '/solutions/roi-analytics' },
    ],
  },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeMenu, setActiveMenu] = useState<string | null>(null)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const { setConsultationOpen, setGetStartedOpen } = useModals()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        isScrolled
          ? 'h-[72px] bg-[#071B2A]/95 backdrop-blur-xl border-b border-white/5 shadow-[0_1px_30px_rgba(0,0,0,0.3)]'
          : 'h-[80px] bg-transparent'
      }`}
    >
      <div className="max-w-[1320px] mx-auto h-full px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-1 group">
          <span className="font-display font-[800] text-2xl text-white tracking-tight">
            AANYA
          </span>
          <span className="w-1.5 h-1.5 bg-cyan rounded-full -mt-4" />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8 h-full">
          <div 
            className="h-full flex items-center"
            onMouseEnter={() => setActiveMenu('solutions')}
            onMouseLeave={() => setActiveMenu(null)}
          >
            <button className={`flex items-center gap-1.5 text-[15px] font-medium transition-colors ${activeMenu === 'solutions' ? 'text-white' : 'text-white/80 hover:text-white'}`}>
              Solutions <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeMenu === 'solutions' ? 'rotate-180' : ''}`} />
            </button>
          </div>
          <Link href="/#about" className="text-[15px] font-medium text-white/80 hover:text-white transition-colors">
            About
          </Link>
          <Link href="/#why" className="text-[15px] font-medium text-white/80 hover:text-white transition-colors">
            Why Aanya
          </Link>
          <Link href="/#cases" className="text-[15px] font-medium text-white/80 hover:text-white transition-colors">
            Case Studies
          </Link>
          <Link href="/#insights" className="text-[15px] font-medium text-white/80 hover:text-white transition-colors">
            Insights
          </Link>
        </div>

        {/* Actions */}
        <div className="hidden lg:flex items-center gap-4">
          <GhostButton onClick={() => setConsultationOpen(true)}>
            Book Consultation
          </GhostButton>
          <PrimaryButton onClick={() => setGetStartedOpen(true)}>
            Get Started
          </PrimaryButton>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden p-2 text-white"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
        >
          {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mega Menu */}
      <AnimatePresence>
        {activeMenu === 'solutions' && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[-1]"
              onMouseEnter={() => setActiveMenu(null)}
            />
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="absolute top-full left-0 w-full bg-[#071B2A] border-b border-white/8 shadow-2xl z-50 overflow-hidden"
              onMouseEnter={() => setActiveMenu('solutions')}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <div className="max-w-[1320px] mx-auto px-8 py-10">
                <div className="grid grid-cols-4 gap-12">
                  {solutions.map((category) => (
                    <div key={category.title}>
                      <h4 className="text-[#38BDF8] text-[11px] font-mono tracking-[0.2em] uppercase mb-6 pl-3 border-l-2 border-blue font-bold">
                        {category.title}
                      </h4>
                      <ul className="space-y-4">
                        {category.links.map((link) => (
                          <li key={link.name}>
                            <Link 
                              href={link.href}
                              className="group/link flex items-center gap-2 text-white/65 hover:text-white text-sm transition-all duration-200 hover:translate-x-2"
                              onClick={() => setActiveMenu(null)}
                            >
                              <ArrowRight className="w-3 h-3 text-blue opacity-0 -ml-5 group-hover/link:opacity-100 group-hover/link:ml-0 transition-all duration-200" />
                              {link.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                {/* Bottom Bar */}
                <div className="mt-10 pt-8 border-t border-white/6 flex items-center justify-between">
                  <div className="flex items-center gap-6">
                    <Link href="/solutions" className="flex items-center gap-2 text-sm font-bold text-blue hover:text-cyan transition-colors">
                      Explore all solutions <ArrowRight className="w-4 h-4" />
                    </Link>
                    <Link href="/contact" className="text-sm font-medium text-white/40 hover:text-white transition-colors">
                      Or talk to an expert
                    </Link>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <span className="text-[11px] font-mono text-white/20 uppercase tracking-widest">200+ enterprises trust Aanya</span>
                    <div className="flex -space-x-2">
                      {['JD', 'SK', 'AL'].map((initial, i) => (
                        <div key={i} className="w-7 h-7 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[10px] font-bold text-white/60">
                          {initial}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 z-[110] bg-[#071B2A] lg:hidden flex flex-col p-6"
          >
            <div className="flex justify-between items-center mb-12">
              <span className="font-display font-extrabold text-2xl text-white">AANYA</span>
              <button onClick={() => setIsMobileOpen(false)} className="text-white">
                <X className="w-8 h-8" />
              </button>
            </div>
            
            <div className="flex flex-col gap-6 mb-12">
              <button className="text-2xl font-display font-bold text-white text-left flex justify-between items-center">
                Solutions <ChevronDown className="w-6 h-6" />
              </button>
              <Link href="#about" className="text-2xl font-display font-bold text-white" onClick={() => setIsMobileOpen(false)}>About</Link>
              <Link href="#why" className="text-2xl font-display font-bold text-white" onClick={() => setIsMobileOpen(false)}>Why Aanya</Link>
              <Link href="#cases" className="text-2xl font-display font-bold text-white" onClick={() => setIsMobileOpen(false)}>Case Studies</Link>
              <Link href="#insights" className="text-2xl font-display font-bold text-white" onClick={() => setIsMobileOpen(false)}>Insights</Link>
            </div>

            <div className="mt-auto flex flex-col gap-4">
              <GhostButton 
                onClick={() => { setConsultationOpen(true); setIsMobileOpen(false); }}
                className="w-full py-4 text-base"
              >
                Book Consultation
              </GhostButton>
              <PrimaryButton 
                onClick={() => { setGetStartedOpen(true); setIsMobileOpen(false); }}
                className="w-full py-4 text-base"
              >
                Get Started
              </PrimaryButton>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
