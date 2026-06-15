/**
 * Promosi Detail Page — Bengkel Wiguna
 * Single promo page with full details
 */

import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import { getPromosiBySlug, getAllPromosi } from '@/lib/wordpress'
import JsonLd from '@/components/layout/JsonLd'
import { generateBreadcrumbSchema } from '@/lib/seo'

export const revalidate = 3600

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const promo = await getPromosiBySlug(slug)

  if (!promo) {
    return {
      title: 'Promo Tidak Ditemukan | Bengkel Wiguna',
      description: 'Promo yang Anda cari tidak ditemukan.'
    }
  }

  const title = typeof promo.title === 'string' ? promo.title : promo.title?.rendered || ''
  // Strip HTML tags manually
  const excerptRaw = typeof promo.excerpt === 'string' ? promo.excerpt : promo.excerpt?.rendered || ''
  const excerptText = excerptRaw.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim()

  return {
    title: `${title} | Bengkel Wiguna`,
    description: excerptText || 'Promo spesial dari Bengkel Wiguna untuk perawatan kendaraan Anda.',
    openGraph: {
      title: title,
      description: excerptText || '',
      images: promo.featured_img ? [{ url: promo.featured_img }] : [],
    }
  }
}

export default async function PromosiDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const promo = await getPromosiBySlug(slug)

  if (!promo) {
    notFound()
  }

  const title = typeof promo.title === 'string' ? promo.title : promo.title?.rendered || ''
  const contentRaw = typeof promo.content === 'string' ? promo.content : promo.content?.rendered || ''
  const content = contentRaw
  // Use excerpt if available, otherwise use first 200 chars of content
  const excerptRaw = typeof promo.excerpt === 'string' ? promo.excerpt : promo.excerpt?.rendered || ''
  const excerptFallback = contentRaw.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim().slice(0, 200)
  const excerpt = excerptRaw || excerptFallback
  const featuredImage = promo.featured_img || '/images/promo-default.jpg'

  // Get related promos
  const allPromos = await getAllPromosi()
  const relatedPromos = Array.isArray(allPromos)
    ? allPromos.filter((p: any) => p.slug !== slug).slice(0, 3)
    : []

  return (
    <>
      <JsonLd data={generateBreadcrumbSchema([
        { name: 'Home', url: 'https://bengkelwiguna.com' },
        { name: 'Promosi', url: 'https://bengkelwiguna.com/promosi' },
        { name: title, url: `https://bengkelwiguna.com/promosi/${slug}` }
      ])} />

      {/* Hero Section with Featured Image */}
      <section className="relative w-full lg:min-h-[420px] min-h-[340px] overflow-hidden flex items-end">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={featuredImage}
            alt={title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />
        </div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 lg:pb-14">
          {/* Breadcrumb */}
          <nav className="flex items-center flex-wrap gap-1.5 mb-5 text-sm font-semibold" aria-label="Breadcrumb">
            <Link href="/" className="text-white/70 hover:text-[#ffd900] transition-colors">
              Home
            </Link>
            <span className="text-[#ffd900]">/</span>
            <Link href="/promosi" className="text-white/70 hover:text-[#ffd900] transition-colors">
              Promosi
            </Link>
            <span className="text-[#ffd900]">/</span>
            <span className="text-white font-bold truncate max-w-[220px]">{title}</span>
          </nav>

          {/* Badge */}
          <span className="inline-block bg-[#ffd900] text-[#224297] px-5 py-1.5 rounded-full text-xs font-black uppercase tracking-[0.2em] mb-4 shadow-lg">
            🔥 Promo Spesial
          </span>

          {/* Title */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-4 leading-[1.1] tracking-tight max-w-3xl">
            {title}
          </h1>

          {/* Excerpt */}
          {excerpt && (
            <p className="text-white/80 font-medium text-base md:text-lg max-w-2xl leading-relaxed">
              {excerpt}
            </p>
          )}
        </div>
      </section>

      {/* Main Content */}
      <div className="relative min-h-screen bg-[#fcfcfc] dark:bg-neutral-950 font-dm">
        {/* Background */}
        <div className="fixed inset-0 z-0">
          <Image src="/images/bg-default-page.webp" alt="" fill className="object-cover" />
          <div className="absolute inset-0 bg-[#fcfcfc]/85 dark:bg-neutral-950/90" />
        </div>

        <div className="relative z-10 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="bg-white dark:bg-gray-900 rounded-[2.5rem] p-8 lg:p-12 shadow-xl">
                {/* Featured Image */}
                <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden mb-8">
                  <Image
                    src={featuredImage}
                    alt={title}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

                {/* Content */}
                <div
                  className="prose prose-lg max-w-none dark:prose-invert
                    prose-headings:text-gray-900 dark:prose-headings:text-white
                    prose-p:text-gray-700 dark:prose-p:text-gray-300
                    prose-a:text-[#224297] dark:prose-a:text-[#ffd900]
                    prose-strong:text-gray-900 dark:prose-strong:text-white"
                  dangerouslySetInnerHTML={{ __html: content }}
                />

                {/* CTA Buttons */}
                <div className="mt-12 flex flex-col sm:flex-row gap-4">
                  <a
                    href={`https://wa.me/6287817773888?text=Halo%20Bengkel%20Wiguna,%20saya%20tertarik%20dengan%20promo%20${encodeURIComponent(title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#ffd900] hover:bg-yellow-400 text-[#224297] font-black text-lg shadow-lg transition-all"
                  >
                    <Icon icon="fa6-brands:whatsapp" className="w-6 h-6" />
                    Klaim Promo via WhatsApp
                  </a>
                  <Link
                    href="/promosi"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-900 dark:text-white font-bold text-lg transition-all"
                  >
                    <Icon icon="solar:arrow-left-linear" className="w-5 h-5" />
                    Lihat Promo Lainnya
                  </Link>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-8">
              {/* Promo Info Card */}
              <div className="bg-white dark:bg-gray-900 rounded-[2rem] p-6 shadow-xl">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Informasi Promo</h3>
                <div className="space-y-4">
                  {promo.harga_promo && (
                    <div className="flex items-center gap-3">
                      <Icon icon="solar:tag-price-linear" className="w-5 h-5 text-[#ffd900]" />
                      <div>
                        <span className="text-xs text-gray-500">Harga Promo</span>
                        <p className="text-xl font-black text-[#224297] dark:text-[#ffd900]">{promo.harga_promo}</p>
                      </div>
                    </div>
                  )}
                  {promo.harga_asli && (
                    <div className="flex items-center gap-3">
                      <Icon icon="solar:receipt-linear" className="w-5 h-5 text-gray-400" />
                      <div>
                        <span className="text-xs text-gray-500">Harga Normal</span>
                        <p className="text-lg font-bold text-gray-400 line-through">{promo.harga_asli}</p>
                      </div>
                    </div>
                  )}
                  {promo.diskon_persen && (
                    <div className="flex items-center gap-3">
                      <Icon icon="solar:sale-linear" className="w-5 h-5 text-green-500" />
                      <div>
                        <span className="text-xs text-gray-500">Diskon</span>
                        <p className="text-xl font-black text-green-600">{promo.diskon_persen}% OFF</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Related Promos */}
              {relatedPromos.length > 0 && (
                <div className="bg-white dark:bg-gray-900 rounded-[2rem] p-6 shadow-xl">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Promo Lainnya</h3>
                  <div className="space-y-4">
                    {relatedPromos.map((p: any) => {
                      const promoTitle = typeof p.title === 'string' ? p.title : p.title?.rendered || ''
                      return (
                        <Link
                          key={p.id}
                          href={`/promosi/${p.slug}`}
                          className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                        >
                          <div className="relative w-16 h-16 rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800 shrink-0">
                            {p.featured_img ? (
                              <Image src={p.featured_img} alt={promoTitle} fill className="object-cover" />
                            ) : (
                              <Icon icon="solar:image-linear" className="w-8 h-8 text-gray-400 absolute inset-0 m-auto" />
                            )}
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="text-sm font-bold text-gray-900 dark:text-white line-clamp-2">{promoTitle}</h4>
                            <p className="text-xs text-gray-500 mt-1">Lihat Detail →</p>
                          </div>
                        </Link>
                      )
                    })}
                  </div>
                </div>
              )}

              {/* Contact Card */}
              <div className="bg-gradient-to-br from-[#224297] to-[#0f1d45] rounded-[2rem] p-6 text-white shadow-xl">
                <h3 className="text-lg font-bold mb-2">Hubungi Kami</h3>
                <p className="text-white/80 text-sm mb-4">Klik untuk konsultasi gratis via WhatsApp</p>
                <a
                  href="https://wa.me/6287817773888"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#ffd900] hover:bg-yellow-400 text-[#224297] font-bold rounded-full transition-all"
                >
                  <Icon icon="fa6-brands:whatsapp" className="w-5 h-5" />
                  Chat Minna
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
