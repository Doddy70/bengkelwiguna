/**
 * Blog Archive Client Component — Bengkel Wiguna
 * Magazine-style Hero with WP REST API Integration
 * Design Reference: Pagedone newest article blog concept
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
    return cleanExcerpt.length > 120 ? cleanExcerpt.slice(0, 120) + "..." : cleanExcerpt;
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

  // Hero posts
  const featuredPost = filteredPosts[0];
  const sidePost1 = filteredPosts[1];
  const sidePost2 = filteredPosts[2];
  const sidePost3 = filteredPosts[3];

  // Grid posts (remaining)
  const gridPosts = filteredPosts.slice(4, visibleCount + 4);
  const hasMore = visibleCount < filteredPosts.length - 4;

  // Prepare categories for filter (add "Semua Artikel")
  const filterCategories = useMemo(() => [
    { id: 0, name: "Semua Artikel" },
    ...categories.map((c: any) => ({ id: c.id, name: c.name, slug: c.slug }))
  ], [categories]);

  return (
    <>
      {/* ═══════════════════════════════════════════════════════════════════════
          HERO SECTION — Magazine Style
          Layout: Featured (2/3) + Side Column (1/3)
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

          {/* ═══ Magazine Grid: Featured (2/3) + Side Stack (1/3) ═══ */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6">

            {/* ═══ FEATURED POST — Large Card (lg:col-span-8) ═══ */}
            {featuredPost && (
              <div className="lg:col-span-8 relative rounded-3xl lg:rounded-[2rem] overflow-hidden group cursor-pointer">
                <Link href={`/blog/${featuredPost.slug}`} className="block">
                  {/* Image Background */}
                  <div className="relative aspect-[16/10] lg:aspect-[21/9]">
                    <Image
                      src={getFeaturedImage(featuredPost)}
                      alt={getRenderedTitle(featuredPost)}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 66vw"
                      priority
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                    {/* Content Overlay */}
                    <div className="absolute inset-0 p-6 lg:p-10 flex flex-col justify-end">
                      {/* Category Badge */}
                      <span className="inline-flex items-center gap-1.5 w-fit mb-4 px-4 py-1.5 bg-[#ffd900] text-[#224297] text-xs lg:text-sm font-black uppercase tracking-wider rounded-full shadow-lg">
                        <Icon icon="solar:tag-linear" className="w-3.5 h-3.5" />
                        {getPrimaryCategory(featuredPost)}
                      </span>

                      {/* Title */}
                      <h2 className="text-2xl lg:text-4xl xl:text-5xl font-black text-white leading-[1.15] tracking-tight mb-3 line-clamp-3 drop-shadow-lg">
                        {getRenderedTitle(featuredPost)}
                      </h2>

                      {/* Excerpt */}
                      <p className="hidden sm:block text-white/80 text-sm lg:text-base leading-relaxed mb-4 max-w-2xl line-clamp-2">
                        {getRenderedExcerpt(featuredPost)}
                      </p>

                      {/* Meta */}
                      <div className="flex items-center gap-4 text-white/70 text-sm">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                            <Icon icon="solar:user-bold" className="w-4 h-4" />
                          </div>
                          <span>Admin Wiguna</span>
                        </div>
                        <span className="w-1.5 h-1.5 rounded-full bg-white/50" />
                        <div className="flex items-center gap-1.5">
                          <Icon icon="solar:calendar-linear" className="w-4 h-4" />
                          <span>{formatDate(featuredPost.date)}</span>
                        </div>
                        <span className="w-1.5 h-1.5 rounded-full bg-white/50" />
                        <div className="flex items-center gap-1.5">
                          <Icon icon="solar:clock-circle-linear" className="w-4 h-4" />
                          <span>5 menit baca</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            )}

            {/* ═══ SIDE COLUMN — 3 Stacked Cards (lg:col-span-4) ═══ */}
            <div className="lg:col-span-4 flex flex-col gap-4">

              {/* Side Post 1 */}
              {sidePost1 && (
                <Link href={`/blog/${sidePost1.slug}`} className="group relative flex-1 min-h-[140px] lg:min-h-[160px] rounded-2xl lg:rounded-[1.25rem] overflow-hidden">
                  <Image
                    src={getFeaturedImage(sidePost1)}
                    alt={getRenderedTitle(sidePost1)}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                  <div className="absolute inset-0 p-4 lg:p-5 flex flex-col justify-between">
                    <span className="inline-flex items-center gap-1 w-fit px-2.5 py-1 bg-[#224297]/90 backdrop-blur-sm text-white text-[10px] lg:text-xs font-bold uppercase tracking-wider rounded-full">
                      {getPrimaryCategory(sidePost1)}
                    </span>
                    <div>
                      <h3 className="text-sm lg:text-base font-bold text-white leading-tight line-clamp-2 mb-1">
                        {getRenderedTitle(sidePost1)}
                      </h3>
                      <span className="text-white/60 text-[10px] lg:text-xs">
                        {formatDate(sidePost1.date)}
                      </span>
                    </div>
                  </div>
                </Link>
              )}

              {/* Side Post 2 */}
              {sidePost2 && (
                <Link href={`/blog/${sidePost2.slug}`} className="group relative flex-1 min-h-[140px] lg:min-h-[160px] rounded-2xl lg:rounded-[1.25rem] overflow-hidden">
                  <Image
                    src={getFeaturedImage(sidePost2)}
                    alt={getRenderedTitle(sidePost2)}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                  <div className="absolute inset-0 p-4 lg:p-5 flex flex-col justify-between">
                    <span className="inline-flex items-center gap-1 w-fit px-2.5 py-1 bg-[#ffd900] text-[#224297] text-[10px] lg:text-xs font-bold uppercase tracking-wider rounded-full">
                      {getPrimaryCategory(sidePost2)}
                    </span>
                    <div>
                      <h3 className="text-sm lg:text-base font-bold text-white leading-tight line-clamp-2 mb-1">
                        {getRenderedTitle(sidePost2)}
                      </h3>
                      <span className="text-white/60 text-[10px] lg:text-xs">
                        {formatDate(sidePost2.date)}
                      </span>
                    </div>
                  </div>
                </Link>
              )}

              {/* Side Post 3 */}
              {sidePost3 && (
                <Link href={`/blog/${sidePost3.slug}`} className="group relative flex-1 min-h-[140px] lg:min-h-[160px] rounded-2xl lg:rounded-[1.25rem] overflow-hidden">
                  <Image
                    src={getFeaturedImage(sidePost3)}
                    alt={getRenderedTitle(sidePost3)}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                  <div className="absolute inset-0 p-4 lg:p-5 flex flex-col justify-between">
                    <span className="inline-flex items-center gap-1 w-fit px-2.5 py-1 bg-[#224297]/90 backdrop-blur-sm text-white text-[10px] lg:text-xs font-bold uppercase tracking-wider rounded-full">
                      {getPrimaryCategory(sidePost3)}
                    </span>
                    <div>
                      <h3 className="text-sm lg:text-base font-bold text-white leading-tight line-clamp-2 mb-1">
                        {getRenderedTitle(sidePost3)}
                      </h3>
                      <span className="text-white/60 text-[10px] lg:text-xs">
                        {formatDate(sidePost3.date)}
                      </span>
                    </div>
                  </div>
                </Link>
              )}

              {/* View More Button */}
              {filteredPosts.length > 4 && (
                <Link
                  href="#semua-artikel"
                  className="flex items-center justify-center gap-2 py-3 lg:py-4 bg-[#224297] hover:bg-[#1a356d] text-white text-sm font-bold rounded-xl lg:rounded-2xl transition-colors shadow-lg"
                >
                  <Icon icon="solar:document-text-linear" className="w-5 h-5" />
                  Lihat Semua Artikel
                  <Icon icon="solar:alt-arrow-right-linear" className="w-4 h-4" />
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
                Semua Artikel
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
                Menampilkan {Math.min(visibleCount, gridPosts.length)} dari {filteredPosts.length - 4} artikel
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
