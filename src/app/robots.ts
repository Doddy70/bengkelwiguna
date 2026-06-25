import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    // Pulls the domain from your env vars; provides a fallback for local dev
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://bengkelwiguna.com';

    return {
        rules: [
            // ✅ General crawlers allowed
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/private/', '/checkout/', '/api/', '/_next/', '/cart-2/'],
            },
            // ✅ AI Search Crawlers - ALLOWED for GEO (Generative Engine Optimization)
            // These crawlers are for AI-powered search engines (Perplexity, ChatGPT, Gemini)
            // Allow: content retrieval for AI search results
            {
                userAgent: ['GPTBot', 'ChatGPT-User', 'CCBot', 'anthropic-ai', 'Google-Extended', 'PerplexityBot', 'Amazonbot'],
                allow: '/',
                disallow: ['/checkout/', '/cart-2/', '/signin/', '/register/'],
            },
            // ✅ CommonBot - Allow for broader AI content use
            {
                userAgent: 'Bytespider',
                allow: '/',
                disallow: ['/api/', '/_next/'],
            },
        ],
        sitemap: `${baseUrl}/sitemap.xml`,
        // ✅ Add host directive for search engines
        host: baseUrl,
    };
}
