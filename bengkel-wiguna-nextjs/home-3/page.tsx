"use client";
import { blogPosts } from "@/const/blogData";

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import BrandCarousel from "@/components/ui/BrandCarousel";

import PageTitle3 from "@/components/ui/PageTitle3";
import FeatureCard from "@/components/ui/FeatureCard";
import { TrendingUp, Package, Layers, Filter, ArrowUpRight } from "react-feather";
import Image from "next/image";
import CounterCarousel from "@/components/ui/MainSlider";
import maincarsoul from "@/data/hometwoslider.json";
import Button from "@/components/ui/Button";
import BlogCardOne from "@/components/ui/BlogCardOne";
import BlogCardTwo from "@/components/ui/BlogCardTwo";
import Tabs from "@/components/ui/Tab";
import FeedbackCarousel from "@/components/ui/FeedbackCarousel";
import PriceCard2 from "@/components/ui/PriceCard2";
import Herotwo from "@/components/layout/Herotwo";

export default function HomePage() {
    const featuredPost = blogPosts.find((post) => post.featured);
    const sidePosts = blogPosts.filter((post) => !post.featured).slice(0, 3);

    return (
        <>
            {/* Header */}
            <Header theme="header-light" btnColor="bg-orange-500" logo="/images/logo/logo-warning.png" />
            {/* hero wrap */}
            <Herotwo />
            {/* brand wrap */}
            <section className="brand-wrap lg:py-24 py-12 font-dm">
                <div className="max-w-screen-xl mx-auto px-3 sm:px-6 md:px-14 lg:px-14 xl:px-18 2xl:px-14 pb-0">
                    <div className="flex justify-center lg:pb-16 pb-10">
                        <h2 className="lg:text-3xl text-2xl font-semibold text-center text-gray-900">What our clients say about us.</h2>
                    </div>
                    <div className="flex justify-center relative">
                        <BrandCarousel  />
                    </div>
                </div>
            </section>
            {/* service wrap */}
            <section className="service-wrap lg:pb-24 pb-12 font-dm">
                <div className="max-w-screen-xl mx-auto px-3 sm:px-6 md:px-14 lg:px-14 xl:px-18 2xl:px-14 pb-0">
                    <PageTitle3
                        badgeText=""
                        title="Customer testimonials that speak for themselves"
                        subtitle=""
                        widthClass="xl:w-7/12 lg:w-2/3 mx-auto"
                        alignment="center"
                        padding="pb-16"
                    />
                    <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-12 relative lg:space-y-0 space-y-5">
                        <FeatureCard
                            icon={<TrendingUp className="text-white w-7 h-7" />}
                            title="Digital Marketing"
                            description=" Its flexibility allows you to adapt it for any business need — from fintech and analytics tools to CRM platforms and admin."
                            link="/about"
                        />
                        <FeatureCard
                            icon={<Package className="text-white w-7 h-7" />}
                            title="Marketing Strategy"
                            description=" Its flexibility allows you to adapt it for any business need — from fintech and analytics tools to CRM platforms and admin."
                            link="/about"
                        />
                        <FeatureCard
                            icon={<Layers className="text-white w-7 h-7" />}
                            title="Made for Developer"
                            description=" Its flexibility allows you to adapt it for any business need — from fintech and analytics tools to CRM platforms and admin."
                            link="/about"
                        />
                        <FeatureCard
                            icon={<Filter className="text-white w-7 h-7" />}
                            title="24x7 Customer Supports"
                            description=" Its flexibility allows you to adapt it for any business need — from fintech and analytics tools to CRM platforms and admin."
                            link="/about"
                        />
                    </div>
                </div>
            </section>
            {/* featuer wrap */}
            <section className="feature-wrap font-dm lg:mx-10">
                <div className="lg:py-24 py-12 bg-orange-50 rounded-xl">
                    <div className="max-w-screen-xl mx-auto px-3 sm:px-6 md:px-14 lg:px-14 xl:px-18 2xl:px-3 pb-0">
                        <PageTitle3
                            badgeText=""
                            title="Anticipate needs deliver extraordinary customer delight"
                            subtitle="Join thousands who trust us for quality and lasting relationships"
                            widthClass="xl:w-7/12 lg:w-2/3 mx-auto"
                            alignment="center"
                            padding="pb-16"
                        />
                        <div className="flex flex-wrap justify-between lg:pb-16 pb-10 gap-y-6">
                            <div className="w-full lg:w-2/3 lg:pr-6">
                                {/* carsoal */}
                                <CounterCarousel slides={maincarsoul} />
                            </div>
                            <div className="w-full lg:w-1/3">
                                <div className="overflow-hidden relative group bg-orange-400 rounded-xl h-[350px] p-6 flex flex-col aos-init aos-animate" data-aos="fade-up" data-aos-duration="200">
                                    <h3 className="text-gray-900 font-semibold text-3xl pl-2 lg:pr-16">Make your customers smile with every step.</h3>
                                    <div className="flex flex-row justify-between mt-auto">
                                        <div className="mt-auto">
                                            <a href="about-2.html" aria-label="play" className="w-14 h-14 flex justify-center items-center bg-black rounded-full group-hover:rotate-45 transition duration-300">
                                                <ArrowUpRight size={30} className="text-white" />
                                            </a>
                                        </div>
                                        <div>
                                            <Image
                                                src="/images/icon-2.png"
                                                width={87}
                                                height={160}
                                                alt="icon"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* text  */}
                        <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-6 relative lg:space-y-0 space-y-5 lg:pb-16 pb-10">
                            <div className="w-full">
                                <h3 className="text-gray-900 font-semibold lg:text-4xl text-3xl mb-4 lg:w-2/3">Deliver experiences that truly delight the customer keep track your app.</h3>
                            </div>
                            <div className="w-full space-y-6">
                                <p className="text-gray-600 text-[17px] font-medium max-w-xl lg:pr-8 px-0 aos-init aos-animate" data-aos="fade-up" data-aos-duration="300">
                                    Get intent on data the accounts you want to target as well as emails, direct dials, and cell phones. Everything you need to close the deal is right at your fingertips. Do not risk losing your current customers because they are not aware of additional products or services you provide. Build your ultimate prospecting list and know when your prospects intent signals increase or decrease to optimize your pipeline.
                                </p>
                                <p className="text-gray-600 text-[17px] font-medium max-w-xl lg:pr-8 px-0 aos-init aos-animate" data-aos="fade-up" data-aos-duration="300">
                                    Get intent on data the accounts you want to target as well as emails, direct dials, and cell phones. Everything you need to close the deal is right at your fingertips. Do not risk losing your current customers because they are not aware of additional products.
                                </p>
                                <div className="aos-init aos-animate" data-aos="fade-up" data-aos-delay="200" data-aos-duration="400">
                                    <Button href="/about" label="Who we are" bgColor="bg-orange-500" textColor="text-white" />
                                </div>
                            </div>
                        </div>
                        <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-6 relative lg:space-y-0 space-y-5 lg:pb-24 pb-10">

                        </div>


                        <PageTitle3
                            badgeText=""
                            title="Built to scale with flexible pricing with your need"
                            subtitle="A healthier you — and works tirelessly to help you achieve it."
                            widthClass="xl:w-6/12 lg:w-2/3 mx-auto"
                            alignment="center"
                            padding="pb-16"
                        />
                        <div className="flex justify-center">
                            <div className="xl:w-7/12 lg:w-10/12 price-wrap p-5 rounded-xl bg-white">
                                <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-6 relative lg:space-y-0 space-y-5">
                                    {/* price 1st */}
                                    <PriceCard2
                                        title="Startup"
                                        description="Best for startup business owners who need tools for business."
                                        price="$29"
                                        period="month"
                                        padding="lg:p-6 p-4"
                                        features={[
                                            "10 GB disk space availability",
                                            "50 GB NVMe SSD for use",
                                            "Free platform access for all",
                                            "Lifetime updates facility",
                                            "One year support",
                                        ]}
                                        buttonText="Start trial for 14 days"
                                        buttonLink="/pricing-2"
                                        bgColor="bg-white"
                                        borderColor="border-gray-200 border-0"
                                        textColor="text-gray-800"
                                        btnbgColor="bg-gray-900"
                                        checkIconcolor="text-orange-500"
                                    />
                                    {/* price 2nd */}
                                    <PriceCard2
                                        title="Professional"
                                        description="Perfect for new professional needing essential tools for growth."
                                        price="$49"
                                        period="month"
                                        padding="lg:p-6 p-4"
                                        features={[
                                            "20 GB disk space availability",
                                            "100 GB NVMe SSD for use",
                                            "Free platform access for all",
                                            "Lifetime updates facility",
                                            "One year support",
                                        ]}
                                        buttonText="Start trial for 14 days"
                                        buttonLink="/pricing-2"
                                        bgColor="bg-gray-100"
                                        borderColor="border-gray-200 border-0"
                                        textColor="text-gray-800"
                                        btnbgColor="bg-orange-500"
                                        checkIconcolor="text-orange-500"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* tab wrap */}
            <section className="tab-wrap lg:py-24 py-12 font-dm">
                <div className="max-w-screen-xl mx-auto px-3 sm:px-6 md:px-14 lg:px-14 xl:px-18 2xl:px-10 pb-0 lg:py-4 py-0">
                    <PageTitle3
                        badgeText=""
                        title="Transforming into customer expectations and deliver"
                        subtitle="More balanced you — and works tirelessly to help you get there."
                        widthClass="xl:w-7/12 lg:w-2/3 mx-auto"
                        alignment="center"
                        padding="pb-10"
                    />
                    <Tabs />
                </div>
            </section>
            {/* testimonial wrap */}
            <section className="testimonial-wrap font-dm lg:mx-10">
                <div className="lg:py-24 py-12 bg-home-two-price rounded-xl">
                    <div className="max-w-screen-xl mx-auto px-3 sm:px-6 md:px-14 lg:px-14 xl:px-18 2xl:px-3 pb-0">
                        <PageTitle3
                            badgeText=""
                            title="Understand expectations, then delight customers completely"
                            subtitle="A healthier you — and works tirelessly to help you achieve it."
                            widthClass="xl:w-7/12 lg:w-2/3 mx-auto text-white"
                            alignment="center"
                            padding="pb-16"
                            textColor="text-white"
                        />
                        <FeedbackCarousel />
                    </div>
                </div>
            </section>
            {/* blog wrap */}
            <section className="blog-wrap lg:py-24 py-12 font-dm">
                <div className="max-w-screen-xl mx-auto px-3 sm:px-6 md:px-14 lg:px-14 xl:px-18 2xl:px-3 pb-0 lg:py-4 py-0">
                    <div className="flex flex-wrap justify-between pb-16 gap-y-4">
                        <PageTitle3
                            badgeText=""
                            title="Stay informed with our latest blog entries"
                            subtitle="New blog articles, insights, and updates here."
                            widthClass="w-full xl:w-6/12 lg:w-7/12"
                            alignment="start"
                            padding="pb-0"
                        />
                        <div className="lg:text-right mt-auto">
                            <Button href="/blog-1" label="Check out more blogs" bgColor="bg-orange-500" textColor="text-white" />
                        </div>
                    </div>
                    <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-6 relative lg:space-y-0 space-y-5">
                        {/* === Featured Post === */}
                        {featuredPost && <BlogCardOne post={featuredPost} />}

                        {/* === Side Posts === */}
                        <div className="w-full space-y-6">
                            {sidePosts.map((post) => <BlogCardTwo key={post.id} post={post} />)}
                        </div>
                    </div>
                </div>
            </section>
            {/* footer */}
            <Footer foreColor="bg-orange-500" logo="/images/logo/logo-warning-white.png" />
        </>
    );
}
