"use client";

import { useState, useRef } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import type { Splide as SplideInstance } from "@splidejs/splide";
import Image from "next/image";
import data from "@/data/verticalSliderData.json";
import { Command, Compass, HardDrive } from "react-feather";
import "@splidejs/splide/css";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
    Command,
    Compass,
    HardDrive,
};

const VerticalSlider: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const splideRef = useRef<SplideInstance | null>(null);

    return (
        <div className="bg-green-900 rounded-xl overflow-hidden">
            {/* Main Slider */}
            <div className="w-full">
                <Splide
                    ref={splideRef}
                    options={{
                        type: "loop",
                        perPage: 1,
                        arrows: false,
                        pagination: false,
                        breakpoints: {
                            1024: { height: "450px" },
                            768: { height: "400px" },
                            480: { height: "300px" },
                        },
                    }}
                    onMoved={(_splide: SplideInstance, newIndex: number) =>
                        setActiveIndex(newIndex)
                    }
                >
                    {data.slides.map((slide) => {
                        const Icon = iconMap[slide.icon] || Command; // fallback
                        return (
                            <SplideSlide
                                key={slide.id}
                                className="bg-gradient-black-left relative overflow-hidden rounded-lg"
                            >
                                {/* Overlay content */}
                                <div className="absolute inset-0 z-10 pointer-events-none bg-[linear-gradient(to_left,rgba(0,0,0,0.01)_0%,rgba(0,0,0,0.7)_100%)]"></div>
                                <div className="absolute inset-0 z-10 p-6 lg:p-10 flex flex-col justify-between">
                                    <div className="flex flex-row gap-3 items-center">
                                        <div
                                            className={`w-14 h-14 ${slide.iconBg} rounded-full flex items-center justify-center`}
                                        >
                                            <Icon className="w-6 h-6 text-gray-900" />
                                        </div>
                                        <span className="text-white text-lg leading-tight w-1/2">
                                            {slide.title}
                                        </span>
                                    </div>
                                    <div className="text-white flex flex-col">
                                        <span className="lg:text-7xl text-5xl font-normal">
                                            {slide.value}
                                        </span>
                                        <span className="text-lg text-white/80">{slide.subtitle}</span>
                                    </div>
                                </div>

                                {/* Background image */}
                                <Image
                                    src={slide.image}
                                    alt={slide.title}
                                    width={1350}
                                    height={520}
                                    className="w-full min-h-[300px] object-cover"
                                    loading="lazy"
                                />
                            </SplideSlide>
                        );
                    })}
                </Splide>
            </div>

            {/* Thumbnails row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                {data.thumbnails.map((thumb, index) => (
                    <div
                        key={thumb.id}
                        onClick={() => splideRef.current?.go(index)}
                        className={`flex flex-row gap-4 items-start rounded-xl p-4 lg:p-5 cursor-pointer transition-transform duration-300 ${index === activeIndex
                                ? "shadow-lg bg-green-100 dark:bg-green-900"
                                : "hover:shadow-md bg-white"
                            }`}
                    >
                        {/* Number circle */}
                        <div className="relative">
                            <div className="flex items-center justify-center w-14 h-14 lg:w-16 lg:h-16 rounded-full bg-green-800 text-white text-3xl lg:text-4xl">
                                {thumb.number}
                            </div>
                        </div>

                        {/* Text content */}
                        <div className="flex flex-col">
                            <h3 className="text-gray-900 text-xl lg:text-2xl font-semibold">
                                {thumb.title}
                            </h3>
                            <p className="text-gray-800 text-[17px] mt-1 font-normal">
                                {thumb.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default VerticalSlider;
