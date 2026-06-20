"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Promosi } from "@/types/wordpress";
import { Icon } from "@iconify/react";
import { useDisclosure } from "@nextui-org/react";
import PromoModal from "@/components/heroui/PromoModal";

interface PromosiArchiveProps {
  promos: Promosi[];
  showPromoBulanan?: boolean;
}

// Promosi Card - Tall image with text overlay pattern
const PromoCard = ({
  promo,
  onClick,
  priority = false
}: {
  promo: any;
  onClick: () => void;
  priority?: boolean;
}) => {
  const title = typeof promo.title === 'string' ? promo.title : promo.title?.rendered || '';
  const excerptRaw = typeof promo.excerpt === 'string' ? promo.excerpt : promo.excerpt?.rendered || promo.excerpt || '';
  const excerpt = excerptRaw.replace(/<[^>]*>/g, '').trim().slice(0, 80) + '...';
  const harga = promo.harga_promo || promo.harga || null;
  const hargaAsli = promo.harga_asli || null;

  return (
    <div className="group relative">
      {/* Tall Image */}
      <div className="overflow-hidden rounded-lg">
        <Image
          src={promo.featured_img || "/images/promo-default.jpg"}
          alt={title}
          width={400}
          height={600}
          className="h-auto w-full object-cover rounded-lg group-hover:opacity-90 transition-opacity"
          priority={priority}
        />
      </div>

      {/* Content */}
      <div className="mt-4">
        <h3 className="text-base font-semibold text-gray-900 line-clamp-2 group-hover:text-[#224297] transition-colors">
          <button onClick={onClick} className="text-left">
            <span className="absolute inset-0" />
            {title}
          </button>
        </h3>
        {harga && (
          <p className="mt-1 text-sm font-medium text-[#224297]">{harga}</p>
        )}
        {hargaAsli && (
          <p className="text-sm text-gray-400 line-through">{hargaAsli}</p>
        )}
      </div>
    </div>
  );
};

export default function PromosiArchiveClient({ promos, showPromoBulanan = true }: PromosiArchiveProps) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [selectedPromo, setSelectedPromo] = useState<any>(null);

  const handleOpenPromo = (promo: any) => {
    setSelectedPromo(promo);
    onOpen();
  };

  const promosList = promos || [];

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">

        {/* Header - Template Style */}
        <div className="sm:flex sm:items-baseline sm:justify-between mb-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Promo Spesial Bengkel Wiguna
          </h2>
          <a
            href="/promosi"
            className="hidden text-sm font-semibold text-[#224297] hover:text-[#224297]/80 sm:block"
          >
            Lihat semua promo
            <span aria-hidden="true"> →</span>
          </a>
        </div>

        {/* Grid - Template Pattern */}
        <div className="mt-6 grid grid-cols-1 gap-y-10 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 lg:gap-x-8">
          {promosList.slice(0, 8).map((promo, idx) => (
            <PromoCard
              key={promo.slug || idx}
              promo={promo}
              onClick={() => handleOpenPromo(promo)}
              priority={idx < 4}
            />
          ))}
        </div>

        {/* Mobile Only - Browse All Link */}
        <div className="mt-8 sm:hidden">
          <a
            href="/promosi"
            className="text-sm font-semibold text-[#224297] hover:text-[#224297]/80"
          >
            Lihat semua promo →
          </a>
        </div>

        {/* CTA Section */}
        <div className="mt-16 grid sm:grid-cols-2 gap-6">
          {/* WhatsApp CTA */}
          <div className="relative overflow-hidden rounded-2xl bg-[#25D366] p-8">
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/20">
                  <Icon icon="fa6-brands:whatsapp" className="w-6 h-6 text-white" />
                </div>
                <span className="text-sm font-medium text-white/80">Booking & Konsultasi</span>
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
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-[#128C7E] hover:bg-gray-100 transition-colors"
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
              <span className="inline-flex items-center gap-2 rounded-full bg-white/20 px-5 py-2.5 text-sm font-bold text-white hover:bg-white/30 transition-colors">
                Eksplorasi Layanan
                <Icon icon="solar:arrow-right-linear" className="w-4 h-4" />
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
