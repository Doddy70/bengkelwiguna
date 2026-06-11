"use client";

import MarqueeSlider2 from "@/components/shared/marquee/MarqueeSlider2";

const FeatureMarquee = () => {
	return (
		<section className="h5-maquee z-2">
			<div className="h5-maquee-inner">
				<MarqueeSlider2 />
			</div>
			<div dir="rtl" className="h5-maquee-inner h5-maquee-inner-rtl">
				<MarqueeSlider2 isRtl={true} />
			</div>
		</section>
	);
};

export default FeatureMarquee;
