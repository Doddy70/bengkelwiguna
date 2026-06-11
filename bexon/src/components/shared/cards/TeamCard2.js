import Link from "next/link";

const TeamCard2 = ({ teamMember, activeMember, handleMouseEnter }) => {
	const {
		id,
		name,
		desig,
		imgLarge = "/images/team/team-1-big.webp",
	} = teamMember || {};
	return (
		<div
			className={`team-item ${
				id === activeMember?.id ? "active" : ""
			} wow fadeInUp`}
			data-wow-delay=".3s"
			onMouseEnter={() => handleMouseEnter(teamMember)}
		>
			<div className="team-item-inner">
				<div className="team-content">
					<h3 className="title">
						{" "}
						<Link href={`/team/${id}`}>{name}</Link>
					</h3>
					<span className="designation">{desig}</span>
				</div>
				<div className="social-links">
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
				<Link className="team-link" href={`/team/${id}`}>
					<i className="tji-arrow-right-long"></i>
				</Link>
			</div>
			<div className="team-img-wrap">
				<div className="team-img">
					<img src={imgLarge} alt="Images" />
				</div>
			</div>
		</div>
	);
};

export default TeamCard2;
