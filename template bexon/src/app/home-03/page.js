import Footer3 from "@/components/layout/footer/Footer3";
import Header from "@/components/layout/header/Header";
import About3 from "@/components/sections/about/About3";
import Blogs3 from "@/components/sections/blogs/Blogs3";
import Brands3 from "@/components/sections/brands/Brands3";
import Faq2 from "@/components/sections/faq/Faq2";
import Features2 from "@/components/sections/features/Features2";
import Hero3 from "@/components/sections/hero/Hero3";
import TextMarquee from "@/components/sections/marquee/TextMarquee";
import Portfolios3 from "@/components/sections/portfolios/Portfolios3";
import Services3 from "@/components/sections/services/Services3";
import Team2 from "@/components/sections/teams/Team2";
import Testimonials3 from "@/components/sections/testimonials/Testimonials3";
import BackToTop from "@/components/shared/others/BackToTop";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";

export default function Home3() {
	return (
		<div>
			<BackToTop />
			<Header headerType={3} isHeaderTop={true} />
			<Header headerType={3} isStickyHeader={true} />
			<div id="smooth-wrapper">
				<div id="smooth-content">
					<main>
						<div className="top-space-65"></div>
						<Hero3 />
						<Brands3 />
						<Features2 />
						<About3 />
						<Services3 />
						<Portfolios3 />
						<Testimonials3 />
						<TextMarquee />
						<Team2 />
						<Blogs3 />
						<Faq2 type={2} />
					</main>
					<Footer3 />
				</div>
			</div>

			<ClientWrapper />
		</div>
	);
}
