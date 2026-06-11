"use client";

import React from "react";
import { Grid } from "react-feather"; // pick any feather icon you like
import Image from "next/image";
interface FeatureCardProps {
    image: string;
    title: string;
    description: string;
    icon?: React.ReactNode;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
    image,
    title,
    description,
    icon = <Grid size={26} className="text-gray-900" />, // default icon
}) => {
    return (
        <div className="w-full">
            {/* Image with hover zoom */}
            <div className="overflow-hidden rounded-2xl group relative w-full h-[350px]">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-1000"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                    loading="lazy"
                />
            </div>

            {/* Icon + Text */}
            <div className="flex flex-row gap-4 pt-3 mt-4">
                <div>
                    <div className="flex items-center justify-center text-center w-16 h-16 rounded-full bg-lime-300">
                        {icon}
                    </div>
                </div>
                <div>
                    <h3 className="text-gray-900 font-semibold text-2xl lg:text-3xl mt-0">
                        {title}
                    </h3>
                    <p className="text-gray-900 font-normal text-lg mt-2 mb-0">
                        {description}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default FeatureCard;
