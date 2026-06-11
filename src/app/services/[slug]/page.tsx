/**
 * Service Detail Page — Bengkel Wiguna
 */

import { notFound } from 'next/navigation'
import Image from 'next/image'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
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
      <Header />

      {/* Page Title */}
      <section className="pt-32 pb-12 bg-gray-50">
        <div className="max-w-screen-xl mx-auto px-3 sm:px-6 md:px-14 lg:px-14 xl:px-18 2xl:px-3">
          <div className="text-center">
            <span className="inline-block py-2 px-4 rounded-full bg-blue-100 text-blue-600 text-sm font-medium mb-4">
              LAYANAN
            </span>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {service.title?.rendered || service.title}
            </h1>
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
              <div className="bg-gray-50 rounded-xl p-6 sticky top-8">
                <h3 className="text-xl font-semibold mb-4">Hubungi Kami</h3>
                <p className="text-gray-600 mb-4">
                  Tertarik dengan layanan ini? Hubungi kami untuk konsultasi gratis.
                </p>
                <Button
                  href="/lokasi"
                  label="Lihat Lokasi"
                  bgColor="bg-blue-600"
                  textColor="text-white"
                  padding="py-3 px-6 w-full"
                />
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

      <Footer />
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