import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

interface WishlistItem {
  id: number
  title: string
  author: string
  image: string
  price: number
}

const defaultItems: WishlistItem[] = [
  {
    id: 1,
    title: 'Noi troi bien dao - Co be dam may',
    author: 'Nha xuat ban Kim Dong',
    image: 'https://placehold.co/220x300/6286c5/ffffff?text=Co+be+dam+may',
    price: 54000,
  },
  {
    id: 2,
    title: 'Noi troi bien dao - Chiec den so',
    author: 'Nha xuat ban Kim Dong',
    image: 'https://placehold.co/220x300/6286c5/ffffff?text=Chiec+den+so',
    price: 54000,
  },
  {
    id: 3,
    title: 'Noi troi bien dao - Co be dam may',
    author: 'Nha xuat ban Kim Dong',
    image: 'https://placehold.co/220x300/6286c5/ffffff?text=Co+be+dam+may',
    price: 54000,
  },
  {
    id: 4,
    title: 'Noi duong long trung thuc',
    author: 'Nha xuat ban Kim Dong',
    image: 'https://placehold.co/220x300/f2bb4f/ffffff?text=Long+trung+thuc',
    price: 54000,
  },
]

export default function WishlistPage() {
  const [items, setItems] = useState<WishlistItem[]>(defaultItems)
  const { addToCart } = useCart()
  const formatPrice = (value: number) => `${value.toLocaleString('vi-VN')}₫`

  const removeFromWishlist = (id: number) => {
    setItems(prev => prev.filter(item => item.id !== id))
  }

  const handleBuyAll = () => {
    items.forEach(item => {
      addToCart({ id: item.id, title: item.title, price: item.price, quantity: 1, image: item.image, originalPrice: item.price })
    })
    setItems([])
  }

  return (
    <div className="mx-auto max-w-6xl bg-white">
      <section className="bg-[#ededed] px-8 py-12">
        <h1 className="mb-2 text-3xl font-semibold text-text-primary">Yeu thich</h1>
        <p className="text-xs text-text-secondary">
          <Link to="/" className="hover:text-primary">Trang chu</Link>
          <span className="mx-1">/</span>
          <span>Yeu thich</span>
        </p>
      </section>

      <section className="px-8 py-8">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-2xl font-medium text-text-primary">Danh muc yeu thich cua toi</h2>
          <button type="button" onClick={handleBuyAll} disabled={items.length === 0} className="rounded bg-[#e97777] px-4 py-1 text-xs font-semibold text-white disabled:opacity-50">
            Mua tat ca
          </button>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        {items.length === 0 ? (
          <p className="col-span-full text-center text-text-secondary py-8">Danh muc yeu thich cua ban dang trong.</p>
        ) : items.map((item) => (
          <article key={item.id} className="group relative">
            <button type="button" onClick={() => removeFromWishlist(item.id)} className="absolute right-1 top-1 z-10 text-red-500 hover:text-red-700">
              ♥
            </button>
            <Link to={`/product/${item.id}`}>
              <div className="mb-2 aspect-3/4 overflow-hidden rounded">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="line-clamp-2 text-[11px] text-text-primary">{item.title}</h3>
            </Link>
            <p className="mt-1 text-[10px] text-text-secondary">{item.author}</p>
            <p className="mt-1 text-[11px] font-semibold text-red-500">{formatPrice(item.price)}</p>
          </article>
        ))}
        </div>
      </section>

      <section className="grid grid-cols-1 items-center gap-8 px-8 pb-10 pt-2 md:grid-cols-2">
        <p className="max-w-md text-xs leading-relaxed text-text-secondary">
          MMT Bookstore la mot website ban sach truyen trinh xay dung cho
          cac nguoi co hoi hoc hoi cho ban, sinh vien va nguoi yeu sach.
          He thong san pham da dang, giao dien than thien va giup tim
          kiem, dat hang va theo doi don hang mot cach hieu qua.
        </p>
        <div className="justify-self-end">
          <img
            src="https://placehold.co/260x120/dbeafe/64748b?text=Map+Preview"
            alt="Map preview"
            className="rounded-lg"
          />
          <p className="mt-1 text-[10px] text-slate-400">Xem ban do</p>
        </div>
      </section>
    </div>
  )
}
