/**
 * Homepage — Bengkel Wiguna
 * High Fidelity Cloning matching the requested sequence.
 * Performance Benchmarks: LCP < 2.5s, Lazy Loading, Caching
 */

import dynamic from 'next/dynamic'
import Image from 'next/image'
import Link from 'next/link'
import {
  getAllServices,
  getAllPromosi,
  getHomepageSettings,
  getAllPosts,
  getPageBySlug,
  getHomepageFaqs,
  getNavigationMenu,
  getAllLayananSpesialis,
  stripHtml,
  formatDate
} from '@/lib/wordpress'
import { extractRankMathSEO, generateMetadataFromSEO } from '@/lib/rank-math'
import { Promosi } from '@/types/wordpress'

// 1. CRITICAL: Hero Section & Header (Above-the-fold)
import HeroSlideshow from '@/components/heroui/hero-slideshow'
import Header from '@/components/layout/Header'
import JsonLd from '@/components/layout/JsonLd'
import { generateLocalBusinessSchema, generateWebsiteSchema, generateFAQSchema, generateAggregateRatingSchema, generateOrganizationSchema, generateVideoCollectionSchema } from '@/lib/seo'
import { defaultFaqs } from '@/const/faqData'

// 2. OPTIMIZED: Lazy Loading components below-the-fold
const GoogleReviews = dynamic(() => import('@/components/sections/GoogleReviews'))
const YoutubeEducation = dynamic(() => import('@/components/sections/YoutubeEducation'))
const SpesialisSlider = dynamic(() => import('@/components/heroui/spesialis-slider'))
const BentoPromoSection = dynamic(() => import('@/components/heroui/bento-promo-section'))
const FooterModern = dynamic(() => import('@/components/heroui/footer-modern'))
const PageTitle3 = dynamic(() => import('@/components/ui/PageTitle3'))
const Button = dynamic(() => import('@/components/ui/Button'))
const BlogCardOne = dynamic(() => import('@/components/ui/BlogCardOne'))
const ModernEquipmentV3 = dynamic(() => import('@/components/heroui/ModernEquipmentV3'))

// 3. SEO OPTIMIZATION: Trust Signals & FAQ
import PartnerLogos from '@/components/sections/PartnerLogos'
import FaqSectionHomepage from '@/components/layout/FaqSectionHomepage'

export const revalidate = 60 // 60 seconds SSR Cache

export async function generateMetadata() {
  try {
    const pageData = await getPageBySlug('home')
    if (!pageData) {
      return {
        title: 'Bengkel Mobil Depok Terpercaya - Bengkel Wiguna',
        description: 'Bengkel One Stop Service terpercaya di Depok sejak 1990. Mengedepankan kejujuran dan pelayanan maksimal. Perawatan mobil profesional dengan teknisi berpengalaman.',
      }
    }

    const seo = extractRankMathSEO(pageData)
    const metadata = generateMetadataFromSEO(seo)
    
    if (process.env.NODE_ENV === 'development') {
        console.log('[Metadata] Original SEO Title:', seo.title);
        console.log('[Metadata] Original SEO Description:', seo.description);
    }

    // Ensure title and description are high quality even if WordPress returns generic data
    const titleStr = typeof metadata.title === 'string' ? metadata.title : '';
    if (titleStr.toLowerCase().includes('home') || !titleStr || titleStr.length < 10) {
        metadata.title = 'Bengkel Mobil Depok Terpercaya - Bengkel Wiguna'
    }
    
    if (metadata.description && (metadata.description.includes('<p>') || metadata.description.length < 20)) {
        metadata.description = 'Bengkel One Stop Service terpercaya di Depok sejak 1990. Mengedepankan kejujuran dan pelayanan maksimal. Perawatan mobil profesional dengan teknisi berpengalaman.'
    }

    return metadata
  } catch (error) {
    return {
      title: 'Bengkel Mobil Depok Terpercaya - Bengkel Wiguna',
      description: 'Bengkel One Stop Service terpercaya di Depok sejak 1990. Mengedepankan kejujuran dan pelayanan maksimal. Perawatan mobil profesional dengan teknisi berpengalaman.',
    }
  }
}

export default async function HomePage() {
  // Parallel Fetching
  const [services, allPromosi, blogResult, dynamicFaqs, menuData, spesialis, hpSettings] = await Promise.all([
    getAllServices(),
    getAllPromosi(),
    getAllPosts(1, 3), // Fetch 3 latest posts
    getHomepageFaqs(),
    getNavigationMenu('main-menu'),
    getAllLayananSpesialis(),
    getHomepageSettings()
  ])

  const showPromoBulanan = hpSettings?.show_promo_bulanan !== false;
  const promoBulananSlugs = hpSettings?.promo_bulanan || [];
  const servicesList = Array.isArray(services) ? services : []
  
  let promosiBulananList: Promosi[] = [];
  let promosiRegularList: Promosi[] = [];

  const customOrder = [
    "paket oli mesin komplit",
    "paket ijig",
    "paket ajag",
    "reset ac mobil",
    "promo kyoto",
    "promo detoks mesin",
    "paket siaga 1",
    "paket siaga 2",
    "paket siaga 3"
  ];

  const sortedAllPromosi = Array.isArray(allPromosi) ? [...allPromosi] : [];
  sortedAllPromosi.sort((a, b) => {
    const getTitle = (t: any) => typeof t === "string" ? t : t?.rendered || "";
    const titleA = getTitle(a.title).toLowerCase().trim();
    const titleB = getTitle(b.title).toLowerCase().trim();
    
    let indexA = customOrder.findIndex(item => titleA.includes(item));
    let indexB = customOrder.findIndex(item => titleB.includes(item));

    if (indexA === -1) indexA = 999;
    if (indexB === -1) indexB = 999;

    return indexA - indexB;
  });

  // Always separate lists based on selected promo bulanan slugs to keep regular grid clean
  promosiBulananList = sortedAllPromosi.filter(p => promoBulananSlugs.includes(p.slug));
  promosiRegularList = sortedAllPromosi.filter(p => !promoBulananSlugs.includes(p.slug));
  
  // Apply fallback only if showPromoBulanan is enabled and no specific items are checked
  if (showPromoBulanan && promosiBulananList.length === 0 && sortedAllPromosi.length > 0) {
    promosiBulananList = sortedAllPromosi.slice(0, 6);
    promosiRegularList = sortedAllPromosi.slice(6);
  }

  const postsList = blogResult?.posts || []
  const menuItems = menuData?.items || []
  const spesialisData = Array.isArray(spesialis) ? spesialis : []

  if (process.env.NODE_ENV === 'development') {
    console.log('[HomePage] Data loaded:', {
        servicesCount: servicesList.length,
        promosiBulananCount: promosiBulananList.length,
        promosiRegularCount: promosiRegularList.length,
        postsCount: postsList.length,
        faqsCount: dynamicFaqs?.length || 0,
        menuItems: menuItems.length,
        spesialisCount: spesialisData.length
    })
  }

  // Reconcile FAQ format (WP: {q, a} vs UI: {question, answer})
  const faqItems = (dynamicFaqs && Array.isArray(dynamicFaqs) && dynamicFaqs.length > 0) 
    ? dynamicFaqs.map(f => ({ question: f.q, answer: f.a }))
    : defaultFaqs;

  return (
    <div className="homepage-final-sequence overflow-x-hidden relative bg-white">
      <JsonLd data={generateWebsiteSchema()} />
      <JsonLd data={generateLocalBusinessSchema()} />
      <JsonLd data={generateOrganizationSchema()} />
      <JsonLd data={generateFAQSchema(faqItems.map(f => ({ q: f.question, a: f.answer })))} />
      <JsonLd data={generateAggregateRatingSchema()} />
      <JsonLd data={generateVideoCollectionSchema()} />
      
      {/* HOMEPAGE HEADER (Hidden on Top, Appears on Scroll) */}
      <Header
        position="fixed"
        bgColor="bg-white/70 backdrop-blur-xl border-b border-white/30 shadow-lg"
        theme="header-light"
        menuItems={menuItems}
        spesialisData={spesialisData}
        servicesData={servicesList}
        hideOnTop={true}
      />

      {/* SECTION 1: HERO (Liquid Glass Slideshow) */}
      <section id="hero" className="relative w-full">
         <HeroSlideshow />
      </section>

      {/* PARTNER LOGOS */}
      <PartnerLogos />

      {/* SECTION 2: PROMOSI - Bento Grid Layout */}
      {(promosiBulananList.length > 0 || promosiRegularList.length > 0) ? (
        <BentoPromoSection
          promos={promosiRegularList}
          promoBulanan={promosiBulananList}
          showPromoBulanan={showPromoBulanan}
        />
      ) : null}

      {/* SECTION: Interactive Hotspot Diagnostic — ModernEquipmentV3 */}
      <section id="why-wiguna" className="bg-slate-50 w-full">
          <ModernEquipmentV3 />
      </section>

      {/* SECTION 3: LAYANAN (SpesialisSlider Carousel) */}
      <section id="layanan" className="lg:py-24 py-12 bg-white overflow-hidden border-t border-gray-100">
        <div className="max-w-screen-xl mx-auto boxed-layout-gap">
          <div className="flex flex-wrap justify-between pb-8 gap-y-4">
            <PageTitle3
              badgeText="🔧 LAYANAN UNGGULAN"
              title="Solusi Lengkap untuk Kendaraan Anda"
              subtitle="Diagnosa akurat, transparan, and tanpa drama. Tim teknisi berpengalaman siap membantu."
              widthClass="w-full xl:w-6/12 lg:w-7/12"
              alignment="start"
              padding="pb-0"
            />
            <div className="lg:text-right mt-auto">
              <Button href="/services" label="Semua Layanan" intent="primary" />
            </div>
          </div>
          <SpesialisSlider items={servicesList} />
        </div>
      </section>

      {/* SECTION 4: GOOGLE REVIEWS */}
      <GoogleReviews />

      {/* SECTION 5: YOUTUBE VIDEO GALLERY */}
      <YoutubeEducation />

      {/* SECTION 6: ARTIKEL (Blog Posts) */}
      <section id="artikel" className="lg:py-24 py-12 bg-gray-50 border-t border-gray-100">
        <div className="max-w-screen-xl mx-auto boxed-layout-gap">
            <div className="text-center mb-16">
                <PageTitle3
                    badgeText="📚 TIPS OTOMOTIF"
                    title="Edukasi Perawatan Mobil"
                    subtitle="Tips dari teknisi berpengalaman untuk menjaga performa kendaraan Anda"
                    widthClass="w-full"
                    alignment="center"
                    padding="pb-0"
                />
            </div>

            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
                {postsList.map((post: any, index: number) => (
                    <BlogCardOne 
                        key={post.id}
                        index={index}
                        post={{
                            slug: `blog/${post.slug}`,
                            image: post._embedded?.['wp:featuredmedia']?.[0]?.source_url || "/images/service/service-oli.svg",
                            title: typeof post.title === 'string' ? post.title : post.title?.rendered,
                            date: formatDate(post.date),
                            readTime: "5 min read",
                            excerpt: stripHtml(typeof post.excerpt === 'string' ? post.excerpt : post.excerpt?.rendered).slice(0, 120) + "...",
                            author: "Bengkel Wiguna",
                            authorAvatar: "/images/logo/wb-logo.png",
                            authorPosition: "Editorial Team"
                        }}
                    />
                ))}
            </div>

            <div className="text-center mt-16">
                <Link 
                    href="/blog" 
                    className="inline-flex items-center gap-3 text-brand-blue font-black uppercase tracking-widest hover:gap-5 transition-all"
                >
                    Lihat Blog Selengkapnya <span className="text-2xl">→</span>
                </Link>
            </div>
        </div>
      </section>

      {/* SECTION 7: FAQ (GEO Optimization) */}
      <FaqSectionHomepage items={faqItems} />

      {/* CTA FINAL - Full Width Dark */}
      <section className="relative w-full overflow-hidden">
        <div className="relative min-h-[500px] lg:min-h-[600px] bg-gray-900">
          <Image
            src="/images/about/Bengkel Bergaransi.jpg"
            alt="Bengkel Wiguna CTA"
            fill
            className="object-cover object-center opacity-30"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-gray-900/60" />

          <div className="relative z-10 h-full flex items-center justify-center py-20 lg:py-24 px-6">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
                Perawatan Mobil Anda Selanjutnya Lebih Dekat Dari Yang Anda Kira
              </h2>
              <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto">
                Jangan tunda kenyamanan dan keamanan berkendara Anda. Tim ahli Bengkel Wiguna siap memberikan solusi terbaik.
              </p>
              <a
                href="https://wa.me/6287817773888?text=Halo%20Bengkel%20Wiguna,%20saya%20ingin%20konsultasi%20servis%20mobil.%20(web)"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#224297] hover:bg-[#1a356e] text-white rounded-full font-bold transition-all shadow-xl shadow-blue-900/30"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Hubungi Tim Kami via WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <FooterModern />
    </div>
  )
}
