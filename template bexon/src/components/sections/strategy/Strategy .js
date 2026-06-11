import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import FunfactSingle from "@/components/shared/funfact/FunfactSingle";
import Link from "next/link";

const Strategy = () => {
	return (
		<section className="h5-strategy section-gap ">
			<div className="container gap-30-30">
				<div className="row ">
					<div className="col-12">
						<div className="sec-heading style-3 h5-strategy-heading">
							<span className="sub-title wow fadeInUp" data-wow-delay=".3s">
								<i className="tji-box"></i>Choose the Best
							</span>
							<h2 className="sec-title text-anim ">
								Committed Delivering Measurable Results and Building from the
								Lasting Relationships through out trust and innovation and
								corporate shared
							</h2>
							<ButtonPrimary text={"Learn More"} url={"/about"} />
						</div>
					</div>
					<div className="col-12 col-md-6 col-lg-4">
						<div
							className="h5-strategy-item h5-strategy-item-1 wow fadeInUp"
							data-wow-delay=".3s"
						>
							<h4 className="h5-strategy-title">
								Rebranding Strategy for a Growing
							</h4>
							<div className="h5-strategy-avatar">
								<img src="/images/strategy/strategy-avatar.webp" alt="" />
							</div>
							<div className="h5-strategy-counter">
								<div className="count-inner h5-strategy-counter-inner">
									<FunfactSingle currentValue={200} />
									<span className="count-text">
										Satisfied customers work with our Bexon.
									</span>
								</div>
							</div>
						</div>
					</div>
					<div className="col-12 col-md-6 col-lg-4">
						<div
							className="h5-strategy-item h5-strategy-item-2 wow fadeInUp"
							data-wow-delay=".4s"
						>
							<h4 className="h5-strategy-title">
								Rebranding Strategy for a Growing
							</h4>
							<div className="h5-strategy-chart">
								<img src="/images/strategy/strategy-chart.webp" alt="" />
							</div>
						</div>
					</div>
					<div className="col-12 col-lg-4">
						<div
							className="h5-strategy-item h5-strategy-item-3 wow fadeInUp"
							data-wow-delay=".5s"
						>
							<h4 className="h5-strategy-title">
								Rebranding Strategy for a Growing
							</h4>
							<p className="h5-strategy-desc">
								Our team are always available to addressed our concerns,
								providing quick solution.
							</p>
							<div className="h5-strategy-tag-wrapper">
								<Link className="h5-strategy-tag" href="#">
									Growth
								</Link>
								<Link className="h5-strategy-tag" href="#">
									Success
								</Link>
								<Link className="h5-strategy-tag" href="#">
									Innovate
								</Link>
								<Link className="h5-strategy-tag" href="#">
									Lead
								</Link>
								<Link className="h5-strategy-tag" href="#">
									Impact
								</Link>
								<Link className="h5-strategy-tag" href="#">
									Focus
								</Link>
								<Link className="h5-strategy-tag" href="#">
									Tech
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Strategy;
