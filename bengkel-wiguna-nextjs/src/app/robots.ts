import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    // Pulls the domain from your env vars; provides a fallback for local dev
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: '/private/',
        },
        sitemap: `${baseUrl}/sitemap.xml`,
    };
}