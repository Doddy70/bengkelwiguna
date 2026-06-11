"use client";
import { useState } from "react";
import { blogPosts } from "@/const/blogData";
import { ArrowUpRight, ChevronDown } from "react-feather";
import BlogCardOne from "@/components/ui/BlogCardOne";
import BlogCardTwo from "@/components/ui/BlogCardTwo";
import BlogCardThree from "@/components/ui/BlogCardThree";

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
                        {featuredPost && <BlogCardOne post={featuredPost} />}

                        {/* === Side Posts === */}
                        <div className="w-full space-y-6">
                            {sidePosts.map((post) => <BlogCardTwo key={post.id} post={post} />)}
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
                        {bottomPosts.map((post) => <BlogCardThree key={post.id} post={post} />)}
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
