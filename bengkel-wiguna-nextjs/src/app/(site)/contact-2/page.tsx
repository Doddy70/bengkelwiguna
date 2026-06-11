"use client";

import Image from "next/image";
import { FormEvent, useState } from "react";
import FaqSection from "@/components/layout/FaqSection";
import { ArrowUpRight, Zap } from 'react-feather';
import PageTitle2 from "@/components/ui/PageTitle2";


export default function ContactPage() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        // handle form logic here (send data via API route or 3rd party service)
        setSubmitted(true);
    };

    return (
        <>
            <PageTitle2
                icon={Zap}
                label="Our customer feedback"
                title="Get in touch with our team"
                subtitle="Genuine feedback from those who know us best."
                align="center"
                widthClass="xl:w-6/12 lg:w-7/12"
            />
            <div className="contact-wrap font-dm z-10">
                <div className="max-w-screen-xl mx-auto px-3 sm:px-6 md:px-14 lg:px-14 xl:px-18 2xl:px-3 lg:pb-24 pb-20">
                    <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-6 relative lg:space-y-0 space-y-5">
                        {/* left side */}
                        <div
                            className="w-full lg:pr-10"
                            data-aos="zoom-in"
                            data-aos-duration="400"
                            data-delay="00"
                        >
                            <Image
                                src="/images/contact.svg"
                                alt="banner"
                                className="object-cover w-full rounded-xl"
                                loading="eager"
                                width={637}
                                height={844}
                            />
                        </div>

                        {/* right side */}
                        <div className="w-full">
                            <div className="bg-gray-50 shadow-md border border-gray-200 rounded-2xl p-8 lg:p-10">
                                <h4 className="text-gray-900 font-semibold lg:text-4xl text-3xl">
                                    Connect with us
                                </h4>
                                <p className="text-gray-600 font-medium text-[17px] lg:pr-5 mt-2">
                                    Streamline HR processes and empower your team with our products.
                                    Facilitate manage employee data.
                                </p>

                                <div className="mt-4 pt-6">
                                    <form onSubmit={handleSubmit} id="contactForm">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                            <div>
                                                <label
                                                    htmlFor="firstName"
                                                    className="block text-gray-900 text-base font-medium mb-2"
                                                >
                                                    First name
                                                </label>
                                                <input
                                                    type="text"
                                                    id="firstName"
                                                    name="firstName"
                                                    placeholder="Sophia etc."
                                                    required
                                                    className="w-full px-4 py-4 text-sm border border-gray-300 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                                                />
                                            </div>
                                            <div>
                                                <label
                                                    htmlFor="lastName"
                                                    className="block text-gray-900 text-base font-medium mb-2"
                                                >
                                                    Last name
                                                </label>
                                                <input
                                                    type="text"
                                                    id="lastName"
                                                    name="lastName"
                                                    placeholder="Carter etc."
                                                    required
                                                    className="w-full px-4 py-4 text-sm border border-gray-300 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                                                />
                                            </div>
                                        </div>

                                        <div className="mb-4">
                                            <label
                                                htmlFor="email"
                                                className="block text-gray-900 text-base font-medium mb-2"
                                            >
                                                Enter email address
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                placeholder="support@gmail.com"
                                                required
                                                className="w-full px-4 py-4 text-sm border border-gray-300 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                                            />
                                        </div>

                                        <div className="mb-4">
                                            <label
                                                htmlFor="phone"
                                                className="block text-gray-900 text-base font-medium mb-2"
                                            >
                                                Phone number
                                            </label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                placeholder="+91 0000 12345"
                                                className="w-full px-4 py-4 text-sm border border-gray-300 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                                            />
                                        </div>

                                        <div className="mb-4">
                                            <label
                                                htmlFor="message"
                                                className="block text-gray-900 text-base font-medium mb-2"
                                            >
                                                Put the message
                                            </label>
                                            <textarea
                                                id="message"
                                                name="message"
                                                rows={5}
                                                placeholder="Provide any details regarding your query …"
                                                required
                                                className="w-full px-4 py-4 text-sm border border-gray-300 bg-white rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-primary"
                                            ></textarea>
                                        </div>

                                        <div>
                                            <button
                                                type="submit"
                                                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-white text-base font-medium bg-blue-600 hover:bg-blue-700 rounded-lg transition duration-300"
                                            >
                                                <span>Send message</span>
                                                <ArrowUpRight size={20} />
                                            </button>
                                        </div>
                                        {submitted && (
                                            <p className="bg-green-100 text-green-800 font-medium mt-2 py-3 px-4 bg-blue-200 rounded-md mt-3">
                                                Form submitted successfully!
                                            </p>
                                        )}
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <FaqSection />
        </>
    );
}
