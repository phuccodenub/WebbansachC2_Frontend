import { EnvelopeSimple, Phone, MapPin } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-footer-bg text-footer-text">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <svg width="32" height="32" viewBox="0 0 40 40" fill="none">
              <rect width="40" height="40" rx="8" fill="#3f83f8" />
              <path d="M10 28V12a2 2 0 012-2h12a2 2 0 012 2v16l-8-4-8 4z" fill="white" opacity="0.9" />
              <path d="M16 28V14a2 2 0 012-2h12a2 2 0 012 2v14l-8-3.5L16 28z" fill="white" opacity="0.6" />
            </svg>
            <div>
              <span className="text-white font-bold text-lg leading-none block">MMT</span>
              <span className="text-blue-300 text-[9px] tracking-[0.2em] leading-none">b o o k s t o r e</span>
            </div>
          </div>
          <p className="text-sm leading-relaxed text-gray-400">
            MMT Bookstore – Nơi tri thức bắt đầu. Chúng tôi cung cấp hàng ngàn đầu sách từ văn học, khoa học đến kinh tế, giúp bạn tìm được cuốn sách yêu thích.
          </p>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white font-semibold text-base mb-4">Liên hệ</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <MapPin size={18} className="text-blue-400 shrink-0" />
              <span>Hiệp Phú, Thủ Đức, TPHCM</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={18} className="text-blue-400 shrink-0" />
              <span>028 5445 2222</span>
            </li>
            <li className="flex items-center gap-2">
              <EnvelopeSimple size={18} className="text-blue-400 shrink-0" />
              <span>hutech@hutech.edu.vn</span>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-white font-semibold text-base mb-4">Đăng ký nhận tin</h3>
          <p className="text-sm text-gray-400 mb-3">
            Nhận thông tin sách mới và ưu đãi hấp dẫn qua email.
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Email của bạn"
              className="flex-1 px-3 py-2 text-sm rounded-l-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-blue-400"
            />
            <button className="px-4 py-2 text-sm font-medium bg-primary text-white rounded-r-lg hover:bg-primary-dark transition-colors">
              Gửi
            </button>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
          <span>© 2024 MMT Bookstore. All rights reserved.</span>
          <div className="flex gap-4 mt-2 md:mt-0">
            <Link to="/" className="hover:text-white transition-colors">Chính sách bảo mật</Link>
            <Link to="/" className="hover:text-white transition-colors">Điều khoản sử dụng</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
