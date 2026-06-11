import Link from "next/link";

const TeamCard4 = ({ teamMember, idx }) => {
	const {
		id,
		name,
		desig,
		img = "/images/team/team-1.webp",
	} = teamMember || {};
	return (
		<div className="team-item wow fadeInUp" data-wow-delay=".3s">
			<div className="team-content">
				<h3 className="title">
					<Link href={`/team/${id}`}>{name}</Link>
				</h3>
				<span className="designation">{desig}</span>
			</div>
			<div className="team-img">
				<img src={img} alt="Images" />
			</div>
			<Link className="text-btn" href={`/team/${id}`}>
				<span className="btn-text">
					<span>Know More</span>
				</span>
				<span className="btn-icon">
					<i className="tji-arrow-right-long"></i>
				</span>
			</Link>
		</div>
	);
};

export default TeamCard4;
