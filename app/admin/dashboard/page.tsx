'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  Users, 
  MessageSquare, 
  TrendingUp, 
  Calendar,
  ArrowUpRight,
  Clock,
  CheckCircle2
} from 'lucide-react'

export default function DashboardOverview() {
  const [stats, setStats] = useState({
    totalLeads: 0,
    totalConsultations: 0,
    conversionRate: '0%',
    activeSessions: 0
  })

  const [recentConsultations, setRecentConsultations] = useState([])
  const [recentLeads, setRecentLeads] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch consultations
        const resC = await fetch('/api/consultations/all')
        const dataC = await resC.json()
        if (dataC.success) {
          setRecentConsultations(dataC.data.slice(0, 5))
          setStats(prev => ({ ...prev, totalConsultations: dataC.data.length }))
        }

        // Fetch leads
        const resL = await fetch('/api/leads/all')
        const dataL = await resL.json()
        if (dataL.success) {
          setRecentLeads(dataL.data.slice(0, 5))
          setStats(prev => ({ ...prev, totalLeads: dataL.data.length }))
        }
      } catch (error) {
        console.error('Error fetching dashboard data:', error)
      }
    }
    fetchData()
  }, [])

  const statCards = [
    { name: 'Total Leads', value: stats.totalLeads, icon: Users, color: 'text-blue', bg: 'bg-blue/10' },
    { name: 'Consultations', value: stats.totalConsultations, icon: MessageSquare, color: 'text-cyan', bg: 'bg-cyan/10' },
    { name: 'Active Sessions', value: stats.activeUsers, icon: Clock, color: 'text-purple-400', bg: 'bg-purple-400/10' },
    { name: 'Conversion', value: stats.conversionRate, icon: TrendingUp, color: 'text-green-400', bg: 'bg-green-400/10' },
  ]

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-display font-bold text-white mb-2">Dashboard Overview</h1>
        <p className="text-white/40">Real-time performance and submission metrics.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statCards.map((stat, i) => (
          <motion.div
            key={stat.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-[#071B2A] border border-white/10 rounded-2xl p-6 relative overflow-hidden group hover:border-white/20 transition-all"
          >
            <div className="flex items-center justify-between relative z-10">
              <div>
                <p className="text-white/40 text-xs font-mono uppercase tracking-widest mb-1">{stat.name}</p>
                <p className="text-3xl font-display font-bold text-white">{stat.value}</p>
              </div>
              <div className={`w-12 h-12 rounded-xl ${stat.bg} flex items-center justify-center ${stat.color}`}>
                <stat.icon size={24} />
              </div>
            </div>
            <div className="mt-4 flex items-center gap-2 text-[10px] text-green-400 font-bold">
              <ArrowUpRight size={12} />
              <span>+12.4% FROM LAST MONTH</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Tables Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Consultations */}
        <div className="bg-[#071B2A] border border-white/10 rounded-2xl overflow-hidden">
          <div className="p-6 border-b border-white/5 flex items-center justify-between">
            <h2 className="font-bold flex items-center gap-2">
              <MessageSquare size={18} className="text-blue" />
              Recent Consultations
            </h2>
            <Link href="/admin/dashboard/consultations" className="text-xs text-blue hover:underline">View all</Link>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="text-[10px] text-white/30 uppercase tracking-[0.2em] bg-white/[0.02]">
                <tr>
                  <th className="px-6 py-4 font-medium">Name</th>
                  <th className="px-6 py-4 font-medium">Company</th>
                  <th className="px-6 py-4 font-medium">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {recentConsultations.map((c: any) => (
                  <tr key={c._id} className="text-sm text-white/60 hover:bg-white/[0.02] transition-all">
                    <td className="px-6 py-4 font-medium text-white">{c.fullName}</td>
                    <td className="px-6 py-4">{c.company}</td>
                    <td className="px-6 py-4">
                      <span className="flex items-center gap-1.5 text-xs text-blue bg-blue/10 px-2 py-1 rounded-full w-fit">
                        <Calendar size={10} />
                        Pending
                      </span>
                    </td>
                  </tr>
                ))}
                {recentConsultations.length === 0 && (
                  <tr>
                    <td colSpan={3} className="px-6 py-12 text-center text-white/20 italic">No recent consultations</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Recent Leads */}
        <div className="bg-[#071B2A] border border-white/10 rounded-2xl overflow-hidden">
          <div className="p-6 border-b border-white/5 flex items-center justify-between">
            <h2 className="font-bold flex items-center gap-2">
              <Users size={18} className="text-cyan" />
              Recent Leads
            </h2>
            <Link href="/admin/dashboard/leads" className="text-xs text-cyan hover:underline">View all</Link>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="text-[10px] text-white/30 uppercase tracking-[0.2em] bg-white/[0.02]">
                <tr>
                  <th className="px-6 py-4 font-medium">Lead</th>
                  <th className="px-6 py-4 font-medium">Type</th>
                  <th className="px-6 py-4 font-medium">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {recentLeads.map((l: any) => (
                  <tr key={l._id} className="text-sm text-white/60 hover:bg-white/[0.02] transition-all">
                    <td className="px-6 py-4 font-medium text-white">{l.name}</td>
                    <td className="px-6 py-4">{l.userType}</td>
                    <td className="px-6 py-4">
                      <span className="flex items-center gap-1.5 text-xs text-cyan bg-cyan/10 px-2 py-1 rounded-full w-fit">
                        <CheckCircle2 size={10} />
                        New
                      </span>
                    </td>
                  </tr>
                ))}
                {recentLeads.length === 0 && (
                  <tr>
                    <td colSpan={3} className="px-6 py-12 text-center text-white/20 italic">No recent leads</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
