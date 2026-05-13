'use client'

import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

interface OverviewProps {
  text: string
  bullets: string[]
  chartData?: any[]
  radarData?: boolean
  skillHeatMap?: boolean
  donutData?: any[]
  learningCurve?: boolean
  branchingPaths?: boolean
  atRiskTable?: any[]
  contentGenPreview?: boolean
  skillMatrix?: boolean
  opportunityCards?: any[]
  performanceTrends?: any[]
  candidatePipeline?: any[]
  maturityModel?: { current: number }
  timeline?: string[]
  experiencePreview?: boolean
  roiSummary?: { investment: string, return: string, roi: string }
}

export const SolutionOverview = (props: OverviewProps) => {
  const { text, bullets } = props

  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1320px] mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-display font-bold text-navy mb-8 leading-tight">
              {text}
            </h2>
            <div className="space-y-4 mb-10">
              {bullets.map((bullet, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="w-6 h-6 rounded-full bg-blue/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-blue" />
                  </div>
                  <span className="text-lg text-slate leading-relaxed">{bullet}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-slate-50 border border-slate-100 rounded-3xl p-8 shadow-xl"
          >
            {/* Visual variants based on props */}
            {props.chartData && (
              <div className="space-y-6">
                <div className="text-sm font-bold text-navy uppercase tracking-wider mb-2">Skills Completed by Dept</div>
                {props.chartData.map((item, i) => (
                  <div key={i} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-slate/60">{item.label}</span>
                      <span className="font-bold text-navy">{item.value}%</span>
                    </div>
                    <div className="h-3 bg-slate-200 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.value}%` }}
                        className="h-full bg-blue"
                      />
                    </div>
                  </div>
                ))}
              </div>
            )}

            {props.donutData && (
              <div className="flex flex-col items-center">
                <div className="text-sm font-bold text-navy uppercase tracking-wider mb-8">Compliance Status</div>
                <div className="relative w-48 h-48">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle cx="96" cy="96" r="80" fill="transparent" stroke="#F1F5F9" strokeWidth="20" />
                    <motion.circle 
                      cx="96" cy="96" r="80" fill="transparent" stroke="#38BDF8" strokeWidth="20"
                      strokeDasharray={2 * Math.PI * 80}
                      initial={{ strokeDashoffset: 2 * Math.PI * 80 }}
                      whileInView={{ strokeDashoffset: 2 * Math.PI * 80 * (1 - 0.87) }}
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-4xl font-display font-black text-navy">87%</span>
                    <span className="text-[10px] text-slate/40 font-mono uppercase">Completed</span>
                  </div>
                </div>
                <div className="mt-8 grid grid-cols-3 gap-4 w-full">
                  {props.donutData.map((d: any) => (
                    <div key={d.label} className="text-center">
                      <div className="text-xs font-bold text-navy">{d.value}%</div>
                      <div className="text-[10px] text-slate/40 uppercase">{d.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {props.roiSummary && (
               <div className="space-y-8">
                  <div className="text-sm font-bold text-navy uppercase tracking-wider mb-4">Investment Outcome Summary</div>
                  <div className="grid gap-6">
                    <div className="flex items-center justify-between p-4 bg-white rounded-xl border border-slate-100 shadow-sm">
                      <span className="text-slate/60 text-sm">Initial Investment</span>
                      <span className="font-display font-bold text-navy text-xl">{props.roiSummary.investment}</span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-white rounded-xl border border-slate-100 shadow-sm">
                      <span className="text-slate/60 text-sm">Measurable Return</span>
                      <span className="font-display font-bold text-navy text-xl">{props.roiSummary.return}</span>
                    </div>
                    <div className="p-6 bg-blue rounded-xl text-white text-center">
                      <div className="text-[10px] font-mono uppercase tracking-widest opacity-60 mb-1">Total ROI</div>
                      <div className="text-5xl font-display font-black">{props.roiSummary.roi}</div>
                    </div>
                  </div>
               </div>
            )}

            {!props.chartData && !props.donutData && !props.roiSummary && (
              <div className="flex items-center justify-center h-full min-h-[300px]">
                <div className="text-slate/20 font-display font-black text-6xl text-center select-none">
                  AANYA<br />INSIGHTS
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
