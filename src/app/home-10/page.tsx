"use client";


import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

import PageTitle3 from "@/components/ui/PageTitle3";
import { Command, Database } from "react-feather";

import Button from "@/components/ui/Button";
import CounterSection from "@/components/ui/CounterSection";

import Image from "next/image";
import GradientFeatureCard from "@/components/ui/GradientCard";

import CtaSection from "@/components/layout/CtaSection";
import HeroTen from "@/components/layout/Heroten";
import PriceCard4 from "@/components/ui/PriceCard4";
import FeedbackCard from "@/components/ui/FeedbackCard";


export default function HomePage() {
    

    return (
        <>

            {/* Header */}
            <Header theme="header-dark" logo="/images/logo/logo-cyan.png" btnColor="bg-cyan-500" btnlinkColor="text-white" />
            {/* Hero */}
            <HeroTen />
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
                            layout="modern"
                            image="/images/feature-2.svg"
                            highlight="No meeting bots,"
                            title=" no interruptions — just real conversations"
                        />
                        <GradientFeatureCard
                            layout="modern"
                            image="/images/feature-2.svg"
                            highlight="No access requests,"
                            title=" no control taken away, your space stays yours"
                        />
                        <GradientFeatureCard
                            layout="modern"
                            image="/images/feature-2.svg"
                            highlight="Doesn't join meetings,"
                            title=" never joins your meetings, so there are no bots"
                        />

                    </div>
                </div>
            </section>
            {/* service wrap */}
            <section className="feature-wrap lg:py-24 py-12 bg-gray-800">
                <div className="max-w-screen-xl mx-auto px-3 sm:px-6 md:px-14 lg:px-14 xl:px-18 2xl:px-3 pb-0">
                    {/* grid */}
                    <div className="grid lg:grid-cols-2 grid-cols-1 xl:gap-20 gap-6 pb-5">
                        <div className="w-full">
                            <PageTitle3
                                badgeText="Powerful features"
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
                            <Button label="Check out more" href="/about" bgColor="bg-cyan-500" textColor='text-white' className="py-4" />
                        </div>
                        <div
                            className="flex rounded-2xl h-full bg-cover items-center justify-center p-8 relative"
                            style={{ backgroundImage: "url('/images/feature-2.svg')" }}
                            data-aos="zoom-in"
                            data-aos-delay="100"
                            data-aos-duration="400"
                        >
                            <div className="relative w-[410px] h-[290px]">
                                <Image
                                    src="/images/feature-2.svg"
                                    alt="banner"
                                    loading="lazy"
                                    fill
                                    sizes="(max-width: 768px) 80vw, (max-width: 1200px) 400px, 410px"
                                    className="object-contain rounded-[20px]"
                                />
                            </div>
                        </div>

                    </div>
                    {/* grid */}
                    <div className="grid lg:grid-cols-2 grid-cols-1 xl:gap-20 gap-6 lg:py-24 py-12">
                        <div
                            className="flex rounded-2xl h-full bg-cover items-center justify-center p-8 relative"
                            style={{ backgroundImage: "url('/images/feature-2.svg')" }}
                            data-aos="zoom-in"
                            data-aos-delay="100"
                            data-aos-duration="400"
                        >
                            <div className="relative w-[410px] h-[290px]">
                                <Image
                                    src="/images/feature-2.svg"
                                    alt="banner"
                                    loading="lazy"
                                    fill
                                    sizes="(max-width: 768px) 80vw, (max-width: 1200px) 400px, 410px"
                                    className="object-contain rounded-[20px]"
                                />
                            </div>
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
                                textColor="text-white"
                                subtitleColor="text-gray-100"
                            />
                            <div className="flex flex-wrap gap-3">
                                <p data-aos="zoom-in" data-aos-delay="0" className="py-2 pl-3 pr-4 bg-white/25 transition-all shadow-sm hover:shadow-md border border-gray-800 rounded-full text-[16px] text-white font-medium inline-flex items-center gap-2 aos-init aos-animate">
                                    <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                    Designed to evolve with business
                                </p>
                                <p data-aos="zoom-in" data-aos-delay="0" className="py-2 pl-3 pr-4 bg-white/25 transition-all shadow-sm hover:shadow-md border border-gray-800 rounded-full text-[16px] text-white font-medium inline-flex items-center gap-2 aos-init aos-animate">
                                    <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                    Grows seamlessly
                                </p>
                                <p data-aos="zoom-in" data-aos-delay="0" className="py-2 pl-3 pr-4 bg-white/25 transition-all shadow-sm hover:shadow-md border border-gray-800 rounded-full text-[16px] text-white font-medium inline-flex items-center gap-2 aos-init aos-animate">
                                    <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                    Solutions that flex to match
                                </p>
                                <p data-aos="zoom-in" data-aos-delay="0" className="py-2 pl-3 pr-4 bg-white/25 transition-all shadow-sm hover:shadow-md border border-gray-800 rounded-full text-[16px] text-white font-medium inline-flex items-center gap-2 aos-init aos-animate">
                                    <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                    Precisely to your requirements
                                </p>
                                <p data-aos="zoom-in" data-aos-delay="0" className="py-2 pl-3 pr-4 bg-white/25 transition-all shadow-sm hover:shadow-md border border-gray-800 rounded-full text-[16px] text-white font-medium inline-flex items-center gap-2 aos-init aos-animate">
                                    <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                    Future-proof infrastructure built
                                </p>
                            </div>
                        </div>

                    </div>
                    {/* price */}
                    <div className="flex flex-col items-center text-center xl:w-7/12 lg:w-2/3 mx-auto justify-center pb-16">
                        <PageTitle3
                            badgeText=""
                            title="Start small, dream big our plan grows right alongside you"
                            subtitle="Our ever-growing database of 30M+ companies and 190M+ people ensures you are never missing an opportunity."
                            widthClass="w-full"
                            alignment="center"
                            padding="pb-0"
                            textColor="text-white"
                            subtitleColor="text-gray-200"
                            subtitleClass="max-w-xl lg:px-4 px-0"
                        />
                        <div className="flex items-center gap-3 pt-8 justify-center aos-init aos-animate" data-aos="fade-up" data-aos-duration="400">
                            <span className="text-gray-100 font-medium text-[16px]">Bill monthly</span>
                            <label className="relative inline-block w-11 h-6 cursor-pointer">
                                <input type="checkbox" id="billing-toggle" className="sr-only peer" />
                                <div className="block bg-gray-300 w-11 h-6 rounded-full peer-checked:bg-green-500 transition-all duration-300"></div>
                                <div className="absolute top-0.5 left-0.5 bg-white w-5 h-5 rounded-full shadow-md transform transition-all duration-300 peer-checked:translate-x-5"></div>
                            </label>
                            <span className="text-gray-100 font-medium text-[16px]">Bill annually</span>
                        </div>
                    </div>
                    <div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-8 gap-6">
                        <div className="flex mt-6">
                            <PriceCard4
                                title="Startup"
                                subtitle="Best for startup business owners who need a boost."
                                price="$29"
                                period="month"
                                buttonText="Start trial for 14 days"
                                buttonLink="/pricing"
                                outerBg="bg-transparent"
                                bannerText=""
                                features={[
                                    "10 GB disk space availability",
                                    "50 GB NVMe SSD for use",
                                    "Free platform access for all",
                                    "Lifetime updates facility",
                                    "One year support",
                                ]}
                            />
                        </div>
                        <PriceCard4
                            title="Enterprise"
                            subtitle="Best for enterprise business owners who need a boost."
                            price="$49"
                            period="month"
                            buttonText="Start trial for 14 days"
                            buttonLink="/pricing"
                            features={[
                                "100 GB disk space availability",
                                "500 GB NVMe SSD for use",
                                "Free platform access for all",
                                "Lifetime updates facility",
                                "One year support",
                            ]}
                        />
                        <div className="flex mt-6">
                            <PriceCard4
                                title="Business"
                                subtitle="Best for business business owners who need a boost."
                                price="$99"
                                period="month"
                                buttonText="Start trial for 14 days"
                                buttonLink="/pricing"
                                bannerText=""
                                outerBg="bg-transparent"
                                features={[
                                    "10 GB disk space availability",
                                    "50 GB NVMe SSD for use",
                                    "Free platform access for all",
                                    "Lifetime updates facility",
                                    "One year support",
                                ]}
                            />
                        </div>
                    </div>
                </div>
            </section>
            {/* feedback */}
            {/* service wrap */}
            <section className="feedback-wrap lg:py-24 py-12 relative">
                <div className="max-w-screen-xl mx-auto px-3 sm:px-6 md:px-14 lg:px-14 xl:px-18 2xl:px-3 pb-0">
                    {/* title */}
                    <div className="flex flex-col items-center text-center xl:w-7/12 lg:w-2/3 mx-auto justify-center pb-16">
                        <PageTitle3
                            badgeText=""
                            title="Understand expectations, then delight customers completely"
                            subtitle=""
                            widthClass="w-full"
                            alignment="center"
                            padding="pb-0"
                            textColor="text-gray-900"
                            subtitleClass="max-w-xl lg:px-4 px-0"
                        />
                        <div className="flex justify-center items-center gap-3 pt-2">
                            <span className="inline-block text-base font-medium text-gray-900">Trusted by 58,000+ users</span>
                            <div className="flex flex-row gap-1 -mt-1 relative">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="text-orange-400" viewBox="0 0 16 16"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path></svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="text-orange-400" viewBox="0 0 16 16"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path></svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="text-orange-400" viewBox="0 0 16 16"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path></svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="text-orange-400" viewBox="0 0 16 16"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path></svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="text-gray-400" viewBox="0 0 16 16"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path></svg>
                            </div>
                            <span className="inline-block text-base font-medium text-gray-900">4.98/5</span>
                        </div>
                    </div>
                    <div className="grid lg:grid-cols-3 grid-cols-1 gap-6">
                        <div className="w-full space-y-6">
                            <FeedbackCard
                                layout="classic"
                                rating={3.9}
                                feedback="Everything works smoothly, but a dark mode option would be great. Really love the clean design — maybe add more customization options."
                                name="Goria Coast"
                                role="Founder and CEO of Exsit"
                                avatar="/images/avatars/user.png"
                                brandLight="/images/brand.svg"
                                brandDark="/images/brand-w.svg"
                            />
                            <FeedbackCard
                                layout="classic"
                                rating={3.9}
                                feedback="Fast and simple to use, though loading times could improve slightly. The interface feels intuitive and modern — great job overall!"
                                name="Goria Coast"
                                role="Founder and CEO of Exsit"
                                avatar="/images/avatars/user.png"
                                brandLight="/images/brand.svg"
                                brandDark="/images/brand-w.svg"
                            />
                        </div>
                        <div className="w-full space-y-6">
                            <FeedbackCard
                                layout="classic"
                                rating={4.9}
                                feedback="They delivered high-quality service, maintained consistent communication, and showed a real commit to our success every step."
                                name="Goria Coast"
                                role="Founder and CEO of Exsit"
                                avatar="/images/avatars/user.png"
                                brandLight="/images/brand.svg"
                                brandDark="/images/brand-w.svg"
                            />
                            <FeedbackCard
                                layout="classic"
                                rating={2.9}
                                feedback="Fast and simple to use, though loading times could improve slightly. The interface feels intuitive and modern — great job overall!"
                                name="Goria Coast"
                                role="Founder and CEO of Exsit"
                                avatar="/images/avatars/user.png"
                                brandLight="/images/brand.svg"
                                brandDark="/images/brand-w.svg"
                            />
                        </div>
                        <div className="w-full space-y-6">
                            <FeedbackCard
                                layout="classic"
                                rating={3.9}
                                feedback="One suggestion: it would be incredibly helpful if there was an offline mode for viewing saved articles, as my connectivity can be unreliable."
                                name="Goria Coast"
                                role="Founder and CEO of Exsit"
                                avatar="/images/avatars/user.png"
                                brandLight="/images/brand.svg"
                                brandDark="/images/brand-w.svg"
                            />
                            <FeedbackCard
                                layout="classic"
                                rating={3.9}
                                feedback="Fast and simple to use, though loading times could improve slightly. The interface feels intuitive and modern — great job overall!"
                                name="Goria Coast"
                                role="Founder and CEO of Exsit"
                                avatar="/images/avatars/user.png"
                                brandLight="/images/brand.svg"
                                brandDark="/images/brand-w.svg"
                            />
                        </div>
                    </div>
                </div>
                <div className="relative flex w-full">
                    <div
                        className="absolute bottom-0 flex h-56 w-full justify-center bg-[linear-gradient(to_bottom,rgba(232,245,255,0.1),rgba(232,245,255,0.7),#e8f5ff)] dark:bg-[linear-gradient(to_bottom,rgba(26,26,26,0.1),rgba(33,33,33,0.7),#161515)]"
                    >
                        <div className="mt-auto mb-4">
                            <Button label="Load more" href="/about" bgColor="bg-gray-900" textColor='text-white' className="py-4" />
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA wrap */}
            <div className="lg:mx-20">
                <div className="rounded-3xl overflow-hidden">
                    <CtaSection iconBG={false} firstButtonBg="bg-cyan-500" sectionBg="bg-home-ten-cta" titleColor="text-white" subtitleColor="text-gray-100" />
                </div>
            </div>
            {/* footer */}
            <Footer layout="light" bgColor="bg-transparent" foreColor="bg-cyan-500" borderColor="border-gray-200" logo="/images/logo/logo-cyan.png" />

        </>
    );
}
