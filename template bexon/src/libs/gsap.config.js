import { useGSAP } from "@gsap/react";
import gsap from "gsap/dist/gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
gsap.registerPlugin(
	ScrollTrigger,
	ScrollSmoother,
	SplitText,
	ScrollToPlugin,
	useGSAP
);

export { gsap, ScrollSmoother, ScrollTrigger, SplitText, useGSAP };
