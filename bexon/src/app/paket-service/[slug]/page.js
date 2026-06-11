import Header from "@/components/layout/header/Header";
import Footer from "@/components/layout/footer/Footer";
import HeroInner from "@/components/sections/hero/HeroInner";
import BackToTop from "@/components/shared/others/BackToTop";
import HeaderSpace from "@/components/shared/others/HeaderSpace";
import PaketDetailsMain from "@/components/layout/main/PaketDetailsMain";
import { getAllPaketService, getPaketServiceBySlug, getNavigationMenu } from "@/lib/wordpress";
import Link from "next/link";

export async function generateStaticParams() {
	try {
		const items = await getAllPaketService();
		if (!items || !Array.isArray(items) || items.length === 0) {
			return [{ slug: 'paket-service-standar' }];
		}
		return items
			.filter(item => item?.slug && typeof item.slug === 'string' && item.slug.length > 0)
			.map((item) => ({ slug: item.slug }));
	} catch (error) {
		console.warn('Failed to fetch paket service params:', error);
		return [{ slug: 'paket-service-standar' }];
	}
}

export async function generateMetadata({ params }) {
	const { slug } = await params;
	const item = await getPaketServiceBySlug(slug);

	if (!item) {
		return { title: "Paket Service Tidak Ditemukan | Bengkel Wiguna" };
	}

	return {
		title: `${item.title} | Paket Service Bengkel Wiguna`,
		description: item.excerpt || item.title,
		alternates: { canonical: `/paket-service/${slug}/` },
		openGraph: {
			title: `${item.title} | Paket Service Bengkel Wiguna`,
			description: item.excerpt || item.title,
			url: `/paket-service/${slug}/`,
			type: "website",
			images: item.featured_img ? [{ url: item.featured_img }] : [],
		},
	};
}

export default async function PaketServiceDetailPage({ params }) {
	const { slug } = await params;

	const [item, navItems] = await Promise.all([
		getPaketServiceBySlug(slug),
		getNavigationMenu("menu-1")
	]);

	if (!item) {
		return (
			<>
				<BackToTop />
				<Header navItems={navItems} />
				<div className="container py-5 text-center">
					<h1 style={{ marginTop: '100px' }}>Paket Service Tidak Ditemukan</h1>
					<Link href="/paket-service/" className="tj-btn-primary mt-4">
						Kembali ke Daftar Paket
					</Link>
				</div>
				<Footer />
			</>
		);
	}

	return (
		<>
			<BackToTop />
			<Header navItems={navItems} />
			<Header isStickyHeader={true} navItems={navItems} />

			<div id="smooth-wrapper">
				<div id="smooth-content">
					<main>
						<HeaderSpace />
						<HeroInner
							title={item.title}
							text={"Detail Paket"}
							breadcrums={[{ name: "Paket Service", path: "/paket-service" }]}
						/>
						<PaketDetailsMain paket={item} setCurrentTitle={() => {}} />
					</main>
					<Footer />
				</div>
			</div>
		</>
	);
}
