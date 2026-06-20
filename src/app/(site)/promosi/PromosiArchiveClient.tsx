"use client";

import React from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import type { Promosi } from "@/types/wordpress";
import WigunaCard from "@/components/ui/WigunaCard";

type WPRendered = string | { rendered: string };
const getTitle = (t: WPRendered): string =>
  typeof t === "string" ? t : t.rendered;
const getExcerpt = (e: WPRendered): string =>
  typeof e === "string" ? e : e.rendered;

interface PromosiArchiveProps {
  promos: Promosi[];
  showPromoBulanan?: boolean;
}

export default function PromosiArchiveClient({ promos, showPromoBulanan = true }: PromosiArchiveProps) {
  const promosList = promos || [];

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="sm:flex sm:items-baseline sm:justify-between mb-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Promo Spesial Bengkel Wiguna
          </h2>
          <Link
            href="/promosi"
            className="hidden text-sm font-semibold text-[#224297] hover:text-[#224297]/80 sm:flex sm:items-center gap-1"
          >
            Lihat semua
            <span aria-hidden="true"> -&gt;</span>
          </Link>
        </div>

        {/* Grid - 3 Columns using WigunaCard */}
        <div className="mt-6 grid grid-cols-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 gap-x-6">
          {promosList.slice(0, 6).map((promo, idx) => {
            const title = getTitle(promo.title);
            const excerpt = getExcerpt(promo.excerpt);
            const slug = promo.slug || String(promo.id);
            const discount = promo.diskon_persen;
            const badgeText = discount ? `${discount} OFF` : undefined;
            const price = promo.harga_promo || undefined;
            const oldPrice = promo.harga_asli || undefined;

            return (
              <WigunaCard
                key={slug}
                variant="overlay"
                href={`/promosi/${slug}`}
                image={promo.featured_img || "/images/promo-default.jpg"}
                imageAspectRatio="4/5"
                title={title}
                excerpt={excerpt}
                badgeText={badgeText}
                price={price}
                oldPrice={oldPrice}
                buttonText="Lihat Promo"
                onSecondaryClick={(e) => {
                  e.stopPropagation();
                  window.open(
                    `https://wa.me/6281717773888?text=Halo%20Minna,%20saya%20tertarik%20dengan%20promo%3A%20${encodeURIComponent(title)}`,
                    "_blank",
                    "noopener,noreferrer"
                  );
                }}
                secondaryIcon="fa6-brands:whatsapp"
                linkClassName="h-full"
              />
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

          {/* Services CTA */}
          <Link
            href="/services"
            className="relative overflow-hidden rounded-2xl bg-[#224297] p-8 hover:bg-[#1a3580] transition-colors"
          >
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/20">
                  <Icon icon="solar:car-linear" className="w-6 h-6 text-white" />
                </div>
                <span className="text-sm font-medium text-white/80">Layanan Lengkap</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">
                Lihat Semua Layanan
              </h3>
              <p className="text-white/80 text-sm mb-6">
                Temukan layanan terbaik untuk kendaraan Anda
              </p>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/20 px-5 py-2.5 text-sm font-bold text-white">
                Eksplorasi
                <Icon icon="solar:arrow-right-linear" className="w-4 h-4" />
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
