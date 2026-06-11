/**
 * PromoSlider — High Fidelity Bexon-style Carousel
 * Optimized for Core Web Vitals
 *
 * ✅ PERFORMANCE OPTIMIZATION:
 * - Lazy loading for non-visible images
 * - Proper sizing attributes
 * - CLS prevention with explicit aspect ratios
 */

"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { stripHtml } from "@/lib/wordpress";
import { Promosi } from "@/types/wordpress";

interface PromoSliderProps {
  items: Promosi[];
}

export default function PromoSlider({ items = [] }: PromoSliderProps) {
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

    const element = document.getElementById('promo-slider-container');
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
    gap: "30px",
    pagination: true,
    arrows: true,
    autoplay: true,
    interval: 5000,
    speed: 800,
    breakpoints: {
      1200: { perPage: 3, gap: "20px" },
      992: { perPage: 2, gap: "20px" },
      768: { perPage: 1, gap: "15px" },
    },
    classes: {
      pagination: "splide__pagination promo-splide-pagination",
      page: "splide__pagination__page promo-splide-page",
    },
  };

  // ✅ Skeleton loading state
  if (!isLoaded || !SplideComponent || !SplideSlideComponent) {
    return (
      <div id="promo-slider-container" className="promo-slider-wrapper relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="animate-pulse">
              <div className="h-[360px] bg-gray-200 rounded-t-[12px]"></div>
              <div className="p-6 bg-white border rounded-b-[12px]">
                <div className="h-6 bg-gray-200 rounded w-3/4 mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-full mb-4"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  const Splide = SplideComponent;
  const Slide = SplideSlideComponent;

  return (
    <div id="promo-slider-container" className="promo-slider-wrapper relative">
      <Splide
        options={splideOptions}
      >
        {items.map((promo, index) => {
          const title = typeof promo.title === 'string' ? promo.title : promo.title?.rendered;
          const excerpt = stripHtml(typeof promo.excerpt === 'string' ? promo.excerpt : promo.excerpt?.rendered);
          const formattedIndex = String(index + 1).padStart(2, "0");
          const imageUrl = promo.featured_img || "/images/service/service-oli.svg";

          return (
            <Slide key={promo.id}>
              <div className="promo-card-bexon group">
                {/* 1. Full Image Header - CLS PREVENTION: Explicit height */}
                <div className="promo-card-thumb relative overflow-hidden rounded-t-[12px] bg-gray-50 h-[360px]">
                  <Link href={`/promosi/${promo.slug}`} className="block w-full h-full p-2">
                    <Image
                      src={imageUrl}
                      alt={title || "Promo Bengkel Wiguna"}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      loading={index === 0 ? "eager" : "lazy"}
                      priority={index === 0}
                      quality={index === 0 ? 85 : 75}
                    />
                  </Link>
                  <div className="absolute top-4 right-4 bg-brand-gold text-gray-900 font-bold px-4 py-1 rounded-full text-xs z-10 shadow-lg">
                    PROMO
                  </div>
                </div>

                {/* 2. Content Area */}
                <div className="promo-card-body p-6 bg-white border-x border-b border-gray-100 rounded-b-[12px] shadow-sm group-hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start gap-4 mb-3">
                    <span className="text-3xl font-black text-gray-600 group-hover:text-brand-gold transition-colors duration-300" suppressHydrationWarning>
                      {formattedIndex}.
                    </span>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 group-hover:text-brand-blue transition-colors mb-2 line-clamp-2">
                        <Link href={`/promosi/${promo.slug}`}>{title}</Link>
                      </h4>
                      <p className="text-gray-500 text-sm line-clamp-2 leading-relaxed">
                        {excerpt}
                      </p>
                    </div>
                  </div>

                  <div className="flex justify-between items-center mt-6 pt-4 border-t border-gray-50">
                    <Link
                      href={`/promosi/${promo.slug}`}
                      className="inline-flex items-center gap-2 text-brand-blue font-bold text-sm hover:gap-3 transition-all"
                    >
                      AMBIL PROMO <Icon icon="solar:arrow-right-linear" width={18} />
                    </Link>
                    <Icon
                      icon="solar:tag-bold-duotone"
                      className="text-brand-gold opacity-30 group-hover:opacity-100 transition-opacity"
                      width={24}
                    />
                  </div>
                </div>
              </div>
            </Slide>
          );
        })}
      </Splide>

      <style jsx global>{`
        .promo-splide-pagination {
          bottom: -40px;
        }
        .promo-splide-page {
          background: #ddd;
          width: 8px;
          height: 8px;
          transition: all 0.3s ease;
        }
        .promo-splide-page.is-active {
          background: #224297;
          transform: scale(1.5);
        }
        .promo-card-bexon {
          height: 100%;
          display: flex;
          flex-direction: column;
        }
        .promo-card-bexon:hover .promo-card-body {
            border-bottom-color: #191d85;
        }
      `}</style>
    </div>
  );
}