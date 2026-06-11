"use client";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import TeamCard2 from "@/components/shared/cards/TeamCard2";
import getTeamMembers from "@/libs/getTeamMembers";
import { useCallback, useEffect, useRef, useState } from "react";

const Team2 = () => {
	const items = getTeamMembers()?.slice(0, 4);
	const [activeMember, setActiveMember] = useState(items[0]);
	const [fade, setFade] = useState(true);
	const [fade2, setFade2] = useState(true);
	const timeout1 = useRef(null);
	const timeout2 = useRef(null);
	const timeout3 = useRef(null);
	const handleMouseEnter = useCallback(member => {
		setActiveMember(member);
		setFade(false);
		setFade2(false);
		timeout1.current = setTimeout(() => {
			setFade(true);
			setFade2(true);
			timeout2.current = setTimeout(() => {
				setFade2(false);
				timeout3.current = setTimeout(() => {
					setFade2(true);
				}, 300);
			}, 300);
		}, 300);
	});

	useEffect(() => {
		return () => {
			clearTimeout(timeout1.current);
			clearTimeout(timeout2.current);
			clearTimeout(timeout3.current);
		};
	}, []);
	return (
		<section className="tj-team-section-2 section-gap">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="sec-heading-wrap">
							<span className="sub-title wow fadeInUp" data-wow-delay=".3s">
								<i className="tji-box"></i>Meet Our Team
							</span>
							<div className="heading-wrap-content">
								<div className="sec-heading style-3">
									<h2 className="sec-title title-anim">People Behind Bexon.</h2>
								</div>
								<div className="btn-wrap wow fadeInUp" data-wow-delay=".5s">
									<ButtonPrimary text="More Members" url="/team" />
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-12">
						<div className="team-wrapper">
							<div className="team-img-wrap wow fadeInUp" data-wow-delay=".5s">
								<div
									id="team-img"
									className="team-img"
									style={{
										transition: "all .3s ease-in-out",
										opacity: fade ? 1 : 0.3,
									}}
								>
									<img
										key={activeMember.imgLarge} // forces fade on change
										src={activeMember.imgLarge}
										alt={activeMember.name}
										style={{
											transform: `scale(${fade2 ? 1 : 1.1})`,
										}}
									/>
								</div>
							</div>
							<div className="team-item-wrap">
								{items?.length
									? items.map((item, idx) => (
											<TeamCard2
												key={idx}
												teamMember={item}
												activeMember={activeMember}
												handleMouseEnter={handleMouseEnter}
											/>
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

export default Team2;
