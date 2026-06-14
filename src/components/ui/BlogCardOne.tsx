"use client";

import Image from "next/image";
import Link from "next/link";

export interface BlogPost {
    slug: string;
    image: string;
    title: string;
    date: string;
    readTime: string;
    excerpt: string;
    author: string;
    authorAvatar: string;
    authorPosition: string;
}

interface BlogCardOneProps {
    post: BlogPost;
    index?: number;
}

export default function BlogCardOne({ post, index = 0 }: BlogCardOneProps) {
    return (
        <Link
            href={`/${post.slug}`}
            className="group relative bg-[#141415] border border-[#494453] rounded-xl overflow-hidden
                       hover:border-[#5E6AD2] hover:shadow-[0_8px_30px_rgba(94,106,210,0.15)]
                       transition-all duration-300 ease-out"
            data-aos="zoom-in"
        >
            {/* Image Container with Framer-style overlay */}
            <div className="overflow-hidden relative" style={{ aspectRatio: '16/10' }}>
                <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    loading="lazy"
                    quality={80}
                />
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent
                                opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Content Container */}
            <div className="p-5">
                <div className="flex flex-col">
                    {/* Meta info - Framer style */}
                    <div className="flex flex-row items-center gap-2 mb-3">
                        <span className="text-[#D1CFD0] text-sm font-medium">{post.date}</span>
                        <span className="w-1 h-1 rounded-full bg-[#494453]" />
                        <span className="text-[#D1CFD0] text-sm font-medium">{post.readTime}</span>
                    </div>

                    {/* Title - Inter 700 */}
                    <h2 className="text-[#F8F8F1] text-xl font-bold leading-tight mb-2 line-clamp-2
                                   group-hover:text-[#5E6AD2] transition-colors duration-200">
                        {post.title}
                    </h2>

                    {/* Excerpt - Inter 500 */}
                    <p className="text-[#89786E] text-base font-medium leading-relaxed line-clamp-3 mb-4">
                        {post.excerpt}
                    </p>

                    {/* Author Section */}
                    <div className="flex flex-row gap-3 items-center pt-3 border-t border-[#494453]/50">
                        <div className="relative">
                            <Image
                                src={post.authorAvatar}
                                alt={post.author}
                                width={40}
                                height={40}
                                className="w-10 h-10 rounded-full object-cover ring-2 ring-[#494453]
                                           group-hover:ring-[#5E6AD2] transition-all duration-300"
                                loading="lazy"
                            />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-[#F8F8F1] text-sm font-semibold leading-tight">
                                {post.author}
                            </span>
                            <span className="text-[#D1CFD0] text-xs font-medium leading-tight">
                                {post.authorPosition}
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Focus ring for accessibility */}
            <div className="absolute inset-0 rounded-xl ring-2 ring-[#5E6AD2] ring-offset-2 ring-offset-[#141415]
                            opacity-0 focus-within:opacity-100 transition-opacity duration-200 pointer-events-none" />
        </Link>
    );
}