"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { stripHtml } from "@/lib/wordpress";
import { Promosi } from "@/types/wordpress";
import { useDisclosure } from "@nextui-org/react";
import PromoModal from "@/components/heroui/PromoModal";

interface PromoSliderProps {
  items: Promosi[];
}

export default function PromoSlider({ items = [] }: PromoSliderProps) {
  const [SplideComponent, setSplideComponent] = useState<any>(null);
  const [SplideSlideComponent, setSplideSlideComponent] = useState<any>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [selectedPromo, setSelectedPromo] = useState<Promosi | null>(null);

  const handleOpenPromo = (promo: Promosi) => {
    setSelectedPromo(promo);
    onOpen();
  };

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

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          loadSplide();
          observer.disconnect();
        }
      },
      { rootMargin: '200px' }
    );

    const element = document.getElementById('promo-regular-slider');
    if (element) {
      observer.observe(element);
    } else {
      loadSplide();
    }

    return () => observer.disconnect();
  }, []);

  if (!items || items.length === 0) return null;

  // ✅ REMOVED ARROWS - Only dot pagination
  const splideOptions = {
    type: "slide" as const,
    perPage: 3,
    perMove: 1,
    gap: "32px",
    pagination: true,
    arrows: false,
    drag: true,
    breakpoints: {
      1024: { perPage: 2, gap: "24px" },
      640: { perPage: 1, gap: "16px" },
    },
    classes: {
      pagination: 'splide__pagination nio-card-pagination',
      page: 'splide__pagination__page nio-card-page',
    },
  };

  if (!isLoaded || !SplideComponent || !SplideSlideComponent) {
    return (
      <div id="promo-regular-slider" className="w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="animate-pulse flex flex-col gap-4">
              <div className="h-[280px] bg-gray-100 rounded-3xl"></div>
              <div className="h-5 bg-gray-100 rounded w-1/2"></div>
              <div className="h-4 bg-gray-50 rounded w-full"></div>
              <div className="h-4 bg-gray-50 rounded w-3/4"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  const Splide = SplideComponent;
  const Slide = SplideSlideComponent;

  return (
    <div id="promo-regular-slider" className="w-full pb-8">
      <div className="relative">
        <Splide options={splideOptions}>
          {items.map((promo) => {
            const title = typeof promo.title === 'string' ? promo.title : promo.title?.rendered;
            const excerpt = stripHtml(typeof promo.excerpt === 'string' ? promo.excerpt : promo.excerpt?.rendered);
            const imageUrl = promo.featured_img || "/images/promosi/promo-default.jpg";

            return (
              <Slide key={promo.id}>
                <button
                  onClick={() => handleOpenPromo(promo)}
                  className="group block h-full flex flex-col cursor-pointer bg-white/60 backdrop-blur-3xl border border-white shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] rounded-[2rem] p-3.5 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-white/80 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] hover:-translate-y-2 text-left w-full"
                >

                  {/* Clean Image Card */}
                  <div className="relative w-full aspect-[4/5] rounded-[1.25rem] overflow-hidden bg-gray-100 mb-4">
                    {/* Discount Badge */}
                    {promo.diskon_persen && (
                      <div className="absolute top-4 left-4 z-10 bg-[#00B14F] text-white text-[10px] font-bold py-1.5 px-3 rounded-full shadow-md tracking-wide">
                        {promo.diskon_persen}% OFF
                      </div>
                    )}

                    <Image
                      src={imageUrl}
                      alt={title || "Promo"}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-110"
                    />
                  </div>

                  {/* Minimalist Text Below Image */}
                  <div className="flex flex-col flex-grow px-2 pb-2">
                    <h4 className="text-base font-bold text-gray-900 mb-1 truncate group-hover:text-[#00B14F] transition-colors">
                      {title}
                    </h4>

                    <p className="text-xs text-gray-500 font-medium truncate mb-3">
                      {excerpt || "Spesial Bengkel Wiguna"}
                    </p>

                    <div className="mt-auto flex items-center gap-x-2">
                      {promo.harga_promo ? (
                        <>
                          <span className="text-lg font-bold text-gray-900">
                            {promo.harga_promo}
                          </span>
                          {promo.harga_asli && (
                            <span className="text-xs font-semibold text-gray-400 line-through">
                              {promo.harga_asli}
                            </span>
                          )}
                        </>
                      ) : (
                        <span className="text-lg font-bold text-gray-900">
                          {promo.harga_asli || "Lihat Detail"}
                        </span>
                      )}
                    </div>
                  </div>

                </button>
              </Slide>
            );
          })}
        </Splide>

        <PromoModal isOpen={isOpen} onOpenChange={onOpenChange} promo={selectedPromo} />

        {/* Original Light Style Dot Pagination */}
        <style jsx global>{`
          .nio-card-pagination {
            bottom: -30px !important;
            padding: 0 !important;
          }
          .nio-card-page {
            background: #e5e7eb !important;
            border: none !important;
            width: 8px !important;
            height: 8px !important;
            margin: 3px !important;
            transition: all 0.3s ease !important;
            opacity: 1 !important;
          }
          .nio-card-page.is-active {
            background: #00B14F !important;
            transform: scale(1.3) !important;
            width: 16px !important;
            border-radius: 4px !important;
          }
          .nio-card-page:hover {
            background: #d1d5db !important;
          }
          .nio-card-page.is-active:hover {
            background: #00B14F !important;
          }
        `}</style>
      </div>
    </div>
  );
}
