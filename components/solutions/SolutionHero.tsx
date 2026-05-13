'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { GhostButton, PrimaryButton } from '../ui/cta-buttons'
import { useModals } from '@/context/modal-context'

interface HeroProps {
  headline: string
  sub: string
  badge: string
  metric?: { label: string, value: string }
  chatPreview?: boolean
  nodeGraph?: boolean
}

export const SolutionHero = ({ headline, sub, badge, metric, chatPreview, nodeGraph }: HeroProps) => {
  const { setConsultationOpen, setGetStartedOpen } = useModals()
  return (
    <section className="relative pt-40 pb-24 overflow-hidden bg-[#071B2A]">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-blue/10 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-[1320px] mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 bg-[#112D4A] border border-blue/30 rounded-full px-4 py-1.5 mb-8">
              <span className="w-2 h-2 bg-cyan rounded-full animate-pulse" />
              <span className="text-[11px] font-mono tracking-widest text-cyan uppercase">{badge}</span>
            </div>
            
            <h1 className="text-white text-[clamp(40px,5vw,72px)] leading-[1.1] font-display font-bold tracking-tight mb-8">
              {headline}
            </h1>
            
            <p className="text-xl text-white/60 mb-10 max-w-xl leading-relaxed">
              {sub}
            </p>
            
            <div className="flex flex-wrap gap-4">
              <PrimaryButton onClick={() => setGetStartedOpen(true)}>
                Request Demo
              </PrimaryButton>
              <GhostButton onClick={() => setConsultationOpen(true)}>
                Download Brochure
              </GhostButton>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            {metric && (
              <div className="relative bg-[#0D2640] border border-white/10 rounded-3xl p-10 shadow-2xl overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue/10 blur-3xl group-hover:bg-blue/20 transition-colors" />
                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="text-sm font-mono text-cyan uppercase tracking-[0.2em] mb-4">{metric.label}</div>
                  <div className="text-8xl font-display font-black text-white mb-2 drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                    {metric.value}%
                  </div>
                  <div className="w-full max-w-[200px] h-2 bg-white/5 rounded-full overflow-hidden mt-6">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${metric.value}%` }}
                      transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                      className="h-full bg-blue shadow-[0_0_15px_#2563EB]"
                    />
                  </div>
                </div>
              </div>
            )}

            {chatPreview && (
              <div className="bg-[#0D2640] border border-white/10 rounded-2xl p-6 shadow-2xl max-w-md mx-auto">
                <div className="flex items-center gap-3 mb-6 border-b border-white/5 pb-4">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                  <span className="text-xs font-mono text-white/40 ml-2">Aanya AI Tutor v4.0</span>
                </div>
                <div className="space-y-4">
                  <div className="bg-white/5 rounded-xl p-3 text-sm text-white/80 self-start max-w-[80%]">
                    Can you explain the impact of cognitive load on learning?
                  </div>
                  <div className="bg-blue/20 border border-blue/30 rounded-xl p-3 text-sm text-blue-100 self-end ml-auto max-w-[80%]">
                    Certainly. Cognitive load refers to the amount of working memory used... 
                    <span className="inline-block w-2 h-4 bg-cyan ml-1 animate-pulse" />
                  </div>
                </div>
              </div>
            )}

            {nodeGraph && (
              <div className="aspect-square relative flex items-center justify-center">
                <div className="absolute inset-0 bg-blue/5 rounded-full blur-3xl" />
                <svg className="w-full h-full relative z-10" viewBox="0 0 400 400">
                  {[...Array(8)].map((_, i) => (
                    <motion.line
                      key={i}
                      x1="200" y1="200"
                      x2={200 + Math.cos(i * Math.PI / 4) * 120}
                      y2={200 + Math.sin(i * Math.PI / 4) * 120}
                      stroke="rgba(56, 189, 248, 0.2)"
                      strokeWidth="2"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 2, delay: i * 0.1 }}
                    />
                  ))}
                  {[...Array(8)].map((_, i) => (
                    <motion.circle
                      key={i}
                      cx={200 + Math.cos(i * Math.PI / 4) * 120}
                      cy={200 + Math.sin(i * Math.PI / 4) * 120}
                      r="6"
                      fill={i % 2 === 0 ? "#38BDF8" : "#2563EB"}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.5, delay: 1 + i * 0.1 }}
                    />
                  ))}
                  <motion.circle
                    cx="200" cy="200" r="12"
                    fill="#38BDF8"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </svg>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
