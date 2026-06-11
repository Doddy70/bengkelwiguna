import Footer7 from "@/components/layout/footer/Footer7";
import Header from "@/components/layout/header/Header";
import About6 from "@/components/sections/about/About6";
import Blogs7 from "@/components/sections/blogs/Blogs7";
import Cta2 from "@/components/sections/cta/Cta2";
import Faq4 from "@/components/sections/faq/Faq4";
import Features5 from "@/components/sections/features/Features5";
import Hero7 from "@/components/sections/hero/Hero7";
import TextMarquee from "@/components/sections/marquee/TextMarquee";
import Portfolios7 from "@/components/sections/portfolios/Portfolios7";
import Services7 from "@/components/sections/services/Services7";
import Team3 from "@/components/sections/teams/Team3";
import Testimonials7 from "@/components/sections/testimonials/Testimonials7";
import BackToTop from "@/components/shared/others/BackToTop";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";

export default function Home7() {
	return (
		<div>
			<BackToTop />
			<Header headerType={7} />
			<Header headerType={7} isStickyHeader={true} />
			<div id="smooth-wrapper">
				<div id="smooth-content">
					<main>
						<div className="top-space-15"></div>
						<Hero7 />
						<Features5 />
						<TextMarquee />
						<About6 />
						<Services7 />
						<Testimonials7 />
						<Portfolios7 />
						<Team3 />
						<Faq4 />
						<Blogs7 />
						<Cta2 />
					</main>
					<Footer7 />
				</div>
			</div>
			<ClientWrapper />
		</div>
	);
}
