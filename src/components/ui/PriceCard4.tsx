"use client";

import { ArrowUpRight } from "react-feather";
import Link from "next/link";
import React from "react";

interface PriceCard4Props {
    bannerText?: string;
    bannerIcon?: React.ReactNode;
    title: string;
    subtitle: string;
    price: string;
    period: string;
    buttonText: string;
    buttonLink: string;
    features: string[];
    outerBg?: string; // e.g. "bg-cyan-900"
    bannerTextColor?: string; // e.g. "text-cyan-400"
    bannerBg?: string; // optional banner bg
    cardBg?: string; // e.g. "bg-[#111111]"
    titleColor?: string;
    subtitleColor?: string;
    priceColor?: string;
    periodColor?: string;
    btnBg?: string;
    btnTextColor?: string;
    featureTextColor?: string;
    featureIconColor?: string;
    padding?: string;
}

export default function PriceCard4({
    bannerText = "Get 20% off annually",
    bannerIcon = (
        <svg
            viewBox="0 0 24 24"
            width="18"
            height="18"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
        </svg>
    ),
    title,
    subtitle,
    price,
    period,
    buttonText,
    buttonLink,
    features,
    outerBg = "bg-cyan-900",
    bannerTextColor = "text-cyan-400",
    bannerBg = "bg-transparent",
    cardBg = "bg-[#111111]",
    titleColor = "text-gray-100",
    subtitleColor = "text-gray-300",
    priceColor = "text-gray-100",
    periodColor = "text-gray-500",
    btnBg = "bg-cyan-900",
    btnTextColor = "text-cyan-400",
    featureTextColor = "text-gray-200",
    featureIconColor = "text-cyan-400",
    padding = "lg:p-10 p-6",
}: PriceCard4Props) {
    return (
        <div
            className={`flex flex-col p-1 rounded-xl ${outerBg}`}
            data-aos="zoom-in"
            data-aos-duration="400"
        >
            {/* Top Banner */}
            {bannerText && (
                <div
                    className={`py-1 text-xs font-semibold uppercase text-center flex items-center justify-center gap-1 ${bannerTextColor} ${bannerBg}`}
                >
                    {bannerIcon}
                    {bannerText}
                </div>
            )}

            {/* Main Card */}
            <div className={`flex flex-col gap-6 rounded-xl ${cardBg} ${padding}`}>
                {/* Title + Subtitle */}
                <div>
                    <h3 className={`${titleColor} font-medium text-3xl`}>{title}</h3>
                    <p className={`${subtitleColor} font-medium text-base mt-1 lg:pr-5`}>
                        {subtitle}
                    </p>
                </div>

                {/* Price */}
                <h4
                    className={`lg:text-5xl text-4xl font-bold leading-none mb-0 ${priceColor}`}
                >
                    <span>{price}</span>
                    <span
                        className={`text-sm font-medium tracking-wide ml-1 ${periodColor}`}
                    >
                        / {period}
                    </span>
                </h4>

                {/* Divider */}
                <div className="border-t border-gray-800"></div>

                {/* CTA Button */}
                <Link
                    href={buttonLink}
                    className={`rounded-md px-5 py-3 text-center text-base font-medium inline-flex items-center justify-center transition ${btnBg} ${btnTextColor} hover:brightness-95`}
                >
                    <span>{buttonText}</span>
                    <ArrowUpRight size={20} className="ml-2" />
                </Link>

                {/* Divider */}
                <div className="border-t border-gray-800"></div>

                {/* Features */}
                <div className={`flex flex-col gap-2 text-base font-medium ${featureTextColor}`}>
                    {features.map((feature, idx) => (
                        <p key={idx} className="flex items-center gap-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                fill="currentColor"
                                className={featureIconColor}
                                viewBox="0 0 16 16"
                            >
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path>
                            </svg>
                            {feature}
                        </p>
                    ))}
                </div>
            </div>
        </div>
    );
}
