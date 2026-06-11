/**
 * Rank Math SEO Utility — Bengkel Wiguna Next.js
 * Extracts and transforms Rank Math Pro data from WordPress REST API.
 */

export interface RankMathMetadata {
  title: string;
  description: string;
  canonical: string;
  ogTitle: string;
  ogDescription: string;
  ogImage: string | null;
  twitterTitle: string;
  twitterDescription: string;
  robots: string;
  keywords: string[];
}

/**
 * Extracts Rank Math SEO data from a WordPress post/page object
 */
export function extractRankMathSEO(post: any): RankMathMetadata {
  return {
    title: post.rank_math_title || (typeof post.title === 'object' ? post.title.rendered : post.title) || '',
    description: post.rank_math_description || (typeof post.excerpt === 'object' ? post.excerpt.rendered : post.excerpt) || '',
    canonical: post.rank_math_canonical || post.link || '',
    ogTitle: post.rank_math_og_title || post.rank_math_title || '',
    ogDescription: post.rank_math_og_description || post.rank_math_description || '',
    ogImage: post.rank_math_og_image || post._embedded?.['wp:featuredmedia']?.[0]?.source_url || null,
    twitterTitle: post.rank_math_twitter_title || post.rank_math_og_title || '',
    twitterDescription: post.rank_math_twitter_description || post.rank_math_og_description || '',
    robots: post.rank_math_robots || 'index, follow',
    keywords: post.rank_math_focus_keyword ? post.rank_math_focus_keyword.split(',').map((k: string) => k.trim()) : [],
  };
}

/**
 * Transforms Rank Math data into Next.js Metadata object
 */
export function generateMetadataFromSEO(seo: RankMathMetadata, baseUrl: string = 'https://bengkelwiguna.com') {
  return {
    title: seo.title,
    description: seo.description,
    alternates: {
      canonical: seo.canonical || baseUrl,
    },
    openGraph: {
      title: seo.ogTitle || seo.title,
      description: seo.ogDescription || seo.description,
      url: seo.canonical || baseUrl,
      siteName: 'Bengkel Wiguna',
      images: seo.ogImage ? [{ url: seo.ogImage, width: 1200, height: 630 }] : [],
      locale: 'id_ID',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: seo.twitterTitle || seo.ogTitle || seo.title,
      description: seo.twitterDescription || seo.ogDescription || seo.description,
      images: seo.ogImage ? [seo.ogImage] : [],
    },
    robots: {
      index: seo.robots.includes('index'),
      follow: seo.robots.includes('follow'),
    },
    keywords: seo.keywords,
  };
}
