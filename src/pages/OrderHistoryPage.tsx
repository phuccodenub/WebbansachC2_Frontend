import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Eye } from '@phosphor-icons/react'
import api from '../lib/api'

const defaultOrders = [
  { id: 'BST-123456', date: '24/05/2024', total: 470000, status: 'pending', statusLabel: 'Chờ xử lý' },
  { id: 'BST-123455', date: '22/05/2024', total: 1280000, status: 'shipping', statusLabel: 'Đang giao' },
  { id: 'BST-123450', date: '15/05/2024', total: 320000, status: 'delivered', statusLabel: 'Đã giao' },
  { id: 'BST-123440', date: '10/05/2024', total: 760000, status: 'cancelled', statusLabel: 'Đã hủy' },
]

const statusLabels: Record<string, string> = {
  pending: 'Chờ xử lý',
  confirmed: 'Đã xác nhận',
  shipping: 'Đang giao',
  delivered: 'Đã giao',
  cancelled: 'Đã hủy',
}

const statusStyles: Record<string, string> = {
  pending: 'bg-yellow-100 text-yellow-700',
  shipping: 'bg-blue-100 text-blue-700',
  delivered: 'bg-green-100 text-green-700',
  cancelled: 'bg-gray-100 text-gray-500',
}

const filters = [
  { key: 'all', label: 'Tất cả' },
  { key: 'pending', label: 'Chờ xử lý' },
  { key: 'shipping', label: 'Đang giao' },
  { key: 'delivered', label: 'Đã giao' },
  { key: 'cancelled', label: 'Đã hủy' },
]

export default function OrderHistoryPage() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [orders, setOrders] = useState(defaultOrders)
  const [filteredOrders, setFilteredOrders] = useState(defaultOrders)

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await api.get('/orders')
        if (res.data.success && res.data.data?.length) {
          const mapped = res.data.data.map((o: { id: string; orderNumber: string; createdAt: string; total: number; status: string }) => ({
            id: o.orderNumber || o.id,
            date: new Date(o.createdAt).toLocaleDateString('vi-VN'),
            total: o.total,
            status: o.status,
            statusLabel: statusLabels[o.status] || o.status,
            _id: o.id,
          }))
          setOrders(mapped)
          setFilteredOrders(mapped)
        }
      } catch { /* keep defaults */ }
    }
    fetchOrders()
  }, [])

  useEffect(() => {
    if (activeFilter === 'all') {
      setFilteredOrders(orders)
    } else {
      setFilteredOrders(orders.filter((order) => order.status === activeFilter))
    }
  }, [activeFilter])

  const formatPrice = (v: number) => v.toLocaleString('vi-VN') + 'đ'

  return (
    <div className="bg-[#F5F6FA] min-h-screen">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <h1 className="text-2xl font-bold text-text-primary mb-2">Lịch sử đơn hàng</h1>
        <p className="text-sm text-text-secondary mb-6">
          Theo dõi và quản lý tất cả các giao dịch sách của bạn tại Sapphire Archive.
        </p>

        {/* Filter pills */}
        <div className="flex gap-2 mb-6">
          {filters.map((f) => (
            <button
              key={f.key}
              onClick={() => setActiveFilter(f.key)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                activeFilter === f.key
                  ? 'bg-primary text-white'
                  : 'bg-white border border-gray-300 text-text-secondary hover:border-primary hover:text-primary'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Table */}
        <div className="bg-white rounded-xl overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 text-xs text-text-secondary uppercase tracking-wider">
                <th className="text-left px-6 py-4 font-semibold">Mã đơn hàng</th>
                <th className="text-left px-6 py-4 font-semibold">Ngày ĐĐT</th>
                <th className="text-left px-6 py-4 font-semibold">Trạng thái</th>
                <th className="text-right px-6 py-4 font-semibold">Tổng tiền</th>
                <th className="text-right px-6 py-4 font-semibold">Thao tác</th>
              </tr>
            </thead>
            <tbody>
              {filteredOrders.map((order) => (
                <tr key={order.id} className="border-t border-gray-100">
                  <td className="px-6 py-5">
                    <Link to={`/orders/${order.id}`} className="text-primary font-semibold text-sm hover:underline">
                      #{order.id}
                    </Link>
                  </td>
                  <td className="px-6 py-5 text-sm text-text-primary">{order.date}</td>
                  <td className="px-6 py-5">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${statusStyles[order.status]}`}>
                      {order.statusLabel}
                    </span>
                  </td>
                  <td className="px-6 py-5 text-sm font-bold text-text-primary text-right">{formatPrice(order.total)}</td>
                  <td className="px-6 py-5 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <Link
                        to={`/orders/${order.id}`}
                        className="flex items-center gap-1 text-xs font-semibold text-primary hover:underline"
                      >
                        <Eye size={14} />
                        XEM CHI TIẾT
                      </Link>
                      {order.status === 'pending' && (
                        <button className="text-xs font-medium text-red-500 border border-red-200 px-3 py-1.5 rounded-lg hover:bg-red-50 transition-colors">
                          Hủy đơn
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
