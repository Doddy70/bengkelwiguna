"use client";

import React from "react";
import Image from "next/image";

const HeroNine: React.FC = () => {
    return (
        <section className="banner-wrap relative flex flex-col items-center justify-center overflow-hidden h-auto lg:py-0 py-12 bg-home-nine-hero ">
            <div className="max-w-screen-xl w-full px-3 sm:px-6 md:px-14 lg:px-14 xl:px-18 2xl:px-3 flex flex-col justify-center relative z-10">
                {/* Text Content */}
                <div className="xl:w-11/12 w-full lg:pt-20 pt-12">
                    <div className="w-full">
                        <div className="flex flex-col mb-3 mt-auto justify-center text-center">
                            {/* News Badge */}
                            <div>
                                <span
                                    className="inline-block py-1 pl-1 pr-3 rounded-full border border-gray-200 bg-white text-sm lg:inline-block text-gray-900 font-medium shadow-sm aos-init aos-animate"
                                    data-aos="fade-up"
                                    data-aos-duration="200"
                                >
                                    <span className="inline-block px-3 rounded-full bg-[#0A3470] text-white font-normal mr-2 leading-7">
                                        NEWS
                                    </span>
                                    Submit referrals online start now.
                                </span>
                            </div>

                            {/* Heading */}
                            <h1 className="text-blue-900 dark:text-blue-400 text-center font-normal 2xl:text-7xl lg:text-6xl md:text-5xl text-4xl mt-2 mb-1 py-3">
                                Accelerate workflow — draft contracts 10x faster grow
                            </h1>

                            {/* Description */}
                            <p
                                className="text-gray-800 text-lg font-normal text-center aos-init aos-animate"
                                data-aos="fade-up"
                                data-aos-duration="400"
                                data-aos-delay="200"
                            >
                                When you join our journey, you are choosing a partner who
                                believes in a healthier more balanced you.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Email Form */}
                <div className="xl:w-4/12 w-full lg:pb-20 pb-12 mx-auto">
                    <div className="flex flex-col sm:flex-row gap-3 mt-6">
                        <input
                            type="email"
                            placeholder="Enter email address."
                            className="flex-1 px-4 py-3 rounded-md bg-white text-gray-900 text-sm w-full border border-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-800"
                        />
                        <button className="bg-blue-800 hover:bg-blue-900 text-white px-6 py-3 rounded-md transition">
                            Subscribe
                        </button>
                    </div>
                </div>

                {/* Hero Image */}
                <div className="xl:w-11/12 w-full mx-auto">
                    <Image
                        src="/images/home-9-admin.svg"
                        alt="admin"
                        width={1200}
                        height={700}
                        className="rounded-lg shadow-sm overflow-hidden"
                        priority
                    />
                </div>
            </div>
        </section>
    );
};

export default HeroNine;
