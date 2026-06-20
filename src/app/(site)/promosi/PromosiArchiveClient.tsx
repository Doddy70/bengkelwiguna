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

// Promo Card Component - E-commerce inspired with Glassmorphism
const PromoCard = ({ promo, onClick }: { promo: any; onClick: () => void }) => {
  const title = typeof promo.title === 'string' ? promo.title : promo.title?.rendered || '';
  const excerptRaw = typeof promo.excerpt === 'string' ? promo.excerpt : promo.excerpt?.rendered || promo.excerpt || '';
  const excerpt = excerptRaw.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim().slice(0, 120) + '...';

  const hargaPromo = promo.harga_promo || promo.harga_asli || promo.harga_normal || null;
  const hargaAsli = promo.harga_asli || promo.harga_normal || null;
  const diskon = promo.diskon_persen || null;

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-3xl bg-white shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      {/* Image Container */}
      <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
        <Image
          src={promo.featured_img || "/images/promo-default.jpg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

        {/* Top Badges */}
        <div className="absolute top-4 left-4 flex items-center gap-2">
          {diskon && (
            <span className="inline-flex items-center px-3 py-1.5 bg-red-500 text-white text-xs font-black uppercase tracking-wider rounded-full shadow-lg backdrop-blur-sm">
              {diskon}% OFF
            </span>
          )}
          {promo.kategori_promosi && (
            <span className="inline-flex items-center px-3 py-1.5 bg-white/90 backdrop-blur-sm text-gray-900 text-xs font-bold rounded-full shadow-lg">
              {promo.kategori_promosi}
            </span>
          )}
        </div>

        {/* Quick Actions */}
        <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <button className="w-9 h-9 flex items-center justify-center rounded-full bg-white/90 backdrop-blur-sm text-gray-700 hover:bg-white shadow-lg transition-all hover:scale-110">
            <Icon icon="solar:heart-linear" className="w-4 h-4" />
          </button>
          <button className="w-9 h-9 flex items-center justify-center rounded-full bg-white/90 backdrop-blur-sm text-gray-700 hover:bg-white shadow-lg transition-all hover:scale-110">
            <Icon icon="solar:share-linear" className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-bold text-gray-900 line-clamp-2 group-hover:text-[#224297] transition-colors">
          {title}
        </h3>

        <p className="mt-2 flex-1 text-sm text-gray-500 line-clamp-2">
          {excerpt}
        </p>

        <div className="mt-4 flex items-end justify-between">
          <div>
            {hargaPromo && (
              <div className="flex items-baseline gap-2">
                <span className="text-xl font-black text-[#224297]">{hargaPromo}</span>
                {hargaAsli && (
                  <span className="text-sm text-gray-400 line-through">{hargaAsli}</span>
                )}
              </div>
            )}
          </div>
          <button
            onClick={onClick}
            className="flex items-center justify-center w-11 h-11 rounded-xl bg-[#224297] text-white shadow-lg hover:bg-[#1a3580] transition-all hover:scale-105"
          >
            <Icon icon="solar:arrow-right-linear" className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

// WhatsApp CTA Card
const WhatsAppCard = () => (
  <div className="relative flex flex-col justify-end overflow-hidden rounded-3xl bg-gradient-to-br from-[#25D366] to-[#128C7E] p-8 shadow-xl">
    <div className="absolute inset-0 bg-[url('/images/pattern-dots.svg')] opacity-10" />
    <div className="relative">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm">
          <Icon icon="fa6-brands:whatsapp" className="w-6 h-6 text-white" />
        </div>
        <span className="text-sm font-medium text-white/80">Booking & Konsultasi</span>
      </div>
      <h3 className="text-2xl font-bold text-white mb-2">Hubungi Kami via WhatsApp</h3>
      <p className="text-white/80 text-sm mb-6">Dapatkan info promo terbaru dan reservasi mudah</p>
      <a
        href="https://wa.me/6287817773888?text=Halo%20Minna,%20info%20promo%20terbaru"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex w-fit items-center gap-2 rounded-full bg-white px-6 py-3 text-[#128C7E] font-bold text-sm hover:bg-gray-100 transition-colors"
      >
        <Icon icon="solar:chat-round-line-linear" className="w-4 h-4" />
        Mulai Chat
      </a>
    </div>
  </div>
);

export default function PromosiArchiveClient({ promos, showPromoBulanan = true }: PromosiArchiveProps) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [selectedPromo, setSelectedPromo] = useState<any>(null);

  // Group promos by category
  const monthlyPromos = promos.filter(p =>
    p.kategori_promosi?.toLowerCase().includes("bulan") ||
    p.kategori_promosi?.toLowerCase().includes("seasonal")
  );
  const otherPromos = promos.filter(p => !monthlyPromos.includes(p));

  const handleOpenPromo = (promo: any) => {
    setSelectedPromo(promo);
    onOpen();
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-b from-[#224297]/5 to-transparent py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Badge */}
          <div className="flex justify-center mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-gray-100">
              <Icon icon="solar:tag-price-bold" className="w-4 h-4 text-[#ffd900]" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#224297]">Promo Spesial</span>
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-center text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight leading-tight">
            Diskon Layanan & <br className="hidden sm:block" /> Paket Hemat
          </h1>

          {/* Subheadline */}
          <p className="mt-4 text-center text-lg text-gray-600 max-w-2xl mx-auto">
            Pilihan promo service berkala, paket pembersihan mesin, dan layanan spesialis dengan harga transparan.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Stats Bar */}
        <div className="flex flex-wrap justify-center gap-8 lg:gap-12 mb-12 text-center">
          <div>
            <p className="text-3xl lg:text-4xl font-black text-[#224297]">{promos.length}+</p>
            <p className="text-sm text-gray-500">Promo Aktif</p>
          </div>
          <div className="w-px bg-gray-200 hidden lg:block" />
          <div>
            <p className="text-3xl lg:text-4xl font-black text-[#ffd900]">25%</p>
            <p className="text-sm text-gray-500">Diskon Terbesar</p>
          </div>
          <div className="w-px bg-gray-200 hidden lg:block" />
          <div>
            <p className="text-3xl lg:text-4xl font-black text-green-500">8K+</p>
            <p className="text-sm text-gray-500">Pelanggan Hemat</p>
          </div>
        </div>

        {/* Promo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {promos.slice(0, 8).map((promo) => (
            <PromoCard
              key={promo.slug}
              promo={promo}
              onClick={() => handleOpenPromo(promo)}
            />
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 grid lg:grid-cols-2 gap-6">
          <WhatsAppCard />
          <Link
            href="/services"
            className="relative flex flex-col justify-center overflow-hidden rounded-3xl bg-gradient-to-br from-[#224297] to-[#1a3580] p-8 shadow-xl hover:shadow-2xl transition-shadow"
          >
            <div className="absolute inset-0 bg-[url('/images/pattern-grid.svg')] opacity-5" />
            <div className="relative">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm">
                  <Icon icon="solar:star-bold" className="w-6 h-6 text-[#ffd900]" />
                </div>
                <span className="text-sm font-medium text-white/80">Layanan Lainnya</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Lihat Semua Layanan</h3>
              <p className="text-white/70 text-sm mb-6">Temukan layanan terbaik untuk kendaraan Anda</p>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/20 backdrop-blur-sm px-5 py-2.5 text-sm font-bold text-white hover:bg-white/30 transition-colors w-fit">
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
