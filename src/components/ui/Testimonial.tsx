"use client";

import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import type { Options as SplideOptions } from "@splidejs/splide";
import "@splidejs/react-splide/css";
import { Star, StarHalf } from "lucide-react";
import testimonialData from "@/data/testimonialData.json";

type Slide = {
    id: string | number;
    rating: number;
    quote: string;
    name: string;
    title?: string;
    backgroundImage: string;
};

interface TestimonialCarouselProps {
    slides?: Slide[];
    options?: SplideOptions; // ✅ updated type
}

function renderStars(rating: number) {
    const full = Math.floor(rating);
    const half = rating - full >= 0.5 ? 1 : 0;
    const empty = 5 - full - half;

    return (
        <div className="flex flex-row gap-0 items-center" aria-hidden>
            {Array.from({ length: full }).map((_, i) => (
                <Star size={20} strokeWidth={0} fill="orange" key={`full-${i}`} />
            ))}
            {half === 1 ? <StarHalf size={20} strokeWidth={0} fill="orange" /> : null}
            {Array.from({ length: empty }).map((_, i) => (
                <Star size={20} strokeWidth={0} fill="gray" key={`empty-${i}`} />
            ))}
        </div>
    );
}

export default function TestimonialCarousel({
    slides = testimonialData,
    options,
}: TestimonialCarouselProps) {
    const splideOptions: SplideOptions = {
        type: "loop",
        autoplay: false,
        pauseOnHover: true,
        perPage: 1,
        gap: "1rem",
        pagination: true,
        arrows: false,
        ...options,
    };

    return (
        <div
            id="testimonial-carousel"
            className="splide slider-no-arrows slider-dots-round slider-pagination-bottom-center position-relative"
            data-aos="fade-up"
            data-aos-duration="400"
            data-aos-delay="200"
        >
            <Splide options={splideOptions} aria-label="Testimonials">
                {slides.map((s) => (
                    <SplideSlide key={s.id}>
                        <div className="splide__slide flex flex-col">
                            <div
                                className="feedback-wrap md:p-12 p-6 rounded-xl bg-center bg-cover"
                                style={{ backgroundImage: `url(${s.backgroundImage})` }}
                            >
                                <div className="feedback-content">
                                    <div className="flex flex-wrap">
                                        <div className="lg:w-5/12">
                                            <div>
                                                <span className="lg:text-7xl text-5xl text-white font-normal leading-none inline-block">
                                                    {s.rating}
                                                </span>
                                                <div className="mt-0">{renderStars(s.rating)}</div>
                                            </div>

                                            <p className="text-white lg:text-3xl text-2xl font-normal italic leading-tight lg:my-12 my-5">
                                                {s.quote}
                                            </p>

                                            <div className="flex flex-col">
                                                <span className="text-base text-gray-100 font-semibold leading-6 inline-block">
                                                    {s.name}
                                                </span>
                                                {s.title && (
                                                    <span className="text-[15px] text-gray-300 font-normal leading-6 inline-block">
                                                        {s.title}
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SplideSlide>
                ))}
            </Splide>
        </div>
    );
}
