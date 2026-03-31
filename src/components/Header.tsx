import { useState } from 'react'
import { Link } from 'react-router-dom'
import { MagnifyingGlass, Heart, ShoppingCart, List } from '@phosphor-icons/react'

export default function Header() {
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center gap-6">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <div className="flex items-center">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
              <rect width="40" height="40" rx="8" fill="#1a56db" />
              <path d="M10 28V12a2 2 0 012-2h12a2 2 0 012 2v16l-8-4-8 4z" fill="white" opacity="0.9" />
              <path d="M16 28V14a2 2 0 012-2h12a2 2 0 012 2v14l-8-3.5L16 28z" fill="white" opacity="0.6" />
            </svg>
            <div className="ml-2">
              <span className="text-primary font-bold text-xl leading-none block">MMT</span>
              <span className="text-primary text-[10px] tracking-[0.2em] leading-none">b o o k s t o r e</span>
            </div>
          </div>
        </Link>

        {/* Search Bar */}
        <div className="flex-1 max-w-xl relative">
          <input
            type="text"
            placeholder="Tìm sách..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full border border-border rounded-lg py-2 pl-4 pr-10 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
          />
          <button className="absolute right-2 top-1/2 -translate-y-1/2 text-text-secondary hover:text-primary">
            <MagnifyingGlass size={20} />
          </button>
        </div>

        {/* Nav Icons */}
        <div className="flex items-center gap-4">
          <Link to="/" className="text-text-secondary hover:text-primary transition-colors">
            <Heart size={24} />
          </Link>
          <Link to="/cart" className="relative text-text-secondary hover:text-primary transition-colors">
            <ShoppingCart size={24} />
            <span className="absolute -top-1 -right-2 bg-accent text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
              0
            </span>
          </Link>
          <button className="text-text-secondary hover:text-primary transition-colors lg:hidden">
            <List size={24} />
          </button>
        </div>

        {/* Auth Buttons */}
        <div className="hidden lg:flex items-center gap-2">
          <Link
            to="/login"
            className="px-4 py-2 text-sm font-medium text-primary border border-primary rounded-lg hover:bg-primary hover:text-white transition-colors"
          >
            Đăng nhập
          </Link>
          <Link
            to="/register"
            className="px-4 py-2 text-sm font-medium text-white bg-primary rounded-lg hover:bg-primary-dark transition-colors"
          >
            Đăng ký
          </Link>
        </div>
      </div>
    </header>
  )
}
