"use client";

import FaqSection from "@/components/layout/FaqSection";
import { Zap, Linkedin, Twitch, Twitter, Database } from 'react-feather';
import PageTitle2 from "@/components/ui/PageTitle2";
import TeamMember from "@/components/ui/TeamMember";
import PageTitle3 from "@/components/ui/PageTitle3";

import Brands from "@/components/ui/Brands";
import { ZapIcon } from "lucide-react";
import FeatureCard from "@/components/ui/FeatureCard4";
import VideoBanner from "@/components/ui/VideoBanner";

export default function ContactPage() {

    return (
        <>
            <PageTitle2
                icon={Zap}
                label="About us"
                title="Our Customer Our Reach"
                subtitle="Empowering Businesses, One Solution at a Time"
                align="center"
                widthClass="xl:w-7/12 lg:w-9/12"
            />
            <div className="about-wrap lg:pb-20 pb-16">
                <div className="max-w-screen-xl mx-auto px-3 sm:px-6 md:px-14 lg:px-14 xl:px-20 2xl:px-24">
                    <VideoBanner />
                    <div className="flex justify-center lg:pb-16 pb-10 pt-12">
                        <h2 className="text-gray-400 text-2xl font-medium">Trusted by 500+ teams to empower 2,00,000+ people</h2>
                    </div>
                    <div className="flex flex-wrap justify-center gap-4 lg:gap-6">
                        <Brands />
                    </div>

                </div>
            </div>

            {/* counter */}
            <div className="counter-wrap lg:pb-24 pb-12 font-dm bg-home-one-gradient-banner relative lg:py-24 py-20">
                <div className="max-w-screen-xl mx-auto px-3 sm:px-6 md:px-14 lg:px-14 xl:px-18 2xl:px-4">
                    {/* title */}
                    <PageTitle3
                        badgeText=""
                        title="Discover how businesses in your industry use quizzes"
                        subtitle="Whether you're building a startup landing page, a dashboard interface, or a modern web app gives you full control."
                        widthClass="xl:w-7/12 lg:w-2/3 mx-auto"
                        alignment="center"
                        padding="pb-16"
                        textColor=""
                    />
                    <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 justify-center gap-6">
                        <FeatureCard
                            icon={<ZapIcon fill="white" size={26} className="text-white" />}
                            title="SEO Performance"
                            description="Our design services start and end with a best-in-class experience."
                            delay={100}
                            bgColor="bg-orange-500"
                            layout="centered"
                        />
                        <FeatureCard
                            icon={<Database size={26} className="text-white" />}
                            title="Content Management"
                            description="Every design begins and ends with design strategy because great brands are accident."
                            delay={100}
                            bgColor="bg-cyan-500"
                            layout="centered"
                        />
                        <FeatureCard
                            icon={<Zap size={26} className="text-white" />}
                            title="Marketing Strategy"
                            description="Our design services starts and ends with a best-in-class experience strategy that builds brands."
                            delay={100}
                            bgColor="bg-blue-500"
                            layout="centered"
                        />
                    </div>
                </div>
            </div>

            <div className="team-wrap font-dm z-10">
                <div className="max-w-screen-xl mx-auto px-3 sm:px-6 md:px-14 lg:px-14 xl:px-18 2xl:px-4 lg:py-24 py-20">
                    {/* page title */}
                    <PageTitle3
                        badgeText=""
                        title="Discover what customers expect and go beyond to amaze them"
                        subtitle="Join thousands who trust us for quality and lasting relationships"
                        widthClass="xl:w-7/12 lg:w-2/3 mx-auto"
                        alignment="center"
                        padding="pb-16"
                        textColor=""
                    />
                    <div className="grid xl:grid-cols-4 lg:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-6">
                        <TeamMember
                            name="Sophia Carter"
                            role="Founder and CEO of Exsit"
                            image="/images/team.svg"
                            socials={[
                                {
                                    href: "https://linkedin.com",
                                    label: "LinkedIn",
                                    colorClass: "text-cyan-500",
                                    icon: <Linkedin size={22} />,
                                },
                                {
                                    href: "https://twitch.com",
                                    label: "Twitch",
                                    colorClass: "text-red-500",
                                    icon: <Twitch size={22} />,
                                },
                                {
                                    href: "https://twitter.com",
                                    label: "Twitter",
                                    colorClass: "text-gray-900",
                                    icon: <Twitter size={22} />,
                                },
                            ]}
                        />
                        <TeamMember
                            name="Medico Deo"
                            role="Founder and CEO of Exsit"
                            image="/images/team.svg"
                            socials={[
                                {
                                    href: "https://linkedin.com",
                                    label: "LinkedIn",
                                    colorClass: "text-cyan-500",
                                    icon: <Linkedin size={22} />,
                                },
                                {
                                    href: "https://twitch.com",
                                    label: "Twitch",
                                    colorClass: "text-red-500",
                                    icon: <Twitch size={22} />,
                                },
                                {
                                    href: "https://twitter.com",
                                    label: "Twitter",
                                    colorClass: "text-gray-900",
                                    icon: <Twitter size={22} />,
                                },
                            ]}
                        />
                        <TeamMember
                            name="Goria Coast"
                            role="Founder and CEO of Exsit"
                            image="/images/team.svg"
                            socials={[
                                {
                                    href: "https://linkedin.com",
                                    label: "LinkedIn",
                                    colorClass: "text-cyan-500",
                                    icon: <Linkedin size={22} />,
                                },
                                {
                                    href: "https://twitch.com",
                                    label: "Twitch",
                                    colorClass: "text-red-500",
                                    icon: <Twitch size={22} />,
                                },
                                {
                                    href: "https://twitter.com",
                                    label: "Twitter",
                                    colorClass: "text-gray-900",
                                    icon: <Twitter size={22} />,
                                },
                            ]}
                        />
                        <TeamMember
                            name="Emily Grace"
                            role="Founder and CEO of Exsit"
                            image="/images/team.svg"
                            socials={[
                                {
                                    href: "https://linkedin.com",
                                    label: "LinkedIn",
                                    colorClass: "text-cyan-500",
                                    icon: <Linkedin size={22} />,
                                },
                                {
                                    href: "https://twitch.com",
                                    label: "Twitch",
                                    colorClass: "text-red-500",
                                    icon: <Twitch size={22} />,
                                },
                                {
                                    href: "https://twitter.com",
                                    label: "Twitter",
                                    colorClass: "text-gray-900",
                                    icon: <Twitter size={22} />,
                                },
                            ]}
                        />
                    </div>
                </div>
            </div>

            <FaqSection />
        </>
    );
}
