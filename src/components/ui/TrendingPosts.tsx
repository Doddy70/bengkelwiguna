// components/ui/TrendingPosts.tsx
"use client";

import React from "react";
import Link from "next/link";
import { blogPosts, BlogPost } from "@/const/blogData";

interface TrendingPostsProps {
    limit?: number; // how many posts to show
}

const TrendingPosts: React.FC<TrendingPostsProps> = ({ limit = 4 }) => {
    // Take the first `limit` posts as trending (you can sort by date if you want)
    const trending: BlogPost[] = blogPosts.slice(0, limit);

    return (
        <div
            className="lg:p-8 p-6 bg-[linear-gradient(to_bottom,#e9ecef,#f8f9fa)] dark:bg-none dark:bg-gray-800 border border-gray-200 rounded-xl aos-init aos-animate"
            data-aos="zoom-in"
            data-aos-delay="0"
            data-aos-duration="300"
        >
            <div className="flex flex-col px-3 gap-3">
                <span className="text-[22px] text-gray-900 font-semibold mb-2 pb-1">
                    Trending posts
                </span>

                {trending.map((post) => (
                    <div key={post.id} className="flex flex-col px-1">
                        <Link
                            href={`/blog/${post.slug}`}
                            className="text-lg text-gray-900 font-semibold mb-1 leading-6"
                        >
                            {post.title}
                        </Link>
                        <div className="flex flex-row text-gray-600 text-sm mb-2 font-medium">
                            <span>{post.date}</span>
                            <span className="mx-1">•</span>
                            <span>{post.readTime}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TrendingPosts;
