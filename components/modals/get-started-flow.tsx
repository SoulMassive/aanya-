'use client'

import { motion, AnimatePresence } from "framer-motion"
import { X, GraduationCap, Building2, University, Landmark, ArrowRight, ChevronLeft, Loader2 } from "lucide-react"
import { useState, useEffect } from "react"
import { toast } from "sonner"

interface ModalProps {
  isOpen: boolean
  onClose: () => void
}

export const GetStartedFlow = ({ isOpen, onClose }: ModalProps) => {
  const [step, setStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    userType: '',
    goal: '',
    name: '',
    workEmail: '',
    companySize: ''
  })

  // ESC to close
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    document.addEventListener("keydown", handleKey)
    return () => document.removeEventListener("keydown", handleKey)
  }, [onClose])

  // Lock body scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => { document.body.style.overflow = "unset" }
  }, [isOpen])

  const steps = [
    { id: 1, title: "Who are you?" },
    { id: 2, title: "What's your primary goal?" },
    { id: 3, title: "Let's get you set up" }
  ]

  const handleNext = () => {
    if (step < 3) setStep(step + 1)
  }

  const handleBack = () => {
    if (step > 1) setStep(step - 1)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })
      
      const data = await response.json()
      
      if (data.success) {
        toast.success("Welcome aboard! We'll be in touch soon.")
        onClose()
        setStep(1)
        setFormData({
          userType: '',
          goal: '',
          name: '',
          workEmail: '',
          companySize: ''
        })
      } else {
        toast.error(data.error || "Something went wrong.")
      }
    } catch (error) {
      toast.error("Failed to submit request.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[150] flex items-end sm:items-center justify-center p-0 sm:p-4">
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
          
          {/* Modal panel */}
          <motion.div
            className="relative z-10 w-full max-w-lg 
                       bg-[#071B2A] border border-white/10 
                       rounded-t-2xl sm:rounded-2xl shadow-2xl p-6 sm:p-8
                       max-h-[90vh] overflow-y-auto"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-2">
                {step > 1 && (
                  <button onClick={handleBack} className="text-white/40 hover:text-white mr-2">
                    <ChevronLeft size={20} />
                  </button>
                )}
                <div className="flex gap-1.5">
                  {[1, 2, 3].map((s) => (
                    <div 
                      key={s}
                      className={`h-1.5 rounded-full transition-all duration-300 ${s === step ? 'w-6 bg-[#2563EB]' : 'w-1.5 bg-white/20'}`}
                    />
                  ))}
                </div>
              </div>
              <button 
                onClick={onClose}
                className="text-white/40 hover:text-white 
                           w-8 h-8 flex items-center justify-center rounded-lg
                           hover:bg-white/10 transition-all"
              >
                <X size={18} />
              </button>
            </div>

            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <h2 className="text-2xl font-bold text-white">Who are you?</h2>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { id: 'student', icon: GraduationCap, label: 'Student / Professional' },
                      { id: 'enterprise', icon: Building2, label: 'Enterprise / Corporate' },
                      { id: 'university', icon: University, label: 'University / Institution' },
                      { id: 'government', icon: Landmark, label: 'Government / Public Sector' },
                    ].map((card) => (
                      <button
                        key={card.id}
                        onClick={() => setFormData({ ...formData, userType: card.label })}
                        className={`flex flex-col items-center gap-3 p-5 rounded-xl border transition-all text-center group ${formData.userType === card.label ? 'bg-[#112D4A] border-[#2563EB] ring-1 ring-[#2563EB]/40' : 'bg-[#0D2640] border-white/10 hover:border-white/20'}`}
                      >
                        <card.icon className={`w-8 h-8 transition-colors ${formData.userType === card.label ? 'text-[#2563EB]' : 'text-white/40 group-hover:text-white/60'}`} />
                        <span className={`text-sm font-medium ${formData.userType === card.label ? 'text-white' : 'text-white/60 group-hover:text-white/80'}`}>{card.label}</span>
                      </button>
                    ))}
                  </div>
                  <button 
                    disabled={!formData.userType}
                    onClick={handleNext}
                    className={`w-full py-4 rounded-lg font-bold flex items-center justify-center gap-2 transition-all ${formData.userType ? 'bg-[#2563EB] text-white' : 'bg-white/5 text-white/20 cursor-not-allowed'}`}
                  >
                    Next <ArrowRight size={18} />
                  </button>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <h2 className="text-2xl font-bold text-white">What's your primary goal?</h2>
                  <div className="flex flex-col gap-3">
                    {[
                      "Upskill my team",
                      "Implement an LMS",
                      "Transform our L&D strategy",
                      "Explore AI learning tools"
                    ].map((goal) => (
                      <button
                        key={goal}
                        onClick={() => setFormData({ ...formData, goal })}
                        className={`w-full px-5 py-3.5 rounded-full border text-left font-medium transition-all ${formData.goal === goal ? 'bg-[#2563EB] border-[#2563EB] text-white' : 'bg-white/5 border-white/10 text-white/60 hover:border-white/20'}`}
                      >
                        {goal}
                      </button>
                    ))}
                  </div>
                  <button 
                    disabled={!formData.goal}
                    onClick={handleNext}
                    className={`w-full py-4 rounded-lg font-bold flex items-center justify-center gap-2 transition-all ${formData.goal ? 'bg-[#2563EB] text-white' : 'bg-white/5 text-white/20 cursor-not-allowed'}`}
                  >
                    Next <ArrowRight size={18} />
                  </button>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="space-y-4">
                    <input 
                      type="text" 
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Name"
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:border-[#2563EB] outline-none ring-1 ring-[#2563EB]/30 transition-all"
                    />
                    <input 
                      type="email" 
                      required
                      value={formData.workEmail}
                      onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                      placeholder="Work email"
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:border-[#2563EB] outline-none ring-1 ring-[#2563EB]/30 transition-all"
                    />
                    <select 
                      required
                      value={formData.companySize}
                      onChange={(e) => setFormData({ ...formData, companySize: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-[#2563EB] outline-none ring-1 ring-[#2563EB]/30 transition-all appearance-none"
                    >
                      <option value="" disabled className="bg-[#071B2A]">Company size</option>
                      <option value="1-50" className="bg-[#071B2A]">1-50 employees</option>
                      <option value="51-200" className="bg-[#071B2A]">51-200 employees</option>
                      <option value="201-1000" className="bg-[#071B2A]">201-1000 employees</option>
                      <option value="1000+" className="bg-[#071B2A]">1000+ employees</option>
                    </select>
                  </div>
                  <div className="space-y-3">
                    <button 
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 bg-[#2563EB] text-white rounded-lg font-bold hover:bg-[#1D4ED8] transition-all flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Processing...
                        </>
                      ) : "Start Free Trial"}
                    </button>
                    <button 
                      type="button"
                      className="w-full py-4 text-white/60 hover:text-white transition-all text-sm font-medium"
                    >
                      Talk to an Expert
                    </button>
                  </div>
                </form>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
