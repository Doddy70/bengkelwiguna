"use client";

import Image from "next/image";
import React from "react";
import Button from "../ui/Button";
import { ArrowUpRight } from "react-feather";
import Link from "next/link";

export default function HeroEleven() {
    return (
        <div className="banner-wrap items-center justify-center relative flex overflow-hidden h-auto lg:pt-44 pt-28 lg:pb-28 pb-16 bg-home-eleven-hero dark:bg-gray-800 bg-no-repeat bg-bottom bg-cover bg-image-none">
            <div className="max-w-screen-xl w-full px-3 sm:px-6 md:px-14 lg:px-14 xl:px-18 2xl:px-3 justify-center align-middle flex flex-col relative z-10">

                {/* Hero Content */}
                <div className="xl:w-9/12 w-full mx-auto">
                    <div className="w-full flex flex-col justify-center">
                        <div className="mx-auto">
                            <span
                                className="inline-block py-1 pl-1 pr-3 rounded-full border border-gray-200 bg-white text-sm lg:inline-block text-gray-900 font-medium shadow-sm"
                                data-aos="fade-up"
                                data-aos-duration="200"
                            >
                                <span className="inline-block px-3 rounded-full bg-orange-500 text-white font-medium mr-2 leading-7">
                                    UPDATE VERSION
                                </span>
                                Online start now.
                            </span>
                        </div>

                        <h1
                            className="text-gray-900 text-center font-normal 2xl:text-7xl lg:text-6xl md:text-5xl text-4xl mt-2 mb-3 py-3"
                            data-aos="fade-up"
                            data-aos-duration="400"
                            data-aos-delay="300"
                        >
                            Boost your productivity{" "}
                            <span className="font-bold">Move quicker, grow faster</span>
                        </h1>

                        <p
                            className="font-normal text-black/90 text-lg text-center"
                            data-aos="fade-up"
                            data-aos-duration="500"
                        >
                            Quizzes are working for them — and they can for you too.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-3 mt-8 justify-center mx-auto">
                            <Button
                                label="Start trial for 14 days"
                                bgColor="bg-orange-500"
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
                </div>

                {/* Banner Section 1 */}
                <div className="xl:w-11/12 w-full mx-auto lg:pt-20 pt-12">
                    <div className="flex lg:flex-row flex-col gap-6">
                        <div
                            className="lg:w-8/12 w-full"
                            data-aos="zoom-in"
                            data-aos-duration="400"
                            data-aos-delay="100"
                        >
                            <div className="banner-feature shadow-sm rounded-2xl bg-white p-6 dark:bg-gray-800">
                                <div className="flex flex-col px-2 pt-2">
                                    <h3 className="font-semibold text-3xl text-gray-900 mb-1">
                                        Revenue growth vs Analytics
                                    </h3>
                                    <p className="text-base text-black/70 font-medium">
                                        Create comprehensive monitors with for proactive into more.
                                    </p>
                                </div>
                                <div className="flex justify-center pt-12 pb-4">
                                    <Image
                                        src="/images/home-11-feature-8.svg"
                                        alt="feature"
                                        width={800}
                                        height={500}
                                        className="w-full px-6 h-auto"
                                        style={{ width: "100%", height: "auto" }}
                                    />
                                </div>
                            </div>
                        </div>

                        <div
                            className="lg:w-4/12 w-full"
                            data-aos="zoom-in"
                            data-aos-duration="400"
                            data-aos-delay="400"
                        >
                            <div className="banner-feature shadow-sm rounded-2xl bg-white p-6 dark:bg-gray-900 h-full min-h-72 bg-bottom bg-no-repeat bg-image-none"
                                style={{ backgroundImage: "url('/images/feature-1.svg')" }}
                            >
                                <h3 className="font-normal text-3xl text-gray-900 mb-5">
                                    Stronger customer <span className="font-semibold">Relationships</span> and support
                                </h3>
                                <Link
                                    href="about-2.html"
                                    aria-label="play"
                                    className="w-14 h-14 flex justify-center items-center bg-orange-500 rounded-full group-hover:rotate-45 transition duration-300"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="28"
                                        height="28"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="feather feather-arrow-up-right text-white"
                                    >
                                        <line x1="7" y1="17" x2="17" y2="7"></line>
                                        <polyline points="7 7 17 7 17 17"></polyline>
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Banner Section 2 */}
                <div className="xl:w-11/12 w-full mx-auto pt-6">
                    <div className="flex lg:flex-row flex-col gap-6">
                        <div
                            className="lg:w-4/12 w-full"
                            data-aos="zoom-in"
                            data-aos-duration="400"
                            data-aos-delay="100"
                        >
                            <div className="banner-feature shadow-sm rounded-2xl bg-white p-6 dark:bg-gray-900 h-full">
                                <h3 className="font-normal text-3xl text-gray-900 mb-5">
                                    Control analytics <span className="font-semibold">features</span> and support
                                </h3>
                                <Image
                                    src="/images/home-11-feature-9.svg"
                                    alt="feature"
                                    width={500}
                                    height={400}
                                    className="pt-6 h-auto w-auto"
                                    style={{ width: "auto", height: "auto" }}
                                />
                            </div>
                        </div>

                        <div
                            className="lg:w-8/12 w-full"
                            data-aos="zoom-in"
                            data-aos-duration="400"
                            data-aos-delay="400"
                        >
                            <div className="banner-feature shadow-sm rounded-2xl bg-white p-6 dark:bg-gray-800 h-full flex justify-center flex-col">
                                <div className="flex flex-col px-2 pt-2 lg:max-w-md justify-center text-center mx-auto">
                                    <h3 className="font-normal text-3xl text-gray-900 mb-1">
                                        Boost your productivity{" "}
                                        <span className="font-semibold">Move quicker, grow faster</span>
                                    </h3>
                                    <p className="text-base text-black/70 font-medium">
                                        Create comprehensive monitors
                                    </p>
                                </div>
                                <div className="mx-auto">
                                    <Image
                                        src="/images/home-11-feature-10.svg"
                                        alt="feature"
                                        width={800}
                                        height={500}
                                        className="pt-6 h-auto w-auto"
                                        style={{ width: "auto", height: "auto" }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
