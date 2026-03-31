import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Minus, Plus, Trash, ArrowLeft } from '@phosphor-icons/react'

interface CartItem {
  id: number
  title: string
  image: string
  price: number
  originalPrice: number
  quantity: number
}

const initialItems: CartItem[] = [
  { id: 1, title: 'Đúng Là Tết!', image: 'https://placehold.co/80x110/e2e8f0/475569?text=Đúng+Là+Tết', price: 61200, originalPrice: 68000, quantity: 1 },
  { id: 2, title: 'Nhà Giả Kim', image: 'https://placehold.co/80x110/e2e8f0/475569?text=Nhà+Giả+Kim', price: 69000, originalPrice: 79000, quantity: 2 },
  { id: 3, title: 'Đắc Nhân Tâm', image: 'https://placehold.co/80x110/e2e8f0/475569?text=Đắc+Nhân+Tâm', price: 76000, originalPrice: 86000, quantity: 1 },
]

export default function CartPage() {
  const [items, setItems] = useState<CartItem[]>(initialItems)

  const formatPrice = (value: number) => value.toLocaleString('vi-VN') + 'đ'

  const updateQuantity = (id: number, delta: number) => {
    setItems(prev =>
      prev.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    )
  }

  const removeItem = (id: number) => {
    setItems(prev => prev.filter(item => item.id !== id))
  }

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const totalOriginal = items.reduce((sum, item) => sum + item.originalPrice * item.quantity, 0)
  const discount = totalOriginal - subtotal
  const shipping = subtotal >= 200000 ? 0 : 30000
  const total = subtotal + shipping

  if (items.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 text-center">
        <div className="text-6xl mb-4">🛒</div>
        <h2 className="text-xl font-bold text-text-primary mb-2">Giỏ hàng trống</h2>
        <p className="text-text-secondary mb-6">Bạn chưa có sản phẩm nào trong giỏ hàng</p>
        <Link
          to="/category"
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors"
        >
          Tiếp tục mua sắm
        </Link>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      {/* Breadcrumb */}
      <nav className="text-sm text-text-secondary mb-6">
        <Link to="/" className="hover:text-primary">Trang chủ</Link>
        <span className="mx-2">/</span>
        <span className="text-text-primary font-medium">Giỏ hàng ({items.length})</span>
      </nav>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-4">
          {items.map((item) => (
            <div key={item.id} className="bg-white rounded-xl border border-border p-4 flex gap-4">
              <Link to={`/product/${item.id}`} className="shrink-0">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-20 h-28 object-cover rounded-lg"
                />
              </Link>
              <div className="flex-1 min-w-0">
                <Link to={`/product/${item.id}`} className="font-medium text-text-primary hover:text-primary line-clamp-2">
                  {item.title}
                </Link>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="text-price font-bold">{formatPrice(item.price)}</span>
                  <span className="text-xs text-price-old line-through">{formatPrice(item.originalPrice)}</span>
                </div>

                <div className="flex items-center justify-between mt-3">
                  <div className="flex items-center border border-border rounded-lg">
                    <button
                      onClick={() => updateQuantity(item.id, -1)}
                      className="w-8 h-8 flex items-center justify-center text-text-secondary hover:text-primary"
                    >
                      <Minus size={14} />
                    </button>
                    <span className="w-8 text-center text-sm font-medium">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, 1)}
                      className="w-8 h-8 flex items-center justify-center text-text-secondary hover:text-primary"
                    >
                      <Plus size={14} />
                    </button>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-semibold text-text-primary">
                      {formatPrice(item.price * item.quantity)}
                    </span>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-text-muted hover:text-accent transition-colors"
                    >
                      <Trash size={18} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <Link
            to="/category"
            className="inline-flex items-center gap-1 text-sm text-primary hover:underline mt-2"
          >
            <ArrowLeft size={16} />
            Tiếp tục mua sắm
          </Link>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl border border-border p-5 sticky top-20">
            <h3 className="font-bold text-lg text-text-primary mb-4">Tóm tắt đơn hàng</h3>

            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-text-secondary">Tạm tính ({items.reduce((s, i) => s + i.quantity, 0)} sản phẩm)</span>
                <span className="font-medium">{formatPrice(subtotal)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-text-secondary">Giảm giá</span>
                <span className="text-success font-medium">-{formatPrice(discount)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-text-secondary">Phí vận chuyển</span>
                <span className="font-medium">{shipping === 0 ? 'Miễn phí' : formatPrice(shipping)}</span>
              </div>
              {shipping > 0 && (
                <p className="text-xs text-text-muted">
                  Miễn phí vận chuyển cho đơn từ 200.000đ
                </p>
              )}
            </div>

            <div className="border-t border-border mt-4 pt-4 flex justify-between items-center">
              <span className="font-bold text-text-primary">Tổng cộng</span>
              <span className="text-xl font-bold text-price">{formatPrice(total)}</span>
            </div>

            {/* Coupon */}
            <div className="mt-4">
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Mã giảm giá"
                  className="flex-1 px-3 py-2 text-sm border border-border rounded-lg focus:outline-none focus:border-primary"
                />
                <button className="px-4 py-2 text-sm font-medium border border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-colors">
                  Áp dụng
                </button>
              </div>
            </div>

            <button className="w-full mt-4 py-3 bg-accent text-white font-semibold rounded-lg hover:bg-red-600 transition-colors">
              TIẾN HÀNH THANH TOÁN
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
