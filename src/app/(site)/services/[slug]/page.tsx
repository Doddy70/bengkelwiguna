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

      {/* ═══ Hero Header — Featured Image as Background ═══ */}
      <section className="relative w-full lg:min-h-[420px] min-h-[340px] overflow-hidden flex items-end">
        {/* Background Image */}
        {service.featured_img ? (
          <Image
            src={service.featured_img}
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
          {/* Breadcrumb */}
          <nav className="flex items-center flex-wrap gap-1.5 mb-5 text-sm font-semibold" aria-label="Breadcrumb">
            <Link
              href="/"
              className="text-white/70 hover:text-[#ffd900] transition-colors duration-200"
            >
              Home
            </Link>
            <span className="text-[#ffd900] mx-1">/</span>
            <Link
              href="/services"
              className="text-white/70 hover:text-[#ffd900] transition-colors duration-200"
            >
              Layanan
            </Link>
            <span className="text-[#ffd900] mx-1">/</span>
            <span className="text-white font-bold truncate max-w-[220px] md:max-w-none">
              {title}
            </span>
          </nav>

          {/* Badge */}
          <span className="inline-block bg-[#ffd900] text-[#224297] px-5 py-1.5 rounded-full text-xs font-black uppercase tracking-[0.2em] mb-4 shadow-lg shadow-yellow-900/20">
            Detail Layanan
          </span>

          {/* Title */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-4 leading-[1.1] tracking-tight max-w-3xl">
            {title}
          </h1>

          {/* Excerpt */}
          <p className="text-white/80 font-medium text-base md:text-lg max-w-2xl leading-relaxed mb-0">
            {excerpt}
          </p>
        </div>
      </section>

      {/* Page Background Image */}
      <div className="fixed inset-0 z-0">
        <Image src="/images/bg-default-page.webp" alt="" fill className="object-cover" aria-hidden="true" />
        <div className="absolute inset-0 bg-white/88 dark:bg-neutral-950/90" />
      </div>

      <div className='relative z-10 blog-wrap font-sans'>
        <div className='max-w-screen-xl mx-auto px-3 sm:px-6 md:px-14 lg:px-14 xl:px-18 2xl:px-3 lg:pb-24 pb-20 justify-center pt-12'>

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
