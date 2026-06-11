"use client";

import React from "react";

interface FeatureCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    delay?: number;
    bgColor?: string;
    layout?: "default" | "centered"; // 👈 new layout prop
}

export default function FeatureCard({
    icon,
    title,
    description,
    delay = 100,
    bgColor,
    layout = "default",
}: FeatureCardProps) {
    if (layout === "centered") {
        // ------------------ CENTERED LAYOUT ------------------
        return (
            <div
                className="flex flex-col gap-4 lg:p-8 p-6 bg-white hover:shadow-xs rounded-xl border border-gray-200 mb-4 justify-center transition"
                data-aos="zoom-in"
                data-aos-delay={delay}
                data-aos-duration="400"
            >
                {/* Icon Circle */}
                <div
                    className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mt-3 mb-3 ${bgColor || "bg-gray-gradient"}`}
                >
                    {icon}
                </div>

                {/* Text Content */}
                <div className="flex flex-col justify-center text-center">
                    <h3 className="text-gray-900 text-2xl font-semibold mb-0">{title}</h3>
                    <p className="text-gray-800 text-lg lg:px-4 mt-2">{description}</p>
                </div>
            </div>
        );
    }

    // ------------------ DEFAULT LAYOUT ------------------
    return (
        <div
            className="flex flex-col gap-4 p-6 bg-gray-gradient dark:bg-image-none dark:bg-gray-800 rounded-xl border border-gray-200"
            data-aos="zoom-in"
            data-aos-delay={delay}
            data-aos-duration="400"
        >
            {/* Icon wrapper */}
            <div className={`w-16 h-16 rounded-full flex items-center justify-center ${bgColor}`}>
                {icon}
            </div>

            {/* Text content */}
            <div className="flex flex-col">
                <h3 className="text-gray-900 text-[22px] font-semibold mb-0 mt-1">{title}</h3>
                <p className="text-gray-800 font-normal text-[17px] mt-2 mb-0 leading-normal">
                    {description}
                </p>
            </div>
        </div>
    );
}
