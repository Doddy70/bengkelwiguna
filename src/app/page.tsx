/**
 * Homepage — Bengkel Wiguna
 * High Fidelity Cloning matching the requested sequence.
 * Performance Benchmarks: LCP < 2.5s, Lazy Loading, Caching
 */

import dynamic from 'next/dynamic'
import Link from 'next/link'
import { 
  getAllServices, 
  getAllPromosi, 
  getAllPosts,
  getPageBySlug,
  getHomepageFaqs,
  stripHtml,
  formatDate
} from '@/lib/wordpress'
import { extractRankMathSEO, generateMetadataFromSEO } from '@/lib/rank-math'

// 1. CRITICAL: Hero Section & Header (Above-the-fold)
import PerspectiveServiceSlider from '@/components/sections/PerspectiveServiceSlider'
import Header from '@/components/layout/Header'
import JsonLd from '@/components/layout/JsonLd'
import { generateLocalBusinessSchema, generateWebsiteSchema, generateFAQSchema } from '@/lib/seo'
import { defaultFaqs } from '@/const/faqData'

// 2. OPTIMIZED: Lazy Loading components below-the-fold
const GoogleReviews = dynamic(() => import('@/components/sections/GoogleReviews'))
const YoutubeEducation = dynamic(() => import('@/components/sections/YoutubeEducation'))
const SpesialisSlider = dynamic(() => import('@/components/heroui/spesialis-slider'))
const PromoSlider = dynamic(() => import('@/components/heroui/promo-slider'))
const FooterModern = dynamic(() => import('@/components/heroui/footer-modern'))
const PageTitle3 = dynamic(() => import('@/components/ui/PageTitle3'))
const Button = dynamic(() => import('@/components/ui/Button'))
const BlogCardOne = dynamic(() => import('@/components/ui/BlogCardOne'))
const Tabs = dynamic(() => import('@/components/ui/Tab'))

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
  const [services, promosi, blogResult, dynamicFaqs, menuData, spesialis] = await Promise.all([
    getAllServices(),
    getAllPromosi(),
    getAllPosts(1, 3), // Fetch 3 latest posts
    getHomepageFaqs(),
    getNavigationMenu('main-menu'),
    getAllLayananSpesialis()
  ])

  if (process.env.NODE_ENV === 'development') {
    console.log('[HomePage] Data loaded:', {
        servicesCount: Array.isArray(services) ? services.length : 'null',
        promosiCount: Array.isArray(promosi) ? promosi.length : 'null',
        postsCount: blogResult?.posts?.length || 0,
        faqsCount: dynamicFaqs?.length || 0,
        menuItems: menuData?.items?.length || 0,
        spesialisCount: Array.isArray(spesialis) ? spesialis.length : 0
    })
  }

  const servicesList = Array.isArray(services) ? services : []
  const promosiList = Array.isArray(promosi) ? promosi.slice(0, 3) : []
  const postsList = blogResult?.posts || []
  const menuItems = menuData?.items || []
  const spesialisData = Array.isArray(spesialis) ? spesialis : []

  // Reconcile FAQ format (WP: {q, a} vs UI: {question, answer})
  const faqItems = dynamicFaqs.length > 0 
    ? dynamicFaqs.map(f => ({ question: f.q, answer: f.a }))
    : defaultFaqs;

  return (
    <div className="homepage-final-sequence overflow-x-hidden relative bg-white">
      <JsonLd data={generateWebsiteSchema()} />
      <JsonLd data={generateLocalBusinessSchema()} />
      <JsonLd data={generateFAQSchema(faqItems.map(f => ({ q: f.question, a: f.answer })))} />
      
      {/* HOMEPAGE HEADER (Fixed, Transparent with blur) */}
      <Header
        position="fixed"
        bgColor="bg-white/70 backdrop-blur-xl border-b border-white/30 shadow-lg"
        theme="header-light"
        menuItems={menuItems}
        spesialisData={spesialisData}
      />

      {/* SECTION 1: HERO (Perspective Slider with Background Image) */}
      <section id="hero" className="relative">
         <PerspectiveServiceSlider servicesData={servicesList} />
      </section>

      {/* PARTNER LOGOS */}
      <PartnerLogos />

      {/* SECTION 2: PROMOSI (Bexon Style Carousel) */}
      {promosiList.length > 0 && (
        <section id="promosi" className="lg:py-24 py-12 bg-gray-50 overflow-hidden">
          <div className="max-w-screen-xl mx-auto boxed-layout-gap">
            <div className="flex flex-col gap-8">
              <div className="flex justify-between items-end">
                <PageTitle3
                    badgeText="🔥 PROMO TERBARU"
                    title="Penawaran Spesial untuk Anda"
                    subtitle="Hemat hingga 20% untuk perawatan kendaraan. Promo terbatas, jangan sampai terlewat!"
                    widthClass="w-full lg:w-7/12"
                    alignment="start"
                    padding="pb-0"
                />
                <div className="hidden lg:block">
                  <Button href="/promosi" label="Lihat Semua Promo" bgColor="bg-brand-blue" textColor="text-white" />
                </div>
              </div>

              <div className="promo-slider-container pb-10">
                <PromoSlider items={promosiList} />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* SECTION: TABS (No Drama Service Process) */}
      <section id="why-wiguna" className="lg:py-24 py-12 bg-white">
        <div className="max-w-screen-xl mx-auto boxed-layout-gap">
            <div className="text-center mb-16">
                <PageTitle3
                    badgeText="💎 ONE STOP SERVICE"
                    title="Solusi Lengkap untuk Kendaraan Anda"
                    subtitle="Bengkel Wiguna hadir sebagai solusi lengkap untuk semua jenis kendaraan, mulai dari mobil pribadi, niaga, hingga kendaraan operasional perusahaan."
                    widthClass="w-full"
                    alignment="center"
                    padding="pb-0"
                />
            </div>
            <Tabs />
        </div>
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
      <section className="py-24 bg-brand-blue text-white relative overflow-hidden">
        <div className="max-w-screen-xl mx-auto boxed-layout-gap relative z-10">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-5xl font-black mb-8 italic tracking-tighter uppercase leading-[0.9]">
                    Bengkel Mobil Profesional di Depok? Serahkan pada Ahlinya!
                </h2>
                <p className="text-xl mb-12 opacity-80 font-medium">
                    Diagnosa gratis + penawaran harga transparan. Tanpa biaya tersembunyi, tanpa bongkar-bongkar tanpa izin.
                </p>
                <div className="flex flex-wrap justify-center gap-6">
                    <Button
                        href="https://wa.me/6287817773888"
                        label="Konsultasi via WhatsApp"
                        bgColor="bg-brand-gold"
                        textColor="text-[#1a3567]"
                        padding="py-5 px-10 text-xl font-bold"
                    />
                    <Button
                        href="https://maps.app.goo.gl/J3s5ZhpwFttGFeeUA"
                        label="Cek Google Maps"
                        bgColor="bg-white/10 hover:bg-white/20"
                        textColor="text-white"
                        padding="py-5 px-10 text-xl font-bold"
                        target="_blank"
                    />
                </div>
            </div>
        </div>
        {/* Background Decorative */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -mr-48 -mt-48 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-gold/10 rounded-full -ml-48 -mb-48 blur-3xl" />
      </section>

      <FooterModern />
    </div>
  )
}
