import Footer from "@/components/layout/footer/Footer";
import Header from "@/components/layout/header/Header";
import Cta from "@/components/sections/cta/Cta";
import HeroInner from "@/components/sections/hero/HeroInner";

import WishlistPrimary from "@/components/sections/wishlist/WishlistPrimary";
import BackToTop from "@/components/shared/others/BackToTop";
import HeaderSpace from "@/components/shared/others/HeaderSpace";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";
import CartContextProvider from "@/context_api/CartContext";
import WishlistContextProvider from "@/context_api/WshlistContext";
export default function Wishlist() {
	return (
		<div className="ecommerce">
			<BackToTop />
			<Header />
			<Header isStickyHeader={true} />
			<div id="smooth-wrapper">
				<div id="smooth-content">
					<main>
						<HeaderSpace />
						<HeroInner title={"Wishlist"} text={"Wishlist"} />
						<CartContextProvider>
							<WishlistContextProvider>
								<WishlistPrimary />
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
