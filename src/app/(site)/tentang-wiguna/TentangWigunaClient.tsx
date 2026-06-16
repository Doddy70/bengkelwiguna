"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ArrowDown, Target, ShieldCheck, CheckCircle2 } from "lucide-react";
import { Icon } from "@iconify/react";

interface TentangWigunaClientProps {
  pageTitle: string;
  excerpt: string;
  featuredImage: string;
}

export default function TentangWigunaClient({ pageTitle, excerpt, featuredImage }: TentangWigunaClientProps) {
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
    "Komitmen kuat terhadap kualitas layanan, kejujuran, dan kepuasan pelanggan",
    "Tim mekanik bersertifikasi dan berpengalaman",
    "Komunikasi jelas kepada pelanggan",
    "Layanan presisi, efisien, dan tepat guna"
  ];

  return (
    <div className="relative font-dm min-h-screen pt-32 pb-20 overflow-hidden">
      {/* Fixed Page Background Image */}
      <div className="fixed inset-0 z-0">
        <Image src="/images/bg-footer-inner.webp" alt="" fill className="object-cover" aria-hidden="true" />
        <div className="absolute inset-0 bg-[#fcfcfc]/85 dark:bg-neutral-950/90" />
      </div>

      <div className="relative z-10 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* === 1. HEADER TITLE & SUBTITLE === */}
        <div className="grid lg:grid-cols-12 grid-cols-1 gap-6 mb-12 items-end">
          <div className="lg:col-span-8">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-gray-900 dark:text-white leading-[1.1] tracking-tight uppercase">
              {pageTitle}
            </h1>
          </div>
          <div className="lg:col-span-4">
            <p className="text-gray-500 dark:text-gray-400 text-base font-medium leading-relaxed lg:pb-2">
              {excerpt}
            </p>
          </div>
        </div>

        {/* === 2. HERO BANNER IMAGE === */}
        <div className="relative w-full h-[260px] sm:h-[380px] md:h-[440px] rounded-[2.5rem] overflow-hidden mb-16 shadow-md group">
          <Image
            src={featuredImage}
            alt="Mekanik Bengkel Wiguna"
            fill
            className="object-cover transition-transform duration-1000 group-hover:scale-102"
            priority
            sizes="100vw"
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors duration-500" />

          {/* Floating Action Button */}
          <div className="absolute bottom-6 right-6 z-10">
            <a
              href="#about-details"
              className="w-16 h-16 rounded-full bg-[#224297] hover:bg-[#1a356d] text-white flex items-center justify-center shadow-lg hover:scale-105 transition-all duration-300"
              aria-label="Scroll down to details"
            >
              <ArrowDown className="w-6 h-6 animate-bounce" />
            </a>
          </div>
        </div>

        {/* === 3. ABOUT CONTENT ROW === */}
        <div id="about-details" className="grid lg:grid-cols-12 grid-cols-1 gap-12 lg:gap-16 items-start mb-16 scroll-mt-28">
          {/* Left Side: Slogan & Description */}
          <div className="lg:col-span-6 flex flex-col justify-between h-full">
            <div>
              {/* Slogan Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#224297] text-white text-sm font-bold rounded-full mb-6">
                <Icon icon="solar:shield-check-linear" className="w-4 h-4 text-[#ffd900]" />
                <span>{slogan}</span>
              </div>

              <p className="text-gray-700 dark:text-gray-300 text-xl font-medium leading-relaxed mb-8">
                Bengkel Wiguna adalah bengkel One Stop Service terpercaya yang telah menjadi bagian dari perjalanan masyarakat Depok dan sekitarnya dalam merawat kendaraan mereka sejak lebih dari dua dekade lalu.
              </p>

              {/* Services List */}
              <div className="mb-6">
                <h4 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-3">Layanan Kami:</h4>
                <div className="flex flex-wrap gap-2">
                  {services.map((service, idx) => (
                    <span key={idx} className="px-3 py-1.5 bg-gray-100 dark:bg-neutral-800 text-gray-700 dark:text-gray-300 text-sm rounded-lg border border-gray-200 dark:border-neutral-700">
                      {service}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Small Horizontal Accent Graphic */}
            <div className="relative w-full h-24 rounded-[1.5rem] overflow-hidden bg-gray-100 dark:bg-neutral-900 border border-gray-200/40 dark:border-neutral-800/40">
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#224297_1.5px,transparent_1.5px)] [background-size:16px_16px]" />
              <div className="absolute top-1/2 left-8 -translate-y-1/2 flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#224297] dark:bg-[#ffd900]" />
                <span className="text-xs font-black uppercase tracking-widest text-[#224297] dark:text-[#ffd900]">
                  Bengkel Wiguna Depok
                </span>
              </div>
            </div>
          </div>

          {/* Right Side: Blue Card */}
          <div className="lg:col-span-6 bg-[#224297] dark:bg-neutral-900 text-white rounded-[2.2rem] p-8 sm:p-10 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none" />

            <div className="relative z-10">
              <span className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#ffd900] mb-4">
                <Icon icon="solar:star-bold" className="w-4 h-4" />
                Tentang Bengkel Wiguna
              </span>
              <h2 className="text-3xl font-black tracking-tight uppercase leading-tight mb-6">
                Penyedia Layanan Perawatan Mobil Terpercaya Sejak 2010
              </h2>
              <div className="space-y-4 text-white/80 text-sm sm:text-base leading-relaxed font-medium">
                <p>
                  Kami hadir dengan komitmen kuat terhadap kualitas layanan, kejujuran, dan kepuasan pelanggan, menjadikan Bengkel Wiguna sebagai pilihan utama dalam segala kebutuhan perawatan dan perbaikan kendaraan Anda.
                </p>
                <p>
                  Setiap kendaraan yang masuk ke Bengkel Wiguna akan diperlakukan seperti milik sendiri—dengan perhatian pada detail, perawatan terbaik, dan komunikasi yang jelas kepada pelanggan.
                </p>
                <p>
                  Didukung oleh tim mekanik bersertifikasi dan berpengalaman, kami memahami betul bahwa setiap kendaraan memiliki kebutuhan unik. Setiap layanan kami didesain agar presisi, efisien, dan tepat guna.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* === 4. STATS COUNTER PANEL === */}
        <div className="border border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/50 rounded-3xl p-8 md:p-10 flex flex-col md:flex-row justify-around items-center gap-8 shadow-sm mb-20">
          <div className="text-center">
            <span className="block text-4xl lg:text-5xl font-black text-[#224297] dark:text-[#ffd900] tracking-tight mb-2">10.000+</span>
            <span className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">Mobil Dilayani</span>
          </div>
          <div className="w-[1px] h-12 bg-gray-200 dark:bg-neutral-800 hidden md:block" />
          <div className="text-center">
            <span className="block text-4xl lg:text-5xl font-black text-[#224297] dark:text-[#ffd900] tracking-tight mb-2">15+</span>
            <span className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">Tahun Pengalaman</span>
          </div>
          <div className="w-[1px] h-12 bg-gray-200 dark:bg-neutral-800 hidden md:block" />
          <div className="text-center">
            <span className="block text-4xl lg:text-5xl font-black text-[#224297] dark:text-[#ffd900] tracking-tight mb-2">100%</span>
            <span className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">Kepuasan Pelanggan</span>
          </div>
        </div>

        {/* === 5. WHY CHOOSE US === */}
        <div className="bg-gradient-to-br from-gray-50 to-white dark:from-neutral-900 dark:to-neutral-950 rounded-[2.5rem] p-8 sm:p-12 mb-16 border border-gray-100 dark:border-neutral-800">
          <div className="text-center mb-10">
            <h3 className="text-3xl sm:text-4xl font-black text-gray-900 dark:text-white uppercase tracking-tight mb-3">
              Kenapa Memilih Bengkel Wiguna?
            </h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Kepercayaan pelanggan dibangun melalui pelayanan yang ramah, hasil kerja yang konsisten, komunikasi yang jujur, serta komitmen untuk memberikan solusi terbaik.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChoose.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 p-4 bg-white dark:bg-neutral-800 rounded-2xl border border-gray-100 dark:border-neutral-700">
                <div className="w-10 h-10 rounded-xl bg-[#224297]/10 dark:bg-[#ffd900]/10 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-[#224297] dark:text-[#ffd900]" />
                </div>
                <p className="text-gray-700 dark:text-gray-300 text-sm font-medium leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* === 6. VISION & MISSION CARDS === */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Card 1: VISION */}
          <div className="bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 rounded-[2.2rem] p-8 sm:p-10 shadow-sm relative hover:-translate-y-1.5 transition-all duration-500">
            <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-[#224297]/15 flex items-center justify-center text-[#224297] dark:bg-[#ffd900]/15 dark:text-[#ffd900]">
              <Target className="w-5 h-5" />
            </div>

            <span className="inline-block text-xs font-black uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-2">
              Arah & Tujuan
            </span>
            <h3 className="text-3xl font-black text-gray-950 dark:text-white uppercase mb-6 tracking-tight">
              Visi Kami
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg leading-relaxed font-medium">
              {vision}
            </p>
          </div>

          {/* Card 2: MISSION */}
          <div className="bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 rounded-[2.2rem] p-8 sm:p-10 shadow-sm relative hover:-translate-y-1.5 transition-all duration-500">
            <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-[#224297]/15 flex items-center justify-center text-[#224297] dark:bg-[#ffd900]/15 dark:text-[#ffd900]">
              <ShieldCheck className="w-5 h-5" />
            </div>

            <span className="inline-block text-xs font-black uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-2">
              Prinsip Kerja
            </span>
            <h3 className="text-3xl font-black text-gray-950 dark:text-white uppercase mb-6 tracking-tight">
              Misi Kami
            </h3>

            <ul className="space-y-3.5 text-gray-600 dark:text-gray-400 text-sm sm:text-base font-medium">
              {missions.map((mission, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#224297] dark:bg-[#ffd900] mt-2 shrink-0" />
                  <span>{mission}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* === 7. CALL TO ACTION === */}
        <div className="bg-[#ffd900] rounded-[2.2rem] p-8 sm:p-12 text-center relative overflow-hidden shadow-sm">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#000_1px,transparent_0)] [background-size:24px_24px] pointer-events-none" />
          <h2 className="text-3xl sm:text-4xl font-black text-[#1a3567] uppercase mb-4 tracking-tight leading-none">
            Jadwalkan Waktu Kedatangan Anda
          </h2>
          <p className="text-[#1a3567]/80 text-sm sm:text-base font-bold max-w-2xl mx-auto mb-8 leading-relaxed">
            Konsultasikan keluhan kendaraan Anda dengan mekanik profesional kami secara gratis. Dapatkan penawaran jujur tanpa drama.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/6281717773888?text=Halo%20Bengkel%20Wiguna,%20saya%20ingin%20reservasi%20servis.%20(web)"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-[#224297] hover:bg-[#1a356d] text-white font-bold rounded-xl transition-all duration-300 shadow-md flex items-center gap-2"
            >
              Reservasi Servis <ArrowUpRight className="w-5 h-5" />
            </a>
            <Link
              href="/lokasi"
              className="px-8 py-4 bg-white hover:bg-gray-50 text-[#224297] font-bold rounded-xl transition-all duration-300 shadow-sm flex items-center gap-2"
            >
              <Icon icon="solar:map-point-linear" className="w-5 h-5" />
              Lihat Lokasi
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
