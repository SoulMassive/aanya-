'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ArrowRight, Menu, X } from 'lucide-react'
import Link from 'next/link'

const solutions = [
  {
    title: 'Enterprise Learning',
    links: [
      { name: 'Corporate Training', href: '#' },
      { name: 'Leadership Development', href: '#' },
      { name: 'Digital Upskilling', href: '#' },
      { name: 'Compliance Training', href: '#' },
    ],
  },
  {
    title: 'AI Solutions',
    links: [
      { name: 'Intelligent Tutoring', href: '#' },
      { name: 'Adaptive Learning', href: '#' },
      { name: 'Predictive Analytics', href: '#' },
      { name: 'Content Automation', href: '#' },
    ],
  },
  {
    title: 'Workforce Development',
    links: [
      { name: 'Skill Mapping', href: '#' },
      { name: 'Talent Mobility', href: '#' },
      { name: 'Performance Insights', href: '#' },
      { name: 'Recruitment AI', href: '#' },
    ],
  },
  {
    title: 'EdTech Strategy',
    links: [
      { name: 'Digital Transformation', href: '#' },
      { name: 'LMS Implementation', href: '#' },
      { name: 'Experience Design', href: '#' },
      { name: 'ROI Analytics', href: '#' },
    ],
  },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeMenu, setActiveMenu] = useState<string | null>(null)
  const [isMobileOpen, setIsMobileOpen] = useState(false)

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
          <Link href="#about" className="text-[15px] font-medium text-white/80 hover:text-white transition-colors">
            About
          </Link>
          <Link href="#why" className="text-[15px] font-medium text-white/80 hover:text-white transition-colors">
            Why Aanya
          </Link>
          <Link href="#cases" className="text-[15px] font-medium text-white/80 hover:text-white transition-colors">
            Case Studies
          </Link>
          <Link href="#insights" className="text-[15px] font-medium text-white/80 hover:text-white transition-colors">
            Insights
          </Link>
        </div>

        {/* Actions */}
        <div className="hidden lg:flex items-center gap-4">
          <button className="px-5 py-2.5 text-sm font-medium text-white border border-white/20 rounded-lg hover:bg-white/10 transition-all">
            Book Consultation
          </button>
          <button className="px-5 py-2.5 text-sm font-medium text-white bg-blue rounded-lg hover:bg-blue-glow transition-all flex items-center gap-2 group">
            Get Started <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </button>
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
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 w-full bg-[#0D2640] border-y border-white/8 py-12"
            onMouseEnter={() => setActiveMenu('solutions')}
            onMouseLeave={() => setActiveMenu(null)}
          >
            <div className="max-w-[1320px] mx-auto px-6 grid grid-cols-4 gap-8">
              {solutions.map((category) => (
                <div key={category.title}>
                  <h4 className="text-[11px] font-mono font-bold tracking-[0.2em] uppercase text-cyan mb-6">
                    {category.title}
                  </h4>
                  <ul className="space-y-4">
                    {category.links.map((link) => (
                      <li key={link.name}>
                        <Link 
                          href={link.href}
                          className="text-[15px] text-white/70 hover:text-white hover:translate-x-1 transition-all flex items-center"
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
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
              <button className="w-full py-4 text-white border border-white/20 rounded-xl font-bold">
                Book Consultation
              </button>
              <button className="w-full py-4 bg-blue text-white rounded-xl font-bold">
                Get Started
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
