"use client";

import React, { useEffect } from "react";
import "@splidejs/react-splide/css";
import Image from "next/image";

interface ProductGalleryProps {
    images: string[];
    layout?: "vertical" | "horizontal"; // choose layout
}

const ProductGallery: React.FC<ProductGalleryProps> = ({ images, layout = "vertical" }) => {
    useEffect(() => {
        const initSplide = async () => {
            const SplideCore = (await import("@splidejs/splide")).default;

            const main = new SplideCore("#main-carousel", {
                type: "fade",
                pagination: false,
                arrows: false,
                rewind: true,
                accessibility: false, 
            });

            const thumbs = new SplideCore("#thumbnail-carousel", {
                fixedWidth: 100,
                fixedHeight: layout === "vertical" ? 114 : undefined,
                gap: 10,
                rewind: true,
                pagination: false,
                isNavigation: true,
                direction: layout === "vertical" ? "ttb" : "ltr",
                height: layout === "vertical" ? "480px" : undefined,
                arrows: false,
                accessibility: false, 
            });

            main.sync(thumbs);
            main.mount();
            thumbs.mount();
        };

        initSplide();
    }, [layout]);

    return (
        <>
            {layout === "vertical" ? (
                // ----------------- VERTICAL LAYOUT -----------------
                <div className="flex w-full verticle-slider space-x-3">
                    {/* Thumbs */}
                    <div className="main-thumb relative">
                        <div className="splide slider-no-arrows slider-no-dots" id="thumbnail-carousel">
                            <div className="splide__track">
                                <ul className="splide__list">
                                    {images.map((src, i) => (
                                        <li key={i} className="splide__slide bg-gray-100 rounded-lg mb-2 overflow-hidden">
                                            <div className="relative w-24 h-[141px]">
                                                <Image
                                                    src={src}
                                                    alt={`thumb-${i}`}
                                                    fill
                                                    className="object-cover rounded-lg"
                                                    sizes="94px"
                                                />
                                            </div>
                                        </li>

                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Main */}
                    <div className="flex-1">
                        <div className="main-slider overflow-hidden relative">
                            <div className="splide slider-no-arrows slider-no-dots" id="main-carousel">
                                <div className="splide__track">
                                    <ul className="splide__list">
                                        {images.map((src, i) => (
                                            <li key={i} className="splide__slide text-center bg-gray-100 rounded-lg overflow-hidden">
                                                <Image
                                                    src={src}
                                                    alt={`product-${i}`}
                                                    className="w-full object-cover"
                                                    width={470}
                                                    height={586}
                                                />
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                // ----------------- HORIZONTAL LAYOUT -----------------
                <div className="relative w-full">
                    {/* Main */}
                    <div className="main-slider overflow-hidden relative">
                        <div className="splide slider-no-arrows slider-no-dots" id="main-carousel">
                            <div className="splide__track overflow-visible">
                                <ul className="splide__list">
                                    {images.map((src, i) => (
                                        <li
                                            key={i}
                                            className="splide__slide bg-gray-100 mx-1 py-0 rounded-lg overflow-hidden"
                                        >
                                            <div className="relative w-full h-[700px]"> {/* MUST have height */}
                                                <Image
                                                    src={src}
                                                    alt={`product-${i}`}
                                                    fill
                                                    className="object-cover rounded-lg"
                                                    priority={i === 0} // preload first image
                                                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                                />
                                            </div>
                                        </li>

                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Thumbs */}
                    <div className="main-thumb flex flex-row absolute bottom-0 start-0 z-10 w-full justify-center">
                        <div
                            className="splide slider-no-arrows slider-no-dots slider-active-broder-gray w-full"
                            id="thumbnail-carousel"
                        >
                            <div className="splide__track overflow-visible w-full block">
                                <ul className="splide__list justify-center flex flex-row">
                                    {images.map((src, i) => (
                                        <li
                                            key={i}
                                            className="splide__slide text-center bg-gray-100 p-0 rounded-lg mb-2 w-20"
                                        >
                                            <Image
                                                src={src}
                                                alt={`thumb-${i}`}
                                                className="w-100 inline-block rounded-lg"
                                                width={94}
                                                height={141}
                                            />
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default ProductGallery;
