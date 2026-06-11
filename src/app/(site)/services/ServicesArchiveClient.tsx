/**
 * Services Archive Client — Bengkel Wiguna
 * Refactored for clean 3-column grid without filters/sidebar
 */

"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Clock, ShieldCheck } from "lucide-react";
import { Service } from "@/types/wordpress";

interface ServiceCardProps {
  service: any;
}

function ServiceCard({ service }: ServiceCardProps) {
  const title = typeof service.title === 'string' ? service.title : service.title?.rendered || ''
  const excerpt = service.excerpt?.rendered || service.excerpt || ''
  const cleanExcerpt = excerpt.replace(/<[^>]*>/g, '').slice(0, 120)

  return (
    <div className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-700 flex flex-col h-full" data-aos="fade-up">
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden bg-gray-100 dark:bg-gray-900">
        {service.featured_img ? (
          <Image
            src={service.featured_img}
            alt={title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-brand-blue to-[#050b14] flex items-center justify-center">
            <span className="text-6xl opacity-20">🔧</span>
          </div>
        )}
        
        {/* Price Tag Overlay */}
        {service.harga && (
            <div className="absolute top-4 right-4 bg-brand-gold text-brand-blue px-4 py-1.5 rounded-full text-sm font-black shadow-lg z-10 italic tracking-tighter uppercase">
                {service.harga}
            </div>
        )}
      </div>

      {/* Content */}
      <div className="p-8 flex flex-col flex-grow">
        {/* Title */}
        <h3 className="text-xl lg:text-2xl font-black text-gray-900 dark:text-white mb-3 group-hover:text-brand-blue transition-colors italic tracking-tighter uppercase leading-tight">
          <Link href={`/services/${service.slug}`}>{title}</Link>
        </h3>

        {/* Features Meta */}
        <div className="flex flex-wrap items-center gap-4 text-xs font-bold uppercase tracking-widest text-gray-400 mb-6">
          {service.durasi && (
            <span className="flex items-center gap-1.5">
              <Clock size={14} className="text-brand-blue" />
              {service.durasi}
            </span>
          )}
          {service.garansi && (
            <span className="flex items-center gap-1.5">
              <ShieldCheck size={14} className="text-green-500" />
              {service.garansi}
            </span>
          )}
        </div>

        {/* Excerpt */}
        <p className="text-gray-600 dark:text-gray-400 font-medium text-[16px] leading-relaxed line-clamp-3 mb-8">
            {cleanExcerpt}...
        </p>

        {/* Action */}
        <div className="mt-auto pt-6 border-t border-gray-50 dark:border-gray-700 flex items-center justify-between">
          <Link
            href={`/services/${service.slug}`}
            className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-widest text-brand-blue hover:text-brand-gold transition-all group/btn"
          >
            Lihat Detail 
            <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
          </Link>
          
          <div className="w-10 h-10 rounded-full bg-gray-50 dark:bg-gray-700 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <ArrowUpRight size={18} className="text-brand-blue" />
          </div>
        </div>
      </div>
    </div>
  )
}

interface ServicesArchiveProps {
  services: Service[];
}

export default function ServicesArchiveClient({ services }: ServicesArchiveProps) {
  return (
    <div className="bg-white dark:bg-gray-950">
      {/* Branded Header Section */}
      <section className="bg-light-blue-banner lg:pt-48 pt-32 pb-20 relative overflow-hidden">
        <div className="max-w-screen-xl mx-auto px-3 sm:px-6 md:px-14 lg:px-14 xl:px-18 2xl:px-3 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block bg-brand-gold text-brand-blue px-5 py-1.5 rounded-full text-xs font-black uppercase tracking-[0.2em] mb-6 shadow-xl shadow-yellow-900/10">
              Service & Perawatan
            </span>
            <h1 className="text-4xl lg:text-7xl font-black text-gray-900 mb-6 italic tracking-tighter uppercase leading-[0.85]">
              Layanan <br /><span className="text-brand-blue">Bengkel Wiguna</span>
            </h1>
            <p className="text-gray-800 font-bold text-lg lg:text-xl max-w-xl leading-relaxed">
              Solusi lengkap untuk segala kebutuhan perawatan dan perbaikan kendaraan Anda dengan standar presisi tinggi.
            </p>
          </div>
          
          {/* Breadcrumb */}
          <nav className="flex items-center gap-3 mt-12 text-sm font-bold uppercase tracking-widest text-gray-500">
            <Link href="/" className="hover:text-brand-blue transition-colors">Home</Link>
            <span className="text-brand-gold">/</span>
            <span className="text-gray-900">Layanan</span>
          </nav>
        </div>
      </section>

      {/* Main Grid Content */}
      <div className="services-archive-wrap py-20 lg:py-32">
        <div className="max-w-screen-xl mx-auto px-3 sm:px-6 md:px-14 lg:px-14 xl:px-18 2xl:px-3">
          {/* Grid without sidebar or filters */}
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 lg:gap-10">
            {services.map((service: any) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>

          {/* Empty State */}
          {services.length === 0 && (
            <div className="text-center py-32 bg-gray-50 dark:bg-gray-900 rounded-3xl border-2 border-dashed border-gray-200 dark:border-gray-800">
              <span className="text-8xl mb-6 block">🔧</span>
              <h3 className="text-3xl font-black text-gray-900 dark:text-white mb-4 uppercase tracking-tighter italic">Data Layanan Kosong</h3>
              <p className="text-gray-500 font-medium text-lg">Mohon periksa kembali koneksi backend Anda.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}