import { Link } from 'react-router-dom'

const wishlistItems = [
  {
    id: 1,
    title: 'The Alchemy of Stillness',
    author: 'Elena Rostova',
    badge: 'Limited Edition',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCrco1C-0ygX1IyyWSCgInzljqLbXYKKj6_j870p_TKWBVuqYqsOd0BnwDErQ2BcNmrix7Qg_WOo3HfrApEb6tzdRT83RvhIZmzA-7zCwYehIDvqHFHF6rN84YfS29sBTzM2mW-Vbmv2cjVTLeA0f0JYe8Y0bQ_9hAlpVFEtKLcFYoBUo7zuaL4oND93xX-RWFP81NwF_zvqAcd24bKCeRKaknJb_ISOlkMMk1TTPl92w6q-RFCXWdLw_UtTGK9YqbgZiFZuQ3ednk',
    price: 450000,
    badgeClass: 'bg-tertiary-container text-on-tertiary-container',
  },
  {
    id: 2,
    title: 'Modern Monoliths',
    author: 'Julian Vane',
    badge: 'New Arrival',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBGKq5IeOly5oa9b5k6sbgEG1_zF3_waD2WCiZ-0K6Ji_a108X3vAZawkbzDRdefeA47mYKp-Z9QqkamPCT9YiD_u_vROJfTR-ngTqTIc8eY2vY7LFPdwv8zvaugpSNnHe7ZQ8o3iPjIKtSHYvY34ITcpmb3fMUSFxp-nE1Ra5DSbA4ZUApprnaFqhdpeqSKaHUT07S8IDTMT3LHCy9d3hqT-9Xv7JGq-fAPOAZ3v1K1JT6SFG4fq9ReYYbru3rufavj-GLpfyRLKo',
    price: 820000,
    badgeClass: 'bg-primary-container text-on-primary-container',
  },
  {
    id: 3,
    title: 'Echoes of the Silk Road',
    author: 'Dr. Aris Thorne',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuASzub3v-DkpLrbsLtYpkQ0gOau_D-iP0CB8YP4HMVA8XO3Xz75sBrDmWc40LcRBVhKPGmPrfCPqBgOcgC_4pSbL-NCgXcBYkY4bV7PHCNoTX5V5BQHWQkI6eJXEBqCOaMZaWu6vI_NteAELD-VPc3bgPxGVLFRvY69aJlIrPJz_XDNVZYPWFQqiR7MBQRgrNa5UuW3czCsIocbiYIRnEzS2K38RuThDR_Kxsd7HHZ5ZoU-cEBVIna_IJidqrOjWdt5OurPwAa5V-U',
    price: 560000,
  },
]

export default function WishlistPage() {
  const formatPrice = (value: number) => `${value.toLocaleString('vi-VN')}₫`

  return (
    <div className="mx-auto max-w-7xl px-6 pb-20 pt-10">
      <header className="mb-12">
        <h1 className="mb-3 font-headline text-4xl font-extrabold tracking-tight text-on-surface md:text-5xl">
          Danh Muc Yeu Thich Cua Ban
        </h1>
        <p className="max-w-2xl text-on-surface-variant md:text-lg">
          A personal archive of stories and wisdom curated by you. These are the narratives waiting to be explored.
        </p>
        <p className="mt-4 text-sm text-text-secondary">
          <Link to="/" className="font-medium hover:text-primary">Trang chu</Link>
          <span className="mx-1">/</span>
          <span>Wishlist</span>
        </p>
      </header>

      <section className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {wishlistItems.map((item) => (
          <article
            key={item.id}
            className="group relative flex h-full flex-col rounded-xl bg-surface-container-lowest p-6 transition-all duration-300 hover:shadow-[0_24px_48px_rgba(0,0,0,0.06)]"
          >
            <div className="relative mb-6 aspect-3/4 overflow-hidden rounded-lg">
              <Link to={`/product/${item.id}`}>
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </Link>
              {item.badge ? (
                <div className="absolute left-4 top-4">
                  <span className={`rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-widest ${item.badgeClass ?? 'bg-surface-container text-text-primary'}`}>
                    {item.badge}
                  </span>
                </div>
              ) : null}
            </div>

            <div className="grow">
              <Link to={`/product/${item.id}`} className="font-headline text-xl font-bold transition-colors group-hover:text-primary">
                {item.title}
              </Link>
              <p className="mb-4 mt-1 text-sm italic text-on-secondary-container">by {item.author}</p>
              <p className="text-lg font-bold text-primary">{formatPrice(item.price)}</p>
            </div>

            <div className="mt-6 flex gap-3">
              <button type="button" className="flex-1 rounded-full bg-linear-to-br from-primary to-primary-container px-4 py-3 text-sm font-bold text-on-primary active:scale-95">
                Them vao gio
              </button>
              <button type="button" className="rounded-full p-3 text-error transition-colors hover:bg-error-container/20" title="Go bo">
                <span aria-hidden>🗑</span>
              </button>
            </div>
          </article>
        ))}
      </section>

      <section className="relative mt-20 overflow-hidden rounded-3xl bg-surface-container-low p-10 text-center md:p-12">
        <div className="relative z-10">
          <h2 className="mb-3 font-headline text-3xl font-bold">Want more inspiration?</h2>
          <p className="mx-auto mb-8 max-w-md text-on-surface-variant">
            Explore our monthly editorial picks and discover your next favorite masterpiece.
          </p>
          <button type="button" className="inline-flex items-center gap-2 rounded-full bg-secondary px-8 py-4 font-bold text-on-secondary">
            Kham pha thu vien
            <span aria-hidden>→</span>
          </button>
        </div>
      </section>
    </div>
  )
}
