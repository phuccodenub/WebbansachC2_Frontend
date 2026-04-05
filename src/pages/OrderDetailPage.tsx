import { useEffect, useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { Truck, CheckCircle, MapPin, CreditCard, ClipboardText, ArrowsClockwise, Check } from '@phosphor-icons/react'
import { useCart } from '../context/CartContext'
import api from '../lib/api'

const defaultOrderData = {
  id: 'BST-123456',
  date: 'Đặt ngày 24 tháng 02, 2026 • 14:30',
  status: 'shipping',
  statusLabel: 'Đang giao hàng',
  items: [
    { id: 1, title: 'Trường ca Achilles', author: 'Madeline Miller', image: 'https://placehold.co/80x110/e2e8f0/475569?text=Achilles', price: 124000, quantity: 1 },
    { id: 2, title: 'Dưới đám mây màu cánh vạc', author: 'Thu Bồn', image: 'https://placehold.co/80x110/e2e8f0/475569?text=Đám+Mây', price: 144000, quantity: 1 },
  ],
  receiver: { name: 'Nguyễn Văn A', phone: '090 123 4567', address: 'Tòa nhà Sapphire, 123 Đường Sách,\nPhường Bến Nghé, Quận 1,\nTP. Hồ Chí Minh' },
  payment: { type: 'Thẻ tín dụng', card: '**** **** **** 8888' },
  subtotal: 268000,
  shipping: 15000,
  discount: 15000,
  total: 268000,
}

const statusLabels: Record<string, string> = {
  pending: 'Chờ xử lý',
  confirmed: 'Đã xác nhận',
  shipping: 'Đang giao hàng',
  delivered: 'Đã giao',
  cancelled: 'Đã hủy',
}

const steps = [
  { label: 'Đã xác nhận', done: true },
  { label: 'Đang đóng gói', done: true },
  { label: 'Đang giao', done: true, current: true },
  { label: 'Thành công', done: false },
]

export default function OrderDetailPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { addToCart } = useCart()
  const [orderData, setOrderData] = useState(defaultOrderData)
  const [cancelled, setCancelled] = useState(false)
  const formatPrice = (v: number) => v.toLocaleString('vi-VN') + 'đ'

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const res = await api.get(`/orders/${id}`)
        if (res.data.success && res.data.data) {
          const o = res.data.data
          setOrderData({
            id: o.orderNumber || o.id,
            date: `Đặt ngày ${new Date(o.createdAt).toLocaleDateString('vi-VN')}`,
            status: o.status,
            statusLabel: statusLabels[o.status] || o.status,
            items: o.items?.map((i: { id?: number; bookId?: number; title: string; author?: string; image?: string; price: number; quantity: number }) => ({
              id: i.id || i.bookId,
              title: i.title,
              author: i.author || '',
              image: i.image || 'https://placehold.co/80x110/e2e8f0/475569?text=Book',
              price: i.price,
              quantity: i.quantity,
            })) || [],
            receiver: {
              name: o.shippingName || '',
              phone: o.shippingPhone || '',
              address: `${o.shippingStreet || ''}, ${o.shippingWard || ''}, ${o.shippingDistrict || ''}, ${o.shippingProvince || ''}`,
            },
            payment: { type: o.paymentMethod === 'cod' ? 'Thanh toán khi nhận hàng' : o.paymentMethod || '', card: '' },
            subtotal: o.subtotal || 0,
            shipping: o.shippingFee || 0,
            discount: 0,
            total: o.total || 0,
          })
          if (o.status === 'cancelled') setCancelled(true)
        }
      } catch { /* keep defaults */ }
    }
    fetchOrder()
  }, [id])

  const handleCancelOrder = async () => {
    if (window.confirm('Bạn có chắc chắn muốn hủy đơn hàng này không?')) {
      try {
        await api.put(`/orders/${id}/cancel`)
        setCancelled(true)
      } catch {
        setCancelled(true)
      }
    }
  }

  const handleBuyAgain = () => {
    orderData.items.forEach(item => {
      addToCart({ id: item.id, title: item.title, price: item.price, quantity: item.quantity, image: item.image })
    })
    navigate('/cart')
  }

  return (
    <div className="bg-[#F5F6FA] min-h-screen">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="text-sm text-text-secondary mb-4">
          <Link to="/" className="hover:text-primary">Trang chủ</Link>
          <span className="mx-2">›</span>
          <Link to="/orders" className="hover:text-primary">Đơn hàng của tôi</Link>
        </nav>

        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-text-primary">Mã đơn hàng: #{id || orderData.id}</h1>
            <p className="text-sm text-text-secondary mt-1">{orderData.date}</p>
          </div>
          <span className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-text-primary">
            <Truck size={16} />
            {orderData.statusLabel}
          </span>
        </div>

        {/* Progress tracker */}
        <div className="bg-white rounded-xl p-6 mb-6">
          <div className="flex items-center">
            {steps.map((step, idx) => (
              <div key={idx} className="flex-1 flex items-center">
                <div className="flex flex-col items-center relative z-10">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    step.done
                      ? step.current ? 'bg-primary text-white' : 'bg-primary text-white'
                      : 'bg-gray-200 text-gray-400'
                  }`}>
                    {step.current ? <Truck size={14} weight="bold" /> : step.done ? <Check size={14} weight="bold" /> : <Check size={14} />}
                  </div>
                  <span className={`text-xs mt-2 ${step.done ? 'text-primary font-medium' : 'text-text-secondary'}`}>
                    {step.label}
                  </span>
                </div>
                {idx < steps.length - 1 && (
                  <div className={`flex-1 h-0.5 mx-1 ${steps[idx + 1].done || steps[idx + 1].current ? 'bg-primary' : 'bg-gray-200'}`} />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-5 gap-6">
          {/* Left: Products */}
          <div className="lg:col-span-3 space-y-6">
            <div className="bg-white rounded-xl p-6">
              <h2 className="flex items-center gap-2 font-bold text-text-primary mb-5">
                <ClipboardText size={18} />
                Danh sách sản phẩm ({orderData.items.length})
              </h2>
              <div className="space-y-5">
                {orderData.items.map((item) => (
                  <div key={item.id} className="flex gap-4 pb-5 border-b border-gray-100 last:border-0 last:pb-0">
                    <img src={item.image} alt={item.title} className="w-16 h-22 object-cover rounded-md shrink-0" />
                    <div className="flex-1">
                      <p className="font-semibold text-sm text-text-primary">{item.title}</p>
                      <p className="text-xs text-primary mt-0.5">Tác giả: {item.author}</p>
                      <span className="inline-block mt-2 px-3 py-1 bg-gray-100 rounded text-xs text-text-secondary">
                        Số lượng: {item.quantity}
                      </span>
                    </div>
                    <p className="text-sm font-semibold text-text-primary self-end">{formatPrice(item.price)}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex gap-4">
              {!cancelled && orderData.status === 'shipping' && (
                <button onClick={handleCancelOrder} className="flex-1 py-3.5 border border-red-300 text-red-500 font-semibold rounded-xl hover:bg-red-50 transition-colors text-sm">
                  Hủy đơn hàng
                </button>
              )}
              {cancelled && (
                <span className="flex-1 py-3.5 text-center border border-gray-300 text-gray-400 font-semibold rounded-xl text-sm">
                  Đã hủy
                </span>
              )}
              <button onClick={handleBuyAgain} className="flex-[2] flex items-center justify-center gap-2 py-3.5 bg-primary text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors text-sm">
                <ArrowsClockwise size={16} />
                Mua lại
              </button>
            </div>
          </div>

          {/* Right: Info sidebar */}
          <div className="lg:col-span-2 space-y-6">
            {/* Receiver info */}
            <div className="bg-white rounded-xl p-6">
              <h3 className="flex items-center gap-2 font-bold text-text-primary mb-4">
                <MapPin size={16} />
                Thông tin nhận hàng
              </h3>
              <div className="space-y-3">
                <div>
                  <p className="text-[11px] text-primary uppercase font-semibold tracking-wide">Người nhận</p>
                  <p className="text-sm font-semibold text-text-primary">{orderData.receiver.name}</p>
                </div>
                <div>
                  <p className="text-[11px] text-primary uppercase font-semibold tracking-wide">Số điện thoại</p>
                  <p className="text-sm text-text-primary">{orderData.receiver.phone}</p>
                </div>
                <div>
                  <p className="text-[11px] text-primary uppercase font-semibold tracking-wide">Địa chỉ</p>
                  <p className="text-sm text-text-secondary whitespace-pre-line">{orderData.receiver.address}</p>
                </div>
              </div>
            </div>

            {/* Payment */}
            <div className="bg-white rounded-xl p-6">
              <h3 className="flex items-center gap-2 font-bold text-text-primary mb-4">
                <CreditCard size={16} />
                Thanh toán
              </h3>
              <div className="flex items-center gap-3 border border-gray-200 rounded-lg p-3">
                <span className="px-2 py-1 bg-[#1A1F71] text-white text-[10px] font-bold rounded">VISA</span>
                <div>
                  <p className="text-sm font-medium text-text-primary">{orderData.payment.type}</p>
                  <p className="text-xs text-text-secondary">{orderData.payment.card}</p>
                </div>
              </div>
            </div>

            {/* Price summary */}
            <div className="bg-white rounded-xl p-6">
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-text-secondary">Tạm tính ({orderData.items.length} sản phẩm)</span>
                  <span className="font-medium">{formatPrice(orderData.subtotal)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-secondary">Phí vận chuyển</span>
                  <span className="font-medium">{formatPrice(orderData.shipping)}</span>
                </div>
                <div className="flex justify-between text-green-600">
                  <span>Giảm giá</span>
                  <span>-{formatPrice(orderData.discount)}</span>
                </div>
                <hr className="border-gray-200" />
                <div className="flex justify-between items-center pt-1">
                  <span className="font-bold text-text-primary">Tổng cộng</span>
                  <span className="text-xl font-bold text-primary">{formatPrice(orderData.total)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
