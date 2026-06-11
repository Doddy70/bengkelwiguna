/**
 * Halaman Demo Slider Layanan 3D Perspektif - Bengkel Wiguna
 */

import Header from "@/components/layout/header/Header";
import Footer from "@/components/layout/footer/Footer";
import BackToTop from "@/components/shared/others/BackToTop";
import HeroInner from "@/components/sections/hero/HeroInner";
import PerspectiveServiceSlider from "@/components/sections/services/PerspectiveServiceSlider";
import { getAllServices } from "@/lib/wordpress";

export const metadata = {
  title: "Demo 3D Service Slider - Bengkel Wiguna",
  description: "Uji coba slider layanan 3D melengkung perspektif premium untuk Bengkel Wiguna.",
};

const ServicesSliderPage = async () => {
  const servicesData = await getAllServices();

  return (
    <>
      <BackToTop />
      <Header headerType={5} isStickyHeader={true} />

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <div className="top-space-15"></div>
            
            {/* Page Header */}
            <HeroInner title={"Demo 3D Service Slider"} text={"3D Slider"} />

            {/* Custom 3D Perspective Service Slider */}
            <PerspectiveServiceSlider servicesData={servicesData} />
          </main>

          <Footer />
        </div>
      </div>
    </>
  );
};

export default ServicesSliderPage;
