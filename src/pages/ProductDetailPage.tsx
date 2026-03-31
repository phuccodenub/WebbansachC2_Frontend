import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Star, Minus, Plus, ShoppingCart, Heart } from '@phosphor-icons/react'
import BookCard from '../components/BookCard'

const relatedBooks = [
  { id: 2, title: 'Nhà Giả Kim', image: 'https://placehold.co/220x300/e2e8f0/475569?text=Nhà+Giả+Kim', price: 69000, originalPrice: 79000, discount: 13 },
  { id: 3, title: 'Đắc Nhân Tâm', image: 'https://placehold.co/220x300/e2e8f0/475569?text=Đắc+Nhân+Tâm', price: 76000, originalPrice: 86000, discount: 12 },
  { id: 4, title: 'Cây Cam Ngọt Của Tôi', image: 'https://placehold.co/220x300/e2e8f0/475569?text=Cây+Cam+Ngọt', price: 82000, originalPrice: 108000, discount: 24 },
  { id: 5, title: 'Tuổi Trẻ Đáng Giá Bao Nhiêu', image: 'https://placehold.co/220x300/e2e8f0/475569?text=Tuổi+Trẻ', price: 65000, originalPrice: 75000, discount: 13 },
]

const bookDetails = {
  isbn: '978-604-2-12345-6',
  author: 'Nguyễn Nhật Ánh',
  publisher: 'NXB Trẻ',
  publishYear: 2024,
  pages: 256,
  language: 'Tiếng Việt',
  weight: '300g',
  dimensions: '13 x 20.5 cm',
}

export default function ProductDetailPage() {
  const [quantity, setQuantity] = useState(1)
  const [activeTab, setActiveTab] = useState<'description' | 'reviews'>('description')
  const [selectedImage, setSelectedImage] = useState(0)

  const images = [
    'https://placehold.co/400x560/e2e8f0/475569?text=Đúng+Là+Tết!',
    'https://placehold.co/400x560/e2e8f0/475569?text=Mặt+sau',
    'https://placehold.co/400x560/e2e8f0/475569?text=Bìa+trong',
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      {/* Breadcrumb */}
      <nav className="text-sm text-text-secondary mb-6">
        <Link to="/" className="hover:text-primary">Trang chủ</Link>
        <span className="mx-2">/</span>
        <Link to="/category" className="hover:text-primary">Văn học Việt Nam</Link>
        <span className="mx-2">/</span>
        <span className="text-text-primary font-medium">Đúng Là Tết!</span>
      </nav>

      {/* Product Main */}
      <div className="bg-white rounded-xl border border-border p-6 mb-8">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Images */}
          <div>
            <div className="aspect-[3/4] rounded-lg overflow-hidden bg-bg-light mb-3">
              <img
                src={images[selectedImage]}
                alt="Đúng Là Tết!"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-2">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`w-16 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                    selectedImage === idx ? 'border-primary' : 'border-border'
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Info */}
          <div>
            <h1 className="text-2xl font-bold text-text-primary mb-2">Đúng Là Tết!</h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={18}
                    weight={star <= 4 ? 'fill' : 'regular'}
                    className={star <= 4 ? 'text-yellow-400' : 'text-gray-300'}
                  />
                ))}
              </div>
              <span className="text-sm text-text-secondary">(128 đánh giá)</span>
              <span className="text-sm text-text-muted">|</span>
              <span className="text-sm text-success">Còn hàng</span>
            </div>

            {/* Price */}
            <div className="bg-bg-light rounded-lg p-4 mb-6">
              <div className="flex items-baseline gap-3">
                <span className="text-3xl font-bold text-price">61.200đ</span>
                <span className="text-lg text-price-old line-through">68.000đ</span>
                <span className="bg-accent text-white text-xs font-bold px-2 py-0.5 rounded">-10%</span>
              </div>
            </div>

            {/* Book Details Quick */}
            <div className="grid grid-cols-2 gap-3 mb-6 text-sm">
              <div className="flex justify-between">
                <span className="text-text-secondary">Tác giả:</span>
                <span className="text-primary font-medium">{bookDetails.author}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-text-secondary">NXB:</span>
                <span className="font-medium">{bookDetails.publisher}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-text-secondary">Năm XB:</span>
                <span className="font-medium">{bookDetails.publishYear}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-text-secondary">Số trang:</span>
                <span className="font-medium">{bookDetails.pages}</span>
              </div>
            </div>

            {/* Quantity */}
            <div className="flex items-center gap-4 mb-6">
              <span className="text-sm text-text-secondary font-medium">Số lượng:</span>
              <div className="flex items-center border border-border rounded-lg">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-9 h-9 flex items-center justify-center text-text-secondary hover:text-primary transition-colors"
                >
                  <Minus size={16} />
                </button>
                <span className="w-10 text-center text-sm font-medium">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-9 h-9 flex items-center justify-center text-text-secondary hover:text-primary transition-colors"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-3">
              <button className="flex-1 flex items-center justify-center gap-2 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors">
                <ShoppingCart size={20} />
                THÊM VÀO GIỎ HÀNG
              </button>
              <button className="flex-1 py-3 bg-accent text-white font-semibold rounded-lg hover:bg-red-600 transition-colors">
                MUA NGAY
              </button>
              <button className="w-12 h-12 flex items-center justify-center border border-border rounded-lg text-text-secondary hover:text-accent hover:border-accent transition-colors">
                <Heart size={22} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-xl border border-border mb-8">
        <div className="flex border-b border-border">
          <button
            onClick={() => setActiveTab('description')}
            className={`px-6 py-3 text-sm font-medium transition-colors relative ${
              activeTab === 'description'
                ? 'text-primary'
                : 'text-text-secondary hover:text-text-primary'
            }`}
          >
            Mô tả sản phẩm
            {activeTab === 'description' && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
            )}
          </button>
          <button
            onClick={() => setActiveTab('reviews')}
            className={`px-6 py-3 text-sm font-medium transition-colors relative ${
              activeTab === 'reviews'
                ? 'text-primary'
                : 'text-text-secondary hover:text-text-primary'
            }`}
          >
            Đánh giá (128)
            {activeTab === 'reviews' && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
            )}
          </button>
        </div>

        <div className="p-6">
          {activeTab === 'description' ? (
            <div className="prose prose-sm max-w-none">
              <h3 className="text-lg font-semibold mb-3">Thông tin chi tiết</h3>
              <table className="w-full text-sm mb-6">
                <tbody>
                  {Object.entries({
                    'ISBN': bookDetails.isbn,
                    'Tác giả': bookDetails.author,
                    'Nhà xuất bản': bookDetails.publisher,
                    'Năm xuất bản': bookDetails.publishYear,
                    'Số trang': bookDetails.pages,
                    'Ngôn ngữ': bookDetails.language,
                    'Trọng lượng': bookDetails.weight,
                    'Kích thước': bookDetails.dimensions,
                  }).map(([key, value]) => (
                    <tr key={key} className="border-b border-border">
                      <td className="py-2 text-text-secondary w-40">{key}</td>
                      <td className="py-2 font-medium">{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <h3 className="text-lg font-semibold mb-3">Giới thiệu sách</h3>
              <p className="text-text-secondary leading-relaxed mb-3">
                "Đúng Là Tết!" là tập truyện ngắn mới nhất của nhà văn Nguyễn Nhật Ánh, mang đến những câu chuyện ấm áp, hài hước và đầy hoài niệm về ngày Tết cổ truyền Việt Nam.
              </p>
              <p className="text-text-secondary leading-relaxed">
                Qua ngòi bút tinh tế, tác giả dẫn dắt người đọc trở về với những ký ức tuổi thơ, nơi mùi bánh chưng, tiếng pháo, và không khí sum vầy gia đình luôn gợi lên cảm xúc khó quên.
              </p>
            </div>
          ) : (
            <div className="space-y-6">
              {/* Review Summary */}
              <div className="flex items-center gap-6 p-4 bg-bg-light rounded-lg">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary">4.0</div>
                  <div className="flex mt-1">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} size={14} weight={s <= 4 ? 'fill' : 'regular'} className={s <= 4 ? 'text-yellow-400' : 'text-gray-300'} />
                    ))}
                  </div>
                  <div className="text-xs text-text-secondary mt-1">128 đánh giá</div>
                </div>
                <div className="flex-1 space-y-1">
                  {[
                    { stars: 5, count: 72 },
                    { stars: 4, count: 35 },
                    { stars: 3, count: 15 },
                    { stars: 2, count: 4 },
                    { stars: 1, count: 2 },
                  ].map((r) => (
                    <div key={r.stars} className="flex items-center gap-2 text-xs">
                      <span className="w-4 text-right">{r.stars}</span>
                      <Star size={12} weight="fill" className="text-yellow-400" />
                      <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-yellow-400 rounded-full"
                          style={{ width: `${(r.count / 128) * 100}%` }}
                        />
                      </div>
                      <span className="w-8 text-text-secondary">{r.count}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sample Reviews */}
              {[
                { name: 'Minh Anh', date: '15/01/2024', rating: 5, content: 'Sách rất hay, nội dung ý nghĩa. Giao hàng nhanh, bìa đẹp.' },
                { name: 'Hoàng Tú', date: '10/01/2024', rating: 4, content: 'Đọc xong rất thích, nhưng hơi ngắn. Mong tác giả viết thêm nhiều truyện như vậy.' },
                { name: 'Thu Hằng', date: '05/01/2024', rating: 4, content: 'Mua về tặng bạn bè dịp Tết. Ai cũng thích. Giá cả phải chăng.' },
              ].map((review, idx) => (
                <div key={idx} className="border-b border-border pb-4 last:border-0">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-primary/10 text-primary rounded-full flex items-center justify-center text-sm font-bold">
                        {review.name[0]}
                      </div>
                      <span className="font-medium text-sm">{review.name}</span>
                    </div>
                    <span className="text-xs text-text-muted">{review.date}</span>
                  </div>
                  <div className="flex mb-2">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} size={14} weight={s <= review.rating ? 'fill' : 'regular'} className={s <= review.rating ? 'text-yellow-400' : 'text-gray-300'} />
                    ))}
                  </div>
                  <p className="text-sm text-text-secondary">{review.content}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Related Books */}
      <section className="mb-8">
        <h2 className="text-xl font-bold text-text-primary mb-4">Sách liên quan</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {relatedBooks.map((book) => (
            <BookCard key={book.id} {...book} />
          ))}
        </div>
      </section>
    </div>
  )
}
