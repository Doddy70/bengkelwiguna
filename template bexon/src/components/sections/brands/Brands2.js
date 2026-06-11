import BrandSlider1 from "@/components/shared/brands/BrandSlider1";

const Brands2 = () => {
	return (
		<section className="tj-client-section section-top-gap">
			<div className="container-fluid client-container">
				<div className="row">
					<div className="col-12">
						<div
							className="client-content style-2 wow fadeIn"
							data-wow-delay=".3s"
						>
							<h5 className="sec-title">
								Join Over <span className="client-numbers">1000+</span>{" "}
								Companies with
								<span className="client-text">Bexon</span> Here
							</h5>
						</div>
						<BrandSlider1 />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Brands2;
