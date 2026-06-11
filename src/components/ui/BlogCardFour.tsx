"use client";

import Image from "next/image";
import Link from "next/link";

export interface BlogPost {
    slug: string;
    image: string;
    title: string;
    author: string;
    authorAvatar: string;
    authorPosition: string;
}

interface BlogCardFourProps {
    post: BlogPost;
    aosDelay?: number | string;
    aosDuration?: number | string;
}

export default function BlogCardFour({
    post,
    aosDelay = 0,
    aosDuration = 300,
}: BlogCardFourProps) {
    return (
        <div
            className="w-full"
            data-aos="zoom-in"
            data-aos-delay={aosDelay}
            data-aos-duration={aosDuration}
        >
            <Link
                href={`/${post.slug}`}
                className="border border-gray-200 rounded-xl overflow-hidden flex flex-col shadow-lg hover:shadow-xl h-full min-h-[440px] transition-shadow duration-300"
                data-aos="zoom-in"
            >
                <div className="relative overflow-hidden h-full">
                    <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        loading="lazy"
                        className="object-cover transition-transform duration-500 hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />

                    <div className="absolute bottom-0 left-0 w-full z-10 flex flex-col p-4 bg-gradient-to-t from-black/70 via-black/40 to-transparent">
                        <h2 className="text-2xl text-gray-100 font-semibold mb-1">
                            {post.title}
                        </h2>
                        <div className="flex flex-row items-center gap-3 mt-2">
                            <Image
                                src={post.authorAvatar}
                                alt={post.author}
                                width={40}
                                height={40}
                                loading="lazy"
                                className="w-10 h-10 rounded-full object-cover"
                            />
                            <div className="flex flex-col">
                                <span className="text-base text-white font-medium">
                                    {post.author}
                                </span>
                                <span className="text-sm font-medium text-gray-200">
                                    {post.authorPosition}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
}
