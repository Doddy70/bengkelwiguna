"use client";
import { blogPosts } from "@/const/blogData";

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

import PageTitle3 from "@/components/ui/PageTitle3";
import { Command, Linkedin, Twitch, Twitter } from "react-feather";
import { BoxIcon, Clock, CommandIcon, HardDrive } from "lucide-react";

import Button from "@/components/ui/Button";
import CounterSection from "@/components/ui/CounterSection";

import Image from "next/image";
import GradientFeatureCard from "@/components/ui/GradientCard";


import CtaSection from "@/components/layout/CtaSection";
import BlogCardOne from "@/components/ui/BlogCardOne";
import BlogCardTwo from "@/components/ui/BlogCardTwo";
import IconBox from "@/components/ui/IconBox";
import TeamMember from "@/components/ui/TeamMember";
import HeroTwelve from "@/components/layout/HeroTwelve";
import FeatureCard5 from "@/components/ui/FeatureCard5";
import StickyFeatureCards from "@/components/ui/StickyFeatureCards";


export default function HomePage() {
    const featuredPost = blogPosts.find((post) => post.featured);
    const sidePosts = blogPosts.filter((post) => !post.featured).slice(0, 3);
    const cards = [
        {
            number: 1,
            title: "Data analysis just got faster our customers are satisfaction",
            description: "When you join our journey, you’re choosing a partner who believes in a healthier, more balanced you and works tirelessly.",
            image: "/images/feature-4.svg",
            paddingTop: "20px",
        },
        {
            number: 2,
            title: "Transform data into meaningful insights effortlessly",
            description: "Our tools ensure smooth data flow, empowering your team with clarity and precision.",
            image: "/images/feature-4.svg",
            paddingTop: "40px",
        },
        {
            number: 3,
            title: "Empower teams with reliable analytics and automation",
            description: "Gain visibility and drive decisions confidently with powerful automation and intuitive visuals.",
            image: "/images/feature-4.svg",
            paddingTop: "60px",
        },
    ];

    return (
        <>

            {/* Header */}
            <Header theme="header-dark" logo="/images/logo/logo-darkgreen.png" btnColor="bg-lime-400" btnlinkColor="text-gray-900" />
            {/* Hero */}
            <HeroTwelve />

            {/* service wrap */}
            <div className="feature-wrap lg:py-24 py-12 bg-[#034651]">
                <div className="max-w-screen-xl mx-auto px-3 sm:px-6 md:px-14 lg:px-14 xl:px-18 2xl:px-3 pb-0">
                    {/* title */}
                    <PageTitle3
                        badgeText=""
                        title="Explore customer expectations to leave them delighted"
                        subtitle="Never miss a chance to grow—our platform connects you with valuable opportunities never slip through the cracks."
                        widthClass="xl:w-/12 lg:w-2/3 mx-auto w-full"
                        alignment="center"
                        padding="lg:pb-16 pb-10"
                        textColor="text-white"
                        subtitleColor="text-gray-100"
                        subtitleClass="lg:px-16"
                        textWeigth="font-normal"
                        fontFamily="font-merri"
                    />

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-0">
                        <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-0">
                            {/* feature card */}
                            <FeatureCard5
                                borderClass="border-white/40 border-b-0"
                                icon={<CommandIcon strokeWidth={1} className="text-lime-400" size={58} />}
                                title="Marketing Analytics"
                                description="Unlock powerful data-driven insights to optimize your campaigns."
                            />
                            <FeatureCard5
                                borderClass="border-white/40 md:border-l-0 border-b-0"
                                icon={<BoxIcon strokeWidth={1} className="text-lime-400" size={58} />}
                                title="Digital Agency"
                                description="Its flexibility allows you to adapt it for any business need fintech."
                            />
                            <FeatureCard5
                                borderClass="border-white/40"
                                icon={<HardDrive strokeWidth={1} className="text-lime-400" size={58} />}
                                title="Quarterly Revenue"
                                description="Its flexibility allows you to adapt it for any business need fintech."
                            />
                            <FeatureCard5
                                borderClass="border-white/40 md:border-l-0"
                                icon={<Clock strokeWidth={1} className="text-lime-400" size={58} />}
                                title="Brand Strategy"
                                description="Its flexibility allows you to adapt it for any business need fintech."
                            />
                        </div>
                        <div className="lg:col-span-4 p-0">
                            <div className="h-full flex flex-col p-4 bg-[#005766]">
                                <div className="flex flex-col p-2 h-full">
                                    <span className="text-lime-400 font-semibold leading-none text-[60px]">8.9*</span>
                                    <p className="text-2xl italic text-white mt-auto font-normal pb-6 leading-8">
                                        Translate complex ideas into succinct, engaging, and easy-to-understand web copy that is optimized for humans, AI, and search engines
                                    </p>
                                    <div className="flex flex-row gap-3">
                                        <Image
                                            src="/images/avatars/user.png"
                                            alt="avater"
                                            width={44}
                                            height={44}
                                            className="w-11 h-11 rounded-full"
                                            loading="lazy"
                                            sizes="44px"
                                        />
                                        <div className="flex flex-col">
                                            <span className="text-base text-white font-medium leading-5">Goria Coast</span>
                                            <span className="text-sm text-white/75 font-normal leading-5">Founder and CEO of Exsit</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center lg:py-20 py-8">
                        <h2 className="text-white text-2xl font-normal text-center">Discover what we did for them</h2>
                    </div>
                    <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 justify-center gap-6 lg:pb-10">
                        <CounterSection textcolor="text-white" subtextcolor="text-white/85" target={4.5} suffix="k" duration={1000} subtitle="Higher Conversion Rates" />
                        <CounterSection textcolor="text-white" subtextcolor="text-white/85" target={6.5} suffix="x" duration={1000} subtitle="Backed by those who believe." />
                        <CounterSection textcolor="text-white" subtextcolor="text-white/85" target={98.2} suffix="%" duration={1000} subtitle="People who trust what we." />
                    </div>
                </div>
            </div>
            {/* service wrap */}
            <section className="feature-wrap lg:py-24 py-12">
                <div className="max-w-screen-xl mx-auto px-3 sm:px-6 md:px-14 lg:px-14 xl:px-18 2xl:px-3 pb-0">
                    {/* intragation */}
                    <div className="flex flex-col items-center gap-4 lg:pb-24 pb-12">
                        <div className="max-w-xl text-center">
                            <PageTitle3
                                badgeText=""
                                title="Over 150,000+ content creators trust us"
                                subtitle="Our ever-growing database of 30M+ companies and 190M+ people ensures opportunity."
                                widthClass="w-full mx-auto"
                                alignment="center"
                                padding="pb-6"
                                textWeigth="font-medium"
                                fontFamily="font-merri"
                            />
                            <div>
                                <Button href="/about" label="Explore integrations" bgColor="bg-gray-900" textColor="text-white" className="py-4" />
                            </div>
                        </div>
                    </div>

                    {/* logo row */}
                    <div className="flex justify-center gap-3 flex-wrap" data-aos="zoom-in" data-aos-duration="400" data-aos-delay="400">
                        <IconBox
                            image="/images/intregation/i-1.svg"
                            alt="Loom"
                            size={48}
                            boxSize={80}
                        />
                        <IconBox
                            image="/images/intregation/i-1.svg"
                            alt="Loom"
                            size={48}
                            boxSize={80}
                        />
                        <IconBox
                            image="/images/intregation/i-1.svg"
                            alt="Loom"
                            size={48}
                            boxSize={80}
                        />
                        <IconBox
                            image="/images/intregation/i-1.svg"
                            alt="Loom"
                            size={48}
                            boxSize={80}
                        />
                        <IconBox
                            image="/images/intregation/i-1.svg"
                            alt="Loom"
                            size={48}
                            boxSize={80}
                        />
                        <IconBox
                            image="/images/intregation/i-1.svg"
                            alt="Loom"
                            size={48}
                            boxSize={80}
                        />
                        <IconBox
                            image="/images/intregation/i-1.svg"
                            alt="Loom"
                            size={48}
                            boxSize={80}
                        />
                    </div>
                    {/* logo row */}
                    <div className="flex justify-center gap-3 flex-wrap" data-aos="zoom-in" data-aos-duration="400" data-aos-delay="400">
                        <IconBox
                            image="/images/intregation/i-1.svg"
                            alt="Loom"
                            size={48}
                            boxSize={80}
                        />
                        <IconBox
                            image="/images/intregation/i-1.svg"
                            alt="Loom"
                            size={48}
                            boxSize={80}
                        />
                        <IconBox
                            image="/images/intregation/i-1.svg"
                            alt="Loom"
                            size={48}
                            boxSize={80}
                        />
                        <IconBox
                            image="/images/intregation/i-1.svg"
                            alt="Loom"
                            size={48}
                            boxSize={80}
                        />
                        <IconBox
                            image="/images/intregation/i-1.svg"
                            alt="Loom"
                            size={48}
                            boxSize={80}
                        />
                        <IconBox
                            image="/images/intregation/i-1.svg"
                            alt="Loom"
                            size={48}
                            boxSize={80}
                        />

                    </div>
                    {/* grid */}
                    <div className="flex flex-wrap justify-between lg:pt-24 pt-12 lg:pb-16 pb-8 gap-y-4">
                        <PageTitle3
                            badgeText=""
                            title="Discover what customers expect and go beyond to amaze them"
                            subtitle="Our ever-growing database of 30M+ companies and 190M+ people ensures you’re never missing an opportunity."
                            widthClass="w-full xl:w-8/12 lg:w-7/12"
                            alignment="start"
                            padding="pb-0"
                            subtitleClass="xl:w-[75%]"
                            fontFamily="font-merri"
                            textWeigth="font-marmal"
                        />
                        <div className="lg:text-right mt-auto">
                            <Button href="/about" label="Our service" bgColor="bg-lime-400" textColor="text-gray-900" className="py-4" />
                        </div>
                    </div>
                    <div className="grid lg:grid-cols-3 grid-cols-1 gap-6 mb-6">
                        <GradientFeatureCard
                            layout="lightgrey"
                            image="/images/feature-2.svg"
                            title="Automate tasks analytics"
                            description="Create comprehensive monitors with for proactive into more."
                        />
                        <GradientFeatureCard
                            image="/images/feature-2.svg"
                            layout="lightgrey"
                            title="Strong, scalable, secure"
                            description="Deliver advanced monitoring for proactive performance management."
                            aosDelay={200}
                            aosDuration={400}
                            colorTheme="darkblue"
                        />
                        <GradientFeatureCard
                            image="/images/feature-2.svg"
                            layout="lightgrey"
                            title="Build dynamic systems"
                            description="Craft comprehensive insights for forward-looking operations."
                            aosDelay={400}
                            aosDuration={400}
                        />
                    </div>
                    {/* card sticky */}
                    <div className="flex flex-col items-center gap-4 lg:pt-24 pt-12">
                        <div className="text-center">
                            <PageTitle3
                                badgeText=""
                                title="Understand expectations, then delight customers completely"
                                subtitle="Never miss a chance to grow—our platform connects you with valuable opportunities never slip through the cracks."
                                widthClass="w-full xl:w-7/12 lg:w-7/12 mx-auto"
                                alignment="center"
                                padding="lg:pb-10 pb-6"
                                textWeigth="font-medium"
                                fontFamily="font-merri"
                                subtitleClass="lg:px-20"
                            />
                        </div>
                        <StickyFeatureCards cards={cards} />
                    </div>
                </div>
            </section>
            {/* team wrap */}
            <section className="team-wrap font-sora z-10 ">
                <div className="max-w-screen-xl mx-auto px-3 sm:px-6 md:px-14 lg:px-14 xl:px-18 2xl:px-14 lg:pb-24 pb-16">
                    {/* title */}
                    <PageTitle3
                        icon={<Command size={18} />}
                        badgeText=""
                        title="Learn expectations then truly astound your customers"
                        subtitle="Join thousands who trust us for quality and lasting relationships"
                        widthClass="xl:w-/12 lg:w-2/3 mx-auto w-full"
                        alignment="center"
                        padding="pb-16"
                        textWeigth="font-medium"
                        fontFamily="font-merri"
                    />
                    <div className="grid xl:grid-cols-4 lg:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-6">
                        <TeamMember
                            name="Medico Deo"
                            role="Founder and CEO of Exsit"
                            image="/images/member-1.svg"
                            variant="overlay"
                            socials={[
                                { href: "https://linkedin.com", label: "LinkedIn", colorClass: "text-cyan-500", icon: <Linkedin /> },
                                { href: "https://twitch.com", label: "Twitch", colorClass: "text-red-500", icon: <Twitch /> },
                                { href: "https://twitter.com", label: "Twitch", colorClass: "text-gray-800", icon: <Twitter /> },
                            ]}
                        />
                        <TeamMember
                            name="Goria Coast"
                            role="Founder and CEO of Exsit"
                            image="/images/member-1.svg"
                            variant="overlay"
                            socials={[
                                { href: "https://linkedin.com", label: "LinkedIn", colorClass: "text-cyan-500", icon: <Linkedin /> },
                                { href: "https://twitch.com", label: "Twitch", colorClass: "text-red-500", icon: <Twitch /> },
                                { href: "https://twitter.com", label: "Twitch", colorClass: "text-gray-800", icon: <Twitter /> },
                            ]}
                        />
                        <TeamMember
                            name="Pandit Alice"
                            role="Founder and CEO of Exsit"
                            image="/images/member-1.svg"
                            variant="overlay"
                            socials={[
                                { href: "https://linkedin.com", label: "LinkedIn", colorClass: "text-cyan-500", icon: <Linkedin /> },
                                { href: "https://twitch.com", label: "Twitch", colorClass: "text-red-500", icon: <Twitch /> },
                                { href: "https://twitter.com", label: "Twitch", colorClass: "text-gray-800", icon: <Twitter /> },
                            ]}
                        />
                        <div className="w-full " data-aos="zoom-in">
                            <div className="overflow-hidden relative group bg-[linear-gradient(to_bottom,#103426,#0F7470)] rounded-xl h-[370px] p-6 flex flex-col aos-init aos-animate" data-aos="fade-up" data-aos-duration="200">
                                <h3 className="text-white font-medium text-3xl ">Ready to start your success story</h3>
                                <div className="flex flex-row justify-between mt-auto">
                                    <div className="mt-auto">
                                        <Button href="/about" label="See more" bgColor="bg-lime-400" textColor="text-gray-900" />
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* blog wrap */}
            <section className="blog-wrap lg:pb-24 pb-12 font-dm">
                <div className="max-w-screen-xl mx-auto px-3 sm:px-6 md:px-14 lg:px-14 xl:px-18 2xl:px-3 pb-0 lg:py-4 py-0">
                    <div className="flex flex-wrap justify-between pb-16 gap-y-4">
                        <PageTitle3
                            badgeText=""
                            title="Stay informed with our latest blog entries"
                            subtitle="New blog articles, insights, and updates here."
                            widthClass="w-full xl:w-6/12 lg:w-7/12"
                            alignment="start"
                            padding="pb-0"
                            textWeigth="font-medium"
                            fontFamily="font-merri"
                        />
                        <div className="lg:text-right mt-auto">
                            <Button href="/blog-1" label="Check out more blogs" bgColor="bg-lime-400" textColor="text-gray-900" />
                        </div>
                    </div>
                    <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-6 relative lg:space-y-0 space-y-5">
                        {/* === Featured Post === */}
                        {featuredPost && <BlogCardOne post={featuredPost} />}

                        {/* === Side Posts === */}
                        <div className="w-full space-y-6">
                            {sidePosts.map((post) => <BlogCardTwo key={post.id} post={post} />)}
                        </div>
                    </div>
                </div>
            </section>
            {/* CTA wrap */}
            <CtaSection iconBG={false} firstButtonBg="bg-lime-400" firstButtonText="text-gray-900" sectionBg="bg-home-twelve-cta" titleColor="text-white" subtitleColor="text-gray-100" secondButtonBg="bg-gray-100" secondButtonText="text-gray-900" fontFamily="font-merri" textWeigth="font-light" />
            

            {/* footer */}
            <div className="overflow-hidden">
                <Footer layout="elegant" bgColor="bg-white" foreColor="bg-lime-400" borderColor="border-gray-100" foretextColor="text-gray-900" logo="/images/logo/logo-darkgreen.png" />
            </div>

        </>
    );
}
