"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { Icon } from "@iconify/react";
import { Promosi } from "@/types/wordpress";

interface PromoCarouselProps {
  promos: Promosi[];
  title?: string;
  subtitle?: string;
}

export default function PromoCarousel({ promos, title, subtitle }: PromoCarouselProps) {
  if (!promos || promos.length === 0) return null;

  const cards = promos.slice(0, 6).map((promo, index) => {
    const promoTitle = typeof promo.title === "string" ? promo.title : promo.title?.rendered || "Promo";
    const promoImage = promo.featured_img || "/images/promo-default.jpg";
    const category = promo.kategori_promosi || "Promo Spesial";

    // Clean excerpt
    const rawExcerpt = typeof promo.excerpt === "string" ? promo.excerpt : promo.excerpt?.rendered || "";
    const excerpt = rawExcerpt.replace(/<[^>]*>/g, "").slice(0, 150) + (rawExcerpt.length > 150 ? "..." : "");

    return (
      <Card
        key={promo.id || index}
        card={{
          src: promoImage,
          title: promoTitle,
          category: category,
          content: (
            <div className="p-6 md:p-8">
              {/* Image with overlay */}
              <div className="relative aspect-[4/3] -mx-6 -mt-6 md:-mx-8 md:-mt-8 mb-6 overflow-hidden rounded-t-3xl">
                <Image
                  src={promoImage}
                  alt={promoTitle}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                {/* Category badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1.5 bg-[#ffd900] text-[#224297] text-xs font-black uppercase tracking-wider rounded-full">
                    {category}
                  </span>
                </div>

                {/* Price badge if available */}
                {promo.harga_promo && (
                  <div className="absolute bottom-4 right-4">
                    <span className="px-3 py-1.5 bg-white/90 backdrop-blur-sm text-[#224297] font-black text-sm rounded-full shadow-lg">
                      {promo.harga_promo}
                    </span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="space-y-4">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white line-clamp-2">
                  {promoTitle}
                </h3>

                {excerpt && (
                  <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-3 leading-relaxed">
                    {excerpt}
                  </p>
                )}

                {/* CTA Button */}
                <div className="pt-4 border-t border-gray-100 dark:border-gray-800">
                  <Link
                    href={`/promosi/${promo.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-bold text-[#224297] hover:text-[#ffd900] transition-colors"
                  >
                    Lihat Detail
                    <Icon icon="solar:arrow-right-linear" className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ),
        }}
        index={index}
        layout={true}
      />
    );
  });

  return (
    <section className="w-full py-12 lg:py-20 bg-white dark:bg-neutral-950 font-sans overflow-hidden">
      {/* Header */}
      {(title || subtitle) && (
        <div className="px-4 sm:px-6 lg:px-8 max-w-screen-xl mx-auto mb-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              {subtitle && (
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#224297]/10 dark:bg-[#224297]/20 rounded-full text-xs font-bold uppercase tracking-wider text-[#224297] dark:text-[#ffd900] mb-3">
                  🔥 Promo Terbatas
                </span>
              )}
              {title && (
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 dark:text-white tracking-tight uppercase">
                  {title}
                </h2>
              )}
            </div>
            <Link
              href="/promosi"
              className="shrink-0 inline-flex items-center gap-2 px-6 py-3 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-900 dark:text-white font-medium rounded-full transition-colors"
            >
              Lihat Semua Promo
              <Icon icon="solar:arrow-right-linear" className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}

      {/* Carousel */}
      <Carousel items={cards} initialScroll={0} />
    </section>
  );
}
