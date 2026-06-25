import { MetadataRoute } from 'next';
import { getAllServices, getAllPosts, getAllPromosi, getAllLayananSpesialis, getAllPaketService } from '@/lib/wordpress';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://bengkelwiguna.com';

    // Fetch dynamic content for slugs
    const [services, posts, promosi, spesialis, paketService] = await Promise.all([
        getAllServices().catch(() => []),
        getAllPosts(1, 100).catch(() => []),
        getAllPromosi().catch(() => []),
        getAllLayananSpesialis().catch(() => []),
        getAllPaketService().catch(() => [])
    ]);

    const servicesList = Array.isArray(services) ? services : [];
    const postsList = Array.isArray(posts) ? posts : (posts?.posts || []);
    const promosiList = Array.isArray(promosi) ? promosi : [];
    const spesialisList = Array.isArray(spesialis) ? spesialis : [];
    const paketList = Array.isArray(paketService) ? paketService : [];

    // Static routes
    const staticRoutes: MetadataRoute.Sitemap = [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 1,
        },
        {
            url: `${baseUrl}/services`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/blog`,
            lastModified: new Date(),
            changeFrequency: 'daily',
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
            priority: 0.7,
        },
        {
            url: `${baseUrl}/contact`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/lokasi`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.7,
        },
    ];

    // Helper to safely parse dates
    const safeDate = (dateStr: string | undefined): Date => {
        if (!dateStr) return new Date();
        const date = new Date(dateStr);
        return isNaN(date.getTime()) ? new Date() : date;
    };

    // Dynamic service routes
    const serviceRoutes: MetadataRoute.Sitemap = servicesList.map((service: any) => ({
        url: `${baseUrl}/services/${service.slug}`,
        lastModified: safeDate(service.modified || service.date),
        changeFrequency: 'monthly' as const,
        priority: 0.8,
    }));

    // Dynamic blog routes
    const blogRoutes: MetadataRoute.Sitemap = postsList.map((post: any) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: safeDate(post.modified || post.date),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }));

    // Dynamic promosi routes
    const promosiRoutes: MetadataRoute.Sitemap = promosiList.map((promo: any) => ({
        url: `${baseUrl}/promosi/${promo.slug}`,
        lastModified: safeDate(promo.modified || promo.date),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
    }));

    // Dynamic spesialis routes
    const spesialisRoutes: MetadataRoute.Sitemap = spesialisList.map((item: any) => ({
        url: `${baseUrl}/layanan-spesialis/${item.slug}`,
        lastModified: safeDate(item.modified || item.date),
        changeFrequency: 'monthly' as const,
        priority: 0.8,
    }));

    // Dynamic paket service routes
    const paketRoutes: MetadataRoute.Sitemap = paketList.map((item: any) => ({
        url: `${baseUrl}/paket-service/${item.slug}`,
        lastModified: safeDate(item.modified || item.date),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }));

    return [
        ...staticRoutes,
        ...serviceRoutes,
        ...blogRoutes,
        ...promosiRoutes,
        ...spesialisRoutes,
        ...paketRoutes,
    ];
}