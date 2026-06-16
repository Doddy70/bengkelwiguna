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

import React, { useMemo, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Icon } from '@iconify/react';
import { Promosi } from '@/types/wordpress';
import PageTitle3 from '@/components/ui/PageTitle3';
import dynamic from 'next/dynamic';
import WigunaCard from '@/components/ui/WigunaCard';

const PromoCarousel = dynamic(() => import('@/components/ui/PromoCarousel'), { ssr: false });

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
  const [visibleCount, setVisibleCount] = useState(5);

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

  // Unified Bento Card Pattern matching the new reference
  const StandardBentoCard = (promo: Promosi, idx: number) => {
    const title = getPromoTitle(promo);
    const excerpt = getPromoExcerpt(promo);
    const img = getPromoImg(promo);
    
    // Bento layout: every 5th card spans 2 columns in large screens to create the asymmetrical grid
    // Row 1: 3 cards (idx 0,1,2). Row 2: 2 cards (idx 3 is 1-col, idx 4 is 2-col).
    const isWide = idx % 5 === 4;

    const discountText = promo.diskon_persen ? `${promo.diskon_persen}% OFF` : undefined;

    const metaItems = [
      { icon: 'solar:ticket-linear', text: promo.jenis_promosi || 'Promo Spesial' }
    ];

    const handleClaimPromo = (e: React.MouseEvent) => {
      e.preventDefault();
      const whatsappNumber = "6281717773888"; // Wiguna WA
      const promoName = title.trim();
      const text = encodeURIComponent(`Halo, saya tertarik dengan promo: ${promoName}`);
      window.open(`https://wa.me/${whatsappNumber}?text=${text}`, '_blank');
    };

    return (
      <div
        key={promo.id || idx}
        className={`${isWide ? 'col-span-1 md:col-span-2 lg:col-span-2' : 'col-span-1'} h-[460px]`}
      >
        <WigunaCard
          href={`/promosi/${promo.slug}`}
          image={img}
          title={title}
          excerpt={excerpt}
          variant="overlay"
          badgeText={discountText}
          tag={promo.kategori_promosi || 'PROMO'}
          metaItems={metaItems}
          buttonText="Klaim Promo"
          secondaryIcon="solar:heart-linear"
          onSecondaryClick={(e) => {
            e.preventDefault();
            // Optional favorite state or WA redirect
            handleClaimPromo(e);
          }}
          onButtonClick={handleClaimPromo}
        />
      </div>
    );
  };

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

      {/* Seasonal Promo Coverflow Slider */}
      {seasonalPromos.length > 0 && (
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-12 lg:mb-20">
          <PromoCarousel promos={seasonalPromos} />
        </div>
      )}

      {/* BENTO GRID - 6 Pattern System */}
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {regularPromos.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 grid-flow-dense items-stretch">
            {regularPromos.slice(0, visibleCount).map((promo, idx) => (
              StandardBentoCard(promo, idx)
            ))}
          </div>
        )}

        {/* Load More / View All CTA */}
        {regularPromos.length > visibleCount ? (
          <div className="mt-8 flex justify-center items-center gap-4">
            <button
              onClick={() => setVisibleCount(prev => prev + 5)}
              className="inline-flex items-center gap-3 bg-white dark:bg-neutral-800 hover:bg-gray-50 dark:hover:bg-neutral-700 text-gray-900 dark:text-white px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all font-semibold group cursor-pointer border border-transparent dark:border-white/10"
            >
              Muat Lebih Banyak ({regularPromos.length - visibleCount} lagi)
              <Icon icon="solar:round-alt-arrow-down-linear" className="w-5 h-5 group-hover:translate-y-1 transition-transform text-[#224297] dark:text-[#ffd900]" />
            </button>
          </div>
        ) : regularPromos.length > 0 && (
          <div className="mt-8 text-center">
            <Link
              href="/promosi"
              className="inline-flex items-center gap-3 bg-[#224297] hover:bg-[#1a356d] text-white px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all font-semibold group"
            >
              Jelajahi Semua Promo
              <Icon icon="solar:arrow-right-linear" className="w-5 h-5 group-hover:translate-x-1 transition-transform text-[#ffd900]" />
            </Link>
          </div>
        )}
      </div>

    </section>
  );
};

export default BentoPromoSection;
