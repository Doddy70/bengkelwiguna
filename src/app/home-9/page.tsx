"use client";


import Header from '@/components/layout/Header';
import FooterModern from '@/components/heroui/footer-modern';

import PageTitle3 from "@/components/ui/PageTitle3";
import { Command,  Database } from "react-feather";

import Button from "@/components/ui/Button";
import CounterSection from "@/components/ui/CounterSection";

import Brands from "@/components/ui/Brands";
import Image from "next/image";
import GradientFeatureCard from "@/components/ui/GradientCard";
import IconBox from "@/components/ui/IconBox";
import PriceCard from "@/components/ui/PriceCard";
import HeroNine from "@/components/layout/Heronine";
import CtaSection from "@/components/layout/CtaSection";

export default function HomePage() {
    

    return (
        <>
            {/* Header */}
            <Header theme="header-dark" position="relative"  btnColor="bg-blue-800" btnlinkColor="text-white" />
            {/* Hero */}
            <HeroNine />
            {/* service wrap */}
            <section className="service-wrap lg:py-24 py-12">
                <div className="max-w-screen-xl mx-auto px-3 sm:px-6 md:px-14 lg:px-14 xl:px-18 2xl:px-3 pb-0 lg:py-4 py-0">
                    <PageTitle3
                        badgeText=""
                        title="Trusted by 150,000+ content creators agencies"
                        subtitle="Quizzes are working for them — and they can for you too."
                        widthClass="w-full xl:w-2/3 lg:w-2/3 mx-auto"
                        alignment="center"
                        padding="pb-16"
                    />
                    <div className="flex flex-wrap justify-center gap-4 lg:gap-6">
                        <Brands />
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
                            aosDuration={400}
                        />
                        <GradientFeatureCard
                            image="/images/feature-2.svg"
                            title="Strong, scalable, secure"
                            description="Deliver advanced monitoring for proactive performance management."
                            aosDelay={0}
                            aosDuration={400}
                            colorTheme="darkblue"
                        />
                        <GradientFeatureCard
                            image="/images/feature-2.svg"
                            title="Build dynamic systems"
                            description="Craft comprehensive insights for forward-looking operations."
                            aosDelay={0}
                            aosDuration={400}
                        />
                    </div>
                </div>
            </section>
            {/* service wrap */}
            <section className="feature-wrap">
                <div className="max-w-screen-xl mx-auto px-3 sm:px-6 md:px-14 lg:px-14 xl:px-18 2xl:px-3 pb-0">
                    {/* grid */}
                    <div className="grid lg:grid-cols-2 grid-cols-1 xl:gap-20 gap-6 lg:pb-24 pb-12">
                        <div className="w-full">
                            <PageTitle3
                                badgeText="Powerful features"
                                icon={<Database size={18} />}
                                title="We deliver exquisite catering for intimate gatherings."
                                subtitle="Whether you're building a startup landing page, a dashboard interface, or a modern web app, Exsit gives you full control over the look and feel of your site because great brands are not built by accident."
                                widthClass="w-full"
                                alignment="start"
                                padding="pb-8"
                            />
                            <p className="text-gray-800 font-normal text-[17px] mt-1 mb-2 lg:pr-10 flex gap-3 items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-check-circle-fill text-blue-800" viewBox="0 0 16 16"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path></svg>
                                Do you have a discount for students, academics
                            </p>
                            <p className="text-gray-800 font-normal text-[17px] mt-1 mb-2 lg:pr-10 flex gap-3 items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-check-circle-fill text-blue-800" viewBox="0 0 16 16"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path></svg>
                                What happens if we cancel our subscription?
                            </p>
                            <p className="text-gray-800 font-normal text-[17px] mt-1 mb-8 lg:pr-10 flex gap-3 items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-check-circle-fill text-blue-800" viewBox="0 0 16 16"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path></svg>
                                Can I have a proposal I can with my team?
                            </p>
                            <Button label="Check out more" href="/about" bgColor="bg-blue-800" textColor='text-white' className="py-4" />
                        </div>
                        <div className="overflow-hidden rounded-xl w-full group flex">
                            <Image
                                src="/images/feature-2.svg"
                                alt="feature"
                                width={554}
                                height={384}
                                className="object-cover w-full transition-transform duration-1000 group-hover:scale-105"
                                loading="lazy"
                            />
                        </div>
                    </div>
                    {/* intragation */}
                    <div className="flex flex-col bg-gradient-blue-light bg-blend-screen backdrop-blur-20 dark:bg-gray-800 rounded-xl xl:px-20 lg:py-24 py-14 px-8 mb-8 bg-image-none">
                        <div className="rounded-3xl text-center flex flex-col items-center">
                            <div className="flex flex-col items-center gap-4 pb-16">
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
                                        <Button href="/about" label="Explore integrations" bgColor="bg-blue-800" textColor="text-white" className="py-4" />
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
                        </div>
                    </div>
                    {/* counter */}
                    <div className="flex flex-col bg-gradient-to-r from-[#1364D9] to-[#05357C] rounded-xl xl:px-20 lg:py-16 p-8">
                        {/* title */}
                        <div className="flex justify-center lg:pb-14 pb-8">
                            <h2 className="text-white text-2xl font-normal text-center">Discover what we did for them</h2>
                        </div>
                        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 justify-center gap-6">
                            <CounterSection textcolor="text-white" subtextcolor="text-white/85" target={4.5} suffix="k" duration={1000} subtitle="Higher Conversion Rates" />
                            <CounterSection textcolor="text-white" subtextcolor="text-white/85" target={6.5} suffix="x" duration={1000} subtitle="Backed by those who believe." />
                            <CounterSection textcolor="text-white" subtextcolor="text-white/85" target={98.2} suffix="%" duration={1000} subtitle="People who trust what we." />
                        </div>
                    </div>
                    {/* grid */}
                    <div className="grid lg:grid-cols-2 grid-cols-1 xl:gap-20 gap-6 lg:py-24 py-12">
                        <div className="overflow-hidden rounded-xl w-full group flex">
                            <Image
                                src="/images/feature-2.svg"
                                alt="feature"
                                width={554}
                                height={384}
                                className="object-cover w-full transition-transform duration-1000 group-hover:scale-105"
                                loading="lazy"
                            />
                        </div>
                        <div className="w-full">
                            <PageTitle3
                                badgeText="Powerful features"
                                icon={<Command size={18} />}
                                title="We saw a 50x boost in engagement within a week, thanks to the Get higher strategy."
                                subtitle="Whether you're building a startup landing page, a dashboard interface, or a modern web app, Exsit gives you full control over the look and feel of your site because great brands are not built by accident."
                                widthClass="w-full"
                                alignment="start"
                                padding="pb-8"
                            />
                            <p className="text-gray-800 font-normal text-[17px] mt-1 mb-2 lg:pr-10 flex gap-3 items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-check-circle-fill text-blue-800" viewBox="0 0 16 16"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path></svg>
                                Do you have a discount for students, academics
                            </p>
                            <p className="text-gray-800 font-normal text-[17px] mt-1 mb-2 lg:pr-10 flex gap-3 items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-check-circle-fill text-blue-800" viewBox="0 0 16 16"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path></svg>
                                What happens if we cancel our subscription?
                            </p>
                            <p className="text-gray-800 font-normal text-[17px] mt-1 mb-8 lg:pr-10 flex gap-3 items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-check-circle-fill text-blue-800" viewBox="0 0 16 16"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path></svg>
                                Can I have a proposal I can with my team?
                            </p>
                            <Button label="Check out more" href="/about" bgColor="bg-blue-800" textColor='text-white' className="py-4" />
                        </div>

                    </div>
                </div>
            </section>
            {/* price wrap */}
            <section className="feature-wrap lg:pb-24 pb-12">
                <div className="max-w-screen-xl mx-auto px-3 sm:px-6 md:px-14 lg:px-14 xl:px-18 2xl:px-20 pb-0 py-0">
                    <div className="flex flex-col items-center text-center xl:w-7/12 lg:w-2/3 mx-auto justify-center pb-16">
                        <PageTitle3
                            badgeText=""
                            title="Scale with business as your data needs evolve"
                            subtitle="Our ever-growing database of 30M+ companies and 190M+ people ensures you’re never missing an opportunity."
                            widthClass="w-full"
                            alignment="center"
                            padding="pb-0"
                            textColor="text-blue-800  dark:text-white"
                            subtitleClass="max-w-xl lg:px-4 px-0"
                        />
                        <div className="flex items-center gap-3 pt-8 justify-center aos-init aos-animate" data-aos="fade-up" data-aos-duration="400">
                            <span className="text-gray-900 font-medium text-[16px]">Bill monthly</span>
                            <label className="relative inline-block w-11 h-6 cursor-pointer">
                                <input type="checkbox" id="billing-toggle" className="sr-only peer" />
                                    <div className="block bg-gray-300 w-11 h-6 rounded-full peer-checked:bg-green-500 transition-all duration-300"></div>
                                    <div className="absolute top-0.5 left-0.5 bg-white w-5 h-5 rounded-full shadow-md transform transition-all duration-300 peer-checked:translate-x-5"></div>
                            </label>
                            <span className="text-gray-900 font-medium text-[16px]">Bill annually</span>
                        </div>
                    </div>
                    <div className="grid lg:grid-cols-3 gap-6 md:grid-cols-2 sm:grid-cols-1 lg:pb-20 pb-14">
                        {/* price 1st */}
                        <PriceCard
                            title="Startup"
                            description="Best for startup business owners who needs for business."
                            price="$29"
                            priceSuffix="/month"
                            borderColor="border-gray-200"
                            buttonText="Start trial for 14 days"
                            buttonLink="/pricing"
                            borderWidth={1}
                            colorTheme="lightblue"
                            features={[
                                { text: "10 GB disk space availability" },
                                { text: "10 GB NVMe SSD for use" },
                                { text: "Free platform access for all" },
                                { text: "Lifetime updates facility" },
                                { text: "One year support" },
                            ]}
                        />

                        {/* price 2nd */}
                        <PriceCard
                            title="Professional"
                            description="Perfect for new professionals needing essential tools for growth."
                            price="$49"
                            priceSuffix="/month"
                            buttonText="Start trial for 14 days"
                            buttonLink="/pricing"
                            colorTheme="darkblue"                        
                            borderWidth={0}
                            aosDelay="300"
                            features={[
                                { text: "15 GB disk space availability" },
                                { text: "75 GB NVMe SSD for use" },
                                { text: "Free platform access for all" },
                                { text: "Lifetime updates facility" },
                                { text: "One year support" },
                            ]}
                        />

                        {/* price 3rd */}
                        <PriceCard
                            title="Enterprise"
                            description="Perfect for new businesses needing essential tools for growth."
                            price="$99"
                            priceSuffix="/month"
                            borderColor="border-gray-200"
                            buttonText="Start trial for 14 days"
                            buttonLink="/pricing"
                            colorTheme="lightblue"
                            discountText=""
                            aosDelay="500"
                            features={[
                                { text: "100 GB disk space availability" },
                                { text: "100 GB NVMe SSD for use" },
                                { text: "Free platform access for all" },
                                { text: "Lifetime updates facility" },
                                { text: "One year support" },
                            ]}
                        />
                    </div>
                </div>
            </section>
            {/* footer */}
            <section className="footer-cyber-security relative">
                <CtaSection firstButtonBg="bg-blue-800" sectionBg="" />
                <FooterModern />
            </section>
        </>
    );
}
