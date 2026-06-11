/**
 * Single Promosi Page — Bengkel Wiguna
 * Template based on Single Product (single-product-1)
 * With WhatsApp CTA
 */

import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Phone, Clock, Tag, CheckCircle, ArrowRight } from 'lucide-react'
import Button from '@/components/ui/Button'
import { getPromosiBySlug, getAllPromosi, stripHtml, formatDate } from '@/lib/wordpress'
import { extractRankMathSEO, generateMetadataFromSEO } from '@/lib/rank-math'
import JsonLd from '@/components/layout/JsonLd'
import { generateArticleSchema } from '@/lib/seo'

export const revalidate = 3600

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const promo = await getPromosiBySlug(slug)

  if (!promo) {
    return {
      title: 'Promosi Tidak Ditemukan | Bengkel Wiguna',
      description: 'Promosi yang Anda cari tidak tersedia.',
    }
  }

  const seo = extractRankMathSEO(promo)
  return generateMetadataFromSEO(seo)
}

export default async function SinglePromosiPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const promo = await getPromosiBySlug(slug) as any

  if (!promo) {
    notFound()
  }

  // Get related promos
  const allPromosi = await getAllPromosi()
  const relatedPromosi = Array.isArray(allPromosi)
    ? allPromosi.filter((p: any) => p.slug !== slug).slice(0, 3)
    : []

  const title = typeof promo.title === 'string' ? promo.title : promo.title?.rendered || ''
  const excerpt = stripHtml(typeof promo.excerpt === 'string' ? promo.excerpt : promo.excerpt?.rendered || '')
  const content = typeof promo.content === 'string' ? promo.content : promo.content?.rendered || ''

  // WhatsApp message
  const whatsappText = `Halo Minna, saya tertarik dengan promo "${title}" dari Bengkel Wiguna. Mohon info lebih lanjut ya!`
  const whatsappUrl = `https://wa.me/6287817773888?text=${encodeURIComponent(whatsappText)}`

  // Calculate discount if available
  const hasDiscount = promo.harga_asli && promo.harga_promo
  const discountPercent = hasDiscount
    ? Math.round((1 - parseFloat(promo.harga_promo.replace(/[^0-9.]/g, '')) / parseFloat(promo.harga_asli.replace(/[^0-9.]/g, ''))) * 100)
    : null

  return (
    <>
      <JsonLd data={generateArticleSchema(promo)} />

      <div className="shop-wrap lg:pt-24 pt-12">
        {/* Hero Banner */}
        <div className="bg-light-blue-banner text-white pt-32 pb-8">
          <div className="max-w-screen-xl mx-auto px-3 sm:px-6 md:px-14 lg:px-14 xl:px-18 2xl:px-3">
            <nav className="text-sm mb-4">
              <Link href="/" className="hover:text-[#ffd900]">Home</Link>
              <span className="mx-2">/</span>
              <Link href="/promosi" className="hover:text-[#ffd900]">Promosi</Link>
              <span className="mx-2">/</span>
              <span className="text-[#ffd900]">{title}</span>
            </nav>
          </div>
        </div>

        <div className="max-w-screen-xl mx-auto px-3 sm:px-6 md:px-14 lg:px-14 xl:px-18 2xl:px-3 lg:py-16 py-12">
          <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-10 relative lg:space-y-0 space-y-8">
            {/* Left Side - Image Gallery */}
            <div className="w-full">
              {promo.featured_img && (
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-gray-100">
                  <Image
                    src={promo.featured_img}
                    alt={title}
                    fill
                    className="object-cover"
                    priority
                  />
                  {hasDiscount && discountPercent && (
                    <div className="absolute top-4 right-4 bg-[#ffd900] text-[#1a3567] font-bold px-4 py-2 rounded-full text-sm">
                      -{discountPercent}%
                    </div>
                  )}
                </div>
              )}

              {/* Gallery if available */}
              {promo.gallery && Array.isArray(promo.gallery) && promo.gallery.length > 0 && (
                <div className="mt-6 grid grid-cols-4 gap-3">
                  {promo.gallery.slice(0, 4).map((img: string, i: number) => (
                    <div key={i} className="relative rounded-lg overflow-hidden aspect-square bg-gray-100">
                      <Image
                        src={img}
                        alt={`Gallery ${i + 1}`}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Right Side - Content */}
            <div className="w-full">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-[#ffd900] text-[#1a3567] px-4 py-2 rounded-full text-sm font-bold mb-4">
                <Tag size={16} />
                PROMO SPESIAL
              </div>

              {/* Title */}
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                {title}
              </h1>

              {/* Meta Info */}
              <div className="flex items-center gap-4 text-gray-600 mb-6">
                {promo.date && (
                  <span className="flex items-center gap-1 text-sm">
                    <Clock size={14} />
                    {formatDate(promo.date)}
                  </span>
                )}
                {promo.tanggal_selesai && (
                  <span className="flex items-center gap-1 text-sm">
                    Berlaku hingga: {promo.tanggal_selesai}
                  </span>
                )}
              </div>

              {/* Price Section */}
              {hasDiscount && (
                <div className="flex items-baseline gap-4 mb-6">
                  <span className="text-3xl font-bold text-[#224297]">
                    {promo.harga_promo}
                  </span>
                  <span className="text-xl text-gray-400 line-through">
                    {promo.harga_asli}
                  </span>
                </div>
              )}

              {/* Excerpt */}
              <p className="text-gray-700 text-base leading-relaxed mb-6">
                {excerpt}
              </p>

              {/* Benefits if available */}
              {promo.manfaat && (
                <div className="bg-blue-50 rounded-xl p-6 mb-6">
                  <h3 className="font-semibold text-gray-900 mb-3">Keunggulan Promo:</h3>
                  <div className="space-y-2">
                    {promo.manfaat.split('\n').filter(Boolean).map((item: string, i: number) => (
                      <div key={i} className="flex items-start gap-2">
                        <CheckCircle size={18} className="text-[#224297] mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{item.replace(/^[•\-*]\s*/, '')}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#224297] hover:bg-[#1a3567] text-white font-bold rounded-xl transition-all duration-300 shadow-lg shadow-blue-900/30"
                >
                  <Phone size={20} />
                  Hubungi via WhatsApp
                  <ArrowRight size={18} />
                </a>
                <Button
                  href="/lokasi"
                  label="Kunjungi Bengkel"
                  bgColor="bg-gray-100 hover:bg-gray-200"
                  textColor="text-gray-900"
                  padding="py-4 px-8"
                />
              </div>

              {/* Info Box */}
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <CheckCircle size={18} className="text-[#224297]" />
                  Syarat & Ketentuan
                </h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Promo tidak dapat digabungkan dengan promo lain</li>
                  <li>• Harga sudah termasuk jasa installation</li>
                  <li>• Booking via WhatsApp diutamakan</li>
                  <li>• Berlaku untuk stock yang tersedia</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Full Content */}
          {content && (
            <div className="mt-12 prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Detail Promo</h2>
              <div dangerouslySetInnerHTML={{ __html: content }} />
            </div>
          )}
        </div>
      </div>

      {/* Related Promos */}
      {relatedPromosi.length > 0 && (
        <div className="bg-gray-50 lg:py-16 py-12">
          <div className="max-w-screen-xl mx-auto px-3 sm:px-6 md:px-14 lg:px-14 xl:px-18 2xl:px-3">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Promo Lainnya</h2>
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-6">
              {relatedPromosi.map((item: any) => {
                const itemTitle = typeof item.title === 'string' ? item.title : item.title?.rendered || ''
                return (
                  <Link
                    key={item.id}
                    href={`/promosi/${item.slug}`}
                    className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
                  >
                    {item.featured_img && (
                      <div className="relative h-48 overflow-hidden">
                        <Image
                          src={item.featured_img}
                          alt={itemTitle}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute top-3 left-3 bg-[#ffd900] text-[#1a3567] text-xs font-bold px-3 py-1 rounded-full">
                          PROMO
                        </div>
                      </div>
                    )}
                    <div className="p-5">
                      <h3 className="font-semibold text-gray-900 group-hover:text-[#224297] transition-colors">
                        {itemTitle}
                      </h3>
                      {item.harga_promo && (
                        <p className="text-[#224297] font-bold mt-2">{item.harga_promo}</p>
                      )}
                    </div>
                  </Link>
                )
              })}
            </div>
            <div className="text-center mt-8">
              <Button
                href="/promosi"
                label="Lihat Semua Promo"
                bgColor="bg-[#224297] hover:bg-[#1a3567]"
                textColor="text-white"
                padding="py-3 px-8"
              />
            </div>
          </div>
        </div>
      )}

      {/* WhatsApp Float Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110"
        aria-label="Chat WhatsApp"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 3C4.162 3 .831 6.338.049 12.012c.4 2.81 1.615 5.4 3.55 7.4l-.99 3.35 3.474-.97c2.2 1.3 4.8 2.1 7.5 2.1 9.424 0 17.082-7.63 17.082-17.082 0-9.422-7.68-17.084-17.082-17.084"/>
        </svg>
      </a>
    </>
  )
}

export async function generateStaticParams() {
  const promosi = await getAllPromosi()
  if (!Array.isArray(promosi)) return []

  return promosi.map((item: any) => ({
    slug: item.slug,
  }))
}