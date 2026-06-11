"use client";

import Image from "next/image";
import Link from "next/link";

const Logo = ({ headerType, isStickyHeader }) => {
	const logoSrc = "/images/logos/logo-panjang-bengkelwiguna.png";

	return (
		<div className="site_logo">
			<Link className="logo" href="/">
				<Image
					src={logoSrc}
					alt="Bengkel Wiguna"
					width={400}
					height={80}
					style={{ height: "auto", maxWidth: "250px", objectFit: "contain" }}
					priority
				/>
			</Link>
		</div>
	);
};

export default Logo;