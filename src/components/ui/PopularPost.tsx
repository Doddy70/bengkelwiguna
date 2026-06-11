// src/components/ui/PopularPost.tsx
"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { WPPost } from "@/types/wordpress";
import { formatDate, getFeaturedImage, stripHtml } from "@/lib/wordpress";
import { Icon } from "@iconify/react";

interface PopularPostProps {
    posts: WPPost[];
    title?: string;
}

const PopularPost: React.FC<PopularPostProps> = ({ posts = [], title = "Artikel Terpopuler" }) => {
    if (!posts || posts.length === 0) return null;

    return (
        <div className="popular-post bg-gray-50/50 border-t border-gray-100">
            <div className="max-w-screen-xl mx-auto px-3 sm:px-6 md:px-14 lg:px-14 xl:px-18 2xl:px-3 lg:py-24 py-16">
                <div className="flex flex-col items-center justify-center text-center lg:mb-16 mb-10">
                    <div className="w-12 h-1.5 bg-brand-gold brand-rounded mb-6"></div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 tracking-tighter uppercase italic">
                        {title}
                    </h2>
                </div>
                
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 relative">
                    {posts.map((post) => {
                        const featuredImg = getFeaturedImage(post) || "/images/service/service-oli.svg";
                        const postTitle = typeof post.title === "string" ? post.title : post.title?.rendered;
                        const excerpt = stripHtml(typeof post.excerpt === "string" ? post.excerpt : post.excerpt?.rendered);

                        return (
                            <div
                                key={post.id}
                                className="group"
                                data-aos="fade-up"
                            >
                                <Link
                                    href={`/blog/${post.slug}`}
                                    className="bg-white rounded-2xl overflow-hidden flex flex-col h-full hover:shadow-2xl hover:shadow-gray-200 transition-all duration-500 border border-gray-100"
                                >
                                    {/* Post Image */}
                                    <div className="relative aspect-[16/10] overflow-hidden">
                                        <Image
                                            src={featuredImg}
                                            alt={postTitle || "Blog Post"}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute top-4 left-4 z-20">
                                            <span className="bg-brand-blue text-white text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-lg shadow-lg">
                                                Otomotif
                                            </span>
                                        </div>
                                    </div>

                                    {/* Post Content */}
                                    <div className="flex flex-col p-6 flex-grow">
                                        <div className="flex items-center gap-2 text-gray-400 text-[10px] font-bold uppercase tracking-wider mb-3">
                                            <Icon icon="solar:calendar-bold" width={14} className="text-brand-gold" />
                                            <span suppressHydrationWarning>{formatDate(post.date)}</span>
                                        </div>
                                        
                                        <h3 className="text-xl font-black text-gray-900 mb-3 leading-tight group-hover:text-brand-blue transition-colors line-clamp-2 italic">
                                            {postTitle}
                                        </h3>
                                        
                                        <p className="text-gray-500 text-sm font-medium line-clamp-2 mb-6">
                                            {excerpt}
                                        </p>

                                        <div className="mt-auto pt-6 border-t border-gray-50 flex items-center justify-between">
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-gray-100">
                                                    <Image 
                                                        src="/images/logo/wb-logo.png" 
                                                        alt="Author" 
                                                        width={32} 
                                                        height={32} 
                                                    />
                                                </div>
                                                <span className="text-xs font-bold text-gray-700 uppercase tracking-wide">
                                                    Wiguna Team
                                                </span>
                                            </div>
                                            <Icon icon="solar:arrow-right-up-linear" width={20} className="text-gray-300 group-hover:text-brand-blue group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default PopularPost;
