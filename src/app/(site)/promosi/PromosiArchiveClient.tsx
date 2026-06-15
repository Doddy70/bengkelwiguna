"use client";

import React, { useState, useRef } from "react";
import { Promosi } from "@/types/wordpress";
import { useDisclosure } from "@nextui-org/react";
import PromoModal from "@/components/heroui/PromoModal";
import WigunaCard from "@/components/ui/WigunaCard";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { Icon } from '@iconify/react';

interface PromosiArchiveProps {
  promos: Promosi[];
}

export default function PromosiArchiveClient({ promos }: PromosiArchiveProps) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [selectedPromo, setSelectedPromo] = useState<Promosi | null>(null);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const splideRef = useRef<any>(null);

  const handleOpenPromo = (promo: Promosi) => {
    setSelectedPromo(promo);
    onOpen();
  };

  // Pisahkan Promo Bulanan/Seasonal dan Promo Lainnya
  const isSeasonal = (p: Promosi) => p.kategori_promosi && (
    p.kategori_promosi.toLowerCase().includes("bulanan") || 
    p.kategori_promosi.toLowerCase().includes("seasonal")
  );

  let monthlyPromos = promos.filter(p => isSeasonal(p));
  let otherPromos = promos.filter(p => !isSeasonal(p));

  // Fallback jika tidak ada kategori "Bulanan"/"Seasonal" sama sekali, ambil 3 promo pertama
  if (monthlyPromos.length === 0 && promos.length > 0) {
    monthlyPromos = promos.slice(0, 3);
    otherPromos = promos.slice(3);
  }

  const splideOptions = {
    type: monthlyPromos.length > 1 ? "loop" : "slide",
    perPage: Math.min(3, monthlyPromos.length) || 1,
    gap: "24px",
    arrows: false,
    pagination: false,
    drag: monthlyPromos.length > 1,
    breakpoints: {
      1024: { perPage: Math.min(2, monthlyPromos.length) || 1 },
      640: { perPage: 1 }
    }
  };

  return (
    <>
      <div className="bg-[#fcfcfc] dark:bg-neutral-950 min-h-screen pt-32 pb-20 overflow-hidden relative font-dm">
        {/* Background Decorative Elements for Liquid Glass feel */}
        <div className="absolute top-40 -left-64 w-96 h-96 bg-[#224297]/10 dark:bg-[#224297]/20 rounded-full mix-blend-multiply filter blur-[128px] opacity-40 animate-blob"></div>
        <div className="absolute top-40 -right-64 w-96 h-96 bg-[#ffd900]/10 dark:bg-[#ffd900]/20 rounded-full mix-blend-multiply filter blur-[128px] opacity-40 animate-blob animation-delay-2000"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Section 1: Promo Bulanan / Seasonal Slider (Carousel Card Slider) */}
          {monthlyPromos.length > 0 && (
            <div className="mb-20">
              {/* Header Row with Navigation Arrows */}
              <div className="flex justify-between items-end mb-8">
                <div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-red-50 dark:bg-red-950/20 border border-red-200/40 rounded-full text-[11px] font-black uppercase tracking-wider text-red-600 dark:text-red-400 mb-3">
                    🔥 Promo Terbatas
                  </span>
                  <h2 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white uppercase tracking-tight">
                    Promo Bulan Ini
                  </h2>
                </div>

                {monthlyPromos.length > 1 && (
                  <div className="flex gap-3">
                    <button
                      onClick={() => splideRef.current?.splide.go('<')}
                      className="w-12 h-12 rounded-full border border-gray-200 dark:border-neutral-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-[#224297] hover:text-white dark:hover:bg-[#ffd900] dark:hover:text-black hover:border-transparent transition-all duration-300 shadow-sm"
                      aria-label="Previous Slide"
                    >
                      <Icon icon="solar:arrow-left-linear" className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => splideRef.current?.splide.go('>')}
                      className="w-12 h-12 rounded-full border border-gray-200 dark:border-neutral-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-[#224297] hover:text-white dark:hover:bg-[#ffd900] dark:hover:text-black hover:border-transparent transition-all duration-300 shadow-sm"
                      aria-label="Next Slide"
                    >
                      <Icon icon="solar:arrow-right-linear" className="w-5 h-5" />
                    </button>
                  </div>
                )}
              </div>

              {/* Splide Carousel */}
              <div className="w-full relative">
                <Splide
                  ref={splideRef}
                  options={splideOptions}
                  onMoved={(_: any, newIndex: number) => setCurrentSlideIndex(newIndex)}
                >
                  {monthlyPromos.map((promo, idx) => {
                    const title = typeof promo.title === 'string' ? promo.title : promo.title?.rendered || '';
                    const rawExcerpt = typeof promo.excerpt === 'string' ? promo.excerpt : promo.excerpt?.rendered || '';
                    const excerpt = rawExcerpt ? rawExcerpt.replace(/<[^>]*>/g, '').trim().slice(0, 100) + '...' : undefined;
                    
                    return (
                      <SplideSlide key={promo.id || idx}>
                        <WigunaCard
                          image={promo.featured_img || "/images/promosi/promo-default.jpg"}
                          imageAspectRatio="4/5"
                          tag={promo.kategori_promosi || "Promo Bulanan"}
                          title={title}
                          excerpt={excerpt}
                          variant="overlay"
                          price={promo.harga_promo || 'Hubungi Kami'}
                          oldPrice={promo.harga_asli && promo.harga_promo ? promo.harga_asli : undefined}
                          badgeText={promo.harga_asli && promo.harga_promo ? "Sale" : undefined}
                          buttonText="Lihat Detail"
                          secondaryIcon="solar:chat-round-line-linear"
                          onClick={() => handleOpenPromo(promo)}
                          onSecondaryClick={() => {
                            window.open(`https://wa.me/6287817773888?text=Halo%20Bengkel%20Wiguna,%20saya%20tertarik%20dengan%20promo%20${encodeURIComponent(title)}`, '_blank');
                          }}
                        />
                      </SplideSlide>
                    );
                  })}
                </Splide>

                {/* Splide Dots (if multiple slides) */}
                {monthlyPromos.length > 1 && (
                  <div className="flex items-center justify-center gap-2 mt-8 z-10 relative">
                    {monthlyPromos.map((_, i) => (
                      <button
                        key={i}
                        className={`h-2.5 rounded-full transition-all duration-300 ${
                          i === currentSlideIndex
                            ? 'bg-[#224297] dark:bg-[#ffd900] w-8'
                            : 'bg-gray-300 dark:bg-neutral-800 hover:bg-gray-400 dark:hover:bg-neutral-700 w-2.5'
                        }`}
                        onClick={() => splideRef.current?.splide.go(i)}
                        aria-label={`Go to slide ${i + 1}`}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Section 2: Promo Lainnya (4-Grid Liquid Glass Cards) */}
          {otherPromos.length > 0 && (
            <div className="mt-24">
              <div className="text-center mb-12">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-50 dark:bg-neutral-900 border border-[#224297]/10 dark:border-neutral-800 rounded-full text-[11px] font-black uppercase tracking-wider text-[#224297] dark:text-[#ffd900] mb-3">
                  🏷️ Penawaran Lainnya
                </span>
                <h2 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white uppercase tracking-tight">Promo Lainnya</h2>
                <p className="text-gray-500 dark:text-gray-400 text-sm font-medium mt-2">Jelajahi berbagai paket servis dan penawaran menarik lainnya.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {otherPromos.map(promo => (
                  <div key={promo.slug}>
                    <WigunaCard
                      image={promo.featured_img || "/images/promosi/promo-default.jpg"}
                      imageAspectRatio="4/5"
                      tag={promo.kategori_promosi || "Promo Spesial"}
                      title={typeof promo.title === 'string' ? promo.title : promo.title?.rendered || ''}
                      excerpt={(() => {
                        const raw = typeof promo.excerpt === 'string' ? promo.excerpt : (promo.excerpt as any)?.rendered || '';
                        return raw ? raw.replace(/<[^>]*>/g, '').trim().slice(0, 100) + '...' : undefined;
                      })()}
                      variant="overlay"
                      price={promo.harga_promo || 'Hubungi Kami'}
                      oldPrice={promo.harga_asli && promo.harga_promo ? promo.harga_asli : undefined}
                      badgeText={promo.harga_asli && promo.harga_promo ? "Sale" : undefined}
                      buttonText="Lihat Detail"
                      secondaryIcon="solar:chat-round-line-linear"
                      onClick={() => handleOpenPromo(promo)}
                      onSecondaryClick={() => {
                        const titleStr = typeof promo.title === 'string' ? promo.title : promo.title?.rendered || '';
                        window.open(`https://wa.me/6287817773888?text=Halo%20Bengkel%20Wiguna,%20saya%20tertarik%20dengan%20promo%20${encodeURIComponent(titleStr)}`, '_blank');
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </div>

      {/* Popout Promo Modal */}
      <PromoModal isOpen={isOpen} onOpenChange={onOpenChange} promo={selectedPromo} />
    </>
  );
}