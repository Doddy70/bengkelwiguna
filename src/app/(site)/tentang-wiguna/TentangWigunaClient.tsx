"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Users, Wrench, ThumbsUp, Award, Clock, Star, Phone } from "lucide-react";
import { Icon } from "@iconify/react";

export default function TentangWigunaClient() {
  // Data dari backend WordPress
  const slogan = "No Drama, No Bongkar-Bongkar, No Tebak-Tebak, No Tipu-Tipu";

  const vision = "Menjadi bengkel mobil terpercaya di Indonesia dengan layanan transparan, profesional, dan mengutamakan kepuasan pelanggan.";

  const missions = [
    "Memberikan solusi akurat dan transparan untuk perawatan mobil",
    "Mengedepankan teknologi dalam proses diagnosis dan servis",
    "Membangun tim profesional dengan pelatihan berkelanjutan",
    "Menyediakan pengalaman pelanggan yang menyenangkan dan bebas kekhawatiran"
  ];

  const services = [
    "Servis ringan",
    "Perbaikan mesin",
    "Pengecekan sistem kelistrikan",
    "Spooring-balancing",
    "Detailing",
    "Body repair"
  ];

  const whyChoose = [
    { icon: "solar:shield-check-linear", title: "Terpercaya", desc: "Telah dipercaya ribuan pelanggan di Depok dan sekitarnya" },
    { icon: "solar:diagnostics-linear", title: "Transparan", desc: "Diagnosa akurat dengan laporan jelas, tanpa biaya tersembunyi" },
    { icon: "solar:medal-star-linear", title: "Profesional", desc: "Tim mekanik bersertifikasi dan berpengalaman" },
    { icon: "solar:lightbulb-bolt-linear", title: "Modern", desc: "Didukung peralatan diagnosis terkini dan spare part berkualitas" }
  ];

  const stats = [
    { value: "10.000+", label: "Mobil Dilayani", icon: Car },
    { value: "15+", label: "Tahun Pengalaman", icon: Clock },
    { value: "100%", label: "Kepuasan Pelanggan", icon: ThumbsUp },
  ];

  // Simple car icon component
  function Car({ className }: { className?: string }) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
        <circle cx="7" cy="17" r="2" />
        <path d="M9 17h6" />
        <circle cx="17" cy="17" r="2" />
      </svg>
    );
  }

  return (
    <div className="relative font-dm min-h-screen overflow-hidden bg-white">

      {/* === HERO SECTION === */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/about/bbbb.jpg"
            alt="Bengkel Wiguna"
            fill
            className="object-cover"
            priority
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#224297]/90 via-[#224297]/70 to-transparent" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#ffd900] text-[#224297] text-sm font-bold rounded-full mb-6">
              <Icon icon="solar:tag-price-linear" className="w-4 h-4" />
              <span>Terpercaya Sejak 2010</span>
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight mb-6">
              {slogan}
            </h1>

            {/* Description */}
            <p className="text-lg sm:text-xl text-white/90 font-medium leading-relaxed mb-8">
              Bengkel Wiguna adalah bengkel One Stop Service terpercaya yang telah menjadi bagian dari perjalanan masyarakat Depok dan sekitarnya dalam merawat kendaraan mereka sejak lebih dari dua dekade lalu.
            </p>

            {/* CTA */}
            <a
              href="https://wa.me/6281717773888?text=Halo%20Bengkel%20Wiguna,%20saya%20ingin%20tanya%20seputar%20servis.%20(web)"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#ffd900] hover:bg-yellow-400 text-[#224297] font-bold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              <Icon icon="fa6-brands:whatsapp" className="w-5 h-5" />
              Reservasi Servis
              <ArrowUpRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* === STATS SECTION === */}
      <section className="relative -mt-16 z-20 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 grid grid-cols-1 md:grid-cols-3 gap-8 border border-gray-100">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center relative">
              {idx < stats.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 w-8 h-[2px] bg-gray-200" />
              )}
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-[#224297] to-[#1a356d] flex items-center justify-center shadow-lg">
                <stat.icon className="w-8 h-8 text-[#ffd900]" />
              </div>
              <span className="block text-4xl lg:text-5xl font-black text-[#224297] tracking-tight mb-2">{stat.value}</span>
              <span className="text-sm font-bold uppercase tracking-wider text-gray-500">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* === OUR STORY SECTION === */}
      <section className="py-20 lg:py-28">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left: Text Content */}
            <div>
              {/* Section Number */}
              <div className="flex items-center gap-4 mb-6">
                <span className="text-7xl lg:text-8xl font-black text-[#224297]/10">01</span>
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#224297] mb-1 block">Tentang Kami</span>
                  <h2 className="text-3xl lg:text-4xl font-black text-gray-900 tracking-tight uppercase">Cerita Kami</h2>
                </div>
              </div>

              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Bengkel Wiguna hadir dengan komitmen kuat terhadap kualitas layanan, kejujuran, dan kepuasan pelanggan. Kami percaya bahwa setiap kendaraan Anda layak mendapatkan perawatan terbaik.
              </p>

              <p className="text-gray-600 leading-relaxed mb-8">
                Dengan pengalaman lebih dari 15 tahun, kami telah membantu ribuan pemilik kendaraan di Depok dan sekitarnya merawat mobil mereka agar tetap andal dan aman di jalan. Setiap kendaraan yang masuk diperlakukan seperti milik sendiri—dengan perhatian pada detail, perawatan terbaik, dan komunikasi yang jelas.
              </p>

              {/* Services Tags */}
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-4">Layanan Kami</h4>
                <div className="flex flex-wrap gap-3">
                  {services.map((service, idx) => (
                    <span key={idx} className="px-4 py-2 bg-[#224297]/5 text-[#224297] text-sm font-semibold rounded-full border border-[#224297]/10 hover:bg-[#224297] hover:text-white transition-colors">
                      {service}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Image Grid */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="relative h-[200px] rounded-2xl overflow-hidden shadow-lg">
                    <Image
                      src="/images/about/aaaaa.jpg"
                      alt="Mekanik Bengkel Wiguna"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative h-[280px] rounded-2xl overflow-hidden shadow-lg">
                    <Image
                      src="/images/about/b (1).jpg"
                      alt="Interior Bengkel"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="relative h-[280px] rounded-2xl overflow-hidden shadow-lg">
                    <Image
                      src="/images/about/kuras oli.jpg"
                      alt="Service Bengkel"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative h-[200px] rounded-2xl overflow-hidden shadow-lg">
                    <Image
                      src="/images/about/qq.jpg"
                      alt="Tim Bengkel Wiguna"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Decorative Element */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#ffd900]/20 rounded-full blur-3xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* === VISION & MISSION SECTION === */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-7xl lg:text-8xl font-black text-[#224297]/10 block mb-4">02</span>
            <h2 className="text-3xl lg:text-4xl font-black text-gray-900 tracking-tight uppercase">Visi & Misi</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Vision Card */}
            <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-[#224297] flex items-center justify-center shadow-lg">
                  <Icon icon="solar:eye-linear" className="w-7 h-7 text-[#ffd900]" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#224297] mb-1 block">Arah & Tujuan</span>
                  <h3 className="text-2xl font-black text-gray-900 uppercase">Visi Kami</h3>
                </div>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                {vision}
              </p>
            </div>

            {/* Mission Card */}
            <div className="bg-[#224297] rounded-3xl p-8 lg:p-12 shadow-lg text-white">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center">
                  <Icon icon="solar:target-linear" className="w-7 h-7 text-[#ffd900]" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#ffd900] mb-1 block">Prinsip Kerja</span>
                  <h3 className="text-2xl font-black uppercase">Misi Kami</h3>
                </div>
              </div>
              <ul className="space-y-4">
                {missions.map((mission, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#ffd900] flex items-center justify-center shrink-0 mt-0.5">
                      <Icon icon="solar:check-linear" className="w-4 h-4 text-[#224297]" />
                    </div>
                    <span className="text-white/90 font-medium">{mission}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* === WHY CHOOSE US SECTION === */}
      <section className="py-20 lg:py-28">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-7xl lg:text-8xl font-black text-[#224297]/10 block mb-4">03</span>
            <h2 className="text-3xl lg:text-4xl font-black text-gray-900 tracking-tight uppercase mb-4">
              Kenapa Memilih Kami?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Kepercayaan pelanggan dibangun melalui pelayanan yang ramah, hasil kerja yang konsisten, komunikasi yang jujur, serta komitmen untuk memberikan solusi terbaik.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChoose.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-6 shadow-lg border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#224297] to-[#1a356d] flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                  <Icon icon={item.icon} className="w-8 h-8 text-[#ffd900]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === CTA SECTION === */}
      <section className="py-20 lg:py-28 bg-[#224297] relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="relative z-10 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#ffd900] text-[#224297] text-sm font-bold rounded-full mb-6">
            <Icon icon="solar:calendar-mark-linear" className="w-4 h-4" />
            <span>Reservasi Mudah</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight mb-6">
            Jadwalkan Kunjungan Anda Sekarang
          </h2>

          <p className="text-white/80 text-lg max-w-2xl mx-auto mb-10">
            Konsultasikan keluhan kendaraan Anda dengan mekanik profesional kami secara gratis. Dapatkan penawaran jujur tanpa drama.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/6281717773888?text=Halo%20Bengkel%20Wiguna,%20saya%20ingin%20reservasi%20servis.%20(web)"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#ffd900] hover:bg-yellow-400 text-[#224297] font-bold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              <Icon icon="fa6-brands:whatsapp" className="w-6 h-6" />
              Reservasi via WhatsApp
              <ArrowUpRight className="w-5 h-5" />
            </a>
            <Link
              href="/lokasi"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-full transition-all duration-300 border border-white/30"
            >
              <Icon icon="solar:map-point-linear" className="w-6 h-6" />
              Lihat Lokasi
            </Link>
          </div>

          {/* Contact Info */}
          <div className="mt-12 pt-8 border-t border-white/20">
            <div className="flex flex-wrap justify-center gap-8 text-white/70">
              <a href="tel:+6287817773888" className="flex items-center gap-2 hover:text-white transition-colors">
                <Icon icon="solar:phone-linear" className="w-5 h-5" />
                <span>+62 878-1777-3888</span>
              </a>
              <span className="flex items-center gap-2">
                <Icon icon="solar:map-point-linear" className="w-5 h-5" />
                <span>Depok, Indonesia</span>
              </span>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
