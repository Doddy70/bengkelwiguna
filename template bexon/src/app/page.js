import Footer from "@/components/layout/footer/Footer";
import Header from "@/components/layout/header/Header";
import About1 from "@/components/sections/about/About1";
import Blogs1 from "@/components/sections/blogs/Blogs1";
import Brands1 from "@/components/sections/brands/Brands1";
import Contact2 from "@/components/sections/contacts/Contact2";
import Cta from "@/components/sections/cta/Cta";
import Faq2 from "@/components/sections/faq/Faq2";
import Features from "@/components/sections/features/Features";
import Funfact1 from "@/components/sections/funfacts/Funfact1";
import Hero from "@/components/sections/hero/Hero";
import Portfolios1 from "@/components/sections/portfolios/Portfolios1";
import Services1 from "@/components/sections/services/Services1";
import Testimonials1 from "@/components/sections/testimonials/Testimonials1";
import BackToTop from "@/components/shared/others/BackToTop";
import HeaderSpace from "@/components/shared/others/HeaderSpace";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";

export default function Home() {
	return (
		<div>
			<BackToTop />
			<Header />
			<Header isStickyHeader={true} />
			<div id="smooth-wrapper">
				<div id="smooth-content">
					<main>
						<HeaderSpace />
						<Hero />
						<Features />
						<Brands1 />
						<About1 />
						<Services1 />
						<Portfolios1 />
						<Funfact1 />
						<Testimonials1 />
						<Faq2 type={1} />
						<Contact2 />
						<Blogs1 />
						<Cta />
					</main>
					<Footer />
				</div>
			</div>

			<ClientWrapper />
		</div>
	);
}
