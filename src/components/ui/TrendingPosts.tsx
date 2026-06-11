// components/ui/TrendingPosts.tsx
"use client";

import React from "react";
import Link from "next/link";
import { BlogPost } from "./BlogCardTwo";

interface TrendingPostsProps {
    posts?: BlogPost[];
    limit?: number; // how many posts to show
}

const TrendingPosts: React.FC<TrendingPostsProps> = ({ posts = [], limit = 4 }) => {
    // If no posts provided, return null or empty state
    if (posts.length === 0) return null;

    const trending = posts.slice(0, limit);

    return (
        <div
            className="lg:p-8 p-6 bg-gradient-to-b from-gray-50 to-white dark:bg-none dark:bg-gray-800 border border-gray-100 rounded-2xl shadow-sm"
            data-aos="zoom-in"
            data-aos-duration="300"
        >
            <div className="flex flex-col px-3 gap-3">
                <span className="text-[22px] text-gray-900 font-black mb-4 pb-1 uppercase tracking-tighter italic border-b border-gray-100">
                    Trending posts
                </span>

                {trending.map((post, idx) => (
                    <div key={idx} className="flex flex-col px-1 mb-4 last:mb-0">
                        <Link
                            href={`/${post.slug}`}
                            className="text-lg text-gray-900 font-bold mb-1 leading-snug hover:text-brand-blue transition-colors line-clamp-2"
                        >
                            {post.title}
                        </Link>
                        <div className="flex flex-row text-gray-500 text-xs font-bold uppercase tracking-widest mt-1">
                            <span>{post.date}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TrendingPosts;
