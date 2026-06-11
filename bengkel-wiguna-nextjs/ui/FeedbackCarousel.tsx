"use client";

import { useEffect, useRef } from "react";
import Splide from "@splidejs/splide";
import "@splidejs/splide/dist/css/splide.min.css";
import feedbackData from "@/data/feedbackdata.json";
import { Star } from "react-feather";
import Image from "next/image";

const FeedbackCarousel = () => {
    const splideRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (splideRef.current) {
            const splide = new Splide(splideRef.current, {
                type: "loop",
                perPage: 3,
                pagination: true,
                arrows: true,
                autoplay: true,
                gap: "1rem",
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
            className="splide slider-dots-line splide-pagination-bottom slider-arrows-white"
            ref={splideRef}
        >
            <div className="splide__track">
                <div className="splide__list">
                    {feedbackData.map((item) => (
                        <div key={item.id} className="splide__slide">
                            <div className="feedback rounded-xl bg-gray-800 overflow-hidden relative">
                                <Image
                                    loading="lazy"
                                    src={item.image}
                                    alt="feedback member"
                                    className="w-full"
                                    width={408}
                                    height={400}
                                    
                                />
                                <div className="p-6 flex flex-col absolute bottom-0 start-0 w-full z-10 bg-gradient-to-t from-black/70 via-black/40 to-transparent">
                                    <p className="text-gray-100 text-xl font-normal pr-2 mb-4 italic">
                                        {item.text}
                                    </p>
                                    <div className="flex flex-row gap-1 mb-0">
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
                                        <span className="text-white text-base font-medium ml-1 inline-block pb-1">
                                            {item.rating.toFixed(1)}
                                        </span>
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

export default FeedbackCarousel;
