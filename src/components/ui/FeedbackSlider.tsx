"use client";

import { useEffect, useRef } from "react";
import Splide from "@splidejs/splide";
import "@splidejs/splide/dist/css/splide.min.css";
import feedbackData from "@/data/feedbackdata.json";
import { Star } from "react-feather";
import { Quote } from "lucide-react";
import Image from "next/image";

const FeedbackSlider = () => {
    const splideRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (splideRef.current) {
            const splide = new Splide(splideRef.current, {
                type: "loop",
                perPage: 3,
                pagination: true,
                arrows: true,
                autoplay: true,
                gap: "1.5rem",
                breakpoints: {
                    1024: { perPage: 3 },
                    768: { perPage: 2 },
                    480: { perPage: 1 },
                },
            });
            splide.mount();
        }
    }, []);

    return (
        <div
            id="feedback-carousel"
            className="splide slider-dots-line splide-pagination-bottom slider-arrows-outside"
            ref={splideRef}
        >
            <div className="splide__track">
                <div className="splide__list">
                    {feedbackData.map((item) => (
                        <div key={item.id} className="splide__slide">
                            <div className="feedback font-sora rounded-xl bg-gray-800 p-5">
                                {/* Stars + Rating */}
                                <div className="p-4 flex flex-col">
                                    <div className="flex flex-row gap-1 mb-3">
                                        {[...Array(5)].map((_, i) => (
                                            <Star
                                                key={i}
                                                size={18}
                                                className={
                                                    i < Math.floor(item.rating)
                                                        ? "text-orange-500 fill-orange-500"
                                                        : "text-gray-500"
                                                }
                                            />
                                        ))}
                                        <span className="text-white text-base font-normal ml-1 inline-block pb-1">
                                            {item.rating.toFixed(1)}
                                        </span>
                                    </div>

                                    {/* Feedback text */}
                                    <p className="text-gray-100 text-xl font-light pe-2 mb-5 italic">
                                        &quot;{item.text}&quot;
                                    </p>
                                </div>

                                {/* Avatar + Info + Quote */}
                                <div className="flex flex-row gap-5 mt-2 p-4">
                                    <Image
                                        src={item.avatar}
                                        alt={item.name}
                                        className="w-12 h-12 rounded-full"
                                        loading="lazy"
                                        width={48}
                                        height={48}
                                        
                                    />
                                    <div className="flex flex-col">
                                        <span className="text-base text-gray-100 font-normal inline-block">
                                            {item.name}
                                        </span>
                                        <span className="text-sm text-gray-300 font-light inline-block">
                                            {item.position}
                                        </span>
                                    </div>
                                    <div className="ml-auto">
                                        <Quote fill="gray" size={30} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FeedbackSlider;
