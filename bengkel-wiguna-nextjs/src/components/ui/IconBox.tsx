"use client";

import React from "react";
import Image from "next/image";

interface IconBoxProps {
    image: string;
    alt: string;
    size?: number; // icon size (default: 48)
    boxSize?: number; // container width & height (default: 80)
    bgColor?: string; // background color (default: white)
}

const IconBox: React.FC<IconBoxProps> = ({
    image,
    alt,
    size = 48,
    boxSize = 80,
    bgColor = "bg-white",
}) => {
    const boxClass = `shadow-lg rounded-2xl flex justify-center items-center mb-4 ${bgColor}`;

    return (
        <div
            className={boxClass}
            style={{
                width: `${boxSize}px`,
                height: `${boxSize}px`,
            }}
        >
            <Image
                src={image}
                alt={alt}
                width={size}
                height={size}
            />
        </div>
    );
};

export default IconBox;
