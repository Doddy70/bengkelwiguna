/**
 * Lokasi Page — Bengkel Wiguna
 * Contact and location information
 */

import JsonLd from '@/components/layout/JsonLd'
import { generateLocalBusinessSchema, generateBreadcrumbSchema, generateContactPageSchema } from '@/lib/seo'
import PageTitle3 from '@/components/ui/PageTitle3'

export const revalidate = 86400

// ✅ ENHANCED SEO METADATA for Lokasi Page
export async function generateMetadata() {
  return {
    title: 'Lokasi & Alamat Bengkel Wiguna | Jl. Margonda No.268 Depok',
    description: 'Kunjungi Bengkel Wiguna di Jl. Margonda No.268, Kemiri Muka, Beji, Kota Depok 16423. One Stop Service mobil terpercaya dengan diagnosa gratis. Jam operasional Senin-Minggu.',
    keywords: [
      'lokasi bengkel wiguna',
      'alamat bengkel wiguna depok',
      'bengkel margonda depok',
      'bengkel mobil depok',
      'rute ke bengkel wiguna',
      'peta bengkel depok',
      'google maps bengkel wiguna',
      'bengkel dekat margonda',
      'jam operasional bengkel wiguna',
      'bengkel one stop service depok'
    ],
    openGraph: {
      title: 'Lokasi & Alamat Bengkel Wiguna | Jl. Margonda No.268',
      description: 'Kunjungi Bengkel Wiguna. Alamat: Jl. Margonda No.268, Depok. Diagnosa gratis, teknisi berpengalaman.',
      url: 'https://bengkelwiguna.com/lokasi',
      siteName: 'Bengkel Wiguna',
      locale: 'id_ID',
      type: 'website',
      images: [
        {
          url: 'https://bengkelwiguna.com/api/og?title=Lokasi+Bengkel+Wiguna&page=lokasi',
          width: 1200,
          height: 630,
          alt: 'Lokasi Bengkel Wiguna Depok',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Lokasi & Alamat Bengkel Wiguna',
      description: 'Kunjungi Bengkel Wiguna di Jl. Margonda No.268, Depok.',
      images: ['https://bengkelwiguna.com/api/og?title=Lokasi+Bengkel+Wiguna&page=lokasi'],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    alternates: {
      canonical: 'https://bengkelwiguna.com/lokasi',
    },
  }
}

export default function LokasiPage() {
  return (
    <>
      <JsonLd data={generateLocalBusinessSchema()} />
      <JsonLd data={generateContactPageSchema()} />
      <JsonLd data={generateBreadcrumbSchema([
        { name: 'Home', url: 'https://bengkelwiguna.com' },
        { name: 'Lokasi', url: 'https://bengkelwiguna.com/lokasi' }
      ])} />

      {/* Page Title */}
      <section className="pt-8 lg:pt-12 pb-12 bg-light-blue-banner text-white">
        <div className="max-w-screen-xl mx-auto px-3 sm:px-6 md:px-14 lg:px-14 xl:px-18 2xl:px-3">
          <PageTitle3
            badgeText="📍 DATANG Langsung"
            title="Kunjungi Bengkel Kami"
            subtitle="Konsultasi langsung dengan teknisi berpengalaman. Diagnosa gratis untuk kendaraan Anda."
            widthClass="w-full text-center"
            alignment="center"
            padding="pb-0"
          />
        </div>
      </section>

      {/* Contact Info */}
      <section className="lg:py-16 py-12">
        <div className="max-w-screen-xl mx-auto px-3 sm:px-6 md:px-14 lg:px-14 xl:px-18 2xl:px-3">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Contact Cards */}
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-[#224297]">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <span className="text-2xl">📍</span> Alamat Bengkel
                </h3>
                <p className="text-gray-600">
                 Jl. Margonda No.268, Kemiri Muka, Kecamatan Beji, Kota Depok, Jawa Barat 16423
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-[#ffd900]">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <span className="text-2xl">📞</span> WhatsApp / Telepon
                </h3>
                <p className="text-gray-600">
                  +62 817 1777 3888 (WhatsApp)<br />
                  <span className="text-sm text-[#224297] font-medium">Respon cepat via WhatsApp chat</span>
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-[#224297]">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <span className="text-2xl">⏰</span> Jam Operasional
                </h3>
                <p className="text-gray-600">
                  Senin - Minggu: 08.00 - 18.00
                  <span className="text-sm text-[#224297] font-medium">Booking diutamakan untuk kenyamanan</span>
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-[#ffd900]">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <span className="text-2xl">✉️</span> Email
                </h3>
                <p className="text-gray-600">
                  info@bengkelwiguna.com
                </p>
              </div>
            </div>

            {/* Google Map Embed */}
            <div className="bg-gray-100 rounded-xl overflow-hidden h-[450px] shadow-sm border border-gray-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126866.80824714409!2d106.71927928393397!3d-6.4469405756096725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ebfbbd9e7741%3A0x7d8cd231c7238c0d!2sWiguna%20Ban%20PD!5e0!3m2!1sid!2sid!4v1781358568776!5m2!1sid!2sid"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokasi Bengkel Wiguna Depok"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp CTA */}
      <section className="lg:py-12 py-8 bg-[#224297] text-white">
        <div className="max-w-screen-xl mx-auto px-3 sm:px-6 md:px-14 lg:px-14 xl:px-18 2xl:px-3 text-center">
          <h2 className="text-2xl font-bold mb-4">Chat Langsung via WhatsApp</h2>
          <p className="mb-6">Konsultasi gratis dengan teknisi kami. Respon cepat untuk booking dan tanya harga.</p>
          <a
            href="https://wa.me/6281717773888?text=Halo%20Bengkel%20Wiguna,%20saya%20ingin%20tanya%20seputar%20servis%20mobil.(web)"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#ffd900] text-[#1a3567] font-bold py-3 px-8 rounded-full hover:bg-yellow-400 transition-all hover:scale-[1.05]"
          >
            💬 Hubungi Sekarang
          </a>
        </div>
      </section>
    </>
  )
}