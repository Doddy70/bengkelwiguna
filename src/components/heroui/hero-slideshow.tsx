"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react";

export default function HeroSlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Slides data - Multiple images with same title/description
  const slides = [
    {
      image: "/images/hero/slider-1.jpg",
      title: "No Drama, No Bongkar-Bongkar, No Tipu-Tipu, No Tebak-Tebak",
      subtitle: "One Stop Service Profesional, jujur, terpercaya",
    },
    {
      image: "/images/hero/slider-2.jpg",
      title: "No Drama, No Bongkar-Bongkar, No Tipu-Tipu, No Tebak-Tebak",
      subtitle: "One Stop Service Profesional, jujur, terpercaya",
    },
    {
      image: "/images/hero/slider-4.jpg",
      title: "No Drama, No Bongkar-Bongkar, No Tipu-Tipu, No Tebak-Tebak",
      subtitle: "One Stop Service Profesional, jujur, terpercaya",
    },
    {
      image: "/images/hero/slider-5.jpg",
      title: "No Drama, No Bongkar-Bongkar, No Tipu-Tipu, No Tebak-Tebak",
      subtitle: "One Stop Service Profesional, jujur, terpercaya",
    },
    {
      image: "/images/hero/slider-6.jpg",
      title: "No Drama, No Bongkar-Bongkar, No Tipu-Tipu, No Tebak-Tebak",
      subtitle: "One Stop Service Profesional, jujur, terpercaya",
    },
  ];

  // Auto play slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 6000); // 6 seconds per slide
    return () => clearInterval(interval);
  }, [slides.length]);

  // Manual navigation
  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  const goToPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const currentSlide = slides[currentIndex];

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Menu items for the glassmorphism floating menu
  const menuItems = [
    { label: "Semua Layanan", href: "/services", icon: "solar:wrench-linear", desc: "Lihat seluruh layanan perbaikan mobil" },
    { label: "Promo Bulanan", href: "/promosi", icon: "solar:tag-linear", desc: "Penawaran dan diskon spesial bulan ini" },
    { label: "Paket Service", href: "/paket-service", icon: "solar:box-linear", desc: "Paket perawatan hemat untuk mobil Anda" },
    { label: "Layanan Spesialis", href: "/layanan-spesialis", icon: "solar:star-linear", desc: "Layanan spesialis dan profesional" },
    { label: "Tentang Kami", href: "/tentang-wiguna", icon: "solar:info-circle-linear", desc: "Pelajari lebih lanjut tentang Bengkel Wiguna" },
  ];

  return (
    <section className="w-full bg-white dark:bg-black p-2 sm:p-3 lg:p-4">
      {/* Boxed, rounded container matching the reference design */}
      <div className="relative w-full h-[70svh] lg:h-[75vh] min-h-[500px] lg:min-h-[650px] bg-neutral-900 overflow-hidden font-sans rounded-3xl lg:rounded-[2.5rem] shadow-2xl">

        {/* Background Slideshow */}
        <AnimatePresence mode="popLayout">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0 z-0"
          >
            <Image
              src={currentSlide.image}
              alt={currentSlide.title}
              fill
              className="object-cover"
              priority={currentIndex === 0}
              sizes="100vw"
              quality={90}
            />
            {/* Gradient overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/40" />
          </motion.div>
        </AnimatePresence>

        {/* Top Bar Navigation (Inside Hero) */}
        <div className="absolute top-0 left-0 right-0 z-40 px-6 sm:px-10 py-5 sm:py-6 flex justify-between items-center">
          {/* Logo - Smaller Size */}
          <div className="flex-1">
            <Link href="/">
              <Image
                src="/images/logo/logo-panjang-bengkelwiguna-cropped.png"
                alt="Bengkel Wiguna"
                width={100}
                height={32}
                className="h-6 sm:h-7 w-auto object-contain drop-shadow-md"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.parentElement?.insertAdjacentHTML('beforeend', '<span class="text-xl font-black text-white italic tracking-tighter">WIGUNA</span>');
                }}
              />
            </Link>
          </div>

          {/* Center Flyout Menu (Tailwind UI style) */}
          <div className="hidden lg:flex flex-1 justify-center relative z-50">
            <div 
              className="relative"
              onMouseEnter={() => setIsMenuOpen(true)}
              onMouseLeave={() => setIsMenuOpen(false)}
            >
              <button className="flex items-center gap-x-1 px-4 py-2 text-sm/6 font-semibold text-white hover:text-white/80 transition-colors focus:outline-none">
                <span>Menu Utama</span>
                <Icon icon="solar:alt-arrow-down-linear" className={`w-5 h-5 transition-transform duration-200 ${isMenuOpen ? 'rotate-180' : ''}`} />
              </button>
              
              <AnimatePresence>
                {isMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-1/2 mt-2 flex w-screen max-w-md -translate-x-1/2 px-4"
                  >
                    <div className="w-full flex-auto overflow-hidden rounded-3xl bg-white/10 backdrop-blur-3xl border border-white/20 text-sm/6 shadow-2xl">
                      <div className="p-4">
                        {menuItems.map((item, idx) => (
                          <div key={idx} className="group relative flex gap-x-6 rounded-2xl p-4 hover:bg-white/10 transition-colors">
                            <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-white/10 group-hover:bg-[#ffd900] transition-colors">
                              <Icon icon={item.icon} className="h-6 w-6 text-white group-hover:text-[#224297] transition-colors" />
                            </div>
                            <div>
                              <Link href={item.href} className="font-semibold text-white">
                                {item.label}
                                <span className="absolute inset-0" />
                              </Link>
                              <p className="mt-1 text-white/70 group-hover:text-white/90">{item.desc}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="grid grid-cols-2 divide-x divide-white/10 bg-white/5 border-t border-white/10">
                        <Link href="/services" className="flex items-center justify-center gap-x-2.5 p-3 font-semibold text-white hover:bg-white/10 transition-colors">
                          <Icon icon="solar:square-alt-arrow-right-linear" className="h-5 w-5 flex-none text-white/70" />
                          Lihat Semua
                        </Link>
                        <a href="https://wa.me/6287817773888" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-x-2.5 p-3 font-semibold text-white hover:bg-white/10 transition-colors">
                          <Icon icon="fa6-brands:whatsapp" className="h-5 w-5 flex-none text-white/70" />
                          Hubungi Kami
                        </a>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Chat Minna Button - Inline Single Line */}
          <div className="flex-1 flex justify-end">
            <Link
              href="https://wa.me/6281717773888?text=Halo%20Bengkel%20Wiguna,%20saya%20ingin%20tanya%20seputar%20servis%20mobil%20saya.%20(web)"
              target="_blank"
              className="inline-flex items-center gap-2 bg-[#ffd900] hover:bg-[#e6c300] text-black px-4 py-2 rounded-full font-bold text-xs sm:text-sm shadow-lg hover:scale-105 transition-all whitespace-nowrap"
            >
              <Icon icon="fa6-brands:whatsapp" className="w-4 h-4" />
              <span>Chat Minna</span>
            </Link>
          </div>
        </div>

        {/* Text Area - Single Title & Subtitle */}
        <div className="absolute top-1/2 -translate-y-1/2 left-0 z-20 px-6 sm:px-10 lg:px-20 w-full pointer-events-none">
          <div className="max-w-4xl pointer-events-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                {/* Main Title */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1] mb-4">
                  {currentSlide.title}
                </h1>

                {/* Subtitle */}
                <p className="text-base sm:text-lg md:text-xl text-white/90 font-medium">
                  {currentSlide.subtitle}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* CTA Buttons (Bottom Right) */}
        <div className="absolute bottom-0 left-0 right-0 z-20 px-6 sm:px-10 lg:px-20 pb-8 sm:pb-12 lg:pb-16 flex justify-start lg:justify-end pointer-events-none">
          <div className="flex flex-row flex-wrap gap-3 sm:gap-4 lg:mr-4 pointer-events-auto">
            <Link
              href="/services"
              className="group inline-flex items-center justify-between gap-3 sm:gap-6 px-5 sm:px-6 py-3 sm:py-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-medium hover:bg-white/20 transition-all w-auto"
            >
              <span className="text-sm sm:text-base">Semua Layanan</span>
              <div className="bg-white text-gray-900 rounded-full p-1 group-hover:rotate-45 transition-transform duration-300">
                <Icon icon="solar:arrow-right-up-linear" className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
            </Link>
            <a
              href="https://wa.me/6281717773888?text=Halo%20Bengkel%20Wiguna,%20saya%20ingin%20konsultasi%20seputar%20kendaraan%20saya"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-between gap-3 sm:gap-6 px-5 sm:px-6 py-3 sm:py-4 rounded-full bg-white text-gray-900 font-bold hover:bg-gray-100 transition-all w-auto shadow-lg"
            >
              <span className="text-sm sm:text-base">Konsultasi Gratis</span>
              <div className="bg-green-500 text-white rounded-full p-1 group-hover:scale-110 transition-transform duration-300">
                <Icon icon="fa6-brands:whatsapp" className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
            </a>
          </div>
        </div>

        {/* Slide Navigation - Bottom Center */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToSlide(idx)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                idx === currentIndex
                  ? 'w-8 bg-[#ffd900]'
                  : 'bg-white/30 hover:bg-white/50'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        {/* Arrow Navigation - Left/Right */}
        <button
          onClick={goToPrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white flex items-center justify-center transition-all duration-300 hover:scale-110"
          aria-label="Previous slide"
        >
          <Icon icon="solar:arrow-left-linear" className="w-5 h-5" />
        </button>
        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white flex items-center justify-center transition-all duration-300 hover:scale-110"
          aria-label="Next slide"
        >
          <Icon icon="solar:arrow-right-linear" className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
}
