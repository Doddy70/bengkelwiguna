/**
 * Promosi Archive Page — Bengkel Wiguna
 * Template: Shop One layout
 */

"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Filter, X } from "lucide-react";
import { Promosi } from "@/types/wordpress";

interface PromoCardProps {
  promo: any;
}

function PromoCard({ promo }: PromoCardProps) {
  const title = typeof promo.title === 'string' ? promo.title : promo.title?.rendered || ''
  const excerpt = promo.excerpt?.rendered || promo.excerpt || ''
  const cleanExcerpt = excerpt.replace(/<[^>]*>/g, '').slice(0, 180)

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
    <div className="flex flex-col gap-2">
      {/* Promo Image */}
      <div className="relative overflow-hidden rounded-xl bg-gray-50 aspect-[4/3]">
        {hasDiscount && discountPercent > 0 && (
          <div className="absolute top-3 left-3 z-10 bg-green-600 text-white text-xs font-medium py-1 px-2 rounded-md">
            -{discountPercent}% OFF
          </div>
        )}
        <div className="absolute top-3 right-3 z-10 bg-red-600 text-white text-xs font-medium py-1 px-2 rounded-md">
          PROMO
        </div>
        <Link href={`/promosi/${promo.slug}`} className="group block relative w-full h-full">
          {promo.featured_img ? (
            <Image
              src={promo.featured_img}
              alt={title}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-[#ffd900] to-[#224297] flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
              <span className="text-5xl">🔥</span>
            </div>
          )}
        </Link>
      </div>

      {/* Promo Content */}
      <div className="mb-2 mt-2">
        <Link href={`/promosi/${promo.slug}`} className="block text-xl font-semibold text-gray-900 mb-0 hover:text-[#224297] transition-colors">
          {title}
        </Link>
        <p className="text-sm font-medium text-gray-500 mt-[2px] mb-2">
          {promo.tanggal_selesai ? `Berlaku hingga ${promo.tanggal_selesai}` : 'Promo Spesial Bengkel Wiguna'}
        </p>

        <p className="text-lg font-semibold text-gray-800 pt-1">
          {promo.harga_promo || 'Hubungi Kami'}
          {promo.harga_asli && (
            <span className="line-through text-sm text-gray-500 font-medium ml-2">
              {promo.harga_asli}
            </span>
          )}
        </p>
      </div>
    </div>
  )
}

interface PromosiArchiveProps {
  promos: Promosi[];
}

export default function PromosiArchiveClient({ promos }: PromosiArchiveProps) {
  const [showFilters, setShowFilters] = useState(false)
  const [sortBy, setSortBy] = useState("relevance")

  // Extract unique categories (if any) from WordPress data or fallback to generic
  const categories = ["Servis Ringan", "Paket Bundling", "Ganti Oli", "Kaki-Kaki", "Spesial Liburan"]

  // Sort promos
  const sortedPromos = useMemo(() => {
    const result = [...promos]

    switch (sortBy) {
      case "high-low":
        result.sort((a: any, b: any) => {
          const priceA = parseFloat((a.harga_promo || '0').replace(/[^0-9]/g, ''))
          const priceB = parseFloat((b.harga_promo || '0').replace(/[^0-9]/g, ''))
          return priceB - priceA
        })
        break
      case "low-high":
        result.sort((a: any, b: any) => {
          const priceA = parseFloat((a.harga_promo || '0').replace(/[^0-9]/g, ''))
          const priceB = parseFloat((b.harga_promo || '0').replace(/[^0-9]/g, ''))
          return priceA - priceB
        })
        break
      case "newest":
        result.sort((a: any, b: any) => new Date(b.date).getTime() - new Date(a.date).getTime())
        break
    }

    return result
  }, [promos, sortBy])

  // Count active promos
  const activePromos = sortedPromos.filter((p: any) => {
    if (!p.tanggal_selesai) return true
    return new Date(p.tanggal_selesai) >= new Date()
  })

  return (
    <>
      {/* Archive Header */}
      <section className="bg-light-blue-banner text-white pt-32 pb-12">
        <div className="max-w-screen-xl mx-auto px-3 sm:px-6 md:px-14 lg:px-14 xl:px-18 2xl:px-3">
          <div className="flex flex-col items-center text-center font-dm xl:w-2/3 lg:w-2/3 mx-auto">
            <h1 className="text-4xl lg:text-6xl font-bold mb-4 tracking-tight">
              Promosi Spesial
            </h1>
            <p className="text-lg text-white/90 mb-8 font-medium">
              Dapatkan penawaran terbaik dan hemat hingga 20% untuk perawatan kendaraan Anda.
            </p>
            {/* Breadcrumb */}
            <nav className="flex items-center text-sm font-medium">
              <Link href="/" className="hover:text-[#ffd900] transition-colors">Home</Link>
              <span className="mx-3 text-white/40">/</span>
              <span className="text-[#ffd900]">Promosi</span>
            </nav>
          </div>
        </div>
      </section>

      {/* Main Layout Area - Exact match to Shop One */}
      <div className="shop-wrap font-dm lg:pt-20 pt-12">
        <div className="max-w-screen-xl mx-auto px-3 sm:px-6 md:px-14 lg:px-14 xl:px-18 2xl:px-3 lg:pb-24 pb-12">
          <div className="grid lg:grid-cols-4 grid-cols-1 lg:gap-10 relative lg:space-y-0 space-y-5">

            {/* Mobile Filter Toggle */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden fixed bottom-6 left-6 z-40 bg-gray-900 text-white p-4 rounded-full shadow-2xl flex items-center gap-2 font-medium"
            >
              <Filter size={20} />
              Filter
            </button>

            {/* Sidebar Filters */}
            <div className={`w-full lg:block ${showFilters ? 'block' : 'hidden'} fixed lg:relative inset-0 z-50 lg:z-auto bg-white lg:bg-transparent p-6 lg:p-0 overflow-y-auto lg:overflow-visible`}>
              {/* Mobile Close Button */}
              <div className="lg:hidden flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-gray-900">Filters</h2>
                <button onClick={() => setShowFilters(false)} className="p-2 text-gray-500">
                  <X size={24} />
                </button>
              </div>

              <h2 className="text-gray-800 mt-2 text-2xl font-semibold mb-6 hidden lg:block">
                Filters
              </h2>

              {/* Categories Filter Dummy */}
              <div className="flex flex-col gap-2 mb-6 pb-6 border-b border-gray-200">
                <h3 className="text-base font-semibold text-gray-900 mb-3">
                  Tipe Promo
                </h3>
                {categories.map((cat, i) => (
                  <div key={i} className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        id={`category-${i}`}
                        className="accent-blue-500 w-4 h-4 rounded border-gray-300"
                        defaultChecked={i === 0 || i === 2}
                      />
                      <label
                        htmlFor={`category-${i}`}
                        className="text-base text-gray-900 font-medium"
                      >
                        {cat}
                      </label>
                    </div>
                  </div>
                ))}
              </div>

              {/* Banner Area (matching the template's sidebar banner) */}
              <div className="relative rounded-xl overflow-hidden mt-8">
                <div className="absolute inset-0 bg-gray-900 opacity-60 z-10"></div>
                <div className="absolute top-1/2 -translate-y-1/2 z-20 w-full text-white text-center px-6">
                  <span className="uppercase text-xs tracking-widest font-bold text-[#ffd900]">Hot Promo</span>
                  <h2 className="uppercase text-2xl font-bold mt-2 mb-6 leading-tight">
                    DISKON UP TO<br/>20% OFF
                  </h2>
                  <a
                    href="https://wa.me/6287817773888"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-white text-gray-900 text-sm font-bold rounded-md hover:bg-gray-100 transition-colors inline-block"
                  >
                    Booking Sekarang
                  </a>
                </div>
                <Image
                  src="/images/partners/bg-milestone-img.png.avif"
                  alt="banner"
                  className="w-full h-80 object-cover"
                  width={284}
                  height={426}
                />
              </div>
            </div>

            {/* Promo Listing Area (col-span-3) */}
            <div className="col-span-3">
              {/* Sorting */}
              <div className="flex flex-row justify-between items-center pb-3 border-b border-gray-200 mb-6">
                <p className="m-0 text-sm md:text-base font-medium text-gray-700">
                  Showing 1 - {activePromos.length} of {activePromos.length} results
                </p>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-auto text-base font-medium px-4 py-2 appearance-none pr-10 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-gray-400 transition duration-300 bg-white"
                  aria-label="Relevance"
                >
                  <option value="relevance">Relevance</option>
                  <option value="newest">Terbaru</option>
                  <option value="high-low">High to Low</option>
                  <option value="low-high">Low to High</option>
                </select>
              </div>

              {/* Promo Grid (3 Column Grid Layout matching Shop 1) */}
              {activePromos.length > 0 ? (
                <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 relative py-3">
                  {activePromos.map((promo: any) => (
                    <PromoCard key={promo.id} promo={promo} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-16 bg-gray-50 rounded-2xl border border-dashed border-gray-300">
                  <span className="text-6xl mb-4 block">📭</span>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Belum ada promo aktif</h3>
                  <p className="text-gray-500 mb-6">Nantikan penawaran menarik dari kami selanjutnya.</p>
                </div>
              )}

              {/* Load More (matching template) */}
              {activePromos.length > 5 && (
                <div className="flex text-center justify-center mt-12">
                  <button className="inline-flex items-center justify-center gap-2 px-7 py-3 text-white text-base font-medium bg-gray-900 hover:bg-gray-700 rounded-lg transition duration-300">
                    <span>Load more</span>
                    <ArrowUpRight size={20} className="text-white" />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}