import BrandSlider1 from "@/components/shared/brands/BrandSlider1";

const Brands1 = ({ type = 1 }) => {
	return (
		<section
			className={`tj-client-section ${
				type === 2 ? "client-section-gap-2" : "client-section-gap"
			} wow fadeInUp`}
			data-wow-delay=".4s"
		>
			<div className="container-fluid client-container">
				<div className="row">
					<div className="col-12">
						<div className="client-content">
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

export default Brands1;
