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

interface BlogCardThreeProps {
    post: BlogPost;
}

export default function BlogCardThree({ post }: BlogCardThreeProps) {
    return (
        <Link
            href={`/${post.slug}`}
            className="border border-gray-200 rounded-xl overflow-hidden flex flex-col hover:shadow-xs transition-shadow duration-300"
            data-aos="zoom-in"
        >
            <div className="overflow-hidden">
                <Image
                    src={post.image}
                    alt={post.title}
                    width={500}
                    height={300}
                    className="w-full transition-transform duration-500 hover:scale-105"
                />
            </div>
            <div className="flex flex-col p-4 bg-white">
                <div className="flex flex-row text-gray-600 text-sm mb-2">
                    <span>{post.date}</span>
                    <span className="mx-1">•</span>
                    <span>{post.readTime}</span>
                </div>
                <h2 className="text-2xl text-gray-900 font-semibold mb-1">
                    {post.title}
                </h2>
                <div className="flex flex-row gap-3 mt-2 items-center">
                    <Image
                        src={post.authorAvatar}
                        alt={post.author}
                        width={40}
                        height={40}
                        className="w-10 h-10 rounded-full object-cover"
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
    );
}
