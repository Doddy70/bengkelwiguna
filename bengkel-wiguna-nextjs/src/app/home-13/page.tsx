"use client";
import { blogPosts } from "@/const/blogData";

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

import PageTitle3 from "@/components/ui/PageTitle3";
import { Clock, Command, Compass, Database, HardDrive, Package, Star } from "react-feather";


import Button from "@/components/ui/Button";
import CounterSection from "@/components/ui/CounterSection";

import Image from "next/image";
import GradientFeatureCard from "@/components/ui/GradientCard";


import HeroThirteen from "@/components/layout/HeroThirteen";
import TestimonialCarousel from "@/components/ui/TestimonialCarousel";
import testimonials from "@/data/testimonials.json";
import BlogCardThree from "@/components/ui/BlogCardThree";
import FeatureCard5 from "@/components/ui/FeatureCard5";
import BlogCardFour from "@/components/ui/BlogCardFour";


export default function HomePage() {
    const bottomPosts = blogPosts.filter((post) => !post.featured).slice(0, 3);

    return (
        <>

            {/* Header */}
            <Header theme="header-light" logo="/images/logo/logo.png" btnColor="bg-blue-800" btnlinkColor="text-white" />

            {/* Hero */}
            <HeroThirteen />

            {/* service wrap */}
            <section className="service-wrap lg:py-24 py-12">
                <div className="max-w-screen-xl mx-auto px-3 sm:px-6 md:px-14 lg:px-14 xl:px-18 2xl:px-20 pb-0 py-0">
                    <PageTitle3
                        badgeText=""
                        title="Over 150,000+ content creators trust us"
                        subtitle="Quizzes are working for them — and they can for you too."
                        widthClass="w-full xl:w-7/12 lg:w-2/3 mx-auto"
                        alignment="center"
                        padding="pb-16"
                    />
                    <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 justify-center gap-6">
                        <CounterSection textcolor="text-gray-900" subtextcolor="text-800" target={4.5} suffix="k" duration={1000} subtitle="Higher Conversion Rates" />
                        <CounterSection textcolor="text-gray-900" subtextcolor="text-800" target={6.5} suffix="x" duration={1000} subtitle="Backed by those who believe." />
                        <CounterSection textcolor="text-gray-900" subtextcolor="text-800" target={98.2} suffix="%" preffix=">" duration={1000} subtitle="People who trust what we." />
                    </div>
                </div>
            </section>
            {/* feature wrap */}
            <section className="feature-wrap lg:pb-24 pb-12">
                <div className="max-w-screen-xl mx-auto px-3 sm:px-6 md:px-14 lg:px-14 xl:px-18 2xl:px-3 pb-0 lg:py-4 py-0">
                    <div className="flex flex-wrap justify-between pb-16 gap-y-4">
                        <PageTitle3
                            badgeText=""
                            title="Discover what customers expect and go beyond to amaze them"
                            subtitle="Our ever-growing database of 30M+ companies and 190M+ people ensures you’re never missing an opportunity."
                            widthClass="w-full xl:w-8/12 lg:w-7/12"
                            alignment="start"
                            padding="pb-0"
                            subtitleClass="xl:w-[75%]"
                        />
                        <div className="lg:text-right mt-auto">
                            <Button href="/about" label="Our service" bgColor="bg-blue-800" textColor="text-white" className="py-4" />
                        </div>
                    </div>
                    <div className="grid lg:grid-cols-3 grid-cols-1 gap-6 mb-6">
                        <GradientFeatureCard
                            image="/images/feature-2.svg"
                            title="Automate tasks analytics"
                            description="Create comprehensive monitors with proactive insights for more."
                            aosDelay={0}
                            colorTheme="lightblue"
                        />
                        <GradientFeatureCard
                            image="/images/feature-2.svg"
                            title="Strong, scalable, secure"
                            description="Deliver advanced monitoring for proactive performance management."
                            aosDelay={200}
                            colorTheme="lightblue"
                        />
                        <GradientFeatureCard
                            image="/images/feature-2.svg"
                            title="Build dynamic systems"
                            description="Craft comprehensive insights for forward-looking operations."
                            aosDelay={400}
                            colorTheme="lightblue"
                        />
                    </div>
                </div>
            </section>
            {/* team wrap */}
            <div className="feature-wrap lg:mx-6">
                <div className="lg:py-24 py-12 bg-gray-900 rounded-xl px-6">
                    <div className="max-w-screen-xl mx-auto px-3 sm:px-6 md:px-14 lg:px-14 xl:px-18 2xl:px-3 pb-0">
                        {/* title */}
                        <div className="flex flex-col items-center text-center font-dm xl:w-7/12 lg:w-2/3 mx-auto justify-between lg:pb-24 pb-12">
                            <PageTitle3
                                badgeText=""
                                title="Anticipate needs deliver extraordinary customer delight"
                                subtitle="Our ever-growing database of 30M+ companies and 190M+ people ensures opportunity."
                                widthClass="w-full mx-auto"
                                alignment="center"
                                padding="pb-6"
                                textColor="text-white"
                                textWeigth="font-medium"
                                subtitleColor="text-gray-100"
                            />
                            <div>
                                <Button href="/about" label="Explore integrations" bgColor="bg-blue-800" textColor="text-white" className="py-4" />
                            </div>
                        </div>
                        <div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-8 gap-6 pb-5">
                            <FeatureCard5
                                icon={<Command className="text-white" size={35} strokeWidth="1" />}
                                title="Quarterly Revenue"
                                description="Its flexibility allows you to adapt it for any business need fintech."
                                aosDelay={0}
                                layout="classic"
                            />
                            <FeatureCard5
                                icon={<Compass className="text-white" size={35} strokeWidth="1" />}
                                title="App Development"
                                description="Its flexibility allows you to adapt it for any business need fintech."
                                aosDelay={0}
                                layout="classic"
                            />
                            <FeatureCard5
                                icon={<HardDrive className="text-white" size={35} strokeWidth="1" />}
                                title="Brand Strategy"
                                description="Its flexibility allows you to adapt it for any business need fintech."
                                aosDelay={0}
                                layout="classic"
                            />
                            <FeatureCard5
                                icon={<Database className="text-white" size={35} strokeWidth="1" />}
                                title="Digital Agency"
                                description="Its flexibility allows you to adapt it for any business need fintech."
                                aosDelay={0}
                                layout="classic"
                            />
                            <FeatureCard5
                                icon={<Clock className="text-white" size={35} strokeWidth="1" />}
                                title="SEO Performance"
                                description="We craft custom digital experiences that connect brands with people."
                                aosDelay={0}
                                layout="classic"
                            />
                            <FeatureCard5
                                icon={<Package className="text-white" size={35} strokeWidth="1" />}
                                title="Digital Agency"
                                description="Its flexibility allows you to adapt it for any business need fintech."
                                aosDelay={0}
                                layout="classic"
                            />
                        </div>
                        {/* grid */}
                        <div className="grid lg:grid-cols-2 grid-cols-1 lg:pt-24 pt-12 xl:gap-20 gap-6 pb-5">
                            <div className="w-full">
                                <PageTitle3
                                    badgeText="Powerful features"
                                    badgeTextBG="bg-white/20"
                                    badgeTextColor="text-white"
                                    icon={<Database size={18} />}
                                    title="We deliver exquisite catering for intimate gatherings."
                                    subtitle="Whether you're building a startup landing page, a dashboard interface, or a modern web app, Exsit gives you full control over the look and feel of your site because great brands are not built by accident."
                                    widthClass="w-full"
                                    alignment="start"
                                    padding="pb-8"
                                    textColor="text-white"
                                    subtitleColor="text-gray-100"
                                />
                                <p className="text-white font-normal text-[17px] mt-1 mb-2 lg:pr-10 flex gap-3 items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-check-circle-fill text-white" viewBox="0 0 16 16"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path></svg>
                                    Do you have a discount for students, academics
                                </p>
                                <p className="text-white font-normal text-[17px] mt-1 mb-2 lg:pr-10 flex gap-3 items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-check-circle-fill text-white" viewBox="0 0 16 16"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path></svg>
                                    What happens if we cancel our subscription?
                                </p>
                                <p className="text-white font-normal text-[17px] mt-1 mb-8 lg:pr-10 flex gap-3 items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-check-circle-fill text-white" viewBox="0 0 16 16"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path></svg>
                                    Can I have a proposal I can with my team?
                                </p>
                                <Button label="Check out more" href="/about" bgColor="bg-blue-800" textColor='text-white' className="py-4" />
                            </div>

                            <div
                                className="flex items-center py-3 relative w-full max-w-[578px] aspect-[578/414] mx-auto"
                                data-aos="zoom-in"
                                data-aos-duration="400"
                                data-aos-delay="400"
                            >
                                <Image
                                    src="/images/feature-2.svg"
                                    alt="banner"
                                    fill
                                    loading="lazy"
                                    className="object-contain"
                                    sizes="(max-width: 640px) 90vw, (max-width: 1024px) 70vw, 578px"
                                />
                            </div>

                        </div>
                        {/* grid */}
                        <div className="grid lg:grid-cols-2 grid-cols-1 xl:gap-20 gap-6 lg:py-24 py-12">
                            <div
                                className="flex items-center py-3 relative w-full max-w-[598px] aspect-[598/458] mx-auto"
                                data-aos="zoom-in"
                                data-aos-duration="400"
                                data-aos-delay="400"
                            >
                                <Image
                                    src="/images/feature-2.svg"
                                    alt="banner"
                                    fill
                                    loading="lazy"
                                    className="object-contain"
                                    sizes="(max-width: 640px) 90vw, (max-width: 1024px) 70vw, 598px"
                                />
                            </div>

                            <div className="w-full">
                                <PageTitle3
                                    badgeText="Powerful features"
                                    badgeTextBG="bg-white/20"
                                    badgeTextColor="text-white"
                                    icon={<Command size={18} />}
                                    title="We saw a 50x boost in engagement within a week, thanks to the Get higher strategy."
                                    subtitle="Whether you're building a startup landing page, a dashboard interface, or a modern web app, Exsit gives you full control over the look and feel of your site because great brands are not built by accident."
                                    widthClass="w-full"
                                    alignment="start"
                                    padding="pb-8"
                                    textColor="text-white"
                                    subtitleColor="text-gray-100"
                                />
                                <div className="flex flex-wrap gap-3">
                                    <p data-aos="zoom-in" data-aos-delay="0" className="py-2 pl-3 pr-4 bg-white/25 transition-all shadow-sm hover:shadow-md border border-gray-800 rounded-full text-[16px] text-white font-medium inline-flex items-center gap-2">
                                        <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                        Designed to evolve with business
                                    </p>
                                    <p data-aos="zoom-in" data-aos-delay="0" className="py-2 pl-3 pr-4 bg-white/25 transition-all shadow-sm hover:shadow-md border border-gray-800 rounded-full text-[16px] text-white font-medium inline-flex items-center gap-2">
                                        <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                        Grows seamlessly
                                    </p>
                                    <p data-aos="zoom-in" data-aos-delay="0" className="py-2 pl-3 pr-4 bg-white/25 transition-all shadow-sm hover:shadow-md border border-gray-800 rounded-full text-[16px] text-white font-medium inline-flex items-center gap-2">
                                        <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                        Solutions that flex to match
                                    </p>
                                    <p data-aos="zoom-in" data-aos-delay="0" className="py-2 pl-3 pr-4 bg-white/25 transition-all shadow-sm hover:shadow-md border border-gray-800 rounded-full text-[16px] text-white font-medium inline-flex items-center gap-2">
                                        <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                        Precisely to your requirements
                                    </p>
                                    <p data-aos="zoom-in" data-aos-delay="0" className="py-2 pl-3 pr-4 bg-white/25 transition-all shadow-sm hover:shadow-md border border-gray-800 rounded-full text-[16px] text-white font-medium inline-flex items-center gap-2">
                                        <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                        Future-proof infrastructure built
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            {/* feedback wrap */}
            <section className="feedback-wrap lg:pt-24 pt-12">
                <div className="max-w-screen-xl mx-auto px-3 sm:px-6 md:px-14 lg:px-14 xl:px-18 2xl:px-14 pb-0">
                    <PageTitle3
                        badgeText=""
                        title="Explore customer expectations to leave them delighted"
                        subtitle="Join thousands who trust us for quality and lasting relationships."
                        widthClass="xl:w-8/12 lg:w-2/3 mx-auto"
                        alignment="center"
                        padding="pb-16"
                    />
                    <div className="flex lg:flex-nowrap flex-wrap lg:space-x-6 space-x-0 lg:space-y-0 space-y-6 pb-6">
                        {/* left side */}
                        <div className="lg:w-4/12">
                            <div>
                                <Image src="/images/banner-6a.svg" width={388} height={395} alt="avater" className="rounded-xl w-full" />
                            </div>
                        </div>
                        {/* right side */}
                        <div className="lg:w-8/12">
                            <div className="feedback-div bg-white border border-gray-200 rounded-xl p-4 relative h-full">
                                <div className="grid lg:grid-cols-3 md:grid-cols-1 grid-cols-1 lg:gap-6 gap-6 h-full relative">
                                    <div className="lg:col-span-2 w-full h-full static">
                                        <div className="flex flex-col p-2 h-full static">
                                            <TestimonialCarousel testimonials={testimonials} />
                                        </div>
                                    </div>
                                    <div className="lg:col-span-1 lg:flex hidden flex-col">
                                        <div className="mt-auto text-end p-3 pb-0">
                                            <span className="lg:text-7xl text-5xl text-gray-900 font-medium">4.5</span>
                                            <div className="flex flex-row gap-1 justify-end">
                                                <Star fill='orange' strokeWidth={0} size={20} />
                                                <Star fill='orange' strokeWidth={0} size={20} />
                                                <Star fill='orange' strokeWidth={0} size={20} />
                                                <Star fill='orange' strokeWidth={0} size={20} />
                                                <Star fill='gray' strokeWidth={0} size={20} />
                                            </div>
                                            <p className="font-medium text-gray-900 mt-1 mb-0">(2.3k + Reviews )</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* blog wrap */}
            <section className="blog-wrap lg:py-24 py-12">
                <div className="max-w-screen-xl mx-auto px-3 sm:px-6 md:px-14 lg:px-14 xl:px-18 2xl:px-3 pb-0 lg:py-4 py-0">
                    <div className="flex flex-wrap justify-center text-center pb-16 gap-y-4">
                        <PageTitle3
                            badgeText=""
                            title="Recent blog & articles about technology"
                            subtitle="New blog articles, insights, and updates here."
                            widthClass="w-full xl:w-5/12 lg:w-7/12"
                            alignment="center"
                            padding="pb-0"
                        />
                    </div>
                    <div className="grid lg:grid-cols-3 gap-4 md:grid-cols-2 sm:grid-cols-1">
                        {bottomPosts.length > 0 && (
                            <>
                                {/* First card uses BlogCardFour */}
                                <BlogCardFour
                                    key={bottomPosts[0].id}
                                    post={bottomPosts[0]}
                                    aosDelay={0}
                                    aosDuration={300}
                                />

                                {/* Remaining cards use BlogCardThree */}
                                {bottomPosts.slice(1).map((post) => (
                                    <BlogCardThree key={post.id} post={post} />
                                ))}
                            </>
                        )}
                    </div>
                </div>
            </section>


            {/* footer */}
            <Footer />

        </>
    );
}
