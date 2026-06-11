/**
 * Paket Service Archive Page — Bengkel Wiguna
 * Template: Shop Two with filters and product grid
 */

"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Filter, X, Clock, Shield, Star, Package } from "lucide-react";
import Footer from "@/components/layout/Footer";
import { PaketService } from "@/types/wordpress";

interface PaketCardProps {
  paket: any;
}

function PaketCard({ paket }: PaketCardProps) {
  const title = typeof paket.title === 'string' ? paket.title : paket.title?.rendered || ''
  const excerpt = paket.excerpt?.rendered || paket.excerpt || ''

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
    <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
      {/* Image */}
      <div className="relative h-56 overflow-hidden bg-gray-100">
        {paket.featured_img ? (
          <Image
            src={paket.featured_img}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-[#224297] to-[#050b14] flex items-center justify-center">
            <span className="text-5xl">📦</span>
          </div>
        )}
        {/* Best Seller Badge */}
        {paket.bestSeller && (
          <div className="absolute top-4 left-4 bg-[#ffd900] text-[#1a3567] font-bold px-4 py-2 rounded-full text-sm flex items-center gap-1">
            <Star size={14} className="fill-current" />
            BEST SELLER
          </div>
        )}
        {/* Paket Badge */}
        <div className="absolute top-4 right-4 bg-[#224297] text-white font-bold px-3 py-1 rounded-full text-xs flex items-center gap-1">
          <Package size={12} />
          PAKET
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#224297] transition-colors">
          <Link href={`/paket-service/${paket.slug}`}>{title}</Link>
        </h3>

        {/* Meta Badges */}
        <div className="flex flex-wrap items-center gap-2 mb-4">
          {paket.durasi_paket && (
            <span className="inline-flex items-center gap-1 text-xs bg-blue-100 text-[#224297] px-3 py-1 rounded-full">
              <Clock size={12} />
              {paket.durasi_paket}
            </span>
          )}
          {paket.garansi_paket && (
            <span className="inline-flex items-center gap-1 text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full">
              <Shield size={12} />
              {paket.garansi_paket}
            </span>
          )}
          {paket.jenis_kendaraan && (
            <span className="inline-flex items-center gap-1 text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full">
              {paket.jenis_kendaraan}
            </span>
          )}
        </div>

        {/* Items List */}
        {paketItems.length > 0 && (
          <div className="mb-4">
            <p className="text-xs text-gray-500 mb-2">Termasuk:</p>
            <div className="flex flex-wrap gap-1">
              {paketItems.slice(0, 3).map((item: string, i: number) => (
                <span key={i} className="text-xs bg-gray-50 text-gray-600 px-2 py-1 rounded">
                  {item.replace(/^[•\-*]\s*/, '').slice(0, 30)}
                </span>
              ))}
              {paketItems.length > 3 && (
                <span className="text-xs text-[#224297] font-medium">+{paketItems.length - 3} lagi</span>
              )}
            </div>
          </div>
        )}

        {/* Price & CTA */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div>
            {paket.harga_paket ? (
              <div>
                <span className="text-2xl font-bold text-[#224297]">{paket.harga_paket}</span>
                {paket.previousPrice && (
                  <span className="text-sm text-gray-400 line-through ml-2">{paket.previousPrice}</span>
                )}
              </div>
            ) : (
              <span className="text-sm text-gray-500">Hubungi untuk harga</span>
            )}
          </div>
          <div className="flex items-center gap-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#224297] hover:bg-[#1a3567] text-white text-sm font-semibold rounded-full transition-colors"
            >
              <span>Pesan</span>
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

interface PaketServiceArchiveProps {
  pakets: PaketService[];
}

export default function PaketServiceArchiveClient({ pakets }: PaketServiceArchiveProps) {
  const [showFilters, setShowFilters] = useState(false)
  const [sortBy, setSortBy] = useState("relevance")
  const [selectedVehicle, setSelectedVehicle] = useState<string | null>(null)

  // Extract unique vehicle types
  const vehicleTypes = useMemo(() => {
    const types = new Set<string>()
    pakets.forEach((p: any) => {
      if (p.jenis_kendaraan) types.add(p.jenis_kendaraan)
    })
    return Array.from(types)
  }, [pakets])

  // Filter and sort
  const filteredPakets = useMemo(() => {
    let result = [...pakets]

    if (selectedVehicle) {
      result = result.filter((p: any) => p.jenis_kendaraan === selectedVehicle)
    }

    switch (sortBy) {
      case "high-low":
        result.sort((a: any, b: any) => {
          const priceA = parseFloat((a.harga_paket || '0').replace(/[^0-9]/g, ''))
          const priceB = parseFloat((b.harga_paket || '0').replace(/[^0-9]/g, ''))
          return priceB - priceA
        })
        break
      case "low-high":
        result.sort((a: any, b: any) => {
          const priceA = parseFloat((a.harga_paket || '0').replace(/[^0-9]/g, ''))
          const priceB = parseFloat((b.harga_paket || '0').replace(/[^0-9]/g, ''))
          return priceA - priceB
        })
        break
      case "bestseller":
        result.sort((a: any, b: any) => (b.bestSeller ? 1 : 0) - (a.bestSeller ? 1 : 0))
        break
    }

    return result
  }, [pakets, selectedVehicle, sortBy])

  return (
    <>
      {/* Archive Header */}
      <section className="bg-gradient-to-r from-[#050b14] to-[#224297] text-white py-12">
        <div className="max-w-screen-xl mx-auto px-3 sm:px-6 md:px-14 lg:px-14 xl:px-18 2xl:px-3">
          <div className="text-center mb-6">
            <div className="inline-flex items-center gap-2 bg-[#ffd900] text-[#1a3567] px-4 py-2 rounded-full text-sm font-bold mb-4">
              <span>📦</span> PAKET TERBAHARU
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">Paket Service</h1>
            <p className="text-white/80 text-lg">Paket lengkap untuk kebutuhan spesifik kendaraan Anda</p>
          </div>
          {/* Breadcrumb */}
          <nav className="flex justify-center text-sm">
            <Link href="/" className="hover:text-[#ffd900]">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-[#ffd900]">Paket Service</span>
          </nav>
        </div>
      </section>

      <div className="shop-wrap font-dm lg:pt-8 pt-6">
        <div className="max-w-screen-xl mx-auto px-3 sm:px-6 md:px-14 lg:px-14 xl:px-18 2xl:px-3 lg:pb-24 pb-12">
          <div className="grid lg:grid-cols-4 grid-cols-1 lg:gap-10 relative lg:space-y-0 space-y-5">

            {/* Mobile Filter Toggle */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden fixed bottom-6 left-6 z-40 bg-[#224297] text-white p-4 rounded-full shadow-2xl flex items-center gap-2"
            >
              <Filter size={20} />
              Filter
            </button>

            {/* Filters Sidebar */}
            <div className={`lg:block ${showFilters ? 'block' : 'hidden'} fixed lg:relative inset-0 z-50 lg:z-auto bg-white lg:bg-transparent p-6 lg:p-0 overflow-y-auto lg:overflow-visible`}>
              {/* Mobile Close Button */}
              <div className="lg:hidden flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-gray-900">Filter Paket</h2>
                <button onClick={() => setShowFilters(false)} className="p-2">
                  <X size={24} />
                </button>
              </div>

              {/* Vehicle Type Filter */}
              <div className="flex flex-col gap-2 mb-6 pb-6 border-b border-gray-200">
                <h3 className="text-base font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#224297]" />
                  Jenis Kendaraan
                </h3>
                <button
                  onClick={() => setSelectedVehicle(null)}
                  className={`flex justify-between items-center text-left px-3 py-2 rounded-lg transition-colors ${!selectedVehicle ? 'bg-[#224297] text-white' : 'hover:bg-gray-100 text-gray-900'}`}
                >
                  <span>Semua Jenis</span>
                  <span className="text-sm opacity-70">{pakets.length}</span>
                </button>
                {vehicleTypes.map((type, i) => {
                  const count = pakets.filter((p: any) => p.jenis_kendaraan === type).length
                  return (
                    <button
                      key={i}
                      onClick={() => setSelectedVehicle(type)}
                      className={`flex justify-between items-center text-left px-3 py-2 rounded-lg transition-colors ${selectedVehicle === type ? 'bg-[#224297] text-white' : 'hover:bg-gray-100 text-gray-900'}`}
                    >
                      <span>{type}</span>
                      <span className="text-sm opacity-70">{count}</span>
                    </button>
                  )
                })}
              </div>

              {/* CTA Card */}
              <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-[#224297] to-[#050b14] text-white p-6">
                <div className="absolute inset-0 bg-black/20" />
                <div className="relative z-10">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#ffd900]">Butuh Bantuan?</span>
                  <h3 className="text-lg font-bold mt-2 mb-3">Konsultasi Paket</h3>
                  <p className="text-sm text-white/80 mb-4">Tim kami bantu pilih paket yang tepat</p>
                  <a
                    href="https://wa.me/6287817773888?text=halo%20minna,%20saya%20ingin%20konsultasi%20tentang%20paket%20service%20di%20bengkel%20wiguna"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-[#ffd900] text-[#1a3567] font-semibold rounded-full text-sm hover:bg-yellow-400 transition-colors"
                  >
                    Hubungi via WhatsApp
                  </a>
                </div>
              </div>
            </div>

            {/* Paket Listing */}
            <div className="col-span-3">
              {/* Sorting & Results Count */}
              <div className="flex flex-row justify-between items-center pb-4 border-b border-gray-200 mb-6">
                <p className="m-0 text-sm md:text-base font-medium text-gray-700">
                  Menampilkan <span className="text-[#224297] font-bold">{filteredPakets.length}</span> paket
                  {selectedVehicle && <span> untuk <span className="text-[#224297]">{selectedVehicle}</span></span>}
                </p>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-auto text-base font-medium px-4 py-2 appearance-none pr-10 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#224297] focus:border-[#224297] transition duration-300 bg-white"
                  aria-label="Urutkan"
                >
                  <option value="relevance">Relevansi</option>
                  <option value="bestseller">Best Seller</option>
                  <option value="high-low">Harga Tertinggi</option>
                  <option value="low-high">Harga Terendah</option>
                </select>
              </div>

              {/* Paket Grid */}
              {filteredPakets.length > 0 ? (
                <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 relative">
                  {filteredPakets.map((paket: any) => (
                    <PaketCard key={paket.id} paket={paket} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-16 bg-gray-50 rounded-2xl">
                  <span className="text-6xl mb-4 block">📦</span>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Tidak ada paket ditemukan</h3>
                  <p className="text-gray-500 mb-6">Coba ubah filter atau lihat semua paket</p>
                  <button
                    onClick={() => setSelectedVehicle(null)}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#224297] text-white font-semibold rounded-full hover:bg-[#1a3567] transition-colors"
                  >
                    Lihat Semua Paket
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}