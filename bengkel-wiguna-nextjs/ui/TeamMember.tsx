// components/TeamMember.tsx
"use client";

import React from "react";
import Image from "next/image";

interface SocialLink {
    href: string;
    label: string;
    colorClass?: string; // Tailwind color for icon
    icon: React.ReactNode; // Pass in SVG/icon component
}

interface TeamMemberProps {
    name: string;
    role: string;
    image: string;
    imageAlt?: string;
    socials?: SocialLink[];
    delay?: number; // AOS animation delay
    variant?: "default" | "overlay"; // NEW
}

export default function TeamMember({
    name,
    role,
    image,
    imageAlt = "team member",
    socials = [],
    delay = 100,
    variant = "default",
}: TeamMemberProps) {
    return (
        <div
            className="w-full member-wrap group"
            data-aos="zoom-in"
            data-aos-delay={delay}
            data-aos-duration="400"
        >
            <div className="flex flex-col gap-3">
                {/* Image + Socials */}
                <div className="relative overflow-hidden rounded-2xl group">
                    {/* Gradient overlay only for overlay variant */}
                    {variant === "overlay" && (
                        <div className="absolute inset-0 z-10 pointer-events-none bg-[linear-gradient(180deg,rgba(0,0,0,0.1)_0%,rgba(0,0,0,0.3)_100%)]"></div>
                    )}

                    <Image
                        src={image}
                        alt={imageAlt}
                        width={400} // set a default width
                        height={450} // set a default height
                        className="w-full h-auto object-cover"
                        loading="lazy"
                    />

                    {/* Social Icons */}
                    {socials.length > 0 && (
                        <div className="absolute top-4 right-4 transform translate-x-full opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100 z-20">
                            <ul className="flex flex-col gap-1 ms-3">
                                {socials.map((social, idx) => (
                                    <li key={idx}>
                                        <a
                                            href={social.href}
                                            className={`${social.colorClass || "text-gray-700"} p-3 bg-white rounded-lg inline-block hover:scale-105 transition duration-300`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <span className="sr-only">{social.label}</span>
                                            {social.icon}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {/* Info placement depends on variant */}
                    {variant === "overlay" ? (
                        <div className="absolute z-10 p-6 bottom-0 start-0 w-full text-start">
                            <h3 className="text-white text-xl font-medium mb-0">{name}</h3>
                            <p className="text-white/80 font-medium text-sm mb-0">{role}</p>
                        </div>
                    ) : null}
                </div>

                {/* Default layout: info below image */}
                {variant === "default" && (
                    <div className="text-center">
                        <h3 className="text-gray-900 text-2xl font-semibold mb-0">{name}</h3>
                        <p className="text-gray-700 font-medium text-base mb-0">{role}</p>
                    </div>
                )}
            </div>
        </div>
    );
}
