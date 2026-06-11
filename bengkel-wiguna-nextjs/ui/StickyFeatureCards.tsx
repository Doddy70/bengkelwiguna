"use client";

import React from "react";
import Image from "next/image";

interface StickyCardItem {
    number: number;
    title: string;
    description: string;
    image: string;
    paddingTop?: string;
}

interface StickyFeatureCardsProps {
    cards: StickyCardItem[];
}

const StickyFeatureCards: React.FC<StickyFeatureCardsProps> = ({ cards }) => {
    return (
        <div
            className="card-sticky-wrap relative"
        >
            {cards.map((card, index) => (
                <div
                    key={index}
                    className="card-sticky sticky top-[100px]"
                    style={{ paddingTop: card.paddingTop || `${20 + index * 20}px` }}
                >
                    <div className="card-sticky-inner bg-gray-100 border border-gray-200 rounded-xl p-6 lg:p-12 transition-all duration-300">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            {/* Left Section */}
                            <div className="flex items-center">
                                <div className="flex flex-col lg:w-3/4">
                                    <div
                                        className="w-14 h-14 lg:w-16 lg:h-16 text-white text-2xl font-sora font-medium rounded-full flex justify-center items-center"
                                        style={{
                                            background: "linear-gradient(to bottom,#004540,#13DE38)",
                                        }}
                                    >
                                        {card.number}
                                    </div>

                                    <h3 className="font-merri font-normal text-gray-900 pt-10 mb-3 text-2xl lg:text-4xl">
                                        {card.title}
                                    </h3>

                                    <p
                                        className="text-gray-900 mt-1 text-lg"
                                        data-aos="fade-up"
                                        data-aos-delay="200"
                                        data-aos-duration="400"
                                    >
                                        {card.description}
                                    </p>
                                </div>
                            </div>

                            {/* Right Section */}
                            <div className="flex items-center justify-center">
                                <Image
                                    src={card.image}
                                    alt={`feature-${card.number}`}
                                    width={500}
                                    height={400}
                                    className="max-w-full h-auto"
                                    style={{ width: "auto", height: "auto" }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default StickyFeatureCards;
