"use client";


import FaqSection from '@/components/layout/FaqSection';

import PageTitle2 from "@/components/ui/PageTitle2";
import ChangelogItem from "@/components/ui/ChangelogItem";


export default function ContactPage() {


    return (
        <>
            <PageTitle2
                label=""
                title="Change log"
                subtitle="Empowering Businesses, One Solution at a Time"
                align="center"
                widthClass="xl:w-6/12 lg:w-7/12"
            />
            <div className="changelog-wrap lg:pb-20 pb-16">
                <div className="max-w-screen-xl mx-auto px-3 sm:px-6 md:px-14 lg:px-14 xl:px-20 2xl:px-24">
                    <ChangelogItem
                        date="20 May 2025"
                        title="Deposits - Enhanced security, faster processing currency"
                        added={[
                            "New dark mode toggle in the top navigation bar",
                            "Pricing comparison table on the plans page",
                            "Custom 404 error page with search functionality",
                            "Email verification system during user registration",
                        ]}
                        removed={[
                            "Deprecated “Invite via SMS” feature",
                            "Removed legacy v1.0 theme files from the repository",
                        ]}
                    />

                    <div className="flex flex-col lg:flex-row justify-center gap-6">
                        <div className="lg:w-7/12">
                            <div className="lg:my-20 my-12 border-t border-gray-200"></div>
                        </div>
                    </div>

                    <ChangelogItem
                        date="22 May 2025"
                        title="Transfers - Cross-border capabilities, real-time tracking"
                        added={[
                            "New dark mode toggle in the top navigation bar",
                            "Pricing comparison table on the plans page",
                            "Custom 404 error page with search functionality",
                            "Email verification system during user registration",
                        ]}
                        removed={[
                            "Deprecated “Invite via SMS” feature",
                            "Removed legacy v1.0 theme files from the repository",
                        ]}
                    />

                </div>
            </div>
            <FaqSection />
        </>
    );
}
