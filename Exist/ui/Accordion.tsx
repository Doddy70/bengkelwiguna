// components/Accordion.tsx
"use client";

import React, { useState } from "react";
import { ChevronDown } from "react-feather";

interface AccordionItem {
    question: string;
    answer: string;
}

interface AccordionProps {
    items: AccordionItem[];
    defaultOpenIndex?: number | null;
    variant?: "white" | "gray" | "line"; // white is default
    textColor?: string; // e.g. "text-gray-900"
    borderColor?: string; // e.g. "border-gray-200"
    bgColor?: string;
}

const Accordion: React.FC<AccordionProps> = ({
    items,
    defaultOpenIndex = null,
    variant = "white",
    textColor = "text-gray-900",
    borderColor = "border-gray-200",
    bgColor = "bg-white",
}) => {
    const [openIndex, setOpenIndex] = useState<number | null>(defaultOpenIndex);

    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className={variant === "line" ? "space-y-0" : "space-y-4"}>
            {items.map((item, index) => {
                const isOpen = openIndex === index;

                const containerClass =
                    variant === "white"
                        ? `${bgColor} border ${borderColor} rounded-lg shadow-sm`
                        : variant === "gray"
                            ? `${bgColor} rounded-lg pb-1`
                            : `border-b ${borderColor} pb-1 ${bgColor}`; // line variant

                // Button class
                const buttonClass =
                    variant === "white"
                        ? `w-full flex justify-between items-center px-5 py-4 text-left ${textColor} font-medium focus:outline-none cursor-pointer`
                        : variant === "gray"
                            ? `accordion-header w-full flex justify-between items-center px-5 py-4 text-left ${textColor} font-medium focus:outline-none bg-gray-100 rounded-lg cursor-pointer`
                            : `w-full flex justify-between items-center py-4 text-left ${textColor} font-medium cursor-pointer`; // line variant

                // Icon class
                const iconClass = `w-5 h-5 transform transition-transform duration-300 ${isOpen ? "rotate-180" : ""
                    }`;

                // Content class
                const contentClass =
                    variant === "white"
                        ? `px-5 py-4 text-[17px] font-normal leading-7 ${textColor.replace(
                            "900",
                            "700"
                        )}`
                        : variant === "gray"
                            ? `accordion-content px-5 pt-3 pb-0 text-[17px] font-normal leading-relaxed lg:pr-10 ${textColor}`
                            : `accordion-content pb-4 pt-0 text-[17px] font-normal leading-relaxed ${textColor}`; // line variant

                return (
                    <div key={index} className={containerClass}>
                        <button
                            onClick={() => toggleAccordion(index)}
                            className={buttonClass}
                        >
                            <span className="text-lg">{item.question}</span>
                            <ChevronDown size={20} className={iconClass} />
                        </button>

                        {isOpen && <div className={contentClass}>{item.answer}</div>}
                    </div>
                );
            })}
        </div>
    );
};

export default Accordion;
