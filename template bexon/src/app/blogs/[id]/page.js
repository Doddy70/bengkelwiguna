import Footer from "@/components/layout/footer/Footer";
import Header from "@/components/layout/header/Header";
import BlogDetailsMain from "@/components/layout/main/BlogDetailsMain";
import Cta from "@/components/sections/cta/Cta";
import BackToTop from "@/components/shared/others/BackToTop";
import HeaderSpace from "@/components/shared/others/HeaderSpace";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";
import getBlogs from "@/libs/getBlogs";
import { notFound } from "next/navigation";
const items = getBlogs();

export default async function BlogDetails({ params }) {
	const { id } = await params;
	const isExistItem = items?.find(({ id: id1 }) => id1 === parseInt(id));
	if (!isExistItem) {
		notFound();
	}
	return (
		<div>
			<BackToTop />
			<Header />
			<Header isStickyHeader={true} />
			<div id="smooth-wrapper">
				<div id="smooth-content">
					<main>
						<HeaderSpace />
						<BlogDetailsMain currentItemId={parseInt(id)} />
						<Cta />
					</main>
					<Footer />
				</div>
			</div>
			<ClientWrapper />
		</div>
	);
}

export async function generateStaticParams() {
	return items?.map(({ id }) => ({ id: id.toString() }));
}
