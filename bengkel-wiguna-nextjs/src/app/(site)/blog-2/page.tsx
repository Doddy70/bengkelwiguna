"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/const/blogData";
import Subscribe from "@/components/ui/Subscribe";
import AuthorBio from "@/components/ui/AuthorBio";
import TrendingPosts from "@/components/ui/TrendingPosts";




import { ArrowUpRight, ChevronDown } from "react-feather";

export default function BlogPage() {
    const featuredPost = blogPosts.find((post) => post.featured);
    const sidePosts = blogPosts.filter((post) => !post.featured).slice(0, 3);
    const bottomPosts = blogPosts.filter((post) => !post.featured).slice(3);
    const [selected, setSelected] = useState("");

    return (
        <>
            <div className="page-title bg-light-blue-banner lg:pt-24 pt-16">
                <div className="max-w-screen-xl mx-auto px-3 sm:px-6 md:px-14 lg:px-14 xl:px-18 2xl:px-3 lg:pt-24 pt-20">
                    <div className="grid xl:grid-cols-2 lg:grid-cols-3 grid-cols-1 lg:gap-10 relative lg:space-y-0 space-y-5">
                        <div className="lg:col-span-2 xl:col-span-1">
                            <h2 className="lg:text-7xl md:text-5xl text-4xl text-gray-900 font-bold mb-13 lg:mb-2 tracking-tight">News, insights and more</h2>
                            <p className="text-lg mt-3 mb-0 text-gray-800 font-medium">Genuine feedback from those who know us best.</p>
                        </div>
                        <div className="w-full lg:text-right flex lg:justify-end">
                            <div
                                className="relative w-auto inline-block mt-auto"
                                data-aos="zoom-in"
                                data-aos-duration="400"
                                data-delay="00"
                            >
                                <select
                                    value={selected}
                                    onChange={(e) => setSelected(e.target.value)}
                                    className="w-auto text-base font-medium px-5 py-3 appearance-none pr-12 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition duration-300"
                                    aria-label="Select a categories"
                                >
                                    <option value="">Select a category</option>
                                    <option value="design">Design</option>
                                    <option value="marketing">Marketing</option>
                                    <option value="startup">Startup</option>
                                    <option value="saas">SaaS</option>
                                </select>

                                {/* Custom arrow */}
                                <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 flex items-center">
                                    <ChevronDown size={20} className="text-gray-500" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:my-10 my-6 border-t border-gray-200"></div>
                </div>
            </div>
            <div className="blog-wrap font-dm">
                <div className="max-w-screen-xl mx-auto px-3 sm:px-6 md:px-14 lg:px-14 xl:px-18 2xl:px-3 lg:pb-24 pb-20">
                    <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-6 relative lg:space-y-0 space-y-5">
                        {/* === Featured Post === */}
                        {featuredPost && (
                            <div className="w-full">
                                <Link
                                    href={`/${featuredPost.slug}`}
                                    className="border border-gray-200 rounded-xl overflow-hidden flex flex-col hover:shadow-xs transition-shadow duration-300"
                                >
                                    <div className="overflow-hidden">
                                        <Image
                                            src={featuredPost.image}
                                            alt={featuredPost.title}
                                            width={800}
                                            height={500}
                                            className="w-full transition-transform duration-500 hover:scale-105"
                                        />
                                    </div>
                                    <div className="p-4">
                                        <div className="flex flex-col px-1">
                                            <div className="flex flex-row text-gray-600 text-sm mb-2 font-medium">
                                                <span>{featuredPost.date}</span>
                                                <span className="mx-1">•</span>
                                                <span>{featuredPost.readTime}</span>
                                            </div>
                                            <h2 className="lg:text-3xl text-2xl text-gray-900 font-semibold mb-1 leading-snug">
                                                {featuredPost.title}
                                            </h2>
                                            <p className="text-gray-700 font-medium mt-1 lg:pr-20 text-[17px]">
                                                {featuredPost.excerpt}
                                            </p>
                                            <div className="flex flex-row gap-3 mt-4 items-center">
                                                <Image
                                                    src={featuredPost.authorAvatar}
                                                    alt={featuredPost.author}
                                                    width={44}
                                                    height={44}
                                                    className="w-11 h-11 rounded-full object-cover"
                                                />
                                                <div className="flex flex-col">
                                                    <span className="text-base text-gray-900 font-medium leading-5">
                                                        {featuredPost.author}
                                                    </span>
                                                    <span className="text-sm text-gray-600 font-medium leading-5">
                                                        {featuredPost.authorPosition}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        )}

                        {/* === Side Posts === */}
                        <div className="w-full space-y-6">
                            {sidePosts.map((post) => (
                                <div key={post.id} className="article" data-aos="fade-up">
                                    <Link
                                        href={`/${post.slug}`}
                                        className="border border-gray-200 rounded-xl overflow-hidden flex flex-col lg:flex-row hover:shadow-xs transition-shadow duration-300"
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
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* === Bottom Section === */}
                    <div className="flex flex-col items-center text-center xl:w-5/12 lg:w-2/3 mx-auto lg:py-20 py-12">
                        <h2 className="lg:text-5xl md:text-4xl text-3xl font-semibold tracking-tighter text-gray-900 mb-4">
                            Catch up on our newest blog and articles
                        </h2>
                        <p className="text-gray-600 text-lg font-medium max-w-xl">
                            Balanced you — and works tirelessly to help you get there.
                        </p>
                    </div>

                    {/* === Bottom Blog Grid === */}
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-6 relative lg:space-y-0 space-y-5">
                        <div className="w-full col-span-2">
                            <div className="grid md:grid-cols-2 grid-cols-1 lg:gap-6 gap-6 relative lg:space-y-0 space-y-5 font-dm">
                                {bottomPosts.map((post) => (
                                    <div key={post.id} className="flex" data-aos="zoom-in">
                                        <Link
                                            href={`/${post.slug}`}
                                            className="border border-gray-200 rounded-xl overflow-hidden flex flex-col hover:shadow-xs transition-shadow duration-300"
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
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="w-full space-y-6">
                            <Subscribe />
                            <AuthorBio />
                            <TrendingPosts limit={4} />
                        </div>
                    </div>

                    {/* Load More */}
                    <div className="flex text-center justify-center mt-10">
                        <button className="inline-flex items-center justify-center gap-2 px-7 py-3 text-white text-base font-medium bg-gray-900 hover:bg-gray-700 rounded-lg transition duration-300">
                            <span>Load more</span>
                            <ArrowUpRight size={20} className="text-white" />
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
