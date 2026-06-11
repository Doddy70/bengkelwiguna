"use client";

import PaketDetailsPrimary from "@/components/sections/shop/PaketDetailsPrimary";

const PaketDetailsMain = ({ paket, setCurrentTitle }) => {
	return (
		<div>
			<PaketDetailsPrimary
				setCurrentTitle={setCurrentTitle}
				paket={paket}
			/>
		</div>
	);
};

export default PaketDetailsMain;
