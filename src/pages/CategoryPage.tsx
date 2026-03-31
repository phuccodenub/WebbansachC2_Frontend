import { useState } from 'react'
import { FunnelSimple } from '@phosphor-icons/react'
import BookCard from '../components/BookCard'

const genres = ['Tất cả', 'Văn học VN', 'Khoa học', 'Truyện tranh', 'Lịch sử', 'Ngoại ngữ', 'Kinh tế', 'Tâm lý', 'Thiếu nhi']

const publishers = ['Nhã Nam', 'Kim Đồng', 'NXB Trẻ', 'Lao Động', 'Phụ Nữ', 'Tổng hợp TPHCM']

const priceRanges = [
  { label: 'Dưới 50.000đ', min: 0, max: 50000 },
  { label: '50.000đ - 100.000đ', min: 50000, max: 100000 },
  { label: '100.000đ - 200.000đ', min: 100000, max: 200000 },
  { label: 'Trên 200.000đ', min: 200000, max: Infinity },
]

const allBooks = [
  { id: 1, title: 'Đúng Là Tết!', image: 'https://placehold.co/220x300/e2e8f0/475569?text=Đúng+Là+Tết', price: 61200, originalPrice: 68000, discount: 10 },
  { id: 2, title: 'Nhà Giả Kim', image: 'https://placehold.co/220x300/e2e8f0/475569?text=Nhà+Giả+Kim', price: 69000, originalPrice: 79000, discount: 13 },
  { id: 3, title: 'Đắc Nhân Tâm', image: 'https://placehold.co/220x300/e2e8f0/475569?text=Đắc+Nhân+Tâm', price: 76000, originalPrice: 86000, discount: 12 },
  { id: 4, title: 'Cây Cam Ngọt Của Tôi', image: 'https://placehold.co/220x300/e2e8f0/475569?text=Cây+Cam+Ngọt', price: 82000, originalPrice: 108000, discount: 24 },
  { id: 5, title: 'Tuổi Trẻ Đáng Giá Bao Nhiêu', image: 'https://placehold.co/220x300/e2e8f0/475569?text=Tuổi+Trẻ', price: 65000, originalPrice: 75000, discount: 13 },
  { id: 6, title: 'Tôi Thấy Hoa Vàng Trên Cỏ Xanh', image: 'https://placehold.co/220x300/e2e8f0/475569?text=Hoa+Vàng', price: 55000, originalPrice: 72000, discount: 24 },
  { id: 7, title: 'Mắt Biếc', image: 'https://placehold.co/220x300/e2e8f0/475569?text=Mắt+Biếc', price: 95000, originalPrice: 110000, discount: 14 },
  { id: 8, title: 'Dế Mèn Phiêu Lưu Ký', image: 'https://placehold.co/220x300/e2e8f0/475569?text=Dế+Mèn', price: 45000, originalPrice: 55000, discount: 18 },
  { id: 9, title: 'Sapiens: Lược Sử Loài Người', image: 'https://placehold.co/220x300/e2e8f0/475569?text=Sapiens', price: 152000, originalPrice: 189000, discount: 20 },
  { id: 10, title: 'Atomic Habits', image: 'https://placehold.co/220x300/e2e8f0/475569?text=Atomic+Habits', price: 120000, originalPrice: 150000, discount: 20 },
  { id: 11, title: '1984 - George Orwell', image: 'https://placehold.co/220x300/e2e8f0/475569?text=1984', price: 89000, originalPrice: 99000, discount: 10 },
  { id: 12, title: 'Hoàng Tử Bé', image: 'https://placehold.co/220x300/e2e8f0/475569?text=Hoàng+Tử+Bé', price: 42000, originalPrice: 52000, discount: 19 },
]

export default function CategoryPage() {
  const [selectedGenre, setSelectedGenre] = useState('Tất cả')
  const [selectedPublishers, setSelectedPublishers] = useState<string[]>([])
  const [selectedPriceRange, setSelectedPriceRange] = useState<number | null>(null)
  const [showMobileFilter, setShowMobileFilter] = useState(false)

  const togglePublisher = (pub: string) => {
    setSelectedPublishers(prev =>
      prev.includes(pub) ? prev.filter(p => p !== pub) : [...prev, pub]
    )
  }

  const Sidebar = () => (
    <div className="space-y-6">
      {/* Genre */}
      <div>
        <h3 className="font-semibold text-text-primary mb-3">Thể loại</h3>
        <div className="space-y-2">
          {genres.map((genre) => (
            <button
              key={genre}
              onClick={() => setSelectedGenre(genre)}
              className={`block w-full text-left px-3 py-1.5 rounded-lg text-sm transition-colors ${
                selectedGenre === genre
                  ? 'bg-primary text-white font-medium'
                  : 'text-text-secondary hover:bg-gray-100'
              }`}
            >
              {genre}
            </button>
          ))}
        </div>
      </div>

      {/* Publisher */}
      <div>
        <h3 className="font-semibold text-text-primary mb-3">Nhà xuất bản</h3>
        <div className="space-y-2">
          {publishers.map((pub) => (
            <label key={pub} className="flex items-center gap-2 text-sm text-text-secondary cursor-pointer">
              <input
                type="checkbox"
                checked={selectedPublishers.includes(pub)}
                onChange={() => togglePublisher(pub)}
                className="rounded border-border text-primary focus:ring-primary"
              />
              {pub}
            </label>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div>
        <h3 className="font-semibold text-text-primary mb-3">Khoảng giá</h3>
        <div className="space-y-2">
          {priceRanges.map((range, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedPriceRange(selectedPriceRange === idx ? null : idx)}
              className={`block w-full text-left px-3 py-1.5 rounded-lg text-sm transition-colors ${
                selectedPriceRange === idx
                  ? 'bg-primary/10 text-primary font-medium'
                  : 'text-text-secondary hover:bg-gray-100'
              }`}
            >
              {range.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  )

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      {/* Breadcrumb */}
      <nav className="text-sm text-text-secondary mb-6">
        <span className="hover:text-primary cursor-pointer">Trang chủ</span>
        <span className="mx-2">/</span>
        <span className="text-text-primary font-medium">Danh mục sách</span>
      </nav>

      <div className="flex gap-6">
        {/* Sidebar - Desktop */}
        <aside className="hidden md:block w-64 shrink-0">
          <div className="bg-white rounded-xl p-5 border border-border sticky top-20">
            <Sidebar />
          </div>
        </aside>

        {/* Mobile Filter Toggle */}
        <button
          onClick={() => setShowMobileFilter(!showMobileFilter)}
          className="md:hidden fixed bottom-4 right-4 z-40 bg-primary text-white p-3 rounded-full shadow-lg"
        >
          <FunnelSimple size={24} />
        </button>

        {/* Mobile Filter Panel */}
        {showMobileFilter && (
          <div className="md:hidden fixed inset-0 z-50 bg-black/50" onClick={() => setShowMobileFilter(false)}>
            <div className="absolute right-0 top-0 h-full w-80 bg-white p-6 overflow-y-auto" onClick={e => e.stopPropagation()}>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-bold">Bộ lọc</h2>
                <button onClick={() => setShowMobileFilter(false)} className="text-text-secondary hover:text-text-primary">✕</button>
              </div>
              <Sidebar />
            </div>
          </div>
        )}

        {/* Product Grid */}
        <div className="flex-1">
          <div className="flex items-center justify-between mb-4">
            <p className="text-sm text-text-secondary">
              Hiển thị <span className="font-medium text-text-primary">{allBooks.length}</span> kết quả
            </p>
            <select className="text-sm border border-border rounded-lg px-3 py-1.5 focus:outline-none focus:border-primary">
              <option>Mới nhất</option>
              <option>Giá thấp → cao</option>
              <option>Giá cao → thấp</option>
              <option>Bán chạy nhất</option>
            </select>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {allBooks.map((book) => (
              <BookCard key={book.id} {...book} />
            ))}
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-center gap-2 mt-8">
            <button className="w-9 h-9 rounded-lg border border-border text-sm text-text-secondary hover:border-primary hover:text-primary transition-colors">
              ‹
            </button>
            {[1, 2, 3, 4, 5].map((page) => (
              <button
                key={page}
                className={`w-9 h-9 rounded-lg text-sm font-medium transition-colors ${
                  page === 1
                    ? 'bg-primary text-white'
                    : 'border border-border text-text-secondary hover:border-primary hover:text-primary'
                }`}
              >
                {page}
              </button>
            ))}
            <button className="w-9 h-9 rounded-lg border border-border text-sm text-text-secondary hover:border-primary hover:text-primary transition-colors">
              ›
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
