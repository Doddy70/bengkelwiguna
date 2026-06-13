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
            className="border border-gray-200 rounded-xl overflow-hidden flex flex-col hover:shadow-xs transition-shadow duration-300"
            data-aos="zoom-in"
        >
            {/* ✅ CLS PREVENTION: Explicit aspect ratio container */}
            <div className="overflow-hidden relative" style={{ aspectRatio: '16/10' }}>
                <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 hover:scale-105"
                    loading="lazy"
                    quality={75}
                />
            </div>
            <div className="p-4">
                <div className="flex flex-col px-1">
                    <div className="flex flex-row text-gray-600 text-sm mb-2 font-medium" suppressHydrationWarning>
                        <span>{post.date}</span>
                        <span className="mx-1">•</span>
                        <span>{post.readTime}</span>
                    </div>
                    <h2 className="lg:text-3xl text-2xl text-gray-900 font-semibold mb-1 leading-snug line-clamp-2">
                        {post.title}
                    </h2>
                    <p className="text-gray-700 font-medium mt-1 lg:pr-20 text-[17px] line-clamp-3">
                        {post.excerpt}
                    </p>
                    <div className="flex flex-row gap-3 mt-4 items-center">
                        <Image
                            src={post.authorAvatar}
                            alt={post.author}
                            width={44}
                            height={44}
                            className="w-11 h-11 rounded-full object-cover"
                            loading="lazy"
                        />
                        <div className="flex flex-col">
                            <span className="text-base text-gray-900 font-medium leading-5">
                                {post.author}
                            </span>
                            <span className="text-sm text-gray-600 font-medium leading-5">
                                {post.authorPosition}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
}