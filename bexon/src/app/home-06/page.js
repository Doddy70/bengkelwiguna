import Footer6 from "@/components/layout/footer/Footer6";
import Header from "@/components/layout/header/Header";
import About5 from "@/components/sections/about/About5";
import Award1 from "@/components/sections/award/Award1";
import Blogs6 from "@/components/sections/blogs/Blogs6";
import Brands3 from "@/components/sections/brands/Brands3";
import Features4 from "@/components/sections/features/Features4";
import Hero6 from "@/components/sections/hero/Hero6";
import TextMarquee from "@/components/sections/marquee/TextMarquee";
import Portfolios6 from "@/components/sections/portfolios/Portfolios6";
import Process3 from "@/components/sections/process/Process3";
import Services6 from "@/components/sections/services/Services6";
import Testimonials6 from "@/components/sections/testimonials/Testimonials6";
import BackToTop from "@/components/shared/others/BackToTop";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";

export default function Home6() {
	return (
		<div>
			<BackToTop />
			<Header headerType={6} />
			<Header headerType={6} isStickyHeader={true} />
			<div id="smooth-wrapper">
				<div id="smooth-content">
					<main>
						<div className="top-space-15"></div>
						<Hero6 />
						<Features4 />
						<About5 />
						<Services6 />
						<Portfolios6 />
						<Process3 />
						<TextMarquee />
						<Award1 />
						<Testimonials6 />
						<Blogs6 />
						<Brands3 type={2} />
					</main>
					<Footer6 />
				</div>
			</div>
			<ClientWrapper />
		</div>
	);
}
