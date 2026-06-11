"use client";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import PortfolioCard6 from "@/components/shared/cards/PortfolioCard6";
import getPortfolio from "@/libs/getPortfolio";
import { useCallback, useState } from "react";
const Portfolios6 = () => {
	const portfolio = getPortfolio()?.slice(0, 6);
	const [currentIndex, setCurrentIndex] = useState(2);
	const handleCurrentIndex = useCallback(idx => {
		setCurrentIndex(idx);
	}, []);

	return (
		<section className="h6-project section-gap section-gap-x">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="heading-wrap-content">
							<div className="sec-heading style-2 style-6">
								<span className="sub-title wow fadeInUp" data-wow-delay=".3s">
									<i className="tji-box"></i>Proud Projects
								</span>
								<h2 className="sec-title title-anim">
									Breaking Boundaries, Building Dreams.
								</h2>
							</div>
							<div className="btn-area wow fadeInUp" data-wow-delay=".8s">
								<ButtonPrimary text={"More Projects"} url={"/portfolios"} />
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="container-fluid">
				<div className="row">
					<div className="col-12">
						<div
							className="h6-project-inner wow fadeInUp"
							data-wow-delay="0.6s"
						>
							{portfolio?.length
								? portfolio?.map((portfolioSingle, idx) => (
										<PortfolioCard6
											key={idx}
											portfolio={portfolioSingle}
											idx={idx}
											currentIndex={currentIndex}
											handleCurrentIndex={handleCurrentIndex}
										/>
								  ))
								: ""}
						</div>
					</div>
				</div>
			</div>
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

export default Portfolios6;
