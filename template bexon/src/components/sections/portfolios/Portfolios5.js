import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import PortfolioCard5 from "@/components/shared/cards/PortfolioCard5";
import getPortfolio from "@/libs/getPortfolio";
const Portfolios5 = () => {
	const portfolio = getPortfolio()?.slice(0, 3);
	return (
		<section className="h5-project">
			<div className="tj-scroll-slider  section-gap">
				<div className="container">
					<div className="row">
						<div className="col-12">
							<div className="sec-heading-wrap style-3">
								<span className="sub-title wow fadeInUp" data-wow-delay=".3s">
									<i className="tji-box"></i>Proud Projects
								</span>
								<div className="heading-wrap-content">
									<div className="sec-heading style-3">
										<h2 className="sec-title text-anim">
											Breaking Boundaries, Building Dreams.
										</h2>
									</div>
									<div className="btn-area wow fadeInUp" data-wow-delay=".8s">
										<ButtonPrimary text={"Explore More"} url={"/contact"} />
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="row ">
						<div className="col-12">
							<div className="project-wrapper h5-project-wrapper">
								{portfolio?.length
									? portfolio?.map((portfolioSingle, idx) => (
											<PortfolioCard5 key={idx} portfolio={portfolioSingle} />
									  ))
									: ""}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Portfolios5;
