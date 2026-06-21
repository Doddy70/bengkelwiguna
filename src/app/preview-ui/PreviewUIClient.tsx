
"use client";
// @ts-nocheck
import React from 'react';
import { Settings, Shield, Zap } from 'lucide-react';

import Accordion from '@/components/ui/Accordion';
import AuthorBio from '@/components/ui/AuthorBio';
import BadgeLink from '@/components/ui/BadgeLink';
import BillingToggle from '@/components/ui/BillingToggle';
import BlogCardFour from '@/components/ui/BlogCardFour';
import BlogCardOne from '@/components/ui/BlogCardOne';
import BlogCardThree from '@/components/ui/BlogCardThree';
import BlogCardTwo from '@/components/ui/BlogCardTwo';
import BlogSidebar from '@/components/ui/BlogSidebar';
import BrandCarousel from '@/components/ui/BrandCarousel';
import Brands from '@/components/ui/Brands';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import Button from '@/components/ui/Button';
import ChangelogItem from '@/components/ui/ChangelogItem';
import CountdownTimer from '@/components/ui/CountdownTimer';
import CounterSection from '@/components/ui/CounterSection';
import FeatureBox from '@/components/ui/FeatureBox';
import FeatureCard from '@/components/ui/FeatureCard';
import FeatureCard2 from '@/components/ui/FeatureCard2';
import FeatureCard3 from '@/components/ui/FeatureCard3';
import FeatureCard4 from '@/components/ui/FeatureCard4';
import FeatureCard5 from '@/components/ui/FeatureCard5';
import FeatureIcon from '@/components/ui/FeatureIcon';
import FeedbackCard from '@/components/ui/FeedbackCard';
import FeedbackCarousel from '@/components/ui/FeedbackCarousel';
import FeedbackSlider from '@/components/ui/FeedbackSlider';
import GradientCard from '@/components/ui/GradientCard';
import IconBox from '@/components/ui/IconBox';
import MainSlider from '@/components/ui/MainSlider';
import PageTitle from '@/components/ui/PageTitle';
import PageTitle2 from '@/components/ui/PageTitle2';
import PageTitle3 from '@/components/ui/PageTitle3';
import PopularPost from '@/components/ui/PopularPost';
import PriceCard from '@/components/ui/PriceCard';
import PriceCard2 from '@/components/ui/PriceCard2';
import PriceCard3 from '@/components/ui/PriceCard3';
import PriceCard4 from '@/components/ui/PriceCard4';
import PriceCompare from '@/components/ui/PriceCompare';
import ProductCard from '@/components/ui/ProductCard';
import ProductGallery from '@/components/ui/ProductGallery';
import RelatedProducts from '@/components/ui/RelatedProducts';
import Search from '@/components/ui/Search';
import ServiceCard from '@/components/ui/ServiceCard';
import ServiceCard2 from '@/components/ui/ServiceCard2';
import ServiceSidebar from '@/components/ui/ServiceSidebar';
import StepCard from '@/components/ui/StepCard';
import StickyFeatureCards from '@/components/ui/StickyFeatureCards';
import Subscribe from '@/components/ui/Subscribe';
import Tab from '@/components/ui/Tab';
import TeamMember from '@/components/ui/TeamMember';
import Testimonial from '@/components/ui/Testimonial';
import TestimonialCarousel from '@/components/ui/TestimonialCarousel';
import TestimonialsCarousel from '@/components/ui/TestimonialsCarousel';
import TopCarousel from '@/components/ui/TopCarousel';
import TrendingPosts from '@/components/ui/TrendingPosts';
import Upperheader from '@/components/ui/Upperheader';
import VerticalSlider from '@/components/ui/VerticalSlider';
import VideoBanner from '@/components/ui/VideoBanner';
import VideoBlock from '@/components/ui/VideoBlock';
import priceCard5 from '@/components/ui/priceCard5';


const componentsList = [
  { name: 'Accordion', Component: Accordion },
  { name: 'AuthorBio', Component: AuthorBio },
  { name: 'BadgeLink', Component: BadgeLink },
  { name: 'BillingToggle', Component: BillingToggle },
  { name: 'BlogCardFour', Component: BlogCardFour },
  { name: 'BlogCardOne', Component: BlogCardOne },
  { name: 'BlogCardThree', Component: BlogCardThree },
  { name: 'BlogCardTwo', Component: BlogCardTwo },
  { name: 'BlogSidebar', Component: BlogSidebar },
  { name: 'BrandCarousel', Component: BrandCarousel },
  { name: 'Brands', Component: Brands },
  { name: 'Breadcrumb', Component: Breadcrumb },
  { name: 'Button', Component: Button },
  { name: 'ChangelogItem', Component: ChangelogItem },
  { name: 'CountdownTimer', Component: CountdownTimer },
  { name: 'CounterSection', Component: CounterSection },
  { name: 'FeatureBox', Component: FeatureBox },
  { name: 'FeatureCard', Component: FeatureCard },
  { name: 'FeatureCard2', Component: FeatureCard2 },
  { name: 'FeatureCard3', Component: FeatureCard3 },
  { name: 'FeatureCard4', Component: FeatureCard4 },
  { name: 'FeatureCard5', Component: FeatureCard5 },
  { name: 'FeatureIcon', Component: FeatureIcon },
  { name: 'FeedbackCard', Component: FeedbackCard },
  { name: 'FeedbackCarousel', Component: FeedbackCarousel },
  { name: 'FeedbackSlider', Component: FeedbackSlider },
  { name: 'GradientCard', Component: GradientCard },
  { name: 'IconBox', Component: IconBox },
  { name: 'MainSlider', Component: MainSlider },
  { name: 'PageTitle', Component: PageTitle },
  { name: 'PageTitle2', Component: PageTitle2 },
  { name: 'PageTitle3', Component: PageTitle3 },
  { name: 'PopularPost', Component: PopularPost },
  { name: 'PriceCard', Component: PriceCard },
  { name: 'PriceCard2', Component: PriceCard2 },
  { name: 'PriceCard3', Component: PriceCard3 },
  { name: 'PriceCard4', Component: PriceCard4 },
  { name: 'PriceCompare', Component: PriceCompare },
  { name: 'ProductCard', Component: ProductCard },
  { name: 'ProductGallery', Component: ProductGallery },
  { name: 'RelatedProducts', Component: RelatedProducts },
  { name: 'Search', Component: Search },
  { name: 'ServiceCard', Component: ServiceCard },
  { name: 'ServiceCard2', Component: ServiceCard2 },
  { name: 'ServiceSidebar', Component: ServiceSidebar },
  { name: 'StepCard', Component: StepCard },
  { name: 'StickyFeatureCards', Component: StickyFeatureCards },
  { name: 'Subscribe', Component: Subscribe },
  { name: 'Tab', Component: Tab },
  { name: 'TeamMember', Component: TeamMember },
  { name: 'Testimonial', Component: Testimonial },
  { name: 'TestimonialCarousel', Component: TestimonialCarousel },
  { name: 'TestimonialsCarousel', Component: TestimonialsCarousel },
  { name: 'TopCarousel', Component: TopCarousel },
  { name: 'TrendingPosts', Component: TrendingPosts },
  { name: 'Upperheader', Component: Upperheader },
  { name: 'VerticalSlider', Component: VerticalSlider },
  { name: 'VideoBanner', Component: VideoBanner },
  { name: 'VideoBlock', Component: VideoBlock },
  { name: 'priceCard5', Component: priceCard5 },
];



class ErrorBoundary extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false, errorMessage: '' };
  }
  static getDerivedStateFromError(error: any) {
    return { hasError: true, errorMessage: error.toString() };
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm overflow-auto">
          <strong>Failed to render (needs specific props):</strong><br />
          {this.state.errorMessage}
        </div>
      );
    }
    return this.props.children;
  }
}

export default function CompleteUIPreview() {
    // A massive dummy props object to satisfy most components
    const dummyProps = {
        title: "Contoh Judul Komponen",
        subtitle: "Contoh Subtitle",
        description: "Ini adalah deskripsi contoh untuk menampilkan preview komponen. Teks ini cukup panjang agar terlihat proporsional pada desain card atau hero.",
        content: "Ini adalah konten artikel atau teks panjang yang mungkin dibutuhkan oleh komponen blog atau sidebar.",
        image: "/images/promosi/promo-default.jpg",
        avatar: "/images/promosi/promo-default.jpg",
        img: "/images/promosi/promo-default.jpg",
        src: "/images/promosi/promo-default.jpg",
        bgImage: "/images/promosi/promo-default.jpg",
        date: "14 Juni 2026",
        author: "John Doe",
        name: "Budi Santoso",
        role: "Chief Mechanic",
        price: "Rp 500.000",
        priceSuffix: "/paket",
        discountText: "Promo",
        number: "01",
        count: 100,
        buttonText: "Klik di Sini",
        buttonLink: "#",
        link: "#",
        linkText: "Baca Selengkapnya",
        href: "#",
        label: "Label Tombol",
        icon: <Settings className="w-8 h-8 text-blue-500" />,
        Icon: <Settings className="w-8 h-8 text-blue-500" />,
        features: [{ text: "Fitur Unggulan 1" }, { text: "Fitur Unggulan 2" }, { text: "Fitur Unggulan 3" }],
        items: [
            { title: "Item 1", content: "Deskripsi item 1", text: "Teks item 1" },
            { title: "Item 2", content: "Deskripsi item 2", text: "Teks item 2" }
        ],
        sections: [{ title: "Section 1", items: ["Poin 1", "Poin 2"] }],
        whatYouCanDo: ["Langkah 1", "Langkah 2"],
        socials: [{ href: "#", label: "Social", icon: <Settings /> }],
        tags: ["Otomotif", "Promo"],
        category: "Servis Rutin",
        status: "aktif",
        colorTheme: "default",
        layout: "default",
        variant: "default",
        dataAos: "fade-up"
    };

    return (
        <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">
                        Complete UI Component Gallery (60 Components)
                    </h1>
                    <p className="mt-4 text-xl text-gray-500 max-w-2xl mx-auto">
                        Semua komponen dari archive dirender secara dinamis. Jika ada komponen yang merah, berarti komponen tersebut membutuhkan data (props) struktur yang sangat spesifik yang tidak bisa di-mock secara otomatis.
                    </p>
                </div>

                <div className="space-y-16">
                    {componentsList.map((comp, idx) => (
                        <section key={idx}>
                            <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-gray-200 pb-2 mb-6">
                                {idx + 1}. {comp.name}
                            </h2>
                            <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden relative">
                                <ErrorBoundary>
                                    <comp.Component {...(dummyProps as any)} />
                                </ErrorBoundary>
                            </div>
                        </section>
                    ))}
                </div>
            </div>
        </div>
    );
}
