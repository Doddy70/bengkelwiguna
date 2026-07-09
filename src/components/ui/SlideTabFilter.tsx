"use client";

import React, { useRef, useEffect, useState } from "react";
import { Icon } from "@iconify/react";

interface Category {
    id: number;
    name: string;
    slug?: string;
}

interface SlideTabFilterProps {
    categories: Category[];
    selectedCategory: string;
    onSelect: (category: string) => void;
}

export default function SlideTabFilter({
    categories,
    selectedCategory,
    onSelect,
}: SlideTabFilterProps) {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(false);

    const checkScroll = () => {
        if (!scrollRef.current) return;
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        setCanScrollLeft(scrollLeft > 0);
        setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 1);
    };

    useEffect(() => {
        checkScroll();
        window.addEventListener("resize", checkScroll);
        return () => window.removeEventListener("resize", checkScroll);
    }, []);

    const scroll = (direction: "left" | "right") => {
        if (!scrollRef.current) return;
        const scrollAmount = 200;
        scrollRef.current.scrollBy({
            left: direction === "left" ? -scrollAmount : scrollAmount,
            behavior: "smooth",
        });
    };

    // Calculate which tab is selected for the indicator
    const selectedIndex = categories.findIndex((c) => c.name === selectedCategory);

    return (
        <div className="relative group">
            {/* Navigation Arrows - Desktop */}
            <div className="hidden lg:flex absolute top-1/2 -translate-y-1/2 -left-4 z-20">
                <button
                    onClick={() => scroll("left")}
                    aria-label="Scroll left"
                    className={`w-10 h-10 rounded-full bg-white/80 dark:bg-neutral-800/80 backdrop-blur-md shadow-lg flex items-center justify-center transition-all duration-200 ${
                        canScrollLeft
                            ? "opacity-100 hover:bg-white dark:hover:bg-neutral-700 cursor-pointer"
                            : "opacity-0 pointer-events-none"
                    }`}
                >
                    <Icon icon="solar:alt-arrow-left-linear" className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                </button>
            </div>

            <div className="hidden lg:flex absolute top-1/2 -translate-y-1/2 -right-4 z-20">
                <button
                    onClick={() => scroll("right")}
                    aria-label="Scroll right"
                    className={`w-10 h-10 rounded-full bg-white/80 dark:bg-neutral-800/80 backdrop-blur-md shadow-lg flex items-center justify-center transition-all duration-200 ${
                        canScrollRight
                            ? "opacity-100 hover:bg-white dark:hover:bg-neutral-700 cursor-pointer"
                            : "opacity-0 pointer-events-none"
                    }`}
                >
                    <Icon icon="solar:alt-arrow-right-linear" className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                </button>
            </div>

            {/* Tab Container with Glassmorphism */}
            <div className="relative rounded-2xl bg-white/60 dark:bg-neutral-900/60 backdrop-blur-xl border border-white/20 dark:border-neutral-700/30 shadow-xl shadow-blue-900/5 dark:shadow-black/20 overflow-hidden">
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 via-white/30 to-blue-50/50 dark:from-blue-900/10 dark:via-neutral-800/20 dark:to-blue-900/10 pointer-events-none" />

                {/* Scrollable Tabs Container */}
                <div
                    ref={scrollRef}
                    onScroll={checkScroll}
                    className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory scroll-smooth py-3 px-4 gap-2"
                    style={{
                        scrollbarWidth: "none",
                        msOverflowStyle: "none",
                        WebkitOverflowScrolling: "touch",
                    }}
                >
                    {categories.map((cat, index) => {
                        const isSelected = selectedCategory === cat.name;
                        const isFirst = index === 0;
                        const isLast = index === categories.length - 1;

                        return (
                            <button
                                key={cat.name}
                                onClick={() => onSelect(cat.name)}
                                aria-pressed={isSelected}
                                className={`
                                    relative flex-shrink-0 px-5 py-2.5 rounded-xl text-sm font-semibold
                                    transition-all duration-300 ease-out cursor-pointer
                                    snap-start whitespace-nowrap
                                    ${isSelected
                                        ? "text-white shadow-lg shadow-blue-900/25"
                                        : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                                    }
                                `}
                            >
                                {/* Active Background */}
                                {isSelected && (
                                    <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#224297] to-[#1e3a7b] shadow-lg shadow-blue-900/30 animate-[tabFadeIn_200ms_ease-out]" />
                                )}

                                {/* Hover Background */}
                                {!isSelected && (
                                    <span className="absolute inset-0 rounded-xl bg-gray-100/80 dark:bg-neutral-700/50 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                                )}

                                {/* Icon for "Semua Layanan" */}
                                {cat.name === "Semua Layanan" && (
                                    <Icon
                                        icon="solar:grid-horizontal-linear"
                                        className={`inline-block w-4 h-4 mr-1.5 -mt-0.5 ${
                                            isSelected ? "text-yellow-300" : "text-gray-400"
                                        }`}
                                    />
                                )}

                                {/* Icon for specific categories */}
                                {cat.name !== "Semua Layanan" && (
                                    <Icon
                                        icon={getCategoryIcon(cat.name)}
                                        className={`inline-block w-4 h-4 mr-1.5 -mt-0.5 ${
                                            isSelected ? "text-yellow-300" : "text-gray-400"
                                        }`}
                                    />
                                )}

                                {/* Text */}
                                <span className="relative z-10">{cat.name}</span>

                                {/* Active Indicator Dot */}
                                {isSelected && (
                                    <span className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-yellow-400 animate-pulse" />
                                )}
                            </button>
                        );
                    })}
                </div>

                {/* Fade Edges - Mobile indicator */}
                <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-white/60 to-transparent dark:from-neutral-900/60 pointer-events-none lg:hidden" />
                <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white/60 to-transparent dark:from-neutral-900/60 pointer-events-none lg:hidden" />
            </div>

            {/* Result Count Badge */}
            <div className="mt-3 flex items-center justify-center">
                <span className="text-xs text-gray-500 dark:text-gray-400 bg-gray-100/80 dark:bg-neutral-800/50 px-3 py-1 rounded-full">
                    {selectedCategory === "Semua Layanan"
                        ? `Menampilkan semua layanan`
                        : `Filter: ${selectedCategory}`}
                </span>
            </div>
        </div>
    );
}

// Icon mapping for categories
function getCategoryIcon(categoryName: string): string {
    const iconMap: Record<string, string> = {
        "Tune Up": "solar:settings-linear",
        "Servis AC Mobil": "solar:snowflake-linear",
        "Servis Kaki-Kaki": "solar:car-linear",
        "Servis Transmisi": "solar:gear-linear",
        "Overhaul": "solar:toolkit-linear",
        "Semi Overhaul": "solar:hammer-linear",
        "Ganti Ban": "solar:circle-linear",
        "Balancing": "solar:balance-linear",
        "Spooring": "solar:ruler-linear",
        "Servis Berkala": "solar:calendar-linear",
        "Ganti Oli Mesin": "solar:drop-linear",
        "Ganti Oli Transmisi": "solar:water-drop-linear",
        "Servis Rem": "solar:shield-check-linear",
        "Servis Radiator": "solar:heat-linear",
    };

    return iconMap[categoryName] || "solar:tag-linear";
}
