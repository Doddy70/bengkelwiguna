import React from "react";

interface PriceCard5Props {
    title: string;
    description: string;
    price: number;
    features: string[];
    buttonText: string;
    buttonLink: string;
    fromColor?: string;
    toColor?: string;
    aosDelay?: number | string;
}

const PriceCard5: React.FC<PriceCard5Props> = ({
    title,
    description,
    price,
    features,
    buttonText,
    buttonLink,
    fromColor = "from-[#F2F8FF]",
    toColor = "to-[#E6F2FF]",
    aosDelay = 0,
}) => {
    return (
        <div
            className={`flex flex-col p-10 bg-gradient-to-b ${fromColor} ${toColor} dark:from-[#111] dark:to-[#333] border border-gray-200 rounded-xl mt-2 gap-4 aos-init aos-animate`}
            data-aos-duration="400"
            data-aos-delay={String(aosDelay)}
        >
            {/* Header */}
            <div>
                <h3 className="font-semibold text-gray-900 text-3xl mb-3">{title}</h3>
                <p className="text-gray-700 font-medium mb-0 text-base mt-1">{description}</p>
            </div>

            {/* Price */}
            <h4 className="xl:text-5xl text-4xl font-bold text-gray-900 leading-none my-4">
                <span className="price">${price}</span>
                <span className="text-base font-medium text-gray-700 inline-block leading-none tracking-wide">
                    {" "}
                    / month
                </span>
            </h4>

            <div className="border-t border-gray-200" />

            {/* Button */}
            <a
                href={buttonLink}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 my-3 text-white text-base font-medium bg-blue-800 hover:bg-blue-900 rounded-lg transition duration-300"
                data-aos="zoom-in"
                data-aos-duration="400"
            >
                <span>{buttonText}</span>
                <svg
                    viewBox="0 0 24 24"
                    width="20"
                    height="20"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-white"
                >
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
            </a>

            <div className="border-t border-gray-200" />

            {/* Features */}
            <div className="pt-2">
                {features.map((feature, i) => (
                    <p
                        key={i}
                        className="text-gray-700 font-medium mb-2 text-base flex items-center gap-2"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            fill="currentColor"
                            className="bi bi-check-circle-fill text-blue-800"
                            viewBox="0 0 16 16"
                        >
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                        </svg>
                        {feature}
                    </p>
                ))}
            </div>
        </div>
    );
};

export default PriceCard5;
