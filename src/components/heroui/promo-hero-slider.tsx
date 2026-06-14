"use client";

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Promosi } from "@/types/wordpress";
import { Icon } from "@iconify/react";

interface PromoHeroSliderProps {
  items: Promosi[];
}

export default function PromoHeroSlider({ items = [] }: PromoHeroSliderProps) {
  const [SplideComponent, setSplideComponent] = useState<any>(null);
  const [SplideSlideComponent, setSplideSlideComponent] = useState<any>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const splideRef = useRef<any>(null);
  const thumbsContainerRef = useRef<HTMLDivElement>(null);

  // Auto-scroll the thumbnail container when activeIndex changes
  useEffect(() => {
    if (thumbsContainerRef.current && items.length > 3) {
      const activeThumb = thumbsContainerRef.current.children[activeIndex] as HTMLElement;
      if (activeThumb) {
        activeThumb.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    }
  }, [activeIndex, items.length]);

  useEffect(() => {
    const loadSplide = async () => {
      try {
        await import("@splidejs/splide/dist/css/splide.min.css");
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

  if (!isLoaded || !SplideComponent || !SplideSlideComponent) {
    return (
      <div className="w-full mb-16 px-4 lg:px-8">
        <div className="bg-brand-blue rounded-xl h-[400px] md:h-[500px] animate-pulse w-full"></div>
      </div>
    );
  }

  const Splide = SplideComponent;
  const Slide = SplideSlideComponent;

  // Format Date helper
  const formatDateToIndonesian = (dateStr?: string) => {
    if (!dateStr) return null;
    try {
      const date = new Date(dateStr);
      return new Intl.DateTimeFormat('id-ID', { day: 'numeric', month: 'long', year: 'numeric' }).format(date);
    } catch (e) { return dateStr; }
  };

  return (
    <div className="w-full mb-20 px-4 lg:px-8">
      <div className="w-full max-w-[1400px] mx-auto">

        {/* Main Slider Area */}
        <div className="w-full relative rounded-2xl overflow-hidden">
          <Splide
            ref={splideRef}
            options={{
              type: "loop",
              perPage: 1,
              arrows: false,
              pagination: false,
              autoplay: true,
              interval: 6000,
              speed: 800,
              breakpoints: {
                1024: { height: "500px" },
                768: { height: "400px" },
                480: { height: "350px" },
              },
            }}
            onMoved={(_splide: any, newIndex: number) => setActiveIndex(newIndex)}
          >
            {items.map((promo, index) => {
              const title = typeof promo.title === 'string' ? promo.title : promo.title?.rendered;
              const imageUrl = promo.featured_img || "/images/promosi/promo-default.jpg";
              const endDate = formatDateToIndonesian(promo.tanggal_selesai);

              return (
                <Slide key={promo.id} className="relative overflow-hidden rounded-2xl h-[350px] md:h-[400px] lg:h-[500px] bg-black">

                  {/* Background Image */}
                  <Image
                    src={imageUrl}
                    alt={title || "Promo Bengkel Wiguna"}
                    fill
                    priority={index === 0}
                    quality={95}
                    sizes="100vw"
                    className="object-cover opacity-90 transition-transform duration-[10000ms] hover:scale-110"
                  />

                  {/* Gradient Overlay (Left to Right) */}
                  <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-r from-black/90 via-black/50 to-transparent"></div>

                  {/* Content Overlay */}
                  <div className="absolute inset-0 z-20 p-8 md:p-12 lg:p-16 flex flex-col justify-between w-full md:w-2/3 lg:w-1/2">

                    {/* Top Label */}
                    <div className="flex flex-row gap-4 items-center">
                      <div className="w-14 h-14 bg-brand-gold rounded-full flex items-center justify-center shadow-lg">
                        <Icon icon="solar:tag-price-bold-duotone" className="w-7 h-7 text-brand-blue" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-white/80 text-sm font-semibold tracking-wider uppercase">
                          Promo Bulan Ini
                        </span>
                        {promo.diskon_persen && (
                          <span className="text-brand-gold font-bold">
                            Diskon {promo.diskon_persen}%
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Main Title & Price */}
                    <div className="text-white flex flex-col mt-auto">
                      <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight mb-4 text-balance drop-shadow-md">
                        {title}
                      </h2>

                      {promo.harga_promo && (
                        <div className="flex items-end gap-3 mb-6">
                          <span className="text-4xl md:text-5xl font-black text-brand-gold drop-shadow-md">
                            {promo.harga_promo}
                          </span>
                          {promo.harga_asli && (
                            <span className="text-xl md:text-2xl font-bold text-gray-400 line-through mb-1">
                              {promo.harga_asli}
                            </span>
                          )}
                        </div>
                      )}

                      <div className="flex flex-wrap gap-4 mt-2">
                        <Link
                          href={`/promosi/${promo.slug}`}
                          className="inline-flex items-center gap-2 bg-brand-gold hover:bg-white text-brand-blue px-6 py-3 rounded-full text-sm font-bold transition-all shadow-lg hover:shadow-xl"
                        >
                          Lihat Promo
                          <Icon icon="solar:arrow-right-linear" width={18} />
                        </Link>
                        {endDate && (
                          <span className="inline-flex items-center gap-2 px-4 py-3 bg-white/10 backdrop-blur-md rounded-full text-sm font-medium text-white border border-white/20">
                            Berakhir: {endDate}
                          </span>
                        )}
                      </div>
                    </div>

                  </div>
                </Slide>
              );
            })}
          </Splide>
        </div>

        {/* Thumbnails Row (Horizontal Scroll) */}
        <div 
          ref={thumbsContainerRef}
          className="flex flex-nowrap overflow-x-auto gap-4 mt-4 lg:mt-6 pb-4 snap-x"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {/* Hide scrollbar for Chrome/Safari/Webkit */}
          <style dangerouslySetInnerHTML={{__html: `
            .overflow-x-auto::-webkit-scrollbar { display: none; }
          `}} />
          
          {items.map((thumb, index) => {
            const title = typeof thumb.title === 'string' ? thumb.title : thumb.title?.rendered;
            const isActive = index === activeIndex;
            return (
              <div
                key={thumb.id}
                onClick={() => splideRef.current?.go(index)}
                className={`flex-none w-[85%] sm:w-[70%] md:w-[calc(50%-8px)] lg:w-[calc(33.333%-11px)] flex flex-row gap-4 items-center rounded-2xl p-4 lg:p-5 cursor-pointer transition-all duration-300 snap-center ${isActive
                    ? "shadow-lg bg-brand-blue transform -translate-y-1"
                    : "hover:shadow-md bg-white border border-gray-100"
                  }`}
              >
                {/* Number Circle */}
                <div className="flex-shrink-0">
                  <div className={`flex items-center justify-center w-12 h-12 lg:w-14 lg:h-14 rounded-full text-2xl font-black transition-colors ${isActive ? "bg-white text-brand-blue" : "bg-gray-100 text-gray-500"
                    }`}>
                    {index + 1}
                  </div>
                </div>

                {/* Text Content */}
                <div className="flex flex-col overflow-hidden">
                  <h3 className={`text-base lg:text-lg font-bold truncate transition-colors ${isActive ? "text-white" : "text-gray-900"
                    }`}>
                    {title}
                  </h3>
                  {thumb.harga_promo ? (
                    <p className={`text-sm font-semibold mt-0.5 transition-colors ${isActive ? "text-brand-gold" : "text-brand-blue"
                      }`}>
                      Mulai {thumb.harga_promo}
                    </p>
                  ) : (
                    <p className={`text-sm mt-0.5 transition-colors ${isActive ? "text-white/80" : "text-gray-500"
                      }`}>
                      Lihat penawaran
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
