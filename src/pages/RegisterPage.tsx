import { useState } from 'react'
import { Link } from 'react-router-dom'
import { User, EnvelopeSimple, Phone, Lock } from '@phosphor-icons/react'

export default function RegisterPage() {
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-8">
        {/* Logo */}
        <div className="text-center mb-6">
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

        <h1 className="text-2xl font-bold text-center text-text-primary mb-2">ĐĂNG KÝ TÀI KHOẢN</h1>
        <p className="text-center text-text-secondary text-sm mb-6">Tạo tài khoản để mua sắm dễ dàng hơn</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Full Name */}
          <div className="relative">
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted">
              <User size={20} />
            </div>
            <input
              type="text"
              name="fullName"
              placeholder="Họ và tên"
              value={form.fullName}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-3 border border-border rounded-lg text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
            />
          </div>

          {/* Email */}
          <div className="relative">
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted">
              <EnvelopeSimple size={20} />
            </div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-3 border border-border rounded-lg text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
            />
          </div>

          {/* Phone */}
          <div className="relative">
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted">
              <Phone size={20} />
            </div>
            <input
              type="tel"
              name="phone"
              placeholder="Số điện thoại"
              value={form.phone}
              onChange={handleChange}
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
              name="password"
              placeholder="Mật khẩu"
              value={form.password}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-3 border border-border rounded-lg text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
            />
          </div>

          {/* Confirm Password */}
          <div className="relative">
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted">
              <Lock size={20} />
            </div>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Nhập lại mật khẩu"
              value={form.confirmPassword}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-3 border border-border rounded-lg text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
            />
          </div>

          {/* Terms */}
          <label className="flex items-start gap-2 text-sm text-text-secondary cursor-pointer">
            <input type="checkbox" className="mt-0.5 rounded border-border" />
            <span>
              Tôi đồng ý với{' '}
              <a href="#" className="text-primary hover:underline">Điều khoản dịch vụ</a>
              {' '}và{' '}
              <a href="#" className="text-primary hover:underline">Chính sách bảo mật</a>
            </span>
          </label>

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors"
          >
            Đăng ký ngay
          </button>
        </form>

        {/* Login link */}
        <p className="text-center text-sm text-text-secondary mt-6">
          Đã có tài khoản?{' '}
          <Link to="/login" className="text-primary font-medium hover:underline">
            Đăng nhập
          </Link>
        </p>
      </div>
    </div>
  )
}
