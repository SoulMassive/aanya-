'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  MessageSquare, 
  Search, 
  Filter, 
  Download, 
  MoreVertical,
  Mail,
  Building,
  Users,
  Calendar,
  Clock,
  ChevronLeft,
  ChevronRight,
  UserCheck,
  X
} from 'lucide-react'
import { toast } from 'sonner'

export default function ConsultationsPage() {
  const [consultations, setConsultations] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    const fetchConsultations = async () => {
      try {
        const res = await fetch('/api/consultations/all')
        const data = await res.json()
        if (data.success) {
          setConsultations(data.data)
        }
      } catch (error) {
        toast.error('Failed to load consultations')
      } finally {
        setIsLoading(false)
      }
    }
    fetchConsultations()
  }, [])

  const filtered = consultations.filter((c: any) => 
    c.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    c.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
    c.workEmail.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const exportCSV = () => {
    if (filtered.length === 0) return toast.error('No data to export')
    const headers = ['FullName', 'Email', 'Company', 'TeamSize', 'Message', 'Date']
    const rows = filtered.map((c: any) => [
      c.fullName,
      c.workEmail,
      c.company,
      c.teamSize,
      c.message.replace(/,/g, ' '),
      new Date(c.createdAt).toLocaleDateString()
    ])
    
    const csvContent = "data:text/csv;charset=utf-8," 
      + headers.join(",") + "\n" 
      + rows.map(e => e.join(",")).join("\n")

    const encodedUri = encodeURI(csvContent)
    const link = document.createElement("a")
    link.setAttribute("href", encodedUri)
    link.setAttribute("download", `aanya_consultations_${new Date().toISOString().split('T')[0]}.csv`)
    document.body.appendChild(link)
    link.click()
    toast.success('Exported successfully')
  }

  const handleStatusUpdate = async (id: string, newStatus: string) => {
    try {
      const res = await fetch(`/api/consultations/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus })
      })
      if (res.ok) {
        setConsultations((prev: any) => 
          prev.map((c: any) => c._id === id ? { ...c, status: newStatus } : c)
        )
        toast.success(`Status updated to ${newStatus}`)
      }
    } catch (error) {
      toast.error('Failed to update status')
    }
  }

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this request?')) return
    try {
      const res = await fetch(`/api/consultations/${id}`, { method: 'DELETE' })
      if (res.ok) {
        setConsultations(prev => prev.filter((c: any) => c._id !== id))
        toast.success('Request deleted')
      } else {
        toast.error('Failed to delete')
      }
    } catch (error) {
      toast.error('Error deleting request')
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-display font-bold text-white mb-2">Consultation Requests</h1>
          <p className="text-white/40">Manage and respond to enterprise inquiries.</p>
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
            placeholder="Search by name, company, or email..."
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
            <span className="font-bold text-white">{consultations.length}</span>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="bg-[#071B2A] border border-white/10 rounded-2xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="text-[10px] text-white/30 uppercase tracking-[0.2em] bg-white/[0.02]">
              <tr>
                <th className="px-6 py-5 font-medium">Requester</th>
                <th className="px-6 py-5 font-medium">Company Details</th>
                <th className="px-6 py-5 font-medium">Team Size</th>
                <th className="px-6 py-5 font-medium">Request Date</th>
                <th className="px-6 py-5 font-medium">Status</th>
                <th className="px-6 py-5 font-medium"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {filtered.map((c: any) => (
                <tr key={c._id} className="group hover:bg-white/[0.02] transition-all">
                  <td className="px-6 py-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-blue/10 flex items-center justify-center text-blue font-bold">
                        {c.fullName[0]}
                      </div>
                      <div>
                        <div className="font-bold text-white text-sm">{c.fullName}</div>
                        <div className="text-xs text-white/40 flex items-center gap-1 mt-0.5">
                          <Mail size={10} />
                          {c.workEmail}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-6">
                    <div className="flex flex-col gap-1">
                      <div className="text-sm text-white/80 font-medium flex items-center gap-1.5">
                        <Building size={14} className="text-white/20" />
                        {c.company}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-6 text-sm text-white/60">
                    <div className="flex items-center gap-1.5">
                      <Users size={14} className="text-white/20" />
                      {c.teamSize}
                    </div>
                  </td>
                  <td className="px-6 py-6">
                    <div className="flex flex-col gap-1">
                      <div className="text-sm text-white/60 flex items-center gap-1.5">
                        <Calendar size={14} className="text-white/20" />
                        {new Date(c.createdAt).toLocaleDateString()}
                      </div>
                      <div className="text-[10px] text-white/20 font-mono flex items-center gap-1.5">
                        <Clock size={10} />
                        {new Date(c.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-6">
                    <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border ${
                      c.status === 'completed' ? 'bg-green-400/10 text-green-400 border-green-400/20' :
                      c.status === 'scheduled' ? 'bg-purple-400/10 text-purple-400 border-purple-400/20' :
                      c.status === 'contacted' ? 'bg-cyan/10 text-cyan border-cyan/20' :
                      'bg-blue/10 text-blue border-blue/20'
                    }`}>
                      {c.status || 'pending'}
                    </span>
                  </td>
                  <td className="px-6 py-6 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button 
                        onClick={() => handleStatusUpdate(c._id, 'contacted')}
                        className={`p-2 rounded-lg transition-all ${c.status === 'contacted' ? 'bg-cyan text-white' : 'bg-white/5 text-white/20 hover:text-cyan hover:bg-cyan/10'}`}
                        title="Mark as Contacted"
                      >
                        <Mail size={14} />
                      </button>
                      <button 
                        onClick={() => handleStatusUpdate(c._id, 'scheduled')}
                        className={`p-2 rounded-lg transition-all ${c.status === 'scheduled' ? 'bg-purple-400 text-white' : 'bg-white/5 text-white/20 hover:text-purple-400 hover:bg-purple-400/10'}`}
                        title="Schedule Meeting"
                      >
                        <Calendar size={14} />
                      </button>
                      <button 
                        onClick={() => handleStatusUpdate(c._id, 'completed')}
                        className={`p-2 rounded-lg transition-all ${c.status === 'completed' ? 'bg-green-400 text-white' : 'bg-white/5 text-white/20 hover:text-green-400 hover:bg-green-400/10'}`}
                        title="Mark as Completed"
                      >
                        <UserCheck size={14} />
                      </button>
                      <div className="w-px h-4 bg-white/10 mx-1" />
                      <button 
                        onClick={() => handleDelete(c._id)}
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
                      <div className="w-8 h-8 border-2 border-blue border-t-transparent rounded-full animate-spin" />
                      <span className="text-sm text-white/20 font-mono">LOADING SECURE DATA...</span>
                    </div>
                  </td>
                </tr>
              )}
              {!isLoading && filtered.length === 0 && (
                <tr>
                  <td colSpan={6} className="px-6 py-20 text-center text-white/20 italic">
                    No consultations found matching your search.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        
        {/* Pagination */}
        <div className="p-4 border-t border-white/5 flex items-center justify-between">
          <p className="text-xs text-white/20">Page 1 of 1</p>
          <div className="flex items-center gap-2">
            <button disabled className="p-2 text-white/10 cursor-not-allowed"><ChevronLeft size={18} /></button>
            <button disabled className="p-2 text-white/10 cursor-not-allowed"><ChevronRight size={18} /></button>
          </div>
        </div>
      </div>
    </div>
  )
}
