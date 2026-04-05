import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Truck, Check, CaretRight } from '@phosphor-icons/react'
import api from '../../lib/api'

const defaultOrderData = {
  id: 'BST-123456',
  date: '24/02/2026 14:30',
  status: 'shipping' as const,
  customer: { name: 'Nguyễn Văn A', phone: '090 123 4567', email: 'nguyenvana@email.com' },
  address: '123 Đường Sách, P. Bến Nghé, Q.1, TP.HCM',
  payment: 'Thẻ tín dụng',
  items: [
    { id: 1, title: 'Trường ca Achilles', price: 124000, quantity: 1 },
    { id: 2, title: 'Dưới đám mây màu cánh vạc', price: 144000, quantity: 1 },
  ],
  subtotal: 268000,
  shipping: 15000,
  total: 268000,
}

const statusOptions = [
  { value: 'pending', label: 'Chờ xác nhận' },
  { value: 'confirmed', label: 'Đã xác nhận' },
  { value: 'shipping', label: 'Đang giao' },
  { value: 'delivered', label: 'Đã giao' },
  { value: 'cancelled', label: 'Đã hủy' },
]

export default function AdminOrderDetailPage() {
  const { id } = useParams()
  const [orderData, setOrderData] = useState(defaultOrderData)
  const [status, setStatus] = useState(defaultOrderData.status)
  const formatPrice = (v: number) => v.toLocaleString('vi-VN') + 'đ'

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const res = await api.get(`/admin/orders/${id}`)
        if (res.data.success && res.data.data) {
          const o = res.data.data
          const mapped = {
            id: o.orderNumber || o.id,
            date: new Date(o.createdAt).toLocaleDateString('vi-VN'),
            status: o.status,
            customer: { name: o.user?.name || '', phone: o.user?.phone || '', email: o.user?.email || '' },
            address: `${o.shippingStreet || ''}, ${o.shippingWard || ''}, ${o.shippingDistrict || ''}, ${o.shippingProvince || ''}`,
            payment: o.paymentMethod === 'cod' ? 'Thanh toán khi nhận hàng' : o.paymentMethod || '',
            items: o.items?.map((i: { id: number; title: string; price: number; quantity: number }) => ({
              id: i.id, title: i.title, price: i.price, quantity: i.quantity,
            })) || [],
            subtotal: o.subtotal || 0,
            shipping: o.shippingFee || 0,
            total: o.total || 0,
          }
          setOrderData(mapped)
          setStatus(o.status)
        }
      } catch { /* keep defaults */ }
    }
    fetchOrder()
  }, [id])

  const handleStatusChange = async (newStatus: string) => {
    setStatus(newStatus as typeof defaultOrderData.status)
    try {
      await api.put(`/admin/orders/${id}/status`, { status: newStatus })
    } catch { /* still update locally */ }
  }

  return (
    <div>
      <div className="flex items-center gap-2 text-sm text-gray-400 mb-2">
        <Link to="/admin/orders" className="hover:text-[#2D3250]">Đơn hàng</Link>
        <CaretRight size={12} />
        <span className="text-gray-600">#{id || orderData.id}</span>
      </div>
      <h1 className="text-2xl font-extrabold text-[#1F2937] mb-6">Chi tiết đơn hàng #{id || orderData.id}</h1>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Order Items */}
        <div className="lg:col-span-2 bg-white rounded-xl p-6">
          <h2 className="font-bold text-[#1F2937] mb-4">Sản phẩm ({orderData.items.length})</h2>
          <div className="space-y-4">
            {orderData.items.map(item => (
              <div key={item.id} className="flex justify-between items-center py-3 border-b border-gray-100 last:border-0">
                <div>
                  <p className="font-semibold text-sm text-[#1F2937]">{item.title}</p>
                  <p className="text-xs text-gray-500">SL: {item.quantity}</p>
                </div>
                <p className="font-semibold text-sm text-[#E8612D]">{formatPrice(item.price)}</p>
              </div>
            ))}
          </div>
          <hr className="my-4 border-gray-200" />
          <div className="space-y-2 text-sm">
            <div className="flex justify-between"><span className="text-gray-500">Tạm tính</span><span>{formatPrice(orderData.subtotal)}</span></div>
            <div className="flex justify-between"><span className="text-gray-500">Phí ship</span><span>{formatPrice(orderData.shipping)}</span></div>
            <div className="flex justify-between font-bold text-base"><span>Tổng</span><span className="text-[#E8612D]">{formatPrice(orderData.total)}</span></div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Status */}
          <div className="bg-white rounded-xl p-6">
            <h3 className="font-bold text-[#1F2937] mb-3">Trạng thái</h3>
            <select
              value={status}
              onChange={e => handleStatusChange(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-[#E8612D]"
            >
              {statusOptions.map(opt => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
          </div>

          {/* Customer */}
          <div className="bg-white rounded-xl p-6">
            <h3 className="font-bold text-[#1F2937] mb-3">Khách hàng</h3>
            <div className="text-sm space-y-1">
              <p className="font-medium">{orderData.customer.name}</p>
              <p className="text-gray-500">{orderData.customer.phone}</p>
              <p className="text-gray-500">{orderData.customer.email}</p>
            </div>
          </div>

          {/* Shipping */}
          <div className="bg-white rounded-xl p-6">
            <h3 className="font-bold text-[#1F2937] mb-3">Địa chỉ giao hàng</h3>
            <p className="text-sm text-gray-600">{orderData.address}</p>
          </div>

          {/* Payment */}
          <div className="bg-white rounded-xl p-6">
            <h3 className="font-bold text-[#1F2937] mb-3">Thanh toán</h3>
            <p className="text-sm text-gray-600">{orderData.payment}</p>
            <p className="text-xs text-gray-400 mt-1">{orderData.date}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
