/**
 * Blog Archive Client Component — Bengkel Wiguna
 * Bento Card Style Layout with Brand Colors
 */

"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { Icon } from '@iconify/react';
import { WPPost } from "@/types/wordpress";
import Subscribe from "@/components/ui/Subscribe";
import AuthorBio from "@/components/ui/AuthorBio";
import TrendingPosts from "@/components/ui/TrendingPosts";

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

  const getRenderedTitle = (post: WPPost) => {
    if (typeof post.title === 'string') return post.title;
    return post.title?.rendered || '';
  };

  const getRenderedExcerpt = (post: WPPost) => {
    const rawExcerpt = typeof post.excerpt === 'string' ? post.excerpt : post.excerpt?.rendered || '';
    const cleanExcerpt = rawExcerpt.replace(/<[^>]*>/g, '');
    return cleanExcerpt.length > 120 ? cleanExcerpt.slice(0, 120) + "..." : cleanExcerpt;
  };

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('id-ID', {
      day: 'numeric',
      month: 'long',
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

  const featuredPost = filteredPosts[0];
  const sidePosts = filteredPosts.slice(1, 4);
  const bottomPosts = filteredPosts.slice(4);

  // Get category badge color
  const getBadgeStyle = (index: number) => {
    const styles = [
      { bg: BRAND_GOLD, text: 'black' },
      { bg: BRAND_BLUE, text: 'white' },
      { bg: '#00B14F', text: 'white' },
    ];
    return styles[index % styles.length];
  };

  return (
    <>
      {/* === BENTO CARD HERO HEADER === */}
      <div className="bg-gradient-to-br from-[#050b14] to-[#224297] lg:pt-24 pt-16 pb-12 lg:pb-16">
        <div className="max-w-screen-xl mx-auto px-3 sm:px-6 md:px-14 lg:px-14 xl:px-18 2xl:px-3">
          {/* Bento Grid Header */}
          <div className="grid lg:grid-cols-3 gap-4 lg:gap-6">

            {/* === MAIN FEATURED CARD (Large) === */}
            {featuredPost && (
              <Link
                href={`/blog/${featuredPost.slug}`}
                className="lg:col-span-2 row-span-2 relative rounded-[2rem] overflow-hidden group shadow-xl hover:shadow-2xl transition-all duration-500 min-h-[400px] lg:min-h-[500px]"
              >
                <Image
                  src={featuredPost._embedded?.['wp:featuredmedia']?.[0]?.source_url || "/images/blog-default.jpg"}
                  alt={getRenderedTitle(featuredPost)}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 1024px) 100vw, 66vw"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                {/* Decorative Elements */}
                <div className="absolute -top-20 -right-20 w-60 h-60 bg-white/10 rounded-full blur-3xl" />
                <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-[#ffd900]/20 rounded-full blur-2xl" />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 lg:p-8 z-10">
                  <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-[1.5rem] p-6 lg:p-8">
                    {/* Badge */}
                    <span className="inline-block bg-[#ffd900] text-black text-xs font-black px-4 py-2 rounded-full mb-4 uppercase tracking-wider">
                      Tips & Trick
                    </span>

                    <h2 className="text-white text-2xl lg:text-4xl font-bold mb-3 leading-tight group-hover:text-[#ffd900] transition-colors">
                      {getRenderedTitle(featuredPost)}
                    </h2>

                    <p className="text-white/80 text-sm lg:text-base mb-4 line-clamp-2">
                      {getRenderedExcerpt(featuredPost)}
                    </p>

                    <div className="flex items-center justify-between">
                      <span className="text-white/60 text-xs lg:text-sm">
                        {formatDate(featuredPost.date)} • 5 min read
                      </span>
                      <div className="bg-[#ffd900] text-black px-5 py-2.5 rounded-full font-bold text-sm hover:scale-105 hover:bg-white transition-all flex items-center gap-2">
                        Selengkapnya
                        <Icon icon="solar:arrow-right-linear" className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            )}

            {/* === SIDE CARDS (3 Small Cards) === */}
            <div className="flex flex-col gap-4 lg:gap-6">
              {sidePosts.map((post, index) => {
                const badgeStyle = getBadgeStyle(index);
                return (
                  <Link
                    key={post.id}
                    href={`/blog/${post.slug}`}
                    className="relative rounded-[1.5rem] overflow-hidden group shadow-lg hover:shadow-xl transition-all duration-500 min-h-[120px] lg:min-h-[150px] flex-1"
                  >
                    <Image
                      src={post._embedded?.['wp:featuredmedia']?.[0]?.source_url || "/images/blog-default.jpg"}
                      alt={getRenderedTitle(post)}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 1024px) 100vw, 33vw"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                    {/* Content */}
                    <div className="absolute inset-0 flex flex-col justify-end p-4 lg:p-5 z-10">
                      <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-xl p-4">
                        {/* Badge */}
                        <span
                          className="inline-block text-xs font-black px-3 py-1 rounded-full mb-2 uppercase tracking-wider"
                          style={{
                            backgroundColor: badgeStyle.bg,
                            color: badgeStyle.text
                          }}
                        >
                          {index === 0 ? 'Edukasi' : index === 1 ? 'Info' : 'Tips'}
                        </span>

                        <h3 className="text-white text-sm lg:text-base font-bold leading-tight line-clamp-2 group-hover:text-[#ffd900] transition-colors">
                          {getRenderedTitle(post)}
                        </h3>

                        <div className="flex items-center justify-end mt-2">
                          <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-[#ffd900] group-hover:text-black transition-all">
                            <Icon icon="solar:arrow-right-linear" className="w-4 h-4 text-white" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Category Filter */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <span className="text-white/60 text-sm font-medium">Filter:</span>
            <div className="relative inline-block">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-auto text-base font-medium px-5 py-3 appearance-none pr-12 border border-white/20 rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-[#ffd900] bg-white/10 backdrop-blur-sm text-white transition duration-300"
                aria-label="Pilih kategori"
              >
                <option value="" className="text-gray-900">Semua Kategori</option>
                {categories.map((cat) => (
                  <option key={cat.id} value={cat.slug} className="text-gray-900">{cat.name}</option>
                ))}
              </select>
              <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 flex items-center">
                <Icon icon="solar:alt-arrow-down-linear" className="w-5 h-5 text-white/60" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* === BLOG CONTENT SECTION === */}
      <div className="blog-wrap font-dm bg-gray-50">
        <div className="max-w-screen-xl mx-auto px-3 sm:px-6 md:px-14 lg:px-14 xl:px-18 2xl:px-3 lg:py-16 py-12">

          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="lg:text-4xl md:text-3xl text-2xl font-bold text-gray-900 mb-4">
              Kumpulan Artikel & Panduan Terbaru
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Solusi perawatan kendaraan yang membuat mobil Anda selalu dalam kondisi prima.
            </p>
          </div>

          {/* === BENTO GRID ARTICLES === */}
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
            {bottomPosts.map((post, index) => {
              const pattern = index % 4;

              // Pattern 0: Full Image Card
              if (pattern === 0) {
                return (
                  <Link
                    key={post.id}
                    href={`/blog/${post.slug}`}
                    className="relative rounded-[1.5rem] overflow-hidden group shadow-lg hover:shadow-xl transition-all duration-500 aspect-[4/3]"
                  >
                    <Image
                      src={post._embedded?.['wp:featuredmedia']?.[0]?.source_url || "/images/blog-default.jpg"}
                      alt={getRenderedTitle(post)}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-5 z-10">
                      <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-xl p-4">
                        <span className="inline-block bg-[#ffd900] text-black text-xs font-bold px-3 py-1 rounded-full mb-2">
                          Artikel
                        </span>
                        <h3 className="text-white font-bold text-lg leading-tight line-clamp-2 group-hover:text-[#ffd900] transition-colors">
                          {getRenderedTitle(post)}
                        </h3>
                        <p className="text-white/70 text-sm mt-2 line-clamp-2">
                          {getRenderedExcerpt(post)}
                        </p>
                      </div>
                    </div>
                  </Link>
                );
              }

              // Pattern 1: Solid Blue Card
              if (pattern === 1) {
                return (
                  <Link
                    key={post.id}
                    href={`/blog/${post.slug}`}
                    className="relative rounded-[1.5rem] overflow-hidden group shadow-lg hover:shadow-xl transition-all duration-500 aspect-[4/3] bg-gradient-to-br from-[#224297] to-[#1a356d]"
                  >
                    <div className="absolute -top-16 -right-16 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
                    <div className="absolute inset-0 flex flex-col justify-end p-5 z-10">
                      <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-xl p-5 h-full flex flex-col justify-between">
                        <div>
                          <span className="inline-flex items-center gap-2 bg-white/20 px-3 py-1 rounded-full mb-3">
                            <Icon icon="solar:tag-price-linear" className="w-4 h-4 text-[#ffd900]" />
                            <span className="text-white/90 text-xs font-semibold uppercase">Tips</span>
                          </span>
                          <h3 className="text-white font-bold text-lg leading-tight line-clamp-3 group-hover:text-[#ffd900] transition-colors">
                            {getRenderedTitle(post)}
                          </h3>
                        </div>
                        <div className="flex items-center justify-between mt-4">
                          <span className="text-white/60 text-xs">{formatDate(post.date)}</span>
                          <div className="w-8 h-8 rounded-full bg-[#ffd900] flex items-center justify-center">
                            <Icon icon="solar:arrow-right-linear" className="w-4 h-4 text-black" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              }

              // Pattern 2: Split Card (Image + Text)
              if (pattern === 2) {
                return (
                  <Link
                    key={post.id}
                    href={`/blog/${post.slug}`}
                    className="relative rounded-[1.5rem] overflow-hidden group shadow-lg hover:shadow-xl transition-all duration-500 flex flex-col lg:flex-row aspect-[4/3] lg:aspect-auto"
                  >
                    <div className="relative w-full lg:w-1/2 aspect-video lg:aspect-auto">
                      <Image
                        src={post._embedded?.['wp:featuredmedia']?.[0]?.source_url || "/images/blog-default.jpg"}
                        alt={getRenderedTitle(post)}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                    </div>
                    <div className="w-full lg:w-1/2 bg-white dark:bg-neutral-900 p-5 flex flex-col justify-center">
                      <span className="inline-block bg-[#224297]/10 text-[#224297] text-xs font-bold px-3 py-1 rounded-full mb-3 w-fit">
                        Panduan
                      </span>
                      <h3 className="text-gray-900 dark:text-white font-bold text-lg leading-tight line-clamp-3 group-hover:text-[#224297] transition-colors">
                        {getRenderedTitle(post)}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mt-2 line-clamp-2">
                        {getRenderedExcerpt(post)}
                      </p>
                      <div className="flex items-center gap-2 mt-4 text-[#224297] font-semibold text-sm group-hover:gap-3 transition-all">
                        Baca Selengkapnya
                        <Icon icon="solar:arrow-right-linear" className="w-4 h-4" />
                      </div>
                    </div>
                  </Link>
                );
              }

              // Pattern 3: Minimalist Card
              return (
                <Link
                  key={post.id}
                  href={`/blog/${post.slug}`}
                  className="relative rounded-[1.5rem] overflow-hidden group shadow-lg hover:shadow-xl transition-all duration-500 aspect-[4/3]"
                >
                  <Image
                    src={post._embedded?.['wp:featuredmedia']?.[0]?.source_url || "/images/blog-default.jpg"}
                    alt={getRenderedTitle(post)}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-500" />
                  <div className="absolute inset-0 flex items-center justify-center z-10">
                    <div className="backdrop-blur-xl bg-white/20 border border-white/30 rounded-2xl p-6 text-center shadow-xl">
                      <h3 className="text-white font-bold text-lg mb-3 line-clamp-2">
                        {getRenderedTitle(post)}
                      </h3>
                      <div className="bg-[#ffd900] text-black px-5 py-2 rounded-full font-bold text-sm inline-flex items-center gap-2">
                        Baca
                        <Icon icon="solar:arrow-right-linear" className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}

            {bottomPosts.length === 0 && (
              <div className="col-span-full text-center py-20 bg-white rounded-2xl border-2 border-dashed border-gray-200">
                <Icon icon="solar:document-text-linear" className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-500">Tidak ada artikel lagi.</h3>
              </div>
            )}
          </div>

          {/* Load More Button */}
          {filteredPosts.length >= 10 && (
            <div className="flex text-center justify-center mt-12">
              <button className="inline-flex items-center justify-center gap-3 px-8 py-4 text-white text-base font-bold bg-[#224297] hover:bg-[#1a356d] rounded-full transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 group">
                Muat Lebih Banyak
                <Icon icon="solar:arrow-right-linear" className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
