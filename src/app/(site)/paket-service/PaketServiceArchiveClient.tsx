/**
 * Paket Service Archive Client — Bengkel Wiguna
 * Refactored for clean 3-column grid without filters/sidebar
 */

"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Clock, Shield, Star, Package } from "lucide-react";
import { PaketService } from "@/types/wordpress";

interface PaketCardProps {
  paket: any;
}

function PaketCard({ paket }: PaketCardProps) {
  const title = typeof paket.title === 'string' ? paket.title : paket.title?.rendered || ''
  
  // WhatsApp message
  const whatsappText = `Halo Minna, saya tertarik dengan Paket Service "${title}" dari Bengkel Wiguna. Mohon info lebih lanjut tentang paket ini ya!`
  const whatsappUrl = `https://wa.me/6287817773888?text=${encodeURIComponent(whatsappText)}`

  // Parse items_paket
  let paketItems: string[] = []
  if (paket.items_paket) {
    try {
      paketItems = typeof paket.items_paket === 'string' ? JSON.parse(paket.items_paket) : paket.items_paket
    } catch {
      paketItems = paket.items_paket.split('\n').filter(Boolean)
    }
  }

  return (
    <div className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-700 flex flex-col h-full" data-aos="zoom-in">
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden bg-gray-100 dark:bg-gray-900">
        {paket.featured_img ? (
          <Image
            src={paket.featured_img}
            alt={title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-brand-blue to-[#050b14] flex items-center justify-center">
            <span className="text-6xl opacity-20">📦</span>
          </div>
        )}
        
        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2 z-10">
            {paket.bestSeller && (
                <div className="bg-brand-gold text-brand-blue px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg italic flex items-center gap-1">
                    <Star size={12} className="fill-current" />
                    Best Seller
                </div>
            )}
            <div className="bg-brand-blue text-white px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg italic flex items-center gap-1">
                <Package size={12} />
                Paket
            </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-8 flex flex-col flex-grow">
        {/* Title */}
        <h3 className="text-xl lg:text-2xl font-black text-gray-900 dark:text-white mb-4 group-hover:text-brand-blue transition-colors italic tracking-tighter uppercase leading-tight">
          <Link href={`/paket-service/${paket.slug}`}>{title}</Link>
        </h3>

        {/* Features Meta */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          {paket.durasi_paket && (
            <span className="inline-flex items-center gap-1 text-[10px] font-black uppercase tracking-widest bg-blue-50 dark:bg-gray-700 text-brand-blue dark:text-blue-300 px-3 py-1.5 rounded-lg border border-blue-100 dark:border-gray-600">
              <Clock size={12} />
              {paket.durasi_paket}
            </span>
          )}
          {paket.garansi_paket && (
            <span className="inline-flex items-center gap-1 text-[10px] font-black uppercase tracking-widest bg-green-50 dark:bg-gray-700 text-green-700 dark:text-green-300 px-3 py-1.5 rounded-lg border border-green-100 dark:border-gray-600">
              <Shield size={12} />
              {paket.garansi_paket}
            </span>
          )}
        </div>

        {/* Items Preview */}
        {paketItems.length > 0 && (
          <div className="mb-8">
            <div className="flex flex-wrap gap-2">
              {paketItems.slice(0, 3).map((item: string, i: number) => (
                <span key={i} className="text-xs font-bold text-gray-500 bg-gray-50 dark:bg-gray-700/50 px-2 py-1 rounded border border-gray-100 dark:border-gray-600">
                  {item.replace(/^[•\-*]\s*/, '').slice(0, 25)}
                </span>
              ))}
              {paketItems.length > 3 && (
                <span className="text-xs font-black text-brand-blue dark:text-brand-gold self-center">+{paketItems.length - 3} ITEM</span>
              )}
            </div>
          </div>
        )}

        {/* Action & Pricing */}
        <div className="mt-auto pt-6 border-t border-gray-50 dark:border-gray-700 flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-2xl font-black text-brand-blue dark:text-brand-gold italic tracking-tighter uppercase leading-none">
              {paket.harga_paket || 'Hubungi Kami'}
            </span>
            {paket.previousPrice && (
              <span className="text-xs text-gray-400 line-through font-bold mt-1">{paket.previousPrice}</span>
            )}
          </div>
          
          <Link
            href={`/paket-service/${paket.slug}`}
            className="w-12 h-12 rounded-full bg-brand-blue hover:bg-brand-gold text-white hover:text-brand-blue flex items-center justify-center transition-all duration-300 shadow-lg group/btn"
          >
            <ArrowUpRight size={20} className="group-hover/btn:scale-110 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  )
}

interface PaketServiceArchiveProps {
  pakets: PaketService[];
}

export default function PaketServiceArchiveClient({ pakets }: PaketServiceArchiveProps) {
  return (
    <div className="bg-white dark:bg-gray-950">
      {/* Branded Header Section */}
      <section className="bg-light-blue-banner lg:pt-48 pt-32 pb-20 relative overflow-hidden">
        <div className="max-w-screen-xl mx-auto px-3 sm:px-6 md:px-14 lg:px-14 xl:px-18 2xl:px-3 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block bg-brand-gold text-brand-blue px-5 py-1.5 rounded-full text-xs font-black uppercase tracking-[0.2em] mb-6 shadow-xl shadow-yellow-900/10">
              Bundling Hemat
            </span>
            <h1 className="text-4xl lg:text-7xl font-black text-gray-900 mb-6 italic tracking-tighter uppercase leading-[0.85]">
              Paket <br /><span className="text-brand-blue">Servis Lengkap</span>
            </h1>
            <p className="text-gray-800 font-bold text-lg lg:text-xl max-w-xl leading-relaxed">
              Solusi perawatan terpadu yang dirancang untuk efisiensi waktu dan penghematan biaya servis kendaraan Anda.
            </p>
          </div>
          
          {/* Breadcrumb */}
          <nav className="flex items-center gap-3 mt-12 text-sm font-bold uppercase tracking-widest text-gray-500">
            <Link href="/" className="hover:text-brand-blue transition-colors">Home</Link>
            <span className="text-brand-gold">/</span>
            <span className="text-gray-900">Paket Service</span>
          </nav>
        </div>
      </section>

      {/* Main Grid Content */}
      <div className="paket-archive-wrap py-20 lg:py-32">
        <div className="max-w-screen-xl mx-auto px-3 sm:px-6 md:px-14 lg:px-14 xl:px-18 2xl:px-3">
          {/* Grid without sidebar or filters */}
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 lg:gap-10">
            {pakets.map((paket: any) => (
              <PaketCard key={paket.id} paket={paket} />
            ))}
          </div>

          {/* Empty State */}
          {pakets.length === 0 && (
            <div className="text-center py-32 bg-gray-50 dark:bg-gray-900 rounded-3xl border-2 border-dashed border-gray-200 dark:border-gray-800">
              <span className="text-8xl mb-6 block">📦</span>
              <h3 className="text-3xl font-black text-gray-900 dark:text-white mb-4 uppercase tracking-tighter italic">Belum Ada Paket Tersedia</h3>
              <p className="text-gray-500 font-medium text-lg">Nantikan paket servis menarik dari kami segera!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}