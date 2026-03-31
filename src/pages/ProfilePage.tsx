import { Link } from 'react-router-dom'
import { PencilSimple, Eye, Trash, Plus, ClockCounterClockwise, FloppyDisk, Info } from '@phosphor-icons/react'

const addresses = [
  { id: 1, type: 'Nhà riêng', isDefault: true, name: 'Nguyễn Minh Hoàng', address: '25/4 Đường số 12, Phường Bến Nghé, Quận 1, TP. Hồ Chí Minh', phone: '0901 234 567' },
  { id: 2, type: 'Văn phòng', isDefault: false, name: 'Nguyễn Minh Hoàng', address: 'Tòa nhà Bitexco, Số 2 Hải Triều, Quận 1, TP. Hồ Chí Minh', phone: '0901 234 567' },
]

export default function ProfilePage() {
  return (
    <div className="bg-[#F5F6FA] min-h-screen">
      <div className="max-w-6xl mx-auto px-4 py-10">
        {/* Profile Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <div className="relative">
              <img src="https://placehold.co/80x80/e2e8f0/475569?text=NMH" alt="Avatar" className="w-20 h-20 rounded-full object-cover" />
              <button className="absolute bottom-0 left-12 w-7 h-7 bg-primary text-white rounded-full flex items-center justify-center shadow">
                <PencilSimple size={12} weight="bold" />
              </button>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-text-primary">Nguyễn Minh Hoàng</h1>
              <p className="text-sm text-text-secondary">minhhoang.archive@gmail.com</p>
              <span className="inline-block mt-1 px-2.5 py-0.5 bg-[#2D3250] text-white text-[10px] font-bold rounded uppercase tracking-wider">
                Hạng Bạch Kim
              </span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Link to="/orders" className="flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-text-primary hover:text-primary transition-colors">
              <ClockCounterClockwise size={16} />
              Lịch sử đơn hàng
            </Link>
            <button className="flex items-center gap-2 px-5 py-2.5 bg-primary text-white text-sm font-semibold rounded-lg hover:bg-blue-700 transition-colors">
              <FloppyDisk size={16} />
              Lưu thay đổi
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Left Column */}
          <div className="space-y-6">
            {/* 01 - Personal Info */}
            <div className="bg-white rounded-xl p-6">
              <div className="flex items-center gap-3 mb-5">
                <span className="w-8 h-8 rounded-full border-2 border-primary text-primary text-xs font-bold flex items-center justify-center">01</span>
                <h2 className="text-lg font-bold text-text-primary">Thông tin cá nhân</h2>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm text-text-secondary mb-1.5">Họ và tên</label>
                  <input type="text" defaultValue="Nguyễn Minh Hoàng" className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-primary" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-text-secondary mb-1.5">Số điện thoại</label>
                    <input type="tel" defaultValue="0901 234 543" className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-primary" />
                  </div>
                  <div>
                    <label className="block text-sm text-text-secondary mb-1.5">Email</label>
                    <input type="email" defaultValue="minhhoang.archive@gmail.com" className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-primary" />
                  </div>
                </div>
              </div>
            </div>

            {/* 02 - Security */}
            <div className="bg-white rounded-xl p-6">
              <div className="flex items-center gap-3 mb-5">
                <span className="w-8 h-8 rounded-full border-2 border-primary text-primary text-xs font-bold flex items-center justify-center">02</span>
                <h2 className="text-lg font-bold text-text-primary">Bảo mật tài khoản</h2>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm text-text-secondary mb-1.5">Mật khẩu cũ</label>
                  <div className="relative">
                    <input type="password" defaultValue="********" className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-primary pr-10" />
                    <button className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                      <Eye size={18} />
                    </button>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-text-secondary mb-1.5">Mật khẩu mới</label>
                    <input type="password" defaultValue="********" className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-primary" />
                  </div>
                  <div>
                    <label className="block text-sm text-text-secondary mb-1.5">Xác nhận mật khẩu mới</label>
                    <input type="password" defaultValue="********" className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-primary" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div>
            <div className="bg-white rounded-xl p-6">
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full border-2 border-primary text-primary text-xs font-bold flex items-center justify-center">03</span>
                  <h2 className="text-lg font-bold text-text-primary">Địa chỉ giao hàng</h2>
                </div>
                <button className="flex items-center gap-1 text-sm text-primary font-medium hover:underline">
                  <Plus size={14} />
                  Thêm địa chỉ mới
                </button>
              </div>

              <div className="space-y-4">
                {addresses.map((addr) => (
                  <div key={addr.id} className={`border rounded-lg p-4 ${addr.isDefault ? 'border-primary' : 'border-gray-200'}`}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        {addr.isDefault && (
                          <span className="text-[10px] font-bold text-primary uppercase tracking-wider">Mặc định</span>
                        )}
                        <span className="text-xs text-text-secondary">• {addr.type}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <button className="text-gray-400 hover:text-primary"><PencilSimple size={14} /></button>
                        <button className="text-gray-400 hover:text-red-500"><Trash size={14} /></button>
                      </div>
                    </div>
                    <p className="text-sm font-semibold text-text-primary">{addr.name}</p>
                    <p className="text-sm text-text-secondary mt-1">{addr.address}</p>
                    <p className="text-xs text-primary mt-2">SĐT: {addr.phone}</p>
                  </div>
                ))}
              </div>

              {/* Info notice */}
              <div className="flex items-start gap-2 mt-4 p-3 bg-gray-50 rounded-lg">
                <Info size={16} className="text-gray-400 shrink-0 mt-0.5" />
                <p className="text-xs text-text-secondary">
                  Chúng tôi sử dụng thông tin này để tối ưu hóa quá trình thanh toán và vận chuyển đơn hàng của bạn.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
