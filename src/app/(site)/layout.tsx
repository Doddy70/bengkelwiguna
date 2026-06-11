// app/layout.tsx

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CtaSection from '@/components/layout/CtaSection';

export const metadata = {
    title: 'Exsit Next',
    description: 'Modern Next.js app with Tailwind + TypeScript + SCSS',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className='font-dm-sans min-h-screen flex flex-col'>
            <Header position="absolute" logoWidth={160} />
            <main className="flex-grow pt-[90px] lg:pt-[110px]">
                {children}
            </main>
            <CtaSection />
            <Footer />
        </div>
    );
}
