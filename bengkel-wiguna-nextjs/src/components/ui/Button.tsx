"use client";

import { FC, ReactNode, MouseEventHandler } from "react";
import { ArrowUpRight } from "react-feather";
import Link from "next/link";

interface ButtonProps {
    href?: string;
    onClick?: MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
    label: string;
    icon?: ReactNode;
    padding?: string;
    bgColor?: string;        // e.g. "bg-blue-600"
    hoverBgColor?: string;  // optional override e.g. "hover:bg-blue-700"
    textColor?: string;
    className?: string;
    type?: "button" | "submit" | "reset";
}

// ✅ Static Tailwind-safe hover map
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
    "bg-[#224297]": "hover:bg-[#1a3567]",
};

const Button: FC<ButtonProps> = ({
    href,
    onClick,
    label,
    icon = <ArrowUpRight size={20} className="group-hover:translate-x-1 transition duration-300" />,
    padding = "px-6 py-3",
    bgColor = "bg-blue-600",
    hoverBgColor,
    textColor = "text-white",
    className = "",
    type = "button",
}) => {
    const safeHoverClass = hoverBgColor || HOVER_MAP[bgColor] || "hover:opacity-90";
    const baseClasses = `inline-flex justify-between items-center group gap-2 ${padding} ${textColor} text-base font-medium rounded-lg ${bgColor} ${safeHoverClass} transition btn-transition duration-300 ${className}`;

    if (href) {
        return (
            <Link
                href={href}
                className={baseClasses}
                onClick={onClick as any}
                data-aos="zoom-in"
            >
                <span>{label}</span>
                {icon}
            </Link>
        );
    }

    return (
        <button
            type={type}
            onClick={onClick as any}
            className={baseClasses}
            data-aos="zoom-in"
        >
            <span>{label}</span>
            {icon}
        </button>
    );
};

export default Button;
