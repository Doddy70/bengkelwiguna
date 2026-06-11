import TeamCard4 from "@/components/shared/cards/TeamCard4";
import getTeamMembers from "@/libs/getTeamMembers";

const Team5 = () => {
	const items = getTeamMembers()?.slice(0, 4);
	return (
		<section className="tj-team-section-2 section-gap">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="sec-heading style-8 sec-heading-centered">
							<span className="sub-title wow fadeInUp" data-wow-delay=".3s">
								Meet Our Team
							</span>
							<h2 className="sec-title title-anim">
								Empowering Business with Expertise.
							</h2>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-12">
						<div className="h9-team-wrapper">
							<div className="h9-team-item-wrap">
								{items?.length
									? items.map((item, idx) => (
											<TeamCard4 key={idx} teamMember={item} idx={idx} />
									  ))
									: ""}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Team5;
