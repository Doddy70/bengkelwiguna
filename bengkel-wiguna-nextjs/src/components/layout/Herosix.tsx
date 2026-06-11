"use client";

import { Zap } from "lucide-react";
import Button from "../ui/Button";
import Image from "next/image";

export default function Herosix() {
    return (
        <>
            <section className="banner-wrap items-center justify-center relative flex overflow-hidden lg:pt-28 pt-20 md:mt-2 mt-2">
                <div className="max-w-screen-xl w-full px-3 sm:px-6 md:px-14 lg:px-14 xl:px-18 2xl:px-3 flex">
                    <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-4 relative lg:space-y-0 space-y-5">
                        <div className="w-full">
                            <div className="bg-yellow-300 rounded-xl flex flex-col my-auto h-full p-6 md:p-10">
                                <div className="my-auto">
                                    <div className="hidden md:flex mb-3">
                                        <span data-aos="fade-up" data-aos-duration="200" className="inline-block py-1 leading-7 px-3 rounded-lg border border-gray-200 bg-white text-[15px] text-cyan-900 dark:text-white font-medium">
                                            Our online referral is available.
                                            <a href="pricing-2.html" className="font-medium underline text-deepcyan">Start now</a>
                                        </span>
                                    </div>
                                    <h1 data-aos="fade-up" data-aos-duration="400" className="text-gray-900 text-dark-black font-semibold 2xl:text-[80px] xl:text-[70px] lg:text-6xl text-5xl mt-2 mb-3 tracking-tighter">
                                        Discover the People power Our vision
                                    </h1>
                                    <p data-aos="fade-up" data-aos-duration="500" className="font-medium text-gray-900 text-dark-black max-w-xl lg:pr-10 text-lg">
                                        When you join our journey, you are choosing a partner who believes in a healthier, more balanced you — and works tirelessly to help you get there.
                                    </p>
                                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 pt-5">
                                        <Button href="/pricing" label="Start trial for 14 days" bgColor="bg-teal-800" textColor="text-white" padding="py-4 px-6" />
                                        <Button href="/about" label="Explore more" bgColor="bg-gray-100" textColor="text-gray-900" padding="py-4 px-6" />
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="w-full">
                            <div className="relative rounded-xl overflow-hidden h-full">
                                <div className="absolute top-0 left-0 z-[5] flex flex-col p-6 lg:p-10 h-full">
                                    <div className="flex flex-row gap-3 items-center">
                                        <div className="w-14 h-14 bg-lime-400 rounded-full flex items-center justify-center">
                                            <Zap fill="black" strokeWidth={0} size={28} />
                                        </div>
                                        <span className="text-white leading-6 text-[17px] w-1/2">
                                            Real-time budgets analytics
                                        </span>
                                    </div>
                                    <div className="mt-auto text-white flex flex-col">
                                        <span className="lg:text-7xl text-5xl font-normal">25M+</span>
                                        <span className="text-lg text-white/80">Interviews scheduled</span>
                                    </div>
                                </div>
                                <Image
                                    src="/images/banner-6a.svg"
                                    alt="banner"
                                    className="rounded-xl w-full h-full object-cover"
                                    loading="eager"
                                    fill
                                    sizes="(max-width: 768px) 100vw,  (max-width: 1200px) 100vw,  100vw"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}