import Header from "@/components/layout/header/Header";
import Footer from "@/components/layout/footer/Footer";
import HeroInner from "@/components/sections/hero/HeroInner";
import BackToTop from "@/components/shared/others/BackToTop";
import HeaderSpace from "@/components/shared/others/HeaderSpace";
import PaketCatalog from "@/components/sections/paket-service/PaketCatalog";
import { getAllPaketService, getNavigationMenu } from "@/lib/wordpress";
import { generatePageMetadata } from "@/lib/seo-complete";

export async function generateMetadata() {
	try {
		return await generatePageMetadata("paket-service");
	} catch (error) {
		return {
			title: "Paket Service | Bengkel Wiguna",
			description: "Pilihan paket service terbaik untuk kendaraan Anda di Bengkel Wiguna.",
		};
	}
}

export default async function PaketServicePage() {
	const [paketServices, navItems] = await Promise.all([
		getAllPaketService(),
		getNavigationMenu("menu-1"),
	]);

	const safePaketServices = Array.isArray(paketServices) ? paketServices : [];

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
							title="Paket Service"
							text="Daftar Paket Service"
							breadcrums={[{ name: "Paket Service", path: "/paket-service" }]}
						/>
						<PaketCatalog items={safePaketServices} />
					</main>
					<Footer />
				</div>
			</div>
		</>
	);
}
