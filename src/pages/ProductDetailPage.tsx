import { useState } from 'react'
import { Link } from 'react-router-dom'

const imageList = [
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDUcWcdQjzDd36o4BNp2LUvijZdKaZFD8xoRNGH7K38XpFvRYgZx2YFvUul3g7umGizsai2O2liTXTyK6ismUdU-ik-I1jSq3wDwPyPFxspr2_BDs-3tNXT_uUcZEXrekGLnlYR7l12ULTTz_ox3d7Kn_zkJMcx-Gj8UOD6kxs58lRsNFMkWDlwi00xhn6MsMOQvw0YEDXtE4QT2Vr-1uieZKIMhEfz67y6O_CHhkklN5VFU4uybP7r5P6qrlZNeCsVl7vk8xsw8_c',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCvRdWXgj6y9yAes4eZvboKl8xtcsC6AnUJ2h7pIqg2PLgXS7eZZa-RDMYEaUzCLMA223dne1KZKi65LokM_RJRDX5dl_8Qs2uFLZrSyZanwfruFccYVGaqlWcF7-TZ05P7-YAOebNPeyNeThpXVSfA2uLH-z91S4P6xLnJwr3hxqpoSoUKHI4XtrmiHT4n5T0Wm8oJ7YtQMzF2xCCCiO4GuD2aG-8CMaXNCRV_moD-5atbDrF65BwSVRbCgtZGJVkyzulCPk_FEvk',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBjwn4pLW9K2HDjiMhdbccXQZC_dGVR9fUWZFIyLmvXBgYuKDRsM4owMPVnwoaKyYWhsZzpQhh8oZ9GXgUadyMiS1aCHiY6eK6yQbo9cNBbgI73Blc6lls6PgTqpg38uHJcQ0TddmYg7TpjGy4hiLOd823mBpcBzy9v0Yu-4EP2mxIGGmjprG9eNA1nOXSqwezPeCbeGc54o09-Sv2wVulY0juFDxxtfcq23uFmUpVqBVnZruyVFXI-3SihMDGMIXUjEgK3MYqNFMo',
]

const sameAuthorBooks = [
  { title: 'Mỗi ngày một câu chuyện', price: '55.000đ', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBeUSKPK1bzaVfFpEz4unjiM8DpxL1Xl6mz45KZJmMFAgcSH-tSwxbKRRXGNZARmzi0nAVAZm4CfYCX8huAf5FZla9iwbmTL3mNKD6dDNRUuyasPUDZKtODBXKf70j4-t_kr2WljYSuhGWzQCDoRLjKxbQxNU3S5NxhLxQZLbNmgEhU2Suv42lSpzTSIyOccue9gN9hiz27RdYqQTGeev1RN74Bj5X8EK_d3kEH9K1rZ0O-3D3AvHN9B167_GQpwTGFEHpE3oWSVzI' },
  { title: 'Chân đi không mỏi', price: '68.000đ', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAys0zaZlI74iAE_-BYKOtTmDEVcEc-RbeEW512K0vi3Ff7PvXR9Jlfh4i5nuaPwmEfhsOKHWwXwMtSf6614ZQy3L7RdTHQqGgFfznO7q4DaJtcj3XfmAPWdm1UlChgdxECXcNaICtRG4qBitmTQKGt63v1xVXzf6hWpv3Ow_s1hNG4ddMqfor-rgYjA83deBe5fjQ9csjGU5nnv163yC0t67vsiv9oTRpzyrMSw1ZWjYPdAn6UmrB5MD_2NJjihhTPGma-aCxANaU' },
  { title: 'Về nhà thôi', price: '45.000đ', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDrplzePCOW9QKRSvPzpF-5ZNNEqs5CYz8Mr5_qVLWluAiguFO439HBXPKgGNYFGxf1a9uIDkIkm5sLFieR-Z_xuCANPU6lxEktAaq_K406Vj1CIfoAv48ds4k-cFdpdCw0XocXDDjSO5cAOHY7HHIL9GoQDrf6cft7DZPVFSPl2i477vf_OFDdGl6GyMymtFV5xzADbbkAeMxnoGWVUmQke_2ZPueIq2jS8tlWJMNX07jm6a6hE_l-5TQucCCZai5xpha_mVC2n2Q' },
  { title: 'Kể chuyện đêm khuya', price: '59.000đ', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCVPqacWE_5_s88jHxpAzK_-AdDfg20sE6wsBWqI397wfztQHX3j-gBVHiEEwk3I5uOzS0tan9cDlE7mJqh0eoeaEYPB5o28oLg-4s2IFSWgpzpJOYL0t8j909rkEDMlPuhTERnmNEUUEQ4iHbLPzMfK8MJK19B51IjOWol1ylFc7Rc0dKUnHphk9NBQadhE5OTIrIFiyU0MJvPnPUH1u6iV5NX0bFLbmBWmdaVRV1RaCk42lDbOYmRA6muNjJuSPD59mryglbREXs' },
]

const similarBooks = [
  { title: 'Tết Trung Thu', author: 'Nhiều tác giả', price: '49.000đ', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDBaXaStc4_c8mJMYnO_SgtkLBGdrdFiXwki-AUYcpUIiGivjTpq-VHzz2N2bIQLtis9p-KhlTw__hYYBZdCOSUdM0-AFQIdBZTqgVJHBvllNtz4zb-lNYguxeXQq-imoczg1IIsH4Lz66tl4Q5mhuQvG16HkTnLN0MQwhtYACZv3c50AQkkH1rgkHRNec_gXYL66PIcQxzRg1Im35PZ8THwQEMmIPVitL0vMobDPrUmztAObCXXrQPSPdUUCKhs_tb2H7Sn0wIK0o' },
  { title: 'Sum họp ngày xuân', author: 'Hoàng Anh', price: '62.000đ', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAzrzCRl5aktPuxjNgWcWCHQSlv-IHvveRbwNMr6Eim-I5R-eSAlfuLeHt7_gW1UwO1IYUpwrVnDbY3WtftpQMH9krPRjStBEjz4gdETZzjzOyeof6JGLx1YxsTTtf9-m4WsCrC5PjqvSVVedKKxyhBbYwifujBHIvwOPEvVfk3erPuDwSg6SVTj1fJx0KvnyHVxgNKjhTq2OxhXc5aDnm56pWJT1jg0q_Il9S1FFwG2y0UU-7ZZ_FM2XDodKtoLSJl4BvhFHFUe3w' },
  { title: 'Hà Nội 36 phố phường', author: 'Kim Đồng', price: '120.000đ', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBGISJKAXumqQorMsiUci6WPwz184vvYAOP3MR0I2rsmxzID0bzp0BomkzxFkNzgnkk7QTMVCQBLwV3DSWyCuWUvBLerxhIHl-TAFAxj8wWeOXtHQj0XJr6qWZf4uZqZjVwxiGcRLKp0O3HhcYQTOR3-89IaO1xjcUcAmtxLtUSzaf9EApxKazgAwOD2fKoMEUjjfAtXIDruFLvZhvs3nfse0pliYjBbz4K-v2ONSkEk0Fibf_vVGsR8P5n07VstEjtrUFaz62rP-U' },
  { title: 'Tìm hiểu văn hóa Việt', author: 'NXB Trẻ', price: '85.000đ', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDYq1Q914NxZdX9ufZfHoN593AXwnZbamATN5J2PFd2WC0dW2bxnB2LWZtiukJ66e3H7RgW-8eR1tJoGYLsSwjwXtUj1c5CvAgO-sAr_QuZEdbLRhogXTdIDmm7xRQZrXxBcvjOgZfKyimBvjnT5UGoNFoCan7QqGG6Nhte-bXIJ3uAOz6S7XHq5bmVkRXy3BdHrptd8Rr8DRzMLSNITysDFYwo_DFNuUaT3F8LCQ0p7O_Lejr4jwWe-dYNB1G3gmZ2wE0RZNNwyX8' },
]

const reviews = [
  { initials: 'AN', name: 'An Nguyen', content: 'Sách rất đẹp, giấy dày và in màu rất sắc nét. Con mình rất thích đọc bài thơ này mỗi tối.' },
  { initials: 'MV', name: 'Minh Vu', content: 'Một cách tuyệt vời để dạy trẻ em về truyền thống ngày Tết. Hình minh họa cực kỳ đáng yêu.' },
  { initials: 'LT', name: 'Lan Tran', content: 'Giao hàng nhanh, đóng gói cẩn thận. Nội dung sách nhân văn và gần gũi.' },
]

function BookScrollerCard({
  title,
  price,
  image,
  author,
}: {
  title: string
  price: string
  image: string
  author?: string
}) {
  return (
    <div className="min-w-[200px] rounded-2xl border border-border bg-white p-4 shadow-sm transition-transform hover:-translate-y-1">
      <img src={image} alt={title} className="mb-4 w-full rounded-xl object-cover" />
      <h4 className="mb-1 truncate text-sm font-semibold text-text-primary">{title}</h4>
      {author ? <p className="mb-2 text-xs text-text-secondary">{author}</p> : null}
      <p className="font-bold text-price">{price}</p>
    </div>
  )
}

export default function ProductDetailPage() {
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0)

  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      <nav className="mb-8 flex items-center gap-2 text-xs text-text-secondary">
        <Link to="/" className="hover:text-primary">Trang chủ</Link>
        <span>/</span>
        <Link to="/category" className="hover:text-primary">Sách tranh</Link>
        <span>/</span>
        <span className="font-medium text-text-primary">Đúng Là Tết!</span>
      </nav>

      <section className="mb-16 grid grid-cols-1 gap-8 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="rounded-3xl border border-border bg-white p-6 shadow-sm md:p-8">
            <img
              src={imageList[selectedImage]}
              alt="Bìa sách Đúng Là Tết!"
              className="mx-auto w-full max-w-md rounded-lg object-cover"
            />
          </div>
          <div className="mt-4 flex gap-3">
            {imageList.map((image, idx) => (
              <button
                key={image}
                type="button"
                onClick={() => setSelectedImage(idx)}
                className={`h-20 w-20 rounded-lg border-2 p-1 ${
                  selectedImage === idx ? 'border-primary' : 'border-border'
                }`}
              >
                <img src={image} alt={`Ảnh sách ${idx + 1}`} className="h-full w-full rounded-md object-cover" />
              </button>
            ))}
          </div>
        </div>

        <div className="lg:col-span-7">
          <span className="mb-4 inline-block rounded-full bg-orange-100 px-3 py-1 text-xs font-bold uppercase text-orange-700">Limited Edition</span>
          <h1 className="mb-3 text-4xl font-bold text-text-primary md:text-5xl">Đúng Là Tết!</h1>
          <div className="mb-6 flex flex-wrap items-center gap-3 text-sm text-text-secondary">
            <span className="text-yellow-500">★★★★☆</span>
            <span>(128 đánh giá)</span>
            <span>|</span>
            <span>Tác giả: <strong className="text-primary">Bùi Phương Tâm, Mai Ngô</strong></span>
          </div>

          <div className="mb-8 rounded-3xl border border-border bg-white p-6 shadow-sm">
            <div className="mb-6 flex items-baseline gap-3">
              <span className="text-4xl font-bold text-price">61.200đ</span>
              <span className="text-xl text-price-old line-through">72.000đ</span>
              <span className="rounded bg-red-100 px-2 py-1 text-xs font-bold text-red-600">-15%</span>
            </div>

            <div className="mb-6 flex flex-wrap items-center gap-4">
              <div className="flex items-center rounded-full border border-border">
                <button
                  type="button"
                  className="h-10 w-10 text-lg hover:text-primary"
                  onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
                >
                  -
                </button>
                <span className="w-10 text-center font-semibold">{quantity}</span>
                <button
                  type="button"
                  className="h-10 w-10 text-lg hover:text-primary"
                  onClick={() => setQuantity((prev) => prev + 1)}
                >
                  +
                </button>
              </div>

              <button type="button" className="rounded-full bg-primary px-6 py-3 text-sm font-bold text-white hover:bg-primary-dark">
                Thêm vào giỏ hàng
              </button>
              <button type="button" className="rounded-full bg-accent px-6 py-3 text-sm font-bold text-white hover:bg-red-700">
                Mua ngay
              </button>
            </div>

            <div className="grid grid-cols-2 gap-3 border-t border-border pt-4 text-sm">
              <div>
                <p className="font-semibold">Miễn phí giao hàng</p>
                <p className="text-xs text-text-secondary">Đơn từ 300k</p>
              </div>
              <div>
                <p className="font-semibold">Cam kết chính hãng</p>
                <p className="text-xs text-text-secondary">Từ nhà xuất bản</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
            {[
              ['ISBN', '9786042145325'],
              ['Nhà xuất bản', 'Kim Đồng'],
              ['Định dạng', 'Bìa cứng'],
              ['Số trang', '40 trang'],
            ].map(([label, value]) => (
              <div key={label} className="rounded-xl border border-border bg-white p-4">
                <p className="mb-1 text-[10px] uppercase text-text-secondary">{label}</p>
                <p className="text-sm font-semibold">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="mb-4 text-2xl font-bold text-text-primary">Giới thiệu sách</h2>
        <div className="rounded-2xl border border-border bg-white p-6 text-text-secondary shadow-sm">
          <p className="mb-3">
            "Đúng Là Tết!" là một bài thơ ngọt ngào về ngày Tết cổ truyền của dân tộc. Cuốn sách tranh rực rỡ sắc màu,
            dẫn dắt các bé đi sâu vào không khí nhộn nhịp của những ngày cuối năm.
          </p>
          <p>
            Với vần điệu dễ nhớ, hình ảnh sinh động, đây không chỉ là một cuốn sách đọc mà còn là hành trình văn hóa
            nhiều ý nghĩa dành cho trẻ nhỏ.
          </p>
        </div>
      </section>

      <section className="mb-16">
        <div className="mb-6 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-bold text-text-primary">Đánh giá cộng đồng</h2>
            <p className="text-sm text-text-secondary">Cảm nhận từ độc giả về cuốn sách</p>
          </div>
          <button type="button" className="text-sm font-semibold text-primary hover:underline">Viết đánh giá</button>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {reviews.map((review) => (
            <article key={review.name} className="rounded-2xl border border-border bg-white p-5 shadow-sm">
              <div className="mb-3 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 font-bold text-primary">
                  {review.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold">{review.name}</p>
                  <p className="text-xs text-text-secondary">Đã mua hàng</p>
                </div>
              </div>
              <p className="mb-2 text-yellow-500">★★★★★</p>
              <p className="text-sm italic text-text-secondary">"{review.content}"</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="mb-6 text-2xl font-bold text-text-primary">Thêm từ Bùi Phương Tâm</h2>
        <div className="flex gap-4 overflow-x-auto pb-2">
          {sameAuthorBooks.map((book) => (
            <BookScrollerCard key={book.title} {...book} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="mb-6 text-2xl font-bold text-text-primary">Bạn có thể thích</h2>
        <div className="flex gap-4 overflow-x-auto pb-2">
          {similarBooks.map((book) => (
            <BookScrollerCard key={book.title} {...book} />
          ))}
        </div>
      </section>
    </div>
  )
}
