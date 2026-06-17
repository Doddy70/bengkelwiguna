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

export default function BlogSidebar({ categories = [], relatedPosts = [] }: BlogSidebarProps) {
  return (
    <aside className="w-full space-y-8">
      
      {/* 1. Share on Social Media */}
      <div className="bg-gray-50 dark:bg-neutral-900/50 p-6 lg:p-8 rounded-[2rem] border border-gray-100 dark:border-neutral-800">
        <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-6">
          Bagikan Artikel Ini
        </h3>
        <div className="flex gap-4">
          <a href="#" className="w-10 h-10 rounded-full border border-gray-200 dark:border-neutral-700 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-[#25D366] hover:border-[#25D366] hover:bg-[#25D366]/5 transition-all">
            <Icon icon="fa6-brands:whatsapp" width={18} />
          </a>
          <a href="#" className="w-10 h-10 rounded-full border border-gray-200 dark:border-neutral-700 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-[#E1306C] hover:border-[#E1306C] hover:bg-[#E1306C]/5 transition-all">
            <Icon icon="fa6-brands:instagram" width={18} />
          </a>
          <a href="#" className="w-10 h-10 rounded-full border border-gray-200 dark:border-neutral-700 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-black hover:border-black hover:bg-black/5 dark:hover:text-white dark:hover:border-white transition-all">
            <Icon icon="fa6-brands:x-twitter" width={18} />
          </a>
          <a href="#" className="w-10 h-10 rounded-full border border-gray-200 dark:border-neutral-700 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-[#1877F2] hover:border-[#1877F2] hover:bg-[#1877F2]/5 transition-all">
            <Icon icon="fa6-brands:facebook-f" width={18} />
          </a>
          <a href="#" className="w-10 h-10 rounded-full border border-gray-200 dark:border-neutral-700 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-[#0A66C2] hover:border-[#0A66C2] hover:bg-[#0A66C2]/5 transition-all">
            <Icon icon="fa6-brands:linkedin-in" width={18} />
          </a>
          <a href="#" className="w-10 h-10 rounded-full border border-gray-200 dark:border-neutral-700 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-[#224297] hover:border-[#224297] hover:bg-[#224297]/5 transition-all ml-auto">
            <Icon icon="solar:forward-bold" width={18} />
          </a>
        </div>
      </div>

      {/* 2. All Tags (Categories as Pills) */}
      {categories.length > 0 && (
        <div className="bg-white dark:bg-neutral-900 p-6 lg:p-8 rounded-[2rem] border border-gray-100 dark:border-neutral-800 shadow-sm">
          <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-6">
            Kategori Topik
          </h3>
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <Link 
                key={cat.id}
                href={`/blog?category=${cat.id}`}
                className="bg-gray-50 dark:bg-neutral-800 hover:bg-[#224297] dark:hover:bg-[#ffd900] text-gray-700 dark:text-gray-300 hover:text-white dark:hover:text-black px-4 py-2 rounded-full text-xs font-bold transition-colors border border-gray-100 dark:border-neutral-700 hover:border-transparent"
              >
                {cat.name}
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* 3. Related Blogs */}
      {relatedPosts.length > 0 && (
        <div className="bg-white dark:bg-neutral-900 p-6 lg:p-8 rounded-[2rem] border border-gray-100 dark:border-neutral-800 shadow-sm">
          <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-6">
            Artikel Terkait
          </h3>
          <div className="space-y-6">
            {relatedPosts.map((post) => {
              const featuredImg = getFeaturedImage(post);
              const title = typeof post.title === 'string' ? post.title : post.title?.rendered;
              return (
                <Link key={post.id} href={`/blog/${post.slug}`} className="flex gap-5 group items-center">
                  <div className="relative w-24 h-20 flex-shrink-0 rounded-[1rem] overflow-hidden bg-gray-50 dark:bg-neutral-800">
                    {featuredImg ? (
                      <Image
                        src={featuredImg}
                        alt={title || "Blog Post"}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                         <Icon icon="solar:document-bold" className="text-gray-300 dark:text-gray-600" width={24} />
                      </div>
                    )}
                  </div>
                  <div className="flex flex-col justify-center flex-1">
                    <div className="flex items-center gap-2 text-[11px] text-gray-500 dark:text-gray-400 mb-1.5 font-bold uppercase">
                      <Icon icon="solar:calendar-linear" width={14} />
                      <span>{formatDate(post.date)}</span>
                    </div>
                    <h4 className="text-sm font-bold text-gray-900 dark:text-white line-clamp-2 group-hover:text-[#224297] dark:group-hover:text-[#ffd900] transition-colors leading-snug">
                      {title}
                    </h4>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      )}

      {/* 4. Newsletter Box */}
      <div className="bg-gray-50 dark:bg-neutral-900/50 p-6 lg:p-8 rounded-[2rem] border border-gray-100 dark:border-neutral-800 flex flex-col items-center text-center">
        <h3 className="text-2xl lg:text-3xl font-black text-gray-900 dark:text-white mb-4 leading-tight">
          Berlangganan Promo
        </h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm font-medium mb-8 leading-relaxed">
          Dapatkan wawasan ahli tentang perawatan mobil, tips edukasi otomotif, dan info diskon spesial Bengkel Wiguna ke email Anda.
        </p>
        
        <form className="w-full space-y-3" data-track="newsletter-blog" onSubmit={(e) => e.preventDefault()}>
          <div className="relative w-full">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Icon icon="solar:letter-linear" width={20} className="text-gray-400" />
            </div>
            <input 
              type="email" 
              placeholder="contoh@email.com" 
              className="w-full bg-white dark:bg-neutral-950 border border-gray-200 dark:border-neutral-800 text-gray-900 dark:text-white text-sm rounded-[1rem] pl-12 pr-4 py-4 focus:outline-none focus:border-[#224297] dark:focus:border-[#ffd900] transition-colors shadow-sm"
              required
            />
          </div>
          <button 
            type="submit"
            className="w-full bg-white dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700 text-gray-900 dark:text-white text-sm font-bold rounded-[1rem] py-4 hover:bg-[#224297] hover:text-white dark:hover:bg-[#ffd900] dark:hover:text-black hover:border-transparent transition-all shadow-sm"
          >
            Berlangganan Sekarang
          </button>
        </form>
      </div>
      
    </aside>
  );
}
