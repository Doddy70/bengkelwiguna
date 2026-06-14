// components/FaqSection.tsx
"use client";

import React from "react";
import { HelpCircle } from "react-feather";
import Button from "../ui/Button";
import Accordion from "../ui/Accordion";
import PageTitle3 from "../ui/PageTitle3";

const faqData = [
    {
        question: "Q1. What is the design process for branding?",
        answer:
            "Our design services start and end with a best-in-class experience strategy that builds brands. When you join our journey, you are choosing a partner who believes in a healthier, more balanced you.",
    },
    {
        question: "Q2. How much does logo design service cost?",
        answer:
            "We do not take a cut of your revenue. Every design begins and ends with strategy — because great brands are not built by accident.",
    },
    {
        question: "Q3. How long will it take to complete my project?",
        answer:
            "You can cancel your subscription anytime — no questions asked. We start and finish every design project with a world-class experience strategy that builds lasting brands.",
    },
    {
        question: "Q4. What is included in a round of revisions?",
        answer:
            "Each revision round allows for meaningful refinements to your project. We work closely with you to ensure every detail aligns with your vision.",
    },
];

const FaqSection = () => {
    return (
        <div className="faq-wrap font-dm lg:py-24 py-12 bg-gray-gradient dark:bg-gray-800">
            <div className="max-w-screen-xl mx-auto px-3 sm:px-6 md:px-14 lg:px-14 xl:px-18 2xl:px-3">
                <div className="grid lg:grid-cols-12 xl:gap-24 gap-8">
                    {/* Left Side */}
                    <div className="xl:col-span-6 col-span-6 flex flex-col">
                        <PageTitle3
                            icon={<HelpCircle size={18} />}
                            badgeText="Frequently Asked Question"
                            title="Have any questions? here some answers"
                            subtitle="Whether you're building a startup landing page, a dashboard interface, or a modern web app gives you full control."
                            widthClass="xl:w-10/12 lg:w-2/3 w-full"
                            alignment="start"
                            padding="pb-16"
                            
                        />
                        <div className="mt-auto">
                            <Button href="/about" label="Check out more" bgColor="bg-cyan-600" textColor="text-white" />
                        </div>
                    </div>

                    {/* Right Side (Accordion) */}
                    <div className="lg:col-span-6 xl:pl-16">
                        <Accordion items={faqData} defaultOpenIndex={0} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FaqSection;
