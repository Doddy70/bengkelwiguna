/**
 * Blog List - Bengkel Wiguna
 * Halaman daftar semua artikel blog — data dari WordPress REST API
 */

import Link from "next/link";
import Image from "next/image";
import Header from "@/components/layout/header/Header";
import Footer from "@/components/layout/footer/Footer";
import BackToTop from "@/components/shared/others/BackToTop";
import HeaderSpace from "@/components/shared/others/HeaderSpace";
import HeroInner from "@/components/sections/hero/HeroInner";
import {
  getAllPosts,
  getAllPostsFlat,
  getFeaturedImage,
  getFeaturedImageAlt,
  formatDate,
  stripHtml,
  getNavigationMenu,
} from "@/lib/wordpress";
import { getWhatsAppLink } from "@/lib/constants";

export const metadata = {
  title: "Edukasi & Tips Perawatan Mobil Agar Tetap Prima - Bengkel Wiguna",
  description:
    "Pelajari tips teknis dari mekanik ahli Bengkel Wiguna: Solusi Kaki-kaki mobil, Servis AC, Ganti Oli, dan perawatan rutin agar mobil Anda awet dan nyaman.",
  alternates: {
    canonical: "/blog/",
  },
  openGraph: {
    title: "Edukasi & Tips Perawatan Mobil - Bengkel Wiguna",
    description: "Panduan praktis menjaga performa mobil Anda tetap prima dan nyaman.",
    url: "/blog/",
    type: "website",
  },
};

// Generate static paths for SSG
export async function generateStaticParams() {
  const posts = await getAllPostsFlat();
  if (!posts || !Array.isArray(posts)) return [];
  return posts.slice(0, 100).map((p) => ({
    slug: p.slug,
  }));
}

import BlogsPrimary from "@/components/sections/blogs/BlogsPrimary";

const BlogPage = async () => {
  let posts = [];
  let errorMessage = null;
  const navItems = await getNavigationMenu("menu-1");

  try {
    const result = await getAllPosts(1, 12);
    if (result.posts && result.posts.length > 0) {
      posts = result.posts;
    } else {
      errorMessage = "Belum ada artikel yang dipublikasikan.";
    }
  } catch (error) {
    console.error("Blog fetch error:", error);
    errorMessage = "Tidak dapat mengambil data artikel. Silakan coba lagi nanti.";
  }

  const mappedPosts = posts.map(post => {
      const dateObj = new Date(post.date || new Date());
      return {
          id: post.ID || post.id,
          slug: post.slug || post.ID?.toString() || post.id?.toString(),
          img: getFeaturedImage(post) || "/images/blog/blog-1.webp",
          title: post.title?.rendered || post.title || "Tanpa Judul",
          desc: stripHtml(post.excerpt?.rendered || post.excerpt || ""),
          category: post._embedded?.["wp:term"]?.[0]?.[0]?.name || post.categories?.[0]?.name || "Artikel",
          day: dateObj.getDate(),
          month: dateObj.toLocaleString('id-ID', { month: 'short' }),
      };
  });

  return (
    <>
      <BackToTop />
      <Header navItems={navItems} />
      <Header isStickyHeader={true} navItems={navItems} />

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <HeaderSpace />
            <HeroInner title={"Edukasi & Tips"} text={"Blog"} />
            
            {errorMessage ? (
              <section className="tj-blog-section section-gap">
                <div className="container">
                  <div className="row">
                    <div className="col-12">
                      <div className="text-center py-5">
                        <div
                          style={{
                            background: "#f8f9fa",
                            borderRadius: "16px",
                            padding: "40px",
                            marginBottom: "30px",
                          }}
                        >
                          <i
                            className="fa-regular fa-newspaper"
                            style={{
                              fontSize: "48px",
                              color: "#ccc",
                              marginBottom: "16px",
                              display: "block",
                            }}
                          />
                          <p style={{ color: "#666", marginBottom: "20px" }}>{errorMessage}</p>
                          <Link
                            href={getWhatsAppLink("Halo, saya ingin info artikel terbaru dari Bengkel Wiguna")}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="tj-btn-primary"
                            style={{ background: "#25D366" }}
                          >
                            <i className="fa-brands fa-whatsapp" />
                            <span>Hubungi Kami</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            ) : (
              <BlogsPrimary filteredItems={mappedPosts} />
            )}

            {/* CTA */}
            <section className="tj-cta-section">
              <div className="container">
                <div className="cta-wrapper text-center">
                  <h2 className="cta-title">Punya Pertanyaan?</h2>
                  <p className="cta-desc">
                    Tim kami siap membantu dengan konsultasi gratis seputar
                    perawatan mobil.
                  </p>
                  <div className="cta-btn-group d-flex justify-content-center gap-3 flex-wrap">
                    <Link
                      href={getWhatsAppLink("Halo, saya punya pertanyaan tentang perawatan mobil")}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="tj-btn-primary"
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

export default BlogPage;