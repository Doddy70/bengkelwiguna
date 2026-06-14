"use client";

import React from "react";
import { Zap } from "react-feather";

interface PageTitle3Props {
    badgeText?: string;
    title: string;
    subtitle: string;
    widthClass?: string; // e.g. "xl:w-10/12 lg:w-2/3"
    padding?: string;
    alignment?: "center" | "start"; // alignment option
    icon?: React.ReactNode; // allow dynamic icon
    textColor?: string;
    subtitleColor?: string;
    subtitleClass?: string;
    textWeigth?: string;
    fontFamily?: string;
    badgeTextBG?: string;
    badgeTextColor?: string;

}

const PageTitle3: React.FC<PageTitle3Props> = ({
    badgeText,
    title,
    subtitle,
    padding,
    widthClass = "xl:w-10/12 lg:w-2/3 mx-auto",
    alignment = "center",
    icon = <Zap size={18} />,
    textColor = "text-gray-900",
    subtitleColor = "text-gray-800",
    subtitleClass = "",
    textWeigth= "font-semibold",
    fontFamily = "",
    badgeTextBG = "bg-white",
    badgeTextColor = "text-gray-900",
    
}) => {
    // map alignment to classes
    const alignmentClasses = alignment === "center" ? "items-center text-center" : "items-start text-start";
    const badgeBorder = badgeTextBG === "bg-white" ? "border border-gray-200" : "";
    
    return (
        <div
            className={`flex flex-col ${alignmentClasses} ${widthClass} justify-between ${padding}`}
        >
            {/* Badge */}
            {badgeText && (
                <div className="flex flex-row lg:mb-6 mb-4">
                    <div
                        className={`px-3 py-1  shadow-sm rounded-lg text-[14px] font-medium uppercase  items-center gap-2 flex w-auto ${badgeBorder} ${badgeTextColor} ${badgeTextBG}`}
                        data-aos="zoom-in"
                        data-aos-delay="0"
                        data-aos-duration="400"
                    >
                        {icon}
                        {badgeText}
                    </div>
                </div>
            )}

            {/* Title */}
            <h2
                className={`2xl:text-5xl md:text-4xl text-3xl ${textWeigth} mb-4 ${textColor} ${fontFamily}`}
                data-aos="fade-up"
                data-aos-duration="200"
            >
                {title}
            </h2>

            {/* Subtitle */}
            <p
                className={`font-normal text-[17px] ${subtitleColor} ${subtitleClass}`}
                data-aos="fade-up"
                data-aos-duration="300"
            >
                {subtitle}
            </p>
        </div>
    );
};

export default PageTitle3;
