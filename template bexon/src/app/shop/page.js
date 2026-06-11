import Footer from "@/components/layout/footer/Footer";
import Header from "@/components/layout/header/Header";
import ShopMain from "@/components/layout/main/ShopMain";
import Cta from "@/components/sections/cta/Cta";
import BackToTop from "@/components/shared/others/BackToTop";
import HeaderSpace from "@/components/shared/others/HeaderSpace";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";
import CartContextProvider from "@/context_api/CartContext";
import WishlistContextProvider from "@/context_api/WshlistContext";

export default function Shop() {
	return (
		<div className="ecommerce">
			<BackToTop />
			<Header />
			<Header isStickyHeader={true} />
			<div id="smooth-wrapper">
				<div id="smooth-content">
					<main>
						<HeaderSpace />
						<CartContextProvider>
							<WishlistContextProvider>
								<ShopMain />
							</WishlistContextProvider>
						</CartContextProvider>
						<Cta />
					</main>
					<Footer />
				</div>
			</div>
			<ClientWrapper />
		</div>
	);
}
