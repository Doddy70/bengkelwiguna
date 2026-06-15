"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react";

export default function HeroSlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto play - single static slide
  useEffect(() => {
    const totalSlides = 1; // Single static image
    if (totalSlides <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalSlides);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Static image and content
  const image = "/images/hero/slider-1.jpg";
  const title = "No Drama, No Bongkar-Bongkar, No Tipu-Tipu, No Tebak-Tebak";
  const subtitle = "One Stop Service Profesional, jujur, terpercaya";

  // Menu items for the glassmorphism floating menu
  const menuItems = [
    { label: "Semua Layanan", href: "/services" },
    { label: "Promo Bulanan", href: "/promosi" },
    { label: "Paket Service", href: "/paket-service" },
    { label: "Layanan Spesialis", href: "/layanan-spesialis" },
    { label: "Tentang Kami", href: "/tentang-wiguna" },
  ];

  return (
    <section className="w-full bg-white dark:bg-black p-2 sm:p-3 lg:p-4">
      {/* Boxed, rounded container matching the reference design */}
      <div className="relative w-full h-[70svh] lg:h-[75vh] min-h-[500px] lg:min-h-[650px] bg-neutral-900 overflow-hidden font-sans rounded-3xl lg:rounded-[2.5rem] shadow-2xl">

        {/* Background Image */}
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
              src={image}
              alt={title}
              fill
              className="object-cover"
              priority
              sizes="100vw"
              quality={90}
            />
            {/* Gradient overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/40" />
          </motion.div>
        </AnimatePresence>

        {/* Top Bar Navigation (Inside Hero) */}
        <div className="absolute top-0 left-0 right-0 z-20 px-6 sm:px-10 py-5 sm:py-6 flex justify-between items-center">
          {/* Logo - Smaller Size */}
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

          {/* Chat Minna Button - Inline Single Line */}
          <Link
            href="https://wa.me/6287817773888?text=halo%20minna,%20saya%20ingin%20tanya%20seputar%20servis%20mobil%20saya%20di%20bengkel%20wiguna.%20(web)"
            target="_blank"
            className="inline-flex items-center gap-2 bg-[#ffd900] hover:bg-[#e6c300] text-black px-4 py-2 rounded-full font-bold text-xs sm:text-sm shadow-lg hover:scale-105 transition-all whitespace-nowrap"
          >
            <Icon icon="fa6-brands:whatsapp" className="w-4 h-4" />
            <span>Chat Minna</span>
          </Link>
        </div>

        {/* Floating Glass Navigation (Right side) */}
        <div className="hidden lg:block absolute right-10 top-1/2 -translate-y-1/2 z-30 w-64">
          <div className="backdrop-blur-2xl bg-white/5 border border-white/10 rounded-3xl p-6 shadow-2xl flex flex-col gap-4">
            <div className="flex justify-between items-center pb-2 border-b border-white/10">
              <span className="text-white font-bold text-lg">Menu Utama</span>
              <Icon icon="solar:arrow-right-up-linear" className="text-white/50 text-xl" />
            </div>
            <nav className="flex flex-col gap-3 mt-2">
              {menuItems.map((item, idx) => (
                <Link
                  key={idx}
                  href={item.href}
                  className="text-white/70 hover:text-white hover:translate-x-1 font-medium text-lg transition-all duration-300"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
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
                  {title}
                </h1>

                {/* Subtitle */}
                <p className="text-base sm:text-lg md:text-xl text-white/90 font-medium">
                  {subtitle}
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
              href="https://wa.me/6287817773888?text=halo%20minna,%20saya%20ingin%20konsultasi%20seputar%20kendaraan%20saya"
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
      </div>
    </section>
  );
}
