"use client";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import Image from "next/image";
import "@splidejs/react-splide/css";
import brandsData from "@/data/brands.json";

interface Brand {
    id: number;
    light: string;
    dark: string;
    alt: string;
    width: number;
    height: number;
    delay?: number;
}

interface BrandCarouselProps {
    darkMode?: boolean; // optional dark mode
}

export default function BrandCarousel({ darkMode = false }: BrandCarouselProps) {
    const brands: Brand[] = brandsData;

    return (
        <div
            id="autoscroll-carousel"
            className="splide slider-no-arrows slider-no-dots slider-pagination-top-right position-static mb-3"
        >
            <Splide
                options={{
                    type: "loop",
                    drag: "free",
                    focus: "center",
                    arrows: false,
                    pagination: false,
                    perPage: 5,
                    gap: "1rem",
                    autoScroll: {
                        speed: 1,
                    },
                    breakpoints: {
                        1024: { perPage: 4 },
                        768: { perPage: 3 },
                        480: { perPage: 2 },
                    },
                }}
                extensions={{ AutoScroll }}
                aria-label="Brand logos carousel"
            >
                {brands.map((brand) => (
                    <SplideSlide key={brand.id}>
                        {darkMode ? (
                            <Image
                                src={brand.dark}
                                alt={`${brand.alt} dark`}
                                width={brand.width}
                                height={brand.height}
                                loading="lazy"
                            />
                        ) : (
                            <>
                                <Image
                                    src={brand.light}
                                    alt={brand.alt}
                                    width={brand.width}
                                    height={brand.height}
                                    className="dark:hidden"
                                    loading="lazy"
                                />
                                <Image
                                    src={brand.dark}
                                    alt={`${brand.alt} dark`}
                                    width={brand.width}
                                    height={brand.height}
                                    className="hidden dark:flex"
                                    loading="lazy"
                                />
                            </>
                        )}
                    </SplideSlide>
                ))}
            </Splide>
        </div>
    );
}
