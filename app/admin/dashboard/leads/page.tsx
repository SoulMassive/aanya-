'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  Users, 
  Search, 
  Filter, 
  Download, 
  MoreVertical,
  Mail,
  Target,
  BarChart3,
  Calendar,
  Clock,
  ChevronLeft,
  ChevronRight,
  UserCheck,
  X
} from 'lucide-react'
import { toast } from 'sonner'

export default function LeadsPage() {
  const [leads, setLeads] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    const fetchLeads = async () => {
      try {
        const res = await fetch('/api/leads/all')
        const data = await res.json()
        if (data.success) {
          setLeads(data.data)
        }
      } catch (error) {
        toast.error('Failed to load leads')
      } finally {
        setIsLoading(false)
      }
    }
    fetchLeads()
  }, [])

  const filtered = leads.filter((l: any) => 
    l.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    l.userType.toLowerCase().includes(searchTerm.toLowerCase()) ||
    l.workEmail.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const exportCSV = () => {
    if (filtered.length === 0) return toast.error('No data to export')
    const headers = ['Name', 'Email', 'UserType', 'Goal', 'CompanySize', 'Date']
    const rows = filtered.map((l: any) => [
      l.name,
      l.workEmail,
      l.userType,
      l.goal,
      l.companySize,
      new Date(l.createdAt).toLocaleDateString()
    ])
    
    const csvContent = "data:text/csv;charset=utf-8," 
      + headers.join(",") + "\n" 
      + rows.map(e => e.join(",")).join("\n")

    const encodedUri = encodeURI(csvContent)
    const link = document.createElement("a")
    link.setAttribute("href", encodedUri)
    link.setAttribute("download", `aanya_leads_${new Date().toISOString().split('T')[0]}.csv`)
    document.body.appendChild(link)
    link.click()
    toast.success('Leads exported')
  }

  const handleStatusUpdate = async (id: string, newStatus: string) => {
    try {
      const res = await fetch(`/api/leads/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus })
      })
      if (res.ok) {
        setLeads((prev: any) => 
          prev.map((l: any) => l._id === id ? { ...l, status: newStatus } : l)
        )
        toast.success(`Lead moved to ${newStatus}`)
      }
    } catch (error) {
      toast.error('Failed to update lead status')
    }
  }

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this lead?')) return
    try {
      const res = await fetch(`/api/leads/${id}`, { method: 'DELETE' })
      if (res.ok) {
        setLeads(prev => prev.filter((l: any) => l._id !== id))
        toast.success('Lead removed')
      } else {
        toast.error('Failed to delete')
      }
    } catch (error) {
      toast.error('Error deleting lead')
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-display font-bold text-white mb-2">Onboarding Leads</h1>
          <p className="text-white/40">Track and convert multi-step flow submissions.</p>
        </div>
        <div className="flex items-center gap-3">
          <button 
            onClick={exportCSV}
            className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-sm font-medium hover:bg-white/10 transition-all text-white"
          >
            <Download size={16} />
            Export CSV
          </button>
        </div>
      </div>

      {/* Toolbar */}
      <div className="flex flex-col lg:flex-row gap-4 items-center justify-between p-4 bg-[#071B2A] border border-white/10 rounded-2xl">
        <div className="relative w-full lg:w-96">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20 w-4 h-4" />
          <input 
            type="text" 
            placeholder="Search by name, type, or email..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 py-2.5 text-sm text-white focus:border-blue/50 outline-none transition-all"
          />
        </div>
        <div className="flex items-center gap-4 w-full lg:w-auto">
          <button className="flex items-center gap-2 px-4 py-2 text-white/40 hover:text-white transition-all text-sm">
            <Filter size={16} />
            Filters
          </button>
          <div className="h-6 w-px bg-white/10" />
          <div className="flex items-center gap-1 text-white/40 text-sm">
            <span>Showing</span>
            <span className="font-bold text-white">{filtered.length}</span>
            <span>of</span>
            <span className="font-bold text-white">{leads.length}</span>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="bg-[#071B2A] border border-white/10 rounded-2xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="text-[10px] text-white/30 uppercase tracking-[0.2em] bg-white/[0.02]">
              <tr>
                <th className="px-6 py-5 font-medium">Lead Info</th>
                <th className="px-6 py-5 font-medium">Categorization</th>
                <th className="px-6 py-5 font-medium">Primary Goal</th>
                <th className="px-6 py-5 font-medium">Submission</th>
                <th className="px-6 py-5 font-medium">Status</th>
                <th className="px-6 py-5 font-medium"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {filtered.map((l: any) => (
                <tr key={l._id} className="group hover:bg-white/[0.02] transition-all">
                  <td className="px-6 py-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-cyan/10 flex items-center justify-center text-cyan font-bold">
                        {l.name[0]}
                      </div>
                      <div>
                        <div className="font-bold text-white text-sm">{l.name}</div>
                        <div className="text-xs text-white/40 flex items-center gap-1 mt-0.5">
                          <Mail size={10} />
                          {l.workEmail}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-6">
                    <div className="flex flex-col gap-1">
                      <div className="text-sm text-white/80 font-medium flex items-center gap-1.5">
                        <UserCheck size={14} className="text-white/20" />
                        {l.userType}
                      </div>
                      <div className="text-[10px] text-white/40 font-mono">
                        SIZE: {l.companySize}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-6">
                    <div className="flex items-center gap-2 px-3 py-1 bg-white/5 rounded-full border border-white/5 w-fit">
                      <Target size={12} className="text-blue" />
                      <span className="text-xs text-white/60">{l.goal}</span>
                    </div>
                  </td>
                  <td className="px-6 py-6">
                    <div className="flex flex-col gap-1">
                      <div className="text-sm text-white/60 flex items-center gap-1.5">
                        <Calendar size={14} className="text-white/20" />
                        {new Date(l.createdAt).toLocaleDateString()}
                      </div>
                      <div className="text-[10px] text-white/20 font-mono">
                        {new Date(l.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-6">
                    <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border ${
                      l.status === 'active' ? 'bg-green-400/10 text-green-400 border-green-400/20' :
                      l.status === 'onboarding' ? 'bg-purple-400/10 text-purple-400 border-purple-400/20' :
                      l.status === 'inactive' ? 'bg-red-400/10 text-red-400 border-red-400/20' :
                      'bg-cyan/10 text-cyan border-cyan/20'
                    }`}>
                      {l.status || 'new'}
                    </span>
                  </td>
                  <td className="px-6 py-6 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button 
                        onClick={() => handleStatusUpdate(l._id, 'onboarding')}
                        className={`p-2 rounded-lg transition-all ${l.status === 'onboarding' ? 'bg-purple-400 text-white' : 'bg-white/5 text-white/20 hover:text-purple-400 hover:bg-purple-400/10'}`}
                        title="Start Onboarding"
                      >
                        <Clock size={14} />
                      </button>
                      <button 
                        onClick={() => handleStatusUpdate(l._id, 'active')}
                        className={`p-2 rounded-lg transition-all ${l.status === 'active' ? 'bg-green-400 text-white' : 'bg-white/5 text-white/20 hover:text-green-400 hover:bg-green-400/10'}`}
                        title="Mark Active"
                      >
                        <UserCheck size={14} />
                      </button>
                      <button 
                        onClick={() => handleStatusUpdate(l._id, 'inactive')}
                        className={`p-2 rounded-lg transition-all ${l.status === 'inactive' ? 'bg-red-400 text-white' : 'bg-white/5 text-white/20 hover:text-red-400 hover:bg-red-400/10'}`}
                        title="Mark Inactive"
                      >
                        <Target size={14} />
                      </button>
                      <div className="w-px h-4 bg-white/10 mx-1" />
                      <button 
                        onClick={() => handleDelete(l._id)}
                        className="p-2 bg-white/5 text-white/20 hover:text-red-400 hover:bg-red-400/10 rounded-lg transition-all"
                        title="Delete"
                      >
                        <X size={14} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {isLoading && (
                <tr>
                  <td colSpan={6} className="px-6 py-20 text-center">
                    <div className="flex flex-col items-center gap-3">
                      <div className="w-8 h-8 border-2 border-cyan border-t-transparent rounded-full animate-spin" />
                      <span className="text-sm text-white/20 font-mono uppercase">Deciphering Lead Data...</span>
                    </div>
                  </td>
                </tr>
              )}
              {!isLoading && filtered.length === 0 && (
                <tr>
                  <td colSpan={6} className="px-6 py-20 text-center text-white/20 italic">
                    No leads found in the system.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
