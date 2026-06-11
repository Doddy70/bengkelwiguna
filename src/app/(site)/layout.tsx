// app/layout.tsx

import Header from '@/components/layout/Header';
import FooterModern from '@/components/heroui/footer-modern';
import CtaSection from '@/components/layout/CtaSection';
import { getNavigationMenu, getAllLayananSpesialis } from '@/lib/wordpress';

export const metadata = {
    title: 'Bengkel Wiguna | Layanan Perawatan Mobil Profesional',
    description: 'Solusi perbaikan dan perawatan mobil terpercaya di Depok. Booking sekarang untuk layanan profesional.',
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
    // Fetch data in parallel on the server to prevent client-side lag
    const [menuData, spesialis] = await Promise.all([
        getNavigationMenu('main-menu'),
        getAllLayananSpesialis()
    ]);

    const menuItems = menuData?.items || [];
    const spesialisList = Array.isArray(spesialis) ? spesialis : [];

    return (
        <div className='font-dm-sans min-h-screen flex flex-col'>
            {/* Standard Header consistent with Homepage */}
            <Header
                position="fixed"
                bgColor="bg-white/90 backdrop-blur-xl border-b border-gray-100 shadow-sm"
                theme="header-light"
                menuItems={menuItems}
                spesialisData={spesialisList}
            />
            
            <main className="flex-grow pt-[80px] lg:pt-[100px]">
                {children}
            </main>

            {/* Standardized Footer consistent with Homepage */}
            <FooterModern />
        </div>
    );
}
