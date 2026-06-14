"use client";
import React from 'react';
import { Settings, CheckCircle } from 'lucide-react';

import BlogCardFour from '@/components/ui/BlogCardFour';
import BlogCardThree from '@/components/ui/BlogCardThree';
import FeatureBox from '@/components/ui/FeatureBox';
import FeatureCard from '@/components/ui/FeatureCard';
import FeatureCard2 from '@/components/ui/FeatureCard2';
import FeatureCard3 from '@/components/ui/FeatureCard3';
import FeatureCard4 from '@/components/ui/FeatureCard4';
import FeatureCard5 from '@/components/ui/FeatureCard5';
import IconBox from '@/components/ui/IconBox';
import MainSlider from '@/components/ui/MainSlider';
import PopularPost from '@/components/ui/PopularPost';
import ProductGallery from '@/components/ui/ProductGallery';
import ServiceCard2 from '@/components/ui/ServiceCard2';
import StickyFeatureCards from '@/components/ui/StickyFeatureCards';
import UpperHeader from '@/components/ui/Upperheader';
import TrendingPosts from '@/components/ui/TrendingPosts';

const mockPost = {
    title: "Tips Perawatan Mobil Agar Mesin Tetap Awet",
    slug: "tips-perawatan-mobil",
    excerpt: "Pelajari cara merawat mesin mobil Anda dengan langkah-langkah sederhana yang bisa dilakukan sendiri di rumah.",
    image: "/images/hero/hero-1.jpg",
    date: "14 Juni 2026",
    category: "Otomotif",
    author: "Budi Santoso",
    authorAvatar: "/images/client/client-1.jpg",
    authorPosition: "Chief Mechanic",
    readTime: "5 Min Read"
};

const mockPosts = [
    mockPost,
    {
        ...mockPost,
        title: "Pentingnya Mengganti Oli Tepat Waktu",
        slug: "ganti-oli-tepat-waktu",
        image: "/images/hero/hero-2.jpg",
    },
    {
        ...mockPost,
        title: "Tanda-tanda Rem Mobil Harus Segera Diganti",
        slug: "tanda-rem-rusak",
        image: "/images/hero/hero-3.jpg",
    }
];

const mockSlides = [
    { src: "/images/hero/hero-1.jpg", title: "Servis Berkala Berkualitas", subtitle: "Layanan terbaik untuk mobil Anda" },
    { src: "/images/hero/hero-2.jpg", title: "Promo Spesial Bulan Ini", subtitle: "Diskon hingga 20% untuk penggantian ban" }
];

const mockImages = [
    "/images/hero/hero-1.jpg",
    "/images/hero/hero-2.jpg",
    "/images/hero/hero-3.jpg",
];

const mockStickyCards = [
    { number: 1, title: "Konsultasi Gratis", description: "Tim ahli kami siap memberikan solusi.", image: "/images/hero/hero-1.jpg" },
    { number: 2, title: "Pengerjaan Cepat", description: "Waktu pengerjaan efisien tanpa kompromi kualitas.", image: "/images/hero/hero-2.jpg" },
    { number: 3, title: "Garansi Servis", description: "Memberikan rasa tenang setelah kendaraan diperbaiki.", image: "/images/hero/hero-3.jpg" },
];

export default function RequestedPreviewPage() {
    return (
        <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto space-y-24">
                
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">
                        Requested Components Preview
                    </h1>
                    <p className="mt-4 text-xl text-gray-500 max-w-2xl mx-auto">
                        Preview khusus untuk komponen-komponen yang Anda minta, dengan dummy data yang relevan agar tampil sempurna.
                    </p>
                </div>

                <Section title="UpperHeader">
                    <div className="relative border rounded-lg overflow-hidden bg-white">
                        <UpperHeader 
                            bgColor="bg-brand-blue" 
                            textColor="text-white" 
                            message="Dapatkan Diskon 20% untuk Servis AC Bulan Ini!" 
                            linkText="Klaim Sekarang" 
                            link="/promosi" 
                        />
                    </div>
                </Section>

                <Section title="MainSlider">
                    <MainSlider slides={mockSlides} />
                </Section>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <Section title="BlogCardFour">
                        <BlogCardFour post={mockPost as any} />
                    </Section>

                    <Section title="BlogCardThree">
                        <BlogCardThree post={mockPost as any} />
                    </Section>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <Section title="PopularPost">
                        <PopularPost posts={mockPosts as any} />
                    </Section>

                    <Section title="TrendingPosts">
                        <TrendingPosts posts={mockPosts as any} limit={3} />
                    </Section>
                </div>

                <Section title="Feature Cards Variations">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 bg-gray-100 p-8 rounded-2xl">
                        <div>
                            <h3 className="text-sm font-bold text-gray-400 mb-4 uppercase tracking-wider">FeatureBox</h3>
                            <FeatureBox 
                                icon={<Settings size={32} className="text-blue-500" />} 
                                title="Layanan 24 Jam" 
                                description="Kami selalu siap melayani keadaan darurat." 
                            />
                        </div>
                        <div>
                            <h3 className="text-sm font-bold text-gray-400 mb-4 uppercase tracking-wider">FeatureCard 1</h3>
                            <FeatureCard 
                                icon={<CheckCircle size={32} className="text-blue-500" />} 
                                title="Suku Cadang Asli" 
                                description="Terjamin orisinal dan bergaransi resmi." 
                                link="/layanan"
                                linkText="Detail"
                            />
                        </div>
                        <div>
                            <h3 className="text-sm font-bold text-gray-400 mb-4 uppercase tracking-wider">FeatureCard 2</h3>
                            <FeatureCard2 
                                image="/images/hero/hero-1.jpg" 
                                title="Teknisi Handal" 
                                description="Bersertifikat dan berpengalaman di bidangnya." 
                                icon={<Settings size={24} className="text-white" />}
                            />
                        </div>
                        <div>
                            <h3 className="text-sm font-bold text-gray-400 mb-4 uppercase tracking-wider">FeatureCard 3</h3>
                            <FeatureCard3 
                                variant="detailed"
                                image="/images/hero/hero-2.jpg" 
                                number={1}
                                title="Layanan Spooring" 
                                description="Mengembalikan keselarasan roda kendaraan." 
                                whatYouCanDo={["Cek Sudut Kemiringan", "Balancing Roda"]}
                            />
                        </div>
                        <div>
                            <h3 className="text-sm font-bold text-gray-400 mb-4 uppercase tracking-wider">FeatureCard 4</h3>
                            <FeatureCard4 
                                icon={<Settings size={32} className="text-white" />} 
                                title="Tune Up Cepat" 
                                description="Performa mesin kembali maksimal." 
                                bgColor="bg-blue-600"
                            />
                        </div>
                        <div>
                            <h3 className="text-sm font-bold text-gray-400 mb-4 uppercase tracking-wider">FeatureCard 5</h3>
                            <FeatureCard5 
                                icon={<CheckCircle size={32} className="text-blue-500" />} 
                                title="Inspeksi Menyeluruh" 
                                description="Pengecekan dari mesin hingga kelistrikan." 
                                layout="classic"
                            />
                        </div>
                    </div>
                </Section>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <Section title="IconBox">
                        <div className="flex justify-center p-8 bg-white rounded-2xl border">
                            <IconBox 
                                image="/images/icons/settings.svg" 
                                alt="Settings Icon" 
                                bgColor="#EBF5FF"
                            />
                        </div>
                    </Section>

                    <Section title="ServiceCard2">
                        <div className="p-8 bg-gray-900 rounded-2xl">
                            <ServiceCard2 
                                title="Ganti Oli" 
                                description="Penggantian oli mesin beserta filter secara profesional." 
                                link="/layanan"
                                icon={Settings}
                            />
                        </div>
                    </Section>
                </div>

                <Section title="ProductGallery">
                    <div className="bg-white p-8 rounded-2xl border">
                        <ProductGallery images={mockImages} layout="horizontal" />
                    </div>
                </Section>

                <Section title="StickyFeatureCards">
                    <div className="bg-gray-50 rounded-2xl overflow-hidden border">
                        <StickyFeatureCards cards={mockStickyCards} />
                    </div>
                </Section>

            </div>
        </div>
    );
}

function Section({ title, children }: { title: string, children: React.ReactNode }) {
    return (
        <section>
            <div className="flex items-center gap-4 mb-8">
                <h2 className="text-2xl font-black text-gray-800">{title}</h2>
                <div className="h-px bg-gray-200 flex-1"></div>
            </div>
            <div className="relative">
                {children}
            </div>
        </section>
    )
}
