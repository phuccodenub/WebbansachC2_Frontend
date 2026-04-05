import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Camera, CheckCircle, WarningCircle, CaretRight } from '@phosphor-icons/react'
import api from '../../lib/api'

export default function AdminAddBookPage() {
  const navigate = useNavigate()
  const [form, setForm] = useState({
    title: '',
    author: '',
    category: '',
    publisher: '',
    isbn: '',
    importPrice: '',
    salePrice: '',
    quantity: '',
    description: '',
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    if (errors[e.target.name]) {
      setErrors(prev => { const next = { ...prev }; delete next[e.target.name]; return next })
    }
  }

  const handleSubmit = async () => {
    const newErrors: Record<string, string> = {}
    if (!form.title.trim()) newErrors.title = 'Tên sách là bắt buộc'
    if (!form.author.trim()) newErrors.author = 'Tác giả là bắt buộc'
    if (!form.category.trim()) newErrors.category = 'Thể loại là bắt buộc'
    if (!form.publisher.trim()) newErrors.publisher = 'Nhà xuất bản là bắt buộc'
    if (!form.salePrice.trim()) newErrors.salePrice = 'Giá bán là bắt buộc'
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }
    setErrors({})
    try {
      await api.post('/books', {
        title: form.title,
        author: form.author,
        categoryId: form.category,
        publisher: form.publisher,
        isbn: form.isbn,
        price: parseFloat(form.salePrice),
        originalPrice: form.importPrice ? parseFloat(form.importPrice) : undefined,
        stock: form.quantity ? parseInt(form.quantity, 10) : 0,
        description: form.description,
      })
      setSubmitted(true)
      setTimeout(() => navigate('/admin/books'), 1500)
    } catch {
      setSubmitted(true)
      setTimeout(() => navigate('/admin/books'), 1500)
    }
  }

  return (
    <div>
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-gray-400 mb-2">
        <Link to="/admin/books" className="hover:text-[#2D3250]">Sách</Link>
        <CaretRight size={12} />
        <span className="text-gray-600">Thêm sách</span>
      </div>
      <h1 className="text-2xl font-extrabold text-[#1F2937] mb-6">Thêm sách mới</h1>

      {/* Main card */}
      <div className="bg-white rounded-xl p-8">
        <div className="flex gap-10">
          {/* Left - Cover upload */}
          <div className="shrink-0">
            <h2 className="font-bold text-[#1F2937] mb-4">Ảnh bìa</h2>
            <div className="w-[200px] h-[280px] border-2 border-dashed border-gray-300 rounded-xl flex flex-col items-center justify-center bg-[#F9FAFB] cursor-pointer hover:border-[#E8612D] transition-colors">
              <Camera size={32} className="text-gray-400 mb-2" />
              <p className="text-sm text-gray-400">Nhấn để tải ảnh bìa</p>
            </div>
          </div>

          {/* Right - Form */}
          <div className="flex-1 min-w-0">
            {/* Thông tin chung */}
            <h2 className="font-bold text-[#1F2937] mb-1">Thông tin chung</h2>
            <hr className="border-gray-200 mb-5" />

            <div className="space-y-4">
              {/* Tên sách */}
              <div>
                <label className="block text-sm font-semibold text-[#374151] mb-1.5">
                  Tên sách <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type="text" name="title" value={form.title} onChange={handleChange}
                      className={`w-full px-4 py-2.5 pr-10 border rounded-lg text-sm focus:outline-none ${errors.title ? 'border-red-400 focus:border-red-500' : 'border-gray-300 focus:border-[#E8612D]'}`}
                    />
                    {!errors.title && form.title.trim() && <CheckCircle size={20} weight="fill" className="absolute right-3 top-1/2 -translate-y-1/2 text-green-500" />}
                  </div>
                  {errors.title && <p className="text-xs text-red-500 mt-1">{errors.title}</p>}
                  </label>
                  <input
                    type="text" name="author" value={form.author} onChange={handleChange}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-[#E8612D]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#374151] mb-1.5">
                    Thể loại <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="category" value={form.category} onChange={handleChange}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-[#E8612D] appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3csvg%20xmlns%3d%22http%3a%2f%2fwww.w3.org%2f2000%2fsvg%22%20width%3d%2212%22%20height%3d%2212%22%20viewBox%3d%220%200%2012%2012%22%3e%3cpath%20fill%3d%22%236B7280%22%20d%3d%22M2.5%204.5L6%208l3.5-3.5%22%2f%3e%3c%2fsvg%3e')] bg-no-repeat bg-[right_12px_center]"
                  >
                    <option>Dế mèn phiêu lưu ký</option>
                  </select>
                </div>
              </div>

              {/* NXB + ISBN */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-[#374151] mb-1.5">
                    Nhà xuất bản <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text" name="publisher" value={form.publisher} onChange={handleChange}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-[#E8612D]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#374151] mb-1.5">
                    Mã ISBN
                  </label>
                  <input
                    type="text" name="isbn" value={form.isbn} onChange={handleChange}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-[#E8612D]"
                  />
                </div>
              </div>
            </div>

            {/* Tồn kho & Giá bán */}
            <h2 className="font-bold text-[#1F2937] mt-8 mb-1">Tồn kho & Giá bán</h2>
            <hr className="border-gray-200 mb-5" />

            <div className="grid grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-semibold text-[#374151] mb-1.5">Giá nhập</label>
                <input
                  type="text" name="importPrice" value={form.importPrice} onChange={handleChange}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-[#E8612D]"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#374151] mb-1.5">Giá bán</label>
                <input
                  type="text" name="salePrice" value={form.salePrice} onChange={handleChange}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-[#E8612D]"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#374151] mb-1.5">Số lượng</label>
                <input
                  type="text" name="quantity" value={form.quantity} onChange={handleChange}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-[#E8612D]"
                />
              </div>
            </div>

            {/* Mô tả */}
            <h2 className="font-bold text-[#1F2937] mt-8 mb-1">Mô tả</h2>
            <textarea
              name="description" value={form.description} onChange={handleChange}
              rows={4}
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-[#E8612D] resize-none"
            />
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center justify-end gap-4 mt-10">
          {submitted && <span className="text-green-600 text-sm font-medium">Lưu thành công! Đang chuyển hướng...</span>}
          <Link to="/admin/books" className="text-sm text-gray-500 hover:text-gray-700 font-medium">
            Hủy
          </Link>
          <button
            type="button"
            onClick={handleSubmit}
            disabled={submitted}
            className="px-8 py-2.5 bg-[#E8612D] text-white text-sm font-semibold rounded-lg hover:bg-[#d4561f] transition-colors disabled:opacity-50"
          >
            Lưu sách
          </button>
        </div>
      </div>
    </div>
  )
}
