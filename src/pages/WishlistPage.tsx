import { Link } from 'react-router-dom'
import { X } from '@phosphor-icons/react'

const wishlistItems = [
  { id: 1, title: 'Tớ rất yêu Doraemon', image: 'https://placehold.co/277x303/e2e8f0/475569?text=Doraemon', price: 115200, originalPrice: 128000 },
  { id: 2, title: 'Vun đắp tâm hồn - Cô bé đội đám mây', image: 'https://placehold.co/277x303/e2e8f0/475569?text=Cô+Bé', price: 63000, originalPrice: 70000 },
  { id: 3, title: 'Hạt mầm nhân cách - Nuôi dưỡng lòng trung thực - Vị tổng thống ngay thẳng', image: 'https://placehold.co/277x303/e2e8f0/475569?text=Hạt+Mầm', price: 14400, originalPrice: 16000 },
]

export default function WishlistPage() {
  const formatPrice = (v: number) => v.toLocaleString('vi-VN') + '₫'

  return (
    <div>
      {/* Breadcrumb Banner */}
      <div className="bg-[#F5F6FA] py-10 px-4 mb-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-2xl font-bold text-text-primary">Wishlist</h1>
          <p className="text-sm mt-1">
            <Link to="/" className="text-text-primary underline font-medium hover:text-primary">Trang chủ</Link>
            <span className="mx-1 text-text-secondary">/</span>
            <span className="text-text-secondary">Wishlist</span>
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 pb-12">
        {/* Title + Delete All */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-text-primary">Wishlist</h2>
          <button className="text-sm text-text-primary hover:text-accent transition-colors border border-gray-300 px-4 py-1.5 rounded">
            Xóa tất cả
          </button>
        </div>
        <hr className="border-gray-300 mb-8" />

        {/* Books Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {wishlistItems.map((item) => (
            <div key={item.id} className="relative group">
              {/* X Remove Button */}
              <button className="absolute top-2 right-[-12px] z-10 w-8 h-8 bg-gray-200 hover:bg-red-100 rounded-full flex items-center justify-center text-gray-500 hover:text-red-500 transition-colors shadow-sm">
                <X size={16} weight="bold" />
              </button>
              {/* Book Image */}
              <Link to={`/product/${item.id}`}>
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full aspect-[277/303] object-cover rounded-sm"
                />
              </Link>
              {/* Book Info */}
              <div className="mt-3">
                <Link to={`/product/${item.id}`} className="text-sm text-text-primary hover:text-primary line-clamp-2 leading-snug">
                  {item.title}
                </Link>
                <div className="flex items-center gap-3 mt-2">
                  <span className="text-sm text-red-500 font-medium">{formatPrice(item.price)}</span>
                  <span className="text-sm text-gray-400 line-through">{formatPrice(item.originalPrice)}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
