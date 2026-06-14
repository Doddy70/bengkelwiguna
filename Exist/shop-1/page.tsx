"use client";

import { products } from "@/const/productData";
import { useState } from "react";
import { ArrowUpRight } from "react-feather";
import PageTitle from "@/components/ui/PageTitle";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import Image from "next/image";
import ProductCard from "@/components/ui/ProductCard";

export default function ShopPage() {
    // Extract unique filter options dynamically
    const categories = Array.from(
        new Set(products.flatMap((p) => p.categories))
    );
    const sizes = Array.from(new Set(products.flatMap((p) => p.size)));
    const availability = Array.from(new Set(products.map((p) => p.availability)));
    const colors = Array.from(new Set(products.flatMap((p) => p.colors)));
    const [selected, setSelected] = useState("");

    return (
        <>
            {/* Page Title */}
            <PageTitle
                title="Shop"
                subtitle=""
            />
            {/* Breadcrumb */}
            <div className="flex justify-center text-center">
                <Breadcrumb
                    items={[
                        { label: "Home", href: "/" },
                        { label: "Shop" },
                    ]}
                />
            </div>
            <div className="shop-wrap font-dm lg:pt-20 pt-12">
                <div className="max-w-screen-xl mx-auto px-3 sm:px-6 md:px-14 lg:px-14 xl:px-18 2xl:px-3 lg:pb-24 pb-12">
                    <div className="grid lg:grid-cols-4 grid-cols-1 lg:gap-10 relative lg:space-y-0 space-y-5">
                        {/* Filters */}
                        <div className="w-full">
                            <h2 className="text-gray-800 mt-2 text-2xl font-semibold mb-6">
                                Filters
                            </h2>

                            {/* Categories */}
                            <div className="flex flex-col gap-2 mb-6 pb-6 border-b border-gray-200">
                                <h3 className="text-base font-semibold text-gray-900 mb-3">
                                    Categories
                                </h3>
                                {categories.map((cat, i) => (
                                    <div
                                        key={i}
                                        className="flex justify-between items-center"
                                    >
                                        <div className="flex items-center gap-2">
                                            <input
                                                type="checkbox"
                                                id={`category-${i}`}
                                                className="accent-blue-500"
                                            />
                                            <label
                                                htmlFor={`category-${i}`}
                                                className="text-base text-gray-900 font-medium"
                                            >
                                                {cat}
                                            </label>
                                        </div>
                                        <span className="text-sm text-gray-600 font-medium">
                                            {
                                                products.filter((p) => p.categories.includes(cat))
                                                    .length
                                            }
                                        </span>
                                    </div>
                                ))}
                            </div>

                            {/* Sizes */}
                            <div className="flex flex-col gap-2 mb-6 pb-6 border-b border-gray-200">
                                <h3 className="text-base font-semibold text-gray-900 mb-3">
                                    Size
                                </h3>
                                {sizes.map((size, i) => (
                                    <div key={i} className="flex justify-between items-center">
                                        <div className="flex items-center gap-2">
                                            <input
                                                type="checkbox"
                                                id={`size-${i}`}
                                                className="accent-blue-500"
                                            />
                                            <label
                                                htmlFor={`size-${i}`}
                                                className="text-base text-gray-900 font-medium"
                                            >
                                                {size}
                                            </label>
                                        </div>
                                        <span className="text-sm text-gray-600 font-medium">
                                            {products.filter((p) => p.size.includes(size)).length}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            {/* Availability */}
                            <div className="flex flex-col gap-2 mb-6 pb-6 border-b border-gray-200">
                                <h3 className="text-base font-semibold text-gray-900 mb-3">
                                    Availability
                                </h3>
                                {availability.map((avail, i) => (
                                    <div key={i} className="flex justify-between items-center">
                                        <div className="flex items-center gap-2">
                                            <input
                                                type="checkbox"
                                                id={`avail-${i}`}
                                                className="accent-blue-500"
                                            />
                                            <label
                                                htmlFor={`avail-${i}`}
                                                className="text-base text-gray-900 font-medium"
                                            >
                                                {avail}
                                            </label>
                                        </div>
                                        <span className="text-sm text-gray-600 font-medium">
                                            {products.filter((p) => p.availability === avail).length}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            {/* Colors */}
                            <div className="flex flex-col gap-2 mb-6 pb-6 border-b border-gray-200">
                                <h3 className="text-base font-semibold text-gray-900 mb-3">
                                    Colors
                                </h3>
                                {colors.map((color, i) => {
                                    const colorName = color.replace("bg-", "").replace(/-\d+$/, ""); // remove bg- and numeric suffix
                                    return (
                                        <div key={i} className="flex justify-between items-center">
                                            <div className="flex items-center gap-2">
                                                <input type="checkbox" id={`color-${i}`} className="hidden" />
                                                <span
                                                    className={`inline-block w-6 h-6 rounded-full ${color}`}
                                                ></span>
                                                <label className="text-base text-gray-900 font-medium capitalize">
                                                    {colorName}
                                                </label>
                                            </div>

                                            <span className="text-sm text-gray-600 font-medium">
                                                {products.filter((p) => p.colors.includes(color)).length}
                                            </span>
                                        </div>
                                    );
                                })}
                            </div>

                            {/* Banner */}
                            <div className="relative rounded-md overflow-hidden">
                                <div className="absolute inset-0 bg-black opacity-40 z-10"></div>
                                <div className="absolute bottom-0 z-20 w-full text-white text-center p-12 transform -translate-x-1/2 left-1/2">
                                    <span className="uppercase text-sm font-semibold">Summer Sale</span>
                                    <h2 className="uppercase text-3xl font-bold mt-2 mb-7">
                                        SALE UP TO 25% OFF
                                    </h2>
                                    <a
                                        href="#"
                                        className="px-6 py-3 bg-white text-gray-900 text-base font-medium rounded-md hover:bg-gray-100"
                                    >
                                        Explore
                                    </a>
                                </div>
                                <Image
                                    src="/images/product.svg"
                                    alt="banner"
                                    className="w-full"
                                    width={284}
                                    height={426}
                                />
                            </div>
                        </div>

                        {/* Product Listing */}
                        <div className="col-span-3">
                            {/* Sorting */}
                            <div className="flex flex-row justify-between items-center pb-3 border-b border-gray-200 mb-3">
                                <p className="m-0 text-sm md:text-base font-medium text-gray-700">
                                    Showing 1 - {products.length} of {products.length} results
                                </p>
                                <select
                                    value={selected}
                                    onChange={(e) => setSelected(e.target.value)}
                                    className="w-auto text-base font-medium px-4 py-2 appearance-none pr-12 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition duration-300"
                                    aria-label="Relevance"
                                >
                                    <option value="">Relevance</option>
                                    <option value="best-selling">Best Selling</option>
                                    <option value="popularity">Popularity</option>
                                    <option value="high-low">High to Low</option>
                                </select>
                            </div>

                            {/* Product Grid */}
                            <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 relative py-3">
                                {products.map((product) => (
                                    <ProductCard key={product.id} product={product}  />
                                ))}
                            </div>

                            {/* Load More */}
                            <div className="flex text-center justify-center mt-10">
                                <button className="inline-flex items-center justify-center gap-2 px-7 py-3 text-white text-base font-medium bg-gray-900 hover:bg-gray-700 rounded-lg transition duration-300">
                                    <span>Load more</span>
                                    <ArrowUpRight size={20} className="text-white" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
}
