/**
 * Blog Archive Client Component — Bengkel Wiguna
 * Vertical Feature Layout: Featured Post (left) + Recent List (right)
 * Design Reference: Pagedone vertical feature blog list
 */

"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { Icon } from '@iconify/react';
import { WPPost } from "@/types/wordpress";
import WigunaCard from "@/components/ui/WigunaCard";
import SlideTabFilter from "@/components/ui/SlideTabFilter";

// Brand Colors
const BRAND_BLUE = '#224297';
const BRAND_GOLD = '#ffd900';
const BRAND_BLUE_DARK = '#1a356d';

interface BlogArchiveClientProps {
  posts: WPPost[];
  categories: any[];
}

export default function BlogArchiveClient({ posts, categories }: BlogArchiveClientProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("Semua Artikel");
  const [visibleCount, setVisibleCount] = useState<number>(6);
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

  // Filter posts by category
  const filteredPosts = useMemo(() => {
    let result = [...posts];
    if (selectedCategory && selectedCategory !== "Semua Artikel") {
      result = result.filter((post: any) => {
        const postCategories = post._embedded?.['wp:term']?.[0] || [];
        return postCategories.some((cat: any) => cat.name === selectedCategory);
      });
    }
    return result;
  }, [posts, selectedCategory]);

  // Featured post (first)
  const featuredPost = filteredPosts[0];

  // Recent posts list (next 4-5 posts)
  const recentPosts = filteredPosts.slice(1, 6);

  // Grid posts (remaining for main grid)
  const gridPosts = filteredPosts.slice(6, visibleCount + 6);
  const hasMore = visibleCount < filteredPosts.length - 6;

  // Prepare categories for filter
  const filterCategories = useMemo(() => [
    { id: 0, name: "Semua Artikel" },
    ...categories.map((c: any) => ({ id: c.id, name: c.name, slug: c.slug }))
  ], [categories]);

  return (
    <>
      {/* ═══════════════════════════════════════════════════════════════════════
          HERO SECTION — Vertical Feature Layout
          Layout: Featured (1/2) + Recent List (1/2)
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="relative bg-[#fafafa] dark:bg-neutral-950 pt-6 lg:pt-10 pb-10 lg:pb-14 font-dm overflow-hidden">

        {/* Fixed Page Background */}
        <div className="fixed inset-0 z-0">
          <Image src="/images/bg-default-page.webp" alt="" fill className="object-cover" aria-hidden="true" />
          <div className="absolute inset-0 bg-[#fafafa]/85 dark:bg-neutral-950/90" />
        </div>

        <div className="relative z-10 max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section Header */}
          <div className="flex items-center justify-between mb-6 lg:mb-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-xl bg-[#224297] flex items-center justify-center shadow-lg shadow-blue-900/20">
                <Icon icon="solar:document-text-linear" className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl lg:text-3xl font-black text-gray-900 dark:text-white tracking-tight">
                  Blog & Artikel
                </h1>
                <p className="text-xs lg:text-sm text-gray-500 dark:text-gray-400">
                  Tips & edukasi perawatan kendaraan
                </p>
              </div>
            </div>

            <Link
              href="#semua-artikel"
              className="hidden sm:flex items-center gap-2 text-sm font-semibold text-[#224297] hover:text-[#1a356d] dark:text-[#ffd900] transition-colors"
            >
              Lihat Semua
              <Icon icon="solar:alt-arrow-right-linear" width={18} />
            </Link>
          </div>

          {/* ═══ VERTICAL FEATURE GRID ═══ */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">

            {/* ═══ LEFT: FEATURED POST (Large Card) ═══ */}
            {featuredPost && (
              <div className="relative group">
                <Link href={`/blog/${featuredPost.slug}`} className="block h-full">
                  {/* Card Container */}
                  <div className="relative h-full rounded-3xl lg:rounded-[1.75rem] overflow-hidden bg-white dark:bg-neutral-900 shadow-xl shadow-black/5 dark:shadow-black/20 transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-black/10">

                    {/* Image Section */}
                    <div className="relative aspect-[4/3] lg:aspect-[16/10] overflow-hidden">
                      <Image
                        src={getFeaturedImage(featuredPost)}
                        alt={getRenderedTitle(featuredPost)}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        priority
                      />

                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                      {/* Category Badge (Top Left) */}
                      <div className="absolute top-4 left-4">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#ffd900] text-[#224297] text-xs font-black uppercase tracking-wider rounded-full shadow-lg">
                          <Icon icon="solar:tag-linear" className="w-3 h-3" />
                          {getPrimaryCategory(featuredPost)}
                        </span>
                      </div>

                      {/* Author & Date (Top Right) */}
                      <div className="absolute top-4 right-4 flex items-center gap-2">
                        <div className="flex items-center gap-2 px-3 py-1.5 bg-white/90 dark:bg-black/60 backdrop-blur-sm rounded-full">
                          <div className="w-5 h-5 rounded-full bg-[#224297] flex items-center justify-center">
                            <Icon icon="solar:user-bold" className="w-3 h-3 text-white" />
                          </div>
                          <span className="text-xs font-semibold text-gray-900 dark:text-white">Admin</span>
                        </div>
                      </div>

                      {/* Content Overlay (Bottom) */}
                      <div className="absolute bottom-0 left-0 right-0 p-5 lg:p-6">
                        <h2 className="text-xl lg:text-2xl xl:text-3xl font-black text-white leading-tight tracking-tight mb-2 line-clamp-3 drop-shadow-lg">
                          {getRenderedTitle(featuredPost)}
                        </h2>
                        <p className="hidden sm:block text-white/80 text-sm leading-relaxed line-clamp-2 mb-3">
                          {getRenderedExcerpt(featuredPost)}
                        </p>
                        <div className="flex items-center gap-3 text-white/70 text-xs">
                          <div className="flex items-center gap-1">
                            <Icon icon="solar:calendar-linear" className="w-4 h-4" />
                            <span>{formatDate(featuredPost.date)}</span>
                          </div>
                          <span className="w-1 h-1 rounded-full bg-white/40" />
                          <div className="flex items-center gap-1">
                            <Icon icon="solar:clock-circle-linear" className="w-4 h-4" />
                            <span>{getReadingTime(featuredPost)} menit baca</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            )}

            {/* ═══ RIGHT: RECENT POSTS LIST ═══ */}
            <div className="flex flex-col gap-4">
              {/* Header */}
              <div className="flex items-center justify-between pb-2 border-b border-gray-200 dark:border-gray-800">
                <h3 className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider flex items-center gap-2">
                  <Icon icon="solar:clock-circle-linear" className="w-4 h-4" />
                  Artikel Terbaru
                </h3>
                <span className="text-xs text-gray-400 dark:text-gray-500">
                  {filteredPosts.length} total
                </span>
              </div>

              {/* Recent Posts List */}
              <div className="flex-1 flex flex-col gap-3">
                {recentPosts.map((post, index) => (
                  <Link
                    key={post.id}
                    href={`/blog/${post.slug}`}
                    className="group flex gap-4 p-3 lg:p-4 rounded-2xl bg-white dark:bg-neutral-900 hover:bg-gray-50 dark:hover:bg-neutral-800/80 transition-colors shadow-sm hover:shadow-md"
                  >
                    {/* Thumbnail */}
                    <div className="relative w-20 h-20 lg:w-24 lg:h-24 flex-shrink-0 rounded-xl overflow-hidden">
                      <Image
                        src={getFeaturedImage(post)}
                        alt={getRenderedTitle(post)}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        sizes="96px"
                      />
                      {/* Number Badge */}
                      <div className="absolute -top-1 -left-1 w-5 h-5 lg:w-6 lg:h-6 bg-[#224297] rounded-full flex items-center justify-center">
                        <span className="text-[10px] lg:text-xs font-black text-white">{index + 2}</span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0 flex flex-col justify-center">
                      {/* Category */}
                      <span className="text-[10px] lg:text-xs font-bold text-[#224297] dark:text-[#ffd900] uppercase tracking-wider mb-1">
                        {getPrimaryCategory(post)}
                      </span>

                      {/* Title */}
                      <h4 className="text-sm lg:text-base font-bold text-gray-900 dark:text-white leading-snug line-clamp-2 group-hover:text-[#224297] dark:group-hover:text-[#ffd900] transition-colors">
                        {getRenderedTitle(post)}
                      </h4>

                      {/* Meta */}
                      <div className="flex items-center gap-2 mt-2 text-[10px] lg:text-xs text-gray-500 dark:text-gray-400">
                        <div className="flex items-center gap-1">
                          <Icon icon="solar:calendar-linear" className="w-3 h-3" />
                          <span>{formatDate(post.date)}</span>
                        </div>
                        <span className="w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-600" />
                        <div className="flex items-center gap-1">
                          <Icon icon="solar:clock-circle-linear" className="w-3 h-3" />
                          <span>{getReadingTime(post)} min</span>
                        </div>
                      </div>
                    </div>

                    {/* Arrow */}
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-gray-100 dark:bg-neutral-800 flex items-center justify-center group-hover:bg-[#224297] dark:group-hover:bg-[#ffd900] transition-colors">
                        <Icon icon="solar:alt-arrow-right-linear" className="w-4 h-4 text-gray-400 dark:text-gray-500 group-hover:text-white dark:group-hover:text-[#224297] transition-colors" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              {/* View More Link */}
              {filteredPosts.length > 6 && (
                <Link
                  href="#semua-artikel"
                  className="flex items-center justify-center gap-2 py-3 mt-2 bg-[#224297] hover:bg-[#1a356d] text-white text-sm font-bold rounded-xl transition-colors shadow-lg"
                >
                  <Icon icon="solar:document-text-linear" className="w-5 h-5" />
                  Lihat Semua {filteredPosts.length} Artikel
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          FILTER SECTION — Slide Tab
      ═══════════════════════════════════════════════════════════════════════ */}
      <section id="semua-artikel" className="relative z-10 bg-white dark:bg-neutral-900 py-8 lg:py-10">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section Title */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-xl lg:text-2xl font-bold text-gray-900 dark:text-white">
                Koleksi Artikel
              </h2>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">
                {filteredPosts.length} artikel tersedia
              </p>
            </div>
          </div>

          {/* Slide Tab Filter */}
          <SlideTabFilter
            categories={filterCategories}
            selectedCategory={selectedCategory}
            onSelect={setSelectedCategory}
          />
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          BLOG GRID SECTION
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="relative z-10 bg-white dark:bg-neutral-900 pb-16 lg:pb-24">
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
            <div className="text-center py-20 bg-gray-50 dark:bg-neutral-800/50 rounded-3xl border-2 border-dashed border-gray-200 dark:border-neutral-700">
              <Icon icon="solar:folder-open-linear" className="w-16 h-16 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-500 dark:text-gray-400">Tidak ada artikel ditemukan.</h3>
              <p className="text-gray-400 dark:text-gray-500 mt-2">Coba pilih kategori lain.</p>
            </div>
          )}

          {/* Load More Button */}
          {hasMore && (
            <div className="flex flex-col items-center gap-4 mt-12 pt-8 border-t border-gray-100 dark:border-gray-800">
              <p className="text-sm text-gray-500">
                Menampilkan {Math.min(visibleCount, gridPosts.length)} dari {filteredPosts.length - 6} artikel
              </p>
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
