/**
 * Service Detail Page — Bengkel Wiguna
 * Using template layout: single-blog-2
 */

import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import ServiceSidebar from '@/components/ui/ServiceSidebar'
import BookingTrigger from '@/components/heroui/BookingTrigger'

import { getServiceBySlug, getAllServices, stripHtml } from '@/lib/wordpress'
import { extractRankMathSEO, generateMetadataFromSEO } from '@/lib/rank-math'
import JsonLd from '@/components/layout/JsonLd'
import { generateServiceSchema, generateBreadcrumbSchema } from '@/lib/seo'

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

  // Get related services for the sidebar
  const allServices = await getAllServices()
  const title = typeof service.title === 'string' ? service.title : service.title?.rendered || ''
  const excerpt = stripHtml(service.excerpt?.rendered || service.excerpt || '').slice(0, 120) + '...'

  return (
    <>
      <JsonLd data={generateServiceSchema(service)} />
      <JsonLd data={generateBreadcrumbSchema([
        { name: 'Home', url: 'https://bengkelwiguna.com' },
        { name: 'Layanan', url: 'https://bengkelwiguna.com/services' },
        { name: title, url: `https://bengkelwiguna.com/services/${slug}` }
      ])} />

      <div className='blog-wrap font-sans bg-white'>
        <div className='max-w-screen-xl mx-auto px-3 sm:px-6 md:px-14 lg:px-14 xl:px-18 2xl:px-3 lg:pb-24 pb-20 justify-center'>
          
          {/* Title Area using single-blog-2 structure */}
          <div className='blog-title bg-light-blue-banner lg:pt-12 pt-8 rounded-b-3xl mb-10'>
            <div className='lg:w-8/12 text-center pb-12 mx-auto lg:pt-12 pt-8'>
              <div className='flex justify-center mb-4'>
                <div className='px-4 py-1.5 border border-gray-200 rounded-lg text-xs font-bold uppercase tracking-widest text-[#224297] bg-white shadow-sm flex items-center gap-2 w-auto' data-aos='zoom-in' data-aos-delay='0' data-aos-duration='400'>
                  Detail Layanan
                </div>
              </div>
              <h1 className='text-3xl md:text-5xl text-gray-900 font-bold mb-4 leading-tight' data-aos='fade-up' data-aos-duration='400' data-delay='0'>
                {title}
              </h1>
              <p className='text-gray-600 font-medium text-lg mb-0 mx-auto max-w-2xl px-4' data-aos='fade-up' data-aos-duration='400' data-delay='100'>
                {excerpt}
              </p>
            </div>
          </div>

          {/* Featured Image matching single-blog-2 width and styling */}
          {service.featured_img && (
            <div className='lg:w-11/12 justify-center pb-14 mx-auto' data-aos='fade-up' data-aos-duration='400' data-delay='0'>
              <div className="relative aspect-[21/9] w-full rounded-2xl overflow-hidden shadow-xl">
                  <Image 
                    src={service.featured_img} 
                    alt={title} 
                    fill
                    className='object-cover w-full transition-transform duration-700 hover:scale-105' 
                    priority
                  />
              </div>
            </div>
          )}

          {/* Content Grid & Sidebar matching single-blog-2 2:1 ratio */}
          <div className='lg:w-11/12 mx-auto'>
            <div className='grid lg:grid-cols-3 grid-cols-1 gap-12 relative'>
              
              {/* Left Column (Content) */}
              <div className='lg:col-span-2 prose prose-lg max-w-none dark:prose-invert service-content-area
                prose-h2:text-2xl md:prose-h2:text-3xl prose-h2:font-bold prose-h2:text-gray-900 prose-h2:mb-4 prose-h2:mt-8
                prose-p:text-gray-800 prose-p:font-medium prose-p:text-[17px] prose-p:leading-7 prose-p:mb-4
                prose-ul:list-disc prose-ul:pl-5 prose-ul:mb-3 prose-ul:py-5
                prose-li:text-gray-800 prose-li:font-medium prose-li:text-[17px] prose-li:leading-7 prose-li:mb-2'
              >
                <div dangerouslySetInnerHTML={{ __html: service.content?.rendered || service.content || '' }} />

                {/* Booking CTA gracefully integrated into content stream */}
                <div className="mt-16 p-8 lg:p-10 bg-[#f8f9fa] border border-gray-200 rounded-2xl flex flex-col md:flex-row items-center text-center md:text-left gap-6 shadow-sm not-prose" data-aos="fade-up">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      Siap Memperbaiki Kendaraan Anda?
                    </h3>
                    <p className="text-gray-600 font-medium text-[17px]">
                      Jangan tunda perawatan! Booking layanan <span className="text-[#224297] font-bold">{title}</span> sekarang tanpa antre.
                    </p>
                  </div>
                  <BookingTrigger 
                    serviceName={title} 
                    buttonText="Booking Sekarang"
                    className="py-4 px-8 shrink-0 bg-[#224297] hover:bg-blue-800 text-white font-bold uppercase tracking-widest rounded-xl transition-all duration-300 shadow-md"
                  />
                </div>
                
                {/* FAQ Section */}
                <div className="mt-12 pt-8 border-t border-gray-100 not-prose" data-aos="fade-up">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">FAQ Layanan</h3>
                  <div className="space-y-4">
                      <div className="p-6 bg-white border border-gray-100 rounded-xl shadow-sm">
                          <h4 className="font-bold text-lg text-gray-900 mb-2">Berapa lama pengerjaan layanan ini?</h4>
                          <p className="text-gray-600 font-medium text-[17px]">Pengerjaan bervariasi tergantung kondisi kendaraan, biasanya memakan waktu 1-3 jam.</p>
                      </div>
                  </div>
                </div>
              </div>

              {/* Right Column (Sidebar components) */}
              <div className='w-full space-y-8'>
                <div className="sticky top-32 flex flex-col gap-8">
                  {/* Service Navigation Widget */}
                  <ServiceSidebar services={allServices} currentSlug={slug} />
                  
                  {/* WhatsApp Support Widget */}
                  <div className="p-8 bg-[#224297] text-white rounded-2xl shadow-xl relative overflow-hidden" data-aos="zoom-in">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-2xl" />
                      <div className="relative z-10 flex flex-col items-center text-center">
                          <div className="mb-6 relative">
                              <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center p-1 border-4 border-[#1a3567]">
                                  <Image
                                      src="/images/cs-support.avif"
                                      alt="Customer Support"
                                      width={80}
                                      height={80}
                                      className="w-full h-full rounded-full object-cover"
                                  />
                              </div>
                              <div className="absolute bottom-0 right-0 w-5 h-5 bg-[#ffd900] border-4 border-[#1a3567] rounded-full"></div>
                          </div>

                          <h3 className="text-2xl font-bold mb-2">
                              Butuh Bantuan?
                          </h3>
                          <p className="text-white/80 font-medium mb-6 text-sm leading-relaxed">
                              Ingin bertanya lebih lanjut seputar <span className="text-[#ffd900] font-bold">{title}</span>?
                          </p>

                          <a
                              href={`https://wa.me/6287817773888?text=${encodeURIComponent(`Halo Minna, saya ingin tanya seputar layanan "${title}" di Bengkel Wiguna.`)}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-full py-4 bg-[#ffd900] hover:bg-white text-[#224297] font-bold uppercase tracking-widest rounded-xl transition-all duration-300 shadow-md flex items-center justify-center gap-2 group"
                          >
                              <span className="text-xl">💬</span>
                              Chat Minna
                          </a>
                      </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
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
