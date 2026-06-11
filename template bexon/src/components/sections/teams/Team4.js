import TeamCard3 from "@/components/shared/cards/TeamCard3";
import getTeamMembers from "@/libs/getTeamMembers";
import Link from "next/link";

const Team4 = () => {
	const items = getTeamMembers()?.slice(0, 6);
	return (
		<section className="h8-team section-gap section-gap-x">
			<div className="container">
				<div className="row  h8-team-wrapper  gap-0">
					<div className="col-lg-3 col-sm-6 ">
						<div className="sec-heading style-3">
							<span className="sub-title wow fadeInUp" data-wow-delay=".3s">
								MEET OUR TEAM
							</span>
							<h2 className="sec-title title-anim">
								Meet the Mind Behind Our Success.
							</h2>
						</div>
					</div>
					{items?.length
						? items.map((item, idx) => (
								<TeamCard3 key={idx} teamMember={item} idx={idx} />
						  ))
						: ""}

					<div className="col-lg-3 col-sm-6 ">
						<div
							className="h8-team-action wow fadeInRightBig"
							data-wow-delay=".8s"
						>
							<div className="circle-text-wrap">
								<span
									className="circle-text"
									style={{
										backgroundImage:
											"url('/images/icons/more-rounded-text.svg')",
									}}
								></span>
								<Link className="circle-icon" href="/team">
									<i className="tji-arrow-right-long"></i>
								</Link>
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

export default Team4;
