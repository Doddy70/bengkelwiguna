"use client";

import React from "react";
import Image from "next/image";
import Button from "../ui/Button";
import { ArrowUpRight } from "react-feather";

const HeroTwelve: React.FC = () => {
    return (
        <div className="banner-wrap items-center justify-center relative flex overflow-hidden h-auto lg:pt-44 pt-28 lg:pb-16 pb-10 bg-home-twelve-hero bg-no-repeat bg-bottom bg-cover bg-image-none">
            <div className="max-w-screen-xl w-full px-3 sm:px-6 md:px-14 lg:px-14 xl:px-18 2xl:px-3 justify-center align-middle flex flex-col relative z-10">
                {/* Text Section */}
                <div className="xl:w-9/12 w-full mx-auto lg:pb-16 pb-8">
                    <div className="w-full flex flex-col justify-center">
                        <div className="mx-auto">
                            <span
                                className="inline-block py-1 pl-1 pr-3 rounded-full border border-gray-200 bg-white text-sm lg:inline-block text-gray-900 font-medium shadow-sm"
                                data-aos="fade-up"
                                data-aos-duration="200"
                            >
                                <span className="inline-block px-3 rounded-full bg-lime-400 text-gray-900 dark:text-dark-black font-medium mr-2 leading-7">
                                    UPDATE VERSION
                                </span>
                                Online start now.
                            </span>
                        </div>

                        <h1
                            className="text-gray-900 text-center font-merri font-normal 2xl:text-7xl lg:text-6xl md:text-5xl text-4xl mt-2 mb-3 py-3"
                            data-aos="fade-up"
                            data-aos-duration="400"
                            data-aos-delay="300"
                        >
                            Boost your productivity Move quicker, grow faster
                        </h1>

                        <p
                            className="font-normal text-black/90 text-lg text-center"
                            data-aos="fade-up"
                            data-aos-duration="500"
                        >
                            Quizzes are working for them — and they can for you too.
                        </p>

                        {/* Buttons */}
                        <div className="flex flex-col sm:flex-row gap-3 mt-8 justify-center mx-auto">
                            <Button
                                label="Start trial for 14 days"
                                bgColor="bg-lime-400"
                                textColor="text-gray-900"
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
                </div>

                {/* Banner Images */}
                <div className="banner-img flex justify-center relative w-full">
                    <div
                        className="absolute md:flex hidden xl:left-[3%] left-[1%] top-16 xl:w-[372px] xl:h-[90px] lg:w-[330px] lg:h-[80px] w-[290px] h-[70px]"
                        data-aos="zoom-in"
                        data-aos-duration="400"
                        data-aos-delay="400"
                    >
                        <Image
                            src="/images/home-12-feature-4.svg"
                            alt="mobile"
                            fill
                            className="object-contain"
                            sizes="(max-width: 768px) 70px, 372px"
                            priority={false}
                        />
                    </div>
                    <div
                        className="absolute md:flex hidden xl:left-[10%] left-[5%] bottom-16  xl:w-[372px] xl:h-[200px] lg:w-[320px] lg:h-[170px] w-[280px] h-[150px]"
                        data-aos="zoom-in"
                        data-aos-duration="400"
                        data-aos-delay="200"
                    >
                        <Image
                            src="/images/home-12-feature-5.svg"
                            alt="mobile"
                            fill
                            className="object-contain"
                            sizes="(max-width: 768px) 280px, (max-width: 1024px) 320px, 372px"
                            loading="lazy"
                        />
                    </div>

                    <Image
                        src="/images/home-12-feature-8.svg"
                        alt="feature"
                        width={400}
                        height={400}
                        data-aos="zoom-in"
                        data-aos-duration="400"
                        data-aos-delay="0"
                        className="xl:w-auto w-[200px] z-10 relative"
                    />
                    <div className="absolute md:flex hidden xl:right-[10%] right-[4%] top-16  xl:w-[372px] xl:h-[120px] lg:w-[320px] lg:h-[100px] w-[280px] h-[90px] "
                        data-aos="zoom-in"
                        data-aos-duration="400"
                        data-aos-delay="100"
                    >
                        <Image
                            src="/images/home-12-feature-6.svg"
                            alt="mobile"
                            fill
                            className="object-contain"
                            sizes="(max-width: 768px) 280px, (max-width: 1024px) 320px, 372px"
                            loading="lazy"
                        />
                    </div>
                    <div
                        className="absolute md:flex hidden xl:right-[8%] right-[0%] bottom-10 xl:w-[372px] xl:h-[220px] lg:w-[330px] lg:h-[190px] w-[280px] h-[170px] "
                        data-aos="zoom-in"
                        data-aos-duration="400"
                        data-aos-delay="300"
                    >
                        <Image
                            src="/images/home-12-feature-7.svg"
                            alt="mobile"
                            fill
                            className="object-contain"
                            sizes="(max-width: 768px) 280px, (max-width: 1024px) 330px, 372px"
                            loading="lazy"
                        />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default HeroTwelve;
