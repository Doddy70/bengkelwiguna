/**
 * Layanan Spesialis Detail Page — Bengkel Wiguna
 * With FAQ support (bw_spesialis_faq field)
 */

import { notFound } from 'next/navigation'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import PageTitle3 from '@/components/ui/PageTitle3'
import Button from '@/components/ui/Button'
import Accordion from '@/components/ui/Accordion'
import JsonLd from '@/components/layout/JsonLd'
import BookingTrigger from '@/components/heroui/BookingTrigger'
import Breadcrumb from '@/components/ui/Breadcrumb'

import { getLayananSpesialisBySlug, getAllLayananSpesialis, stripHtml, parseFaqField } from '@/lib/wordpress'
import { extractRankMathSEO, generateMetadataFromSEO } from '@/lib/rank-math'
import { generateFAQSchema, generateServiceSchema, generateBreadcrumbSchema } from '@/lib/seo'

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
      <JsonLd data={generateBreadcrumbSchema([
        { name: 'Home', url: 'https://bengkelwiguna.com' },
        { name: 'Layanan Spesialis', url: 'https://bengkelwiguna.com/layanan-spesialis' },
        { name: title, url: `https://bengkelwiguna.com/layanan-spesialis/${slug}` }
      ])} />

      {/* ═══ Hero Header — Featured Image as Background ═══ */}
      <section className="relative w-full lg:min-h-[420px] min-h-[340px] overflow-hidden flex items-end">
        {/* Background Image */}
        {layanan.featured_img ? (
          <Image
            src={layanan.featured_img}
            alt={title}
            fill
            className="object-cover"
            priority
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-[#224297] to-[#0f1d45]" />
        )}

        {/* Gradient Overlay — bottom-heavy for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />

        {/* Content */}
        <div className="relative z-10 w-full max-w-screen-xl mx-auto px-3 sm:px-6 md:px-14 lg:px-14 xl:px-18 2xl:px-3 pb-10 lg:pb-14">
          {/* SEO-Optimized Breadcrumb */}
          <Breadcrumb
            variant="location"
            showHome={true}
            homeLabel="Home"
            items={[
              { label: "Layanan Spesialis", href: "/layanan-spesialis" },
              { label: title }
            ]}
            className="mb-6"
          />

          {/* Badge */}
          <span className="inline-block bg-[#ffd900] text-[#224297] px-5 py-1.5 rounded-full text-xs font-black uppercase tracking-[0.2em] mb-4 shadow-lg shadow-yellow-900/20">
            🔧 Layanan Spesialis
          </span>

          {/* Title */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-4 leading-[1.1] tracking-tight max-w-3xl">
            {title}
          </h1>

          {/* Excerpt */}
          <p className="text-white/80 font-medium text-base md:text-lg max-w-2xl leading-relaxed mb-0">
            Solusi perbaikan tingkat lanjut menggunakan teknologi {layanan.teknologi_spesialis || 'Modern'} untuk hasil yang presisi.
          </p>
        </div>
      </section>

      {/* Page Background Image */}
      <div className="fixed inset-0 z-0">
        <Image src="/images/bg-default-page.webp" alt="" fill className="object-cover" aria-hidden="true" />
        <div className="absolute inset-0 bg-white/88 dark:bg-neutral-950/90" />
      </div>

      {/* Main Content Section */}
      <section className="relative z-10 lg:py-24 py-12 bg-white dark:bg-gray-950">
        <div className="max-w-screen-xl mx-auto px-3 sm:px-6 md:px-14 lg:px-14 xl:px-18 2xl:px-3">
          <div className="grid lg:grid-cols-4 lg:gap-16 gap-10 relative">
            
            {/* 1. Main Content Area (col-span-3) */}
            <div className="lg:col-span-3">
              {/* Technology Highlight */}
              {layanan.teknologi_spesialis && (
                  <div className="mb-12 p-8 bg-brand-blue text-white rounded-3xl shadow-xl relative overflow-hidden" data-aos="fade-up">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 blur-2xl" />
                      <span className="text-xs font-black uppercase tracking-widest text-brand-gold mb-2 block">Teknologi Modern</span>
                      <h3 className="text-3xl font-black italic tracking-tighter uppercase leading-tight mb-2">{layanan.teknologi_spesialis}</h3>
                      <p className="text-white/70 font-medium">Diagnosa akurat dan pengerjaan presisi dengan standar workshop internasional.</p>
                  </div>
              )}

              <div className="service-content-rich">
                <div
                    className="prose prose-lg dark:prose-invert max-w-none 
                    prose-h2:text-3xl prose-h2:font-black prose-h2:italic prose-h2:uppercase prose-h2:tracking-tighter prose-h2:text-gray-900 prose-h2:dark:text-white prose-h2:mb-8
                    prose-p:text-gray-600 prose-p:dark:text-gray-400 prose-p:font-medium prose-p:leading-relaxed prose-p:mb-6
                    prose-ul:list-disc prose-ul:pl-6 prose-ul:mb-8
                    prose-li:text-gray-600 prose-li:dark:text-gray-400 prose-li:font-medium prose-li:mb-2"
                    dangerouslySetInnerHTML={{ __html: layanan.content?.rendered || layanan.content || '' }}
                />
              </div>

              {/* Dedicated Booking CTA Section */}
              <div className="mt-16 p-8 lg:p-12 bg-gray-50 border border-gray-200 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-8 shadow-sm" data-aos="fade-up">
                <div className="max-w-xl text-center md:text-left">
                  <h3 className="text-2xl lg:text-3xl font-black italic uppercase tracking-tighter text-gray-900 mb-3">
                    Perlu Penanganan Spesialis?
                  </h3>
                  <p className="text-gray-600 font-medium">
                    Jadwalkan pengecekan mendalam untuk <span className="text-brand-blue font-bold">{title}</span>. Teknisi spesialis kami siap memberikan diagnosa akurat dan solusi tepat.
                  </p>
                </div>
                <div className="w-full md:w-auto shrink-0 flex justify-center">
                   <BookingTrigger 
                     serviceName={title} 
                     buttonText="Booking Sekarang"
                     className="py-4 px-10 bg-brand-blue hover:bg-blue-800 text-white font-black uppercase tracking-widest rounded-xl transition-all duration-300 shadow-xl shadow-blue-900/20 flex items-center justify-center gap-3 group"
                   />
                </div>
              </div>

              {/* FAQ Section */}
              {faqData.length > 0 && (
                <div className="mt-20" data-aos="fade-up">
                  <h3 className="text-3xl font-black italic uppercase tracking-tighter text-gray-900 dark:text-white mb-8 border-b border-gray-100 dark:border-gray-800 pb-4">
                    Pertanyaan Seputar Layanan
                  </h3>
                  <div className="space-y-6">
                    {faqData.map((item: any, i: number) => (
                      <div key={i} className="p-8 bg-gray-50 dark:bg-gray-900 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm transition-all hover:shadow-md">
                        <h4 className="text-xl font-black italic tracking-tighter uppercase text-brand-blue dark:text-brand-gold mb-4">{item.q}</h4>
                        <p className="text-gray-600 dark:text-gray-400 font-medium leading-relaxed">{item.a}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* 2. Sidebar Column (col-span-1) */}
            <div className="lg:col-span-1">
              <div className="sticky top-32 flex flex-col gap-10">
                
                {/* A. Specialists Navigation */}
                <div className="bg-gray-50 dark:bg-gray-900 rounded-3xl p-8 border border-gray-100 dark:border-gray-800 shadow-sm" data-aos="fade-left">
                  <h4 className="text-xl font-black italic uppercase tracking-tighter text-gray-900 dark:text-white mb-6 border-b border-gray-200 dark:border-gray-800 pb-4 flex items-center gap-2">
                    <span className="w-2 h-8 bg-brand-blue rounded-full" />
                    Menu Spesialis
                  </h4>
                  <ul className="flex flex-col gap-3">
                    {allLayanan.map((s: any) => (
                      <li key={s.id}>
                        <Link 
                          href={`/layanan-spesialis/${s.slug}`}
                          className={`flex items-center justify-between p-4 rounded-xl font-bold text-sm transition-all duration-300 group ${s.slug === slug ? 'bg-brand-blue text-white shadow-lg shadow-blue-900/20' : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-brand-gold hover:text-brand-blue border border-gray-100 dark:border-gray-700'}`}
                        >
                          {s.title?.rendered || s.title}
                          <ArrowUpRight size={16} className={`transition-transform ${s.slug === slug ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`} />
                        </Link>
                      </li>
                    ))}
                  </ul>
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
                            Konsultasi
                        </h3>
                        <p className="text-white/80 font-medium mb-8 text-sm leading-relaxed">
                            Butuh diagnosa spesifik? Chat Minna sekarang untuk bantuan teknis dan estimasi biaya transparan.
                        </p>

                        <div className="w-full flex flex-col gap-3">
                            <a
                                href={`https://wa.me/6287817773888?text=${encodeURIComponent(`Halo Minna, saya ingin tanya seputar layanan spesialis "${title}" di Bengkel Wiguna.`)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full py-4 bg-brand-gold hover:bg-yellow-400 text-brand-blue font-black uppercase tracking-widest rounded-xl transition-all duration-300 shadow-lg shadow-yellow-900/20 flex items-center justify-center gap-2 group"
                            >
                                <span className="text-xl">💬</span>
                                Tanya Teknisi
                                <span className="group-hover:translate-x-1 transition-transform">→</span>
                            </a>
                        </div>
                    </div>
                </div>

                {/* C. Location Mini Card */}
                <div className="bg-gray-50 dark:bg-gray-900 rounded-3xl p-8 border border-gray-100 dark:border-gray-800 shadow-sm" data-aos="fade-up">
                    <h4 className="text-lg font-black italic uppercase tracking-tighter text-gray-900 dark:text-white mb-4">Lokasi Bengkel</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 leading-relaxed">Kunjungi workshop kami untuk pengerjaan langsung oleh teknisi spesialis.</p>
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