"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Promosi } from "@/types/wordpress";
import { useDisclosure } from "@nextui-org/react";
import { Icon } from "@iconify/react";
import PromoModal from "@/components/heroui/PromoModal";
import PromoCarousel from "@/components/ui/PromoCarousel";
import PromoBentoCard from "@/components/ui/PromoBentoCard";

interface PromosiArchiveProps {
  promos: Promosi[];
  showPromoBulanan?: boolean;
}

export default function PromosiArchiveClient({ promos, showPromoBulanan = true }: PromosiArchiveProps) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [selectedPromo, setSelectedPromo] = useState<Promosi | null>(null);

  const handleOpenPromo = (promo: Promosi) => {
    setSelectedPromo(promo);
    onOpen();
  };

  const isSeasonal = (p: Promosi) => p.kategori_promosi && (
    p.kategori_promosi.toLowerCase().includes("bulanan") ||
    p.kategori_promosi.toLowerCase().includes("seasonal")
  );

  let monthlyPromos: Promosi[] = [];
  let otherPromos: Promosi[] = [];

  if (showPromoBulanan) {
    monthlyPromos = promos.filter(p => isSeasonal(p));
    otherPromos = promos.filter(p => !isSeasonal(p));

    if (monthlyPromos.length === 0 && promos.length > 0) {
      monthlyPromos = promos.slice(0, 3);
      otherPromos = promos.slice(3);
    }
  } else {
    otherPromos = promos;
  }



  return (
    <>
      <div className="relative min-h-screen pt-20 pb-20 overflow-hidden font-dm bg-slate-50">
        {/* Light Abstract Background */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-100/50 blur-[120px] rounded-full mix-blend-multiply" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#ffd900]/10 blur-[120px] rounded-full mix-blend-multiply" />
          <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-[0.02] mix-blend-overlay" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          {/* Custom Unique Header - Light Mode */}
          <div className="relative pt-6 pb-12 md:pt-8 md:pb-16 flex flex-col items-center justify-center text-center">
            <div className="relative z-10 flex flex-col items-center gap-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-md ring-1 ring-black/5 rounded-full text-xs font-black uppercase tracking-widest text-[#224297] shadow-sm">
                <Icon icon="solar:tag-price-bold" className="w-4 h-4 text-[#ffd900]" />
                Promo Spesial Wiguna
              </span>
              
              <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter leading-[1.05] max-w-4xl drop-shadow-sm">
                Temukan <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#224297] to-[#4A6BCC]">Penawaran</span> Terbaik Untuk Mobil Anda
              </h1>
              
              <p className="text-lg md:text-xl text-slate-600 font-medium max-w-2xl mt-4">
                Jangan lewatkan diskon servis rutin, paket hemat, dan perawatan spesialis dengan harga transparan dan jujur.
              </p>
            </div>
          </div>

          {/* Section 1: Promo Bulanan / Seasonal Slider - Apple Cards Carousel */}
          {monthlyPromos.length > 0 && (
            <div className="mb-24">
              <PromoCarousel
                promos={monthlyPromos}
                title="PROMO BULAN INI"
                subtitle="🔥 Pilihan Terbaik"
              />
            </div>
          )}

          {/* Section 2: Promo Lainnya (Bento Grid Cards with Liquid Glass) */}
          {otherPromos.length > 0 && (
            <div className="mt-12 relative z-10">
              <div className="text-center mb-12 flex flex-col items-center">
                <Icon icon="solar:stars-bold-duotone" className="w-10 h-10 text-slate-300 mb-4" />
                <h2 className="text-3xl md:text-4xl font-black text-slate-900 uppercase tracking-tight">Eksplorasi Layanan</h2>
                <p className="text-slate-500 text-sm font-medium mt-2">Pilih paket promo yang sesuai dengan kebutuhan Anda</p>
              </div>

              {/* 4-Column Grid Container */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {otherPromos.map((promo, idx) => {
                  const titleStr = typeof promo.title === 'string' ? promo.title : promo.title?.rendered || '';
                  const rawExcerpt = typeof promo.excerpt === 'string' ? promo.excerpt : (promo.excerpt as any)?.rendered || '';
                  const excerptStr = rawExcerpt ? rawExcerpt.replace(/<[^>]*>/g, '').trim().slice(0, 100) + '...' : undefined;

                  return (
                    <PromoBentoCard
                      key={promo.slug}
                      image={promo.featured_img || "/images/promosi/promo-default.jpg"}
                      tag={promo.kategori_promosi || "Spesial"}
                      title={titleStr}
                      excerpt={excerptStr}
                      price={promo.harga_promo || 'Hubungi Kami'}
                      oldPrice={promo.harga_asli && promo.harga_promo ? promo.harga_asli : undefined}
                      onClick={() => handleOpenPromo(promo)}
                      onWhatsAppClick={() => {
                        const promoName = titleStr.trim();
                        const prefix = promoName.toLowerCase().startsWith('promo') ? '' : 'Promo ';
                        const text = encodeURIComponent(`${prefix}${promoName}`);
                        window.open(`https://api.whatsapp.com/send/?phone=6281717773888&text=${text}`, '_blank');
                      }}
                    />
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>

      <PromoModal isOpen={isOpen} onOpenChange={onOpenChange} promo={selectedPromo} />
    </>
  );
}
