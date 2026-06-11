// components/NewsletterCTA.tsx
"use client";

import React from "react";
import { Facebook, Linkedin, Twitch, Twitter } from "react-feather";

interface NewsletterCTAProps {
    layout?: "full" | "half";
}

const NewsletterCTA: React.FC<NewsletterCTAProps> = ({ layout = "full" }) => {
    // Interchange: now "half" is full-width with overlay, "full" is compact
    const isHalfLayout = layout === "half";

    return (
        <section className={`relative ${isHalfLayout ? "" : "lg:mx-20"}`}>
            {/* Background half overlay for "half" layout */}
            {isHalfLayout && <div className="bg-gray-900 absolute h-1/2 bottom-0 left-0 w-full" />}

            <div className={`${isHalfLayout ? "max-w-screen-xl mx-auto px-3 sm:px-6 md:px-14 lg:px-14 xl:px-18 2xl:px-3 relative z-10" : ""}`}>
                <div
                    className={`${isHalfLayout
                            ? "rounded-2xl bg-home-five-cta lg:py-20 py-14"
                            : "md:rounded-2xl bg-home-five-cta lg:py-24 py-14"
                        }`}
                >
                    {/* Text section */}
                    <div
                        className={`${isHalfLayout
                                ? "flex flex-col items-center text-center xl:w-1/2 lg:w-2/3 w-2/3 mx-auto"
                                : "flex flex-col items-center text-center xl:w-5/12 lg:w-2/3 w-2/3 mx-auto"
                            }`}
                    >
                        <h2
                            className="lg:text-5xl md:text-4xl text-3xl font-medium tracking-tighter text-white mb-4"
                            data-aos="fade-up"
                            data-aos-duration="200"
                        >
                            Customers who rely on our expertise — honest review.
                        </h2>
                        <p
                            className="text-white/80 text-lg font-normal max-w-xl lg:px-4 px-0"
                            data-aos="fade-up"
                            data-aos-duration="300"
                        >
                            Whether youre building a startup landing page, a dashboard interface, or a modern web app gives you full control.
                        </p>
                    </div>

                    {/* Subscribe form */}
                    <div
                        className={`${isHalfLayout
                                ? "flex flex-col sm:flex-row gap-3 mt-6 mb-4 justify-center xl:w-1/3 lg:w-2/3 w-2/3 mx-auto"
                                : "flex flex-col sm:flex-row gap-3 mt-6 mb-4 justify-center xl:w-3/12 lg:w-2/3 w-2/3 mx-auto"
                            }`}
                    >
                        <input
                            type="email"
                            placeholder="Enter email address."
                            className="flex-1 px-4 py-3 rounded-md text-gray-900 text-md w-full focus:outline-none bg-white"
                        />
                        <button className="bg-lime-300 hover:bg-lime-400 text-gray-900 px-6 py-4 rounded-md transition font-medium">
                            Subscribe
                        </button>
                    </div>

                    {/* Social icons */}
                    <div className="flex items-center gap-3 justify-center mt-3">
                        <p className="text-gray-400 text-base">Follow us:</p>
                        <ul className="flex gap-4 ml-2">
                            <li>
                                <a href="#" aria-label="facebook" className="text-gray-300 hover:text-white transition">
                                    <Facebook size={20} />
                                </a>
                            </li>
                            <li>
                                <a href="#" aria-label="linkedin" className="text-gray-300 hover:text-white transition">
                                    <Linkedin size={20} />
                                </a>
                            </li>
                            <li>
                                <a href="#" aria-label="twitch" className="text-gray-300 hover:text-white transition">
                                    <Twitch size={20} />
                                </a>
                            </li>
                            <li>
                                <a href="#" aria-label="twitter" className="text-gray-300 hover:text-white transition">
                                    <Twitter size={20} />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NewsletterCTA;
