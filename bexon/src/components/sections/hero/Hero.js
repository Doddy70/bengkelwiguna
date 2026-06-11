/**
 * Hero - Bengkel Wiguna
 * Homepage hero section
 */

import Image from 'next/image';
import Link from 'next/link';
import { getWhatsAppLink, WA_NUMBER } from '@/lib/constants';

const Hero = () => {
  return (
    <section className="tj-banner-section section-gap-x">
      <div className="banner-area">
        <div className="banner-left-box">
          <div className="banner-content">
            <span className="sub-title wow fadeInDown" data-wow-delay=".2s">
              <i className="tji-excellence"></i> Bengkel Mobil Terpercaya di Depok
            </span>
            <h1 className="banner-title title-anim">
              Solusi Lengkap untuk <span>Perawatan Mobil</span> Anda
            </h1>
            <div className="banner-desc-area wow fadeInUp" data-wow-delay=".7s">
              <p className="banner-desc">
                Dari penggantian ban hingga service AC, kami hadir dengan layanan profesional
                dan berpengalaman untuk menjaga performa kendaraan Anda.
              </p>
              <div className="banner-btn-group d-flex gap-3 flex-wrap">
                <Link href="/services/" className="tj-btn-primary">
                  <span>Layanan Kami</span>
                  <span className="icon">
                    <i className="tji-arrow-right"></i>
                  </span>
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
          <div className="banner-shape" aria-hidden="true">
            <Image
              src="/images/shape/pattern-bg.webp"
              alt=""
              width={600}
              height={600}
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
        </div>
        <div className="banner-right-box">
          <div className="banner-img">
            <Image
              data-speed="0.8"
              src="/images/hero/hero-bengkel.webp"
              alt="Bengkel Wiguna - Servis Mobil Profesional"
              width={945}
              height={793}
              priority
              fetchPriority="high"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 945px"
            />
          </div>
          <div className="box-area">
            <div className="customers-box">
              <div className="customers">
                <div className="stat-item">
                  <span className="stat-number">15+</span>
                  <span className="stat-label">Tahun Pengalaman</span>
                </div>
              </div>
              <h6 className="customers-text wow fadeInUp" data-wow-delay=".5s">
                Melayani ribuan kendaraan pelanggan setia
              </h6>
            </div>
          </div>
        </div>
      </div>
      <div className="banner-scroll wow fadeInDown" data-wow-delay="2s">
        <button data-target="#features" className="scroll-down tj-scroll-btn">
          <span>
            <i className="tji-arrow-down-long"></i>
          </span>
          Scroll Down
        </button>
      </div>
    </section>
  );
};

export default Hero;