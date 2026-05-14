'use client'

import { motion, Variants } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { ReactNode } from "react"

interface ButtonProps {
  children: ReactNode
  onClick?: () => void
  className?: string
  size?: "sm" | "md" | "lg" | "xl"
}

// ─── Ghost Button (Book Consultation) ───────────────────────
export const GhostButton = ({ 
  children, 
  onClick, 
  className = "",
  size = "md"
}: ButtonProps) => {
  const sizes = {
    sm: "px-4 py-2 text-[13px] h-[36px]",
    md: "px-5 py-2.5 text-[14px] h-[42px]",
    lg: "px-7 py-3.5 text-[15px] h-[52px]",
    xl: "px-9 py-4 text-[16px] h-[60px]"
  }
  
  return (
    <motion.button
      onClick={onClick}
      type="button"
      role="button"
      className={`
        relative inline-flex items-center justify-center gap-2
        ${sizes[size]} rounded-lg
        font-medium text-white
        bg-white/[0.06] border border-white/[0.15]
        transition-colors duration-200
        focus:outline-none focus-visible:ring-2 
        focus-visible:ring-blue-500/60 focus-visible:ring-offset-2 
        focus-visible:ring-offset-transparent
        ${className}
      `}
      whileHover={{ 
        y: -1,
        backgroundColor: "rgba(255,255,255,0.12)",
        borderColor: "rgba(255,255,255,0.28)",
        boxShadow: "0 4px 16px rgba(0, 0, 0, 0.2)"
      }}
      whileTap={{ scale: 0.97, y: 0, backgroundColor: "rgba(255,255,255,0.08)" }}
      transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.button>
  )
}

// ─── Primary Button (Get Started) ───────────────────────────
export const PrimaryButton = ({ 
  children, 
  onClick, 
  className = "",
  size = "md",
  showArrow = true
}: ButtonProps & { showArrow?: boolean }) => {
  const sizes = {
    sm: "px-4 py-2 text-[13px] h-[36px]",
    md: "px-5 py-2.5 text-[14px] h-[42px]",
    lg: "px-7 py-3.5 text-[15px] h-[52px]",
    xl: "px-9 py-4 text-[16px] h-[60px]"
  }

  const arrowVariants: Variants = {
    rest: { x: 0 },
    hover: { x: 4, transition: { duration: 0.2, ease: "easeOut" } }
  }

  return (
    <div className="relative inline-block">
      {/* Ambient glow */}
      <motion.div
        className="absolute -bottom-2 left-1/2 -translate-x-1/2 
                   w-[70%] h-3 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, rgba(37,99,235,0.5) 0%, transparent 70%)",
          filter: "blur(8px)"
        }}
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
      
      <motion.button
        onClick={onClick}
        type="button"
        role="button"
        className={`
          relative inline-flex items-center justify-center gap-2
          ${sizes[size]} rounded-lg
          font-semibold text-white
          bg-[#2563EB] border border-[#2563EB]
          focus:outline-none focus-visible:ring-2 
          focus-visible:ring-blue-300 focus-visible:ring-offset-2
          focus-visible:ring-offset-transparent
          ${className}
        `}
        initial="rest"
        whileHover="hover"
        whileTap={{ scale: 0.97 }}
        variants={{
          rest: { y: 0, backgroundColor: "#2563EB", boxShadow: "0 0 0 0 rgba(37,99,235,0)" },
          hover: { y: -1, backgroundColor: "#3B82F6", boxShadow: "0 0 20px rgba(37,99,235,0.4)" }
        }}
        transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
      >
        <span>{children}</span>
        {showArrow && (
          <motion.span variants={arrowVariants} className="flex items-center ml-2">
            <ArrowRight size={16} strokeWidth={2.5} />
          </motion.span>
        )}
      </motion.button>
    </div>
  )
}
