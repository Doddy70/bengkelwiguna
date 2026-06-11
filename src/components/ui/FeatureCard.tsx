"use client";

import { BookOpen, ArrowUpRight } from "react-feather"; // Feather icons
import Link from "next/link";

interface FeatureCardProps {
    icon?: React.ReactNode;
    title: string;
    description: string;
    link: string;
    linkText?: string;
}

export default function FeatureCard({
    icon = <BookOpen className="text-white w-7 h-7" />, // default icon
    title,
    description,
    link,
    linkText = "Find out more",
}: FeatureCardProps) {
    return (
        <div
            className="flex flex-row lg:gap-6 gap-4 pe-lg-5 cursor-pointer"
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay="0"
        >
            {/* Icon */}
            <div>
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[linear-gradient(to_bottom,#fd7e14,#fd9843)]">
                    {icon}
                </div>
            </div>

            {/* Content */}
            <div className="flex flex-col">
                <h3 className="text-2xl font-semibold text-gray-900 leading-tight">
                    {title}
                </h3>
                <p className="text-gray-600 font-medium text-[17px] lg:pr-20 mb-3 mt-4">
                    {description}
                </p>
                <div>
                    <Link
                        href={link}
                        className="inline-flex items-center text-gray-800 text-md font-semibold"
                    >
                        {linkText}
                        <ArrowUpRight className="ml-2 w-4 h-4" /> {/* Feather arrow */}
                    </Link>
                </div>
            </div>
        </div>
    );
}
