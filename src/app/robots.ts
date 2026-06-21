import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    // Pulls the domain from your env vars; provides a fallback for local dev
    // ✅ BUGFIX: Changed fallback to production domain to avoid localhost leaking to production robots.txt
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://bengkelwiguna.com';

    return {
        rules: [
            // General crawlers and AI search retrieval (Perplexity, ChatGPT-User) allowed
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/private/', '/api/', '/_next/'],
            },
            // ✅ SEO BUGFIX: Explicitly block AI training crawlers (Split Stance)
            // We want GEO visibility (retrieval allowed), but don't want content scraped for model training.
            {
                userAgent: ['GPTBot', 'CCBot', 'anthropic-ai', 'Google-Extended'],
                disallow: '/',
            }
        ],
        sitemap: `${baseUrl}/sitemap.xml`,
    };
}