/**
 * Single Blog Page — Bengkel Wiguna
 * Redesigned layout matching reference screenshot
 */

import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Icon } from "@iconify/react";
import {
    getPostBySlug,
    getFeaturedImage,
    formatDate,
    getAllCategories,
    getPostsByCategory,
    getAllPosts
} from "@/lib/wordpress";
import { extractRankMathSEO, generateMetadataFromSEO } from "@/lib/rank-math";
import JsonLd from "@/components/layout/JsonLd";
import { generateArticleSchema, generateBreadcrumbSchema } from "@/lib/seo";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import PopularPost from "@/components/ui/PopularPost";

interface BlogPageProps {
  params: Promise<{ slug: string }>;
}

export default async function SingleBlogPage({ params }: BlogPageProps) {
    const { slug } = await params;
    const post = await getPostBySlug(slug);

    if (!post) {
        return notFound();
    }

    const [allCategories, latestPostsResult] = await Promise.all([
        getAllCategories(),
        getAllPosts(1, 6)
    ]);

    const primaryCategoryId = post.categories && post.categories.length > 0 ? post.categories[0] : null;
    const relatedPosts = primaryCategoryId
        ? await getPostsByCategory(primaryCategoryId, post.id, 4)
        : [];

    const popularPosts = latestPostsResult?.posts || [];

    const featuredImage = getFeaturedImage(post);
    const title = typeof post.title === "string" ? post.title : post.title?.rendered;
    const content = typeof post.content === "string" ? post.content : post.content?.rendered;
    const excerpt = typeof post.excerpt === "string" ? post.excerpt : post.excerpt?.rendered || "";
    const primaryCategory = allCategories?.find((c: any) => c.id === primaryCategoryId);

    return (
        <div className="bg-white dark:bg-gray-950 min-h-screen">
        <JsonLd data={generateArticleSchema(post)} />
        <JsonLd data={generateBreadcrumbSchema([
          { name: 'Home', url: 'https://bengkelwiguna.com' },
          { name: 'Blog', url: 'https://bengkelwiguna.com/blog' },
          { name: title, url: `https://bengkelwiguna.com/blog/${slug}` }
        ])} />

        {/* ═══ Hero Section — Featured Image as Background ═══ */}
        <section className="relative w-full lg:min-h-[500px] min-h-[420px] overflow-hidden flex items-end">
            {/* Background Image */}
            {featuredImage ? (
                <Image
                    src={featuredImage}
                    alt={title || "Blog Bengkel Wiguna"}
                    fill
                    className="object-cover"
                    priority
                />
            ) : (
                <div className="absolute inset-0 bg-gradient-to-br from-[#224297] to-[#0f1d45]" />
            )}

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />

            {/* Content */}
            <div className="relative z-10 w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 lg:pb-16">
                {/* Breadcrumb */}
                <Breadcrumb
                    variant="location"
                    showHome={true}
                    items={[
                        { label: 'Blog', href: '/blog' },
                        { label: primaryCategory?.name || 'Edukasi' }
                    ]}
                    className="mb-6 [&_*]:text-white [&_a:text-white/70:hover:text-yellow-400] [&_span:text-yellow-400]"
                />

                {/* Meta Info Row */}
                <div className="flex flex-wrap items-center gap-4 mb-4">
                    {/* Author */}
                    <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm border-2 border-white/30 overflow-hidden flex items-center justify-center">
                            <Image
                                src="/images/logo/wb-logo.png"
                                alt="Admin Wiguna"
                                width={48}
                                height={48}
                                className="object-contain"
                            />
                        </div>
                        <div>
                            <p className="text-white font-bold text-sm">Admin Wiguna</p>
                            <p className="text-white/60 text-xs">Bengkel Wiguna</p>
                        </div>
                    </div>

                    {/* Separator */}
                    <span className="text-white/40">|</span>

                    {/* Date */}
                    <div className="flex items-center gap-2 text-white/80 text-sm">
                        <Icon icon="solar:calendar-linear" width={16} />
                        <span suppressHydrationWarning>{formatDate(post.date)}</span>
                    </div>

                    {/* Separator */}
                    <span className="text-white/40">|</span>

                    {/* Category Badge */}
                    <span className="bg-[#ffd900] text-[#224297] px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider">
                        {primaryCategory?.name || 'Edukasi'}
                    </span>
                </div>

                {/* Title */}
                <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-white mb-4 leading-[1.1] tracking-tight max-w-4xl">
                    {title}
                </h1>

                {/* Reading Time */}
                <div className="flex items-center gap-2 text-white/70 text-sm">
                    <Icon icon="solar:clock-circle-linear" width={18} />
                    <span>8 menit baca</span>
                </div>
            </div>
        </section>

        {/* ═══ Main Content Section ═══ */}
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] xl:grid-cols-[1fr_320px] gap-8 lg:gap-12 xl:gap-16">

                {/* ═══ Left Column — Article Content ═══ */}
                <div className="w-full overflow-hidden">

                    {/* Article Body */}
                    <div className="overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0">
                    <article
                        className="prose prose-lg max-w-none dark:prose-invert min-w-[300px]
                        prose-headings:font-black prose-headings:tracking-tight prose-headings:text-gray-900 dark:prose-headings:text-white prose-headings:mb-6
                        prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-p:leading-relaxed prose-p:mb-6 prose-p:text-[17px]
                        prose-a:text-[#224297] prose-a:no-underline hover:prose-a:underline prose-a:font-semibold
                        prose-strong:text-gray-900 dark:prose-strong:text-white prose-strong:font-black
                        prose-img:rounded-2xl prose-img:shadow-xl prose-img:mx-auto prose-img:w-full prose-img:max-w-full
                        prose-blockquote:border-l-4 prose-blockquote:border-[#ffd900] prose-blockquote:bg-gray-50 dark:prose-blockquote:bg-gray-800 prose-blockquote:p-6 prose-blockquote:rounded-r-xl prose-blockquote:font-bold prose-blockquote:italic prose-blockquote:text-gray-700 dark:prose-blockquote:text-gray-300
                        prose-ul:list-disc prose-ul:pl-6 prose-li:text-gray-700 dark:prose-li:text-gray-300 prose-li:text-[17px]
                        prose-ol:list-decimal prose-ol:pl-6 prose-li:mb-3
                        prose-h2:text-2xl prose-h2:mt-12 prose-h2:border-b prose-h2:pb-4
                        prose-h3:text-xl
                        prose-table:min-w-full"
                        dangerouslySetInnerHTML={{ __html: content || "" }}
                    />
                    </div>

                    {/* Tags */}
                    <div className="mt-12 pt-8 border-t border-gray-100 dark:border-gray-800">
                        <div className="flex flex-wrap items-center gap-3">
                            <span className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Tags:</span>
                            {allCategories?.slice(0, 5).map((cat: any) => (
                                <Link
                                    key={cat.id}
                                    href={`/blog?category=${cat.id}`}
                                    className="px-4 py-2 bg-gray-100 dark:bg-gray-800 hover:bg-[#224297] hover:text-white text-gray-600 dark:text-gray-300 text-sm font-medium rounded-full transition-colors"
                                >
                                    #{cat.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Share Buttons */}
                    <div className="mt-8 flex items-center gap-4">
                        <span className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Bagikan:</span>
                        <div className="flex gap-3">
                            <a href="#" className="w-10 h-10 rounded-full bg-[#25D366] hover:bg-[#128C7E] text-white flex items-center justify-center transition-colors shadow-lg">
                                <Icon icon="fa6-brands:whatsapp" width={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-[#E1306C] hover:bg-[#C13584] text-white flex items-center justify-center transition-colors shadow-lg">
                                <Icon icon="fa6-brands:instagram" width={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-[#1877F2] hover:bg-[#166FE5] text-white flex items-center justify-center transition-colors shadow-lg">
                                <Icon icon="fa6-brands:facebook-f" width={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-black hover:bg-gray-800 text-white flex items-center justify-center transition-colors shadow-lg">
                                <Icon icon="fa6-brands:x-twitter" width={18} />
                            </a>
                        </div>
                    </div>

                    {/* CTA Section */}
                    <div className="mt-12 p-8 lg:p-10 bg-gradient-to-br from-[#224297] to-[#0f1d45] rounded-3xl text-white shadow-xl">
                        <div className="flex flex-col md:flex-row items-center gap-8">
                            <div className="flex-1 text-center md:text-left">
                                <h3 className="text-2xl lg:text-3xl font-black mb-3">
                                    Butuh Konsultasi Servis?
                                </h3>
                                <p className="text-white/80 font-medium">
                                    Hubungi tim teknisi Bengkel Wiguna untuk advice gratis seputar perawatan kendaraan Anda.
                                </p>
                            </div>
                            <div className="flex flex-col gap-3 shrink-0">
                                <a
                                    href="https://wa.me/6287817773888?text=Halo%20Bengkel%20Wiguna,%20saya%20ingin%20konsultasi%20tentang%20artikel%20ini.%20(web)"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    data-source="blog-detail-cta"
                                    className="flex items-center justify-center gap-3 px-8 py-4 bg-[#ffd900] hover:bg-yellow-400 text-[#224297] font-black uppercase tracking-wider rounded-xl transition-all shadow-lg"
                                >
                                    <Icon icon="fa6-brands:whatsapp" width={24} />
                                    Chat WhatsApp
                                </a>
                                <a
                                    href="tel:+6287817773888"
                                    className="flex items-center justify-center gap-3 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl transition-all border border-white/20"
                                >
                                    <Icon icon="solar:phone-linear" width={24} />
                                    0878-1777-3888
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ═══ Right Column — Sidebar ═══ */}
                <aside className="w-full lg:sticky lg:top-32 space-y-8">

                    {/* Popular Articles */}
                    <div className="bg-white dark:bg-gray-900 rounded-3xl p-6 lg:p-8 border border-gray-100 dark:border-gray-800 shadow-sm">
                        <h3 className="text-lg font-black text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                            <span className="w-1 h-6 bg-[#224297] rounded-full"></span>
                            Artikel Terpopuler
                        </h3>
                        <div className="space-y-5">
                            {popularPosts.slice(0, 5).map((p: any, index: number) => {
                                const pTitle = typeof p.title === 'string' ? p.title : p.title?.rendered || '';
                                const pImage = getFeaturedImage(p);
                                return (
                                    <Link
                                        key={p.id}
                                        href={`/blog/${p.slug}`}
                                        className="flex items-start gap-4 group"
                                    >
                                        <span className="w-8 h-8 rounded-full bg-[#224297]/10 dark:bg-[#224297]/20 text-[#224297] font-black text-sm flex items-center justify-center shrink-0 group-hover:bg-[#224297] group-hover:text-white transition-colors">
                                            {index + 1}
                                        </span>
                                        <div className="flex-1 min-w-0">
                                            <h4 className="text-sm font-bold text-gray-900 dark:text-white line-clamp-2 group-hover:text-[#224297] transition-colors leading-snug">
                                                {pTitle}
                                            </h4>
                                            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                                                {formatDate(p.date)}
                                            </p>
                                        </div>
                                    </Link>
                                );
                            })}
                        </div>
                    </div>

                    {/* Categories */}
                    <div className="bg-white dark:bg-gray-900 rounded-3xl p-6 lg:p-8 border border-gray-100 dark:border-gray-800 shadow-sm">
                        <h3 className="text-lg font-black text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                            <span className="w-1 h-6 bg-[#ffd900] rounded-full"></span>
                            Kategori
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {allCategories?.map((cat: any) => (
                                <Link
                                    key={cat.id}
                                    href={`/blog?category=${cat.id}`}
                                    className="px-4 py-2 bg-gray-50 dark:bg-gray-800 hover:bg-[#224297] text-gray-700 dark:text-gray-300 hover:text-white text-sm font-medium rounded-full transition-colors border border-gray-100 dark:border-gray-700 hover:border-transparent"
                                >
                                    {cat.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* CTA Card */}
                    <div className="bg-gradient-to-br from-[#224297] to-[#0f1d45] rounded-3xl p-6 lg:p-8 text-white shadow-xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 blur-2xl" />
                        <div className="relative z-10">
                            <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center mb-6">
                                <Icon icon="solar:car-outline" width={32} className="text-[#ffd900]" />
                            </div>
                            <h3 className="text-xl font-black mb-3">
                                Service Mobil Profesional
                            </h3>
                            <p className="text-white/70 text-sm font-medium mb-6 leading-relaxed">
                                Booking servis sekarang dan dapatkan diagnosa gratis dari teknisi berpengalaman.
                            </p>
                            <a
                                href="https://wa.me/6287817773888"
                                target="_blank"
                                rel="noopener noreferrer"
                                data-source="blog-sidebar-cta"
                                className="flex items-center justify-center gap-2 w-full py-4 bg-[#ffd900] hover:bg-yellow-400 text-[#224297] font-black uppercase tracking-wider rounded-xl transition-all shadow-lg"
                            >
                                <Icon icon="fa6-brands:whatsapp" width={20} />
                                Hubungi Kami
                            </a>
                        </div>
                    </div>
                </aside>
            </div>
        </div>

        {/* ═══ Related Articles Section ═══ */}
        {relatedPosts.length > 0 && (
            <section className="bg-gray-50 border-t border-gray-100 py-16">
                <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl lg:text-3xl font-black text-gray-900 mb-10 text-center">
                        Artikel Terkait
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {relatedPosts.slice(0, 4).map((p: any) => {
                            const pTitle = typeof p.title === 'string' ? p.title : p.title?.rendered || '';
                            const pImage = getFeaturedImage(p);
                            return (
                                <Link
                                    key={p.id}
                                    href={`/blog/${p.slug}`}
                                    className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
                                >
                                    <div className="relative aspect-[16/10] overflow-hidden">
                                        {pImage ? (
                                            <Image
                                                src={pImage}
                                                alt={pTitle}
                                                fill
                                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                                            />
                                        ) : (
                                            <div className="absolute inset-0 bg-gradient-to-br from-[#224297] to-[#0f1d45] flex items-center justify-center">
                                                <Icon icon="solar:car-outline" width={40} className="text-white/50" />
                                            </div>
                                        )}
                                    </div>
                                    <div className="p-5">
                                        <p className="text-xs text-[#224297] font-bold uppercase tracking-wider mb-2">
                                            Edukasi
                                        </p>
                                        <h3 className="text-sm font-bold text-gray-900 line-clamp-2 group-hover:text-[#224297] transition-colors leading-snug">
                                            {pTitle}
                                        </h3>
                                        <p className="text-xs text-gray-500 mt-3 flex items-center gap-1">
                                            <Icon icon="solar:calendar-linear" width={14} />
                                            {formatDate(p.date)}
                                        </p>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </section>
        )}
        </div>
  );
}

/**
 * Generate Metadata for SEO
 */
export async function generateMetadata({ params }: BlogPageProps) {
    const { slug } = await params;
    const post = await getPostBySlug(slug);

    if (!post) return { title: "Post Not Found" };

    const seo = extractRankMathSEO(post);
    return generateMetadataFromSEO(seo);
}
