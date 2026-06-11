"use client";

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

import CtaSection from "@/components/layout/CtaSection";
import PageTitle3 from '@/components/ui/PageTitle3';
import { blogPosts } from "@/const/blogData";
import BlogCardThree from "@/components/ui/BlogCardThree";
import Brands from '@/components/ui/Brands';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import FeatureCard from '@/components/ui/FeatureCard3';
import FeatureIcon from '@/components/ui/FeatureIcon';
import { Box, Boxes, Package2, Star } from 'lucide-react';
import TestimonialCarousel from '@/components/ui/TestimonialCarousel';
import testimonials from "@/data/testimonials.json";
import Heroseven from '@/components/layout/Heroseven';
import BadgeLink from '@/components/ui/BadgeLink';

export default function HomePage() {
    const bottomPosts = blogPosts.filter((post) => !post.featured).slice(0, 3);
    return (
        <>  {/* Header */}
            <Header theme='header-light' logo="/images/logo/logo-yellow.png" btnColor="bg-yellow-400" />
            {/* Hero */}
            <Heroseven />
            {/* feature wrap */}
            <section className="feature-wrap lg:py-24 py-12">
                <div className="max-w-screen-xl mx-auto px-3 sm:px-6 md:px-14 lg:px-14 xl:px-18 2xl:px-14 pb-0">
                    <div className="flex justify-center lg:pb-16 pb-10">
                        <h2 className="text-gray-400 text-xl font-medium text-center">Trusted by 500+ teams to empower 2,00,000+ people</h2>
                    </div>
                    <div className="flex flex-wrap justify-center lg:gap-6 lg:pb-24 pb-10 lg:px-12">
                        <Brands />
                    </div>

                    <PageTitle3
                        badgeText=""
                        title="Discover what customers expect and go beyond to amaze them"
                        subtitle="Our ever-growing database of 30M+ companies and 190M+ people ensures you are never missing an opportunity."
                        widthClass="xl:w-8/12 lg:w-2/3 mx-auto"
                        alignment="center"
                        padding="pb-16"
                        subtitleClass='xl:px-14'
                    />
                    <div className="flex lg:flex-nowrap flex-wrap lg:space-x-6 space-x-0 space-y-6 lg:space-y-0 pb-6">
                        <div className="lg:w-5/12">
                            <div className="rounded-xl p-3 bg-white border border-gray-200" data-aos="zoom-in" data-aos-duration="400">
                                <div className="p-6 bg-[#f7efe6] dark:bg-gray-800 min-h-[350px] rounded-xl flex flex-col">
                                    <h3 className="text-gray-900 font-semibold text-3xl leading-tight mb-1 pe-lg-5"> Unlock Precision and Hyper-Specific Searches </h3>
                                    <p className="text-gray-800 text-[17px] leading-normal font-normal pt-1 pe-lg-5"> Our ever-growing database of you are never missing an opportunity. </p>

                                    <div className="mt-auto flex flex-row gap-3">
                                        <div className="w-[68px] h-[68px] rounded-xl bg-[linear-gradient(to_bottom,#b8fb04,#91ffae)] flex items-center justify-center text-center">
                                            <Boxes size={38} className='text-dark-black' strokeWidth={1.5} />
                                        </div>
                                        <div className="w-[68px] h-[68px] rounded-xl bg-[linear-gradient(to_bottom,#ffed63,#ffcc91)] flex items-center justify-center text-center">
                                            <Box size={38} className='text-dark-black' strokeWidth={1.5} />
                                        </div>
                                        <div className="w-[68px] h-[68px] rounded-xl bg-[linear-gradient(to_bottom,#98fcff,#d7e0ff)] flex items-center justify-center text-center">
                                            <Package2 size={38} className='text-dark-black' strokeWidth={1.5} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-7/12">
                            <div className="rounded-xl p-3 bg-white border border-gray-200" data-aos="zoom-in" data-aos-duration="400">
                                <div className="p-6 bg-[#f7efe6] dark:bg-gray-800 min-h-[350px] rounded-xl flex flex-col">
                                    <h3 className="text-gray-900 font-semibold text-3xl leading-tight mb-1 pe-lg-5"> Master Your Search: Build, Optimize, and Store Ultra-Targeted Queries</h3>
                                    <p className="text-gray-800 text-[17px] leading-normal font-normal pt-1 pe-lg-5"> The source of truth for startups, supercharged with intelligence from across the web and your CRM. </p>
                                    <div className="mt-auto flex flex-row flex-wrap gap-2">
                                        <BadgeLink label="Affordable plans " variant="color"  bgColor='bg-cyan-500'/>
                                        <BadgeLink label="Customer Relationships" variant="color"  bgColor='bg-gray-400' textColor="text-gray-100" />
                                        <BadgeLink label="Plans that fit every stage " variant="color"  bgColor='bg-green-500'/>
                                        <BadgeLink label="Built to scale with your needs " variant="color"  bgColor='bg-orange-500'/>
                                        <BadgeLink label="Control and Customization " variant="color"  bgColor='bg-lime-400'/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex lg:flex-nowrap flex-wrap lg:space-x-6 space-x-0 space-y-6 lg:space-y-0 lg:pb-24 pb-12">
                        {/* left side */}
                        <div className="lg:w-7/12">
                            <div className="rounded-xl p-3 bg-white border border-gray-200" data-aos="zoom-in" data-aos-duration="400">
                                <div className="p-6 bg-[#f7efe6] dark:bg-gray-800 min-h-[350px] rounded-xl flex flex-col">
                                    <h3 className="text-gray-900 font-semibold text-3xl leading-tight mb-1 pe-lg-5"> Master Your Search: Build, Optimize, and Store Ultra-Targeted Queries</h3>
                                    <p className="text-gray-800 text-[17px] leading-normal font-normal pt-1 pe-lg-5"> The source of truth for startups, supercharged with intelligence from across the web and your CRM. </p>
                                    <div className="mt-3 flex flex-row justify-between">
                                        <Image
                                            src="/images/feature-3.svg"
                                            alt="feature"
                                            width={605}
                                            height={157}
                                            className="mt-2 w-full object-cover"
                                            sizes="(max-width: 768px) 100vw, 605px"
                                            priority={false}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* right side */}
                        <div className="lg:w-5/12">
                            <div className="rounded-xl p-3 bg-white border border-gray-200" data-aos="zoom-in" data-aos-duration="400">
                                <div className="p-6 bg-[#f7efe6] dark:bg-gray-800 min-h-[350px] rounded-xl flex flex-col">
                                    <h3 className="text-gray-900 font-semibold text-3xl leading-tight mb-1 pe-lg-5"> Stronger customer Relationships support</h3>
                                    <p className="text-gray-800 text-[17px] leading-normal font-normal pt-1 pe-lg-5"> Customers interact with a team that understands their history, preferences, and ongoing issues. </p>
                                    <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-3 gap-4 hidden lg:flex flex-row items-center mt-auto" data-aos="fade-up" data-aos-duration="400" data-delay="400">
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
                            </div>
                        </div>
                    </div>
                    {/* grid */}
                    <div className="grid lg:grid-cols-2 grid-cols-1 xl:gap-20 gap-6 lg:pb-6 pb-0">
                        {/* left side */}
                        <div className="w-full">
                            <PageTitle3
                                badgeText=""
                                title="We deliver exquisite catering for intimate gatherings."
                                subtitle="Whether you're building a startup landing page, a dashboard interface, or a modern web app, Exsit gives you full control over the look and feel of your site because great brands are not built by accident."
                                widthClass="w-full"
                                alignment="start"
                                padding="pb-8"
                                subtitleClass='lg:pr-10'
                            />
                            <div className="lg:pb-10 mb-4">
                                <Button label="Check out more" href="/about" bgColor="bg-yellow-400" textColor='text-gray-900' />
                            </div>
                            <FeatureIcon
                                variant="horizontal"
                                value="6.7"
                                suffix="x"
                                title="In-house &amp; <br> independent"
                                link="/about"
                            />
                            <FeatureIcon
                                variant="horizontal"
                                value="22.4"
                                suffix="h"
                                title="Crafting digital <br> experiences"
                                link="/about"
                            />
                            <FeatureIcon
                                variant="horizontal"
                                value="8.9"
                                suffix="*"
                                title="Awards from <br>Digital Media"
                                link="/about"
                            />

                        </div>
                        {/* right side */}
                        <div>
                            <div className="overflow-hidden rounded-xl w-full h-auto group">
                                <Image
                                    src="/images/feature-2.svg"
                                    alt="feature"
                                    width={800} // ✅ set a safe width
                                    height={600} // ✅ set a safe height
                                    className="object-cover w-full h-auto transition-transform duration-[2000ms] group-hover:scale-105"
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* service wrap */}
            <section className="service-wrap lg:py-24 py-12 bg-orange-900">
                <div className="max-w-screen-xl mx-auto px-3 sm:px-6 md:px-14 lg:px-14 xl:px-18 2xl:px-4 pb-0">
                    <div className="flex flex-wrap justify-between pb-16 gap-y-4">
                        <PageTitle3
                            badgeText=""
                            title="Understand expectations, then delight customers completely"
                            subtitle="Genuine feedback from those who know us best."
                            widthClass="w-full xl:w-7/12 lg:w-7/12"
                            alignment="start"
                            padding="pb-0"
                            textColor='text-white'
                            subtitleClass='text-white/80'
                        />
                        <div className="lg:text-right mt-auto">
                            <Button href="/about" label="Explore more" bgColor="bg-yellow-400" textColor="text-gray-900" />
                        </div>
                    </div>
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-6 gap-6">
                        <div className="w-full" data-aos="zoom-in" data-aos-duration="400" data-delay="400">
                            <FeatureCard
                                variant="overlay"
                                image="/images/feature-2.svg"
                                title="Experience stronger relationships and ultimate growth"
                                link="/about-2"
                            />
                        </div>
                        <div className="w-full" data-aos="zoom-in" data-aos-duration="400" data-delay="400">
                            <FeatureCard
                                variant="overlay"
                                image="/images/feature-2.svg"
                                title="Experience stronger relationships and ultimate growth"
                                link="/about-2"
                            />
                        </div>
                        <div className="w-full" data-aos="zoom-in" data-aos-duration="400" data-delay="400">
                            <FeatureCard
                                variant="overlay"
                                image="/images/feature-2.svg"
                                title="Experience stronger relationships and ultimate growth"
                                link="/about-2"
                            />
                        </div>
                    </div>
                </div>
            </section>
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
                    <PageTitle3
                        badgeText=""
                        title="Recent blog & articles about technology"
                        subtitle="New blog articles, insights, and updates here."
                        widthClass="xl:w-5/12 lg:w-2/3 mx-auto"
                        alignment="center"
                        padding="pb-16"
                    />
                    <div className="grid lg:grid-cols-3 gap-4 md:grid-cols-2 sm:grid-cols-1">
                        {bottomPosts.map((post) => <BlogCardThree key={post.id} post={post} />)}
                    </div>
                </div>
            </section>
            <CtaSection
                overlayBg="bg-black/25"
                sectionBg="bg-home-seven-cta"
                firstButtonBg="bg-yellow-400"
                firstButtonText="text-gray-900"
                secondButtonBg="bg-gray-100"
                secondButtonText="text-gray-900"
                titleColor="text-white"
                subtitleColor='text-gray-100'
                iconBG={false}

            />

            {/* footer */}
            <Footer bgColor="bg-orange-900" foreColor="bg-yellow-400" foretextColor="text-gray-900" borderColor="border-orange-900" iconbgColor="bg-yellow-400" logo="/images/logo/logo-yellow-white.png" />
        </>
    );
}
