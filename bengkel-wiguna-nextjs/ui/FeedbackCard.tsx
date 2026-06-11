"use client";

import { Quote } from "lucide-react";
import Image from "next/image";

interface FeedbackProps {
    rating: number;
    maxStars?: number;
    feedback: string;
    name: string;
    role: string;
    avatar: string;
    delay?: number;
    bgColor?: string;
    borderColor?: string;
    textColor?: string;
    roleTextcolor?: string;
    brandLight?: string; // brand logo (light)
    brandDark?: string; // brand logo (dark)
    layout?: "modern" | "classic"; // new layout prop
}

export default function FeedbackCard({
    rating,
    maxStars = 5,
    feedback,
    name,
    role,
    avatar,
    delay = 0,
    bgColor = "bg-gray-100",
    borderColor = "border-gray-200",
    textColor = "text-gray-900",
    roleTextcolor = "text-gray-800",
    brandLight = "/dist/images/brands/b-1.png",
    brandDark = "/dist/images/brands/b-1-w.png",
    layout = "modern",
}: FeedbackProps) {
    const filledStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const emptyStars = maxStars - filledStars - (hasHalfStar ? 1 : 0);

    const renderStars = () => (
        <>
            {[...Array(filledStars)].map((_, i) => (
                <svg key={i} xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="text-orange-500" viewBox="0 0 16 16"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path></svg>
            ))}

            {hasHalfStar && (
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="text-orange-500" viewBox="0 0 16 16"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path></svg>
            )}

            {[...Array(emptyStars)].map((_, i) => (
                <svg key={i} xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="text-gray-500" viewBox="0 0 16 16"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path></svg>
            ))}
        </>
    );

    // ✅ CLASSIC LAYOUT
    if (layout === "classic") {
        return (
            <div
                className={`feedback font-dm bg-white dark:bg-gray-800 rounded-xl lg:p-6 p-5 border ${borderColor}`}
                data-aos="fade-up"
                data-aos-duration="400"
                data-aos-delay={delay}
            >
                <div className="flex flex-col">
                    {/* User Info */}
                    <div className="flex flex-row gap-3 mb-8 items-center">
                        <Image
                            src={avatar}
                            alt={name}
                            width={48}
                            height={48}
                            className="w-12 h-12 rounded-full"
                            loading="lazy"
                        />
                        <div className="flex flex-col">
                            <span className="text-base text-gray-900 font-semibold leading-[1.375rem]">
                                {name}
                            </span>
                            <span className="text-sm text-black/70 dark:text-gray-300 font-medium leading-[1.375rem]">
                                {role}
                            </span>
                        </div>
                        <div className="ms-auto">
                            <Quote size={50} strokeWidth={0} className="text-gray-400" />
                        </div>
                    </div>

                    {/* Feedback Text */}
                    <p className="text-gray-900 text-xl font-normal pr-5 lg:mb-10 mb-6">
                        {feedback}
                    </p>

                    {/* Bottom Row: Brand + Rating */}
                    <div className="flex justify-between pr-4 items-center">
                        <div>
                            <Image
                                src={brandLight}
                                alt="brand"
                                width={100}
                                height={30}
                                className="h-[30px] dark:hidden"
                            />
                            <Image
                                src={brandDark}
                                alt="brand"
                                width={100}
                                height={30}
                                className="h-[30px] hidden dark:flex"
                            />
                        </div>

                        <div className="flex gap-2 items-center">
                            <div className="flex gap-1">{renderStars()}</div>
                            <span className="text-base font-medium text-gray-900 pt-1">
                                {rating.toFixed(1)}/5
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    // MODERN LAYOUT
    return (
        <div
            className={`feedback font-dm border rounded-xl lg:p-6 p-5 ${borderColor} ${bgColor}`}
            data-aos="fade-up"
            data-aos-duration="400"
            data-aos-delay={delay}
        >
            <div className="flex flex-col">
                <div className="flex flex-row gap-1 mb-3 items-center">
                    {renderStars()}
                    <span className={`text-base font-medium ps-2 pt-1 ${textColor}`}>
                        {rating.toFixed(1)}
                    </span>
                </div>

                <p
                    className={`text-[22px] leading-8 font-normal pe-2 lg:mb-14 mb-6 italic ${textColor}`}
                >
                    {feedback}
                </p>

                <div className="flex flex-row gap-3 mt-2 items-center">
                    <Image
                        src={avatar}
                        alt={name}
                        className="w-12 h-12 rounded-full"
                        loading="lazy"
                        width={48}
                        height={48}
                    />
                    <div className="flex flex-col">
                        <span
                            className={`text-base font-medium leading-[1.375rem] ${textColor}`}
                        >
                            {name}
                        </span>
                        <span
                            className={`text-sm font-light leading-[1.375rem] ${roleTextcolor}`}
                        >
                            {role}
                        </span>
                    </div>
                    <div className="ms-auto">
                        <Quote size={40} strokeWidth={0} fill="gray" />
                    </div>
                </div>
            </div>
        </div>
    );
}
