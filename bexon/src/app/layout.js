/**
 * Root Layout - Bengkel Wiguna
 * Next.js App Router Layout dengan global meta & SEO
 *
 * OPTIMIZATION: Essential CSS loaded globally, page-specific CSS lazy-loaded
 * Bootstrap and Font Awesome are essential for layout - loaded here
 */

import { Mona_Sans } from "next/font/google";

// OPTIMIZATION: Load essential CSS globally (required for layout)
import "./globals.scss";
import "./assets/css/bootstrap.min.css"; // Required for grid system
import "./assets/css/font-awesome-pro.min.css"; // Required for icons (used everywhere)
import "./assets/css/bexon-icons.css"; // Custom icons
import "./assets/css/meanmenu.css";
import "./assets/css/nice-select2.css";

// Preconnect already handled via next/font - no need for duplicate dns-prefetch
import { WebVitals } from "@/components/seo/WebVitals";

// Font Configuration - OPTIMIZED: Only load used weights
const bodyFont = Mona_Sans({
	variable: "--tj-ff-body",
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"], // Only used weights
	display: "swap",
	preload: true,
});

const headingFont = Mona_Sans({
	variable: "--tj-ff-heading",
	subsets: ["latin"],
	weight: ["600", "700", "800"], // Only used weights
	display: "swap",
	preload: true,
});

// Google Search Console Verification (dari existing site)
const GSC_VERIFICATION = 'oKmUkrdzFNPTkpDkESvjntcOa6iFa5DeVGSLFuJYuao'

// Default Metadata
export const metadata = {
	title: {
		default: 'Bengkel Wiguna | Bengkel Mobil Terpercaya di Depok',
		template: '%s | Bengkel Wiguna',
	},
	description: 'Bengkel One Stop Service terpercaya di Depok. Layanan: ganti ban, oli, kaki-kaki, AC, aki, rem, spooring & balancing. Hubungi 0878-1777-3888',
	keywords: ['bengkel depok', 'bengkel mobil', 'ganti ban', 'service ac mobil', 'spooring balancing', 'bengkel wiguna'],
	authors: [{ name: 'Bengkel Wiguna' }],
	creator: 'Bengkel Wiguna',
	publisher: 'Bengkel Wiguna',
	formatDetection: {
		email: false,
		address: false,
		telephone: false,
	},
	metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://bengkelwiguna.com'),
	alternates: {
		canonical: '/',
	},
	openGraph: {
		type: 'website',
		siteName: 'Bengkel Wiguna',
		title: 'Bengkel Wiguna | Bengkel Mobil Terpercaya di Depok',
		description: 'Bengkel One Stop Service terpercaya di Depok. Layanan: ganti ban, oli, kaki-kaki, AC, aki, rem, spooring & balancing.',
		url: '/',
		images: [
			{
				url: '/images/og-default.jpg',
				width: 1200,
				height: 630,
				alt: 'Bengkel Wiguna',
			},
		],
		locale: 'id_ID',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Bengkel Wiguna | Bengkel Mobil Terpercaya di Depok',
		description: 'Bengkel One Stop Service terpercaya di Depok.',
		images: ['/images/og-default.jpg'],
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
	verification: {
		google: GSC_VERIFICATION,
	},
};

// Structured Data Components
import { LocalBusinessJsonLd, WebSiteJsonLd } from '@/components/seo/JsonLd';
import { generateSpeculationRules } from "@/lib/core-web-vitals";
import HeroPreload from '@/components/shared/seo/HeroPreload';

export default function RootLayout({ children }) {
	const speculationRules = generateSpeculationRules({
		eagerness: 'moderate',
		patterns: ['/*'],
		excludePatterns: ['/checkout/*', '/booking/*', '/admin/*'],
	});

	return (
		<html lang="id" data-scroll-behavior="smooth" dir="ltr">
			<head>
				{/* Speculation Rules for instant navigation */}
				<script
					type="application/speculationrules"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify(speculationRules),
					}}
				/>

				{/* Google Search Console Verification */}
				<meta name="google-site-verification" content={GSC_VERIFICATION} />

				{/* Favicon - Bengkel Wiguna */}
				<link rel="icon" href="/images/brand/favicon.png" sizes="32x32" type="image/png" />
				<link rel="icon" href="/images/brand/favicon.png" sizes="16x16" type="image/png" />
				<link rel="apple-touch-icon" href="/images/brand/favicon.png" />

				{/* Resource hints for performance */}
				<link rel="preconnect" href="https://backend.bengkelwiguna.com" />
				<link rel="dns-prefetch" href="https://backend.bengkelwiguna.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

				{/* Structured Data - LocalBusiness (untuk SEO lokal) */}
				<LocalBusinessJsonLd />

				{/* Structured Data - WebSite (untuk search action) */}
				<WebSiteJsonLd />
			</head>
			<body className={`${bodyFont.variable} ${headingFont.variable}`}>
				<WebVitals />
				<HeroPreload />
				{children}
			</body>
		</html>
	);
}