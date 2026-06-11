"use client";
import { useCommonContext } from "@/context_api/CommonContext";
import RangeSlider from "react-range-slider-input";
const PriceReangeWidget = () => {
	const { range, setRange, handleRangeFilter } = useCommonContext();
	const min = 0;
	const max = 600;
	return (
		<div id="_price_filter-2" className="product-widget widget_price_filter">
			<h5 className="product-widget-title">Filter by price</h5>
			<form>
				<div className="price_slider_wrapper">
					<div className="price_slider" id="slider-range">
						<RangeSlider
							min={min}
							max={max}
							value={range}
							onInput={val => setRange(val)}
						/>
					</div>
					{/*  */}
					{/* <!-- Added ID --> */}
					<div className="price_slider_amount">
						<button
							type="button"
							className="button"
							onClick={handleRangeFilter}
						>
							Apply
						</button>
						<div className="price_label">
							<span className="from">
								$<span id="price-from">{range[0]}</span>
							</span>{" "}
							&mdash;
							<span className="to">
								$<span id="price-to">{range[1]}</span>
							</span>
						</div>
						<div className="clear"></div>
					</div>
				</div>
			</form>
		</div>
	);
};

export default PriceReangeWidget;
