"use client";

import { ArrowUpRight } from "react-feather";
import Link from "next/link";

interface PriceCard2Props {
    title: string;
    description: string;
    price: string;
    period: string;
    features: string[];
    buttonText: string;
    buttonLink: string;
    bgColor?: string;
    borderColor?: string;
    textColor?: string;
    btnbgColor?: string;
    btntextColor?: string;
    padding?: string;
    checkIconcolor?: string;
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

export default function PriceCard2({
    title,
    description,
    price,
    period,
    features,
    buttonText,
    buttonLink,
    padding = "p-10",
    bgColor = "bg-gray-100",
    borderColor = "border-gray-200",
    textColor = "text-gray-900",
    btntextColor = "text-white",
    btnbgColor = "bg-blue-600",
    btnHoverBgColor,
    checkIconcolor = "text-blue-600",
}: PriceCard2Props) {
    const safeHoverClass =
        btnHoverBgColor || HOVER_MAP[btnbgColor] || "hover:opacity-90";

    return (
        <div className="w-full" data-aos="zoom-in" data-aos-duration="400">
            <div
                className={`flex flex-col ${padding} ${bgColor} ${borderColor} border rounded-xl gap-4 relative ${textColor}`}
            >
                {/* Title + Description */}
                <div>
                    <h3 className={`font-semibold ${textColor} text-3xl mb-3`}>{title}</h3>
                    <p className="font-medium mb-0 text-base mt-1">{description}</p>
                </div>

                {/* Price */}
                <h4 className="xl:text-5xl text-4xl font-bold leading-none my-4">
                    <span>{price}</span>
                    <span className="text-base font-medium inline-block leading-none tracking-wide">
                        {" "}
                        / {period}
                    </span>
                </h4>

                {/* Features */}
                <div className="mb-3">
                    {features.map((feature, idx) => (
                        <p
                            key={idx}
                            className="font-medium mb-2 text-base flex items-center gap-2"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                fill="currentColor"
                                className={`bi bi-check-circle-fill ${checkIconcolor}`}
                                viewBox="0 0 16 16"
                            >
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path>
                            </svg>
                            {feature}
                        </p>
                    ))}
                </div>

                {/* CTA Button */}
                <Link
                    href={buttonLink}
                    className={`inline-flex items-center justify-center group gap-2 px-6 py-3 ${btntextColor} text-base font-medium rounded-lg ${btnbgColor} ${safeHoverClass} transition duration-300`}
                    data-aos="zoom-in"
                    data-aos-duration="400"
                >
                    <span>{buttonText}</span>
                    <ArrowUpRight size={20} />
                </Link>
            </div>
        </div>
    );
}
