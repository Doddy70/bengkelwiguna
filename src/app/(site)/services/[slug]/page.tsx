/**
 * Service Detail Page — Bengkel Wiguna
 */

import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import PageTitle3 from '@/components/ui/PageTitle3'
import Button from '@/components/ui/Button'
import ServiceSidebar from '@/components/ui/ServiceSidebar'
import { ArrowUpRight } from 'lucide-react'
import BookingTrigger from '@/components/heroui/BookingTrigger'

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
  const title = service.title?.rendered || service.title

  return (
    <>
      <JsonLd data={generateServiceSchema(service)} />

      {/* Branded Page Title Section */}
      <section className="bg-light-blue-banner lg:pt-48 pt-32 pb-20 relative overflow-hidden">
        <div className="max-w-screen-xl mx-auto px-3 sm:px-6 md:px-14 lg:px-14 xl:px-18 2xl:px-3 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block bg-brand-gold text-brand-blue px-5 py-1.5 rounded-full text-xs font-black uppercase tracking-[0.2em] mb-6 shadow-xl shadow-yellow-900/10">
              Detail Layanan
            </span>
            <h1 className="text-4xl lg:text-7xl font-black text-gray-900 mb-6 italic tracking-tighter uppercase leading-[0.85]">
              {title}
            </h1>
            <p className="text-gray-800 font-bold text-lg lg:text-xl max-w-xl leading-relaxed">
              {stripHtml(service.excerpt?.rendered || service.excerpt || '').slice(0, 120)}...
            </p>
          </div>
          
          {/* Breadcrumb */}
          <nav className="flex items-center gap-3 mt-12 text-sm font-bold uppercase tracking-widest text-gray-500">
            <Link href="/" className="hover:text-brand-blue transition-colors">Home</Link>
            <span className="text-brand-gold">/</span>
            <Link href="/services" className="hover:text-brand-blue transition-colors">Layanan</Link>
            <span className="text-brand-gold">/</span>
            <span className="text-gray-900">{service.slug}</span>
          </nav>
        </div>
      </section>

      {/* Main Content Section (Bexon Template Style) */}
      <section className="lg:py-24 py-12 bg-white dark:bg-gray-950">
        <div className="max-w-screen-xl mx-auto px-3 sm:px-6 md:px-14 lg:px-14 xl:px-18 2xl:px-3">
          <div className="grid lg:grid-cols-4 lg:gap-16 gap-10 relative">
            
            {/* 1. Main Content Area (col-span-3) */}
            <div className="lg:col-span-3">
              {service.featured_img && (
                <div className="mb-12 rounded-3xl overflow-hidden shadow-2xl relative aspect-[16/9] group" data-aos="fade-up">
                  <Image
                    src={service.featured_img}
                    alt={typeof service.title === 'string' ? service.title : service.title?.rendered || 'Layanan Bengkel Wiguna'}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
              )}

              <div className="service-content-rich">
                <div
                    className="prose prose-lg dark:prose-invert max-w-none 
                    prose-h2:text-3xl prose-h2:font-black prose-h2:italic prose-h2:uppercase prose-h2:tracking-tighter prose-h2:text-gray-900 prose-h2:dark:text-white prose-h2:mb-8
                    prose-p:text-gray-600 prose-p:dark:text-gray-400 prose-p:font-medium prose-p:leading-relaxed prose-p:mb-6
                    prose-ul:list-disc prose-ul:pl-6 prose-ul:mb-8
                    prose-li:text-gray-600 prose-li:dark:text-gray-400 prose-li:font-medium prose-li:mb-2"
                    dangerouslySetInnerHTML={{ __html: service.content?.rendered || service.content || '' }}
                />
              </div>
              
              {/* FAQ Section */}
              <div className="mt-16 pt-10 border-t border-gray-100" data-aos="fade-up">
                <h3 className="text-3xl font-black italic uppercase tracking-tighter text-gray-900 mb-8">FAQ Layanan</h3>
                <div className="space-y-4">
                    <div className="p-6 bg-gray-50 rounded-2xl">
                        <h4 className="font-bold text-lg mb-2">Berapa lama pengerjaan layanan ini?</h4>
                        <p className="text-gray-600">Pengerjaan bervariasi tergantung kondisi kendaraan, biasanya memakan waktu 1-3 jam.</p>
                    </div>
                </div>
              </div>
            </div>

            {/* 2. Sidebar Column (col-span-1) */}
            <div className="lg:col-span-1">
              <div className="sticky top-32 flex flex-col gap-10">
                <ServiceSidebar services={allServices} currentSlug={slug} />
                
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
                            Butuh Bantuan?
                        </h3>
                        <p className="text-white/80 font-medium mb-8 text-sm leading-relaxed">
                            Ingin bertanya lebih lanjut seputar <span className="text-brand-gold">{title}</span>? Chat Minna sekarang!
                        </p>

                        <div className="w-full flex flex-col gap-3">
                            <a
                                href={`https://wa.me/6281717773888?text=${encodeURIComponent(`Halo Minna, saya ingin tanya seputar layanan "${title}" di Bengkel Wiguna.`)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full py-4 bg-brand-gold hover:bg-yellow-400 text-brand-blue font-black uppercase tracking-widest rounded-xl transition-all duration-300 shadow-lg shadow-yellow-900/20 flex items-center justify-center gap-2 group"
                            >
                                <span className="text-xl">💬</span>
                                Konsultasi Sekarang
                                <span className="group-hover:translate-x-1 transition-transform">→</span>
                            </a>

                            <BookingTrigger serviceName={title} />
                        </div>
                        
                        <p className="mt-4 text-[10px] text-white/40 uppercase font-bold tracking-widest">
                            Respon Cepat via WhatsApp
                        </p>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
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
