'use client'

import { motion, AnimatePresence } from "framer-motion"
import { X, Loader2 } from "lucide-react"
import { useEffect, useState } from "react"
import { toast } from "sonner"

interface ModalProps {
  isOpen: boolean
  onClose: () => void
}

export const BookConsultationModal = ({ isOpen, onClose }: ModalProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    fullName: '',
    workEmail: '',
    company: '',
    teamSize: '',
    message: '',
    preferredDate: ''
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const response = await fetch('/api/consultations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })
      
      const data = await response.json()
      
      if (data.success) {
        toast.success("Consultation requested successfully!")
        onClose()
        setFormData({
          fullName: '',
          workEmail: '',
          company: '',
          teamSize: '',
          message: '',
          preferredDate: ''
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
            {/* X close button */}
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 text-white/40 hover:text-white 
                         w-8 h-8 flex items-center justify-center rounded-lg
                         hover:bg-white/10 transition-all"
            >
              <X size={18} />
            </button>
            
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-2">Book a Consultation</h2>
              <p className="text-white/60">Fill out the form below and we'll get back to you shortly.</p>
            </div>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <label className="text-sm font-medium text-white/80">Full Name</label>
                <input 
                  type="text" 
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder="Your full name"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:border-[#2563EB] outline-none ring-1 ring-[#2563EB]/30 transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-white/80">Work Email</label>
                <input 
                  type="email" 
                  required
                  value={formData.workEmail}
                  onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                  placeholder="name@company.com"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:border-[#2563EB] outline-none ring-1 ring-[#2563EB]/30 transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-white/80">Company</label>
                <input 
                  type="text" 
                  required
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  placeholder="Company name"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:border-[#2563EB] outline-none ring-1 ring-[#2563EB]/30 transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-white/80">Team Size</label>
                <select 
                  required
                  value={formData.teamSize}
                  onChange={(e) => setFormData({ ...formData, teamSize: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-[#2563EB] outline-none ring-1 ring-[#2563EB]/30 transition-all appearance-none"
                >
                  <option value="" disabled className="bg-[#071B2A]">Select team size</option>
                  <option value="1-50" className="bg-[#071B2A]">1-50 employees</option>
                  <option value="51-200" className="bg-[#071B2A]">51-200 employees</option>
                  <option value="201-1000" className="bg-[#071B2A]">201-1000 employees</option>
                  <option value="1000+" className="bg-[#071B2A]">1000+ employees</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-white/80">What are you looking for?</label>
                <textarea 
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about your goals..."
                  rows={3}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:border-[#2563EB] outline-none ring-1 ring-[#2563EB]/30 transition-all resize-none"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-white/80">Preferred date (optional)</label>
                <input 
                  type="date" 
                  value={formData.preferredDate}
                  onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-[#2563EB] outline-none ring-1 ring-[#2563EB]/30 transition-all"
                />
              </div>

              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-[#2563EB] text-white rounded-lg font-bold hover:bg-[#1D4ED8] transition-colors mt-4 flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Submitting...
                  </>
                ) : "Request Consultation"}
              </button>
              
              <p className="text-center text-white/40 text-xs mt-4">
                Usually responds within 1 business day
              </p>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
