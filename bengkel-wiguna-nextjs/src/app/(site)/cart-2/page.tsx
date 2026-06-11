"use client";

import React from "react";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import Link from "next/link";
import Image from "next/image";

const cartItems = [
    {
        id: 1,
        title: "Camisole Shoulder Straps",
        category: "T-Shirt",
        price: 1365,
        oldPrice: 1999,
        color: "Red",
        img: "/images/product.svg",
        qty: 1,
    },
    {
        id: 2,
        title: "Printed Shoulder Straps",
        category: "Airpods",
        price: 1365,
        oldPrice: 1999,
        color: "Red",
        img: "/images/product.svg",
        qty: 1,
    },
    {
        id: 3,
        title: "Non-Padded T-Shirt Bras",
        category: "Bras",
        price: 1365,
        oldPrice: 1999,
        color: "Red",
        img: "/images/product.svg",
        qty: 1,
    },
];

const CartPage = () => {
    return (
        <>
            <div className="cart-wrap lg:pt-24 pt-16 font-dm">
                <div className="max-w-screen-xl mx-auto px-3 sm:px-6 md:px-14 lg:px-14 xl:px-18 2xl:px-3">
                    <div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-10 relative lg:space-y-0 space-y-5">
                        <div className="col-span-2 lg:py-20 py-12">
                            <div className="page-title lg:mb-12 mb-6">
                                {/* Breadcrumb */}
                                <Breadcrumb
                                    items={[
                                        { label: "Home", href: "/" },
                                        { label: "Cart" },
                                    ]}
                                />
                                <h2 className="lg:text-7xl md:text-5xl text-4xl text-gray-900 font-bold mb-13 mt-5 lg:mb-2">My Cart</h2>
                                <p className="font-medium text-gray-700">Update your company and profile names. </p>
                            </div>
                            {/* Cart Items Table */}
                            <div className="col-span-2">
                                <div className="overflow-x-auto scrollbar">
                                    <table className="table-auto min-w-[500px] w-full text-left border-collapse">
                                        <thead>
                                            <tr className="bg-gray-100 dark:bg-gray-800">
                                                <th className="px-2 py-3 font-medium text-gray-900">Product</th>
                                                <th></th>
                                                <th className="px-2 py-3 font-medium text-gray-900">Qty</th>
                                                <th className="px-2 py-3 font-medium text-gray-900">Price</th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {cartItems.map((item) => (
                                                <tr key={item.id} className="border-b border-gray-200">
                                                    <td className="w-32 p-3">
                                                        <Link href="/checkout" className="inline-block border border-gray-200 bg-gray-100 rounded-xl overflow-hidden">
                                                            <Image src={item.img} alt={item.title} className="w-full rounded-lg" width={114} height={171} />
                                                        </Link>
                                                    </td>
                                                    <td className="p-3 align-top">
                                                        <h2 className="text-gray-900 font-semibold text-xl mb-1">{item.title}</h2>
                                                        <span className="text-gray-600 text-base font-medium block">{item.category}</span>
                                                        <span className="text-gray-900 font-semibold text-bse block mt-4">
                                                            ${item.price.toLocaleString()}
                                                            <span className="line-through text-gray-600 font-medium ml-1">
                                                                ${item.oldPrice.toLocaleString()}
                                                            </span>
                                                        </span>
                                                        <span className="text-sm text-gray-600 mt-2 font-medium block">
                                                            Color: <span>{item.color}</span>
                                                        </span>
                                                    </td>
                                                    <td className="p-3 align-top">
                                                        <select className="border border-gray-300 rounded-md px-2 py-1 w-20 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                                                            {[1, 2, 3, 4, 5].map((num) => (
                                                                <option key={num} value={num}>
                                                                    {num}
                                                                </option>
                                                            ))}
                                                        </select>
                                                    </td>
                                                    <td className="p-3 align-top text-sm font-medium text-gray-800">
                                                        ${item.price.toLocaleString()}
                                                    </td>
                                                    <td className="p-3 align-top text-red-600 text-lg">
                                                        <button>
                                                            <i className="bi bi-trash"></i>
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>

                                    {/* Terms and Conditions */}
                                    <div className="form-check mt-3">
                                        <label className="flex items-start gap-2 text-sm text-gray-500 mt-1 leading-relaxed font-medium cursor-pointer">
                                            <input type="checkbox" id="customCheck11" className="mt-1 accent-blue-600" />
                                            By clicking all term and condition apply our
                                            <a href="#" className="text-gray-900 underline ml-1">Privacy Policy</a> and
                                            <a href="#" className="text-gray-900 underline ml-1">Terms and Conditions</a>.
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full h-full lg:p-10 p-8 bg-gray-50">
                            <div className="py-8 bg-gray-50 rounded-xl">
                                <h2 className="text-xl font-semibold text-gray-900">Order summary</h2>
                                <div>
                                    <div className="flex justify-between mt-4">
                                        <span className="font-medium text-gray-900">Subtotal</span>
                                        <span className="font-semibold text-gray-900">$319.97</span>
                                    </div>
                                    <div className="flex justify-between mt-1">
                                        <span className="font-medium text-gray-900">Sales Tax (8%)</span>
                                        <span className="font-semibold text-gray-900">$25.60</span>
                                    </div>
                                    <div className="flex justify-between mt-1">
                                        <span className="font-medium text-gray-900">Shipping</span>
                                        <span className="font-semibold text-gray-900">$10.00</span>
                                    </div>
                                    <div className="flex justify-between mt-1">
                                        <span className="font-medium text-gray-900">Coupon</span>
                                        <span className="font-semibold text-gray-900">-$5.99</span>
                                    </div>
                                    <div className="flex justify-between mt-5">
                                        <span className="font-semibold text-gray-900">Total</span>
                                        <span className="font-semibold text-gray-900">$355.57</span>
                                    </div>
                                    <div className="pt-4 flex gap-2 items-center">
                                        <a
                                            href="checkout.html"
                                            className="w-full bg-blue-600 hover:bg-blue-700 text-white text-center py-3 px-5 rounded-lg font-medium transition"
                                        >
                                            Continue
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
};

export default CartPage;
