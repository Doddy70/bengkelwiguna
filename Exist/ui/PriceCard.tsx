"use client";

import React from "react";
import { ArrowRight, Zap } from "react-feather";

type Feature = { text: string };
type Section = { title: string; items: string[] };

type PriceCardProps = {
    title: string;
    description: string;
    price: string;
    priceSuffix?: string;
    borderColor?: string;
    buttonText: string;
    buttonLink: string;
    discountText?: string;
    features?: Feature[];
    sections?: Section[];
    aosDelay?: number | string;
    borderWidth?: number;
    colorTheme?: "lightblue" | "darkblue" | "default";
};

const PriceCard: React.FC<PriceCardProps> = ({
    title,
    description,
    price,
    priceSuffix = "/month",
    borderColor = "border-gray-300",
    buttonText,
    buttonLink,
    discountText,
    aosDelay = 0,
    borderWidth = 2,
    features = [],
    sections = [],
    colorTheme = "default",
}) => {
    // 🎨 Tailwind-safe color map
    const colorMap: Record<string, string> = {
        lightblue: "bg-gradient-to-b from-[#F2F8FF] to-[#E6F2FF]",
        darkblue: "bg-gradient-to-b from-blue-800 to-blue-900",
        default: "bg-gray-50",
    };

    // 🖋️ Auto text color
    const textColor = colorTheme === "darkblue" ? "text-white" : "text-gray-900";
    const subTextColor = colorTheme === "darkblue" ? "text-gray-100" : "text-gray-700";
    const borderdividerColor = colorTheme === "darkblue" ? "border-transparent" : "border-gray-200";
    const checkColor = colorTheme === "darkblue" ? "text-white" : "text-blue-800";

    return (
        <div
            className="w-full"
            data-aos="zoom-in"
            data-aos-duration="400"
            data-aos-delay={String(aosDelay)}
        >
            <div
                className={`flex flex-col p-10 dark:bg-gray-900 bg-image-none border border-${borderWidth} ${borderColor} rounded-xl mt-2 gap-4 relative ${colorMap[colorTheme]}`}
            >
                {/* Optional Badge */}
                {discountText && (
                    <div
                        className="absolute left-1/2 -top-4 -translate-x-1/2 px-4 py-2 shadow-sm rounded-lg text-xs font-semibold uppercase text-white bg-blue-700 flex items-center gap-2 w-auto"
                        data-aos="zoom-in"
                    >
                        <Zap size={18} />
                        {discountText}
                    </div>
                )}

                {/* Title + Description */}
                <div>
                    <h3 className={`font-semibold ${textColor} text-3xl mb-3`}>{title}</h3>
                    <p className={`${subTextColor} font-medium mb-0 text-base mt-1`}>
                        {description}
                    </p>
                </div>

                {/* Price */}
                <h4 className={`xl:text-5xl text-4xl font-bold ${textColor} leading-none mb-0`}>
                    {price}
                    <span className={`text-base font-medium ${subTextColor} inline-block leading-none tracking-wide`}>
                        {" "}
                        {priceSuffix}
                    </span>
                </h4>

                <div className={`border-t my-4 ${borderdividerColor}`}></div>

                {/* Button */}
                <a
                    href={buttonLink}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 text-white text-base font-medium bg-blue-600 hover:bg-blue-700 rounded-lg transition duration-300"
                >
                    <span>{buttonText}</span>
                    <ArrowRight size={20} />
                </a>
                <div className={`border-t my-4 ${borderdividerColor}`}></div>
                {/* Features */}
                {features.length > 0 && (
                    <>
                        <div>
                            {features.map((feature, idx) => (
                                <p
                                    key={idx}
                                    className={`${subTextColor} font-medium mb-2 text-base flex items-center gap-2`}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className={`bi bi-check-circle-fill ${checkColor}`} viewBox="0 0 16 16">
                                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path>
                                    </svg>
                                    {feature.text}
                                </p>
                            ))}
                        </div>
                    </>
                )}

                {/* Sections */}
                {sections.length > 0 && sections.map((section, idx) => (
                    <div key={idx} className="flex flex-col">
                        <div className={`border-t my-4 ${borderdividerColor}`}></div>
                        <span className={`text-[17px] ${textColor} font-semibold mb-2 pb-2`}>
                            {section.title}
                        </span>
                        {section.items.map((item, i) => (
                            <p
                                key={i}
                                className={`${subTextColor} text-base font-medium mb-2 lg:pr-6`}
                            >
                                {item}
                            </p>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PriceCard;
