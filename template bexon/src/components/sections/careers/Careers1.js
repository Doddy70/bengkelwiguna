"use client";
import CareerCard from "@/components/shared/cards/CareerCard";
import Paginations from "@/components/shared/others/Paginations";
import usePagination from "@/hooks/usePagination";
import getCareers from "@/libs/getCareers";

const Careers1 = () => {
	const items = getCareers();
	const limit = 6;
	// get pagination details
	const {
		currentItems,
		currentpage,
		setCurrentpage,
		paginationItems,
		currentPaginationItems,
		totalPages,
		handleCurrentPage,
		firstItem,
		lastItem,
	} = usePagination(items, limit);
	const totalPortfolios = items?.length;
	const totalPortfoliosToShow = currentItems?.length;
	return (
		<section className="tj-careers-section section-gap">
			<div className="container">
				<div className="row rg-30">
					{currentItems?.length
						? currentItems?.map((careerSingle, idx) => (
								<div className="col-xl-4 col-md-6" key={idx}>
									<CareerCard key={idx} careerSingle={careerSingle} idx={idx} />
								</div>
						  ))
						: ""}
				</div>
				{/* <!-- post pagination --> */}
				{totalPortfoliosToShow < totalPortfolios ? (
					<Paginations
						paginationDetails={{
							currentItems,
							currentpage,
							setCurrentpage,
							paginationItems,
							currentPaginationItems,
							totalPages,
							handleCurrentPage,
							firstItem,
							lastItem,
						}}
					/>
				) : (
					""
				)}
			</div>
		</section>
	);
};

export default Careers1;
