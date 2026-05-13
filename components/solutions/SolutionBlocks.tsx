'use client'

import { motion } from 'framer-motion'
import { LucideIcon, ArrowRight } from 'lucide-react'

// --- Features ---
export const SolutionFeatures = ({ features }: { features: any[] }) => (
  <section className="py-24 bg-slate-50">
    <div className="max-w-[1320px] mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-display font-bold text-navy mb-4">Core Capabilities</h2>
        <div className="w-20 h-1 bg-blue mx-auto" />
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((f, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all group"
          >
            <div className="w-14 h-14 rounded-2xl bg-blue/5 flex items-center justify-center mb-6 group-hover:bg-blue group-hover:text-white transition-colors text-blue">
              <f.icon className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-navy mb-3">{f.title}</h3>
            <p className="text-slate/70 leading-relaxed">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
)

// --- Process ---
export const SolutionProcess = ({ steps }: { steps: any[] }) => (
  <section className="py-24 bg-navy overflow-hidden relative">
    <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
       <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:100px_100px]" />
    </div>
    <div className="max-w-[1320px] mx-auto px-6 relative z-10">
      <div className="text-center mb-20">
        <h2 className="text-4xl font-display font-bold text-white mb-4">Implementation Journey</h2>
        <p className="text-white/40 font-mono text-sm uppercase tracking-widest">How we deliver success</p>
      </div>
      <div className="grid md:grid-cols-4 gap-4 relative">
        <div className="hidden md:block absolute top-[45px] left-0 w-full h-px bg-white/10" />
        {steps.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="relative p-6 text-center"
          >
            <div className="w-12 h-12 bg-blue text-white rounded-full flex items-center justify-center font-black mx-auto mb-6 relative z-10 shadow-[0_0_20px_rgba(37,99,235,0.4)]">
              {i + 1}
            </div>
            <h3 className="text-lg font-bold text-white mb-2">{s.title}</h3>
            <p className="text-white/40 text-sm leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
)

// --- Metrics ---
export const SolutionMetrics = ({ metrics }: { metrics: any[] }) => (
  <section className="py-24 bg-white border-y border-slate-100">
    <div className="max-w-[1320px] mx-auto px-6">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
        {metrics.map((m, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="text-5xl font-display font-black text-navy mb-2">{m.value}</div>
            <div className="text-sm font-mono text-blue uppercase tracking-widest">{m.label}</div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
)

// --- CTA ---
export const SolutionCTA = ({ category }: { category: string }) => (
  <section className="py-32 bg-[#0D2640] relative overflow-hidden">
    <div className="absolute inset-0 bg-[radial-gradient(circle_600px_at_50%_50%,#2563EB15,transparent)]" />
    <div className="max-w-[800px] mx-auto px-6 text-center relative z-10">
      <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-8">
        Ready to transform your {category.toLowerCase()} experience?
      </h2>
      <p className="text-xl text-white/60 mb-12 leading-relaxed">
        Join 200+ leading enterprises using Aanya to future-proof their workforce and learning infrastructure.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button className="px-10 py-5 bg-blue text-white rounded-xl font-bold hover:bg-blue-glow transition-all">
          Book a Consultation
        </button>
        <button className="px-10 py-5 bg-white/5 border border-white/10 text-white rounded-xl font-bold hover:bg-white/10 transition-all flex items-center justify-center gap-2">
          View Case Studies <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  </section>
)
