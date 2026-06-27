"use client";

import React from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import type { Promosi } from "@/types/wordpress";
import WigunaCard from "@/components/ui/WigunaCard";

type WPRendered = string | { rendered: string };
const getTitle = (t: WPRendered): string =>
  typeof t === "string" ? t : t.rendered;
const getExcerpt = (e: any): string => {
  if (!e) return 'Dapatkan penawaran menarik di Bengkel Wiguna.';
  const raw = typeof e === "string" ? e : e.rendered || '';
  return raw.replace(/<[^>]*>/g, '').trim() || 'Dapatkan penawaran menarik di Bengkel Wiguna.';
};

interface PromosiArchiveProps {
  promos: Promosi[];
  showPromoBulanan?: boolean;
}

export default function PromosiArchiveClient({ promos, showPromoBulanan = true }: PromosiArchiveProps) {
  const promosList = promos || [];

  const customOrder = [
    "paket oli mesin komplit",
    "paket ijig",
    "paket ajag",
    "reset ac mobil",
    "promo kyoto",
    "promo detoks mesin",
    "paket siaga 1",
    "paket siaga 2",
    "paket siaga 3"
  ];

  const sortedPromosList = [...promosList].sort((a, b) => {
    const titleA = getTitle(a.title).toLowerCase().trim();
    const titleB = getTitle(b.title).toLowerCase().trim();
    
    let indexA = customOrder.findIndex(item => titleA.includes(item));
    let indexB = customOrder.findIndex(item => titleB.includes(item));

    if (indexA === -1) indexA = 999;
    if (indexB === -1) indexB = 999;

    return indexA - indexB;
  });

  const currentPromos = sortedPromosList;

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">

        {/* Page Header */}
        <div className="flex flex-col items-center justify-center text-center mb-16 pt-4 lg:pt-8">
          {/* Breadcrumb */}
          <nav className="flex items-center justify-center gap-2 text-sm text-gray-500 mb-6" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-[#224297] transition-colors">Beranda</Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900 font-medium">Promosi</span>
          </nav>
          <div className="inline-flex items-center justify-center gap-2 px-4 py-1.5 bg-[#ffd900]/20 border border-[#ffd900]/50 rounded-full text-[#1a356d] font-bold text-[11px] uppercase tracking-widest mb-4 shadow-sm">
            <Icon icon="solar:tag-bold" className="w-4 h-4 text-[#e6c300]" />
            Penawaran Spesial
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-black text-gray-900 tracking-tight mb-4 leading-tight">
            Promo & Diskon <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#224297] to-[#3b66d4]">
              Bengkel Wiguna
            </span>
          </h1>
          <p className="text-base md:text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Dapatkan perawatan kendaraan dengan kualitas maksimal dan harga yang lebih hemat. Jangan lewatkan promo dan paket layanan kami bulan ini!
          </p>
        </div>

        {/* Grid - 3 Columns using Custom Card */}
        <div className="mt-6 grid grid-cols-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 gap-x-6">
          {currentPromos.map((promo, idx) => {
            const title = getTitle(promo.title);
            const excerpt = getExcerpt(promo.excerpt);
            const slug = promo.slug || String(promo.id);
            const discount = promo.diskon_persen;
            const badgeText = discount ? `${discount}% OFF` : undefined;
            const price = promo.harga_promo || undefined;
            const oldPrice = promo.harga_asli || undefined;

            return (
              <div
                key={slug}
                className="relative group flex flex-col rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-all duration-500 border border-gray-100 h-full"
              >
                {/* Main Content layer */}
                <Link href={`/promosi/${slug}`} className="relative flex flex-col flex-grow overflow-hidden">
                  {/* Background Image Container */}
                  <div className="relative w-full overflow-hidden bg-gray-100">
                    <img
                      src={promo.featured_img || "/images/promo-default.jpg"}
                      alt={title}
                      className="w-full h-auto block transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Subtle gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  </div>

                  {/* Content Area */}
                  <div className="relative flex flex-col flex-grow p-6 bg-white">
                    {badgeText && (
                      <div className="mb-3">
                        <span className="inline-flex items-center rounded-full bg-[#ffd900] px-3 py-1 text-[11px] font-bold text-[#1a356d] uppercase tracking-wider shadow-sm">
                          🔥 {badgeText}
                        </span>
                      </div>
                    )}
                    <h3 className="font-bold leading-tight text-gray-900 text-xl mb-2">
                      {title}
                    </h3>
                    <p className="line-clamp-2 text-sm text-gray-500 mb-6">
                      {excerpt}
                    </p>
                    
                    {/* Price section if exists */}
                    {(price || oldPrice) && (
                      <div className="mt-auto mb-2 flex items-center gap-3">
                        {price && <span className="text-lg font-bold text-[#224297]">Rp {parseInt(price).toLocaleString('id-ID')}</span>}
                        {oldPrice && <span className="text-sm text-gray-400 line-through">Rp {parseInt(oldPrice).toLocaleString('id-ID')}</span>}
                      </div>
                    )}
                  </div>
                </Link>

                {/* Footer CTA */}
                <div className="border-t border-gray-100 p-4 bg-gray-50/50 flex items-center justify-between mt-auto">
                  <Link
                    href={`/promosi/${slug}`}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#224297]"
                  >
                    Lihat Detail <Icon icon="solar:arrow-right-linear" className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      window.open(
                        `https://wa.me/6281717773888?text=${encodeURIComponent(title)}`,
                        "_blank",
                        "noopener,noreferrer"
                      );
                    }}
                    className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-4 py-2 rounded-xl text-sm font-bold transition-colors"
                  >
                    <Icon icon="fa6-brands:whatsapp" className="w-4 h-4" />
                    Tanya Admin
                  </button>
                </div>
              </div>
            );
          })}
        </div>



        {/* Mobile Only - Browse All Link */}
        <div className="mt-8 sm:hidden">
          <Link
            href="/promosi"
            className="text-sm font-semibold text-[#224297] hover:text-[#224297]/80"
          >
            Lihat semua promo →
          </Link>
        </div>

        {/* CTA Section - 2 Columns */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2">

          {/* WhatsApp CTA */}
          <div className="relative overflow-hidden rounded-2xl bg-[#25D366] p-8">
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/20">
                  <Icon icon="fa6-brands:whatsapp" className="w-6 h-6 text-white" />
                </div>
                <span className="text-sm font-medium text-white/80">Booking &amp; Konsultasi</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">
                Hubungi Kami via WhatsApp
              </h3>
              <p className="text-white/80 text-sm mb-6">
                Dapatkan info promo terbaru dan reservasi mudah
              </p>
              <a
                href="https://wa.me/6281717773888?text=Halo%20Minna,%20info%20promo%20terbaru"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-[#128C7E] hover:bg-gray-100"
              >
                <Icon icon="solar:chat-round-linear" className="w-4 h-4" />
                Mulai Chat
              </a>
            </div>
          </div>

          {/* Urgency CTA */}
          <a
            href="https://wa.me/6287817773888?text=Halo%20Bengkel%20Wiguna,%20saya%20ingin%20mengamankan%20kuota%20promo%20sekarang"
            target="_blank"
            rel="noopener noreferrer"
            className="relative overflow-hidden rounded-2xl bg-[#224297] p-8 hover:bg-[#1a3580] transition-colors group"
          >
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/20 group-hover:scale-110 transition-transform">
                  <Icon icon="solar:stopwatch-linear" className="w-6 h-6 text-white" />
                </div>
                <span className="text-sm font-medium text-white/80">Penawaran Terbatas</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">
                Amankan Promo Anda!
              </h3>
              <p className="text-white/80 text-sm mb-6">
                Jangan sampai kehabisan. Amankan kuota promo ini sebelum masa berlaku habis!
              </p>
              <span className="inline-flex items-center gap-2 rounded-full bg-[#ffd900] px-6 py-3 text-sm font-bold text-[#1a356d] hover:bg-white transition-colors">
                <Icon icon="fa6-brands:whatsapp" className="w-4 h-4" />
                Amankan Sekarang
              </span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
