"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ArrowDown, Star, Target, Award, ShieldCheck } from "lucide-react";

export default function TentangWigunaPage() {
  return (
    <div className="bg-[#fcfcfc] dark:bg-neutral-950 font-dm min-h-screen pt-8 lg:pt-12 pb-20">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* === 1. HEADER TITLE & SUBTITLE === */}
        <div className="grid lg:grid-cols-12 grid-cols-1 gap-6 mb-12 items-end">
          <div className="lg:col-span-8">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-gray-900 dark:text-white leading-[1.1] tracking-tight uppercase">
              Cerita, Visi, <br />dan Nilai Kami
            </h1>
          </div>
          <div className="lg:col-span-4">
            <p className="text-gray-500 dark:text-gray-400 text-base font-medium leading-relaxed lg:pb-2">
              Pelajari komitmen kami terhadap kualitas pelayanan, transparansi diagnosa, dan dedikasi menjaga performa kendaraan Anda.
            </p>
          </div>
        </div>

        {/* === 2. HERO BANNER IMAGE (WITH ORGANIC CURVES) === */}
        <div className="relative w-full h-[260px] sm:h-[380px] md:h-[440px] rounded-[2.5rem] overflow-hidden mb-16 shadow-md group">
          <Image
            src="/images/hero-desktop.webp"
            alt="Mekanik Bengkel Wiguna sedang bekerja"
            fill
            className="object-cover transition-transform duration-1000 group-hover:scale-102"
            priority
            sizes="100vw"
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors duration-500" />
          
          {/* Floating Action Button (Arrow Down) */}
          <div className="absolute bottom-6 right-6 z-10">
            <a 
              href="#about-details"
              className="w-16 h-16 rounded-full bg-[#00d7c4] hover:bg-[#00bdae] text-white flex items-center justify-center shadow-lg hover:scale-105 transition-all duration-300"
              aria-label="Scroll down to details"
            >
              <ArrowDown className="w-6 h-6 animate-bounce" />
            </a>
          </div>
        </div>

        {/* === 3. ABOUT CONTENT ROW === */}
        <div id="about-details" className="grid lg:grid-cols-12 grid-cols-1 gap-12 lg:gap-16 items-start mb-16 scroll-mt-28">
          {/* Left Side: Blockquote & Decorative Pattern */}
          <div className="lg:col-span-6 flex flex-col justify-between h-full">
            <div>
              <span className="text-[120px] leading-[0.3] text-gray-200 dark:text-neutral-800 font-serif select-none block mb-6">
                “
              </span>
              <p className="text-gray-700 dark:text-gray-300 text-2xl font-bold leading-relaxed mb-8 italic tracking-tight pr-4">
                Tim mekanik dan support kami bekerja keras setiap hari untuk memberikan rasa aman kepada pemilik mobil melalui diagnosa yang akurat, transparan, tanpa tebak-tebakan, dan tanpa biaya tersembunyi.
              </p>
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

          {/* Right Side: The Blue Card (Philippines Style Contrast) */}
          <div className="lg:col-span-6 bg-[#224297] dark:bg-neutral-900 text-white rounded-[2.2rem] p-8 sm:p-10 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none" />
            
            <div className="relative z-10">
              <span className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#ffd900] mb-4">
                Tentang Bengkel Wiguna
              </span>
              <h2 className="text-3xl font-black tracking-tight uppercase leading-tight mb-6">
                Penyedia Layanan Perawatan Mobil Terbaik Sejak 1990
              </h2>
              <div className="space-y-4 text-white/80 text-sm sm:text-base leading-relaxed font-medium">
                <p>
                  Bengkel Wiguna adalah penyedia layanan servis mobil terpercaya yang telah membantu ribuan pemilik kendaraan di Depok dan sekitarnya merawat mobil mereka agar tetap andal dan aman di jalan.
                </p>
                <p>
                  Kami meyakini bahwa kejujuran adalah landasan utama dari servis yang berkualitas. Itulah mengapa kami selalu memberikan laporan diagnosa yang akurat, transparan, dan tidak pernah melakukan pembongkaran tanpa persetujuan Anda sebelumnya.
                </p>
                <p>
                  Didukung peralatan diagnosis modern digital dan mekanik berpengalaman, kami berkomitmen untuk memberikan solusi pemeliharaan menyeluruh dengan standar pengerjaan yang tinggi.
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
            <span className="block text-4xl lg:text-5xl font-black text-[#224297] dark:text-[#ffd900] tracking-tight mb-2">30+</span>
            <span className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">Tahun Pengalaman</span>
          </div>
          <div className="w-[1px] h-12 bg-gray-200 dark:bg-neutral-800 hidden md:block" />
          <div className="text-center">
            <span className="block text-4xl lg:text-5xl font-black text-[#224297] dark:text-[#ffd900] tracking-tight mb-2">100%</span>
            <span className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">Kepuasan Pelanggan</span>
          </div>
        </div>

        {/* === 5. VISION & MISSION CARDS === */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Card 1: VISION */}
          <div className="bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-900 rounded-[2.2rem] p-8 sm:p-10 shadow-sm relative hover:-translate-y-1.5 transition-all duration-500">
            <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-[#00d7c4]/15 flex items-center justify-center text-[#00d7c4]">
              <Target className="w-5 h-5" />
            </div>
            
            <span className="inline-block text-xs font-black uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-2">
              Arah & Tujuan
            </span>
            <h3 className="text-3xl font-black text-gray-950 dark:text-white uppercase mb-6 tracking-tight">
              Visi Kami
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg leading-relaxed font-medium">
              Menjadi bengkel mobil terpercaya di Indonesia dengan layanan transparan, profesional, dan mengutamakan kepuasan pelanggan.
            </p>
          </div>

          {/* Card 2: MISSION */}
          <div className="bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-900 rounded-[2.2rem] p-8 sm:p-10 shadow-sm relative hover:-translate-y-1.5 transition-all duration-500">
            <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-[#00d7c4]/15 flex items-center justify-center text-[#00d7c4]">
              <ShieldCheck className="w-5 h-5" />
            </div>
            
            <span className="inline-block text-xs font-black uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-2">
              Prinsip Kerja
            </span>
            <h3 className="text-3xl font-black text-gray-950 dark:text-white uppercase mb-6 tracking-tight">
              Misi Kami
            </h3>
            
            <ul className="space-y-3.5 text-gray-600 dark:text-gray-400 text-sm sm:text-base font-medium">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-[#224297] dark:bg-[#ffd900] mt-2 shrink-0" />
                <span>Menyajikan solusi perawatan yang jujur, akurat, dan dapat dipertanggungjawabkan.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-[#224297] dark:bg-[#ffd900] mt-2 shrink-0" />
                <span>Memanfaatkan teknologi diagnostik terkini demi kepresisian servis kendaran.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-[#224297] dark:bg-[#ffd900] mt-2 shrink-0" />
                <span>Meningkatkan terus kompetensi teknisi melalui pelatihan berkala standar industri.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-[#224297] dark:bg-[#ffd900] mt-2 shrink-0" />
                <span>Menghadirkan kenyamanan dan ketenangan pikiran bagi setiap pemilik mobil.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* === 6. CALL TO ACTION === */}
        <div className="bg-[#ffd900] rounded-[2.2rem] p-8 sm:p-12 text-center relative overflow-hidden shadow-sm">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#000_1px,transparent_0)] [background-size:24px_24px] pointer-events-none" />
          <h2 className="text-3xl sm:text-4xl font-black text-[#1a3567] uppercase mb-4 tracking-tight leading-none">
            Siap Menjaga Performa Mobil Anda?
          </h2>
          <p className="text-[#1a3567]/80 text-sm sm:text-base font-bold max-w-2xl mx-auto mb-8 leading-relaxed">
            Konsultasikan keluhan kendaraan Anda dengan mekanik profesional kami secara gratis. Dapatkan penawaran jujur tanpa drama.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="https://wa.me/6287817773888" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-4 bg-[#224297] hover:bg-[#1a3567] text-white font-bold rounded-xl transition-all duration-300 shadow-md flex items-center gap-2"
            >
              Hubungi via WhatsApp <ArrowUpRight className="w-5 h-5" />
            </a>
            <Link 
              href="/contact" 
              className="px-8 py-4 bg-white hover:bg-gray-50 text-[#224297] font-bold rounded-xl transition-all duration-300 shadow-sm"
            >
              Kirim Pesan Online
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}