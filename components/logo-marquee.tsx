'use client'

import { Building2, Cloud, Code2, Database, Zap, Users } from 'lucide-react'

const logos = [
  { name: 'MIT', icon: Building2 },
  { name: 'Google', icon: Cloud },
  { name: 'Infosys', icon: Code2 },
  { name: 'AWS', icon: Zap },
  { name: 'Meta', icon: Database },
  { name: 'Microsoft', icon: Users },
]

export function LogoMarquee() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-background via-background to-background py-12">
      <div className="flex gap-16 animate-marquee">
        {[...logos, ...logos].map((logo, i) => {
          const Icon = logo.icon
          return (
            <div key={i} className="flex items-center gap-3 whitespace-nowrap flex-shrink-0">
              <Icon className="w-6 h-6 text-muted-foreground" />
              <span className="text-sm font-medium text-muted-foreground">{logo.name}</span>
            </div>
          )
        })}
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </div>
  )
}
