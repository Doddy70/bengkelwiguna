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
import BookingModalButton from '@/components/promosi/BookingModalButton'

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

  // Extract custom fields from WP plugin
  // BW API returns FAQ in meta.bw_promosi_faq (JSON string), not top-level faq
  const meta = (promo as any).meta || {};
  const faqRaw = meta.bw_promosi_faq || (promo as any).faq || null;
  const faqData = parseFaqField(faqRaw);
  // BW API returns syarat_ketentuan in meta object
  const syaratHtml = meta.syarat_ketentuan || (promo as any).syarat_ketentuan || '';

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
        className="min-h-screen pb-24"
      >
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 lg:pt-8 lg:pt-12">
          
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
          <div className="bg-white dark:bg-gray-900 dark:bg-gray-900 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800 dark:border-gray-800 p-4 mb-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-0 lg:divide-x divide-gray-100 dark:divide-gray-800">
              <div className="flex items-center gap-3 sm:justify-center lg:justify-start lg:px-4 py-2 lg:py-0">
                <Icon icon="solar:map-point-bold-duotone" className="text-[#224297] dark:text-[#ffd900] w-5 h-5 shrink-0"/>
                <div className="min-w-0">
                  <p className="text-xs text-gray-500 font-medium">Lokasi</p>
                  <p className="text-sm font-bold text-gray-900 dark:text-white truncate">Bengkel Wiguna</p>
                </div>
              </div>

              <div className="flex items-center gap-3 sm:justify-center lg:justify-start lg:px-4 py-2 lg:py-0">
                <Icon icon="solar:calendar-bold-duotone" className="text-[#224297] dark:text-[#ffd900] w-5 h-5 shrink-0"/>
                <div className="min-w-0">
                  <p className="text-xs text-gray-500 font-medium">Tanggal Berlaku</p>
                  <p className="text-sm font-bold text-gray-900 dark:text-white truncate">
                    {promo.tanggal_selesai || 'Selama Promo'}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 sm:justify-center lg:justify-start lg:px-4 py-2 lg:py-0">
                <Icon icon="solar:tag-price-bold-duotone" className="text-[#224297] dark:text-[#ffd900] w-5 h-5 shrink-0"/>
                <div className="min-w-0">
                  <p className="text-xs text-gray-500 font-medium">Jenis Promo</p>
                  <p className="text-sm font-bold text-gray-900 dark:text-white truncate">
                    {promo.jenis_promosi === 'bulanan' ? 'Promo Bulanan' : 'Promo Spesial'}
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-center lg:justify-end lg:px-4 py-2 lg:py-0">
                <BookingModalButton
                  promoName={title}
                  cf7FormId={promo.cf7_form_id}
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 lg:gap-12">
            {/* Main Content - Mobile: first */}
            <div className="xl:col-span-2 order-1">
              <div className="bg-white dark:bg-gray-900 dark:bg-gray-900 rounded-2xl sm:rounded-[2rem] p-6 sm:p-8 lg:p-12 shadow-xl">
                {/* Featured Image */}
                <a 
                  href={featuredImage} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  title="Klik untuk memperbesar gambar"
                  className="block relative w-full rounded-xl sm:rounded-2xl overflow-hidden mb-6 sm:mb-8 bg-gray-100 cursor-zoom-in group"
                >
                  {featuredImage && (
                    <img
                      src={featuredImage}
                      alt={title}
                      className="w-full h-auto block transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                  )}
                </a>

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
                  cf7FormId={promo.cf7_form_id || "1cc9aa1"}
                />

                {/* Next / Previous Promo */}
                {(prevPromo || nextPromo) && (
                  <div className="mt-12 pt-8 border-t border-gray-100 dark:border-gray-800 dark:border-gray-800 flex flex-col sm:flex-row justify-between gap-4">
                    {prevPromo ? (
                      <Link
                        href={`/promosi/${prevPromo.slug}`}
                        className="flex-1 flex items-center gap-4 p-4 rounded-2xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors border border-gray-100 dark:border-gray-800 dark:border-gray-800"
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
                        className="flex-1 flex items-center justify-end gap-4 p-4 rounded-2xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors border border-gray-100 dark:border-gray-800 dark:border-gray-800 text-right"
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
              {/* Ringkasan Paket (Tailwind UI: narrow_with_hidden_labels) */}
              <div className="bg-white dark:bg-gray-900 dark:bg-gray-900 rounded-[2rem] shadow-xl border border-gray-100 dark:border-gray-800 dark:border-gray-800 overflow-hidden">
                <h2 className="sr-only">Ringkasan Paket</h2>
                <div className="bg-gray-50 dark:bg-gray-800/50">
                  <dl className="flex flex-wrap">
                    <div className="flex-auto pt-6 pl-6">
                      <dt className="text-sm font-semibold text-gray-500 dark:text-gray-400">Harga Paket</dt>
                      <dd className="mt-1 text-xl lg:text-2xl font-black text-[#224297] dark:text-[#ffd900]">
                        {promo.harga_promo || 'Hubungi Kami'}
                        {promo.harga_asli && (
                          <span className="block text-sm font-medium text-gray-400 line-through mt-0.5">{promo.harga_asli}</span>
                        )}
                      </dd>
                    </div>
                    {promo.diskon_persen && (
                      <div className="flex-none self-start px-6 pt-6">
                        <dt className="sr-only">Diskon</dt>
                        <dd className="inline-flex items-center rounded-lg bg-green-50 dark:bg-green-500/10 px-3 py-1.5 text-sm font-bold text-green-700 dark:text-green-400 border border-green-200 dark:border-green-500/20">
                          {promo.diskon_persen}% OFF
                        </dd>
                      </div>
                    )}
                    
                    <div className="mt-6 flex w-full flex-none gap-x-4 border-t border-gray-200 dark:border-gray-700 px-6 pt-6">
                      <dt className="flex-none">
                        <span className="sr-only">Tanggal Berlaku</span>
                        <Icon icon="solar:calendar-bold-duotone" className="h-6 w-6 text-gray-400" />
                      </dt>
                      <dd className="text-sm font-medium text-gray-900 dark:text-gray-300">
                        <span className="block text-xs text-gray-500 dark:text-gray-400 mb-0.5">Berlaku Hingga</span>
                        {promo.tanggal_selesai || 'Selama Kuota Tersedia'}
                      </dd>
                    </div>
                    
                    <div className="mt-4 flex w-full flex-none gap-x-4 px-6">
                      <dt className="flex-none">
                        <span className="sr-only">Treatment Utama</span>
                        <Icon icon="solar:star-fall-bold-duotone" className="h-6 w-6 text-[#ffd900]" />
                      </dt>
                      <dd className="text-sm font-medium text-gray-900 dark:text-gray-300">
                        <span className="block text-xs text-gray-500 dark:text-gray-400 mb-1">Treatment Utama</span>
                        {promo.treatment_utama ? (
                          <div dangerouslySetInnerHTML={{ __html: promo.treatment_utama }} className="prose prose-sm dark:prose-invert prose-p:m-0 prose-ul:m-0 prose-li:m-0" />
                        ) : (
                          <ul className="list-disc pl-4 space-y-1 text-gray-600 dark:text-gray-400">
                            <li>Cek Kendaraan Menyeluruh</li>
                            <li>Layanan sesuai spesifikasi paket</li>
                            <li>Gratis Konsultasi Mekanik</li>
                          </ul>
                        )}
                      </dd>
                    </div>
                  </dl>
                  <div className="border-t border-gray-200 dark:border-gray-700 px-6 py-6">
                    <BookingModalButton 
                      promoName={title} 
                      cf7FormId={promo.cf7_form_id || "1cc9aa1"} 
                      className="w-full bg-[#224297] hover:bg-blue-800 text-white px-4 py-3 rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-md text-sm"
                    />
                  </div>
                </div>
              </div>

              {/* Related Promos */}
              {relatedPromos.length > 0 && (
                <div className="bg-white dark:bg-gray-900 dark:bg-gray-900 rounded-[2rem] p-6 shadow-xl">
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
