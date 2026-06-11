import Footer8 from "@/components/layout/footer/Footer8";
import Header from "@/components/layout/header/Header";
import About7 from "@/components/sections/about/About7";
import Blogs8 from "@/components/sections/blogs/Blogs8";
import Choose from "@/components/sections/choose/Choose";
import Funfact3 from "@/components/sections/funfacts/Funfact3";
import Hero8 from "@/components/sections/hero/Hero8";
import FeatureMarquee2 from "@/components/sections/marquee/FeatureMarquee2";
import Portfolios8 from "@/components/sections/portfolios/Portfolios8";
import Services8 from "@/components/sections/services/Services8";
import Team4 from "@/components/sections/teams/Team4";
import Testimonials8 from "@/components/sections/testimonials/Testimonials8";
import BackToTop from "@/components/shared/others/BackToTop";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";
export default function Home8() {
	return (
		<div>
			<BackToTop />
			<Header headerType={8} />
			<Header headerType={8} isStickyHeader={true} />
			<div id="smooth-wrapper">
				<div id="smooth-content">
					<main>
						<div className="top-space-15"></div>
						<Hero8 />
						<FeatureMarquee2 />
						<About7 />
						<Choose />
						<Services8 />
						<Portfolios8 />
						<Funfact3 />
						<Team4 />
						<Testimonials8 />
						<Blogs8 />
					</main>
					<Footer8 />
				</div>
			</div>
			<ClientWrapper />
		</div>
	);
}
