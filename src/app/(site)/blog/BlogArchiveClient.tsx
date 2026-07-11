/**
 * Blog Archive Client Component — Bengkel Wiguna
 * LEFT: Small List Cards (Vertical Slider) | RIGHT: Big Featured Post
 */

"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Icon } from '@iconify/react';
import { WPPost } from "@/types/wordpress";
import WigunaCard from "@/components/ui/WigunaCard";

// Brand Colors
const BRAND_BLUE = '#224297';
const BRAND_GOLD = '#ffd900';

interface BlogArchiveClientProps {
  posts: WPPost[];
  categories: any[];
}

export default function BlogArchiveClient({ posts, categories }: BlogArchiveClientProps) {
  const [visibleCount, setVisibleCount] = useState<number>(6);
  const [activeSlide, setActiveSlide] = useState(0);
  const listScrollRef = useRef<HTMLDivElement>(null);
  const ITEMS_PER_LOAD = 6;

  // Helper: Get rendered title
  const getRenderedTitle = (post: WPPost) => {
    if (typeof post.title === 'string') return post.title;
    return post.title?.rendered || '';
  };

  // Helper: Get rendered excerpt
  const getRenderedExcerpt = (post: WPPost) => {
    const rawExcerpt = typeof post.excerpt === 'string' ? post.excerpt : post.excerpt?.rendered || '';
    const cleanExcerpt = rawExcerpt.replace(/<[^>]*>/g, '');
    return cleanExcerpt.length > 150 ? cleanExcerpt.slice(0, 150) + "..." : cleanExcerpt;
  };

  // Helper: Format date
  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('id-ID', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  };

  // Helper: Get featured image
  const getFeaturedImage = (post: WPPost) => {
    return post._embedded?.['wp:featuredmedia']?.[0]?.source_url || "/images/blog-default.jpg";
  };

  // Helper: Get primary category
  const getPrimaryCategory = (post: WPPost) => {
    return post._embedded?.['wp:term']?.[0]?.[0]?.name || 'Berita';
  };

  // Helper: Estimate reading time
  const getReadingTime = (post: WPPost) => {
    const content = typeof post.content === 'string' ? post.content : post.content?.rendered || '';
    const wordCount = content.replace(/<[^>]*>/g, '').split(/\s+/).length;
    const minutes = Math.ceil(wordCount / 200);
    return minutes < 1 ? '1' : String(minutes);
  };

  // Featured post (single big post on right)
  const featuredPost = posts[0];

  // Small list cards (left side with vertical scroll)
  const listPosts = posts.slice(1, 9);

  // Grid posts (remaining for main grid below)
  const gridPosts = posts.slice(9, visibleCount + 9);
  const hasMore = visibleCount < posts.length - 9;


  // Vertical list scroll handler
  const handleListScroll = () => {
    if (!listScrollRef.current) return;
    const scrollTop = listScrollRef.current.scrollTop;
    const itemHeight = listScrollRef.current.offsetHeight / 4; // 4 visible items
    const newActiveSlide = Math.floor(scrollTop / itemHeight);
    setActiveSlide(Math.min(newActiveSlide, Math.ceil(listPosts.length / 4) - 1));
  };

  // Scroll to specific page of list
  const scrollToListSlide = (index: number) => {
    if (!listScrollRef.current) return;
    const itemHeight = listScrollRef.current.offsetHeight / 4;
    listScrollRef.current.scrollTo({
      top: index * itemHeight * 4,
      behavior: 'smooth'
    });
    setActiveSlide(index);
  };

  // Auto-advance list scroll
  useEffect(() => {
    const totalPages = Math.ceil(listPosts.length / 4);
    if (totalPages <= 1) return;

    const interval = setInterval(() => {
      setActiveSlide(prev => {
        const next = (prev + 1) % totalPages;
        if (listScrollRef.current) {
          const itemHeight = listScrollRef.current.offsetHeight / 4;
          listScrollRef.current.scrollTo({
            top: next * itemHeight * 4,
            behavior: 'smooth'
          });
        }
        return next;
      });
    }, 6000);
    return () => clearInterval(interval);
  }, [listPosts.length]);

  return (
    <>
      {/* ═══════════════════════════════════════════════════════════════════════
          HERO SECTION — Small List (Left) + Featured Post (Right)
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="relative pt-6 lg:pt-10 pb-10 lg:pb-14 font-dm bg-white dark:bg-gray-950">

        <div className="relative z-10 max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section Header */}
          <div className="flex items-center gap-3 mb-6 lg:mb-8">
            <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-2xl bg-[#224297] flex items-center justify-center shadow-lg shadow-blue-900/20">
              <Icon icon="solar:document-text-linear" className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white tracking-tight">
                Blog & Artikel
              </h1>
              <p className="text-xs lg:text-sm text-gray-500 dark:text-gray-400">
                Tips & edukasi perawatan kendaraan
              </p>
            </div>
          </div>

          {/* ═══ MAIN GRID: Small List (Left) + Featured Post (Right) ═══ */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">

            {/* ═══ LEFT: SMALL LIST CARDS WITH VERTICAL SCROLL (lg:col-span-5) ═══ */}
            <div className="lg:col-span-5 relative order-2 lg:order-1">
              {/* Section Label */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-[#224297]/10 dark:bg-[#ffd900]/10 flex items-center justify-center">
                    <Icon icon="solar:list-linear" className="w-4 h-4 text-[#224297] dark:text-[#ffd900]" />
                  </div>
                  <span className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Artikel Lainnya
                  </span>
                </div>
                <span className="text-xs text-gray-400 dark:text-gray-500">
                  {listPosts.length} artikel
                </span>
              </div>

              {/* Vertical Scroll Container */}
              <div className="relative rounded-2xl lg:rounded-3xl overflow-hidden bg-white/60 dark:bg-neutral-900/60 backdrop-blur-xl border border-gray-100 dark:border-gray-800 shadow-lg">
                {/* Scrollable List */}
                <div
                  ref={listScrollRef}
                  onScroll={handleListScroll}
                  className="h-[400px] lg:h-[480px] overflow-y-auto snap-y snap-mandatory scroll-smooth"
                  style={{
                    scrollbarWidth: 'none',
                    msOverflowStyle: 'none',
                    WebkitOverflowScrolling: 'touch',
                  }}
                >
                  {listPosts.map((post, index) => (
                    <Link
                      key={post.id}
                      href={`/blog/${post.slug}`}
                      className="block h-[100px] lg:h-[120px] snap-center snap-always p-4 border-b border-gray-100 dark:border-gray-800 last:border-b-0 hover:bg-gray-50 dark:hover:bg-neutral-800/50 transition-colors"
                    >
                      <div className="flex gap-4 h-full">
                        {/* Thumbnail */}
                        <div className="relative w-20 h-20 lg:w-24 lg:h-24 flex-shrink-0 rounded-xl overflow-hidden">
                          <Image
                            src={getFeaturedImage(post)}
                            alt={getRenderedTitle(post)}
                            fill
                            className="object-cover"
                            sizes="96px"
                          />
                        </div>

                        {/* Content */}
                        <div className="flex-1 min-w-0 flex flex-col justify-center">
                          <span className="text-[10px] lg:text-xs font-bold text-[#224297] dark:text-[#ffd900] uppercase tracking-wider mb-1">
                            {getPrimaryCategory(post)}
                          </span>
                          <h4 className="text-sm lg:text-base font-bold text-gray-900 dark:text-white leading-snug line-clamp-2">
                            {getRenderedTitle(post)}
                          </h4>
                          <div className="flex items-center gap-2 mt-2 text-[10px] lg:text-xs text-gray-500 dark:text-gray-400">
                            <Icon icon="solar:calendar-linear" className="w-3 h-3" />
                            <span>{formatDate(post.date)}</span>
                            <span className="w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-600" />
                            <Icon icon="solar:clock-circle-linear" className="w-3 h-3" />
                            <span>{getReadingTime(post)} min</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>

                {/* Navigation Arrows */}
                <button
                  onClick={() => scrollToListSlide(Math.max(0, activeSlide - 1))}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white dark:bg-neutral-800 border border-gray-200 dark:border-gray-700 flex items-center justify-center shadow-md hover:bg-gray-50 dark:hover:bg-neutral-700 transition-colors z-10"
                  aria-label="Scroll up"
                >
                  <Icon icon="solar:alt-arrow-up-linear" className="w-4 h-4 text-gray-700 dark:text-gray-300" />
                </button>
                <button
                  onClick={() => scrollToListSlide(Math.min(Math.ceil(listPosts.length / 4) - 1, activeSlide + 1))}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white dark:bg-neutral-800 border border-gray-200 dark:border-gray-700 flex items-center justify-center shadow-md hover:bg-gray-50 dark:hover:bg-neutral-700 transition-colors z-10"
                  aria-label="Scroll down"
                >
                  <Icon icon="solar:alt-arrow-down-linear" className="w-4 h-4 text-gray-700 dark:text-gray-300" />
                </button>

                {/* Pagination Dots */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-20">
                  {Array.from({ length: Math.ceil(listPosts.length / 4) }).map((_, index) => (
                    <button
                      key={index}
                      onClick={() => scrollToListSlide(index)}
                      aria-label={`Page ${index + 1}`}
                      className={`h-2 rounded-full transition-all duration-300 ${activeSlide === index
                        ? 'w-6 bg-[#224297] dark:bg-[#ffd900]'
                        : 'w-2 bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                        }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* ═══ RIGHT: BIG FEATURED POST (lg:col-span-7) ═══ */}
            <div className="lg:col-span-7 relative order-1 lg:order-2">
              {/* Section Label */}
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-[#ffd900]/20 flex items-center justify-center">
                  <Icon icon="solar:star-bold" className="w-4 h-4 text-[#224297] dark:text-[#ffd900]" />
                </div>
                <span className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Featured Post
                </span>
              </div>

              {/* Big Featured Card */}
              {featuredPost && (
                <Link href={`/blog/${featuredPost.slug}`} className="block group">
                  <div className="relative rounded-2xl lg:rounded-3xl overflow-hidden shadow-xl shadow-black/10 dark:shadow-black/30 h-[420px] lg:h-[480px]">
                    {/* Image */}
                    <Image
                      src={getFeaturedImage(featuredPost)}
                      alt={getRenderedTitle(featuredPost)}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 58vw"
                      priority
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                    {/* Category Badge - Top Left */}
                    <div className="absolute top-4 left-4">
                      <span className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#ffd900] text-[#224297] text-xs font-black uppercase tracking-wider rounded-full shadow-lg">
                        <Icon icon="solar:tag-linear" className="w-3.5 h-3.5" />
                        {getPrimaryCategory(featuredPost)}
                      </span>
                    </div>

                    {/* Content - Bottom */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                      {/* Title */}
                      <h2 className="text-2xl lg:text-3xl xl:text-4xl font-black text-white leading-tight tracking-tight mb-3 drop-shadow-lg">
                        {getRenderedTitle(featuredPost)}
                      </h2>

                      {/* Excerpt */}
                      <p className="text-white/80 text-sm lg:text-base leading-relaxed mb-4 max-w-2xl line-clamp-2">
                        {getRenderedExcerpt(featuredPost)}
                      </p>

                      {/* Meta Info */}
                      <div className="flex items-center gap-4 text-white/70 text-sm">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                            <Icon icon="solar:user-bold" className="w-4 h-4" />
                          </div>
                          <span className="font-medium">Admin Wiguna</span>
                        </div>
                        <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
                        <div className="flex items-center gap-1.5">
                          <Icon icon="solar:calendar-linear" className="w-4 h-4" />
                          <span>{formatDate(featuredPost.date)}</span>
                        </div>
                        <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
                        <div className="flex items-center gap-1.5">
                          <Icon icon="solar:clock-circle-linear" className="w-4 h-4" />
                          <span>{getReadingTime(featuredPost)} menit</span>
                        </div>
                      </div>

                      {/* Read More Button */}
                      <div className="mt-5">
                        <span className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-sm hover:bg-white hover:text-[#224297] text-white text-sm font-bold rounded-full transition-all duration-300">
                          Baca Selengkapnya
                          <Icon icon="solar:alt-arrow-right-linear" className="w-4 h-4" />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          FILTER SECTION — Slide Tab
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="relative z-10 py-8 lg:py-10">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section Title */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-xl lg:text-2xl font-bold text-gray-900 dark:text-white">
                Koleksi Artikel
              </h2>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">
                {posts.length} artikel tersedia
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          BLOG GRID SECTION
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="relative z-10 pb-16 lg:pb-24">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* 3-Column Grid */}
          {gridPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10 lg:gap-y-12">
              {gridPosts.map((post) => (
                <div key={post.id}>
                  <WigunaCard
                    href={`/blog/${post.slug}`}
                    image={getFeaturedImage(post)}
                    tag={getPrimaryCategory(post)}
                    title={getRenderedTitle(post)}
                    excerpt={getRenderedExcerpt(post)}
                    variant="split"
                    imageAspectRatio="16/10"
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
                        }).catch(() => { });
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
            <div className="text-center py-20 rounded-3xl">
              <Icon icon="solar:folder-open-linear" className="w-16 h-16 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-500 dark:text-gray-400">Tidak ada artikel ditemukan.</h3>
              <p className="text-gray-400 dark:text-gray-500 mt-2">Coba pilih kategori lain.</p>
            </div>
          )}

          {/* Load More Button */}
          {hasMore && (
            <div className="flex flex-col items-center gap-4 mt-12 pt-8">
              <button
                onClick={() => setVisibleCount(prev => prev + ITEMS_PER_LOAD)}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#224297] hover:bg-[#1a356d] text-white text-sm font-bold rounded-xl transition-all shadow-lg hover:shadow-xl"
              >
                Muat Lebih Banyak
                <Icon icon="solar:alt-arrow-down-linear" className="w-5 h-5" />
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
