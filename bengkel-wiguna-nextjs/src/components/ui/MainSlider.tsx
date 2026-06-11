"use client";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import type { Splide as SplideInstance } from "@splidejs/splide";
import "@splidejs/react-splide/css";
import Image from "next/image";
import { useState } from "react";

type Slide = {
    src: string;
    title: string;
    subtitle: string;
};

type CounterCarouselProps = {
    slides: Slide[];
};

export default function CounterCarousel({ slides }: CounterCarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(0);

    return (
        <div className="relative">
            {/* Slider */}
            <Splide
                aria-label="Counter Carousel"
                options={{
                    type: "loop",
                    perPage: 1,
                    arrows: false,
                    pagination: false,
                    autoplay: false,
                    interval: 4000,
                }}
                onMoved={(_: SplideInstance, newIndex: number) =>
                    setCurrentIndex(newIndex)
                }
                className="slider-no-arrows"
            >
                {slides.map((slide, idx) => (
                    <SplideSlide key={idx}>
                        <div className="relative overflow-hidden rounded-xl">
                            <div className="relative w-full h-[350px]">
                                <Image
                                    src={slide.src}
                                    alt={slide.title}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                                />
                            </div>
                            
                            {/* Overlay */}
                            <div className="absolute inset-0 z-10 pointer-events-none bg-[linear-gradient(180deg,rgba(0,0,0,0.1)_0%,rgba(0,0,0,0.5)_100%)]"></div>
                            {/* Content */}
                            <div className="absolute bottom-0 left-0 w-full p-5 z-20">
                                <h3 className="text-white md:text-3xl text-2xl font-medium mb-1">
                                    {slide.title}
                                </h3>
                                <p className="text-gray-200 text-base mb-0">{slide.subtitle}</p>
                            </div>
                        </div>
                    </SplideSlide>
                ))}
            </Splide>
            
            <div className="absolute bottom-0 right-4 -translate-y-1/2 z-30 bg-black/60 text-white text-sm px-3 py-1 rounded-full">
                <span className="text-2xl">{currentIndex + 1}</span> / {slides.length}
            </div>
        </div>
    );
}
