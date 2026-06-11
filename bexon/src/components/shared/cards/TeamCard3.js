import makeWowDelay from "@/libs/makeWowDelay";
import Link from "next/link";

const TeamCard3 = ({ teamMember, idx }) => {
	const {
		id,
		name,
		desig,
		img = "/images/team/team-1.webp",
	} = teamMember || {};
	return (
		<div className="col-lg-3 col-sm-6  h8-team-item-wrapper">
			<div
				className="team-item wow fadeInRightBig"
				data-wow-delay={makeWowDelay(idx, 0.2, 2)}
			>
				<div className="team-img">
					<div className="team-img-inner">
						<img src={img} alt="" />
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
				</div>
				<div className="team-content">
					<h5 className="title">
						<Link href={`/team/${id}`}>{name}</Link>
					</h5>
					<span className="designation">{desig}</span>
				</div>
			</div>
		</div>
	);
};

export default TeamCard3;
