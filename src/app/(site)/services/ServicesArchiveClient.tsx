"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { Service } from "@/types/wordpress";
import { Icon } from "@iconify/react";
import WigunaCard from "@/components/ui/WigunaCard";
import SlideTabFilter from "@/components/ui/SlideTabFilter";

// ============ TDD Functions for kategori_layanan Taxonomy ============
// Based on: __tests__/kategori-layanan.test.js
// Supports: _embed.wp:term, services_category, taxonomies format

interface TaxonomyTerm {
    id: number;
    name: string;
    slug?: string;
    taxonomy?: string;
}

interface ServiceWithTerms extends Service {
    _embedded?: {
        "wp:term"?: { id: number; name: string; slug: string; taxonomy: string; }[][];
    };
    services_category?: (number | TaxonomyTerm)[];
    taxonomies?: {
        services_category?: TaxonomyTerm[];
        kategori_layanan?: TaxonomyTerm[];
    };
}

/**
 * Extract categories from WP REST API _embed format
 * Supports: _embed.wp:term, services_category, taxonomies format
 */
function extractKategoriLayanan(services: ServiceWithTerms[]) {
    const categoryMap = new Map<number, TaxonomyTerm>();

    services.forEach((service) => {
        // Format 1: _embed.wp:term (WP REST API with _embed parameter)
        const embeddedTerms = service._embedded?.["wp:term"]?.[0] || [];
        embeddedTerms.forEach((term) => {
            // Accept kategori_layanan, services_category, or category taxonomy
            if (term.taxonomy === 'kategori_layanan' ||
                term.taxonomy === 'services_category' ||
                term.taxonomy === 'category') {
                if (!categoryMap.has(term.id)) {
                    categoryMap.set(term.id, {
                        id: term.id,
                        name: term.name,
                        slug: term.slug,
                        taxonomy: term.taxonomy
                    });
                }
            }
        });

        // Format 2: Flat services_category array
        const flatCategories = service.services_category || [];
        if (Array.isArray(flatCategories) && flatCategories.length > 0) {
            flatCategories.forEach((cat: any) => {
                // cat could be number ID or object {id, name, slug}
                const id = typeof cat === 'number' ? cat : (cat.id || cat.term_id);
                const name = typeof cat === 'string' ? cat : (cat.name || `Kategori ${id}`);
                if (id && !categoryMap.has(id)) {
                    categoryMap.set(id, { id, name });
                }
            });
        }

        // Format 3: Nested taxonomies object
        const taxonomies = service.taxonomies || {};
        const nestedCategories = taxonomies.kategori_layanan ||
                                 taxonomies.services_category || [];
        if (Array.isArray(nestedCategories) && nestedCategories.length > 0) {
            nestedCategories.forEach((cat: any) => {
                const id = cat.id || cat.term_id;
                if (id && !categoryMap.has(id)) {
                    categoryMap.set(id, {
                        id,
                        name: cat.name || `Kategori ${id}`
                    });
                }
            });
        }
    });

    if (categoryMap.size === 0) {
        return [{ name: "Semua Layanan", id: 0 }];
    }

    return [
        { name: "Semua Layanan", id: 0 },
        ...Array.from(categoryMap.values())
    ];
}

/**
 * Filter services by selected category
 */
function filterByKategoriLayanan(
    services: ServiceWithTerms[],
    selectedCategory: string,
    categories: { name: string; id: number }[]
) {
    // "Semua Layanan" means show all
    if (selectedCategory === "Semua Layanan" || selectedCategory === "0") {
        return services;
    }

    // Find category by name
    const cat = categories.find(c => c.name === selectedCategory);
    if (!cat || !cat.id) return services;

    return services.filter((service) => {
        // Check _embed format
        const embeddedTerms = service._embedded?.["wp:term"]?.[0] || [];
        const hasEmbedMatch = embeddedTerms.some(term =>
            (term.taxonomy === 'kategori_layanan' ||
             term.taxonomy === 'services_category' ||
             term.taxonomy === 'category') &&
            term.id === cat.id
        );
        if (hasEmbedMatch) return true;

        // Check flat array
        const flatCats = service.services_category || [];
        if (Array.isArray(flatCats) && flatCats.length > 0) {
            const hasFlatMatch = flatCats.some(c => {
                const id = typeof c === 'number' ? c : (c as any).id || (c as any).term_id;
                return id === cat.id;
            });
            if (hasFlatMatch) return true;
        }

        // Check nested taxonomies
        const taxonomies = service.taxonomies || {};
        const nestedCats = taxonomies.kategori_layanan ||
                          taxonomies.services_category || [];
        if (Array.isArray(nestedCats) && nestedCats.length > 0) {
            const hasNestedMatch = nestedCats.some(c =>
                (c.id || (c as any).term_id) === cat.id
            );
            if (hasNestedMatch) return true;
        }

        return false;
    });
}

/**
 * Build WP API URL with taxonomy filter
 */
function buildTaxonomyFilterUrl(baseUrl: string, taxonomySlug: string, termId: number) {
    if (!termId || termId === 0) {
        return `${baseUrl}?per_page=99&_embed`;
    }
    return `${baseUrl}?${taxonomySlug}=${termId}&per_page=99&_embed`;
}

// ============ END TDD Functions ============

// Helper to clean excerpt
const getCleanExcerpt = (service: any) => {
  const rawExcerpt = service.excerpt?.rendered || service.excerpt || '';
  const rawContent = service.content?.rendered || service.content || '';
  const sourceText = rawExcerpt || rawContent;
  return sourceText.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim().slice(0, 100) + '...';
}

const ServiceCard = ({ service, index, basePath }: { service: any, index: number, basePath: string }) => {
    const title = typeof service.title === 'string' ? service.title : service.title?.rendered || '';
    const excerpt = getCleanExcerpt(service);

    return (
        <WigunaCard
            href={`${basePath}/${service.slug}`}
            image={service.featured_img || "/images/hero-desktop.webp"}
            imageAspectRatio="16/10"
            tag={service.kategori_layanan || "Layanan"}
            title={title}
            excerpt={excerpt}
                        variant="glass"
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

interface ServicesArchiveClientProps {
    services: Service[];
    basePath?: string; // Default: '/services' for services CPT, '/layanan-spesialis' for specialists
}

export default function ServicesArchiveClient({ services, basePath = '/services' }: ServicesArchiveClientProps) {
    const [selectedCategory, setSelectedCategory] = useState<string>("Semua Layanan");

    // Extract categories using TDD function
    // Supports: _embed.wp:term, services_category, taxonomies formats
    const categories = useMemo(() => {
        return extractKategoriLayanan(services as ServiceWithTerms[]);
    }, [services]);

    // Filter services using TDD function
    const filteredServices = useMemo(() => {
        return filterByKategoriLayanan(
            services as ServiceWithTerms[],
            selectedCategory,
            categories
        );
    }, [services, selectedCategory, categories]);
    
    
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
            <section className="relative z-10 pt-8 lg:pt-40 pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Hero Header */}
                <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start mb-16">
                    <div className="lg:col-span-8 flex flex-col">
                        <div className="flex items-center gap-2 text-sm font-bold text-gray-500 mb-8">
                            <Icon icon="solar:home-2-linear" width={18} />
                            <span>Home</span>
                            <span className="text-gray-300">/</span>
                            <span className="text-gray-900 dark:text-white">Service</span>
                        </div>
                        
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-gray-900 dark:text-white tracking-tight leading-[1.1]">
                            Solusi Perawatan <br/> Kendaraan Terbaik
                        </h1>
                    </div>
                    
                    <div className="lg:col-span-4 flex flex-col justify-end lg:pt-20">
                        <p className="text-gray-600 dark:text-gray-400 text-base lg:text-lg leading-relaxed mb-6">
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
                    <div className="relative w-full aspect-[4/3] md:aspect-auto md:h-[320px] lg:h-[360px] rounded-2xl overflow-hidden">
                        <Image src={heroImage1} alt="Layanan Bengkel Wiguna - Servis Mobil Profesional" fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" priority />
                    </div>
                    
                    {/* Stat Card */}
                    <div className="bg-[#f0f4ff] dark:bg-blue-900/20 w-full aspect-[4/3] md:aspect-auto md:h-[320px] lg:h-[360px] rounded-2xl p-6 lg:p-8 flex flex-col justify-between border border-blue-50 dark:border-blue-900/30">
                        <div>
                            <p className="text-base lg:text-lg text-gray-600 dark:text-gray-300 mb-2">Ulasan</p>
                            <p className="text-base lg:text-lg text-gray-600 dark:text-gray-300 flex items-center gap-2">Google <Icon icon="flat-color-icons:google" width={20} /></p>
                        </div>

                        <div>
                            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white tracking-tight mb-4">
                                8k+
                            </h2>

                            {/* Avatar Stack */}
                            <div className="flex -space-x-2">
                                <div className="w-10 h-10 lg:h-12 rounded-full bg-[#224297] flex items-center justify-center text-white border-2 border-[#f0f4ff] shadow-sm z-10">
                                    <Icon icon="solar:user-bold" width={18} />
                                </div>
                                <div className="w-10 h-10 lg:h-12 rounded-full bg-[#ffd900] flex items-center justify-center text-[#224297] border-2 border-[#f0f4ff] shadow-sm z-20">
                                    <Icon icon="solar:user-bold" width={18} />
                                </div>
                                <div className="w-10 h-10 lg:h-12 rounded-full bg-blue-400 flex items-center justify-center text-white border-2 border-[#f0f4ff] shadow-sm z-30">
                                    <Icon icon="solar:user-bold" width={18} />
                                </div>
                                <div className="w-10 h-10 lg:h-12 rounded-full bg-gray-900 flex items-center justify-center text-white border-2 border-[#f0f4ff] shadow-sm z-40">
                                    <Icon icon="solar:add-linear" width={18} />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Image Card 2 */}
                    <div className="relative w-full aspect-[4/3] md:aspect-auto md:h-[320px] lg:h-[360px] rounded-2xl overflow-hidden">
                        <Image src={heroImage2} alt="Teknisi Bengkel Wiguna yang Berpengalaman" fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
                    </div>
                </div>
            </section>

            {/* SERVICES GRID SECTION */}
            <section className="relative z-10 pt-12 lg:pt-16 pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-center mb-10 lg:mb-12">
                    <div className="lg:col-span-8 flex flex-col md:flex-row items-start md:items-center gap-4 lg:gap-6">
                        <span className="text-gray-400 font-medium text-base lg:text-lg whitespace-nowrap">Our Service</span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 dark:text-white tracking-tight leading-tight">
                            Solusi Komprehensif, Semua <br className="hidden md:block" /> di Satu Tempat
                        </h2>
                    </div>
                    <div className="lg:col-span-4">
                        <p className="text-gray-600 dark:text-gray-400 text-sm lg:text-base leading-relaxed border-l-2 border-gray-200 dark:border-gray-800 pl-4">
                            Dari perawatan mesin, AC, hingga perbaikan kaki-kaki—kami memberikan layanan end-to-end yang disesuaikan dengan kebutuhan kendaraan Anda secara profesional.
                        </p>
                    </div>
                </div>

                {/* Slide Tab Filter - Glassmorphism Style */}
                <div className="mb-10 -mx-4 px-4 lg:mx-0 lg:px-0">
                    <SlideTabFilter
                        categories={categories}
                        selectedCategory={selectedCategory}
                        onSelect={setSelectedCategory}
                    />
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {filteredServices.length > 0 ? (
                        filteredServices.map((service, index) => (
                            <ServiceCard key={service.id} service={service} index={index} basePath={basePath} />
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