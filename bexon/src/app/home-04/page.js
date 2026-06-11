import Footer4 from "@/components/layout/footer/Footer4";
import Header from "@/components/layout/header/Header";
import About4 from "@/components/sections/about/About4";
import Blogs4 from "@/components/sections/blogs/Blogs4";
import Features3 from "@/components/sections/features/Features3";
import Funfact2 from "@/components/sections/funfacts/Funfact2";
import Hero4 from "@/components/sections/hero/Hero4";
import Portfolios4 from "@/components/sections/portfolios/Portfolios4";
import PricingPlan2 from "@/components/sections/pricing-plan/PricingPlan2";
import Services4 from "@/components/sections/services/Services4";
import Testimonials4 from "@/components/sections/testimonials/Testimonials4";
import BackToTop from "@/components/shared/others/BackToTop";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";

export default function Home4() {
	return (
		<div>
			<BackToTop />
			<Header headerType={4} />
			<Header headerType={4} isStickyHeader={true} />
			<div id="smooth-wrapper">
				<div id="smooth-content">
					<main>
						<div className="space-for-header"></div>
						<Hero4 />
						<Features3 />
						<About4 />
						<Services4 />
						<Funfact2 />
						<Portfolios4 />
						<PricingPlan2 />
						<Testimonials4 />
						<Blogs4 />
					</main>
					<Footer4 />
				</div>
			</div>

			<ClientWrapper />
		</div>
	);
}
