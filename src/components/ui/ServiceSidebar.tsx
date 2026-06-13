'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';

export default function ServiceSidebar({ services, currentSlug }: { services: any[], currentSlug: string }) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const totalPages = Math.ceil(services.length / itemsPerPage);

  const paginatedServices = services.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="bg-gray-50 dark:bg-gray-900 rounded-3xl p-8 border border-gray-100 dark:border-gray-800 shadow-sm" data-aos="fade-left">
      <h4 className="text-xl font-black italic uppercase tracking-tighter text-gray-900 dark:text-white mb-6 border-b border-gray-200 dark:border-gray-800 pb-4 flex items-center gap-2">
        <span className="w-2 h-8 bg-brand-blue rounded-full" />
        Semua Layanan
      </h4>
      <ul className="flex flex-col gap-3">
        {paginatedServices.map((s: any) => (
          <li key={s.id}>
            <Link
              href={`/services/${s.slug}`}
              className={`flex items-center justify-between p-4 rounded-xl font-bold text-sm transition-all duration-300 group ${s.slug === currentSlug ? 'bg-brand-blue text-white shadow-lg shadow-blue-900/20' : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-brand-gold hover:text-brand-blue border border-gray-100 dark:border-gray-700'}`}
            >
              {s.title?.rendered || s.title}
              <ArrowUpRight size={16} className={`transition-transform ${s.slug === currentSlug ? 'opacity-100' : 'opacity-0 group-hover:opacity-100 group-hover:-translate-y-0.5 group-hover:translate-x-0.5'}`} />
            </Link>
          </li>
        ))}
      </ul>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-200 dark:border-gray-800">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
            className="p-2 rounded-full hover:bg-gray-200 disabled:opacity-30 transition-colors"
          >
            <ChevronLeft size={20} />
          </button>
          <span className="text-xs font-bold text-gray-500">
            {currentPage} / {totalPages}
          </span>
          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
            className="p-2 rounded-full hover:bg-gray-200 disabled:opacity-30 transition-colors"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      )}

      {/* Cross-links to other sections */}
      <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-800 space-y-3">
        <Link
          href="/layanan-spesialis"
          className="flex items-center justify-between p-4 rounded-xl font-bold text-sm bg-brand-blue/5 hover:bg-brand-blue/10 text-brand-blue border border-brand-blue/10 transition-all duration-300 group"
        >
          <span>Layanan Spesialis</span>
          <ArrowUpRight size={16} className="opacity-70 group-hover:opacity-100 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
        </Link>
        <Link
          href="/promosi"
          className="flex items-center justify-between p-4 rounded-xl font-bold text-sm bg-brand-gold/10 hover:bg-brand-gold/20 text-brand-blue border border-brand-gold/10 transition-all duration-300 group"
        >
          <span>Promo & Diskon</span>
          <ArrowUpRight size={16} className="opacity-70 group-hover:opacity-100 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
        </Link>
      </div>
    </div>
  );
}
