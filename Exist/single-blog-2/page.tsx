// app/blog/single-blog/page.tsx
import Image from "next/image";
import React from "react";
import PopularPost from "@/components/ui/PopularPost";

import Subscribe from "@/components/ui/Subscribe";
import AuthorBio from "@/components/ui/AuthorBio";
import TrendingPosts from "@/components/ui/TrendingPosts";

const SingleBlogPage = () => {
    return (
        <>
        <div className="blog-wrap font-dm">
            <div className="max-w-screen-xl mx-auto px-3 sm:px-6 md:px-14 lg:px-14 xl:px-18 2xl:px-3 lg:pb-24 pb-20 justify-center">
                <div className="blog-title bg-light-blue-banner lg:pt-20 pt-14 font-dm">
                    {/* Post Title */}
                    <div className="lg:w-8/12 text-center pb-12 mx-auto lg:pt-20 pt-14">
                        <div className="flex justify-center mb-3">
                            <div className="px-3 py-1 border border-gray-200 rounded-lg text-xs font-semibold uppercase text-gray-900 bg-white shadow-sm flex items-center gap-2 w-auto" data-aos="zoom-in" data-aos-delay="0" data-aos-duration="400">
                                Business
                            </div>
                        </div>
                        <h2 className="text-3xl md:text-5xl text-gray-900 font-semibold mb-1 md:mb-2" data-aos="fade-up" data-aos-duration="400" data-aos-delay="0">
                            The Role of AI in Revolutionizing Customer Service Across Industries
                        </h2>
                        <p className="text-gray-800 font-medium text-base mb-0" data-aos="fade-up" data-aos-duration="400" data-aos-delay="100">
                            More balanced you — and works tirelessly to help you get there.
                        </p>
                    </div>
                </div>

                {/* Post Image */}
                <div className="lg:w-11/12 justify-center pb-14 mx-auto" data-aos="fade-up" data-aos-duration="400" data-delay="0">
                    <Image src="/images/blog-single.svg" alt="banner" width={1200} height={600} className="object-cover w-full rounded-xl" />
                </div>

                {/* Post Content */}
                <div className="lg:w-11/12 prose dark:prose-invert mx-auto">
                    <div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-8 gap-6 relative lg:space-y-0 space-y-6 font-dm">
                        <div className="col-span-2">
                            <h2 className="text-2xl md:text-3xl text-gray-900 font-semibold mb-2">Solutions designed for every business journey.</h2>
                            <p className="text-gray-800 font-medium text-[17px] leading-7">Gen financial habits are vastly different from those of previous generations. They expect:</p>
                            <ul className="list-disc pl-5 mb-3 py-5 text-gray-800 font-medium text-[17px] leading-7">
                                <li>Real-time access to their money</li>
                                <li>Intuitive user experiences</li>
                                <li>Ethical, inclusive financial products</li>
                            </ul>
                            <p className="text-gray-800 font-medium text-[17px] leading-7 mb-3">Fintech startups are rising to meet these expectations by offering tools that go beyond traditional banking. Going through this checklist will ensure that your content covers multiple angles, making it richer and more inclusive. This approach prevents your content from feeling one-dimensional or narrowly focused—allowing it to resonate with a broader and more diverse audience.</p>
                            <div className="my-5">
                                <Image src="/images/blog-l.svg" alt="banner" width={1200} height={600} className="object-cover w-full rounded-xl my-4" />
                            </div>
                            <h2 className="text-2xl md:text-3xl text-gray-900 font-semibold mt-4 mb-2">Key Features in Modern Fintech Apps</h2>
                            <p className="text-gray-800 font-medium text-[17px] leading-7">The best fintech apps for Gen Z usually include:</p>
                            <ul className="list-disc pl-5 mb-3 py-5 text-gray-800 font-medium text-[17px] leading-7">
                                <li><strong>Automated budgeting</strong>: Apps that track spending and categorize expenses in real-time.</li>
                                <li><strong>Round-up savings</strong>: Tools that round up purchases and stash the spare change.</li>
                                <li><strong>Crypto integration</strong>: Support for buying, storing, and learning about cryptocurrency.</li>
                                <li><strong>Social accountability</strong>: Features that let users set goals and share progress with friends.</li>
                            </ul>
                            <h2 className="text-2xl md:text-3xl text-gray-900 font-semibold mt-4 mb-2">Spotlight: Top Fintech Startups to Watch</h2>
                            <p className="text-gray-800 font-medium text-[17px] leading-7">Here are a few standout startups:</p>
                            <ul className="list-disc pl-5 mb-3 py-5 text-gray-800 font-medium text-[17px] leading-7">
                                <li><strong>Zeno</strong>: Offers micro-investment opportunities tailored for college students.</li>
                                <li><strong>BrightCard</strong>: A debit card with automatic savings and spend-limit controls.</li>
                                <li><strong>Finly</strong>: Combines personal finance education with gamified savings challenges.</li>
                            </ul>
                            <blockquote className="bg-gray-800 lg:p-12 p-8 rounded-xl my-5">
                                <p className="text-white font-medium text-2xl leading-snug lg:pr-6">“We wanted to make managing money feel like a conversation, not a chore.”</p>
                                <span className="block mt-2 text-sm text-gray-300 font-medium">— Co-founder of BrightCard</span>
                            </blockquote>
                            <h2 className="text-2xl md:text-3xl text-gray-900 font-semibold mt-4 mb-2">The Future of Personal Finance</h2>
                            <p className="text-gray-800 font-medium text-[17px] leading-7 mb-2">With AI and machine learning, fintech will continue to evolve. Expect:</p>
                            <ul className="list-disc pl-5 mb-3 text-gray-800 font-medium text-[17px] leading-7 py-5">
                                <li>Hyper-personalized recommendations</li>
                                <li>Predictive budgeting insights</li>
                                <li>Integration with mental wellness tools</li>
                            </ul>
                            <p className="text-gray-800 font-medium text-[17px] leading-7">Gen Z isn’t just using fintech — they’re helping build it.</p>
                            <p className="text-gray-800 font-medium text-[17px] leading-7">Going through this checklist will ensure that your content covers multiple angles, making it richer and more inclusive. This approach prevents your content from feeling one-dimensional or narrowly focused—allowing it to resonate with a broader and more diverse audience.</p>
                            <p className="text-gray-800 font-medium text-[17px] leading-7 mb-0">When diverse perspectives are incorporated, readers are more likely to see their own experiences reflected, creating a stronger emotional connection with the content.</p>
                        </div>
                        <div className="w-full space-y-6">
                            <Subscribe />
                            <AuthorBio />
                            <TrendingPosts />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <PopularPost />
        </>
    );
};

export default SingleBlogPage;
