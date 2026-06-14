"use client";

import { ArrowUpRight } from "react-feather";
import Image from "next/image";
import Button from "../ui/Button";
import PageTitle3 from "../ui/PageTitle3";

interface CtaSectionProps {
    title?: string;
    subtitle?: string;
    titleColor?: string;
    subtitleColor?: string;
    firstButtonLabel?: string;
    firstButtonBg?: string;
    firstButtonText?: string;
    secondButtonLabel?: string;
    secondButtonBg?: string;
    secondButtonText?: string;
    sectionBg?: string;      // dynamic background for section
    overlayBg?: string;      // dynamic overlay background
    iconBG?: boolean;
    textWeigth?: string;
    fontFamily?: string;
}

export default function CtaSection({
    title = "Customers who rely on our expertise — honest review.",
    subtitle = "More balanced you — and works tirelessly to help you get there.",
    titleColor = "text-gray-900",
    subtitleColor = "text-gray-800",
    firstButtonLabel = "Start trial for 14 days",
    firstButtonBg = "bg-blue-600",
    firstButtonText = "text-white",
    secondButtonLabel = "Discover more",
    secondButtonBg = "bg-gray-800",
    secondButtonText = "text-white",
    sectionBg = "bg-home-one-gradient-banner", // default section background
    overlayBg = "bg-black/0",
    textWeigth = "font-semibold",
    fontFamily="",
    iconBG = true,
}: CtaSectionProps) {
    return (
        <section className={`lg:py-24 py-12 relative overflow-hidden ${sectionBg}`}>
            {/* Overlay */}
            <div className={`absolute top-0 left-0 w-full h-full ${overlayBg}`}></div>

            {/* Decorative Images */}
            {iconBG && (
                <>
                    <div className="absolute left-0 -top-8 hidden lg:block w-[250px] h-[250px] dark:opacity-25">
                        <Image
                            src="/images/svg-diagram-1.svg"
                            alt="Abstract diagram left"
                            fill
                            className="object-contain"
                            sizes="(max-width: 768px) 100px, 250px"
                        />
                    </div>
                    <div className="absolute right-0 bottom-5 hidden lg:block w-[250px] h-[250px] rotate-180 dark:opacity-25">
                        <Image
                            src="/images/svg-diagram-1.svg"
                            alt="diagram right"
                            fill
                            className="object-contain"
                            priority={false}
                            sizes="(max-width: 1024px) 150px, 250px"
                        />
                    </div>
                </>
            )}

            <div className="max-w-screen-xl mx-auto px-3 sm:px-6 md:px-14 lg:px-10 xl:px-18 2xl:px-8 pb-0 lg:py-4 py-0 relative z-10">
                {/* Text Content */}
                <PageTitle3
                    badgeText=""
                    title={title}
                    subtitle={subtitle}
                    widthClass="lg:w-2/3 mx-auto"
                    alignment="center"
                    padding="pb-3"
                    textColor={titleColor}
                    subtitleColor={subtitleColor}
                    textWeigth={textWeigth}
                    fontFamily={fontFamily}
                />

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row justify-center gap-3 pt-6">
                    <Button
                        label={firstButtonLabel}
                        bgColor={firstButtonBg}
                        textColor={firstButtonText}
                        padding="py-4 px-6"
                    />
                    <Button
                        label={secondButtonLabel}
                        bgColor={secondButtonBg}
                        textColor={secondButtonText}
                        icon={<ArrowUpRight size={20} />}
                        padding="py-4 px-6"
                    />
                </div>
            </div>
        </section>
    );
}
