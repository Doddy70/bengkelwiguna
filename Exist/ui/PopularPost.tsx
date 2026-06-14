// src/components/ui/PopularPost.tsx
"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { blogPosts, BlogPost } from "@/const/blogData";

const PopularPost: React.FC = () => {
    // You can filter or sort popular posts, for example take first 3 posts
    const popularPosts: BlogPost[] = blogPosts.slice(0, 3);

    return (
        <div className="popular-post">
            <div className="max-w-screen-xl mx-auto px-3 sm:px-6 md:px-14 lg:px-14 xl:px-18 2xl:px-3 lg:pb-24 pb-20">
                <div className="flex justify-center lg:mb-16 mb-10">
                    <h2 className="lg:text-5xl text-3xl font-semibold text-gray-900 mb-6">
                        Popular Posts
                    </h2>
                </div>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 relative font-dm">
                    {popularPosts.map((post) => (
                        <div
                            key={post.id}
                            className="flex aos-init aos-animate"
                            data-aos="zoom-in"
                            data-aos-delay="0"
                            data-aos-duration="300"
                        >
                            <Link
                                href={`/blog/${post.slug}`}
                                className="border border-gray-200 rounded-xl overflow-hidden font-sora flex flex-col hover:shadow-xs transition-shadow duration-300"
                            >
                                {/* Post Image */}
                                <div className="overflow-hidden">
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        width={500}
                                        height={300}
                                        className="w-full transition-transform duration-500 hover:scale-105"
                                        loading="lazy"
                                    />
                                </div>

                                {/* Post Content */}
                                <div className="flex flex-col p-4 bg-white overflow-hidden relative z-10">
                                    {/* Article Tags */}
                                    <div className="flex flex-row text-gray-600 text-sm mb-2">
                                        <span>{post.date}</span>
                                        <span className="mx-1">•</span>
                                        <span>{post.readTime}</span>
                                    </div>
                                    {/* Blog Title */}
                                    <h2 className="text-2xl text-gray-900 font-semibold mb-1">
                                        {post.title}
                                    </h2>
                                    {/* Author Info */}
                                    <div className="flex flex-row gap-3 mt-2 items-center">
                                        <Image
                                            src={post.authorAvatar}
                                            alt={post.author}
                                            width={40}
                                            height={40}
                                            className="w-10 h-10 rounded-full object-cover"
                                            loading="lazy"
                                        />
                                        <div className="flex flex-col">
                                            <span className="text-[15px] text-gray-900 font-medium leading-5">
                                                {post.author}
                                            </span>
                                            <span className="text-[13px] text-gray-600 font-normal leading-5">
                                                {post.authorPosition}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PopularPost;
