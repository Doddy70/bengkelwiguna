/**
 * Single Paket Service Page — Bengkel Wiguna
 * Template based on Single Product (single-product-1)
 * With WhatsApp CTA
 */

import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Phone, Clock, Package, CheckCircle, ArrowRight, Star, Shield } from 'lucide-react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Button from '@/components/ui/Button'
import { getPaketServiceBySlug, getAllPaketService, stripHtml, formatDate } from '@/lib/wordpress'
import { extractRankMathSEO, generateMetadataFromSEO } from '@/lib/rank-math'
import JsonLd from '@/components/layout/JsonLd'
import { generateServiceSchema } from '@/lib/seo'

export const revalidate = 3600

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const paket = await getPaketServiceBySlug(slug)

  if (!paket) {
    return {
      title: 'Paket Service Tidak Ditemukan | Bengkel Wiguna',
      description: 'Paket service yang Anda cari tidak tersedia.',
    }
  }

  const seo = extractRankMathSEO(paket)
  return generateMetadataFromSEO(seo)
}

export default async function SinglePaketServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const paket = await getPaketServiceBySlug(slug) as any

  if (!paket) {
    notFound()
  }

  // Get related paket
  const allPaket = await getAllPaketService()
  const relatedPaket = Array.isArray(allPaket)
    ? allPaket.filter((p: any) => p.slug !== slug).slice(0, 3)
    : []

  const title = typeof paket.title === 'string' ? paket.title : paket.title?.rendered || ''
  const excerpt = stripHtml(typeof paket.excerpt === 'string' ? paket.excerpt : paket.excerpt?.rendered || '')
  const content = typeof paket.content === 'string' ? paket.content : paket.content?.rendered || ''

  // WhatsApp message with paket name
  const whatsappText = `Halo Minna, saya tertarik dengan Paket Service "${title}" dari Bengkel Wiguna. Mohon info lebih lanjut tentang paket ini ya!`
  const whatsappUrl = `https://wa.me/6287817773888?text=${encodeURIComponent(whatsappText)}`

  // Parse items_paket if it's JSON string
  let paketItems: string[] = []
  if (paket.items_paket) {
    try {
      paketItems = typeof paket.items_paket === 'string' ? JSON.parse(paket.items_paket) : paket.items_paket
    } catch {
      paketItems = paket.items_paket.split('\n').filter(Boolean)
    }
  }

  return (
    <>
      <JsonLd data={generateServiceSchema(paket)} />
      <Header
        position="fixed"
        bgColor="bg-white/70 backdrop-blur-xl border-b border-white/30 shadow-lg"
        theme="header-light"
      />

      <div className="shop-wrap lg:pt-24 pt-12">
        {/* Hero Banner */}
        <div className="bg-gradient-to-r from-[#050b14] to-[#224297] text-white py-8">
          <div className="max-w-screen-xl mx-auto px-3 sm:px-6 md:px-14 lg:px-14 xl:px-18 2xl:px-3">
            <nav className="text-sm mb-4">
              <Link href="/" className="hover:text-[#ffd900]">Home</Link>
              <span className="mx-2">/</span>
              <Link href="/paket-service" className="hover:text-[#ffd900]">Paket Service</Link>
              <span className="mx-2">/</span>
              <span className="text-[#ffd900]">{title}</span>
            </nav>
          </div>
        </div>

        <div className="max-w-screen-xl mx-auto px-3 sm:px-6 md:px-14 lg:px-14 xl:px-18 2xl:px-3 lg:py-16 py-12">
          <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-10 relative lg:space-y-0 space-y-8">
            {/* Left Side - Image Gallery */}
            <div className="w-full">
              {paket.featured_img && (
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-gray-100">
                  <Image
                    src={paket.featured_img}
                    alt={title}
                    fill
                    className="object-cover"
                    priority
                  />
                  {paket.bestSeller && (
                    <div className="absolute top-4 left-4 bg-[#ffd900] text-[#1a3567] font-bold px-4 py-2 rounded-full text-sm flex items-center gap-1">
                      <Star size={14} className="fill-current" />
                      BEST SELLER
                    </div>
                  )}
                </div>
              )}

              {/* Gallery if available */}
              {paket.gallery && Array.isArray(paket.gallery) && paket.gallery.length > 0 && (
                <div className="mt-6 grid grid-cols-4 gap-3">
                  {paket.gallery.slice(0, 4).map((img: string, i: number) => (
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
              <div className="inline-flex items-center gap-2 bg-[#224297] text-white px-4 py-2 rounded-full text-sm font-bold mb-4">
                <Package size={16} />
                PAKET SERVICE
              </div>

              {/* Title */}
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                {title}
              </h1>

              {/* Meta Info */}
              <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-6">
                {paket.durasi_paket && (
                  <span className="flex items-center gap-1 text-sm">
                    <Clock size={14} />
                    Durasi: {paket.durasi_paket}
                  </span>
                )}
                {paket.garansi_paket && (
                  <span className="flex items-center gap-1 text-sm">
                    <Shield size={14} />
                    Garansi: {paket.garansi_paket}
                  </span>
                )}
                {paket.jenis_kendaraan && (
                  <span className="flex items-center gap-1 text-sm bg-gray-100 px-3 py-1 rounded-full">
                    {paket.jenis_kendaraan}
                  </span>
                )}
              </div>

              {/* Price Section */}
              <div className="mb-6">
                {paket.harga_paket && (
                  <div className="flex items-baseline gap-4">
                    <span className="text-3xl font-bold text-[#224297]">
                      {paket.harga_paket}
                    </span>
                    {paket.previousPrice && (
                      <span className="text-xl text-gray-400 line-through">
                        {paket.previousPrice}
                      </span>
                    )}
                  </div>
                )}
                {paket.status === 'tersedia' && (
                  <span className="inline-flex items-center gap-1 text-sm text-green-600 mt-2">
                    <CheckCircle size={14} />
                    Tersedia
                  </span>
                )}
              </div>

              {/* Excerpt */}
              <p className="text-gray-700 text-base leading-relaxed mb-6">
                {excerpt}
              </p>

              {/* Paket Items */}
              {paketItems.length > 0 && (
                <div className="bg-blue-50 rounded-xl p-6 mb-6">
                  <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <Package size={18} className="text-[#224297]" />
                    Isi Paket:
                  </h3>
                  <ul className="space-y-2">
                    {paketItems.map((item: string, i: number) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle size={18} className="text-[#224297] mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{item.replace(/^[•\-*]\s*/, '')}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Reviews if available */}
              {paket.ulasan_paket && (
                <div className="bg-yellow-50 rounded-xl p-4 mb-6">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={16} className={`fill-current ${i < 4 ? 'text-yellow-400' : 'text-gray-300'}`} />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">{paket.ulasan_paket} ulasan</span>
                  </div>
                  {paket.soldUnits && (
                    <p className="text-sm text-gray-600">{paket.soldUnits} unit terjual</p>
                  )}
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
                  Pesan via WhatsApp
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
                  Yang Termasuk
                </h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Jasa installation oleh teknisi berpengalaman</li>
                  <li>• Garansi service sesuai paket</li>
                  <li>• Konsultasi gratis setelah service</li>
                  <li>• Booking via WhatsApp diutamakan</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Full Content */}
          {content && (
            <div className="mt-12 prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Detail Paket</h2>
              <div dangerouslySetInnerHTML={{ __html: content }} />
            </div>
          )}
        </div>
      </div>

      {/* Related Paket Services */}
      {relatedPaket.length > 0 && (
        <div className="bg-gray-50 lg:py-16 py-12">
          <div className="max-w-screen-xl mx-auto px-3 sm:px-6 md:px-14 lg:px-14 xl:px-18 2xl:px-3">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Paket Service Lainnya</h2>
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-6">
              {relatedPaket.map((item: any) => {
                const itemTitle = typeof item.title === 'string' ? item.title : item.title?.rendered || ''
                return (
                  <Link
                    key={item.id}
                    href={`/paket-service/${item.slug}`}
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
                        {item.bestSeller && (
                          <div className="absolute top-3 left-3 bg-[#ffd900] text-[#1a3567] text-xs font-bold px-3 py-1 rounded-full">
                            BEST SELLER
                          </div>
                        )}
                      </div>
                    )}
                    <div className="p-5">
                      <h3 className="font-semibold text-gray-900 group-hover:text-[#224297] transition-colors">
                        {itemTitle}
                      </h3>
                      {item.durasi_paket && (
                        <p className="text-sm text-gray-500 mt-1 flex items-center gap-1">
                          <Clock size={12} />
                          {item.durasi_paket}
                        </p>
                      )}
                      {item.harga_paket && (
                        <p className="text-[#224297] font-bold mt-2">{item.harga_paket}</p>
                      )}
                    </div>
                  </Link>
                )
              })}
            </div>
            <div className="text-center mt-8">
              <Button
                href="/paket-service"
                label="Lihat Semua Paket"
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

      <Footer />
    </>
  )
}

export async function generateStaticParams() {
  const paketServices = await getAllPaketService()
  if (!Array.isArray(paketServices)) return []

  return paketServices.map((item: any) => ({
    slug: item.slug,
  }))
}