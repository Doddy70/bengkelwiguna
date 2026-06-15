"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Promosi } from "@/types/wordpress";
import UIMainSlider, { UIMainSlide } from "@/components/ui/UIMainSlider";
import { useDisclosure } from "@nextui-org/react";
import PromoModal from "@/components/heroui/PromoModal";
import WigunaCard from "@/components/ui/WigunaCard";



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