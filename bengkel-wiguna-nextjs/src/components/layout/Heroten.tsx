"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "react-feather";
import Button from "../ui/Button";
import Brands from "../ui/Brands";

const HeroTen: React.FC = () => {
    return (
        <div className="banner-wrap items-center justify-center relative flex overflow-hidden h-auto lg:pt-44 pt-28 pb-4 bg-home-ten-hero bg-no-repeat bg-image-none">
            <div className="max-w-screen-xl w-full px-3 sm:px-6 md:px-14 lg:px-14 xl:px-18 2xl:px-3 justify-center align-middle flex flex-col relative z-10">
                {/* Hero Text Section */}
                <div className="xl:w-6/12 w-full mx-auto">
                    <div className="flex flex-row mb-3 mt-auto">
                        <div className="flex flex-row align-middle gap-2 pt-1 pb-2 px-5 mx-auto rounded-full w-auto bg-black/50">
                            <div className="flex flex-row gap-1 align-middle items-center">
                                {[...Array(4)].map((_, i) => (
                                    <svg
                                        key={i}
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="18"
                                        height="18"
                                        fill="currentColor"
                                        className="bi bi-star-fill text-orange-400"
                                        viewBox="0 0 16 16"
                                    >
                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                    </svg>
                                ))}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="18"
                                    height="18"
                                    fill="currentColor"
                                    className="bi bi-star-fill text-white"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                </svg>
                            </div>
                            <h5 className="text-white font-medium text-base pt-1">
                                4.5 <span className="text-white/70">(2.3k+ Reviews)</span>
                            </h5>
                        </div>
                    </div>

                    <h1
                        className="text-gray-900 text-center font-bold 2xl:text-7xl lg:text-6xl md:text-5xl text-4xl mt-2 mb-3 py-3"
                        data-aos="fade-up"
                        data-aos-duration="400"
                        data-aos-delay="300"
                    >
                        Quicker results
                        <br />
                        Scale faster
                    </h1>

                    <p
                        className="font-normal text-black/90 text-lg dark:text-gray-300 text-center"
                        data-aos="fade-up"
                        data-aos-duration="500"
                    >
                        When you join our journey, you are choosing a partner who believes
                        in a healthier. Quizzes are working for them — and they can for you
                        too.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-3 mt-8 justify-center mx-auto">
                        <Button
                            label="Start trial for 14 days"
                            bgColor="bg-cyan-500"
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

                <div className="flex justify-center lg:pb-14 pb-10 lg:pt-16 pt-12">
                    <h2 className="text-gray-400 text-lg font-medium text-center">Trusted by 500+ teams to empower 2,00,000+ people</h2>
                </div>
                <div className="flex flex-wrap justify-center gap-4 lg:gap-6">
                <Brands />
                </div>
                {/* Images Section */}
                <div className="w-full lg:pt-16 pt-10 flex lg:flex-row flex-col gap-6">
                    <div className="lg:w-8/12 w-full" data-aos="zoom-in">
                        <Image
                            src="/images/home-10-hero-1.svg"
                            alt="banner"
                            width={800}
                            height={600}
                            className="w-full h-auto rounded-xl"
                            loading="lazy"
                        />

                    </div>

                    <div className="lg:w-4/12 w-full" data-aos="zoom-in">
                        <div className="relative rounded-xl overflow-hidden h-full">
                            <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(180deg,rgba(0,0,0,0.1)_0%,rgba(0,0,0,0.5)_100%)]"></div>

                            <div className="absolute top-0 left-0 z-[5] flex flex-col p-6 lg:p-10 h-full">
                                <div className="flex flex-row gap-3 items-center">
                                    <div className="w-14 h-14 bg-lime-400 rounded-full flex items-center justify-center">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="26"
                                            height="26"
                                            fill="currentColor"
                                            className="text-gray-900"
                                            viewBox="0 0 16 16"
                                        >
                                            <path d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09z"></path>
                                        </svg>
                                    </div>
                                    <span className="text-white leading-6 text-[17px] w-1/2">
                                        Real-time budgets analytics
                                    </span>
                                </div>

                                <div className="mt-auto text-white flex flex-col">
                                    <span className="lg:text-7xl text-5xl font-normal">25M+</span>
                                    <span className="text-lg text-white/80">
                                        Interviews scheduled
                                    </span>
                                </div>
                            </div>

                            <Image
                                src="/images/home-10-hero-2.svg"
                                alt="banner"
                                width={500}
                                height={600}
                                className="rounded-xl w-full lg:h-full object-cover"
                                loading="eager"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroTen;
