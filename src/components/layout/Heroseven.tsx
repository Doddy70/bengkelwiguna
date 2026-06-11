"use client";

import { ArrowUpRight } from "react-feather";
import Button from "../ui/Button";
import { useEffect } from "react";
import dynamic from "next/dynamic";
import "glightbox/dist/css/glightbox.css";

function Heroseven() {
    useEffect(() => {
        import("glightbox").then(({ default: GLightbox }) => {
            GLightbox({
                selector: ".glightbox",
                touchNavigation: true,
                closeButton: true,
                width: "600px",
                height: "100%",
            });
        });
    }, []);

    return (
        <>
            <section className="banner-wrap items-end justify-center relative rounded-lg flex overflow-hidden lg:h-[93vh] md:h-[60vh] h-[80vh] bg-home-seven-hero m-3 bg-center bg-cover">
                <div className="max-w-screen-xl w-full px-3 sm:px-6 md:px-14 lg:px-14 xl:px-18 2xl:px-3 pb-8 flex">
                    <div className="flex flex-wrap justify-between">
                        {/* left side */}
                        <div className="xl:w-6/12 flex">
                            <div className="w-full mt-auto">
                                <h1
                                    className="text-white font-normal xl:text-7xl lg:text-6xl text-5xl mt-2 mb-3 py-4 aos-init aos-animate"
                                    data-aos="fade-up"
                                    data-aos-duration="400"
                                >
                                    Set a new direction care is always priority
                                </h1>

                                {/* Button opens Glightbox */}
                                <Button
                                    bgColor="bg-yellow-400"
                                    textColor="text-gray-900"
                                    label="Send Message"
                                    className="glightbox flex lg:hidden"
                                    href="#submit-form"
                                />

                            </div>
                        </div>
                        {/* right side */}
                        <div className="xl:w-5/12 w-full lg:flex hidden">
                            <div className="mt-auto py-7 px-4 rounded-xl backdrop-blur-lg bg-white/30">
                                <form className="px-2 xl:px-6" id="contactForm">
                                    {/* Heading */}
                                    <div className="mb-8">
                                        <span className="text-gray-100 font-semibold text-[28px] xl:text-3xl block">
                                            Connect with us
                                        </span>
                                        <p className="text-white/75 font-medium text-[17px] mt-2">
                                            Streamline HR processes and empower your team with our products.
                                            Facilitate manage employee data.
                                        </p>
                                    </div>

                                    {/* First & Last Name */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
                                        <div>
                                            <label
                                                htmlFor="firstName"
                                                className="block text-mmd font-medium text-gray-100 mb-2"
                                            >
                                                First name
                                            </label>
                                            <input
                                                type="text"
                                                id="firstName"
                                                name="firstName"
                                                placeholder="Sophia etc."
                                                className="w-full bg-black/30 border border-gray-600 text-white rounded-md px-4 py-4 text-base placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label
                                                htmlFor="lastName"
                                                className="block text-mmd font-medium text-gray-100 mb-2"
                                            >
                                                Last name
                                            </label>
                                            <input
                                                type="text"
                                                id="lastName"
                                                name="lastName"
                                                placeholder="Carter etc."
                                                className="w-full bg-black/30 border border-gray-600 text-white rounded-md px-4 py-4 text-base placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                                required
                                            />
                                        </div>
                                    </div>

                                    {/* Email */}
                                    <div className="mb-5">
                                        <label
                                            htmlFor="email"
                                            className="block text-mmd font-medium text-gray-100 mb-2"
                                        >
                                            Enter email address
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            placeholder="support@gmail.com"
                                            className="w-full bg-black/30 border border-gray-600 text-white rounded-md px-4 py-4 text-base placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                            required
                                        />
                                    </div>

                                    {/* Phone */}
                                    <div className="mb-5">
                                        <label
                                            htmlFor="phone"
                                            className="block text-mmd font-medium text-gray-100 mb-2"
                                        >
                                            Phone number
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            placeholder="+91 0000 12345"
                                            className="w-full bg-black/30 border border-gray-600 text-white rounded-md px-4 py-4 text-base placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                        />
                                    </div>

                                    {/* Button */}
                                    <button
                                        type="submit"
                                        className="w-full mt-2 py-4 px-6 bg-yellow-400 text-gray-900 font-semibold rounded-md flex items-center justify-center gap-2 hover:bg-yellow-300 transition-all duration-200"
                                    >
                                        Send message
                                        <ArrowUpRight size={18} />
                                    </button>

                                    {/* Form result placeholder */}
                                    <div id="formResult" className="mt-3"></div>
                                </form>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>

            {/* Hidden Glightbox popup */}
            <div id="submit-form" className="p-0" style={{ display: "none", padding: 0 }}>
                <div className="mt-auto py-7 px-4 rounded-xl bg-black/60">
                    <form className="px-2 xl:px-6" id="contactForm">
                        <div className="mb-8">
                            <span className="text-gray-100 font-semibold text-[28px] xl:text-3xl block">
                                Connect with us
                            </span>
                            <p className="text-white/75 font-medium text-[17px] mt-2">
                                Streamline HR processes and empower your team with our products.
                                Facilitate manage employee data.
                            </p>
                        </div>

                        {/* First & Last Name */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
                            <div>
                                <label
                                    htmlFor="firstName"
                                    className="block text-mmd font-medium text-gray-100 mb-2"
                                >
                                    First name
                                </label>
                                <input
                                    type="text"
                                    id="firstName"
                                    name="firstName"
                                    placeholder="Sophia etc."
                                    className="w-full bg-black/30 border border-gray-600 text-white rounded-md px-4 py-4 text-base placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                    required
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="lastName"
                                    className="block text-mmd font-medium text-gray-100 mb-2"
                                >
                                    Last name
                                </label>
                                <input
                                    type="text"
                                    id="lastName"
                                    name="lastName"
                                    placeholder="Carter etc."
                                    className="w-full bg-black/30 border border-gray-600 text-white rounded-md px-4 py-4 text-base placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                    required
                                />
                            </div>
                        </div>

                        {/* Email */}
                        <div className="mb-5">
                            <label
                                htmlFor="email"
                                className="block text-mmd font-medium text-gray-100 mb-2"
                            >
                                Enter email address
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="support@gmail.com"
                                className="w-full bg-black/30 border border-gray-600 text-white rounded-md px-4 py-4 text-base placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                required
                            />
                        </div>

                        {/* Phone */}
                        <div className="mb-5">
                            <label
                                htmlFor="phone"
                                className="block text-mmd font-medium text-gray-100 mb-2"
                            >
                                Phone number
                            </label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                placeholder="+91 0000 12345"
                                className="w-full bg-black/30 border border-gray-600 text-white rounded-md px-4 py-4 text-base placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                            />
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full mt-2 py-4 px-6 bg-yellow-400 text-gray-900 font-semibold rounded-md flex items-center justify-center gap-2 hover:bg-yellow-300 transition-all duration-200"
                        >
                            Send message
                            <ArrowUpRight size={18} />
                        </button>

                        <div id="formResult" className="mt-3"></div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default dynamic(() => Promise.resolve(Heroseven), { ssr: false });
