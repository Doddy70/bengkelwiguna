"use client";

import Image from "next/image";
import Link from "next/link";
import { Clock } from "lucide-react";

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

interface BlogCardTwoProps {
    post: BlogPost;
}

export default function BlogCardTwo({ post }: BlogCardTwoProps) {
    // Ensure the link is valid
    const fullHref = post.slug.startsWith('/') ? post.slug : `/${post.slug}`;

    return (
        <Link
            href={fullHref}
            className="group border border-gray-200 rounded-2xl overflow-hidden flex flex-col lg:flex-row hover:shadow-xl transition-all duration-500 bg-white"
            data-aos="zoom-in"
        >
            <div className="lg:w-2/5 w-full overflow-hidden relative aspect-video lg:aspect-auto">
                <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
            </div>
            <div className="lg:w-3/5 w-full">
                <div className="p-6 lg:p-8 h-full flex flex-col justify-center">
                    <div className="flex flex-col">
                        <div className="flex flex-row text-gray-500 text-xs font-bold uppercase tracking-widest mb-3">
                            <Clock size={14} className="mr-2" />
                            <span>{post.date}</span>
                            <span className="mx-2 text-brand-gold">•</span>
                            <span>{post.readTime}</span>
                        </div>
                        <h2 className="text-xl lg:text-2xl text-gray-900 font-black mb-3 leading-snug group-hover:text-brand-blue transition-colors italic tracking-tighter uppercase">
                            {post.title}
                        </h2>
                        <p className="text-gray-600 font-medium text-[16px] leading-relaxed line-clamp-2 mb-4">
                            {post.excerpt}
                        </p>
                        
                        <div className="flex items-center gap-3 mt-2">
                            <Image 
                                src={post.authorAvatar} 
                                alt={post.author} 
                                width={32} 
                                height={32} 
                                className="rounded-full border border-gray-100"
                            />
                            <span className="text-sm font-bold text-gray-900 tracking-tight">{post.author}</span>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
}
