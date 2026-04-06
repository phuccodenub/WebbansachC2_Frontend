import { Link, Outlet, useLocation } from 'react-router-dom'
import { SquaresFour, ShoppingCart, Book, Gear, Bell, MagnifyingGlass, List, X } from '@phosphor-icons/react'
import { useState } from 'react'

const navItems = [
  { to: '/admin', icon: SquaresFour, label: 'Bảng điều khiển', exact: true },
  { to: '/admin/orders', icon: ShoppingCart, label: 'Đơn hàng', exact: false },
  { to: '/admin/books', icon: Book, label: 'Sách', exact: false },
]

function Sidebar({ location, setSidebarOpen }: { location: ReturnType<typeof useLocation>; setSidebarOpen: (v: boolean) => void }) {
  const isActive = (path: string, exact: boolean) =>
    exact ? location.pathname === path : location.pathname.startsWith(path)

  return (
    <div className="flex flex-col h-full bg-[#2D3250]">
      {/* Logo */}
      <div className="px-5 py-6">
        <Link to="/admin" className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#E8A838] rounded-lg flex items-center justify-center">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h18v2H3v-2z" fill="#2D3250"/></svg>
          </div>
          <div>
            <span className="text-white font-bold text-lg leading-none block">MMT</span>
            <span className="text-gray-300 text-xs tracking-[0.2em]">bookstore</span>
          </div>
        </Link>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-3 py-2 space-y-1">
        {navItems.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            onClick={() => setSidebarOpen(false)}
            className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
              isActive(item.to, item.exact)
                ? 'bg-[#424769] text-white'
                : 'text-gray-400 hover:bg-[#424769]/50 hover:text-white'
            }`}
          >
            <item.icon size={20} />
            {item.label}
          </Link>
        ))}
      </nav>

      {/* Footer */}
      <div className="px-3 py-4">
        <Link
          to="/admin/settings"
          className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm text-gray-400 hover:bg-[#424769]/50 hover:text-white transition-colors"
        >
          <Gear size={20} />
          Cài đặt
        </Link>
      </div>
    </div>
  )
}

export default function AdminLayout() {
  const location = useLocation()
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen bg-[#F5F6FA] flex">
      {/* Desktop Sidebar */}
      <aside className="hidden lg:block w-[240px] bg-[#2D3250] fixed inset-y-0 left-0 z-30">
        <Sidebar location={location} setSidebarOpen={setSidebarOpen} />
      </aside>

      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div className="lg:hidden fixed inset-0 z-50">
          <div className="absolute inset-0 bg-black/50" onClick={() => setSidebarOpen(false)} />
          <aside className="absolute left-0 top-0 h-full w-[240px]">
            <button
              onClick={() => setSidebarOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white z-10"
            >
              <X size={20} />
            </button>
            <Sidebar location={location} setSidebarOpen={setSidebarOpen} />
          </aside>
        </div>
      )}

      {/* Main */}
      <div className="flex-1 lg:ml-[240px]">
        {/* Top Bar */}
        <header className="bg-white border-b border-gray-200 sticky top-0 z-20 px-6 h-16 flex items-center gap-4">
          <button onClick={() => setSidebarOpen(true)} className="lg:hidden text-gray-500">
            <List size={24} />
          </button>
          <div className="flex-1 flex items-center">
            <div className="relative w-full max-w-md">
              <MagnifyingGlass size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Tìm sách, đơn hàng,..."
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-full text-sm focus:outline-none focus:border-[#2D3250]"
              />
            </div>
          </div>
          <button className="relative text-gray-500 hover:text-gray-700">
            <Bell size={22} />
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>
          <div className="h-6 w-px bg-gray-200"></div>
          <div className="flex items-center gap-2">
            <div className="text-right">
              <p className="text-sm font-medium text-gray-700">Sỹ Phúc</p>
              <p className="text-xs text-gray-400">Admin</p>
            </div>
            <div className="w-9 h-9 bg-gray-800 rounded-full"></div>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-6">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
