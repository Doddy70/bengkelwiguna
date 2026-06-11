import Footer from "@/components/layout/footer/Footer";
import Header from "@/components/layout/header/Header";
import BlogMain from "@/components/layout/main/BlogMain";
import HeroInner from "@/components/sections/hero/HeroInner";
import Cta from "@/components/sections/cta/Cta";
import BackToTop from "@/components/shared/others/BackToTop";
import HeaderSpace from "@/components/shared/others/HeaderSpace";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";
import makeText from "@/libs/makeText";

export default async function Blogs({ searchParams }) {
	const { category, tag, author_role, search } = await searchParams;
	
	const title = category
		? `Category: ${makeText(category, true)}`
		: tag
		? `Tag: ${makeText(tag, true)}`
		: author_role
		? author_role
		: search
		? makeText(search, true)
		: "Read Blog";

	const text = category
		? `${makeText(category, true)}`
		: tag
		? ` ${makeText(tag, true)}`
		: author_role
		? `${author_role}`
		: search
		? `${makeText(search, true)}`
		: "Blogs";

	return (
		<div>
			<BackToTop />
			<Header headerType={5} isStickyHeader={true} />
			<div id="smooth-wrapper">
				<div id="smooth-content">
					<main>
						<HeaderSpace />
						<HeroInner
							title={title}
							text={text}
							breadcrums={
								category || tag || author_role || search
									? [{ name: "Blogs", path: "/blogs" }]
									: []
							}
						/>
						<BlogMain />
						<Cta />
					</main>
					<Footer />
				</div>
			</div>
			<ClientWrapper />
		</div>
	);
}
