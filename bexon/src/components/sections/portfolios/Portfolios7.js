import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import PortfolioCard7 from "@/components/shared/cards/PortfolioCard7";
import getPortfolio from "@/libs/getPortfolio";
const Portfolios7 = () => {
	const portfolio = getPortfolio()?.slice(0, 3);

	return (
		<section className="h7-project section-gap tj-sticky-panel-container">
			<div className="container">
				<div className="row">
					<div className="col-12 col-lg-4 ">
						<div className="sec-heading style-2 style-7 tj-sticky-panel">
							<span className="sub-title wow fadeInUp" data-wow-delay=".3s">
								<i className="tji-box"></i> Proud Projects
							</span>
							<h2 className="sec-title text-anim">
								Driving Success Through Our Projects.
							</h2>
							<div className=" wow fadeInUp" data-wow-delay=".3s">
								<ButtonPrimary text={"Explore More"} url={"/portfolios"} />
							</div>
						</div>
					</div>
					<div className="col-12 col-lg-8 ">
						<div className="project-wrapper h7-project-wrapper">
							{portfolio?.length
								? portfolio?.map((portfolioSingle, idx) => (
										<PortfolioCard7
											key={idx}
											portfolio={portfolioSingle}
											idx={idx}
										/>
								  ))
								: ""}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Portfolios7;
