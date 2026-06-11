/**
 * Blog Archive Client Component — Bengkel Wiguna
 * Refactored to use BlogCardTwo for consistent modern layout
 */

"use client";

import { useState, useMemo } from "react";
import { ChevronDown, ArrowUpRight } from "lucide-react";
import { WPPost } from "@/types/wordpress";
import BlogCardTwo, { BlogPost } from "@/components/ui/BlogCardTwo";

interface BlogArchiveClientProps {
  posts: WPPost[];
  categories: string[];
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
    return cleanExcerpt.length > 160 ? cleanExcerpt.slice(0, 160) + "..." : cleanExcerpt;
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

    // Filter by category
    if (selectedCategory) {
      result = result.filter((post: any) => {
        const postCategories = post._embedded?.['wp:term']?.[0] || [];
        return postCategories.some((cat: any) => cat.name === selectedCategory);
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

  // Transform WPPost to BlogPost for BlogCardTwo
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
              <h2 className="lg:text-6xl md:text-5xl text-4xl text-white font-black mb-4 tracking-tighter italic uppercase leading-[0.9]">
                Tips & Artikel <br /><span className="text-[#ffd900]">Bengkel Wiguna</span>
              </h2>
              <p className="text-xl mt-6 mb-0 text-white/80 font-medium">
                Wawasan seputar perawatan mobil dari tim teknisi ahli kami.
              </p>
            </div>

            {/* Category Filter */}
            <div className="flex flex-col gap-3">
              <label className="text-white/60 text-xs font-bold uppercase tracking-widest ml-1">Filter Kategori</label>
              <div className="relative inline-block">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full md:w-64 text-base font-bold px-6 py-4 appearance-none pr-14 border border-white/20 bg-white/10 backdrop-blur-md text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-[#ffd900] transition duration-300 cursor-pointer shadow-lg"
                  aria-label="Filter kategori"
                >
                  <option value="" className="text-gray-900">Semua Kategori</option>
                  {categories.map((cat) => (
                    <option key={cat} value={cat} className="text-gray-900">{cat}</option>
                  ))}
                </select>

                <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 flex items-center">
                  <ChevronDown size={22} className="text-[#ffd900]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Blog Content */}
      <div className="blog-wrap font-dm bg-white py-20">
        <div className="max-w-screen-xl mx-auto px-3 sm:px-6 md:px-14 lg:px-14 xl:px-18 2xl:px-3">
          
          <div className="grid grid-cols-1 gap-8">
            {filteredPosts.map((post) => (
              <div key={post.id}>
                <BlogCardTwo post={transformToBlogPost(post)} />
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredPosts.length === 0 && (
            <div className="text-center py-24 bg-gray-50 rounded-3xl border-2 border-dashed border-gray-200">
              <span className="text-7xl mb-6 block">📭</span>
              <h3 className="text-2xl font-black text-gray-900 mb-2 uppercase">Tidak ada artikel</h3>
              <p className="text-gray-500 font-medium">Coba pilih kategori lain atau lihat semua artikel.</p>
            </div>
          )}

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