"use client";
import { blogPosts } from "@/const/blogData";

import Header from '@/components/layout/Header';
import FooterModern from '@/components/heroui/footer-modern';
import PageTitle3 from "@/components/ui/PageTitle3";
import { Command, Compass, Layout, Package } from "react-feather";
import Image from "next/image";
import Button from "@/components/ui/Button";
import CounterSection from "@/components/ui/CounterSection";
import ServiceCard from "@/components/ui/ServiceCard2";
import PriceCard3 from "@/components/ui/PriceCard3";
import BlogCardThree from "@/components/ui/BlogCardThree";
import NewsletterCTA from "@/components/layout/NewsletterCTA";
import Accordion from "@/components/ui/Accordion";

import Herofive from "@/components/layout/Herofive";
import VerticalSlider from "@/components/ui/VerticalSlider";
import Brands from "@/components/ui/Brands";


const faqData = [
    {
        question: "What is the design process for branding?",
        answer:
            "Our design services start and end with a best-in-class experience strategy that builds brands. When you join our journey, you are choosing a partner who believes in a healthier, more balanced you.",
    },
    {
        question: "How much does logo design service cost?",
        answer:
            "We do not take a cut of your revenue. Every design begins and ends with strategy — because great brands are not built by accident.",
    },
    {
        question: "Does take a cut of my revenue?",
        answer:
            "You can cancel your subscription anytime — no questions asked. We start and finish every design project with a world-class experience strategy that builds lasting brands.",
    }
];

export default function HomePage() {
    const bottomPosts = blogPosts.filter((post) => !post.featured).slice(0, 3);

    return (
        <>
            {/* Header */}
            <Header logo="/images/logo/logo-green.png" btnColor="bg-green-800" bgColor="bg-white" />
            {/* Hero */}
            <Herofive />
            {/* feature wrap */}
            <section className="feature-wrap lg:py-24 py-12">
                <div className="max-w-screen-xl mx-auto px-3 sm:px-6 md:px-14 lg:px-14 xl:px-18 2xl:px-3">
                    <div className="flex flex-wrap justify-center pb-16 gap-y-4">
                        <PageTitle3
                            badgeText=""
                            title="Discover how businesses in your industry use quizzes"
                            subtitle="Whether you're building a startup landing page, a dashboard interface, or a modern web app gives you full control."
                            widthClass="w-full xl:w-7/12 lg:w-7/12 mx-auto"
                            alignment="center"
                            padding="pb-0"
                            subtitleClass="xl:w-5/6 xl:px-5 mx-auto"
                        />
                    </div>
                    <div className="grid lg:grid-cols-2 gap-6 grid-cols-1 xl:mx-20">
                        <ServiceCard
                            title="Marketing Strategy"
                            icon={Package}
                            description="Our design services start and end with a best-in-class experience strategy that builds brands."
                            link="/about"
                            delay={0}
                        />
                        <ServiceCard
                            title="Growth Strategies"
                            icon={Compass}
                            description="From first concept to final detail, our design is rooted in experience strategy that drives brand growth."
                            link="/about"
                            delay={100}
                        />
                        <ServiceCard
                            title="Mobile App Design"
                            icon={Layout}
                            description="Our design services starts and ends with a best-in-class experience strategy that builds brands."
                            link="/about"
                            delay={0}
                        />
                        <ServiceCard
                            title="Content Management"
                            icon={Command}
                            description="Every design begins and ends with design strategy because great brands are not built by accident."
                            link="/about"
                            delay={100}
                        />
                    </div>
                </div>
            </section>
            {/* counter wrap */}
            <section className="counter-wrap lg:pb-24 pb-12 bg-green-50 relative lg:py-24 py-20">
                <div className="max-w-screen-xl mx-auto px-3 sm:px-6 md:px-14 lg:px-14 xl:px-18 2xl:px-24 lg:pb-20 pb-12">
                    <div className="flex flex-col items-center text-center xl:w-2/3 lg:w-2/3 mx-auto justify-center pb-16">
                        <PageTitle3
                            badgeText=""
                            title="Trusted by 150,000+ content creators agencies"
                            subtitle="Quizzes are working for them — and they can for you too."
                            widthClass="w-full mx-auto"
                            alignment="center"
                            padding="pb-0"
                        />
                    </div>
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6">
                        <CounterSection textcolor="text-gray-900" target={22.5} suffix="k" duration={1000} subtitle="Higher Conversion Rates" />
                        <CounterSection textcolor="text-gray-900" target={65} preffix="+" suffix="m" duration={1000} subtitle="Backed by those who believe." />
                        <CounterSection textcolor="text-gray-900" target={99.2} preffix=">" suffix="%" duration={1000} subtitle="People who trust what we." />
                    </div>
                </div>
                <div className="max-w-screen-xl mx-auto px-3 sm:px-6 md:px-14 lg:px-14 xl:px-18 2xl:px-4">
                    <div className="bg-white rounded-xl pb-0 lg:py-4">
                        <Brands layout="flex" />
                    </div>
                </div>
            </section>
            {/* feature wrap */}
            <section className="slider-wrap lg:py-24 py-12 bg-green-900">
                <div className="max-w-screen-xl mx-auto px-3 sm:px-6 md:px-14 lg:px-14 xl:px-18 2xl:px-3">
                    <div className="flex flex-wrap justify-between pb-16 gap-y-4">
                        <PageTitle3
                            badgeText=""
                            title="Our design services are strategy — start to finish"
                            subtitle="We start and finish every design project with a world-class experience strategy that builds lasting brands."
                            widthClass="w-full xl:w-6/12 lg:w-7/12"
                            alignment="start"
                            padding="pb-0"
                            textColor="text-white"
                        />
                        <div className="lg:text-right mt-auto">
                            <Button href="/about" label="More about us" bgColor="bg-lime-300" textColor="text-gray-900" />
                        </div>
                    </div>
                    <VerticalSlider />
                </div>
            </section>
            {/* accordion wrap */}
            <section className="feature-wrap lg:py-24 py-12">
                <div className="max-w-screen-xl mx-auto px-3 sm:px-6 md:px-14 lg:px-14 xl:px-18 2xl:px-3">
                    <div className="grid xl:grid-cols-2 grid-cols-1 lg:gap-20 gap-6">
                        <div className="">
                            <div
                                className="overflow-hidden rounded-xl w-full group flex"
                                data-aos="fade-up"
                                data-aos-duration="400"
                                data-aos-delay="0"
                            >
                                <Image
                                    src="/images/feature-1.svg"
                                    alt="feature"
                                    width={800} // set an approximate width
                                    height={500} // set an approximate height
                                    className="object-cover w-full transition-transform duration-1000 group-hover:scale-105"
                                    loading="lazy"
                                />
                            </div>

                        </div>
                        <div className="w-full xl:pr-20 lg:pr-14">
                            <PageTitle3
                                badgeText=""
                                title="Financial Clarity, One Step at a time. Stronger future"
                                subtitle=""
                                widthClass="w-full"
                                alignment="start"
                                padding="pb-8"
                            />
                            <Accordion items={faqData} defaultOpenIndex={0} variant="gray" />
                        </div>
                    </div>
                </div>
            </section>
            {/* price wrap */}
            <section className="price-wrap lg:py-24 py-12 bg-green-50">
                <div className="max-w-screen-xl mx-auto px-3 sm:px-6 md:px-14 lg:px-14 xl:px-18 2xl:px-3">
                    <div className="flex flex-wrap justify-between lg:space-y-0 space-y-6">
                        <div className="lg:w-5/12">
                            <PageTitle3
                                badgeText=""
                                title="Built to scale with flexible pricing with your need"
                                subtitle="Whether you're building a startup landing page, a dashboard interface, or a modern web app gives you full control."
                                widthClass="w-full"
                                alignment="start"
                                padding="pb-0"
                            />
                            <div className="gap-4 lg:mt-10 mt-6 hidden lg:flex flex-row items-center aos-init aos-animate" data-aos="fade-up" data-aos-duration="400" data-delay="400">
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
                                <div className="flex flex-col leading-tight text-gray-900 font-semibold text-2xl"> 7.65m+ <span className="block text-base font-medium text-gray-800">Content Creators and Teams</span> </div>
                            </div>
                        </div>
                        <div className="lg:w-6/12">
                            {/* price 1st */}
                            <PriceCard3
                                title="Startup"
                                price="$29"
                                period="month"
                                features={[
                                    "10 GB disk space availability",
                                    "50 GB NVMe SSD for use",
                                    "Free platform access for all",
                                    "Lifetime updates facility",
                                    "One year support",
                                ]}
                                buttonText="Book Now"
                                buttonLink="/pricing-2"
                                bgColor="bg-white"
                                borderColor="border-gray-200 border-2"
                                textColor="text-gray-800"
                            />

                            {/* price 2nd */}
                            <PriceCard3
                                title="Professional"
                                price="$49"
                                period="month"
                                features={[
                                    "20 GB disk space availability",
                                    "100 GB NVMe SSD for use",
                                    "Free platform access for all",
                                    "Lifetime updates facility",
                                    "One year support",
                                ]}
                                buttonText="Book Now"
                                buttonLink="/pricing-2"
                                bgColor="bg-white"
                                borderColor="border-gray-200 border-2"
                                textColor="text-gray-800"
                            />
                            <div data-aos="zoom-in" data-aos-duration="400" data-delay="400" className="flex flex-col lg:flex-row items-start lg:items-center p-5 bg-green-900 border border-gray-300 rounded-2xl font-sora w-full aos-init aos-animate">
                                <div className="py-2 ps-2 mb-3 lg:mb-0 xl:mb-0">
                                    <span className="font-medium text-white text-[20px] leading-[30px] mb-2 inline-block"> You have got a unique business </span>
                                    <p className="font-normal text-white/70 m-0 text-base lg:pr-6"> Your specific needs, processes, and customers to craft systems that actually work </p>
                                </div>
                                <div className="w-56">
                                    <Button href="/contact" label="Contact us" textColor="text-gray-900" bgColor="bg-lime-300" padding="px-3 py-3" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* blog wrap */}
            <section className="blog-wrap lg:py-24 py-12">
                <div className="max-w-screen-xl mx-auto px-3 sm:px-6 md:px-14 lg:px-14 xl:px-18 2xl:px-3 pb-0 lg:py-4 py-0">
                    <div className="flex flex-wrap justify-between pb-16 gap-y-4">
                        <PageTitle3
                            badgeText=""
                            title="Stay informed with our latest blog entries"
                            subtitle="New blog articles, insights, and updates here."
                            widthClass="w-full xl:w-5/12 lg:w-7/12"
                            alignment="start"
                            padding="pb-0"
                        />
                        <div className="lg:text-right mt-auto">
                            <Button href="/blog-1" label="Check out for more blog" bgColor="bg-lime-300" textColor="text-gray-900" />
                        </div>
                    </div>
                    <div className="grid lg:grid-cols-3 gap-4 md:grid-cols-2 sm:grid-cols-1">
                        {bottomPosts.map((post) => <BlogCardThree key={post.id} post={post} />)}
                    </div>
                </div>
            </section>
            <NewsletterCTA />
            {/* footer */}
            <Footer layout="modern" bgColor="bg-white" borderColor="border-gray-200" logo="/images/logo/logo-green.png" />
            {/* <Footer bgColor="bg-orange-900" foreColor="bg-yellow-400" foretextColor="text-gray-900" borderColor="border-orange-900" iconbgColor="bg-yellow-400"/> */}
        </>
    );
}
