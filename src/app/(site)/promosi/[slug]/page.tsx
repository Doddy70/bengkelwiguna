/**
 * Promosi Detail Page — Bengkel Wiguna
 * Single promo page with full details
 */

import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import { getPromosiBySlug, getAllPromosi, parseFaqField } from '@/lib/wordpress'
import JsonLd from '@/components/layout/JsonLd'
import { generateBreadcrumbSchema, generateSpecialOfferSchema } from '@/lib/seo'
import PromosiTabs from '@/components/promosi/PromosiTabs'

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
  
  // Extract custom fields if available from WP plugin
  const faqData = parseFaqField((promo as any).faq || null)
  const syaratHtml = (promo as any).syarat_ketentuan || (promo as any).syarat || ''

  // Get related promos
  const allPromos = await getAllPromosi()
  const currentIndex = Array.isArray(allPromos) ? allPromos.findIndex((p: any) => p.slug === slug) : -1
  const prevPromo = currentIndex > 0 ? allPromos[currentIndex - 1] : null
  const nextPromo = currentIndex !== -1 && currentIndex < allPromos.length - 1 ? allPromos[currentIndex + 1] : null

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
      <JsonLd data={generateSpecialOfferSchema(promo)} />

      {/* Main Layout like Services */}
      <main 
        className="min-h-screen pb-24 bg-cover bg-no-repeat bg-top"
        style={{ backgroundImage: "url('/images/home-9-footer.webp')" }}
      >
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 lg:pt-8 lg:pt-12">
          
          {/* Header Section (Title & Breadcrumb) */}
          <div className="mb-8">
            <nav className="flex items-center flex-wrap gap-1.5 mb-5 text-sm font-semibold" aria-label="Breadcrumb">
              <Link href="/" className="text-gray-500 hover:text-[#224297] transition-colors">
                Home
              </Link>
              <span className="text-gray-400">/</span>
              <Link href="/promosi" className="text-gray-500 hover:text-[#224297] transition-colors">
                Promosi
              </Link>
              <span className="text-gray-400">/</span>
              <span className="text-[#224297] font-bold truncate max-w-[220px]">{title}</span>
            </nav>

            <span className="inline-block bg-[#ffd900] text-[#224297] px-5 py-1.5 rounded-full text-xs font-black uppercase tracking-[0.2em] mb-4 shadow-sm">
              🔥 Promo Spesial
            </span>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-gray-900 dark:text-white mb-4 leading-[1.1] tracking-tight max-w-4xl">
              {title}
            </h1>

            {excerpt && (
              <p className="text-gray-600 dark:text-gray-300 font-medium text-base md:text-lg max-w-2xl leading-relaxed">
                {excerpt}
              </p>
            )}
          </div>

          {/* Booking / Stats Bar (4 columns) */}
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800 p-4 mb-10 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex-1 border-b md:border-b-0 md:border-r border-gray-100 dark:border-gray-800 px-4 py-2 md:py-0 w-full md:w-auto">
              <p className="text-sm text-gray-500 font-medium mb-1">Lokasi</p>
              <div className="flex items-center gap-2">
                <Icon icon="solar:map-point-bold-duotone" className="text-[#224297] dark:text-[#ffd900] w-5 h-5"/>
                <span className="font-bold text-gray-900 dark:text-white">Bengkel Wiguna</span>
              </div>
            </div>
            
            <div className="flex-1 border-b md:border-b-0 md:border-r border-gray-100 dark:border-gray-800 px-4 py-2 md:py-0 w-full md:w-auto">
              <p className="text-sm text-gray-500 font-medium mb-1">Tanggal Berlaku</p>
              <div className="flex items-center gap-2">
                <Icon icon="solar:calendar-bold-duotone" className="text-[#224297] dark:text-[#ffd900] w-5 h-5"/>
                <span className="font-bold text-gray-900 dark:text-white line-clamp-1">
                  {promo.tanggal_selesai || 'Selama Promo'}
                </span>
              </div>
            </div>

            <div className="flex-1 border-b md:border-b-0 md:border-r border-gray-100 dark:border-gray-800 px-4 py-2 md:py-0 w-full md:w-auto">
              <p className="text-sm text-gray-500 font-medium mb-1">Jenis Promo</p>
              <div className="flex items-center gap-2">
                <Icon icon="solar:tag-price-bold-duotone" className="text-[#224297] dark:text-[#ffd900] w-5 h-5"/>
                <span className="font-bold text-gray-900 dark:text-white line-clamp-1">
                  {promo.jenis_promosi === 'bulanan' ? 'Promo Bulanan' : 'Promo Spesial'}
                </span>
              </div>
            </div>

            <div className="px-4 py-2 md:py-0 w-full md:w-auto shrink-0 flex justify-center md:justify-end">
              <a 
                href={`https://wa.me/6287817773888?text=Halo%20Bengkel%20Wiguna,%20saya%20ingin%20booking%20untuk%20promo%20${encodeURIComponent(title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#224297] hover:bg-blue-800 text-white w-full md:w-auto px-8 py-3.5 rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-md"
              >
                Booking Now
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 lg:gap-12">
            {/* Main Content - Mobile: first */}
            <div className="xl:col-span-2 order-1">
              <div className="bg-white dark:bg-gray-900 rounded-2xl sm:rounded-[2rem] p-6 sm:p-8 lg:p-12 shadow-xl">
                {/* Featured Image */}
                <div className="relative aspect-[16/9] w-full rounded-xl sm:rounded-2xl overflow-hidden mb-6 sm:mb-8 bg-gray-100">
                  {featuredImage && (
                    <Image
                      src={featuredImage}
                      alt={title}
                      fill
                      className="object-cover"
                      priority
                      sizes="(max-width: 640px) 100vw, (max-width: 1280px) 66vw, 800px"
                    />
                  )}
                </div>

                {/* Promo Additional Stats Grid (Harga/Diskon) */}
                <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
                  {promo.harga_promo && (
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-2xl flex flex-col items-center justify-center text-center">
                      <Icon icon="solar:tag-price-bold-duotone" className="w-8 h-8 text-[#224297] mb-2" />
                      <span className="text-xs text-gray-500 font-medium mb-1">Harga Promo</span>
                      <span className="text-lg font-black text-[#224297]">{promo.harga_promo}</span>
                      {promo.harga_asli && (
                        <span className="text-xs font-bold text-gray-400 line-through mt-1">{promo.harga_asli}</span>
                      )}
                    </div>
                  )}

                  {promo.diskon_persen && (
                    <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-2xl flex flex-col items-center justify-center text-center">
                      <Icon icon="solar:sale-bold-duotone" className="w-8 h-8 text-green-500 mb-2" />
                      <span className="text-xs text-gray-500 font-medium mb-1">Diskon</span>
                      <span className="text-lg font-black text-green-600">{promo.diskon_persen}% OFF</span>
                    </div>
                  )}
                </div>

                {/* Content Tabs */}
                <PromosiTabs
                  contentHtml={content}
                  syaratHtml={syaratHtml}
                  faq={faqData}
                  promoName={title}
                />

                {/* Next / Previous Promo */}
                {(prevPromo || nextPromo) && (
                  <div className="mt-12 pt-8 border-t border-gray-100 dark:border-gray-800 flex flex-col sm:flex-row justify-between gap-4">
                    {prevPromo ? (
                      <Link
                        href={`/promosi/${prevPromo.slug}`}
                        className="flex-1 flex items-center gap-4 p-4 rounded-2xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors border border-gray-100 dark:border-gray-800"
                      >
                        <div className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center shrink-0">
                          <Icon icon="solar:arrow-left-linear" className="w-5 h-5 text-gray-500" />
                        </div>
                        <div className="text-left">
                          <span className="text-xs text-gray-500 uppercase tracking-wider font-bold">Promo Sebelumnya</span>
                          <p className="text-sm font-bold text-gray-900 dark:text-white line-clamp-1">
                            {typeof prevPromo.title === 'string' ? prevPromo.title : prevPromo.title?.rendered || ''}
                          </p>
                        </div>
                      </Link>
                    ) : (
                      <div className="flex-1" />
                    )}

                    {nextPromo ? (
                      <Link
                        href={`/promosi/${nextPromo.slug}`}
                        className="flex-1 flex items-center justify-end gap-4 p-4 rounded-2xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors border border-gray-100 dark:border-gray-800 text-right"
                      >
                        <div className="text-right">
                          <span className="text-xs text-gray-500 uppercase tracking-wider font-bold">Promo Selanjutnya</span>
                          <p className="text-sm font-bold text-gray-900 dark:text-white line-clamp-1">
                            {typeof nextPromo.title === 'string' ? nextPromo.title : nextPromo.title?.rendered || ''}
                          </p>
                        </div>
                        <div className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center shrink-0">
                          <Icon icon="solar:arrow-right-linear" className="w-5 h-5 text-gray-500" />
                        </div>
                      </Link>
                    ) : (
                      <div className="flex-1" />
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* Sidebar - Mobile: below content */}
            <div className="xl:col-span-1 space-y-6 sm:space-y-8 order-2 xl:order-2 mb-8 xl:mb-0">
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
                <h3 className="text-lg font-bold mb-2">Butuh Bantuan?</h3>
                <p className="text-white/80 text-sm mb-4">Konsultasikan kebutuhan service mobil Anda secara gratis bersama tim ahli kami.</p>
                <a
                  href="https://wa.me/6287817773888"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-source="promosi-sidebar"
                  className="inline-flex items-center justify-center gap-2 w-full px-6 py-3.5 bg-[#ffd900] hover:bg-yellow-400 text-[#224297] font-black rounded-xl transition-all"
                >
                  <Icon icon="fa6-brands:whatsapp" className="w-5 h-5" />
                  Chat Sekarang
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
