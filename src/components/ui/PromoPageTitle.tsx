"use client";

import React from "react";
import { Icon } from "@iconify/react";

interface PromoPageTitleProps {
    badgeText?: string;
    badgeIcon?: string;
    title: string;
    subtitle?: string;
    alignment?: "center" | "left";
    showDecorative?: boolean;
    theme?: "light" | "dark";
    className?: string;
}

/**
 * PromoPageTitle - Hero-style page title for Promotions
 *
 * Design features:
 * - Gradient badge with emoji/icon
 * - Large bold title
 * - Subtitle text
 * - Decorative elements (circles, blobs)
 */
const PromoPageTitle: React.FC<PromoPageTitleProps> = ({
    badgeText = "🔥 PROMO SPESIAL",
    badgeIcon = "solar:tag-price-linear",
    title,
    subtitle = "Hemat hingga 20% untuk perawatan kendaraan. Promo terbatas waktu!",
    alignment = "center",
    showDecorative = true,
    theme = "light",
    className = "",
}) => {
    const isCenter = alignment === "center";
    const isDark = theme === "dark";

    const textColor = isDark ? "text-white" : "text-gray-900";
    const subtitleColor = isDark ? "text-white/80" : "text-gray-600";

    return (
        <div
            className={`
                relative w-full py-16 lg:py-24
                ${isCenter ? "text-center" : "text-left"}
                ${className}
            `}
        >
            {/* Decorative Background Elements */}
            {showDecorative && (
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    {/* Gradient blob - top right */}
                    <div className="absolute -top-20 -right-20 w-80 h-80 bg-gradient-to-br from-[#224297]/10 to-[#ffd900]/10 rounded-full blur-3xl" />

                    {/* Gradient blob - bottom left */}
                    <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-gradient-to-tr from-[#ffd900]/10 to-[#224297]/10 rounded-full blur-3xl" />

                    {/* Decorative circles */}
                    <div className="absolute top-10 right-10 w-32 h-32 border border-[#224297]/10 rounded-full" />
                    <div className="absolute bottom-10 left-10 w-24 h-24 border border-[#ffd900]/20 rounded-full" />

                    {/* Small dots */}
                    <div className="absolute top-20 left-1/4 w-2 h-2 bg-[#ffd900]/40 rounded-full" />
                    <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-[#224297]/30 rounded-full" />
                    <div className="absolute bottom-1/4 right-1/3 w-2 h-2 bg-[#224297]/20 rounded-full" />
                </div>
            )}

            {/* Content Container */}
            <div className="relative z-10 max-w-screen-xl mx-auto px-4">
                {/* Badge */}
                {badgeText && (
                    <div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#224297] to-[#1a356d] text-white text-sm font-semibold shadow-lg mb-6"
                        data-aos="zoom-in"
                        data-aos-delay="0"
                        data-aos-duration="400"
                    >
                        <Icon icon={badgeIcon} className="w-4 h-4 text-[#ffd900]" />
                        <span>{badgeText}</span>
                    </div>
                )}

                {/* Title */}
                <h1
                    className={`
                        text-4xl md:text-5xl lg:text-6xl
                        font-black
                        ${textColor}
                        leading-tight
                        tracking-tight
                        mb-4
                        ${isCenter ? "max-w-4xl mx-auto" : ""}
                    `}
                    data-aos="fade-up"
                    data-aos-duration="200"
                >
                    {title}
                </h1>

                {/* Subtitle */}
                {subtitle && (
                    <p
                        className={`
                            text-lg md:text-xl
                            font-medium
                            ${subtitleColor}
                            max-w-2xl
                            ${isCenter ? "mx-auto" : ""}
                        `}
                        data-aos="fade-up"
                        data-aos-duration="300"
                    >
                        {subtitle}
                    </p>
                )}

                {/* Decorative underline (optional) */}
                <div
                    className={`
                        mt-8
                        ${isCenter ? "mx-auto" : ""}
                    `}
                >
                    <div className="h-1 w-24 bg-gradient-to-r from-[#224297] to-[#ffd900] rounded-full" />
                </div>
            </div>
        </div>
    );
};

export default PromoPageTitle;
