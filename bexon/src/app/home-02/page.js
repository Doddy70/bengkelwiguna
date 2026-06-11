import Footer2 from "@/components/layout/footer/Footer2";
import Header from "@/components/layout/header/Header";
import About2 from "@/components/sections/about/About2";
import Blogs2 from "@/components/sections/blogs/Blogs2";
import Brands2 from "@/components/sections/brands/Brands2";
import Hero2 from "@/components/sections/hero/Hero2";
import Portfolios2 from "@/components/sections/portfolios/Portfolios2";
import PricingPlan from "@/components/sections/pricing-plan/PricingPlan";
import Process from "@/components/sections/process/Process";
import Services2 from "@/components/sections/services/Services2";
import Team1 from "@/components/sections/teams/Team1";
import Testimonials2 from "@/components/sections/testimonials/Testimonials2";
import BackToTop from "@/components/shared/others/BackToTop";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";

export default function Home2() {
	return (
		<div>
			<BackToTop />
			<Header headerType={2} />
			<Header headerType={2} isStickyHeader={true} />
			<div id="smooth-wrapper">
				<div id="smooth-content">
					<main>
						<div className="top-space-15"></div>
						<Hero2 />
						<Brands2 />
						<About2 />
						<Services2 />
						<Portfolios2 />
						<Process />
						<Testimonials2 />
						<Team1 />
						<PricingPlan />
						<Blogs2 />
					</main>
					<Footer2 />
				</div>
			</div>

			<ClientWrapper />
		</div>
	);
}
