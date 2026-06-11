"use client";

import sliceText from "@/libs/sliceText";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const HeroInner = ({ title, text, breadcrums = [], settings: propSettings }) => {
	const [settings, setSettings] = useState(propSettings || null);

	useEffect(() => {
		if (!propSettings) {
			fetch('/api/homepage-settings')
				.then(res => res.json())
				.then(data => setSettings(data))
				.catch(err => console.error("Error fetching hero settings:", err));
		}
	}, [propSettings]);

	const heroTheme = settings?.hero?.theme || {};

	// Provide defaults if the user hasn't set anything
	const customTitle = heroTheme.title || title;
	
	// Prepare inline styles if configured
	const sectionStyle = {};
	if (heroTheme.bgImage) {
		sectionStyle.backgroundImage = `url(${heroTheme.bgImage})`;
		sectionStyle.backgroundSize = "cover";
		sectionStyle.backgroundPosition = "center";
	}

	const overlayStyle = {};
	if (heroTheme.overlayOpacity !== undefined && heroTheme.overlayOpacity !== "") {
		overlayStyle.backgroundColor = `rgba(0, 0, 0, ${heroTheme.overlayOpacity})`;
	}

	return (
		<section className="tj-page-header" style={sectionStyle}>
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<div className="tj-page-header-content text-center">
							<h1 className="tj-page-title">{customTitle}</h1>
							<div className="tj-page-link">
								<span>
									<i className="tji-home"></i>
								</span>
								<span>
									<Link href="/">Home</Link>
								</span>
								<span>
									<i className="tji-arrow-right"></i>
								</span>
								{breadcrums?.length
									? breadcrums?.map(({ name, path }, idx) => (
											<React.Fragment key={idx}>
												<span>
													<Link href={path ? path : "/"}>{name}</Link>
												</span>
												<span>
													<i className="tji-arrow-right"></i>
												</span>
											</React.Fragment>
									  ))
									: ""}
								<span>
									<span className="current-page">{sliceText(text, 28, true)}</span>
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* Overlay handled by SCSS or inline style */}
			<div className="page-header-overlay" style={overlayStyle}></div>
		</section>
	);
};

export default HeroInner;
