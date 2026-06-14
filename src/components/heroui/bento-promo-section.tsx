"use client";

/**
 * BentoPromoSection - Modern Bento Grid Layout for Promotions
 * Features:
 * - Coverflow slider for Seasonal Promos on top
 * - Custom Asymmetric BentoGrid for Regular Promos below (matching reference design)
 */

import React from 'react';
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

const BentoPromoSection: React.FC<BentoPromoSectionProps> = ({ promos = [], promoBulanan = [] }) => {
  // Filter out any promos that are explicitly categorized as "seasonal" or "bulanan"
  const regularPromos = promos.filter(p => {
    const terms = p._embedded?.['wp:term']?.flat() || [];
    const hasSeasonalTerm = terms.some(t => 
      t.slug.toLowerCase().includes('seasonal') || 
      t.name.toLowerCase().includes('seasonal')
    );
    const isSeasonalCat = p.kategori_promosi?.toLowerCase().includes('seasonal');
    const isJenisSeasonal = p.jenis_promosi === 'bulanan' || p.jenis_promosi === 'seasonal';
    
    // Also explicitly exclude if it matches a slug in promoBulanan
    const isInBulanan = promoBulanan.some(pb => pb.slug === p.slug);

    return !hasSeasonalTerm && !isSeasonalCat && !isJenisSeasonal && !isInBulanan;
  }); // Removed .slice(0, 5) to allow all backend data

  const seasonalPromos = promoBulanan || [];

  if (regularPromos.length === 0 && seasonalPromos.length === 0) return null;

  // Extract titles safely
  const getPromoTitle = (p: Promosi) => typeof p.title === 'string' ? p.title : p.title?.rendered || 'Promo Spesial';
  const getPromoExcerpt = (p: Promosi) => {
    const raw = typeof p.excerpt === 'string' ? p.excerpt : p.excerpt?.rendered || '';
    return raw.replace(/<[^>]*>/g, '').trim() || 'Dapatkan penawaran menarik di Bengkel Wiguna.';
  };
  const getPromoImg = (p: Promosi) => p.featured_img || p._embedded?.['wp:featuredmedia']?.[0]?.source_url || '/images/hero-desktop.webp';

  return (
    <section id="promosi" className="lg:py-24 py-12 bg-gray-100 dark:bg-neutral-950 relative overflow-hidden">
      
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
          <div className="mb-4">
            <Link 
              href="/promosi" 
              className="group inline-flex items-center gap-2 text-sm font-medium bg-white dark:bg-neutral-900 px-6 py-3 rounded-full text-blue-700 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 shadow-sm transition-all hover:shadow-md"
            >
              Lihat Semua Promo
              <Icon icon="solar:arrow-right-linear" className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>

      {/* Seasonal Promo Coverflow Slider - FULLWIDTH */}
      {seasonalPromos.length > 0 && (
        <div className="w-full relative z-10 mb-12 lg:mb-20">
          <SeasonalPromoSlider promos={seasonalPromos} />
        </div>
      )}

      {/* CUSTOM ASYMMETRIC BENTO GRID (Reference Style) */}
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {regularPromos.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 auto-rows-[250px] lg:auto-rows-[300px] grid-flow-dense">
            {regularPromos.map((promo, idx) => {
              const title = getPromoTitle(promo);
              const excerpt = getPromoExcerpt(promo);
              const img = getPromoImg(promo);
              
              // Use modulo 12 so we cycle through 12 distinctly unique card layouts
              // (5 cards from Design 1, 7 cards from Design 2)
              const patternIdx = idx % 12;
              
              if (patternIdx === 0) {
                // 1. TALL LEFT CARD (Image)
                return (
                  <Link href={`/promosi/${promo.slug}`} key={promo.id || idx} className="col-span-1 md:col-span-2 lg:col-span-1 row-span-1 md:row-span-2 relative rounded-[2rem] overflow-hidden group shadow-lg">
                    <Image src={img} alt={title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 1024px) 100vw, 33vw" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 p-8 w-full">
                      <h3 className="text-white text-2xl lg:text-3xl font-bold mb-2">{title}</h3>
                      <p className="text-white/80 line-clamp-2">{excerpt}</p>
                    </div>
                  </Link>
                );
              }
              
              if (patternIdx === 1) {
                // 2. TOP MIDDLE SQUARE (Brand Green/Blue bg with text)
                return (
                  <Link href={`/promosi/${promo.slug}`} key={promo.id || idx} className="col-span-1 row-span-1 relative rounded-[2rem] overflow-hidden bg-[#169b56] dark:bg-emerald-700 flex items-center justify-center p-8 text-center group shadow-lg">
                    {/* Blurred background image effect */}
                    <div className="absolute inset-0 opacity-40 mix-blend-overlay">
                      <Image src={img} alt={title} fill className="object-cover blur-2xl scale-150" />
                    </div>
                    <h3 className="relative z-10 text-white text-2xl lg:text-3xl font-bold tracking-tight leading-snug group-hover:scale-105 transition-transform duration-500 drop-shadow-md">
                      {title}
                    </h3>
                  </Link>
                );
              }
              
              if (patternIdx === 2) {
                // 3. TOP RIGHT TICKET (Split design)
                return (
                  <Link href={`/promosi/${promo.slug}`} key={promo.id || idx} className="col-span-1 row-span-1 rounded-[2rem] overflow-hidden bg-white dark:bg-neutral-800 flex flex-col group shadow-lg hover:shadow-xl transition-shadow relative">
                    <div className="flex-1 p-6 lg:p-8 flex flex-col justify-center">
                      <span className="text-xs font-bold tracking-wider text-green-600 dark:text-emerald-400 uppercase mb-2">PROMO DISCOUNT</span>
                      <h3 className="text-gray-900 dark:text-white text-xl lg:text-2xl font-bold leading-tight line-clamp-2">{title}</h3>
                      <p className="text-[#169b56] font-black text-2xl lg:text-3xl mt-4">Klaim Promo</p>
                    </div>
                    <div className="p-4 px-6 border-t-2 border-dashed border-gray-200 dark:border-neutral-700 bg-gray-50 dark:bg-neutral-800/80 flex justify-between items-center relative">
                      {/* Ticket cutouts (matching the page background color) */}
                      <div className="w-6 h-6 rounded-full bg-gray-100 dark:bg-neutral-950 absolute -left-3 -top-3"></div>
                      <div className="w-6 h-6 rounded-full bg-gray-100 dark:bg-neutral-950 absolute -right-3 -top-3"></div>
                      
                      <div className="text-xs text-gray-500 font-mono tracking-widest flex items-center gap-2">
                        <span>DISCOUNT CODE</span>
                      </div>
                      <div className="text-xs text-gray-900 dark:text-white font-mono tracking-widest flex items-center gap-2">
                        <Icon icon="bi:upc-scan" className="text-3xl text-gray-400" />
                        WG-{promo.id || '24X'}
                      </div>
                    </div>
                  </Link>
                );
              }
              
              if (patternIdx === 3) {
                // 4. BOTTOM MIDDLE SQUARE (White Logo/Icon)
                return (
                  <Link href={`/promosi/${promo.slug}`} key={promo.id || idx} className="col-span-1 row-span-1 rounded-[2rem] overflow-hidden bg-white dark:bg-neutral-800 flex flex-col items-center justify-center p-8 text-center group shadow-lg">
                    <div className="w-24 h-24 mb-6 relative group-hover:scale-110 transition-transform duration-500 drop-shadow-sm">
                       <Image src="/images/logo/logo-square.avif" alt="Bengkel Wiguna" fill className="object-contain" />
                    </div>
                    <h3 className="text-gray-900 dark:text-white font-bold text-xl">{title}</h3>
                  </Link>
                );
              }
              
              if (patternIdx === 4) {
                // 5. BOTTOM RIGHT SQUARE (Image with dark pill overlay)
                return (
                  <Link href={`/promosi/${promo.slug}`} key={promo.id || idx} className="col-span-1 md:col-span-2 lg:col-span-1 row-span-1 relative rounded-[2rem] overflow-hidden group shadow-lg">
                    <Image src={img} alt={title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-500" />
                    <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between bg-black/60 backdrop-blur-md border border-white/10 p-3 pl-5 rounded-full">
                      <h3 className="text-white font-medium text-sm lg:text-base line-clamp-1 flex-1 mr-4">{title}</h3>
                      <div className="w-10 h-10 rounded-full bg-white text-gray-900 flex items-center justify-center shrink-0">
                        <Icon icon="solar:arrow-right-up-linear" className="w-5 h-5" />
                      </div>
                    </div>
                  </Link>
                );
              }

              // --- DESIGN 2: Reference Image Layout (7 cards) ---

              if (patternIdx === 5) {
                // 6. TOP LEFT WIDE (Light bg, giant text, purple button)
                return (
                  <Link href={`/promosi/${promo.slug}`} key={promo.id || idx} className="col-span-1 md:col-span-2 row-span-1 relative rounded-[2rem] overflow-hidden bg-[#f4f5f9] dark:bg-neutral-900 p-8 flex flex-col md:flex-row items-start md:items-center justify-between group shadow-lg">
                    <div className="relative z-10">
                       <h3 className="text-[#6d28d9] dark:text-[#8b5cf6] text-4xl lg:text-5xl font-black mb-3 tracking-tighter leading-none line-clamp-2">{title}</h3>
                       <p className="text-gray-800 dark:text-gray-300 font-medium text-base max-w-sm line-clamp-2">{excerpt}</p>
                    </div>
                    <div className="mt-6 md:mt-0 px-6 py-3 rounded-full bg-gradient-to-r from-[#9333ea] to-[#c026d3] text-white font-bold flex items-center gap-3 shadow-lg group-hover:scale-105 transition-transform z-10 shrink-0">
                       Klaim Promo <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center text-[#9333ea]"><Icon icon="solar:arrow-right-linear" /></div>
                    </div>
                  </Link>
                );
              }

              if (patternIdx === 6) {
                // 7. TOP RIGHT (Image with warm overlay and left text)
                return (
                  <Link href={`/promosi/${promo.slug}`} key={promo.id || idx} className="col-span-1 row-span-1 relative rounded-[2rem] overflow-hidden group shadow-lg">
                    <Image src={img} alt={title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#d97743]/90 via-[#d97743]/50 to-transparent dark:from-[#9c4c23]/90" />
                    <div className="absolute inset-y-0 left-0 p-8 w-2/3 flex flex-col justify-center">
                      <h3 className="text-white text-xl lg:text-2xl font-bold mb-2 leading-snug line-clamp-3">{title}</h3>
                      <p className="text-white/80 text-sm line-clamp-2">Detail Promosi</p>
                    </div>
                  </Link>
                );
              }

              if (patternIdx === 7) {
                // 8. MIDDLE LEFT (Purple bg, image mixblend)
                return (
                  <Link href={`/promosi/${promo.slug}`} key={promo.id || idx} className="col-span-1 row-span-1 relative rounded-[2rem] overflow-hidden bg-[#3b2161] group shadow-lg">
                    <Image src={img} alt={title} fill className="object-cover opacity-60 mix-blend-overlay transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-black/60 to-transparent">
                      <h3 className="text-white text-xl font-bold mb-2 line-clamp-2">"{title}"</h3>
                      <p className="text-white/60 text-sm">Promo Terbatas</p>
                    </div>
                  </Link>
                );
              }

              if (patternIdx === 8) {
                // 9. MIDDLE CENTER (Solid Purple with Logo)
                return (
                  <Link href={`/promosi/${promo.slug}`} key={promo.id || idx} className="col-span-1 row-span-1 relative rounded-[2rem] overflow-hidden bg-gradient-to-br from-[#7e22ce] to-[#6d28d9] flex items-center justify-center p-8 group shadow-lg">
                    <div className="w-24 h-24 relative group-hover:scale-110 transition-transform duration-500 brightness-0 invert drop-shadow-lg">
                       <Image src="/images/logo/logo-square.avif" alt="Bengkel Wiguna" fill className="object-contain" />
                    </div>
                  </Link>
                );
              }

              if (patternIdx === 9) {
                // 10. MIDDLE RIGHT (Pink/Soft bg image)
                return (
                  <Link href={`/promosi/${promo.slug}`} key={promo.id || idx} className="col-span-1 row-span-1 relative rounded-[2rem] overflow-hidden group shadow-lg">
                    <Image src={img} alt={title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 via-gray-900/40 to-transparent" />
                    <div className="absolute inset-y-0 left-0 p-8 w-2/3 flex flex-col justify-center">
                      <h3 className="text-white text-xl font-bold mb-2 line-clamp-2">{title}</h3>
                      <p className="text-white/70 text-sm line-clamp-1">Pelajari lebih lanjut</p>
                    </div>
                  </Link>
                );
              }

              if (patternIdx === 10) {
                // 11. BOTTOM LEFT WIDE (Green/Teal bg with left text)
                return (
                  <Link href={`/promosi/${promo.slug}`} key={promo.id || idx} className="col-span-1 md:col-span-2 row-span-1 relative rounded-[2rem] overflow-hidden group shadow-lg">
                    <Image src={img} alt={title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#205141]/95 via-[#205141]/60 to-transparent" />
                    <div className="absolute inset-y-0 left-0 p-8 w-full md:w-1/2 flex flex-col justify-center">
                      <h3 className="text-white text-2xl lg:text-3xl font-bold mb-3 leading-snug line-clamp-2">{title}</h3>
                      <p className="text-white/80 line-clamp-2">{excerpt}</p>
                    </div>
                  </Link>
                );
              }

              if (patternIdx === 11) {
                // 12. BOTTOM RIGHT (Stacked white boxes)
                return (
                  <div className="col-span-1 row-span-1 relative rounded-[2rem] overflow-hidden bg-[#f4f5f9] dark:bg-neutral-900 p-4 lg:p-6 flex flex-col gap-4 shadow-lg">
                    <Link href={`/promosi/${promo.slug}`} className="flex-1 bg-white dark:bg-neutral-800 rounded-2xl p-5 lg:p-6 flex items-center gap-4 lg:gap-6 group hover:shadow-md transition-shadow">
                       <span className="text-3xl lg:text-4xl font-black text-[#6d28d9]">2x</span>
                       <p className="text-gray-800 dark:text-gray-200 text-xs lg:text-sm font-semibold leading-snug line-clamp-2">{title}</p>
                    </Link>
                    <Link href={`/promosi/${promo.slug}`} className="flex-1 bg-white dark:bg-neutral-800 rounded-2xl p-5 lg:p-6 flex items-center gap-4 lg:gap-6 group hover:shadow-md transition-shadow">
                       <span className="text-3xl lg:text-4xl font-black text-[#ffd900] dark:text-[#ffea66]">#1</span>
                       <p className="text-gray-800 dark:text-gray-200 text-xs lg:text-sm font-semibold leading-snug line-clamp-2">{excerpt}</p>
                    </Link>
                  </div>
                );
              }

              return null;
            })}
          </div>
        )}
      </div>

    </section>
  );
};

export default BentoPromoSection;
