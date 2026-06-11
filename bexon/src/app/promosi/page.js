/**
 * Promosi - Bengkel Wiguna
 * Halaman daftar promo/promosi — data dari WordPress REST API
 */

import Link from "next/link";
import Image from "next/image";
import Header from "@/components/layout/header/Header";
import Footer from "@/components/layout/footer/Footer";
import BackToTop from "@/components/shared/others/BackToTop";
import HeaderSpace from "@/components/shared/others/HeaderSpace";
import HeroInner from "@/components/sections/hero/HeroInner";
import { getWhatsAppLink } from "@/lib/constants";
import { getAllPromosi, getNavigationMenu } from "@/lib/wordpress";

export const metadata = {
  title: "Promosi - Penawaran Spesial Bengkel Wiguna",
  description:
    "Dapatkan penawaran dan promo spesial dari Bengkel Wiguna. Diskon service, paket perawatan, dan berbagai keuntungan untuk pelanggan setia.",
  alternates: {
    canonical: "/promosi/",
  },
  openGraph: {
    title: "Promosi Bengkel Wiguna",
    description: "Penawaran spesial dan promo menarik dari Bengkel Wiguna.",
    url: "/promosi/",
    type: "website",
  },
};

const PromosiPage = async () => {
  const [promos, navItems] = await Promise.all([
    getAllPromosi(),
    getNavigationMenu("menu-1")
  ]);

  return (
    <>
      <BackToTop />
      <Header navItems={navItems} />
      <Header isStickyHeader={true} navItems={navItems} />

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <HeaderSpace />
            <HeroInner title={"Promosi & Penawaran"} text={"Promosi"} />

            <section className="tj-project-section section-gap">
              <div className="container">
                {/* Section Heading */}
                <div className="row mb-5">
                  <div className="col-12">
                    <div className="sec-heading text-center">
                      <span className="sub-title">
                        <i className="tji-box" /> Penawaran Spesial
                      </span>
                      <h2 className="sec-title">
                        Promo <span>Terbaik</span> untuk Anda
                      </h2>
                    </div>
                  </div>
                </div>

                {/* Promo Grid */}
                {(!promos || promos.length === 0) ? (
                  <div className="text-center py-5">
                    <p style={{ color: "#666", marginBottom: "20px" }}>
                      Saat ini belum ada promo yang aktif. Silakanhubungi kami untuk informasi terbaru.
                    </p>
                    <Link
                      href={getWhatsAppLink("Halo, saya ingin info promo terbaru dari Bengkel Wiguna")}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="tj-btn-primary"
                      style={{ background: "#25D366" }}
                    >
                      <i className="fa-brands fa-whatsapp" />
                      <span>Hubungi Kami</span>
                    </Link>
                  </div>
                ) : (
                  <div className="row row-gap-4">
                    {promos.map((promo, idx) => {
                      const imageSrc = promo.featured_img || "/images/promosi/placeholder.jpg";
                      return (
                        <div
                          key={promo.id}
                          className="col-xl-4 col-md-6 wow fadeInUp promo-item"
                          data-wow-delay={`${idx * 0.1}s`}
                        >
                          <div
                            className="project-item"
                            style={{
                              height: "100%",
                              display: "flex",
                              flexDirection: "column",
                            }}
                          >
                            <div
                              className="project-img"
                              style={{
                                height: "260px",
                                position: "relative",
                                overflow: "hidden",
                              }}
                            >
                              <Image
                                src={imageSrc}
                                alt={promo.title}
                                fill
                                sizes="(max-width: 768px) 100vw, 33vw"
                                style={{ objectFit: "cover", objectPosition: "center" }}
                              />
                            </div>
                            <div
                              className="project-content"
                              style={{
                                display: "flex",
                                flexDirection: "column",
                                flexGrow: 1,
                                padding: "25px 25px 25px 30px",
                              }}
                            >
                              <span className="categories" style={{ marginBottom: "15px" }}>
                                <Link href={`/promosi/${promo.slug}/`}>Promo</Link>
                              </span>
                              <div
                                className="project-text"
                                style={{
                                  marginTop: "auto",
                                  display: "flex",
                                  flexWrap: "wrap",
                                  alignItems: "center",
                                  justifyContent: "space-between",
                                }}
                              >
                                <h4
                                  className="title"
                                  style={{ margin: 0, fontSize: "20px", fontWeight: "700" }}
                                >
                                  <Link href={`/promosi/${promo.slug}/`}>{promo.title}</Link>
                                </h4>
                                <Link
                                  className="project-btn"
                                  href={`/promosi/${promo.slug}/`}
                                >
                                  <i className="tji-arrow-right-long" />
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            </section>

            {/* CTA */}
            <section className="tj-cta-section">
              <div className="container">
                <div className="cta-wrapper text-center">
                  <h2 className="cta-title">Punya Pertanyaan tentang Promo?</h2>
                  <p className="cta-desc">
                    Tim kami siap membantu dan memberikan informasi promo terbaru.
                  </p>
                  <div className="cta-btn-group d-flex justify-content-center gap-3 flex-wrap">
                    <Link href="/lokasi/" className="tj-btn-primary">
                      <i className="fa-solid fa-location-dot" />
                      <span>Kunjungi Bengkel</span>
                    </Link>
                    <Link
                      href={getWhatsAppLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="tj-btn-secondary"
                      style={{ background: "#25D366", color: "#fff" }}
                    >
                      <i className="fa-brands fa-whatsapp" />
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

export default PromosiPage;