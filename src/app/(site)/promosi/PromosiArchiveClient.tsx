/**
 * Promosi Archive Client — Bengkel Wiguna
 * Refactored for clean 3-column grid without filters/sidebar
 */

"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Tag, Calendar } from "lucide-react";
import { Promosi } from "@/types/wordpress";

interface PromoCardProps {
  promo: any;
}

function PromoCard({ promo }: PromoCardProps) {
  const title = typeof promo.title === 'string' ? promo.title : promo.title?.rendered || ''
  
  // Calculate discount
  const hasDiscount = promo.harga_asli && promo.harga_promo
  const getDiscountPercent = () => {
    if (!hasDiscount) return 0
    const promoPrice = parseFloat(promo.harga_promo.replace(/[^0-9.]/g, '') || '0')
    const originalPrice = parseFloat(promo.harga_asli.replace(/[^0-9.]/g, '') || '0')
    if (!originalPrice) return 0
    return Math.round((1 - promoPrice / originalPrice) * 100)
  }
  const discountPercent = getDiscountPercent()

  return (
    <div className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-700 flex flex-col h-full" data-aos="zoom-in">
      {/* Promo Image Container */}
      <div className="relative h-64 overflow-hidden bg-gray-100 dark:bg-gray-900">
        {promo.featured_img ? (
          <Image
            src={promo.featured_img}
            alt={title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-brand-blue to-[#050b14] flex items-center justify-center">
            <span className="text-6xl opacity-20">🔥</span>
          </div>
        )}
        
        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2 z-10">
            <div className="bg-red-600 text-white px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg italic">
                Hot Promo
            </div>
            {hasDiscount && discountPercent > 0 && (
                <div className="bg-green-500 text-white px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg italic">
                    {discountPercent}% OFF
                </div>
            )}
        </div>
      </div>

      {/* Content */}
      <div className="p-8 flex flex-col flex-grow">
        {/* Title */}
        <h3 className="text-xl lg:text-2xl font-black text-gray-900 dark:text-white mb-3 group-hover:text-brand-blue transition-colors italic tracking-tighter uppercase leading-tight">
          <Link href={`/promosi/${promo.slug}`}>{title}</Link>
        </h3>

        {/* Validity Meta */}
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">
            <Calendar size={14} className="text-brand-blue" />
            <span>{promo.tanggal_selesai ? `Hingga ${promo.tanggal_selesai}` : 'Promo Terbatas'}</span>
        </div>

        {/* Excerpt Fallback Logic */}
        <p className="text-gray-600 dark:text-gray-400 font-medium text-sm leading-relaxed line-clamp-2 mb-6">
            {(promo.excerpt?.rendered || promo.excerpt || promo.content?.rendered || promo.content || '')
                .replace(/<[^>]*>/g, '')
                .replace(/\s+/g, ' ')
                .trim()
                .slice(0, 100)}...
        </p>

        {/* Pricing */}
        <div className="mb-8">
            <div className="flex items-baseline gap-2">
                <span className="text-2xl font-black text-brand-blue dark:text-brand-gold italic tracking-tighter uppercase">
                    {promo.harga_promo || 'Hubungi Kami'}
                </span>
                {promo.harga_asli && (
                    <span className="text-sm text-gray-400 line-through font-bold">
                        {promo.harga_asli}
                    </span>
                )}
            </div>
        </div>

        {/* Action */}
        <div className="mt-auto pt-6 border-t border-gray-50 dark:border-gray-700 flex items-center justify-between">
          <Link
            href={`/promosi/${promo.slug}`}
            className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-widest text-brand-blue hover:text-brand-gold transition-all group/btn"
          >
            Ambil Promo 
            <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
          </Link>
          
          <div className="w-10 h-10 rounded-full bg-gray-50 dark:bg-gray-700 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <Tag size={18} className="text-brand-blue" />
          </div>
        </div>
      </div>
    </div>
  )
}

interface PromosiArchiveProps {
  promos: Promosi[];
}

export default function PromosiArchiveClient({ promos }: PromosiArchiveProps) {
  return (
    <div className="bg-white dark:bg-gray-950">
      {/* Branded Header Section */}
      <section className="bg-light-blue-banner lg:pt-48 pt-32 pb-20 relative overflow-hidden">
        <div className="max-w-screen-xl mx-auto px-3 sm:px-6 md:px-14 lg:px-14 xl:px-18 2xl:px-3 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block bg-brand-gold text-brand-blue px-5 py-1.5 rounded-full text-xs font-black uppercase tracking-[0.2em] mb-6 shadow-xl shadow-yellow-900/10">
              Penawaran Terbatas
            </span>
            <h1 className="text-4xl lg:text-7xl font-black text-gray-900 mb-6 italic tracking-tighter uppercase leading-[0.85]">
              Promosi <br /><span className="text-brand-blue">Eksklusif</span>
            </h1>
            <p className="text-gray-800 font-bold text-lg lg:text-xl max-w-xl leading-relaxed">
              Dapatkan keuntungan maksimal dengan paket promosi pilihan untuk penghematan perawatan mobil Anda.
            </p>
          </div>
          
          {/* Breadcrumb */}
          <nav className="flex items-center gap-3 mt-12 text-sm font-bold uppercase tracking-widest text-gray-500">
            <Link href="/" className="hover:text-brand-blue transition-colors">Home</Link>
            <span className="text-brand-gold">/</span>
            <span className="text-gray-900">Promosi</span>
          </nav>
        </div>
      </section>

      {/* Main Grid Content */}
      <div className="promosi-archive-wrap py-20 lg:py-32">
        <div className="max-w-screen-xl mx-auto px-3 sm:px-6 md:px-14 lg:px-14 xl:px-18 2xl:px-3">
          {/* Grid without sidebar or filters */}
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 lg:gap-10">
            {promos.map((promo: any) => (
              <PromoCard key={promo.id} promo={promo} />
            ))}
          </div>

          {/* Empty State */}
          {promos.length === 0 && (
            <div className="text-center py-32 bg-gray-50 dark:bg-gray-900 rounded-3xl border-2 border-dashed border-gray-200 dark:border-gray-800">
              <span className="text-8xl mb-6 block">🔥</span>
              <h3 className="text-3xl font-black text-gray-900 dark:text-white mb-4 uppercase tracking-tighter italic">Belum Ada Promo Aktif</h3>
              <p className="text-gray-500 font-medium text-lg">Nantikan penawaran spesial kami berikutnya!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}