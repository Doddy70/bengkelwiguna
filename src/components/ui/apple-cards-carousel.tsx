"use client";

/**
 * Apple Cards Carousel - Liquid Glass Inspired Design
 * Inspired by SwiftUI Liquid Glass principles
 * Semi-transparent cards with backdrop blur effects
 */

import React, { useState } from 'react';
import Image from 'next/image';
import { Icon } from '@iconify/react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface PromoItem {
  id: number;
  slug: string;
  title: string | { rendered: string };
  excerpt?: string | { rendered: string };
  featured_img?: string;
  diskon_persen?: string;
  harga_promo?: string;
  harga_asli?: string;
  kategori_promosi?: string;
}

interface PromoCarouselProps {
  promos: PromoItem[];
  title?: string;
  subtitle?: string;
}

export default function PromoCarousel({ promos, title, subtitle }: PromoCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const getTitle = (p: PromoItem) =>
    typeof p.title === 'string' ? p.title : p.title?.rendered || 'Promo Spesial';

  const getExcerpt = (p: PromoItem) => {
    const raw = typeof p.excerpt === 'string' ? p.excerpt : p.excerpt?.rendered || '';
    return raw.replace(/<[^>]*>/g, '').trim() || 'Dapatkan penawaran menarik di Bengkel Wiguna.';
  };

  const getImage = (p: PromoItem) =>
    p.featured_img || '/images/promosi/promo-default.jpg';

  const scrollLeft = () => {
    setCurrentIndex((prev) => (prev === 0 ? promos.length - 1 : prev - 1));
  };

  const scrollRight = () => {
    setCurrentIndex((prev) => (prev === promos.length - 1 ? 0 : prev + 1));
  };

  if (!promos.length) return null;

  const currentPromo = promos[currentIndex];

  return (
    <div className="relative w-full">
      {/* Section Header */}
      {title && (
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tight mb-2">
            {title}
          </h2>
          {subtitle && (
            <p className="text-white/60 text-sm font-medium">{subtitle}</p>
          )}
        </div>
      )}

      {/* Carousel Container */}
      <div className="relative flex items-center justify-center">
        {/* Navigation Buttons */}
        <button
          onClick={scrollLeft}
          className="absolute left-0 z-40 flex items-center justify-center w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white transition-all duration-300 hover:scale-110 shadow-lg -translate-x-2"
          aria-label="Previous"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={scrollRight}
          className="absolute right-0 z-40 flex items-center justify-center w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white transition-all duration-300 hover:scale-110 shadow-lg translate-x-2"
          aria-label="Next"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Cards Container */}
        <div className="flex items-center justify-center gap-4 md:gap-6 overflow-hidden px-8 md:px-16">
          {/* Left Card (Smaller, Dimmed) */}
          <motion.div
            key={`left-${currentIndex}`}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 0.5, x: 0 }}
            transition={{ duration: 0.5 }}
            className="hidden md:block w-64 h-[380px] flex-shrink-0"
          >
            <div className="relative h-full rounded-[2rem] overflow-hidden">
              <Image
                src={getImage(promos[(currentIndex - 1 + promos.length) % promos.length])}
                alt=""
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/40" />
            </div>
          </motion.div>

          {/* Center Card (Main, Expanded) */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`center-${currentIndex}`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="relative w-[320px] md:w-[420px] h-[480px] md:h-[520px] flex-shrink-0 cursor-pointer"
              onClick={() => setExpandedIndex(currentIndex)}
            >
              {/* Glass Card */}
              <div className="absolute inset-0 rounded-[2.5rem] overflow-hidden group">
                {/* Background Image */}
                <Image
                  src={getImage(currentPromo)}
                  alt={getTitle(currentPromo)}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />

                {/* Glass Overlay - Liquid Glass Inspired */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20" />

                {/* Top Floating Badges & Icons */}
                <div className="absolute top-6 left-6 right-6 z-30 flex items-start justify-between">
                  <div className="flex flex-col gap-2">
                    <span className="inline-flex items-center gap-1.5 bg-white text-gray-800 text-xs font-bold px-3 py-1.5 rounded-full shadow-md">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                      {currentPromo.kategori_promosi || 'Promo Spesial'}
                    </span>
                    {currentPromo.diskon_persen && (
                      <span className="inline-flex px-3 py-1.5 bg-[#25D366] text-white text-[10px] font-black uppercase tracking-wider rounded-full shadow-lg w-fit">
                        {currentPromo.diskon_persen}% OFF
                      </span>
                    )}
                  </div>
                  
                  <div className="flex flex-col gap-2">
                     <button 
                        onClick={(e) => e.stopPropagation()}
                        className="w-10 h-10 rounded-full bg-black/20 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-black/40 transition-colors"
                     >
                        <Icon icon="solar:link-linear" className="w-5 h-5" />
                     </button>
                     <button 
                        onClick={(e) => e.stopPropagation()}
                        className="w-10 h-10 rounded-full bg-black/20 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-black/40 transition-colors"
                     >
                        <Icon icon="solar:heart-linear" className="w-5 h-5" />
                     </button>
                  </div>
                </div>

                {/* Bottom Glass Content Panel */}
                <div className="absolute bottom-0 left-0 right-0 z-20 p-6 md:p-8 backdrop-blur-md bg-white/5 border-t border-white/10">
                  {/* Glass Effect Line */}
                  <div className="absolute -top-px left-8 right-8 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />

                  <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tight leading-tight mb-2 group-hover:text-[#ffd900] transition-colors duration-300">
                    {getTitle(currentPromo)}
                  </h3>

                  <p className="text-white/80 text-sm md:text-base leading-relaxed line-clamp-2 mb-4">
                    {getExcerpt(currentPromo)}
                  </p>

                  {/* Price & CTA */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-baseline gap-2">
                      {currentPromo.harga_promo && (
                        <>
                          <span className="text-2xl font-black text-[#ffd900]">
                            {currentPromo.harga_promo}
                          </span>
                          {currentPromo.harga_asli && (
                            <span className="text-sm text-white/50 line-through">
                              {currentPromo.harga_asli}
                            </span>
                          )}
                        </>
                      )}
                    </div>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        const waText = encodeURIComponent(`Halo, saya tertarik dengan promo: ${getTitle(currentPromo)}`);
                        window.open(`https://wa.me/6281717773888?text=${waText}`, '_blank');
                      }}
                      className="flex items-center gap-2 px-5 py-3 rounded-full bg-[#25D366] hover:bg-[#128C7E] text-white font-bold text-sm transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                    >
                      <Icon icon="fa6-brands:whatsapp" className="w-5 h-5" />
                      <span>Klaim</span>
                    </button>
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#224297]/20 to-transparent" />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Right Card (Smaller, Dimmed) */}
          <motion.div
            key={`right-${currentIndex}`}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 0.5, x: 0 }}
            transition={{ duration: 0.5 }}
            className="hidden md:block w-64 h-[380px] flex-shrink-0"
          >
            <div className="relative h-full rounded-[2rem] overflow-hidden">
              <Image
                src={getImage(promos[(currentIndex + 1) % promos.length])}
                alt=""
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/40" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Dot Indicators */}
      <div className="flex justify-center items-center gap-2 mt-8">
        {promos.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`h-2 rounded-full transition-all duration-300 ${
              idx === currentIndex
                ? 'w-8 bg-[#ffd900]'
                : 'w-2 bg-white/30 hover:bg-white/50'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

      {/* Expanded Modal */}
      <AnimatePresence>
        {expandedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl"
            onClick={() => setExpandedIndex(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-4xl max-h-[90vh] overflow-auto rounded-[2rem] bg-white dark:bg-neutral-900 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setExpandedIndex(null)}
                className="absolute top-4 right-4 z-10 w-12 h-12 rounded-full bg-gray-100 dark:bg-neutral-800 hover:bg-gray-200 dark:hover:bg-neutral-700 flex items-center justify-center transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Modal Content */}
              <div className="relative aspect-video">
                <Image
                  src={getImage(promos[expandedIndex])}
                  alt={getTitle(promos[expandedIndex])}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <span className="inline-block px-4 py-2 bg-[#ffd900] text-black text-sm font-black uppercase tracking-wider rounded-full mb-4">
                    {promos[expandedIndex].kategori_promosi || 'Promo Spesial'}
                  </span>
                  <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight mb-4">
                    {getTitle(promos[expandedIndex])}
                  </h2>
                  <p className="text-white/80 text-lg leading-relaxed mb-6">
                    {getExcerpt(promos[expandedIndex])}
                  </p>
                  <button
                    onClick={() => {
                      const waText = encodeURIComponent(`Halo, saya tertarik dengan promo: ${getTitle(promos[expandedIndex])}`);
                      window.open(`https://wa.me/6281717773888?text=${waText}`, '_blank');
                    }}
                    className="flex items-center gap-3 px-8 py-4 rounded-full bg-[#25D366] hover:bg-[#128C7E] text-white font-bold text-lg transition-all duration-300 shadow-lg"
                  >
                    <Icon icon="fa6-brands:whatsapp" className="w-6 h-6" />
                    Klaim Promo via WhatsApp
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
