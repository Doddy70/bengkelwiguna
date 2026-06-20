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
import { generateLocalBusinessSchema, generateWebsiteSchema, generateFAQSchema, generateAggregateRatingSchema, generateOrganizationSchema } from '@/lib/seo'
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
const ModernEquipmentShowcase = dynamic(() => import('@/components/heroui/modern-equipment'))

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

  // Always separate lists based on selected promo bulanan slugs to keep regular grid clean
  promosiBulananList = Array.isArray(allPromosi) ? allPromosi.filter(p => promoBulananSlugs.includes(p.slug)) : [];
  promosiRegularList = Array.isArray(allPromosi) ? allPromosi.filter(p => !promoBulananSlugs.includes(p.slug)) : [];
  
  // Apply fallback only if showPromoBulanan is enabled and no specific items are checked
  if (showPromoBulanan && promosiBulananList.length === 0 && Array.isArray(allPromosi) && allPromosi.length > 0) {
    promosiBulananList = allPromosi.slice(0, 6);
    promosiRegularList = allPromosi.slice(6);
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

      {/* SECTION: TABS (No Drama Service Process) - Full Width with Boxed Inner */}
      <section id="why-wiguna" className="bg-white w-full hidden lg:block">
          <ModernEquipmentShowcase />
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

      {/* CTA FINAL */}
      <section className="relative py-20 md:py-28 w-full overflow-hidden flex items-center">
        {/* Background Image & Gradient */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/uber-hero.jpg"
            alt="Bengkel Wiguna One Stop Service"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#224297]/95 via-gray-900/95 to-gray-900/90" />
        </div>

        {/* Content Layer */}
        <div className="relative z-10 max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
            
            {/* Left: Text Content */}
            <div className="flex-1 max-w-2xl">
              {/* Badge */}
              <span className="inline-flex items-center gap-1.5 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full text-xs font-black uppercase tracking-wider mb-6 shadow-lg">
                <svg className="w-4 h-4 text-[#ffd900]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
                ONE STOP SERVICE DEPOK SEJAK 1990
              </span>

              {/* Headline */}
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-[1.1] tracking-tight uppercase mb-6">
                BENGKEL ONE STOP <br className="hidden sm:block" />
                <span className="text-[#ffd900]">SERVICE TERPERCAYA</span> <br className="hidden sm:block" />
                DI DEPOK
              </h2>

              {/* Subtitle */}
              <p className="text-white/90 text-base md:text-lg leading-relaxed font-medium mb-10 max-w-lg">
                Lebih dari 3 dekade melayani warga Depok sebagai bengkel pilihan yang terpercaya. Kami mengedepankan transparansi harga, analisa jujur, dan solusi tuntas tanpa drama untuk setiap masalah mobil Anda.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://wa.me/6287817773888?text=Halo%20Bengkel%20Wiguna,%20saya%20ingin%20konsultasi%20servis%20mobil.%20(web)"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-source="homepage-cta"
                  className="px-8 py-4 rounded-full bg-[#ffd900] hover:bg-yellow-400 text-[#224297] font-black text-sm md:text-base shadow-lg hover:shadow-yellow-500/30 hover:-translate-y-0.5 transition-all inline-flex items-center gap-2 group"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  <span>KONSULTASI via WhatsApp</span>
                  <svg className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </a>
                <a
                  href="https://maps.app.goo.gl/J3s5ZhpwFttGFeeUA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 text-white border border-white/30 font-bold text-sm md:text-base transition-all inline-flex items-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>Cek Lokasi Kami</span>
                </a>
              </div>
            </div>

            {/* Right: Floating Video Thumbnail Card with Liquid Glass */}
            <div className="w-full sm:w-[320px] lg:w-[400px] shrink-0">
              <a
                href="https://www.youtube.com/watch?v=vYTMOXTkpFk"
                target="_blank"
                rel="noopener noreferrer"
                className="block relative p-2 md:p-3 rounded-[2rem] bg-white/10 backdrop-blur-xl border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.3)] group overflow-hidden"
              >
                <div className="relative aspect-[16/10] rounded-[1.5rem] overflow-hidden">
                  <Image
                    src="/images/cta-video-thumbnail.png"
                    alt="Bengkel Wiguna One Stop Service Depok"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 400px"
                  />
                  {/* Glass Overlay on Image */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#224297]/60 to-transparent mix-blend-overlay"></div>

                  {/* Play Button */}
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-500 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md border border-white/50 flex items-center justify-center shadow-2xl transition-all duration-300 transform group-hover:scale-110">
                      <svg className="w-6 h-6 text-white translate-x-0.5 drop-shadow-md" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </a>
            </div>

          </div>
        </div>
      </section>

      <FooterModern />
    </div>
  )
}
