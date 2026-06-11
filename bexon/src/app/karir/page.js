/**
 * Karir - Bengkel Wiguna
 * Halaman lowongan kerja di Bengkel Wiguna
 */

import Header from '@/components/layout/header/Header';
import Footer from '@/components/layout/footer/Footer';
import Careers1 from "@/components/sections/careers/Careers1";
import Cta from "@/components/sections/cta/Cta";
import HeroInner from "@/components/sections/hero/HeroInner";
import BackToTop from '@/components/shared/others/BackToTop';
import HeaderSpace from '@/components/shared/others/HeaderSpace';
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";

export const metadata = {
  title: 'Karir - Bergabung dengan Tim Bengkel Wiguna',
  description: 'Bergabunglah dengan tim Bengkel Wiguna. Kami buka lowongan untuk mekanik, administrasi, dan posisi lainnya.',
  alternates: {
    canonical: '/karir/',
  },
  openGraph: {
    title: 'Karir di Bengkel Wiguna',
    description: 'Bergabung dengan tim profesional Bengkel Wiguna.',
    url: '/karir/',
    type: 'website',
  },
};

const KarirPage = async () => {
  return (
    <>
      <BackToTop />
      <Header headerType={5} isStickyHeader={true} />

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <HeroInner title={"Karir di Wiguna"} text={"Karir"} />
            <Careers1 />
            <Cta />
          </main>

          <Footer />
        </div>
      </div>
      
      <ClientWrapper />
    </>
  );
};

export default KarirPage;