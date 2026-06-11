import Footer9 from "@/components/layout/footer/Footer9";
import Header from "@/components/layout/header/Header";
import About8 from "@/components/sections/about/About8";
import Blogs9 from "@/components/sections/blogs/Blogs9";
import Brands3 from "@/components/sections/brands/Brands3";
import Choose2 from "@/components/sections/choose/Choose2";
import Cta3 from "@/components/sections/cta/Cta3";
import Hero9 from "@/components/sections/hero/Hero9";
import FeatureMarquee from "@/components/sections/marquee/FeatureMarquee";
import Portfolios9 from "@/components/sections/portfolios/Portfolios9";
import Services9 from "@/components/sections/services/Services9";
import Team5 from "@/components/sections/teams/Team5";
import Testimonials9 from "@/components/sections/testimonials/Testimonials9";
import BackToTop from "@/components/shared/others/BackToTop";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";
export default function Home10() {
	return (
		<div>
			<BackToTop />
			<Header headerType={9} />
			<Header headerType={9} isStickyHeader={true} />
			<div id="smooth-wrapper">
				<div id="smooth-content">
					<main>
						<div className="top-space-15"></div>
						<Hero9 />
						<Choose2 />
						<FeatureMarquee />
						<About8 />
						<Services9 />
						<Team5 />
						<Portfolios9 />
						<Testimonials9 />
						<Brands3 type={2} className="mb-0" />
						<Blogs9 />
						<Cta3 />
					</main>
					<Footer9 />
				</div>
			</div>
			<ClientWrapper />
		</div>
	);
}
