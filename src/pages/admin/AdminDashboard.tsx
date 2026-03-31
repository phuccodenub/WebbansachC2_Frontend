import { Link } from 'react-router-dom'
import { ClipboardText, CurrencyCircleDollar, BookOpen, UsersThree, Warning } from '@phosphor-icons/react'

const stats = [
  { label: 'Tổng số đơn hàng', value: '200', change: '+ 12% so với tháng trước', icon: ClipboardText, iconBg: 'bg-blue-100', iconColor: 'text-blue-600' },
  { label: 'Doanh thu', value: '14tr', change: '+ 12% so với tháng trước', icon: CurrencyCircleDollar, iconBg: 'bg-yellow-100', iconColor: 'text-yellow-600' },
  { label: 'Sách đang bán', value: '364', change: '+ 12% so với tháng trước', icon: BookOpen, iconBg: 'bg-teal-100', iconColor: 'text-teal-600' },
  { label: 'Khách hàng', value: '123', change: '+ 10% so với tháng trước', icon: UsersThree, iconBg: 'bg-purple-100', iconColor: 'text-purple-600' },
]

const categories = [
  { name: 'Tiểu thuyết', pct: 42, color: 'bg-blue-500' },
  { name: 'Kinh tế', pct: 12, color: 'bg-pink-400' },
  { name: 'Thiếu nhi', pct: 15, color: 'bg-green-400' },
  { name: 'Thể loại', pct: 10, color: 'bg-orange-400' },
  { name: 'Văn học', pct: 21, color: 'bg-yellow-400' },
]

const recentOrders = [
  { id: 'DH-1234', customer: 'Nguyễn Sỹ Phúc', date: '01/03/2026', status: 'Hủy', total: '100 000 VND' },
  { id: 'DH-1234', customer: 'Nguyễn Sỹ Phúc', date: '01/03/2026', status: 'Hủy', total: '100 000 VND' },
  { id: 'DH-1234', customer: 'Nguyễn Sỹ Phúc', date: '01/03/2026', status: 'Hủy', total: '100 000 VND' },
  { id: 'DH-1234', customer: 'Nguyễn Sỹ Phúc', date: '01/03/2026', status: 'Hủy', total: '100 000 VND' },
  { id: 'DH-1234', customer: 'Nguyễn Sỹ Phúc', date: '01/03/2026', status: 'Hủy', total: '100 000 VND' },
]

const lowStock = [
  { title: 'Dế Mèn Phiêu Lưu Ký', cat: 'Thiếu nhi', qty: 2 },
  { title: 'Tuổi Thơ Dữ Dội', cat: 'Thiếu nhi', qty: 6 },
  { title: 'Lão Hạc', cat: 'Thiếu nhi', qty: 2 },
  { title: 'Atomic Habits', cat: 'Thiếu nhi', qty: 2 },
  { title: 'Dế Mèn Phiêu Lưu Ký', cat: 'Thiếu nhi', qty: 2 },
]

export default function AdminDashboard() {
  // Simple bar data for chart placeholder
  const bars = [
    [40, 60], [55, 70], [80, 90], [65, 85],
  ]

  return (
    <div>
      {/* Stats */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        {stats.map((s) => (
          <div key={s.label} className="bg-white rounded-xl border border-gray-100 p-5">
            <div className="flex items-start gap-3">
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${s.iconBg} ${s.iconColor}`}>
                <s.icon size={20} />
              </div>
              <div>
                <p className="text-sm text-text-secondary">{s.label}</p>
                <p className="text-2xl font-bold text-text-primary">{s.value}</p>
                <p className="text-xs text-green-500 mt-1">{s.change}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Revenue chart + Category breakdown */}
      <div className="grid grid-cols-3 gap-6 mb-6">
        {/* Revenue chart placeholder */}
        <div className="col-span-2 bg-white rounded-xl border border-gray-100 p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-bold text-text-primary">Doanh thu</h2>
            <select className="px-3 py-1.5 border border-gray-200 rounded-lg text-sm text-text-secondary">
              <option>30 ngày</option>
            </select>
          </div>
          {/* Simple CSS bar chart */}
          <div className="flex items-end justify-around h-48 gap-4">
            {bars.map((pair, i) => (
              <div key={i} className="flex-1 flex items-end justify-center gap-1.5">
                <div className="w-8 bg-blue-200 rounded-t" style={{ height: `${pair[0]}%` }} />
                <div className="w-8 bg-blue-500 rounded-t" style={{ height: `${pair[1]}%` }} />
              </div>
            ))}
          </div>
          <div className="flex justify-around mt-3">
            {['TUẦN 1', 'TUẦN 2', 'TUẦN 3', 'TUẦN 4'].map((w) => (
              <span key={w} className="text-xs text-text-secondary">{w}</span>
            ))}
          </div>
        </div>

        {/* Category breakdown */}
        <div className="bg-white rounded-xl border border-gray-100 p-6">
          <h2 className="text-base font-bold text-text-primary mb-5">Đơn hàng theo danh mục</h2>
          <div className="space-y-4">
            {categories.map((c) => (
              <div key={c.name}>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-text-primary">{c.name}</span>
                  <span className="font-medium">{c.pct}%</span>
                </div>
                <div className="w-full h-2 bg-gray-100 rounded-full">
                  <div className={`h-2 rounded-full ${c.color}`} style={{ width: `${c.pct}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent orders + Low stock */}
      <div className="grid grid-cols-3 gap-6">
        {/* Recent orders */}
        <div className="col-span-2 bg-white rounded-xl border border-gray-100">
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
            <h2 className="font-bold text-text-primary">Đơn hàng gần đây</h2>
            <Link to="/admin/orders" className="text-sm text-primary hover:underline">Xem tất cả</Link>
          </div>
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-50 text-xs text-text-secondary">
                <th className="text-left px-6 py-3 font-medium">Mã đơn hàng</th>
                <th className="text-left px-6 py-3 font-medium">Khách hàng</th>
                <th className="text-left px-6 py-3 font-medium">Ngày đặt</th>
                <th className="text-left px-6 py-3 font-medium">Trạng thái</th>
                <th className="text-right px-6 py-3 font-medium">Tổng tiền</th>
              </tr>
            </thead>
            <tbody>
              {recentOrders.map((o, i) => (
                <tr key={i} className="border-b border-gray-50 last:border-0">
                  <td className="px-6 py-3 text-text-primary">{o.id}</td>
                  <td className="px-6 py-3 text-text-primary">{o.customer}</td>
                  <td className="px-6 py-3 text-text-secondary">{o.date}</td>
                  <td className="px-6 py-3"><span className="text-red-500 font-medium">{o.status}</span></td>
                  <td className="px-6 py-3 text-right text-text-primary">{o.total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Low stock alerts */}
        <div className="bg-white rounded-xl border border-gray-100 p-6">
          <h2 className="flex items-center gap-2 font-bold text-text-primary mb-4">
            <Warning size={18} className="text-yellow-500" />
            Cảnh báo sắp hết hàng
          </h2>
          <div className="space-y-4">
            {lowStock.map((item, i) => (
              <div key={i} className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-text-primary">{item.title}</p>
                  <p className="text-xs text-text-secondary">{item.cat}</p>
                </div>
                <span className={`text-sm font-bold ${item.qty <= 2 ? 'text-red-500' : 'text-orange-500'}`}>
                  Còn {item.qty}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
