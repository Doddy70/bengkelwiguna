"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "react-feather";
import { Service } from "@/types/wordpress";
import PageTitle from "@/components/ui/PageTitle";
import { Breadcrumb } from "@/components/ui/Breadcrumb";

// Helper to clean excerpt
const getCleanExcerpt = (service: any) => {
  const rawExcerpt = service.excerpt?.rendered || service.excerpt || '';
  const rawContent = service.content?.rendered || service.content || '';
  const sourceText = rawExcerpt || rawContent;
  return sourceText.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim().slice(0, 100);
}

const ServiceCard = ({ service }: { service: any }) => {
    const title = typeof service.title === 'string' ? service.title : service.title?.rendered || '';
    const excerpt = getCleanExcerpt(service);
    
    return (
        <div className="flex flex-col gap-2">
            <div className="relative overflow-hidden rounded-xl bg-gray-100 aspect-[2/3]">
                <Link href={`/services/${service.slug}`} className="group block relative w-full h-full">
                    {service.featured_img ? (
                        <Image
                            src={service.featured_img}
                            alt={title}
                            className="rounded-xl overflow-hidden object-cover transition-transform duration-500 group-hover:scale-105"
                            fill
                            sizes="(max-width: 768px) 100vw, 33vw"
                        />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center bg-gray-200">
                            <span className="text-gray-400">No Image</span>
                        </div>
                    )}
                </Link>
            </div>
            <div className="mb-2 mt-2">
                <Link href={`/services/${service.slug}`}>
                    <span className="block text-xl font-semibold text-gray-900 mb-1 hover:text-[#224297] transition-colors">{title}</span>
                </Link>
                <p className="text-sm font-medium text-gray-500 mt-[2px] mb-2 line-clamp-2">{excerpt}</p>
            </div>
        </div>
    );
};

export default function ServicesArchiveClient({ services }: { services: Service[] }) {
    const [selectedCategory, setSelectedCategory] = useState<string>("");
    const [selectedSort, setSelectedSort] = useState("");

    // Setup categories based on keywords
    const categories = [
        { name: "Semua Layanan", keywords: [] },
        { name: "Perawatan Mesin", keywords: ["mesin", "oli", "tune up", "carbon", "detox", "berkala"] },
        { name: "Kaki-Kaki & Suspensi", keywords: ["ban", "balancing", "spooring", "kaki", "rem"] },
        { name: "Servis AC", keywords: ["ac", "freon", "flushing"] },
        { name: "Layanan Lainnya", keywords: ["other"] }
    ];

    const filteredServices = useMemo(() => {
        let result = services;
        
        if (selectedCategory && selectedCategory !== "Semua Layanan") {
            const cat = categories.find(c => c.name === selectedCategory);
            if (cat) {
                if (cat.name === "Layanan Lainnya") {
                    const otherKeywords = categories.flatMap(c => c.keywords).filter(k => k !== "other");
                    result = result.filter(s => {
                        const t = (typeof s.title === 'string' ? s.title : s.title?.rendered || '').toLowerCase();
                        return !otherKeywords.some(k => t.includes(k));
                    });
                } else {
                    result = result.filter(s => {
                        const t = (typeof s.title === 'string' ? s.title : s.title?.rendered || '').toLowerCase();
                        return cat.keywords.some(k => t.includes(k));
                    });
                }
            }
        }
        
        // Sorting
        if (selectedSort === "a-z") {
            result.sort((a, b) => {
                const ta = typeof a.title === 'string' ? a.title : a.title?.rendered || '';
                const tb = typeof b.title === 'string' ? b.title : b.title?.rendered || '';
                return ta.localeCompare(tb);
            });
        } else if (selectedSort === "z-a") {
            result.sort((a, b) => {
                const ta = typeof a.title === 'string' ? a.title : a.title?.rendered || '';
                const tb = typeof b.title === 'string' ? b.title : b.title?.rendered || '';
                return tb.localeCompare(ta);
            });
        }

        return result;
    }, [services, selectedCategory, selectedSort]);

    return (
        <>
            <PageTitle title="Layanan Bengkel Wiguna" subtitle="" />
            <div className="flex justify-center text-center">
                <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Layanan" }]} />
            </div>
            
            <div className="shop-wrap font-sans lg:pt-20 pt-12">
                <div className="max-w-screen-xl mx-auto px-4 sm:px-6 md:px-14 lg:px-14 xl:px-18 2xl:px-3 lg:pb-24 pb-12">
                    <div className="grid lg:grid-cols-4 grid-cols-1 lg:gap-10 relative lg:space-y-0 space-y-8">
                        
                        {/* Filters Sidebar */}
                        <div className="w-full">
                            <h2 className="text-gray-900 mt-2 text-2xl font-bold mb-6">Filter Layanan</h2>

                            {/* Categories */}
                            <div className="flex flex-col gap-2 mb-6 pb-6 border-b border-gray-100">
                                <h3 className="text-base font-semibold text-gray-900 mb-4 uppercase tracking-widest">Kategori</h3>
                                {categories.map((cat, i) => {
                                    let count = 0;
                                    if (cat.name === "Semua Layanan") {
                                        count = services.length;
                                    } else if (cat.name === "Layanan Lainnya") {
                                        const otherKeywords = categories.flatMap(c => c.keywords).filter(k => k !== "other");
                                        count = services.filter(s => {
                                            const t = (typeof s.title === 'string' ? s.title : s.title?.rendered || '').toLowerCase();
                                            return !otherKeywords.some(k => t.includes(k));
                                        }).length;
                                    } else {
                                        count = services.filter(s => {
                                            const t = (typeof s.title === 'string' ? s.title : s.title?.rendered || '').toLowerCase();
                                            return cat.keywords.some(k => t.includes(k));
                                        }).length;
                                    }

                                    return (
                                        <div key={i} className="flex justify-between items-center group cursor-pointer" onClick={() => setSelectedCategory(cat.name)}>
                                            <div className="flex items-center gap-3">
                                                <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${selectedCategory === cat.name || (selectedCategory === "" && cat.name === "Semua Layanan") ? "border-[#224297]" : "border-gray-300"}`}>
                                                    {(selectedCategory === cat.name || (selectedCategory === "" && cat.name === "Semua Layanan")) && (
                                                        <div className="w-2 h-2 bg-[#224297] rounded-full"></div>
                                                    )}
                                                </div>
                                                <label className={`text-base font-medium cursor-pointer transition-colors ${selectedCategory === cat.name || (selectedCategory === "" && cat.name === "Semua Layanan") ? "text-[#224297] font-bold" : "text-gray-600 group-hover:text-gray-900"}`}>
                                                    {cat.name}
                                                </label>
                                            </div>
                                            <span className="text-sm text-gray-400 font-medium bg-gray-50 px-2 py-0.5 rounded-md">
                                                {count}
                                            </span>
                                        </div>
                                    );
                                })}
                            </div>

                            {/* Banner CTA */}
                            <div className="relative rounded-2xl overflow-hidden mt-8 shadow-md">
                                <div className="absolute inset-0 bg-[#224297] opacity-90 z-10"></div>
                                <div className="absolute inset-0 bg-[url('/images/hero-desktop.webp')] bg-cover bg-center opacity-30 z-0"></div>
                                <div className="relative z-20 w-full text-white text-center p-8 flex flex-col items-center">
                                    <span className="uppercase text-xs font-bold tracking-widest text-[#ffd900] mb-2">Konsultasi Gratis</span>
                                    <h2 className="text-2xl font-black mt-1 mb-6 leading-tight italic">
                                        TANYA MINNA SEKARANG
                                    </h2>
                                    <a
                                        href="https://wa.me/6281717773888?text=Halo%20Minna,%20saya%20ingin%20tanya%20layanan%20bengkel"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-6 py-3 bg-[#ffd900] text-[#224297] text-sm font-bold uppercase tracking-widest rounded-lg hover:bg-white transition-colors w-full"
                                    >
                                        Chat WhatsApp
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Service Listing */}
                        <div className="col-span-3">
                            {/* Sorting Header */}
                            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pb-4 border-b border-gray-100 mb-6 gap-4">
                                <p className="m-0 text-sm md:text-base font-medium text-gray-500">
                                    Menampilkan <span className="font-bold text-gray-900">{filteredServices.length}</span> layanan
                                    {selectedCategory && selectedCategory !== "Semua Layanan" ? ` untuk "${selectedCategory}"` : ""}
                                </p>
                                <select
                                    value={selectedSort}
                                    onChange={(e) => setSelectedSort(e.target.value)}
                                    className="w-full sm:w-auto text-sm font-medium px-4 py-2.5 appearance-none pr-10 border border-gray-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#224297] focus:border-[#224297] transition duration-300 bg-white"
                                    aria-label="Urutkan"
                                    style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%236b7280'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`, backgroundPosition: 'right 0.75rem center', backgroundRepeat: 'no-repeat', backgroundSize: '1rem 1rem' }}
                                >
                                    <option value="">Rekomendasi</option>
                                    <option value="a-z">A - Z</option>
                                    <option value="z-a">Z - A</option>
                                </select>
                            </div>

                            {/* Service Grid */}
                            {filteredServices.length > 0 ? (
                                <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-6 gap-y-10 relative">
                                    {filteredServices.map((service) => (
                                        <ServiceCard key={service.id} service={service} />
                                    ))}
                                </div>
                            ) : (
                                <div className="text-center py-20 bg-gray-50 rounded-2xl border border-gray-100">
                                    <p className="text-gray-500 font-medium">Tidak ada layanan yang ditemukan untuk kategori ini.</p>
                                    <button 
                                        onClick={() => setSelectedCategory("")}
                                        className="mt-4 px-6 py-2 bg-[#224297] text-white rounded-lg text-sm font-bold"
                                    >
                                        Tampilkan Semua
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}