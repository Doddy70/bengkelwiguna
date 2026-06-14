// components/ServiceCard.tsx
"use client";

import React, { ComponentType } from "react";
import { ArrowUpRight } from "react-feather";

interface ServiceCardProps {
    title: string;
    description: string;
    link: string;
    icon: ComponentType<{ size?: number; className?: string; strokeWidth?: number }>;
    delay?: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
    title,
    description,
    link,
    icon: Icon,
    delay = 0,
}) => {
    return (
        <div
            className="w-full aos-init aos-animate"
            data-aos="zoom-in"
            data-aos-duration="400"
            data-aos-delay={delay}
        >
            <div className="flex flex-row gap-8 p-6 bg-green-50 rounded-xl border border-gray-200 cursor-pointer hover:shadow-xs transition-shadow">
                {/* Dynamic Icon */}
                <div className="flex-shrink-0">
                    <Icon size={60} className="text-green-800" strokeWidth={1.2} />
                </div>

                {/* Content */}
                <div className="flex flex-col">
                    <h3 className="text-gray-900 text-2xl font-semibold">{title}</h3>
                    <p className="text-gray-800 mt-2 xl:pr-12 text-lg">{description}</p>
                    <div className="mt-3">
                        <a
                            href={link}
                            className="inline-flex items-center gap-2 text-gray-900 text-base font-medium hover:underline"
                        >
                            Discover more <ArrowUpRight size={16} strokeWidth={2} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;
