"use client";

import Image from "next/image";

interface StepCardProps {
    number: number;
    title: string;
    description: string;
    arrow?: boolean;
    flipArrow?: boolean; // NEW → flip with scaleY(-1)
}

const StepCard: React.FC<StepCardProps> = ({
    number,
    title,
    description,
    arrow,
    flipArrow = false,
}) => {
    return (
        <div className="w-full relative text-center mb-6">
            {/* Number circle */}
            <div className="bg-[linear-gradient(to_bottom,#004540,#13de38)] w-16 h-16 rounded-full flex items-center justify-center text-white text-[2.5rem] font-medium mx-auto">
                {number}
            </div>

            {/* Title */}
            <h3 className="text-gray-900 font-medium text-2xl mt-5 mb-3">{title}</h3>

            {/* Description */}
            <p className="text-gray-800 font-normal text-[17px] lg:px-5">{description}</p>

            {/* Arrow */}
            {arrow && (
                <div
                    className={`absolute top-[-50px] right-0 translate-x-1/2 hidden xl:block ${flipArrow ? "scale-y-[-1] top-0 bottom-[100px]" : ""
                        }`}
                >
                    <Image
                        src="/images/vector.png"
                        alt="arrow"
                        width={179}
                        height={51}
                        className="pointer-events-none select-none"
                    />
                </div>
            )}
        </div>
    );
};

export default StepCard;
