"use client";

import PortfolioCard10 from "@/components/shared/cards/PortfolioCard10";
import getPortfolio from "@/libs/getPortfolio";
import { useEffect, useRef } from "react";

const Portfolios10 = () => {
	const portfolio = getPortfolio()?.slice(0, 4);
	const gridRef = useRef(null);
	const btnGroupRef = useRef(null);

	useEffect(() => {
		let iso = null;
		let imgLoad = null;
		let imagesLoaded = null;
		let Isotope = null;

		// Dynamically import only on the client f
		(async () => {
			const imagesLoadedModule = await import(
				"imagesloaded/imagesloaded.pkgd.min.js"
			);
			const isotopeModule = await import("isotope-layout");
			imagesLoaded = imagesLoadedModule.default;
			Isotope = isotopeModule.default;
			imgLoad = imagesLoaded(gridRef.current, () => {
				iso = new Isotope(gridRef.current, {
					itemSelector: ".portfolio-filter-item",
					percentPosition: true,
					masonry: {
						columnWidth: ".portfolio-sizer",
						gutter: ".gutter-sizer",
					},
				});
			});
		})();

		// Filter button handler
		const btnGroup = btnGroupRef.current;
		const handleBtnClick = e => {
			if (e.target.tagName !== "BUTTON") return;
			const filterValue = e.target.getAttribute("data-filter");

			btnGroup
				.querySelectorAll("button")
				.forEach(btn => btn.classList.remove("active"));
			e.target.classList.add("active");

			iso?.arrange({ filter: filterValue });
		};
		btnGroup.addEventListener("click", handleBtnClick);
		return () => {
			btnGroup.removeEventListener("click", handleBtnClick);
			imgLoad?.off?.("always");
			iso?.destroy();
		};
	}, []);
	return (
		<section className="h10-project section-gap tj-sticky-panel-container">
			<div className="container">
				<div className="row">
					{/* Heading */}
					<div className="col-12">
						<div className="sec-heading style-3 sec-heading-centered">
							<span className="sub-title">
								<i className="tji-box"></i>Latest Projects
							</span>
							<h2 className="sec-title text-anim">
								Breaking Boundaries, Building Dreams.
							</h2>

							{/* Filter Buttons */}
							<div className="portfolio-filter h10-project-filter text-center">
								<div
									className="button-group h10-project-button-group filter-button-group"
									ref={btnGroupRef}
								>
									<button data-filter="*" className="active">
										All
									</button>
									<button data-filter=".success">Success</button>
									<button data-filter=".innovate">Innovate</button>
									<button data-filter=".lead">Lead</button>
									<button data-filter=".impact">Impact</button>
									<div className="active-bg"></div>
								</div>
							</div>
						</div>
					</div>

					{/* Grid */}
					<div className="col-12">
						<div
							className="project-wrapper h7-project-wrapper h10-project-wrapper portfolio-filter-box"
							ref={gridRef}
						>
							<div className="portfolio-sizer"></div>
							<div className="gutter-sizer"></div>

							{/* Your Items */}
							{portfolio?.length
								? portfolio?.map((portfolio, idx) => (
										<PortfolioCard10 key={idx} portfolio={portfolio} />
								  ))
								: ""}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Portfolios10;
