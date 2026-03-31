import { useState } from 'react'
import { Link } from 'react-router-dom'
import { CreditCard, Wallet, Package, CaretDown, ArrowRight, CheckCircle } from '@phosphor-icons/react'

const cartItems = [
  { id: 1, title: 'Trường ca Achilles', image: 'https://placehold.co/80x100/e2e8f0/475569?text=Achilles', price: 124000, quantity: 1 },
  { id: 2, title: 'Dưới đám mây màu cánh vạc', image: 'https://placehold.co/80x100/e2e8f0/475569?text=Đám+Mây', price: 124000, quantity: 2 },
]

type PaymentMethod = 'card' | 'ewallet' | 'cod'

export default function CheckoutPage() {
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('card')
  const formatPrice = (v: number) => v.toLocaleString('vi-VN') + 'đ'

  const subtotal = cartItems.reduce((s, i) => s + i.price * i.quantity, 0)
  const shipping = 20000
  const discount = 0
  const total = subtotal + shipping - discount

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
                <input type="text" placeholder="Họ tên" className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-primary" />
                <input type="tel" placeholder="Số điện thoại" className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-primary" />
                <input type="email" placeholder="Email" className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-primary" />
                <input type="text" placeholder="Địa chỉ chi tiết" className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-primary" />
                <div className="grid grid-cols-3 gap-3">
                  <div className="relative">
                    <select className="w-full appearance-none px-4 py-3 border border-gray-200 rounded-lg text-sm text-gray-400 focus:outline-none focus:border-primary pr-8">
                      <option>Tỉnh thành</option>
                    </select>
                    <CaretDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                  </div>
                  <div className="relative">
                    <select className="w-full appearance-none px-4 py-3 border border-gray-200 rounded-lg text-sm text-gray-400 focus:outline-none focus:border-primary pr-8">
                      <option>Quận huyện</option>
                    </select>
                    <CaretDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                  </div>
                  <div className="relative">
                    <select className="w-full appearance-none px-4 py-3 border border-gray-200 rounded-lg text-sm text-gray-400 focus:outline-none focus:border-primary pr-8">
                      <option>Phường xã</option>
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
                {cartItems.map((item) => (
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
                  <span className="font-medium">{formatPrice(shipping)}</span>
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

              <Link
                to="/order-success"
                className="flex items-center justify-center gap-2 w-full py-3.5 bg-primary text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              >
                Đặt hàng
                <ArrowRight size={18} weight="bold" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
