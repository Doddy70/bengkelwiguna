/**
 * Service Detail Page — Bengkel Wiguna
 * Modern Airbnb-style layout with Bento grid and original sidebar
 */

import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import Breadcrumb from '@/components/ui/Breadcrumb'
import ServiceSidebar from '@/components/ui/ServiceSidebar'

import { getServiceBySlug, getAllServices, getAllCategories, stripHtml, parseFaqField } from '@/lib/wordpress'
import { extractRankMathSEO, generateMetadataFromSEO } from '@/lib/rank-math'
import JsonLd from '@/components/layout/JsonLd'
import { generateServiceSchema, generateBreadcrumbSchema } from '@/lib/seo'

// New Components
import ServiceGallery from '@/components/services/ServiceGallery'
import ServiceTabs from '@/components/services/ServiceTabs'

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

  // Get related services and categories
  const [allServices, categories] = await Promise.all([
    getAllServices(),
    getAllCategories()
  ])

  const title = typeof service.title === 'string' ? service.title : service.title?.rendered || ''
  const excerpt = stripHtml(service.excerpt?.rendered || service.excerpt || '').slice(0, 200)
  const content = service.content?.rendered || service.content || ''

  // Get service categories
  const serviceCategories = service._embedded?.['wp:term']?.[0] || []
  const primaryCategory = serviceCategories[0]

  // Gallery Images setup (using BW Plugin native gallery field)
  const mainImage = service.featured_img || '/images/service-hero-default.png'
  let galleryImages = [
    { id: 1, url: mainImage, alt: title },
  ]
  
  // BW Plugin returns gallery as array of URLs
  if (service.gallery && Array.isArray(service.gallery) && service.gallery.length > 0) {
    const customGallery = service.gallery.map((url: string, index: number) => ({
      id: index + 2,
      url: url,
      alt: `${title} gallery image ${index + 1}`
    }))
    galleryImages = [...galleryImages, ...customGallery]
  } else {
    // Mock for display if gallery is empty
    galleryImages = [
      ...galleryImages,
      { id: 2, url: '/images/service-1.jpg', alt: 'Gallery Image 1' },
      { id: 3, url: '/images/service-2.jpg', alt: 'Gallery Image 2' },
      { id: 4, url: '/images/service-3.jpg', alt: 'Gallery Image 3' },
      { id: 5, url: '/images/service-4.jpg', alt: 'Gallery Image 4' },
    ]
  }

  // BW Plugin FAQ Parser
  const rawFaq = service.bw_service_faq || service.faq || service.bw_spesialis_faq;
  const parsedFaqs = parseFaqField(rawFaq);
  
  let faqHtml = '';
  if (parsedFaqs && parsedFaqs.length > 0) {
    faqHtml = parsedFaqs.map((faq: any) => `
      <div style="margin-bottom: 24px;">
        <h3 style="font-weight: 700; color: #111827; margin-bottom: 8px;">${faq.q || faq.pertanyaan}</h3>
        <p style="color: #4B5563;">${faq.a || faq.jawaban}</p>
      </div>
    `).join('');
  }

  // Policies (Mocked unless BW plugin has a field for it)
  const policies = service.syarat_ketentuan || service.policies || '';

  return (
    <>
      <JsonLd data={generateServiceSchema(service)} />
      <JsonLd data={generateBreadcrumbSchema([
        { name: 'Home', url: 'https://bengkelwiguna.com' },
        { name: 'Layanan', url: 'https://bengkelwiguna.com/services' },
        { name: title, url: `https://bengkelwiguna.com/services/${slug}` }
      ])} />

      <main 
        className="min-h-screen pb-24 bg-cover bg-no-repeat bg-top"
        style={{ backgroundImage: "url('/images/home-9-footer.webp')" }}
      >
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 lg:pt-32">
          
          {/* Header Section (Title & Breadcrumb) */}
          <div className="mb-8">
            <Breadcrumb
              variant="minimal"
              showHome={true}
              homeLabel="Home"
              items={[
                { label: "Layanan", href: "/services" },
                { label: title }
              ]}
              className="mb-4"
            />
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-4 tracking-tight">
              {title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 font-medium">
              <span className="flex items-center gap-1">
                <Icon icon="solar:star-bold" className="text-yellow-400 text-lg" />
                <span className="text-gray-900 font-bold">4.8</span> (120 ulasan)
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Icon icon="solar:map-point-bold" className="text-gray-400 text-lg" />
                <a href="https://maps.app.goo.gl/J3s5ZhpwFttGFeeUA" target="_blank" rel="noreferrer" className="underline hover:text-gray-900">
                  Depok, Jawa Barat
                </a>
              </span>
              {primaryCategory && (
                <>
                  <span>•</span>
                  <Link href={`/services?category=${primaryCategory.slug}`} className="underline hover:text-[#224297]">
                    {primaryCategory.name}
                  </Link>
                </>
              )}
            </div>
          </div>

          {/* Bento Grid Gallery */}
          <ServiceGallery images={galleryImages} />

          {/* Main Layout Grid */}
          <div className="mt-12 grid lg:grid-cols-[1fr_340px] gap-12 lg:gap-16">
            
            {/* Left Column (Content) */}
            <div className="w-full">
              
              {/* Short Excerpt */}
              <div className="pb-8 border-b border-gray-200">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Tentang Layanan Ini</h2>
                <p className="text-gray-700 leading-relaxed text-lg">
                  {excerpt}
                </p>
              </div>

              {/* What this place offers (Fasilitas/Layanan) */}
              <div className="py-8 border-b border-gray-200">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Yang Anda Dapatkan</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                  <div className="flex items-center gap-4">
                    <Icon icon="solar:check-circle-linear" className="text-gray-700 text-2xl" />
                    <span className="text-gray-600">Pengecekan Menyeluruh</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <Icon icon="solar:shield-check-linear" className="text-gray-700 text-2xl" />
                    <span className="text-gray-600">{service.garansi ? `Garansi ${service.garansi}` : 'Garansi Servis'}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <Icon icon="solar:clock-circle-linear" className="text-gray-700 text-2xl" />
                    <span className="text-gray-600">{service.durasi || 'Pengerjaan Cepat'}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <Icon icon="solar:tea-cup-linear" className="text-gray-700 text-2xl" />
                    <span className="text-gray-600">Ruang Tunggu Nyaman</span>
                  </div>
                </div>
              </div>

              {/* Tabs for Details, Policies, FAQ */}
              <ServiceTabs 
                contentHtml={content} 
                policies={policies || "<p>Harap melakukan reservasi minimal 1 hari sebelumnya. Pembatalan dapat dilakukan maksimal 12 jam sebelum jadwal.</p>"}
                faqHtml={faqHtml || "<p><strong>Berapa lama pengerjaan?</strong><br/>Tergantung kondisi kendaraan, estimasi 1-3 jam.</p>"}
              />

              {/* Share */}
              <div className="mt-12 pt-8 border-t border-gray-200 flex items-center gap-4">
                <span className="text-sm font-bold text-gray-900">Bagikan:</span>
                <div className="flex gap-3">
                  <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors">
                    <Icon icon="fa6-brands:whatsapp" className="text-gray-700" />
                  </button>
                  <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors">
                    <Icon icon="fa6-brands:facebook-f" className="text-gray-700" />
                  </button>
                  <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors">
                    <Icon icon="solar:link-bold" className="text-gray-700" />
                  </button>
                </div>
              </div>
            </div>

            {/* ═══ Right Column — Sidebar (Restored) ═══ */}
            <aside className="w-full lg:sticky lg:top-32 space-y-8">
              {/* Service Navigation */}
              <ServiceSidebar services={allServices} currentSlug={slug} />

              {/* WhatsApp Support Card */}
              <div className="bg-gradient-to-br from-[#25D366] to-[#128C7E] rounded-3xl p-8 text-white shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-2xl" />
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center mb-6">
                    <Icon icon="fa6-brands:whatsapp" width={32} />
                  </div>
                  <h3 className="text-xl font-black mb-3">
                    Butuh Bantuan?
                  </h3>
                  <p className="text-white/80 text-sm font-medium mb-6 leading-relaxed">
                    Ingin bertanya lebih lanjut seputar <span className="text-white font-bold">{title}</span>?
                  </p>
                  <a
                    href={`https://wa.me/6287817773888?text=${encodeURIComponent(`Halo Minna, saya ingin tanya seputar layanan "${title}" di Bengkel Wiguna.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-source={`services-sidebar-${slug}`}
                    className="flex items-center justify-center gap-3 w-full py-4 bg-white hover:bg-gray-100 text-[#128C7E] font-black uppercase tracking-wider rounded-xl transition-all shadow-lg"
                  >
                    <Icon icon="fa6-brands:whatsapp" width={24} />
                    Chat Minna
                  </a>
                </div>
              </div>

              {/* Location Card */}
              <div className="bg-gray-50 rounded-3xl p-6 border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Icon icon="solar:map-point-bold" width={22} className="text-[#224297]" />
                  Lokasi Bengkel
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  Jl. Margonda No.268, Kemiri Muka, Kecamatan Beji, kota Depok 16423
                </p>
                <a
                  href="https://maps.app.goo.gl/J3s5ZhpwFttGFeeUA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#224297] font-bold hover:underline"
                >
                  <Icon icon="solar:arrow-right-linear" width={18} />
                  Lihat di Google Maps
                </a>
              </div>
            </aside>

          </div>
        </div>
      </main>
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
