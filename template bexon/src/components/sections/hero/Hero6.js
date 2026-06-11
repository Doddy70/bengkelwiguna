import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import HeroCardSlider from "@/components/shared/hero/HeroCardSlider";
import Image from "next/image";

const Hero6 = () => {
	return (
		<section className="tj-banner-section h6-hero section-gap-x">
			<div className="banner-area">
				<div className="banner-left-box">
					<div className="banner-content">
						<h1 className="banner-title title-anim">
							Innovative Solutions for a Brighter Future of Business.
						</h1>
						<div className="btn-area wow fadeInUp" data-wow-delay=".8s">
							<ButtonPrimary text={"Get Started"} url={"/contact"} />
						</div>
						<div className="h6-hero-bottom wow fadeInLeft" data-wow-delay=".9s">
							<div className="h6-hero-history">
								<h4 className="h6-hero-history-title">Since 2008</h4>
								<p className="h6-hero-history-desc">
									Recognized by industry leaders, of our award-winning team has
									a proven record of delivering excellence across projects.
								</p>
							</div>
							<div
								className="h6-hero-card-wrapper wow fadeInRight"
								data-wow-delay="1s"
							>
								<HeroCardSlider />
							</div>
						</div>
						<div className="bg-shape-2">
							<img src="/images/shape/pattern-3.svg" alt="" />
						</div>
					</div>
				</div>
				<div className="banner-right-box">
					<div className="banner-img wow fadeInUp" data-wow-delay=".3s">
						<Image
							width={938}
							height={883}
							data-speed=".8"
							src="/images/hero/h6-hero-banner.webp"
							alt="hero-banner"
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero6;
