import { Truck, ShieldCheck, CreditCard, FileText, ArrowRight } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'
import BookCard from '../components/BookCard'

const categories = [
  { name: 'Văn học VN', icon: '📚', color: 'bg-blue-50 border-blue-200' },
  { name: 'Khoa học', icon: '🔬', color: 'bg-green-50 border-green-200' },
  { name: 'Truyện tranh', icon: '🎨', color: 'bg-yellow-50 border-yellow-200' },
  { name: 'Lịch sử', icon: '🏛️', color: 'bg-red-50 border-red-200' },
  { name: 'Ngoại ngữ', icon: '🌐', color: 'bg-purple-50 border-purple-200' },
  { name: 'Kinh tế', icon: '📈', color: 'bg-orange-50 border-orange-200' },
]

const features = [
  { icon: Truck, title: 'Giao hàng nhanh', desc: 'Giao hàng toàn quốc' },
  { icon: ShieldCheck, title: 'Chất lượng đỉnh nhất', desc: 'Sản phẩm chính hãng' },
  { icon: CreditCard, title: 'Bảo mật thanh toán', desc: 'An toàn & tiện lợi' },
  { icon: FileText, title: 'Chính sách rõ ràng', desc: 'Đổi trả dễ dàng' },
]

const bestSellers = [
  { id: 1, title: 'Đúng Là Tết!', image: 'https://placehold.co/220x300/e2e8f0/475569?text=Đúng+Là+Tết', price: 61200, originalPrice: 68000, discount: 10 },
  { id: 2, title: 'Nhà Giả Kim', image: 'https://placehold.co/220x300/e2e8f0/475569?text=Nhà+Giả+Kim', price: 69000, originalPrice: 79000, discount: 13 },
  { id: 3, title: 'Đắc Nhân Tâm', image: 'https://placehold.co/220x300/e2e8f0/475569?text=Đắc+Nhân+Tâm', price: 76000, originalPrice: 86000, discount: 12 },
  { id: 4, title: 'Cây Cam Ngọt Của Tôi', image: 'https://placehold.co/220x300/e2e8f0/475569?text=Cây+Cam+Ngọt', price: 82000, originalPrice: 108000, discount: 24 },
  { id: 5, title: 'Tuổi Trẻ Đáng Giá Bao Nhiêu', image: 'https://placehold.co/220x300/e2e8f0/475569?text=Tuổi+Trẻ', price: 65000, originalPrice: 75000, discount: 13 },
  { id: 6, title: 'Tôi Thấy Hoa Vàng Trên Cỏ Xanh', image: 'https://placehold.co/220x300/e2e8f0/475569?text=Hoa+Vàng', price: 55000, originalPrice: 72000, discount: 24 },
  { id: 7, title: 'Mắt Biếc', image: 'https://placehold.co/220x300/e2e8f0/475569?text=Mắt+Biếc', price: 95000, originalPrice: 110000, discount: 14 },
  { id: 8, title: 'Dế Mèn Phiêu Lưu Ký', image: 'https://placehold.co/220x300/e2e8f0/475569?text=Dế+Mèn', price: 45000, originalPrice: 55000, discount: 18 },
]

const newBooks = [
  { id: 9, title: 'Sapiens: Lược Sử Loài Người', image: 'https://placehold.co/220x300/e2e8f0/475569?text=Sapiens', price: 152000, originalPrice: 189000, discount: 20 },
  { id: 10, title: 'Atomic Habits', image: 'https://placehold.co/220x300/e2e8f0/475569?text=Atomic+Habits', price: 120000, originalPrice: 150000, discount: 20 },
  { id: 11, title: '1984 - George Orwell', image: 'https://placehold.co/220x300/e2e8f0/475569?text=1984', price: 89000, originalPrice: 99000, discount: 10 },
  { id: 12, title: 'Hoàng Tử Bé', image: 'https://placehold.co/220x300/e2e8f0/475569?text=Hoàng+Tử+Bé', price: 42000, originalPrice: 52000, discount: 19 },
]

export default function HomePage() {
  return (
    <div>
      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-primary to-primary-dark text-white">
        <div className="max-w-7xl mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
              Tìm cuốn sách yêu thích<br />tiếp theo của bạn tại đây!
            </h1>
            <p className="text-blue-100 text-lg mb-6 max-w-lg">
              Khám phá hàng ngàn đầu sách từ văn học, khoa học đến kinh tế với giá ưu đãi tốt nhất.
            </p>
            <div className="flex gap-3 justify-center md:justify-start">
              <Link
                to="/category"
                className="px-6 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-blue-50 transition-colors"
              >
                Khám phá ngay
              </Link>
              <Link
                to="/category"
                className="px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
              >
                Xem danh mục
              </Link>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <img
              src="https://placehold.co/420x320/3f83f8/ffffff?text=📚+MMT+Bookstore"
              alt="Hero"
              className="rounded-2xl shadow-2xl max-w-full"
            />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-4 -mt-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {features.map((f) => (
            <div key={f.title} className="bg-white rounded-xl p-4 shadow-sm flex items-center gap-3 border border-border">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <f.icon size={20} className="text-primary" />
              </div>
              <div>
                <p className="font-semibold text-sm text-text-primary">{f.title}</p>
                <p className="text-xs text-text-secondary">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-text-primary">Danh mục sách</h2>
          <Link to="/category" className="text-primary text-sm font-medium flex items-center gap-1 hover:underline">
            Xem tất cả <ArrowRight size={16} />
          </Link>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
          {categories.map((cat) => (
            <Link
              key={cat.name}
              to="/category"
              className={`${cat.color} border rounded-xl p-4 text-center hover:shadow-md transition-shadow`}
            >
              <div className="text-3xl mb-2">{cat.icon}</div>
              <span className="text-sm font-medium text-text-primary">{cat.name}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Best Sellers */}
      <section className="max-w-7xl mx-auto px-4 pb-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-text-primary">Sách bán chạy</h2>
          <Link to="/category" className="text-primary text-sm font-medium flex items-center gap-1 hover:underline">
            Xem tất cả <ArrowRight size={16} />
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {bestSellers.map((book) => (
            <BookCard key={book.id} {...book} />
          ))}
        </div>
      </section>

      {/* New Books */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-text-primary">Sách mới</h2>
            <Link to="/category" className="text-primary text-sm font-medium flex items-center gap-1 hover:underline">
              Xem tất cả <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {newBooks.map((book) => (
              <BookCard key={book.id} {...book} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
