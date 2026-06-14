// app/shop/components/ProductCard.tsx
"use client";

import React from "react";
import { Product } from "@/const/productData";
import { Star } from "lucide-react";
import Button from "./Button";
import Image from "next/image";

interface ProductCardProps {
    product: Product;
    variant?: "compact" | "extended";
}

const ProductCard: React.FC<ProductCardProps> = ({ product, variant = "compact" }) => {
    if (variant === "extended") {
        return (
            <div className="flex sm:flex-row flex-col md:space-x-7 md:gap-0 gap-3">
                {/* product image */}
                <div className="relative w-72 overflow-hidden rounded-xl bg-productcard-gradient">
                    {product.discount && (
                        <div className="absolute top-3 left-3 z-10 bg-green-600 text-white text-xs font-medium py-1 px-2 rounded-md">
                            {product.discount}
                        </div>
                    )}
                    <a href={`/shop/product/${product.id}`} className="group block relative">
                        <div className="img-one max-h-80 text-center justify-center object-center">
                            <Image
                                src={product.imgOne}
                                alt={product.title}
                                className="rounded-xl overflow-hidden transition-opacity duration-300 group-hover:opacity-0"
                                width={290}
                                height={435}
                            />
                        </div>
                        <div className="img-two max-h-80 text-center object-center justify-center absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <Image
                                src={product.imgTwo}
                                alt={product.title}
                                className="rounded-xl overflow-hidden"
                                width={290}
                                height={435}
                            />
                        </div>
                    </a>
                </div>

                {/* product content */}
                <div className="mb-2 flex-1">
                    <span className="block text-2xl font-semibold text-gray-900 mb-0 pt-2">
                        {product.title}
                    </span>
                    <p className="text-sm font-medium text-gray-500 mt-[2px] mb-2">{product.subtitle}</p>
                    <p className="text-lg font-semibold text-gray-800 pt-1">
                        ${product.price.toLocaleString()}
                        {product.oldPrice && (
                            <span className="line-through text-sm text-gray-500 font-medium ml-2">
                                ${product.oldPrice.toLocaleString()}
                            </span>
                        )}
                    </p>

                    {/* review */}
                    {product.review && (
                        <div className="flex items-center text-orange-500 mb-3 mt-2">
                            <Star fill="orange" size={16} strokeWidth={0} />
                            <span className="text-sm text-gray-600 font-medium leading-6 ml-1 inline-block">
                                {product.review} Reviews
                            </span>
                        </div>
                    )}

                    {/* short description */}
                    {product.shortDesc && (
                        <p className="font-medium text-base text-gray-700 fw-500">{product.shortDesc}</p>
                    )}

                    {/* action buttons */}
                    <div className="flex flex-row gap-2 mt-5">
                        <Button label="Add to Cart" icon="" bgColor="bg-gray-500" href={`/shop/product/${product.id}`} />
                        <Button label="Save" icon="" bgColor="bg-red-600" />
                    </div>
                </div>
            </div>
        );
    }

    // --- Compact layout (default) ---
    return (
        <div className="flex flex-col gap-2">
            {/* product image */}
            <div className="relative overflow-hidden rounded-xl bg-productcard-gradient">
                {product.discount && (
                    <div className="absolute top-3 left-3 z-10 bg-green-600 text-white text-xs font-medium py-1 px-2 rounded-md">
                        {product.discount}
                    </div>
                )}
                {product.badge && (
                    <div className="absolute top-3 left-3 z-10 bg-red-600 text-white text-xs font-medium py-1 px-2 rounded-md">
                        {product.badge}
                    </div>
                )}
                <a href={`/shop/product/${product.id}`} className="group block relative">
                    <div className="img-one">
                        <Image
                            src={product.imgOne}
                            alt={product.title}
                            className="rounded-xl overflow-hidden transition-opacity duration-300 group-hover:opacity-0"
                            width={290}
                            height={435}
                        />
                    </div>
                    <div className="img-two absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Image
                            src={product.imgTwo}
                            alt={product.title}
                            className="rounded-xl overflow-hidden"
                            width={290}
                            height={435}
                        />
                    </div>
                </a>
            </div>

            {/* product content */}
            <div className="mb-2">
                <span className="block text-xl font-semibold text-gray-900 mb-0">{product.title}</span>
                <p className="text-sm font-medium text-gray-500 mt-[2px] mb-2">{product.subtitle}</p>
                <p className="text-lg font-semibold text-gray-800 pt-1">
                    ${product.price.toLocaleString()}
                    {product.oldPrice && (
                        <span className="line-through text-sm text-gray-500 font-medium ml-2">
                            ${product.oldPrice.toLocaleString()}
                        </span>
                    )}
                </p>
            </div>
        </div>
    );
};

export default ProductCard;
