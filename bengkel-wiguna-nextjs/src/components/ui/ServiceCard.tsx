"use client";

import React from "react";

interface ServiceCardProps {
    icon: React.ElementType; // Feather icon component
    title: string;
    description: string;
    bgColor?: string; // background color (default teal-800)
    borderColor?: string; // border color (default teal-800)
    hoverBorderColor?: string; // hover border color (default teal-700)
}

const ServiceCard: React.FC<ServiceCardProps> = ({
    icon: Icon,
    title,
    description,
    bgColor = "bg-teal-800",
    borderColor = "border-teal-800",
    hoverBorderColor = "hover:border-teal-700",
}) => {
    return (
        <div
            className={`flex flex-col rounded-xl lg:p-8 p-6 cursor-pointer feature-div-hover ${bgColor} ${borderColor} border-4 ${hoverBorderColor} transition duration-500`}
        >
            {/* Icon */}
            <Icon size={55} strokeWidth={1} className="text-lime-300" />

            {/* Content */}
            <div className="lg:pt-16 pt-10">
                <h3 className="lg:text-2xl text-xl font-medium text-white mb-1">
                    {title}
                </h3>
                <p className="font-light text-white/70 text-[17px] leading-normal mb-0 lg:pt-1 pt-0">
                    {description}
                </p>
            </div>
        </div>
    );
};

export default ServiceCard;
