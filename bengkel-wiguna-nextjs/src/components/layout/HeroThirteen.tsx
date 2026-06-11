"use client";

import React from "react";
import Image from "next/image";
import brandsData from "@/data/brands.json"; // 👈 Import your JSON data
import { ArrowUpRight } from "react-feather";
import Button from "../ui/Button";


const HeroThirteen: React.FC = () => {
    const displayedBrands = brandsData.slice(0, 6);
    return (
        <div className="banner-wrap items-center justify-center relative flex overflow-hidden h-auto lg:pt-44 pt-28 pb-4 bg-home-thirteen-hero bg-no-repeat bg-bottom bg-cover bg-image-none">
            <div className="max-w-screen-xl w-full px-3 sm:px-6 md:px-14 lg:px-14 xl:px-18 2xl:px-3 flex flex-col justify-center relative z-10">
                {/* ⭐ Review Badge */}
                <div className="xl:w-10/12 w-full mx-auto text-center">
                    <div className="flex flex-row mb-3 mt-auto justify-center">
                        <div className="flex flex-row items-center gap-2 pt-1 pb-2 px-5 mx-auto rounded-full w-auto bg-white/35">
                            <div className="flex flex-row gap-1 items-center">
                                {[1, 2, 3, 4].map((_, i) => (
                                    <svg key={i} xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="text-orange-500" viewBox="0 0 16 16"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path></svg>
                                ))}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="18"
                                    height="18"
                                    fill="currentColor"
                                    className="bi bi-star-fill text-white"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                </svg>
                            </div>
                            <h5 className="text-white font-medium text-base pt-1">
                                4.5 <span className="text-white/70">(2.3k+ Reviews)</span>
                            </h5>
                        </div>
                    </div>

                    {/* Hero Heading */}
                    <h1
                        className="text-white font-extrabold uppercase 2xl:text-7xl lg:text-6xl md:text-5xl text-4xl mt-2 mb-3 py-3"
                        data-aos="fade-up"
                        data-aos-duration="400"
                        data-aos-delay="300"
                    >
                        Save time, gain clarity in every agreement
                    </h1>

                    <p
                        className="font-normal text-white/90 text-lg text-center"
                        data-aos="fade-up"
                        data-aos-duration="500"
                    >
                        Quizzes are working for them — and they can for you too.
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 mt-8 justify-center mx-auto">
                        <Button
                            label="Start trial for 14 days"
                            bgColor="bg-blue-800"
                            textColor="text-white"
                            icon={<ArrowUpRight size={20} />}
                            padding="py-4 px-6"
                            href="/pricing"
                        />
                        <Button
                            label="Explore more"
                            bgColor="bg-gray-900"
                            textColor="text-white"
                            icon={<ArrowUpRight size={20} />}
                            padding="py-4 px-6"
                            href="/about"
                        />
                    </div>
                </div>

                {/* 🎥 Video Section */}
                <div className="xl:w-9/12 w-full mx-auto lg:pt-20 pt-12">
                    <div className="video-wrap mx-auto flex rounded-xl shadow-lg border-[3px] border-blue-600 overflow-hidden">
                        <video
                            className="w-full rounded-xl"
                            preload="auto"
                            playsInline
                            muted
                            loop
                            autoPlay
                            src="/images/exsit.mp4"
                            title="Video title"
                        />
                    </div>
                </div>

                {/* Brand Logos */}
                <div className="flex flex-col">
                    <div className="flex justify-center lg:pb-14 pb-10 lg:pt-16 pt-12">
                        <h2 className="text-gray-900 text-lg font-medium text-center">
                            Trusted by 500+ teams to empower 2,00,000+ people
                        </h2>
                    </div>

                    <div className="grid xl:grid-cols-6 md:grid-cols-3 grid-cols-2 lg:px-16 gap-3">
                        {displayedBrands.map((brand) => (
                            <div
                                key={brand.id}
                                className="flex justify-center items-center"
                                data-aos="fade-up"
                                data-aos-duration="400"
                                data-aos-delay={brand.delay}
                            >
                                <Image
                                    src={brand.light}
                                    alt={brand.alt}
                                    width={brand.width}
                                    height={brand.height}
                                    className="mx-auto mb-3 dark:hidden"
                                    loading="lazy"
                                    style={{ width: "auto", height: "auto" }}
                                />
                                <Image
                                    src={brand.dark}
                                    alt={`${brand.alt} dark`}
                                    width={brand.width}
                                    height={brand.height}
                                    className="mx-auto mb-3 hidden dark:flex"
                                    loading="lazy"
                                    style={{ width: "auto", height: "auto" }}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroThirteen;
