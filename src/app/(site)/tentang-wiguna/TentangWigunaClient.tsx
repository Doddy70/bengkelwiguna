"use client";

/**
 * Tentang Wiguna - About Us Page
 * Optimized for Core Web Vitals (LCP, CLS, INP)
 */

import React, { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react";
import {
  ArrowUpRight,
  Target,
  ShieldCheck,
  Award,
  Users,
  Clock,
  ThumbsUp,
  CheckCircle2,
  Wrench,
  Phone,
  MapPin,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";

// Gallery images from WordPress backend - optimized for lazy loading
const galleryImages = [
  {
    src: "https://backend.bengkelwiguna.com/wp-content/uploads/2026/07/header.jpeg",
    alt: "Bengkel Wiguna",
    title: "Bengkel Wiguna",
    desc: "Layanan servis mobil profesional di Depok",
  },
  {
    src: "https://backend.bengkelwiguna.com/wp-content/uploads/2026/07/Shaking-machine-mobil.jpg",
    alt: "Shaking Machine Service",
    title: "Shaking Machine",
    desc: "Mesin penggetar untuk cleaning parts",
  },
  {
    src: "https://backend.bengkelwiguna.com/wp-content/uploads/2026/07/super-tune-up-mobil-.jpg",
    alt: "Super Tune Up Service",
    title: "Super Tune Up",
    desc: "Perawatan mesin komprehensif",
  },
  {
    src: "https://backend.bengkelwiguna.com/wp-content/uploads/2026/07/Kyoto-Shaking-Machine.jpg",
    alt: "Kyoto Shaking Machine",
    title: "Kyoto Shaking",
    desc: "Teknologi shaking machine canggih",
  },
  {
    src: "https://backend.bengkelwiguna.com/wp-content/uploads/2026/07/Carbon-Cleaning-Mesin-Mobil.jpg",
    alt: "Carbon Cleaning Service",
    title: "Carbon Cleaning",
    desc: "Pembersihan karbon mesin",
  },
  {
    src: "https://backend.bengkelwiguna.com/wp-content/uploads/2026/07/Service-Semi-Overhaul.jpg",
    alt: "Semi Overhaul Service",
    title: "Semi Overhaul",
    desc: "Perawatan mesin mendetail",
  },
  {
    src: "https://backend.bengkelwiguna.com/wp-content/uploads/2026/07/Servis-Radiator-dan-Coolant.jpg",
    alt: "Radiator Service",
    title: "Servis Radiator",
    desc: "Perawatan sistem pendingin",
  },
  {
    src: "https://backend.bengkelwiguna.com/wp-content/uploads/2026/07/Cek-suspensi-Kyoto.jpg",
    alt: "Suspension Check",
    title: "Cek Suspensi",
    desc: "Inspeksi kaki-kaki mobil",
  },
  {
    src: "https://backend.bengkelwiguna.com/wp-content/uploads/2026/06/2026_06_13_10_43_55_IMG_1042.jpg",
    alt: "Workshop Bengkel",
    title: "Workshop Bengkel",
    desc: "Fasilitas lengkap untuk servis mobil",
  },
  {
    src: "https://backend.bengkelwiguna.com/wp-content/uploads/2026/06/2026_06_09_14_37_28_IMG_0552.jpg",
    alt: "Mekanik Professional",
    title: "Mekanik Professional",
    desc: "Tim teknisi berpengalaman",
  },
  {
    src: "https://backend.bengkelwiguna.com/wp-content/uploads/2026/06/2026_06_09_12_01_35_IMG_0551.jpg",
    alt: "Diagnostic Tools",
    title: "Diagnostic Tools",
    desc: "Alat diagnosis modern",
  },
  {
    src: "https://backend.bengkelwiguna.com/wp-content/uploads/2026/06/2026_06_01_12_24_32_IMG_9653.jpg",
    alt: "Servis Berkala",
    title: "Servis Berkala",
    desc: "Perawatan rutin berkala",
  },
  {
    src: "https://backend.bengkelwiguna.com/wp-content/uploads/2026/07/Coolant-Changer-Depok.jpg",
    alt: "Coolant Change",
    title: "Ganti Coolant",
    desc: "Perawatan cairan pendingin",
  },
  {
    src: "https://backend.bengkelwiguna.com/wp-content/uploads/2026/07/Reset-Radiator-Depok.jpg",
    alt: "Reset Radiator",
    title: "Reset Radiator",
    desc: "Reset sistem radiator",
  },
  {
    src: "https://backend.bengkelwiguna.com/wp-content/uploads/2026/07/Caron-Detoks.jpg",
    alt: "Carbon Detoks",
    title: "Carbon Detoks",
    desc: "Pembersihan karbon mesin",
  },
  {
    src: "https://backend.bengkelwiguna.com/wp-content/uploads/2026/07/Tanda-Kelistrikan-Mobil-Bermasalah.jpg",
    alt: "Kelistrikan Mobil",
    title: "Servis Kelistrikan",
    desc: "Perbaikan sistem kelistrikan",
  },
];

export default function TentangWigunaClient() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [preloadedImages, setPreloadedImages] = useState<Set<number>>(new Set([0, 1, 2]));
  const carouselRef = useRef<HTMLDivElement>(null);

  // Optimized slide navigation
  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % galleryImages.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  }, []);

  // Auto-play carousel with pause on hover
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [isPaused, nextSlide]);

  // Preload adjacent images for better LCP
  useEffect(() => {
    const newPreloaded = new Set<number>();

    // Only preload if not already done
    if (preloadedImages.size === 0) {
      const nextIndex = (currentSlide + 1) % galleryImages.length;
      const prevIndex = (currentSlide - 1 + galleryImages.length) % galleryImages.length;

      [currentSlide, nextIndex, prevIndex].forEach((idx) => {
        const img = new window.Image();
        img.src = galleryImages[idx].src;
        newPreloaded.add(idx);
      });

      setPreloadedImages(newPreloaded);
    }
  }, [currentSlide]); // eslint-disable-line react-hooks/exhaustive-deps

  // Keyboard navigation for accessibility
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prevSlide();
      if (e.key === "ArrowRight") nextSlide();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide, prevSlide]);

  return (
    <div className="relative font-sans min-h-screen bg-white dark:bg-neutral-950">

      {/* ═══════════════════════════════════════════════════════════ */}
      {/* SECTION 1: HERO - Optimized LCP */}
      {/* ═══════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden" style={{ minHeight: "520px" }}>
        {/* Background Image - Preload priority for LCP */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero-desktop.webp"
            alt="Bengkel Wiguna - Servis Mobil Terpercaya di Depok"
            fill
            className="object-cover"
            priority
            sizes="100vw"
            quality={85}
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#224297]/90 via-[#224297]/80 to-[#1a3a7a]/90" aria-hidden="true" />
        </div>

        <div className="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8">
            <Icon icon="solar:home-2-linear" width={18} />
            <span>/</span>
            <span className="text-white">Tentang Kami</span>
          </nav>

          {/* Hero Content */}
          <div className="max-w-3xl">
            <p className="inline-flex items-center gap-2 text-sm font-semibold text-[#ffd900] uppercase tracking-wider mb-4">
              <span className="w-8 h-0.5 bg-[#ffd900]" />
              Bengkel Wiguna
            </p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[0.95] mb-6">
              Tentang
              <span className="block text-[#ffd900]">Kami</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/80 leading-relaxed max-w-2xl">
              Lebih dari <span className="text-[#ffd900] font-semibold">30 tahun</span> memberikan layanan servis mobil terpercaya di Depok. Komitmen kami pada kualitas dan transparansi membuat ribuan pemilik kendaraan percaya kepada kami.
            </p>
          </div>

          {/* Quick Info Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 border border-white/10">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-[#224297] flex items-center justify-center">
                  <Clock className="w-5 h-5 text-white" />
                </div>
                <p className="text-sm text-white/60">Jam Operasional</p>
              </div>
              <p className="text-white font-semibold">Senin - Sabtu: 08:00 - 17:00</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 border border-white/10">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-[#224297] flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <p className="text-sm text-white/60">Lokasi</p>
              </div>
              <p className="text-white font-semibold">Jl. Margonda No.268, Depok</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 border border-white/10 sm:col-span-2 lg:col-span-1">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-[#224297] flex items-center justify-center">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <p className="text-sm text-white/60">WhatsApp</p>
              </div>
              <p className="text-white font-semibold">0878-1777-3888</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════ */}
      {/* SECTION 2: STATS */}
      {/* ═══════════════════════════════════════════════════════════ */}
      <section className="py-16 bg-white dark:bg-neutral-900">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-[#224297]/10 dark:bg-[#224297]/20 flex items-center justify-center mb-4">
                <Users className="w-8 h-8 text-[#224297]" />
              </div>
              <p className="text-4xl lg:text-5xl font-black text-[#224297] dark:text-[#224297] mb-2">10.000+</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wide">Mobil Dilayani</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-[#224297]/10 dark:bg-[#224297]/20 flex items-center justify-center mb-4">
                <Award className="w-8 h-8 text-[#224297]" />
              </div>
              <p className="text-4xl lg:text-5xl font-black text-[#224297] dark:text-[#224297] mb-2">30+</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wide">Tahun Pengalaman</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-[#224297]/10 dark:bg-[#224297]/20 flex items-center justify-center mb-4">
                <ThumbsUp className="w-8 h-8 text-[#224297]" />
              </div>
              <p className="text-4xl lg:text-5xl font-black text-[#224297] dark:text-[#224297] mb-2">100%</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wide">Kepuasan Pelanggan</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-[#224297]/10 dark:bg-[#224297]/20 flex items-center justify-center mb-4">
                <Wrench className="w-8 h-8 text-[#224297]" />
              </div>
              <p className="text-4xl lg:text-5xl font-black text-[#224297] dark:text-[#224297] mb-2">15+</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wide">Layanan Servis</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════ */}
      {/* SECTION 3: STORY */}
      {/* ═══════════════════════════════════════════════════════════ */}
      <section className="py-16 lg:py-24 bg-gray-50 dark:bg-neutral-950">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image Side - Lazy loaded for CLS */}
            <div className="relative">
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src="https://backend.bengkelwiguna.com/wp-content/uploads/2025/08/jadul-img.png"
                  alt="Tim Bengkel Wiguna - Mekanik Berpengalaman"
                  fill
                  className="object-cover"
                  loading="lazy"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  
                  
                />
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-6 bg-[#ffd900] rounded-2xl p-6 shadow-xl">
                <p className="text-4xl font-black text-[#224297]">1990</p>
                <p className="text-xs font-bold text-[#224297]/70">BERDIRI SEJAK</p>
              </div>

              {/* Decorative */}
              <div className="absolute -top-4 -left-4 w-24 h-24 border-4 border-[#224297]/20 rounded-full" />
            </div>

            {/* Content Side */}
            <div className="space-y-6">
              <div>
                <p className="inline-flex items-center gap-2 text-sm font-semibold text-[#224297] uppercase tracking-wider mb-4">
                  <span className="w-8 h-0.5 bg-[#ffd900]" />
                  Cerita Kami
                </p>
                <h2 className="text-3xl lg:text-4xl font-black text-gray-900 dark:text-white tracking-tight">
                  Mitra Terpercaya untuk Perawatan Mobil Anda
                </h2>
              </div>

              <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed">
                <p>
                  Bengkel Wiguna hadir untuk memberikan ketenangan pikiran bagi setiap pemilik kendaraan. Dengan pengalaman lebih dari tiga dekade, kami memahami bahwa kepercayaan adalah fondasi utama dalam bisnis perawatan mobil.
                </p>
                <p>
                  Setiap kendaraan yang masuk ke bengkel kami ditangani dengan penuh dedikasi dan profesionalisme. Tim mekanik kami yang berpengalaman siap memberikan diagnosa akurat dan solusi terbaik untuk menjaga performa mobil Anda.
                </p>
                <p>
                  Komitmen kami terhadap transparansi berarti Anda selalu tahu persis apa yang sedang dikerjakan pada kendaraan Anda — tanpa biaya tersembunyi, tanpa kejutan tak menyenangkan.
                </p>
              </div>

              {/* Quote */}
              <div className="bg-[#224297]/5 dark:bg-[#224297]/10 rounded-2xl p-6 border-l-4 border-[#ffd900]">
                <p className="text-gray-700 dark:text-gray-300 italic font-medium">
                  "Kejujuran adalah landasan utama dari servis yang berkualitas."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════ */}
      {/* SECTION 4: VISION & MISSION */}
      {/* ═══════════════════════════════════════════════════════════ */}
      <section className="py-16 lg:py-24 bg-white dark:bg-neutral-900">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-[#224297] uppercase tracking-wider mb-4">
              <span className="w-8 h-0.5 bg-[#ffd900]" />
              Tujuan Kami
              <span className="w-8 h-0.5 bg-[#ffd900]" />
            </p>
            <h2 className="text-3xl lg:text-4xl font-black text-gray-900 dark:text-white tracking-tight">
              Visi & Misi
            </h2>
          </div>

          {/* Vision & Mission Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Vision Card */}
            <div className="relative rounded-3xl overflow-hidden min-h-[400px] group">
              {/* Background Image - Lazy loaded */}
              <Image
                src="https://backend.bengkelwiguna.com/wp-content/uploads/2026/07/Shaking-machine-mobil.jpg"
                alt="Visi Bengkel Wiguna - Standar Industri Servis Mobil"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/40" />

              {/* Content */}
              <div className="relative z-10 p-8 lg:p-10 h-full flex flex-col justify-end">
                <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-6">
                  <Target className="w-7 h-7 text-white" />
                </div>

                <p className="text-xs font-bold uppercase tracking-widest text-white/80 mb-3">Visi Kami</p>
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 leading-tight">
                  Menjadi Bengkel Pilihan Utama di Indonesia
                </h3>
                <p className="text-white/80 leading-relaxed">
                  Kami bertekad menjadi standar industri dalam layanan perawatan mobil — mengutamakan transparansi, kualitas, dan kepuasan pelanggan di setiap aspek pekerjaan kami.
                </p>
              </div>
            </div>

            {/* Mission Card */}
            <div className="relative rounded-3xl overflow-hidden min-h-[400px] group">
              {/* Background Image - Lazy loaded */}
              <Image
                src="https://backend.bengkelwiguna.com/wp-content/uploads/2026/07/super-tune-up-mobil-.jpg"
                alt="Misi Bengkel Wiguna - Perawatan Mesin Komprehensif"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/40" />

              {/* Content */}
              <div className="relative z-10 p-8 lg:p-10 h-full flex flex-col justify-end">
                <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-6">
                  <ShieldCheck className="w-7 h-7 text-white" />
                </div>

                <p className="text-xs font-bold uppercase tracking-widest text-white/80 mb-3">Misi Kami</p>
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 leading-tight">
                  Prinsip Kerja Kami
                </h3>

                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-white shrink-0 mt-0.5" />
                    <span className="text-white/80">Memberikan diagnosa akurat dan solusi tepat untuk setiap kendaraan.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-white shrink-0 mt-0.5" />
                    <span className="text-white/80">Menjaga transparansi penuh dalam setiap proses dan biaya.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-white shrink-0 mt-0.5" />
                    <span className="text-white/80">Terus meningkatkan kompetensi teknisi melalui pelatihan berkala.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════ */}
      {/* SECTION 5: WHY CHOOSE US */}
      {/* ═══════════════════════════════════════════════════════════ */}
      <section className="py-16 lg:py-24 bg-gray-50 dark:bg-neutral-950">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Content Side */}
            <div className="space-y-6">
              <div>
                <p className="inline-flex items-center gap-2 text-sm font-semibold text-[#224297] uppercase tracking-wider mb-4">
                  <span className="w-8 h-0.5 bg-[#ffd900]" />
                  Keunggulan Kami
                </p>
                <h2 className="text-3xl lg:text-4xl font-black text-gray-900 dark:text-white tracking-tight">
                  Mengapa Memilih Bengkel Wiguna?
                </h2>
              </div>

              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Ada banyak alasan mengapa ribuan pemilik kendaraan di Depok dan sekitarnya mempercayakan perawatan mobil mereka kepada kami.
              </p>

              {/* Benefits List */}
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-white dark:bg-neutral-800 rounded-xl shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-green-100 dark:bg-green-900/30 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white mb-1">Tanpa Biaya Tersembunyi</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Estimasi biaya diberikan di awal. Tidak ada biaya tambahan tanpa persetujuan Anda.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-white dark:bg-neutral-800 rounded-xl shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-green-100 dark:bg-green-900/30 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white mb-1">Diagnosa Transparan</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Anda akan melihat sendiri kondisi kendaraan melalui foto dan video.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-white dark:bg-neutral-800 rounded-xl shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-green-100 dark:bg-green-900/30 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white mb-1">Garansi Servis</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Setiap servis dilengkapi garansi untuk ketenangan pikiran Anda.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Visual Side - Location Card */}
            <div className="relative">
              <div className="bg-gradient-to-br from-[#224297] to-[#1a3a7a] dark:from-[#1a1a2e] dark:to-[#0f0f1a] rounded-3xl p-8 lg:p-10 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />

                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center mb-6">
                    <MapPin className="w-7 h-7 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold mb-4">Lokasi Strategis</h3>
                  <p className="text-white/80 mb-6">
                    Terletak di Jl. Margonda No.268, Beji, Kota Depok — mudah diakses dari berbagai arah.
                  </p>

                  <div className="space-y-3 text-sm mb-6">
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-white" />
                      <span>Senin - Sabtu: 08:00 - 17:00</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-white" />
                      <span>0878-1777-3888</span>
                    </div>
                  </div>

                  <a
                    href="https://maps.app.goo.gl/J3s5ZhpwFttGFeeUA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 bg-white text-[#224297] font-bold rounded-xl hover:bg-gray-100 transition-colors"
                  >
                    <Icon icon="solar:navigation-bold" width={18} />
                    Buka di Google Maps
                    <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-4 -left-4 bg-[#ffd900] rounded-xl px-5 py-3 shadow-lg">
                <p className="text-sm font-bold text-[#224297]">Gratis Konsultasi</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════ */}
      {/* SECTION 6: IMAGE CAROUSEL SLIDER - FULL WIDTH */}
      {/* ═══════════════════════════════════════════════════════════ */}
      <section className="py-16 lg:py-24 bg-gray-50 dark:bg-neutral-950">
        {/* Section Header */}
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <div className="text-center max-w-2xl mx-auto">
            <p className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-[#224297] uppercase tracking-wider mb-4">
              <span className="w-8 h-0.5 bg-[#224297]" />
              Bengkel Wiguna
              <span className="w-8 h-0.5 bg-[#224297]" />
            </p>
            <h2 className="text-3xl lg:text-4xl font-black text-gray-900 dark:text-white tracking-tight mb-4">
              Bengkel Terpercaya di Kota Depok
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Lebih dari 30 tahun pengalaman merawat ribuan kendaraan dengan layanan jujur, transparan, dan profesional
            </p>
          </div>
        </div>

        {/* Full Width Carousel */}
        <div className="relative" ref={carouselRef}>
          {/* Main Slide - Full Width */}
          <div
            className="relative aspect-[18/9] md:aspect-[21/9] lg:aspect-[24/9] overflow-hidden bg-neutral-900"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-700 ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                role="group"
                aria-roledescription="slide"
                aria-label={`${index + 1} dari ${galleryImages.length}: ${image.title}`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  priority={index < 3}
                  loading={index < 3 ? "eager" : "lazy"}
                  sizes="100vw"
                  quality={85}
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/20" />

                {/* Caption */}
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 lg:p-16">
                  <div className="max-w-screen-xl mx-auto">
                    <h3 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-3">{image.title}</h3>
                    <p className="text-white/80 text-base md:text-xl">{image.desc}</p>
                  </div>
                </div>
              </div>
            ))}

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-14 h-14 md:w-16 md:h-16 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-sm flex items-center justify-center text-white transition-all z-20"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-7 h-7 md:w-8 md:h-8" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-14 h-14 md:w-16 md:h-16 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-sm flex items-center justify-center text-white transition-all z-20"
              aria-label="Next slide"
            >
              <ChevronRight className="w-7 h-7 md:w-8 md:h-8" />
            </button>

            {/* Progress Dots */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
              {galleryImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-white w-8' : 'bg-white/40 hover:bg-white/60'}`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Slide Counter */}
            <div className="absolute bottom-4 right-4 md:bottom-6 md:right-8 px-4 py-2 bg-black/50 backdrop-blur-sm rounded-full z-20">
              <span className="text-white text-sm md:text-base font-medium">
                {currentSlide + 1} / {galleryImages.length}
              </span>
            </div>
          </div>
        </div>

        {/* CTA Below Carousel */}
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
          <div className="text-center">
            <h3 className="text-2xl lg:text-3xl font-black text-gray-900 dark:text-white mb-4">
              Ingin Servis Mobil Anda?
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-xl mx-auto">
              Hubungi kami sekarang untuk konsultasi gratis dengan mekanik profesional kami
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://wa.me/6287817773888"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-3 bg-[#224297] hover:bg-[#1a3567] text-white font-bold rounded-xl transition-all duration-300 shadow-lg shadow-[#224297]/25"
              >
                <Icon icon="solar:chat-circle-bold" width={20} />
                Hubungi WhatsApp
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 px-6 py-3 bg-white dark:bg-neutral-800 hover:bg-gray-50 dark:hover:bg-neutral-700 text-[#224297] dark:text-white font-bold rounded-xl transition-all duration-300 border border-gray-200 dark:border-neutral-700"
              >
                <Icon icon="solar:mail-bold" width={20} />
                Kirim Pesan
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
