/**
 * Blog Archive Client Component — Bengkel Wiguna
 * Official 'Blog Three' Layout with dynamic WordPress integration
 */

"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, ArrowUpRight } from "lucide-react";
import { WPPost } from "@/types/wordpress";
import Subscribe from "@/components/ui/Subscribe";
import AuthorBio from "@/components/ui/AuthorBio";
import TrendingPosts from "@/components/ui/TrendingPosts";

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

  return (
        <>
            <div className="page-title bg-light-blue-banner lg:pt-24 pt-16">
                <div className="max-w-screen-xl mx-auto px-3 sm:px-6 md:px-14 lg:px-14 xl:px-18 2xl:px-3 lg:pt-24 pt-20">
                    <div className="grid xl:grid-cols-2 lg:grid-cols-3 grid-cols-1 lg:gap-10 relative lg:space-y-0 space-y-5">
                        <div className="lg:col-span-2 xl:col-span-1">
                            <h2 className="lg:text-7xl md:text-5xl text-4xl text-gray-900 font-bold mb-13 lg:mb-2 tracking-tight">Berita, tips dan panduan</h2>
                            <p className="text-lg mt-3 mb-0 text-gray-800 font-medium">Informasi terkini seputar perawatan dan perbaikan kendaraan Anda.</p>
                        </div>
                        <div className="w-full lg:text-right flex lg:justify-end">
                            <div className="relative w-auto inline-block mt-auto">
                                <select
                                    value={selectedCategory}
                                    onChange={(e) => setSelectedCategory(e.target.value)}
                                    className="w-auto text-base font-medium px-5 py-3 appearance-none pr-12 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition duration-300 bg-white"
                                    aria-label="Pilih kategori"
                                >
                                    <option value="">Semua Kategori</option>
                                    {categories.map((cat) => (
                                        <option key={cat.id} value={cat.slug}>{cat.name}</option>
                                    ))}
                                </select>
                                <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 flex items-center">
                                    <ChevronDown size={20} className="text-gray-500" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:my-10 my-6 border-t border-gray-200"></div>
                </div>
            </div>

            <div className="blog-wrap font-dm">
                <div className="max-w-screen-xl mx-auto px-3 sm:px-6 md:px-14 lg:px-14 xl:px-18 2xl:px-3 lg:pb-24 pb-20">
                    
                    {/* Top Grid */}
                    <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-6 relative lg:space-y-0 space-y-5">
                        {/* === Featured Post === */}
                        {featuredPost && (
                            <div className="w-full">
                                <Link
                                    href={`/blog/${featuredPost.slug}`}
                                    className="border border-gray-200 rounded-xl overflow-hidden flex flex-col hover:shadow-md transition-shadow duration-300 h-full bg-white group"
                                >
                                    <div className="overflow-hidden relative aspect-video">
                                        <Image
                                            src={featuredPost._embedded?.['wp:featuredmedia']?.[0]?.source_url || "/images/blog-default.jpg"}
                                            alt={getRenderedTitle(featuredPost)}
                                            fill
                                            className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                    </div>
                                    <div className="p-4 flex-grow flex flex-col">
                                        <div className="flex flex-col px-1 flex-grow">
                                            <div className="flex flex-row text-gray-600 text-sm mb-2 font-medium">
                                                <span>{formatDate(featuredPost.date)}</span>
                                                <span className="mx-1">•</span>
                                                <span>5 min read</span>
                                            </div>
                                            <h2 className="lg:text-3xl text-2xl text-gray-900 font-semibold mb-1 leading-snug group-hover:text-blue-600 transition-colors">
                                                {getRenderedTitle(featuredPost)}
                                            </h2>
                                            <p className="text-gray-700 font-medium mt-1 lg:pr-20 text-[17px] line-clamp-3">
                                                {getRenderedExcerpt(featuredPost)}
                                            </p>
                                            <div className="flex flex-row gap-3 mt-auto pt-6 items-center">
                                                <Image
                                                    src="/images/logo/wb-logo.png"
                                                    alt="Bengkel Wiguna"
                                                    width={44}
                                                    height={44}
                                                    className="w-11 h-11 rounded-full object-cover border border-gray-100"
                                                />
                                                <div className="flex flex-col">
                                                    <span className="text-base text-gray-900 font-medium leading-5">
                                                        Tim Bengkel Wiguna
                                                    </span>
                                                    <span className="text-sm text-gray-600 font-medium leading-5">
                                                        Editorial Team
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        )}

                        {/* === Side Posts === */}
                        <div className="w-full flex flex-col gap-6">
                            {sidePosts.map((post) => (
                                <div key={post.id} className="article flex-1">
                                    <Link
                                        href={`/blog/${post.slug}`}
                                        className="border border-gray-200 rounded-xl overflow-hidden flex flex-col lg:flex-row hover:shadow-md transition-shadow duration-300 h-full bg-white group"
                                    >
                                        <div className="lg:w-1/3 w-full shrink-0">
                                            <div className="overflow-hidden h-48 lg:h-full relative">
                                                <Image
                                                    src={post._embedded?.['wp:featuredmedia']?.[0]?.source_url || "/images/blog-default.jpg"}
                                                    alt={getRenderedTitle(post)}
                                                    fill
                                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                                />
                                            </div>
                                        </div>
                                        <div className="lg:w-2/3 w-full">
                                            <div className="p-4 h-full flex flex-col justify-center">
                                                <div className="flex flex-col px-1">
                                                    <div className="flex flex-row text-gray-600 text-sm mb-2 font-medium">
                                                        <span>{formatDate(post.date)}</span>
                                                        <span className="mx-1">•</span>
                                                        <span>5 min read</span>
                                                    </div>
                                                    <h2 className="text-xl text-gray-900 font-semibold mb-1 lg:pr-16 leading-snug line-clamp-2 group-hover:text-blue-600 transition-colors">
                                                        {getRenderedTitle(post)}
                                                    </h2>
                                                    <p className="text-gray-600 font-medium text-[17px] mt-1 lg:pr-20 mb-2 line-clamp-2">
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

                    {/* === Bottom Section Divider === */}
                    <div className="flex flex-col items-center text-center xl:w-5/12 lg:w-2/3 mx-auto lg:py-20 py-12">
                        <h2 className="lg:text-5xl md:text-4xl text-3xl font-semibold tracking-tighter text-gray-900 mb-4">
                            Kumpulan artikel & panduan terbaru
                        </h2>
                        <p className="text-gray-600 text-lg font-medium max-w-xl">
                            Solusi perawatan kendaraan yang membuat mobil Anda selalu dalam kondisi prima.
                        </p>
                    </div>

                    {/* === Bottom Blog Grid === */}
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-6 relative lg:space-y-0 space-y-5">
                        <div className="w-full col-span-2">
                            <div className="grid grid-cols-1 lg:gap-6 relative lg:space-y-0 space-y-5 font-dm">
                                {bottomPosts.map((post) => (
                                    <div key={post.id} className="w-full mb-2">
                                        <Link
                                            href={`/blog/${post.slug}`}
                                            className="flex flex-col md:flex-row gap-4 group"
                                        >
                                            <div className="md:w-5/12 shrink-0">
                                                <div className="overflow-hidden rounded-xl aspect-video md:aspect-auto md:h-full relative">
                                                    <Image
                                                        src={post._embedded?.['wp:featuredmedia']?.[0]?.source_url || "/images/blog-default.jpg"}
                                                        alt={getRenderedTitle(post)}
                                                        fill
                                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                                    />
                                                </div>
                                            </div>
                                            <div className="md:w-7/12">
                                                <div className="flex flex-col p-4 pt-0 bg-transparent pr-6">
                                                    <div className="flex flex-row text-gray-600 text-sm mb-2 font-medium">
                                                        <span>{formatDate(post.date)}</span>
                                                        <span className="mx-1">•</span>
                                                        <span>5 min read</span>
                                                    </div>
                                                    <h2 className="text-2xl md:text-3xl text-gray-900 font-semibold mb-1 group-hover:text-blue-600 transition-colors leading-snug">
                                                        {getRenderedTitle(post)}
                                                    </h2>
                                                    <p className="text-gray-600 font-medium text-[17px] mt-1 lg:pr-20 mb-2 line-clamp-3"> 
                                                        {getRenderedExcerpt(post)} 
                                                    </p>
                                                    <div className="flex flex-row gap-3 mt-4 items-center">
                                                        <Image
                                                            src="/images/logo/wb-logo.png"
                                                            alt="Bengkel Wiguna"
                                                            width={40}
                                                            height={40}
                                                            className="w-10 h-10 rounded-full object-cover border border-gray-100"
                                                        />
                                                        <div className="flex flex-col">
                                                            <span className="text-[15px] text-gray-900 font-medium leading-5">
                                                                Tim Bengkel Wiguna
                                                            </span>
                                                            <span className="text-[13px] text-gray-600 font-normal leading-5">
                                                                Editorial Team
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>                                        
                                    </div>
                                ))}

                                {bottomPosts.length === 0 && (
                                    <div className="text-center py-20 bg-gray-50 rounded-xl border border-dashed border-gray-200">
                                        <h3 className="text-xl font-bold text-gray-500">Tidak ada artikel lagi.</h3>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Sidebar Components */}
                        <div className="w-full space-y-6">
                            <Subscribe />
                            <AuthorBio />
                            <TrendingPosts posts={posts.slice(0,4).map(p => ({
                                slug: `/blog/${p.slug}`,
                                image: p._embedded?.['wp:featuredmedia']?.[0]?.source_url || "/images/blog-default.jpg",
                                title: getRenderedTitle(p),
                                date: formatDate(p.date),
                                readTime: "5 min",
                                excerpt: getRenderedExcerpt(p),
                                author: "Bengkel Wiguna",
                                authorAvatar: "/images/logo/wb-logo.png",
                                authorPosition: "Editorial"
                            }))} />
                        </div>
                    </div>

                    {/* Load More */}
                    {filteredPosts.length >= 10 && (
                        <div className="flex text-center justify-center mt-10">
                            <button className="inline-flex items-center justify-center gap-2 px-7 py-3 text-white text-base font-medium bg-gray-900 hover:bg-gray-700 rounded-lg transition duration-300 shadow-md">
                                <span>Muat lebih banyak</span>
                                <ArrowUpRight size={20} className="text-white" />
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </>
  );
}