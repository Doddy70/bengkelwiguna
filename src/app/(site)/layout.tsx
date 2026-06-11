// app/layout.tsx

import Header from '@/components/layout/Header';
import FooterModern from '@/components/heroui/footer-modern';
import CtaSection from '@/components/layout/CtaSection';

export const metadata = {
    title: 'Bengkel Wiguna | Layanan Perawatan Mobil Profesional',
    description: 'Solusi perbaikan dan perawatan mobil terpercaya di Depok. Booking sekarang untuk layanan profesional.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className='font-dm-sans min-h-screen flex flex-col'>
            {/* Standard Header consistent with Homepage */}
            <Header
                position="fixed"
                bgColor="bg-white/90 backdrop-blur-xl border-b border-gray-100 shadow-sm"
                theme="header-light"
                logoWidth={180}
            />
            
            <main className="flex-grow pt-[80px] lg:pt-[100px]">
                {children}
            </main>

            {/* Standardized Footer consistent with Homepage */}
            <FooterModern />
        </div>
    );
}
