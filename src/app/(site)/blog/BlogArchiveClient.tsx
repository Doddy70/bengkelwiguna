/**
 * Blog Archive Client Component — Bengkel Wiguna
 * Official 'Blog Two' Layout with dynamic WordPress integration
 */

"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, ArrowUpRight, Clock } from "lucide-react";
import { WPPost } from "@/types/wordpress";
import BlogCardOne from "@/components/ui/BlogCardOne";
import BlogCardTwo, { BlogPost } from "@/components/ui/BlogCardTwo";
import Subscribe from "@/components/ui/Subscribe";
import AuthorBio from "@/components/ui/AuthorBio";
import TrendingPosts from "@/components/ui/TrendingPosts";

interface BlogArchiveClientProps {
  posts: WPPost[];
  categories: any[]; // WP Categories objects
}

export default function BlogArchiveClient({ posts, categories }: BlogArchiveClientProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [sortBy] = useState<string>("newest");

  // Safe text extractors
  const getRenderedTitle = (post: WPPost) => {
    if (typeof post.title === 'string') return post.title;
    return post.title?.rendered || '';
  };

  const getRenderedExcerpt = (post: WPPost) => {
    const rawExcerpt = typeof post.excerpt === 'string' ? post.excerpt : post.excerpt?.rendered || '';
    const cleanExcerpt = rawExcerpt.replace(/<[^>]*>/g, '');
    return cleanExcerpt.length > 140 ? cleanExcerpt.slice(0, 140) + "..." : cleanExcerpt;
  };

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('id-ID', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  // Filter and sort posts
  const filteredPosts = useMemo(() => {
    let result = [...posts];

    // Filter by category slug
    if (selectedCategory) {
      result = result.filter((post: any) => {
        const postCategories = post._embedded?.['wp:term']?.[0] || [];
        return postCategories.some((cat: any) => cat.slug === selectedCategory);
      });
    }

    // Sort
    if (sortBy === "newest") {
        result.sort((a: any, b: any) => new Date(b.date).getTime() - new Date(a.date).getTime());
    } else {
        result.sort((a: any, b: any) => new Date(a.date).getTime() - new Date(b.date).getTime());
    }

    return result;
  }, [posts, selectedCategory, sortBy]);

  // Split posts for layout
  const featuredPost = filteredPosts[0];
  const sidePosts = filteredPosts.slice(1, 4);
  const bottomPosts = filteredPosts.slice(4);

  // Transform WPPost to BlogPost for UI Components
  const transformToBlogPost = (post: WPPost): BlogPost => {
    return {
        slug: `blog/${post.slug}`,
        image: post._embedded?.['wp:featuredmedia']?.[0]?.source_url || "/images/blog-default.jpg",
        title: getRenderedTitle(post),
        date: formatDate(post.date),
        readTime: "5 min read",
        excerpt: getRenderedExcerpt(post),
        author: "Tim Bengkel Wiguna",
        authorAvatar: "/images/logo/wb-logo.png",
        authorPosition: "Editorial Team"
    };
  };

  return (
    <>
      {/* Page Title Section */}
      <div className="bg-light-blue-banner lg:pt-40 pt-28 pb-16">
        <div className="max-w-screen-xl mx-auto px-3 sm:px-6 md:px-14 lg:px-14 xl:px-18 2xl:px-3">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-2xl">
              <span className="inline-block bg-[#ffd900] text-[#1a3567] px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-6">
                Edukasi Otomotif
              </span>
              <h2 className="lg:text-6xl md:text-5xl text-4xl text-gray-900 font-black mb-4 tracking-tighter italic uppercase leading-[0.9]">
                Tips & Artikel <br /><span className="text-brand-blue">Bengkel Wiguna</span>
              </h2>
              <p className="text-xl mt-6 mb-0 text-gray-800 font-medium">
                Wawasan seputar perawatan mobil dari tim teknisi ahli kami.
              </p>
            </div>

            {/* Category Filter */}
            <div className="flex flex-col gap-3">
              <label className="text-gray-900/60 text-xs font-bold uppercase tracking-widest ml-1">Filter Kategori</label>
              <div className="relative inline-block">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full md:w-64 text-base font-bold px-6 py-4 appearance-none pr-14 border border-gray-300 bg-white text-gray-900 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-blue transition duration-300 cursor-pointer shadow-lg"
                  aria-label="Filter kategori"
                >
                  <option value="">Semua Kategori</option>
                  {categories.map((cat) => (
                    <option key={cat.id} value={cat.slug}>{cat.name}</option>
                  ))}
                </select>

                <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 flex items-center">
                  <ChevronDown size={22} className="text-brand-blue" />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full mt-12 border-t border-gray-200"></div>
        </div>
      </div>

      {/* Blog Content */}
      <div className="blog-wrap font-dm bg-white py-16 lg:py-24">
        <div className="max-w-screen-xl mx-auto px-3 sm:px-6 md:px-14 lg:px-14 xl:px-18 2xl:px-3">
          
          <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-10 relative lg:space-y-0 space-y-8 mb-20">
            {/* Featured Post (Template style) */}
            {featuredPost && (
              <div className="w-full" data-aos="fade-up">
                <Link
                  href={`/blog/${featuredPost.slug}`}
                  className="group border border-gray-200 rounded-2xl overflow-hidden flex flex-col h-full hover:shadow-xl transition-all duration-500 bg-white"
                >
                  <div className="overflow-hidden relative aspect-video">
                    <Image
                      src={featuredPost._embedded?.['wp:featuredmedia']?.[0]?.source_url || "/images/blog-default.jpg"}
                      alt={getRenderedTitle(featuredPost)}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-8 flex-grow flex flex-col">
                    <div className="flex flex-row text-gray-500 text-sm mb-4 font-bold uppercase tracking-widest">
                      <Clock size={14} className="mr-2" />
                      <span>{formatDate(featuredPost.date)}</span>
                    </div>
                    <h2 className="lg:text-4xl text-2xl text-gray-900 font-black mb-4 leading-tight group-hover:text-brand-blue transition-colors">
                      {getRenderedTitle(featuredPost)}
                    </h2>
                    <p className="text-gray-600 font-medium text-lg leading-relaxed line-clamp-3">
                      {getRenderedExcerpt(featuredPost)}
                    </p>
                    <div className="flex flex-row gap-4 mt-auto pt-8 items-center border-t border-gray-50">
                      <Image
                        src="/images/logo/wb-logo.png"
                        alt="Bengkel Wiguna"
                        width={50}
                        height={50}
                        className="w-12 h-12 rounded-full object-cover border-2 border-gray-100"
                      />
                      <div className="flex flex-col">
                        <span className="text-lg text-gray-900 font-bold leading-tight">
                          Tim Bengkel Wiguna
                        </span>
                        <span className="text-sm text-gray-500 font-medium">
                          Editorial Team
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            )}

            {/* Side Posts using BlogCardTwo */}
            <div className="w-full flex flex-col gap-6">
              {sidePosts.map((post: any) => (
                <BlogCardTwo key={post.id} post={transformToBlogPost(post)} />
              ))}
            </div>
          </div>

          {/* Section Divider */}
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 lg:pt-10">
            <h2 className="lg:text-5xl md:text-4xl text-3xl font-black text-gray-900 mb-6 tracking-tighter uppercase italic">
              Update Terbaru & Informasi
            </h2>
            <p className="text-gray-600 text-xl font-medium">
              Tetap terupdate dengan tips teknis dan promo menarik khusus untuk pelanggan setia kami.
            </p>
          </div>

          {/* Bottom Grid + Sidebar Layout */}
          <div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-12 relative">
            <div className="lg:col-span-2">
                <div className="grid md:grid-cols-2 grid-cols-1 gap-8">
                    {bottomPosts.map((post) => (
                        <BlogCardOne key={post.id} post={transformToBlogPost(post)} />
                    ))}
                </div>
              
              {/* Empty State */}
              {filteredPosts.length === 0 && (
                <div className="text-center py-24 bg-gray-50 rounded-3xl border-2 border-dashed border-gray-200 w-full">
                  <span className="text-7xl mb-6 block">📭</span>
                  <h3 className="text-2xl font-black text-gray-900 mb-2 uppercase">Tidak ada artikel</h3>
                  <p className="text-gray-500 font-medium">Coba pilih kategori lain atau lihat semua artikel.</p>
                </div>
              )}
            </div>

            {/* Sidebar Components */}
            <div className="w-full flex flex-col gap-10">
              <Subscribe />
              <AuthorBio />
              <TrendingPosts posts={posts.slice(0, 4).map(transformToBlogPost)} />
            </div>
          </div>

          {/* Load More */}
          {filteredPosts.length >= 10 && (
            <div className="flex text-center justify-center mt-20">
              <button className="inline-flex items-center justify-center gap-3 px-10 py-5 text-[#1a3567] text-lg font-black uppercase tracking-widest bg-[#ffd900] hover:bg-yellow-400 rounded-2xl transition duration-300 shadow-xl shadow-yellow-900/10 hover:gap-5">
                <span>Lihat Lebih Banyak</span>
                <ArrowUpRight size={24} />
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  )
}