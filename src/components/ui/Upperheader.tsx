'use client';

import Link from "next/link";

interface UpperHeaderProps {
    bgColor?: string;   // Tailwind bg class
    textColor?: string; // Tailwind text class
    link?: string;      // CTA link
    message?: string;   // Message text
    linkText?: string;  // CTA text
}

export default function UpperHeader({
    bgColor = "bg-lime-400",
    textColor = "text-gray-900",
    link = "#",
    message = "Get the definite payments pricing guide for platforms",
    linkText = "Shop now",
}: UpperHeaderProps) {
    return (
        <div className={`upper-header ${bgColor} text-center font-sora`}>
            <p
                className={`${textColor} font-normal py-2 m-0 text-[15px] dark:text-dark-black`}
            >
                {message}{" "}
                <Link href={link} className="font-semibold underline">
                    {linkText}
                </Link>
            </p>
        </div>
    );
}
