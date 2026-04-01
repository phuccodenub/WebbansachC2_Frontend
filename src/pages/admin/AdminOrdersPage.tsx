import { useState } from 'react'
import { Link } from 'react-router-dom'
import { MagnifyingGlass, Eye, Printer, Plus, CaretRight, Sliders, CalendarBlank } from '@phosphor-icons/react'

type ShippingStatus = 'shipping' | 'pending' | 'delivered'

const initialOrders = [
  { id: '#BST-123456', customer: 'NGUYỄN VĂN B', date: '20/01/2026', total: '134.000Đ', shipping: 'shipping' as ShippingStatus, status: 'CELL' },
  { id: '#BST-123456', customer: 'NGUYỄN VĂN C', date: '20/01/2026', total: '134.000Đ', shipping: 'pending' as ShippingStatus, status: 'CELL' },
  { id: '#BST-123456', customer: 'NGUYỄN VĂN E', date: '20/01/2026', total: '134.000Đ', shipping: 'pending' as ShippingStatus, status: 'CELL' },
  { id: '#BST-123456', customer: 'NGUYỄN VĂN D', date: '20/01/2026', total: '134.000Đ', shipping: 'delivered' as ShippingStatus, status: 'CELL' },
]

const shippingStyles: Record<ShippingStatus, { label: string; cls: string }> = {
  shipping: { label: 'ĐANG GIAO', cls: 'bg-blue-100 text-blue-700' },
  pending: { label: 'CHỜ XỬ LÝ', cls: 'bg-yellow-100 text-yellow-700' },
  delivered: { label: 'ĐÃ GIAO', cls: 'bg-green-100 text-green-700' },
}

const stats = [
  { label: 'Mới', value: 123, change: '+ 12% so với tháng trước', changeColor: 'text-green-500' },
  { label: 'Đang xử lí', value: 123, change: '+ 12% so với tháng trước', changeColor: 'text-green-500' },
  { label: 'Đang giao hàng', value: 123, change: '+ 12% so với tháng trước', changeColor: 'text-green-500' },
  { label: 'Hoàn thành', value: 123, change: '+ 12% so với tháng trước', changeColor: 'text-green-500' },
  { label: 'Đã hủy', value: 123, change: '+ 12% so với tháng trước', changeColor: 'text-red-500' },
]

export default function AdminOrdersPage() {
  const [showDetail, setShowDetail] = useState(false)
  const [orders, setOrders] = useState(initialOrders)
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState('')

  const displayedOrders = orders.filter(order => {
    const matchSearch = order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        order.customer.toLowerCase().includes(searchTerm.toLowerCase())
    const matchStatus = !statusFilter || order.shipping === statusFilter
    return matchSearch && matchStatus
  })

  return (
    <div>
      {/* Breadcrumb */}
      <div className="flex items-center justify-between mb-1">
        <div className="flex items-center gap-2 text-sm text-gray-400">
          <span>Bảng điều khiển</span>
          <span>/</span>
          <span className="text-[#E8612D] font-medium">Đơn hàng</span>
        </div>
      </div>

      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-extrabold text-[#1F2937]">Quản lý đơn hàng</h1>
        <button className="flex items-center gap-2 px-5 py-2.5 bg-[#E8612D] text-white text-sm font-semibold rounded-lg hover:bg-[#d4561f] transition-colors">
          <Plus size={16} weight="bold" />
          Tạo đơn hàng mới
        </button>
      </div>

      {/* Stat cards */}
      <div className="grid grid-cols-5 gap-4 mb-6">
        {stats.map((s) => (
          <div key={s.label} className="bg-white rounded-xl border border-gray-200 p-4">
            <p className="text-sm text-gray-500 mb-1">{s.label}</p>
            <p className="text-2xl font-extrabold text-[#1F2937]">{s.value}</p>
            <p className={`text-xs mt-1 ${s.changeColor}`}>{s.change}</p>
          </div>
        ))}
      </div>

      {/* Search & filter bar */}
      <div className="bg-white rounded-xl border border-gray-200 p-3 mb-6 flex items-center gap-3">
        <div className="relative flex-1">
          <MagnifyingGlass size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="ID đơn hàng hoặc khách hàng."
            className="w-full pl-9 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#E8612D]"
          />
        </div>
        <select 
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none"
        >
          <option value="">Trạng thái đơn</option>
          <option value="pending">Chờ xử lý</option>
          <option value="shipping">Đang giao</option>
          <option value="delivered">Đã giao</option>
        </select>
        <select className="px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none">
          <option>Thanh toán</option>
        </select>
        <div className="flex items-center gap-2 px-3 py-2 border border-gray-200 rounded-lg text-sm text-gray-500">
          <CalendarBlank size={16} />
          <span>01/10/2025 - 31/10/2026</span>
        </div>
        <button className="p-2 border border-gray-200 rounded-lg text-gray-500 hover:bg-gray-50">
          <Sliders size={18} />
        </button>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-[#E8EDF5]">
                <th className="text-left px-5 py-3.5 text-xs font-bold text-[#6B7280] uppercase tracking-wider">Mã đơn hàng</th>
                <th className="text-left px-5 py-3.5 text-xs font-bold text-[#6B7280] uppercase tracking-wider">Khách hàng</th>
                <th className="text-left px-5 py-3.5 text-xs font-bold text-[#6B7280] uppercase tracking-wider">Ngày đặt</th>
                <th className="text-left px-5 py-3.5 text-xs font-bold text-[#6B7280] uppercase tracking-wider">Tổng tiền</th>
                <th className="text-center px-5 py-3.5 text-xs font-bold text-[#6B7280] uppercase tracking-wider">Vận chuyển</th>
                <th className="text-center px-5 py-3.5 text-xs font-bold text-[#6B7280] uppercase tracking-wider">Trạng thái</th>
                <th className="text-center px-5 py-3.5 text-xs font-bold text-[#6B7280] uppercase tracking-wider">Thao tác</th>
              </tr>
            </thead>
            <tbody>
              {displayedOrders.map((order, i) => {
                const ship = shippingStyles[order.shipping]
                return (
                  <tr key={i} className="border-b border-gray-100 last:border-0">
                    <td className="px-5 py-4 font-semibold text-[#3B82F6]">{order.id}</td>
                    <td className="px-5 py-4 text-[#1F2937]">{order.customer}</td>
                    <td className="px-5 py-4 text-[#6B7280]">{order.date}</td>
                    <td className="px-5 py-4 text-[#1F2937]">{order.total}</td>
                    <td className="px-5 py-4 text-center">
                      <span className={`inline-block px-3 py-1 rounded text-[10px] font-bold tracking-wider ${ship.cls}`}>
                        {ship.label}
                      </span>
                    </td>
                    <td className="px-5 py-4 text-center text-[#6B7280]">{order.status}</td>
                    <td className="px-5 py-4">
                      <div className="flex items-center justify-center gap-3">
                        <button
                          onClick={() => setShowDetail(true)}
                          className="text-gray-400 hover:text-[#3B82F6] transition-colors"
                        >
                          <Eye size={18} />
                        </button>
                        <button className="text-gray-400 hover:text-[#6B7280] transition-colors">
                          <Printer size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>

        {/* Pagination text */}
        <div className="px-5 py-4 text-xs text-gray-400 uppercase">
          Hiển thị 1-3 trong số<br />125 đơn hàng
        </div>
      </div>

      {/* Order Detail Modal */}
      {showDetail && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="bg-white rounded-xl w-full max-w-[640px] max-h-[90vh] overflow-y-auto p-6 relative">
            {/* Header */}
            <div className="flex items-start justify-between mb-6">
              <div>
                <h2 className="text-lg font-bold text-[#1F2937]">Chi tiết đơn hàng</h2>
                <p className="text-sm font-semibold text-[#E8612D]">#LB-8921</p>
              </div>
              <button onClick={() => setShowDetail(false)} className="text-gray-400 hover:text-gray-600 text-xl leading-none">×</button>
            </div>

            {/* Customer */}
            <p className="text-xs font-bold text-[#E8612D] tracking-wider mb-3">KHÁCH HÀNG</p>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-[#E8612D] text-white flex items-center justify-center font-bold text-sm">NT</div>
              <div>
                <p className="font-bold text-[#1F2937]">Nguyễn Văn Thuận</p>
                <p className="text-xs text-gray-400">thuan.nguyen@email.com</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-3 text-sm">
              <div>
                <p className="text-xs text-gray-400 mb-0.5">Số điện thoại</p>
                <p className="font-medium text-[#1F2937]">090 123 4567</p>
              </div>
              <div>
                <p className="text-xs text-gray-400 mb-0.5">Phương thức thanh toán</p>
                <p className="font-medium text-[#1F2937]">🔷 Thẻ Visa</p>
              </div>
            </div>
            <div className="mb-6 text-sm">
              <p className="text-xs text-gray-400 mb-0.5">Địa chỉ nhận hàng</p>
              <p className="text-[#1F2937]">123 Đường Lê Lợi, Phường 1, Quận 1, TP. Hồ Chí Minh</p>
            </div>

            {/* Book list */}
            <p className="text-xs font-bold text-[#E8612D] tracking-wider mb-3">DANH SÁCH SÁCH (3)</p>
            <div className="space-y-3 mb-4">
              {[
                { title: 'Đắc Nhân Tâm', author: 'Dale Carnegie', qty: 1, price: '85.000đ' },
                { title: 'Nhà Giả Kim', author: 'Paulo Coelho', qty: 2, price: '170.000đ' },
                { title: 'Tư Duy Nhanh Và Chậm', author: 'Daniel Kahneman', qty: 1, price: '195.000đ' },
              ].map((b, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-10 h-14 bg-gray-200 rounded shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="font-bold text-sm text-[#1F2937]">{b.title}</p>
                    <p className="text-xs text-gray-400">{b.author}</p>
                    <p className="text-xs text-gray-400">x{b.qty}</p>
                  </div>
                  <p className="text-sm font-semibold text-[#1F2937]">{b.price}</p>
                </div>
              ))}
            </div>

            {/* Price summary */}
            <div className="border-t border-gray-100 pt-3 mb-6 text-sm space-y-1.5">
              <div className="flex justify-between text-gray-500">
                <span>Tạm tính</span><span>450.000đ</span>
              </div>
              <div className="flex justify-between text-gray-500">
                <span>Phí vận chuyển</span><span>Miễn phí</span>
              </div>
              <div className="flex justify-between font-bold text-[#E8612D] text-base pt-1">
                <span>Tổng cộng</span><span>450.000đ</span>
              </div>
            </div>

            {/* Timeline */}
            <p className="text-xs font-bold text-[#E8612D] tracking-wider mb-3">LỊCH SỬ ĐƠN HÀNG</p>
            <div className="space-y-4 mb-6">
              {[
                { active: true, title: 'Đang giao hàng', time: '24/10/2023 14:30', desc: 'Shipper đã lấy hàng' },
                { active: false, title: 'Xác nhận đơn hàng', time: '24/10/2023 09:15', desc: 'Nhân viên: Alex R.' },
                { active: false, title: 'Đặt hàng thành công', time: '24/10/2023 08:45', desc: 'Web App' },
              ].map((t, i) => (
                <div key={i} className="flex gap-3">
                  <div className={`w-3 h-3 rounded-full mt-1 shrink-0 ${t.active ? 'bg-[#E8612D]' : 'bg-gray-300'}`} />
                  <div>
                    <p className={`text-sm font-semibold ${t.active ? 'text-[#1F2937]' : 'text-gray-400'}`}>{t.title}</p>
                    <p className="text-xs text-gray-400">{t.time} · {t.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Actions */}
            <div className="flex gap-3">
              <button className="flex-1 py-3 bg-[#E8612D] text-white font-semibold rounded-lg hover:bg-[#d4561f] transition-colors">
                Cập nhật
              </button>
              <button className="px-6 py-3 border border-gray-300 text-gray-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors">
                In ấn
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
