/**
 * Services Archive Page — Bengkel Wiguna
 * Template: Shop Two with filters and product grid
 */

"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Filter, X } from "lucide-react";
import Header from "@/components/layout/Header";
import FooterModern from "@/components/heroui/footer-modern";
import Button from "@/components/ui/Button";
import { Service, Promosi, PaketService } from "@/types/wordpress";

interface ServiceCardProps {
  service: any;
}

function ServiceCard({ service }: ServiceCardProps) {
  const title = typeof service.title === 'string' ? service.title : service.title?.rendered || ''
  const excerpt = service.excerpt?.rendered || service.excerpt || ''
  const cleanExcerpt = excerpt.replace(/<[^>]*>/g, '').slice(0, 150)

  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
      {/* Image */}
      <div className="relative h-56 overflow-hidden bg-gray-100">
        {service.featured_img ? (
          <Image
            src={service.featured_img}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-[#224297] to-[#050b14] flex items-center justify-center">
            <span className="text-5xl">🔧</span>
          </div>
        )}
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        {/* Quick View Button */}
        <Link
          href={`/services/${service.slug}`}
          className="absolute bottom-4 right-4 bg-white text-[#224297] px-4 py-2 rounded-full text-sm font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-[#ffd900] hover:text-[#1a3567] flex items-center gap-2"
        >
          Lihat Detail <ArrowUpRight size={14} />
        </Link>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#224297] transition-colors">
          <Link href={`/services/${service.slug}`}>{title}</Link>
        </h3>

        {/* Meta */}
        <div className="flex items-center gap-3 text-sm text-gray-500 mb-4">
          {service.durasi && (
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-[#224297]" />
              {service.durasi}
            </span>
          )}
          {service.garansi && (
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-green-500" />
              {service.garansi}
            </span>
          )}
        </div>

        {/* Excerpt */}
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{cleanExcerpt}...</p>

        {/* Price & CTA */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div>
            {service.harga ? (
              <span className="text-xl font-bold text-[#224297]">{service.harga}</span>
            ) : (
              <span className="text-sm text-gray-500">Hubungi untuk harga</span>
            )}
          </div>
          <Link
            href={`/services/${service.slug}`}
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#224297] hover:text-[#ffd900] transition-colors"
          >
            Selengkapnya <ArrowUpRight size={14} />
          </Link>
        </div>
      </div>
    </div>
  )
}

interface ServicesArchiveProps {
  services: Service[];
}

export default function ServicesArchiveClient({ services }: ServicesArchiveProps) {
  const [showFilters, setShowFilters] = useState(false)
  const [sortBy, setSortBy] = useState("relevance")
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  // Extract unique categories from services
  const categories = useMemo(() => {
    const cats = new Set<string>()
    services.forEach((s: any) => {
      if (s.service_category_name) cats.add(s.service_category_name)
    })
    return Array.from(cats)
  }, [services])

  // Filter and sort services
  const filteredServices = useMemo(() => {
    let result = [...services]

    if (selectedCategory) {
      result = result.filter((s: any) => s.service_category_name === selectedCategory)
    }

    // Sort
    switch (sortBy) {
      case "high-low":
        result.sort((a: any, b: any) => {
          const priceA = parseFloat((a.harga || '0').replace(/[^0-9]/g, ''))
          const priceB = parseFloat((b.harga || '0').replace(/[^0-9]/g, ''))
          return priceB - priceA
        })
        break
      case "low-high":
        result.sort((a: any, b: any) => {
          const priceA = parseFloat((a.harga || '0').replace(/[^0-9]/g, ''))
          const priceB = parseFloat((b.harga || '0').replace(/[^0-9]/g, ''))
          return priceA - priceB
        })
        break
      case "newest":
        result.sort((a: any, b: any) => new Date(b.date).getTime() - new Date(a.date).getTime())
        break
    }

    return result
  }, [services, selectedCategory, sortBy])

  return (
    <>
      {/* Archive Header */}
      <section className="bg-gradient-to-r from-[#224297] to-[#050b14] text-white py-12">
        <div className="max-w-screen-xl mx-auto px-3 sm:px-6 md:px-14 lg:px-14 xl:px-18 2xl:px-3">
          <div className="text-center mb-6">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">Layanan Service</h1>
            <p className="text-white/80 text-lg">Solusi lengkap untuk kebutuhan kendaraan Anda</p>
          </div>
          {/* Breadcrumb */}
          <nav className="flex justify-center text-sm">
            <Link href="/" className="hover:text-[#ffd900]">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-[#ffd900]">Layanan</span>
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
                <h2 className="text-xl font-bold text-gray-900">Filter</h2>
                <button onClick={() => setShowFilters(false)} className="p-2">
                  <X size={24} />
                </button>
              </div>

              {/* Categories Filter */}
              <div className="flex flex-col gap-2 mb-6 pb-6 border-b border-gray-200">
                <h3 className="text-base font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#224297]" />
                  Kategori
                </h3>
                <button
                  onClick={() => setSelectedCategory(null)}
                  className={`flex justify-between items-center text-left px-3 py-2 rounded-lg transition-colors ${!selectedCategory ? 'bg-[#224297] text-white' : 'hover:bg-gray-100 text-gray-900'}`}
                >
                  <span>Semua Layanan</span>
                  <span className="text-sm opacity-70">{services.length}</span>
                </button>
                {categories.map((cat, i) => {
                  const count = services.filter((s: any) => s.service_category_name === cat).length
                  return (
                    <button
                      key={i}
                      onClick={() => setSelectedCategory(cat)}
                      className={`flex justify-between items-center text-left px-3 py-2 rounded-lg transition-colors ${selectedCategory === cat ? 'bg-[#224297] text-white' : 'hover:bg-gray-100 text-gray-900'}`}
                    >
                      <span>{cat}</span>
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
                  <h3 className="text-lg font-bold mt-2 mb-3">Konsultasi Gratis</h3>
                  <p className="text-sm text-white/80 mb-4">Tim teknisi kami siap membantu</p>
                  <a
                    href="https://wa.me/6287817773888?text=halo%20minna,%20saya%20ingin%20konsultasi%20tentang%20layanan%20service%20di%20bengkel%20wiguna"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-[#ffd900] text-[#1a3567] font-semibold rounded-full text-sm hover:bg-yellow-400 transition-colors"
                  >
                    Hubungi via WhatsApp
                  </a>
                </div>
              </div>
            </div>

            {/* Services Listing */}
            <div className="col-span-3">
              {/* Sorting & Results Count */}
              <div className="flex flex-row justify-between items-center pb-4 border-b border-gray-200 mb-6">
                <p className="m-0 text-sm md:text-base font-medium text-gray-700">
                  Menampilkan <span className="text-[#224297] font-bold">{filteredServices.length}</span> layanan
                  {selectedCategory && <span> di <span className="text-[#224297]">{selectedCategory}</span></span>}
                </p>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-auto text-base font-medium px-4 py-2 appearance-none pr-10 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#224297] focus:border-[#224297] transition duration-300 bg-white"
                  aria-label="Urutkan"
                >
                  <option value="relevance">Relevansi</option>
                  <option value="newest">Terbaru</option>
                  <option value="high-low">Harga Tertinggi</option>
                  <option value="low-high">Harga Terendah</option>
                </select>
              </div>

              {/* Services Grid */}
              {filteredServices.length > 0 ? (
                <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 relative">
                  {filteredServices.map((service: any) => (
                    <ServiceCard key={service.id} service={service} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-16 bg-gray-50 rounded-2xl">
                  <span className="text-6xl mb-4 block">🔍</span>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Tidak ada layanan ditemukan</h3>
                  <p className="text-gray-500 mb-6">Coba ubah filter atau lihat semua layanan</p>
                  <Button
                    onClick={() => setSelectedCategory(null)}
                    label="Lihat Semua Layanan"
                    bgColor="bg-[#224297] hover:bg-[#1a3567]"
                    textColor="text-white"
                    padding="py-3 px-6"
                  />
                </div>
              )}

              {/* Load More (optional) */}
              {filteredServices.length >= 6 && (
                <div className="flex text-center justify-center mt-10">
                  <button className="inline-flex items-center justify-center gap-2 px-7 py-3 text-[#224297] text-base font-medium border-2 border-[#224297] rounded-lg hover:bg-[#224297] hover:text-white transition-all duration-300">
                    <span>Lihat Lebih Banyak</span>
                    <ArrowUpRight size={20} />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <FooterModern />
    </>
  )
}