/**
 * Features - Bengkel Wiguna
 * Keunggulan dan layanan utama
 */

import FeatureCard from "@/components/shared/cards/FeatureCard";

const Features = ({ type }) => {
  const features = [
    {
      title: "One Stop Service",
      desc: "Semua kebutuhan mobil Anda dalam satu tempat - ban, oli, kaki-kaki, AC, aki, rem, dan spooring.",
      icon: "tji-innovative",
    },
    {
      title: "Mekanik Berpengalaman",
      desc: "Tim mekanik kami memiliki pengalaman lebih dari 15 tahun dalam menangani berbagai jenis kendaraan.",
      icon: "tji-award",
    },
    {
      title: "Harga Transparan",
      desc: "Tanpa biaya tersembunyi. Kami memberikan penawaran harga yang jelas sebelum pekerjaan dimulai.",
      icon: "tji-support",
    },
    {
      title: "Garansi Layanan",
      desc: "Setiap layanan kami berikan garansi. Kepuasan pelanggan adalah prioritas utama kami.",
      icon: "tji-quality",
    },
  ];

  return (
    <section id="features" className="tj-choose-section section-gap">
      <div className="container">
        <div className="row">
          <div className="col-12">
            {type == 2 ? (
              <div className="sec-heading-wrap">
                <span className="sub-title wow fadeInUp" data-wow-delay=".3s">
                  <i className="tji-box"></i>Kenapa Memilih Kami
                </span>
                <div className="heading-wrap-content">
                  <div className="sec-heading">
                    <h2 className="sec-title title-anim">
                      Keunggulan <span>Bengkel Wiguna</span>
                    </h2>
                  </div>
                </div>
              </div>
            ) : (
              <div className="sec-heading text-center">
                <span className="sub-title wow fadeInUp" data-wow-delay=".3s">
                  <i className="tji-box"></i>Kenapa Memilih Kami
                </span>
                <h2 className="sec-title title-anim">
                  Keunggulan <span>Bengkel Wiguna</span>
                </h2>
              </div>
            )}
          </div>
        </div>
        <div className="row row-gap-4 rightSwipeWrap">
          {features.map((feature, idx) => (
            <div key={idx} className="col-lg-3 col-md-6">
              <FeatureCard feature={feature} idx={idx} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Features;