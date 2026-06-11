"use client";
import Image from "next/image";
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

import PageTitle3 from "@/components/ui/PageTitle3";
import { Command, Database, HelpCircle, Linkedin, Package, Twitch, Twitter, Zap } from "react-feather";

import Button from "@/components/ui/Button";

import FeatureCard3 from "@/components/ui/FeatureCard3";
import FeatureCard4 from "@/components/ui/FeatureCard4";
import Accordion from "@/components/ui/Accordion";
import Brands from "@/components/ui/Brands";
import TeamMember from "@/components/ui/TeamMember";
import TestimonialsCarousel from "@/components/ui/TestimonialsCarousel";
import CounterSection from "@/components/ui/CounterSection";
import Herothree from "@/components/layout/Herothree";

const faqData = [
    {
        question: "Unleash your datas potential",
        answer:
            "Our design services start and end with a best-in-class experience strategy that builds brands. When you join our journey, you are choosing a partner who believes in a healthier, more balanced you.",
    },
    {
        question: "One payment at a time",
        answer:
            "We do not take a cut of your revenue. Every design begins and ends with strategy — because great brands are not built by accident.",
    },
    {
        question: "Every customer insight place",
        answer:
            "You can cancel your subscription anytime — no questions asked. We start and finish every design project with a world-class experience strategy that builds lasting brands.",
    },
    {
        question: "Does exsit have app",
        answer:
            "You can cancel your subscription anytime — no questions asked. We start and finish every design project with a world-class experience strategy that builds lasting brands.",
    },
    {
        question: "How much does logo design service cost?",
        answer:
            "You can cancel your subscription anytime — no questions asked. We start and finish every design project with a world-class experience strategy that builds lasting brands.",
    }
];
const faqData2 = [
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
const testimonials = [
    {
        rating: 4.5,
        text: "Incredible experience from start to finish. The team is responsive, professional, and genuinely cares about customer satisfaction i always feel heard, supported, and appreciated.",
        name: "Goria Coast",
        role: "Founder and CEO of Exsit",
        image: "/images/member-2.svg",
    },
    {
        rating: 4.5,
        text: "Being a member has real benefits. I always feel heard, supported, and appreciated. A brand I can truly rely on. Top-notch service. They go above and beyond to meet expectations.",
        name: "Henry Deo",
        role: "Founder and CEO of Exsit",
        image: "/images/member-2.svg",
    },
];

export default function HomePage() {
    

    return (
        <>
            {/* Header */}
            <Header logo="/images/logo/logo-cyan.png" bgColor="bg-white" btnColor="bg-cyan-600" />
            {/* Hero */}
            <Herothree />
            {/* feature wrap */}
            <section className="feature-wrap lg:mx-20 font-sora lg:-mt-16 relative z-10">
                <div className="rounded-xl bg-white-gradient dark:bg-gray-800 dark:bg-image-none">
                    <div className="max-w-screen-xl mx-auto px-3 sm:px-6 md:px-14 lg:px-14 xl:px-18 2xl:px-14 lg:pt-24 pt-16">
                        <div className="grid lg:grid-cols-12 grid-cols-1 xl:gap-14 gap-8 lg:pb-20 pb-10">
                            <div className="w-full xl:col-span-6 lg:col-span-5 text-start flex flex-col xl:max-w-[75%]">
                                <div className="flex flex-row mb-3">
                                    <div className="px-3 py-1 border border-gray-200 shadow-sm rounded-lg text-[13px] font-medium uppercase text-gray-900 bg-white items-center gap-2 flex w-auto aos-init aos-animate" data-aos="zoom-in" data-aos-delay="0" data-aos-duration="400">
                                        <Package />
                                        How we work
                                    </div>
                                </div>
                                <h2 className="text-4xl 2xl:text-5xl text-gray-900 font-semibold mb-3 lg:mb-4 mt-4 aos-init aos-animate" data-aos="fade-up" data-aos-delay="200" data-aos-duration="400">Automate your equity plans so you can focus on <span className="bg-[linear-gradient(to_right,#40dfff,#2af294)] bg-clip-text text-transparent">growing your</span> company </h2>
                                <p className="text-gray-800 font-normal text-[17px] lg:pr-16 mb-6 leading-normal aos-init aos-animate" data-aos="fade-up" data-aos-delay="200" data-aos-duration="400">Our platform empowers users and businesses alike to transact with confidence in a rapidly evolving digital economy. </p>
                                <div className="mt-auto aos-init aos-animate" data-aos="fade-up" data-aos-delay="200" data-aos-duration="400">
                                    <Button label="Book a demo" href="/pricing" bgColor="bg-cyan-600" textColor="text-white" />
                                </div>
                            </div>
                            <div className="w-full xl:col-span-6 lg:col-span-7">
                                <div className="grid sm:grid-cols-2 grid-cols-1 gap-6">
                                    <div className="w-full space-y-6">
                                        <div className="w-full">
                                            <FeatureCard4
                                                icon={<Package size={26} className="text-white" />}
                                                title="SEO Performance"
                                                description="Our design services start and end with a best-in-class experience."
                                                delay={100}
                                                bgColor="bg-orange-500"
                                            />
                                        </div>
                                        <div className="w-full">
                                            <FeatureCard4
                                                icon={<Command size={26} className="text-white" />}
                                                title="Quarterly Revenue"
                                                description="Our design services start and end with a best-in-class experience."
                                                delay={100}
                                                bgColor="bg-cyan-500"
                                            />
                                        </div>
                                    </div>
                                    <div className="w-full space-y-6 mt-6">
                                        <div className="w-full">
                                            <FeatureCard4
                                                icon={<Database size={26} className="text-white" />}
                                                title="Analytics Projects"
                                                description="Our design services start and end with a best-in-class experience."
                                                delay={100}
                                                bgColor="bg-green-500"
                                            />
                                        </div>
                                        <div className="w-full">
                                            <FeatureCard4
                                                icon={<Zap size={26} className="text-white" />}
                                                title="Ad Spend vs. ROI"
                                                description="Our design services start and end with a best-in-class experience."
                                                delay={100}
                                                bgColor="bg-blue-500"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* counter  */}
                        <div className="grid xl:grid-cols-3 lg:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-10 lg:py-24 py-12 border-t border-b border-gray-300" id="exsit-counter">
                            <CounterSection layout="line" target={4.5} textcolor="text-gray-900" suffix="k" duration={1000} subtitle="Built for them. <br/>Refined with them" />
                            <CounterSection layout="line" target={6.5} textcolor="text-gray-900" suffix="m" duration={1000} subtitle="Joined journey. <br/> Still counting." />
                            <CounterSection layout="line" target={10.8} textcolor="text-gray-900" suffix="x" duration={1000} subtitle="Users and growing <br />every single day." />
                        </div>
                    </div>
                </div>
            </section>
            {/* service wrap */}
            <section className="service-wrap z-10">
                <div className="max-w-screen-xl mx-auto px-3 sm:px-6 md:px-14 lg:px-14 xl:px-18 2xl:px-14 lg:py-24 py-16">
                    {/* title */}
                    <PageTitle3
                        badgeText="Services We Offer"
                        title="Transforming into customer expectations and deliver"
                        subtitle="Quizzes are working for them — and they can for you too."
                        widthClass="xl:w-8/12 lg:w-2/3 mx-auto w-full"
                        alignment="center"
                        padding="pb-16"
                    />
                    <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 lg:pb-16 pb-10">
                        <div className="w-full" data-aos="zoom-in" data-aos-duration="200">
                            <FeatureCard3
                                variant="simple"
                                image="/images/feature-2.svg"
                                number={1}
                                title="Content Management"
                                description="Our design services starts and ends with a best-in-class experience."
                                bgColor="bg-cyan-500"
                            />
                        </div>
                        <div className="w-full pt-4" data-aos="zoom-in" data-aos-duration="200">
                            <FeatureCard3
                                variant="simple"
                                image="/images/feature-2.svg"
                                number={2}
                                title="Market Performance"
                                description="Our design services starts and ends with a best-in-class experience."
                                bgColor="bg-cyan-500"
                            />
                        </div>
                        <div className="w-full pt-8" data-aos="zoom-in" data-aos-duration="200">
                            <FeatureCard3
                                variant="simple"
                                image="/images/feature-2.svg"
                                number={3}
                                title="Digital Transformation"
                                description="Our design services starts and ends with a best-in-class experience."
                                bgColor="bg-cyan-500"
                            />
                        </div>
                    </div>
                    <div className="flex justify-center lg:pb-16 pb-10 pt-4">
                        <h2 className="text-gray-400 text-xl font-medium text-center">Trusted by 500+ teams to empower 2,00,000+ people</h2>
                    </div>
                    <div className="flex flex-wrap justify-center lg:gap-6 lg:pb-24 pb-10 lg:px-24">
                        <Brands />
                    </div>
                    <div className="grid lg:grid-cols-2 grid-cols-1 xl:gap-20 md:gap-10 gap-6 lg:pb-20 pb-10">
                        <div className="overflow-hidden rounded-xl w-full group flex relative lg:h-96 h-48">
                            <Image
                                src="/images/auth-bg.svg"
                                alt="feature"
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 554px"
                                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                                loading="lazy"
                            />
                        </div>


                        <div className="w-full">
                            <PageTitle3
                                badgeText=""
                                title="We craft premium designs for agencies and global brands"
                                subtitle=""
                                widthClass="w-full"
                                alignment="start"
                                padding="pb-8"
                            />
                            <Accordion items={faqData} defaultOpenIndex={0} variant="line" />
                        </div>
                    </div>
                    <div className="grid lg:grid-cols-2 grid-cols-1 xl:gap-20 md:gap-10 gap-6 lg:pb-8 pb-4">
                        <div className="w-full">
                            <PageTitle3
                                badgeText=""
                                title="We deliver exquisite catering for intimate gatherings."
                                subtitle="Whether you're building a startup landing page, a dashboard interface, or a modern web app, Exsit gives you full control over the look and feel of your site because great brands are not built by accident."
                                widthClass="w-full"
                                alignment="start"
                                padding="pb-8"
                            />
                            <p className="text-gray-800 font-normal text-[17px] mt-1 mb-2 lg:pr-10 flex gap-3 items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-check-circle-fill text-cyan-500" viewBox="0 0 16 16"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path></svg>
                                Do you have a discount for students, academics
                            </p>
                            <p className="text-gray-800 font-normal text-[17px] mt-1 mb-2 lg:pr-10 flex gap-3 items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-check-circle-fill text-cyan-500" viewBox="0 0 16 16"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path></svg>
                                What happens if we cancel our subscription?
                            </p>
                            <p className="text-gray-800 font-normal text-[17px] mt-1 mb-8 lg:pr-10 flex gap-3 items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-check-circle-fill text-cyan-500" viewBox="0 0 16 16"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path></svg>
                                Can I have a proposal I can with my team?
                            </p>
                            <Button label="Check out more" href="/about" bgColor="bg-cyan-600" />
                        </div>
                        <div className="overflow-hidden rounded-xl w-full group flex">
                            <Image
                                src="/images/about-7.svg"
                                alt="feature"
                                width={554}
                                height={384}
                                className="object-cover w-full transition-transform duration-1000 group-hover:scale-105"
                                loading="lazy"
                            />
                        </div>
                    </div>
                </div>
            </section>
            {/* team wrap */}
            <section className="team-wrap font-sora z-10 ">
                <div className="max-w-screen-xl mx-auto px-3 sm:px-6 md:px-14 lg:px-14 xl:px-18 2xl:px-14 lg:pb-24 pb-16">
                    {/* title */}
                    <PageTitle3
                        icon={<Command size={18} />}
                        badgeText="Our experience member"
                        title="Learn expectations then truly astound your customers"
                        subtitle="Join thousands who trust us for quality and lasting relationships"
                        widthClass="xl:w-/12 lg:w-2/3 mx-auto w-full"
                        alignment="center"
                        padding="pb-16"
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
                        <div className="w-full ">
                            <div className="overflow-hidden relative group bg-[linear-gradient(to_bottom,#055160,#087990)] rounded-xl h-[370px] p-6 flex flex-col aos-init aos-animate" data-aos="fade-up" data-aos-duration="200">
                                <h3 className="text-white font-medium text-3xl ">Ready to start your success story</h3>
                                <div className="flex flex-row justify-between mt-auto">
                                    <div className="mt-auto">
                                        <Button href="/about" label="See more" bgColor="bg-cyan-500" textColor="text-white" />
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* feedback wrap */}
            <section className="feedback-wrap bg-home-three-feedback font-sora lg:py-24 py-16">
                <div className="max-w-screen-xl mx-auto px-3 sm:px-6 md:px-14 lg:px-14 xl:px-18 2xl:px-14">
                    <div className="flex flex-wrap justify-between pb-16 gap-y-4">
                        <PageTitle3
                            badgeText=""
                            title="Genuine feedback from those who know us"
                            subtitle=""
                            widthClass="w-full xl:w-6/12 lg:w-7/12"
                            alignment="start"
                            padding="pb-0"
                            textColor="text-white"
                        />
                        <div className="lg:text-right mt-auto">
                            <Button href="/about" label="Check out more" bgColor="bg-cyan-500" textColor="text-white" />
                        </div>
                    </div>
                    <div className="flex flex-wrap">
                        <div className="w-full lg:w-2/12 lg:mb-0 mb-8" data-aos="zoom-in" data-aos-delay="0" data-aos-duration="400">
                            <Image loading="lazy" src="/images/icon-1.png" alt="icon"  className="lg:-mt-6 relative aos-init aos-animate" width={111} height={86} />
                        </div>
                        <div className="w-full lg:w-10/12">
                            <TestimonialsCarousel testimonials={testimonials} />
                        </div>
                    </div>
                </div>
            </section>
            {/* faq wrap */}
            <section className="faq-wrap font-sora lg:py-24 py-16 bg-gray-gradient dark:bg-image-none dark:bg-gray-800">
                <div className="max-w-screen-xl mx-auto px-3 sm:px-6 md:px-14 lg:px-14 xl:px-18 2xl:px-3">
                    <div className="grid lg:grid-cols-12 xl:gap-24 gap-6 relative lg:space-y-0 space-y-5">
                        <div className="lg:col-span-6 text-start flex flex-col pe-lg-5">
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
                        <div className="lg:col-span-6 text-start flex flex-col 2xl:pl-16">
                            <Accordion items={faqData2} defaultOpenIndex={0} />
                        </div>
                    </div>
                </div>
            </section>
            {/* footer */}
            <Footer foreColor="bg-orange-500" layout="classic" logo="/images/logo/logo-cyan-white.png" />
        </>
    );
}
