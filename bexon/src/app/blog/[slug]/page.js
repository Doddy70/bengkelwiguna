/**
 * Blog Detail - Bengkel Wiguna
 * Individual blog post page with SSG
 */

import Link from 'next/link';
import Image from 'next/image';
import SafeHtml from "@/components/shared/SafeHtml";
import Header from '@/components/layout/header/Header';
import Footer from '@/components/layout/footer/Footer';
import BackToTop from '@/components/shared/others/BackToTop';
import HeroInner from '@/components/sections/hero/HeroInner';
import HeaderSpace from '@/components/shared/others/HeaderSpace';
import { 
  getAllPosts, 
  getAllPostsFlat, 
  getPostBySlug, 
  getFeaturedImage, 
  getFeaturedImageAlt, 
  formatDate, 
  stripHtml, 
  getNavigationMenu,
  getAllCategories,
  getPostsByCategory
} from '@/lib/wordpress';
import { getWhatsAppLink, SITE_URL } from '@/lib/constants';
import { extractRankMathSEO } from "@/lib/rank-math-seo";
import { generatePageMetadata, generateJSONLDScripts, generateCompleteSEO, generateBreadcrumbsFromPath } from "@/lib/seo-complete";

// Generate static params for all blog posts
export async function generateStaticParams() {
  try {
    const posts = await getAllPostsFlat();
    if (posts && posts.length > 0) {
      return posts.map((post) => ({
        slug: post.slug,
      }));
    }
  } catch (error) {
    console.log('Using sample params for blog');
  }

  // Fallback sample slugs
  return [
    { slug: 'tips-merawat-ban-mobil' },
    { slug: 'kapan-waktu-ideal-ganti-oli' },
    { slug: 'tanda-ac-mobil-perlu-service' },
  ];
}

// Generate metadata for each blog post
export async function generateMetadata({ params }) {
  const { slug } = await params;

  try {
    const post = await getPostBySlug(slug);
    if (post) {
      const seo = extractRankMathSEO(post);
      return generatePageMetadata({
        seo,
        pageType: 'post',
        slug: `blog/${slug}`,
        baseUrl: 'https://bengkelwiguna.com',
      });
    }
  } catch (error) {
    console.log('Error fetching post metadata');
  }

  return {
    title: 'Artikel Tidak Ditemukan | Bengkel Wiguna',
    description: 'Artikel yang Anda cari tidak ditemukan.',
  };
}

const BlogPost = async ({ params }) => {
  const { slug } = await params;
  let post = null;
  let wpCategories = [];
  let relatedPosts = [];
  let latestPosts = [];

  // Try to fetch from WordPress
  try {
    post = await getPostBySlug(slug);
    
    const [categoriesResult, latestResult] = await Promise.all([
        getAllCategories(),
        getAllPosts(1, 4)
    ]);
    
    wpCategories = categoriesResult || [];
    latestPosts = latestResult.posts || [];

    // Fetch related articles by category
    if (post && post.categories && post.categories.length > 0) {
        const relatedResult = await getPostsByCategory(post.categories[0], 1, 4);
        relatedPosts = (relatedResult.posts || []).filter(p => p.id !== post.id);
    }
  } catch (error) {
    console.log('Error fetching dynamic blog content:', error.message);
  }

  const navItems = await getNavigationMenu("menu-1");

  // Use WP content or fallback
  const content = post ? {
    title: post.title?.rendered || '',
    date: post.date,
    content: post.content?.rendered || '',
    image: getFeaturedImage(post),
    imageAlt: getFeaturedImageAlt(post),
  } : {
    title: 'Artikel Tidak Ditemukan',
    date: '2026-06-04T00:00:00.000Z',
    content: '<p>Artikel yang Anda cari tidak tersedia.</p>',
    image: '/images/blog/default.jpg',
  };

  const breadcrumbs = generateBreadcrumbsFromPath(`blog/${slug}`, 'https://bengkelwiguna.com');
  const seo = post ? extractRankMathSEO(post) : null;
  const seoData = seo ? generateCompleteSEO({
    seo,
    pageType: 'post',
    slug: `blog/${slug}`,
    baseUrl: 'https://bengkelwiguna.com',
    breadcrumbs,
  }) : null;

  return (
    <>
      {/* JSON-LD Structured Data */}
      {seoData && generateJSONLDScripts(seoData.schemas).map((script, idx) => (
        <script
          key={idx}
          type="application/ld+json"
          dangerouslySetInnerHTML={script.props.dangerouslySetInnerHTML}
        />
      ))}

      <BackToTop />
      <Header navItems={navItems} />
      <Header isStickyHeader={true} navItems={navItems} />

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <HeaderSpace />
            {/* Page Header */}
            <HeroInner
              title={content.title}
              text={"Detail Artikel"}
              breadcrums={[{ name: "Blog", path: "/blog/" }]}
            />

            {/* Article */}
            <section className="tj-article-section section-gap">
              <div className="container">
                <div className="row row-gap-5">
                  {/* Main Content - 8 columns */}
                  <div className="col-lg-8">
                    <div className="post-details-wrapper">
                      {/* Featured Image */}
                      {content.image && (
                        <div className="blog-images mb-4 overflow-hidden rounded-xl shadow-lg">
                          <Image
                            src={content.image}
                            alt={content.imageAlt || content.title}
                            width={1200}
                            height={600}
                            className="img-fluid"
                            priority
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 65vw, 1200px"
                            style={{ width: '100%', height: 'auto', objectFit: 'cover', aspectRatio: '21/9' }}
                          />
                        </div>
                      )}

                      {/* Meta */}
                      <div className="blog-meta mb-4 d-flex align-items-center gap-4">
                        <span className="post-date d-flex align-items-center gap-2" style={{ fontSize: '14px', fontWeight: '600', color: '#67787a' }}>
                          <i className="fa-solid fa-calendar" style={{ color: '#ffd900' }}></i>
                          {formatDate(content.date)}
                        </span>
                        <span className="post-author d-flex align-items-center gap-2" style={{ fontSize: '14px', fontWeight: '600', color: '#67787a' }}>
                          <i className="fa-solid fa-user" style={{ color: '#ffd900' }}></i>
                          Bengkel Wiguna
                        </span>
                      </div>

                      {/* Content */}
                      <div className="blog-text">
                        <h1 className="title title-anim mb-4" style={{ fontSize: '2.5rem', fontWeight: '800', lineHeight: '1.2', color: '#1a3567' }}>
                          {content.title}
                        </h1>
                        <SafeHtml html={content.content} className="wp-content-rendered prose lg:prose-xl" />
                      </div>

                      {/* Share */}
                      <div className="tj-tags-post mt-5 pt-4 border-top">
                        <div className="post-share">
                          <ul className="d-flex align-items-center gap-3 list-style-none p-0">
                            <li className="fw-bold text-dark">Bagikan Artikel:</li>
                            <li>
                              <Link
                                href={`https://wa.me/?text=${encodeURIComponent(content.title + ' ' + SITE_URL + '/blog/' + slug + '/')}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="tj-btn-secondary"
                                style={{ background: '#25D366', color: '#fff', borderColor: '#25D366', padding: '10px 24px', borderRadius: '50px', fontWeight: '700' }}
                              >
                                <i className="fa-brands fa-whatsapp me-2"></i> WhatsApp
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Sidebar - 4 columns */}
                  <div className="col-lg-4">
                    <aside className="tj-main-sidebar sticky-top" style={{ top: '100px' }}>
                      {/* Search Widget */}
                      <div className="tj-sidebar-widget widget-search">
                        <h4 className="widget-title">Pencarian</h4>
                        <div className="search-box">
                          <form action="/blog">
                            <input
                              type="search"
                              placeholder="Cari artikel..."
                              name="s"
                            />
                            <button type="submit">
                              <i className="fa-solid fa-search"></i>
                            </button>
                          </form>
                        </div>
                      </div>

                      {/* Categories Widget */}
                      {wpCategories.length > 0 && (
                        <div className="tj-sidebar-widget widget-categories">
                          <h4 className="widget-title">Kategori Artikel</h4>
                          <ul>
                            {wpCategories.map((cat) => (
                              <li key={cat.id}>
                                <Link href={`/blog?category=${cat.id}`}>
                                  {cat.name}
                                  <span>({cat.count})</span>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Related Posts Widget */}
                      <div className="tj-sidebar-widget tj-recent-posts">
                        <h4 className="widget-title">
                          {relatedPosts.length > 0 ? "Artikel Terkait" : "Artikel Terbaru"}
                        </h4>
                        <ul>
                          {(relatedPosts.length > 0 ? relatedPosts : latestPosts).slice(0, 3).map((item, idx) => {
                            const title = item.title?.rendered || item.title;
                            const imageSrc = getFeaturedImage(item) || "/images/blog/default.jpg";
                            const dateStr = item.date || new Date().toISOString();

                            return (
                              <li key={item.id || idx}>
                                <div className="post-thumb rounded overflow-hidden">
                                  <Link href={`/blog/${item.slug}/`}>
                                    <Image
                                      src={imageSrc}
                                      alt={title}
                                      width={100}
                                      height={100}
                                      sizes="100px"
                                      style={{ objectFit: 'cover', height: '80px', width: '80px' }}
                                    />
                                  </Link>
                                </div>
                                <div className="post-content">
                                  <h5 className="post-title" style={{ fontSize: '15px', fontWeight: '700', lineHeight: '1.4' }}>
                                    <Link href={`/blog/${item.slug}/`}>
                                      {title}
                                    </Link>
                                  </h5>
                                  <div className="blog-meta">
                                    <ul>
                                      <li style={{ fontSize: '12px' }}>{formatDate(dateStr)}</li>
                                    </ul>
                                  </div>
                                </div>
                              </li>
                            );
                          })}
                        </ul>
                      </div>

                      {/* PROMO BANNER WIDGET */}
                      <div className="tj-sidebar-widget p-0 overflow-hidden rounded-xl border-0 shadow-lg">
                        <div style={{
                            background: "linear-gradient(rgba(34, 66, 151, 0.85), rgba(26, 53, 103, 0.95)), url('https://backend.bengkelwiguna.com/wp-content/uploads/2025/12/mesin-mobil-lemot.jpg')",
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            padding: '40px 30px',
                            color: '#fff',
                            minHeight: '350px',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            textAlign: 'center'
                        }}>
                           <div style={{ width: '60px', height: '4px', backgroundColor: '#ffd900', margin: '0 auto 25px' }}></div>
                           <h3 style={{ color: '#fff', fontSize: '24px', fontWeight: '900', fontStyle: 'italic', textTransform: 'uppercase', marginBottom: '15px', lineHeight: '1.1' }}>
                             Promo Servis <br/><span style={{ color: '#ffd900' }}>Bulan Ini</span>
                           </h3>
                           <p style={{ fontSize: '15px', opacity: 0.9, marginBottom: '30px', fontWeight: '500' }}>
                             Dapatkan diskon khusus hingga 20% untuk paket Tune Up & Ganti Oli Mesin.
                           </p>
                           <Link
                             href={getWhatsAppLink()}
                             target="_blank"
                             rel="noopener noreferrer"
                             className="tj-btn-primary"
                             style={{ 
                                background: "#ffd900", 
                                color: "#1a3567",
                                fontWeight: '800',
                                textTransform: 'uppercase',
                                letterSpacing: '1px',
                                border: 'none',
                                borderRadius: '12px'
                             }}
                           >
                             Ambil Promo
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

export default BlogPost;
