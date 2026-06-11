"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Icon } from '@iconify/react';
import { WPPost, WPCategory } from '@/types/wordpress';
import { formatDate, getFeaturedImage, stripHtml } from '@/lib/wordpress';

interface BlogSidebarProps {
  categories: WPCategory[];
  relatedPosts: WPPost[];
}

export default function BlogSidebar({ categories, relatedPosts }: BlogSidebarProps) {
  return (
    <aside className="w-full space-y-8">
      {/* Categories */}
      {categories.length > 0 && (
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Icon icon="solar:folder-list-bold" className="text-brand-blue" width={24} />
            Kategori
          </h3>
          <ul className="space-y-3">
            {categories.map((cat) => (
              <li key={cat.id}>
                <Link 
                  href={`/blog?category=${cat.id}`}
                  className="flex justify-between items-center group"
                >
                  <span className="text-gray-700 group-hover:text-brand-blue transition-colors font-medium">
                    {cat.name}
                  </span>
                  <span className="bg-gray-100 text-gray-500 text-xs px-2 py-1 rounded-full group-hover:bg-brand-blue group-hover:text-white transition-colors">
                    {cat.count}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Related Articles */}
      {relatedPosts.length > 0 && (
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Icon icon="solar:document-add-bold" className="text-brand-blue" width={24} />
            Artikel Terkait
          </h3>
          <div className="space-y-6">
            {relatedPosts.map((post) => {
              const featuredImg = getFeaturedImage(post);
              const title = typeof post.title === 'string' ? post.title : post.title?.rendered;
              return (
                <Link key={post.id} href={`/blog/${post.slug}`} className="flex gap-4 group">
                  <div className="relative w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden bg-gray-50">
                    {featuredImg ? (
                      <Image
                        src={featuredImg}
                        alt={title || "Blog Post"}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gray-100">
                         <Icon icon="solar:document-bold" className="text-gray-300" width={32} />
                      </div>
                    )}
                  </div>
                  <div className="flex flex-col justify-center">
                    <h4 className="text-sm font-bold text-gray-900 line-clamp-2 group-hover:text-brand-blue transition-colors leading-snug">
                      {title}
                    </h4>
                    <span className="text-[10px] text-gray-400 mt-1 uppercase font-bold tracking-wider">
                      {formatDate(post.date)}
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      )}

      {/* Promo Banner */}
      <div className="relative rounded-2xl overflow-hidden group aspect-[4/5] shadow-xl">
        <div className="absolute inset-0 bg-brand-blue">
            <div className="absolute inset-0 opacity-20 bg-[url('https://backend.bengkelwiguna.com/wp-content/uploads/2025/12/mesin-mobil-lemot.jpg')] bg-cover bg-center"></div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-blue via-brand-blue/60 to-transparent p-8 flex flex-col justify-end text-white">
          <div className="w-12 h-1 bg-brand-gold mb-4"></div>
          <h3 className="text-2xl font-black mb-3 italic tracking-tight leading-none uppercase">
            Promo Servis <br/>Bulan Ini
          </h3>
          <p className="text-sm text-white/70 mb-6 font-medium">Dapatkan diskon hingga 20% untuk Tune Up & Ganti Oli.</p>
          <Link 
            href="https://wa.me/6287817773888"
            className="bg-brand-gold text-brand-blue text-center py-4 rounded-xl font-black uppercase tracking-widest text-xs hover:bg-white transition-all shadow-lg shadow-brand-gold/20"
          >
            Ambil Promo Sekarang
          </Link>
        </div>
      </div>
    </aside>
  );
}
