import Footer5 from "@/components/layout/footer/Footer5";
import Header from "@/components/layout/header/Header";
import Blogs5 from "@/components/sections/blogs/Blogs5";
import Brands4 from "@/components/sections/brands/Brands4";
import Hero5 from "@/components/sections/hero/Hero5";
import FeatureMarquee from "@/components/sections/marquee/FeatureMarquee";
import Portfolios5 from "@/components/sections/portfolios/Portfolios5";
import PricingPlan3 from "@/components/sections/pricing-plan/PricingPlan3";
import Process2 from "@/components/sections/process/Process2";
import Services5 from "@/components/sections/services/Services5";
import Strategy from "@/components/sections/strategy/Strategy ";
import Testimonials5 from "@/components/sections/testimonials/Testimonials5";
import BackToTop from "@/components/shared/others/BackToTop";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";
import { getNavigationMenu } from "@/lib/wordpress";

export default async function Home5() {
	// Fetch dynamic menu dari WordPress Backend, Server-Side Rendered
	const navItems = await getNavigationMenu("menu-1");

	return (
		<div>
			<BackToTop />
			<Header headerType={5} navItems={navItems} />
			<Header headerType={5} isStickyHeader={true} navItems={navItems} />
			<div id="smooth-wrapper">
				<div id="smooth-content">
					<main>
						<div className="top-space-15"></div>
						<Hero5 />
						<Services5 />
						<Brands4 />
						<Strategy />
						<Process2 />
						<Portfolios5 />
						<Testimonials5 />
						<PricingPlan3 />

						<Blogs5 />
					</main>
					<Footer5 />
				</div>
			</div>

			<ClientWrapper />
		</div>
	);
}
