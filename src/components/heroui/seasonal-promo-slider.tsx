"use client";

/**
 * SeasonalPromoSlider - Premium Alternating Cards Slider (Text & Image)
 * Designed to match the aesthetic of ss.png with Bengkel Wiguna brand guidelines.
 */

import React, { useRef, useMemo } from 'react';
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
  const splideRef = useRef<any>(null);

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
      {/* Header Container */}
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-8 sm:mb-12">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6">
          {/* Sisi Kiri: Judul Dua Baris */}
          <div className="flex flex-col">
            <span className="text-sm font-bold uppercase tracking-widest text-[#224297] mb-2">
              🔥 PROMO BULANAN
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-gray-900 leading-[1.1] font-sans">
              PROMO BULANAN,<br />BENGKEL WIGUNA
            </h2>
          </div>

          {/* Sisi Kanan: Navigasi Bulat Kustom */}
          <div className="flex gap-3 self-end sm:self-auto">
            <button
              onClick={() => splideRef.current?.splide.go('<')}
              className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-[#224297] hover:text-white hover:border-[#224297] transition-all duration-300"
              aria-label="Previous Slide"
            >
              <Icon icon="solar:arrow-left-linear" className="w-5 h-5" />
            </button>
            <button
              onClick={() => splideRef.current?.splide.go('>')}
              className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-[#224297] hover:text-white hover:border-[#224297] transition-all duration-300"
              aria-label="Next Slide"
            >
              <Icon icon="solar:arrow-right-linear" className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

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
        >
          <SplideTrack className="overflow-visible py-4">
            {slides.map((slide) => {
              const { promo, type, isDark, id } = slide;
              const title = getPromoTitle(promo);
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
                          ? 'bg-[#224297] text-white'
                          : 'bg-[#f4f6fa] text-[#224297]'
                      }`}
                    >
                      <div className="flex flex-col h-full justify-between">
                        <div className="flex flex-col">
                          <h3 className={`text-2xl sm:text-3xl font-black tracking-tight leading-tight uppercase font-sans line-clamp-3 ${
                            isDark ? 'text-white' : 'text-[#224297]'
                          }`}>
                            {title}
                          </h3>
                          <p className={`text-xs sm:text-sm mt-4 sm:mt-6 line-clamp-4 font-medium leading-relaxed ${
                            isDark ? 'text-white/80' : 'text-gray-500'
                          }`}>
                            {excerpt}
                          </p>
                        </div>

                        {/* Progress Bar Style Accent Line */}
                        <div className="relative w-full h-[2px] mt-8">
                          <div className={`absolute inset-0 h-full w-full ${isDark ? 'bg-white/10' : 'bg-[#224297]/10'}`} />
                          <div className={`absolute left-0 top-0 h-full w-1/4 ${isDark ? 'bg-[#ffd900]' : 'bg-[#224297]'}`} />
                        </div>
                      </div>
                    </Link>
                  ) : (
                    /* 2. KARTU GAMBAR */
                    <Link
                      href={`/promosi/${promo.slug}`}
                      className="block w-[280px] sm:w-[350px] md:w-[380px] h-[360px] sm:h-[420px] md:h-[440px] rounded-[2.5rem] overflow-hidden relative group hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)] transition-all duration-500 bg-gray-100"
                    >
                      <Image
                        src={img}
                        alt={title}
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
