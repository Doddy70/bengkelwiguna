"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { Service } from "@/types/wordpress";
import { Icon } from "@iconify/react";
import WigunaCard from "@/components/ui/WigunaCard";

// Helper to clean excerpt
const getCleanExcerpt = (service: any) => {
  const rawExcerpt = service.excerpt?.rendered || service.excerpt || '';
  const rawContent = service.content?.rendered || service.content || '';
  const sourceText = rawExcerpt || rawContent;
  return sourceText.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim().slice(0, 100) + '...';
}

const ServiceCard = ({ service, index }: { service: any, index: number }) => {
    const title = typeof service.title === 'string' ? service.title : service.title?.rendered || '';
    const excerpt = getCleanExcerpt(service);
    
    return (
        <WigunaCard
            href={`/services/${service.slug}`}
            image={service.featured_img || "/images/hero-desktop.webp"}
            imageAspectRatio="16/10"
            tag={service.kategori_layanan || "Layanan"}
            title={title}
            excerpt={excerpt}
            variant="split"
            buttonText="Selengkapnya"
            secondaryIcon="solar:chat-round-line-linear"
            metaItems={[
                { icon: 'solar:shield-check-linear', text: 'Gratis Diagnosa' },
                { icon: 'solar:tuning-linear', text: 'Teknisi Ahli' }
            ]}
            onSecondaryClick={() => {
                if (typeof window !== 'undefined') {
                    window.open(`https://wa.me/6287817773888?text=Halo%20Bengkel%20Wiguna,%20saya%20ingin%20tanya%20tentang%20layanan%20${encodeURIComponent(title)}`, '_blank');
                }
            }}
        />
    );
};

export default function ServicesArchiveClient({ services }: { services: Service[] }) {
    const [selectedCategory, setSelectedCategory] = useState<string>("Semua Layanan");

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

        return result;
    }, [services, selectedCategory]);
    
    
    // For the hero bento cards, we'll try to use the first two service images if available
    const heroImage1 = services.length > 0 && services[0].featured_img ? services[0].featured_img : "/images/hero-desktop.webp";
    const heroImage2 = services.length > 1 && services[1].featured_img ? services[1].featured_img : "/images/hero-desktop.webp";

    return (
        <div className="relative bg-white dark:bg-neutral-950 min-h-screen pb-24 font-dm">
            {/* Page Background Image */}
            <div className="fixed inset-0 z-0">
              <Image src="/images/bg-default-page.webp" alt="" fill className="object-cover" aria-hidden="true" />
              <div className="absolute inset-0 bg-white/85 dark:bg-neutral-950/90" />
            </div>
            
            {/* HERO SECTION */}
            <section className="relative z-10 pt-32 lg:pt-40 pb-16 max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Hero Header */}
                <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start mb-16">
                    <div className="lg:col-span-8 flex flex-col">
                        <div className="flex items-center gap-2 text-sm font-bold text-gray-500 mb-8">
                            <Icon icon="solar:home-2-linear" width={18} />
                            <span>Home</span>
                            <span className="text-gray-300">/</span>
                            <span className="text-gray-900 dark:text-white">Service</span>
                        </div>
                        
                        <h1 className="text-5xl md:text-6xl lg:text-[4.5rem] font-semibold text-gray-900 dark:text-white tracking-tight leading-[1.1]">
                            Solusi Perawatan <br/> Kendaraan Terbaik
                        </h1>
                    </div>
                    
                    <div className="lg:col-span-4 flex flex-col justify-end lg:pt-20">
                        <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-8">
                            Bengkel Wiguna menyediakan layanan otomotif inovatif dan terpercaya untuk menyelesaikan masalah kendaraan Anda dan memberikan hasil yang terukur.
                        </p>
                        <a href="https://wa.me/6281717773888" target="_blank" rel="noopener noreferrer" className="bg-[#ffd900] hover:bg-[#e6c300] text-[#224297] font-bold px-8 py-3.5 rounded-full w-fit transition-all hover:scale-105 shadow-sm">
                            Konsultasi Gratis
                        </a>
                    </div>
                </div>

                {/* Hero Bento Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
                    {/* Image Card 1 */}
                    <div className="relative w-full aspect-[4/3] md:aspect-auto md:h-[400px] rounded-[2rem] overflow-hidden">
                        <Image src={heroImage1} alt="Bengkel Wiguna Activity 1" fill className="object-cover" />
                    </div>
                    
                    {/* Stat Card */}
                    <div className="bg-[#f0f4ff] dark:bg-blue-900/20 w-full aspect-[4/3] md:aspect-auto md:h-[400px] rounded-[2rem] p-8 lg:p-10 flex flex-col justify-between border border-blue-50 dark:border-blue-900/30">
                        <div>
                            <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 mb-2">Ulasan</p>
                            <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 flex items-center gap-2">Google <Icon icon="flat-color-icons:google" width={24} /></p>
                        </div>
                        
                        <div>
                            <h2 className="text-6xl lg:text-7xl font-medium text-gray-900 dark:text-white tracking-tight mb-6">
                                8k+
                            </h2>
                            
                            {/* Avatar Stack */}
                            <div className="flex -space-x-3">
                                <div className="w-12 h-12 rounded-full bg-[#224297] flex items-center justify-center text-white border-2 border-[#f0f4ff] shadow-sm z-10">
                                    <Icon icon="solar:user-bold" width={20} />
                                </div>
                                <div className="w-12 h-12 rounded-full bg-[#ffd900] flex items-center justify-center text-[#224297] border-2 border-[#f0f4ff] shadow-sm z-20">
                                    <Icon icon="solar:user-bold" width={20} />
                                </div>
                                <div className="w-12 h-12 rounded-full bg-blue-400 flex items-center justify-center text-white border-2 border-[#f0f4ff] shadow-sm z-30">
                                    <Icon icon="solar:user-bold" width={20} />
                                </div>
                                <div className="w-12 h-12 rounded-full bg-gray-900 flex items-center justify-center text-white border-2 border-[#f0f4ff] shadow-sm z-40">
                                    <Icon icon="solar:add-linear" width={20} />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Image Card 2 */}
                    <div className="relative w-full aspect-[4/3] md:aspect-auto md:h-[400px] rounded-[2rem] overflow-hidden">
                        <Image src={heroImage2} alt="Bengkel Wiguna Activity 2" fill className="object-cover" />
                    </div>
                </div>
            </section>

            {/* SERVICES GRID SECTION */}
            <section className="relative z-10 pt-16 pb-16 max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Section Header */}
                <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center mb-16">
                    <div className="lg:col-span-8 flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8">
                        <span className="text-gray-400 font-medium text-lg whitespace-nowrap">Our Service</span>
                        <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 dark:text-white tracking-tight leading-tight">
                            Solusi Komprehensif, Semua <br className="hidden md:block" /> di Satu Tempat
                        </h2>
                    </div>
                    <div className="lg:col-span-4">
                        <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base leading-relaxed border-l-2 border-gray-200 dark:border-gray-800 pl-4">
                            Dari perawatan mesin, AC, hingga perbaikan kaki-kaki—kami memberikan layanan end-to-end yang disesuaikan dengan kebutuhan kendaraan Anda secara profesional.
                        </p>
                    </div>
                </div>

                {/* Filter Tabs */}
                <div className="flex flex-wrap gap-3 mb-10">
                    {categories.map((cat) => (
                        <button
                            key={cat.name}
                            onClick={() => setSelectedCategory(cat.name)}
                            className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all ${
                                selectedCategory === cat.name
                                    ? "bg-[#224297] text-white shadow-md"
                                    : "bg-gray-100 dark:bg-neutral-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-neutral-700"
                            }`}
                        >
                            {cat.name}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {filteredServices.length > 0 ? (
                        filteredServices.map((service, index) => (
                            <ServiceCard key={service.id} service={service} index={index} />
                        ))
                    ) : (
                        <div className="col-span-full py-12 text-center text-gray-500">
                            Layanan tidak ditemukan untuk kategori ini.
                        </div>
                    )}
                </div>

            </section>

        </div>
    );
}