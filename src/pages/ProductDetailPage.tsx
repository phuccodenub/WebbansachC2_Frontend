import { useState } from 'react'
import { Link } from 'react-router-dom'
import BookCard from '../components/BookCard'

const authorBooks = [
  { id: 11, title: 'Con meo day hai au', image: 'https://placehold.co/220x300/e2e8f0/475569?text=Con+Meo', price: 62000 },
  { id: 12, title: 'Ban than cua be', image: 'https://placehold.co/220x300/e2e8f0/475569?text=Ban+Than', price: 58000 },
  { id: 13, title: 'Ve voi mua xuan', image: 'https://placehold.co/220x300/e2e8f0/475569?text=Mua+Xuan', price: 64000 },
  { id: 14, title: 'Khuc hat be ngoan', image: 'https://placehold.co/220x300/e2e8f0/475569?text=Khuc+Hat', price: 59000 },
]

const relatedBooks = [
  { id: 21, title: 'Co be doi dam may', image: 'https://placehold.co/260x340/e2e8f0/475569?text=Co+Be+Doi+Dam+May', price: 54000, originalPrice: 68000, discount: 20 },
  { id: 22, title: 'Nuoi duong long trung thuc', image: 'https://placehold.co/260x340/e2e8f0/475569?text=Long+Trung+Thuc', price: 48000, originalPrice: 60000, discount: 20 },
  { id: 23, title: 'Hanh trinh mau nhiem', image: 'https://placehold.co/260x340/e2e8f0/475569?text=Hanh+Trinh', price: 52000, originalPrice: 65000, discount: 20 },
  { id: 24, title: 'Giai dieu tuoi tho', image: 'https://placehold.co/260x340/e2e8f0/475569?text=Giai+Dieu', price: 46000, originalPrice: 58000, discount: 21 },
  { id: 25, title: 'Nhung ngay nang dep', image: 'https://placehold.co/260x340/e2e8f0/475569?text=Nang+Dep', price: 51000, originalPrice: 63000, discount: 19 },
]

const detailRows = [
  ['Ma hang', 'PVN180010782'],
  ['Tac gia', 'Bui Phuong Tam'],
  ['NCC', 'Nha sach Kim Dong'],
  ['Nha xuat ban', 'Kim Dong'],
  ['Nam xuat ban', '2025'],
  ['Trong luong', '255 gr'],
  ['Kich thuoc bao bi', '20.5 x 20.5 x 0.8 cm'],
  ['So trang', '40'],
]

export default function ProductDetailPage() {
  const [quantity, setQuantity] = useState(1)
  const [tab, setTab] = useState<'detail' | 'review'>('detail')

  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      <nav className="mb-6 text-sm text-text-secondary">
        <Link to="/" className="hover:text-primary">Trang chu</Link>
        <span className="mx-2">/</span>
        <Link to="/category" className="hover:text-primary">Sach thieu nhi</Link>
        <span className="mx-2">/</span>
        <span className="font-medium text-text-primary">Dung La Tet!</span>
      </nav>

      <section className="mb-10 grid grid-cols-1 gap-6 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-[120px_1fr]">
            <div className="order-2 flex gap-3 md:order-1 md:flex-col">
              {[1, 2, 3].map((idx) => (
                <button key={idx} type="button" className="h-24 w-20 overflow-hidden rounded border border-border bg-white">
                  <img src="https://placehold.co/120x160/e2e8f0/475569?text=Tet" alt={`thumb-${idx}`} className="h-full w-full object-cover" />
                </button>
              ))}
            </div>
            <div className="order-1 md:order-2">
              <div className="rounded border border-border bg-white p-4">
                <img
                  src="https://placehold.co/420x520/e2e8f0/475569?text=Dung+La+Tet"
                  alt="Dung La Tet"
                  className="mx-auto w-full max-w-sm object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5">
          <h1 className="mb-2 text-3xl font-bold text-text-primary">Dung La Tet!</h1>
          <div className="mb-3 border-b border-border pb-3">
            <p className="text-3xl font-bold text-price">61,200d</p>
            <p className="text-sm text-text-secondary">(Gia da bao gom thue: 72,000d)</p>
          </div>

          <div className="mb-4 space-y-1 text-sm text-text-secondary">
            <p>Nha xuat ban: Kim Dong</p>
            <p>Tac gia: Bui Phuong Tam</p>
            <p>The loai: Sach tranh - tet</p>
            <p>Tinh trang: Con hang</p>
          </div>

          <div className="mb-5 flex items-center gap-3">
            <span className="text-sm font-semibold">SL:</span>
            <button type="button" className="h-8 w-8 rounded border border-border" onClick={() => setQuantity((v) => Math.max(1, v - 1))}>-</button>
            <span className="w-8 text-center font-semibold">{quantity}</span>
            <button type="button" className="h-8 w-8 rounded border border-border" onClick={() => setQuantity((v) => v + 1)}>+</button>
          </div>

          <div className="space-y-2">
            <button type="button" className="w-full rounded bg-primary py-2.5 text-sm font-bold text-white">THEM VAO GIO HANG</button>
            <button type="button" className="w-full rounded bg-surface-container py-2.5 text-sm font-bold text-text-primary">MUA NGAY</button>
          </div>
        </div>
      </section>

      <section className="mb-12 grid grid-cols-1 gap-6 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <div className="overflow-hidden rounded border border-border bg-white">
            <div className="flex border-b border-border text-sm font-semibold">
              <button type="button" className={`px-4 py-2 ${tab === 'detail' ? 'bg-surface-container text-primary' : 'text-text-secondary'}`} onClick={() => setTab('detail')}>
                Thong tin chi tiet
              </button>
              <button type="button" className={`px-4 py-2 ${tab === 'review' ? 'bg-surface-container text-primary' : 'text-text-secondary'}`} onClick={() => setTab('review')}>
                Binh luan
              </button>
            </div>
            <div className="p-4 text-sm text-text-secondary">
              {tab === 'detail' ? (
                <div className="space-y-1">
                  {detailRows.map(([k, v]) => (
                    <p key={k}>
                      <span className="font-semibold text-text-primary">{k}: </span>
                      {v}
                    </p>
                  ))}
                  <p className="pt-2 leading-relaxed">
                    Dung La Tet! la mot tap sach tranh vui nhon va am ap, giup cac be hieu hon ve van hoa Tet truyen thong.
                    Noi dung gan gui, minh hoa dep, phu hop de doc cung gia dinh.
                  </p>
                </div>
              ) : (
                <p>Chua co binh luan nao cho san pham nay.</p>
              )}
            </div>
          </div>
        </div>

        <aside className="lg:col-span-4">
          <div className="rounded border border-border bg-white p-4">
            <h3 className="mb-4 text-center text-sm font-bold uppercase tracking-wide text-text-primary">Sach cung tac gia</h3>
            <div className="space-y-3">
              {authorBooks.map((book) => (
                <Link key={book.id} to={`/product/${book.id}`} className="flex gap-3 border-b border-border pb-3 last:border-0">
                  <img src={book.image} alt={book.title} className="h-16 w-12 rounded object-cover" />
                  <div>
                    <p className="line-clamp-2 text-xs font-medium text-text-primary">{book.title}</p>
                    <p className="mt-1 text-xs font-bold text-price">{book.price.toLocaleString('vi-VN')}d</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </aside>
      </section>

      <section className="mb-10">
        <h2 className="mb-4 text-center text-sm font-bold uppercase tracking-wider text-text-primary">Sach cung the loai</h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {relatedBooks.map((book) => (
            <BookCard key={book.id} {...book} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-center text-sm font-bold uppercase tracking-wider text-text-primary">San pham da xem</h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {relatedBooks.map((book) => (
            <BookCard key={`seen-${book.id}`} {...book} />
          ))}
        </div>
      </section>
    </div>
  )
}
