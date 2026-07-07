/**
 * Single Paket Service Page — Bengkel Wiguna
 * Template based on Single Product (single-product-1)
 * With WhatsApp CTA
 */

import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Phone, Clock, Package, CheckCircle, ArrowRight, Star, Shield } from 'lucide-react'
import Button from '@/components/ui/Button'
import { getPaketServiceBySlug, getAllPaketService, stripHtml, formatDate } from '@/lib/wordpress'
import { extractRankMathSEO, generateMetadataFromSEO } from '@/lib/rank-math'
import JsonLd from '@/components/layout/JsonLd'
import { generateServiceSchema, generateBreadcrumbSchema } from '@/lib/seo'

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
      <JsonLd data={generateBreadcrumbSchema([
        { name: 'Home', url: 'https://bengkelwiguna.com' },
        { name: 'Paket Service', url: 'https://bengkelwiguna.com/paket-service' },
        { name: title, url: `https://bengkelwiguna.com/paket-service/${slug}` }
      ])} />

      {/* Branded Page Title Section */}
      <section className="bg-light-blue-banner lg:pt-48 pt-8 lg:pt-12 pb-20 relative overflow-hidden">
        <div className="max-w-screen-xl mx-auto px-3 sm:px-6 md:px-14 lg:px-14 xl:px-18 2xl:px-3 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block bg-brand-gold text-brand-blue px-5 py-1.5 rounded-full text-xs font-black uppercase tracking-[0.2em] mb-6 shadow-xl shadow-yellow-900/10">
              Paket Bundling
            </span>
            <h1 className="text-4xl lg:text-7xl font-black text-gray-900 mb-6 italic tracking-tighter uppercase leading-[0.85]">
              {title}
            </h1>
            <p className="text-gray-800 font-bold text-lg lg:text-xl max-w-xl leading-relaxed">
              {excerpt.slice(0, 120)}...
            </p>
          </div>
          
          {/* Breadcrumb */}
          <nav className="flex items-center gap-3 mt-12 text-sm font-bold uppercase tracking-widest text-gray-500">
            <Link href="/" className="hover:text-brand-blue transition-colors">Home</Link>
            <span className="text-brand-gold">/</span>
            <Link href="/paket-service" className="hover:text-brand-blue transition-colors">Paket Service</Link>
            <span className="text-brand-gold">/</span>
            <span className="text-gray-900">{slug}</span>
          </nav>
        </div>
      </section>

      {/* Main Content Section (Bexon Template Style) */}
      <section className="lg:py-24 py-12 bg-white dark:bg-gray-950">
        <div className="max-w-screen-xl mx-auto px-3 sm:px-6 md:px-14 lg:px-14 xl:px-18 2xl:px-3">
          <div className="grid lg:grid-cols-4 lg:gap-16 gap-10 relative">
            
            {/* 1. Main Content Area (col-span-3) */}
            <div className="lg:col-span-3">
              {paket.featured_img && (
                <div className="mb-12 rounded-3xl overflow-hidden shadow-2xl relative aspect-[16/9] group" data-aos="fade-up">
                  <Image
                    src={paket.featured_img}
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  
                  {paket.bestSeller && (
                    <div className="absolute top-6 left-6 bg-brand-gold text-brand-blue font-black px-6 py-3 rounded-full text-xl shadow-2xl z-10 italic tracking-tighter uppercase animate-bounce">
                      Best Seller
                    </div>
                  )}
                </div>
              )}

              {/* Package Summary Cards */}
              <div className="grid md:grid-cols-3 gap-6 mb-12" data-aos="fade-up">
                  <div className="p-6 bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 text-center">
                      <Clock className="mx-auto mb-3 text-brand-blue" />
                      <span className="block text-xs font-black uppercase tracking-widest text-gray-400 mb-1">Durasi</span>
                      <span className="text-lg font-bold text-gray-900 dark:text-white uppercase tracking-tighter italic">{paket.durasi_paket || '1-2 Jam'}</span>
                  </div>
                  <div className="p-6 bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 text-center">
                      <Shield className="mx-auto mb-3 text-green-500" />
                      <span className="block text-xs font-black uppercase tracking-widest text-gray-400 mb-1">Garansi</span>
                      <span className="text-lg font-bold text-gray-900 dark:text-white uppercase tracking-tighter italic">{paket.garansi_paket || '1 Minggu'}</span>
                  </div>
                  <div className="p-6 bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 text-center">
                      <Package className="mx-auto mb-3 text-brand-gold" />
                      <span className="block text-xs font-black uppercase tracking-widest text-gray-400 mb-1">Status</span>
                      <span className="text-lg font-bold text-gray-900 dark:text-white uppercase tracking-tighter italic">{paket.availability || 'Tersedia'}</span>
                  </div>
              </div>

              <div className="paket-content-rich">
                <div
                    className="prose prose-lg dark:prose-invert max-w-none 
                    prose-h2:text-3xl prose-h2:font-black prose-h2:italic prose-h2:uppercase prose-h2:tracking-tighter prose-h2:text-gray-900 prose-h2:dark:text-white prose-h2:mb-8
                    prose-p:text-gray-600 prose-p:dark:text-gray-400 prose-p:font-medium prose-p:leading-relaxed prose-p:mb-6
                    prose-ul:list-disc prose-ul:pl-6 prose-ul:mb-8
                    prose-li:text-gray-600 prose-li:dark:text-gray-400 prose-li:font-medium prose-li:mb-2"
                    dangerouslySetInnerHTML={{ __html: content }}
                />
              </div>

              {/* Package Items Highlight */}
              {paketItems.length > 0 && (
                <div className="mt-16 bg-gray-50 dark:bg-gray-900 rounded-3xl p-10 border border-gray-100 dark:border-gray-800" data-aos="fade-up">
                  <h3 className="text-2xl font-black italic uppercase tracking-tighter text-gray-900 dark:text-white mb-8 flex items-center gap-3">
                    <Package className="text-brand-blue" />
                    Apa Saja Yang Termasuk?
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {paketItems.map((item: string, i: number) => (
                      <div key={i} className="flex items-center gap-3 p-4 bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-50 dark:border-gray-700">
                        <CheckCircle size={18} className="text-green-500 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300 font-bold text-sm">{item.replace(/^[•\-*]\s*/, '')}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* 2. Sidebar Column (col-span-1) */}
            <div className="lg:col-span-1">
              <div className="sticky top-32 flex flex-col gap-10">
                
                {/* A. Dynamic Pricing Card */}
                <div className="bg-brand-blue text-white rounded-3xl p-8 shadow-xl shadow-blue-900/20 relative overflow-hidden" data-aos="fade-left">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full -mr-12 -mt-12" />
                  <span className="text-xs font-black uppercase tracking-widest text-brand-gold mb-2 block">Harga Paket</span>
                  <div className="flex flex-col mb-4">
                    <span className="text-4xl font-black italic tracking-tighter uppercase leading-none">
                      {paket.harga_paket || 'Hubungi Kami'}
                    </span>
                    {paket.previousPrice && (
                      <span className="text-lg text-white/40 line-through font-bold mt-2">{paket.previousPrice}</span>
                    )}
                  </div>
                  <p className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Harga Sudah Termasuk Jasa & PPN</p>
                </div>

                {/* B. WhatsApp Support Card (Minna) */}
                <div
                    className="p-8 bg-gradient-to-br from-brand-blue to-[#050b14] text-white rounded-3xl shadow-xl shadow-blue-900/20 relative overflow-hidden"
                    data-aos="zoom-in"
                >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 blur-2xl" />
                    <div className="relative z-10 flex flex-col items-center text-center">
                        <div className="mb-6 relative">
                            <div className="w-24 h-24 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm border border-white/20 p-2">
                                <Image
                                    src="/images/cs-support.avif"
                                    alt="Customer Support Bengkel Wiguna"
                                    width={80}
                                    height={80}
                                    className="w-full h-auto object-contain"
                                />
                            </div>
                            <div className="absolute bottom-1 right-1 w-5 h-5 bg-green-500 border-4 border-[#1a3567] rounded-full shadow-lg"></div>
                        </div>

                        <h3 className="text-2xl font-black uppercase tracking-tighter italic mb-2">
                            Pesan Sekarang
                        </h3>
                        <p className="text-white/80 font-medium mb-8 text-sm leading-relaxed">
                            Mulai perawatan mobil Anda hari ini. Chat Minna untuk reservasi <span className="text-brand-gold">{title}</span>.
                        </p>

                        <a
                            href={whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            data-source={`paket-service-${slug}`}
                            className="w-full py-4 bg-brand-gold hover:bg-yellow-400 text-brand-blue font-black uppercase tracking-widest rounded-xl transition-all duration-300 shadow-lg shadow-yellow-900/20 flex items-center justify-center gap-2 group"
                        >
                            <span className="text-xl">💬</span>
                            Booking via WhatsApp
                            <span className="group-hover:translate-x-1 transition-transform">→</span>
                        </a>
                    </div>
                </div>

                {/* C. Location Mini Card */}
                <div className="bg-gray-50 dark:bg-gray-900 rounded-3xl p-8 border border-gray-100 dark:border-gray-800 shadow-sm" data-aos="fade-up">
                    <h4 className="text-lg font-black italic uppercase tracking-tighter text-gray-900 dark:text-white mb-4">Lokasi Bengkel</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 leading-relaxed">Pengerjaan paket service dilakukan langsung di workshop kami dengan standar kualitas tinggi.</p>
                    <Button
                        href="https://maps.app.goo.gl/J3s5ZhpwFttGFeeUA"
                        label="Cek Google Maps"
                        bgColor="bg-white/50 dark:bg-gray-800"
                        textColor="text-brand-blue dark:text-white"
                        padding="py-3 px-6 w-full"
                        className="border border-brand-blue/10 dark:border-gray-700 rounded-xl"
                        target="_blank"
                    />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
                    className="group bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
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
        data-source={`paket-service-float-${slug}`}
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
  const paketServices = await getAllPaketService()
  if (!Array.isArray(paketServices)) return []

  return paketServices.map((item: any) => ({
    slug: item.slug,
  }))
}