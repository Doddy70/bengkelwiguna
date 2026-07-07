/**
 * Blog Archive Client Component — Bengkel Wiguna
 * Asymmetric Bento Grid Layout with Brand Colors
 */

"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { Icon } from '@iconify/react';
import { WPPost } from "@/types/wordpress";
import WigunaCard from "@/components/ui/WigunaCard";

// Brand Colors
const BRAND_BLUE = '#224297';
const BRAND_GOLD = '#ffd900';
const BRAND_BLUE_DARK = '#1a356d';

interface BlogArchiveClientProps {
  posts: WPPost[];
  categories: any[];
}

export default function BlogArchiveClient({ posts, categories }: BlogArchiveClientProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [visibleCount, setVisibleCount] = useState<number>(9);
  const ITEMS_PER_LOAD = 6;

  const getRenderedTitle = (post: WPPost) => {
    if (typeof post.title === 'string') return post.title;
    return post.title?.rendered || '';
  };

  const getRenderedExcerpt = (post: WPPost) => {
    const rawExcerpt = typeof post.excerpt === 'string' ? post.excerpt : post.excerpt?.rendered || '';
    const cleanExcerpt = rawExcerpt.replace(/<[^>]*>/g, '');
    return cleanExcerpt.length > 100 ? cleanExcerpt.slice(0, 100) + "..." : cleanExcerpt;
  };

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('id-ID', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  };

  const filteredPosts = useMemo(() => {
    let result = [...posts];
    if (selectedCategory) {
      result = result.filter((post: any) => {
        const postCategories = post._embedded?.['wp:term']?.[0] || [];
        return postCategories.some((cat: any) => cat.slug === selectedCategory);
      });
    }
    return result;
  }, [posts, selectedCategory]);

  const post1 = filteredPosts[0];
  const post2 = filteredPosts[1];
  const post3 = filteredPosts[2];
  const post4 = filteredPosts[3];
  const bentoPosts = filteredPosts.slice(4, visibleCount);
  const hasMore = visibleCount < filteredPosts.length;

  return (
    <>
      {/* === NEW ASYMMETRIC BENTO HERO HEADER === */}
      <div className="relative bg-[#fcfcfc] dark:bg-neutral-950 pt-8 lg:pt-12 pb-12 lg:pb-16 font-dm">
        {/* Fixed Page Background Image */}
        <div className="fixed inset-0 z-0">
          <Image src="/images/bg-default-page.webp" alt="" fill className="object-cover" aria-hidden="true" />
          <div className="absolute inset-0 bg-[#fcfcfc]/85 dark:bg-neutral-950/90" />
        </div>
        <div className="relative z-10 max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header Title & Button */}
          <div className="flex justify-between items-end mb-8">
            <h1 className="text-6xl lg:text-8xl font-black text-gray-900 dark:text-white tracking-tighter uppercase leading-none">BLOG</h1>
            <Link href="#semua-artikel" className="hidden sm:flex items-center gap-3 bg-gray-100 dark:bg-neutral-800 hover:bg-gray-200 dark:hover:bg-neutral-700 text-gray-900 dark:text-white px-6 py-3 rounded-full font-semibold transition-colors">
              Read Our Blog <Icon icon="solar:arrow-right-linear" width={20} />
            </Link>
          </div>

          {/* 5-Box Asymmetrical Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-5 auto-rows-[250px] lg:auto-rows-[280px]">
            
            {/* Box 1: Featured Card (Left) */}
            {post1 && (
              <Link href={`/blog/${post1.slug}`} className="lg:col-span-5 lg:row-span-2 relative rounded-[2.5rem] overflow-hidden group shadow-lg hover:shadow-xl transition-all block">
                <Image
                  src={post1._embedded?.['wp:featuredmedia']?.[0]?.source_url || "/images/blog-default.jpg"}
                  alt={getRenderedTitle(post1)}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  priority
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                
                {/* Fire icon at top left */}
                <div className="absolute top-6 left-6 w-12 h-12 rounded-full bg-white dark:bg-neutral-800/20 backdrop-blur-md flex items-center justify-center text-xl shadow-sm">
                  🔥
                </div>

                {/* Text Block Cutout (Bottom Left) */}
                <div className="absolute bottom-0 left-0 bg-[#fcfcfc] dark:bg-neutral-950 pt-6 pr-6 lg:pt-8 lg:pr-8 rounded-tr-[2.5rem] w-full md:w-5/6 group-hover:bg-white dark:bg-neutral-800 dark:group-hover:bg-neutral-900 transition-colors">
                  {/* CSS Hack for inverted corner */}
                  <div className="absolute -top-10 left-0 w-10 h-10 bg-transparent rounded-bl-[2.5rem] shadow-[-20px_20px_0_20px_#fcfcfc] dark:shadow-[-20px_20px_0_20px_#0a0a0a] group-hover:shadow-[-20px_20px_0_20px_white] dark:group-hover:shadow-[-20px_20px_0_20px_#171717] transition-shadow" />
                  <div className="absolute bottom-0 -right-10 w-10 h-10 bg-transparent rounded-bl-[2.5rem] shadow-[-20px_20px_0_20px_#fcfcfc] dark:shadow-[-20px_20px_0_20px_#0a0a0a] group-hover:shadow-[-20px_20px_0_20px_white] dark:group-hover:shadow-[-20px_20px_0_20px_#171717] transition-shadow" />
                  
                  <div className="flex items-center gap-2 text-xs font-bold text-gray-500 mb-3 uppercase tracking-wide">
                    <span className="text-[#224297] dark:text-[#ffd900]">
                      {post1._embedded?.['wp:term']?.[0]?.[0]?.name || 'Berita'}
                    </span>
                    <span className="w-1 h-1 rounded-full bg-gray-300" />
                    <span>{formatDate(post1.date)}</span>
                  </div>
                  <h2 className="text-2xl lg:text-3xl xl:text-4xl font-black text-gray-900 dark:text-white leading-[1.1] tracking-tight uppercase line-clamp-3">
                    {getRenderedTitle(post1)}
                  </h2>
                </div>
              </Link>
            )}

            {/* Box 2: Highlight Card (Middle Top) */}
            {post2 && (
              <Link href={`/blog/${post2.slug}`} className="lg:col-span-4 lg:row-span-1 rounded-[2.5rem] bg-[#d4f99d] dark:bg-[#224297]/30 p-6 lg:p-8 flex flex-col justify-between group shadow-lg hover:shadow-xl transition-all relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white dark:bg-neutral-800/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
                
                <div className="relative z-10 flex justify-between items-start mb-4">
                  <div className="flex items-center gap-2 text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wide">
                    <span>{post2._embedded?.['wp:term']?.[0]?.[0]?.name || 'Tips'}</span>
                    <span className="w-1 h-1 rounded-full bg-gray-400" />
                    <span>Bengkel Wiguna</span>
                  </div>
                  <div className="w-10 h-10 rounded-full border border-gray-900/10 dark:border-white/10 flex items-center justify-center group-hover:bg-white dark:bg-neutral-800 dark:group-hover:bg-neutral-800 transition-colors">
                    <Icon icon="solar:arrow-right-up-linear" width={20} className="text-gray-900 dark:text-white" />
                  </div>
                </div>

                <div className="relative z-10">
                  <h3 className="text-xl lg:text-2xl font-black text-gray-900 dark:text-white leading-[1.1] tracking-tight uppercase line-clamp-3 mb-4">
                    {getRenderedTitle(post2)}
                  </h3>
                  <div className="space-y-3">
                    <div className="border-t border-gray-900/10 dark:border-white/10 pt-3 flex justify-between items-center group/link">
                      <p className="text-sm font-bold text-gray-800 dark:text-gray-200 line-clamp-1 flex-1">
                        {getRenderedExcerpt(post2)}
                      </p>
                      <Icon icon="solar:arrow-right-linear" className="w-5 h-5 text-gray-900 dark:text-white group-hover/link:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            )}

            {/* Box 5: Categories / Tags Grid (Right Top) */}
            <div className="lg:col-span-3 lg:row-span-1 rounded-[2.5rem] bg-[#e6d5f7] dark:bg-[#224297] p-6 lg:p-8 flex flex-col justify-between shadow-lg relative overflow-hidden group">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-white dark:bg-neutral-800/20 rounded-full blur-2xl" />
              
              <div className="flex flex-wrap gap-2 relative z-10">
                {categories.slice(0, 8).map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.slug)}
                    className="bg-white dark:bg-neutral-800/80 dark:bg-white dark:bg-neutral-800/10 hover:bg-white dark:bg-neutral-800 dark:hover:bg-[#ffd900] text-gray-900 dark:text-white hover:text-[#224297] dark:hover:text-black text-xs font-bold px-3 py-1.5 rounded-full transition-colors whitespace-nowrap"
                  >
                    {cat.name}
                  </button>
                ))}
              </div>

              <div className="flex justify-between items-end mt-6 relative z-10">
                <span className="font-bold text-gray-900 dark:text-white text-sm">View All Categories</span>
                <button 
                  onClick={() => setSelectedCategory("")}
                  className="w-12 h-12 rounded-full bg-white dark:bg-neutral-800 flex items-center justify-center text-gray-900 hover:scale-110 hover:bg-[#ffd900] transition-all shadow-md"
                >
                  <Icon icon="solar:arrow-right-linear" width={20} />
                </button>
              </div>
            </div>

            {/* Box 3: Visual/Video Card (Middle Bottom) */}
            {post3 && (
              <Link href={`/blog/${post3.slug}`} className="lg:col-span-4 lg:row-span-1 relative rounded-[2.5rem] overflow-hidden group shadow-lg hover:shadow-xl transition-all flex flex-col justify-end p-6 lg:p-8">
                <Image
                  src={post3._embedded?.['wp:featuredmedia']?.[0]?.source_url || "/images/blog-default.jpg"}
                  alt={getRenderedTitle(post3)}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                  <div className="w-14 h-14 rounded-full bg-white dark:bg-neutral-800/30 backdrop-blur-md flex items-center justify-center text-white">
                    <Icon icon="solar:play-bold" width={24} className="ml-1" />
                  </div>
                </div>

                <div className="relative z-10 mt-auto">
                  <div className="flex items-center gap-2 text-xs font-bold text-white/80 mb-2">
                    <span>{formatDate(post3.date)}</span>
                    <span className="w-1 h-1 rounded-full bg-white dark:bg-neutral-800/50" />
                    <span>5 Min</span>
                  </div>
                  <h3 className="text-xl font-black text-white leading-[1.1] tracking-tight uppercase line-clamp-2">
                    {getRenderedTitle(post3)}
                  </h3>
                </div>
              </Link>
            )}

            {/* Box 4: Vertical Card (Right Bottom) */}
            {post4 && (
              <Link href={`/blog/${post4.slug}`} className="lg:col-span-3 lg:row-span-1 rounded-[2.5rem] bg-[#cce2ec] dark:bg-neutral-800 p-6 flex flex-col group shadow-lg hover:shadow-xl transition-all overflow-hidden relative">
                <div className="flex items-center gap-2 text-xs font-bold text-gray-600 dark:text-gray-400 mb-2 z-10">
                  <span>{post4._embedded?.['wp:term']?.[0]?.[0]?.name || 'Info'}</span>
                  <span className="w-1 h-1 rounded-full bg-gray-400" />
                  <span>{formatDate(post4.date)}</span>
                </div>
                <h3 className="text-base lg:text-lg font-black text-gray-900 dark:text-white leading-[1.1] tracking-tight uppercase line-clamp-3 mb-4 z-10">
                  {getRenderedTitle(post4)}
                </h3>
                
                {/* Image fills the bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-3/5 rounded-t-[1.5rem] overflow-hidden mt-auto">
                  <Image
                    src={post4._embedded?.['wp:featuredmedia']?.[0]?.source_url || "/images/blog-default.jpg"}
                    alt={getRenderedTitle(post4)}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 25vw"
                  />
                </div>
              </Link>
            )}

          </div>
        </div>
      </div>

      {/* === RECENT BLOG POSTS GRID === */}
      <div id="semua-artikel" className="blog-wrap font-dm bg-white dark:bg-neutral-800 dark:bg-neutral-950">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 lg:py-20 py-16">

          {/* Section Header */}
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="lg:text-4xl md:text-3xl text-2xl font-black text-gray-900 dark:text-white mb-2 tracking-tight">
                Artikel Terbaru
              </h2>
              <p className="text-gray-500 dark:text-gray-400 text-sm font-medium">
                {filteredPosts.length} artikel tersedia
              </p>
            </div>
          </div>

          {/* === 3-COLUMN UNIFORM GRID === */}
          {bentoPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
              {bentoPosts.map((post) => (
                <div key={post.id}>
                  <WigunaCard
                    href={`/blog/${post.slug}`}
                    image={post._embedded?.['wp:featuredmedia']?.[0]?.source_url || "/images/blog-default.jpg"}
                    tag={post._embedded?.['wp:term']?.[0]?.[0]?.name || 'Berita'}
                    title={getRenderedTitle(post)}
                    excerpt={getRenderedExcerpt(post)}
                    variant="split"
                    imageAspectRatio="4/3"
                    buttonText="Baca Artikel"
                    secondaryIcon="solar:share-linear"
                    metaItems={[
                      { icon: 'solar:user-linear', text: 'Admin Wiguna' },
                      { icon: 'solar:calendar-linear', text: formatDate(post.date) }
                    ]}
                    onSecondaryClick={() => {
                      if (typeof window !== 'undefined' && navigator.share) {
                        navigator.share({
                          title: getRenderedTitle(post),
                          url: `${window.location.origin}/blog/${post.slug}`
                        }).catch(() => {});
                      } else if (typeof window !== 'undefined') {
                        navigator.clipboard.writeText(`${window.location.origin}/blog/${post.slug}`);
                        alert("Link artikel berhasil disalin!");
                      }
                    }}
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-gray-50 dark:bg-neutral-900/50 rounded-[2rem] border-2 border-dashed border-gray-200 dark:border-neutral-800">
              <Icon icon="solar:document-text-linear" className="w-16 h-16 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-500 dark:text-gray-400">Tidak ada artikel ditemukan.</h3>
              <p className="text-gray-400 dark:text-gray-500 mt-2">Coba pilih kategori lain.</p>
            </div>
          )}

          {/* Load More Button */}
          {hasMore && (
            <div className="flex flex-col items-center gap-4 mt-16 pt-8 border-t border-gray-100 dark:border-neutral-800">
              <p className="text-sm text-gray-500">
                Menampilkan {filteredPosts.length > visibleCount ? visibleCount : filteredPosts.length} dari {filteredPosts.length} artikel
              </p>
              <button
                onClick={() => setVisibleCount(prev => prev + ITEMS_PER_LOAD)}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#224297] hover:bg-[#1a3567] text-white text-sm font-bold rounded-xl transition-all shadow-lg hover:shadow-xl"
              >
                Muat Lebih Banyak
                <Icon icon="solar:arrow-down-linear" className="w-5 h-5" />
              </button>
            </div>
          )}

        </div>
      </div>
    </>
  );
}
