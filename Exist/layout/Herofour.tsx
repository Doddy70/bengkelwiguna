"use client";

import Button from "../ui/Button";
import Image from "next/image";

export default function Herofour() {
    return (
        <section className="banner-wrap items-center justify-center font-sora relative flex overflow-hidden 2xl:h-[850px] xl:h-[750px] lg:h-[700px] bg-home-four-hero lg:pt-24 pt-12">
            {/* banner image */}
            <div className="banner-wrapper-image absolute bottom-0 xl:right-0 lg:right-[-10%] xl:w-[55%] lg:w-[70%] lg:flex hidden">
                <div className="relative w-full h-[660px]">
                    <Image
                        src="/images/banner-bg-10.svg"
                        alt="banner"
                        fill
                        className="object-contain rounded-xl"
                        priority
                    />
                </div>
            </div>
            {/* banner content */}
            <div className="max-w-screen-xl w-full px-3 sm:px-6 md:px-14 lg:px-14 xl:px-18 2xl:px-3 flex">
                <div className="lg:w-6/12 w-full lg:py-0 py-12">
                    <div className="w-full">
                        <div className="gap-4 flex flex-row items-center aos-init aos-animate" data-aos="fade-up" data-aos-duration="400" data-delay="400">
                            <div className="flex -space-x-4">
                                <Image
                                    src="/images/avatars/user.png"
                                    width={48}
                                    height={48}
                                    alt="member-avatar"
                                    className="w-12 h-12 rounded-full"
                                    loading="lazy"
                                />
                                <Image
                                    src="/images/avatars/user.png"
                                    width={48}
                                    height={48}
                                    alt="member-avatar"
                                    className="w-12 h-12 rounded-full"
                                    loading="lazy"
                                />
                                <Image
                                    src="/images/avatars/user.png"
                                    width={48}
                                    height={48}
                                    alt="member-avatar"
                                    className="w-12 h-12 rounded-full"
                                    loading="lazy"
                                />
                            </div>
                            <div className="flex flex-col leading-tight text-white font-semibold text-2xl"> 7.65m+ <span className="block text-base font-normal text-white/80">Content Creators and Teams</span> </div>
                        </div>
                        <h1 className="text-white font-semibold xl:text-7xl lg:text-5xl text-5xl mt-2 mb-3 py-4 aos-init aos-animate" data-aos="fade-up" data-aos-duration="400">
                            Digital Solution Make
                            <span className="text-lime-400 rounded-lg py-0 inline-block ">growth</span>
                            <span className="inline-block  border-lime-400 border-b-4">Financial</span>
                        </h1>
                        <p className="font-normal text-white/90 text-lg xl:pr-12 aos-init aos-animate" data-aos="fade-up" data-aos-duration="500">When you join our journey, you are choosing a partner who believes in a healthier, more balanced you. When you join our journey,</p>

                        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 pt-8 pb-3">
                            <Button href="/pricing" label="Start trial for 14 days" bgColor="bg-lime-300" textColor="text-gray-900" padding="py-4 px-6" />
                            <Button href="/about" label="Explore more" bgColor="bg-gray-100" textColor="text-gray-900" padding="py-4 px-6" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}