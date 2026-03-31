import { useState } from 'react'
import { Link } from 'react-router-dom'
import { User, Lock, GoogleLogo, FacebookLogo } from '@phosphor-icons/react'

export default function LoginPage() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-8">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-2">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
              <rect width="40" height="40" rx="8" fill="#1a56db" />
              <path d="M10 28V12a2 2 0 012-2h12a2 2 0 012 2v16l-8-4-8 4z" fill="white" opacity="0.9" />
              <path d="M16 28V14a2 2 0 012-2h12a2 2 0 012 2v14l-8-3.5L16 28z" fill="white" opacity="0.6" />
            </svg>
            <div className="text-left">
              <span className="text-primary font-bold text-xl leading-none block">MMT</span>
              <span className="text-primary text-[9px] tracking-[0.2em] leading-none">b o o k s t o r e</span>
            </div>
          </Link>
        </div>

        <h1 className="text-2xl font-bold text-center text-text-primary mb-2">WELCOME</h1>
        <p className="text-center text-text-secondary text-sm mb-6">Đăng nhập để tiếp tục</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Username */}
          <div className="relative">
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted">
              <User size={20} />
            </div>
            <input
              type="text"
              placeholder="Tên đăng nhập"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-border rounded-lg text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
            />
          </div>

          {/* Password */}
          <div className="relative">
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted">
              <Lock size={20} />
            </div>
            <input
              type="password"
              placeholder="Mật khẩu"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-border rounded-lg text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
            />
          </div>

          {/* Remember & Forgot */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-text-secondary cursor-pointer">
              <input type="checkbox" className="rounded border-border" />
              Ghi nhớ đăng nhập
            </label>
            <a href="#" className="text-primary hover:underline">Quên mật khẩu?</a>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors"
          >
            Đăng nhập
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center gap-3 my-6">
          <div className="flex-1 h-px bg-border" />
          <span className="text-text-muted text-xs">Hoặc đăng nhập với</span>
          <div className="flex-1 h-px bg-border" />
        </div>

        {/* Social Login */}
        <div className="flex gap-3">
          <button className="flex-1 flex items-center justify-center gap-2 py-2.5 border border-border rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
            <GoogleLogo size={20} weight="bold" className="text-red-500" />
            Google
          </button>
          <button className="flex-1 flex items-center justify-center gap-2 py-2.5 border border-border rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
            <FacebookLogo size={20} weight="fill" className="text-blue-600" />
            Facebook
          </button>
        </div>

        {/* Register link */}
        <p className="text-center text-sm text-text-secondary mt-6">
          Chưa có tài khoản?{' '}
          <Link to="/register" className="text-primary font-medium hover:underline">
            Đăng ký ngay
          </Link>
        </p>
      </div>
    </div>
  )
}
