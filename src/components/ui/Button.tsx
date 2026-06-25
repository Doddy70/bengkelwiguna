"use client";

import { FC, ReactNode, MouseEventHandler } from "react";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const buttonVariants = cva(
  "inline-flex justify-between items-center group gap-2 text-base font-medium rounded-lg transition btn-transition duration-300",
  {
    variants: {
      intent: {
        primary: "bg-[#224297] text-white hover:bg-[#1a3567]",
        secondary: "bg-[#ffd900] text-black hover:bg-[#e6c300]",
        outline: "bg-transparent border border-gray-300 text-gray-800 hover:bg-gray-100",
        ghost: "bg-transparent text-gray-800 hover:bg-gray-100",
        destructive: "bg-red-600 text-white hover:bg-red-700",
      },
      size: {
        small: "px-4 py-2",
        medium: "px-6 py-3",
        large: "px-8 py-4",
      },
    },
    defaultVariants: {
      intent: "primary",
      size: "medium",
    },
  }
);

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

export interface ButtonProps extends VariantProps<typeof buttonVariants> {
    href?: string;
    onClick?: MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
    label: string;
    icon?: ReactNode;
    padding?: string;
    bgColor?: string;
    hoverBgColor?: string;
    textColor?: string;
    className?: string;
    type?: "button" | "submit" | "reset";
    target?: string;
}

const Button: FC<ButtonProps> = ({
    href,
    onClick,
    label,
    icon = <ArrowUpRight size={20} className="group-hover:translate-x-1 transition duration-300 text-current" />,
    padding,
    bgColor,
    hoverBgColor,
    textColor,
    className,
    type = "button",
    target,
    intent,
    size
}) => {
    const hasLegacyStyles = bgColor || textColor || padding;
    const legacyHoverBg = bgColor && (hoverBgColor || HOVER_MAP[bgColor] || "hover:opacity-90");

    const variantClasses = buttonVariants({ 
        intent: intent || (hasLegacyStyles ? null : undefined), 
        size: size || (padding ? null : undefined),
    });

    const classes = twMerge(
        variantClasses,
        padding,
        bgColor,
        legacyHoverBg,
        textColor,
        className
    );

    if (href) {
        return (
            <Link
                href={href}
                className={classes}
                onClick={onClick as any}
                data-aos="zoom-in"
                target={target}
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
            className={classes}
            data-aos="zoom-in"
        >
            <span>{label}</span>
            {icon}
        </button>
    );
};

export default Button;
