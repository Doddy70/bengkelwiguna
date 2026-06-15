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
            <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 lg:py-16 py-12 justify-center">
                {/* Main Content Grid */}
                <div className="grid lg:grid-cols-[1fr_350px] grid-cols-1 lg:gap-16 gap-12 relative items-start">
                    
                    {/* Article Content */}
                    <div className="w-full">
                        {/* Breadcrumb */}
                        <div className="mb-6">
                            <Breadcrumb 
                                items={[
                                  { label: 'Home', href: '/' },
                                  { label: 'Our Blogs', href: '/blog' },
                                  { label: 'Otomotif' }
                                ]} 
                            />
                        </div>

                        {/* Title */}
                        <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] text-gray-900 dark:text-white font-black mb-8 leading-[1.15] tracking-tight">
                            {title}
                        </h1>

                        {/* Meta Data Bar */}
                        <div className="flex flex-wrap justify-between items-center gap-4 mb-8 pb-6 border-b border-gray-100 dark:border-neutral-800">
                            <div className="flex flex-wrap items-center gap-4 lg:gap-6 text-sm font-bold text-gray-600 dark:text-gray-400">
                                {/* Author */}
                                <div className="flex items-center gap-2">
                                    <div className="w-8 h-8 rounded-full bg-[#224297] flex items-center justify-center text-white overflow-hidden shadow-sm">
                                        <Image src="/images/logo-icon.png" alt="Admin Wiguna" width={20} height={20} className="object-contain" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
                                    </div>
                                    <span className="text-gray-900 dark:text-white">Admin Wiguna</span>
                                </div>
                                
                                {/* Category */}
                                <div className="flex items-center gap-2 bg-gray-100 dark:bg-neutral-800 px-3 py-1 rounded-full">
                                    <span className="text-gray-900 dark:text-white">Tips & Edukasi</span>
                                </div>
                                
                                {/* Reading Time */}
                                <div className="flex items-center gap-2">
                                    <Icon icon="solar:clock-circle-linear" width={18} />
                                    <span>5 min read</span>
                                </div>
                                
                                {/* Date */}
                                <div className="flex items-center gap-2">
                                    <Icon icon="solar:calendar-linear" width={18} />
                                    <span suppressHydrationWarning>{formatDate(post.date)}</span>
                                </div>
                            </div>
                            
                            {/* Like Button */}
                            <button className="w-10 h-10 rounded-full border border-gray-200 dark:border-neutral-700 flex items-center justify-center hover:bg-red-50 hover:border-red-100 hover:text-red-500 transition-colors">
                                <Icon icon="solar:heart-linear" width={20} />
                            </button>
                        </div>

                        {/* Featured Image */}
                        {featuredImage && (
                            <div className="relative aspect-[16/9] lg:aspect-[21/10] rounded-3xl overflow-hidden mb-12 shadow-lg">
                                <Image 
                                    src={featuredImage} 
                                    alt={title || "Blog Bengkel Wiguna"} 
                                    fill
                                    className="object-cover"
                                    priority 
                                />
                            </div>
                        )}

                        <div className="block lg:hidden mb-8">
                            <TableOfContents />
                        </div>

                        {/* Article Body */}
                        <article 
                            className="prose prose-lg max-w-none dark:prose-invert blog-content-area
                            prose-headings:font-black prose-headings:tracking-tighter prose-headings:text-gray-900
                            prose-p:text-gray-700 prose-p:leading-relaxed prose-p:font-medium
                            prose-a:text-[#224297] prose-a:no-underline hover:prose-a:underline
                            prose-strong:text-gray-900 prose-strong:font-black
                            prose-img:rounded-2xl prose-img:shadow-lg
                            prose-blockquote:border-l-4 prose-blockquote:border-[#ffd900] prose-blockquote:bg-gray-50 prose-blockquote:p-6 prose-blockquote:rounded-r-xl prose-blockquote:font-bold prose-blockquote:italic
                            prose-ul:list-disc prose-ul:pl-6 prose-li:marker:text-[#224297]"
                            dangerouslySetInnerHTML={{ __html: content || "" }}
                        />
                    </div>

                    {/* Sidebar */}
                    <div className="w-full lg:sticky lg:top-24">
                        <BlogSidebar 
                            categories={allCategories} 
                            relatedPosts={relatedPosts} 
                        />
                        <div className="hidden lg:block mt-8">
                            <TableOfContents />
                        </div>
                    </div>
                </div>
        
        <PopularPost posts={popularPosts} />
        </div>
      </div>
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

