// components/ui/BadgeLink.tsx
"use client";

import { Check } from "react-feather";


interface BadgeLinkProps {

    label: string;
    delay?: number; // optional for AOS delay
    variant?: "defualt" | "color"; //  new prop
    bgColor?: string;
    textColor?: string;
}

export default function BadgeLink({

    label,
    delay = 0,
    variant = "defualt",
    bgColor = 'bg-cyan-500',
    textColor = 'text-gray-900',
}: BadgeLinkProps) {
    if (variant === "color") {
        return (
            <span
                data-aos="zoom-in"
                data-aos-delay={delay.toString().padStart(2, "0")}
                className={`inline-block py-1 px-5 rounded-full leading-8 text-[15px]  font-medium ${bgColor} ${textColor}`}
            >
                {label}
            </span>
        );
    }

    return (
        <span
            data-aos="zoom-in"
            data-aos-delay={delay.toString().padStart(2, "0")}
            className="flex items-center gap-2 py-2 px-3 bg-white border border-gray-200 rounded-full text-base font-medium text-gray-900 shadow-sm transition-all hover:shadow-md"
        >
            <Check size={20} strokeWidth={2} />
            {label}
        </span>
    );
}
