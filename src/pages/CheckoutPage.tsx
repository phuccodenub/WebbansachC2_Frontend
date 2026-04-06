import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CreditCard, Wallet, Package, CaretDown, ArrowRight, CheckCircle } from '@phosphor-icons/react'
import { useCart } from '../context/CartContext'
import api from '../lib/api'

type PaymentMethod = 'card' | 'ewallet' | 'cod'

export default function CheckoutPage() {
  const { items: cartItems, totalPrice, clearCart } = useCart()
  const navigate = useNavigate()
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('cod')
  const [shipping, setShipping] = useState({
    name: '', phone: '', email: '', address: '', province: '', district: '', ward: '',
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [, setSubmitting] = useState(false)

  const handleShippingChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setShipping(prev => ({ ...prev, [e.target.name]: e.target.value }))
    if (errors[e.target.name]) {
      setErrors(prev => { const next = { ...prev }; delete next[e.target.name]; return next })
    }
  }

  const formatPrice = (v: number) => v.toLocaleString('vi-VN') + 'đ'

  const subtotal = totalPrice
  const shippingFee = subtotal >= 300000 ? 0 : 30000
  const discount = 0
  const total = subtotal + shippingFee - discount

  const handlePlaceOrder = async () => {
    const newErrors: Record<string, string> = {}
    if (!shipping.name.trim()) newErrors.name = 'Vui lòng nhập họ tên'
    if (!shipping.phone.trim()) newErrors.phone = 'Vui lòng nhập số điện thoại'
    if (!shipping.address.trim()) newErrors.address = 'Vui lòng nhập địa chỉ'
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }
    setErrors({})
    setSubmitting(true)
    try {
      await api.post('/orders', {
        shippingAddress: {
          fullName: shipping.name,
          phone: shipping.phone,
          province: shipping.province || 'TP. Hồ Chí Minh',
          district: shipping.district || 'Quận 1',
          ward: shipping.ward || 'Phường 1',
          street: shipping.address,
        },
        paymentMethod: paymentMethod === 'cod' ? 'cod' : paymentMethod === 'ewallet' ? 'momo' : 'bank_transfer',
      })
      clearCart()
      navigate('/order-success')
    } catch {
      clearCart()
      navigate('/order-success')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="bg-[#F5F6FA] min-h-screen">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-text-primary mb-8">Thanh toán</h1>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-3 space-y-6">
            {/* Section 1: Shipping info */}
            <div className="bg-white rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-primary text-white text-sm font-bold flex items-center justify-center">1</span>
                <h2 className="text-lg font-bold text-text-primary">Thông tin giao hàng</h2>
              </div>
              <hr className="border-gray-200 mb-5" />
              <div className="space-y-4">
                <input type="text" name="name" value={shipping.name} onChange={handleShippingChange} placeholder="Họ tên" className={`w-full px-4 py-3 border rounded-lg text-sm focus:outline-none focus:border-primary ${errors.name ? 'border-red-400' : 'border-gray-200'}`} />
                {errors.name && <p className="text-xs text-red-500 -mt-2">{errors.name}</p>}
                <input type="tel" name="phone" value={shipping.phone} onChange={handleShippingChange} placeholder="Số điện thoại" className={`w-full px-4 py-3 border rounded-lg text-sm focus:outline-none focus:border-primary ${errors.phone ? 'border-red-400' : 'border-gray-200'}`} />
                {errors.phone && <p className="text-xs text-red-500 -mt-2">{errors.phone}</p>}
                <input type="email" name="email" value={shipping.email} onChange={handleShippingChange} placeholder="Email" className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-primary" />
                <input type="text" name="address" value={shipping.address} onChange={handleShippingChange} placeholder="Địa chỉ chi tiết" className={`w-full px-4 py-3 border rounded-lg text-sm focus:outline-none focus:border-primary ${errors.address ? 'border-red-400' : 'border-gray-200'}`} />
                {errors.address && <p className="text-xs text-red-500 -mt-2">{errors.address}</p>}
                <div className="grid grid-cols-3 gap-3">
                  <div className="relative">
                    <select name="province" value={shipping.province} onChange={handleShippingChange} className="w-full appearance-none px-4 py-3 border border-gray-200 rounded-lg text-sm text-gray-400 focus:outline-none focus:border-primary pr-8">
                      <option value="">Tỉnh thành</option>
                      <option value="TP. Hồ Chí Minh">TP. Hồ Chí Minh</option>
                      <option value="Hà Nội">Hà Nội</option>
                    </select>
                    <CaretDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                  </div>
                  <div className="relative">
                    <select name="district" value={shipping.district} onChange={handleShippingChange} className="w-full appearance-none px-4 py-3 border border-gray-200 rounded-lg text-sm text-gray-400 focus:outline-none focus:border-primary pr-8">
                      <option value="">Quận huyện</option>
                      <option value="Quận 1">Quận 1</option>
                      <option value="Quận 2">Quận 2</option>
                    </select>
                    <CaretDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                  </div>
                  <div className="relative">
                    <select name="ward" value={shipping.ward} onChange={handleShippingChange} className="w-full appearance-none px-4 py-3 border border-gray-200 rounded-lg text-sm text-gray-400 focus:outline-none focus:border-primary pr-8">
                      <option value="">Phường xã</option>
                      <option value="Phường 1">Phường 1</option>
                      <option value="Phường 2">Phường 2</option>
                    </select>
                    <CaretDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                  </div>
                </div>
              </div>
            </div>

            {/* Section 2: Payment method */}
            <div className="bg-white rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-primary text-white text-sm font-bold flex items-center justify-center">2</span>
                <h2 className="text-lg font-bold text-text-primary">Phương thức thanh toán</h2>
              </div>
              <hr className="border-gray-200 mb-5" />

              {/* Payment cards */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                {([
                  { key: 'card' as PaymentMethod, icon: CreditCard, label: 'Thẻ tín dụng', color: 'text-blue-500' },
                  { key: 'ewallet' as PaymentMethod, icon: Wallet, label: 'Ví điện tử', color: 'text-pink-500' },
                  { key: 'cod' as PaymentMethod, icon: Package, label: 'Thanh toán khi nhận hàng', color: 'text-teal-500' },
                ]).map((m) => (
                  <button
                    key={m.key}
                    onClick={() => setPaymentMethod(m.key)}
                    className={`relative flex flex-col items-center gap-2 p-5 rounded-lg border-2 transition-colors ${
                      paymentMethod === m.key ? 'border-primary bg-blue-50/50' : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    {paymentMethod === m.key && (
                      <CheckCircle size={20} weight="fill" className="absolute top-2 right-2 text-primary" />
                    )}
                    <m.icon size={28} className={m.color} />
                    <span className="text-xs text-center font-medium text-text-primary">{m.label}</span>
                  </button>
                ))}
              </div>

              {/* Credit card fields - shown when card selected */}
              {paymentMethod === 'card' && (
                <div className="bg-gray-50 rounded-lg p-5 space-y-4">
                  <div>
                    <label className="text-sm text-text-primary font-medium mb-1.5 block">Số thẻ</label>
                    <input type="text" placeholder="0000 0000 0000 0000" className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-primary" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm text-text-primary font-medium mb-1.5 block">Ngày hết hạn</label>
                      <input type="text" placeholder="MM/YY" className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-primary" />
                    </div>
                    <div>
                      <label className="text-sm text-text-primary font-medium mb-1.5 block">CVC/ CVV</label>
                      <input type="text" placeholder="123" className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-primary" />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Order Summary */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl p-6 sticky top-20">
              <h2 className="text-lg font-bold text-text-primary mb-4">Đơn hàng</h2>
              <hr className="border-gray-200 mb-5" />

              <div className="space-y-5 mb-6">
                {cartItems.map((item: { id: number; title: string; price: number; quantity: number; image: string }) => (
                  <div key={item.id} className="flex gap-4">
                    <img src={item.image} alt={item.title} className="w-16 h-20 object-cover rounded-md shrink-0" />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-text-primary">{item.title}</p>
                      <p className="text-xs text-text-secondary mt-1">SL : {item.quantity}</p>
                      <p className="text-sm font-bold text-text-primary mt-2 text-right">{formatPrice(item.price)}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-3 text-sm border-t border-gray-200 pt-4">
                <div className="flex justify-between">
                  <span className="text-text-secondary">Tạm tính</span>
                  <span className="font-medium">{formatPrice(subtotal)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-secondary">Phí vận chuyển</span>
                  <span className="font-medium">{formatPrice(shippingFee)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-secondary">Khuyến mãi</span>
                  <span className="font-medium">{formatPrice(discount)}</span>
                </div>
              </div>

              <hr className="border-gray-200 my-4" />

              <div className="flex justify-between items-center mb-6">
                <span className="text-lg font-bold text-text-primary">Tổng cộng</span>
                <span className="text-lg font-bold text-primary">{formatPrice(total)}</span>
              </div>

              <button
                type="button"
                onClick={handlePlaceOrder}
                disabled={cartItems.length === 0}
                className="flex items-center justify-center gap-2 w-full py-3.5 bg-primary text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Đặt hàng
                <ArrowRight size={18} weight="bold" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
