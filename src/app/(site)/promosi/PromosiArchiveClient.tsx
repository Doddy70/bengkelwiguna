"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Promosi } from "@/types/wordpress";
import UIMainSlider, { UIMainSlide } from "@/components/ui/UIMainSlider";
import { useDisclosure } from "@nextui-org/react";
import PromoModal from "@/components/heroui/PromoModal";

function PromoGlassCard({ promo, onClick }: { promo: Promosi; onClick: () => void }) {
  const title = typeof promo.title === 'string' ? promo.title : promo.title?.rendered || '';
  
  // Calculate discount for Sale badge
  const hasDiscount = promo.harga_asli && promo.harga_promo;

  return (
    <div className="group relative p-4 rounded-[24px] border border-white/40 shadow-[0_8px_32px_0_rgba(31,38,135,0.05)] backdrop-blur-xl bg-white/40 flex flex-col transition-all hover:shadow-xl hover:-translate-y-1">
      {/* Sale Badge */}
      {hasDiscount && (
        <div className="absolute top-4 left-4 z-10 bg-gray-900 text-white text-[11px] uppercase tracking-wider font-bold px-2.5 py-1 rounded-md">
          Sale
        </div>
      )}
      
      {/* Image */}
      <div 
        className="relative w-full aspect-[4/5] bg-gray-100 rounded-xl overflow-hidden mb-4 border border-gray-100/50 cursor-pointer"
        onClick={onClick}
      >
        {promo.featured_img ? (
          <Image
            src={promo.featured_img}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400 bg-gray-50">No Image</div>
        )}
      </div>
      
      {/* Content */}
      <div className="flex flex-col flex-1 px-1">
        <h3 className="text-[15px] font-semibold text-gray-900 mb-1.5 line-clamp-2 leading-tight">{title}</h3>
        <div className="flex items-center gap-2 mb-5 mt-auto">
          <span className="text-[15px] font-bold text-gray-900">{promo.harga_promo || 'Hubungi Kami'}</span>
          {hasDiscount && (
            <span className="text-xs text-gray-400 line-through">{promo.harga_asli}</span>
          )}
        </div>
        
        {/* Animated Button */}
        <button 
          onClick={onClick}
          className="mt-auto relative overflow-hidden w-full bg-white border border-gray-200 text-gray-900 text-[13px] font-bold py-2.5 rounded-lg text-center transition-all duration-300 group-hover:border-[#224297] group-hover:text-white"
        >
          {/* Background sliding effect */}
          <span className="absolute inset-0 bg-[#224297] translate-y-[101%] transition-transform duration-300 ease-out group-hover:translate-y-0"></span>
          <span className="relative z-10 transition-colors duration-300">Lihat Detail Promo</span>
        </button>
      </div>
    </div>
  );
}

interface PromosiArchiveProps {
  promos: Promosi[];
}

export default function PromosiArchiveClient({ promos }: PromosiArchiveProps) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [selectedPromo, setSelectedPromo] = useState<Promosi | null>(null);

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

  // Map untuk UIMainSlider (Promo Bulanan)
  const slides: UIMainSlide[] = monthlyPromos.map((promo, idx) => {
    const title = typeof promo.title === 'string' ? promo.title : promo.title?.rendered || '';
    const rawExcerpt = typeof promo.excerpt === 'string' ? promo.excerpt : promo.excerpt?.rendered || '';
    const subtitle = rawExcerpt 
      ? rawExcerpt.replace(/(<([^>]+)>)/gi, "").slice(0, 100) + "..." 
      : "Promo Spesial Bengkel Wiguna";

    return {
      id: promo.id || idx,
      src: promo.featured_img || "/images/promosi/promo-default.jpg",
      title: title,
      subtitle: subtitle,
      link: `/promosi/${promo.slug}`, // Currently UIMainSlider doesn't use this link, but we keep it for data structure
    };
  });

  return (
    <>
      <div className="bg-[#F8F9FB] min-h-screen pt-28 pb-20 overflow-hidden relative">
        {/* Background Decorative Elements for Liquid Glass feel */}
        <div className="absolute top-40 -left-64 w-96 h-96 bg-[#224297] rounded-full mix-blend-multiply filter blur-[128px] opacity-40 animate-blob"></div>
        <div className="absolute top-40 -right-64 w-96 h-96 bg-[#ffd900] rounded-full mix-blend-multiply filter blur-[128px] opacity-40 animate-blob animation-delay-2000"></div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Section 1: Promo Bulanan (UIMainSlider) */}
          <div className="mb-20">
            {slides.length > 0 ? (
              <UIMainSlider 
                slides={slides} 
                onSlideClick={(idx) => handleOpenPromo(monthlyPromos[idx])}
              />
            ) : (
              <div className="h-[350px] bg-white rounded-2xl flex items-center justify-center text-gray-400 shadow-sm ring-1 ring-black/5">
                Tidak ada promo bulanan saat ini.
              </div>
            )}
          </div>

          {/* Section 2: Promo Lainnya (4-Grid Liquid Glass Cards) */}
          {otherPromos.length > 0 && (
            <div className="mt-20">
              <div className="text-center mb-10">
                <h2 className="text-3xl font-bold text-gray-900 tracking-tight mb-2">Promo Lainnya</h2>
                <p className="text-gray-500">Jelajahi berbagai paket servis dan penawaran menarik lainnya.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {otherPromos.map(promo => (
                  <PromoGlassCard key={promo.slug} promo={promo} onClick={() => handleOpenPromo(promo)} />
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