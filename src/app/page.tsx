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
        description: 'Bengkel One Stop Service terpercaya di Depok sejak 2010. Perawatan mobil profesional dengan teknisi berpengalaman. Booking sekarang & hemat hingga 20%!',
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
        metadata.description = 'Bengkel One Stop Service terpercaya di Depok sejak 2010. Perawatan mobil profesional dengan teknisi berpengalaman. Booking sekarang & hemat hingga 20%!'
    }

    return metadata
  } catch (error) {
    return {
      title: 'Bengkel Mobil Depok Terpercaya - Bengkel Wiguna',
      description: 'Bengkel One Stop Service terpercaya di Depok sejak 2010. Perawatan mobil profesional dengan teknisi berpengalaman.',
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

  const promoBulananSlugs = hpSettings?.promo_bulanan || [];
  const servicesList = Array.isArray(services) ? services : []
  let promosiBulananList = Array.isArray(allPromosi) ? allPromosi.filter(p => promoBulananSlugs.includes(p.slug)) : []
  let promosiRegularList = Array.isArray(allPromosi) ? allPromosi.filter(p => !promoBulananSlugs.includes(p.slug)) : []
  const postsList = blogResult?.posts || []
  const menuItems = menuData?.items || []
  const spesialisData = Array.isArray(spesialis) ? spesialis : []

  // Fallback if no promo bulanan is selected
  if (promosiBulananList.length === 0 && Array.isArray(allPromosi) && allPromosi.length > 0) {
    promosiBulananList = allPromosi.slice(0, 3);
    promosiRegularList = allPromosi.slice(3);
  }

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
         <HeroSlideshow servicesData={servicesList} />
      </section>

      {/* PARTNER LOGOS */}
      <PartnerLogos />

      {/* SECTION 2: PROMOSI - Bento Grid Layout */}
      {(promosiBulananList.length > 0 || promosiRegularList.length > 0) ? (
        <BentoPromoSection
          promos={promosiRegularList}
          promoBulanan={promosiBulananList}
        />
      ) : null}

      {/* SECTION: TABS (No Drama Service Process) - Full Width with Boxed Inner */}
      <section id="why-wiguna" className="bg-white w-full hidden lg:block">
          <ModernEquipmentShowcase />
      </section>

      {/* SECTION 3: GOOGLE REVIEWS */}
      <GoogleReviews />

      {/* SECTION 4: YOUTUBE VIDEO GALLERY */}
      <YoutubeEducation />

      {/* SECTION 5: LAYANAN (SpesialisSlider Carousel) */}
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
              <Button href="/services" label="Semua Layanan" bgColor="bg-brand-blue" textColor="text-white" />
            </div>
          </div>
          <SpesialisSlider items={servicesList} />
        </div>
      </section>

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
      <section className="py-16 md:py-24 bg-[#fcfcfc] dark:bg-neutral-950">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative bg-gradient-to-br from-[#162a5e] to-[#0a1124] rounded-[2.5rem] p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-12 overflow-hidden shadow-2xl border border-neutral-800/40">
            
            {/* Glowing grid & blobs backgrounds */}
            <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
              <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#ffd900]/10 rounded-full blur-[100px]" />
              <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-[#224297]/30 rounded-full blur-[100px]" />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.05)_1px,transparent_1.5px)] [background-size:20px_20px]" />
            </div>

            {/* Left Content Column */}
            <div className="relative z-10 flex-1 flex flex-col justify-center text-left">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#ffd900]/10 border border-[#ffd900]/20 rounded-full text-[11px] font-black uppercase tracking-wider text-[#ffd900] mb-6 w-fit">
                🛠️ KONSULTASI GRATIS
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight uppercase font-sans text-white mb-6">
                Bengkel Mobil Profesional di Depok? <span className="text-[#ffd900]">Serahkan pada Ahlinya!</span>
              </h2>
              <p className="text-sm md:text-base text-gray-300 mb-8 leading-relaxed font-medium max-w-xl">
                Diagnosa gratis + penawaran harga transparan. Tanpa biaya tersembunyi, tanpa bongkar-bongkar tanpa izin. Hubungi teknisi kami untuk reservasi dan konsultasi gratis sekarang juga.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link
                  href="https://wa.me/6287817773888"
                  className="px-8 py-4 rounded-full bg-[#ffd900] hover:bg-yellow-400 text-[#1a3567] font-black text-base shadow-lg hover:shadow-yellow-500/20 hover:-translate-y-0.5 transition-all inline-flex items-center gap-2 group"
                >
                  <span>Konsultasi via WhatsApp</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </Link>
                <Link
                  href="https://maps.app.goo.gl/J3s5ZhpwFttGFeeUA"
                  target="_blank"
                  className="px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 font-black text-base transition-all inline-flex items-center gap-2"
                >
                  <span>Cek Google Maps</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Right Video/Image Card (Singapore/Philippines Cutout style) */}
            <div className="relative z-10 w-full lg:w-[45%] aspect-[4/3] rounded-[2rem] overflow-hidden border-[12px] md:border-[16px] border-[#fcfcfc] dark:border-neutral-950 shadow-2xl shrink-0 group">
              <a href="https://www.youtube.com/watch?v=WdvoqAxUyyk" target="_blank" rel="noopener noreferrer" className="block w-full h-full relative">
                <Image
                  src="/images/cta-video-thumbnail.png"
                  alt="Auto-Tech Diagnostics Bengkel Wiguna"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/35 transition-colors duration-500 flex items-center justify-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white text-[#224297] flex items-center justify-center shadow-2xl transition-all duration-300 transform group-hover:scale-110 relative">
                    {/* Pulsing ring animation */}
                    <span className="absolute inset-0 rounded-full bg-white/30 animate-ping pointer-events-none" />
                    <svg className="w-6 h-6 sm:w-8 sm:h-8 text-[#224297] translate-x-0.5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 5v14l11-7z" />
                    </svg>
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
