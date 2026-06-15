"use client";

/**
 * SeasonalPromoSlider - Premium Alternating Cards Slider (Text & Image)
 * Designed to match the aesthetic of the user's mockup with Bengkel Wiguna brand guidelines.
 */

import React, { useRef, useMemo, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { Promosi } from '@/types/wordpress';
import { Icon } from '@iconify/react';

interface SeasonalPromoSliderProps {
  promos: Promosi[];
  title?: string | string[]; // Title string or array of strings for exact line breaks
  subtitle?: string;
  showArrows?: boolean;
}

const SeasonalPromoSlider: React.FC<SeasonalPromoSliderProps> = ({
  promos = [],
  title,
  subtitle,
  showArrows = true,
}) => {
  const splideRef = useRef<any>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Map each promo into an alternating text card and image card sequence
  const slides = useMemo(() => {
    const list: Array<{
      id: string;
      type: 'text' | 'image';
      promo: Promosi;
      isDark: boolean;
    }> = [];

    promos.forEach((promo, idx) => {
      // Alternate dark theme for text cards (0 is dark, 1 is light, 2 is dark, etc.)
      const isDark = idx % 2 === 0;
      
      list.push({
        id: `text-${promo.id || idx}`,
        type: 'text',
        promo,
        isDark,
      });

      list.push({
        id: `image-${promo.id || idx}`,
        type: 'image',
        promo,
        isDark: false,
      });
    });

    return list;
  }, [promos]);

  if (promos.length === 0) return null;

  const getPromoTitle = (p: Promosi) => typeof p.title === 'string' ? p.title : p.title?.rendered || 'Promo Spesial';
  const getPromoExcerpt = (p: Promosi) => {
    const raw = typeof p.excerpt === 'string' ? p.excerpt : p.excerpt?.rendered || '';
    return raw.replace(/<[^>]*>/g, '').trim() || 'Promo terbatas waktu dari Bengkel Wiguna.';
  };
  const getPromoImg = (p: Promosi) => p.featured_img || p._embedded?.['wp:featuredmedia']?.[0]?.source_url || '/images/hero-desktop.webp';

  return (
    <div className="w-full relative seasonal-promo-slider overflow-x-hidden py-6">
      {/* Header Container (Title on the Left, Custom Navigation Arrows on the Right) */}
      {(title || showArrows) && (
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-8 sm:mb-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            {title && (
              <div className="flex flex-col">
                {subtitle && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#224297]/5 dark:bg-[#ffd900]/10 border border-[#224297]/10 dark:border-[#ffd900]/20 rounded-full text-[11px] font-black uppercase tracking-wider text-[#224297] dark:text-[#ffd900] mb-4 w-fit">
                    {subtitle}
                  </span>
                )}
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight leading-none uppercase font-sans text-[#1c150c] dark:text-white">
                  {typeof title === 'string' ? (
                    title
                  ) : (
                    title.map((line, idx) => (
                      <span key={idx} className="block">
                        {line}
                      </span>
                    ))
                  )}
                </h2>
              </div>
            )}

            {/* Sisi Kanan: Navigasi Bulat Kustom (Mockup Style) */}
            {showArrows && (
              <div className="flex gap-3 shrink-0 self-end md:mb-2 ml-auto">
                <button
                  onClick={() => splideRef.current?.splide.go('<')}
                  className="w-12 h-12 rounded-full border border-neutral-300 dark:border-neutral-700 flex items-center justify-center text-neutral-600 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-all duration-300"
                  aria-label="Previous Slide"
                >
                  <Icon icon="solar:arrow-left-linear" className="w-5 h-5" />
                </button>
                <button
                  onClick={() => splideRef.current?.splide.go('>')}
                  className="w-12 h-12 rounded-full bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 flex items-center justify-center hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-all duration-300 shadow-sm"
                  aria-label="Next Slide"
                >
                  <Icon icon="solar:arrow-right-linear" className="w-5 h-5" />
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Slider Container */}
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Splide
          ref={splideRef}
          hasTrack={false}
          options={{
            type: 'slide',
            autoWidth: true,
            focus: 0,
            gap: '2.5rem',
            arrows: false,
            pagination: false,
            drag: true,
            breakpoints: {
              768: { gap: '1.5rem' },
              640: { gap: '1rem' }
            }
          }}
          onMoved={(_: any, newIndex: number) => setCurrentIndex(newIndex)}
        >
          <SplideTrack className="overflow-visible py-4">
            {slides.map((slide) => {
              const { promo, type, isDark, id } = slide;
              const titleText = getPromoTitle(promo);
              const excerpt = getPromoExcerpt(promo);
              const img = getPromoImg(promo);

              return (
                <SplideSlide key={id}>
                  {type === 'text' ? (
                    /* 1. KARTU TEKS */
                    <Link
                      href={`/promosi/${promo.slug}`}
                      className={`block w-[280px] sm:w-[350px] md:w-[380px] h-[360px] sm:h-[420px] md:h-[440px] rounded-[2.5rem] p-8 sm:p-10 flex flex-col justify-between transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(34,66,151,0.08)] group ${
                        isDark
                          ? 'bg-[#1c150c] dark:bg-neutral-900 text-white'
                          : 'bg-[#f4ede4] dark:bg-neutral-950 text-[#1c150c] dark:text-neutral-100'
                      }`}
                    >
                      <div className="flex flex-col h-full justify-between">
                        <div className="flex flex-col">
                          <h3 className={`text-2xl sm:text-3xl font-extrabold tracking-tight leading-tight font-sans line-clamp-3 ${
                            isDark ? 'text-white' : 'text-[#1c150c] dark:text-white'
                          }`}>
                            {titleText}
                          </h3>
                          <p className={`text-xs sm:text-sm mt-4 sm:mt-6 line-clamp-4 font-medium leading-relaxed ${
                            isDark ? 'text-[#e3ded6] dark:text-neutral-300' : 'text-[#6e675c] dark:text-neutral-400'
                          }`}>
                            {excerpt}
                          </p>
                        </div>

                        {/* Progress Bar Style Accent Line */}
                        <div className="relative w-full h-[2px] mt-8">
                          <div className={`absolute inset-0 h-full w-full ${isDark ? 'bg-white/10' : 'bg-[#1c150c]/10 dark:bg-white/10'}`} />
                          <div className={`absolute left-0 top-0 h-full w-1/4 ${isDark ? 'bg-[#ffd900] dark:bg-[#ffd900]' : 'bg-[#1c150c] dark:bg-[#ffd900]'}`} />
                        </div>
                      </div>
                    </Link>
                  ) : (
                    /* 2. KARTU GAMBAR */
                    <Link
                      href={`/promosi/${promo.slug}`}
                      className="block w-[280px] sm:w-[350px] md:w-[380px] h-[360px] sm:h-[420px] md:h-[440px] rounded-[2.5rem] overflow-hidden relative group hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)] transition-all duration-500 bg-neutral-100 dark:bg-neutral-900"
                    >
                      <Image
                        src={img}
                        alt={titleText}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 1024px) 100vw, 30vw"
                      />
                      
                      {/* Discount Badge */}
                      {promo.diskon_persen && (
                        <div className="absolute top-6 left-6 z-10">
                          <span className="inline-block bg-[#ffd900] text-black text-xs sm:text-sm font-black px-4 py-2 rounded-full shadow-lg">
                            {promo.diskon_persen}% OFF
                          </span>
                        </div>
                      )}

                      {/* Subtle hover gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </Link>
                  )}
                </SplideSlide>
              );
            })}
          </SplideTrack>
        </Splide>

        {/* Indicator Dots */}
        <div className="flex items-center justify-center gap-2 mt-8 z-10 relative">
          {slides.map((_, i) => (
            <button
              key={i}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                i === currentIndex
                  ? 'bg-neutral-800 dark:bg-[#ffd900] w-8'
                  : 'bg-neutral-300 dark:bg-neutral-800 hover:bg-neutral-400 dark:hover:bg-neutral-700 w-2.5'
              }`}
              onClick={() => splideRef.current?.splide.go(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .seasonal-promo-slider .splide__track {
          overflow: visible !important;
        }
      `}} />
    </div>
  );
};

export default SeasonalPromoSlider;
