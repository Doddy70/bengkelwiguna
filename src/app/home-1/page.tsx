"use client";
import { blogPosts } from "@/const/blogData";

import Header from '@/components/layout/Header';
import FooterModern from '@/components/heroui/footer-modern';
import CtaSection from '@/components/layout/CtaSection';
import PageTitle3 from '@/components/ui/PageTitle3';
import Button from '@/components/ui/Button';
import BlogCardThree from "@/components/ui/BlogCardThree";
import PriceCard from "@/components/ui/PriceCard";


import TeamMember from "@/components/ui/TeamMember";
import BadgeLink from "@/components/ui/BadgeLink";
import Image from "next/image";
import CounterCarousel from "@/components/ui/MainSlider";
import TestimonialCarousel from "@/components/ui/TestimonialCarousel";
import testimonials from "@/data/testimonials.json";
import maincarsoul from "@/data/maincarsoul.json";
import HeroOne from "@/components/layout/Heroone";
import { Linkedin, Twitch } from "lucide-react";
import { Twitter } from "react-feather";
import CounterSection from "@/components/ui/CounterSection";
import VideoBlock from "@/components/ui/VideoBlock";



export default function HomePage() {
    const bottomPosts = blogPosts.filter((post) => !post.featured).slice(0, 3);

    return (
        <>
            {/* Header */}
            <Header />
            {/* Hero */}
            <HeroOne />
            {/* service wrap */}
            <section className="service-wrap lg:py-24 py-12">
                <div className="max-w-screen-xl mx-auto px-3 sm:px-6 md:px-14 lg:px-14 xl:px-18 2xl:px-3 pb-0 lg:py-4 py-0">
                    <div className="flex flex-wrap justify-between pb-16 gap-y-4">
                        <PageTitle3
                            badgeText=""
                            title="Expectations customers feeling truly delighted"
                            subtitle="Genuine feedback from those who know us best."
                            widthClass="w-full xl:w-6/12 lg:w-7/12"
                            alignment="start"
                            padding="pb-0"
                        />
                        <div className="lg:text-right mt-auto">
                            <Button href="/about" label="Our service" bgColor="bg-blue-600" textColor="text-white" />
                        </div>
                    </div>
                    <div className="grid lg:grid-cols-3 grid-cols-1 gap-6 mb-6">
                        <div className="w-full lg:col-span-2 overflow-hidden relative rounded-xl" data-aos-duration="400" data-aos="fade-up">
                            {/* slider */}
                            <CounterCarousel slides={maincarsoul} />
                        </div>
                        <div className="w-full" data-aos-duration="400" data-aos="fade-up">
                            <div className="overflow-hidden relative rounded-xl h-[350px]">
                                <Image
                                    src="/images/home-bg-3.svg"
                                    alt="about"
                                    width={416}
                                    height={350}
                                    loading="lazy"
                                    className="mx-auto hover:scale-[1.1] transition-all duration-[1s]"
                                />

                                {/* Content Overlay */}
                                <div className="absolute inset-0 z-10 pointer-events-none bg-[linear-gradient(180deg,rgba(0,0,0,0.1)_0%,rgba(0,0,0,0.5)_100%)]"></div>

                                <div className="absolute bottom-0 left-0 w-full p-5 z-10">
                                    <div className="flex flex-row justify-between px-2">
                                        <div>
                                            <h3 className="text-white text-6xl font-medium mb-1">98.2%</h3>
                                            <p className="text-gray-200 font-medium text-lg leading-6 mb-0 xl:pr-12">The Truest feedback comes from those who know you best.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-3 grid-cols-1 gap-6 mb-6">
                        <div className="w-full" data-aos-duration="400" data-aos="fade-up">
                            <div className="bg-cyan-gradient dark:bg-gray-800 dark:bg-image-none rounded-xl p-5 flex flex-col h-[350px]">
                                {/* Avatar group */}
                                <div className="flex -space-x-3 flex-row">
                                    <div className="w-11 h-11 rounded-full overflow-hidden">
                                        <Image
                                            src="/images/avatars/user.png"
                                            alt="about"
                                            width={50}
                                            height={50}
                                            loading="lazy"
                                        />
                                    </div>
                                    <div className="w-11 h-11 rounded-full overflow-hidden">
                                        <Image
                                            src="/images/avatars/user.png"
                                            alt="about"
                                            width={50}
                                            height={50}
                                            loading="lazy"
                                        />
                                    </div>
                                    <div className="w-11 h-11 rounded-full overflow-hidden">
                                        <Image
                                            src="/images/avatars/user.png"
                                            alt="about"
                                            width={50}
                                            height={50}
                                            loading="lazy"
                                        />
                                    </div>
                                </div>

                                {/* Text block */}
                                <div className="mt-auto">
                                    <h3 className="text-gray-900  font-medium mb-1 text-[75px] leading-none">30x</h3>
                                    <p className="text-gray-900 text-2xl font-normal italic lg:pr-12 mb-0 pe-2">Genuine feedback those who know us best.</p>
                                </div>
                            </div>
                        </div>
                        <div className="w-full lg:col-span-2" data-aos="fade-up" data-aos-duration="400" data-aos-delay="0">
                            <div className="feedback-div h-full min-h-[350px] flex bg-gray-200 rounded-lg p-6 relative">
                                <div className="flex-1">
                                    <TestimonialCarousel testimonials={testimonials} />
                                </div>
                                <div className="w-[160px] flex-none justify-end hidden xl:flex">
                                    <div className="mt-auto text-right p-3 pb-0">
                                        <span className="lg:text-7xl text-5xl font-medium text-gray-900">4.5</span>
                                        <div className="flex flex-row justify-end gap-1 mt-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-star-fill text-orange-500" viewBox="0 0 16 16">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-star-fill text-orange-500" viewBox="0 0 16 16">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-star-fill text-orange-500" viewBox="0 0 16 16">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-star-fill text-orange-500" viewBox="0 0 16 16">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-star-fill text-gray-500" viewBox="0 0 16 16">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                            </svg>
                                        </div>
                                        <p className="text-gray-900 font-medium mt-1 mb-0">(2.3k + Reviews )</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* feature wrap */}
            <section className="feature-wrap lg:py-24 py-12 bg-home-one-feature dark:bg-gray-800 dark:bg-none">
                <div className="max-w-screen-xl mx-auto px-3 sm:px-6 md:px-14 lg:px-14 xl:px-18 2xl:px-3 pb-0 lg:py-4 py-0">
                    <div className="grid gap-4 gap-y-10 lg:grid-cols-2 sm:grid-cols-1">
                        {/* left side */}
                        <div className="w-full text-center aos-init aos-animate" data-aos="fade-up" data-aos-duration="400">
                            <div className="overflow-hidden rounded-xl image-zoom-onhover" data-aos="fade-up" data-aos-duration="400" data-aos-delay="200">
                                <Image
                                    src="/images/feature-1.svg"
                                    alt="feature"
                                    width={636}
                                    height={636}
                                    loading="lazy"
                                    className="mx-auto hover:scale-[1.1] transition-all duration-[1s]"
                                />
                            </div>
                            <Image
                                src="/images/text-icon-2.png"
                                alt="text"
                                width={238}
                                height={70}
                                loading="lazy"
                                className="mt-4 mx-auto"
                                data-aos="zoom-in"
                                data-aos-duration="400"
                                data-aos-delay="300"
                            />
                        </div>
                        {/* right side */}
                        <div className="w-full lg:pl-16 pr-0">
                            <PageTitle3
                                badgeText=""
                                title="Get higher strategy boosted our engagement by 50x in a week."
                                subtitle="The focus isn't on features, but on the benefit to the user: gives you full control over the look and feel of your site. This is a strong selling point for anyone concerned with branding or user experience."
                                widthClass="w-full"
                                alignment="start"
                                padding="pb-0"
                            />
                            <div className="grid grid-cols-12 items-start gap-4 mt-10 aos-init aos-animate" data-aos="fade-up" data-aos-duration="400" data-aos-delay="200">
                                <div className="col-span-4 lg:col-span-4 xl:col-span-3">
                                    <CounterSection target={4.5} layout="simple" suffix="m" textcolor="text-gray-900" duration={1000} />
                                </div>
                                <div className="col-span-8 lg:col-span-8 xl:col-span-6">
                                    <p className="text-gray-700 mb-3 text-lg font-medium">Individuals who believe — in our shared vision for success.</p>
                                    <Button href="/about" label="Ream more" bgColor="transparent" padding="px-0 py-0" textColor="text-gray-900" />
                                </div>
                            </div>
                            <div className="grid grid-cols-12 items-start gap-4 mt-10 aos-init aos-animate" data-aos="fade-up" data-aos-duration="400" data-aos-delay="200">
                                <div className="col-span-4 lg:col-span-4 xl:col-span-3">
                                    <CounterSection target={2.8} layout="simple" suffix="x" textcolor="text-gray-900" duration={1000} />
                                </div>
                                <div className="col-span-8 lg:col-span-8 xl:col-span-6">
                                    <p className="text-gray-700 mb-3 text-lg font-medium">Customers who rely — on our honest recommendations.</p>
                                    <Button href="/about" label="Ream more" bgColor="transparent" padding="px-0 py-0" textColor="text-gray-900" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* team wrap */}
            <section className="lg:py-24 py-12 relative overflow-hidden">
                <div className="max-w-screen-xl mx-auto px-3 sm:px-6 md:px-14 lg:px-14 xl:px-18 2xl:px-3 pb-0 lg:py-4 py-0">

                    <PageTitle3
                        badgeText=""
                        title="Discover what customers expect and go beyond to amaze them"
                        subtitle="More balanced you — and works tirelessly to help you get there."
                        widthClass="w-full xl:w-2/3 lg:w-2/3 mx-auto"
                        alignment="center"
                        padding="pb-16"
                    />

                    <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-6">
                        <TeamMember
                            name="Sophia Carter"
                            role="Founder and CEO of Exsit"
                            image="/images/member.svg"
                            socials={[
                                {
                                    href: "https://linkedin.com",
                                    label: "LinkedIn",
                                    colorClass: "text-cyan-500",
                                    icon: <Linkedin fill="cyan" strokeWidth={0} size={22} />,
                                },
                                {
                                    href: "https://twitch.com",
                                    label: "Twitch",
                                    colorClass: "text-red-500",
                                    icon: <Twitch size={22} />,
                                },
                                {
                                    href: "https://twitter.com",
                                    label: "Twitter",
                                    colorClass: "text-gray-900",
                                    icon: <Twitter fill="dark" strokeWidth={0} size={22} />,
                                },
                            ]}
                        />
                        <TeamMember
                            name="Medico Deo"
                            role="Founder and CEO of Exsit"
                            image="/images/member.svg"
                            socials={[
                                {
                                    href: "https://linkedin.com",
                                    label: "LinkedIn",
                                    colorClass: "text-cyan-500",
                                    icon: <Linkedin fill="cyan" strokeWidth={0} size={22} />,
                                },
                                {
                                    href: "https://twitch.com",
                                    label: "Twitch",
                                    colorClass: "text-red-500",
                                    icon: <Twitch size={22} />,
                                },
                                {
                                    href: "https://twitter.com",
                                    label: "Twitter",
                                    colorClass: "text-gray-900",
                                    icon: <Twitter fill="dark" strokeWidth={0} size={22} />,
                                },
                            ]}
                        />
                        <TeamMember
                            name="Goria Coast"
                            role="Founder and CEO of Exsit"
                            image="/images/member.svg"
                            socials={[
                                {
                                    href: "https://linkedin.com",
                                    label: "LinkedIn",
                                    colorClass: "text-cyan-500",
                                    icon: <Linkedin fill="cyan" strokeWidth={0} size={22} />,
                                },
                                {
                                    href: "https://twitch.com",
                                    label: "Twitch",
                                    colorClass: "text-red-500",
                                    icon: <Twitch size={22} />,
                                },
                                {
                                    href: "https://twitter.com",
                                    label: "Twitter",
                                    colorClass: "text-gray-900",
                                    icon: <Twitter fill="dark" strokeWidth={0} size={22} />,
                                },
                            ]}
                        />
                        <TeamMember
                            name="Emily Grace"
                            role="Founder and CEO of Exsit"
                            image="/images/member.svg"
                            socials={[
                                {
                                    href: "https://linkedin.com",
                                    label: "LinkedIn",
                                    colorClass: "text-cyan-500",
                                    icon: <Linkedin fill="cyan" strokeWidth={0} size={22} />,
                                },
                                {
                                    href: "https://twitch.com",
                                    label: "Twitch",
                                    colorClass: "text-red-500",
                                    icon: <Twitch size={22} />,
                                },
                                {
                                    href: "https://twitter.com",
                                    label: "Twitter",
                                    colorClass: "text-gray-900",
                                    icon: <Twitter fill="dark" strokeWidth={0} size={22} />,
                                },
                            ]}
                        />
                    </div>
                </div>
            </section>
            {/* feature wrap */}
            <section className="feature-wrap lg:py-24 py-12 bg-[#fcfff5] dark:bg-gray-800 border-y-2 border-gray-200">
                <div className="max-w-screen-xl mx-auto px-3 sm:px-6 md:px-14 lg:px-14 xl:px-18 2xl:px-3 pb-0 lg:py-4 py-0">
                    <div className="grid gap-4 gap-y-10 lg:grid-cols-2 sm:grid-cols-1">
                        {/* left side */}
                        <div className="lg:pr-12 pr-0">
                            <PageTitle3
                                badgeText=""
                                title="Understand expectations, then delight customers completely"
                                subtitle="Whether you're building a startup landing page, a dashboard interface, or a modern web app, Exsit gives you full control over the look and feel of your site building a startup landing page."
                                widthClass="w-full"
                                alignment="start"
                                padding="pb-0"
                            />
                            <div className="flex flex-wrap gap-2 mt-5">
                                <BadgeLink label="Grows seamlessly" />
                                <BadgeLink label="Designed to evolve with business" delay={100} />
                                <BadgeLink label="Precisely to your requirements" delay={200} />
                                <BadgeLink label="Solutions that flex to match" delay={200} />
                                <BadgeLink label="Future-proof infrastructure built" delay={300} />
                            </div>
                        </div>
                        {/* right side */}
                        <div className="w-full" data-aos="fade-up" data-aos-duration="400">
                            <VideoBlock
                                videoUrl="/images/about-video.mp4"
                                thumbnail="/images/feature-1.svg"
                                alt="About Us Video"
                            />
                        </div>


                    </div>

                </div>
            </section>
            {/* price wrap */}
            <section className="lg:pt-24 pt-12 relative overflow-hidden">
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
                        <PriceCard
                            title="Startup"
                            description="Best for startup business owners who needs for business."
                            price="$29"
                            priceSuffix="/month"
                            borderColor="border-gray-200"
                            buttonText="Start trial for 14 days"
                            buttonLink="/pricing"
                            discountText=""
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
                            borderColor="border-blue-700"
                            buttonText="Start trial for 14 days"
                            buttonLink="/pricing"
                            discountText="Get 20% off"
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
                            discountText=""
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
                            <Button href="/blog-1" label="Check out for more blog" bgColor="bg-blue-600" textColor="text-white" />
                        </div>
                    </div>
                    <div className="grid lg:grid-cols-3 gap-4 md:grid-cols-2 sm:grid-cols-1">
                        {bottomPosts.map((post) => <BlogCardThree key={post.id} post={post} />)}
                    </div>
                </div>
            </section>
            {/* cta wrap */}
            <CtaSection />
            {/* footer */}
            <FooterModern />
        </>
    );
}
