"use client";

import React from "react";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import Link from "next/link";
import Image from "next/image";


const checkoutItems = [
    {
        id: 1,
        title: "Camisole Shoulder Straps",
        category: "T-Shirt",
        price: 1365,
        oldPrice: 1999,
        color: "Red",
        img: "/images/product.svg",
    },
    {
        id: 2,
        title: "Printed Shoulder Straps",
        category: "Airpods",
        price: 1365,
        oldPrice: 1999,
        color: "Red",
        img: "/images/product.svg",
    },
    {
        id: 3,
        title: "Non-Padded T-Shirt Bras",
        category: "Bras",
        price: 1365,
        oldPrice: 1999,
        color: "Red",
        img: "/images/product.svg",
    },
];

const CheckoutPage = () => {
    return (
        <>
            <div className="checkout-wrap lg:pt-24 pt-16 font-dm">
                <div className="max-w-screen-xl mx-auto px-3 sm:px-6 md:px-14 lg:px-14 xl:px-18 2xl:px-3">
                    <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-10 relative lg:space-y-0 space-y-5">
                        <div className="w-full lg:py-20 py-12">
                            <div className="page-title lg:mb-12 mb-6">
                                {/* Breadcrumb */}
                                <Breadcrumb
                                    items={[
                                        { label: "Home", href: "/" },
                                        { label: "Cehckout" },
                                    ]}
                                />
                                <h2 className="lg:text-7xl md:text-5xl text-4xl text-gray-900 font-bold mb-13 mt-5 lg:mb-2">My Cehckout</h2>
                                <p className="font-medium text-gray-700">Update your company and profile names. </p>
                            </div>
                            {/* Shipping & Payment Form */}
                            <div className="w-full">
                                <h2 className="text-gray-800 text-2xl font-semibold mb-5">Shipping address</h2>

                                <form className="space-y-4">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label htmlFor="inputEmail4" className="block text-sm font-medium text-gray-600 mb-2">Email</label>
                                            <input type="email" id="inputEmail4" placeholder="Email" className="w-full px-3 py-3 font-medium text-sm border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                        </div>
                                        <div>
                                            <label htmlFor="inputPassword4" className="block text-sm font-medium text-gray-600 mb-2">Password</label>
                                            <input type="password" id="inputPassword4" placeholder="Password" className="w-full px-3 py-3 font-medium text-sm border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="inputAddress" className="block text-sm font-medium text-gray-600 mb-2">Address</label>
                                        <input type="text" id="inputAddress" placeholder="1234 Main St" className="w-full px-3 py-3 font-medium text-sm border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                    </div>

                                    <div>
                                        <label htmlFor="inputAddress2" className="block text-sm font-medium text-gray-600 mb-2">Address 2</label>
                                        <input type="text" id="inputAddress2" placeholder="Apartment, studio, or floor" className="w-full px-3 py-3 font-medium text-sm border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
                                        <div className="md:col-span-3">
                                            <label htmlFor="inputCity" className="block text-sm font-medium text-gray-600 mb-2">City</label>
                                            <input type="text" id="inputCity" className="w-full px-3 py-3 font-medium text-sm border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                        </div>
                                        <div className="md:col-span-2">
                                            <label htmlFor="inputState" className="block text-sm font-medium text-gray-600 mb-2">State</label>
                                            <select id="inputState" className="w-full px-3 py-3 font-medium text-sm border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                                                <option>Choose</option>
                                                <option>Option 1</option>
                                                <option>Option 2</option>
                                                <option>Option 3</option>
                                            </select>
                                        </div>
                                        <div className="md:col-span-1">
                                            <label htmlFor="inputZip" className="block text-sm font-medium text-gray-600 mb-2">Zip</label>
                                            <input type="text" id="inputZip" className="w-full px-3 py-3 font-medium text-sm border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                        </div>
                                    </div>
                                </form>

                                <h2 className="text-gray-800 text-2xl font-semibold mt-8 mb-5">Payment details</h2>

                                <form className="space-y-4">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label htmlFor="cardname" className="block text-sm font-medium text-gray-600 mb-2">Card name</label>
                                            <input type="text" id="cardname" placeholder="Name" className="w-full px-3 py-3 font-medium text-sm border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                        </div>
                                        <div>
                                            <label htmlFor="expiry" className="block text-sm font-medium text-gray-600 mb-2">Expiry</label>
                                            <input type="number" id="expiry" placeholder="Expiry" className="w-full px-3 py-3 font-medium text-sm border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                        </div>
                                        <div>
                                            <label htmlFor="cardnumber" className="block text-sm font-medium text-gray-600 mb-2">Card number</label>
                                            <input type="number" id="cardnumber" placeholder="**** **** ****" className="w-full px-3 py-3 font-medium text-sm border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                        </div>
                                        <div>
                                            <label htmlFor="cvv" className="block text-sm font-medium text-gray-600 mb-2">CVV</label>
                                            <input type="number" id="cvv" placeholder="***" className="w-full px-3 py-3 font-medium text-sm border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="w-full bg-gray-50 p-10">
                            {/* Order Summary */}
                            <div className="w-full bg-gray-50 rounded-xl py-8">
                                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Order summary</h2>
                                <div className="overflow-x-auto scrollbar">
                                    <table className="table-auto min-w-[500px] w-full text-left border-collapse">
                                        <tbody>
                                            {checkoutItems.map((item) => (
                                                <tr key={item.id} className="border-b border-gray-200">
                                                    <td className="w-32 p-3 pl-0">
                                                        <Link href="/cart" className="inline-block border border-gray-200 bg-gray-100 rounded-xl overflow-hidden">
                                                            <Image src={item.img} alt={item.title} className="w-full rounded-lg" width={114} height={171} />
                                                        </Link>
                                                    </td>
                                                    <td className="p-3 align-top">
                                                        <h2 className="text-gray-900 font-semibold text-lg mb-1">{item.title}</h2>
                                                        <span className="text-gray-600 text-base font-medium block">{item.category}</span>
                                                        <span className="text-gray-900 font-semibold text-base block mt-4">
                                                            ${item.price.toLocaleString()}
                                                            <span className="line-through text-gray-600 font-medium ml-1">${item.oldPrice.toLocaleString()}</span>
                                                        </span>
                                                        <span className="text-sm text-gray-600 mt-2 font-medium block">Color: <span>{item.color}</span></span>
                                                    </td>
                                                    <td className="p-3 pr-0 text-right align-top text-sm font-medium text-gray-800">${item.price.toLocaleString()}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>

                                <div className="mt-4">
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
                                        <a href="checkout.html" className="w-full bg-blue-600 hover:bg-blue-700 text-white text-center py-3 px-5 rounded-lg font-medium transition">
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

export default CheckoutPage;
