"use client";

/**
 * SeasonalPromoSlider - Coverflow Style Carousel
 *
 * Features:
 * - Coverflow effect matching reference design
 * - Inactive slides are purely images, centered vertically
 * - Active slide expands to reveal a clean white text card below
 * - Smooth cubic-bezier transitions
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

const SeasonalPromoSlider: React.FC<SeasonalPromoSliderProps> = ({ promos = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const splideRef = useRef<any>(null);

  if (promos.length === 0) return null;

  const getPromoTitle = (p: Promosi) => typeof p.title === 'string' ? p.title : p.title?.rendered || 'Promo Spesial';
  const getPromoExcerpt = (p: Promosi) => {
    const raw = typeof p.excerpt === 'string' ? p.excerpt : p.excerpt?.rendered || '';
    return raw.replace(/<[^>]*>/g, '').trim() || 'Promo terbatas waktu dari Bengkel Wiguna.';
  };
  const getPromoImg = (p: Promosi) => p.featured_img || p._embedded?.['wp:featuredmedia']?.[0]?.source_url || '/images/hero-desktop.webp';

  const CoverflowCard = ({ promo, index }: { promo: Promosi; index: number }) => {
    const title = getPromoTitle(promo);
    const excerpt = getPromoExcerpt(promo);
    const img = getPromoImg(promo);

    return (
      <Link
        href={`/promosi/${promo.slug}`}
        className="promo-card block w-full relative rounded-[2rem] overflow-hidden group shadow-xl hover:shadow-2xl transition-all duration-500 bg-white"
      >
        {/* Image Area - Fixed height to maintain consistency */}
        <div className="relative w-full h-[280px] sm:h-[340px] md:h-[400px]">
          <Image
            src={img}
            alt={title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 1024px) 100vw, 60vw"
          />
          {/* Discount Badge on Image */}
          {promo.diskon_persen && (
            <div className="absolute top-4 left-4 z-20">
              <span className="inline-block bg-[#ffd900] text-black text-xs sm:text-sm font-black px-4 py-2 rounded-full shadow-lg">
                {promo.diskon_persen}% OFF
              </span>
            </div>
          )}
        </div>

        {/* Text Area (Hidden when inactive via CSS) */}
        <div className="promo-text-content p-6 md:p-8 flex flex-col justify-between bg-white overflow-hidden border-t border-gray-50">
          <div className="flex justify-between items-start mb-6">
            <h3 className="text-black text-2xl md:text-3xl font-medium leading-tight max-w-[85%]">
              {title}
            </h3>
            <Icon icon="solar:ticket-sale-outline" className="w-8 h-8 text-black opacity-80" />
          </div>
          
          <div className="flex justify-between items-end mt-4">
            <span className="text-gray-500 font-medium text-sm">
              [ {String(index + 1).padStart(2, '0')} ]
            </span>
            <p className="text-gray-600 text-sm max-w-[65%] text-right line-clamp-3">
              {excerpt}
            </p>
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
          padding: '22%', // Expose side slides heavily for coverflow effect
          gap: '2rem',
          arrows: false,
          pagination: false,
          breakpoints: {
            1024: { padding: '15%', gap: '1.5rem' },
            768: { padding: '10%', gap: '1rem' },
            640: { padding: '5%', gap: '0.75rem' },
          }
        }}
        onMove={(splide: any, newIndex: number) => setCurrentIndex(newIndex)}
      >
        <SplideTrack className="py-4 md:py-8">
          {promos.map((promo, i) => (
            <SplideSlide key={promo.id || i}>
              <CoverflowCard promo={promo} index={i} />
            </SplideSlide>
          ))}
        </SplideTrack>

        {/* Custom Navigation */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            className="w-10 h-10 flex items-center justify-center rounded-full bg-black/5 hover:bg-black/10 transition-colors text-black"
            onClick={() => splideRef.current?.splide.go('<')}
            aria-label="Previous slide"
          >
            <Icon icon="solar:alt-arrow-left-linear" className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2">
            {promos.map((_, i) => (
              <button
                key={i}
                className={`h-2 rounded-full transition-all duration-500 ${
                  i === currentIndex
                    ? 'bg-black w-8'
                    : 'bg-black/20 hover:bg-black/40 w-2'
                }`}
                onClick={() => splideRef.current?.splide.go(i)}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

          <button
            className="w-10 h-10 flex items-center justify-center rounded-full bg-black/5 hover:bg-black/10 transition-colors text-black"
            onClick={() => splideRef.current?.splide.go('>')}
            aria-label="Next slide"
          >
            <Icon icon="solar:alt-arrow-right-linear" className="w-5 h-5" />
          </button>
        </div>
      </Splide>

      {/* Global CSS for Coverflow & Expanding Card Effects */}
      <style dangerouslySetInnerHTML={{__html: `
        .seasonal-promo-slider .splide__list {
          align-items: center; /* Vertically center the inactive (shorter) slides */
        }
        .seasonal-promo-slider .splide__track {
          transition: transform 500ms cubic-bezier(0.25, 1, 0.5, 1);
          overflow: visible; /* Allow shadow bleeding */
        }
        .seasonal-promo-slider .splide__slide {
          transform: scale(0.85);
          transition: transform 600ms cubic-bezier(0.25, 1, 0.5, 1), opacity 600ms ease-out;
          opacity: 0.5;
        }
        .seasonal-promo-slider .splide__slide.is-active {
          transform: scale(1);
          opacity: 1;
          z-index: 10;
        }
      `}} />
    </div>
  );
};

export default SeasonalPromoSlider;

