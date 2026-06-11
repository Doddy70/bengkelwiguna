/**
 * Tentang Wiguna Page — Bengkel Wiguna
 * Content sourced from: https://bengkelwiguna.com/tentang-wiguna/
 */

import Link from "next/link"
import { CheckCircle, Wrench, Users, Target, Award, Heart, Phone, MapPin, Clock } from "lucide-react"
import Button from "@/components/ui/Button"

export const metadata = {
  title: 'Tentang Wiguna | Bengkel Wiguna',
  description: 'Bengkel One Stop Service terpercaya di Depok. Konsultasi gratis, diagnosa transparan, tanpa bongkar-bongkar tanpa izin.',
}

const services = [
  { name: "Oli, Ban, Rem", icon: "🔧" },
  { name: "Service AC", icon: "❄️" },
  { name: "Engine Flush", icon: "⚙️" },
  { name: "Coolant Flush", icon: "💧" },
  { name: "Cek Kaki Kaki", icon: "🚗" },
  { name: "Spooring & Balancing", icon: "🎯" },
  { name: "Tune Up", icon: "⚡" },
  { name: "Semi Overhaul", icon: "🔩" },
]

const quickLinks = [
  { label: "Tentang Kami", href: "/tentang-wiguna" },
  { label: "Kontak Kami", href: "/contact" },
  { label: "Layanan Kami", href: "/services" },
  { label: "Promosi", href: "/promosi" },
  { label: "Paket Service", href: "/paket-service" },
]

const whyChooseUs = [
  {
    icon: CheckCircle,
    title: "Solusi Akurat & Transparan",
    desc: "Setiap masalah didiagnosa dengan detail. Anda akan tahu persis apa yang perlu diperbaiki dan mengapa."
  },
  {
    icon: Wrench,
    title: "Teknologi Modern",
    desc: "Menggunakan peralatan diagnosis terbaru untuk hasil yang presisi dan akurat."
  },
  {
    icon: Users,
    title: "Tim Profesional",
    desc: "Mekanik berpengalaman dan terus Pelatihan berkelanjutan untuk kualitas terbaik."
  },
  {
    icon: Heart,
    title: "Pelayanan Ramah",
    desc: "Pengalaman pelanggan yang menyenangkan dan bebas kekhawatiran."
  },
]

export default function TentangWigunaPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-16 pb-16 bg-gradient-to-br from-[#050b14] via-[#224297] to-[#224297] text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>

        <div className="max-w-screen-xl mx-auto px-3 sm:px-6 md:px-14 lg:px-14 xl:px-18 2xl:px-3 relative z-10">
          {/* Breadcrumb */}
          <nav className="text-sm mb-8">
            <Link href="/" className="hover:text-[#ffd900]">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-[#ffd900]">Tentang Wiguna</span>
          </nav>

          <div className="text-center max-w-4xl mx-auto">
            <span className="inline-block bg-[#ffd900] text-[#1a3567] px-4 py-2 rounded-full text-sm font-bold mb-6">
              🔧 ONE STOP SERVICE
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Selamat Datang di <span className="text-[#ffd900]">Bengkel Wiguna</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 font-medium">
              &quot;No Drama, No Bongkar-Bongkar, No Tebak-Tebakan, No Tipu-Tipu&quot;
            </p>
          </div>
        </div>
      </section>

      {/* Company Story Section */}
      <section className="lg:py-20 py-12 bg-white">
        <div className="max-w-screen-xl mx-auto px-3 sm:px-6 md:px-14 lg:px-14 xl:px-18 2xl:px-3">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Image Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-64 rounded-2xl overflow-hidden bg-gradient-to-br from-[#224297] to-[#050b14]">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-6xl">🏭</span>
                </div>
              </div>
              <div className="relative h-64 rounded-2xl overflow-hidden bg-gradient-to-br from-[#ffd900] to-[#ffb800]">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-6xl">🔧</span>
                </div>
              </div>
              <div className="relative h-64 rounded-2xl overflow-hidden bg-gradient-to-br from-[#224297] to-[#050b14] col-span-2">
                <div className="absolute inset-0 flex items-center justify-center flex-col">
                  <span className="text-7xl mb-2">🚗</span>
                  <span className="text-white font-bold">15+ Tahun Pengalaman</span>
                </div>
              </div>
            </div>

            {/* Right - Story */}
            <div>
              <span className="inline-block bg-blue-100 text-[#224297] px-4 py-2 rounded-full text-sm font-semibold mb-4">
                Cerita Kami
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Bengkel One Stop Service Terpercaya di Depok
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Bengkel Wiguna adalah bengkel One Stop Service terpercaya yang telah menjadi bagian dari perjalanan masyarakat Depok dan sekitarnya dalam merawat kendaraan mereka <strong>sejak lebih dari dua dekade lalu</strong>.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Kami hadir dengan komitmen kuat terhadap <strong>kualitas layanan, kejujuran, dan kepuasan pelanggan</strong>, menjadikan Bengkel Wiguna sebagai pilihan utama dalam segala kebutuhan perawatan dan perbaikan kendaraan Anda—mulai dari servis ringan, perbaikan mesin, pengecekan sistem kelistrikan, spooring-balancing, hingga detailing dan body repair.
              </p>
              <div className="flex flex-wrap gap-3 mt-8">
                <span className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium">✓ Ganti Oli</span>
                <span className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium">✓ Service AC</span>
                <span className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium">✓ Spooring</span>
                <span className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium">✓ Tune Up</span>
                <span className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium">✓ Body Repair</span>
                <span className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium">✓ Detailing</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="lg:py-16 py-12 bg-gradient-to-r from-[#050b14] to-[#224297] text-white">
        <div className="max-w-screen-xl mx-auto px-3 sm:px-6 md:px-14 lg:px-14 xl:px-18 2xl:px-3">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Vision */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-[#ffd900] rounded-xl flex items-center justify-center">
                  <Target className="w-6 h-6 text-[#1a3567]" />
                </div>
                <h3 className="text-2xl font-bold">Visi Kami</h3>
              </div>
              <p className="text-white/90 text-lg leading-relaxed">
                Menjadi bengkel mobil terpercaya di Indonesia dengan layanan transparan, profesional, dan mengutamakan kepuasan pelanggan.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-[#ffd900] rounded-xl flex items-center justify-center">
                  <Award className="w-6 h-6 text-[#1a3567]" />
                </div>
                <h3 className="text-2xl font-bold">Misi Kami</h3>
              </div>
              <ul className="space-y-3 text-white/90">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#ffd900] mt-1 flex-shrink-0" />
                  <span>Memberikan solusi akurat dan transparan untuk perawatan mobil</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#ffd900] mt-1 flex-shrink-0" />
                  <span>Mengedepankan teknologi dalam proses diagnosis dan servis</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#ffd900] mt-1 flex-shrink-0" />
                  <span>Membangun tim profesional dengan pelatihan berkelanjutan</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#ffd900] mt-1 flex-shrink-0" />
                  <span>Menyediakan pengalaman pelanggan yang menyenangkan</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="lg:py-20 py-12 bg-gray-50">
        <div className="max-w-screen-xl mx-auto px-3 sm:px-6 md:px-14 lg:px-14 xl:px-18 2xl:px-3">
          <div className="text-center mb-12">
            <span className="inline-block bg-[#224297]/10 text-[#224297] px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Mengapa Memilih Kami
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Kenapa Bengkel Wiguna?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow border border-gray-100">
                <div className="w-14 h-14 bg-[#224297]/10 rounded-xl flex items-center justify-center mb-4">
                  <item.icon className="w-7 h-7 text-[#224297]" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="lg:py-20 py-12 bg-white">
        <div className="max-w-screen-xl mx-auto px-3 sm:px-6 md:px-14 lg:px-14 xl:px-18 2xl:px-3">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Layanan Kami
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Pilihan lengkap untuk segala kebutuhan perawatan dan perbaikan kendaraan Anda
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {services.map((service, index) => (
              <div key={index} className="bg-gradient-to-br from-[#050b14] to-[#224297] rounded-xl p-6 text-white text-center hover:shadow-lg transition-shadow">
                <span className="text-4xl mb-3 block">{service.icon}</span>
                <h3 className="font-semibold">{service.name}</h3>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button
              href="/services"
              label="Lihat Semua Layanan"
              bgColor="bg-[#224297] hover:bg-[#1a3567]"
              textColor="text-white"
              padding="py-4 px-8"
            />
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="lg:py-16 py-12 bg-white">
        <div className="max-w-screen-xl mx-auto px-3 sm:px-6 md:px-14 lg:px-14 xl:px-18 2xl:px-3">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#224297]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-[#224297]" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Lokasi</h3>
                <p className="text-gray-600">Jl. K.H.M. Yusuf Raya No.22<br />Sukmajaya, Kota Depok</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#224297]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-[#224297]" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">WhatsApp</h3>
                <p className="text-gray-600">+62 878-1777-3888</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#224297]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-[#224297]" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Jam Operasional</h3>
                <p className="text-gray-600">Senin - Sabtu: 08.00 - 17.00<br />Minggu: Tutup</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}