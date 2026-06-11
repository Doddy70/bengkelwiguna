"use client";

import { ReactNode } from "react";
import Button from "./Button";

interface FeatureIconProps {
    icon?: ReactNode;
    value?: string | number;
    suffix?: string;
    title: string;
    link?: string;
    linkText?: string;
    description?: string;
    aosDelay?: number;
    bgColor?: string;
    iconBgcolor?: string;
    variant?: "default" | "horizontal" | "classic";
}

export default function FeatureIcon({
    icon,
    value,
    suffix,
    title,
    link,
    linkText = "Read more",
    description,
    aosDelay = 0,
    bgColor = "bg-gray-900",
    iconBgcolor = "bg-lime-gradient",
    variant = "default",
}: FeatureIconProps) {
    // ---------- Horizontal Layout ----------
    if (variant === "horizontal") {
        return (
            <div
                className="flex flex-row gap-5 mt-6"
                data-aos="fade-up"
                data-aos-delay={aosDelay}
                data-aos-duration="400"
            >
                {/* Counter */}
                <div className="w-48">
                    <h3 className="text-gray-900 lg:text-5xl text-4xl font-semibold">
                        <span className="exsit-counter">{value}</span>
                        {suffix && <span className="fw-400">{suffix}</span>}
                    </h3>
                </div>

                {/* Content */}
                <div className="flex flex-col">
                    <h4
                        className="text-gray-900 text-2xl font-medium mb-4"
                        dangerouslySetInnerHTML={{ __html: title }}
                    />

                    {link && (
                        <Button
                            href={link}
                            label={linkText}
                            padding="py-0 px-0"
                            bgColor="transparent"
                            textColor="text-gray-900"
                        />
                    )}
                </div>
            </div>
        );
    }

    // ---------- Classic Layout ----------
    if (variant === "classic") {
        return (
            <div
                className="border border-gray-200 bg-white rounded-xl p-8 pe-4 dark:bg-gray-800"
                data-aos="zoom-in"
                data-aos-duration="400"
                data-aos-delay={aosDelay}
            >
                <div className="flex flex-col">
                    {/* Icon */}
                    {icon && (
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-b from-orange-500 to-orange-400 flex items-center justify-center text-white text-center">
                            {icon}
                        </div>
                    )}

                    {/* Title */}
                    <h3 className="text-gray-900 text-xl font-semibold pt-10">
                        {title}
                    </h3>

                    {/* Description */}
                    {description && (
                        <p className="text-[17px] leading-[26px] text-gray-900/75 dark:text-gray-200 font-normal py-3">
                            {description}
                        </p>
                    )}

                    {/* Link */}
                    {link && (
                        <a
                            href={link}
                            className="text-gray-900 font-medium text-[16px] mb-0 inline-flex items-center group"
                        >
                            {linkText}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="18"
                                height="18"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="ms-2 group-hover:translate-x-1 transition-transform duration-200"
                            >
                                <line x1="7" y1="17" x2="17" y2="7" />
                                <polyline points="7 7 17 7 17 17" />
                            </svg>
                        </a>
                    )}
                </div>
            </div>
        );
    }

    // ---------- Default Layout ----------
    return (
        <div
            className={`feature-div border border-gray-800 rounded-xl lg:p-6 p-4 pr-4 ${bgColor}`}
            data-aos="zoom-in"
            data-aos-duration="400"
            data-aos-delay={aosDelay}
        >
            <div className="flex flex-col">
                {/* Icon */}
                {icon && (
                    <div
                        className={`w-16 h-16 rounded-xl flex items-center justify-center text-center ${iconBgcolor}`}
                    >
                        {icon}
                    </div>
                )}

                {/* Counter */}
                {value && (
                    <h3 className="text-gray-100 lg:text-5xl text-3xl font-semibold mt-6">
                        <span className="exsit-counter">{value}</span>
                        {suffix && <span className="font-normal">{suffix}</span>}
                    </h3>
                )}

                {/* Title */}
                <h4
                    className="text-gray-200 text-2xl font-medium mb-4 mt-4"
                    dangerouslySetInnerHTML={{ __html: title }}
                />

                {/* Link */}
                {link && (
                    <Button
                        href={link}
                        label={linkText}
                        padding="py-0 px-0"
                        bgColor="transparent"
                    />
                )}
            </div>
        </div>
    );
}
