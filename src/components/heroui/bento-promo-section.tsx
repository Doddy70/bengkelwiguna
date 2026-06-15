"use client";

/**
 * BentoPromoSection - Optimized Bento Grid Layout for Promotions
 *
 * Improvements:
 * - Brand-consistent colors (Blue #224297, Gold #ffd900)
 * - Cleaner 6-pattern system
 * - Better hover interactions
 * - Improved mobile responsiveness
 * - Glassmorphism accents
 */

import React, { useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Icon } from '@iconify/react';
import { Promosi } from '@/types/wordpress';
import PageTitle3 from '@/components/ui/PageTitle3';
import dynamic from 'next/dynamic';

const SeasonalPromoSlider = dynamic(() => import('./seasonal-promo-slider'), { ssr: false });

interface BentoPromoSectionProps {
  promos: Promosi[];
  promoBulanan?: Promosi[];
}

// Brand Colors
const BRAND_BLUE = '#224297';
const BRAND_GOLD = '#ffd900';
const BRAND_BLUE_LIGHT = '#3b5db3';
const BRAND_BLUE_DARK = '#1a356d';

const BentoPromoSection: React.FC<BentoPromoSectionProps> = ({ promos = [], promoBulanan = [] }) => {
  // Filter out seasonal/bulanan promos for regular grid
  const regularPromos = useMemo(() => {
    return promos.filter(p => {
      const terms = p._embedded?.['wp:term']?.flat() || [];
      const hasSeasonalTerm = terms.some(t =>
        t.slug.toLowerCase().includes('seasonal') ||
        t.name.toLowerCase().includes('seasonal')
      );
      const isSeasonalCat = p.kategori_promosi?.toLowerCase().includes('seasonal');
      const isJenisSeasonal = String(p.jenis_promosi) === 'bulanan' || String(p.jenis_promosi) === 'seasonal';
      const isInBulanan = promoBulanan.some(pb => pb.slug === p.slug);
      return !hasSeasonalTerm && !isSeasonalCat && !isJenisSeasonal && !isInBulanan;
    });
  }, [promos, promoBulanan]);

  const seasonalPromos = promoBulanan || [];

  if (regularPromos.length === 0 && seasonalPromos.length === 0) return null;

  // Safe data extractors
  const getPromoTitle = (p: Promosi) => typeof p.title === 'string' ? p.title : p.title?.rendered || 'Promo Spesial';
  const getPromoExcerpt = (p: Promosi) => {
    const raw = typeof p.excerpt === 'string' ? p.excerpt : p.excerpt?.rendered || '';
    return raw.replace(/<[^>]*>/g, '').trim() || 'Dapatkan penawaran menarik di Bengkel Wiguna.';
  };
  const getPromoImg = (p: Promosi) => p.featured_img || p._embedded?.['wp:featuredmedia']?.[0]?.source_url || '/images/hero-desktop.webp';

  // 6-PATTERN SYSTEM (cycling through cleaner designs)
  const PATTERNS = [
    // Pattern 0: Full-width Hero Card (Image + Gradient + Glassmorphism)
    (promo: Promosi, idx: number, total: number) => {
      const title = getPromoTitle(promo);
      const img = getPromoImg(promo);
      return (
        <Link
          href={`/promosi/${promo.slug}`}
          key={promo.id || idx}
          className="col-span-1 md:col-span-2 lg:col-span-2 row-span-1 relative rounded-3xl overflow-hidden group shadow-lg hover:shadow-xl transition-all duration-500"
        >
          <Image
            src={img}
            alt={title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 66vw, 33vw"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

          {/* Glassmorphism Badge */}
          <div className="absolute top-4 left-4">
            {promo.diskon_persen && (
              <span className="inline-block backdrop-blur-md bg-[#ffd900]/90 text-black text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                {promo.diskon_persen}% OFF
              </span>
            )}
          </div>

          {/* Content */}
          <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
            <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-4 lg:p-6">
              <h3 className="text-white text-xl lg:text-2xl font-bold mb-2 group-hover:text-[#ffd900] transition-colors">
                {title}
              </h3>
              <div className="flex items-center gap-2 text-white/80 text-sm">
                <Icon icon="solar:calendar-bold" className="w-4 h-4 text-[#ffd900]" />
                <span>Berlaku terbatas</span>
              </div>
            </div>
          </div>

          {/* Arrow CTA */}
          <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
            <Icon icon="solar:arrow-right-up-linear" className="w-5 h-5 text-white" />
          </div>
        </Link>
      );
    },

    // Pattern 1: Brand Blue Card (Solid Color + Text)
    (promo: Promosi, idx: number, total: number) => {
      const title = getPromoTitle(promo);
      const excerpt = getPromoExcerpt(promo);
      return (
        <Link
          href={`/promosi/${promo.slug}`}
          key={promo.id || idx}
          className="col-span-1 row-span-1 relative rounded-3xl overflow-hidden group shadow-lg hover:shadow-xl transition-all duration-500 flex flex-col justify-between p-6 lg:p-8"
          style={{ backgroundColor: BRAND_BLUE }}
        >
          {/* Decorative Circle */}
          <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-white/10 group-hover:bg-white/20 transition-all duration-500" />
          <div className="absolute -bottom-8 -left-8 w-24 h-24 rounded-full bg-white/5" />

          {/* Content */}
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full mb-4">
              <Icon icon="solar:tag-price-linear" className="w-4 h-4 text-[#ffd900]" />
              <span className="text-white/90 text-xs font-semibold uppercase tracking-wide">Promo</span>
            </div>
            <h3 className="text-white text-xl lg:text-2xl font-bold mb-3 leading-tight">
              {title}
            </h3>
            <p className="text-white/70 text-sm line-clamp-2">
              {excerpt}
            </p>
          </div>

          {/* CTA */}
          <div className="relative z-10 mt-6">
            <div className="inline-flex items-center gap-2 bg-[#ffd900] text-black px-5 py-2.5 rounded-full font-bold text-sm group-hover:gap-4 transition-all">
              Klaim Sekarang
              <Icon icon="solar:arrow-right-linear" className="w-4 h-4" />
            </div>
          </div>
        </Link>
      );
    },

    // Pattern 2: Glassmorphism Card (Image + Glass)
    (promo: Promosi, idx: number, total: number) => {
      const title = getPromoTitle(promo);
      const img = getPromoImg(promo);
      return (
        <Link
          href={`/promosi/${promo.slug}`}
          key={promo.id || idx}
          className="col-span-1 row-span-1 relative rounded-3xl overflow-hidden group shadow-lg hover:shadow-xl transition-all duration-500"
        >
          <Image
            src={img}
            alt={title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            sizes="(max-width: 1024px) 50vw, 33vw"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />

          {/* Glass Content */}
          <div className="absolute inset-x-0 bottom-0 p-6">
            <div className="backdrop-blur-xl bg-white/20 border border-white/30 rounded-2xl p-5 shadow-xl">
              <h3 className="text-white font-bold text-lg mb-2 line-clamp-2">
                {title}
              </h3>
              <div className="flex items-center justify-between">
                <span className="text-[#ffd900] font-bold text-sm">Lihat Detail</span>
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-[#ffd900] group-hover:text-black transition-all">
                  <Icon icon="solar:arrow-right-linear" className="w-4 h-4 text-white" />
                </div>
              </div>
            </div>
          </div>
        </Link>
      );
    },

    // Pattern 3: Split Card (Left Text + Right Image)
    (promo: Promosi, idx: number, total: number) => {
      const title = getPromoTitle(promo);
      const excerpt = getPromoExcerpt(promo);
      const img = getPromoImg(promo);
      return (
        <Link
          href={`/promosi/${promo.slug}`}
          key={promo.id || idx}
          className="col-span-1 md:col-span-2 row-span-1 relative rounded-3xl overflow-hidden group shadow-lg hover:shadow-xl transition-all duration-500 flex flex-col md:flex-row"
        >
          {/* Text Side */}
          <div className="flex-1 p-6 lg:p-8 flex flex-col justify-center bg-white dark:bg-neutral-900">
            <div className="flex items-center gap-2 text-[#224297] mb-3">
              <Icon icon="solar:star-bold" className="w-5 h-5 text-[#ffd900]" />
              <span className="text-xs font-bold uppercase tracking-wider">Pilihan Terbaik</span>
            </div>
            <h3 className="text-gray-900 dark:text-white text-xl lg:text-2xl font-bold mb-3 leading-tight">
              {title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2 mb-4">
              {excerpt}
            </p>
            <div className="mt-auto">
              <span className="inline-flex items-center gap-2 text-[#224297] font-semibold text-sm group-hover:gap-3 transition-all">
                Selengkapnya
                <Icon icon="solar:arrow-right-linear" className="w-4 h-4" />
              </span>
            </div>
          </div>

          {/* Image Side */}
          <div className="relative w-full md:w-1/2 aspect-[4/3] md:aspect-auto">
            <Image
              src={img}
              alt={title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </Link>
      );
    },

    // Pattern 4: Brand Gradient Card (Blue/Gold + Glassmorphism)
    (promo: Promosi, idx: number, total: number) => {
      const title = getPromoTitle(promo);
      return (
        <Link
          href={`/promosi/${promo.slug}`}
          key={promo.id || idx}
          className="col-span-1 row-span-1 relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#224297] via-[#224297]/90 to-[#1a356d] group shadow-lg hover:shadow-xl transition-all duration-500 flex flex-col items-center justify-center p-6 lg:p-8"
        >
          {/* Glassmorphism Overlay */}
          <div className="absolute inset-0 backdrop-blur-sm bg-white/[0.05] border border-white/10 rounded-3xl" />

          {/* Decorative Elements */}
          <div className="absolute -top-16 -right-16 w-40 h-40 bg-[#ffd900]/10 rounded-full blur-2xl" />
          <div className="absolute -bottom-16 -left-16 w-32 h-32 bg-white/5 rounded-full blur-xl" />

          {/* Logo */}
          <div className="relative z-10 w-20 h-20 lg:w-24 lg:h-24 mb-4 group-hover:scale-110 transition-transform duration-500">
            <Image src="/images/logo/logo-square.avif" alt="Bengkel Wiguna" fill className="object-contain" />
          </div>

          {/* Title */}
          <h3 className="relative z-10 text-white font-bold text-center text-lg mb-2 line-clamp-2 drop-shadow-sm">
            {title}
          </h3>

          {/* Arrow */}
          <div className="relative z-10 w-10 h-10 rounded-full border-2 border-[#ffd900]/50 flex items-center justify-center mt-4 group-hover:border-[#ffd900] group-hover:bg-[#ffd900] group-hover:text-black transition-all duration-300">
            <Icon icon="solar:arrow-right-linear" className="w-5 h-5 text-[#ffd900]/70 group-hover:text-black transition-colors" />
          </div>
        </Link>
      );
    },

    // Pattern 5: Ticket/Stamp Card (Coupon Style - Brand Colors)
    (promo: Promosi, idx: number, total: number) => {
      const title = getPromoTitle(promo);
      const excerpt = getPromoExcerpt(promo);
      return (
        <Link
          href={`/promosi/${promo.slug}`}
          key={promo.id || idx}
          className="col-span-1 row-span-1 relative rounded-3xl overflow-hidden bg-gradient-to-br from-white to-[#224297]/5 dark:from-neutral-900 dark:to-[#224297]/20 group shadow-lg hover:shadow-xl transition-all duration-500 flex flex-col"
        >
          {/* Glassmorphism Accent */}
          <div className="absolute inset-0 backdrop-blur-sm bg-white/30 border border-[#224297]/10 rounded-3xl" />

          {/* Main Content */}
          <div className="relative flex-1 p-6 lg:p-8 flex flex-col justify-center">
            <div className="flex items-start justify-between mb-4">
              <div>
                <span className="inline-block bg-gradient-to-r from-[#ffd900] to-[#ffd900]/80 text-black text-xs font-bold px-3 py-1 rounded-full mb-2 shadow-sm">
                  PROMO
                </span>
                <h3 className="text-[#224297] dark:text-white text-lg lg:text-xl font-bold leading-tight">
                  {title}
                </h3>
              </div>
              <Icon icon="solar:gift-linear" className="w-8 h-8 text-[#ffd900]" />
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2">
              {excerpt}
            </p>
          </div>

          {/* Bottom Coupon Strip */}
          <div className="relative px-6 py-4 border-t-2 border-dashed border-[#224297]/20 bg-[#224297]/5 dark:bg-[#224297]/10">
            {/* Ticket Cutouts */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white dark:bg-neutral-900 border-2 border-[#224297]/20" />

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs text-[#224297]/70 font-mono uppercase tracking-wider">
                <Icon icon="bi:upc-scan" className="w-5 h-5" />
                <span>Kode</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-mono font-bold text-[#224297]">WG-{promo.id || 'PROMO'}</span>
                <Icon icon="solar:copy-linear" className="w-4 h-4 text-[#224297]/50" />
              </div>
            </div>
          </div>
        </Link>
      );
    },
  ];

  return (
    <section id="promosi" className="lg:py-24 py-16 bg-gradient-to-b from-gray-50 to-white dark:from-neutral-950 dark:to-neutral-900 relative overflow-hidden">

      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#224297]/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#ffd900]/5 rounded-full blur-3xl" />
      </div>

      {/* Header Container */}
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 mb-12">
          <PageTitle3
            badgeText="🔥 PROMO SPESIAL"
            title="Penawaran Menarik untuk Anda"
            subtitle="Hemat hingga 20% untuk perawatan kendaraan. Promo terbatas waktu!"
            widthClass="w-full lg:w-7/12"
            alignment="start"
            padding="pb-0"
          />
          <Link
            href="/promosi"
            className="group relative inline-flex items-center gap-2 text-sm font-medium px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5 overflow-hidden"
          >
            {/* Glassmorphism Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#224297] to-[#1a356d] rounded-full" />
            <div className="absolute inset-0 backdrop-blur-sm bg-white/10 rounded-full" />

            <span className="relative z-10 text-white">Lihat Semua Promo</span>
            <Icon icon="solar:arrow-right-linear" className="relative z-10 w-4 h-4 text-[#ffd900] group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

      {/* Seasonal Promo Coverflow Slider - FULLWIDTH */}
      {seasonalPromos.length > 0 && (
        <div className="w-full relative z-10 mb-12 lg:mb-20">
          <SeasonalPromoSlider promos={seasonalPromos} />
        </div>
      )}

      {/* BENTO GRID - 6 Pattern System */}
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {regularPromos.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 auto-rows-[280px] lg:auto-rows-[320px] grid-flow-dense">
            {regularPromos.slice(0, 9).map((promo, idx) => {
              const patternIdx = idx % PATTERNS.length;
              return PATTERNS[patternIdx](promo, idx, regularPromos.length);
            })}
          </div>
        )}

        {/* View All CTA */}
        {regularPromos.length > 9 && (
          <div className="mt-8 text-center">
            <Link
              href="/promosi"
              className="inline-flex items-center gap-3 bg-white dark:bg-neutral-800 hover:bg-gray-50 dark:hover:bg-neutral-700 text-gray-900 dark:text-white px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all font-semibold group"
            >
              Lihat Semua Promo ({regularPromos.length - 9} lagi)
              <Icon icon="solar:arrow-right-linear" className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        )}
      </div>

    </section>
  );
};

export default BentoPromoSection;
