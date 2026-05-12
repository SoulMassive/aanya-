'use client'

import { motion } from 'framer-motion'
import { LucideIcon } from 'lucide-react'

interface ServiceCardProps {
  icon: LucideIcon
  title: string
  description: string
  index?: number
  iconClassName?: string
  iconBgClassName?: string
}

export function ServiceCard({
  icon: Icon,
  title,
  description,
  index = 0,
  iconClassName = 'text-primary',
  iconBgClassName = 'bg-primary/10',
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      whileHover={{ y: -8, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
      className="p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/50 transition-all group cursor-pointer relative overflow-hidden"
    >
      <div className={`absolute top-0 right-0 w-24 h-24 ${iconBgClassName} blur-2xl -z-10 group-hover:opacity-100 transition-opacity opacity-0`} />
      <div className={`mb-4 p-3 rounded-xl ${iconBgClassName} w-fit group-hover:scale-110 transition-transform`}>
        <Icon className={`w-6 h-6 ${iconClassName}`} />
      </div>
      <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">{title}</h3>
      <p className="text-sm text-foreground/60 leading-relaxed">{description}</p>
    </motion.div>
  )
}
