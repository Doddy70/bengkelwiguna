/**
 * Lokasi Page — Bengkel Wiguna
 * Contact and location information
 */

import PageTitle3 from '@/components/ui/PageTitle3'

export const revalidate = 86400

export default function LokasiPage() {
  return (
    <>
      {/* Page Title */}
      <section className="pt-32 pb-12 bg-gradient-to-br from-[#050b14] to-[#224297] text-white">
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
                  Jl. K.H.M. Yusuf Raya No.22, Mekar Jaya<br />
                  Kec. Sukmajaya, Kota Depok, Jawa Barat 16411<br />
                  Indonesia
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-[#ffd900]">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <span className="text-2xl">📞</span> WhatsApp / Telepon
                </h3>
                <p className="text-gray-600">
                  +62 878-1777-3888 (WhatsApp)<br />
                  <span className="text-sm text-[#224297] font-medium">Respon cepat via WhatsApp chat</span>
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-[#224297]">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <span className="text-2xl">⏰</span> Jam Operasional
                </h3>
                <p className="text-gray-600">
                  Senin - Sabtu: 08.00 - 17.00<br />
                  Minggu: 09.00 - 15.00<br />
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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.1226065406085!2d106.83842137588726!3d-6.402660162615456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ebf90b9b9b9b%3A0x2e69ebf90b9b9b9b!2sBengkel%20Wiguna!5e0!3m2!1sen!2sid!4v1718000000000!5m2!1sen!2sid"
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
            href="https://wa.me/6287817773888?text=Halo%20Bengkel%20Wiguna,%20saya%20ingin%20tanya%20seputar%20servis%20mobil."
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

export function generateMetadata() {
  return {
    title: 'Lokasi & Kontak | Bengkel Wiguna Depok',
    description: 'Kunjungi Bengkel Wiguna di Sukmajaya, Depok. Layanan service mobil profesional dengan diagnosa gratis. Hubungi 0878-1777-3888.',
  }
}