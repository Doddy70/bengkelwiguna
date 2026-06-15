"use client";

import React, { useState } from "react";
import { Promosi } from "@/types/wordpress";
import { useDisclosure } from "@nextui-org/react";
import PromoModal from "@/components/heroui/PromoModal";
import WigunaCard from "@/components/ui/WigunaCard";
import SeasonalPromoSlider from "@/components/heroui/seasonal-promo-slider";

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

  return (
    <>
      <div className="bg-[#fcfcfc] dark:bg-neutral-950 min-h-screen pt-32 pb-20 overflow-hidden relative font-dm">
        {/* Background Decorative Elements for Liquid Glass feel */}
        <div className="absolute top-40 -left-64 w-96 h-96 bg-[#224297]/10 dark:bg-[#224297]/20 rounded-full mix-blend-multiply filter blur-[128px] opacity-40 animate-blob"></div>
        <div className="absolute top-40 -right-64 w-96 h-96 bg-[#ffd900]/10 dark:bg-[#ffd900]/20 rounded-full mix-blend-multiply filter blur-[128px] opacity-40 animate-blob animation-delay-2000"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Section 1: Promo Bulanan / Seasonal Slider */}
          {monthlyPromos.length > 0 && (
            <div className="mb-20">
              <SeasonalPromoSlider
                promos={monthlyPromos}
                title={["PROMO BULAN INI,", "PILIHAN TERBAIK"]}
                subtitle="🔥 Promo Terbatas"
              />
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
                      imageAspectRatio="4/3"
                      tag={promo.kategori_promosi || "Promo Spesial"}
                      title={typeof promo.title === 'string' ? promo.title : promo.title?.rendered || ''}
                      excerpt={(() => {
                        const raw = typeof promo.excerpt === 'string' ? promo.excerpt : (promo.excerpt as any)?.rendered || '';
                        return raw ? raw.replace(/<[^>]*>/g, '').trim().slice(0, 100) + '...' : undefined;
                      })()}
                      variant="split"
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