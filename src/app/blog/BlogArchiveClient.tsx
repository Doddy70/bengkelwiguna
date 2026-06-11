/**
 * Blog Archive Client Component — Bengkel Wiguna
 * Template: Blog Three adapted for WordPress posts
 */

"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ChevronDown, Clock } from "lucide-react";
import { WPPost } from "@/types/wordpress";

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
    return rawExcerpt.replace(/<[^>]*>/g, '');
  };

  // Filter and sort posts
  const filteredPosts = useMemo(() => {
    let result = [...posts];

    // Filter by category (if posts have categories in _embedded)
    if (selectedCategory) {
      result = result.filter((post: any) => {
        const postCategories = post._embedded?.['wp:term']?.[0] || [];
        return postCategories.some((cat: any) => cat.name === selectedCategory);
      });
    }

    // Sort
    switch (sortBy) {
      case "newest":
        result.sort((a: any, b: any) => new Date(b.date).getTime() - new Date(a.date).getTime());
        break;
      case "oldest":
        result.sort((a: any, b: any) => new Date(a.date).getTime() - new Date(b.date).getTime());
        break;
    }

    return result;
  }, [posts, selectedCategory, sortBy]);

  // Featured post (latest)
  const featuredPost = filteredPosts[0];
  const sidePosts = filteredPosts.slice(1, 4);
  const gridPosts = filteredPosts.slice(4);

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('id-ID', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  return (
    <>
      {/* Page Title Section */}
      <div className="bg-gradient-to-r from-[#050b14] to-[#224297] lg:pt-32 pt-24 pb-8">
        <div className="max-w-screen-xl mx-auto px-3 sm:px-6 md:px-14 lg:px-14 xl:px-18 2xl:px-3">
          <div className="grid xl:grid-cols-2 lg:grid-cols-3 grid-cols-1 lg:gap-10 relative lg:space-y-0 space-y-5">
            <div className="lg:col-span-2 xl:col-span-1">
              <h2 className="lg:text-6xl md:text-5xl text-4xl text-white font-bold mb-4 tracking-tight">
                Tips & Artikel Otomotif
              </h2>
              <p className="text-lg mt-3 mb-0 text-white/80 font-medium">
                Edukasi seputar perawatan dan perkembangan dunia otomotif dari tim teknisi berpengalaman.
              </p>
            </div>

            {/* Category Filter */}
            <div className="lg:text-right flex lg:justify-end">
              <div className="relative inline-block">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-auto text-base font-medium px-5 py-3 appearance-none pr-12 border border-white/30 bg-white/10 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ffd900] transition duration-300 cursor-pointer"
                  aria-label="Filter kategori"
                >
                  <option value="" className="text-gray-900">Semua Kategori</option>
                  {categories.map((cat) => (
                    <option key={cat} value={cat} className="text-gray-900">{cat}</option>
                  ))}
                </select>

                <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 flex items-center">
                  <ChevronDown size={20} className="text-white" />
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:my-10 my-6 border-t border-white/20"></div>
        </div>
      </div>

      {/* Blog Content */}
      <div className="blog-wrap font-dm">
        <div className="max-w-screen-xl mx-auto px-3 sm:px-6 md:px-14 lg:px-14 xl:px-18 2xl:px-3 lg:pb-24 pb-20">
          {/* Featured + Side Posts Grid */}
          <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-6 relative lg:space-y-0 space-y-5">

            {/* Featured Post */}
            {featuredPost && (
              <div className="w-full" data-aos="fade-up">
                <Link
                  href={`/blog/${featuredPost.slug}`}
                  className="border border-gray-200 rounded-xl overflow-hidden flex flex-col hover:shadow-lg transition-shadow duration-300 bg-white"
                >
                  <div className="overflow-hidden">
                    <Image
                      src={featuredPost._embedded?.['wp:featuredmedia']?.[0]?.source_url || "/images/blog-default.jpg"}
                      alt={getRenderedTitle(featuredPost)}
                      width={800}
                      height={500}
                      className="w-full transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex flex-col px-1">
                      <div className="flex flex-row text-gray-500 text-sm mb-2 font-medium">
                        <Clock size={14} className="mr-1" />
                        <span>{formatDate(featuredPost.date)}</span>
                      </div>
                      <h2 className="lg:text-3xl text-2xl text-gray-900 font-bold mb-2 leading-snug">
                        {getRenderedTitle(featuredPost)}
                      </h2>
                      <p className="text-gray-600 font-medium text-[17px] line-clamp-2">
                        {getRenderedExcerpt(featuredPost)}
                      </p>
                      <div className="flex flex-row gap-3 mt-4 items-center">
                        <Image
                          src="/images/logo/wb-logo.png"
                          alt="Bengkel Wiguna"
                          width={44}
                          height={44}
                          className="w-11 h-11 rounded-full object-cover"
                        />
                        <div className="flex flex-col">
                          <span className="text-base text-gray-900 font-medium leading-5">
                            Tim Bengkel Wiguna
                          </span>
                          <span className="text-sm text-gray-500 font-medium leading-5">
                            Editorial Team
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            )}

            {/* Side Posts */}
            <div className="w-full space-y-6">
              {sidePosts.map((post: any) => (
                <div key={post.id} className="article" data-aos="fade-up">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="border border-gray-200 rounded-xl overflow-hidden flex flex-col lg:flex-row hover:shadow-lg transition-shadow duration-300 bg-white"
                  >
                    <div className="lg:w-1/3 w-full">
                      <div className="overflow-hidden h-full min-h-[150px]">
                        <Image
                          src={post._embedded?.['wp:featuredmedia']?.[0]?.source_url || "/images/blog-default.jpg"}
                          alt={getRenderedTitle(post)}
                          width={300}
                          height={200}
                          className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                        />
                      </div>
                    </div>
                    <div className="lg:w-2/3 w-full">
                      <div className="p-4 h-full">
                        <div className="flex flex-col px-1">
                          <div className="flex flex-row text-gray-500 text-sm mb-2 font-medium">
                            <Clock size={14} className="mr-1" />
                            <span>{formatDate(post.date)}</span>
                          </div>
                          <h2 className="text-xl text-gray-900 font-bold mb-1 lg:pr-16 leading-snug">
                            {getRenderedTitle(post)}
                          </h2>
                          <p className="text-gray-600 font-medium text-[17px] line-clamp-2">
                            {getRenderedExcerpt(post)}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Section Title */}
          <div className="flex flex-col items-center text-center xl:w-5/12 lg:w-2/3 mx-auto lg:py-20 py-12">
            <h2 className="lg:text-4xl md:text-3xl text-2xl font-bold text-gray-900 mb-4">
              Artikel Lainnya
            </h2>
            <p className="text-gray-600 text-lg font-medium max-w-xl">
              Temukan lebih banyak tips dan informasi bermanfaat seputar perawatan kendaraan Anda.
            </p>
          </div>

          {/* Bottom Blog Grid */}
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-6 relative lg:space-y-0 space-y-5">
            {gridPosts.map((post: any) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="w-full group"
                data-aos="zoom-in"
              >
                <div className="overflow-hidden rounded-xl mb-4">
                  <Image
                    src={post._embedded?.['wp:featuredmedia']?.[0]?.source_url || "/images/blog-default.jpg"}
                    alt={getRenderedTitle(post)}
                    width={500}
                    height={300}
                    className="w-full transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="bg-white p-4">
                  <div className="flex flex-row text-gray-500 text-sm mb-2">
                    <Clock size={14} className="mr-1" />
                    <span>{formatDate(post.date)}</span>
                  </div>
                  <h2 className="text-xl md:text-2xl text-gray-900 font-bold mb-2">
                    {getRenderedTitle(post)}
                  </h2>
                  <p className="text-gray-600 font-medium text-[17px] line-clamp-2 mb-3">
                    {getRenderedExcerpt(post)}
                  </p>
                  <div className="flex flex-row gap-3 mt-3 items-center">
                    <Image
                      src="/images/logo/wb-logo.png"
                      alt="Bengkel Wiguna"
                      width={40}
                      height={40}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div className="flex flex-col">
                      <span className="text-[15px] text-gray-900 font-medium leading-5">
                        Tim Bengkel Wiguna
                      </span>
                      <span className="text-[13px] text-gray-500">
                        Editorial Team
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Empty State */}
          {filteredPosts.length === 0 && (
            <div className="text-center py-16">
              <span className="text-6xl mb-4 block">📭</span>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Tidak ada artikel ditemukan</h3>
              <p className="text-gray-500">Coba pilih kategori lain atau lihat semua artikel.</p>
            </div>
          )}

          {/* Load More */}
          {filteredPosts.length >= 6 && (
            <div className="flex text-center justify-center mt-12">
              <button className="inline-flex items-center justify-center gap-2 px-7 py-3 text-white text-base font-medium bg-[#224297] hover:bg-[#1a3567] rounded-lg transition duration-300">
                <span>Lihat Lebih Banyak</span>
                <ArrowUpRight size={20} className="text-white" />
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  )
}