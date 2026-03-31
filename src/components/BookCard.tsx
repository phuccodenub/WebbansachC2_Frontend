import { ShoppingCart } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'

interface BookCardProps {
  id: number
  title: string
  image: string
  price: number
  originalPrice?: number
  discount?: number
}

export default function BookCard({ id, title, image, price, originalPrice, discount }: BookCardProps) {
  const formatPrice = (value: number) =>
    value.toLocaleString('vi-VN') + 'đ'

  return (
    <Link
      to={`/product/${id}`}
      className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-border"
    >
      {/* Image */}
      <div className="relative aspect-[3/4] overflow-hidden bg-bg-light">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {discount && (
          <span className="absolute top-2 left-2 bg-accent text-white text-xs font-bold px-2 py-0.5 rounded">
            -{discount}%
          </span>
        )}
      </div>

      {/* Info */}
      <div className="p-3">
        <h3 className="text-sm font-medium text-text-primary line-clamp-2 mb-2 min-h-[2.5rem]">
          {title}
        </h3>
        <div className="flex items-center justify-between">
          <div>
            <span className="text-price font-bold text-base">{formatPrice(price)}</span>
            {originalPrice && (
              <span className="text-price-old text-xs line-through ml-2">
                {formatPrice(originalPrice)}
              </span>
            )}
          </div>
          <button
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
            }}
            className="w-8 h-8 flex items-center justify-center rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors"
          >
            <ShoppingCart size={16} weight="bold" />
          </button>
        </div>
      </div>
    </Link>
  )
}
