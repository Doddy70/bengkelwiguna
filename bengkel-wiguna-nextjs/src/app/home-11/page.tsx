"use client";
import { blogPosts } from "@/const/blogData";

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

import PageTitle3 from "@/components/ui/PageTitle3";

import { Package2, Shield, Sparkle } from "lucide-react";

import Button from "@/components/ui/Button";
import CounterSection from "@/components/ui/CounterSection";

import Image from "next/image";
import GradientFeatureCard from "@/components/ui/GradientCard";


import CtaSection from "@/components/layout/CtaSection";
import BlogCardThree from "@/components/ui/BlogCardThree";
import IconBox from "@/components/ui/IconBox";
import FeatureIcon from "@/components/ui/FeatureIcon";
import HeroEleven from "@/components/layout/HeroEleven";


export default function HomePage() {
    const bottomPosts = blogPosts.filter((post) => !post.featured).slice(0, 3);

    return (
        <>

            {/* Header */}
            <Header theme="header-dark" logo="/images/logo/logo-warning.png" btnColor="bg-orange-500" btnlinkColor="text-white" />
            {/* Hero */}
            <HeroEleven />
            {/* service wrap */}
            <div className="feature-wrap lg:mx-6">
                <div className="lg:py-24 py-12 bg-gray-900 rounded-xl">
                    <div className="max-w-screen-xl mx-auto px-3 sm:px-6 md:px-14 lg:px-14 xl:px-18 2xl:px-3 pb-0">
                        {/* title */}
                        <div className="flex flex-wrap justify-between pb-16 gap-y-4">
                            <PageTitle3
                                badgeText=""
                                title="Discover what customers expect and go beyond to amaze them Our ever-growing database of 30M+ companies and 190M+ people ensures"
                                subtitle=""
                                widthClass="w-full xl:w-9/12 lg:w-7/12"
                                alignment="start"
                                padding="pb-0"
                                textColor="text-white"
                                textWeigth="font-medium"
                            />
                        </div>
                        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 justify-center gap-6 lg:pb-24 pb-12">
                            <GradientFeatureCard
                                layout="classic"
                                image="/images/feature-2.svg"
                                title="Automate tasks analytics"
                                description="Create comprehensive monitors with for proactive into more."
                                colorTheme="darkblue"
                            />
                            <GradientFeatureCard
                                layout="classic"
                                image="/images/feature-2.svg"
                                title="Strong, scalable, secure"
                                description="Deliver advanced monitoring for proactive performance management."
                                colorTheme="darkblue"
                            />
                            <GradientFeatureCard
                                layout="classic"
                                image="/images/feature-2.svg"
                                title="Build dynamic systems"
                                description="Create comprehensive monitors with for proactive into more."
                                colorTheme="darkblue"
                            />
                        </div>

                        <div className="flex justify-center lg:pb-20 pb-8">
                            <h2 className="text-white text-2xl font-normal text-center">Discover what we did for them</h2>
                        </div>
                        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 justify-center gap-6 lg:pb-10">
                            <CounterSection textcolor="text-white" subtextcolor="text-white/85" target={4.5} suffix="k" duration={1000} subtitle="Higher Conversion Rates" />
                            <CounterSection textcolor="text-white" subtextcolor="text-white/85" target={6.5} suffix="x" duration={1000} subtitle="Backed by those who believe." />
                            <CounterSection textcolor="text-white" subtextcolor="text-white/85" target={98.2} suffix="%" duration={1000} subtitle="People who trust what we." />
                        </div>
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
                                title="Integrates with your entire data stack"
                                subtitle="Our ever-growing database of 30M+ companies and 190M+ people ensures opportunity."
                                widthClass="w-full mx-auto"
                                alignment="center"
                                padding="pb-6"
                            />
                            <div>
                                <Button href="/about" label="Explore integrations" bgColor="bg-gray-900" textColor="text-white" className="py-4" />
                            </div>
                        </div>
                    </div>
                    {/* grid */}
                    <div className="grid lg:grid-cols-3 grid-cols-1 gap-6 mb-6">
                        <FeatureIcon
                            variant="classic"
                            icon={<Sparkle fill="#fff" size={32} />}
                            title="Marketing Strategy"
                            description="Our design services start and end with a best-in-class experience strategy that builds brands."
                            link="#"
                            linkText="Read more"
                            aosDelay={0}
                        />
                        <FeatureIcon
                            variant="classic"
                            icon={<Package2 size={32} />}
                            title="Data Analytics"
                            description="Our design services start and end with a best-in-class experience strategy that builds brands."
                            link="#"
                            linkText="Read more"
                            aosDelay={200}
                        />
                        <FeatureIcon
                            variant="classic"
                            icon={<Shield fill="#fff" size={32} />}
                            title="Market Performance"
                            description="Our design services start and end with a best-in-class experience strategy that builds brands."
                            link="#"
                            linkText="Read more"
                            aosDelay={400}
                        />
                    </div>
                    <div className="flex justify-center lg:pb-14 pb-10 lg:pt-16 pt-12">
                        <h2 className="text-gray-400 text-lg font-medium text-center">Trusted by 500+ teams to empower 2,00,000+ people</h2>
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
                    {/* intragation */}
                    <div className="flex flex-col items-center gap-4 lg:pt-24 pt-12">
                        <div className="max-w-xl text-center">
                            <PageTitle3
                                badgeText=""
                                title="Scale with business as your data needs evolve"
                                subtitle="Our ever-growing database of 30M+ companies and 190M+ people ensures you’re never missing an opportunity."
                                widthClass="w-full mx-auto"
                                alignment="center"
                                padding="lg:pb-24 pb-12"
                            />
                        </div>
                    </div>
                    <div className="grid lg:grid-cols-2 gap-6 md:grid-cols-1 sm:grid-cols-1">
                        {/* feature box */}
                        <div
                            className="flex flex-col gap-0 p-8 bg-white border border-gray-100 rounded-xl dark:bg-gray-800"
                            data-aos="fade-up"
                            data-aos-duration="400"
                            data-aos-delay="00"
                        >
                            <div className="h-[350px] flex items-center justify-center">
                                <Image
                                    src="/images/feature-1.svg"
                                    alt="feature"
                                    width={400}
                                    height={350}
                                    className="max-w-full h-auto"
                                    style={{ width: "auto", height: "auto" }}
                                />
                            </div>

                            <div className="px-2">
                                <h3 className="text-gray-900 text-2xl font-semibold mb-2">
                                    Develop and escalation procedures
                                </h3>
                                <p className="text-[17px] leading-7 text-gray-900/75 dark:text-gray-300 font-normal mb-2">
                                    The source of truth for startups, supercharged with intelligence from across the web and your CRM.
                                </p>
                            </div>
                        </div>
                        {/* feature box */}
                        <div
                            className="flex flex-col gap-0 p-8 bg-white border border-gray-100 rounded-xl dark:bg-gray-800"
                            data-aos="fade-up"
                            data-aos-duration="400"
                            data-aos-delay="00"
                        >
                            <div className="h-[350px] relative flex items-center justify-center">
                                <Image
                                    src="/images/feature-1.svg"
                                    alt="feature"
                                    fill
                                    className="object-contain"
                                    sizes="(max-width: 768px) 100vw, 400px"
                                />
                            </div>

                            <div className="px-2">
                                <h3 className="text-gray-900 text-2xl font-semibold mb-2">
                                    Automate tasks and workflows develop
                                </h3>
                                <p className="text-[17px] leading-7 text-gray-900/75 dark:text-gray-300 font-normal mb-2">
                                    The source of truth for startups, supercharged with intelligence from across the web and your CRM.
                                </p>
                            </div>
                        </div>
                        {/* feature box */}
                        <div
                            className="flex flex-col gap-0 p-8 bg-white border border-gray-100 rounded-xl dark:bg-gray-800"
                            data-aos="fade-up"
                            data-aos-duration="400"
                            data-aos-delay="00"
                        >
                            <div className="h-[350px] flex items-center justify-center">
                                <Image
                                    src="/images/feature-1.svg"
                                    alt="feature"
                                    width={400}
                                    height={350}
                                    className="max-w-full h-auto"
                                    style={{ width: "auto", height: "auto" }}
                                />
                            </div>

                            <div className="px-2">
                                <h3 className="text-gray-900 text-2xl font-semibold mb-2">
                                    Automate tasks and workflows develop
                                </h3>
                                <p className="text-[17px] leading-7 text-gray-900/75 dark:text-gray-300 font-normal mb-2">
                                    The source of truth for startups, supercharged with intelligence from across the web and your CRM.
                                </p>
                            </div>
                        </div>
                        {/* feature box */}
                        <div
                            className="flex flex-col gap-0 p-8 bg-white border border-gray-100 rounded-xl dark:bg-gray-800"
                            data-aos="fade-up"
                            data-aos-duration="400"
                            data-aos-delay="00"
                        >
                            <div className="h-[350px] flex items-center justify-center">
                                <Image
                                    src="/images/feature-1.svg"
                                    alt="feature"
                                    width={400}
                                    height={350}
                                    className="max-w-full h-auto"
                                    style={{ width: "auto", height: "auto" }}
                                />
                            </div>

                            <div className="px-2">
                                <h3 className="text-gray-900 text-2xl font-semibold mb-2">
                                    Strong, scalable, secure timesheet
                                </h3>
                                <p className="text-[17px] leading-7 text-gray-900/75 dark:text-gray-300 font-normal mb-2">
                                    The source of truth for startups, supercharged with intelligence from across the web and your CRM.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            {/* blog wrap */}
            <section className="blog-wrap lg:pb-24 pb-12">
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
                            <Button href="/blog-1" label="Check out for more blog" bgColor="bg-orange-500" textColor="text-white" />
                        </div>
                    </div>
                    <div className="grid lg:grid-cols-3 gap-4 md:grid-cols-2 sm:grid-cols-1">
                        {bottomPosts.map((post) => <BlogCardThree key={post.id} post={post} />)}
                    </div>
                </div>
            </section>
            {/* CTA wrap */}
            <CtaSection iconBG={false} firstButtonBg="bg-orange-500" sectionBg="bg-home-eleven-cta" titleColor="text-white" subtitleColor="text-gray-100" secondButtonBg="bg-gray-100" secondButtonText="text-gray-900" />

            {/* footer */}
            <div className="overflow-hidden">
                <Footer layout="elegant" bgColor="bg-white" foreColor="bg-orange-500" borderColor="border-gray-100" logo="/images/logo/logo-warning.png" />
            </div>

        </>
    );
}
