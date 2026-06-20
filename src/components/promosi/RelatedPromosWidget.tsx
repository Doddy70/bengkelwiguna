"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react";

interface Promo {
  id: number | string;
  slug: string;
  title: string | { rendered: string };
  featured_img?: string;
  [key: string]: any;
}

export default function RelatedPromosWidget({ promos }: { promos: Promo[] }) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  if (!promos || promos.length === 0) return null;

  const totalPages = Math.ceil(promos.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentPromos = promos.slice(startIndex, startIndex + itemsPerPage);

  const handlePrev = () => setCurrentPage((p) => Math.max(1, p - 1));
  const handleNext = () => setCurrentPage((p) => Math.min(totalPages, p + 1));

  return (
    <div className="bg-white dark:bg-gray-900 rounded-[2rem] p-6 shadow-xl">
      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Promo Lainnya</h3>
      
      <div className="space-y-4">
        {currentPromos.map((p) => {
          const promoTitle = typeof p.title === 'string' ? p.title : p.title?.rendered || '';
          return (
            <Link
              key={p.id}
              href={`/promosi/${p.slug}`}
              className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors border border-transparent hover:border-gray-100 dark:hover:border-gray-800"
            >
              <div className="relative w-16 h-16 rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800 shrink-0">
                {p.featured_img ? (
                  <Image src={p.featured_img} alt={promoTitle} fill className="object-cover" />
                ) : (
                  <Icon icon="solar:image-linear" className="w-8 h-8 text-gray-400 absolute inset-0 m-auto" />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-bold text-gray-900 dark:text-white line-clamp-2">{promoTitle}</h4>
                <p className="text-xs text-[#224297] dark:text-[#ffd900] font-medium mt-1 flex items-center gap-1">
                  Lihat Detail <Icon icon="solar:arrow-right-linear" className="w-3 h-3" />
                </p>
              </div>
            </Link>
          );
        })}
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="mt-6 flex items-center justify-between border-t border-gray-100 dark:border-gray-800 pt-4">
          <button
            onClick={handlePrev}
            disabled={currentPage === 1}
            className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-50 dark:bg-gray-800 text-gray-500 hover:text-[#224297] dark:hover:text-[#ffd900] disabled:opacity-50 disabled:hover:text-gray-500 transition-colors"
          >
            <Icon icon="solar:alt-arrow-left-linear" className="w-5 h-5" />
          </button>
          <span className="text-xs font-medium text-gray-500">
            Halaman {currentPage} dari {totalPages}
          </span>
          <button
            onClick={handleNext}
            disabled={currentPage === totalPages}
            className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-50 dark:bg-gray-800 text-gray-500 hover:text-[#224297] dark:hover:text-[#ffd900] disabled:opacity-50 disabled:hover:text-gray-500 transition-colors"
          >
            <Icon icon="solar:alt-arrow-right-linear" className="w-5 h-5" />
          </button>
        </div>
      )}
    </div>
  );
}
