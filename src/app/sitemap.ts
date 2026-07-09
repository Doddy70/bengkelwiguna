import { MetadataRoute } from 'next';
import { getAllServices, getAllPostsFlat, getAllPromosi, getAllLayananSpesialis, getAllPaketService } from '@/lib/wordpress';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://bengkelwiguna.com';

    // Fetch ALL dynamic content including ALL posts
    const [services, posts, promosi, spesialis, paketService] = await Promise.all([
        getAllServices().catch(() => []),
        getAllPostsFlat().catch(() => []),
        getAllPromosi().catch(() => []),
        getAllLayananSpesialis().catch(() => []),
        getAllPaketService().catch(() => [])
    ]);

    const servicesList = Array.isArray(services) ? services : [];
    const postsList = Array.isArray(posts) ? posts : [];
    const promosiList = Array.isArray(promosi) ? promosi : [];
    const spesialisList = Array.isArray(spesialis) ? spesialis : [];
    const paketList = Array.isArray(paketService) ? paketService : [];

    // Helper to safely parse dates
    const safeDate = (dateStr: string | undefined): Date => {
        if (!dateStr) return new Date();
        const date = new Date(dateStr);
        return isNaN(date.getTime()) ? new Date() : date;
    };

    // Helper to determine change frequency based on date
    const getChangeFrequency = (dateStr: string): 'daily' | 'weekly' | 'monthly' | 'yearly' => {
        const date = new Date(dateStr);
        const now = new Date();
        const diffDays = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24));

        if (diffDays < 7) return 'daily';
        if (diffDays < 30) return 'weekly';
        if (diffDays < 365) return 'monthly';
        return 'yearly';
    };

    // Helper to calculate priority based on content type and recency
    const calculatePriority = (dateStr: string, type: 'post' | 'service' | 'promosi' | 'spesialis' | 'paket'): number => {
        const basePriority = {
            'service': 0.8,
            'spesialis': 0.8,
            'promosi': 0.8,
            'paket': 0.7,
            'post': 0.7
        }[type] || 0.7;

        // Boost recent content
        const date = new Date(dateStr);
        const now = new Date();
        const diffDays = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24));

        if (diffDays < 7) return Math.min(basePriority + 0.1, 1.0);
        if (diffDays < 30) return basePriority;
        return Math.max(basePriority - 0.1, 0.5);
    };

    // Static routes with priority
    const staticRoutes: MetadataRoute.Sitemap = [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 1.0,
        },
        {
            url: `${baseUrl}/blog`,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/services`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/promosi`,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/layanan-spesialis`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/paket-service`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/tentang-wiguna`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.6,
        },
        {
            url: `${baseUrl}/lokasi`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.6,
        },
    ];

    // Dynamic blog routes with ENHANCED metadata
    const blogRoutes: MetadataRoute.Sitemap = postsList.map((post: any) => {
        const date = post.modified || post.date;
        return {
            url: `${baseUrl}/blog/${post.slug}`,
            lastModified: safeDate(date),
            changeFrequency: getChangeFrequency(date),
            priority: calculatePriority(date, 'post'),
        };
    });

    // Dynamic service routes
    const serviceRoutes: MetadataRoute.Sitemap = servicesList.map((service: any) => {
        const date = service.modified || service.date;
        return {
            url: `${baseUrl}/services/${service.slug}`,
            lastModified: safeDate(date),
            changeFrequency: 'monthly',
            priority: calculatePriority(date, 'service'),
        };
    });

    // Dynamic promosi routes
    const promosiRoutes: MetadataRoute.Sitemap = promosiList.map((promo: any) => ({
        url: `${baseUrl}/promosi/${promo.slug}`,
        lastModified: safeDate(promo.modified || promo.date),
        changeFrequency: 'weekly',
        priority: calculatePriority(promo.modified || promo.date, 'promosi'),
    }));

    // Dynamic spesialis routes
    const spesialisRoutes: MetadataRoute.Sitemap = spesialisList.map((item: any) => ({
        url: `${baseUrl}/layanan-spesialis/${item.slug}`,
        lastModified: safeDate(item.modified || item.date),
        changeFrequency: 'monthly',
        priority: calculatePriority(item.modified || item.date, 'spesialis'),
    }));

    // Dynamic paket service routes
    const paketRoutes: MetadataRoute.Sitemap = paketList.map((item: any) => ({
        url: `${baseUrl}/paket-service/${item.slug}`,
        lastModified: safeDate(item.modified || item.date),
        changeFrequency: 'monthly',
        priority: calculatePriority(item.modified || item.date, 'paket'),
    }));

    const allRoutes = [
        ...staticRoutes,
        ...blogRoutes,
        ...serviceRoutes,
        ...promosiRoutes,
        ...spesialisRoutes,
        ...paketRoutes,
    ];

    console.log(`[Sitemap] Generated ${allRoutes.length} URLs (${postsList.length} blog posts)`);

    return allRoutes;
}
