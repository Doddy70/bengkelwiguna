"use client";

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CtaSection from '@/components/layout/CtaSection';
import PageTitle3 from '@/components/ui/PageTitle3';
import Accordion from '@/components/ui/Accordion';
import { Box, Command, Database } from 'react-feather';
import FeatureCard from '@/components/ui/FeatureCard3';
import Brands from '@/components/ui/Brands';
import Button from '@/components/ui/Button';
import Image from 'next/image';
import CounterSection from '@/components/ui/CounterSection';
import StepCard from '@/components/ui/StepCard';
import TestimonialCarousel from '@/components/ui/Testimonial';
import Herosix from '@/components/layout/Herosix';
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

export default function HomePage() {

    return (
        <>  {/* Header */}
            <Header headerClass="bg-color-none" logo="/images/logo/logo-green.png" btnColor="bg-green-800" />
            {/* Hero */}
            <Herosix />
            {/* service wrap */}
            <section className="feature-wrap lg:py-20 py-12">
                <div className="max-w-screen-xl mx-auto px-3 sm:px-6 md:px-14 lg:px-14 xl:px-18 2xl:px-3 pb-0">
                    {/* title */}
                    <PageTitle3
                        icon={<Box size={18} />}
                        badgeText="Services We Offer"
                        title="Discover what customers expect and go beyond to amaze them"
                        subtitle="Our ever-growing database of 30M+ companies and 190M+ people ensures you are never missing an opportunity."
                        widthClass="xl:w-8/12 lg:w-2/3 mx-auto w-full"
                        alignment="center"
                        padding="pb-16"
                        subtitleClass='xl:px-16'
                    />
                    <div className="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 lg:gap-6 relative lg:space-y-0 space-y-5 lg:pb-16 pb-10">
                        <div className="w-full" data-aos="zoom-in" data-aos-duration="200">
                            <FeatureCard
                                variant="detailed"
                                image="/images/feature-2.svg"
                                number={1}
                                title="Content Management"
                                description="Our design services starts and ends with a best-in-class experience."
                                bgColor="bg-cyan-500"
                                whatYouCanDo={[
                                    "Streamlined data capture: Calls, docs, and surveys",
                                    "Centralized repository: Auto-importing your key data",
                                    "Unifying your data: Calls, documents, and survey responses",
                                ]}
                            />
                        </div>
                        <div className="w-full" data-aos="zoom-in" data-aos-duration="200">
                            <FeatureCard
                                variant="detailed"
                                image="/images/feature-2.svg"
                                number={2}
                                title="Digital Transformation"
                                description="Our design services starts and ends with a best-in-class experience."
                                bgColor="bg-cyan-500"
                                whatYouCanDo={[
                                    "Unifying your data: Calls, documents, and survey responses",
                                    "Streamlined data capture: Calls, docs, and surveys",
                                    "Centralized repository: Auto-importing your key data",
                                ]}
                            />
                        </div>
                        <div className="w-full" data-aos="zoom-in" data-aos-duration="200">
                            <FeatureCard
                                variant="detailed"
                                image="/images/feature-2.svg"
                                number={3}
                                title="Market Performance"
                                description="Our design services starts and ends with a best-in-class experience."
                                bgColor="bg-cyan-500"
                                whatYouCanDo={[
                                    "Centralized repository: Auto-importing your key data",
                                    "Streamlined data capture: Calls, docs, and surveys",
                                    "Unifying your data: Calls, documents, and survey responses",
                                ]}
                            />
                        </div>
                    </div>
                    <div className="flex justify-center lg:pb-16 pb-10 pt-4">
                        <h2 className="text-gray-400 text-xl font-medium text-center">Trusted by 500+ teams to empower 2,00,000+ people</h2>
                    </div>
                    <div className="flex flex-wrap justify-center lg:gap-6 lg:pb-24 pb-10 lg:px-24">
                        <Brands />
                    </div>
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
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-check-circle-fill text-gray-900" viewBox="0 0 16 16"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path></svg>
                                Do you have a discount for students, academics
                            </p>
                            <p className="text-gray-800 font-normal text-[17px] mt-1 mb-2 lg:pr-10 flex gap-3 items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-check-circle-fill text-gray-900" viewBox="0 0 16 16"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path></svg>
                                What happens if we cancel our subscription?
                            </p>
                            <p className="text-gray-800 font-normal text-[17px] mt-1 mb-8 lg:pr-10 flex gap-3 items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-check-circle-fill text-gray-900" viewBox="0 0 16 16"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path></svg>
                                Can I have a proposal I can with my team?
                            </p>
                            <Button label="Check out more" href="/about" bgColor="bg-gray-900" textColor='text-white' />
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
                    {/* counter */}
                    <div className="flex flex-col bg-teal-900 rounded-xl xl:px-20 lg:py-16 p-8">
                        {/* title */}
                        <div className="flex justify-center lg:pb-14 pb-8">
                            <h2 className="text-white text-2xl font-normal text-center">Discover what we did for them</h2>
                        </div>
                        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 justify-center gap-6">
                            <CounterSection textcolor="text-green-400" subtextcolor="text-white" target={4.5} suffix="k" duration={1000} subtitle="Higher Conversion Rates" />
                            <CounterSection textcolor="text-green-400" subtextcolor="text-white" target={6.5} suffix="x" duration={1000} subtitle="Backed by those who believe." />
                            <CounterSection textcolor="text-green-400" subtextcolor="text-white" target={98.2} suffix="%" duration={1000} subtitle="People who trust what we." />
                        </div>
                    </div>
                    {/* grid */}
                    <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-16 gap-6 lg:p-14 p-6 bg-gray-200 rounded-xl lg:mt-24 mt-12">
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
                                icon={<Box size={18} />}
                                title="We saw a 50x boost in engagement within a week, thanks to the Get higher strategy."
                                subtitle="Whether you're building a startup landing page, a dashboard interface, or a modern web app, Exsit gives you full control over the look and feel of your site because great brands are not built by accident."
                                widthClass="w-full"
                                alignment="start"
                                padding="pb-8"
                            />
                            <div className="flex flex-row lg:gap-16 mt-auto">
                                <div className="md:w-1/3">
                                    <h3 className="text-gray-900 lg:text-5xl text-3xl mb-0 font-semibold leading-none">
                                        <span data-percentage="4.5" className="exsit-counter">4.5</span>k
                                    </h3>
                                    <span className="text-lg font-normal text-gray-900">Seamless Integration</span>
                                </div>
                                <div className="md:w-1/3">
                                    <h3 className="text-gray-900 lg:text-5xl text-3xl mb-0 font-semibold leading-none">
                                        <span data-percentage="87" className="exsit-counter">87</span>+
                                    </h3>
                                    <span className="text-lg font-normal text-gray-900">Country Startup</span>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* feature wrap */}
            <section className="service-wrap lg:pb-18 pb-12">
                <div className="max-w-screen-xl mx-auto px-3 sm:px-6 md:px-14 lg:px-14 xl:px-18 2xl:px-3 pb-0">
                    {/* title */}
                    <PageTitle3
                        badgeText="Our core feature"
                        icon={<Command size={18} />}
                        title="Explore customer expectations to leave them delighted"
                        subtitle="More balanced you — and works tirelessly to help you get there"
                        widthClass="xl:w-7/12 lg:w-2/3 mx-auto w-full"
                        alignment="center"
                        padding="lg:pb-24 pb-10"
                        subtitleClass='xl:px-4'
                    />
                    {/* Stepper */}
                    <div className="grid xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-2 grid-cols-1">
                        <StepCard number={1} title="Analytics" description="We turn complex data into actionable business insights." arrow />
                        <StepCard number={2} flipArrow={true} title="Development" description="Building robust, scalable applications for the web." arrow />
                        <StepCard number={3} title="Marketing" description="Engaging your audience with compelling campaigns." arrow />
                        <StepCard number={4} title="Performance" description="Maximizing your efficiency for a better experience." />
                    </div>
                </div>
            </section>
            {/* feebback wrap */}
            <section className="feedback-wrap lg:pb-24 pb-12">
                <div className="max-w-screen-xl mx-auto px-3 sm:px-6 md:px-14 lg:px-14 xl:px-18 2xl:px-3 pb-0 lg:py-4 py-0">
                    <div className="flex flex-wrap justify-between pb-16 gap-y-4">
                        <div className="w-full xl:w-6/12 lg:w-7/12">
                            <PageTitle3
                                icon=''
                                title="Expectations customers feeling truly delighted"
                                subtitle="Genuine feedback from those who know us best."
                                widthClass="w-full"
                                alignment="start"
                                padding="pb-0"
                            />
                        </div>
                        <div className="w-full xl:w-6/12 lg:w-5/12 lg:text-right mt-auto">
                            <div>
                                <Button href='/blog-1' label='Explore more' bgColor='bg-teal-900' textColor='text-white' />
                            </div>
                        </div>
                    </div>
                    <TestimonialCarousel />
                </div>
            </section>
            {/* faq wrapper */}
            <section className="faq-wrap lg:pb-24 pb-12">
                <div className="max-w-screen-xl mx-auto px-3 sm:px-6 md:px-14 lg:px-14 xl:px-18 2xl:px-3 pb-0">
                    {/* title */}
                    <PageTitle3
                        badgeText="Frequently Asked Question"
                        title="Got a question on your mind? here some answers"
                        subtitle="Its flexibility allows you to adapt it for any business need — from fintech and analytics tools to CRM platforms and admin dashboards."
                        widthClass="xl:w-6/12 lg:w-2/3 mx-auto w-full"
                        alignment="center"
                        padding="pb-16"
                        subtitleClass='xl:px-4'
                    />
                    <div className="flex flex-col xl:w-7/12 mx-auto">
                        <Accordion items={faqData2} defaultOpenIndex={0} />
                    </div>
                </div>
            </section>
            <CtaSection iconBG={false} sectionBg='bg-home-five-cta' subtitle='Whether you are building a startup landing page, a dashboard interface, or a modern web app gives you full control.' titleColor='text-white' subtitleColor='text-white/90' firstButtonBg='bg-lime-400' firstButtonText='text-gray-900' secondButtonBg='bg-gray-100' secondButtonText='text-gray-900' />
            {/* footer */}
            <Footer bgColor="bg-teal-950" borderColor="border-teal-950" foreColor="bg-lime-400" foretextColor="text-gray-900" logo="/images/logo/logo-darkgreen-white.png" />
            {/* <Footer bgColor="bg-orange-900" foreColor="bg-yellow-400" foretextColor="text-gray-900" borderColor="border-orange-900" iconbgColor="bg-yellow-400"/> */}
        </>
    );
}
