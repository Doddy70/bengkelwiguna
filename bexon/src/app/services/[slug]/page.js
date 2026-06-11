/**
 * Service Detail - Bengkel Wiguna
 * Individual service page with SSG
 */

import Link from 'next/link';
import Header from '@/components/layout/header/Header';
import Footer from '@/components/layout/footer/Footer';
import HeroInner from '@/components/sections/hero/HeroInner';
import Cta from '@/components/sections/cta/Cta';
import ServicesDetailsPremium from '@/components/sections/services/ServicesDetailsPremium';
import { getWhatsAppLink } from '@/lib/constants';
import { generatePageMetadata, generateBreadcrumbsFromPath } from "@/lib/seo-complete";
import BackToTop from '@/components/shared/others/BackToTop';
import HeaderSpace from '@/components/shared/others/HeaderSpace';
import { getAllServices, getServiceBySlug, stripHtml, getOptimizedServicePortfolioData, getNavigationMenu } from '@/lib/wordpress';

// Generate static params for all services
export async function generateStaticParams() {
  try {
    const wpServices = await getAllServices();
    if (!wpServices || !Array.isArray(wpServices) || wpServices.length === 0) {
      // Return placeholder to ensure build succeeds
      return [{ slug: 'penggantian-ban' }];
    }
    return wpServices
      .filter(service => service?.slug && typeof service.slug === 'string')
      .map((service) => ({
        slug: service.slug,
      }));
  } catch (error) {
    console.warn('Failed to fetch service params:', error);
    return [{ slug: 'penggantian-ban' }];
  }
}

// Generate metadata for each service page
export async function generateMetadata({ params }) {
  const { slug } = await params;

  try {
    const service = await getServiceBySlug(slug);

    if (!service) {
      return {
        title: 'Layanan Tidak Ditemukan | Bengkel Wiguna',
        description: 'Layanan yang Anda cari tidak ditemukan.',
      };
    }

    return {
      title: `${service.title} | Layanan Bengkel Wiguna`,
      description: stripHtml(service.excerpt) || stripHtml(service.content) || "Layanan servis profesional dari Bengkel Wiguna.",
      alternates: {
        canonical: `/services/${slug}/`,
      },
    };
  } catch (error) {
    return {
      title: 'Layanan | Bengkel Wiguna',
      description: 'Layanan servis profesional dari Bengkel Wiguna.',
    };
  }
}

const ServiceDetail = async ({ params }) => {
  const { slug } = await params;
  
  // Use the optimized Abilities API fetcher
  const [serviceData, navItems] = await Promise.all([
    getOptimizedServicePortfolioData(slug),
    getNavigationMenu("menu-1")
  ]);

  if (!serviceData || !serviceData.currentItem) {
    return (
      <div className="container py-5 text-center">
        <h1>Layanan Tidak Ditemukan</h1>
        <Link href="/services/" className="tj-btn-primary mt-4">
          Kembali ke Daftar Layanan
        </Link>
      </div>
    );
  }

  const { currentItem } = serviceData;

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
            <HeroInner
              title={currentItem.title}
              text={"Detail Layanan"}
              breadcrums={[{ name: "Layanan", path: "/services/" }]}
              noNeedTitleAnim={true}
            />

            {/* Bexon Premium Home-05 Service Detail Component */}
            <ServicesDetailsPremium serviceData={serviceData} />

            {/* Related CTA */}
            <Cta />
          </main>

          <Footer />
        </div>
      </div>
    </>
  );
};

export default ServiceDetail;
