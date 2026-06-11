"use client";

import { useState } from "react";
import * as FeatherIcons from "react-feather";
import tabDataJson from "@/data/tabdata.json";
import Image from "next/image";

type FeatherIconKeys = keyof typeof FeatherIcons;

interface Tab {
    id: string;
    label: string;
    icon: FeatherIconKeys;
    image: string;
    heading: string;
    description: string;
    points: string[];
}

const tabData = tabDataJson as Tab[];

export default function Tabs() {
    const [activeTab, setActiveTab] = useState<Tab["id"]>(tabData[0].id);

    return (
        <div className="w-full">
            {/* Tabs Navigation */}
            <div className="flex justify-center lg:pb-10 pb-8">
                <div
                    className="inline-flex items-center justify-center bg-gray-50 border border-gray-200 rounded-xl p-1"
                    role="tablist"
                >
                    {tabData.map((tab) => {
                        const Icon = FeatherIcons[tab.icon];
                        return (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                role="tab"
                                aria-selected={activeTab === tab.id}
                                className={`tab-btn lg:px-8 px-5 py-3 text-[17px] font-medium rounded-lg transition-colors duration-300 focus:outline-none ${activeTab === tab.id
                                        ? "bg-brand-blue shadow-lg text-white"
                                        : "text-gray-800 hover:text-brand-blue"
                                    }`}
                            >
                                {/* Desktop Label */}
                                <span className="lg:flex hidden">{tab.label}</span>

                                {/* Mobile Icon */}
                                <span className="icon flex lg:hidden">
                                    {Icon && <Icon className={activeTab === tab.id ? "text-white" : "text-brand-blue"} size={24} />}
                                </span>
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* Tab Content */}
            <div className="mt-6">
                {tabData.map((tab) => {
                    const Icon = FeatherIcons[tab.icon];
                    return (
                        <div
                            key={tab.id}
                            hidden={activeTab !== tab.id}
                            className="flex flex-col lg:flex-row gap-6 animate-in fade-in duration-500"
                        >
                            {/* Image */}
                            <div className="lg:w-1/2">
                                <div className="overflow-hidden rounded-2xl image-zoom-onhover shadow-xl">
                                    <Image
                                        src={tab.image}
                                        alt={tab.label}
                                        className="w-full object-cover"
                                        loading="lazy"
                                        width={588}
                                        height={402}
                                    />
                                </div>
                            </div>

                            {/* Content */}
                            <div className="lg:w-1/2 mt-3 lg:mt-0 lg:pl-4">
                                <div className="xl:pl-12 lg:pl-6 w-full xl:max-w-[85%] flex flex-col">
                                    <div className="flex items-center justify-center w-16 h-16 rounded-full bg-brand-blue shadow-lg shadow-blue-900/20">
                                        {Icon && <Icon size={28} className="text-white" />}
                                    </div>

                                    <h3 className="text-gray-900 font-bold text-2xl lg:text-3xl mt-6 italic tracking-tight">
                                        {tab.heading}
                                    </h3>
                                    <p className="text-gray-600 font-medium text-[17px] mb-3 mt-4 leading-relaxed">
                                        {tab.description}
                                    </p>

                                    <div className="border-t border-gray-100 my-6"></div>

                                    {tab.points.map((point, idx) => (
                                        <div key={idx} className="flex items-center gap-3 mb-3 mt-1">
                                            <div className="flex items-center justify-center w-6 h-6 rounded-full bg-brand-gold">
                                                <FeatherIcons.Check size={14} className="text-brand-blue font-bold" />
                                            </div>
                                            <p className="text-gray-900 font-semibold text-[17px]">
                                                {point}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
