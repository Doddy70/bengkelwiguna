/**
 * Services List - Bengkel Wiguna
 * Halaman daftar semua layanan
 *
 * OPTIMIZATION: Parallel API fetching using Promise.all
 */

import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/layout/header/Header';
import Footer from '@/components/layout/footer/Footer';
import BackToTop from '@/components/shared/others/BackToTop';
import HeaderSpace from '@/components/shared/others/HeaderSpace';
import HeroInner from '@/components/sections/hero/HeroInner';
import ServicesPrimary from '@/components/sections/services/ServicesPrimary';
import { getAllServices, getNavigationMenu } from '@/lib/wordpress';
import { stripHtml } from '@/lib/wordpress';
import { getWhatsAppLink } from '@/lib/constants';

export const metadata = {
  title: 'Layanan Bengkel - Semua Jenis Service Mobil',
  description: 'Layanan lengkap Bengkel Wiguna: penggantian ban, oli, kaki-kaki, service AC, aki, rem, spooring & balancing. One stop service untuk kendaraan Anda.',
  alternates: {
    canonical: '/services/',
  },
  openGraph: {
    title: 'Layanan Bengkel Wiguna',
    description: 'Semua jenis layanan service mobil di Bengkel Wiguna.',
    url: '/services/',
    type: 'website',
  },
};

const ServicesPage = async () => {
  // OPTIMIZATION: Fetch data in parallel
  const [wpServices, navItems] = await Promise.all([
    getAllServices(),
    getNavigationMenu("menu-1"),
  ]);

  const mappedServices = Array.isArray(wpServices)
    ? wpServices.map(s => ({
        ...s,
        desc: stripHtml(s.excerpt) || stripHtml(s.content) || "Layanan profesional dari Bengkel Wiguna.",
        iconName: s.icon || "fa-solid fa-wrench", // Fallback icon if no icon in wp data
        image: s.featured_img || `/images/service/${s.slug}.jpg`
      }))
    : [];

  return (
    <>
      <BackToTop />
      <Header navItems={navItems} />
      <Header isStickyHeader={true} navItems={navItems} />

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <HeaderSpace />
            {/* Page Header */}
            <HeroInner title={"Layanan Bengkel"} text={"Layanan"} />

            {/* Bexon Original Services Grid */}
            <ServicesPrimary services={mappedServices} />

            {/* WhatsApp CTA Section */}
            <section className="tj-cta-section">
              <div className="container">
                <div className="cta-wrapper text-center">
                  <h2 className="cta-title">Butuh Konsultasi Layanan?</h2>
                  <p className="cta-desc">
                    Tim kami siap membantu memilihkan layanan yang tepat untuk kendaraan Anda.
                  </p>
                  <div className="cta-btn-group d-flex justify-content-center gap-3 flex-wrap">
                    <Link href="/lokasi/" className="tj-btn-primary">
                      <i className="fa-solid fa-location-dot"></i>
                      <span>Kunjungi Bengkel</span>
                    </Link>
                    <Link
                      href={getWhatsAppLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="tj-btn-secondary"
                      style={{ background: '#25D366', color: '#fff' }}
                    >
                      <i className="fa-brands fa-whatsapp"></i>
                      <span>Chat WhatsApp</span>
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          </main>

          <Footer />
        </div>
      </div>
    </>
  );
};

export default ServicesPage;