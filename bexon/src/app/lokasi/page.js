/**
 * Lokasi - Bengkel Wiguna
 * Halaman lokasi dan kontak Bengkel Wiguna di Depok
 */

import Link from "next/link";
import Header from "@/components/layout/header/Header";
import Footer from "@/components/layout/footer/Footer";
import HeroInner from "@/components/sections/hero/HeroInner";
import BackToTop from "@/components/shared/others/BackToTop";
import HeaderSpace from "@/components/shared/others/HeaderSpace";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";
import { BUSINESS_INFO, getWhatsAppLink, WA_NUMBER } from "@/lib/constants";

export const metadata = {
  title: "Lokasi Bengkel Wiguna - Maps & Kontak",
  description:
    "Temukan lokasi Bengkel Wiguna di Depok. Hubungi kami di 0878-1777-3888 atau chat via WhatsApp untuk reservasi.",
  alternates: {
    canonical: "/lokasi/",
  },
  openGraph: {
    title: "Lokasi Bengkel Wiguna",
    description: "Temukan lokasi Bengkel Wiguna di Depok.",
    url: "/lokasi/",
    type: "website",
  },
};

const Lokasi = () => {
  return (
    <>
      <BackToTop />
      <Header headerType={5} isStickyHeader={true} />

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            
            {/* Page Header - Judul Halaman */}
            <HeroInner title={"Hubungi Kami"} text={"Lokasi & Kontak"} />

            {/* Info Kontak Bengkel Wiguna */}
            <div className="tj-contact-area section-gap">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="sec-heading text-center">
                      <span className="sub-title wow fadeInUp" data-wow-delay=".1s">
                        <i className="tji-box"></i>Info Kontak
                      </span>
                      <h2 className="sec-title title-anim">
                        <span>Hubungi</span> Kami
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="row row-gap-4">
                  {/* Location */}
                  <div className="col-xl-3 col-lg-6 col-sm-6">
                    <div className="contact-item style-2 wow fadeInUp" data-wow-delay=".3s">
                      <div className="contact-icon">
                        <i className="tji-location-3"></i>
                      </div>
                      <h3 className="contact-title">Lokasi Kami</h3>
                      <p>
                        {BUSINESS_INFO.address.locality}, {BUSINESS_INFO.address.region}, Indonesia
                      </p>
                    </div>
                  </div>

                  {/* WhatsApp */}
                  <div className="col-xl-3 col-lg-6 col-sm-6">
                    <div className="contact-item style-2 wow fadeInUp" data-wow-delay=".5s">
                      <div className="contact-icon" style={{ color: "#25D366" }}>
                        <i className="fa-brands fa-whatsapp"></i>
                      </div>
                      <h3 className="contact-title">WhatsApp</h3>
                      <ul className="contact-list">
                        <li>
                          <Link href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer">
                            +62 878-1777-3888
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Call Phone */}
                  <div className="col-xl-3 col-lg-6 col-sm-6">
                    <div className="contact-item style-2 wow fadeInUp" data-wow-delay=".7s">
                      <div className="contact-icon">
                        <i className="tji-phone"></i>
                      </div>
                      <h3 className="contact-title">Telepon</h3>
                      <ul className="contact-list">
                        <li>
                          <Link href={`tel:${WA_NUMBER}`}>+62 878-1777-3888</Link>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="col-xl-3 col-lg-6 col-sm-6">
                    <div className="contact-item style-2 wow fadeInUp" data-wow-delay=".9s">
                      <div className="contact-icon">
                        <i className="fa-regular fa-clock"></i>
                      </div>
                      <h3 className="contact-title">Jam Operasional</h3>
                      <ul className="contact-list">
                        <li>Senin - Sabtu: 08:00 - 17:00</li>
                        <li style={{ color: "#dc3545" }}>Minggu: Tutup</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Kontak & Peta Lokasi */}
            <section className="tj-contact-section-2 section-bottom-gap">
              <div className="container">
                <div className="row g-5">
                  {/* Form Left Side */}
                  <div className="col-lg-6">
                    <div className="contact-form wow fadeInUp" data-wow-delay=".1s" style={{ background: "#f8f9fa", padding: "40px", borderRadius: "16px" }}>
                      <h3 className="title" style={{ fontSize: "24px", fontWeight: "700", marginBottom: "20px" }}>
                        Kirim Pesan / Konsultasi Gratis
                      </h3>
                      <form id="contact-form">
                        <div className="row g-3">
                          <div className="col-sm-6">
                            <div className="form-input">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Nama Lengkap*"
                                style={{ background: "#fff", padding: "12px 20px" }}
                                required
                              />
                            </div>
                          </div>
                          <div className="col-sm-6">
                            <div className="form-input">
                              <input
                                type="tel"
                                className="form-control"
                                placeholder="Nomor WhatsApp*"
                                style={{ background: "#fff", padding: "12px 20px" }}
                                required
                              />
                            </div>
                          </div>
                          <div className="col-sm-12">
                            <div className="form-input">
                              <input
                                type="email"
                                className="form-control"
                                placeholder="Email Address"
                                style={{ background: "#fff", padding: "12px 20px" }}
                              />
                            </div>
                          </div>
                          <div className="col-sm-12">
                            <div className="form-input">
                              <select className="form-control" style={{ background: "#fff", padding: "12px 20px" }}>
                                <option value="">Pilih Layanan</option>
                                <option value="penggantian-ban">Penggantian Ban</option>
                                <option value="penggantian-oli">Penggantian Oli</option>
                                <option value="kaki-kaki-mobil">Kaki-Kaki Mobil</option>
                                <option value="service-ac">Service AC</option>
                                <option value="aki-kelistrikan">Aki & Kelistrikan</option>
                                <option value="servis-rem">Servis Rem</option>
                                <option value="spooring-balancing">Spooring & Balancing</option>
                                <option value="lainnya">Lainnya</option>
                              </select>
                            </div>
                          </div>
                          <div className="col-sm-12">
                            <div className="form-input message-input">
                              <textarea
                                className="form-control"
                                id="message"
                                placeholder="Pesan Anda..."
                                rows="5"
                                style={{ background: "#fff", padding: "12px 20px" }}
                              ></textarea>
                            </div>
                          </div>
                          <div className="submit-btn col-sm-12 mt-3">
                            <button 
                              type="submit" 
                              className="tj-btn-primary w-100 text-center py-3"
                              style={{ background: "#224297", color: "#fff", border: "none", borderRadius: "8px", fontWeight: "600" }}
                            >
                              Kirim Pesan <i className="fa-solid fa-paper-plane ms-2"></i>
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>

                  {/* Depok Map Right Side */}
                  <div className="col-lg-6">
                    <div className="map-area wow fadeInUp" data-wow-delay=".3s" style={{ height: "100%" }}>
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.3!2d106.7942!3d-6.4025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMjQnMDguNSJTIDEwNsKwNDcnMzguNCJF!5e0!3m2!1sen!2sid!4v1234567890"
                        width="100%"
                        height="100%"
                        style={{ border: 0, borderRadius: "16px", minHeight: "450px" }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Lokasi Bengkel Wiguna"
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </main>

          <Footer />
        </div>
      </div>
      
      <ClientWrapper />
    </>
  );
};

export default Lokasi;