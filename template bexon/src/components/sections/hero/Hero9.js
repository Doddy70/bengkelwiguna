import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import Link from "next/link";

const Hero9 = () => {
	return (
		<section className="h9-hero">
			<div className="h9-hero-inner">
				<div
					className="h9-hero-bg-image"
					style={{ backgroundImage: "url('/images/hero/h9-hero-bg.webp')" }}
				></div>
				<div className="h9-hero-item-wrapper">
					<div className="h9-hero-content">
						<h1 className="h9-hero-title text-anim">
							Empower{" "}
							<span className="wow fadeInLeft" data-wow-delay="0.3s"></span>{" "}
							Your Business.
						</h1>
						<div className="h9-hero-desc-area">
							<h4 className="title wow fadeInUp" data-wow-delay="0.5s">
								Solutions That Scale.
							</h4>
							<div className="desc-inner wow fadeInUp" data-wow-delay="0.7s">
								<p className="desc">
									Recognized by the industry leaders, of our award-winning team
									has are <Link href="/portfolios">Proven record</Link> of
									delivering excellence across an projects. Recognized by the
									industry leaders, of our award.
								</p>
								<ButtonPrimary text={"Get Started"} url={"/contact"} />
							</div>
						</div>
						<div className="h9-hero-social wow fadeInUp" data-wow-delay="0.9s">
							<div className="social-links style-3">
								<ul>
									<li>
										<Link href="https://www.facebook.com/" target="_blank">
											<i className="fa-brands fa-facebook-f"></i>
										</Link>
									</li>
									<li>
										<Link href="https://www.instagram.com/" target="_blank">
											<i className="fa-brands fa-instagram"></i>
										</Link>
									</li>
									<li>
										<Link href="https://x.com/" target="_blank">
											<i className="fa-brands fa-x-twitter"></i>
										</Link>
									</li>
									<li>
										<Link href="https://www.linkedin.com/" target="_blank">
											<i className="fa-brands fa-linkedin-in"></i>
										</Link>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div
						className="h9-hero-img  img-parallax wow fadeInUp"
						data-wow-delay="0.9s"
					>
						<img src="/images/hero/h9-hero-img.webp" alt="" />
					</div>
				</div>
			</div>
			<div
				className="h7-hero-shape h9-hero-shape-1 wow fadeInUpBig"
				data-wow-delay="1s"
			>
				<img
					className="tj-anim-move-var-big"
					src="/images/shape/h7-hero-blur-1.png"
					alt=""
				/>
			</div>
			<div
				className="h7-hero-shape h9-hero-shape-2 wow fadeInDownBig"
				data-wow-delay="1.2s"
			>
				<img
					className="tj-anim-move-var-big-reverse"
					src="/images/shape/h7-hero-blur-2.png"
					alt=""
				/>
			</div>
		</section>
	);
};

export default Hero9;
