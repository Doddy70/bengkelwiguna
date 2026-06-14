"use client";

import Link from "next/link";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

interface BreadcrumbProps {
    items: { label: string; href?: string }[];
    className?: string;
}

export const Breadcrumb = ({ items, className = "" }: BreadcrumbProps) => {
    return (
        <nav className={`inline-block ${className}`} aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-2 bg-white/70 backdrop-blur-md border border-white/40 rounded-full px-4 py-2 shadow-sm">
                {items.map((item, index) => {
                    const isLast = index === items.length - 1;
                    return (
                        <li key={index} className="inline-flex items-center">
                            {item.href ? (
                                <Link
                                    href={item.href}
                                    className="inline-flex items-center text-xs md:text-sm font-semibold text-gray-500 hover:text-brand-blue transition-colors duration-200"
                                >
                                    {item.label}
                                </Link>
                            ) : (
                                <span className="inline-flex items-center text-xs md:text-sm font-bold text-gray-900 bg-brand-gold/20 px-2 py-0.5 rounded-full">
                                    {item.label}
                                </span>
                            )}

                            {!isLast && (
                                <Icon 
                                    icon="solar:alt-arrow-right-linear" 
                                    className="w-3 h-3 md:w-4 md:h-4 text-gray-400 mx-1 md:mx-2" 
                                />
                            )}
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
};
