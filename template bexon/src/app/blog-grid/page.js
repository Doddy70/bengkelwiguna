import Footer from "@/components/layout/footer/Footer";
import Header from "@/components/layout/header/Header";
import BlogsGridPrimary from "@/components/sections/blogs/BlogsGridPrimary";
import Cta from "@/components/sections/cta/Cta";
import HeroInner from "@/components/sections/hero/HeroInner";
import BackToTop from "@/components/shared/others/BackToTop";
import HeaderSpace from "@/components/shared/others/HeaderSpace";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";
export default function BlogRightSidebar() {
	return (
		<div>
			<BackToTop />
			<Header />
			<Header isStickyHeader={true} />
			<div id="smooth-wrapper">
				<div id="smooth-content">
					<main>
						<HeaderSpace /> <HeroInner title={"Blog grid"} text={"Blog grid"} />
						<BlogsGridPrimary />
						<Cta />
					</main>
					<Footer />
				</div>
			</div>
			<ClientWrapper />
		</div>
	);
}
