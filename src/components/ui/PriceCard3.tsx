"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "react-feather";

interface PriceCard3Props {
    title: string;
    price: string;
    period: string;
    buttonText: string;
    buttonLink: string;
    features: string[];
    bgColor?: string;
    borderColor?: string;
    textColor?: string;
    btnBgColor?: string;
    btnTextColor?: string;
    padding?: string;
    btnHoverBgColor?: string; // ✅ optional override
}

// ✅ Tailwind-safe static hover map
const HOVER_MAP: Record<string, string> = {
    "bg-blue-600": "hover:bg-blue-800",
    "bg-orange-500": "hover:bg-orange-600",
    "bg-lime-300": "hover:bg-lime-400",
    "bg-cyan-500": "hover:bg-cyan-700",
    "bg-yellow-400": "hover:bg-yellow-500",
    "bg-cyan-600": "hover:bg-cyan-700",
    "bg-gray-900": "hover:bg-gray-800",
    "bg-blue-800": "hover:bg-blue-700",
    "bg-gray-800": "hover:bg-gray-700",
    "bg-teal-800": "hover:bg-teal-700",
    "bg-green-800": "hover:bg-green-700",
    "bg-red-600": "hover:bg-red-700",
};

const PriceCard3: React.FC<PriceCard3Props> = ({
    title,
    price,
    period,
    buttonText,
    buttonLink,
    features,
    bgColor = "bg-white",
    borderColor = "border-gray-300",
    textColor = "text-gray-900",
    btnBgColor = "bg-lime-300",
    btnTextColor = "text-gray-900",
    padding = "p-6",
    btnHoverBgColor,
}) => {
    const safeHoverClass =
        btnHoverBgColor || HOVER_MAP[btnBgColor] || "hover:opacity-90";

    return (
        <div
            data-aos="zoom-in"
            data-aos-duration="400"
            data-aos-delay="200"
            className={`flex lg:flex-row flex-col ${padding} ${bgColor} ${borderColor} border rounded-xl font-sora w-full mb-5`}
        >
            {/* Left side: title, price, button */}
            <div className="flex flex-col lg:w-1/2 lg:pr-5 pr-2 mb-3 lg:mb-0">
                <span className={`font-semibold ${textColor} text-base`}>{title}</span>
                <h2 className={`text-4xl font-semibold ${textColor} my-3`}>
                    {price}
                    <span className="text-base font-normal text-gray-700 inline-block">
                        {" "}
                        /{period}
                    </span>
                </h2>
                <div>
                    <Link
                        href={buttonLink}
                        className={`inline-flex items-center justify-center gap-2 py-4 px-6 ${btnTextColor} text-base font-medium ${btnBgColor} ${safeHoverClass} rounded-lg transition duration-300`}
                    >
                        <span>{buttonText}</span>
                        <ArrowUpRight size={20} />
                    </Link>
                </div>
            </div>

            {/* Right side: features list */}
            <div className="flex flex-col lg:w-1/2 space-y-1">
                {features.map((feature, idx) => (
                    <p
                        key={idx}
                        className="text-gray-800 text-[17px] leading-normal font-normal items-center gap-3 flex"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            fill="currentColor"
                            className="bi bi-check-circle-fill"
                            viewBox="0 0 16 16"
                        >
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path>
                        </svg>
                        {feature}
                    </p>
                ))}
            </div>
        </div>
    );
};

export default PriceCard3;
