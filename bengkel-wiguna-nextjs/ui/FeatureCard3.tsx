"use client";

import React from "react";
import { ArrowUpRight } from "react-feather";
import Link from "next/link";
import Image from "next/image";

interface FeatureCardProps {
    variant?: "simple" | "detailed" | "overlay"; // added overlay
    image: string;
    number?: number | string;
    title: string;
    description?: string;
    whatYouCanDo?: string[];
    bgColor?: string; // for number circle background
    link?: string; // for overlay layout button
}

const FeatureCard: React.FC<FeatureCardProps> = ({
    variant = "simple",
    image,
    number,
    title,
    description = "",
    whatYouCanDo = [],
    bgColor = "bg-cyan-500",
    link = "#",
}) => {
    // -------- Overlay Layout --------
    if (variant === "overlay") {
        return (
            <div className="flex flex-col p-4 bg-white/10 rounded-xl group">
                {/* Image */}
                <div className="relative overflow-hidden rounded-xl w-full h-[250px] group">
                    <Image
                        src={image}
                        alt={title}
                        fill
                        loading="lazy"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover transition-transform duration-[2000ms] group-hover:scale-105"
                    />
                </div>

                {/* Content */}
                <div className="flex flex-row justify-between mt-3 gap-3">
                    <h3 className="text-gray-100 font-medium text-3xl mb-0">
                        {title}
                    </h3>
                    <div className="mt-auto">
                        <Link
                            href={link}
                            aria-label="play"
                            className="w-12 h-12 flex items-center justify-center bg-yellow-400 rounded-full group-hover:rotate-45 transition duration-200"
                        >
                            <ArrowUpRight
                                size={28}
                                className="text-gray-900"
                                strokeWidth={1.5}
                            />
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    // -------- Simple Layout --------
    if (variant === "simple") {
        return (
            <div className="flex flex-col group">
                {/* Image */}
                <div className="relative overflow-hidden rounded-xl w-full h-[225px] group">
                    <Image
                        src={image}
                        alt={title}
                        fill
                        loading="lazy"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover transition-transform duration-[2000ms] group-hover:scale-105"
                    />
                </div>

                {/* Content */}
                <div className="flex flex-row gap-4 lg:mt-6 mt-4">
                    <div>
                        <div
                            className={`${bgColor} w-16 h-16 rounded-full flex items-center justify-center text-3xl font-medium text-white`}
                        >
                            {number}
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <h3 className="text-gray-900 lg:text-3xl text-2xl font-semibold leading-tight mb-1">
                            {title}
                        </h3>
                        <p className="text-gray-800 font-normal text-[17px] mt-1 mb-0">
                            {description}
                        </p>
                    </div>
                </div>
            </div>
        );
    }

    // -------- Detailed Layout --------
    return (
        <div className="flex flex-col group p-4 bg-orange-50 rounded-xl">
            {/* Image */}
            <div className="relative overflow-hidden rounded-xl w-full h-[225px] group">
                <Image
                    src={image}
                    alt={title}
                    fill
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-[2000ms] group-hover:scale-105"
                />
            </div>

            {/* Content */}
            <div className="flex flex-row gap-4 mt-4 mb-4">
                <div>
                    <div className="bg-teal-950 lg:w-16 w-12 lg:h-16 h-12 rounded-full flex items-center justify-center lg:text-3xl text-2xl font-medium text-white">
                        {number}
                    </div>
                </div>
                <div className="flex flex-col">
                    <h3 className="text-gray-900 font-semibold lg:text-3xl text-2xl leading-[1.1]">
                        {title}
                    </h3>
                    <p className="text-gray-800 font-medium mb-4 mt-2 text-base">
                        {description}
                    </p>

                    {/* Extra content */}
                    {whatYouCanDo.length > 0 && (
                        <>
                            <span className="text-[17px] text-gray-900 font-semibold mb-2 pb-1">
                                What you can do
                            </span>
                            {whatYouCanDo.map((item, index) => (
                                <p
                                    key={index}
                                    className="text-gray-800 text-base font-medium mb-2 lg:pr-4"
                                >
                                    {item}
                                </p>
                            ))}
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default FeatureCard;
