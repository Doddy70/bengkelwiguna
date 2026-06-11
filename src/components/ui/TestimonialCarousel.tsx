"use client";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Image from "next/image";

export interface Testimonial {
    brand: string;
    brandWidth: number;
    brandHeight: number;
    text: string;
    avatar: string;
    name: string;
    role: string;
}

interface Props {
    testimonials: Testimonial[];
}

export default function TestimonialCarousel({ testimonials }: Props) {
    return (
        <div
            id="testimonial-carousel"
            className="splide slider-no-arrows slider-dots-round slider-pagination-top-right h-full" style={{ position: "static" }}
        >
            <Splide
                options={{
                    type: "fade",
                    pagination: true,
                    arrows: false,
                    autoplay: true,
                    interval: 5000,
                    perPage: 1,
                    speed: 600,
                }}
                className="h-full"
            >
                {testimonials.map((t, index) => (
                    <SplideSlide key={index} className="h-full">
                        <div className="mb-12">
                            <Image
                                src={t.brand}
                                alt="brand"
                                width={t.brandWidth}
                                height={t.brandHeight}
                                className="object-contain"
                            />
                        </div>
                        <p className="text-gray-900 text-2xl font-medium italic leading-tight pe-2">
                            {t.text}
                        </p>
                        <div className="flex flex-row gap-3 mt-12 pt-3">
                            <Image
                                src={t.avatar}
                                alt="avatar"
                                width={50}
                                height={50}
                                className="w-12 h-12 rounded-full object-cover"
                            />
                            <div className="flex flex-col">
                                <span className="text-base font-semibold text-gray-900 leading-[22px]">
                                    {t.name}
                                </span>
                                <span className="text-sm font-normal text-gray-800 leading-[22px]">
                                    {t.role}
                                </span>
                            </div>
                        </div>
                    </SplideSlide>
                ))}
            </Splide>
        </div>
    );
}
