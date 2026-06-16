/**
 * Tentang Wiguna Page — Bengkel Wiguna
 * Dynamic content from WordPress CMS
 */

import { getPageBySlug, getFeaturedImage, stripHtml } from '@/lib/wordpress';
import TentangWigunaClient from './TentangWigunaClient';
import type { Metadata } from 'next';

export const revalidate = 60;

export async function generateMetadata(): Promise<Metadata> {
  const pageData = await getPageBySlug('tentang-wiguna');
  const title = pageData?.title && typeof pageData.title === 'object'
    ? pageData.title.rendered
    : 'Tentang Wiguna - Bengkel Wiguna';

  const description = pageData?.excerpt && typeof pageData.excerpt === 'object'
    ? stripHtml(pageData.excerpt.rendered)
    : 'Bengkel One Stop Service terpercaya di Depok. No Drama, No Bongkar-Bongkar, No Tebak-Tebak, No Tipu-Tipu.';

  return {
    title: title || 'Tentang Wiguna - Bengkel Wiguna',
    description: description,
  };
}

export default async function TentangWigunaPage() {
  const pageData = await getPageBySlug('tentang-wiguna');
  const featuredImage = getFeaturedImage(pageData);

  // Get title from page
  const pageTitle = pageData?.title && typeof pageData.title === 'object'
    ? stripHtml(pageData.title.rendered)
    : 'Tentang Wiguna';

  // Get excerpt as description
  const excerpt = pageData?.excerpt && typeof pageData.excerpt === 'object'
    ? stripHtml(pageData.excerpt.rendered)
    : '';

  // Use backend featured image
  const imageUrl = featuredImage || 'https://backend.bengkelwiguna.com/wp-content/smush-avif/2025/08/jadul-img.png.avif';

  // Data untuk client component
  const pageProps = {
    pageTitle,
    excerpt,
    featuredImage: imageUrl,
  };

  return <TentangWigunaClient {...pageProps} />;
}
