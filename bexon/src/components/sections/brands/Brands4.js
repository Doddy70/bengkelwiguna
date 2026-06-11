import BrandSlider3 from "@/components/shared/brands/BrandSlider3";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import FunfactSingle from "@/components/shared/funfact/FunfactSingle";

const Brands4 = () => {
	return (
		<section className="h5-about section-gap section-gap-x">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="about-content-area style-3 h5-about-content">
							<div className="sec-heading style-3">
								<div className="subtitle-text">
									<span className="sub-title wow fadeInUp" data-wow-delay=".3s">
										<i className="tji-box"></i>Our PARTNERSHIP
									</span>
									<FunfactSingle type={3} currentValue={30} symbol={"+"} />
								</div>
								<div className="h5-about-content-right">
									<div className="h5-sec-title-wrapper">
										<h2 className="sec-title title-highlight">
											Powering Innovation Through Partnerships with Brands and
											Many Companies.
										</h2>
										<div
											className="about-btn-area-2 wow fadeInUp"
											data-wow-delay="1s"
										>
											<ButtonPrimary text={"More Partners"} url={"/about"} />
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<BrandSlider3 />
			<div className="bg-shape-1">
				<img src="/images/shape/pattern-2.svg" alt="" />
			</div>
			<div className="bg-shape-2">
				<img src="/images/shape/pattern-3.svg" alt="" />
			</div>
			<div className="bg-shape-3">
				<img src="/images/shape/shape-blur.svg" alt="" />
			</div>
		</section>
	);
};

export default Brands4;
