"use client";

import React, { useState } from "react";
import Image from "next/image";
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
      <div className="relative min-h-screen pt-32 pb-20 overflow-hidden font-dm">
        {/* Fixed Page Background Image */}
        <div className="fixed inset-0 z-0">
          <Image src="/images/bg-default-page.webp" alt="" fill className="object-cover" aria-hidden="true" />
          <div className="absolute inset-0 bg-[#fcfcfc]/85 dark:bg-neutral-950/90" />
        </div>

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

          {/* Section 2: Promo Lainnya (Bento Grid Cards) */}
          {otherPromos.length > 0 && (
            <div className="mt-24 -mx-4 sm:-mx-6 lg:-mx-8 relative">
              {/* Background Image */}
              <div className="absolute inset-0 z-0">
                <Image
                  src="/images/promo-bg.webp"
                  alt=""
                  fill
                  className="object-cover"
                  aria-hidden="true"
                />
                <div className="absolute inset-0 bg-black/70" />
              </div>

              {/* Content */}
              <div className="relative z-10 px-4 sm:px-6 lg:px-8 py-16 md:py-24">
                <div className="text-center mb-12">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/10 border border-white/20 rounded-full text-[11px] font-black uppercase tracking-wider text-[#ffd900] mb-3">
                    🏷️ Penawaran Lainnya
                  </span>
                  <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight">Promo Lainnya</h2>
                  <p className="text-white/60 text-sm font-medium mt-2">Jelajahi berbagai paket servis dan penawaran menarik lainnya.</p>
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
                        buttonText="Klaim Promo"
                        secondaryIcon="solar:heart-linear"
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
            </div>
          )}

        </div>
      </div>

      {/* Popout Promo Modal */}
      <PromoModal isOpen={isOpen} onOpenChange={onOpenChange} promo={selectedPromo} />
    </>
  );
}