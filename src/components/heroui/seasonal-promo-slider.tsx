"use client";

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
    return raw.replace(/<[^>]*>/g, '').trim() || 'Promo terbatas waktu';
  };
  const getPromoImg = (p: Promosi) => p.featured_img || p._embedded?.['wp:featuredmedia']?.[0]?.source_url || '/images/hero-desktop.webp';

  return (
    <div className="w-full relative mb-16 lg:mb-24 seasonal-promo-slider">
      
      {/* Optional Title like the image "Check out our projects" but we use the section title below usually. Let's keep it clean here as it's part of the section. */}
      
      <Splide
        ref={splideRef}
        hasTrack={false}
        options={{
          type: 'loop',
          focus: 'center',
          perPage: 1,
          padding: '20%', // Expose side slides
          gap: '2rem',
          arrows: false,
          pagination: false,
          breakpoints: {
            1024: { padding: '15%', gap: '1.5rem' },
            768: { padding: '10%', gap: '1rem' },
            640: { padding: '5%', gap: '1rem' },
          }
        }}
        onMove={(splide, newIndex) => setCurrentIndex(newIndex)}
      >
        <SplideTrack className="py-4 md:py-8">
          {promos.map((promo, i) => (
            <SplideSlide key={promo.id || i}>
              <Link href={`/promosi/${promo.slug}`} className="block w-full h-[250px] sm:h-[350px] md:h-[450px] relative rounded-[2rem] overflow-hidden group">
                <Image
                  src={getPromoImg(promo)}
                  alt={getPromoTitle(promo)}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />
                {/* Gradient Overlay for Text */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-100" />
                
                {/* Text Content in Liquid Glass */}
                <div className="absolute bottom-4 left-4 right-4 md:bottom-8 md:left-8 md:right-8 z-10 slide-content">
                  <div className="backdrop-blur-xl bg-white/15 dark:bg-black/30 border border-white/20 p-5 md:p-8 rounded-[2rem] shadow-2xl flex flex-col md:flex-row md:items-center justify-between gap-4 overflow-hidden relative">
                    {/* Optional internal glare effect */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-50 pointer-events-none" />
                    
                    <div className="relative z-10">
                      <h3 className="text-white text-xl md:text-3xl font-bold mb-2 drop-shadow-md">
                        {getPromoTitle(promo)}
                      </h3>
                      <p className="text-gray-200 text-sm md:text-base flex items-center gap-2 drop-shadow-md">
                        <Icon icon="solar:calendar-bold" className="w-4 h-4 md:w-5 md:h-5 text-[#ffd900]" />
                        {getPromoExcerpt(promo).slice(0, 80)}...
                      </p>
                    </div>
                    
                    <div className="relative z-10 flex-shrink-0 mt-2 md:mt-0">
                      <div className="bg-[#ffd900] text-black px-6 py-3 rounded-full font-bold text-sm hover:scale-105 hover:bg-white transition-all flex items-center justify-center gap-2 w-fit">
                        Klaim Sekarang <Icon icon="solar:arrow-right-linear" className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </SplideSlide>
          ))}
        </SplideTrack>

        {/* Custom Pagination and Navigation matches image `< 2 / 8 >` */}
        <div className="flex items-center justify-center gap-3 mt-4">
          <button 
            className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200/60 hover:bg-gray-300 transition-colors text-gray-500"
            onClick={() => splideRef.current?.splide.go('<')}
            aria-label="Previous slide"
          >
            <Icon icon="solar:alt-arrow-left-linear" className="w-5 h-5" />
          </button>
          
          <div className="text-sm font-semibold tracking-widest text-gray-400">
            <span className="text-blue-700 font-bold">{currentIndex + 1}</span> / {promos.length}
          </div>

          <button 
            className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200/60 hover:bg-gray-300 transition-colors text-gray-500"
            onClick={() => splideRef.current?.splide.go('>')}
            aria-label="Next slide"
          >
            <Icon icon="solar:alt-arrow-right-linear" className="w-5 h-5" />
          </button>
        </div>
      </Splide>

      {/* Global CSS for Coverflow effect using carousels-sliders skill principles */}
      <style dangerouslySetInnerHTML={{__html: `
        .seasonal-promo-slider .splide__track {
          transition: transform 400ms cubic-bezier(0.25, 0.1, 0.25, 1);
        }
        .seasonal-promo-slider .splide__slide {
          transform: scale(0.9);
          transition: transform 400ms ease-out, opacity 400ms ease-out;
          opacity: 0.6;
        }
        .seasonal-promo-slider .splide__slide.is-active {
          transform: scale(1);
          opacity: 1;
        }
        .seasonal-promo-slider .splide__slide .slide-content {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 400ms ease-out, transform 400ms ease-out;
        }
        .seasonal-promo-slider .splide__slide.is-active .slide-content {
          opacity: 1;
          transform: translateY(0);
          transition-delay: 150ms;
        }
      `}} />
    </div>
  );
};

export default SeasonalPromoSlider;
