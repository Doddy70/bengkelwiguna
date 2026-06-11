"use client";

import { Breadcrumb } from "@/components/ui/Breadcrumb";
import RelatedProducts from "@/components/ui/RelatedProducts";
import { Star, Truck, Package, Heart } from "lucide-react";
import ProductGallery from "@/components/ui/ProductGallery";


export default function SingleProductPage() {

    return (
        <>
            <div className="shop-wrap lg:pt-24 pt-12">
                <div className="max-w-screen-xl mx-auto px-3 sm:px-6 md:px-14 lg:px-14 xl:px-18 2xl:px-3 lg:py-20 py-12">
                    <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-10 relative lg:space-y-0 space-y-5">
                        {/* left side */}
                        <div className="w-full">
                            <ProductGallery
                                layout="horizontal"
                                images={[
                                    "/images/product-large.svg",
                                    "/images/product-large.svg",
                                    "/images/product-large.svg",
                                    "/images/product-large.svg",
                                ]}
                            />
                        </div>
                        {/* right side */}
                        <div className="w-full">
                            {/* Breadcrumb */}
                            <Breadcrumb
                                items={[
                                    { label: "Home", href: "/" },
                                    { label: "Product", href: "/shop-1" },
                                    { label: "Camisole Shoulder Straps" },
                                ]}
                            />

                            {/* Review Section */}
                            <div className="flex flex-col mt-3">
                                <h1 className="text-4xl font-semibold text-gray-900">
                                    Camisole Shoulder Straps
                                </h1>

                                {/* Stars */}
                                <div className="flex items-center text-orange-400 my-1 gap-[1px]">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} size={14} className="fill-current text-orange-400" />
                                    ))}
                                    <span className="text-gray-700 text-sm font-medium ml-2 leading-6">
                                        4.5 Reviews
                                    </span>
                                </div>

                                {/* Price */}
                                <p className="text-xl font-semibold leading-6 pt-3 text-gray-900 flex gap-2">
                                    $1,365.00
                                    <span className="line-through text-gray-500 font-medium text-base">
                                        $1999.00
                                    </span>
                                </p>

                                {/* Description */}
                                <p className="text-base font-medium text-gray-700 mt-4">
                                    A wireless speaker with a dynamic acoustic performance designed to be
                                    positioned up against the wall on a shelf or side table in your home.
                                </p>

                                {/* Size */}
                                <div className="mt-6">
                                    <span className="font-semibold text-gray-800 text-base mb-3 inline-block">
                                        Size
                                    </span>
                                    <ul className="flex flex-row gap-2 mt-2">
                                        {["S", "M", "L", "XL"].map((size, i) => (
                                            <li key={i}>
                                                <input
                                                    type="radio"
                                                    id={size}
                                                    name="size"
                                                    value={size}
                                                    className="hidden peer"
                                                    defaultChecked={i === 0}
                                                />
                                                <label
                                                    htmlFor={size}
                                                    className="cursor-pointer px-4 py-3 text-base font-medium border-2 border-gray-200 text-gray-800 peer-checked:border-gray-700 rounded-md"
                                                >
                                                    {size}
                                                </label>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Color */}
                                <div className="mt-10">
                                    <span className="font-semibold text-gray-800 text-base mb-3 inline-block">
                                        Color
                                    </span>
                                    <ul className="flex flex-row gap-2">
                                        {[
                                            { id: "red", color: "bg-green-500" },
                                            { id: "blue", color: "bg-blue-600" },
                                            { id: "cyan", color: "bg-cyan-400" },
                                            { id: "gray", color: "bg-gray-600" },
                                        ].map((c) => (
                                            <li key={c.id}>
                                                <input
                                                    type="radio"
                                                    id={c.id}
                                                    name="color"
                                                    value={c.id}
                                                    className="hidden peer"
                                                />
                                                <label
                                                    htmlFor={c.id}
                                                    className="flex items-center justify-center w-12 h-12 rounded-full peer-checked:border-gray-800 border border-gray-200"
                                                >
                                                    <span className={`w-12 h-12 rounded-full block ${c.color}`} />
                                                </label>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Quantity */}
                                <div className="mt-6">
                                    <span className="font-semibold text-gray-800 text-base mb-2 inline-block">
                                        Quantity
                                    </span>
                                    <div className="flex gap-2 mt-2 max-w-md">
                                        <select className="w-20 text-base font-medium border border-gray-300 rounded px-2 py-1">
                                            {[1, 2, 3, 4, 5].map((q) => (
                                                <option key={q}>{q}</option>
                                            ))}
                                        </select>
                                        <div className="flex flex-grow gap-2">
                                            <button className="flex-grow text-white bg-blue-600 hover:bg-blue-700 rounded-md px-4 py-3 font-medium text-base">
                                                Add Cart
                                            </button>
                                            <button className="bg-red-600 hover:bg-red-700 text-white rounded-md px-3 py-2 flex items-center justify-center">
                                                <Heart className="w-5 h-5 text-white" />
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                {/* Product Info */}
                                <div className="mt-8 flex flex-col gap-1 text-sm">
                                    <p className="flex items-center gap-2 text-gray-700">
                                        <Truck className="w-5 h-5 text-gray-700" />
                                        <span className="text-gray-900 font-medium text-base">
                                            Estimated delivery:
                                        </span>{" "}
                                        within 2 days delivery
                                    </p>
                                    <p className="flex items-center gap-2 text-gray-700">
                                        <Package className="w-[18px] h-[18px] text-gray-700" />
                                        <span className="text-gray-900 font-medium text-base">
                                            Free Shipping on 799
                                        </span>{" "}
                                        and above. Just for you
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="related-products lg:pb-20 pb-12">
                <div className="max-w-screen-xl mx-auto px-3 sm:px-6 md:px-14 lg:px-14 xl:px-18 2xl:px-3">
                    {/* title */}
                    <div className="flex justify-center lg:mb-16 mb-10">
                        <h2 className="lg:text-4xl text-3xl font-semibold text-gray-900 mb-6">Related Products</h2>
                    </div>
                    {/* related product */}
                    <RelatedProducts />
                </div>
            </div>
        </>

    );
}
