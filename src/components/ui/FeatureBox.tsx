"use client";

import { ReactNode } from "react";

interface FeatureCardProps {
    icon: ReactNode;          // Pass any SVG/icon component
    title: string;            // e.g. "Content Management"
    description: string;      // e.g. "Our design services..."
    aosDelay?: number;        // Optional AOS delay
    bgColor?: string;
}

export default function FeatureCard({
    icon,
    title,
    description,
    aosDelay = 0,
    bgColor = "bg-gray-900"
}: FeatureCardProps) {
    return (
        <div
            className={`feature-div border border-gray-800 rounded-xl xl:p-11 p-6 pr-4 ${bgColor}`}
            data-aos="zoom-in"
            data-aos-duration="400"
            data-aos-delay={aosDelay}
        >
            <div className="flex flex-col">
                <div className="text-gray-100">{icon}</div>
                <h3 className="text-gray-100 font-medium mt-6 xl:text-3xl text-2xl">
                    {title}
                </h3>
                <p className="text-gray-400 mb-0 mt-1 text-base">{description}</p>
            </div>
        </div>
    );
}
