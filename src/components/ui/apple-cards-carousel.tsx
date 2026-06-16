"use client";

import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

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
  jenis_promosi?: string;
}

interface PromoCarouselProps {
  promos: PromoItem[];
  title?: string;
  subtitle?: string;
}

export default function PromoCarousel({ promos, title, subtitle }: PromoCarouselProps) {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const getTitle = (p: PromoItem) =>
    typeof p.title === 'string' ? p.title : p.title?.rendered || 'Promo Spesial';

  const getExcerpt = (p: PromoItem) => {
    const raw = typeof p.excerpt === 'string' ? p.excerpt : p.excerpt?.rendered || '';
    return raw.replace(/<[^>]*>/g, '').trim() || 'Dapatkan penawaran menarik di Bengkel Wiguna.';
  };

  const getImage = (p: PromoItem) =>
    p.featured_img || '/images/promosi/promo-default.jpg';

  const checkScrollability = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 5);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 5);
    }
  };

  useEffect(() => {
    const el = carouselRef.current;
    if (el) {
      el.addEventListener('scroll', checkScrollability);
      checkScrollability();
      // Check again after layout / images load
      const timer = setTimeout(checkScrollability, 500);
      return () => {
        el.removeEventListener('scroll', checkScrollability);
        clearTimeout(timer);
      };
    }
  }, [promos]);

  const scroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const offset = direction === 'left' ? -380 : 380;
      carouselRef.current.scrollBy({ left: offset, behavior: 'smooth' });
    }
  };

  if (!promos.length) return null;

  return (
    <div className="relative w-full overflow-hidden py-4">
      {/* Optional Header */}
      {(title || subtitle) && (
        <div className="flex justify-between items-end mb-8 px-4 sm:px-6 lg:px-8">
          <div>
            {title && <h2 className="text-2xl md:text-3xl font-black text-gray-900 dark:text-white uppercase">{title}</h2>}
            {subtitle && <p className="text-gray-500 text-sm mt-1">{subtitle}</p>}
          </div>
        </div>
      )}

      {/* Navigation Arrows (Top Right / Floating) */}
      <div className="absolute right-8 top-4 z-20 hidden md:flex items-center gap-2">
        <button
          onClick={() => scroll('left')}
          disabled={!canScrollLeft}
          className="w-10 h-10 rounded-full border border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-neutral-800 transition-all disabled:opacity-30 disabled:pointer-events-none"
          aria-label="Scroll Left"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={() => scroll('right')}
          disabled={!canScrollRight}
          className="w-10 h-10 rounded-full bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 flex items-center justify-center hover:bg-neutral-850 dark:hover:bg-neutral-100 transition-all disabled:opacity-30 disabled:pointer-events-none"
          aria-label="Scroll Right"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Horizontal Drag/Scroll Container */}
      <div
        ref={carouselRef}
        className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory scroll-smooth px-4 sm:px-6 lg:px-8 pb-6 -mx-4"
        style={{ scrollbarWidth: 'none', WebkitOverflowScrolling: 'touch' }}
      >
        {promos.map((promo, idx) => {
          const promoTitle = getTitle(promo);
          const promoExcerpt = getExcerpt(promo);
          const img = getImage(promo);
          const hasDiscount = !!promo.diskon_persen;

          return (
            <motion.div
              key={promo.id || idx}
              className="w-[310px] sm:w-[350px] md:w-[380px] h-[520px] shrink-0 snap-start rounded-[2.5rem] overflow-hidden relative group shadow-xl border border-gray-200/50 dark:border-neutral-800/50"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
            >
              {/* Card Main Link */}
              <Link href={`/promosi/${promo.slug}`} className="absolute inset-0 z-0">
                <Image
                  src={img}
                  alt={promoTitle}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 380px"
                  priority={idx < 3}
                />
              </Link>

              {/* Gradient overlay from bottom up */}
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/95 via-black/40 to-transparent pointer-events-none" />

              {/* Top Left Pill Badge ("Active Style") */}
              <div className="absolute top-6 left-6 z-20">
                <span className="inline-flex items-center gap-1.5 bg-white/95 backdrop-blur-md text-gray-950 text-xs font-bold px-4 py-2 rounded-full shadow-lg">
                  <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
                  Active
                </span>
              </div>

              {/* Top Right Floating Action Glass Buttons */}
              <div className="absolute top-6 right-6 z-20 flex flex-col gap-2">
                <a
                  href={`/promosi/${promo.slug}`}
                  className="w-10 h-10 rounded-full bg-white/15 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Icon icon="solar:link-linear" className="w-5 h-5" />
                </a>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    const text = encodeURIComponent(`Halo Bengkel Wiguna, saya ingin bertanya tentang promo: ${promoTitle}`);
                    window.open(`https://wa.me/6281717773888?text=${text}`, '_blank');
                  }}
                  className="w-10 h-10 rounded-full bg-white/15 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white hover:bg-[#25D366] hover:text-white transition-all"
                >
                  <Icon icon="solar:heart-linear" className="w-5 h-5" />
                </button>
              </div>

              {/* Bottom Liquid Glass Content Panel */}
              <div className="absolute bottom-0 inset-x-0 z-20 p-6 md:p-8 backdrop-blur-xl bg-black/15 border-t border-white/10 text-white flex flex-col justify-end">
                {/* Accent Top Glass Line */}
                <div className="absolute -top-px left-8 right-8 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

                {/* Title and Price Row */}
                <div className="flex justify-between items-start gap-4 mb-2">
                  <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight leading-tight line-clamp-2 max-w-[70%] group-hover:text-[#ffd900] transition-colors duration-300">
                    {promoTitle}
                  </h3>
                  {promo.harga_promo && (
                    <span className="text-xl md:text-2xl font-black text-white shrink-0 tracking-tight">
                      {promo.harga_promo}
                    </span>
                  )}
                </div>

                {/* Subtitle / Excerpt */}
                <p className="text-white/70 text-xs sm:text-sm font-medium mb-4 line-clamp-2">
                  {promoExcerpt}
                </p>

                {/* Feature Icons Row (Outline Style matching reference) */}
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-6 border-b border-white/10 pb-4 text-white/90 text-xs font-semibold">
                  <div className="flex items-center gap-1.5">
                    <Icon icon="solar:widget-outline" className="w-4 h-4 opacity-80" />
                    <span>{promo.jenis_promosi || 'Umum'}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Icon icon="solar:tag-outline" className="w-4 h-4 opacity-80" />
                    <span>{promo.kategori_promosi || 'Promo'}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Icon icon="solar:shield-check-outline" className="w-4 h-4 opacity-80" />
                    <span>Garansi</span>
                  </div>
                </div>

                {/* Bottom Metrics Row (Divided by lines like real estate reference) */}
                <div className="grid grid-cols-3 gap-2 text-left pt-1">
                  <div className="flex flex-col min-w-0">
                    <span className="text-[10px] text-white/50 uppercase font-bold tracking-wider truncate">
                      Harga Asli
                    </span>
                    <span className="text-xs md:text-sm font-extrabold truncate text-white/90">
                      {promo.harga_asli || 'Promo'}
                    </span>
                  </div>
                  <div className="flex flex-col min-w-0 border-l border-white/25 pl-3">
                    <span className="text-[10px] text-white/50 uppercase font-bold tracking-wider truncate">
                      Diskon
                    </span>
                    <span className="text-xs md:text-sm font-extrabold truncate text-[#ffd900]">
                      {hasDiscount ? `${promo.diskon_persen}% OFF` : 'Spesial'}
                    </span>
                  </div>
                  <div className="flex flex-col min-w-0 border-l border-white/25 pl-3">
                    <span className="text-[10px] text-white/50 uppercase font-bold tracking-wider truncate">
                      Reservasi
                    </span>
                    <a
                      href={`https://wa.me/6281717773888?text=Halo%20Bengkel%20Wiguna,%20saya%20ingin%20booking%20promo%20${encodeURIComponent(promoTitle)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs md:text-sm font-extrabold text-[#25D366] hover:underline truncate inline-flex items-center gap-1"
                    >
                      Klaim WA
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
