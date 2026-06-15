"use client";

/**
 * SeasonalPromoSlider - Bento Card Style Carousel
 *
 * Features:
 * - Bento-inspired card designs with varied layouts
 * - Brand-consistent colors (Blue #224297, Gold #ffd900)
 * - Glassmorphism effects with backdrop-blur
 * - Prominent discount badges
 * - Smooth coverflow animation
 */

import React, { useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { Promosi } from '@/types/wordpress';
import { Icon } from '@iconify/react';

interface SeasonalPromoSliderProps {
  promos: Promosi[];
}

// Brand Colors
const BRAND_BLUE = '#224297';
const BRAND_GOLD = '#ffd900';
const BRAND_BLUE_DARK = '#1a356d';

const SeasonalPromoSlider: React.FC<SeasonalPromoSliderProps> = ({ promos = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const splideRef = useRef<any>(null);

  if (promos.length === 0) return null;

  const getPromoTitle = (p: Promosi) => typeof p.title === 'string' ? p.title : p.title?.rendered || 'Promo Spesial';
  const getPromoExcerpt = (p: Promosi) => {
    const raw = typeof p.excerpt === 'string' ? p.excerpt : p.excerpt?.rendered || '';
    return raw.replace(/<[^>]*>/g, '').trim() || 'Promo terbatas waktu';
  };
  const getPromoImg = (p: Promosi) => p.featured_img || p._embedded?.['wp:featuredmedia']?.[0]?.source_url || '/images/hero-desktop.webp';

  // Bento Card Pattern System - 4 distinct layouts
  const BentoCard = ({ promo, index }: { promo: Promosi; index: number }) => {
    const title = getPromoTitle(promo);
    const excerpt = getPromoExcerpt(promo);
    const img = getPromoImg(promo);
    const pattern = index % 4;

    // Pattern 0: Hero Image Card with Glass Overlay
    if (pattern === 0) {
      return (
        <Link
          href={`/promosi/${promo.slug}`}
          className="block w-full h-[320px] sm:h-[380px] md:h-[420px] relative rounded-[2rem] overflow-hidden group shadow-xl hover:shadow-2xl transition-all duration-500"
        >
          <Image
            src={img}
            alt={title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            sizes="(max-width: 1024px) 100vw, 60vw"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

          {/* Discount Badge */}
          {promo.diskon_persen && (
            <div className="absolute top-4 left-4 z-20">
              <span className="inline-block backdrop-blur-md bg-[#ffd900] text-black text-sm font-black px-4 py-2 rounded-full shadow-lg">
                DISKON {promo.diskon_persen}%
              </span>
            </div>
          )}

          {/* Glassmorphism Content */}
          <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 z-10">
            <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-[1.5rem] p-6 shadow-2xl">
              <h3 className="text-white text-xl md:text-2xl font-bold mb-2 drop-shadow-md">
                {title}
              </h3>
              <p className="text-white/80 text-sm md:text-base flex items-center gap-2 mb-4">
                <Icon icon="solar:calendar-bold" className="w-4 h-4 md:w-5 md:h-5 text-[#ffd900]" />
                {excerpt.slice(0, 60)}...
              </p>
              <div className="flex items-center justify-between">
                <span className="text-white/60 text-xs md:text-sm">Promo Terbatas</span>
                <div className="bg-[#ffd900] text-black px-5 py-2.5 rounded-full font-bold text-sm hover:scale-105 hover:bg-white transition-all flex items-center gap-2">
                  Klaim Sekarang
                  <Icon icon="solar:arrow-right-linear" className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>
        </Link>
      );
    }

    // Pattern 1: Solid Brand Blue Card with Image Blend
    if (pattern === 1) {
      return (
        <Link
          href={`/promosi/${promo.slug}`}
          className="block w-full h-[320px] sm:h-[380px] md:h-[420px] relative rounded-[2rem] overflow-hidden group shadow-xl hover:shadow-2xl transition-all duration-500"
        >
          {/* Background Image with Blend */}
          <Image
            src={img}
            alt={title}
            fill
            className="object-cover opacity-30 mix-blend-overlay transition-transform duration-700 group-hover:scale-110"
            sizes="(max-width: 1024px) 100vw, 60vw"
          />

          {/* Solid Brand Blue Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#224297] to-[#1a356d]" />

          {/* Decorative Elements */}
          <div className="absolute -top-20 -right-20 w-60 h-60 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-[#ffd900]/20 rounded-full blur-2xl" />

          {/* Content */}
          <div className="absolute inset-0 flex flex-col justify-center p-6 md:p-8 z-10">
            <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-[1.5rem] p-6 md:p-8 h-full flex flex-col justify-between">
              <div>
                {/* Badge */}
                <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full mb-4 w-fit">
                  <Icon icon="solar:tag-price-linear" className="w-4 h-4 text-[#ffd900]" />
                  <span className="text-white/90 text-xs font-semibold uppercase tracking-wide">Promo Spesial</span>
                </div>

                <h3 className="text-white text-xl md:text-2xl font-bold mb-3 leading-tight">
                  {title}
                </h3>
                <p className="text-white/70 text-sm line-clamp-2">
                  {excerpt}
                </p>
              </div>

              <div className="mt-4">
                <div className="bg-[#ffd900] text-black px-5 py-2.5 rounded-full font-bold text-sm hover:scale-105 hover:bg-white transition-all flex items-center justify-center gap-2 w-full">
                  Klaim Promo
                  <Icon icon="solar:arrow-right-linear" className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>
        </Link>
      );
    }

    // Pattern 2: Split Card (Left Text + Right Image)
    if (pattern === 2) {
      return (
        <Link
          href={`/promosi/${promo.slug}`}
          className="block w-full h-[320px] sm:h-[380px] md:h-[420px] relative rounded-[2rem] overflow-hidden group shadow-xl hover:shadow-2xl transition-all duration-500 flex"
        >
          {/* Text Side */}
          <div className="flex-1 p-6 md:p-8 flex flex-col justify-center bg-gradient-to-br from-[#224297] to-[#1a356d] relative overflow-hidden">
            {/* Decorative Circle */}
            <div className="absolute -top-16 -right-16 w-40 h-40 bg-white/10 rounded-full" />
            <div className="absolute -bottom-16 -left-16 w-32 h-32 bg-[#ffd900]/20 rounded-full" />

            <div className="relative z-10">
              {/* Star Badge */}
              <div className="flex items-center gap-2 text-[#ffd900] mb-4">
                <Icon icon="solar:star-bold" className="w-5 h-5" />
                <span className="text-xs font-bold uppercase tracking-wider">Pilihan Terbaik</span>
              </div>

              <h3 className="text-white text-xl md:text-2xl font-bold mb-3 leading-tight">
                {title}
              </h3>
              <p className="text-white/70 text-sm line-clamp-2 mb-4">
                {excerpt}
              </p>

              <div className="mt-auto">
                <span className="inline-flex items-center gap-2 text-[#ffd900] font-semibold text-sm group-hover:gap-3 transition-all">
                  Selengkapnya
                  <Icon icon="solar:arrow-right-linear" className="w-4 h-4" />
                </span>
              </div>
            </div>
          </div>

          {/* Image Side */}
          <div className="relative w-2/5 md:w-1/2 aspect-auto hidden md:block">
            <Image
              src={img}
              alt={title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="50vw"
            />
            {/* Gradient fade on image side */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#224297] to-transparent" />
          </div>
        </Link>
      );
    }

    // Pattern 3: Minimalist Card with Large Badge
    if (pattern === 3) {
      return (
        <Link
          href={`/promosi/${promo.slug}`}
          className="block w-full h-[320px] sm:h-[380px] md:h-[420px] relative rounded-[2rem] overflow-hidden group shadow-xl hover:shadow-2xl transition-all duration-500"
        >
          <Image
            src={img}
            alt={title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            sizes="(max-width: 1024px) 100vw, 60vw"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-500" />

          {/* Large Discount Badge - Centered */}
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <div className="backdrop-blur-xl bg-white/20 border border-white/30 rounded-[2rem] p-8 md:p-10 text-center shadow-2xl">
              {promo.diskon_persen && (
                <div className="text-5xl md:text-6xl font-black text-[#ffd900] mb-2">
                  {promo.diskon_persen}%
                </div>
              )}
              <div className="text-white text-sm font-bold uppercase tracking-wider mb-4">OFF</div>
              <h3 className="text-white text-lg md:text-xl font-bold mb-3 line-clamp-2">
                {title}
              </h3>
              <div className="bg-[#ffd900] text-black px-5 py-2.5 rounded-full font-bold text-sm hover:scale-105 hover:bg-white transition-all inline-flex items-center gap-2">
                Klaim Sekarang
                <Icon icon="solar:arrow-right-linear" className="w-4 h-4" />
              </div>
            </div>
          </div>
        </Link>
      );
    }

    // Fallback - Hero Card
    return (
      <Link
        href={`/promosi/${promo.slug}`}
        className="block w-full h-[320px] sm:h-[380px] md:h-[420px] relative rounded-[2rem] overflow-hidden group shadow-xl hover:shadow-2xl transition-all duration-500"
      >
        <Image
          src={img}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 1024px) 100vw, 60vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 z-10">
          <h3 className="text-white text-xl md:text-2xl font-bold mb-2">{title}</h3>
          <p className="text-white/80 text-sm mb-4">{excerpt.slice(0, 60)}...</p>
          <div className="bg-[#ffd900] text-black px-5 py-2.5 rounded-full font-bold text-sm inline-flex items-center gap-2">
            Klaim Sekarang
            <Icon icon="solar:arrow-right-linear" className="w-4 h-4" />
          </div>
        </div>
      </Link>
    );
  };

  return (
    <div className="w-full relative seasonal-promo-slider">
      <Splide
        ref={splideRef}
        hasTrack={false}
        options={{
          type: 'loop',
          focus: 'center',
          perPage: 1,
          padding: '18%', // Expose side slides for coverflow effect
          gap: '1.5rem',
          arrows: false,
          pagination: false,
          breakpoints: {
            1024: { padding: '12%', gap: '1.25rem' },
            768: { padding: '8%', gap: '1rem' },
            640: { padding: '4%', gap: '0.75rem' },
          }
        }}
        onMove={(splide: any, newIndex: number) => setCurrentIndex(newIndex)}
      >
        <SplideTrack className="py-4 md:py-8">
          {promos.map((promo, i) => (
            <SplideSlide key={promo.id || i}>
              <BentoCard promo={promo} index={i} />
            </SplideSlide>
          ))}
        </SplideTrack>

        {/* Custom Navigation & Pagination */}
        <div className="flex items-center justify-center gap-4 mt-6">
          <button
            className="w-10 h-10 flex items-center justify-center rounded-full bg-[#224297]/10 hover:bg-[#224297]/20 transition-colors text-[#224297]"
            onClick={() => splideRef.current?.splide.go('<')}
            aria-label="Previous slide"
          >
            <Icon icon="solar:alt-arrow-left-linear" className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2">
            {promos.map((_, i) => (
              <button
                key={i}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === currentIndex
                    ? 'bg-[#224297] w-6'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                onClick={() => splideRef.current?.splide.go(i)}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

          <button
            className="w-10 h-10 flex items-center justify-center rounded-full bg-[#224297]/10 hover:bg-[#224297]/20 transition-colors text-[#224297]"
            onClick={() => splideRef.current?.splide.go('>')}
            aria-label="Next slide"
          >
            <Icon icon="solar:alt-arrow-right-linear" className="w-5 h-5" />
          </button>
        </div>
      </Splide>

      {/* Global CSS for Coverflow & Bento Card Effects */}
      <style dangerouslySetInnerHTML={{__html: `
        .seasonal-promo-slider .splide__track {
          transition: transform 500ms cubic-bezier(0.4, 0, 0.2, 1);
        }
        .seasonal-promo-slider .splide__slide {
          transform: scale(0.88);
          transition: transform 500ms ease-out, opacity 400ms ease-out;
          opacity: 0.5;
          filter: blur(1px);
        }
        .seasonal-promo-slider .splide__slide.is-active {
          transform: scale(1);
          opacity: 1;
          filter: blur(0);
        }
        .seasonal-promo-slider .splide__slide:hover {
          transform: scale(0.92);
        }
        .seasonal-promo-slider .splide__slide.is-active:hover {
          transform: scale(1.02);
        }
      `}} />
    </div>
  );
};

export default SeasonalPromoSlider;
