"use client";

import FaqSection from "@/components/layout/FaqSection";
import PageTitle2 from "@/components/ui/PageTitle2";
import PriceCard2 from "@/components/ui/PriceCard2";
import { Zap } from "react-feather";

export default function ContactPage() {
    

    return (
        <>
            <PageTitle2
                icon={Zap}
                label="Our Membership plan"
                title="Zero Cost to Start. Unlock potential as you grow"
                subtitle="Our pricing is built to support every stage of your journey—from your first booking."
                align="center"
                widthClass="xl:w-9/12 lg:w-9/12"
            />

            <div className="price-wrap font-dm z-10">
                <div className="max-w-screen-xl mx-auto px-3 sm:px-6 md:px-14 lg:px-14 xl:px-18 2xl:px-16 lg:pb-24 pb-20">
                    <div className="grid lg:grid-cols-3 gap-6 md:grid-cols-2 sm:grid-cols-1">
                        {/* price 1st */}
                        <PriceCard2
                            title="Startup"
                            description="Best for startup business owners who need tools for business."
                            price="$29"
                            period="month"
                            features={[
                                "10 GB disk space availability",
                                "50 GB NVMe SSD for use",
                                "Free platform access for all",
                                "Lifetime updates facility",
                                "One year support",
                            ]}
                            buttonText="Start trial for 14 days"
                            buttonLink="/pricing-2"
                            bgColor="bg-gray-50"
                            borderColor="border-gray-200 border-2"
                            textColor="text-gray-800"
                        />

                        {/* price 2nd */}
                        <PriceCard2
                            title="Professional"
                            description="Perfect for new professional needing essential tools for growth."
                            price="$49"
                            period="month"
                            features={[
                                "20 GB disk space availability",
                                "100 GB NVMe SSD for use",
                                "Free platform access for all",
                                "Lifetime updates facility",
                                "One year support",
                            ]}
                            buttonText="Start trial for 14 days"
                            buttonLink="/pricing-2"
                            bgColor="bg-blue-600"
                            borderColor="border-blue-700 border-2"
                            textColor="text-white"
                            btnbgColor="bg-white"
                            checkIconcolor="text-white"
                            btntextColor="text-gray-900"
                        />

                        {/* price 3rd */}
                        <PriceCard2
                            title="Enterprise"
                            description="Best for enterprise business owners who need tools for business."
                            price="$99"
                            period="month"
                            features={[
                                "10 GB disk space availability",
                                "50 GB NVMe SSD for use",
                                "Free platform access for all",
                                "Lifetime updates facility",
                                "One year support",
                            ]}
                            buttonText="Start trial for 14 days"
                            buttonLink="/pricing-2"
                            bgColor="bg-gray-50"
                            borderColor="border-gray-200 border-2"
                            textColor="text-gray-800"
                        />


                    </div>



                </div>
            </div>
            <FaqSection />
        </>
    );
}
