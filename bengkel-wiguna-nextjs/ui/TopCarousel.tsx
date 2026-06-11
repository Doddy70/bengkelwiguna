"use client";

import { useEffect, useRef } from "react";
import Splide from "@splidejs/splide";
import "@splidejs/splide/css";

interface TopCarouselProps {
    height?: string;
    interval?: number;
    items?: string[];
}

export default function TopCarousel({
    height = "140px",
    interval = 2000,
    items = [
        "Affordable & scalable plans",
        "Plans that fit every stage",
        "Built to scale with your needs",
    ],
}: TopCarouselProps) {
    const splideRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!splideRef.current) return;

        const verticalSplide = new Splide(splideRef.current, {
            type: 'loop',
            direction: "ttb",
            height,
            perPage: 3,
            perMove: 1,
            autoplay: true,
            interval,
            arrows: false,
            pagination: true,
            drag: false,
        });

        verticalSplide.on("mounted move", () => {
            document
                .querySelectorAll(".splide__slide")
                .forEach((slide) =>
                    slide.classList.remove(
                        "slider-active",
                        "slider-active-1",
                        "slider-active-2"
                    )
                );

            const slides = verticalSplide.Components.Slides.get();
            const [a, b, c] = [0, 1, 2].map(
                (i) => slides[(verticalSplide.index + i) % slides.length]
            );
            if (a) a.slide.classList.add("slider-active-2");
            if (b) b.slide.classList.add("slider-active-1");
            if (c) c.slide.classList.add("slider-active");
        });

        verticalSplide.mount();

        return () => {
            verticalSplide.destroy();
        };
    }, [height, interval]);

    return (
        <div className="absolute bottom-0 left-0 z-10 m-5 flex flex-col w-full">
            <div
                id="vertical-carousel"
                ref={splideRef}
                className="splide overflow-hidden vertical-slider slider-no-dots"
            >
                <div className="splide__track">
                    <ul className="splide__list">
                        {items.map((item, idx) => (
                            <li key={idx} className="splide__slide">
                                <span className="inline-block py-1 px-3 bg-white rounded-full leading-[30px] text-base text-gray-900 font-medium">
                                    {item}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
