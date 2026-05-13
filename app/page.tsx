'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useScroll, useSpring, useInView } from 'framer-motion'
import { 
  ArrowRight, 
  CirclePlay, 
  Zap, 
  Shield, 
  Layers, 
  TrendingUp, 
  BarChart3, 
  Globe, 
  Users, 
  ArrowUpRight,
  Sparkles,
  Check,
  Twitter,
  Linkedin,
  Youtube,
  Search
} from 'lucide-react'
import { Navbar } from '@/components/navbar'
import Link from 'next/link'
import { GhostButton, PrimaryButton } from '@/components/ui/cta-buttons'
import { useModals } from '@/context/modal-context'

// --- Utility Components ---

const FadeUp = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 32 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay }}
  >
    {children}
  </motion.div>
)

const SectionHeader = ({ label, title, body, dark = false, number }: { label: string, title: string, body?: string, dark?: boolean, number?: string }) => (
  <div className="relative mb-20">
    {number && <span className="section-number">{number}</span>}
    <FadeUp>
      <div className={`accent-line ${dark ? 'border-white/20 text-cyan' : 'border-blue text-cyan'}`}>
        {label}
      </div>
      <h2 className={`mt-6 max-w-3xl text-[clamp(36px,4vw,56px)] leading-[1.1] tracking-[-0.02em] ${dark ? 'text-white' : 'text-navy'}`}>
        {title}
      </h2>
      {body && (
        <p className={`mt-6 max-w-2xl text-[17px] leading-[1.75] ${dark ? 'text-white/60' : 'text-slate'}`}>
          {body}
        </p>
      )}
    </FadeUp>
  </div>
)

const GlowOrb = ({ className }: { className?: string }) => (
  <div className={`glow-orb bg-blue opacity-[0.15] w-[600px] h-[600px] ${className}`} />
)

const NoiseTexture = () => <div className="noise-overlay" />

const AnimatedCounter = ({ value, target, suffix = "", decimals = 0 }: { value?: number, target: number, suffix?: string, decimals?: number }) => {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.5 })

  useEffect(() => {
    if (inView) {
      let startTime: number
      const duration = 1800
      
      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp
        const progress = Math.min((timestamp - startTime) / duration, 1)
        const easedProgress = 1 - Math.pow(1 - progress, 3) // easeOutCubic
        setCount(easedProgress * target)
        if (progress < 1) {
          requestAnimationFrame(step)
        }
      }
      requestAnimationFrame(step)
    }
  }, [inView, target])

  return (
    <span ref={ref}>
      {count.toLocaleString(undefined, { minimumFractionDigits: decimals, maximumFractionDigits: decimals })}
      {suffix}
    </span>
  )
}

// --- Section Components ---

const Hero = () => {
  const words = "Transforming Enterprise Learning Through".split(" ")
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const containerRef = useRef<HTMLDivElement>(null)
  const { setGetStartedOpen } = useModals()

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return
    const { left, top, width, height } = containerRef.current.getBoundingClientRect()
    const x = (e.clientX - left) / width - 0.5
    const y = (e.clientY - top) / height - 0.5
    setMousePos({ x, y })
  }
  
  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center pt-32 pb-24 overflow-hidden bg-[#071B2A]"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          animate={{ 
            x: mousePos.x * -30,
            y: mousePos.y * -30
          }}
          className="absolute inset-0 opacity-20"
        >
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:60px_60px]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_200px,#2563EB0a,transparent)]" />
        </motion.div>
        
        {/* Animated Glow Orbs */}
        <motion.div 
          animate={{ 
            x: mousePos.x * 50,
            y: mousePos.y * 50
          }}
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue/10 blur-[120px] rounded-full" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#071B2A]/50 to-[#071B2A]" />
        
        {/* Decorative Floating Shapes */}
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 10, 0]
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-[20%] right-[10%] w-32 h-32 border border-white/5 rounded-full backdrop-blur-sm"
        />
      </div>

      <div className="relative z-10 max-w-[1320px] mx-auto px-6 w-full flex flex-col lg:flex-row items-center gap-16">
        <motion.div 
          animate={{ 
            x: mousePos.x * 15,
            y: mousePos.y * 15
          }}
          className="flex-1 text-center lg:text-left"
        >
          {/* Title */}
          <h1 className="text-white text-[clamp(52px,7vw,88px)] leading-[1.05] tracking-[-0.03em] font-display font-bold">
            {words.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 + i * 0.07 }}
                className="inline-block mr-[0.2em]"
              >
                {word}
              </motion.span>
            ))}
            <br />
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.8 }}
              className="bg-gradient-to-r from-blue via-cyan to-blue bg-[length:200%_auto] animate-marquee-left bg-clip-text text-transparent"
            >
              Intelligent Solutions
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="mt-6 text-[18px] text-white/60 max-w-2xl lg:mx-0 mx-auto"
          >
            Aanya empowers your workforce with state-of-the-art AI platforms, 
            personalized learning paths, and real-time skill analytics to navigate the future of work.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.6 }}
            className="mt-10 flex flex-wrap gap-4 justify-center lg:justify-start"
          >
            <PrimaryButton size="lg" onClick={() => setGetStartedOpen(true)}>
              Explore Solutions
            </PrimaryButton>
            <GhostButton size="lg" onClick={() => {
              const overview = document.getElementById('about');
              if (overview) overview.scrollIntoView({ behavior: 'smooth' });
            }}>
              Watch Overview
            </GhostButton>
          </motion.div>
        </motion.div>

        {/* Dashboard Card / HUD */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.2, duration: 1, type: 'spring' }}
          className="hidden lg:block w-[450px] relative"
        >
          <div className="relative aspect-square">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-blue/10 rounded-full blur-[100px] animate-pulse" />
            
            {/* Rotating Outer Ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 border border-blue/20 rounded-full"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-blue rounded-full shadow-[0_0_10px_#2563EB]" />
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-blue rounded-full shadow-[0_0_10px_#2563EB]" />
            </motion.div>

            {/* Skill Nodes & Connections (Moved behind Hub) */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
              <defs>
                <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#2563EB" stopOpacity="0.05" />
                  <stop offset="50%" stopColor="#38BDF8" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#2563EB" stopOpacity="0.05" />
                </linearGradient>
              </defs>
              {[
                { x: '15%', y: '20%' }, { x: '85%', y: '25%' }, 
                { x: '10%', y: '75%' }, { x: '90%', y: '70%' },
                { x: '50%', y: '5%' }
              ].map((pos, i) => (
                <motion.line
                  key={i}
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ delay: 2 + i * 0.2, duration: 1.5 }}
                  x1="50%" y1="50%" x2={pos.x} y2={pos.y}
                  stroke="url(#lineGrad)" strokeWidth="1.5"
                />
              ))}
            </svg>

            {/* Central Hub */}
            <div className="absolute inset-[30%] bg-[#0D2640]/90 backdrop-blur-2xl border border-white/20 rounded-full shadow-[0_0_50px_rgba(37,99,235,0.3)] flex flex-col items-center justify-center group overflow-hidden z-10">
              {/* Glass Lens Shine */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
              <div className="absolute -inset-full bg-gradient-to-tr from-transparent via-white/5 to-transparent rotate-45 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              
              <div className="text-[10px] font-mono text-cyan/80 uppercase tracking-[0.2em] z-10">Skill Match</div>
              
              {/* Scanning Line */}
              <motion.div 
                animate={{ top: ['0%', '100%', '0%'] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="absolute left-0 w-full h-[2px] bg-cyan/40 shadow-[0_0_20px_#38BDF8] z-20"
              />
            </div>

            {/* Floating Skill Nodes */}
            {[
              { x: '15%', y: '20%', icon: Zap, label: 'AI Core' },
              { x: '85%', y: '25%', icon: Globe, label: 'Global Scale' },
              { x: '10%', y: '75%', icon: Shield, label: 'Security' },
              { x: '90%', y: '70%', icon: BarChart3, label: 'Analytics' },
              { x: '50%', y: '5%', icon: Users, label: 'Talent' },
            ].map((node, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 2.2 + i * 0.2, type: 'spring' }}
                style={{ left: node.x, top: node.y }}
                className="absolute -translate-x-1/2 -translate-y-1/2 z-20"
              >
                <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut" }}
                  className="p-3 bg-[#112D4A]/80 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl flex flex-col items-center gap-1 group cursor-pointer hover:border-blue/50 transition-all"
                >
                  <node.icon className="w-5 h-5 text-blue group-hover:text-cyan transition-colors" />
                  <span className="text-[8px] font-mono text-white/40 uppercase tracking-widest group-hover:text-white transition-colors">{node.label}</span>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Trust Badges */}
      <div className="absolute bottom-12 left-0 w-full">
        <div className="max-w-[1320px] mx-auto px-6">
          <div className="flex flex-col items-center">
            <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-white/30 mb-8">Trusted by Global Leaders</span>
            <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6 opacity-30 grayscale hover:grayscale-0 transition-all duration-500">
              {['IIM', 'TCS', 'Infosys', 'NASSCOM', 'World Bank'].map(name => (
                <div key={name} className="flex items-center gap-8">
                  <span className="text-xl font-display font-bold text-white">{name}</span>
                  <div className="w-px h-4 bg-white/20 last:hidden" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const MarqueeRow = ({ items, direction = 'left', speed = '40s' }: { items: string[], direction?: 'left' | 'right', speed?: string }) => (
  <div className="flex overflow-hidden group select-none">
    <div 
      className={`flex flex-none gap-16 py-8 whitespace-nowrap animate-marquee-${direction} pause-on-hover`}
      style={{ animationDuration: speed }}
    >
      {[...items, ...items, ...items].map((item, i) => (
        <div key={i} className="flex items-center justify-center w-[160px] h-[40px] bg-white/5 rounded-lg border border-white/5">
          <span className="text-white/30 font-semibold tracking-wider text-sm">{item}</span>
        </div>
      ))}
    </div>
  </div>
)

const TrustedByMarquee = () => {
  const companies = ["MICROSOFT", "GOOGLE", "IBM", "ORACLE", "SAMSUNG", "ADOBE", "INTEL", "META", "APPLE"]
  return (
    <section className="bg-[#050F1A] py-16 border-y border-white/5 overflow-hidden relative">
      <div className="absolute top-0 left-0 w-[20%] h-full bg-gradient-to-r from-[#050F1A] to-transparent z-10" />
      <div className="absolute top-0 right-0 w-[20%] h-full bg-gradient-to-l from-[#050F1A] to-transparent z-10" />
      <MarqueeRow items={companies} direction="left" speed="50s" />
      <MarqueeRow items={companies.reverse()} direction="right" speed="45s" />
    </section>
  )
}

const Services = () => {
  const services = [
    { title: "Corporate Learning", desc: "Customized skill paths for modern enterprise teams.", icon: Users },
    { title: "AI-Powered Tutoring", desc: "Personalized intelligent support for every learner.", icon: Zap },
    { title: "Skill Analytics", desc: "Data-driven insights into team competencies.", icon: TrendingUp },
    { title: "Content Automation", desc: "Rapid creation of high-quality learning assets.", icon: Layers },
    { title: "Adaptive Assessments", desc: "Dynamic testing that adjusts to learner levels.", icon: Shield },
    { title: "Talent Mobility", desc: "AI-driven internal career pathing and growth.", icon: Globe },
    { title: "LMS Integration", desc: "Seamless connectivity with existing infrastructures.", icon: BarChart3 },
    { title: "Expert Consulting", desc: "Strategic guidance for workforce transformation.", icon: Users },
  ]

  return (
    <section id="solutions" className="py-28 bg-offwhite relative overflow-hidden">
      <div className="max-w-[1320px] mx-auto px-6">
        <SectionHeader 
          label="What We Do"
          title="End-to-End Enterprise Learning Solutions"
          body="We provide the tools and strategy needed to transform your workforce into a high-performance, future-ready team."
          number="01"
        />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue/20 via-cyan/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl blur-xl -z-10" />
              
              <div className="bg-white rounded-2xl p-7 border border-[#E2E8F0] group-hover:border-blue/30 transition-all relative overflow-hidden h-full">
                {/* Holographic Shimmer */}
                <motion.div 
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -rotate-45"
                />

                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 rounded-xl bg-blue/5 flex items-center justify-center text-blue group-hover:bg-blue group-hover:text-white transition-colors duration-300 relative">
                    <service.icon className="w-6 h-6 z-10" />
                    <motion.div 
                      whileHover={{ scale: 1.5, opacity: 0 }}
                      className="absolute inset-0 bg-blue rounded-xl"
                    />
                  </div>
                  <span className="text-blue/10 font-display font-black text-4xl leading-none group-hover:text-blue/20 transition-colors">{(i + 1).toString().padStart(2, '0')}</span>
                </div>
                
                <h3 className="text-[18px] font-display font-bold text-navy mb-2 group-hover:text-blue transition-colors">{service.title}</h3>
                <p className="text-[14px] text-slate leading-relaxed mb-6">{service.desc}</p>
                
                <Link href="#" className="inline-flex items-center gap-1.5 text-sm font-bold text-blue group/link">
                  <span>Explore Solution</span>
                  <div className="relative w-4 h-4">
                    <ArrowRight className="absolute inset-0 w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                    <ArrowRight className="absolute inset-0 w-4 h-4 translate-x-[-100%] opacity-0 transition-all group-hover/link:translate-x-0 group-hover/link:opacity-100" />
                  </div>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

const About = () => {
  return (
    <section id="about" className="py-28 bg-navy dark-section relative overflow-hidden">
      <NoiseTexture />
      <GlowOrb className="top-0 right-0 opacity-10" />
      
      <div className="max-w-[1320px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-20 items-center">
          <div>
            <SectionHeader 
              label="Our Mission"
              title="Built for the Future of Work and Learning"
              dark
            />
            <div className="space-y-6 text-white/60 text-[17px] leading-relaxed max-w-2xl mb-12">
              <p>
                Founded on the principle that learning is the ultimate competitive advantage, Aanya bridges the gap between organizational goals and individual potential.
              </p>
              <p>
                Our AI-first approach ensures that every learner receives the exact support they need at the right moment, while giving leaders the visibility to make strategic talent decisions.
              </p>
            </div>

            <div className="relative pl-12 space-y-16">
              {/* Digital Spine */}
              <div className="absolute left-0 top-2 bottom-2 w-px bg-gradient-to-b from-blue/0 via-blue/30 to-blue/0">
                <motion.div
                  animate={{ top: ['0%', '100%'] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  className="absolute left-1/2 -translate-x-1/2 w-[3px] h-24 bg-gradient-to-b from-cyan to-transparent shadow-[0_0_10px_#38BDF8]"
                />
              </div>

              {[
                { year: '2020', title: 'The Genesis', desc: 'Aanya launched with a vision to redefine corporate learning through data-first intelligence.' },
                { year: '2022', title: 'Neural Core Integration', desc: 'Successfully deployed our proprietary LLM-based adaptive tutoring engine.' },
                { year: '2024', title: 'Global Intelligence Network', desc: 'Supporting 200+ enterprises with real-time workforce optimization.' },
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  className="relative group"
                >
                  <div className="absolute -left-[54px] top-1.5 w-3 h-3 rounded-full bg-[#071B2A] border-2 border-blue shadow-[0_0_10px_rgba(37,99,235,0.4)] group-hover:bg-cyan group-hover:border-cyan transition-colors z-10" />
                  <div className="text-[12px] font-mono text-cyan uppercase tracking-widest mb-1">{item.year}</div>
                  <h4 className="text-white font-display font-bold text-xl mb-2 group-hover:text-blue transition-colors">{item.title}</h4>
                  <p className="text-white/40 text-[15px] leading-relaxed max-w-lg">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-8">
            {[
              { label: 'Active Learners', value: 12400, suffix: '+' },
              { label: 'Completion Rate', value: 94, suffix: '%' },
              { label: 'Enterprises', value: 200, suffix: '+' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className={`bg-navy-mid border border-white/10 rounded-2xl p-8 relative overflow-hidden group ${i === 1 ? 'lg:ml-8' : ''}`}
              >
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white/50 text-sm font-medium">{stat.label}</span>
                    <ArrowUpRight className="w-5 h-5 text-green-500" />
                  </div>
                  <div className="text-6xl font-display font-extrabold text-white">
                    <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="mt-4 h-0.5 w-full bg-gradient-to-r from-blue to-transparent" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

const BentoGrid = () => {
  return (
    <section className="py-28 bg-offwhite">
      <div className="max-w-[1320px] mx-auto px-6">
        <SectionHeader 
          label="Innovation"
          title="Intelligent Learning Infrastructure"
          body="Harness the power of AI to create a learning ecosystem that scales with your growth."
          number="02"
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          {/* Card 1 */}
          <motion.div 
            whileHover={{ scale: 1.015 }}
            className="lg:col-span-7 bg-navy rounded-3xl p-8 h-[400px] relative overflow-hidden group border border-white/5"
          >
            <GlowOrb className="bottom-0 left-0 opacity-10" />
            <div className="relative z-10 flex flex-col h-full">
              <h3 className="text-2xl font-bold text-white mb-4">AI Learning Engine</h3>
              <p className="text-white/50 max-w-md">Proprietary algorithms that adapt content delivery based on individual pace and performance.</p>
              
              <div className="mt-auto space-y-4">
                {[75, 45, 90].map((w, i) => (
                  <div key={i} className="bg-white/5 rounded-full h-8 flex items-center px-4 overflow-hidden relative">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${w}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 + i * 0.2 }}
                      className="absolute inset-0 bg-blue/20"
                    />
                    <span className="relative z-10 text-[10px] font-mono text-white/40 uppercase">Module {i+1} Progress</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-cyan" />
                <span className="text-[11px] font-mono uppercase text-cyan tracking-widest">Powered by Aanya AI</span>
              </div>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div 
            whileHover={{ scale: 1.015 }}
            className="lg:col-span-5 bg-blue rounded-3xl p-8 h-[400px] relative overflow-hidden group text-white"
          >
            <div className="relative z-10 flex flex-col h-full">
              <h3 className="text-2xl font-bold mb-4">Smart Analytics</h3>
              <p className="text-white/80">Real-time visualization of ROI and skill acquisition across your entire organization.</p>
              
              <div className="mt-auto">
                <div className="flex items-end gap-2 mb-6">
                  {[40, 65, 30, 85, 60].map((h, i) => (
                    <div key={i} className="flex-1 bg-white/20 rounded-t-sm h-[var(--h)] group-hover:bg-white/40 transition-colors" style={{ '--h': `${h}px` } as any} />
                  ))}
                </div>
                <div className="text-6xl font-display font-extrabold">+240%</div>
                <div className="text-sm font-medium opacity-70">Average Productivity Gain</div>
              </div>
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div 
            whileHover={{ scale: 1.015 }}
            className="lg:col-span-4 bg-white border border-[#E2E8F0] rounded-3xl p-8 h-[300px] relative overflow-hidden group"
          >
            <h3 className="text-xl font-bold text-navy mb-3">Skill Mapping</h3>
            <p className="text-slate text-sm mb-8">Visual representation of organizational competencies.</p>
            <div className="flex flex-wrap gap-2">
              {['Python', 'Strategy', 'Design', 'Sales', 'AI', 'Cloud'].map(tag => (
                <span key={tag} className="px-3 py-1 bg-blue/5 text-blue rounded-full text-xs font-medium">{tag}</span>
              ))}
            </div>
            <div className="absolute bottom-0 right-0 w-32 h-32 opacity-10 pointer-events-none">
              <svg viewBox="0 0 100 100" className="w-full h-full fill-blue">
                <circle cx="20" cy="20" r="4" />
                <circle cx="80" cy="30" r="4" />
                <circle cx="50" cy="80" r="4" />
                <line x1="20" y1="20" x2="80" y2="30" stroke="currentColor" strokeWidth="0.5" />
                <line x1="80" y1="30" x2="50" y2="80" stroke="currentColor" strokeWidth="0.5" />
                <line x1="50" y1="80" x2="20" y2="20" stroke="currentColor" strokeWidth="0.5" />
              </svg>
            </div>
          </motion.div>

          {/* Card 4 */}
          <motion.div 
            whileHover={{ scale: 1.015 }}
            className="lg:col-span-4 bg-navy-mid rounded-3xl p-8 h-[300px] relative overflow-hidden group border border-white/5"
          >
            <h3 className="text-xl font-bold text-white mb-3 text-center">Global Infrastructure</h3>
            <div className="mt-8 flex justify-center">
              <div className="relative w-24 h-24">
                <div className="absolute inset-0 bg-blue/20 rounded-full blur-xl animate-pulse" />
                <Globe className="w-full h-full text-blue relative z-10" />
              </div>
            </div>
            <p className="mt-8 text-center text-white/50 text-sm">Deployed in 40+ countries</p>
          </motion.div>

          {/* Card 5 */}
          <motion.div 
            whileHover={{ scale: 1.015 }}
            className="lg:col-span-4 bg-[#F0F7FF] border border-[#BFDBFE] rounded-3xl p-8 h-[300px] relative overflow-hidden group"
          >
            <h3 className="text-xl font-bold text-navy mb-3">Workforce Insights</h3>
            <p className="text-slate text-sm">Deep learning for people analytics.</p>
            <div className="mt-12 h-16 w-full">
              <svg viewBox="0 0 100 40" className="w-full h-full stroke-blue fill-transparent stroke-[1.5]">
                <path d="M0,35 Q20,30 40,15 T80,10 T100,5" strokeLinecap="round" />
              </svg>
            </div>
            <div className="mt-4 flex items-center gap-2 text-blue font-bold">
              <ArrowUpRight className="w-4 h-4" /> Real-time tracking
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

const WhyAanya = () => {
  const [activeTab, setActiveTab] = useState('aanya')

  const traditional = [
    "Fragmented learning content",
    "One-size-fits-all curriculum",
    "Low engagement rates (<20%)",
    "Slow content updates",
    "Poor ROI visibility",
  ]

  const aanya = [
    "AI-driven unified experience",
    "Personalized adaptive paths",
    "High engagement rates (>85%)",
    "Real-time content generation",
    "Clear, data-driven ROI analytics",
  ]

  return (
    <section id="why" className="py-28 bg-navy dark-section relative">
      <div className="max-w-[1320px] mx-auto px-6">
        <div className="text-center mb-16">
          <SectionHeader 
            label="Comparison"
            title="Why Leading Enterprises Choose Aanya"
            dark
          />
          
          <div className="inline-flex bg-navy-mid p-1 rounded-xl border border-white/10 mt-8">
            {['traditional', 'aanya'].map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative px-8 py-3 text-sm font-bold uppercase tracking-widest rounded-lg transition-all duration-300 z-10 ${activeTab === tab ? 'text-white' : 'text-white/40'}`}
              >
                {activeTab === tab && (
                  <motion.div 
                    layoutId="tabIndicator"
                    className="absolute inset-0 bg-blue rounded-lg -z-10"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                  />
                )}
                {tab === 'traditional' ? 'Traditional Learning' : 'Aanya Platform'}
              </button>
            ))}
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: activeTab === 'aanya' ? 20 : -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: activeTab === 'aanya' ? -20 : 20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              <div className="bg-navy-mid/50 rounded-3xl p-8 border border-white/5">
                <h4 className="text-white/30 font-mono text-[11px] uppercase tracking-[0.2em] mb-8">Challenges</h4>
                <ul className="space-y-4">
                  {traditional.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 py-3 border-b border-white/5 text-white/40">
                      <span className="text-red-500 mt-1">✕</span>
                      <span className="text-[15px]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-blue/5 rounded-3xl p-8 border border-blue/20">
                <h4 className="text-cyan font-mono text-[11px] uppercase tracking-[0.2em] mb-8">The Aanya Way</h4>
                <ul className="space-y-4">
                  {aanya.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 py-3 border-b border-blue/10 text-white">
                      <div className="w-5 h-5 rounded-full bg-blue flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-[15px]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
          {[
            { label: 'Improvement in Productivity', value: 3.5, suffix: 'x', decimals: 1 },
            { label: 'Reduction in Training Costs', value: 42, suffix: '%' },
            { label: 'Faster Skill Acquisition', value: 60, suffix: '%' },
            { label: 'Employee Satisfaction', value: 4.9, suffix: '/5', decimals: 1 },
          ].map((item, i) => (
            <motion.div 
              key={i} 
              whileHover={{ y: -4, scale: 1.02 }}
              className="bg-navy-mid/50 rounded-2xl p-8 text-center border border-white/5 relative overflow-hidden group"
            >
              {/* Background HUD Rings */}
              <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10 + i, repeat: Infinity, ease: "linear" }}
                  className="w-48 h-48 border border-cyan rounded-full border-dashed"
                />
              </div>

              <div className="relative z-10">
                <div className="text-[clamp(40px,5vw,52px)] font-display font-black bg-gradient-to-r from-blue via-cyan to-blue bg-[length:200%_auto] animate-marquee-left bg-clip-text text-transparent mb-4">
                  <AnimatedCounter target={item.value} suffix={item.suffix} decimals={item.decimals} />
                </div>
                <div className="text-white/40 text-[12px] font-mono uppercase tracking-[0.15em] leading-tight px-4">{item.label}</div>
                
                {/* Active Pulse */}
                <div className="mt-6 flex justify-center">
                  <div className="w-12 h-1 bg-white/5 rounded-full overflow-hidden">
                    <motion.div 
                      animate={{ x: ['-100%', '100%'] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      className="w-full h-full bg-cyan shadow-[0_0_10px_#38BDF8]"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

const CaseStudies = () => {
  const cases = [
    { 
      type: "ENTERPRISE", 
      title: "Global Tech Transformation", 
      challenge: "Upskilling 50,000 employees in cloud native technologies.", 
      solution: "AI-personalized learning paths delivered over 12 months.",
      metric: "92%",
      label: "Cloud Certified"
    },
    { 
      type: "UNIVERSITY", 
      title: "Academic Excellence at Scale", 
      challenge: "Creating personalized study plans for 100k+ students.", 
      solution: "Intelligent tutoring engine integrated into legacy LMS.",
      metric: "1.4x",
      label: "Avg. Grade Increase"
    },
    { 
      type: "GOVERNMENT", 
      title: "National Workforce Program", 
      challenge: "Reskilling workers for the emerging digital economy.", 
      solution: "Skill mapping and career pathing for nationwide rollout.",
      metric: "75k",
      label: "Jobs Placed"
    }
  ]

  return (
    <section id="cases" className="py-28 bg-white">
      <div className="max-w-[1320px] mx-auto px-6">
        <SectionHeader 
          label="Impact"
          title="Proven Results for Complex Organizations"
          body="Real-world examples of how Aanya's platform drives measurable value."
          number="03"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cases.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -4 }}
              className="group rounded-3xl border border-[#E2E8F0] p-8 relative overflow-hidden transition-all hover:shadow-[0_24px_48px_rgba(37,99,235,0.08)]"
            >
              <div className="absolute left-0 top-0 bottom-0 w-0 group-hover:w-1 bg-blue transition-all duration-300" />
              <div className="inline-block bg-blue/5 text-blue text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-8">
                {item.type}
              </div>
              
              <h3 className="text-2xl font-display font-bold text-navy mb-8">{item.title}</h3>
              
              <div className="space-y-6 mb-12">
                <div>
                  <div className="text-[11px] font-bold text-slate uppercase tracking-wider mb-1">Challenge</div>
                  <p className="text-sm text-slate leading-relaxed">{item.challenge}</p>
                </div>
                <div>
                  <div className="text-[11px] font-bold text-slate uppercase tracking-wider mb-1">Solution</div>
                  <p className="text-sm text-slate leading-relaxed">{item.solution}</p>
                </div>
              </div>

              <div className="pt-8 border-t border-[#E2E8F0] flex items-end justify-between">
                <div>
                  <div className="text-4xl font-display font-extrabold text-navy">{item.metric}</div>
                  <div className="text-xs font-medium text-slate mt-1">{item.label}</div>
                </div>
                <div className="w-10 h-10 rounded-full border border-[#E2E8F0] flex items-center justify-center text-blue group-hover:bg-blue group-hover:text-white transition-colors">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

const Testimonials = () => {
  const quotes = [
    { name: "Sarah Chen", role: "VP of Learning", company: "Global Innovations", text: "Aanya has completely transformed our approach to leadership development. The AI insights are incredible." },
    { name: "David Miller", role: "CTO", company: "SecureCore", text: "The most robust and scalable learning platform we've ever evaluated. Implementation was seamless." },
    { name: "Anita Kumar", role: "Director of HR", company: "Zenith Corp", text: "Engagement rates tripled within the first three months. Our employees actually enjoy the learning process now." },
    { name: "Robert Fox", role: "Chancellor", company: "State University", text: "The intelligent tutoring system provides 24/7 support to our students, significantly improving outcomes." },
  ]

  return (
    <section className="py-28 bg-offwhite overflow-hidden relative">
      <div className="absolute top-0 left-0 w-[200px] h-full bg-gradient-to-r from-offwhite to-transparent z-10" />
      <div className="absolute top-0 right-0 w-[200px] h-full bg-gradient-to-l from-offwhite to-transparent z-10" />
      
      <div className="text-center mb-16">
        <h2 className="text-3xl font-display font-bold text-navy">What Industry Leaders Say</h2>
      </div>

      <div className="flex flex-col gap-6">
        <div className="flex overflow-hidden group select-none">
          <div className="flex flex-none gap-6 py-4 animate-marquee-left hover:pause">
            {[...quotes, ...quotes].map((q, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 w-[340px] flex-shrink-0 border border-[#E2E8F0] shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => <span key={j} className="text-yellow-400">★</span>)}
                </div>
                <p className="text-sm text-slate leading-relaxed mb-6 italic">"{q.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue text-white flex items-center justify-center font-bold text-xs">
                    {q.name.charAt(0)}
                  </div>
                  <div>
                    <div className="text-sm font-bold text-navy">{q.name}</div>
                    <div className="text-[11px] text-slate">{q.role} · {q.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex overflow-hidden group select-none">
          <div className="flex flex-none gap-6 py-4 animate-marquee-right hover:pause">
            {[...quotes.reverse(), ...quotes].map((q, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 w-[340px] flex-shrink-0 border border-[#E2E8F0] shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => <span key={j} className="text-yellow-400">★</span>)}
                </div>
                <p className="text-sm text-slate leading-relaxed mb-6 italic">"{q.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue text-white flex items-center justify-center font-bold text-xs">
                    {q.name.charAt(0)}
                  </div>
                  <div>
                    <div className="text-sm font-bold text-navy">{q.name}</div>
                    <div className="text-[11px] text-slate">{q.role} · {q.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

const Insights = () => {
  const articles = [
    { category: "STRATEGY", title: "The Future of AI in Enterprise Learning", excerpt: "How generative AI is rewriting the playbook for corporate upskilling in 2025.", time: "8 min read", color: "bg-blue" },
    { category: "DATA SCIENCE", title: "Predictive Skills Gap Analysis", excerpt: "Using data to identify and close competency gaps before they impact your bottom line.", time: "12 min read", color: "bg-cyan" },
    { category: "CASE STUDY", title: "Scaling Learning to 100k+ Users", excerpt: "Technical hurdles and architectural solutions for global edtech deployments.", time: "15 min read", color: "bg-green-500" },
  ]

  return (
    <section id="insights" className="py-28 bg-navy dark-section">
      <div className="max-w-[1320px] mx-auto px-6">
        <SectionHeader 
          label="Insights"
          title="Thought Leadership on the Future of Work"
          body="Explore our latest articles, reports, and perspectives from industry experts."
          dark
          number="04"
        />

        <div className="flex gap-4 mb-12 overflow-x-auto pb-4">
          {['All Insights', 'AI & Machine Learning', 'Workforce Strategy', 'EdTech Trends', 'Case Studies'].map((cat, i) => (
            <button 
              key={i} 
              className={`px-5 py-2.5 rounded-full text-xs font-bold whitespace-nowrap transition-all border ${i === 0 ? 'bg-blue border-blue text-white' : 'bg-navy-mid border-white/10 text-white/60 hover:text-white'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -4 }}
              className="bg-navy-mid rounded-2xl overflow-hidden border border-white/8 group cursor-pointer transition-all hover:border-blue/40"
            >
              <div className={`h-1 w-full ${item.color}`} />
              <div className="p-8">
                <div className="text-[11px] font-bold text-cyan uppercase tracking-widest mb-4">{item.category}</div>
                <h3 className="text-xl font-display font-bold text-white mb-4 group-hover:text-cyan transition-colors">{item.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed mb-8">{item.excerpt}</p>
                <div className="pt-6 border-t border-white/5 flex items-center justify-between text-[11px] font-medium text-white/30 uppercase tracking-wider">
                  <span>{item.time}</span>
                  <span className="flex items-center gap-1 text-cyan opacity-0 group-hover:opacity-100 transition-opacity">Read Article <ArrowRight className="w-3 h-3" /></span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

const CTA = () => {
  const { setGetStartedOpen, setConsultationOpen } = useModals()
  return (
    <section className="py-32 bg-[#071B2A] relative overflow-hidden">
      <motion.div 
        animate={{ 
          opacity: [0.15, 0.25, 0.15],
          scale: [1, 1.1, 1]
        }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue blur-[120px] rounded-full"
      />
      
      <div className="relative z-10 max-w-3xl mx-auto text-center px-6">
        <div className="w-12 h-px bg-cyan mx-auto mb-6" />
        <div className="text-cyan font-mono text-[11px] uppercase tracking-[0.3em] mb-8">Start Your Journey</div>
        <h2 className="text-[clamp(40px,6vw,56px)] leading-[1.1] font-display font-extrabold text-white mb-8">
          Ready to Transform Your Workforce?
        </h2>
        <p className="text-white/60 text-lg mb-12">
          Join the world's most innovative companies in building a smarter, faster, and more resilient workforce with Aanya.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4">
          <PrimaryButton 
            size="lg" 
            className="shadow-[0_0_40px_rgba(37,99,235,0.35)]"
            onClick={() => setGetStartedOpen(true)}
          >
            Book a Demo
          </PrimaryButton>
          <GhostButton 
            size="lg"
            onClick={() => setConsultationOpen(true)}
          >
            Talk to Sales
          </GhostButton>
        </div>
        
        <div className="mt-12 flex justify-center gap-6 text-white/30 text-[12px] font-medium uppercase tracking-widest">
          <span>No commitment required</span>
          <span>·</span>
          <span>Enterprise pricing</span>
          <span>·</span>
          <span>Dedicated support</span>
        </div>
      </div>
    </section>
  )
}

const Footer = () => {
  return (
    <footer className="bg-[#050F1A] pt-20 pb-10 border-t border-white/5">
      <div className="max-w-[1320px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-1 mb-6">
              <span className="font-display font-extrabold text-2xl text-white tracking-tight">AANYA</span>
              <span className="w-1.5 h-1.5 bg-cyan rounded-full -mt-4" />
            </Link>
            <p className="text-white/40 text-[15px] leading-relaxed max-w-sm mb-10">
              Intelligent enterprise learning for a changing world. We empower organizations to unlock their human potential through AI and data.
            </p>
            
            <div className="flex gap-4 mb-10">
              {[Linkedin, Twitter, Youtube].map((Icon, i) => (
                <Link key={i} href="#" className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-blue transition-all">
                  <Icon className="w-5 h-5" />
                </Link>
              ))}
            </div>

            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white/70 placeholder:text-white/20 focus:outline-none focus:border-blue transition-all flex-1"
              />
              <button className="px-6 py-2.5 bg-blue text-white rounded-lg font-bold hover:bg-blue-glow transition-all">
                Subscribe
              </button>
            </div>
          </div>

          {[
            { title: 'Solutions', links: ['Corporate Learning', 'AI Tutoring', 'Skill Analytics', 'Strategy'] },
            { title: 'Company', links: ['About Us', 'Case Studies', 'Insights', 'Careers'] },
            { title: 'Resources', links: ['Documentation', 'Help Center', 'Partners', 'Community'] },
          ].map((col, i) => (
            <div key={i}>
              <h4 className="text-white/30 text-[11px] font-bold uppercase tracking-[0.2em] mb-8">{col.title}</h4>
              <ul className="space-y-4">
                {col.links.map(link => (
                  <li key={link}>
                    <Link href="#" className="text-white/60 text-sm hover:text-white hover:translate-x-1 transition-all inline-block">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-white/30 text-xs">© 2025 Aanya. All rights reserved.</div>
          <div className="flex gap-8">
            {['Privacy Policy', 'Terms', 'Sitemap'].map(link => (
              <Link key={link} href="#" className="text-white/30 text-xs hover:text-white transition-colors">{link}</Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-blue to-cyan z-[9999] origin-left"
      style={{ scaleX }}
    />
  )
}

const CursorGlow = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [smoothPos, setSmoothPos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  useEffect(() => {
    const animate = () => {
      setSmoothPos(prev => ({
        x: prev.x + (mousePos.x - prev.x) * 0.1,
        y: prev.y + (mousePos.y - prev.y) * 0.1
      }))
      requestAnimationFrame(animate)
    }
    const raf = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(raf)
  }, [mousePos])

  return (
    <div 
      className="fixed inset-0 pointer-events-none z-[9998] hidden lg:block"
      style={{
        background: `radial-gradient(400px at ${smoothPos.x}px ${smoothPos.y}px, rgba(37, 99, 235, 0.06), transparent)`
      }}
    />
  )
}

// --- Main Page Component ---

export default function Home() {
  return (
    <main className="relative selection:bg-blue/30">
      <ScrollProgress />
      <CursorGlow />
      <Navbar />
      <Hero />
      <TrustedByMarquee />
      <div className="gradient-divider" />
      <Services />
      <div className="gradient-divider" />
      <About />
      <div className="gradient-divider" />
      <BentoGrid />
      <div className="gradient-divider" />
      <WhyAanya />
      <div className="gradient-divider" />
      <CaseStudies />
      <div className="gradient-divider" />
      <Testimonials />
      <div className="gradient-divider" />
      <Insights />
      <CTA />
      <Footer />
    </main>
  )
}
