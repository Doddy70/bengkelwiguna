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

interface BlogCardTwoProps {
    post: BlogPost;
}

export default function BlogCardTwo({ post }: BlogCardTwoProps) {
    return (
        <Link
            href={`/${post.slug}`}
            className="border border-gray-200 rounded-xl overflow-hidden flex flex-col lg:flex-row hover:shadow-xs transition-shadow duration-300"
            data-aos="zoom-in"
        >
            <div className="lg:w-1/3 w-full">
                <div className="overflow-hidden h-full">
                    <Image
                        src={post.image}
                        alt={post.title}
                        width={300}
                        height={200}
                        className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                    />
                </div>
            </div>
            <div className="lg:w-2/3 w-full">
                <div className="p-4 h-full">
                    <div className="flex flex-col px-1">
                        <div className="flex flex-row text-gray-600 text-sm mb-2 font-medium">
                            <span>{post.date}</span>
                            <span className="mx-1">•</span>
                            <span>{post.readTime}</span>
                        </div>
                        <h2 className="text-xl text-gray-900 font-semibold mb-1 lg:pr-16 leading-snug">
                            {post.title}
                        </h2>
                        <p className="text-gray-600 font-medium text-[17px] mt-1 lg:pr-20 mb-2">
                            {post.excerpt}
                        </p>
                    </div>
                </div>
            </div>
        </Link>
    );
}
