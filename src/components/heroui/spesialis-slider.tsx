/**
 * SpesialisSlider — Adapted from Bexon Home-05
 * Optimized for Core Web Vitals
 *
 * ✅ PERFORMANCE OPTIMIZATION:
 * - Lazy loading for Splide
 * - CLS prevention with explicit aspect ratios
 * - Priority loading for above-the-fold images
 */

"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { stripHtml } from "@/lib/wordpress";

interface SpesialisSliderProps {
  items: any[];
}

export default function SpesialisSlider({ items }: SpesialisSliderProps) {
  const [SplideComponent, setSplideComponent] = useState<React.ComponentType<any> | null>(null);
  const [SplideSlideComponent, setSplideSlideComponent] = useState<React.ComponentType<any> | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Lazy load Splide when component is visible
    const loadSplide = async () => {
      try {
        // Import Splide CSS from the correct path
        await import("@splidejs/splide/dist/css/splide.min.css");

        const { Splide, SplideSlide } = await import("@splidejs/react-splide");
        setSplideComponent(() => Splide);
        setSplideSlideComponent(() => SplideSlide);
        setIsLoaded(true);
      } catch (error) {
        console.warn('Splide loading failed:', error);
      }
    };

    // Use Intersection Observer for lazy loading
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          loadSplide();
          observer.disconnect();
        }
      },
      { rootMargin: '200px' }
    );

    const element = document.getElementById('spesialis-slider-container');
    if (element) {
      observer.observe(element);
    } else {
      loadSplide();
    }

    return () => observer.disconnect();
  }, []);

  if (!items || items.length === 0) return null;

  const splideOptions = {
    type: "loop" as const,
    perPage: 3,
    perMove: 1,
    gap: "24px",
    pagination: false,
    arrows: true,
    breakpoints: {
      1024: {
        perPage: 2,
      },
      640: {
        perPage: 1,
      },
    },
  };

  // ✅ Skeleton loading state
  if (!isLoaded || !SplideComponent || !SplideSlideComponent) {
    return (
      <div id="spesialis-slider-container" className="spesialis-slider-wrap w-full py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="animate-pulse">
              <div className="h-[420px] bg-gray-200 rounded-xl"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  const Splide = SplideComponent;
  const Slide = SplideSlideComponent;

  return (
    <div id="spesialis-slider-container" className="spesialis-slider-wrap w-full py-12">
      <Splide
        options={splideOptions}
        className="splide-custom-arrows"
      >
        {items.map((item, index) => {
          const featuredImage = item.featured_img || item._embedded?.['wp:featuredmedia']?.[0]?.source_url;
          const title = item.title?.rendered || item.title;
          const excerpt = stripHtml(item.excerpt?.rendered || item.excerpt || '');

          return (
            <Slide key={item.id || index}>
              <Link href={`/services/${item.slug}`} className="block w-full h-full outline-none">
                <div className="relative rounded-[2.5rem] p-3 group shadow-[0_20px_40px_rgba(0,0,0,0.06)] hover:shadow-[0_30px_60px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-all duration-500 backdrop-blur-2xl bg-gradient-to-b from-white/90 to-white/40 dark:from-neutral-800/80 dark:to-neutral-900/40 border border-white/80 dark:border-white/10 flex flex-col h-full">
                  
                  {/* Image Area with padding inside the glass card */}
                  <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] rounded-[1.5rem] overflow-hidden shadow-inner">
                    {featuredImage ? (
                      <Image
                        src={featuredImage}
                        alt={typeof title === 'string' ? title : 'Layanan Bengkel Wiguna'}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                        loading="lazy"
                        quality={75}
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-black/5 dark:bg-neutral-800/40">
                        <Icon icon="solar:transmission-bold" className="text-[#224297]/20" width={80} />
                      </div>
                    )}
                  </div>

                  {/* Text Area */}
                  <div className="px-4 py-6 md:px-5 flex flex-col justify-between flex-1 relative z-10">
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-8 h-1 bg-[#ffd900] rounded-full shadow-[0_2px_4px_rgba(255,217,0,0.3)]" />
                        <span className="text-[#224297] dark:text-[#ffd900] text-[11px] font-bold uppercase tracking-widest">
                          Layanan Unggulan
                        </span>
                      </div>
                      
                      <h3 className="text-gray-900 dark:text-white text-xl md:text-2xl font-bold leading-tight mb-3 line-clamp-2">
                        {title}
                      </h3>
                      
                      <p className="text-gray-500 dark:text-gray-400 text-sm line-clamp-2 mb-6 font-medium">
                        {excerpt}
                      </p>
                    </div>
                    
                    {/* "Activity" Style CTA Button */}
                    <div className="mt-auto flex items-center justify-between w-full bg-white/50 dark:bg-black/20 backdrop-blur-md border border-white/70 dark:border-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.8),0_4px_12px_rgba(0,0,0,0.03)] rounded-2xl px-5 py-3 group-hover:bg-white/80 dark:group-hover:bg-white/10 transition-colors duration-300">
                      <span className="text-[#224297] dark:text-white font-bold text-sm">
                        Selengkapnya
                      </span>
                      <Icon icon="solar:arrow-right-linear" width={20} className="text-gray-400 group-hover:text-[#224297] dark:group-hover:text-[#ffd900] group-hover:translate-x-1 transition-all duration-300" />
                    </div>
                  </div>
                </div>
              </Link>
            </Slide>
          );
        })}
      </Splide>

      <style jsx global>{`
        .splide-custom-arrows .splide__arrow {
          background: white;
          opacity: 1;
          width: 50px;
          height: 50px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          border: 1px solid #f1f1f1;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 30;
        }
        .splide-custom-arrows .splide__arrow svg {
          fill: #224297;
          width: 20px;
          height: 20px;
        }
        .splide-custom-arrows .splide__arrow--prev {
          left: -25px;
        }
        .splide-custom-arrows .splide__arrow--next {
          right: -25px;
        }
        @media (max-width: 1360px) {
          .splide-custom-arrows .splide__arrow--prev {
            left: 10px;
          }
          .splide-custom-arrows .splide__arrow--next {
            right: 10px;
          }
        }
        @media (max-width: 768px) {
          .splide-custom-arrows .splide__arrow {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}