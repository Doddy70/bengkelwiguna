"use client";
import Button from "../ui/Button";
import { Star  } from "lucide-react";
import Image from "next/image";

export default function Herotwo() {
    return (
        <section className="banner-wrap font-dm relative pt-24 2xl:h-[850px] xl:h-[750px] lg:h-[700px] bg-home-two-hero flex items-center justify-center overflow-hidden">
            {/* banner image */}
            <div className="banner-wrapper-image absolute top-0 xl:right-0 2xl:w-[54%] xl:w-[60%] lg:w-[75%] lg:right-[-15%] lg:flex hidden">
                <Image loading="eager" src="/images/banner-bg-9.svg" alt="banner" className="w-full" width={951} height={900} priority />
            </div>
            <div className="max-w-screen-xl w-full px-3 sm:px-6 md:px-14 lg:px-14 xl:px-18 2xl:px-3 font-dm">
                <div className="login-wrap w-full flex justify-start items-center">
                    <div className="xl:w-7/12 lg:w-6/12 w-full relative z-10 lg:pb-0 pb-12">
                        <div className="w-full text-start">
                            <div className="flex flex-row mb-3 mt-auto">
                                <div className="flex flex-row gap-2 py-1 px-5 rounded-full w-auto bg-white/20">
                                    <div className="flex flex-row gap-1 my-1">
                                        <Star color="orange" fill="orange" size={18}/>
                                        <Star color="orange" fill="orange" size={18}/>
                                        <Star color="orange" fill="orange" size={18}/>
                                        <Star color="orange" fill="orange" size={18}/>
                                        <Star color="orange" fill="orange" size={18}/>
                                    </div>
                                    <h5 className="text-white font-medium text-sm pt-1">4.5 ( 2.3k + Reviews )</h5>
                                </div>
                            </div>
                            <h1 className="text-white font-medium 2xl:text-[80px] xl:text-[65px] text-5xl mt-2 mb-3 tracking-tighter py-3 aos-init aos-animate" data-aos="fade-up" data-aos-duration="400">Effortlessly Growth Organize <span className="bg-[linear-gradient(to_bottom,#fd7e14,#fd9843)] rounded-lg py-0 px-4 inline-block ">Product</span> Management</h1>
                            <p className="font-medium text-white/90 max-w-xl lg:pr-10 text-lg aos-init aos-animate" data-aos="fade-up" data-aos-duration="500"> When you join our journey, you are choosing a partner who believes in a healthier, more balanced you — and works tirelessly to help you get there.</p>
                            {/* cta btn */}
                            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 pt-8 pb-3">
                                <Button href="/pricing" label="Start trial for 14 days" bgColor="bg-orange-500" textColor="text-white" padding="py-4 px-6" />
                                <Button href="/about" label="Explore more" bgColor="bg-gray-100" textColor="text-gray-900" padding="py-4 px-6" />
                            </div>
                            <p className="text-sm text-gray-300 font-medium mb-auto mt-0 pb-lg-5">No Card Required Cancel Anytime</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}