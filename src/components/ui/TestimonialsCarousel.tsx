// components/TestimonialsCarousel.tsx
"use client";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import React from "react";
import Image from "next/image";
interface Testimonial {
    rating: number; // 1–5
    text: string;
    name: string;
    role: string;
    image?: string;
}

interface TestimonialsCarouselProps {
    testimonials: Testimonial[];
}

export default function TestimonialsCarousel({ testimonials }: TestimonialsCarouselProps) {
    return (
        <div id="testimonial-carousel" className="splide slider-arrows-cyan slider-no-dots">
            <Splide
                options={{
                    type: "loop",
                    perPage: 1,
                    arrows: true,
                    pagination: false,
                    gap: "1rem",
                }}
            >
                {testimonials.map((t, idx) => (
                    <SplideSlide key={idx}>
                        <div className="flex flex-wrap">
                            {/* Left content */}
                            <div className="lg:w-8/12">
                                {/* Rating */}
                                <div className="flex flex-row gap-2 mb-3">
                                    {Array.from({ length: 5 }).map((_, i) => (
                                        <svg
                                            key={i}
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="18"
                                            height="18"
                                            fill="currentColor"
                                            className={`bi bi-star-fill ${i < Math.floor(t.rating) ? "text-orange-500" : "text-gray-500"
                                                }`}
                                            viewBox="0 0 16 16"
                                        >
                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                        </svg>
                                    ))}
                                    <span className="text-white text-base font-normal ml-1 inline-block pb-1">
                                        {t.rating.toFixed(1)}
                                    </span>
                                </div>

                                {/* Quote */}
                                <div>
                                    <span className="text-gray-200 text-2xl inline-block font-normal italic lg:mb-14 mb-5">
                                        {t.text}
                                    </span>
                                </div>

                                {/* Author */}
                                <div className="flex flex-col">
                                    <span className="text-base text-white font-medium inline-block">{t.name}</span>
                                    <span className="text-sm text-gray-200 font-normal inline-block">{t.role}</span>
                                </div>
                            </div>

                            {/* Right image */}
                            {t.image && (
                                <div className="lg:w-4/12 lg:flex hidden ms-auto justify-end">
                                    <Image
                                        loading="lazy"
                                        src={t.image}
                                        alt={t.name}
                                        className="rounded-full"
                                        width={192}
                                        height={286}
                                    />
                                </div>
                            )}
                        </div>
                    </SplideSlide>
                ))}
            </Splide>
        </div>
    );
}
