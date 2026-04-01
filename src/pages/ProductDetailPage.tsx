import { Link } from 'react-router-dom'

const userPhotos = [
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBB1lwDn7l45jrKhozzsMuWxRrDzVIynklVrNFB894YsCqirKI9hNsoRcI3nACpUPJvEBq3X3FFDBsNz582dsyIPm2rcxn-Vhugn9rIoY0bq2aR3_0Xzjdm8Hj7P5xunXXfeGsLbyunER7gn5npWRKsoVQbvD5ev9jWKAXyHtsiVmpGUOAODXmcX6vDCR87YtakXgQABj09y9Fz42KwvSBiDfyuG2qQ6JY6z7h5jtAJSzXEWul-CvC0Bn-A3PyWARLQVjIpKkTZGtI',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuA7Z0z_d-61MxsrfF0vXHFeAF4BhzXSpgkhtLDroOuanVNwUt3-JiBw14ae6I8SHiECG2vkaORm7fNG9amYsXzwJfYS6ivlylwNJEZDJsex_5lGJ8KwRNS6U0hsiPrD8LZ75IxfmlUzkP3GT_WspO74ftfqFz5KQgh8yzVM52Vuw9PXW8jW3LzlSz5J0vikl2fFa-q6tYlNop2mjtJDfikt9XpirPLiCABtsnYWRqBCD65BZCcVug4CX0wN2kVFIun522rhIu3IWds',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuAv2zKtq-5MsXtV8vY9BX19ZBYRxsoIkTuUrbauRfXR5fpr55YeBpH_EIEmcS1mtUnobB6jgXcsu5gNviFqhGKChTdsXB-fxjiFxZsPvL1A_GQsl6NB7CWi_rx_ZFnrwJIB9jGcMdWmLCoOklpaIj5CDK0J4hcWHAfEVO9YsT5qLHdwFSTud-rXyHPcsWwDy9DKv-1eWHJ848Chm2-WqlhM2zXcG4PXkKcz9QmKK6SnSkpAji1ipDrlthF_DbFo01f99M19F09Mpxk',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuB7dWenfcnlOLbhTpyJWbIp599v4iBNNtXeEULT54vjiRdsT_NW6kscK87SJ5cTzKpvxMOSJeAAeEhGRgDEyV2y5mO-fQ1JiUE9w2elb-oM_0OXPoK-zIcziS0x7muLpn4P1TTcZSfnqGlH6KrY5I9J4IbTdT8Z341IJjRHbiwYEUKhVAJ_0kmh2Qz0o0RGg33dlQwYpeG1G7YtesgcGKGh2sxBIo_dOH1iBXg6dB6EjQQmFlaM_jea3XppdmZPVf4hI6QiSa4HTtc',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDbYvA_Q1Q7Y9P08FoWEIzEhEjuzr1jXTF-cZXmSLoiYie862aq-pShofPX5rwY1p6D89bHyrGjdSkjT-klJA38Ho7GfpJBK5Nt06s0_Ma98gL8aoWzj8E7paOrX0phpdK4Z275DrgpSGG7QkxIwKiA1KsdgaF75UTxFwT3yA1fqu1q6oAgafinXxFetSS6V0ox1Kaof3VyBJwgrB-yoZwac6iXYbOSd2ZY47HaoYSp0Chblz2HLYr7hHr3vZbipnAs4sDU8rQaaLs',
]

const reviews = [
  {
    name: 'Minh Tran',
    avatar:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCck-Tnk58Aqp6tVOgSjg4v4WZSO2IUgCBo6rXbcJVjBGxmQHL4gNL3WI7qZOT0HifcWBfY9FgvSos-Yc_jqCV6bPMrU24zfex-L4QgmZu_mkMyPIBkAhKBoqlc5du6j0xIoa6O0huFe-qId6_gbU3WLRt81nKcWQnMcFygkNsBW30DbP3gHcS_Hh-LTCAFEuxuuauqAriTLkKRT5AFaq3zMP0BIcgCYVAxvKLHOgiT6zIgwk7hogQLZQV3D4P1-gC9LvZG_cKSLOo',
    rating: 5,
    date: 'October 24, 2023',
    title: 'A perfect gift for Tet!',
    content:
      "The illustrations are simply breathtaking. My daughter asks to read it every single night leading up to the holiday. It captures the warmth and excitement of Vietnamese New Year traditions so beautifully. The paper quality is also excellent for a children's book.",
    helpful: 42,
  },
  {
    name: 'Lan Nguyen',
    avatar:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBG1Mox3cDltqXPD6BVUyz9RDmFbURmaPO9VtScjmEugRrPmf23BQXPBOjEIqsML6WvXQCPWQTVgi5RJSub1H01K0s1iKAWk-UJbGPJyPwZ2DGZX9-3zjFmhtRtHQ77mc189Iwn9kcBMeBrB0hnacwV6JwGfV996RW_lii2WetWKq3SIQt6vhO3cDMzABL1Qjk1Gd18r_IUjmsuDXY6KR2zoD74M7-NScs2HwjmRJcKXZic44-5H70392EbTwnmrwturyJbfwKbFh0',
    rating: 4,
    date: 'September 12, 2023',
    title: 'Great cultural education',
    content:
      'As a Vietnamese family living abroad, this book is a treasure. It helps me explain the significance of Banh Chung and family reunions to my grandkids in a way that is engaging and fun. Highly recommend for any parents wanting to keep cultural roots alive.',
    helpful: 18,
  },
]

export default function ProductDetailPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 md:px-8">
      <nav className="mb-8 flex items-center gap-2 text-xs text-text-secondary">
        <Link to="/" className="hover:text-primary">Trang chủ</Link>
        <span>/</span>
        <Link to="/category" className="hover:text-primary">Sách tranh</Link>
        <span>/</span>
        <span className="font-medium text-text-primary">Đúng Là Tết!</span>
        <span>/</span>
        <span className="font-medium text-text-primary">Đánh giá</span>
      </nav>

      <section className="mb-12 flex flex-col items-start gap-10 lg:flex-row">
        <div className="w-full lg:w-1/3">
          <div className="mb-5 rounded-2xl bg-white p-2 shadow-sm">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB8wq4DM3i8PDw7U9Fd9LzZpwniA6tnRhEZSonYgAdkts1U9QklJBA7o2s9yHO6qCnro68rui4Z2CXSccEHbcd2TZJ3G9n6y85_hqFWUSmjRApJZau9LQ2WaIgwdHYOQtcDCCU4xnJbtE-Twxaahoktmb6jWpjPcqtxwxcib_rrrq2wTqdgCtRwo9H7PuTKXVcU-1pEj2wUPW2FaZKYXAXCirkRlA-M9PP-FxX93xeknob1kwZD48X2NoAx0Zh5kUDa4Dl8vFkxt6g"
              alt="Bìa sách Đúng Là Tết!"
              className="mx-auto h-80 w-64 rounded-xl object-cover"
            />
          </div>
          <h1 className="mb-2 text-3xl font-extrabold text-text-primary md:text-4xl">Đúng Là Tết!</h1>
          <p className="mb-5 text-lg text-text-secondary">by Bùi Phương Tâm</p>
          <button type="button" className="rounded-full bg-primary px-6 py-3 text-sm font-bold text-white hover:bg-primary-dark">
            Viết đánh giá
          </button>
        </div>

        <div className="grid w-full gap-8 rounded-3xl bg-white p-8 shadow-sm md:grid-cols-2 lg:w-2/3">
          <div>
            <div className="mb-2 flex items-end gap-2">
              <span className="text-6xl font-extrabold">4.8</span>
              <span className="pb-2 text-lg text-text-secondary">/ 5</span>
            </div>
            <p className="mb-4 text-yellow-500">★★★★☆</p>
            <p className="text-sm font-medium text-text-secondary">Based on 1,248 reviews</p>
          </div>
          <div className="space-y-3">
            {[
              ['5', '85%'],
              ['4', '10%'],
              ['3', '3%'],
              ['2', '1%'],
              ['1', '1%'],
            ].map(([star, percent]) => (
              <div key={star} className="flex items-center gap-3 text-sm">
                <span className="w-3 font-bold">{star}</span>
                <div className="h-3 flex-1 overflow-hidden rounded-full bg-bg-light">
                  <div className="h-full rounded-full bg-primary" style={{ width: percent }} />
                </div>
                <span className="w-10 text-text-secondary">{percent}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mb-14">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold">User Photos</h2>
          <button type="button" className="text-sm font-bold text-primary hover:underline">View All</button>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6">
          {userPhotos.map((photo, idx) => (
            <img key={photo} src={photo} alt={`User review ${idx + 1}`} className="aspect-square w-full rounded-xl object-cover shadow-sm" />
          ))}
          <button type="button" className="aspect-square rounded-xl bg-bg-light text-xs font-bold text-text-secondary hover:bg-border">
            Add Yours
          </button>
        </div>
      </section>

      <section className="mb-10 flex flex-col gap-4 border-b border-border pb-6 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-wrap gap-2">
          <button type="button" className="rounded-full bg-primary px-4 py-2 text-xs font-bold text-white">All Ratings</button>
          <button type="button" className="rounded-full bg-surface-container px-4 py-2 text-xs font-bold text-text-secondary">5 Stars</button>
          <button type="button" className="rounded-full bg-surface-container px-4 py-2 text-xs font-bold text-text-secondary">4 Stars</button>
          <button type="button" className="rounded-full bg-surface-container px-4 py-2 text-xs font-bold text-text-secondary">3 Stars</button>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-sm font-semibold text-text-secondary">Sort by:</span>
          <select className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-semibold">
            <option>Most Recent</option>
            <option>Most Helpful</option>
            <option>Highest Rated</option>
          </select>
        </div>
      </section>

      <section className="space-y-6">
        {reviews.map((review) => (
          <article key={review.name} className="rounded-3xl bg-white p-8 shadow-sm">
            <div className="flex flex-col gap-6 md:flex-row">
              <div className="w-full md:w-56 md:shrink-0">
                <div className="flex items-center gap-4 md:block">
                  <img src={review.avatar} alt={review.name} className="mb-2 h-14 w-14 rounded-full object-cover" />
                  <p className="font-bold">{review.name}</p>
                  <p className="text-xs font-semibold uppercase text-primary">Verified Buyer</p>
                </div>
              </div>
              <div className="flex-1">
                <div className="mb-4 flex items-start justify-between">
                  <p className="text-yellow-500">{'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}</p>
                  <span className="text-sm text-text-secondary">{review.date}</span>
                </div>
                <h3 className="mb-3 text-lg font-bold">{review.title}</h3>
                <p className="mb-6 leading-relaxed text-text-secondary">{review.content}</p>
                <div className="flex items-center gap-6 text-sm font-semibold text-text-secondary">
                  <button type="button" className="hover:text-primary">Helpful ({review.helpful})</button>
                  <button type="button" className="hover:text-accent">Report</button>
                </div>
              </div>
            </div>
          </article>
        ))}

        <div className="pt-4 text-center">
          <button type="button" className="rounded-full bg-surface-container px-10 py-3 font-bold text-text-secondary hover:bg-border">
            Load More Reviews
          </button>
        </div>
      </section>
    </div>
  )
}
