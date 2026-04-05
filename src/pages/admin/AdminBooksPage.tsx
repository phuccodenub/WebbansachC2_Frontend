import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { PencilSimple, Trash, CaretLeft, CaretRight } from '@phosphor-icons/react'
import api from '../../lib/api'

type BookStatus = 'in_stock' | 'low_stock' | 'out_of_stock'

const books = [
  {
    id: 1, cover: 'https://placehold.co/60x80/8B7355/fff?text=Gatsby',
    title: 'The Great Gatsby', genre: 'Fiction / Classic',
    author: 'F. Scott Fitzgerald', publisher: 'Scribner Publishers',
    price: 100000, stock: 45, status: 'in_stock' as BookStatus, featured: true,
  },
  {
    id: 2, cover: 'https://placehold.co/60x80/7B8B6F/fff?text=1984',
    title: '1984', genre: 'Dystopian / Sci-Fi',
    author: 'George Orwell', publisher: 'Secker & Warburg',
    price: 100000, stock: 8, status: 'low_stock' as BookStatus, featured: false,
  },
  {
    id: 3, cover: 'https://placehold.co/60x80/4A5568/fff?text=Hobbit',
    title: 'The Hobbit', genre: 'Fantasy / Adventure',
    author: 'J.R.R. Tolkien', publisher: 'Allen & Unwin',
    price: 100000, stock: 0, status: 'out_of_stock' as BookStatus, featured: true,
  },
]

const statusConfig: Record<BookStatus, { label: string; cls: string }> = {
  in_stock: { label: 'Còn hàng', cls: 'bg-green-50 text-green-600 border border-green-200' },
  low_stock: { label: 'Sắp hết hàng', cls: 'bg-orange-50 text-orange-600 border border-orange-200' },
  out_of_stock: { label: 'Hết hàng', cls: 'bg-red-50 text-red-500 border border-red-200' },
}

export default function AdminBooksPage() {
  const [bookList, setBookList] = useState(books)
  const [searchTerm, setSearchTerm] = useState('')
  const [filterGenre, setFilterGenre] = useState('all')
  const [filterStatus, setFilterStatus] = useState('all')
  const [featuredMap, setFeaturedMap] = useState<Record<number, boolean>>(
    Object.fromEntries(books.map(b => [b.id, b.featured]))
  )

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const res = await api.get('/books?limit=50')
        if (res.data.success && res.data.data?.length) {
          const mapped = res.data.data.map((b: { id: number; image?: string; title: string; category?: { name: string }; author: string; publisher?: string; price: number; stock: number; featured?: boolean }) => ({
            id: b.id,
            cover: b.image || 'https://placehold.co/60x80/8B7355/fff?text=Book',
            title: b.title,
            genre: b.category?.name || 'N/A',
            author: b.author,
            publisher: b.publisher || 'N/A',
            price: b.price,
            stock: b.stock,
            status: (b.stock === 0 ? 'out_of_stock' : b.stock <= 10 ? 'low_stock' : 'in_stock') as BookStatus,
            featured: b.featured || false,
          }))
          setBookList(mapped)
          setFeaturedMap(Object.fromEntries(mapped.map((b: { id: number; featured: boolean }) => [b.id, b.featured])))
        }
      } catch { /* keep defaults */ }
    }
    fetchBooks()
  }, [])

  const toggleFeatured = (id: number) =>
    setFeaturedMap(prev => ({ ...prev, [id]: !prev[id] }))

  const handleDelete = async (id: number) => {
    if (window.confirm('Bạn có chắc chắn muốn xóa sách này?')) {
      try {
        await api.delete(`/books/${id}`)
      } catch { /* still remove locally */ }
      setBookList(prev => prev.filter(b => b.id !== id))
    }
  }

  const filteredBooks = bookList.filter(b => {
    const matchSearch = b.title.toLowerCase().includes(searchTerm.toLowerCase()) || b.author.toLowerCase().includes(searchTerm.toLowerCase())
    const matchGenre = filterGenre === 'all' || b.genre.toLowerCase().includes(filterGenre.toLowerCase())
    const matchStatus = filterStatus === 'all' || b.status === filterStatus
    return matchSearch && matchGenre && matchStatus
  })

  const formatPrice = (v: number) => v.toLocaleString('vi-VN').replace(/\./g, ' ')

  return (
    <div>
      {/* Filter row */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 border border-gray-300 rounded-lg px-3 py-2 text-sm">
            <span className="text-gray-500">Thể loại:</span>
            <select value={filterGenre} onChange={e => setFilterGenre(e.target.value)} className="font-semibold bg-transparent focus:outline-none">
              <option value="all">Tất cả</option>
              <option value="fiction">Fiction</option>
              <option value="fantasy">Fantasy</option>
              <option value="dystopian">Dystopian</option>
            </select>
          </div>
          <div className="flex items-center gap-2 border border-gray-300 rounded-lg px-3 py-2 text-sm">
            <span className="text-gray-500">Trạng thái:</span>
            <select value={filterStatus} onChange={e => setFilterStatus(e.target.value)} className="font-semibold bg-transparent focus:outline-none">
              <option value="all">Tất cả</option>
              <option value="in_stock">Còn hàng</option>
              <option value="low_stock">Sắp hết</option>
              <option value="out_of_stock">Hết hàng</option>
            </select>
          </div>
          <input
            type="text" placeholder="Tìm kiếm sách..."
            value={searchTerm} onChange={e => setSearchTerm(e.target.value)}
            className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-primary"
          />
        </div>

        <Link
          to="/admin/books/add"
          className="px-5 py-2.5 border-2 border-[#2D3250] text-[#2D3250] text-sm font-semibold rounded-lg hover:bg-[#2D3250] hover:text-white transition-colors"
        >
          Thêm sách
        </Link>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-[#F8F9FC]">
                <th className="text-left px-5 py-3.5 text-xs font-bold text-[#6B7280] uppercase tracking-wider">Bìa sách</th>
                <th className="text-left px-5 py-3.5 text-xs font-bold text-[#6B7280] uppercase tracking-wider">Tên sách</th>
                <th className="text-left px-5 py-3.5 text-xs font-bold text-[#6B7280] uppercase tracking-wider">Tác giả/ NXB</th>
                <th className="text-center px-5 py-3.5 text-xs font-bold text-[#6B7280] uppercase tracking-wider">Giá bán</th>
                <th className="text-center px-5 py-3.5 text-xs font-bold text-[#6B7280] uppercase tracking-wider">Tồn kho</th>
                <th className="text-center px-5 py-3.5 text-xs font-bold text-[#6B7280] uppercase tracking-wider">Trạng thái</th>
                <th className="text-center px-5 py-3.5 text-xs font-bold text-[#6B7280] uppercase tracking-wider">Nổi bật</th>
                <th className="text-center px-5 py-3.5 text-xs font-bold text-[#6B7280] uppercase tracking-wider">Thao tác</th>
              </tr>
            </thead>
            <tbody>
              {filteredBooks.map((book) => {
                const st = statusConfig[book.status]
                return (
                  <tr key={book.id} className="border-b border-gray-100 last:border-0">
                    <td className="px-5 py-4">
                      <img src={book.cover} alt={book.title} className="w-[50px] h-[68px] object-cover rounded" />
                    </td>
                    <td className="px-5 py-4">
                      <p className="font-bold text-[#1F2937]">{book.title}</p>
                      <p className="text-xs text-[#9CA3AF] mt-0.5">{book.genre}</p>
                    </td>
                    <td className="px-5 py-4">
                      <p className="text-[#1F2937]">{book.author}</p>
                      <p className="text-xs text-[#9CA3AF] mt-0.5">{book.publisher}</p>
                    </td>
                    <td className="px-5 py-4 text-center font-semibold text-[#E8612D]">
                      {formatPrice(book.price)}
                    </td>
                    <td className="px-5 py-4 text-center">
                      <span className="text-[#1F2937]">{book.stock}</span>
                      <br />
                      <span className="text-xs text-[#9CA3AF]">Sản phẩm</span>
                    </td>
                    <td className="px-5 py-4 text-center">
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${st.cls}`}>
                        {st.label}
                      </span>
                    </td>
                    <td className="px-5 py-4 text-center">
                      <button
                        onClick={() => toggleFeatured(book.id)}
                        className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${
                          featuredMap[book.id]
                            ? 'bg-[#3B82F6] border-[#3B82F6] text-white'
                            : 'border-gray-300 bg-white'
                        }`}
                      >
                        {featuredMap[book.id] && (
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                            <path d="M2.5 6L5 8.5L9.5 3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        )}
                      </button>
                    </td>
                    <td className="px-5 py-4">
                      <div className="flex items-center justify-center gap-2">
                        <Link
                          to={`/admin/books/edit/${book.id}`}
                          className="text-gray-400 hover:text-[#E8612D] transition-colors"
                        >
                          <PencilSimple size={18} />
                        </Link>
                        <button onClick={() => handleDelete(book.id)} className="text-gray-400 hover:text-red-500 transition-colors">
                          <Trash size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="px-5 py-4 flex justify-end">
          <div className="flex items-center gap-1">
            <button className="w-8 h-8 flex items-center justify-center rounded-lg text-gray-400 hover:bg-gray-100">
              <CaretLeft size={16} />
            </button>
            {[1, 2, 3].map((p) => (
              <button
                key={p}
                className={`w-8 h-8 rounded-lg text-sm font-medium ${
                  p === 1
                    ? 'bg-[#E8612D] text-white'
                    : 'text-gray-500 hover:bg-gray-100'
                }`}
              >
                {p}
              </button>
            ))}
            <button className="w-8 h-8 flex items-center justify-center rounded-lg text-gray-400 hover:bg-gray-100">
              <CaretRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
