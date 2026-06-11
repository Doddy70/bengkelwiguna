"use client";

import { Star } from "react-feather";
import Button from "../ui/Button";


export default function Heroeight() {
    return (
        <section className="banner-wrap items-center justify-center relative flex overflow-hidden h-[96vh] bg-home-eight-hero lg:pt-24 pt-12 bg-center bg-cover">
            <div className="max-w-screen-xl w-full px-3 sm:px-6 md:px-14 lg:px-14 xl:px-18 2xl:px-3 flex">
                <div className="lg:w-6/12 w-full">
                    <div className="w-full flex flex-col">
                        <div className="flex flex-row mb-3 mt-auto">
                            <div className="flex flex-row gap-2 py-1 px-5 rounded-full w-auto bg-white/20">
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
                        <h1 className="text-white font-normal 2xl:text-7xl xl:text-6xl lg:text-5xl text-5xl mt-2 mb-3 py-4" data-aos="fade-up" data-aos-duration="400">
                            Make a stunning personal business Grow
                            <div className="relative inline-block h-[1.25em] overflow-hidden align-middle [mask-image:linear-gradient(transparent,white,white,white,transparent)] [mask-type:luminance] ms-0">
                                <ul
                                    className="m-0 p-0 list-none flex flex-col  animate-[wordSlider_6s_infinite_ease-in-out]"
                                >
                                    <li className="leading-[1.1em] text-left pl-2"> potential</li>
                                    <li className="leading-[1.1em] text-left pl-2"> career</li>
                                    <li className="leading-[1.1em] text-left pl-2"> profits</li>
                                    <li className="leading-[1.1em] text-left pl-2"> potential</li>
                                </ul>
                            </div>
                        </h1>
                        <p className="font-normal text-white/90 text-lg xl:pr-12" data-aos="fade-up" data-aos-duration="500">Unlock actionable and timely and financial insights with advanced financial reporting for increased visibility. Empowering executives to make informed, timely decisions.</p>
                        {/* cta button */}
                        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 pt-8 pb-3">
                            <Button href="/pricing" label="Start trial for 14 days" bgColor="bg-cyan-500" textColor="text-gray-900" padding="py-4 px-6" />
                            <Button href="/about" label="Explore more" bgColor="bg-gray-100" textColor="text-gray-900" padding="py-4 px-6" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}