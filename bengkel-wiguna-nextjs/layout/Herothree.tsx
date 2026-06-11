"use client";

import { Star } from "lucide-react";
import Button from "../ui/Button";


export default function Herothree() {
    return (
        <>
            <section className="banner-wrap items-center justify-center font-sora relative flex overflow-hidden lg:h-[95vh] h-auto bg-home-three-hero bg-cover lg:pt-0 pt-20">
                <div className="max-w-screen-xl w-full px-3 sm:px-6 md:px-14 lg:px-14 xl:px-18 2xl:px-3 justify-center flex">
                    <div className="xl:w-11/12 w-full lg:py-0 py-12">
                        <div className="w-full">
                            <div className="flex flex-row mb-3 mt-auto">
                                <div className="flex flex-row gap-2 py-1 px-5 mx-auto rounded-full w-auto bg-white/20">
                                    <div className="flex flex-row gap-1 my-1">
                                        <Star color="orange" fill="orange" size={18} />
                                        <Star color="orange" fill="orange" size={18} />
                                        <Star color="orange" fill="orange" size={18} />
                                        <Star color="orange" fill="orange" size={18} />
                                        <Star color="orange" fill="orange" size={18} />
                                    </div>
                                    <h5 className="text-white font-medium text-sm pt-1">4.5 ( 2.3k + Reviews )</h5>
                                </div>
                            </div>
                            <h1 className="text-white text-center font-semibold 2xl:text-7xl lg:text-6xl md:text-5xl text-4xl mt-2 mb-3 py-3 aos-init aos-animate" data-aos="fade-up" data-aos-duration="400">
                                Enterprises and Startup Build Powerful —
                                <span className="bg-[linear-gradient(to_right,#40dfff,#2af294)] bg-clip-text text-transparent">Digital Solutions</span>
                            </h1>
                            <p className="font-normal text-white/90 text-lg xl:w-9/12 mx-auto text-center aos-init aos-animate" data-aos="fade-up" data-aos-duration="500"> When you join our journey, you are choosing a partner who believes in a healthier. When you join our journey. Quizzes are working for them — and they can for you too.</p>
                            
                            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 pt-8 pb-3 justify-center">
                                <Button href="/pricing" label="Start trial for 14 days" bgColor="bg-cyan-600" textColor="text-white"   padding="py-4 px-6" />
                                <Button href="/about" label="Explore more" bgColor="bg-gray-100" textColor="text-gray-900"  padding="py-4 px-6" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}