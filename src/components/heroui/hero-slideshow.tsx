"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react";
import { Service } from "@/types/wordpress";

interface HeroSlideshowProps {
  servicesData: Service[];
}

export default function HeroSlideshow({ servicesData = [] }: HeroSlideshowProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto play
  useEffect(() => {
    if (servicesData.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % servicesData.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [servicesData.length]);

  if (!servicesData || servicesData.length === 0) return null;

  // Custom static images requested by the user
  const customImages = [
    "/images/hero/slider1.jpg",
    "/images/hero/Wiguna-New1.jpg",
    "/images/hero/New_wiguna2.jpg",
    "/images/hero/new_wiguna3.jpg",
    "/images/hero/slider6.jpg"
  ];

  const currentService = servicesData[currentIndex % servicesData.length];
  const title = typeof currentService.title === 'string' ? currentService.title : currentService.title?.rendered || 'Layanan Profesional';
  // Override the dynamic API image with our custom local images
  const image = customImages[currentIndex % customImages.length];

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
      <div className="relative w-full h-[90svh] lg:h-[92vh] min-h-[700px] lg:min-h-[820px] bg-neutral-900 overflow-hidden font-sans rounded-3xl lg:rounded-[2.5rem] shadow-2xl">
        
        {/* Background Images Crossfade */}
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
            {/* Subtle gradient overlay to ensure text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30" />
          </motion.div>
        </AnimatePresence>

        {/* Top Bar Navigation (Inside Hero, assuming global Header is hidden on top) */}
        <div className="absolute top-0 left-0 right-0 z-20 px-6 sm:px-10 py-6 sm:py-8 flex justify-between items-center">
          {/* Logo */}
          <Link href="/">
            <Image
              src="/images/logo/logo-panjang-bengkelwiguna-cropped.png"
              alt="Bengkel Wiguna"
              width={130}
              height={40}
              className="h-7 sm:h-9 w-auto object-contain drop-shadow-md"
              onError={(e) => {
                // Fallback to text if white logo fails to load
                e.currentTarget.style.display = 'none';
                e.currentTarget.parentElement?.insertAdjacentHTML('beforeend', '<span class="text-2xl font-black text-white italic tracking-tighter">WIGUNA</span>');
              }}
            />
          </Link>

          {/* Contact Button */}
          <Link 
            href="https://wa.me/6287817773888?text=halo%20mon,%20saya%20ingin%20tanya%20seputar%20servis%20mobil%20saya%20di%20bengkel%20wiguna.%20(web)"
            target="_blank"
            className="bg-[#ffd900] hover:bg-[#e6c300] text-black px-5 py-2.5 rounded-full font-bold text-sm sm:text-base shadow-lg hover:scale-105 transition-all"
          >
            Chat Minna
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

        {/* Text Area (Middle Left) */}
        <div className="absolute top-1/2 -translate-y-1/2 left-0 z-20 px-6 sm:px-10 lg:px-20 w-full pointer-events-none">
          <div className="max-w-4xl pointer-events-auto">
            <AnimatePresence mode="wait">
              <motion.h1
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-white tracking-tight leading-[1.1]"
              >
                <span className="block">{title},</span>
                <span className="block font-medium text-white/90">Selesai Tanpa Drama.</span>
              </motion.h1>
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
            <Link
              href={`/services/${currentService.slug}`}
              className="group inline-flex items-center justify-between gap-3 sm:gap-6 px-5 sm:px-6 py-3 sm:py-4 rounded-full bg-white text-gray-900 font-bold hover:bg-gray-100 transition-all w-auto"
            >
              <span className="text-sm sm:text-base max-w-[120px] sm:max-w-none truncate">Lihat {title}</span>
              <div className="bg-gray-900 text-white rounded-full p-1 group-hover:translate-x-1 transition-transform duration-300">
                <Icon icon="solar:arrow-right-linear" className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
