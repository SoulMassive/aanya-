'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useRouter, usePathname } from 'next/navigation'
import Link from 'next/link'
import { 
  LayoutDashboard, 
  Users, 
  MessageSquare, 
  Settings, 
  LogOut, 
  Menu, 
  X,
  Bell,
  Search,
  ChevronRight,
  ShieldCheck
} from 'lucide-react'
import { toast } from 'sonner'

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const [isLoading, setIsLoading] = useState(true)
  const [admin, setAdmin] = useState<any>(null)
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await fetch('/api/auth/me')
        const data = await res.json()
        if (data.success) {
          setAdmin(data.admin)
          setIsLoading(false)
        } else {
          router.push('/admin/login')
        }
      } catch (error) {
        router.push('/admin/login')
      }
    }
    checkAuth()
  }, [router])

  const handleLogout = async () => {
    const res = await fetch('/api/auth/logout', { method: 'POST' })
    if (res.ok) {
      toast.success('Logged out')
      router.push('/admin/login')
    }
  }

  const menuItems = [
    { name: 'Overview', icon: LayoutDashboard, path: '/admin/dashboard' },
    { name: 'Consultations', icon: MessageSquare, path: '/admin/dashboard/consultations' },
    { name: 'Leads', icon: Users, path: '/admin/dashboard/leads' },
    { name: 'Settings', icon: Settings, path: '/admin/dashboard/settings' },
  ]

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#050F1A] flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-blue border-t-transparent rounded-full animate-spin" />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#050F1A] text-white">
      {/* Sidebar */}
      <aside 
        className={`fixed left-0 top-0 h-full bg-[#071B2A] border-r border-white/10 transition-all duration-300 z-50 ${isSidebarOpen ? 'w-64' : 'w-20'}`}
      >
        <div className="p-6 flex items-center justify-between">
          {isSidebarOpen && (
            <Link href="/" className="flex items-center gap-1">
              <span className="font-display font-black text-xl tracking-tighter">AANYA</span>
              <span className="w-1 h-1 bg-blue rounded-full mb-3" />
            </Link>
          )}
          <button 
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="p-2 hover:bg-white/5 rounded-lg text-white/40 hover:text-white transition-all"
          >
            {isSidebarOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        <nav className="mt-6 px-4 space-y-2">
          {menuItems.map((item) => {
            const isActive = pathname === item.path
            return (
              <Link 
                key={item.name}
                href={item.path}
                className={`flex items-center gap-3 p-3 rounded-xl transition-all group ${isActive ? 'bg-blue text-white shadow-[0_0_20px_rgba(37,99,235,0.2)]' : 'text-white/40 hover:text-white hover:bg-white/5'}`}
              >
                <item.icon size={20} className={isActive ? 'text-white' : 'group-hover:text-white'} />
                {isSidebarOpen && <span className="font-medium text-sm">{item.name}</span>}
                {isActive && isSidebarOpen && (
                  <motion.div layoutId="active" className="ml-auto">
                    <ChevronRight size={14} />
                  </motion.div>
                )}
              </Link>
            )
          })}
        </nav>

        <div className="absolute bottom-0 left-0 w-full p-4 border-t border-white/5">
          <button 
            onClick={handleLogout}
            className="flex items-center gap-3 w-full p-3 rounded-xl text-white/40 hover:text-red-400 hover:bg-red-400/5 transition-all group"
          >
            <LogOut size={20} />
            {isSidebarOpen && <span className="font-medium text-sm">Logout</span>}
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className={`transition-all duration-300 ${isSidebarOpen ? 'pl-64' : 'pl-20'}`}>
        {/* Topbar */}
        <header className="h-20 border-b border-white/10 bg-[#050F1A]/80 backdrop-blur-md sticky top-0 z-40 px-8 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-white/20 w-4 h-4" />
              <input 
                type="text" 
                placeholder="Search leads..."
                className="bg-white/5 border border-white/10 rounded-full pl-10 pr-4 py-2 text-sm text-white focus:border-blue/50 outline-none w-64 transition-all"
              />
            </div>
          </div>

          <div className="flex items-center gap-6">
            <button className="relative text-white/40 hover:text-white transition-all">
              <Bell size={20} />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-blue rounded-full border-2 border-[#050F1A]" />
            </button>
            <div className="h-8 w-px bg-white/10" />
            <div className="flex items-center gap-3">
              <div className="text-right hidden sm:block">
                <div className="text-sm font-bold text-white">{admin?.name}</div>
                <div className="text-[10px] font-mono text-blue uppercase tracking-widest">{admin?.role}</div>
              </div>
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue to-cyan flex items-center justify-center font-bold text-white shadow-lg">
                {admin?.name?.[0]}
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <div className="p-8">
          {children}
        </div>
      </main>
    </div>
  )
}
