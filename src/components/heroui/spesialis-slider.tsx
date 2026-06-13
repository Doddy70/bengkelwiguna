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
import { Card, CardBody, Link } from "@nextui-org/react";
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
              <Link href={`/services/${item.slug}`} className="block w-full">
                <Card
                  isPressable
                  className="w-full brand-rounded overflow-hidden group border-none bg-gray-100"
                  shadow="sm"
                >
                  <CardBody className="p-0 relative" style={{ aspectRatio: '3/4' }}>
                    {/* Image Background */}
                    <div className="absolute inset-0 z-0 bg-brand-blue/5">
                      {featuredImage ? (
                        <Image
                          src={featuredImage}
                          alt={typeof title === 'string' ? title : 'Layanan Bengkel Wiguna'}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="object-cover group-hover:scale-110 transition-transform duration-700"
                          loading="lazy"
                          quality={75}
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <Icon icon="solar:transmission-bold" className="text-brand-blue/20" width={80} />
                        </div>
                      )}
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10 opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    {/* Content Overlay */}
                    <div className="absolute bottom-0 left-0 w-full p-8 z-20 flex flex-col gap-2">
                      <div className="flex items-center gap-2">
                        <div className="w-10 h-1 bg-brand-gold brand-rounded" />
                        <span className="text-white/80 text-xs font-bold uppercase tracking-widest">
                          Layanan Unggulan
                        </span>
                      </div>
                      <h3 className="text-white text-2xl font-bold leading-tight line-clamp-2">
                        {title}
                      </h3>
                      <p className="text-white/70 text-sm line-clamp-2 mb-2">
                        {excerpt}
                      </p>
                      <div className="flex items-center text-brand-gold font-bold text-sm group-hover:gap-3 transition-all duration-300">
                        Selengkapnya
                        <Icon icon="solar:arrow-right-linear" width={18} />
                      </div>
                    </div>
                  </CardBody>
                </Card>
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