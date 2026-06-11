"use client";

import Image from "next/image";
import FaqSection from "@/components/layout/FaqSection";
import { Zap, Linkedin, Twitch, Twitter } from 'react-feather';
import PageTitle2 from "@/components/ui/PageTitle2";
import TeamMember from "@/components/ui/TeamMember";
import FeedbackCard from "@/components/ui/FeedbackCard";
import PageTitle3 from "@/components/ui/PageTitle3";

export default function ContactPage() {

    return (
        <>
            <PageTitle2
                icon={Zap}
                label="Meet our team"
                title="Get to know our dedicated team"
                subtitle="Meet the minds behind our success"
                align="center"
                widthClass="xl:w-7/12 lg:w-9/12"
            />
            <div className="team-wrap font-dm z-10">
                <div className="max-w-screen-xl mx-auto px-3 sm:px-6 md:px-14 lg:px-14 xl:px-18 2xl:px-4 lg:pb-24 pb-20">
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
            <div className="testimonial-wrap font-dm z-10 lg:pt-8">
                <div className="max-w-screen-xl mx-auto px-3 sm:px-6 md:px-14 lg:px-14 xl:px-18 2xl:px-4 lg:pb-24 pb-20">
                    {/* page title */}
                    <PageTitle3
                        badgeText=""
                        title="Understand expectations, then delight customers completely"
                        subtitle="More balanced you — and works tirelessly to help you get there."
                        widthClass="xl:w-7/12 lg:w-2/3 mx-auto"
                        alignment="center"
                        padding="pb-16"
                        textColor=""
                    />
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-6">
                        {/* 1st col */}
                        <div className="w-full space-y-6">
                            <FeedbackCard
                                rating={4.4}
                                feedback="Fast, reliable, & friendly service every time. I trust them and always recommend them to friends and family."
                                name="Goria Coast"
                                role="Founder and CEO of Exsit"
                                avatar="/images/avatars/user.png"
                                delay={100}
                            />
                            <FeedbackCard
                                rating={4.5}
                                feedback="High-quality service, consistent communication, and a real commit to customer success every step of the way"
                                name="Medica Deo"
                                role="Founder and CEO of Exsit"
                                avatar="/images/avatars/user.png"
                                delay={100}
                            />
                        </div>
                        {/* 2nd col */}
                        <div className="w-full space-y-6">
                            <FeedbackCard
                                rating={4.4}
                                feedback="The support staff's deep expertise was evident in their detailed and accurate answers to our complex questions."
                                name="Novata Coast"
                                role="Founder and CEO of Exsit"
                                avatar="/images/avatars/user.png"
                                delay={100}
                            />
                            <FeedbackCard
                                rating={4.4}
                                feedback="Fast, reliable, & friendly service every time. I trust them and always recommend them to friends and family."
                                name="Goria Coast"
                                role="Founder and CEO of Exsit"
                                avatar="/images/avatars/user.png"
                                delay={100}
                            />

                        </div>
                        {/* 3rd col */}
                        <div className="w-full space-y-6">
                            <div className="w-full" data-aos="fade-up" data-aos-duration="400" data-aos-delay="0">
                                <div className="font-dm bg-cyan-gradient rounded-xl p-6 h-[300px] flex flex-col dark:bg-image-none dark:bg-gray-800">
                                    {/* Avatar group  */}
                                    <div className="flex -space-x-4">
                                        <Image
                                            src="/images/avatars/user.png"
                                            width={48}
                                            height={48}
                                            alt="member-avatar"
                                            className="w-11 h-11 rounded-full"
                                            loading="lazy"
                                        />
                                        <Image
                                            src="/images/avatars/user.png"
                                            width={48}
                                            height={48}
                                            alt="member-avatar"
                                            className="w-11 h-11 rounded-full"
                                            loading="lazy"
                                        />
                                        <Image
                                            src="/images/avatars/user.png"
                                            width={48}
                                            height={48}
                                            alt="member-avatar"
                                            className="w-11 h-11 rounded-full"
                                            loading="lazy"
                                        />
                                    </div>

                                    {/* Text block */}
                                    <div className="mt-auto">
                                        <h3 className="text-gray-900 font-medium mb-1 text-[75px] leading-none">30x</h3>
                                        <p className="text-gray-900 text-2xl font-normal italic lg:pr-12 mb-0 pe-2">Genuine feedback those who know us best.</p>
                                    </div>
                                </div>
                            </div>
                            <FeedbackCard
                                rating={4.2}
                                feedback="We felt like a priority, not just another ticket. The personalized attention to our specific needs made a huge difference."
                                name="Garia Coast"
                                role="Founder and CEO of Exsit"
                                avatar="/images/avatars/user.png"
                                delay={100}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <FaqSection />
        </>
    );
}
