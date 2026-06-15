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

  const featuredPost = filteredPosts[0];
  const bentoPosts = filteredPosts.slice(1);

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
                      Latest Article
                    </span>

                    <h2 className="text-white text-2xl lg:text-4xl font-bold mb-3 leading-tight group-hover:text-[#ffd900] transition-colors">
                      {getRenderedTitle(featuredPost)}
                    </h2>

                    <p className="text-white/80 text-sm lg:text-base mb-4 line-clamp-2">
                      {getRenderedExcerpt(featuredPost)}
                    </p>

                    <div className="flex items-center justify-between">
                      <span className="text-white/60 text-xs lg:text-sm">
                        {formatDate(featuredPost.date)}
                      </span>
                      <div className="bg-[#ffd900] text-black px-5 py-2.5 rounded-full font-bold text-sm hover:scale-105 hover:bg-white transition-all flex items-center gap-2">
                        Baca Selengkapnya
                        <Icon icon="solar:arrow-right-linear" className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            )}

            {/* === CATEGORY FILTER CARD === */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-[1.5rem] p-6 lg:p-8">
              <h3 className="text-white text-lg font-bold mb-4">Filter Kategori</h3>
              <div className="space-y-3">
                <button
                  onClick={() => setSelectedCategory("")}
                  className={`w-full text-left px-4 py-3 rounded-xl transition-all flex items-center justify-between ${
                    selectedCategory === ""
                      ? 'bg-[#ffd900] text-black font-bold'
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
                >
                  <span>Semua Artikel</span>
                  <Icon icon="solar:alt-arrow-right-linear" className="w-4 h-4" />
                </button>
                {categories.slice(0, 4).map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.slug)}
                    className={`w-full text-left px-4 py-3 rounded-xl transition-all flex items-center justify-between ${
                      selectedCategory === cat.slug
                        ? 'bg-[#ffd900] text-black font-bold'
                        : 'bg-white/10 text-white hover:bg-white/20'
                    }`}
                  >
                    <span>{cat.name}</span>
                    <Icon icon="solar:alt-arrow-right-linear" className="w-4 h-4" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* === ASYMMETRIC BENTO GRID ARTICLES === */}
      <div className="blog-wrap font-dm bg-gray-50">
        <div className="max-w-screen-xl mx-auto px-3 sm:px-6 md:px-14 lg:px-14 xl:px-18 2xl:px-3 lg:py-16 py-12">

          {/* Section Header */}
          <div className="mb-10">
            <h2 className="lg:text-4xl md:text-3xl text-2xl font-bold text-gray-900 mb-2">
              Semua Artikel
            </h2>
            <p className="text-gray-500 text-sm">
              {filteredPosts.length} artikel tersedia
            </p>
          </div>

          {/* === ASYMMETRIC BENTO GRID === */}
          {bentoPosts.length > 0 && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6 auto-rows-auto">

              {/* Row 1: Large Card (Left) + 2 Medium Cards (Right) */}
              <div className="lg:col-span-2 grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 lg:auto-rows-[320px]">
                {bentoPosts[0] && (
                  <Link
                    href={`/blog/${bentoPosts[0].slug}`}
                    className="relative rounded-[1.5rem] overflow-hidden group shadow-lg hover:shadow-xl transition-all duration-500 min-h-[280px] lg:min-h-full"
                  >
                    <Image
                      src={bentoPosts[0]._embedded?.['wp:featuredmedia']?.[0]?.source_url || "/images/blog-default.jpg"}
                      alt={getRenderedTitle(bentoPosts[0])}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 1024px) 100vw, 66vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-5 lg:p-6 z-10">
                      <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-xl p-4 lg:p-5">
                        <span className="inline-block bg-[#ffd900] text-black text-xs font-bold px-3 py-1 rounded-full mb-2">
                          Artikel
                        </span>
                        <h3 className="text-white font-bold text-lg lg:text-xl leading-tight line-clamp-2 group-hover:text-[#ffd900] transition-colors">
                          {getRenderedTitle(bentoPosts[0])}
                        </h3>
                        <p className="text-white/70 text-sm mt-2 line-clamp-2">
                          {getRenderedExcerpt(bentoPosts[0])}
                        </p>
                      </div>
                    </div>
                  </Link>
                )}

                <div className="flex flex-col gap-4 lg:gap-6">
                  {bentoPosts.slice(1, 3).map((post) => (
                    <Link
                      key={post.id}
                      href={`/blog/${post.slug}`}
                      className="relative rounded-[1.5rem] overflow-hidden group shadow-lg hover:shadow-xl transition-all duration-500 flex-1 min-h-[140px]"
                    >
                      <Image
                        src={post._embedded?.['wp:featuredmedia']?.[0]?.source_url || "/images/blog-default.jpg"}
                        alt={getRenderedTitle(post)}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        sizes="(max-width: 1024px) 100vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                      <div className="absolute inset-0 flex flex-col justify-end p-4 z-10">
                        <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-xl p-4">
                          <span className="inline-block bg-[#224297] text-white text-xs font-bold px-3 py-1 rounded-full mb-2">
                            Tips
                          </span>
                          <h3 className="text-white font-bold text-sm lg:text-base leading-tight line-clamp-2 group-hover:text-[#ffd900] transition-colors">
                            {getRenderedTitle(post)}
                          </h3>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Right Column: 3 Small Cards */}
              <div className="lg:col-span-1 flex flex-col gap-4 lg:gap-6">
                {bentoPosts.slice(3, 6).map((post) => (
                  <Link
                    key={post.id}
                    href={`/blog/${post.slug}`}
                    className="relative rounded-[1.5rem] overflow-hidden group shadow-lg hover:shadow-xl transition-all duration-500 min-h-[160px] bg-gradient-to-br from-[#224297] to-[#1a356d]"
                  >
                    <div className="absolute -top-12 -right-12 w-32 h-32 bg-white/10 rounded-full blur-xl" />
                    <div className="absolute inset-0 flex flex-col justify-between p-4 z-10">
                      <div className="flex items-start justify-between">
                        <span className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full">
                          <Icon icon="solar:star-bold" className="w-4 h-4 text-[#ffd900]" />
                          <span className="text-white/90 text-xs font-semibold">Featured</span>
                        </span>
                        <div className="w-8 h-8 rounded-full bg-[#ffd900] flex items-center justify-center">
                          <Icon icon="solar:arrow-right-linear" className="w-4 h-4 text-black" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-white font-bold text-sm leading-tight line-clamp-2 group-hover:text-[#ffd900] transition-colors">
                          {getRenderedTitle(post)}
                        </h3>
                        <p className="text-white/60 text-xs mt-2">
                          {formatDate(post.date)}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Row 2: 4 Equal Cards */}
              {bentoPosts.slice(6, 10).length > 0 && (
                <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
                  {bentoPosts.slice(6, 10).map((post) => (
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
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                      <div className="absolute inset-x-0 bottom-0 p-4 z-10">
                        <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-xl p-4">
                          <h3 className="text-white font-bold text-sm leading-tight line-clamp-2 group-hover:text-[#ffd900] transition-colors">
                            {getRenderedTitle(post)}
                          </h3>
                          <p className="text-white/60 text-xs mt-2">
                            {formatDate(post.date)}
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}

              {/* Row 3: Split Cards */}
              {bentoPosts.slice(10, 14).length > 0 && (
                <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
                  {bentoPosts.slice(10, 14).map((post) => (
                    <Link
                      key={post.id}
                      href={`/blog/${post.slug}`}
                      className="relative rounded-[1.5rem] overflow-hidden group shadow-lg hover:shadow-xl transition-all duration-500 flex flex-col lg:flex-row"
                    >
                      <div className="relative w-full lg:w-2/5 aspect-video lg:aspect-auto min-h-[160px] lg:min-h-full">
                        <Image
                          src={post._embedded?.['wp:featuredmedia']?.[0]?.source_url || "/images/blog-default.jpg"}
                          alt={getRenderedTitle(post)}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                          sizes="(max-width: 1024px) 100vw, 40vw"
                        />
                      </div>
                      <div className="w-full lg:w-3/5 bg-white p-5 flex flex-col justify-center">
                        <span className="inline-block bg-[#224297]/10 text-[#224297] text-xs font-bold px-3 py-1 rounded-full mb-3 w-fit">
                          Panduan
                        </span>
                        <h3 className="text-gray-900 font-bold text-base leading-tight line-clamp-2 group-hover:text-[#224297] transition-colors">
                          {getRenderedTitle(post)}
                        </h3>
                        <p className="text-gray-500 text-sm mt-2 line-clamp-2">
                          {getRenderedExcerpt(post)}
                        </p>
                        <div className="flex items-center gap-2 mt-4 text-[#224297] font-semibold text-sm group-hover:gap-3 transition-all">
                          Baca
                          <Icon icon="solar:arrow-right-linear" className="w-4 h-4" />
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}

              {/* Load More Button */}
              {bentoPosts.length >= 10 && (
                <div className="lg:col-span-3 flex text-center justify-center mt-8">
                  <button className="inline-flex items-center justify-center gap-3 px-8 py-4 text-white text-base font-bold bg-[#224297] hover:bg-[#1a356d] rounded-full transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 group">
                    Muat Lebih Banyak
                    <Icon icon="solar:arrow-down-linear" className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
                  </button>
                </div>
              )}
            </div>
          )}

          {/* Empty State */}
          {bentoPosts.length === 0 && (
            <div className="text-center py-20 bg-white rounded-2xl border-2 border-dashed border-gray-200">
              <Icon icon="solar:document-text-linear" className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-500">Tidak ada artikel ditemukan.</h3>
              <p className="text-gray-400 mt-2">Coba pilih kategori lain.</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
