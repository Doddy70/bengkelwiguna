/**
 * Layanan Spesialis Detail Page — Bengkel Wiguna
 * With FAQ support (bw_spesialis_faq field)
 */

import { notFound } from 'next/navigation'
import Image from 'next/image'
import PageTitle3 from '@/components/ui/PageTitle3'
import Button from '@/components/ui/Button'
import Accordion from '@/components/ui/Accordion'
import JsonLd from '@/components/layout/JsonLd'

import { getLayananSpesialisBySlug, getAllLayananSpesialis, stripHtml, parseFaqField } from '@/lib/wordpress'
import { extractRankMathSEO, generateMetadataFromSEO } from '@/lib/rank-math'
import { generateFAQSchema, generateServiceSchema } from '@/lib/seo'

export const revalidate = 3600

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const layanan = await getLayananSpesialisBySlug(slug)
  
  if (!layanan) {
    return {
      title: 'Layanan Spesialis | Bengkel Wiguna',
      description: 'Detail layanan spesialis kendaraan.',
    }
  }

  const seo = extractRankMathSEO(layanan)
  return generateMetadataFromSEO(seo)
}

export default async function LayananSpesialisPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const layanan = await getLayananSpesialisBySlug(slug) as any

  if (!layanan) {
    notFound()
  }

  // Parse FAQ field
  const faqData = parseFaqField(layanan.bw_spesialis_faq)
  const faqFirst5 = faqData.slice(0, 5)
  const faqRest = faqData.slice(5)

  // Get related services
  const allLayanan = await getAllLayananSpesialis()
  const relatedLayanan = Array.isArray(allLayanan)
    ? allLayanan.filter((s: any) => s.slug !== slug).slice(0, 3)
    : []

  const title = layanan.title?.rendered || layanan.title

  return (
    <>
      <JsonLd data={generateServiceSchema(layanan)} />
      {faqData.length > 0 && <JsonLd data={generateFAQSchema(faqData)} />}

      {/* Page Title */}
      <section className="pt-32 pb-12 bg-light-blue-banner text-white">
        <div className="max-w-screen-xl mx-auto px-3 sm:px-6 md:px-14 lg:px-14 xl:px-18 2xl:px-3">
          <div className="text-center">
            <span className="inline-block py-2 px-4 rounded-full bg-[#ffd900] text-[#1a3567] text-sm font-bold mb-4">
              🔧 LAYANAN SPESIALIS
            </span>
            <h1 className="text-4xl font-bold mb-4">
              {title}
            </h1>
            <p className="text-white/80">Solusi spesialis untuk masalah spesifik kendaraan Anda</p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="lg:py-16 py-12">
        <div className="max-w-screen-xl mx-auto px-3 sm:px-6 md:px-14 lg:px-14 xl:px-18 2xl:px-3">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Featured Image */}
              {layanan.featured_img && (
                <div className="mb-8 rounded-xl overflow-hidden relative h-[400px]">
                  <Image
                    src={layanan.featured_img}
                    alt={title || 'Layanan Spesialis Bengkel Wiguna'}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              )}

              {/* Content ... rest of content same but using next/image for gallery */}

              {/* Content */}
              <div
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: layanan.content?.rendered || layanan.content || '' }}
              />

              {/* Manfaat Spesialis */}
              {layanan.manfaat_spesialis && (
                <div className="mt-8 bg-blue-50 rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-4">Manfaat Layanan</h3>
                  <div dangerouslySetInnerHTML={{ __html: layanan.manfaat_spesialis }} />
                </div>
              )}

              {/* Teknologi */}
              {layanan.teknologi_spesialis && (
                <div className="mt-6 bg-gray-100 rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-4">Teknologi yang Digunakan</h3>
                  <p className="text-gray-700">{layanan.teknologi_spesialis}</p>
                </div>
              )}

              {/* FAQ Split: Part 1 (First 5) */}
              {faqFirst5.length > 0 && (
                <div className="mt-10">
                  <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                    <span className="text-[#ffd900]">❓</span> Pertanyaan Umum
                  </h3>
                  <div id="faqOne" className="space-y-4">
                    <Accordion
                      items={faqFirst5.map((item: { q: string; a: string }) => ({
                        question: item.q,
                        answer: item.a,
                      }))}
                      variant="white"
                      defaultOpenIndex={0}
                    />
                  </div>
                </div>
              )}

              {/* Gallery */}
              {layanan.gallery && Array.isArray(layanan.gallery) && layanan.gallery.length > 0 && (
                <div className="mt-12">
                  <h3 className="text-xl font-semibold mb-4">Galeri Layanan</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {layanan.gallery.map((img: string, index: number) => (
                      <div key={index} className="rounded-lg overflow-hidden group relative h-48">
                        <img 
                          src={img} 
                          alt={`Gallery ${index + 1}`} 
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-32">
                <div
                    className="p-8 bg-gradient-to-br from-brand-blue to-[#050b14] text-white rounded-2xl shadow-xl shadow-blue-900/20 relative overflow-hidden mb-8"
                    data-aos="zoom-in"
                >
                    {/* Background Decorative */}
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
                            <div className="absolute bottom-1 right-1 w-5 h-5 bg-green-500 border-4 border-[#1a3567] rounded-full"></div>
                        </div>

                        <h3 className="text-2xl font-black uppercase tracking-tighter italic mb-2">
                            Konsultasi Spesialis
                        </h3>
                        <p className="text-white/80 font-medium mb-8 text-sm leading-relaxed">
                            Punya masalah spesifik dengan {title}? Tim teknisi kami siap memberikan diagnosa gratis dan estimasi transparan via WhatsApp.
                        </p>

                        <a
                            href="https://wa.me/6281717773888?text=halo%20mon,%20saya%20ingin%20tanya%20seputar%20servis%20mobil%20saya%20di%20bengkel%20wiguna.%20(web)"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full py-4 bg-brand-gold hover:bg-yellow-400 text-brand-blue font-black uppercase tracking-widest rounded-xl transition-all duration-300 shadow-lg shadow-yellow-900/20 flex items-center justify-center gap-2 group"
                        >
                            <span className="text-xl">💬</span>
                            Chat Minna Sekarang
                            <span className="group-hover:translate-x-1 transition-transform">→</span>
                        </a>
                        
                        <p className="mt-4 text-[10px] text-white/40 uppercase font-bold tracking-widest">
                            Solusi Cepat & Terpercaya
                        </p>
                    </div>
                </div>

                <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 border border-gray-100 dark:border-gray-700">
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4 italic uppercase tracking-tight">Kunjungi Bengkel</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-6">Kami melayani pengerjaan langsung di workshop kami dengan peralatan modern.</p>
                    <Button
                        href="/lokasi"
                        label="Lihat Lokasi & Rute"
                        bgColor="bg-white/50 dark:bg-gray-700"
                        textColor="text-brand-blue dark:text-white"
                        padding="py-3 px-6 w-full"
                        className="border border-brand-blue/10"
                    />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section: Part 2 (The Rest) */}
      {faqRest.length > 0 && (
        <section className="lg:py-16 py-12 bg-gray-50 border-t border-gray-100">
          <div className="max-w-screen-xl mx-auto px-3 sm:px-6 md:px-14 lg:px-14 xl:px-18 2xl:px-3">
            <div className="text-center mb-12">
              <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-600 text-xs font-bold mb-3 uppercase tracking-wider">
                Pertanyaan Lainnya
              </span>
              <h2 className="text-3xl font-bold text-gray-900">Masih Punya Pertanyaan?</h2>
              <p className="text-gray-600 mt-2">Berikut adalah informasi tambahan yang mungkin Anda butuhkan</p>
            </div>

            {/* FAQ Image if available */}
            {layanan.bw_spesialis_faq_image && (
              <div className="mb-12 text-center">
                <div className="relative inline-block group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#ffd900] to-blue-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                  <img
                    src={layanan.bw_spesialis_faq_image}
                    alt="FAQ Illustration"
                    className="relative mx-auto max-w-md rounded-xl shadow-2xl"
                  />
                </div>
              </div>
            )}

            <div id="faqTwo" className="max-w-3xl mx-auto">
              <Accordion
                items={faqRest.map((item: { q: string; a: string }) => ({
                  question: item.q,
                  answer: item.a,
                }))}
                variant="line"
              />
            </div>
          </div>
        </section>
      )}

      {/* Related Services */}
      {relatedLayanan.length > 0 && (
        <section className="lg:py-16 py-12">
          <div className="max-w-screen-xl mx-auto px-3 sm:px-6 md:px-14 lg:px-14 xl:px-18 2xl:px-3">
            <PageTitle3
              badgeText="🔧"
              title="Layanan Spesialis Lainnya"
              subtitle="Pilihan layanan spesialis untuk kebutuhan spesifik kendaraan Anda"
              widthClass="w-full mb-8"
              alignment="start"
              padding="pb-0"
            />

            <div className="grid lg:grid-cols-3 grid-cols-1 gap-6">
              {relatedLayanan.map((item: any) => (
                <div key={item.id} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <span className="text-xl">🔧</span>
                  </div>
                  <h4 className="text-lg font-semibold mb-2">{item.title?.rendered || item.title}</h4>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {stripHtml(item.excerpt?.rendered || item.excerpt || '')}
                  </p>
                  <Button
                    href={`/layanan-spesialis/${item.slug}`}
                    label="Selengkapnya →"
                    bgColor="bg-blue-600"
                    textColor="text-white"
                    padding="py-2 px-4"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}

export async function generateStaticParams() {
  const layanan = await getAllLayananSpesialis()
  if (!Array.isArray(layanan)) return []

  return layanan.map((item: any) => ({
    slug: item.slug,
  }))
}