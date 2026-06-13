/**
 * PromoHeroSlider — Big Full-Width Slider for Promosi Bulanan (Monthly Promotions)
 * This is the main hero slider displayed prominently on the homepage
 *
 * ✅ PERFORMANCE OPTIMIZATION:
 * - Lazy loading for non-visible images
 * - Proper sizing attributes
 * - CLS prevention with explicit aspect ratios
 * - Auto-pause on hover
 */

"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { stripHtml } from "@/lib/wordpress";
import { Promosi } from "@/types/wordpress";

interface PromoHeroSliderProps {
  items: Promosi[];
}

export default function PromoHeroSlider({ items = [] }: PromoHeroSliderProps) {
  const [SplideComponent, setSplideComponent] = useState<React.ComponentType<any> | null>(null);
  const [SplideSlideComponent, setSplideSlideComponent] = useState<React.ComponentType<any> | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const loadSplide = async () => {
      try {
        // Import Splide JS only (CSS should be handled at layout level)
        const { Splide, SplideSlide } = await import("@splidejs/react-splide");
        setSplideComponent(() => Splide);
        setSplideSlideComponent(() => SplideSlide);
        setIsLoaded(true);
      } catch (error) {
        console.warn('Splide loading failed:', error);
      }
    };

    loadSplide();
  }, []);

  if (!items || items.length === 0) return null;

  const splideOptions = {
    type: "loop" as const,
    perPage: 1,
    perMove: 1,
    gap: "0px",
    pagination: true,
    arrows: true,
    autoplay: true,
    interval: 6000,
    speed: 1000,
    pauseOnHover: true,
    pauseOnFocus: true,
    updateOnMove: true,
    classes: {
      pagination: "splide__pagination promo-hero-pagination",
      page: "splide__pagination__page promo-hero-page",
    },
  };

  // Skeleton loading state
  if (!isLoaded || !SplideComponent || !SplideSlideComponent) {
    return (
      <div className="promo-hero-container relative w-full">
        <div className="relative h-[400px] md:h-[500px] lg:h-[600px] bg-gradient-to-r from-brand-blue/10 to-brand-gold/10 animate-pulse">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 border-4 border-brand-blue/20 border-t-brand-blue rounded-full animate-spin mx-auto mb-4"></div>
              <p className="text-gray-400">Memuat promo...</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const Splide = SplideComponent;
  const Slide = SplideSlideComponent;

  return (
    <div className="promo-hero-container relative w-full">
      <Splide
        options={splideOptions}
        onMove={(splide: any) => setCurrentSlide(splide.index)}
      >
        {items.map((promo, index) => {
          const title = typeof promo.title === 'string' ? promo.title : promo.title?.rendered;
          const excerpt = stripHtml(typeof promo.excerpt === 'string' ? promo.excerpt : promo.excerpt?.rendered);
          const imageUrl = promo.featured_img || "/images/promosi/promo-default.jpg";
          const isActive = index === currentSlide;

          return (
            <Slide key={promo.id}>
              <div className="promo-hero-slide relative w-full h-[400px] md:h-[500px] lg:h-[600px]">
                {/* Background Image */}
                <div className="absolute inset-0">
                  <Image
                    src={imageUrl}
                    alt={title || "Promo Bengkel Wiguna"}
                    fill
                    priority={index === 0}
                    quality={90}
                    sizes="100vw"
                    className={`object-cover transition-all duration-1000 ${isActive ? 'scale-100' : 'scale-105'}`}
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 via-gray-900/40 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
                </div>

                {/* Content */}
                <div className="relative h-full max-w-screen-xl mx-auto px-4 flex items-center">
                  <div className="max-w-2xl">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 bg-brand-gold text-gray-900 font-bold px-4 py-2 rounded-full text-sm mb-4 shadow-lg">
                      <span className="text-lg">🔥</span>
                      <span>PROMO BULANAN</span>
                    </div>

                    {/* Title */}
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4 leading-tight">
                      {title}
                    </h2>

                    {/* Excerpt */}
                    <p className="text-lg md:text-xl text-white/90 mb-6 leading-relaxed line-clamp-2">
                      {excerpt}
                    </p>

                    {/* Price & Discount */}
                    {promo.harga_promo && (
                      <div className="flex items-center gap-4 mb-6">
                        {promo.harga_asli && (
                          <span className="text-xl text-white/60 line-through">
                            Rp {promo.harga_asli}
                          </span>
                        )}
                        <span className="text-3xl font-black text-brand-gold">
                          Rp {promo.harga_promo}
                        </span>
                        {promo.diskon_persen && (
                          <span className="bg-red-500 text-white font-bold px-3 py-1 rounded-lg text-sm">
                            -{promo.diskon_persen}%
                          </span>
                        )}
                      </div>
                    )}

                    {/* CTA Button */}
                    <Link
                      href={`/promosi/${promo.slug}`}
                      className="inline-flex items-center gap-3 bg-brand-gold hover:bg-brand-gold/90 text-gray-900 font-bold px-8 py-4 rounded-xl text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
                    >
                      <span>Ambil Promo Sekarang</span>
                      <Icon icon="solar:arrow-right-linear" width={24} />
                    </Link>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold/10 rounded-full -mr-48 -mt-48 blur-3xl" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-blue/20 rounded-full -ml-32 -mb-32 blur-3xl" />
              </div>
            </Slide>
          );
        })}
      </Splide>

      {/* Navigation Arrows Custom Style */}
      <style jsx global>{`
        .promo-hero-pagination {
          bottom: 30px !important;
          gap: 8px;
        }
        .promo-hero-page {
          background: rgba(255,255,255,0.4);
          width: 12px;
          height: 12px;
          transition: all 0.3s ease;
          border-radius: 50%;
        }
        .promo-hero-page.is-active {
          background: #ffd900;
          transform: scale(1.3);
          box-shadow: 0 0 20px rgba(255,217,0,0.5);
        }
        .promo-hero-slide .splide__arrow {
          background: rgba(255,255,255,0.9);
          width: 50px;
          height: 50px;
          border-radius: 50%;
          box-shadow: 0 4px 20px rgba(0,0,0,0.2);
          transition: all 0.3s ease;
        }
        .promo-hero-slide .splide__arrow:hover {
          background: white;
          transform: scale(1.1);
        }
        .promo-hero-slide .splide__arrow--prev {
          left: 20px;
        }
        .promo-hero-slide .splide__arrow--next {
          right: 20px;
        }
        .promo-hero-slide .splide__arrow svg {
          fill: #224297;
          width: 24px;
          height: 24px;
        }
      `}</style>
    </div>
  );
}
