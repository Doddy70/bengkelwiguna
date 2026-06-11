"use client";

import FaqSection from "@/components/layout/FaqSection";
import { Zap } from 'react-feather';
import PageTitle2 from "@/components/ui/PageTitle2";
import PriceCard from "@/components/ui/PriceCard";
import CardRow from "@/components/ui/PriceCompare";

export default function ContactPage() {
    
    return (
        <>
            <PageTitle2
                icon={Zap}
                label="Our Membership plan"
                title="Try for free. Grow with us"
                subtitle="Genuine feedback from those who know us best"
                align="center"
                widthClass="xl:w-6/12 lg:w-7/12"
            />
            
            <div className="price-wrap font-dm z-10">
                <div className="max-w-screen-xl mx-auto px-3 sm:px-6 md:px-14 lg:px-14 xl:px-18 2xl:px-16 lg:pb-24 pb-20">
                    <div className="grid lg:grid-cols-3 gap-6 md:grid-cols-2 sm:grid-cols-1 lg:pb-20 pb-14">
                        {/* price 1st */}
                        <PriceCard
                            title="Startup"
                            description="Best for startup business owners who needs for business."
                            price="$29"
                            priceSuffix="/month"
                            borderColor="border-gray-200"
                            buttonText="Start trial for 14 days"
                            buttonLink="/pricing"
                            discountText=""
                            features={[
                                { text: "10 GB disk space availability" },
                                { text: "10 GB NVMe SSD for use" },
                                { text: "Free platform access for all" },
                                { text: "Lifetime updates facility" },
                                { text: "One year support" },
                            ]}
                            sections={[
                                {
                                    title: "What you can do",
                                    items: [
                                        "Automate call, document, and survey data imports",
                                        "Centralized repository: Auto-importing your key data",
                                        "Unifying your data: Calls, documents, and survey responses",
                                        "Streamline data collection from multiple sources",
                                    ],
                                },
                                {
                                    title: "More options",
                                    items: [
                                        "Customize your booking page",
                                        "Connect one acount",
                                        "Customize availability",
                                    ],
                                },
                            ]}
                        />

                        {/* price 2nd */}
                        <PriceCard
                            title="Professional"
                            description="Perfect for new professionals needing essential tools for growth."
                            price="$49"
                            priceSuffix="/month"
                            borderColor="border-blue-700"
                            buttonText="Start trial for 14 days"
                            buttonLink="/pricing"
                            discountText="Get 20% off"
                            features={[
                                { text: "15 GB disk space availability" },
                                { text: "75 GB NVMe SSD for use" },
                                { text: "Free platform access for all" },
                                { text: "Lifetime updates facility" },
                                { text: "One year support" },
                            ]}
                            sections={[
                                {
                                    title: "What you can do",
                                    items: [
                                        "Automate call, document, and survey data imports",
                                        "Centralized repository: Auto-importing your key data",
                                        "Unifying your data: Calls, documents, and survey responses",
                                        "Streamline data collection from multiple sources",
                                    ],
                                },
                                {
                                    title: "More options",
                                    items: [
                                        "Customize your booking page to match your brand",
                                        "Connect one external account",
                                        "Tailor your availability settings",
                                    ],
                                },
                            ]}
                        />

                        {/* price 3rd */}
                        <PriceCard
                            title="Enterprise"
                            description="Perfect for new businesses needing essential tools for growth."
                            price="$99"
                            priceSuffix="/month"
                            borderColor="border-gray-200"
                            buttonText="Start trial for 14 days"
                            buttonLink="/pricing"
                            discountText=""
                            features={[
                                { text: "100 GB disk space availability" },
                                { text: "100 GB NVMe SSD for use" },
                                { text: "Free platform access for all" },
                                { text: "Lifetime updates facility" },
                                { text: "One year support" },
                            ]}
                            sections={[
                                {
                                    title: "What you can do",
                                    items: [
                                        "Automate call, document, and survey data imports",
                                        "Centralized repository: Auto-importing your key data",
                                        "Unifying your data: Calls, documents, and survey responses",
                                        "Streamline data collection from multiple sources",
                                    ],
                                },
                                {
                                    title: "More options",
                                    items: [
                                        "Customize your booking page",
                                        "Connect one acount",
                                        "Customize availability",
                                    ],
                                },
                            ]}
                        />


                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 px-0 sticky top-0 bg-white border-b border-gray-200 pb-2 z-10">
                        {/* Compare Title */}
                        <div className="flex items-center">
                            <p className="text-gray-800 text-[18px] font-semibold leading-6 my-0 lg:pe-4">
                                Compare plans
                            </p>
                        </div>

                        {/* Plan: Startup */}
                        <div className="flex flex-col p-4 bg-gray-100 border border-gray-200 rounded-lg justify-center text-center">
                            <h3 className="font-semibold text-gray-900 text-xl mb-2">Startup</h3>
                            <h4 className="text-3xl font-bold text-gray-900 leading-6 mt-2 mb-0">
                                $29<span className="text-sm font-medium text-gray-700 tracking-wide ms-1">/ month</span>
                            </h4>
                        </div>

                        {/* Plan: Professional */}
                        <div className="flex flex-col p-4 bg-gray-100 border border-gray-200 rounded-lg justify-center text-center">
                            <h3 className="font-semibold text-gray-900 text-xl mb-2">Professional</h3>
                            <h4 className="text-3xl font-bold text-gray-900 leading-6 mt-2 mb-0">
                                $49<span className="text-sm font-medium text-gray-700 tracking-wide ms-1">/ month</span>
                            </h4>
                        </div>

                        {/* Plan: Enterprise */}
                        <div className="flex flex-col p-4 bg-gray-100 border border-gray-200 rounded-lg justify-center text-center">
                            <h3 className="font-semibold text-gray-900 text-xl mb-2">Enterprise</h3>
                            <h4 className="text-3xl font-bold text-gray-900 leading-6 mt-2 mb-0">
                                $99<span className="text-sm font-medium text-gray-700 tracking-wide ms-1">/ month</span>
                            </h4>
                        </div>
                    </div>
                    <CardRow
                        label="Customize your booking page"
                        plans={["minus", "minus", "check"]}
                    />

                    <CardRow
                        label="Advanced analytics"
                        plans={["minus", "check", "check"]}
                    />
                    <CardRow
                        label="Customize your booking page"
                        plans={["minus", "minus", "check"]}
                    />

                    <CardRow
                        label="Advanced analytics"
                        plans={["minus", "check", "check"]}
                    />
                    <CardRow
                        label="Customize your booking page"
                        plans={["minus", "minus", "check"]}
                    />

                    <CardRow
                        label="Advanced analytics"
                        plans={["minus", "check", "check"]}
                    />
                    <CardRow
                        label="Customize your booking page"
                        plans={["minus", "minus", "check"]}
                    />

                    <CardRow
                        label="Advanced analytics"
                        plans={["minus", "check", "check"]}
                    />
                    <div className="grid grid-cols-4 gap-4 mx-0 my-2 py-4">
                        <div className="flex items-center">
                            <p className="text-gray-800 text-lg font-semibold leading-6 my-0 pr-6">Organize and share</p>
                        </div>
                    </div>
                    <CardRow
                        label="Customize your booking page"
                        plans={["minus", "minus", "check"]}
                    />

                    <CardRow
                        label="Advanced analytics"
                        plans={["minus", "check", "check"]}
                    />
                    <CardRow
                        label="Customize your booking page"
                        plans={["minus", "minus", "check"]}
                    />

                    <CardRow
                        label="Advanced analytics"
                        plans={["minus", "check", "check"]}
                    />
                    <CardRow
                        label="Customize your booking page"
                        plans={["minus", "minus", "check"]}
                    />

                    <CardRow
                        label="Advanced analytics"
                        plans={["minus", "check", "check"]}
                    />
                    <CardRow
                        label="Customize your booking page"
                        plans={["minus", "minus", "check"]}
                    />

                    <CardRow
                        label="Advanced analytics"
                        plans={["minus", "check", "check"]}
                    />


                </div>
            </div>
            <FaqSection />
        </>
    );
}
