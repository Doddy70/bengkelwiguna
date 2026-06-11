"use client";

import React from "react";

interface FeatureCard5Props {
    icon: React.ReactNode;
    title: string;
    description: string;
    borderClass?: string;
    aosDelay?: number | string;
    layout?: "default" | "classic"; // 👈 Added layout type
}

const FeatureCard5: React.FC<FeatureCard5Props> = ({
    icon,
    title,
    description,
    borderClass = "border-white/40 border-b-0",
    aosDelay = 0,
    layout = "default",
}) => {
    // 🔹 Classic layout
    if (layout === "classic") {
        return (
            <div
                className="w-full"
                data-aos="zoom-in"
                data-aos-duration="400"
                data-aos-delay={aosDelay}
            >
                <div
                    className="flex flex-col rounded-xl p-8 cursor-pointer 
                               hover:border-blue-900 border-4 border-transparent 
                               transition duration-300"
                    style={{ background: "#002A78" }}
                >
                    {/* Icon */}
                    <div className="mx-auto w-16 h-16 flex justify-center items-center rounded-xl bg-blue-800">
                        {icon}
                    </div>

                    {/* Content */}
                    <div className="pt-14 text-center pe-4 ps-2 mb-2">
                        <h3 className="text-2xl font-medium text-white mb-2">
                            {title}
                        </h3>
                        <p className="font-normal text-white/75 text-base mb-0 pt-0">
                            {description}
                        </p>
                    </div>
                </div>
            </div>
        );
    }

    // 🔹 Default layout
    return (
        <div
            className={`p-6 border ${borderClass}`}
            data-aos="fade-up"
            data-aos-delay={aosDelay}
        >
            {icon}
            <div className="pt-14 font-dm pr-4 pl-2">
                <h3 className="text-2xl font-medium text-white mb-2">{title}</h3>
                <p className="text-white/75 text-lg mb-0 leading-7 pt-1">
                    {description}
                </p>
            </div>
        </div>
    );
};

export default FeatureCard5;
