/**
 * Promo Detail - Bengkel Wiguna
 * Halaman detail promo — slug-based routing, data dari WP API
 */
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/layout/header/Header";
import Footer from "@/components/layout/footer/Footer";
import BackToTop from "@/components/shared/others/BackToTop";
import HeaderSpace from "@/components/shared/others/HeaderSpace";
import HeroInner from "@/components/sections/hero/HeroInner";
import SafeHtml from "@/components/shared/SafeHtml";
import { getWhatsAppLink } from "@/lib/constants";
import { getAllPromosi, getPromosiBySlug, stripHtml, getNavigationMenu } from "@/lib/wordpress";

export async function generateStaticParams() {
  try {
    const promos = await getAllPromosi();
    if (!promos || !Array.isArray(promos) || promos.length === 0) {
      // Return placeholder to ensure build succeeds
      return [{ slug: 'promo-service-bengkel' }];
    }
    return promos
      .filter(p => p?.slug && typeof p.slug === 'string')
      .map((p) => ({ slug: p.slug }));
  } catch (error) {
    console.warn('Failed to fetch promo params:', error);
    return [{ slug: 'promo-service-bengkel' }];
  }
}

export async function generateMetadata({ params }) {
  const { slug } = await params;

  try {
    const promo = await getPromosiBySlug(slug);

    if (!promo) {
      return { title: "Promo Tidak Ditemukan | Bengkel Wiguna" };
    }

    return {
      title: `${promo.title} | Promo Bengkel Wiguna`,
      description: stripHtml(promo.excerpt) || promo.title,
      alternates: { canonical: `/promosi/${slug}/` },
      openGraph: {
        title: `${promo.title} | Promo Bengkel Wiguna`,
        description: stripHtml(promo.excerpt) || promo.title,
        url: `/promosi/${slug}/`,
        type: "website",
        images: promo.featured_img ? [{ url: promo.featured_img }] : [],
      },
    };
  } catch (error) {
    return { title: "Promo | Bengkel Wiguna" };
  }
}

const PromoDetailPage = async ({ params }) => {
  const { slug } = await params;

  const [promo, allPromos, navItems] = await Promise.all([
    getPromosiBySlug(slug),
    getAllPromosi(),
    getNavigationMenu("menu-1")
  ]);

  if (!promo) {
    return (
      <>
        <BackToTop />
        <Header navItems={navItems} />
        <div className="container py-5 text-center">
          <h1>Promo Tidak Ditemukan</h1>
          <Link href="/promosi/" className="tj-btn-primary mt-4">
            Kembali ke Daftar Promo
          </Link>
        </div>
        <Footer />
      </>
    );
  }

  const currentIndex = allPromos.findIndex((p) => p.slug === slug);
  const prevPromo = currentIndex > 0 ? allPromos[currentIndex - 1] : null;
  const nextPromo = currentIndex < allPromos.length - 1 ? allPromos[currentIndex + 1] : null;

  const imageSrc = promo.featured_img || "/images/promosi/placeholder.jpg";

  return (
    <>
      <BackToTop />
      <Header navItems={navItems} />
      <Header isStickyHeader={true} navItems={navItems} />

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <HeaderSpace />
            <HeroInner
              title={promo.title}
              text={"Detail Promo"}
              breadcrums={[{ name: "Promosi", path: "/promosi/" }]}
            />

            <section className="tj-blog-section section-gap">
              <div className="container">
                <div className="row rg-50">
                  {/* Main Content */}
                  <div className="col-lg-8">
                    <div className="post-details-wrapper">
                      {/* Featured Image */}
                      {promo.featured_img && (
                        <div className="blog-images wow fadeInUp" data-wow-delay=".1s">
                          <Image
                            src={promo.featured_img}
                            alt={promo.title}
                            width={868}
                            height={450}
                            style={{ height: "auto", width: "100%" }}
                          />
                        </div>
                      )}

                      {/* Title */}
                      <h2 className="title title-anim">{promo.title}</h2>

                      {/* Content */}
                      <div className="blog-text">
                        <SafeHtml 
                          html={promo.content || promo.excerpt || ""} 
                          className="wow fadeInUp post-content"
                          data-wow-delay=".3s"
                        />

                        {/* Price Box */}
                        {promo.harga_promo ? (
                          <div
                            className="price-box wow fadeInUp"
                            data-wow-delay=".4s"
                            style={{
                              background: "linear-gradient(135deg, #224297 0%, #1a3567 100%)",
                              borderRadius: "16px",
                              padding: "30px",
                              color: "#fff",
                              textAlign: "center",
                              marginTop: "30px",
                            }}
                          >
                            {promo.harga_asli && (
                              <span
                                style={{
                                  fontSize: "16px",
                                  opacity: 0.7,
                                  textDecoration: "line-through",
                                  display: "block",
                                  marginBottom: "4px",
                                }}
                              >
                                {promo.harga_asli}
                              </span>
                            )}
                            <span
                              style={{
                                fontSize: "14px",
                                opacity: 0.9,
                                display: "block",
                                marginBottom: "8px",
                              }}
                            >
                              Harga Promo
                            </span>
                            <h2
                              style={{
                                fontSize: "42px",
                                fontWeight: "700",
                                color: "#ffd900",
                                marginBottom: "8px",
                              }}
                            >
                              {promo.harga_promo}
                            </h2>
                            {promo.diskon_persen && (
                              <span
                                style={{
                                  background: "#e74c3c",
                                  borderRadius: "4px",
                                  padding: "4px 12px",
                                  fontSize: "14px",
                                  fontWeight: "700",
                                  color: "#fff",
                                }}
                              >
                                DISKON {promo.diskon_persen}%
                              </span>
                            )}
                          </div>
                        ) : null}

                        {/* Validitas Promo */}
                        {(promo.tanggal_mulai || promo.tanggal_selesai) && (
                          <div
                            className="wow fadeInUp"
                            data-wow-delay=".4s"
                            style={{
                              background: "#f8f9fa",
                              borderRadius: "12px",
                              padding: "20px 24px",
                              marginTop: "20px",
                              borderLeft: "4px solid #224297",
                            }}
                          >
                            <strong>Periode Promo:</strong>{" "}
                            {promo.tanggal_mulai
                              ? new Date(promo.tanggal_mulai).toLocaleDateString("id-ID", {
                                  day: "numeric",
                                  month: "long",
                                  year: "numeric",
                                })
                              : "Segera"}{" "}
                            {" – "}
                            {promo.tanggal_selesai
                              ? new Date(promo.tanggal_selesai).toLocaleDateString("id-ID", {
                                  day: "numeric",
                                  month: "long",
                                  year: "numeric",
                                })
                              : "Berlaku terus"}
                          </div>
                        )}

                        {/* CTA Button */}
                        <div
                          className="wow fadeInUp"
                          data-wow-delay=".4s"
                          style={{ textAlign: "center", marginTop: "30px" }}
                        >
                          <Link
                            href={getWhatsAppLink(
                              `Halo, saya tertarik dengan promo "${promo.title}"${promo.harga_promo ? " - " + promo.harga_promo : ""}`
                            )}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="tj-btn-primary"
                            style={{ background: "#25D366", fontSize: "18px", padding: "16px 40px" }}
                          >
                            <i className="fa-brands fa-whatsapp" />
                            <span>Pesan Sekarang via WhatsApp</span>
                          </Link>
                        </div>

                        {/* Navigation */}
                        <div className="tj-post__navigation mb-0 wow fadeInUp" data-wow-delay="0.3s">
                          <div
                            className="tj-nav__post previous"
                            style={{ visibility: prevPromo ? "visible" : "hidden" }}
                          >
                            <div className="tj-nav-post__nav prev_post">
                              <Link href={prevPromo ? `/promosi/${prevPromo.slug}/` : "#"}>
                                <span>
                                  <i className="tji-arrow-left" />
                                </span>
                                Previous
                              </Link>
                            </div>
                          </div>

                          <Link href={"/promosi/"} className="tj-nav-post__grid">
                            <i className="tji-window" />
                          </Link>

                          <div
                            className="tj-nav__post next"
                            style={{ visibility: nextPromo ? "visible" : "hidden" }}
                          >
                            <div className="tj-nav-post__nav next_post">
                              <Link href={nextPromo ? `/promosi/${nextPromo.slug}/` : "#"}>
                                Next
                                <span>
                                  <i className="tji-arrow-right" />
                                </span>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Sidebar */}
                  <div className="col-lg-4">
                    <aside className="tj-main-sidebar">
                      {/* Promosi Lainnya Widget */}
                      <div
                        className="tj-sidebar-widget service-categories wow fadeInUp"
                        data-wow-delay=".1s"
                      >
                        <h4 className="widget-title">Promosi Lainnya</h4>
                        <ul>
                          {allPromos?.slice(0, 6).map((item, idx) => {
                            const isActive = slug === item.slug;
                            return (
                              <li key={idx}>
                                <Link
                                  className={`${isActive ? "active" : ""}`}
                                  href={`/promosi/${item.slug}/`}
                                >
                                  {item.title}
                                  <span className="icon">
                                    <i className="tji-arrow-right"></i>
                                  </span>
                                </Link>
                              </li>
                            );
                          })}
                        </ul>
                      </div>

                      {/* Promo Info Widget */}
                      <div
                        className="tj-sidebar-widget widget-categories wow fadeInUp"
                        data-wow-delay=".2s"
                      >
                        <h4 className="widget-title">Info Promo</h4>
                        {promo.harga_promo && (
                          <div className="infos-item">
                            <div className="project-icons">
                              <i className="tji-budget" />
                            </div>
                            <div className="project-text">
                              <span>Harga Promo</span>
                              <h6 className="title">{promo.harga_promo}</h6>
                            </div>
                          </div>
                        )}
                        {promo.harga_asli && (
                          <div className="infos-item">
                            <div className="project-icons">
                              <i className="tji-budget" />
                            </div>
                            <div className="project-text">
                              <span>Harga Normal</span>
                              <h6 className="title" style={{ textDecoration: "line-through", opacity: 0.6 }}>
                                {promo.harga_asli}
                              </h6>
                            </div>
                          </div>
                        )}
                        {promo.diskon_persen && (
                          <div className="infos-item">
                            <div className="project-icons">
                              <i className="tji-tag" />
                            </div>
                            <div className="project-text">
                              <span>Diskon</span>
                              <h6 className="title">{promo.diskon_persen}%</h6>
                            </div>
                          </div>
                        )}
                        {(promo.tanggal_mulai || promo.tanggal_selesai) && (
                          <div className="infos-item">
                            <div className="project-icons">
                              <i className="tji-calendar" />
                            </div>
                            <div className="project-text">
                              <span>Berlaku</span>
                              <h6 className="title">
                                {promo.tanggal_mulai
                                  ? new Date(promo.tanggal_mulai).toLocaleDateString("id-ID", {
                                      day: "numeric",
                                      month: "short",
                                      year: "numeric",
                                    })
                                  : "Segera"}{" "}
                                {" – "}
                                {promo.tanggal_selesai
                                  ? new Date(promo.tanggal_selesai).toLocaleDateString("id-ID", {
                                      day: "numeric",
                                      month: "short",
                                      year: "numeric",
                                    })
                                  : "Terus"}
                              </h6>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* CTA Widget */}
                      <div
                        className="tj-sidebar-widget widget-feature-item wow fadeInUp"
                        data-wow-delay=".3s"
                        style={{
                          background: "linear-gradient(135deg, #224297 0%, #1a3567 100%)",
                          borderRadius: "16px",
                          padding: "30px",
                          color: "#fff",
                        }}
                      >
                        <h4 style={{ color: "#fff", marginBottom: "12px" }}>
                          Butuh Konsultasi?
                        </h4>
                        <p style={{ fontSize: "14px", opacity: 0.9, marginBottom: "20px" }}>
                          Tim kami siap membantu memilihkan promo yang tepat untuk kendaraan Anda.
                        </p>
                        <div className="d-flex flex-column gap-3">
                          <Link
                            href={getWhatsAppLink(`Halo, saya tertarik dengan promo "${promo.title}"`)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="tj-btn-primary text-center"
                            style={{ background: "#25D366" }}
                          >
                            <i className="fa-brands fa-whatsapp" />
                            <span>Chat WhatsApp</span>
                          </Link>
                          <Link href="/lokasi/" className="tj-btn-secondary text-center">
                            <i className="fa-solid fa-location-dot" />
                            <span>Kunjungi Bengkel</span>
                          </Link>
                        </div>
                      </div>
                    </aside>
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

export default PromoDetailPage;
