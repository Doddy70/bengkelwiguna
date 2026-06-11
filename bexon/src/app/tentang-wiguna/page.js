/**
 * Tentang Kami - Bengkel Wiguna
 * Halaman Sejarah & Profil Bengkel Wiguna
 */

import Header from '@/components/layout/header/Header';
import Footer from '@/components/layout/footer/Footer';
import About12 from "@/components/sections/about/About12";
import Cta from "@/components/sections/cta/Cta";
import HeroInner from "@/components/sections/hero/HeroInner";
import History1 from "@/components/sections/history/History1";
import BackToTop from '@/components/shared/others/BackToTop';
import HeaderSpace from '@/components/shared/others/HeaderSpace';
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";
import { getNavigationMenu } from '@/lib/wordpress';

export const metadata = {
  title: 'Tentang Bengkel Wiguna - Sejarah & Visi Misi',
  description: 'Kenali lebih dekat Bengkel Wiguna. Dengan pengalaman lebih dari 15 tahun, kami melayani perawatan mobil dengan profesional dan terpercaya di Depok.',
  alternates: {
    canonical: '/tentang-wiguna/',
  },
  openGraph: {
    title: 'Tentang Bengkel Wiguna',
    description: 'Kenali lebih dekat Bengkel Wiguna - Bengkel mobil terpercaya di Depok.',
    url: '/tentang-wiguna/',
    type: 'website',
  },
};

const About = async () => {
  const navItems = await getNavigationMenu("menu-1");

  return (
    <>
      <BackToTop />
      <Header navItems={navItems} />
      <Header isStickyHeader={true} navItems={navItems} />

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <HeaderSpace />
            <HeroInner title={"Tentang Wiguna"} text={"Tentang Kami"} />
            <About12 />
            <History1 />
            <Cta />
          </main>

          <Footer />
        </div>
      </div>
      
      <ClientWrapper />
    </>
  );
};

export default About;