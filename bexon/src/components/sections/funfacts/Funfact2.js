import FunfactSingle from "@/components/shared/funfact/FunfactSingle";
import ProgressBar from "@/components/shared/progress/ProgressBar";
const Funfact2 = () => {
	return (
		<section className="tj-funfact-section section-gap section-gap-x">
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<div className="heading-wrap-content">
							<div className="sec-heading style-4">
								<span className="sub-title wow fadeInUp" data-wow-delay=".3s">
									<i className="tji-box"></i>OUR FUN FACT
								</span>
								<h2 className="sec-title title-anim">
									Numbers and facts that define performance.
								</h2>
							</div>
							<div className="progress-item">
								<div className="progress-circle">
									<ProgressBar />
								</div>
								<div className="progress-text">
									<span className="sub-title">
										Increased revenue in the last 6 months.
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="row row-gap-4">
					<div className="col-lg-4 col-md-6">
						<div
							className="countup-item style-2 wow fadeInUp"
							data-wow-delay=".7s"
						>
							<span className="count-icon">
								<i className="tji-growth"></i>
							</span>
							<span className="steps">01.</span>
							<div className="count-inner">
								<span className="count-text">Faster Growth</span>
								<FunfactSingle currentValue={8.5} symbol={"X"} />
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6">
						<div
							className="countup-item style-2 wow fadeInUp"
							data-wow-delay=".5s"
						>
							<span className="count-icon">
								<i className="tji-worldwide"></i>
							</span>
							<span className="steps">02.</span>
							<div className="count-inner">
								<span className="count-text">Reach Worldwide</span>
								<FunfactSingle currentValue={20} symbol={"M"} />
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6">
						<div
							className="countup-item style-2 wow fadeInUp"
							data-wow-delay=".1s"
						>
							<span className="count-icon">
								<i className="tji-complete"></i>
							</span>
							<span className="steps">03.</span>
							<div className="count-inner">
								<span className="count-text">Projects Completed.</span>
								<FunfactSingle currentValue={93} symbol={"%"} />
							</div>
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
		</section>
	);
};

export default Funfact2;
