"use client";

import { useEffect, useRef, useState, useCallback } from "react";

interface CounterSectionProps {
    target: number; // e.g. 4.5
    subtitle?: string; // optional subtitle (not used in "simple")
    suffix?: string; // e.g. "k"
    preffix?: string; // optional prefix text
    duration?: number; // animation duration in ms
    textcolor?: string; // number text color
    subtextcolor?: string;
    layout?: "stack" | "line" | "simple"; // Layout
}

export default function CounterSection({
    target,
    subtitle = "",
    suffix = "k",
    preffix = "",
    duration = 2000,
    textcolor = "text-green-800",
    subtextcolor = "text-gray-600",
    layout = "stack",
}: CounterSectionProps) {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLDivElement | null>(null);
    const [hasAnimated, setHasAnimated] = useState(false);

    const animateCounter = useCallback(() => {
        const start = 0;
        const end = target;
        const increment = end / (duration / 16); // ~60fps
        let current = start;

        const step = () => {
            current += increment;
            if (current < end) {
                setCount(Number.isInteger(end) ? Math.floor(current) : +current.toFixed(1));
                requestAnimationFrame(step);
            } else {
                setCount(end);
            }
        };

        requestAnimationFrame(step);
    }, [target, duration]);

    useEffect(() => {
        const node = ref.current;
        if (!node) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !hasAnimated) {
                        animateCounter();
                        setHasAnimated(true);
                    }
                });
            },
            { threshold: 0.3 }
        );

        observer.observe(node);

        return () => {
            observer.unobserve(node);
        };
    }, [hasAnimated, animateCounter]);

    return (
        <div ref={ref} className="w-full">
            {layout === "stack" ? (
                // === STACKED LAYOUT ===
                <div
                    className="text-center flex flex-col"
                    data-aos="zoom-in"
                    data-aos-duration="500"
                    data-aos-delay="0"
                >
                    <h2 className={`lg:text-7xl text-5xl font-normal ${textcolor}`}>
                        {preffix}
                        {count}
                        {suffix}
                    </h2>
                    {subtitle && (
                        <p
                            className={`text-lg font-normal mb-0 mt-2 leading-tight text-gray-900 ${subtextcolor}`}
                            dangerouslySetInnerHTML={{ __html: subtitle }}
                        />
                    )}
                </div>
            ) : layout === "line" ? (
                // === INLINE (ROW) LAYOUT ===
                <div
                    className="flex flex-row gap-3 items-center"
                    data-aos="zoom-in"
                    data-aos-delay="200"
                    data-aos-duration="400"
                >
                    <h2 className={`lg:text-7xl text-5xl lg:w-44 mb-0 font-normal ${textcolor}`}>
                        {preffix}
                        {count}
                        {suffix}
                    </h2>
                    {subtitle && (
                        <p
                            className={`lg:text-lg text-base font-normal lg:font-medium leading-normal mb-0 ${subtextcolor}`}
                            dangerouslySetInnerHTML={{ __html: subtitle }}
                        />
                    )}
                </div>
            ) : (
                // === SIMPLE LAYOUT ===
                <h3 className={`text-5xl font-medium text-gray-900 ${textcolor}`}>
                    {preffix}
                    <span data-percentage={target} className="exsit-counter">
                        {count}
                    </span>
                    {suffix}
                </h3>
            )}
        </div>
    );
}
