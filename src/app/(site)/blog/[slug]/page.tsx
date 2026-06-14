/**
 * Single Blog Page — Bengkel Wiguna
 * Dynamic content from WordPress REST API
 */

import Image from "next/image";
import React from "react";
import { 
    getPostBySlug, 
    getFeaturedImage, 
    formatDate, 
    getAllCategories,
    getPostsByCategory,
    getAllPosts
} from "@/lib/wordpress";
import { notFound } from "next/navigation";
import PopularPost from "@/components/ui/PopularPost";
import { extractRankMathSEO, generateMetadataFromSEO } from "@/lib/rank-math";
import JsonLd from "@/components/layout/JsonLd";
import { generateArticleSchema, generateBreadcrumbSchema } from "@/lib/seo";
import BlogSidebar from "@/components/ui/BlogSidebar";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { TableOfContents } from "@/components/ui/TableOfContents";
import { Icon } from "@iconify/react";

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
        getAllPosts(1, 3)
    ]);

    const primaryCategoryId = post.categories && post.categories.length > 0 ? post.categories[0] : null;
    const relatedPosts = primaryCategoryId 
        ? await getPostsByCategory(primaryCategoryId, post.id, 4)
        : [];

    const popularPosts = latestPostsResult?.posts || [];

    const featuredImage = getFeaturedImage(post);
    const title = typeof post.title === "string" ? post.title : post.title?.rendered;
    const content = typeof post.content === "string" ? post.content : post.content?.rendered;

    return (
        <div className="bg-white">
        <JsonLd data={generateArticleSchema(post)} />
        <JsonLd data={generateBreadcrumbSchema([
          { name: 'Home', url: 'https://bengkelwiguna.com' },
          { name: 'Blog', url: 'https://bengkelwiguna.com/blog' },
          { name: title, url: `https://bengkelwiguna.com/blog/${slug}` }
        ])} />
        
        <div className="blog-wrap font-dm">
            <div className="max-w-screen-xl mx-auto px-3 sm:px-6 md:px-14 lg:px-14 xl:px-18 2xl:px-3 lg:pb-24 pb-20 justify-center">
                <div className="blog-title bg-light-blue-banner lg:pt-32 pt-24 font-dm rounded-3xl mb-12 relative overflow-hidden">
                    {/* Post Title */}
                    <div className="lg:w-10/12 text-center pb-12 mx-auto relative z-10">
                        <div className="flex justify-center mb-8" data-aos="fade-down">
                            <Breadcrumb 
                                items={[
                                  { label: 'Beranda', href: '/' },
                                  { label: 'Artikel', href: '/blog' },
                                  { label: title || 'Post' }
                                ]} 
                            />
                        </div>
                        <div className="flex justify-center mb-4">
                            <div className="px-4 py-1.5 border border-brand-blue/10 rounded-full text-xs font-bold uppercase text-brand-blue bg-brand-blue/5 shadow-sm flex items-center gap-2 w-auto" data-aos="zoom-in">
                                Edukasi Otomotif
                            </div>
                        </div>
                        <h1 className="text-3xl md:text-5xl lg:text-6xl text-gray-900 font-black mb-6 leading-[1.1] tracking-tighter" data-aos="fade-up">
                            {title}
                        </h1>
                        <div className="flex items-center justify-center gap-4 text-gray-500 font-bold text-xs uppercase tracking-widest" data-aos="fade-up" data-aos-delay="100">
                            <span>Bengkel Wiguna</span>
                            <span className="w-1.5 h-1.5 rounded-full bg-brand-gold"></span>
                            <span suppressHydrationWarning>{formatDate(post.date)}</span>
                        </div>
                    </div>
                </div>

                {/* Featured Image */}
                {featuredImage && (
                    <div className="lg:w-11/12 justify-center pb-16 mx-auto" data-aos="fade-up">
                        <div className="relative aspect-[21/9] rounded-2xl overflow-hidden shadow-2xl shadow-gray-200">
                            <Image 
                                src={featuredImage} 
                                alt={title || "Blog Bengkel Wiguna"} 
                                fill
                                className="object-cover"
                                priority 
                            />
                        </div>
                    </div>
                )}

                {/* Main Content Grid */}
                <div className="lg:w-11/12 mx-auto">
                    <div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-16 gap-12 relative">
                        {/* Article Content */}
                        <div className="lg:col-span-2">
                            <div className="block lg:hidden mb-8">
                                <TableOfContents />
                            </div>
                            <article 
                                className="prose prose-lg lg:prose-xl max-w-none dark:prose-invert blog-content-area
                                prose-headings:font-black prose-headings:tracking-tighter prose-headings:text-gray-900
                                prose-p:text-gray-700 prose-p:leading-relaxed prose-p:font-medium
                                prose-a:text-brand-blue prose-a:no-underline hover:prose-a:underline
                                prose-strong:text-gray-900 prose-strong:font-black
                                prose-img:rounded-2xl prose-img:shadow-lg
                                prose-blockquote:border-l-brand-gold prose-blockquote:bg-gray-50 prose-blockquote:p-8 prose-blockquote:rounded-r-2xl prose-blockquote:font-bold prose-blockquote:italic"
                                dangerouslySetInnerHTML={{ __html: content || "" }}
                            />

                            {/* Share & Tags Section */}
                            <div className="mt-16 pt-8 border-t border-gray-100 flex flex-wrap justify-between items-center gap-6">
                                <div className="flex items-center gap-4">
                                    <span className="text-sm font-black uppercase text-gray-400 tracking-widest">Bagikan:</span>
                                    <div className="flex gap-2">
                                        <a href={`https://wa.me/?text=${encodeURIComponent(title + ' ')}`} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-green-500 text-white flex items-center justify-center hover:scale-110 transition-transform">
                                            <Icon icon="fa6-brands:whatsapp" width={18} />
                                        </a>
                                        <a href={`https://facebook.com/sharer/sharer.php?u=${encodeURIComponent('')}`} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center hover:scale-110 transition-transform">
                                            <Icon icon="fa6-brands:facebook" width={18} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="w-full">
                            <div className="hidden lg:block sticky top-24 z-30 mb-10">
                                <TableOfContents />
                            </div>
                            <BlogSidebar 
                                categories={allCategories} 
                                relatedPosts={relatedPosts} 
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <PopularPost posts={popularPosts} />
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

