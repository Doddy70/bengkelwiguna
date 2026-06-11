"use client";

import React from "react";
import Image from "next/image";

interface GradientFeatureCardProps {
    image: string;
    title: string;
    description?: string;
    highlight?: string;
    aosDelay?: number | string;
    aosDuration?: number | string;
    colorTheme?: "darkblue" | "default" | "lightblue";
    layout?: "default" | "modern" | "classic" | "lightgrey";
}

const GradientFeatureCard: React.FC<GradientFeatureCardProps> = ({
    image,
    title,
    description,
    highlight,
    aosDelay = 0,
    aosDuration = 400,
    colorTheme = "default",
    layout = "default",
}) => {
    // 🎨 Background color map
    const colorMap: Record<string, string> = {
        darkblue: "bg-gradient-to-b from-blue-800 to-blue-900",
        default: "bg-gradient-to-b from-[#EBF3FF] to-[#F2F7FF]",
        lightblue: "bg-gradient-to-b from-[#B3D2FF] to-[#F2F7FF]",
    };

    const textColor = colorTheme === "darkblue" ? "text-white" : "text-gray-900";

    // ⚪ Modern layout
    if (layout === "modern") {
        return (
            <div
                className="rounded-2xl"
                data-aos="fade-up"
                data-aos-duration={String(aosDuration)}
                data-aos-delay={String(aosDelay)}
            >
                <div className="text-center">
                    <Image
                        src={image}
                        alt={title}
                        width={300}
                        height={200}
                        className="pt-3 mx-auto w-auto h-auto"
                        style={{ width: "auto", height: "auto" }}
                    />
                </div>
                <div className="ps-2 pt-4 mt-2">
                    <h3 className="mb-2 text-gray-500 font-semibold text-3xl tracking-tight">
                        {highlight && <span className="text-gray-900">{highlight}</span>} {title}
                    </h3>
                </div>
            </div>
        );
    }

    // 🩵 Default gradient layout
    if (layout === "default") {
        return (
            <div
                className={`rounded-2xl p-6 ${colorMap[colorTheme]} dark:from-[#111] dark:to-[#333]`}
                data-aos="fade-up"
                data-aos-duration={String(aosDuration)}
                data-aos-delay={String(aosDelay)}
            >
                <div className="text-center">
                    <Image
                        src={image}
                        alt={title}
                        width={300}
                        height={200}
                        className="pt-3 mx-auto w-auto h-auto"
                        style={{ width: "auto", height: "auto" }}
                    />
                </div>

                <div className="ps-2 pt-4 mt-2">
                    <h3 className={`mb-2 font-semibold text-2xl ${textColor}`}>
                        {title}
                    </h3>
                    {description && (
                        <p className={`mb-0 text-lg opacity-90 ${textColor}`}>
                            {description}
                        </p>
                    )}
                </div>
            </div>
        );
    }

    // 🌈 Classic layout
    if (layout === "classic") {
        return (
            <div
                className="rounded-2xl"
                data-aos="zoom-in"
                data-aos-duration={String(aosDuration)}
                data-aos-delay={String(aosDelay)}
            >
                <div className="text-center">
                    <Image
                        src={image}
                        alt={title}
                        width={300}
                        height={200}
                        className="pt-3 mx-auto w-auto h-auto"
                        style={{ width: "auto", height: "auto" }}
                    />
                </div>
                <div className="ps-2 pt-4 mt-2">
                    <h3 className="mb-2 text-white font-semibold text-2xl">
                        {title}
                    </h3>
                    {description && (
                        <p className="text-gray-300 mb-0 text-lg leading-6">
                            {description}
                        </p>
                    )}
                </div>
            </div>
        );
    }

    // ⚪ Lightgrey layout
    if (layout === "lightgrey") {
        return (
            <div
                className="rounded-2xl"
                data-aos="fade-up"
                data-aos-duration={String(aosDuration)}
                data-aos-delay={String(aosDelay)}
            >
                <div className="text-center rounded-2xl bg-gray-200 border border-gray-300 h-[350px] flex justify-center items-center">
                    <Image
                        src={image}
                        alt={title}
                        width={300}
                        height={200}
                        className="pt-3 px-6 w-auto h-auto"
                        style={{ width: "auto", height: "auto" }}
                    />
                </div>
                <div className="ps-2 pt-4 mt-2">
                    <h3 className="mb-2 text-gray-900 font-semibold text-2xl">
                        {title}
                    </h3>
                    {description && (
                        <p className="text-gray-700 mb-0 text-lg leading-6">
                            {description}
                        </p>
                    )}
                </div>
            </div>
        );
    }

    return null;
};

export default GradientFeatureCard;
