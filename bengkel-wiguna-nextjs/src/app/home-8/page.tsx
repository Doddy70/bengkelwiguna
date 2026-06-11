"use client";


import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import BrandCarousel from "@/components/ui/BrandCarousel";

import PageTitle3 from "@/components/ui/PageTitle3";
import { Box, Database, Layers, Layout, Package, Zap } from "react-feather";
import Image from "next/image";
import Button from "@/components/ui/Button";
import FeatureCard from "@/components/ui/FeatureBox";
import Accordion from "@/components/ui/Accordion";
import { Play, Boxes } from "lucide-react";
import FeatureIcon from "@/components/ui/FeatureIcon";
import BillingToggle from "@/components/ui/BillingToggle";
import FeedbackCard from "@/components/ui/FeedbackCard";
import PriceCard4 from "@/components/ui/PriceCard4";
import Heroeight from "@/components/layout/Heroeight";
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


export default function Home8Page() {
    

    return (
        <>  {/* Header */}
            <Header theme='header-light' logo="/images/logo/logo-cyan.png" btnColor="bg-cyan-500" />
            {/* Hero */}
            <Heroeight />

            <section className="feature-wrap lg:pt-24 pt-12 lg:pb-6 pb-0">
                <div className="max-w-screen-xl mx-auto px-3 sm:px-6 md:px-14 lg:px-14 xl:px-18 2xl:px-3 pb-0">
                    {/* title  */}
                    <div className="flex justify-center lg:pb-16 pb-10">
                        <h2 className="lg:text-2xl text-xl font-medium text-center text-white/60">Trusted by 500+ teams to empower 2,00,000+ people</h2>
                    </div>
                    <div className="flex justify-center relative lg:pb-24 pb-12">
                        <BrandCarousel darkMode={true} />
                    </div>
                    {/* title */}
                    <PageTitle3
                        badgeText=""
                        title="Discover what customers expect and go beyond to amaze them"
                        subtitle="Join thousands who trust us for quality and lasting relationships"
                        widthClass="xl:w-7/12 lg:w-2/3 mx-auto"
                        alignment="center"
                        padding="pb-16"
                        textColor="text-white"
                        textWeigth='font-normal'
                        subtitleColor='text-gray-200'
                    />
                    {/* grid */}
                    <div className="grid lg:grid-cols-12 grid-cols-1 gap-6 relative">
                        {/* left side */}
                        <div className="w-full col-span-5 mb-6" data-aos="zoom-in" data-aos-duration="400" data-aos-delay="0">
                            <div
                                className="overflow-hidden rounded-xl"
                                data-aos="zoom-in"
                                data-aos-duration="400"
                                data-aos-delay="0"
                            >
                                <a
                                    href="/images/about-video.mp4"
                                    className="glightbox relative"
                                    data-type="video"
                                >
                                    <Image
                                        src="/images/video-8.svg"
                                        alt="banner"
                                        width={800}
                                        height={450}
                                        className="object-cover w-full h-auto"
                                        loading="lazy"
                                    />
                                    <div className="w-16 h-16 absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full flex items-center justify-center text-center bg-white/40">
                                        <Play fill="white" size={30} strokeWidth={0} />
                                    </div>
                                </a>
                            </div>
                        </div>
                        {/* right side */}
                        <div className="w-full col-span-7 mb-6 aos-init aos-animate">
                            <div className="grid md:grid-cols-2 grid-cols-1 gap-6 relative">
                                <div className="w-full">
                                    <FeatureCard
                                        icon={<Layers size={40} strokeWidth={1.5} />}
                                        title="Content Management"
                                        description="Our design services start and end with a best-in-class experience."
                                        aosDelay={0}
                                    />
                                </div>
                                <div className="w-full">
                                    <FeatureCard
                                        icon={<Zap size={40} strokeWidth={1.5} />}
                                        title="Digital Transformation"
                                        description="Our design services start and end with a best-in-class experience."
                                        aosDelay={100}
                                    />
                                </div>
                                <div className="w-full">
                                    <FeatureCard
                                        icon={<Layout size={40} strokeWidth={1.5} />}
                                        title="Market Performance"
                                        description="Our design services start and end with a best-in-class experience."
                                        aosDelay={0}
                                    />
                                </div>
                                <div className="w-full">
                                    <FeatureCard
                                        icon={<Box size={40} strokeWidth={1.5} />}
                                        title="Performance Analytics"
                                        description="Our design services start and end with a best-in-class experience."
                                        aosDelay={100}
                                    />
                                </div>
                            </div>
                            <div data-aos="zoom-in" data-aos-duration="400" data-delay="400" className="flex lg:flex-row flex-col lg:items-center lg:px-10 px-6 py-5 border border-gray-800 bg-gray-900 rounded-xl mt-6 aos-init aos-animate">
                                <div className="lg:mb-0 mb-3">
                                    <span className="font-medium text-white text-[22px] leading-normal mb-2 inline-block">You have got a unique business</span>
                                    <p className="fw-400 text-gray-400 m-0 text-[15px] lg:w-[75%]">Your specific needs, processes, and customers to craft systems that actually work</p>
                                </div>
                                <div className="">
                                    <Button href="/about" label="Contact" padding="px-3 py-3" bgColor="bg-cyan-500" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* service wrap */}
            <section className="service-wrap lg:pt-24 pt-12 lg:pb-6 pb-0">
                <div className="max-w-screen-xl mx-auto px-3 sm:px-6 md:px-14 lg:px-14 xl:px-18 2xl:px-3 pb-0">
                    {/* title */}
                    <PageTitle3
                        badgeText=""
                        title="Automate your equity plans so you can growing your company"
                        subtitle="Our ever-growing database of 30M+ companies and 190M+ people ensures you are never missing an opportunity."
                        widthClass="xl:w-7/12 lg:w-2/3"
                        alignment="start"
                        padding="pb-16"
                        textColor="text-white"
                        subtitleClass="lg:w-[75%] text-white/80"
                        textWeigth='font-normal'
                    />
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 relative">
                        <div className="w-full">
                            <FeatureIcon
                                icon={<Boxes size={35} strokeWidth={1.5} className="text-gray-900 text-dark-black" />}
                                iconBgcolor="bg-lime-gradient"
                                value="6.7"
                                suffix="x"
                                title="In-house & <br /> independent"
                                link="#"
                                aosDelay={0}
                            />
                        </div>
                        <div className="w-full">
                            <FeatureIcon
                                icon={<Package size={35} strokeWidth={1.5} className="text-gray-900 text-dark-black" />}
                                iconBgcolor="bg-orange-gradient"
                                value="22.4"
                                suffix="h"
                                title="Awards from <br />Digital Media"
                                link="#"
                                aosDelay={100}
                            />
                        </div>
                        <div className="w-full">
                            <FeatureIcon
                                icon={<Database size={35} strokeWidth={1.5} className="text-gray-900 text-dark-black" />}
                                iconBgcolor="bg-blue-gradient"
                                value="8.9"
                                suffix="*"
                                title="Crafting digital <br />experiences"
                                link="#"
                                aosDelay={200}
                            />
                        </div>
                    </div>
                </div>
            </section>
            {/* feature wrap */}
            <section className="feature-wrap font-dm lg:pt-24 pt-12 pb-0 lg:pb-5">
                <div className="max-w-screen-xl mx-auto px-3 sm:px-6 md:px-14 lg:px-14 xl:px-18 2xl:px-3">
                    <div className="grid lg:grid-cols-2 grid-cols-1 xl:gap-20 gap-6">
                        {/* left side */}
                        <div className="w-full">
                            <PageTitle3
                                badgeText=""
                                title="We craft premium designs for agencies and global brands"
                                subtitle=""
                                widthClass="w-full"
                                alignment="start"
                                padding="pb-2"
                                textColor="text-white"
                                textWeigth='font-normal'
                            />
                            <Accordion bgColor="bg-gray-950" items={faqData} defaultOpenIndex={0} variant="line" borderColor="border-gray-700" textColor="text-white" />
                        </div>
                        {/* right side */}
                        <div className="overflow-hidden rounded-xl w-full group flex max-h-96">
                            <Image
                                src="/images/feature-2.svg"
                                alt="feature"
                                width={800}
                                height={600}
                                className="object-cover w-full transition-transform duration-1000 group-hover:scale-105"
                                loading="lazy"
                            />

                        </div>
                    </div>
                </div>
            </section>
            {/* price wrap */}
            <section className="price-wrap font-dm lg:pt-24 pt-12 pb-0 lg:pb-5">
                <div className="max-w-screen-xl mx-auto px-3 sm:px-6 md:px-14 lg:px-14 xl:px-18 2xl:px-3">
                    {/* title */}
                    <PageTitle3
                        badgeText=""
                        title="Built to scale with flexible pricing with your need"
                        subtitle="A healthier you — and works tirelessly to help you achieve it."
                        widthClass="xl:w-6/12 lg:w-2/3 mx-auto"
                        alignment="center"
                        padding="pb-0"
                        textColor="text-white"
                        textWeigth='font-normal'

                    />
                    <div className="flex items-center gap-3 pt-8 lg:pb-16 pb-10 justify-center text-white/70" data-aos-duration="400" data-aos="fade-up">
                        <BillingToggle defaultChecked={true} />
                    </div>
                    <div className="flex justify-center flex-wrap mx-auto xl:w-8/12 lg:w-9/12">
                        <div className="grid md:grid-cols-2 lg:gap-10 gap-6">
                            <div className="w-full mb-6" data-aos="zoom-in" data-aos-duration="400" data-aos-delay="0">
                                <PriceCard4
                                    title="Startup"
                                    subtitle="Best for startup business owners who need a boost."
                                    price="$29"
                                    period="month"
                                    buttonText="Start trial for 14 days"
                                    buttonLink="/pricing"
                                    features={[
                                        "10 GB disk space availability",
                                        "50 GB NVMe SSD for use",
                                        "Free platform access for all",
                                        "Lifetime updates facility",
                                        "One year support",
                                    ]}
                                />
                            </div>
                            <div className="w-full mb-6" data-aos="zoom-in" data-aos-duration="400" data-aos-delay="0">
                                <PriceCard4
                                    title="Enterprise"
                                    subtitle="Best for enterprise business owners who need a boost."
                                    price="$99"
                                    period="month"
                                    buttonText="Start trial for 14 days"
                                    buttonLink="/pricing"
                                    features={[
                                        "20 GB disk space availability",
                                        "100 GB NVMe SSD for use",
                                        "Free platform access for all",
                                        "Lifetime updates facility",
                                        "One year support",
                                    ]}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* faq section */}
            <section className="faq-wrap font-dm lg:pt-24 pt-12 pb-0 lg:pb-5">
                <div className="max-w-screen-xl mx-auto px-3 sm:px-6 md:px-14 lg:px-14 xl:px-18 2xl:px-3">
                    <div className="grid lg:grid-cols-12 lg:gap-24 relative lg:space-y-0 space-y-6">
                        {/* left side */}
                        <div className="lg:col-span-6 text-start flex flex-col pe-lg-5">
                            <PageTitle3
                                badgeText=""
                                title="Have any questions? here some answers"
                                subtitle="Whether you're building a startup landing page, a dashboard interface, or a modern web app gives you full control."
                                widthClass="xl:w-10/12 lg:w-2/3 w-full"
                                alignment="start"
                                padding="pb-16"
                                textColor="text-white"
                                textWeigth='font-normal'
                            />
                            <div className="mt-auto">
                                <Button href="/about" label="Check out more" bgColor="bg-cyan-600" textColor="text-white" />
                            </div>
                        </div>
                        {/* right side */}
                        <div className="lg:col-span-6 text-start flex flex-col lg:pl-16">
                            <Accordion items={faqData2} defaultOpenIndex={0} bgColor="bg-gray-900" borderColor="border-gray-800" textColor="text-white" />
                        </div>
                    </div>
                </div>
            </section>
            {/* feedback wrap */}
            <section className="feedback-wrap lg:py-24 py-12">
                <div className="max-w-screen-xl mx-auto px-3 sm:px-6 md:px-14 lg:px-14 xl:px-18 2xl:px-3 pb-0">
                    {/* page title */}
                    <PageTitle3
                        badgeText=""
                        title="Understand expectations, then delight customers completely"
                        subtitle="More balanced you — and works tirelessly to help you get there."
                        widthClass="xl:w-7/12 lg:w-2/3 mx-auto"
                        alignment="center"
                        padding="pb-16"
                        textColor="text-white"
                    />
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-6">
                        {/* 1st col */}
                        <div className="w-full space-y-6">
                            <FeedbackCard
                                bgColor="bg-gray-900"
                                borderColor="border-gray-800"
                                textColor="text-white"
                                roleTextcolor="text-gray-200"
                                rating={4.4}
                                feedback="Fast, reliable, & friendly service every time. I trust them and always recommend them to friends and family."
                                name="Goria Coast"
                                role="Founder and CEO of Exsit"
                                avatar="/images/avatars/user.png"
                                delay={100}
                            />
                            <FeedbackCard
                                bgColor="bg-gray-900"
                                borderColor="border-gray-800"
                                textColor="text-white"
                                roleTextcolor="text-gray-200"
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
                                bgColor="bg-gray-900"
                                borderColor="border-gray-800"
                                textColor="text-white"
                                roleTextcolor="text-gray-200"
                                rating={4.4}
                                feedback="The support staff's deep expertise was evident in their detailed and accurate answers to our complex questions."
                                name="Novata Coast"
                                role="Founder and CEO of Exsit"
                                avatar="/images/avatars/user.png"
                                delay={100}
                            />
                            <FeedbackCard
                                bgColor="bg-gray-900"
                                borderColor="border-gray-800"
                                textColor="text-white"
                                roleTextcolor="text-gray-200"
                                rating={4.4}
                                feedback="They delivered high-quality service, maintained consistent communication, and showed a real commit to our success every step."
                                name="Goria Coast"
                                role="Founder and CEO of Exsit"
                                avatar="/images/avatars/user.png"
                                delay={100}
                            />

                        </div>
                        {/* 3rd col */}
                        <div className="w-full space-y-6">
                            <FeedbackCard
                                bgColor="bg-gray-900"
                                borderColor="border-gray-800"
                                textColor="text-white"
                                roleTextcolor="text-gray-200"
                                rating={4.2}
                                feedback="I have been using the new app update, and I love the simplified interface! It's so much easier to navigate."
                                name="Garia Coast"
                                role="Founder and CEO of Exsit"
                                avatar="/images/avatars/user.png"
                                delay={100}
                            />
                            <FeedbackCard
                                bgColor="bg-gray-900"
                                borderColor="border-gray-800"
                                textColor="text-white"
                                roleTextcolor="text-gray-200"
                                rating={4.2}
                                feedback="One suggestion: it would be incredibly helpful if there was an offline mode for viewing saved articles, as my connectivity can be unreliable."
                                name="Garia Coast"
                                role="Founder and CEO of Exsit"
                                avatar="/images/avatars/user.png"
                                delay={100}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* footer */}
            <Footer bgColor="bg-gray-950" foreColor="bg-cyan-500" borderColor="border-gray-950" logo="/images/logo/logo-cyan-white.png" />
        </>
    );
}
