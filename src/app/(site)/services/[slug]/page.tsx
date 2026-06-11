/**
 * Service Detail Page — Bengkel Wiguna
 */

import { notFound } from 'next/navigation'
import Image from 'next/image'
import PageTitle3 from '@/components/ui/PageTitle3'
import Button from '@/components/ui/Button'

import { getServiceBySlug, getAllServices, stripHtml } from '@/lib/wordpress'
import { extractRankMathSEO, generateMetadataFromSEO } from '@/lib/rank-math'
import JsonLd from '@/components/layout/JsonLd'
import { generateServiceSchema } from '@/lib/seo'

export const revalidate = 3600

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const service = await getServiceBySlug(slug)
  
  if (!service) {
    return {
      title: 'Service | Bengkel Wiguna',
      description: 'Detail layanan service kendaraan.',
    }
  }

  const seo = extractRankMathSEO(service)
  return generateMetadataFromSEO(seo)
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const service = await getServiceBySlug(slug) as any

  if (!service) {
    notFound()
  }

  // Get related services
  const allServices = await getAllServices()
  const relatedServices = Array.isArray(allServices)
    ? allServices.filter((s: any) => s.slug !== slug).slice(0, 3)
    : []

  return (
    <>
      <JsonLd data={generateServiceSchema(service)} />

      {/* Page Title */}
      <section className="pt-32 pb-12 bg-light-blue-banner text-white">
        <div className="max-w-screen-xl mx-auto px-3 sm:px-6 md:px-14 lg:px-14 xl:px-18 2xl:px-3">
          <div className="text-center">
            <span className="inline-block py-2 px-4 rounded-full bg-[#ffd900] text-[#1a3567] text-sm font-bold mb-4">
              LAYANAN
            </span>
            <h1 className="text-4xl font-bold mb-4">
              {service.title?.rendered || service.title}
            </h1>
            <p className="text-white/80">Solusi perawatan profesional untuk kendaraan Anda</p>
          </div>
        </div>
      </section>

      {/* Service Content */}
      <section className="lg:py-16 py-12">
        <div className="max-w-screen-xl mx-auto px-3 sm:px-6 md:px-14 lg:px-14 xl:px-18 2xl:px-3">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {service.featured_img && (
                <div className="mb-8 rounded-xl overflow-hidden">
                  <Image
                    src={service.featured_img}
                    alt={typeof service.title === 'string' ? service.title : service.title?.rendered || 'Layanan Bengkel Wiguna'}
                    width={800}
                    height={500}
                    className="w-full h-auto"
                  />
                </div>
              )}

              <div
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: service.content?.rendered || service.content || '' }}
              />
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
                            Butuh Bantuan?
                        </h3>
                        <p className="text-white/80 font-medium mb-8 text-sm leading-relaxed">
                            Punya pertanyaan seputar servis {service.title?.rendered || service.title} atau ingin booking? Chat Minna sekarang untuk respon cepat!
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
                            Respon Cepat via WhatsApp
                        </p>
                    </div>
                </div>

                <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 border border-gray-100 dark:border-gray-700">
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4 italic uppercase tracking-tight">Lokasi Bengkel</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-6">Kunjungi bengkel kami di Sukmajaya, Depok untuk pengerjaan langsung.</p>
                    <Button
                        href="/lokasi"
                        label="Cek Google Maps"
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

      {/* Related Services */}
      {relatedServices.length > 0 && (
        <section className="lg:py-16 py-12 bg-gray-50">
          <div className="max-w-screen-xl mx-auto px-3 sm:px-6 md:px-14 lg:px-14 xl:px-18 2xl:px-3">
            <PageTitle3
              badgeText=""
              title="Layanan Lainnya"
              subtitle=""
              widthClass="w-full mb-8"
              alignment="start"
              padding="pb-0"
            />

            <div className="grid lg:grid-cols-3 grid-cols-1 gap-6">
              {relatedServices.map((item: any) => (
                <div key={item.id} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="text-lg font-semibold mb-2">{item.title?.rendered || item.title}</h4>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {stripHtml(item.excerpt?.rendered || item.excerpt || '')}
                  </p>
                  <Button
                    href={`/services/${item.slug}`}
                    label="Selengkapnya →"
                    bgColor="bg-gray-900"
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
  const services = await getAllServices()
  if (!Array.isArray(services)) return []

  return services.map((service: any) => ({
    slug: service.slug,
  }))
}