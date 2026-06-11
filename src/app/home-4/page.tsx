"use client";
import { blogPosts } from "@/const/blogData";

import Header from '@/components/layout/Header';
import FooterModern from '@/components/heroui/footer-modern';
import BrandCarousel from "@/components/ui/BrandCarousel";

import PageTitle3 from "@/components/ui/PageTitle3";
import { Command, Compass, HardDrive, Box, Clock, Database } from "react-feather";

import CounterCarousel from "@/components/ui/MainSlider";
import maincarsoul from "@/data/maincarsoul.json";
import Button from "@/components/ui/Button";
import FeedbackSlider from "@/components/ui/FeedbackSlider";
import CounterSection from "@/components/ui/CounterSection";
import ServiceCard from "@/components/ui/ServiceCard";
import PriceCard2 from "@/components/ui/PriceCard2";
import BlogCardThree from "@/components/ui/BlogCardThree";
import FeatureCard from "@/components/ui/FeatureCard2";
import NewsletterCTA from "@/components/layout/NewsletterCTA";
import Herofour from "@/components/layout/Herofour";

export default function HomePage() {
    const bottomPosts = blogPosts.filter((post) => !post.featured).slice(0, 3);

    return (
        <>
            {/* Header */}
            <Header theme="header-light"  btnColor="bg-lime-300" btnlinkColor="text-gray-900" />
            {/* Hero */}
            <Herofour />
            {/* counter wrap */}
            <section className="counter-wrap lg:py-24 py-12">
                <div className="max-w-screen-xl mx-auto px-3 sm:px-6 md:px-14 lg:px-14 xl:px-18 2xl:px-14">
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6">
                        <CounterSection target={4.5} suffix="k" duration={1000} subtitle="Built for them. <br/>Refined with them" />
                        <CounterSection target={6.5} suffix="x" duration={1000} subtitle="Joined the journey. <br/> Still counting." />
                        <CounterSection target={98.2} suffix="%" duration={1000} subtitle="Users and growing <br />every single day." />
                    </div>
                </div>
            </section>
            {/* feature wrap */}
            <section className="feature-wrap lg:pb-24 pb-12">
                <div className="max-w-screen-xl mx-auto px-3 sm:px-6 md:px-14 lg:px-14 xl:px-18 2xl:px-3">
                    <div className="flex flex-wrap justify-between pb-16 gap-y-4">
                        <PageTitle3
                            badgeText=""
                            title="Explore businesses using quizzes in your industry"
                            subtitle="Genuine feedback from those who know us best."
                            widthClass="w-full xl:w-6/12 lg:w-7/12"
                            alignment="start"
                            padding="pb-0"
                        />
                        <div className="lg:text-right mt-auto">
                            <Button href="/about" label="Our service" bgColor="bg-lime-300" textColor="text-gray-900" />
                        </div>
                    </div>
                    <div className="grid lg:grid-cols-3 grid-cols-1 gap-6 lg:mb-14 mb-10">
                        <div className="w-full lg:col-span-2 overflow-hidden relative rounded-xl" data-aos-duration="400" data-aos="fade-up">
                            {/* slider */}
                            <CounterCarousel slides={maincarsoul} />
                        </div>
                        <div className="w-full aos-init aos-animate" data-aos="fade-up" data-aos-duration="400" data-aos-delay="0">
                            <div className="overflow-hidden relative rounded-xl bg-[linear-gradient(to_bottom,#034651,#30919F)] p-8 h-[350px] text-center">
                                <h2 className="lg:text-7xl text-4xl text-lime-400 mt-8 mb-8 font-medium ls-5">22.5<span className="lg:text-5xl text-3xl">M</span></h2>
                                <h3 className="lg:text-2xl text-2xl text-white font-medium mb-3">Ad Spend vs. ROI</h3>
                                <p className="text-gray-200 font-light sm:px-8 text-lg text-center">The Truest feedback comes from those who know you best.</p>
                            </div>
                        </div>
                    </div>
                    {/* brand wrap */}
                    <BrandCarousel />
                </div>
            </section>
            {/* service wrap */}
            <section className="service-wrap lg:py-24 py-12 bg-teal-900">
                <div className="max-w-screen-xl mx-auto px-3 sm:px-6 md:px-14 lg:px-14 xl:px-18 2xl:px-14">
                    <PageTitle3
                        badgeText=""
                        title="Collaborate scale your — projects switching between tools."
                        subtitle="A healthier you — and works tirelessly to help you achieve it."
                        widthClass="xl:w-9/12 lg:w-7/12 mx-auto"
                        alignment="center"
                        padding="pb-16"
                        textColor="text-white"
                        subtitleClass="text-white/90"
                    />
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6">
                        <ServiceCard
                            icon={Command}
                            title="Marketing Analytics"
                            description="Seamlessly powerful data-driven insights to optimize your campaigns."
                        />
                        <ServiceCard
                            icon={Compass}
                            title="SEO Performance"
                            description="Build craft custom digital experiences that connect brands with people."
                        />
                        <ServiceCard
                            icon={HardDrive}
                            title="Digital Agency"
                            description="Its flexibility allows you to adapt it for any business need fintech."
                        />
                        <ServiceCard
                            icon={Box}
                            title="Quarterly Revenue"
                            description=" flexibility allows you to adapt it for any business need fintech."
                        />
                        <ServiceCard
                            icon={Clock}
                            title="Brand Strategy"
                            description="Its flexibility allows you to adapt it for any business need fintech."
                        />
                        <ServiceCard
                            icon={Database}
                            title="App Development"
                            description="ts flexibility allows you to adapt it for any business need fintech."
                        />
                    </div>
                </div>
            </section>
            {/* price wrap */}
            <section className="price-wrap lg:py-24 py-12">
                <div className="max-w-screen-xl mx-auto px-3 sm:px-6 md:px-14 lg:px-14 xl:px-18 2xl:px-20 pb-0 lg:py-4 py-0">
                    <PageTitle3
                        badgeText=""
                        title="Built to scale with flexible pricing with your need"
                        subtitle="Join thousands who trust us for quality and lasting relationships"
                        widthClass="xl:w-7/12 lg:w-2/3 mx-auto w-full"
                        alignment="center"
                        padding="pb-16"
                    />
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
                            btnbgColor="bg-lime-300"
                            btntextColor="text-gray-900"
                            checkIconcolor="text-gray-900"
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
                            bgColor="bg-green-900"
                            borderColor="border-green-800 border-2"
                            textColor="text-white"
                            btnbgColor="bg-lime-300"
                            btntextColor="text-gray-900"
                            checkIconcolor="text-lime-400"
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
                            btnbgColor="bg-lime-300"
                            btntextColor="text-gray-900"
                            checkIconcolor="text-gray-900"
                        />
                    </div>
                </div>
            </section>
            {/* feeback wrap */}
            <section className="feedback-wrap lg:py-24 py-12 bg-gray-900">
                <div className="max-w-screen-xl mx-auto px-3 sm:px-6 md:px-14 lg:px-14 xl:px-18 2xl:px-14">
                    <PageTitle3
                        badgeText=""
                        title="Our awesome services to give you success"
                        subtitle="A healthier you — and works tirelessly to help you achieve it."
                        widthClass="xl:w-7/12 lg:w-2/3 mx-auto text-white"
                        alignment="center"
                        padding="pb-16"
                        textColor="text-white"
                    />
                    <FeedbackSlider />
                </div>
            </section>
            {/* service wrap */}
            <section className="service-wrap lg:pt-24 pt-12 lg:pb-8 pb-0">
                <div className="max-w-screen-xl mx-auto px-3 sm:px-6 md:px-14 lg:px-14 xl:px-18 2xl:px-14">
                    <PageTitle3
                        badgeText=""
                        title="Use the full suite, or choose only the modules you need"
                        subtitle="Whether you're building a startup landing page, a dashboard interface, or a modern web app gives you full control you're building a startup landing page."
                        widthClass="xl:w-7/12 lg:w-7/12 mx-auto w-full"
                        alignment="center"
                        padding="pb-16"
                    />
                    <div className="grid lg:gap-12 gap-8 lg:grid-cols-2 sm:grid-cols-1">
                        <FeatureCard
                            image="/images/feature-2.svg"
                            title="Community who have faith in our ongoing efforts."
                            description="This approach prevents your content from feeling one-dimensional focused—allowing inclusive."
                            icon={<Command size={26} strokeWidth="1.5" className="text-gray-900" />}
                        />
                        <FeatureCard
                            image="/images/feature-2.svg"
                            title="Who confide in our leadership and guidance."
                            description="This approach prevents your content from feeling one-dimensional focused—allowing inclusive."
                            icon={<Box size={26} strokeWidth="1.5" className="text-gray-900" />}
                        />

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
            <NewsletterCTA layout="half" />
            {/* footer */}
            <FooterModern />
        </>
    );
}

